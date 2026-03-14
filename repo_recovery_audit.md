# Repo Recovery Audit

Date: 2026-03-14

## Skill search

I used the `find-skills` workflow first. I did not find a usable dedicated skill for "consolidate multiple git worktrees/repos into one canonical repo", so I switched to direct git and filesystem inspection.

## What is true right now

- Canonical remote for this repo: `https://github.com/frankterpo/mistral_hack_london_2026.git`
- Current local repo: `/Users/franciscoterpolilli/Projects/mistral_hack_london_2026`
- Current branch: `main`
- Current HEAD: `91910bd1`
- Remote alignment: local `main` matches `origin/main`
- Visible git history in this repo:
  - `91910bd1 feat: transform isometric-city into ISOBUSINESS VC simulation`
  - `850555ba chore: init hackathon repo`

## Important diagnosis

This repo is not a healthy development baseline even though it is the latest commit on `origin/main`.

Reasons:

- There is no tracked top-level `package.json`
- Under `apps/web`, the tracked files are almost entirely generated output:
  - `.next/**`
  - `.vercel/**`
  - `next-env.d.ts`
  - `tsconfig.tsbuildinfo`
- I did not find the actual application source tree in this repo
- I did not find additional branches or active git worktrees that contain newer source
- A sibling clone at `../mistral_hack_london_2026_clone` is identical and has the same problem

## About the worktree confusion

This repository contains `.worktrees/slice-*` marker files plus scripts for creating worktrees under `wt/`.

What I found:

- `.worktrees/` contains only slice marker files, not source trees
- `git worktree list` shows only the main checkout
- I did not find any surviving `wt/` directories near this repo

That means the source you want to recover is not present in the current repo or in any active local worktree I could find from this workspace.

## Recommended single starting point

If you want one repo with no branches to start from today, use:

- Repo: `/Users/franciscoterpolilli/Projects/mistral_hack_london_2026`
- Branch: `main`
- Commit: `91910bd1`

But treat it as:

- the latest known remote snapshot
- not a working source repo
- not sufficient by itself for continued app development

## What must happen next

To recover a real working repo, you need to locate one of these external sources:

1. An older local directory that still contains the real app source
2. A lost `wt/slice-*` worktree folder outside this repo
3. Another machine backup
4. A Vercel deployment source import
5. A GitHub branch, fork, or unpublished local clone not currently visible here

## Practical recovery rule

Do not merge by directory age alone.

Prefer this priority order:

1. A repo that contains actual source files and build config
2. A repo whose commit history explains how the source evolved
3. A repo whose app can install and build
4. File mtimes only as a tiebreaker, never as primary truth

## Bottom line

The newest git commit for `mistral_hack_london_2026` is `91910bd1`, but it is a compiled artifact snapshot, not the real source-of-truth app repo.

If you want, the next step is for me to scan additional parent directories, external drives, or deployment configs to locate the missing source tree and then assemble one clean canonical repo from that.
