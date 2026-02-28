#!/usr/bin/env bash
set -euo pipefail

# Usage:
#   ./scripts/launch_worktrees.sh --branch base --slices SLICES.md --mode seq
#   ./scripts/launch_worktrees.sh --branch base --slices SLICES.md --mode par --jobs 3
#
# Assumptions:
# - Run from repo root
# - You have SLICES.md listing slice IDs (one per line or in bullet list)
# - You will run @slice-builder manually in Cursor per worktree

BRANCH="main"
SLICES_FILE="SLICES.md"
MODE="seq"       # seq | par
JOBS="3"         # only used if MODE=par
WORKTREES_DIR="wt"
BASE_REF="HEAD"

while [[ $# -gt 0 ]]; do
  case "$1" in
    --branch) BRANCH="$2"; shift 2 ;;
    --base-ref) BASE_REF="$2"; shift 2 ;;
    --slices) SLICES_FILE="$2"; shift 2 ;;
    --mode) MODE="$2"; shift 2 ;;
    --jobs) JOBS="$2"; shift 2 ;;
    --worktrees-dir) WORKTREES_DIR="$2"; shift 2 ;;
    *) echo "Unknown arg: $1" >&2; exit 1 ;;
  esac
done

if [[ ! -f "$SLICES_FILE" ]]; then
  echo "Missing slices file: $SLICES_FILE" >&2
  exit 1
fi

# Extract slice IDs: tokens like slice-01-core, slice-02-ui
# Parser accepts: plain lines, bullets (- slice-01-core), numbered (1) slice-01-core)
SLICE_IDS=$(grep -Eo '(^|[[:space:]])(slice-[a-zA-Z0-9._-]+)' "$SLICES_FILE" | awk '{print $NF}' | sort -u)

if [[ -z "${SLICE_IDS}" ]]; then
  echo "No slice IDs found in $SLICES_FILE. Expect tokens like: slice-01-core" >&2
  exit 1
fi

mkdir -p "$WORKTREES_DIR"

echo "== Creating worktrees under ./$WORKTREES_DIR from base ref: $BASE_REF"
for s in $SLICE_IDS; do
  WT_PATH="$WORKTREES_DIR/$s"
  WT_BRANCH="$s"

  if [[ -d "$WT_PATH" ]]; then
    echo "Worktree exists: $WT_PATH (skipping create)"
    continue
  fi

  echo "Creating worktree: $WT_PATH (branch: $WT_BRANCH)"
  git worktree add -b "$WT_BRANCH" "$WT_PATH" "$BASE_REF" >/dev/null
  mkdir -p "$WT_PATH/runs/latest"
done

echo ""
echo "== NEXT (manual, in Cursor): run @slice-builder once per worktree."
echo "For each slice worktree, open it in Cursor and run:"
for s in $SLICE_IDS; do
  echo "  - In $WORKTREES_DIR/$s:"
  echo "    @slice-builder Plan slice \"$s\" with criteria: (paste acceptance criteria from plan_0.md / SLICES.md)"
done

echo ""
echo "== Waiting for slice-builder outputs (runs/latest/slice-builder-output.json) in ALL worktrees…"
missing_any=true
while $missing_any; do
  missing_any=false
  for s in $SLICE_IDS; do
    OUT="$WORKTREES_DIR/$s/runs/latest/slice-builder-output.json"
    if [[ ! -f "$OUT" ]]; then
      missing_any=true
      echo "  missing: $OUT"
    fi
  done
  if $missing_any; then
    echo "  (rechecking in 10s…)"
    sleep 10
  fi
done

echo ""
echo "== All slice-builder outputs present. Dispatching agent_run.sh…"
run_one() {
  local s="$1"
  local wt="$WORKTREES_DIR/$s"
  echo "---- [$s] agent_run.sh START"
  (cd "$wt" && ./scripts/agent_run.sh) || { echo "---- [$s] FAILED"; return 1; }
  echo "---- [$s] agent_run.sh DONE"
}

if [[ "$MODE" == "seq" ]]; then
  for s in $SLICE_IDS; do
    run_one "$s"
  done
elif [[ "$MODE" == "par" ]]; then
  # parallel with bounded jobs
  sem_count=0

  for s in $SLICE_IDS; do
    while [[ "$sem_count" -ge "$JOBS" ]]; do
      wait -n
      sem_count=$((sem_count - 1))
    done

    (run_one "$s") &
    sem_count=$((sem_count + 1))
  done

  wait || { echo "At least one job failed." >&2; exit 1; }
else
  echo "Unknown mode: $MODE (use seq|par)" >&2
  exit 1
fi

echo ""
echo "== DONE. Next step: run @merge-marshal per worktree and merge only READY ones."
