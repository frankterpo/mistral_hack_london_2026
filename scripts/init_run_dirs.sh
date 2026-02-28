#!/usr/bin/env bash
set -euo pipefail

if [ "$#" -eq 0 ]; then
  echo "usage: $0 /abs/worktree [/abs/worktree ...]"
  exit 1
fi

for worktree in "$@"; do
  mkdir -p "$worktree/runs/latest"
  : > "$worktree/runs/latest/agent.log"
  : > "$worktree/runs/latest/qa.log"
  if [ ! -f "$worktree/runs/latest/result.json" ]; then
    cat <<'EOF' > "$worktree/runs/latest/result.json"
{
  "agent_class": "",
  "branch": "",
  "slice_id": "",
  "files_touched": [],
  "commands_run": [],
  "tests_run": [],
  "tests_passed": false,
  "decisiontrace_compliance": false,
  "tooltrace_compliance": false,
  "golden_seed_status": "not-run",
  "trace_artifacts": [],
  "blockers": [],
  "handoff_notes": []
}
EOF
  fi
  if [ ! -f "$worktree/runs/latest/trace-summary.json" ]; then
    cat <<'EOF' > "$worktree/runs/latest/trace-summary.json"
{
  "slice_id": "",
  "decision_traces_seen": 0,
  "tool_traces_seen": 0,
  "representative_trace_files": [],
  "notes": []
}
EOF
  fi
done
