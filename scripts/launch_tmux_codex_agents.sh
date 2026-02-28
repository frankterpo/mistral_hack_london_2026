#!/usr/bin/env bash
set -euo pipefail

SESSION_NAME="${SESSION_NAME:-control-room}"
MAIN_REPO="${MAIN_REPO:-/tmp/mistral_hack_london_2026}"
CORE_WT="${CORE_WT:-/tmp/mhl26-core}"
UI_WT="${UI_WT:-/tmp/mhl26-ui}"
OPS_WT="${OPS_WT:-/tmp/mhl26-ops}"
QA_WT="${QA_WT:-/tmp/mhl26-qa}"

for dir in "$MAIN_REPO" "$CORE_WT" "$UI_WT" "$OPS_WT" "$QA_WT"; do
  mkdir -p "$dir"
done

bash "/Users/franciscoterpolilli/Projects/mistral_hack_london_2026/scripts/init_run_dirs.sh" \
  "$CORE_WT" "$UI_WT" "$OPS_WT" "$QA_WT"

if tmux has-session -t "$SESSION_NAME" 2>/dev/null; then
  echo "tmux session '$SESSION_NAME' already exists"
  exit 0
fi

tmux new-session -d -s "$SESSION_NAME" -n master -c "$MAIN_REPO"
tmux send-keys -t "$SESSION_NAME:master.0" 'git status || true' C-m
tmux split-window -h -t "$SESSION_NAME:master" -c "$MAIN_REPO"
tmux send-keys -t "$SESSION_NAME:master.1" 'printf "Merge queue\n==========\n- feat/ops-provenance\n- feat/core-sim\n- feat/ui-city\n- feat/qa-harness\n"' C-m

tmux new-window -t "$SESSION_NAME" -n agents -c "$CORE_WT"
tmux send-keys -t "$SESSION_NAME:agents.0" 'printf "Core coding agent worktree: %s\n" "$PWD"' C-m
tmux split-window -h -t "$SESSION_NAME:agents" -c "$UI_WT"
tmux send-keys -t "$SESSION_NAME:agents.1" 'printf "UI coding agent worktree: %s\n" "$PWD"' C-m
tmux split-window -v -t "$SESSION_NAME:agents.1" -c "$OPS_WT"
tmux send-keys -t "$SESSION_NAME:agents.2" 'printf "Ops coding agent worktree: %s\n" "$PWD"' C-m
tmux select-layout -t "$SESSION_NAME:agents" tiled

tmux new-window -t "$SESSION_NAME" -n qa -c "$QA_WT"
tmux send-keys -t "$SESSION_NAME:qa.0" 'printf "QA agent worktree: %s\n" "$PWD"' C-m
tmux split-window -h -t "$SESSION_NAME:qa" -c "$QA_WT"
tmux send-keys -t "$SESSION_NAME:qa.1" 'printf "Watcher pane reserved for tests/lint/replay\n"' C-m

tmux new-window -t "$SESSION_NAME" -n logs -c "$MAIN_REPO"
tmux send-keys -t "$SESSION_NAME:logs.0" "tail -n 20 -F \"$CORE_WT/runs/latest/agent.log\" \"$CORE_WT/runs/latest/qa.log\"" C-m
tmux split-window -h -t "$SESSION_NAME:logs" -c "$MAIN_REPO"
tmux send-keys -t "$SESSION_NAME:logs.1" "tail -n 20 -F \"$UI_WT/runs/latest/agent.log\" \"$UI_WT/runs/latest/qa.log\"" C-m
tmux split-window -v -t "$SESSION_NAME:logs.1" -c "$MAIN_REPO"
tmux send-keys -t "$SESSION_NAME:logs.2" "tail -n 20 -F \"$OPS_WT/runs/latest/agent.log\" \"$OPS_WT/runs/latest/qa.log\"" C-m
tmux split-window -v -t "$SESSION_NAME:logs.0" -c "$MAIN_REPO"
tmux send-keys -t "$SESSION_NAME:logs.3" "tail -n 20 -F \"$QA_WT/runs/latest/agent.log\" \"$QA_WT/runs/latest/qa.log\"" C-m
tmux select-layout -t "$SESSION_NAME:logs" tiled

tmux new-window -t "$SESSION_NAME" -n deploy -c "$MAIN_REPO"
tmux send-keys -t "$SESSION_NAME:deploy.0" 'printf "Deploy/build pane reserved for local packaging and smoke runs\n"' C-m

tmux select-window -t "$SESSION_NAME:master"
tmux display-message -t "$SESSION_NAME" "control-room session ready"
