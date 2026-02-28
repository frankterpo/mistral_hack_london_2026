#!/usr/bin/env bash
set -euo pipefail

if [ "$#" -eq 0 ]; then
  echo "usage: $0 /abs/worktree [/abs/worktree ...]"
  exit 1
fi

for worktree in "$@"; do
  echo "=== $worktree ==="
  for f in agent.log qa.log result.json trace-summary.json; do
    path="$worktree/runs/latest/$f"
    if [ -f "$path" ]; then
      echo "present: $path"
    else
      echo "missing: $path"
    fi
  done
  echo
done
