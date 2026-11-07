# Motif Architecture

## 1. Purpose

Separate visual language, content semantics, page composition, technical implementation, and quality assurance so each responsibility remains understandable and traceable. Conceptual layers map to code packages only when an actual implementation boundary calls for one.

This architecture defines responsibilities and the eventual publishing product. Implementation follows the roadmap, so layers, routes, and packages appear when their stage requires them.

## 2. Six design-system domains

| Domain                | Responsibility                                                                                  |
| --------------------- | ----------------------------------------------------------------------------------------------- |
| Visual Foundation     | Typography, photography, geometry, grid, color, space, scale, overlap, rhythm                   |
| Primitive Components  | Buttons, fields, dialogs, navigation, interaction states                                        |
| Semantic Components   | Lead, Figure, Citation, Footnote, and other meaning-bearing content units                       |
| Layout System         | Global/local navigation, primary reading region, side regions, page areas                       |
| Composition Patterns  | Editorial sequences: article openings, evidence sequences, archive comparisons, data narratives |
| Cross-cutting Quality | Accessibility, responsive behavior, localization, themes, motion, provenance, performance       |

## 3. Six-layer content and presentation model

1. Content records.
2. Native document structure.
3. Semantic content components.
4. Collections and composition patterns.
5. UI primitives.
6. Complete page composition.

These are responsibility boundaries: a card presents a ContentItem; a page template composes content; provenance belongs to content records; Fumadocs layouts serve documentation infrastructure. Create code packages only where a genuine implementation boundary exists.

## 4. Initial tool architecture

A0 initializes one Next.js App Router application in this order:

```text
Next.js App Router
    ↓
shadcn/ui — Sera preset — Base UI
    ↓
Fumadocs CLI integration in the same application
```

The A0 project stays close to its generated structure. Sera is the initial component/visual baseline, while Motif principles and owner-approved decisions govern adaptation. Scope Fumadocs route groups, providers, and styles to documentation infrastructure; the root website follows Motif specifications.

## 5. Eventual single-site architecture

```text
One repository / one Next.js application / one deployment unit
│
├── /                 Motif website
├── /docs/*           General-purpose Fumadocs documentation
└── /blog/*           General-purpose Fumadocs blog collection

Shared foundation:
  Motif visual language, approved tokens, typography, assets,
  site identity, accessibility, content semantics, and tests
```

The three routes are A5 deliverables. A0 may create a basic `/docs` route and placeholder content as part of Fumadocs initialization; A5 replaces or adapts these examples into the approved publishing experience.

Each surface may have its own layout and navigation because it serves a different reader task. The site shares identity and approved visual foundations without forcing the three surfaces into one generic page shell. Search scope must be explicit.

## 6. Design-to-code dependency

`Owner decision → audience/task/content/evidence → visual language → Composition Brief → content semantics → layout/pattern → implementation → rendered quality evidence → owner acceptance`.

The implementation starting point is Sera, but no upstream framework or component library has design authority. As Motif decisions are approved, they become the authority for subsequent code and review.

## 7. Semantic page regions

- **Global navigation:** moves among the website, Documentation, and Blog.
- **Local navigation:** moves within the current publication surface.
- **Local contents:** navigates the current documentation page or blog post.
- **Contextual reference:** provides material related to a passage or evidence.
- **Editorial margin:** notes, pull quotes, credits, or editorial metadata.
- **Discovery:** related content, topics, or collections.
- **Primary reading/task region:** the dominant reading or interaction area.

A sidebar is a position, not a semantic type. On narrow screens, move its content into meaningful reading order or expose it through a clearly named disclosure, preserving access to all important information.

## 8. Architecture constraints

- Keep content records, native structure, semantic components, composition patterns, UI primitives, and pages conceptually separate.
- Create packages around genuine code boundaries and shared implementation needs.
- Keep `Page`, `Card`, `Section`, and `ContentBlock` abstractions tied to explicit semantics and use cases.
- As Motif tokens are established, they become the only visual source of truth. shadcn, Fumadocs, and Tailwind variables are mappings or isolated implementation details.
- Treat a CMS, database, server workflow, analytics service, and external content platform as separate proposals requiring owner approval.
- Integrate Fumadocs providers/styles only where required; prevent defaults from leaking into the homepage.
- Static content and sources must remain understandable when scripts, charts, or enhanced interactions fail.

## 9. Change impact

A font/scale change affects visual specifications, tokens, Composition Briefs, and typography tests. A content-field change affects the model, MDX schema, and fixtures. A route change affects navigation, Fumadocs sources, metadata, sitemap, and browser tests. A Fumadocs/shadcn upgrade affects integration compatibility and regression checks. Update all affected normative files after an approved change.
