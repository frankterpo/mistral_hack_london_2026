#!/usr/bin/env bash
# Run Codex CLI agent for the current worktree slice.
# Prereqs: @slice-builder has produced runs/latest/slice-builder-output.json
# Usage: run from worktree root: ./scripts/agent_run.sh

set -euo pipefail

WORKTREE="${WORKTREE:-$(pwd)}"
RUNS="$WORKTREE/runs/latest"
SLICE_JSON="$RUNS/slice-builder-output.json"
AGENT_LOG="$RUNS/agent.log"
QA_LOG="$RUNS/qa.log"
RESULT_JSON="$RUNS/result.json"
BRANCH="${BRANCH:-$(git -C "$WORKTREE" branch --show-current 2>/dev/null || echo "unknown")}"

mkdir -p "$RUNS"

if [ ! -f "$SLICE_JSON" ]; then
  echo "ERROR: missing $SLICE_JSON — run @slice-builder first." >&2
  exit 1
fi

# Extract slice name for commit message
SLICE_NAME="$(python3 -c "
import json
with open('$SLICE_JSON') as f:
    d = json.load(f)
print(d.get('slice_name', 'unknown'))
" 2>/dev/null || echo "unknown")"

echo "=== agent_run.sh ==="
echo "worktree=$WORKTREE branch=$BRANCH slice=$SLICE_NAME"
echo ""

# Build Codex prompt (result.json must conform to worktree-result.schema.json)
CODEX_PROMPT=$(cat <<'PROMPT'
You are a coding agent operating inside the CURRENT git worktree.

INPUTS (must read):
- plan_0.md (or set_up/plan_0.md)
- runs/latest/slice-builder-output.json
- any relevant files referenced there

HARD RULES:
- Implement ONLY what the slice-builder JSON specifies for this slice.
- Respect locked constraints:
  - FastAPI + Vite
  - Specter = Adapter + Stub by default (no real creds)
  - Cala optional (budgeted + cached)
  - No free-text UI inputs (only toggles/buttons/sliders, bounded)
  - All I/O structured and validated (Pydantic / JSON schemas)
  - Every agent action emits DecisionTrace + ToolTrace
  - Deterministic mode supported via GOLDEN_SEED
- Do not invent dependencies that aren't already in repo; if needed, add TODO with exact file paths.

DELIVERABLES (must produce):
1) Code changes implementing the slice.
2) A git commit with message: 'slice: <slice_name>' (use slice name from the JSON).
3) runs/latest/result.json (create/overwrite) conforming to schemas/worktree-result.schema.json:
   {
     "agent_class": "codex",
     "branch": "<current branch>",
     "slice_id": "<slice_name from JSON>",
     "files_touched": [...],
     "commands_run": [...],
     "tests_run": [...],
     "tests_passed": true|false,
     "decisiontrace_compliance": true|false,
     "tooltrace_compliance": true|false,
     "golden_seed_status": "not-run"|"passed"|"failed",
     "trace_artifacts": [...],
     "blockers": [],
     "handoff_notes": [...]
   }
4) Append all terminal output to runs/latest/agent.log.

After coding:
- Run the test commands specified by the slice plan (or if none: pytest -q; npm run test 2>/dev/null; npm run build 2>/dev/null if relevant).
- Record results into runs/latest/result.json.
PROMPT
)

# Append header to agent.log
{
  echo "=== agent_run start: $(date -u +"%Y-%m-%dT%H:%M:%SZ") ==="
  echo "worktree=$WORKTREE branch=$BRANCH slice=$SLICE_NAME"
  echo ""
} >> "$AGENT_LOG"

# Run from worktree so Codex sees correct context
cd "$WORKTREE"

# Run Codex CLI (tee to agent.log)
# Model/tokens from user spec; CODEX_MODEL/CODEX_* env overrides allowed
CODEX_MODEL="${CODEX_MODEL:-opus-4.6}"
CODEX_TEMP="${CODEX_TEMP:-0.2}"
CODEX_TOKENS="${CODEX_MAX_OUTPUT_TOKENS:-7000}"

if ! codex --model "$CODEX_MODEL" --temperature "$CODEX_TEMP" --max-output-tokens "$CODEX_TOKENS" "$CODEX_PROMPT" 2>&1 | tee -a "$AGENT_LOG"; then
  echo "codex exit non-zero" >> "$AGENT_LOG"
fi

# QA commands (append to qa.log)
{
  echo "=== QA start: $(date -u +"%Y-%m-%dT%H:%M:%SZ") ==="
  echo "worktree=$WORKTREE"
  cd "$WORKTREE"

  if [ -d "apps/api" ]; then
    echo "--- pytest ---"
    (cd apps/api && pytest -q 2>&1) || true
  fi
  if [ -d "apps/web" ] && [ -f "apps/web/package.json" ]; then
    echo "--- npm run lint ---"
    (cd apps/web && npm run lint 2>&1) || true
    echo "--- npm run typecheck ---"
    (cd apps/web && npm run typecheck 2>&1) || true
    echo "--- npm run test ---"
    (cd apps/web && npm run test 2>&1) || true
  fi

  echo "=== QA end ==="
} >> "$QA_LOG" 2>&1

# Ensure result.json exists (minimal stub if codex didn't produce it)
if [ ! -f "$RESULT_JSON" ]; then
  echo "WARN: codex did not write result.json; creating minimal stub" >> "$AGENT_LOG"
  python3 -c "
import json
print(json.dumps({
  'agent_class': 'codex',
  'branch': '$BRANCH',
  'slice_id': '$SLICE_NAME',
  'files_touched': [],
  'commands_run': [],
  'tests_run': [],
  'tests_passed': False,
  'decisiontrace_compliance': False,
  'tooltrace_compliance': False,
  'golden_seed_status': 'not-run',
  'trace_artifacts': [],
  'blockers': ['result.json not produced by codex'],
  'handoff_notes': []
}, indent=2))
" > "$RESULT_JSON"
fi

echo ""
echo "Done. agent.log=$AGENT_LOG qa.log=$QA_LOG result.json=$RESULT_JSON"
