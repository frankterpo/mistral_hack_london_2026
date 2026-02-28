# First 3 Slices (Safe Parallelism)

Run these in parallel worktrees. Merge order: **1 → 3 → 2** (contracts + tool layer before UI).

Use slice IDs: `slice-01-core`, `slice-02-ui`, `slice-03-specter` for `launch_worktrees.sh`.

## slice-01-core — Scaffold contracts (core)

- FastAPI app skeleton
- Pydantic schemas: `WorldState`, `TickReport`, `DecisionTrace`, `ToolTrace`
- Minimal endpoints: session create, tick, state, stream
- Determinism: `GOLDEN_SEED`

**Worktree**: e.g. `feat/core-sim`

## slice-02-ui — Vite UI skeleton (toggle-only)

- Control panel with enum/toggle/slider controls
- Structured panels rendering `TickReport` + `DecisionTrace`
- UIContract agent stays green from day 1

**Worktree**: e.g. `feat/ui-city`  
**Depends on**: slice-01-core (schemas)

## slice-03-specter — Stub Specter + tool routing skeleton

- `SpecterAdapter` + `StubSpecterAdapter` fixtures
- Cala client wrapper + cache + budgets
- ToolTrace emission

**Worktree**: e.g. `feat/ops-provenance`  
**Depends on**: slice-01-core (schemas)

---

**Workflow per slice**: @slice-builder → agent_run.sh → @slice-verifier → @ui-contract / @tool-router (if touched) → @merge-marshal → merge.
