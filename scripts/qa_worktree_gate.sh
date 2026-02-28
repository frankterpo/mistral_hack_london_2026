#!/usr/bin/env bash
set -euo pipefail

WORKTREE="${1:-}"
if [ -z "$WORKTREE" ]; then
  echo "usage: $0 /abs/qa-worktree"
  exit 1
fi

mkdir -p "$WORKTREE/runs/latest"
QA_LOG="$WORKTREE/runs/latest/qa.log"
RESULT_JSON="$WORKTREE/runs/latest/result.json"

{
  echo "QA gate start: $(date -u +"%Y-%m-%dT%H:%M:%SZ")"
  echo "worktree=$WORKTREE"

  if [ ! -f "$RESULT_JSON" ]; then
    echo "FAIL: missing $RESULT_JSON"
    exit 2
  fi

  python3 "/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/scripts/validate_run_result.py" \
    "/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/schemas/worktree-result.schema.json" \
    "$RESULT_JSON"

  echo "PASS: result.json validated"
} > "$QA_LOG" 2>&1

echo "PASS" >> "$QA_LOG"
