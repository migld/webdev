# CLAUDE.md — Project Context

This file is read automatically by Claude Code at the start of every session.

---

## What This Project Is

David Migl's personal website. Built incrementally — starting simple, adding features over time.

**Owner:** David I. Migl
**GitHub:** https://github.com/migld/webdev
**Live:** https://davidmigl.dev
**Email:** dmigl6445@gmail.com

---

## Current State (Phase 1 — Complete + Deployed)

Two pages are live at https://davidmigl.dev:

| Route | File | Status |
|---|---|---|
| `/` | `src/pages/Home.tsx` | Done |
| `/resume` | `src/pages/Resume.tsx` | Done |

---

## Tech Stack

| Layer | Choice |
|---|---|
| Frontend | React + Vite + TypeScript |
| Styling | Bootstrap 5.3 dark theme + custom CSS |
| Routing | React Router v6 |
| Container | Docker (multi-stage: Node build → nginx serve) |
| Domain | davidmigl.dev via Cloudflare |
| DNS + CDN + SSL | Cloudflare (proxied, Full Strict, Origin Cert) |
| VM | DigitalOcean Ubuntu 24.04 (167.172.214.44) |
| Reverse proxy | nginx on VM (SSL termination → proxy to container:3000) |
| Registry | DigitalOcean Container Registry (registry.digitalocean.com/migld) |
| CI | GitHub Actions — ci.yml (type check + build on PR) |
| CD | GitHub Actions — deploy.yml (build → push to registry → SSH deploy) |
| Backend (future) | Scala + Akka HTTP |

---

## Key Files

| File | Purpose |
|---|---|
| `src/data/resume.ts` | **Single source of truth for all resume content.** Edit this to update the resume. |
| `src/styles/custom.css` | Dark theme overrides — glassmorphism cards, gradient hero text, hover animations |
| `src/components/Navbar.tsx` | Sticky top nav, glassmorphism background |
| `src/pages/Home.tsx` | Hero section — gradient name, tagline, CTA to resume, GitHub link |
| `src/pages/Resume.tsx` | Renders from `resume.ts` — summary, skills by category, experience cards, education |
| `Dockerfile` | Multi-stage: Node builds → nginx serves |
| `docker-compose.yml` | `dev` profile (hot reload) and `prod` profile (nginx) |
| `.github/workflows/ci.yml` | CI — type check + build on push/PR to main |
| `.github/workflows/deploy.yml` | CD — build image, push to DO registry, SSH deploy to VM |

---

## Infrastructure

### Deploy Flow

```
PR merged to main → GitHub Actions builds Docker image → pushes to DO registry
→ SSHes into VM → pulls new image → stops old container → starts new one on :3000
→ nginx proxies :443 → :3000 → site live at https://davidmigl.dev
```

### VM Details

- **IP:** 167.172.214.44
- **OS:** Ubuntu 24.04
- **nginx config:** /etc/nginx/sites-available/davidmigl.dev
- **SSL certs:** /etc/ssl/cloudflare-cert.pem, /etc/ssl/cloudflare-key.pem
- **Container port:** 3000 (nginx proxies 443 → 3000)

### GitHub Secrets

| Secret | Purpose |
|---|---|
| `DO_TOKEN` | DigitalOcean API token |
| `DO_REGISTRY` | registry.digitalocean.com/migld |
| `DO_HOST` | VM IP |
| `DO_SSHKEY` | SSH private key for VM access |

---

## Local Development

```bash
docker compose --profile dev up   # hot reload at localhost:5173
```

---

## Roadmap (Not Started)

1. **Projects page** (`/projects`)
2. **GitHub page** (`/github`) — needs Scala backend
3. **Blog** (`/blog`, `/blog/:slug`) — needs Scala backend + Markdown posts
4. **Scala Akka HTTP backend**

---

## Architectural Decisions

- **No backend yet.** All data is static TypeScript. Backend added when blog/GitHub pages are built.
- **Resume data is TypeScript, not fetched.** No API needed, just edit the file.
- **Vite `host: '0.0.0.0'`** in `vite.config.ts` so Vite binds correctly inside Docker.
- **React Router** used from day 1 so adding pages requires no refactoring.
- **Bootstrap `*` suffix convention** in `resume.ts` — skill ending in `*` means "some experience", renders faded.
- **Cloudflare Origin Cert** instead of Let's Encrypt — simpler, 15-year validity, no renewal cron.
- **Native SSH in deploy workflow** instead of appleboy/ssh-action — avoids drone-ssh TTY issues.

---

## User Preferences

- Keep scope tight — do not add features beyond what is asked.
- Start simple, build incrementally.
- Dark theme throughout.
- No plain HTML/JS — TypeScript + React for everything frontend.
- User wants to execute commands themselves — Claude should suggest, not run (Bash restricted to read-only).
