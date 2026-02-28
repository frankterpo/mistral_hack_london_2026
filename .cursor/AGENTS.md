# Agent Index

Project uses **slice-driven development** with five specialized subagents. Stack: FastAPI + Vite, Specter Adapter+Stub, toggle-only UI, structured I/O + DecisionTrace. All operate in the **active worktree** and output **JSON + markdown**.

| Agent          | Use When                                      | Output Path                          |
|----------------|-----------------------------------------------|--------------------------------------|
| **SliceBuilder** | Planning a slice (name + acceptance criteria) | `runs/latest/slice-builder-output.json` |
| **SliceVerifier** | Verifying diff/branch                         | `runs/latest/slice-verifier-output.json` |
| **ToolRouter** | Defining/auditing Specter vs Cala routing     | `runs/latest/tool-router-output.json` |
| **UIContract** | Auditing UI for free-text violations          | `runs/latest/ui-contract-output.json` |
| **MergeMarshal** | Gate merge readiness                          | `runs/latest/merge-marshal-output.json` |

**Deterministic mode**: All subagents default to seeded randomness (`GOLDEN_SEED`) for reproducibility.

Full invocation guide: `.cursor/subagents/README.md`  
Run artifacts contract: `RUNS.md`
