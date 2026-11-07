# Motif — Agent Execution Rules

## 1. Project identity and authority

The project is **Motif**, and its sole initial version identity is **Alpha**. Every specification, implementation, and refinement in this repository belongs to this original Alpha baseline.

The agent researches, inspects, implements, tests, and reports. It does not own Motif's product or design decisions.

The owner is the decision authority for identity, visual direction, typography, color, grid, composition, content meaning, public APIs, variants, routes, architecture, dependencies, assets, licenses, external services, scope, and acceptance exceptions. The agent handles implementation details within those approved contracts.

## 2. Authority order

1. `docs/governance/DECISIONS.md` and `docs/CHARTER.md`.
2. Relevant domain specifications under `docs/`.
3. `ROADMAP.md` for stage order and exit criteria.
4. This file for execution procedure.
5. `docs/design/REFERENCE-CASES.md` and `docs/governance/RESOURCES.md` for evidence and capabilities.

When documents conflict, identify the conflicting statements and request resolution before proceeding.

## 3. Mandatory task preflight

Before each substantial task:

1. Read `README.md`, `ROADMAP.md`, `docs/governance/DECISIONS.md`, and relevant domain specifications.
2. Inspect the actual repository, current branch, working tree, Git history, package manifest, lockfile, scripts, dependencies, routes, assets, and tests.
3. Identify the active roadmap stage and its exit criteria.
4. Separate observed repository facts, official technical facts, owner decisions, proposals, and unknowns.
5. Identify applicable references, standards, tools, and permissions. A listed Skill/MCP is not proof that it is installed or invoked.
6. Define the task's scope, expected files, references, verification plan, and unresolved decisions before implementation.
7. Stop and report if a missing owner decision, source, license, dependency approval, or test environment blocks responsible implementation.

Use the checked-out repository and explicit owner decisions as the sources of truth for current project state. Treat archives, screenshots, prior conversations, and plans as historical context only.

## 4. Roadmap-aware execution

- Follow A0–A5 in `ROADMAP.md`.
- Complete each stage against its exit criteria before advancing; keep later-stage work in its planned stage.
- The A0 framework initialization is authorized: Next.js App Router, TypeScript, Tailwind CSS, ESLint, pnpm, shadcn/ui Sera, Base UI, and Fumadocs.
- Run `pnpm dlx shadcn@latest init` in the existing Next.js project. Select **Sera** and **Base UI** in the interactive prompts; this workflow uses the CLI selections directly.
- Consult current official docs for CLI flags, runtime requirements, and compatibility. Record actual installed versions from the lockfile.
- After A0, request owner approval before introducing unrelated dependencies, infrastructure, services, or component bases.
- Fumadocs initialization is early engineering setup. The completed `/docs` information architecture and `/blog` publishing surface are A5 deliverables; generated starter content remains scaffolding until then.
- The visual specimen page in A2 and component test/showcase page in A4 are internal development tools, not additional public publishing surfaces.

## 5. Design and implementation procedure

For meaningful work:

1. Identify audience, communication purpose, and reader task.
2. Inspect content, evidence, media, metadata, provenance, rights, and unknowns.
3. Apply the International Typographic Style as the governing visual language. Use Zurich-oriented structure and Basel-oriented expressive tension as integrated methods.
4. Treat Sera as an initial implementation reference only. Retain, adapt, or replace its defaults according to Motif decisions and rendered evidence.
5. Produce a Composition Brief for significant pages, features, content sequences, and composition patterns.
6. Map content records, native HTML structure, semantic components, layout/pattern responsibilities, and interactions.
7. Confirm tokens, variants, dependencies, and public contracts are approved.
8. Implement in the narrowest responsible layer.
9. Render in a real browser and inspect relevant desktop, intermediate, narrow, and narrow-container conditions.
10. Run the checks required by the current roadmap stage and `docs/system/QUALITY.md`.
11. Report evidence, defects, unrun checks, deviations, and decisions requiring owner approval.

Prefer native HTML and existing primitives. Introduce an abstraction when stable semantics, interaction behavior, or repeated composition justify its maintenance cost.

## 6. Motif-specific constraints

- Build each page from its reader task, content, and Composition Brief; use generic SaaS/dashboard patterns only when the actual communication task justifies them.
- Treat Sera as an initial implementation foundation. Motif specifications and owner-approved decisions govern its adaptation.
- Motif's approved semantic tokens and visual specifications are the source of truth as they become established. Upstream shadcn/Fumadocs/Tailwind variables are implementation mappings, not parallel design systems.
- Typography, photography, geometry, grid, color, negative space, scale, overlap, and rhythm are first-class materials.
- Use simple CSS/geometric primitives for basic geometry. SVG is for meaningful diagrams, maps, charts, complex vectors, or approved identity assets—not decoration.
- Source fonts, palettes, grid scales, spacing, breakpoints, radii, motion, icons, variants, quotations, authors, metrics, archive provenance, rights, and data from approved specifications or verifiable evidence; label unresolved values explicitly.
- Responsive layouts must re-compose relationships; merely shrinking desktop is insufficient.
- Preserve semantic meaning, source/rights information, accessible names, and logical reading order across all variants and responsive expressions.
- Every interaction must serve a reader task and have accessible and failure behavior.

## 7. Dependency and tool safety

- Keep dependency changes within the approved A0 initialization set; obtain owner approval for every later addition, upgrade, removal, or replacement.
- Before proposing a dependency, document why it is needed, current compatibility, alternatives, maintenance state, license, and impact on the lockfile.
- Treat a Monorepo, Storybook, CMS, database, analytics, custom registry, and additional deployment services as separate scope decisions requiring owner approval.
- Use Skills and MCP tools only when installed, authorized, and within their granted permissions; obtain approval before adding or connecting them.
- Protect secrets: keep credentials out of source control and local environment files ignored by Git. Publish sanitized example variables only when the application requires them.

## 8. Git and release workflow

Follow `docs/governance/GIT-WORKFLOW.md`:

- The first project commit contains the complete A0/A1 Alpha starter baseline and authoritative initial specifications.
- Keep one Alpha specification set as the authoritative project baseline; Git history records changes to that set over time.
- After the initial commit, use `features/*` → `staging` → `main`.
- Feature work is integrated through PRs into `staging`; only an accepted staging candidate may merge into `main`.
- Inspect `git status`, branch, diff, and relevant history before editing. Preserve user work.
- Require explicit authorization for destructive Git operations, force-pushes, user-data deletion, secret changes, and Production deployment.

## 9. Verification and reporting

Design, implementation, and experience must each be checked at the appropriate stage. A successful build does not prove visual quality; a screenshot does not prove accessibility; a written specification does not prove implementation.

Use `PASS / FAIL / BLOCKED / NOT RUN`. PASS requires execution evidence. Unrun checks must remain `NOT RUN`.

Every substantial task report must include: roadmap stage, scope, branch, commit, working-tree status, decision IDs/spec sections, changed files, references actually inspected, tools actually invoked, exact commands/results, browser/viewport/container/theme/locale/state where relevant, automated and manual accessibility evidence where relevant, screenshots or other evidence, defects, unrun checks, deviations, and pending owner decisions.

Only the owner can approve durable decisions, stage acceptance, and release exceptions.
