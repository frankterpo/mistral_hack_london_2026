from __future__ import annotations

from copy import deepcopy
from dataclasses import dataclass
from datetime import UTC, datetime
from random import Random
from uuid import uuid4

from startup_sim.config.settings import get_settings
from startup_sim.integrations.hugging_face.space_client import get_hugging_face_space_client
from startup_sim.schemas.simulation import (
    CurrentSnapshot,
    ReplayMetrics,
    ReplayTick,
    SessionCreateRequest,
    SimulationCompany,
    SimulationInteraction,
    SimulationState,
)

SECTORS = {
    "gaming": ["IsoArcade", "Coaster Forge", "Pixel Harbor", "Ghost Map"],
    "b2b_saas": ["LedgerLoop", "SignalOps", "StackCurrent", "Quota Dock"],
    "ai_devtools": ["PromptKit", "Inference Loop", "Agent Harbor", "Mistral Swarm Corp"],
    "fintech": ["FlowMint", "Delta Ledger", "Yield Current", "Vault Side"],
    "creator_tools": ["Scene Spark", "Edit Bloom", "Creator Harbor", "Signal Canvas"],
}

FOUNDERS = [
    ("founder-alice", "Alice Swarm"),
    ("founder-mateo", "Mateo Finch"),
    ("founder-zoe", "Zoe Pattern"),
    ("founder-jules", "Jules Meridian"),
]

EVENT_TYPES = (
    "product_launch",
    "investor_negotiation",
    "hiring_push",
    "cost_reduction",
    "market_research",
    "partnership_outreach",
)


class SessionNotFoundError(KeyError):
    """Raised when a session is missing."""


@dataclass
class SessionRecord:
    request: SessionCreateRequest
    state: SimulationState
    full_replay: list[ReplayTick]


class SessionService:
    def __init__(self) -> None:
        self._sessions: dict[str, SessionRecord] = {}
        self._default_session_id: str | None = None

    def ensure_default_session(self) -> str:
        if self._default_session_id and self._default_session_id in self._sessions:
            return self._default_session_id

        settings = get_settings()
        request = SessionCreateRequest(
            seed=settings.default_seed,
            deterministic_mode=True,
            company_count=settings.default_company_count,
            tick_count=settings.default_tick_count,
            starting_cash=settings.default_starting_cash,
            model_provider="mistral" if settings.provider_status["mistral"] else "fixtures",
            knowledge_provider="cala" if settings.provider_status["cala"] else "fixtures",
            profile_provider="fixtures",
        )
        state = self.create_session(request)
        self._default_session_id = state.session_id
        return state.session_id

    def create_session(self, request: SessionCreateRequest) -> SimulationState:
        settings = get_settings()
        session_id = str(uuid4())
        seed = request.seed or settings.default_seed
        companies = self._build_companies(seed=seed, request=request)
        snapshot = CurrentSnapshot(
            tick=0,
            market_signal=self._market_signal(seed, 0),
            companies=companies,
            interactions=[],
            investors=self._investor_cards(seed),
            metrics=self._metrics(companies=companies, interactions=[]),
            updated_at=datetime.now(UTC),
        )
        state = SimulationState(
            session_id=session_id,
            seed=seed,
            status="primed",
            deterministic_mode=request.deterministic_mode,
            current_tick=0,
            restored_from_db=False,
            persistence_mode="supabase" if settings.provider_status["supabase"] else "memory",
            current_snapshot=snapshot,
            recent_replay=[],
        )
        self._sessions[session_id] = SessionRecord(
            request=request,
            state=state,
            full_replay=[],
        )
        return deepcopy(state)

    def get_default_session_state(self, *, advance: bool = False) -> SimulationState:
        session_id = self.ensure_default_session()
        return self.get_state(session_id, advance=advance)

    def get_state(self, session_id: str, *, advance: bool = False) -> SimulationState:
        if advance:
            return self.advance(session_id)
        return deepcopy(self._get_record(session_id).state)

    def advance(self, session_id: str, *, steps: int = 1) -> SimulationState:
        record = self._get_record(session_id)
        for _ in range(steps):
            state = record.state
            next_tick = state.current_tick + 1
            companies, interactions = self._step_companies(
                seed=state.seed,
                tick=next_tick,
                companies=state.current_snapshot.companies,
                request=record.request,
            )
            replay_tick = ReplayTick(
                tick_index=next_tick,
                created_at=datetime.now(UTC),
                metrics=self._metrics(companies=companies, interactions=interactions),
                companies=companies,
                interactions=interactions,
            )
            record.full_replay.append(replay_tick)
            record.state = SimulationState(
                session_id=state.session_id,
                seed=state.seed,
                status="running" if next_tick < record.request.tick_count else "completed",
                deterministic_mode=state.deterministic_mode,
                current_tick=next_tick,
                restored_from_db=False,
                persistence_mode=state.persistence_mode,
                current_snapshot=CurrentSnapshot(
                    tick=next_tick,
                    market_signal=self._market_signal(state.seed, next_tick),
                    companies=companies,
                    interactions=interactions,
                    investors=state.current_snapshot.investors,
                    metrics=replay_tick.metrics,
                    updated_at=replay_tick.created_at,
                ),
                recent_replay=deepcopy(record.full_replay[-6:]),
            )
        return deepcopy(record.state)

    def get_replay(self, session_id: str) -> list[SimulationState]:
        record = self._get_record(session_id)
        replay_states: list[SimulationState] = []
        for replay_tick in record.full_replay:
            replay_states.append(
                SimulationState(
                    session_id=record.state.session_id,
                    seed=record.state.seed,
                    status=record.state.status,
                    deterministic_mode=record.state.deterministic_mode,
                    current_tick=replay_tick.tick_index,
                    restored_from_db=False,
                    persistence_mode=record.state.persistence_mode,
                    current_snapshot=CurrentSnapshot(
                        tick=replay_tick.tick_index,
                        market_signal=self._market_signal(record.state.seed, replay_tick.tick_index),
                        companies=deepcopy(replay_tick.companies),
                        interactions=deepcopy(replay_tick.interactions),
                        investors=deepcopy(record.state.current_snapshot.investors),
                        metrics=deepcopy(replay_tick.metrics),
                        updated_at=replay_tick.created_at,
                    ),
                    recent_replay=deepcopy(record.full_replay[: replay_tick.tick_index]),
                )
            )
        return replay_states

    def _get_record(self, session_id: str) -> SessionRecord:
        if session_id not in self._sessions:
            raise SessionNotFoundError(f"Unknown session: {session_id}")
        return self._sessions[session_id]

    def _build_companies(self, *, seed: int, request: SessionCreateRequest) -> list[SimulationCompany]:
        random = Random(seed)
        names = SECTORS[request.sector]
        companies: list[SimulationCompany] = []
        for index in range(request.company_count):
            founder_id, founder_name = FOUNDERS[index % len(FOUNDERS)]
            base_cash = request.starting_cash + (index * 180_000)
            burn = 140_000 + (index * 22_000)
            valuation = 8_000_000 + random.randint(0, 8_000_000)
            companies.append(
                SimulationCompany(
                    id=f"company-{index+1}",
                    name=names[index % len(names)],
                    sector=request.sector.replace("_", " "),
                    founder_id=founder_id,
                    founder_name=founder_name,
                    valuation=valuation,
                    cash_on_hand=base_cash,
                    burn_rate=burn,
                    headcount=10 + (index * 4),
                    runway_months=round(base_cash / burn, 1),
                    logo_url=None,
                    logo_source="backend_fixture",
                    current_action="scanning signal",
                    staffing_update="headcount stable",
                    investor_status="watching",
                    headline="Opening the simulation with fixture-backed signals.",
                )
            )
        return companies

    def _step_companies(
        self,
        *,
        seed: int,
        tick: int,
        companies: list[SimulationCompany],
        request: SessionCreateRequest,
    ) -> tuple[list[SimulationCompany], list[SimulationInteraction]]:
        updated: list[SimulationCompany] = []
        interactions: list[SimulationInteraction] = []
        settings = get_settings()
        hf_client = (
            get_hugging_face_space_client()
            if request.knowledge_provider == "hugging_face" and settings.provider_status["hugging_face"]
            else None
        )
        for index, company in enumerate(companies):
            random = Random(seed + (tick * 97) + index)
            event_type = EVENT_TYPES[(tick + index) % len(EVENT_TYPES)]
            delta = random.randint(-220_000, 540_000)
            cash_delta = random.randint(-240_000, 280_000)
            burn_delta = random.randint(-12_000, 18_000)
            headcount_delta = random.choice([-1, 0, 1, 2])
            next_cash = max(120_000, company.cash_on_hand + cash_delta)
            next_burn = max(90_000, company.burn_rate + burn_delta)
            next_headcount = max(6, company.headcount + headcount_delta)
            next_valuation = max(2_500_000, company.valuation + delta)
            runway = round(next_cash / next_burn, 1)
            action = self._action_line(event_type)
            investor_status = "engaged" if event_type == "investor_negotiation" else ("warming" if delta > 0 else "cautious")
            staffing = (
                f"headcount {'up' if headcount_delta > 0 else 'flat' if headcount_delta == 0 else 'down'} "
                f"to {next_headcount}"
            )
            headline = self._headline(company.name, event_type, delta)
            if hf_client and hf_client.available():
                enrichment = hf_client.analyze_company(
                    {
                        "company_name": company.name,
                        "market_signal": self._market_signal(seed, tick),
                        "current_action": self._action_line(event_type),
                        "runway_months": runway,
                        "burn_rate": next_burn,
                        "cash_on_hand": next_cash,
                        "valuation": next_valuation,
                        "headcount": next_headcount,
                        "investor_status": investor_status,
                    }
                )
                if enrichment:
                    headline = str(enrichment.get("summary") or headline)
                    event_type = str(enrichment.get("recommendation") or event_type)
            updated_company = company.model_copy(
                update={
                    "valuation": next_valuation,
                    "cash_on_hand": next_cash,
                    "burn_rate": next_burn,
                    "headcount": next_headcount,
                    "runway_months": runway,
                    "current_action": action,
                    "staffing_update": staffing,
                    "investor_status": investor_status,
                    "headline": headline,
                }
            )
            updated.append(updated_company)
            interactions.append(
                SimulationInteraction(
                    event_id=f"{company.id}-tick-{tick}",
                    tick_index=tick,
                    company_id=company.id,
                    company_name=company.name,
                    event_type=event_type,
                    actor_id=company.founder_id,
                    actor_name=company.founder_name,
                    actor_role="ceo",
                    counterpart_id=f"investor-{index+1}" if event_type == "investor_negotiation" else None,
                    counterpart_name=f"Investor {index+1}" if event_type == "investor_negotiation" else None,
                    counterpart_role="investor" if event_type == "investor_negotiation" else None,
                    summary=action,
                    payload={
                        "status": investor_status,
                        "amount_usd": abs(delta) if event_type == "investor_negotiation" else None,
                        "equity_pct": 8 + index if event_type == "investor_negotiation" else None,
                        "provider_profile": {
                            "model": get_settings().default_model_provider,
                            "knowledge": "hugging_face" if hf_client and hf_client.available() else get_settings().default_knowledge_provider,
                            "profile": get_settings().default_profile_provider,
                        },
                    },
                )
            )
        return updated, interactions

    def _metrics(
        self,
        *,
        companies: list[SimulationCompany],
        interactions: list[SimulationInteraction],
    ) -> ReplayMetrics:
        total_valuation = sum(company.valuation for company in companies)
        total_cash = sum(company.cash_on_hand for company in companies)
        avg_runway = round(
            sum(company.runway_months for company in companies) / max(len(companies), 1),
            1,
        )
        return ReplayMetrics(
            company_count=len(companies),
            interaction_count=len(interactions),
            total_valuation=total_valuation,
            total_cash=total_cash,
            average_runway_months=avg_runway,
        )

    def _market_signal(self, seed: int, tick: int) -> str:
        random = Random(seed + tick)
        signals = [
            "Infra capital is selective; disciplined teams win meetings.",
            "AI tooling demand is healthy, but buyers want proof before expansion.",
            "Gaming investors are back in the room if retention signals are strong.",
            "Founders with tight burn control are getting better term sheets.",
        ]
        return signals[random.randint(0, len(signals) - 1)]

    def _investor_cards(self, seed: int) -> list[dict[str, object]]:
        random = Random(seed)
        return [
            {
                "id": f"investor-{index+1}",
                "name": name,
                "focus": focus,
                "dry_powder_usd": random.randint(15, 90) * 1_000_000,
            }
            for index, (name, focus) in enumerate(
                [
                    ("Northstar Capital", "ai_devtools"),
                    ("Playfield Ventures", "gaming"),
                    ("Ledger Bridge", "fintech"),
                ]
            )
        ]

    def _action_line(self, event_type: str) -> str:
        return {
            "product_launch": "shipping the next milestone with a constrained release plan",
            "investor_negotiation": "testing investor appetite with a structured raise narrative",
            "hiring_push": "rebalancing hiring against roadmap risk",
            "cost_reduction": "cutting spend to protect runway before the next milestone",
            "market_research": "running a tighter research loop before committing product scope",
            "partnership_outreach": "probing partnerships that could accelerate distribution",
        }[event_type]

    def _headline(self, company_name: str, event_type: str, delta: int) -> str:
        direction = "up" if delta >= 0 else "down"
        return f"{company_name} leans into {event_type.replace('_', ' ')} as confidence moves {direction}."


session_service = SessionService()
