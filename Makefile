.PHONY: help init-run-dirs agent-run launch-worktrees merge-queue launch-control-room qa-worktree validate-run-result show-run-status

ROOT := /Users/franciscoterpolilli/Projects/mistral_hack_london_2026
MAIN_REPO ?= /tmp/mistral_hack_london_2026
CORE_WT ?= /tmp/mhl26-core
UI_WT ?= /tmp/mhl26-ui
OPS_WT ?= /tmp/mhl26-ops
QA_WT ?= /tmp/mhl26-qa
RESULT_SCHEMA ?= $(ROOT)/schemas/worktree-result.schema.json

help:
	@printf "Targets:\n"
	@printf "  make init-run-dirs      Create runs/latest folders in all configured worktrees\n"
	@printf "  make agent-run          Run Codex agent (WORKTREE=$$PWD or set)\n"
	@printf "  make launch-worktrees   Create worktrees from SLICES.md, dispatch agent_run (--mode seq|par)\n"
	@printf "  make merge-queue       Print READY/NOT_READY per worktree from merge-marshal outputs\n"
	@printf "  make launch-control-room Launch tmux control-room session for worktree supervision\n"
	@printf "  make qa-worktree        Run QA scaffold against QA worktree\n"
	@printf "  make validate-run-result RESULT=/abs/path/result.json\n"
	@printf "  make show-run-status    Print current run-folder status for each worktree\n"

init-run-dirs:
	@bash $(ROOT)/scripts/init_run_dirs.sh "$(CORE_WT)" "$(UI_WT)" "$(OPS_WT)" "$(QA_WT)"

agent-run:
	@WORKTREE="$${WORKTREE:-$$PWD}" bash $(ROOT)/scripts/agent_run.sh

launch-worktrees:
	@cd $(ROOT) && bash scripts/launch_worktrees.sh --slices SLICES.md --mode $${MODE:-seq} --jobs $${JOBS:-3}

merge-queue:
	@bash $(ROOT)/scripts/merge_queue.sh

launch-control-room:
	@bash $(ROOT)/scripts/launch_tmux_codex_agents.sh

qa-worktree:
	@bash $(ROOT)/scripts/qa_worktree_gate.sh "$(QA_WT)"

validate-run-result:
	@test -n "$(RESULT)" || (echo "Set RESULT=/abs/path/result.json" && exit 1)
	@python3 $(ROOT)/scripts/validate_run_result.py "$(RESULT_SCHEMA)" "$(RESULT)"

show-run-status:
	@bash $(ROOT)/scripts/show_run_status.sh "$(CORE_WT)" "$(UI_WT)" "$(OPS_WT)" "$(QA_WT)"
