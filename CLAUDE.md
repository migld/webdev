# CLAUDE.md — Project Context

This file is read automatically by Claude Code at the start of every session. It captures the full project state and decisions made so far.

---

## What This Project Is

David Migl's personal website. Built incrementally — starting simple, adding features over time.

**Owner:** David I. Migl  
**GitHub:** https://github.com/migld/webdev  
**Email:** dmigl6445@gmail.com

---

## Current State (Phase 1 — Complete)

Two pages are live and working:

| Route | File | Status |
|---|---|---|
| `/` | `src/pages/Home.tsx` | Done |
| `/resume` | `src/pages/Resume.tsx` | Done |

Run locally with Docker:
```bash
docker compose --profile dev up   # dev, hot reload at localhost:5173
docker compose --profile prod up --build  # nginx prod at localhost:8080
```

---

## Tech Stack (Decided)

| Layer | Choice | Reason |
|---|---|---|
| Frontend framework | React + Vite + TypeScript | Powerful, easy to start simple, scales well |
| Styling | Bootstrap 5.3 dark theme + custom CSS | Simple, modern, no design system overhead |
| Routing | React Router v6 | Standard for React SPAs |
| Container | Docker (dev: Node, prod: nginx) | Avoids Windows PowerShell npm issues |
| Backend (future) | Scala + Akka HTTP | User's preference for backend work |

Bootstrap dark theme is activated via `data-bs-theme="dark"` on `<html>` in `src/main.tsx`.

---

## Key Files

| File | Purpose |
|---|---|
| `src/data/resume.ts` | **Single source of truth for all resume content.** Edit this to update the resume page. |
| `src/styles/custom.css` | Dark theme overrides — glassmorphism cards, gradient hero text, hover animations |
| `src/components/Navbar.tsx` | Sticky top nav, glassmorphism background |
| `src/pages/Home.tsx` | Hero section — gradient name, tagline, CTA to resume |
| `src/pages/Resume.tsx` | Renders from `resume.ts` — summary, skills by category, experience cards, education |
| `Dockerfile` | Multi-stage: Node builds → nginx serves |
| `docker-compose.yml` | `dev` profile (hot reload) and `prod` profile (nginx) |

---

## Roadmap (Not Started)

These features are planned but explicitly out of scope until Phase 1 is solid:

1. **Projects page** (`/projects`) — Bootstrap card grid, data in `src/data/projects.ts`, filter by tech tag
2. **GitHub page** (`/github`) — calls Scala backend `/api/github`, displays migld's repos
3. **Blog** (`/blog`, `/blog/:slug`) — public, Markdown files, calls Scala backend `/api/posts`
4. **Scala Akka HTTP backend** — serves API for blog + GitHub proxy, static files in prod

---

## Architectural Decisions

- **No backend yet.** All data is static TypeScript. The Scala backend will be added when blog/GitHub pages are built.
- **Resume data is TypeScript, not fetched.** Intentional — no API needed, just edit the file.
- **Vite `host: '0.0.0.0'`** is set in `vite.config.ts` so Vite binds correctly inside Docker.
- **React Router** is used even now (only 2 routes) so adding pages later requires no refactoring.
- **Bootstrap `*` suffix convention** in `resume.ts` skills — a skill ending in `*` means "some experience" and renders slightly faded.

---

## User Preferences

- Keep scope tight — do not add features beyond what is asked.
- Start simple, build incrementally.
- Dark theme throughout.
- No plain HTML/JS — TypeScript + React for everything frontend.
