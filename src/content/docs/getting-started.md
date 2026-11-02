---
title: Getting started
description: What Motif is, how the project is organized, and how to run the site locally.
order: 1
---

Motif is a cross-media, cross-platform design system for creating, organizing, expressing,
presenting, and distributing content. It aims for consistency of design intent rather than
uniformity of implementation across media and platforms.

The project is currently in **P0 — Development Foundation**. The repository contains a minimal
Astro website with TypeScript, Tailwind CSS, a browser verification baseline, and the initial
content architecture you are reading now.

## Project status

The first product is one unified Astro project containing three content areas:

- **Website** — the public-facing introduction to Motif.
- **Documentation** — principles, foundations, components, and guidance.
- **Blog** — design research, technical practice, and development notes.

The website and blog are established in P1 — Real Web Presence. Until then, the pages here are
the minimum structure needed to validate the content model, layouts, and routing.

## Running the site locally

Run all commands from the project root. Node.js and pnpm are managed by mise through
`mise.toml`, so the pinned tool versions are used automatically.

```sh
pnpm install
pnpm dev
pnpm run build
pnpm preview
pnpm test:e2e
```

- `pnpm dev` starts the development server.
- `pnpm run build` creates the static production build.
- `pnpm preview` serves the production build locally.
- `pnpm test:e2e` runs the Playwright browser checks against the production build.

## Project structure

- `src/pages/` — routes and static page structure.
- `src/layouts/` — shared page layouts.
- `src/content/docs/` — documentation entries.
- `src/content/blog/` — blog entries.
- `public/` — files served unchanged, such as favicons and downloads.

## Next steps

The immediate priority is to verify the deployment path, then begin P1 — Real Web Presence:
public website, documentation, and blog content with real navigation and page structures.
