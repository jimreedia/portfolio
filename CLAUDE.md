# Working Process

## Backlog

Tasks live in `planning/backlog.md`, organized into three sections: Backlog, In Progress, Done. Each task is a single checkbox item. Move an item to In Progress when work starts on it, and to Done once its branch is merged.

## Worktrees & branches

Each backlog task gets its own git worktree and its own Claude Code session, so tasks in flight never touch each other's files or context.

Branch naming: `type/kebab-slug`, matching the task.
- `feature/` — new sections or capabilities
- `fix/` — bug fixes
- `docs/` — planning-doc-only changes

Examples already in this repo: `feature/homepage-redesign`, `fix/vite-base`, `docs/add-planning-notes`.
