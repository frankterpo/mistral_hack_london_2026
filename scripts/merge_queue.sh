#!/usr/bin/env bash
# Read each worktree's merge-marshal-output.json and print READY / NOT READY table.
# Usage: ./scripts/merge_queue.sh [wt/slice-01-core wt/slice-02-ui ...]
# If no args: scans wt/ for slice-* worktrees.

set -euo pipefail

ROOT="${ROOT:-$(cd "$(dirname "$0")/.." && pwd)}"
WT_DIR="${WT_DIR:-$ROOT/wt}"

if [[ $# -gt 0 ]]; then
  PATHS=("$@")
else
  # discover wt/slice-* directories
  shopt -s nullglob
  PATHS=("$WT_DIR"/slice-*)
  shopt -u nullglob
fi

if [[ ${#PATHS[@]} -eq 0 ]]; then
  echo "No worktrees to scan. Use: $0 wt/slice-01-core wt/slice-02-ui ..." >&2
  exit 0
fi

printf "%-25s %-10s %s\n" "WORKTREE" "STATUS" "BLOCKERS"
printf "%-25s %-10s %s\n" "-------------------------" "----------" "--------"

for wt in "${PATHS[@]}"; do
  if [[ ! -d "$wt" ]]; then
    continue
  fi
  name=$(basename "$wt")
  json="$wt/runs/latest/merge-marshal-output.json"
  if [[ ! -f "$json" ]]; then
    printf "%-25s %-10s %s\n" "$name" "NO_DATA" "(no merge-marshal-output.json)"
    continue
  fi
  ready=$(python3 -c '
import json, sys
p = sys.argv[1]
with open(p) as f:
    d = json.load(f)
r = d.get("ready_to_merge", False)
b = d.get("blockers", [])
print("READY" if r else "NOT_READY")
for x in (b or [])[:3]:
    print("  |", (x or "")[:70])
' "$json" 2>/dev/null || echo "PARSE_ERR")
  status="${ready%%$'\n'*}"
  blockers="${ready#$status}"
  blockers="${blockers//$'\n'/ }"
  blockers="${blockers:0:80}"
  printf "%-25s %-10s %s\n" "$name" "$status" "$blockers"
done
