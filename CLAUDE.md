# BABCS Claude Code Instructions

Follow the repository-wide engineering rules in `AGENTS.md`.
At the start of each session, read only the five most recent entries under
`## Sessions` in `conversations_log.md`. Read older entries only when required
for missing historical context. Append an accurate entry after completing
repository work.

## Project Context

- The active application is `frontend/`, built with React, TypeScript, and
  Vite.
- No backend has been selected or implemented.
- Product requirements are still being defined. Ask only when a missing
  decision cannot be inferred safely from the repository or task.

## Implementation Guidance

- Inspect related components, styles, and configuration before editing.
- Match existing patterns and keep changes narrowly scoped.
- Use TypeScript and avoid unsafe types unless unavoidable and explained.
- Keep UI components accessible and responsive.
- Do not introduce state management, routing, UI libraries, API clients, or
  backend frameworks without a concrete requirement.
- Do not modify generated files or commit dependency/build directories.

## Required Checks

After frontend changes, run from `frontend/`:

```powershell
npm run lint
npm run build
```

Report any checks that could not be run or did not pass.
