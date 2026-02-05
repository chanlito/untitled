# AGENTS.md

## Overview

A web application using TanStack Start, React 19, Vite 7, file-based routing, Tailwind CSS, TypeScript.

## Project structure

- `src/routes/` – File-based routes using **flat files** (no nested folders). Use dot-separated names for nesting (e.g. `app.dashboard.tsx` → `/app/dashboard`, `admin.users.tsx` → `/admin/users`). `__root.tsx` is the root layout.
- `src/routeTree.gen.ts` – Generated route tree; do not edit.
- `src/components/` – Shared UI (including `src/components/ui/` for shadcn-style components).
- `src/lib/` – Shared utilities (e.g. `utils.ts`).
- `src/router.tsx` – Router creation; `getRouter()` is used by the app entry.
- `public/` – Static assets.

## Commands

- `npm run dev` – Dev server (port 12345)
- `npm run build` – Production build
- `npm run preview` – Preview production build
- `npm run test` – Run Vitest
- `npm run lint` – ESLint
- `npm run format` – Prettier
- `npm run check` – Format + lint fix (run before committing)

## Code style guidelines

- **Formatting**: Prettier and ESLint (TanStack config). Run `npm run check` before committing.
- **Components**: Functional components only. Shared UI in `src/components/`. After `npx shadcn@latest add <component>`, run `npm run check`.
- **Styling**: Tailwind via `className`; prefer utility classes over inline styles.
- **Routing**: `createFileRoute` from `@tanstack/react-router`; `Link` and `Outlet` for navigation. Routes live under `src/routes/`. Use the **flat-route convention**: one file per route in `src/routes/`, with `.` denoting nesting (e.g. `app.settings.tsx` → `/app/settings`). Layout routes render `<Outlet />`; index routes under a segment use `createFileRoute('/segment/')` (trailing slash).
- **Data**: Route loaders for route-level data; API routes or server functions for server logic.
- **Tests**: Vitest + Testing Library; colocate or use a `tests/` directory.

## Commit guidelines

Use Conventional Commits with emojis: type(scope): emoji message

**Format:** `type(scope): emoji message`

- **Types:** `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`
- **Scope:** area of change (e.g. `auth`, `api`, `ui`, `routes`)
- **Emoji:** one at the start of the message, required

Examples:

- `feat(auth): 🔐 add login form`
- `fix(api): 🐛 handle empty response`
- `docs(readme): 📝 update setup steps`
- `chore(deps): ⬆️ bump vite`

## PR guidelines

- **Scope**: One concern per PR; keep changes focused and reviewable.
- **Description**: Summarize what changed and why. Link related issues if any.
- **Checks**: Ensure `npm run check` and `npm run test` pass before requesting review.
- **Commits**: Follow [commit guidelines](#commit-guidelines) in this doc.
