# Run Artifacts Contract

Every worktree writes to its local `runs/latest/` folder. This folder is **gitignored**; contents are ephemeral per run.

## Per-Worktree Outputs

| Artifact | Description |
|----------|-------------|
| `runs/latest/<agent>-output.json` | Structured output from each subagent (SliceBuilder, SliceVerifier, ToolRouter, UIContract, MergeMarshal) |
| `runs/latest/agent.log` | Agent execution log |
| `runs/latest/qa.log` | QA / tests / lint / typecheck log |
| `runs/latest/result.json` | Run result (conforms to `schemas/worktree-result.schema.json`) |

## Agents Writing Output JSON

- **SliceBuilder** → `slice-builder-output.json`
- **SliceVerifier** → `slice-verifier-output.json`
- **ToolRouter** → `tool-router-output.json`
- **UIContract** → `ui-contract-output.json`
- **MergeMarshal** → `merge-marshal-output.json`

## Invariant

Subagents and scripts assume they operate inside the **active worktree**. Paths are relative to the worktree root. See `.cursor/subagents/README.md` for invocation.
