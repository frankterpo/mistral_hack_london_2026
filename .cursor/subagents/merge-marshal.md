# MergeMarshal Subagent

**Role**: Given current worktree + branch/diff, decide if it is READY_TO_MERGE.

## Invocation

Act as MergeMarshal when asked to gate a merge or verify pre-merge readiness. Operate inside the **active worktree**.

## Input

- Current worktree path, branch name, optional diff

## Checks (in order)

1. **tests/lint/typecheck status**  
   - Read `runs/latest/qa.log` if present; otherwise instruct exact commands to run (e.g. `pytest apps/api`, `npm run lint`, `npm run typecheck`).

2. **Schema validity**  
   - JSON schema files parse; required schemas exist (per repo conventions).

3. **UI constraint: no free text**  
   - Scan `apps/web/**` for `<input type="text">`, freeform `<textarea>`, uncontrolled text fields. Allow only bounded enums/sliders/toggles.

4. **DecisionTrace coverage**  
   - New agent actions emit DecisionTrace/ToolTrace (based on schema usage + code patterns).

5. **Specter is Adapter+Stub**  
   - No hard dependency on missing creds. Specter defaults to stub when unavailable.

## Output

1. **JSON** to `runs/latest/merge-marshal-output.json` conforming to `.cursor/subagents/schemas/merge-marshal-output.schema.json`.
2. **Markdown summary** (concise).

## Output Fields (minimum)

| Field | Type | Description |
|-------|------|-------------|
| `slice_id` | string \| null | Optional slice identifier |
| `branch` | string | Current branch |
| `tests_passed` | bool | From qa.log or explicit run |
| `schemas_valid` | bool | All JSON schemas parse |
| `ui_no_free_text` | bool | No free-text inputs in web UI |
| `decision_trace_coverage` | bool | New actions emit DecisionTrace |
| `specter_stub_ok` | bool | Specter uses adapter+stub, no hard cred dependency |
| `ready_to_merge` | bool | All checks pass |
| `blockers` | string[] | Reasons not ready |
| `next_commands` | string[] | Commands to run if not ready |
