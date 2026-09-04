# Working Process

## Backlog

Tasks live in `planning/backlog.md`, organized into three sections: Backlog, In Progress, Done. Each task is a single checkbox item. Move an item to In Progress when work starts on it, and to Done once the local work is finished and looks good — merging the branch happens separately and isn't a precondition for marking it Done.

## Worktrees & branches

Each backlog task gets its own git worktree and its own Claude Code session, so tasks in flight never touch each other's files or context.

Branch naming: `type/kebab-slug`, matching the task.
- `feature/` — new sections or capabilities
- `fix/` — bug fixes
- `docs/` — planning-doc-only changes
- `chore/` — build/tooling/repo config changes that aren't a feature, bug fix, or doc

Examples already in this repo: `feature/homepage-redesign`, `fix/vite-base`, `docs/add-planning-notes`, `chore/ignore-docs-build-output`.

Worktrees live in `../worktrees/<branch-slug>`, a sibling directory to the repo (e.g. `../worktrees/chore-ignore-docs-build-output`).
