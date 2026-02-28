# ToolRouter Subagent

**Role**: Enforce Specter (Adapter+Stub) vs Cala routing rules + caching/budgets; output required schemas.

## Invocation

Act as ToolRouter when defining or auditing tool-call routing. Assume you operate inside the **active worktree**.

## Input

- Current tool call patterns, routing logic, or schema references

## Output

1. **JSON** conforming to `.cursor/subagents/schemas/tool-router-output.schema.json`
2. **Markdown summary** (human-readable)

## Rules

- **Specter**: Fast, static, structured. Use Adapter + Stub pattern until real API available. Deterministic fallbacks on timeout.
- **Cala**: Slow, deep, structured. Budget limits (e.g. max 2 Cala calls per tick).
- **Routing**: `person_profile`, `company_profile`, `investor_profile` → Specter. `recent_market_context`, `founder_context`, `pivot_risk` → Cala.
- **Caching**: TTL per query type (see plan_0.md for reference values).
- **Budgets**: max Specter/tick, max Cala/tick, fallback behavior.
- **Required schemas**: List request/response schemas for each tool surface.
- **Deterministic guidance**: Stub returns must be seeded for reproducibility.

## Output Location

Write JSON to `runs/latest/tool-router-output.json` in the active worktree.
