---
title: Choosing Astro for the Motif website
description: The reasoning behind a content-first, mostly static website foundation.
pubDate: 2026-10-28
tags:
  - engineering
  - astro
---

Motif's website is a content product before it is an application. That assumption drives the
technology choices for the first foundation.

## Content first

The documentation and blog need a structured content model, not a page-by-page HTML exercise.
Astro Content Collections provide typed front matter, schema validation, and a simple way to
generate pages from content entries. Markdown stays the authoring format, which keeps content
reviewable in Git.

## Mostly static, minimal client-side code

The public website, documentation, and blog are primarily reading experiences. They do not need a
client-side application framework to be interactive. A static build keeps the runtime small and the
deployment simple, and client-side code can be added later where a specific interaction requires
it.

## Tailwind CSS with a small surface

Tailwind CSS is used for layout and styling rather than as a design authority. The current pages
use a deliberately small set of utilities, so the structure can evolve without inheriting a large
visual system by accident.

## What this does not decide

This foundation does not decide the final visual design, the theme implementation, or the component
library. Those belong to later phases, when real content and real interaction requirements make the
decisions concrete. The Playwright baseline exists so those future changes can be verified against
the generated pages rather than against assumptions.
