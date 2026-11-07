# Motif

> **Project status:** Alpha  
> **Version identity:** Alpha  
> **Specification role:** Initial and authoritative project baseline.

## Project definition

Motif is a digital communication and publishing system for stories, arguments, knowledge, and evidence. Its governing visual language is the **International Typographic Style**. Typography, photography, geometry, grid, color, negative space, scale, overlap, and rhythm work together to make content relationships clear and expressive.

The engineering starting point is a single Next.js application initialized in this order:

1. Next.js App Router.
2. shadcn/ui using the **Sera** preset and **Base UI** component base.
3. Fumadocs initialized inside the existing application.

Sera is the initial visual and component implementation reference, not Motif's design authority. Motif's principles determine what is retained, adapted, or replaced.

The eventual public product is one application with three publishing surfaces:

| Surface       | Route   | Foundation                          | Purpose                                                                                      |
| ------------- | ------- | ----------------------------------- | -------------------------------------------------------------------------------------------- |
| Motif website | `/`     | Next.js + adapted shadcn primitives | Establish Motif's identity and direct visitors to its publications                           |
| Documentation | `/docs` | Fumadocs + MDX                      | General-purpose concepts, guides, tutorials, references, examples, and technical information |
| Blog          | `/blog` | Fumadocs MDX / Blog integration     | Posts, updates, articles, authors, dates, topics, archives, and discovery                    |

These are not three applications or deployments. They share one repository, one Next.js application, one site identity, and one Motif visual foundation, while retaining layouts suited to their distinct reader tasks. Fumadocs is initialized early as engineering infrastructure; the complete documentation and blog publishing experiences are built later.

## Core principles

1. International Typographic Style is Motif's governing visual language and informs structure, expression, and implementation.
2. Zurich-oriented structural discipline and Basel-oriented expressive tension are integrated methods, not switchable themes.
3. Content, evidence, audience, and reader task precede templates, components, and effects.
4. Typography, photography, geometry, grid, color, space, scale, overlap, and rhythm are first-class materials.
5. Meaning, provenance, rights, accessibility, reading order, and multilingual integrity must survive every visual transformation.
6. Next.js, shadcn, Sera, Base UI, Fumadocs, Tailwind, Skills, MCP servers, and reference websites provide capabilities; none owns Motif's design authority.
7. Product, design, architecture, dependency, scope, and acceptance decisions belong to the project owner. Missing decisions are blockers, not invitations to improvise.
8. A planned tool call, generated screenshot, successful build, or written specification is not proof that a test passed.

## Development sequence

| Stage | Purpose                  | Main result                                                     |
| ----- | ------------------------ | --------------------------------------------------------------- |
| A0    | Project Initialization   | Working Next.js + shadcn Sera + Fumadocs starter                |
| A1    | Baseline Freeze          | Verified and documented initial Alpha engineering baseline      |
| A2    | Visual Foundation        | First Motif visual adjustments and a minimal specimen page      |
| A3    | shadcn Adaptation        | Adapted foundational shadcn components                          |
| A4    | Component Validation     | Component test pages, variants, states, and responsive behavior |
| A5    | Motif Publishing Website | Website `/`, Documentation `/docs`, and Blog `/blog`            |

See [`ROADMAP.md`](ROADMAP.md) for scope and exit criteria.

## Documentation map

| File                              | Responsibility                                                              |
| --------------------------------- | --------------------------------------------------------------------------- |
| `AGENTS.md`                       | Agent authority, task procedure, safety, and reporting                      |
| `ROADMAP.md`                      | A0–A5 delivery stages and acceptance criteria                               |
| `docs/CHARTER.md`                 | Identity, governing principles, boundaries, decision authority              |
| `docs/governance/DECISIONS.md`    | Durable owner-approved decisions                                            |
| `docs/governance/GIT-WORKFLOW.md` | Branching, review, staging, release, and history rules                      |
| `docs/governance/RESOURCES.md`    | Historical references, standards, official technical docs, tools            |
| `docs/ARCHITECTURE.md`            | Conceptual layers and eventual single-application architecture              |
| `docs/design/VISUAL-LANGUAGE.md`  | Visual grammar and Alpha working design direction                           |
| `docs/design/COMPOSITION.md`      | Composition briefs, editorial modes, patterns, responsive re-composition    |
| `docs/design/REFERENCE-CASES.md`  | Historical/contemporary references and case-study method                    |
| `docs/content/CONTENT-MODEL.md`   | Content records, semantic content, media, provenance, rights                |
| `docs/system/IMPLEMENTATION.md`   | Initialization, framework roles, Sera adaptation, implementation boundaries |
| `docs/system/QUALITY.md`          | Progressive quality gates and acceptance requirements                       |
| `docs/testing/TEST-SUITE.md`      | Incremental component and publishing-content test suites                    |
| `PACKAGE-MANIFEST.json`           | Machine-readable inventory and project identity                             |
| `.gitignore`                      | Local/generated files excluded from version control                         |
| `.gitattributes`                  | Text normalization and binary-file handling                                 |

## Authority order

1. `docs/governance/DECISIONS.md` and `docs/CHARTER.md`.
2. Domain specifications: architecture, visual language, composition, content model, implementation, quality, tests, and Git workflow.
3. `ROADMAP.md` for delivery order and stage boundaries.
4. `AGENTS.md` for execution procedure.
5. Reference Cases and Resources for evidence and capabilities.

## Status vocabulary

- `DECIDED`: owner-approved or normative project decision.
- `PROPOSED`: under consideration; it becomes a requirement only after owner approval.
- `IMPLEMENTED`: present in the inspected repository.
- `VERIFIED`: a specific check was executed and evidence recorded.
- `ACCEPTED`: the owner explicitly accepted the result.
- `NOT RUN`: execution has not occurred; no pass is claimed.

## Version identity and history

The project is **Motif**, with **Alpha** as its sole initial version identity. All current specifications, engineering setup, implementation, and refinements belong to this original baseline. Future work continues this Alpha project identity unless the owner explicitly establishes a new one.

Git commits record the actual development history beginning with the repository's initial commit; commit history and product version identity remain distinct.

This specification does not claim that the application, tests, visual baselines, deployment, or publishing surfaces have already been implemented or verified. Their status must be established from the checked-out repository and execution evidence.
