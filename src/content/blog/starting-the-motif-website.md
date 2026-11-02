---
title: Starting the Motif website
description: Why Motif begins with a real website, and what the first foundation now contains.
pubDate: 2026-11-02
tags:
  - project
  - web
---

Motif is a design system developed through real products rather than in the abstract. That makes
the website more than a marketing surface: it is the first product built with Motif, and the place
where its design language, documentation, and publishing workflow will be exercised.

## Why a website first

A website gives the project concrete constraints: real content, real reading, real navigation, and
real deployment. Those constraints are what a design system needs in order to make defensible
decisions instead of accumulating speculative components.

The website also connects the three areas Motif needs to serve: the public introduction to the
project, the documentation of its foundations, and the record of its research and practice.

## What exists today

The repository now contains a minimal foundation:

- A static Astro site with TypeScript and Tailwind CSS.
- A shared layout with primary navigation and pages for the website, docs, and blog.
- Astro Content Collections for documentation and blog entries, with validated front matter.
- A Playwright browser baseline that checks the generated pages, not only the source code.

## What comes next

The immediate work is to verify the deployment path and then build the real web presence: the
public website, the documentation structure, and the first genuine articles. This post is part of
the initial content used to validate that structure.
