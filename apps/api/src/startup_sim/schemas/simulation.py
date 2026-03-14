from __future__ import annotations

from datetime import datetime
from typing import Literal

from pydantic import BaseModel, Field


class SimulationInteraction(BaseModel):
    event_id: str
    tick_index: int
    company_id: str
    company_name: str
    event_type: str
    actor_id: str
    actor_name: str
    actor_role: str
    counterpart_id: str | None = None
    counterpart_name: str | None = None
    counterpart_role: str | None = None
    summary: str
    payload: dict[str, object] = Field(default_factory=dict)


class SimulationCompany(BaseModel):
    id: str
    name: str
    sector: str
    founder_id: str
    founder_name: str
    valuation: int
    cash_on_hand: int
    burn_rate: int
    headcount: int
    runway_months: float
    logo_url: str | None = None
    logo_source: str | None = None
    current_action: str
    staffing_update: str
    investor_status: str
    headline: str


class ReplayMetrics(BaseModel):
    company_count: int
    interaction_count: int
    total_valuation: int
    total_cash: int
    average_runway_months: float


class ReplayTick(BaseModel):
    tick_index: int
    created_at: datetime
    metrics: ReplayMetrics
    companies: list[SimulationCompany]
    interactions: list[SimulationInteraction]


class CurrentSnapshot(BaseModel):
    tick: int
    market_signal: str
    companies: list[SimulationCompany]
    interactions: list[SimulationInteraction]
    investors: list[dict[str, object]] = Field(default_factory=list)
    metrics: ReplayMetrics
    updated_at: datetime


class SimulationState(BaseModel):
    session_id: str
    seed: int
    status: str
    deterministic_mode: bool
    current_tick: int
    restored_from_db: bool
    persistence_mode: Literal["memory", "supabase"]
    current_snapshot: CurrentSnapshot
    recent_replay: list[ReplayTick]


class SessionCreateRequest(BaseModel):
    seed: int | None = None
    deterministic_mode: bool = True
    company_count: int = Field(default=4, ge=1, le=8)
    tick_count: int = Field(default=12, ge=1, le=32)
    starting_cash: int = Field(default=2_500_000, ge=100_000)
    sector: Literal["gaming", "b2b_saas", "ai_devtools", "fintech", "creator_tools"] = "ai_devtools"
    model_provider: Literal["mistral", "bedrock", "hugging_face", "fixtures"] = "mistral"
    knowledge_provider: Literal["cala", "hugging_face", "fixtures", "none"] = "cala"
    profile_provider: Literal["specter", "fixtures", "none"] = "fixtures"


class TickAdvanceRequest(BaseModel):
    steps: int = Field(default=1, ge=1, le=8)
