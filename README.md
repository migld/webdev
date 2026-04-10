# Personal Website

Personal site for David Migl — built with React, Vite, TypeScript, and Bootstrap 5 dark theme.

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
| Container | Docker + nginx (prod), Node dev server (dev) |

## Project Structure

```
src/
├── App.tsx              # Router setup
├── main.tsx             # Bootstrap + dark theme bootstrap
├── components/
│   └── Navbar.tsx       # Sticky top nav
├── pages/
│   ├── Home.tsx         # Hero section
│   └── Resume.tsx       # Resume page
├── data/
│   └── resume.ts        # All resume content lives here (edit to update)
└── styles/
    └── custom.css       # Dark theme overrides, glass cards, gradients
```

## Getting Started

### Option A — Docker (recommended, no Node install needed)

**Dev mode** (hot reload):
```bash
docker compose --profile dev up
```
Open: http://localhost:5173

**Production preview** (nginx, built bundle):
```bash
docker compose --profile prod up --build
```
Open: http://localhost:8080

### Option B — Local Node

Requires Node 18+.

```bash
npm install
npm run dev
```
Open: http://localhost:5173

## Updating Resume Content

All resume data is in one file: `src/data/resume.ts`

Edit the exported object to update any section — changes hot-reload instantly in dev mode. No API, no CMS.

## Build for Production

```bash
npm run build
```
Output goes to `dist/`. Serve with any static file host (nginx, Netlify, S3, etc.).

## Roadmap

- [ ] Projects showcase page
- [ ] Blog (Scala Akka HTTP backend + Markdown posts)
- [ ] GitHub profile / repo display
