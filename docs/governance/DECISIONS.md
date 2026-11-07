# Motif Decisions

> This is the authoritative decision ledger for the single Motif Alpha baseline. It records what is settled, what still requires an owner decision, and what must merely be verified during implementation. Alpha remains the project and version identity throughout this work.

## 1. Decision authority and status model

The project owner approves product scope, visual identity, compositions, content contracts, public APIs, routes, architecture, dependencies, external services, and acceptance exceptions. Implementers may choose routine implementation details inside those approved boundaries, but may not silently change a substantive contract.

Use these statuses consistently:

- **LOCKED** — an approved rule or direction. Implementation must follow it unless the owner explicitly changes it.
- **OPEN — OWNER DECISION** — a substantive choice that needs an explicit owner decision. Do not silently choose an option.
- **OPEN — IMPLEMENTATION VERIFICATION** — not a product-design question. Gather evidence from the installed project, actual assets, browser rendering, service account, or tests, then record the verified result.
- **DEFERRED** — intentionally postponed until the named roadmap stage. It is not a blocker before that stage, and must be resolved before the dependent work is accepted.
- **CLOSED** — resolved and superseded by a locked decision or recorded verification. Keep the record when its history is useful; do not treat it as active work.

An item must not be called an open decision merely because its implementation has not happened. In particular, an already approved direction is not reopened just because its generated configuration or runtime behavior still needs verification.

## 2. Locked decisions

### D-01 — Motif is a communication and publishing system

**Status: LOCKED**

Motif communicates stories, arguments, knowledge, and evidence. Its quality is expressed through relationships among information, typography, imagery, grid, geometry, and space.

### D-02 — International Typographic Style is the governing visual language

**Status: LOCKED**

Zurich-oriented methods provide structural discipline; Basel-oriented methods contribute expressive tension. They are integrated analytical and design methods, not switchable themes or fixed proportions. Content, reader task, and evidence determine their use.

### D-03 — Typography, photography, and geometry are first-class materials

**Status: LOCKED**

Typography carries semantic and graphic roles. Photography is treated as editorial and evidentiary material, with attention to subject, viewpoint, crop, sequence, caption, credit, source, and rights. Geometry uses a concise vocabulary of simple forms with explicit communicative functions. CSS/basic primitives are preferred for simple geometry; SVG is reserved for meaningful diagrams, maps, charts, complex graphics, and approved identity assets.

### D-04 — Composition follows content and reader task

**Status: LOCKED**

A page is a complete composition shaped by reader task and content. Significant pages, articles, features, and composition patterns require a Composition Brief covering content order, material roles, grid, hierarchy, spatial relationships, responsive re-composition, and acceptance criteria.

### D-05 — Design-system responsibilities remain separate

**Status: LOCKED**

Visual foundations, interaction primitives, semantic content components, layout regions, composition patterns, and complete pages are distinct responsibilities. A semantic component expresses meaning; a primitive handles interaction; a pattern composes content; a page determines the complete composition.

### D-06 — Semantic components use two expression axes

**Status: LOCKED**

- **Expressive Variant:** a different expression for a different communicative role within comparable space.
- **Adaptive Expression:** re-composition caused by viewport, container, content length, writing system, direction, or input conditions.

Variants preserve meaning, required data, provenance, accessible name/description, and logical reading order. Each component declares a finite set of approved named variants. A variant is not justified solely by visual preference or a one-off page treatment.

### D-07 — Content and evidence must be traceable

**Status: LOCKED**

Content identity and facts are independent of rendering. Preserve contributor roles, sources, rights, archive IDs, dates, units, methods, limitations, and unknowns where applicable. Ground provenance in traceable records and mark unknowns explicitly. Media includes suitable textual alternatives.

### D-08 — Accessibility, localization, and responsiveness are foundational

**Status: LOCKED**

WCAG 2.2 AA is the target. Use native semantics first. Wide, intermediate, narrow, and narrow-container layouts must preserve information, provenance, reading order, and functionality. Verify real glyph coverage, punctuation, line breaking, direction, and font fallback for every writing system the project commits to support. Verification is introduced progressively as the relevant implementation exists.

### D-09 — The project owner controls durable decisions

**Status: LOCKED**

The owner approves visual identity, compositions, content contracts, public APIs, routes, architecture, dependencies, resources, scope, and acceptance exceptions. Implementers decide technical details within those contracts. Unspecified substantive decisions remain blockers at the point they become necessary.

### D-10 — The eventual publishing product is one Next.js application

**Status: LOCKED — explicitly specified by the owner**

The final product contains the Motif website at `/`, general-purpose Documentation at `/docs`, and general-purpose Blog at `/blog` in one Next.js App Router project and one deployment unit. Documentation supports general concepts, guides, tutorials, reference material, examples, and technical information rather than design-system material alone. Blog supports conventional posts, updates, articles, authors/contributors, dates, and optional tags/categories without requiring one editorial format. They share Motif tokens and site identity but retain layouts suited to their distinct reading tasks.

The three-surface product is built in A5. Fumadocs is initialized in A0 as infrastructure; initialization does not mean the complete Docs or Blog surfaces, their information architecture, or their publishing features have already been decided or built.

### D-11 — Frameworks provide capabilities, not visual authority

**Status: LOCKED**

Next.js provides application routing/rendering; shadcn provides editable primitive source; Sera is the initial visual/component baseline; Base UI provides the selected primitive behavior; Fumadocs provides MDX/documentation infrastructure; Tailwind provides styling implementation. None owns Motif's design direction. Their defaults may be retained, adapted, or replaced according to approved Motif decisions.

### D-12 — Testing is continuous and stage-appropriate

**Status: LOCKED**

Testing is part of every relevant implementation stage, not a prerequisite to all implementation. A0 verifies setup and build; A2 verifies rendered visual foundations; A3 verifies adapted component behavior; A4 expands component, responsive, accessibility, and visual-regression checks; A5 adds content-shape and cross-surface publishing tests. Tests use explicit fixtures, execution records, and evidence. Unrun tests retain the `NOT RUN` status.

### D-13 — Sera is the initial shadcn baseline and Base UI is the selected component base

**Status: LOCKED — explicitly specified by the owner**

Initialize shadcn/ui in the existing Next.js project with `pnpm dlx shadcn@latest init`. In the interactive CLI flow, select Sera as the visual preset and Base UI as the component base. These selections are settled; they must not appear in the open-decision register again. The generated files and exact configuration still require inspection and recording. Sera is an implementation reference; Motif's International Typographic Style principles and approved design decisions determine its adaptation.

### D-14 — Initial engineering setup precedes documentation freeze

**Status: LOCKED — explicitly specified by the owner**

The project is initialized in this order: Next.js → shadcn Sera + Base UI → Fumadocs. Once the starter works and its generated configuration is inspected, document the actual versions, paths, scripts, and integration details and freeze the Alpha baseline. The first project commit contains the initialized starter and the authoritative Alpha documentation; it is not documentation-only.

### D-15 — Public product surfaces follow the component foundation

**Status: LOCKED — explicitly specified by the owner**

After initialization and baseline freeze, establish the visual foundation, adapt selected shadcn components, and validate them through internal specimens/test pages. Build the public Motif website, full Documentation information architecture, and Blog publishing experience only after the component foundation is sufficiently stable. The internal specimen and test pages are not additional public surfaces.

### D-16 — Version identity remains Alpha

**Status: LOCKED — explicitly specified by the owner**

The project name is Motif and its sole initial version identity is Alpha. All current specifications, initial implementation, and subsequent work belong to this same Alpha starting point. Git commits record actual development history and remain distinct from product version identity. Resolving this ledger does not create Alpha 2, a new Alpha iteration, or another product version.

### D-17 — Implementation uses `features/*` → `staging` → `main`

**Status: LOCKED**

Feature work is developed in `features/*` branches and integrated by PR into `staging`. The integrated staging state is tested locally, then verified on the selected Preview environment. Only an accepted staging candidate may merge through a PR into `main`. The branch flow is settled; provider-specific enforcement and deployment capabilities must be verified against the actual account and plan before being treated as configured.

### D-18 — Add tools and dependencies only for verified needs

**Status: LOCKED**

Do not add a monorepo, separate component package, Storybook, CMS, database, analytics service, custom registry, or deployment integration merely because it is common in similar projects. Introduce a tool or dependency only when a concrete requirement, implementation benefit, and maintenance cost have been assessed. Any material addition requires owner approval and an update to the relevant project documents.

## 3. Alpha visual baseline

- Sera is the initial visual implementation baseline. It must be inspected in the browser before adaptation.
- Existing values and rules in `docs/design/VISUAL-LANGUAGE.md` remain the Alpha design direction and working reference; they are not proof that those values have already been implemented or visually validated.
- A2 compares the existing Motif working values against the generated Sera output. Retain, adapt, or replace details deliberately while maintaining one authoritative palette and scale.
- System/UI colors use semantic tokens. Special editorial/graphic colors require a Composition Brief explaining meaning, Light/Dark behavior, contrast, grayscale behavior, and owner approval.
- CJK measures and reading sizes remain working values until real font assets and browser specimens are verified.
- No arbitrary Zurich/Basel ratio, universal grid, fixed card system, or manually illustrated SVG decoration is implied by the governing style.

## 4. Active decision and verification register

Only items in this register are unresolved. Each item has an owner, a gate, and a closure condition. Work may proceed before a later-stage item is closed, but the dependent stage may not be accepted while its required item remains unresolved.

### 4.1 Implementation verification — no new product decision implied

| ID   | Item                                                                                                                           | Type                                                | Gate                       | Closure evidence                                                                                                                                                                                                          |
| ---- | ------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------- | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| V-01 | Exact installed versions of Next.js, React, Tailwind, shadcn-related packages, Base UI, Fumadocs, Node.js, and package manager | Verification                                        | A0–A1                      | Record actual package manifest and lockfile values, runtime requirements, and compatibility notes in the project manifest/docs. Do not preselect versions in this ledger.                                                 |
| V-02 | Generated shadcn configuration and installed files                                                                             | Verification                                        | A0–A1                      | Record the actual Sera preset, Base UI selection, config paths, aliases, CSS variables, and generated component conventions. Sera and Base UI selections themselves are already locked by D-13.                           |
| V-03 | Fumadocs integration shape produced by the current CLI                                                                         | Verification                                        | A0–A1                      | Inspect generated route groups, source configuration, providers, CSS and root-layout changes; document the actual integration and confirm it coexists with the root application.                                          |
| V-04 | Font asset availability, file formats, weights, subsets, glyph coverage, and licenses                                          | Verification plus owner approval of final selection | A2                         | Produce an asset/rights inventory and browser specimens for the supported writing systems. Present viable choices and licensing facts; record the approved family/weights and fallback stack in the visual specification. |
| V-05 | Git provider capabilities and actual branch/Preview enforcement                                                                | Verification                                        | A1; recheck before release | Verify the selected repository provider, PR protections, required checks, Preview deployment support, and plan limitations. Keep D-17's branch model unchanged unless the owner approves a change.                        |

### 4.2 Owner decisions — resolve at the named stage

| ID   | Decision                                                                                  | Why it remains open                                                                                                                                                    | Gate                                                              | Required decision record                                                                                                                                                       |
| ---- | ----------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| O-01 | Final reconciliation of Sera output with Motif visual specifications                      | The governing visual direction is already locked, but the exact rendered token values and component details require comparison.                                        | A2                                                                | Show relevant browser specimens, identify each material conflict, recommend retain/adapt/replace, and obtain owner approval for the resulting visual baseline.                 |
| O-02 | Initial semantic component set and each component's approved expressive/adaptive variants | D-05 and D-06 define the model, but do not predetermine a catalog or approve every variant. Selection must follow real content and interface use cases.                | A3–A4                                                             | Provide component inventory with purpose, content contract, primitive dependencies, variant rationale, adaptive behavior, and examples. Approve only the initial required set. |
| O-03 | Documentation information architecture and navigation                                     | `/docs` and its general-purpose remit are locked; its actual taxonomy, hierarchy, landing pages, and navigation are not.                                               | A5                                                                | Propose a task-oriented structure based on actual documentation content. Avoid designing empty categories without content or a user need.                                      |
| O-04 | Initial Blog publishing scope and editorial structure                                     | `/blog` and its conventional publishing remit are locked; listing, archive, author pages, topic/category behavior, and editorial metadata need a minimum viable scope. | A5                                                                | Propose the smallest useful publishing model and page set. Treat tags/categories as optional, not mandatory.                                                                   |
| O-05 | Search scope and behavior across `/`, `/docs`, and `/blog`                                | The three surfaces may have different content models and discovery needs; a single global search or separate indexes has not been approved.                            | A5                                                                | Map user search tasks and content sources, then recommend global or surface-specific behavior with implementation and maintenance costs.                                       |
| O-06 | Production hosting, domain, Preview provider, and release configuration                   | These depend on actual account access, provider capabilities, cost, and deployment requirements. No provider or domain is implied by the current architecture.         | Before A5 production release                                      | Present feasible options, account/plan constraints, domain and environment requirements, and deployment/rollback implications. Obtain approval before configuration.           |
| O-07 | Analytics and any associated data collection                                              | Analytics is not a required baseline dependency. Its value, privacy implications, retention, consent, and operational cost have not been established.                  | Only if a concrete need is identified; before any data collection | First decide whether analytics is needed at all. If yes, present a minimal privacy-conscious proposal and obtain explicit approval before adding a service or collecting data. |
| O-08 | Performance budgets and release thresholds                                                | Quality targets must reflect actual content, devices, and deployment conditions; arbitrary numerical budgets would be premature.                                       | A2 establishes measurement; finalize before A5 release            | Establish representative pages and test conditions, collect a baseline, propose measurable thresholds, and obtain owner approval.                                              |

## 5. Explicitly not open decisions

The following are settled and must not be reintroduced as open items:

- Project name is **Motif** and version identity is **Alpha** (D-16).
- The product is one Next.js App Router application and one deployment unit containing `/`, `/docs`, and `/blog` (D-10).
- The initial shadcn setup uses **Sera** and **Base UI** (D-13).
- Initialization order is Next.js → shadcn Sera + Base UI → Fumadocs (D-14).
- The public surfaces follow visual-foundation and component work; internal specimens are not public surfaces (D-15).
- The branch model is `features/*` → `staging` → `main` (D-17).
- International Typographic Style governs the visual direction, with Zurich- and Basel-oriented methods integrated according to content and task (D-02).
- Semantic components distinguish expressive variants from adaptive expressions (D-06).

The exact installed versions, generated files, actual font assets, and provider capabilities are **verification work**, not reasons to reopen the approved choices above.

## 6. Decision change protocol

1. Identify the decision ID and every affected specification, roadmap stage, implementation contract, and test.
2. Separate verified facts from assumptions. Present the impact and the smallest viable alternatives.
3. Obtain explicit owner approval for any substantive change. Do not treat silence, implementation convenience, or a framework default as approval.
4. Update this ledger and all affected normative documents in the same change.
5. Update implementation and tests, then record actual verification evidence. Never mark an unrun check as passed.
6. Keep one authoritative current decision. When a decision changes, update or supersede the previous record rather than leaving conflicting active instructions.
7. A deferred item becomes active when its gate is reached; it does not automatically authorize work outside the approved scope.

## 7. Alpha baseline rule

All decisions and resolutions recorded here belong to the existing Motif Alpha baseline. Closing an item, refining a specification, implementing a stage, or making an approved correction does not change the project version identity. Git history records the sequence of work; it does not create a new Motif version.
