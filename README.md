# Personal Website

Personal site for David Migl — built with React, Vite, TypeScript, and Bootstrap 5 dark theme.

**Live:** https://davidmigl.dev

## Pages

| Route | Description |
|---|---|
| `/` | Hero landing page |
| `/resume` | Full resume — summary, skills, experience, education |

## Tech Stack

| Layer | Tech |
|---|---|
| Framework | React 18 + Vite 8 |
| Language | TypeScript |
| Styling | Bootstrap 5.3 (dark theme) + custom CSS |
| Routing | React Router v6 |
| Container | Docker (multi-stage: Node build → nginx serve) |

## Project Structure

```
src/
├── App.tsx              # Router setup
├── main.tsx             # Bootstrap + dark theme init
├── components/
│   └── Navbar.tsx       # Sticky top nav
├── pages/
│   ├── Home.tsx         # Hero section
│   └── Resume.tsx       # Resume page
├── data/
│   └── resume.ts        # All resume content (edit to update)
└── styles/
    └── custom.css       # Dark theme overrides, glass cards, gradients
```

## Local Development

### Docker (recommended)

```bash
docker compose --profile dev up
```
Open: http://localhost:5173

### Node

```bash
npm install
npm run dev
```
Open: http://localhost:5173

## Infrastructure

### Architecture

```
Browser → Cloudflare (DNS + SSL) → DigitalOcean VM (nginx → Docker container)
```

### Hosting

| Component | Service |
|---|---|
| Domain | `davidmigl.dev` via Cloudflare |
| DNS + CDN | Cloudflare (proxied) |
| SSL | Cloudflare Origin Certificate (Full Strict) |
| VM | DigitalOcean Ubuntu 24.04 (`167.172.214.44`) |
| Reverse proxy | nginx on VM (terminates SSL, proxies to container on port 3000) |
| Container registry | DigitalOcean Container Registry (`registry.digitalocean.com/migld`) |

### CI/CD

Two GitHub Actions workflows:

| Workflow | Trigger | What it does |
|---|---|---|
| `ci.yml` | Push + PR to `main` | Type check + build |
| `deploy.yml` | Push to `main` + manual | Build image → push to DO registry → SSH into VM → pull + restart container |

### GitHub Secrets

| Secret | Purpose |
|---|---|
| `DO_TOKEN` | DigitalOcean API token (registry auth + VM deploy) |
| `DO_REGISTRY` | `registry.digitalocean.com/migld` |
| `DO_HOST` | VM IP address |
| `DO_SSHKEY` | SSH private key for VM access |

### VM Setup

nginx config: `/etc/nginx/sites-available/davidmigl.dev`
- Listens on 443 (SSL) with Cloudflare origin cert
- Proxies to `localhost:3000` (Docker container)
- Redirects port 80 → 443

SSL certs:
- `/etc/ssl/cloudflare-cert.pem`
- `/etc/ssl/cloudflare-key.pem`

### Deploy Flow

```
1. Merge PR to main
2. GitHub Actions builds Docker image
3. Tags with git SHA + latest
4. Pushes to DO Container Registry
5. SSHes into VM
6. Pulls new image
7. Stops old container, starts new one on port 3000
8. nginx proxies traffic → site is live
```

## Updating Resume Content

Edit `src/data/resume.ts` — changes hot-reload in dev, deploy via PR merge.

## Roadmap

- [ ] Projects showcase page
- [ ] Blog (Scala Akka HTTP backend + Markdown posts)
- [ ] GitHub profile / repo display
