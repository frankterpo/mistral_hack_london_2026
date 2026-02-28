# Scripts

## agent_run.sh

Runs the Codex CLI agent for the current worktree slice.

**Prereq**: `@slice-builder` has produced `runs/latest/slice-builder-output.json`.

**Usage**: From worktree root:

```bash
./scripts/agent_run.sh
```

**Behavior**:

- Reads `runs/latest/slice-builder-output.json`
- Runs Codex with strict prompt (implement slice; commit; write result.json)
- Tees output to `runs/latest/agent.log`
- Runs QA (pytest, npm lint/typecheck/test) → `runs/latest/qa.log`
- Ensures `runs/latest/result.json` exists (schema: `schemas/worktree-result.schema.json`)

**Env**:

- `CODEX_MODEL` (default: `opus-4.6`)
- `CODEX_TEMP` (default: `0.2`)
- `CODEX_MAX_OUTPUT_TOKENS` (default: `7000`)
- `WORKTREE` (default: `$PWD`)
- `BRANCH` (default: `git branch --show-current`)

## launch_worktrees.sh

Creates worktrees from slice IDs in SLICES.md, waits for @slice-builder outputs, then dispatches `agent_run.sh`.

**Usage** (from repo root):

```bash
./scripts/launch_worktrees.sh --slices SLICES.md --mode seq    # sequential (safest)
./scripts/launch_worktrees.sh --slices SLICES.md --mode par --jobs 3   # parallel
```

**Options**: `--branch`, `--base-ref`, `--worktrees-dir` (default: `wt/`)

**Note**: Run @slice-builder manually in Cursor per worktree before the script continues.

## merge_queue.sh

Prints READY / NOT_READY table from `merge-marshal-output.json` per worktree.

```bash
./scripts/merge_queue.sh                    # scans wt/slice-*
./scripts/merge_queue.sh wt/slice-01-core wt/slice-02-ui
```

## Other scripts

- `init_run_dirs.sh` — create `runs/latest/` scaffold in worktrees
- `qa_worktree_gate.sh` — validate `result.json` against schema
- `show_run_status.sh` — print run status per worktree
