# BABCS Agent Instructions

## Project Overview

BABCS is an early-stage application. The implemented codebase currently
contains a React frontend in `frontend/`. The backend architecture, API, data
model, authentication, and deployment platform have not been selected.

Do not assume requirements or introduce backend technology without an explicit
project decision.

## Current Stack

- React 19
- TypeScript
- Vite
- ESLint
- npm

## Repository Layout

```text
babcs/
|-- frontend/       React application
|   |-- public/     Static assets
|   `-- src/        Frontend source
|-- AGENTS.md       Instructions for coding agents
|-- CLAUDE.md       Instructions for Claude Code
`-- README.md       Contributor setup and workflow
```

## Working Rules

- Read the relevant source and configuration before editing.
- Keep changes focused on the requested behavior.
- Follow existing React, TypeScript, CSS, and naming conventions.
- Prefer simple components and local patterns over premature abstractions.
- Keep API access outside presentational components when integration begins.
- Do not add dependencies unless they solve a concrete requirement.
- Never commit secrets, credentials, `.env` files, `node_modules`, or build
  output.
- Preserve user changes already present in the working tree.
- Update documentation when setup, scripts, or architecture changes.

## Frontend Commands

Run frontend commands from `frontend/`:

```powershell
npm install
npm run dev
npm run lint
npm run build
npm run preview
```

## Verification

For frontend code changes, run at minimum:

```powershell
cd frontend
npm run lint
npm run build
```

Add focused tests when a test framework is introduced. Until then, document
manual verification for user-facing behavior.

## Git Workflow

- Work on a descriptive feature or fix branch.
- Keep commits focused and use clear imperative commit messages.
- Do not force-push or rewrite shared history unless explicitly requested.
- Do not push directly to `main` unless the user explicitly asks for it.

## Architecture Boundaries

- `frontend/src/` owns browser UI and client-side behavior.
- Shared UI should become reusable only after a real reuse case exists.
- Environment-specific values must use Vite environment variables and be
  documented in a committed `.env.example` file.
- Backend code should eventually live in a separate top-level directory, such
  as `backend/`, after the backend stack is selected.

## Current Priorities

1. Define product requirements and initial pages.
2. Establish routing, layout, styling, and component conventions.
3. Select the backend, database, authentication, and API contract.
4. Add automated tests and continuous integration.

