# Subagents Setup

Specialized agents for slice-driven development. Stack: **FastAPI + Vite**, **Specter Adapter+Stub**, **toggle-only UI**, **structured I/O + DecisionTrace**.

Each subagent outputs **structured JSON** + **markdown summary** and assumes the **active worktree** context.

## Run Artifacts (per worktree)

All subagents write to `runs/latest/` in the active worktree. See `RUNS.md` at repo root for the full contract.

## Slice Loop Playbook

1. **@slice-builder** → produces plan JSON (`slice-builder-output.json`)
2. **agent_run.sh** (or Codex CLI manually) implements the slice → writes `agent.log`, `result.json`, `qa.log`
3. **@slice-verifier** attacks the diff → (`slice-verifier-output.json`)
4. **@ui-contract** / **@tool-router** as needed for UI or tool changes
5. **@merge-marshal** decides READY_TO_MERGE → (`merge-marshal-output.json`)
6. Only then merge.

### agent_run.sh

From worktree root (after @slice-builder):

```bash
./scripts/agent_run.sh
```

Reads `runs/latest/slice-builder-output.json`, runs Codex CLI, logs to `agent.log`/`qa.log`, produces `result.json`. Env overrides: `CODEX_MODEL`, `CODEX_TEMP`, `CODEX_MAX_OUTPUT_TOKENS`.

## Merge Ritual (per slice)

In the same worktree, before merge:

1. `@slice-verifier Verify branch <current-branch>`
2. If web touched: `@ui-contract Audit UI for free text inputs`
3. If tool layer touched: `@tool-router Audit Specter vs Cala routing`
4. `@merge-marshal` → must say READY (or fix blockers)

Only then merge.

## Worktree Integration

All subagents operate inside the current git worktree. Before invoking:

```bash
git worktree list   # identify active worktree
pwd                # confirm you're in the right worktree
```

## SliceBuilder

**Input**: slice name + acceptance criteria  
**Output**: file list, interfaces, step plan (no code)

**Globs**: `plan_0.md`, `set_up/**`, `apps/**`, `schemas/**`, `tests/**`

### Invoke

- Chat: `@slice-builder plan slice "paradigm-vector" with acceptance criteria: [...]`

### Output

- `runs/latest/slice-builder-output.json`  
- Schema: `.cursor/subagents/schemas/slice-builder-output.schema.json`

---

## SliceVerifier

**Input**: diff or branch  
**Output**: QA checklist, missing tests, schema drift risks, break scenarios

**Globs**: `apps/api/**/*.py`, `apps/web/**/*.{ts,tsx,jsx}`, `schemas/**/*.json`, `tests/**`, `plan_0.md`

### Invoke

- Chat: `@slice-verifier verify branch feat/core-sim` or `verify diff HEAD~3`

### Output

- `runs/latest/slice-verifier-output.json`  
- Schema: `.cursor/subagents/schemas/slice-verifier-output.schema.json`

---

## ToolRouter

**Input**: tool call patterns / routing logic  
**Output**: Specter vs Cala routing rules, required schemas, cache/budget config

**Globs**: `apps/api/**`, `schemas/**`, `plan_0.md`

### Invoke

- Chat: `@tool-router audit tool routing` or `define Specter vs Cala rules`

### Output

- `runs/latest/tool-router-output.json`  
- Schema: `.cursor/subagents/schemas/tool-router-output.schema.json`

---

## UIContract

**Input**: UI paths, forms, schemas  
**Output**: violations, control enum/slider mapping, JSON schema checks (toggle-only UI)

**Globs**: `apps/web/**/*.{ts,tsx,jsx}`, `plan_0.md`

### Invoke

- Chat: `@ui-contract audit UI for free text` or `map UI controls to schema`

### Output

- `runs/latest/ui-contract-output.json`  
- Schema: `.cursor/subagents/schemas/ui-contract-output.schema.json`

---

## MergeMarshal

**Input**: current worktree + branch/diff  
**Output**: READY_TO_MERGE decision, blockers, next commands

**Checks**: tests/lint/typecheck, schema validity, UI no free text, DecisionTrace coverage, Specter Adapter+Stub

**Globs**: `apps/**`, `schemas/**`, `tests/**`, `runs/**`, `plan_0.md`

### Invoke

- Chat: `@merge-marshal gate this branch` or `is this ready to merge?`

### Output

- `runs/latest/merge-marshal-output.json`  
- Schema: `.cursor/subagents/schemas/merge-marshal-output.schema.json`

---

## Deterministic Mode

All subagents default to **seeded randomness** (`GOLDEN_SEED`) for reproducibility. See `set_up/plan_0.md` for DecisionTrace and golden-run conventions.
