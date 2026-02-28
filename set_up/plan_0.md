# `plan_0.md` - Auditable Agentic Isometric Startup/Game-Studio MVP

## Summary

This repository currently contains setup material under `set_up/`, an `.env`, and no checked-in application source. There is no local `.git/` directory in this workspace. The practical implementation target is therefore a new centralized monorepo layout rooted in the canonical GitHub repo `frankterpo/mistral_hack_london_2026`, with imported UI/game-shell code from `amilich/isometric-city`, a pinned `strands-agents` Python dependency, and staged import/provenance handling for the Hugging Face Space `mistral-hackaton-2026/iso-business`.

The MVP remains constrained to a 5-hour hackathon build:

- Python backend for simulation, policy, tool routing, traces, persistence, and deterministic replay
- Next.js/TypeScript frontend based on the imported isometric city renderer
- structured-only inputs and outputs
- auditable policy-driven agents
- tool routing across `Specter` and `Cala`
- complete `DecisionTrace` and `ToolTrace` logs
- local-first deterministic demo path with AWS fallback

This plan is intentionally explicit about verified facts versus blockers:

- Verified locally:
  - `.env` contains AWS, Mistral, Hugging Face, Cala, and Supabase credentials
  - no `SPECTER_API_KEY` is present
  - `set_up/openapi_mistral.yaml` provides authoritative guidance on `json_schema`, seeded generation, and streaming event semantics
  - `isometric-city` is public, MIT-licensed, `Next.js 16 + TypeScript + Canvas`
  - `strands-agents/sdk-python` is public, Apache-2.0, Python `>=3.10`
- Blocked from this environment:
  - `https://github.com/frankterpo/mistral_hack_london_2026` returns `404`
  - `https://huggingface.co/spaces/mistral-hackaton-2026/iso-business` returns `401 Invalid username or password`

Default implementation decisions locked by this plan:

- UI base: import `isometric-city` snapshot into `apps/web/`
- agent/runtime boundary: direct Python simulation engine plus thin Strands wrapper layer
- tool routing: `Specter = fast facts`, `Cala = deeper synthesis`
- `Specter` ships as adapter + deterministic stub until real API details or credentials are provided
- all model-facing outputs use structured JSON schemas
- user controls are buttons, segmented controls, toggles, and bounded sliders only
- `.env` is a first-class implementation input and must be parsed into a typed runtime settings layer before any backend, import, or deploy command is considered valid

---

## A) MVP Scope & Non-goals (5-hour)

### MVP Scope

Build a single-user web application that simulates a startup or game studio operating over `8..16` ticks. The user configures the run entirely through structured controls, starts a session, advances ticks, inspects traces, and replays a golden seed deterministically.

The MVP must demonstrate:

- a live isometric scene representing the company/city state
- CEO, employee, and investor entities making policy-driven decisions
- decision behavior progressively derived from structured context, not hardcoded dialogue trees
- latent paradigm vectors that update from observed outcomes and tool-derived evidence
- full `DecisionTrace` and `ToolTrace` records for every entity action
- deterministic replay parity for a known golden seed

### Monorepo Source-of-Truth

The implementation will converge into one GitHub monorepo rooted at `frankterpo/mistral_hack_london_2026`. The repo will centralize:

- first-party simulation backend
- first-party product UI
- imported isometric renderer/app shell derived from `amilich/isometric-city`
- pinned Strands SDK dependency and local Strands integration code
- imported or manually exported Hugging Face Space source/assets from `mistral-hackaton-2026/iso-business`
- provenance manifests, import scripts, and deployment commands

Centralization goal: one repo, one build graph, one demo build, one deploy path, no runtime dependency on cloning other repos during the demo.

### What the MVP must feel like

The system should feel generative and inspectable:

- a CEO under burn pressure should reduce scope, raise money, or pivot depending on evidence quality and latent bias
- employees should diverge in behavior based on morale, workload, craft bias, and observed outcomes
- investors should react to structured evidence, not canned scripts
- tool-derived context should visibly alter action selection and latent updates

### Dynamics quality bar

The game dynamics are the core product risk and must be treated as a hard engineering requirement, not a polish concern.

Required properties of the dynamics:

- **agentic**: each entity must choose among multiple valid actions rather than replay scripted sequences
- **logical**: actions must be consistent with role, state, constraints, and recent observations
- **evidence-based**: actions must be traceable to structured evidence packets, latent state, and explicit policy scores
- **AI-native**: models should contribute real decision pressure, uncertainty handling, and action reprioritization, not just flavor text
- **auditable**: every meaningful state change must be explainable from `DecisionTrace`, `ToolTrace`, and the pre/post latent state
- **bounded**: models cannot mutate arbitrary state or invent unsupported world facts outside structured tool/context channels

Unacceptable dynamics:

- hardcoded dialogue branches pretending to be autonomy
- random actions without evidence dependencies
- decisions justified only by prose and not by scored candidates
- agents taking mutually inconsistent actions with no traceable coordination logic
- tool calls that do not measurably affect later behavior

### Realism driver: profile-rich simulation

The simulation should be explicitly optimized for **profile-rich realism**:

- the more exact company, investor, and person context available to an entity
- the closer that entity's digital footprint is to a real person or company
- the more realistic, constrained, and believable the simulated action should become

For this plan, “close to real” means:

- more structured profile attributes
- more recent company and market context
- more exact investor/company/person evidence
- more traceable link between evidence and action choice

This is not roleplay for its own sake. The simulation should approximate how a CEO/founder, employee, or investor would behave if they had access to a realistic, current, information-rich decision surface.

Therefore:

- `Specter` profile/company/investor data is not optional flavor context; it is a primary realism substrate
- `Cala` context and web-search-derived synthesis is not optional prose enrichment; it is a primary environment/context substrate
- every entity should reason over a structured approximation of a real digital footprint
- richer footprints should tighten policy distributions and reduce implausible actions

### Non-goals

- free-text user input or prompt boxes
- chat UI
- audio or multimodal input
- live fine-tuning or GPU-heavy training during the MVP
- full A2A/Strands orchestration as the control plane
- keeping `isometric-city`, `strands-agents`, and the Hugging Face Space as separate runtime repos
- git submodules
- depending on private Hugging Face Space access at runtime

### Repo Context Incorporated

Directly relevant local context:

- `set_up/openapi_mistral.yaml`
- `set_up/Mistral Hackathon pre-hack meeting Europe edition - 2026_02_26 02_06 JST - Transcript.md`
- `set_up/hf_skills.md`
- `set_up/shadeform/api_docs.md`
- `set_up/strand_agents/swarm.md`
- `set_up/strand_agents/python_api.md`
- `set_up/once_upon_agentic_ai/ch1.md`
- `set_up/once_upon_agentic_ai/ch2.md`
- `set_up/once_upon_agentic_ai/ch3.md`
- `set_up/once_upon_agentic_ai/ch4.md`
- `set_up/once_upon_agentic_ai/ch5.md`
- `set_up/once_upon_agentic_ai/ch6.md`
- `set_up/once_upon_agentic_ai/ch7.md`
- `set_up/once_upon_agentic_ai/ch8.md`
- `set_up/once_upon_agentic_ai/ch0.md`
- `set_up/once_upon_agentic_ai/intro.md`
- `.env`

Empty or missing docs explicitly called out:

```text
TODO: create or backfill these files before treating them as authoritative
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/.git/
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/.env.example
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/set_up/prompt1.md
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/set_up/hf_skills.md
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/set_up/strand_agents/python_api.md
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/set_up/strand_agents/swarm.md
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/set_up/once_upon_agentic_ai/ch0.md
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/set_up/once_upon_agentic_ai/ch5.md
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/set_up/once_upon_agentic_ai/ch6.md
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/set_up/shadeform/api_docs.md
```

### Cursor plan-mode reference corpus

When this plan is used as implementation context in Cursor or another coding agent, the default reference corpus should explicitly include the following files so the agent starts from the richest local context instead of only the top-level plan:

#### Primary implementation references

- `/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/set_up/plan_0.md`
- `/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/.env`
- `/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/.env.example`
- `/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/set_up/openapi_mistral.yaml`
- `/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/set_up/Mistral Hackathon pre-hack meeting Europe edition - 2026_02_26 02_06 JST - Transcript.md`
- `/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/set_up/hf_skills.md`
- `/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/set_up/shadeform/api_docs.md`
- `/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/set_up/strand_agents/swarm.md`
- `/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/set_up/strand_agents/python_api.md`

#### Full `once_upon_agentic_ai` reference set

- `/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/set_up/once_upon_agentic_ai/ch0.md`
- `/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/set_up/once_upon_agentic_ai/ch1.md`
- `/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/set_up/once_upon_agentic_ai/ch2.md`
- `/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/set_up/once_upon_agentic_ai/ch3.md`
- `/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/set_up/once_upon_agentic_ai/ch4.md`
- `/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/set_up/once_upon_agentic_ai/ch5.md`
- `/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/set_up/once_upon_agentic_ai/ch6.md`
- `/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/set_up/once_upon_agentic_ai/ch7.md`
- `/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/set_up/once_upon_agentic_ai/ch8.md`
- `/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/set_up/once_upon_agentic_ai/intro.md`

#### How the agent should use these references

- `set_up/plan_0.md` remains the normative implementation spec.
- `.env` is the normative local runtime-secret and environment-shape reference. Implementation agents must inspect it at the start of execution to derive actual enabled providers, expected variable names, and config normalization tasks. It must never be copied into logs, prompts, browser bundles, or committed output.
- `.env.example` is the normative sanitized contract for future contributors, CI, deployment, and Cursor plan-mode execution. It must be generated or updated to reflect the canonical variable names discovered from `.env` and the implementation code.
- `set_up/openapi_mistral.yaml` is the normative source for Mistral request/response fields, seeded generation, `json_schema` mode, and streaming/tool event semantics.
- `set_up/strand_agents/swarm.md`, `set_up/strand_agents/python_api.md`, and the full `once_upon_agentic_ai` set are the intended design references for Strands swarm patterns, Python agent APIs, tool wrapping, MCP usage, multi-agent decomposition, and observability patterns. If those specific files are empty, the implementation must still preserve their role in the architecture and document that the runtime design is aligned to Strands-style swarm orchestration even when the local stub docs are incomplete.
- `set_up/hf_skills.md` and `set_up/shadeform/api_docs.md` should still be loaded into context even if empty at planning time, because the implementation agent should treat them as reserved extension points rather than nonexistent files.
- Empty files must be described in the implementation notes as `present-but-empty reference stubs`, not silently ignored.

#### `hf_skills.md` implementation contract

`set_up/hf_skills.md` is currently a present-but-empty reference stub. The plan should still treat it as the designated contract surface for Hugging Face-adjacent execution skills.

Until it is backfilled, implementation agents should assume it is intended to govern:

- Hugging Face CPU task routing for low-cost auxiliary workloads
- packaging and invocation conventions for reusable model-facing helper skills
- how non-critical preprocessing or summarization tasks can be offloaded away from the primary Brev / Shadeform GPU path
- future import or interoperability conventions with the Hugging Face Space source once it is available

Required follow-up:

- create `/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/set_up/hf_skills.md` content or a sibling implementation note before relying on Hugging Face-specific operational conventions beyond what is codified in this plan

#### External skills discovered for implementation guidance

Using the `find-skills` workflow, the most relevant external skills discovered for this repo were:

- `am-will/codex-skills@vercel-react-best-practices`
- `vercel/nextjs-skills@next-best-practices`
- `letta-ai/skills@hf-model-inference`
- `zxkane/aws-skills@aws-agentic-ai`
- `sammcj/agentic-coding@aws-strands-agents-agentcore`

These should be treated as optional coding-agent guidance for implementation quality, not as required runtime dependencies of the shipped product.

Planned usage:

- Vercel / Next.js skills
  - improve the imported `apps/web/` shell derived from `isometric-city`
  - tighten app-router boundaries, rendering behavior, and frontend integration quality
- Hugging Face inference skills
  - improve CPU-side helper workload design and invocation boundaries
  - shape helper-model packaging conventions in `hf_skills.md`
- AWS / Bedrock / Strands skills
  - improve orchestration topology, sandbox supervision, and Strands-compatible agent runtime structure

Any future coding pass that installs these skills must still preserve this plan's schema contracts, trace contracts, determinism rules, and legality constraints.

#### Best-practice extraction from `once_upon_agentic_ai`

The implementation should explicitly reuse the best practices implied across `set_up/once_upon_agentic_ai/`:

- enable debug/structured logging first, before complex tool orchestration
- keep tools explicit, typed, and documented
- treat MCP as the preferred boundary for external system access
- use Python-first agent composition for the MVP
- separate tool definition from agent orchestration
- test custom tools and MCP connections independently before embedding them in swarm execution
- preserve observability on tool consent, tool execution, and orchestration steps

Even where workshop chapters are introductory, their operational pattern is still relevant:

- `ch1`: logging and visible agent reasoning
- `ch2`: explicit tool injection and tool-use boundaries
- `ch3`: custom-tool design and docstring discipline
- `ch4`: MCP server/client patterns
- `ch7`: persistent world/entity state and dynamic generation patterns

These principles should appear in the production implementation, not just in comments.

#### Plan-mode implementation rule

Any future implementation pass using this plan in Cursor should start by loading:

1. `set_up/plan_0.md`
2. `.env`
3. `.env.example`
4. `set_up/openapi_mistral.yaml`
5. all `.md` files under `/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/set_up/once_upon_agentic_ai/`
6. `set_up/hf_skills.md`
7. `set_up/shadeform/api_docs.md`
8. `set_up/strand_agents/swarm.md`
9. `set_up/strand_agents/python_api.md`

This rule exists to maximize local-context retrieval during plan mode and reduce the chance that implementation agents overlook workshop references, tool patterns, or extension hooks already present in `set_up/`.

### Environment contract and runtime settings normalization

The implementation must convert `.env` into a typed settings module before any app boot:

- backend startup must fail fast on missing required variables for enabled providers
- frontend must never read provider secrets directly
- deployment scripts must source `.env` only in shell scope, never inline secret values
- all secret-bearing settings must be redacted in logs

Canonical backend settings object:

```python
class RuntimeSettings(BaseSettings):
    aws_default_region: str | None = None
    aws_access_key_id: str | None = None
    aws_secret_access_key: SecretStr | None = None
    aws_session_token: SecretStr | None = None
    bedrock_region: str | None = None
    bedrock_agent_runtime_enabled: bool = False

    mistral_api_key: SecretStr | None = None
    brev_mistral_base_url: str | None = None
    brev_mistral_api_key: SecretStr | None = None
    calai_api_key: SecretStr | None = None
    specter_api_key: SecretStr | None = None
    specter_base_url: str | None = None

    supabase_url: str | None = None
    supabase_project_ref: str | None = None
    supabase_anon_key: SecretStr | None = None
    supabase_service_role_key: SecretStr | None = None
    supabase_db_password: SecretStr | None = None

    hugging_face_api_key: SecretStr | None = None
    hf_space_id: str | None = None
```

Normalization rules:

- map `SUPABSE_WORKSPACE_ID` into a canonical `SUPABASE_PROJECT_REF` field
- map `SUPABASE_ANON_PUBLIC` into `SUPABASE_ANON_KEY`
- map `SUPABASE_ANON_PUBLIC_SERVICE_ROLE` into `SUPABASE_SERVICE_ROLE_KEY`
- preserve raw source variable names in an internal `env_aliases_used` diagnostic map
- expose a `settings.redacted_dump()` method for trace-safe diagnostics

Config files to create:

```text
TODO: create runtime settings files
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/apps/api/src/startup_sim/config/settings.py
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/apps/api/src/startup_sim/config/env_normalization.py
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/apps/api/tests/test_settings.py
```

---

## B) Domain model (entities, state, paradigms) + JSON schemas

### Proposed repository layout

```text
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/
  apps/
    api/
    web/
  imports/
    hf-space-iso-business/
  shared/
    jsonschema/
  fixtures/
  scripts/
  supabase/
    migrations/
  docs/
    provenance/
  set_up/
    plan_0.md
  UPSTREAMS.lock.json
  Makefile
```

### Core entities

#### `SimulationSession`

- `session_id: uuid`
- `seed: int`
- `config: SimulationConfig`
- `status: SessionStatus`
- `current_tick: int`
- `deterministic_mode: bool`
- `latest_snapshot: SessionSnapshot`

#### `CompanyState`

- `cash_k: int`
- `burn_k: int`
- `runway_months: float`
- `velocity: float`
- `quality: float`
- `pmf_signal: float`
- `market_pressure: float`
- `investor_interest: float`
- `team_focus: float`
- `context_quality: float`

#### `AgentState`

- `agent_id: str`
- `person_uuid: str`
- `company_uuid: str | None`
- `role: CEO | EMPLOYEE | INVESTOR`
- `display_name: str`
- `paradigm: ParadigmVector`
- `morale: float`
- `fatigue: float`
- `confidence: float`
- `trust: float`
- `memory_refs: list[str]`
- `agent_environment_id: str`

#### `InvestorState`

- `agent_id: str`
- `check_size_band: Micro | Angel | SeedVC`
- `thesis_fit: float`
- `pressure_mode: Curiosity | Growth | Efficiency`
- `diligence_depth: Low | Medium | High`
- `paradigm: ParadigmVector`

#### `ContextPacket`

- `packet_id: str`
- `source: Specter | Cala | Heuristic | Replay`
- `kind: enum`
- `confidence: float`
- `ttl_s: int`
- `payload: json`
- `subject_ref: EntityRef | None`
- `recency_ts: datetime | None`
- `source_query: json | None`
- `footprint_density: float`

#### `CandidateAction`

- `candidate_id: str`
- `actor_id: str`
- `action_type: enum`
- `params: json`
- `feature_vector: list[float]`
- `base_score: float`
- `uncertainty: float`
- `legality_flags: list[str]`

#### `DecisionTrace`

- `trace_id: uuid`
- `session_id: uuid`
- `tick_index: int`
- `actor_id: str`
- `role: str`
- `seed: int`
- `policy_version: str`
- `candidate_scores: json`
- `chosen_action: json`
- `latent_before: ParadigmVector`
- `latent_after: ParadigmVector`
- `reason_codes: list[str]`
- `tool_trace_ids: list[uuid]`
- `expected_outcome: json`
- `realized_outcome: json`

#### `ToolTrace`

- `trace_id: uuid`
- `session_id: uuid`
- `tick_index: int`
- `provider: Specter | Cala | Replay | Heuristic`
- `route: str`
- `route_reason: str`
- `cache_key: str`
- `cache_status: miss | l1_hit | l2_hit | stale_hit | bypass`
- `latency_ms: int`
- `timeout_ms: int`
- `budget_units: int`
- `provenance: json`
- `seed: int`

### Paradigm vector

Every decision-capable entity owns a latent vector in `[-1, 1]`:

```json
{
  "$id": "ParadigmVector",
  "type": "object",
  "additionalProperties": false,
  "required": [
    "speed",
    "rigor",
    "risk",
    "frugality",
    "craft",
    "customer_empathy",
    "delegation",
    "narrative_aggression",
    "evidence_hunger",
    "resilience"
  ],
  "properties": {
    "speed": { "type": "number", "minimum": -1, "maximum": 1 },
    "rigor": { "type": "number", "minimum": -1, "maximum": 1 },
    "risk": { "type": "number", "minimum": -1, "maximum": 1 },
    "frugality": { "type": "number", "minimum": -1, "maximum": 1 },
    "craft": { "type": "number", "minimum": -1, "maximum": 1 },
    "customer_empathy": { "type": "number", "minimum": -1, "maximum": 1 },
    "delegation": { "type": "number", "minimum": -1, "maximum": 1 },
    "narrative_aggression": { "type": "number", "minimum": -1, "maximum": 1 },
    "evidence_hunger": { "type": "number", "minimum": -1, "maximum": 1 },
    "resilience": { "type": "number", "minimum": -1, "maximum": 1 }
  }
}
```

### `SimulationConfig` schema

All user inputs are bounded and structured.

```json
{
  "$id": "SimulationConfig",
  "type": "object",
  "additionalProperties": false,
  "required": [
    "seed",
    "preset",
    "sector",
    "region",
    "stage",
    "employee_count",
    "investor_count",
    "runway_months",
    "starting_cash_k",
    "market_temperature",
    "risk_appetite",
    "knowledge_budget",
    "tick_count",
    "use_specter",
    "use_cala",
    "deterministic_mode"
  ],
  "properties": {
    "seed": { "type": "integer", "minimum": 1, "maximum": 999999999 },
    "preset": { "enum": ["golden_seed_424242", "b2b_saas", "consumer_game", "ai_tooling", "fintech_ops"] },
    "sector": { "enum": ["gaming", "b2b_saas", "ai_devtools", "fintech", "creator_tools"] },
    "region": { "enum": ["us", "uk", "eu"] },
    "stage": { "enum": ["idea", "pre_seed", "seed"] },
    "employee_count": { "type": "integer", "minimum": 2, "maximum": 8 },
    "investor_count": { "type": "integer", "minimum": 1, "maximum": 4 },
    "runway_months": { "type": "integer", "minimum": 3, "maximum": 24 },
    "starting_cash_k": { "type": "integer", "minimum": 100, "maximum": 2500 },
    "market_temperature": { "type": "integer", "minimum": 0, "maximum": 100 },
    "risk_appetite": { "type": "integer", "minimum": 0, "maximum": 100 },
    "knowledge_budget": { "type": "integer", "minimum": 0, "maximum": 10 },
    "tick_count": { "type": "integer", "minimum": 8, "maximum": 16 },
    "use_specter": { "type": "boolean" },
    "use_cala": { "type": "boolean" },
    "deterministic_mode": { "type": "boolean" }
  }
}
```

### Action spaces by role

#### CEO

- `ship_scope`
- `run_experiment`
- `hire`
- `freeze_hiring`
- `raise_bridge`
- `pitch_investors`
- `pivot_market`
- `reduce_burn`
- `partnership_outreach`
- `hold`

#### Employee

- `build_feature`
- `reduce_tech_debt`
- `run_user_interviews`
- `improve_quality`
- `ask_for_clarity`
- `push_back_scope`
- `research_competitor`
- `burnout_signal`

#### Investor

- `request_metrics`
- `offer_intro`
- `soft_commit`
- `pass`
- `push_growth`
- `push_efficiency`
- `schedule_followup`

### Schema files to create

```text
TODO: create these schema files
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/shared/jsonschema/simulation-config.schema.json
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/shared/jsonschema/paradigm-vector.schema.json
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/shared/jsonschema/context-packet.schema.json
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/shared/jsonschema/candidate-action.schema.json
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/shared/jsonschema/action-decision.schema.json
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/shared/jsonschema/decision-trace.schema.json
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/shared/jsonschema/tool-trace.schema.json
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/shared/jsonschema/session-snapshot.schema.json
```

---

## C) Simulation loop (tick model) + event bus + state machine

### Tick model

Each simulation tick is a fixed six-stage pipeline:

1. `context_collect`
2. `candidate_enumerate`
3. `uncertainty_gate`
4. `tool_enrich`
5. `decision_finalize`
6. `state_reduce`

Canonical loop:

```python
async def run_tick(session: SimulationSession) -> TickResult:
    emit("tick.started")
    base_context = collect_world_context(session)
    emit("context.collected", base_context)

    candidates = enumerate_candidates(session, base_context)
    emit("candidates.enumerated", candidates)

    unresolved = [c for c in candidates if c.uncertainty > session.config.uncertainty_threshold]
    emit("uncertainty.gated", unresolved)

    enriched_context = await tool_router.enrich(session, unresolved, base_context)
    emit("context.enriched", enriched_context)

    decisions = await policy_engine.finalize(session, candidates, enriched_context)
    emit("decisions.finalized", decisions)

    next_state = world_reducer.apply(session.state, decisions, enriched_context)
    persist_tick(session, decisions, next_state)
    emit("tick.completed", next_state)
    return TickResult(next_state=next_state, decisions=decisions)
```

### Event bus contract

```json
{
  "$id": "EventEnvelope",
  "type": "object",
  "required": ["event_id", "session_id", "tick_index", "seq", "kind", "seed", "payload"],
  "properties": {
    "event_id": { "type": "string", "format": "uuid" },
    "session_id": { "type": "string", "format": "uuid" },
    "tick_index": { "type": "integer", "minimum": 0 },
    "seq": { "type": "integer", "minimum": 0 },
    "kind": {
      "enum": [
        "session.started",
        "tick.started",
        "context.collected",
        "candidates.enumerated",
        "tool.requested",
        "tool.completed",
        "decisions.finalized",
        "world.updated",
        "tick.completed",
        "session.completed"
      ]
    },
    "seed": { "type": "integer" },
    "payload": { "type": "object" }
  }
}
```

### State machines

#### Session

```text
created -> primed -> running -> paused -> completed
created -> primed -> running -> failed
completed -> replayable
```

#### Agent decision

```text
idle -> observing -> scoring -> tool_wait | finalizing -> committed -> cooling_down
```

#### Tool request

```text
queued -> cache_lookup -> cache_hit | dispatched -> success | timeout | provider_error | budget_denied
```

### Deterministic ordering rules

- actor evaluation order is stable: CEO, employees by `agent_id`, investors by `agent_id`
- event sequence number is monotonic within each tick
- all JSON is canonicalized before hashing
- tie-breakers use `sha256(seed, tick_index, actor_id, candidate_id)`
- timestamps are stored, but excluded from replay parity comparison

### Failure modes and required fallbacks

The simulation loop must explicitly model failure states instead of silently degrading.

Canonical failure classes:

- `context_floor_not_met`
- `tool_timeout`
- `tool_provider_error`
- `budget_exhausted`
- `constraint_violation`
- `schema_validation_failed`
- `trace_incomplete`
- `policy_output_invalid`
- `replay_fixture_missing`

Required fallback policy by class:

| Failure class | Detection point | Required fallback | Trace requirement |
|---|---|---|---|
| `context_floor_not_met` | before `decision_finalize` | downgrade to safe action and lower confidence | `DecisionTrace.failure_code` |
| `tool_timeout` | tool router | use stale cache or heuristic packet | `ToolTrace.fallback_used` |
| `tool_provider_error` | tool router | alternate provider or heuristic packet | `ToolTrace.provider_error_class` |
| `budget_exhausted` | budget governor | deny further enrichment, continue with bounded heuristics | `ToolTrace.budget_denied=true` |
| `constraint_violation` | legality engine | reject candidate, evaluate next valid candidate | `ConstraintViolationTrace` |
| `schema_validation_failed` | policy model adapter | discard model output, retry once, then fallback to deterministic policy | `InferenceTrace.validation_error` |
| `trace_incomplete` | pre-commit action gate | abort commit and mark tick failed | `EventEnvelope(kind=\"tick.failed\")` |
| `replay_fixture_missing` | deterministic mode | fail fast in test mode, use stub only in dev mode | `ReplayTrace.fixture_status` |

Fallbacks are mandatory implementation behavior, not informal operator guidance.

### Engine files to create

```text
TODO: create simulation engine files
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/apps/api/src/startup_sim/sim/engine.py
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/apps/api/src/startup_sim/sim/event_bus.py
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/apps/api/src/startup_sim/sim/state_machine.py
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/apps/api/src/startup_sim/sim/world_reducer.py
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/apps/api/src/startup_sim/sim/scoring.py
```

---

## D) Agent system (CEO/Employees/Investors) + policies + learning/update rules

### Policy architecture

The simulation is not freeform-agent output. It is hybrid:

- deterministic candidate generation in Python
- deterministic base scoring in Python
- bounded model-produced `PolicyAdjustment` JSON
- deterministic world reduction in Python

Models are never allowed to mutate world state directly.

### Strands-aligned agent construction contract

The implementation should follow the strongest reusable patterns implied by:

- `set_up/once_upon_agentic_ai/ch1.md`
- `set_up/once_upon_agentic_ai/ch2.md`
- `set_up/once_upon_agentic_ai/ch3.md`
- `set_up/once_upon_agentic_ai/ch4.md`
- `set_up/strand_agents/swarm.md`
- `set_up/strand_agents/python_api.md`

Concretely, every runtime agent should have:

1. explicit system instructions
2. explicit typed tool inventory
3. explicit MCP-bound external integrations
4. structured output contract
5. debug/trace logging enabled by default in non-prod local runs
6. a bounded execution budget per turn

Agent runtime config:

```python
class AgentRuntimeConfig(BaseModel):
    agent_id: str
    person_uuid: str
    company_uuid: str | None
    role: Literal["CEO", "EMPLOYEE", "INVESTOR", "COMPANY_COORDINATOR"]
    model_tier: Literal["small", "medium"]
    system_prompt_id: str
    allowed_tool_templates: list[str]
    allowed_mcp_servers: list[str]
    max_llm_calls_per_tick: int
    max_tool_calls_per_tick: int
    output_schema_name: str
```

Required runtime wrapper:

```python
class AgentEnvironment(Protocol):
    async def think(self, bundle: EntityKnowledgeBundle, tick_ctx: TickContext) -> AgentTurnResult: ...
    async def call_tool(self, intent: ToolIntent) -> ToolResultEnvelope: ...
    async def delegate(self, delegation: DelegationIntent) -> DelegationResult: ...
```

The code structure should preserve a future direct Strands implementation, even if the initial local runtime uses a thin compatibility layer.

### Entity realism model

Each entity should be equipped with a structured profile assembled from:

- base simulation config
- generated latent state
- Specter person/company/investor profile packets
- Cala market/context/knowledge packets
- recent tick-local observations

The entity profile should behave like a compressed digital twin input, not a biography blob.

Required profile dimensions:

- identity and role
- company affiliation
- operating constraints
- goals and incentives
- social/professional footprint
- financial and market pressure
- recent events and relationships
- latent paradigm vector
- evidence coverage score

The simulation should push actions toward realism by making policy confidence proportional to evidence coverage and footprint density.

### Footprint density and realism scoring

Each entity should carry:

- `footprint_density: float` in `0..1`
- `evidence_coverage: float` in `0..1`
- `profile_recency_score: float` in `0..1`

Recommended composite:

```text
realism_score =
  0.45 * footprint_density
  + 0.35 * evidence_coverage
  + 0.20 * profile_recency_score
```

Interpretation:

- high `realism_score` means the entity should act in a narrower, more realistic decision cone
- low `realism_score` means the entity should fall back to broader heuristics and lower-confidence decisions

Policy effect:

```text
candidate_dispersion_penalty = lerp(high_entropy, low_entropy, realism_score)
```

As realism increases:

- unsafe randomness decreases
- action plausibility increases
- evidence-seeking behavior becomes more targeted
- model deltas should become smaller and more constrained

### Dynamics invariants

The simulation must enforce the following invariants on every tick:

1. no action may be applied unless it came from a bounded candidate set for that role
2. no candidate may be selected unless it has a computed base score and a persisted score breakdown
3. no model-produced adjustment may exceed the bounded delta range
4. no cross-agent influence may occur without an explicit event, context packet, or coordination artifact
5. no tool-derived claim may influence state without a `ToolTrace` and a normalized evidence packet
6. no latent update may happen without both `latent_before` and `latent_after` being persisted

These invariants are mandatory because the intended experience is “AI-native but logically inspectable,” not “opaque LLM improv.”

### Swarm-oriented multi-agent dynamics

This MVP should treat the organization as a constrained swarm rather than a collection of independent NPCs. The swarm pattern is not open-ended autonomy; it is structured role-based delegation with bounded outputs.

### Company-scoped swarm topology

The primary swarm unit is the **company**.

Each company swarm contains:

- `CompanyCoordinatorAgent`
- `FounderOrCEOAgent[]`
- `EmployeeAgent[]`
- `InvestorObserverAgent[]`

Investor agents may be attached to multiple company swarms as external evaluators, but they still operate as person-level agents with their own digital footprints and capital constraints.

Shared base-person rule:

- founders, employees, and investors all derive from a common `PersonFootprint`
- role-specific behavior is controlled by `RoleAssignment` and agent policy, not by separate identity models
- this allows the same person schema to support employee, founder, or investor participation while preserving different goals and permissions

Segmenting rule:

- employees belong to exactly one company at a time
- founders/CEOs belong to exactly one company at a time
- investors may observe or act on multiple companies, but each investor-company interaction is tracked as a company-scoped sub-context

Required IDs:

- `company_uuid`
- `person_uuid`
- `role_assignment_uuid`
- `investor_company_interest_uuid` if applicable

Specter is expected to provide fast mapping across:

- person -> company
- founder -> company
- employee -> company
- investor -> company interests / accessible opportunities

The swarm runtime should use UUIDs as canonical identity, never display-name matching.

Target swarm decomposition:

- **CEO agent**
  - owns strategic prioritization
  - allocates exploration vs execution budget
  - resolves conflicts between investor pressure and employee constraints
- **Employee agents**
  - own local execution decisions
  - surface risk, delivery cost, morale impact, and quality implications
  - can resist, defer, or reshape CEO proposals through structured feedback
- **Investor agents**
  - own external capital and narrative pressure
  - issue diligence, intros, follow-ups, pass/soft-commit actions
  - alter company state only through structured market/social pressure channels
- **Optional coordinator/scheduler agent**
  - only if needed in implementation
  - orchestrates ordered agent turns and enforces turn budget
  - never invents world state; only sequences agent interactions

Swarm coordination artifacts:

- `CoordinationEvent`
- `DelegationIntent`
- `ConflictSignal`
- `ConsensusSnapshot`

These should be serialized and persisted exactly like other structured events.

### Person-level digital footprint model

Every person-backed agent must be instantiated from a structured `PersonFootprint` assembled from Specter and Cala-derived context.

Minimum fields:

- `person_uuid`
- `company_uuid`
- `current_role_title`
- `role_type`
- `education_history`
- `employment_history`
- `domain_expertise`
- `seniority_band`
- `network_summary`
- `investor_style` for investor agents
- `operator_style` for founder/employee agents
- `capital_constraints` for investor agents
- `company_scope`
- `recent_context_packets`
- `footprint_density`
- `evidence_coverage`
- `profile_recency_score`

This footprint is the substrate for agent reasoning and tool generation.

The closer the footprint is to a real digital trail, the narrower and more realistic the agent's action manifold should become.

Additional role-assignment schema:

```json
{
  "$id": "RoleAssignment",
  "type": "object",
  "required": ["person_uuid", "company_uuid", "role_type", "active"],
  "properties": {
    "person_uuid": { "type": "string" },
    "company_uuid": { "type": ["string", "null"] },
    "role_type": { "enum": ["FOUNDER", "CEO", "EMPLOYEE", "INVESTOR", "COMPANY_COORDINATOR"] },
    "active": { "type": "boolean" },
    "permissions": { "type": "array", "items": { "type": "string" } }
  }
}
```

### Specter + Cala as the swarm knowledge substrate

The swarm should think over structured knowledge, not just local state variables.

Primary knowledge sources:

- `Specter`
  - person profiles
  - company profiles
  - investor profiles
  - relationship-adjacent static facts
  - fast factual retrieval
- `Cala`
  - current context expansion
  - market/environment web-search-backed synthesis
  - recent exact query enrichment
  - slower but deeper knowledge retrieval

The intended behavior is:

- CEO/founder agents reason over company trajectory, investor pressure, and recent market/company signals
- employee agents reason over company state, role constraints, local workload, and surrounding organizational footprint
- investor agents reason over company evidence, founder footprint, market context, and thesis alignment

This is how the simulation gets closer to real behavior:

- more profile data across people, companies, and investors
- more exact recent context via Cala queries
- more specific entity environment conditioning
- more evidence-conditioned action scoring

This should make the agents think more like:

- founder/CEO agents managing real companies under capital and execution pressure
- employee agents operating inside a specific company with specific leaders and constraints
- investor agents evaluating concrete founder/company signals rather than generic startup archetypes

### Specter UUID mapping and context assembly

Specter should be treated as the fast identity and relationship graph for the simulation.

Required Specter-backed joins:

- `company_uuid -> founder person_uuid[]`
- `company_uuid -> employee person_uuid[]`
- `company_uuid -> investor person_uuid[]` where relevant
- `person_uuid -> person profile`
- `person_uuid -> employment history`
- `person_uuid -> education history`
- `investor person_uuid -> total_raised_funds`
- `investor person_uuid -> historical investment preferences`

This mapping must be cached and normalized into entity bundles before expensive deep-query stages.

### Required knowledge assembly per entity

Before a high-impact decision, each entity should receive an `EntityKnowledgeBundle` assembled from:

1. `CoreProfilePacket`
2. `OrganizationContextPacket`
3. `RecentEventPacket`
4. `RelationshipPacket[]`
5. `MarketContextPacket`
6. `ToolDerivedRiskPacket[]`
7. `RoleConstraintPacket`
8. `CapitalConstraintPacket` for investor agents
9. `DelegationCapabilityPacket`

Schema sketch:

```json
{
  "$id": "EntityKnowledgeBundle",
  "type": "object",
  "required": [
    "entity_id",
    "role",
    "core_profile",
    "organization_context",
    "recent_events",
    "relationships",
    "market_context",
    "risk_packets",
    "footprint_density",
    "evidence_coverage",
    "profile_recency_score"
  ],
  "properties": {
    "entity_id": { "type": "string" },
    "role": { "type": "string" },
    "core_profile": { "type": "object" },
    "organization_context": { "type": "object" },
    "recent_events": { "type": "array", "items": { "type": "object" } },
    "relationships": { "type": "array", "items": { "type": "object" } },
    "market_context": { "type": "object" },
    "risk_packets": { "type": "array", "items": { "type": "object" } },
    "role_constraints": { "type": "object" },
    "capital_constraints": { "type": ["object", "null"] },
    "delegation_capabilities": { "type": "object" },
    "footprint_density": { "type": "number", "minimum": 0, "maximum": 1 },
    "evidence_coverage": { "type": "number", "minimum": 0, "maximum": 1 },
    "profile_recency_score": { "type": "number", "minimum": 0, "maximum": 1 }
  }
}
```

### Role-specific profile emphasis

#### CEO / Founder agents

Must prioritize:

- company profile
- founder profile
- cap table / investor posture approximation
- burn / runway
- market climate
- competitor context
- recent product/user signals
- available employees by role/person UUID
- investor-fit search space

#### Employee agents

Must prioritize:

- role fit and team context
- manager/founder pressure
- workload and morale
- company quality bar
- local execution constraints
- personal background and historical domain fit
- delegated task context from CEO/founder

#### Investor agents

Must prioritize:

- investor profile
- thesis and check-size behavior
- founder profile credibility
- company evidence quality
- market timing and category signals
- hard capital constraint derived from `total_raised_funds`
- currently allocated or simulated deployed capital

### Knowledge freshness requirement

The simulation should prefer recent exact queries whenever possible.

For any externally-derived context packet, persist:

- `queried_at`
- `effective_recency_hours`
- `entity_scope`
- `query_intent`
- `confidence`

Decision policy should discount stale context:

```text
recency_weight = exp(-effective_recency_hours / decay_constant)
```

Suggested decay constants:

- market/news context: `24h`
- company static profile: `168h`
- investor profile: `168h`
- person profile: `336h`

### Agent-generated tools under hard constraints

Agents are allowed to generate or select next-step tools dynamically, but only inside a bounded tool schema registry.

Important distinction:

- agents may **propose** new tool instances or parameterized tool invocations
- agents may **not** invent arbitrary executable code or unconstrained side effects
- any generated tool must compile down to an approved typed tool template

Example:

- acceptable: CEO proposes `hire_employee_by_person_uuid(person_uuid=..., company_uuid=...)`
- acceptable: CEO proposes `delegate_competitor_research(employee_uuid=..., query=...)`
- unacceptable: CEO invents an arbitrary shell command not represented by an approved tool template

Tool generation pipeline:

1. agent observes state + knowledge bundle
2. agent selects a `ToolIntentTemplate`
3. backend validates intent against role legality and factual constraints
4. backend materializes a typed tool call
5. tool executes through MCP or internal adapter
6. execution emits `ToolTrace`

### Agent-generated tool synthesis is template-bound

To keep the system technically implementable and safe, “agent generates tools” means:

- the agent selects or instantiates a tool template
- the backend may expose a newly materialized tool instance for that agent turn
- the backend never allows unconstrained runtime code generation as a production execution path

Required types:

```python
class ToolIntentTemplate(BaseModel):
    template_name: str
    owning_roles: list[str]
    parameter_schema: dict
    mcp_backend: Literal["postgres_specter_mcp", "cala_mcp", "internal"]
    side_effect_level: Literal["read_only", "state_mutation"]

class ToolIntent(BaseModel):
    template_name: str
    actor_id: str
    arguments: dict
    justification_codes: list[str]
```

Examples of valid “generated tools”:

- CEO creates a concrete `hire_employee_by_person_uuid` invocation for a specific company and person
- employee creates a concrete `run_cala_competitor_query` invocation scoped to delegated task context
- investor creates a concrete `deploy_capital_to_company` invocation with validated amount bounds

Examples of invalid “generated tools”:

- arbitrary shell script execution
- arbitrary unrestricted SQL text
- arbitrary Python code emitted by the model

### Tool template registry by role

#### CEO / Founder templates

- `hire_employee_by_person_uuid`
- `fire_employee_by_person_uuid`
- `delegate_research_task`
- `start_fundraising_search`
- `open_investor_outreach`
- `launch_product_discovery`
- `spin_up_competitor_analysis`
- `change_org_priority`
- `allocate_team_budget`

Example CEO tool schema:

```json
{
  "name": "hire_employee_by_person_uuid",
  "type": "object",
  "required": ["company_uuid", "person_uuid", "target_role"],
  "properties": {
    "company_uuid": { "type": "string" },
    "person_uuid": { "type": "string" },
    "target_role": { "enum": ["ENGINEER", "GTM", "PM", "OPS", "DESIGN", "RESEARCH"] }
  }
}
```

#### Employee templates

- `run_cala_competitor_query`
- `compile_market_memo`
- `analyze_customer_segment`
- `recommend_gtm_move`
- `escalate_risk_to_ceo`
- `request_more_context`
- `summarize_domain_landscape`

Example employee research schema:

```json
{
  "name": "run_cala_competitor_query",
  "type": "object",
  "required": ["employee_uuid", "company_uuid", "query_spec"],
  "properties": {
    "employee_uuid": { "type": "string" },
    "company_uuid": { "type": "string" },
    "query_spec": {
      "type": "object",
      "required": ["domain", "objective", "response_schema"],
      "properties": {
        "domain": { "type": "string" },
        "objective": { "enum": ["competitor_map", "gtm_landscape", "pricing_scan", "customer_segment_scan"] },
        "response_schema": { "enum": ["competitor_analysis_v1", "gtm_brief_v1", "pricing_brief_v1"] }
      }
    }
  }
}
```

#### Investor templates

- `query_company_diligence_packet`
- `query_founder_profile_packet`
- `evaluate_company_fit`
- `propose_investment_amount`
- `deploy_capital_to_company`
- `request_followup`
- `pass_on_company`

Example investor deployment schema:

```json
{
  "name": "deploy_capital_to_company",
  "type": "object",
  "required": ["investor_uuid", "company_uuid", "amount_usd"],
  "properties": {
    "investor_uuid": { "type": "string" },
    "company_uuid": { "type": "string" },
    "amount_usd": { "type": "number", "minimum": 1 }
  }
}
```

### MCP-first tool execution

Each individual agent should be equipped with MCP-routed technical skills:

- `postgres_specter_mcp`
- `cala_mcp`

Preferred execution architecture:

```text
agent policy
  -> tool intent
    -> approved tool template
      -> MCP client
        -> postgres Specter MCP
        -> Cala MCP
```

The implementation should bias toward MCP for:

- Specter Postgres queries
- Cala knowledge queries
- future extension of tool libraries

This preserves explicit boundaries, observability, and future swarm portability.

### MCP server inventory

The per-agent environment should mount only approved MCP servers:

- `postgres_specter_mcp`
  - read-only profile/company/investor/team queries
  - optional bounded mutation endpoints for hiring/firing or relationship state updates if implemented through approved procedures
- `cala_mcp`
  - structured knowledge/context/web query execution
  - response-schema-aware research tasks

Per-role MCP access:

- CEO/founder: `postgres_specter_mcp`, `cala_mcp`
- employee: `postgres_specter_mcp` limited profile/team reads, `cala_mcp`
- investor: `postgres_specter_mcp`, `cala_mcp`
- company coordinator: `postgres_specter_mcp` plus internal orchestration only

### Specter Postgres MCP usage

Use Postgres MCP as the fast structured data plane for:

- person/company/investor profile retrieval
- role membership lookup by UUID
- team composition lookup
- investor capital and thesis constraints
- company/employee/investor relationship traversal

Critical requirement:

- SQL access must be mediated through approved query templates or typed repository functions
- agents never emit raw unrestricted SQL directly into execution

Postgres MCP implementation rule:

- expose named query capabilities, not a freeform SQL textbox
- if write operations are needed, implement them as bounded stored-procedure-style actions with strict parameter schemas

Recommended named capabilities:

- `get_company_team(company_uuid)`
- `get_person_profile(person_uuid)`
- `get_investor_profile(person_uuid)`
- `find_investor_candidates(company_uuid, filters)`
- `hire_employee(company_uuid, person_uuid, target_role)`
- `fire_employee(company_uuid, person_uuid)`
- `record_capital_deployment(investor_uuid, company_uuid, amount_usd)`

Recommended interface:

```python
class SpecterProfileRepository(Protocol):
    async def get_company_team(self, company_uuid: str) -> CompanyTeamBundle: ...
    async def get_person_profile(self, person_uuid: str) -> PersonProfile: ...
    async def get_investor_profile(self, person_uuid: str) -> InvestorProfile: ...
    async def search_investors_for_company(self, company_uuid: str, thesis_filters: dict) -> list[InvestorProfile]: ...
```

### Cala MCP usage

Use Cala MCP for:

- recent company context
- recent market/news context
- competitor research
- domain landscape analysis
- delegated employee research tasks

Delegation example flow:

1. CEO/founder identifies a product strategy need
2. CEO queries Specter for the employee/person UUID best suited for the work
3. CEO emits `delegate_research_task(employee_uuid, task_spec)`
4. employee agent receives task plus its own profile footprint
5. employee runs Cala MCP query using role- and profile-conditioned prompt/schema
6. employee returns structured research packet
7. CEO consumes packet in next planning cycle

### Role-conditioned Cala query shaping

Employee Cala requests should be conditioned on:

- job function
- seniority
- prior work experience
- education
- company context
- task objective

Example internal request shape:

```json
{
  "employee_uuid": "uuid",
  "role_context": {
    "title": "GTM Lead",
    "experience_summary": ["ex-OpenAI", "Harvard"],
    "company_domain": "AI sales tooling"
  },
  "task": {
    "type": "competitor_research",
    "question": "latest competitors to current company domain and structured breakdown"
  },
  "response_schema": "competitor_analysis_v1"
}
```

The goal is that the same task delegated to different employees can produce meaningfully different, but still evidence-based, outputs because their footprints differ.

### Swarm review checkpoints

To keep swarm behavior logical under bulk implementation, each company swarm turn must pass three explicit review checkpoints:

1. `pre_turn_context_review`
2. `post_tool_evidence_review`
3. `pre_commit_consistency_review`

Checkpoint contract:

- `pre_turn_context_review`
  - verifies required `EntityKnowledgeBundle` fields exist
  - verifies role-scoped permissions and company membership
  - verifies minimum context floor for high-impact actions
- `post_tool_evidence_review`
  - verifies tool outputs are schema-valid and recent enough to influence scoring
  - verifies evidence packets were normalized and attached to the correct entity/company scope
  - verifies no untraced tool result altered candidate ranking
- `pre_commit_consistency_review`
  - verifies selected action is still legal after all delegated/tool-derived updates
  - verifies no conflicting company-level action has higher priority
  - verifies traces, score breakdown, and latent pre/post state are complete

These review checkpoints should be implemented as deterministic middleware around the swarm turn reducer, not as optional debug hooks.

### Agent CLI skill model

For implementation purposes, “CLI skill calls” should be modeled as agent-visible skill abstractions that resolve to MCP-backed tool calls, not arbitrary shell execution.

Meaning:

- the agent may conceptually “call a skill”
- the runtime resolves that to a typed `ToolIntent`
- the tool intent is executed through MCP or internal adapters
- all calls remain auditable and testable

This preserves the spirit of CLI-assisted agency without making the runtime depend on uncontrolled subprocess behavior.

### Per-agent skill registry

Each runtime agent should receive a typed `AgentSkillRegistry` assembled from role, company scope, and enabled providers.

Required interface:

```python
class AgentSkillRegistry(BaseModel):
    agent_id: str
    role: Literal["CEO", "EMPLOYEE", "INVESTOR", "COMPANY_COORDINATOR"]
    enabled_skill_ids: list[str]
    enabled_tool_templates: list[str]
    enabled_mcp_servers: list[str]
    helper_model_tiers: list[str]
```

`Skill` in runtime terms means a bounded capability bundle exposed to the agent, for example:

- `specter_profile_lookup_skill`
- `team_mutation_skill`
- `cala_research_skill`
- `investor_diligence_skill`
- `company_synthesis_skill`
- `hf_cpu_helper_skill`

These runtime skills are product features, distinct from Codex/CLI implementation skills used by coding agents.

### Strands-powered per-agent execution

Strands should power the per-agent LLM wrapper layer for the swarm.

Planned role of Strands:

- instantiate per-agent role wrappers
- bind allowed skills and tool templates to each agent
- enforce structured outputs per turn
- support swarm-style delegation and inter-agent handoff
- preserve a future path to richer agent-to-agent orchestration without rewriting the simulation core

Required wrapper layout:

- `apps/api/src/startup_sim/integrations/strands/client.py`
- `apps/api/src/startup_sim/integrations/strands/agent_factory.py`
- `apps/api/src/startup_sim/integrations/strands/skill_bindings.py`
- `apps/api/src/startup_sim/integrations/strands/swarm_runtime.py`

Per-agent Strands binding rule:

- CEO/founder agent
  - `specter_profile_lookup_skill`
  - `team_mutation_skill`
  - `fundraising_search_skill`
  - `delegation_skill`
  - `company_synthesis_skill`
- employee agent
  - `specter_profile_lookup_skill` with read-limited scope
  - `cala_research_skill`
  - `hf_cpu_helper_skill`
  - `risk_escalation_skill`
- investor agent
  - `specter_profile_lookup_skill`
  - `investor_diligence_skill`
  - `capital_deployment_skill`
  - `company_synthesis_skill`

All Strands-bound skills must compile down to the same typed tool-intent and MCP contracts defined elsewhere in this plan.

### Constraint legality rules

All role actions must satisfy hard factual constraints before execution.

Examples:

- investor cannot deploy more than `remaining_deployable_capital`
- `remaining_deployable_capital <= total_raised_funds - already_allocated_funds`
- CEO cannot fire or hire by a person UUID that is not valid in Specter context
- employee cannot execute CEO-only staffing tools
- delegated research cannot target a non-existent employee UUID
- product strategy cannot assume nonexistent company domains or unsupported facts

This rule is absolute:

- mathematically impossible actions are illegal
- factually unsupported actions are illegal
- role-incompatible actions are illegal

Additional legality checks:

- generated tool must belong to the actor's `allowed_tool_templates`
- generated MCP call must belong to the actor's `allowed_mcp_servers`
- generated delegation target must exist and belong to the correct company scope unless cross-company interaction is explicitly allowed
- generated funding outreach cannot target investors outside the currently queryable investor set

### Constraint and legality engine

Legality checks should be centralized in a dedicated engine instead of being scattered through agent policies.

Required interface:

```python
class ConstraintEngine(Protocol):
    def validate_candidate(
        self,
        *,
        candidate: CandidateAction,
        actor: AgentState,
        company_state: CompanyState,
        knowledge_bundle: EntityKnowledgeBundle,
    ) -> ConstraintValidationResult: ...
```

`ConstraintValidationResult` must include:

- `is_valid: bool`
- `violation_codes: list[str]`
- `downgrade_action_type: str | None`
- `bounded_amount: float | None`
- `review_notes: list[str]`

Required violation codes:

- `role_permission_denied`
- `person_uuid_not_found`
- `company_scope_mismatch`
- `investor_capital_exceeded`
- `tool_template_not_allowed`
- `mcp_capability_denied`
- `evidence_floor_not_met`
- `delegation_target_invalid`
- `unsupported_world_fact`

The legality engine must run before every state-mutating action and before every tool call with side effects.

### Capital deployment model for investors

Investor agent state must include:

- `total_raised_funds`
- `allocated_funds`
- `remaining_deployable_capital`
- `portfolio_constraints`

Constraint formula:

```text
remaining_deployable_capital =
  max(total_raised_funds - allocated_funds, 0)
```

Investment proposal validation:

```text
proposed_investment_amount <= remaining_deployable_capital
```

If not satisfied:

- reject action
- emit `ConstraintViolationTrace`
- downgrade to `request_followup` or `pass`

### Files to create for agent runtime and MCP skill execution

```text
TODO: create per-agent runtime and skill files
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/apps/api/src/startup_sim/agents/runtime_config.py
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/apps/api/src/startup_sim/agents/agent_environment.py
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/apps/api/src/startup_sim/agents/tool_intents.py
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/apps/api/src/startup_sim/agents/role_assignments.py
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/apps/api/src/startup_sim/mcp/server_registry.py
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/apps/api/tests/test_generated_tool_templates.py
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/apps/api/tests/test_mcp_capability_bounds.py
```

### Strands emphasis

The intended implementation should align to Strands swarm patterns and Python API usage through:

- `set_up/strand_agents/swarm.md`
- `set_up/strand_agents/python_api.md`

Even though those local files are currently empty stubs, this plan still requires the implementation to preserve the architectural direction:

- use Strands-compatible role-specialized agent wrappers
- keep tool registration explicit and typed
- keep agent-to-agent coordination bounded and inspectable
- preserve a future path to real Strands swarm orchestration without re-architecting the simulation core

The concrete implementation may initially use a thin local orchestration layer that mirrors Strands swarm behavior if the local Strands docs are incomplete, but the code structure must be prepared for direct Strands integration.

### Interfaces

```python
class PolicyEngine(Protocol):
    async def decide(self, request: PolicyRequest) -> PolicyDecision: ...

class ToolRouter(Protocol):
    async def enrich(
        self,
        session: SimulationSession,
        unresolved: list[CandidateAction],
        base_context: list[ContextPacket],
    ) -> list[ContextPacket]: ...

class LatentUpdater(Protocol):
    def update(
        self,
        before: ParadigmVector,
        outcome: OutcomeSummary,
        evidence: list[ContextPacket],
    ) -> ParadigmVector: ...
```

### Base scoring

For each candidate:

```text
base_score =
  dot(role_objective_weights, action_feature_vector)
  + dot(paradigm_projection, action_feature_vector)
  + recent_outcome_bonus
  - burn_penalty
  - morale_penalty
  - coordination_drag
  - uncertainty_penalty
```

Role objective emphases:

- CEO: `runway`, `pmf_signal`, `velocity`, `narrative_coherence`
- Employee: `craft_quality`, `clarity`, `workload_sanity`, `customer_signal`
- Investor: `evidence`, `upside`, `capital_efficiency`, `execution_trust`

### Model adjustment contract

The model outputs bounded score nudges and reason codes only:

```json
{
  "$id": "PolicyAdjustment",
  "type": "object",
  "required": ["candidate_deltas", "confidence", "reason_codes", "requested_context"],
  "properties": {
    "candidate_deltas": {
      "type": "array",
      "items": {
        "type": "object",
        "required": ["candidate_id", "delta"],
        "properties": {
          "candidate_id": { "type": "string" },
          "delta": { "type": "number", "minimum": -0.15, "maximum": 0.15 }
        }
      }
    },
    "confidence": { "type": "number", "minimum": 0, "maximum": 1 },
    "reason_codes": {
      "type": "array",
      "items": {
        "enum": [
          "burn_pressure",
          "market_pull",
          "investor_skepticism",
          "employee_fatigue",
          "quality_risk",
          "speed_opportunity",
          "evidence_gap",
          "narrative_gap",
          "runway_cliff",
          "pmf_positive"
        ]
      }
    },
    "requested_context": {
      "type": "array",
      "items": {
        "enum": [
          "salary_band",
          "competitor_landscape",
          "funding_climate",
          "retention_benchmark",
          "user_research_pattern",
          "go_to_market_risk"
        ]
      }
    }
  }
}
```

### Action validation pipeline

Before a candidate action is committed, it must pass:

1. `RoleLegalityCheck`
2. `BudgetAndConstraintCheck`
3. `EvidenceSufficiencyCheck`
4. `PolicyAdjustmentBoundCheck`
5. `CoordinationConsistencyCheck`
6. `TraceCompletenessCheck`

If any check fails, the action is rejected and the next-ranked valid candidate is evaluated.

### Evidence sufficiency threshold

Each candidate carries `uncertainty` and `evidence_weight`.

```text
effective_score =
  base_score
  + model_delta
  + evidence_weight_bonus
  - uncertainty_penalty
```

No high-impact action may commit unless:

```text
evidence_weight >= role_threshold
```

Recommended thresholds:

- CEO high-impact actions: `0.60`
- Employee high-impact actions: `0.45`
- Investor high-impact actions: `0.55`

If below threshold:

- route more tool enrichment if budget allows
- otherwise downgrade to safer fallback actions such as `hold`, `ask_for_clarity`, or `request_metrics`

### Learning/update rules

Latents update after realized outcomes:

```text
delta =
  0.35 * reward_signal_vector
  + 0.25 * tool_evidence_vector
  + 0.20 * social_feedback_vector
  + 0.20 * role_specific_outcome_vector

paradigm_next = clip(paradigm_prev + learning_rate * delta, -1.0, 1.0)
```

Learning rates:

- CEO: `0.08`
- Employee: `0.05`
- Investor: `0.04`

Example adaptation:

- repeated failed risky launches reduce `risk`, increase `frugality`
- strong evidence-backed investor responses increase `evidence_hunger`
- quality incidents increase `rigor` and reduce `speed`

### World KPIs

```text
runway_months = cash_k / max(burn_k, 1)

velocity =
  clamp(
    0.40 * team_focus
    + 0.25 * morale_avg
    + 0.20 * context_quality
    - 0.15 * coordination_drag,
    0, 100
  )

pmf_signal =
  sigmoid(
    0.30 * retention_proxy
    + 0.25 * user_pull
    + 0.20 * velocity
    + 0.15 * narrative_clarity
    - 0.20 * quality_risk
  )

investor_interest =
  sigmoid(
    0.35 * pmf_signal
    + 0.20 * market_temperature
    + 0.20 * evidence_quality
    + 0.15 * narrative_clarity
    - 0.30 * burn_multiple
  )
```

### Agent files to create

```text
TODO: create agent policy files
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/apps/api/src/startup_sim/agents/base.py
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/apps/api/src/startup_sim/agents/ceo_policy.py
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/apps/api/src/startup_sim/agents/employee_policy.py
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/apps/api/src/startup_sim/agents/investor_policy.py
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/apps/api/src/startup_sim/agents/latent_update.py
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/apps/api/src/startup_sim/llm/mistral_json_policy.py
```

---

## E) Tool layer (Specter/Cala) + routing + cache + budgets

### Routing philosophy

- `Specter`: low-latency static/factual context
- `Cala`: slower deeper synthesis
- Mistral policy calls are separate from tool routing budget
- the router owns provider choice, not the model

### Query classes

| Query class | Default route | Timeout | TTL | Budget cost |
|---|---|---:|---:|---:|
| `person_profile` | Specter | 800 ms | 336 h | 1 |
| `company_profile` | Specter | 800 ms | 168 h | 1 |
| `investor_profile` | Specter | 800 ms | 168 h | 1 |
| `salary_band` | Specter | 800 ms | 24 h | 1 |
| `funding_climate` | Specter | 800 ms | 6 h | 1 |
| `retention_benchmark` | Specter | 800 ms | 6 h | 1 |
| `recent_company_context` | Cala | 3500 ms | 24 h | 3 |
| `recent_market_context` | Cala | 3500 ms | 24 h | 3 |
| `founder_context` | Cala | 3500 ms | 24 h | 3 |
| `competitor_landscape` | Specter then Cala if low confidence | 800 / 3500 ms | 6 h | 1 / 3 |
| `go_to_market_risk` | Cala | 3500 ms | session | 3 |
| `user_research_pattern` | Cala | 3500 ms | session | 3 |
| `pivot_risk` | Cala | 3500 ms | session | 3 |

### Budget governor per tick

`knowledge_budget` slider maps to per-tick units:

```text
0 -> 0
1..2 -> 2
3..4 -> 3
5..6 -> 5
7..8 -> 7
9..10 -> 9
```

Costs:

- Specter call = `1`
- Cala call = `3`
- Mistral policy call = `2`
- cache hit = `0`
- stale cache fallback = `0`

Caps:

- max `2` Cala calls per tick
- max `6` Specter calls per tick
- max `2` policy calls per tick

When exhausted:

- emit `budget_denied` `ToolTrace`
- continue with deterministic heuristic context packets

### Caching

Two layers:

- L1: in-process TTL cache, `max_entries=256`
- L2: Supabase `tool_cache_entries`

Cache key:

```text
sha256(provider + query_class + canonical_json(params) + schema_version + replay_mode)
```

Fallback order:

1. fresh L1
2. fresh L2
3. stale L2 if deterministic replay or timeout
4. alternate provider if budget allows
5. heuristic packet with low confidence

### Knowledge retrieval policy

Every entity should attempt to maintain a minimum profile/context floor before making high-impact decisions.

Minimum floor by role:

- CEO/founder:
  - `company_profile`
  - `founder_context`
  - `recent_market_context`
  - at least one investor or company external context packet
- Employee:
  - `company_profile`
  - role-local organization context
  - at least one recent event packet
- Investor:
  - `investor_profile`
  - `company_profile`
  - `recent_company_context`
  - `recent_market_context`

If the floor is not met:

- the router should spend budget first on missing profile/context packets before discretionary deep queries
- if budget is exhausted, the policy engine must lower confidence and bias toward conservative actions

### Deterministic mode

Deterministic mode enforces:

- Mistral `response_format = json_schema`
- Mistral `random_seed = session.seed + tick_index + actor_hash`
- replay-first tool routing
- no live query if replay artifact exists
- canonical JSON hashing

### Mistral usage

Use the API features already represented in `set_up/openapi_mistral.yaml`:

- `response_format.type = json_schema`
- `random_seed`
- structured tool/event semantics
- no free-text downstream parsing

### High-context Mistral call policy

Mistral is the primary reasoning model family for agent decision calls. The plan should distinguish between:

- high-volume bounded action calls
- higher-context synthesis or conflict-resolution calls

Recommended usage split:

- small/medium Mistral models
  - one agent turn
  - one tool-intent ranking pass
  - one delegation proposal
  - one legality-aware fallback pass
- medium/high-context Mistral calls
  - company-level synthesis after multiple employee reports
  - investor diligence synthesis over multiple evidence packets
  - CEO conflict resolution when several valid high-impact options survive legality checks

Required constraints for all Mistral calls:

- every call must declare `schema_name`
- every call must carry `session_id`, `tick_index`, `actor_id`, `seed`, and `role`
- every call must emit `InferenceTrace`
- no call may return freeform action text as the sole control signal

Recommended model-routing interface:

```python
class ModelRoutingPolicy(BaseModel):
    use_case: Literal["agent_action", "company_synthesis", "investor_diligence", "fallback_policy"]
    context_window_class: Literal["small", "medium", "high"]
    preferred_provider: Literal["brev_gpu", "mistral_api", "hf_cpu"]
    model_name: str
    max_tokens: int
    timeout_ms: int
```

### Hugging Face Space and CPU role

Hugging Face should be used in two distinct ways:

1. the `iso-business` Space as importable product/design/source inspiration once source access is available
2. Hugging Face CPU inference as a lower-cost support compute tier for helper workloads that do not need Brev GPU throughput

Hugging Face CPU is not the primary path for dense swarm action selection. It should handle:

- preprocessing and normalization
- light summarization of large evidence bundles
- non-critical embedding or classifier-style helper tasks if introduced
- offline fixture generation or batch enrichment during QA/setup

It should not handle:

- the primary per-agent action-selection hot path during dense multi-agent ticks
- latency-sensitive company-swarm turns where several agents need bounded decisions quickly

CPU helper examples:

- condense a large Cala research packet into a smaller structured memo before CEO review
- build or refresh offline persona/profile summaries for fixtures
- generate static export artifacts for demo/report panels

Required backend boundary:

```python
class HelperModelClient(Protocol):
    async def run_helper_task(
        self,
        *,
        task_name: str,
        payload: dict,
        output_schema: dict,
        timeout_ms: int,
    ) -> dict: ...
```

Concrete implementations:

- `HuggingFaceCpuHelperClient`
- `ReplayHelperClient`

Suggested tasks owned by `HuggingFaceCpuHelperClient`:

- `compress_research_packet_v1`
- `profile_summary_refresh_v1`
- `trace_export_compaction_v1`
- `offline_fixture_enrichment_v1`

### Brev GPU throughput role

Brev-backed GPU inference is the primary high-throughput execution plane for agentic swarms.

Why:

- each company tick may require many independent bounded LLM calls
- each employee, founder, and investor can require one or more action-ranking or tool-selection calls
- direct hosted throughput caps would otherwise become the dominant limit on simulation quality

Primary Brev GPU responsibilities:

- agent action ranking
- delegation proposal generation
- investor diligence/action passes
- company-level synthesis after multiple reports
- fallback re-evaluation when legality or evidence checks reject the top choice

Throughput planning assumption:

- one dense tick may trigger `N_agents * 1..3` Mistral calls
- scheduler must therefore meter by both token budget and concurrency budget

Required runtime controls:

- `max_concurrent_policy_calls`
- `max_concurrent_synthesis_calls`
- `queue_timeout_ms`
- `per_tick_inference_budget`
- `provider_backpressure_mode`

Backpressure policy:

- if Brev GPU queue depth crosses threshold, downgrade optional synthesis calls first
- preserve legal action-selection calls before richer narrative or summary calls
- if still saturated, fall back to cached or replay-safe policy outputs

### AWS Bedrock orchestration role

AWS Bedrock is the orchestration and sandbox-supervision layer in this plan, not the primary model-inference path.

Planned Bedrock responsibilities:

- supervise agent sandbox/session lifecycles
- coordinate isolated execution environments for coding/QA agent runs where applicable
- maintain higher-level orchestration metadata for agent runs, task assignment, and sandbox health
- provide a managed orchestration envelope around the simulation-support agents if that path is implemented

Bedrock does not replace:

- Brev GPU for high-throughput Mistral inference
- Strands role-specialized agent wrappers
- the local simulation engine's deterministic state reducer

Recommended orchestration split:

```text
Bedrock orchestration plane
  -> sandbox/session lifecycle
  -> agent-run supervision
  -> task routing / sandbox metadata

Strands runtime plane
  -> per-agent wrapper
  -> skill registry
  -> tool invocation contracts
  -> swarm communication

Brev GPU inference plane
  -> high-throughput Mistral structured calls

HF CPU helper plane
  -> low-priority helper-model tasks
```

If Bedrock orchestration is unavailable in MVP time, keep the same interfaces and use a local orchestrator adapter so the architecture remains swappable.

Recommended interface:

```python
class SandboxOrchestrator(Protocol):
    async def start_agent_sandbox(self, *, agent_id: str, sandbox_class: str) -> SandboxHandle: ...
    async def stop_agent_sandbox(self, *, sandbox_id: str) -> None: ...
    async def dispatch_agent_task(self, *, sandbox_id: str, task_payload: dict) -> SandboxTaskResult: ...
```

### Inference transport and throughput strategy

Agentic multi-entity simulation can exceed the practical throughput ceiling of direct hosted APIs during dense multi-agent ticks. This plan therefore prioritizes running Mistral inference on provisioned GPU capacity instead of depending solely on the NVIDIA hosted API path.

Preferred inference path:

1. provision GPU-backed inference on Brev / Shadeform-style infrastructure
2. host a Mistral-compatible inference endpoint there
3. point the simulation backend to that endpoint for swarm/policy calls
4. reserve direct API use for fallback, smoke tests, or low-volume operations

Operational compute split:

- Brev / Shadeform GPU: high-volume small/medium Mistral policy calls for agent actions
- Hugging Face CPU or lower-cost compute: auxiliary low-latency orchestration, lighter preprocessing, or non-critical support tasks when appropriate

Interpretation:

- each individual bounded LLM decision may correspond to one action-selection or tool-intent step from one agent
- the infrastructure must therefore support many small/medium calls rather than a few long narrative calls

Reason:

- the simulation may require multiple bounded LLM calls per tick across multiple agents
- direct hosted throughput caps can distort swarm behavior by introducing artificial throttling
- dedicated GPU-backed inference keeps agent dynamics responsive and stable

### Brev / Shadeform emphasis

The implementation plan should explicitly preserve a path to running Mistral models through Brev-hosted or Shadeform-provisioned GPU infrastructure to avoid the cited `40` throughput cap on the NVIDIA API path.

Local references for this direction:

- `set_up/shadeform/api_docs.md`
- the `set_up/shadeform/` API reference set
- hackathon transcript notes about Brev GPU credits and local deployment

Because `set_up/shadeform/api_docs.md` is currently empty, the actual usable local reference body is the endpoint-specific `set_up/shadeform/*.md` corpus. The implementation should treat those files as the operational API reference for provisioning or at least for preserving deploy automation hooks.

### Inference topology

```text
simulation backend
  -> inference client
    -> primary: Brev / Shadeform GPU-hosted Mistral endpoint
    -> fallback: direct Mistral API
    -> last resort: deterministic replay fixtures
```

Inference client requirements:

- endpoint must support structured JSON outputs
- request path must include per-call timeout and retry budget
- request metadata must include `session_id`, `tick_index`, `actor_id`, and `seed`
- all provider calls must emit `ToolTrace` or `InferenceTrace`

### Provider abstraction

Create a provider-agnostic model client:

```python
class PolicyModelClient(Protocol):
    async def complete_json_schema(
        self,
        *,
        schema_name: str,
        schema: dict,
        messages: list[dict],
        seed: int,
        timeout_ms: int,
        tags: dict[str, str],
    ) -> dict: ...
```

Concrete implementations:

- `BrevMistralClient`
- `DirectMistralApiClient`
- `ReplayPolicyClient`

Routing default:

- deterministic replay mode -> `ReplayPolicyClient`
- normal multi-agent run -> `BrevMistralClient`
- fallback on infra failure -> `DirectMistralApiClient`

### Tool and swarm files to create

```text
TODO: create swarm and MCP integration files
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/apps/api/src/startup_sim/swarm/company_swarm.py
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/apps/api/src/startup_sim/swarm/agent_runtime.py
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/apps/api/src/startup_sim/swarm/delegation.py
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/apps/api/src/startup_sim/swarm/constraints.py
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/apps/api/src/startup_sim/orchestration/bedrock_orchestrator.py
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/apps/api/src/startup_sim/orchestration/local_orchestrator.py
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/apps/api/src/startup_sim/mcp/postgres_specter_client.py
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/apps/api/src/startup_sim/mcp/cala_client.py
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/apps/api/src/startup_sim/tools/generated_tool_registry.py
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/apps/api/src/startup_sim/tools/tool_templates.py
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/apps/api/src/startup_sim/tools/agent_skill_registry.py
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/apps/api/tests/test_swarm_delegation.py
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/apps/api/tests/test_investor_capital_constraints.py
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/apps/api/tests/test_role_tool_legality.py
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/apps/api/tests/test_bedrock_orchestration_adapter.py
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/apps/api/tests/test_agent_skill_registry.py
```

### Specter blocker

`Specter` is a hard requirement in product logic, but there is no local doc or credential for it. MVP plan therefore ships an adapter plus deterministic stub.

```text
TODO: create Specter integration surfaces
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/apps/api/src/startup_sim/tools/specter_client.py
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/apps/api/src/startup_sim/tools/specter_stub.py
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/fixtures/specter_stub/golden_seed_424242.json
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/.env.example
```

`.env.example` must include:

```text
SPECTER_API_KEY=
SPECTER_BASE_URL=
CALAI_API_KEY=
SUPABASE_URL=
SUPABASE_PROJECT_REF=
SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
MISTRAL_API_KEY=
BREV_MISTRAL_BASE_URL=
BREV_MISTRAL_API_KEY=
HF_API_TOKEN=
HF_SPACE_ID=mistral-hackaton-2026/iso-business
BEDROCK_REGION=
BEDROCK_AGENT_RUNTIME_ENABLED=false
```

### Tool files to create

```text
TODO: create tool-layer files
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/apps/api/src/startup_sim/tools/router.py
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/apps/api/src/startup_sim/tools/cache.py
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/apps/api/src/startup_sim/tools/budget.py
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/apps/api/src/startup_sim/tools/cala_client.py
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/apps/api/src/startup_sim/tools/types.py
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/apps/api/src/startup_sim/inference/base.py
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/apps/api/src/startup_sim/inference/brev_mistral_client.py
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/apps/api/src/startup_sim/inference/direct_mistral_client.py
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/apps/api/src/startup_sim/inference/replay_client.py
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/apps/api/src/startup_sim/inference/hf_cpu_helper_client.py
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/apps/api/src/startup_sim/knowledge/entity_bundle_builder.py
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/apps/api/src/startup_sim/knowledge/profile_scoring.py
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/apps/api/tests/test_entity_knowledge_bundle.py
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/apps/api/tests/test_inference_routing.py
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/apps/api/tests/test_hf_cpu_helper_client.py
```

---

## F) UI (toggle-only) + mapping table (toggle -> structured input) + output panels

### UI principles

- no text inputs
- no prompt fields
- all controls map directly to `SimulationConfig`
- all outputs are structured, schema-valid JSON projected into panels
- the city view is visual context, not the source of truth

### Control mapping table

| UI control | Widget | Values | JSON field |
|---|---|---|---|
| Scenario preset | segmented control | `golden_seed_424242`, `b2b_saas`, `consumer_game`, `ai_tooling`, `fintech_ops` | `preset` |
| Sector | segmented control | `gaming`, `b2b_saas`, `ai_devtools`, `fintech`, `creator_tools` | `sector` |
| Region | segmented control | `us`, `uk`, `eu` | `region` |
| Stage | segmented control | `idea`, `pre_seed`, `seed` | `stage` |
| Employee count | slider | `2..8` | `employee_count` |
| Investor count | slider | `1..4` | `investor_count` |
| Runway months | slider | `3..24` | `runway_months` |
| Starting cash | slider | `100..2500` | `starting_cash_k` |
| Market temperature | slider | `0..100` | `market_temperature` |
| Risk appetite | slider | `0..100` | `risk_appetite` |
| Knowledge budget | slider | `0..10` | `knowledge_budget` |
| Tick count | slider | `8..16` | `tick_count` |
| Use Specter | toggle | `true/false` | `use_specter` |
| Use Cala | toggle | `true/false` | `use_cala` |
| Deterministic mode | toggle | `true/false` | `deterministic_mode` |
| Seed preset | segmented control | `424242`, `20260228`, `777001` | `seed` |

### Output panels

- `City/Company View`
- `Company Overview`
- `Actor Grid`
- `Tick Timeline`
- `Decision Trace Inspector`
- `Tool Provenance Panel`
- `Replay Integrity Panel`
- `Export Panel`

### Frontend files to create

```text
TODO: create frontend files
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/apps/web/package.json
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/apps/web/src/main.tsx
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/apps/web/src/App.tsx
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/apps/web/src/components/ControlPanel.tsx
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/apps/web/src/components/CityViewport.tsx
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/apps/web/src/components/CompanyOverview.tsx
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/apps/web/src/components/ActorGrid.tsx
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/apps/web/src/components/DecisionTracePanel.tsx
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/apps/web/src/components/ToolTracePanel.tsx
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/apps/web/src/components/ReplayPanel.tsx
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/apps/web/src/lib/api.ts
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/apps/web/src/lib/types.ts
```

---

## G) Persistence (Supabase) + session schema

### Supabase environment truth

Current `.env` is not production-ready for implementation:

- `SUPABSE_WORKSPACE_ID` is misspelled
- `SUPABASE_URL` is missing
- `SUPABASE_ANON_PUBLIC` and `SUPABASE_ANON_PUBLIC_SERVICE_ROLE` are non-canonical names
- values may reference different project identifiers

Normalize before implementation.

### Tables

#### `sim_sessions`

- top-level sessions

#### `session_ticks`

- canonical per-tick snapshots

#### `decision_traces`

- one row per decision event

#### `tool_traces`

- one row per tool/cache route

#### `tool_cache_entries`

- persistent cached packets

#### `golden_runs`

- final replay hashes and summary payloads

### SQL shape

```sql
create table sim_sessions (
  session_id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  seed bigint not null,
  status text not null check (status in ('created', 'primed', 'running', 'paused', 'completed', 'failed')),
  deterministic_mode boolean not null,
  config jsonb not null,
  current_tick integer not null default 0,
  latest_snapshot jsonb not null
);

create table session_ticks (
  session_id uuid not null references sim_sessions(session_id) on delete cascade,
  tick_index integer not null,
  created_at timestamptz not null default now(),
  snapshot jsonb not null,
  metrics jsonb not null,
  primary key (session_id, tick_index)
);

create table decision_traces (
  trace_id uuid primary key default gen_random_uuid(),
  session_id uuid not null references sim_sessions(session_id) on delete cascade,
  tick_index integer not null,
  actor_id text not null,
  role text not null,
  seed bigint not null,
  trace jsonb not null
);

create table tool_traces (
  trace_id uuid primary key default gen_random_uuid(),
  session_id uuid not null references sim_sessions(session_id) on delete cascade,
  tick_index integer not null,
  provider text not null,
  route text not null,
  cache_key text not null,
  cache_status text not null,
  trace jsonb not null
);

create table tool_cache_entries (
  cache_key text primary key,
  provider text not null,
  query_class text not null,
  expires_at timestamptz not null,
  payload jsonb not null,
  payload_hash text not null
);

create table golden_runs (
  run_id uuid primary key default gen_random_uuid(),
  preset text not null,
  seed bigint not null,
  normalized_hash text not null,
  summary jsonb not null,
  created_at timestamptz not null default now()
);
```

### Persistence files to create

```text
TODO: create persistence files
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/supabase/migrations/20260228_001_init_sim.sql
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/apps/api/src/startup_sim/persistence/supabase_repo.py
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/apps/api/src/startup_sim/persistence/models.py
```

---

## H) Observability (DecisionTrace, ToolTrace, metrics) + QA determinism

### `DecisionTrace` minimum fields

- `trace_id`
- `session_id`
- `tick_index`
- `actor_id`
- `role`
- `seed`
- `policy_version`
- `policy_mode`
- `observation_hash`
- `candidate_scores`
- `chosen_action`
- `latent_before`
- `latent_after`
- `reason_codes`
- `tool_trace_ids`
- `expected_outcome`
- `realized_outcome`
- `duration_ms`

### `ToolTrace` minimum fields

- `trace_id`
- `session_id`
- `tick_index`
- `seed`
- `provider`
- `route_reason`
- `query_class`
- `normalized_params`
- `cache_key`
- `cache_status`
- `timeout_ms`
- `latency_ms`
- `budget_units`
- `result_hash`
- `provenance`
- `replay_mode`

### Metrics per tick

- `cash_k`
- `burn_k`
- `runway_months`
- `velocity`
- `quality`
- `pmf_signal`
- `investor_interest`
- `morale_avg`
- `fatigue_avg`
- `context_quality`
- `tool_budget_used`
- `determinism_hash`

### Determinism harness

Deterministic mode passes only if the following match:

- ordered chosen action types
- ordered reason codes
- ordered provider routes
- normalized final snapshot JSON
- final `determinism_hash`

Allowed drift:

- timestamps
- observed network latency
- browser rendering timing

### Regression assets to create

```text
TODO: create regression assets
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/fixtures/presets/golden_seed_424242.json
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/fixtures/tool_replays/golden_seed_424242/specter.json
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/fixtures/tool_replays/golden_seed_424242/cala.json
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/fixtures/golden_outputs/golden_seed_424242.snapshot.json
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/apps/api/tests/test_schemas.py
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/apps/api/tests/test_tick_loop.py
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/apps/api/tests/test_tool_router.py
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/apps/api/tests/test_deterministic_replay.py
```

### Test cases

- schema validation rejects out-of-range controls
- same seed + replay fixtures produce same normalized output hash
- budget exhaustion emits `budget_denied` traces and simulation continues
- Specter timeout falls back deterministically
- Cala disabled still yields valid decisions
- Hugging Face CPU helper tasks never take over the primary action-selection hot path
- Brev backpressure downgrades optional synthesis calls before core action-selection calls
- invalid Mistral schema output is retried once and then downgraded deterministically
- Bedrock orchestrator adapter can be swapped for local orchestrator without changing simulation contracts
- Strands-bound skill registry never exposes role-forbidden skills to an agent
- burnout changes action distribution
- investor skepticism increases after negative PMF deltas
- no free-text input components exist in the frontend

---

## I) Slice plan (≤45 min each): files, commands, tests, demo check

### Slice 0 — Repo convergence and provenance bootstrap (≤45 min)

Goal: create the real centralized monorepo before feature work.

Files:

- `UPSTREAMS.lock.json`
- `docs/provenance/upstreams.md`
- `docs/provenance/import-decisions.md`
- `scripts/import_isometric_city.sh`
- `scripts/import_hf_space.sh`
- `Makefile`
- `apps/web/`
- `apps/api/pyproject.toml`

Commands:

```bash
git clone git@github.com:frankterpo/mistral_hack_london_2026.git /tmp/mistral_hack_london_2026
rsync -a /Users/franciscoterpolilli/Projects/mistral_hack_london_2026/set_up/ /tmp/mistral_hack_london_2026/set_up/

git clone --depth 1 https://github.com/amilich/isometric-city.git /tmp/isometric-city
rsync -a --delete --exclude .git /tmp/isometric-city/ /tmp/mistral_hack_london_2026/apps/web/

python3 scripts/verify_upstreams.py
```

Tests:

- `apps/web` installs and builds
- `apps/api` resolves Strands dependency
- upstream verification passes

Demo check:

- one repo contains imported UI shell, pinned backend dependency, and provenance manifest

Acceptance criteria:

- no deploy path requires external cloning during the demo

### Worktree choreography

After authenticated clone:

```bash
cd /tmp/mistral_hack_london_2026
git fetch --all --prune
git switch -c main
git worktree add ../mhl26-core -b feat/core-sim
git worktree add ../mhl26-ui -b feat/ui-city
git worktree add ../mhl26-ops -b feat/ops-provenance
git worktree add ../mhl26-qa -b feat/qa-harness
```

Each worktree has a narrow responsibility and should be driven by separate CLI coding/QA agents instead of one long-running generalist session.

Supervisor choice locked by this plan:

- primary terminal supervisor: `tmux`
- primary launcher: `/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/scripts/launch_tmux_codex_agents.sh` if aligned with this contract
- optional app-process runner: `Overmind` only for app servers and watcher processes, not for coding-agent supervision
- optional file-watch tool: `watchexec` only inside the QA worktree for narrow rerun loops
- not recommended as the primary control plane for this repo: `Zellij`

Rationale:

- the local environment already has tmux-oriented workflows and approved command patterns
- tmux is sufficient for pane/session supervision, log tailing, and scripted launches
- adding Zellij as a second control plane creates unnecessary operator divergence during a hackathon
- Overmind is useful for booting servers, but it is not the authoritative swarm supervisor

#### Worktree responsibilities

- `../mhl26-core`
  - simulation engine
  - policy/scoring
  - tool router
  - Strands-compatible swarm orchestration
  - inference client abstraction and Brev-first routing
  - Hugging Face CPU helper client integration
  - Bedrock/local sandbox orchestrator adapter
  - runtime settings
  - API schemas and endpoints
- `../mhl26-ui`
  - imported `isometric-city` integration
  - control panel
  - trace panels
  - city viewport and UI composition
  - apply Vercel / Next.js best-practice guidance to the imported app shell without breaking the structured-control UX contract
- `../mhl26-ops`
  - provenance manifests
  - import scripts
  - Supabase migrations
  - Docker/build/deploy scripts
- `../mhl26-qa`
  - regression harness
  - deterministic replay checks
  - integration smoke tests
  - trace assertions

#### Terminal and agent topology

- tmux session `control-room`
  - window `master`
    - pane 1: `git status`, `git log --oneline --decorate -n 20`
    - pane 2: merge checklist and current slice queue
  - window `agents`
    - pane 1: `../mhl26-core` coding agent
    - pane 2: `../mhl26-ui` coding agent
    - pane 3: `../mhl26-ops` coding agent
  - window `qa`
    - pane 1: `../mhl26-qa` QA agent
    - pane 2: replay/lint/test watcher output
  - window `logs`
    - panes tailing `runs/latest/*.log` from each worktree
  - window `deploy`
    - local server, packaging, and smoke commands only

Human/operator role:

- supervises the `control-room` session
- updates merge queue state
- reviews artifacts
- performs all merges manually

#### Multi-agent worktree execution protocol

The worktree system should be treated as a controlled multi-agent software factory.

Agent classes:

- `CoreCodingAgent`
- `UICodingAgent`
- `OpsCodingAgent`
- `QAAgent`
- `MergeAgent` operated by the human or a supervised CLI session

Per-agent inputs:

- `set_up/plan_0.md`
- `.env` and `.env.example`
- the worktree-owned files
- test failures and trace artifacts from prior runs
- relevant local references from `set_up/`

Per-agent outputs:

- code patches only within owned worktree
- test outputs summarized into `artifacts/logs/qa-summary.md` or branch notes
- explicit unresolved blockers
- explicit handoff notes for the next agent

Hard protocol:

1. coding agents do not edit outside their owned worktree except shared schema files explicitly assigned for that slice
2. QA agents do not make broad feature edits; they produce defect-driven corrective patches or actionable findings
3. merge happens only after branch-local gates and one cross-worktree integration rerun
4. every agent-run slice must leave behind machine-readable artifacts: test status, trace sample, and changed-file inventory
5. agents never merge branches
6. the root checkout is reserved for supervision, diff review, and merge execution only
7. every worktree must maintain a stable `runs/latest/` folder contract

Mandatory run-folder contract per worktree:

```text
<worktree>/runs/latest/agent.log
<worktree>/runs/latest/qa.log
<worktree>/runs/latest/result.json
<worktree>/runs/latest/trace-summary.json
```

Purpose of each file:

- `agent.log`
  - raw CLI coding-agent progress and command output summary
- `qa.log`
  - latest gate execution summary for the worktree
- `result.json`
  - machine-readable pass/fail and handoff contract
- `trace-summary.json`
  - representative trace compliance artifact for simulation-facing slices

Recommended artifact targets:

```text
/tmp/mhl26-core/runs/latest/agent.log
/tmp/mhl26-core/runs/latest/qa.log
/tmp/mhl26-core/runs/latest/result.json
/tmp/mhl26-core/runs/latest/trace-summary.json
/tmp/mhl26-ui/runs/latest/agent.log
/tmp/mhl26-ui/runs/latest/qa.log
/tmp/mhl26-ui/runs/latest/result.json
/tmp/mhl26-ui/runs/latest/trace-summary.json
/tmp/mhl26-ops/runs/latest/agent.log
/tmp/mhl26-ops/runs/latest/qa.log
/tmp/mhl26-ops/runs/latest/result.json
/tmp/mhl26-ops/runs/latest/trace-summary.json
/tmp/mhl26-qa/runs/latest/agent.log
/tmp/mhl26-qa/runs/latest/qa.log
/tmp/mhl26-qa/runs/latest/result.json
/tmp/mhl26-qa/runs/latest/trace-summary.json
```

Suggested artifact schema:

```json
{
  "agent_class": "CoreCodingAgent",
  "branch": "feat/core-sim",
  "slice_id": "slice-4-policy-engine",
  "files_touched": ["apps/api/src/startup_sim/agents/ceo_policy.py"],
  "commands_run": ["uv run --project apps/api python -m pytest apps/api/tests/test_tick_loop.py -q"],
  "tests_run": ["apps/api/tests/test_tick_loop.py"],
  "tests_passed": true,
  "decisiontrace_compliance": true,
  "tooltrace_compliance": true,
  "golden_seed_status": "not-run",
  "trace_artifacts": ["artifacts/traces/core-slice-4-sample.json"],
  "blockers": [],
  "handoff_notes": ["Ready for QAAgent deterministic replay gate"]
}
```

#### CLI coding agent operating model

Each coding agent works in short slices and must:

1. read `set_up/plan_0.md`, `.env`, `.env.example`, and the relevant local references
2. implement exactly one slice or sub-slice
3. run local tests for touched code
4. emit a concise change summary and unresolved blockers
5. stop before stepping into another worktree's ownership boundary

Additional mandatory behavior:

- persist one representative trace artifact for every slice that touches simulation, tool routing, or swarm logic
- attach exact commands run, not paraphrases, to the slice handoff note
- if a reference file in `set_up/` is empty, record whether the implementation used a fallback assumption from this plan
- prefer narrow patches over broad rewrites so QA can isolate regressions quickly
- if external implementation skills are used, record which skill influenced the patch and which constraints from this plan overrode that guidance
- write outputs into `runs/latest/` before yielding the slice back to QA
- never self-approve the slice
- never self-merge the branch

For swarm/dynamics work specifically, the coding agent must prove each implementation with:

- a candidate enumeration test
- a score breakdown snapshot
- at least one trace-backed multi-agent interaction
- one failure-path test showing a risky action is downgraded due to insufficient evidence

The QA agent does not author product features by default. It:

1. consumes branches from the coding worktrees
2. runs schema, unit, integration, replay, and UI build checks
3. writes failure summaries mapped to files/tests/traces
4. proposes minimal fixes back to the owning worktree
5. updates `runs/latest/qa.log`
6. updates `runs/latest/result.json` with final QA disposition

When reviewing agentic dynamics, the QA agent must also verify:

- the action chosen is legal under `ConstraintEngine`
- the action is supported by the entity's `EntityKnowledgeBundle`
- the chosen action is explainable from candidate score ordering plus bounded model deltas
- a fallback path exists if tool retrieval, policy validation, or replay lookup fails

#### Branch and merge flow

Recommended merge order:

1. `feat/ops-provenance`
2. `feat/core-sim`
3. `feat/ui-city`
4. `feat/qa-harness`

Merge rules:

- no branch merges without passing its local gate
- `feat/core-sim` cannot merge until schema tests, settings tests, and replay-unit tests pass
- `feat/ui-city` cannot merge until `npm run build` and API contract checks pass
- `feat/ops-provenance` cannot merge until `verify_upstreams.py` and migration lint checks pass
- `feat/qa-harness` cannot merge until it reproduces failures against at least one intentionally broken case and one passing golden-seed case
- only the human/operator merges into `main`
- merge requires `runs/latest/result.json` to exist and parse as valid JSON in the originating worktree
- merge requires `runs/latest/qa.log` to end in a clear pass state
- merge requires deterministic replay or golden-seed status to be `passed` for any slice touching simulation behavior

Suggested merge commands:

```bash
cd /tmp/mistral_hack_london_2026
git checkout main
git merge --no-ff feat/ops-provenance
git merge --no-ff feat/core-sim
git merge --no-ff feat/ui-city
git merge --no-ff feat/qa-harness
```

#### Whole-project integration pass

After all branch merges:

```bash
cd /tmp/mistral_hack_london_2026
make bootstrap
make test
docker compose up --build
```

Acceptance criteria for worktree convergence:

- all worktree branches merged cleanly into `main`
- golden-seed deterministic replay passes on merged `main`
- backend starts with normalized runtime settings
- frontend builds from merged `main`
- no secret values appear in logs or generated assets
- every merged slice preserved the `runs/latest/` artifact contract at review time
- no merge was performed by a coding or QA agent

### Slice 1 — Bootstrap and schema spine (35 min)

Files:

- `apps/api/pyproject.toml`
- `apps/web/package.json`
- `shared/jsonschema/*.json`
- `.env.example`
- `apps/api/src/startup_sim/config/settings.py`

Commands:

```bash
cd ../mhl26-core && uv init apps/api --package startup-sim-api
cd ../mhl26-ui && mkdir -p shared/jsonschema fixtures/presets fixtures/tool_replays scripts supabase/migrations
```

Tests:

```bash
cd ../mhl26-core && uv run python -m pytest apps/api/tests/test_schemas.py -q
cd ../mhl26-core && uv run python -m pytest apps/api/tests/test_settings.py -q
cd ../mhl26-ui && npm run build
```

Demo check:

- config JSON validates
- frontend scaffolding builds

### Slice 2 — Engine loop and event bus (40 min)

Files:

- `sim/engine.py`
- `sim/event_bus.py`
- `sim/state_machine.py`
- `sim/world_reducer.py`

Commands:

```bash
cd ../mhl26-core
uv sync --project apps/api
uv run --project apps/api python -m pytest apps/api/tests/test_tick_loop.py -q
```

Tests:

- one tick executes with stub context and no live tools
- all emitted events validate against `EventEnvelope`
- every tick emits deterministic `seq` ordering

Demo check:

- `POST /api/v1/sessions`
- one `advance` returns valid `TickResult`

### Slice 3 — Tool router, cache, and replay fixtures (40 min)

Files:

- `tools/router.py`
- `tools/cache.py`
- `tools/budget.py`
- `tools/specter_stub.py`
- `tools/cala_client.py`
- replay fixtures

Commands:

```bash
cd ../mhl26-core
uv run --project apps/api python -m pytest apps/api/tests/test_tool_router.py -q
```

Tests:

- cache hit
- timeout fallback
- budget denial
- replay-first lookup
- tool traces include provider, route reason, cache status, budget units, and normalized result hash
- helper tasks route to `HuggingFaceCpuHelperClient` only for approved task classes
- Brev backpressure policy preserves required action calls and downgrades optional synthesis calls first

Demo check:

- one trace bundle shows Specter and Cala traces

### Slice 4 — Policy engine and latent learning (45 min)

Files:

- `agents/*.py`
- `llm/mistral_json_policy.py`

Commands:

```bash
cd ../mhl26-core
uv run --project apps/api python -m pytest apps/api/tests/test_tick_loop.py -q
```

Tests:

- candidate scoring
- bounded deltas
- latent update clipping
- role-specific action selection
- no decision path bypasses `DecisionTrace` creation
- Strands skill bindings expose only role-approved skills and tool templates
- Bedrock-orchestrated and locally orchestrated agent runs share the same action/output schema contracts

Demo check:

- CEO changes action after negative outcome plus new context

### Slice 5 — Supabase persistence and traces (35 min)

Files:

- `supabase/migrations/20260228_001_init_sim.sql`
- `persistence/supabase_repo.py`

Commands:

```bash
cd ../mhl26-ops
set -a; source /Users/franciscoterpolilli/Projects/mistral_hack_london_2026/.env; set +a
```

Tests:

- persistence round trip
- trace writes
- redacted settings diagnostic persists aliases used but not secret values

Demo check:

- session reloads after app restart

### Slice 6 — Toggle-only UI and SSE wiring (40 min)

Files:

- `src/components/*`
- `src/lib/api.ts`
- `src/lib/types.ts`

Commands:

```bash
cd ../mhl26-ui
npm install
npm run build
```

Tests:

- build passes
- no text input component exists
- API payloads match schema
- SSE trace panels handle out-of-order delivery by sorting on `tick_index` and `seq`

Demo check:

- user can start, advance, replay, and export without typing

### Slice 7 — Golden seed regression and local packaging (35 min)

Files:

- `fixtures/golden_outputs/*`
- `tests/test_deterministic_replay.py`
- `docker-compose.yml`
- `apps/api/Dockerfile`
- `scripts/build_bundle.sh`

Commands:

```bash
cd ../mhl26-core
uv run --project apps/api python -m pytest apps/api/tests/test_deterministic_replay.py -q

cd /tmp/mistral_hack_london_2026
docker compose up --build
```

Tests:

- golden replay hash match
- merged replay run emits identical normalized `DecisionTrace` and `ToolTrace` bundles across two consecutive runs

Demo check:

- replaying seed `424242` yields same normalized output twice

### Slice 8 — AWS fallback deploy and demo polish (35 min)

Files:

- `scripts/deploy_apprunner.sh`
- `scripts/run_golden_seed.py`

Commands:

```bash
cd /tmp/mistral_hack_london_2026
bash scripts/build_bundle.sh
bash scripts/deploy_apprunner.sh
```

Tests:

- `/healthz`
- `/api/v1/regression/golden-run`
- remote boot path validates required environment variables before serving traffic

### Cross-slice logging and testing feedback loop

Logging and testing are the primary control system for bulk coding agents. Every slice must strengthen the feedback loop, not weaken it.

#### Logging requirements

Backend logging must use structured JSON lines with at least:

- `ts`
- `level`
- `service`
- `component`
- `session_id`
- `tick_index`
- `actor_id`
- `trace_id`
- `event_kind`
- `seed`
- `msg`

Redaction requirements:

- secrets from `.env` must never appear in log payloads
- request headers containing auth tokens must be removed before serialization
- trace payloads may include hashes, aliases, and provider names, but not raw credentials

Recommended log files:

```text
/tmp/mistral_hack_london_2026/artifacts/logs/api.jsonl
/tmp/mistral_hack_london_2026/artifacts/logs/ui.log
/tmp/mistral_hack_london_2026/artifacts/logs/replay.jsonl
/tmp/mistral_hack_london_2026/artifacts/logs/qa-summary.md
```

#### Test gate matrix

Each branch/worktree must satisfy its gate before merge:

| Worktree | Mandatory gate |
|---|---|
| `feat/ops-provenance` | `python3 scripts/verify_upstreams.py` |
| `feat/core-sim` | `pytest test_settings.py test_schemas.py test_tick_loop.py test_tool_router.py test_inference_routing.py` |
| `feat/ui-city` | `npm run build` plus API contract smoke |
| `feat/qa-harness` | `pytest test_deterministic_replay.py` plus merged smoke run |

#### Skills-informed review rubric

This plan review used the `find-skills` skill to look for external reinforcement patterns. The most relevant discovered directions were architecture review and swarm-expert guidance, and their useful constraints should be reflected in QA behavior even without installing new runtime skills.

The review rubric for coding and QA agents should therefore include:

- architecture integrity
  - does the patch preserve typed boundaries between policy, tools, MCP, persistence, and UI
- swarm boundedness
  - does the patch keep swarm behavior constrained to typed actions, budgets, and legality checks
- observability completeness
  - does every new decision path produce enough trace material to debug
- failure containment
  - does the patch define a deterministic fallback on timeout, missing context, invalid model output, or budget exhaustion
- replayability
  - does the change preserve seeded deterministic behavior when replay fixtures exist
- secret hygiene
  - does the patch avoid leaking `.env` values into logs, prompts, artifacts, or frontend code

If a patch fails one of these review axes, the QA agent should reject it even if the narrow unit tests pass.

#### Bulk coding agent loop

For each slice, the owning coding agent should operate in this loop:

```text
read spec -> inspect local files -> implement small patch -> run narrow tests ->
inspect logs/traces -> fix failures -> rerun tests -> hand off summary to QA agent
```

The QA agent loop is:

```text
pull branch -> run mandatory gate -> inspect failures -> write defect list ->
return actionable findings to owner -> rerun after fix -> approve for merge
```

Recommended supervision tooling:

- `tmux`
  - authoritative multi-pane supervisor for coding agents, QA agent, and log tails
- `git worktree`
  - isolation boundary for each slice
- `watchexec`
  - optional narrow QA rerun tool inside `../mhl26-qa`
- `Overmind`
  - optional server/watcher runner for app processes only

Not recommended as the primary operator path for this repo:

- `Zellij` as the main control plane
- unrestricted auto-merging by agents
- watcher-driven orchestration without persisted run artifacts

This feedback loop is mandatory. No slice is considered complete purely because code compiles once.

Demo check:

- remote URL loads the golden preset

---

## J) Deployment (primary + fallback) with exact commands

Deployment assumes a centralized monorepo where `apps/web` is derived from the imported `isometric-city` snapshot and `apps/api` is the Python backend with pinned Strands integration. No deploy path may require cloning external repos during the demo.

### Primary: local single-host deployment

Development:

```bash
cd /tmp/mistral_hack_london_2026
set -a; source .env; set +a

cd apps/api
uv sync
uv run uvicorn startup_sim.api.main:app --app-dir src --reload --host 0.0.0.0 --port 8000

cd /tmp/mistral_hack_london_2026/apps/web
npm install
npm run dev -- --host 0.0.0.0 --port 3000
```

Before starting services, validate normalized settings:

```bash
cd /tmp/mistral_hack_london_2026/apps/api
uv run python -m startup_sim.config.settings --check
```

Production-style local demo:

```bash
cd /tmp/mistral_hack_london_2026
set -a; source .env; set +a
bash scripts/build_bundle.sh
docker compose up --build
```

### Fallback: AWS App Runner single-container deploy

```bash
cd /tmp/mistral_hack_london_2026
set -a; source .env; set +a
bash scripts/build_bundle.sh

AWS_ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)
aws ecr create-repository --repository-name startup-sim || true
aws ecr get-login-password --region "$AWS_DEFAULT_REGION" | docker login --username AWS --password-stdin "$AWS_ACCOUNT_ID.dkr.ecr.$AWS_DEFAULT_REGION.amazonaws.com"

docker build -t startup-sim apps/api
docker tag startup-sim:latest "$AWS_ACCOUNT_ID.dkr.ecr.$AWS_DEFAULT_REGION.amazonaws.com/startup-sim:latest"
docker push "$AWS_ACCOUNT_ID.dkr.ecr.$AWS_DEFAULT_REGION.amazonaws.com/startup-sim:latest"

aws apprunner create-service \
  --service-name startup-sim \
  --source-configuration "ImageRepository={ImageIdentifier=$AWS_ACCOUNT_ID.dkr.ecr.$AWS_DEFAULT_REGION.amazonaws.com/startup-sim:latest,ImageRepositoryType=ECR,ImageConfiguration={Port=8000}}"
```

Smoke:

```bash
curl https://<apprunner-url>/healthz
curl -X POST https://<apprunner-url>/api/v1/regression/golden-run
```

### Explicitly deferred deployment paths

- Shadeform GPU deployment
- NVIDIA/Brev hosting
- separate Vercel/Cloudflare frontend deploy

---

## K) Demo runbook (2–3 min) + golden-seed scenario

### Golden seed

```json
{
  "seed": 424242,
  "preset": "golden_seed_424242",
  "sector": "gaming",
  "region": "us",
  "stage": "pre_seed",
  "employee_count": 4,
  "investor_count": 3,
  "runway_months": 12,
  "starting_cash_k": 650,
  "market_temperature": 72,
  "risk_appetite": 68,
  "knowledge_budget": 6,
  "tick_count": 10,
  "use_specter": true,
  "use_cala": true,
  "deterministic_mode": true
}
```

Narrative:

- AI-native game studio building adaptive NPC/business tooling
- CEO begins speed-biased
- one employee is craft-heavy and skeptical of rushed shipping
- lead investor is thesis-aligned but evidence-hungry
- Specter replay contains market/funding/salary facts
- Cala replay contains deeper GTM and investor-risk synthesis

### Golden run command

```bash
cd /tmp/mistral_hack_london_2026
set -a; source .env; set +a
uv run --project apps/api python scripts/run_golden_seed.py \
  --config fixtures/presets/golden_seed_424242.json \
  --replay-dir fixtures/tool_replays/golden_seed_424242 \
  --out artifacts/golden_seed_424242
```

### 2–3 minute demo script

1. Show the control panel with only toggles, segmented controls, and sliders.
2. Start the golden preset and show the initial city/company state.
3. Advance 5 ticks and point out one emergent shift driven by tool evidence.
4. Open the CEO `DecisionTrace` and show score deltas, reasons, latents, and tool provenance.
5. Replay the same seed and show the final determinism hash matches.

### Demo acceptance criteria

- no typing required
- at least one Specter and one Cala `ToolTrace`
- at least one latent vector visibly changes
- replay hash matches golden output
- exported trace JSON validates against schema

---

## L) Repository Convergence into One Central GitHub Monorepo

### Objective

Converge four code sources into one repo that is easy to build, test, patch, and demo:

1. canonical project repo: `git@github.com:frankterpo/mistral_hack_london_2026.git`
2. imported UI/game shell: `https://github.com/amilich/isometric-city`
3. agent runtime dependency: `https://github.com/strands-agents/sdk-python/tree/main`
4. imported source/assets from Hugging Face Space: `https://huggingface.co/spaces/mistral-hackaton-2026/iso-business`

### Convergence decision

Use **vendor snapshots** for app code and assets, and **pinned dependency integration** for reusable SDKs.

- `isometric-city`: import snapshot into `apps/web/`, preserve upstream provenance and MIT license, then modify in-place as first-party app code
- `strands-agents/sdk-python`: do **not** vendor the full SDK; pin it as a Python dependency and create a thin local integration layer under `apps/api/src/startup_sim/integrations/strands/`
- Hugging Face Space `iso-business`: import as a manual source snapshot into `imports/hf-space-iso-business/`, then selectively merge code/assets/prompts into first-party locations
- do **not** use git submodules

### Why this split

- `isometric-city` is an app shell and rendering engine, so it should become the UI base
- `strands-agents` is a reusable SDK with its own release cadence, so pinning is safer than vendoring
- the Hugging Face Space is access-gated from this environment and must be treated as an import/export artifact, not a live dependency

### Locked upstream pins

Store in `UPSTREAMS.lock.json`:

- `isometric_city.repo = "https://github.com/amilich/isometric-city"`
- `isometric_city.commit = "f3c2c20488a2deda2d8d7a7e73db6be22419703c"`
- `isometric_city.license = "MIT"`
- `isometric_city.integration_mode = "vendored_app_base"`
- `isometric_city.target_path = "apps/web"`

- `strands_sdk.repo = "https://github.com/strands-agents/sdk-python"`
- `strands_sdk.commit = "c50457d1396dbeb8268f47d56faa5ad539f98ae7"`
- `strands_sdk.license = "Apache-2.0"`
- `strands_sdk.integration_mode = "pinned_dependency"`
- `strands_sdk.target_path = "apps/api"`

- `hf_space_iso_business.repo = "https://huggingface.co/spaces/mistral-hackaton-2026/iso-business"`
- `hf_space_iso_business.integration_mode = "manual_source_import"`
- `hf_space_iso_business.target_path = "imports/hf-space-iso-business"`
- `hf_space_iso_business.status = "blocked_until_source_or_token_is_provided"`

### Final monorepo layout

```text
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/
  apps/
    api/
      pyproject.toml
      src/startup_sim/
        api/
        agents/
        sim/
        tools/
        integrations/strands/
    web/
      package.json
      src/
      public/
  imports/
    hf-space-iso-business/
      README.import.md
      SOURCE_MANIFEST.json
      LICENSE_ORIGIN.md
  docs/
    provenance/
      upstreams.md
      import-decisions.md
  scripts/
    import_isometric_city.sh
    import_hf_space.sh
    verify_upstreams.py
    sync_upstreams.md
  fixtures/
  set_up/
    plan_0.md
  UPSTREAMS.lock.json
  Makefile
  .env.example
```

### Import rules by upstream

#### `isometric-city` -> `apps/web/`

Import the full snapshot first, then prune after the app boots locally.

Keep initially:

- `package.json`
- `next.config.js`
- `tailwind.config.js`
- `postcss.config.js`
- `tsconfig.json`
- `public/`
- `src/app`
- `src/components`
- `src/core`
- `src/hooks`
- `src/lib`
- `src/types`

Evaluate before pruning:

- `src/games`
- `src/context`
- `scripts/`

Do not partially copy the engine on first pass.

#### `strands-agents/sdk-python` -> `apps/api/`

Pin as a dependency:

```toml
dependencies = [
  "strands-agents[mistral,a2a] @ git+https://github.com/strands-agents/sdk-python@c50457d1396dbeb8268f47d56faa5ad539f98ae7",
]
```

Local wrapper code:

- `apps/api/src/startup_sim/integrations/strands/client.py`
- `apps/api/src/startup_sim/integrations/strands/tools.py`
- `apps/api/src/startup_sim/integrations/strands/policies.py`

Strands responsibilities:

- structured agent calls
- tool wrapping
- optional later A2A expansion

It is not the repo boundary.

#### Hugging Face Space `iso-business` -> `imports/hf-space-iso-business/`

Because the Space is currently access-gated, import is blocked until source is provided.

Expected process:

- export or clone externally
- place under `imports/hf-space-iso-business/`
- create `SOURCE_MANIFEST.json`
- create `LICENSE_ORIGIN.md`
- diff against `apps/web/` and `apps/api/`
- selectively adopt into first-party locations

No production code should import directly from `imports/hf-space-iso-business/`.

### Provenance and licensing

Create:

- `UPSTREAMS.lock.json`
- `docs/provenance/upstreams.md`
- `docs/provenance/import-decisions.md`

Each must record:

- upstream URL
- commit SHA or export timestamp
- license
- target path
- why it was imported
- what changed after import

Licensing rules:

- preserve MIT attribution for `isometric-city`
- preserve Apache-2.0 attribution for Strands if snippets are copied
- do not vendor HF Space code until its source/license metadata is recorded

### Root build orchestration

Create a root `Makefile`:

```make
bootstrap:
	cd apps/api && uv sync
	cd apps/web && npm install

dev-api:
	cd apps/api && uv run uvicorn startup_sim.api.main:app --app-dir src --reload --host 0.0.0.0 --port 8000

dev-web:
	cd apps/web && npm run dev

dev:
	@echo "Run dev-api and dev-web in separate terminals"

test:
	cd apps/api && uv run pytest
	cd apps/web && npm run build

verify-upstreams:
	python3 scripts/verify_upstreams.py

check-env:
	cd apps/api && uv run python -m startup_sim.config.settings --check

qa:
	cd apps/api && uv run pytest apps/api/tests/test_deterministic_replay.py
	cd apps/web && npm run build
```

### Convergence acceptance criteria

Repository convergence is complete only when all are true:

- all first-party edited code lives in one GitHub repo
- `apps/web` builds without cloning external repos at runtime
- `apps/api` starts with pinned Strands dependency
- `UPSTREAMS.lock.json` exists and matches imported sources
- `docs/provenance/upstreams.md` lists all upstreams
- HF Space is either imported under `imports/` or represented by an explicit blocker file
- root `Makefile` can bootstrap, build, and test the monorepo

### Explicit blockers and TODOs

```text
TODO: clone or authenticate to the canonical GitHub repo before mutating local history
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/.git/

TODO: create provenance files
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/UPSTREAMS.lock.json
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/docs/provenance/upstreams.md
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/docs/provenance/import-decisions.md

TODO: import `isometric-city` snapshot into active web app
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/apps/web/

TODO: create Strands integration wrapper
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/apps/api/src/startup_sim/integrations/strands/

TODO: import or export Hugging Face Space source
/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/imports/hf-space-iso-business/
```
