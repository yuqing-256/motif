# Motif Charter

## 1. Identity

Motif is an **International Typographic Style-based digital communication and publishing system** for stories, arguments, knowledge, and evidence. Typography, photography, geometry, grid, color, negative space, scale, overlap, and rhythm organize information and shape its expression.

Motif identity emerges from meaningful relationships between real content and composition. Its practice combines editorial communication, typographic structure, photography, and purposeful graphic construction rather than relying on a generic dashboard or configurable-card formula.

## 2. Governing visual position

Motif uses an integrated International Typographic Style:

- **Zurich-oriented methods:** grid, alignment, hierarchy, proportion, modular relationships, order, and system consistency.
- **Basel-oriented methods:** optical balance, photographic authenticity, point/line/plane, scale contrast, typographic spatiality, tension, and controlled disruption.
- **Motif's method:** structure makes relationships legible; expressive methods may intensify or challenge local structure, but every choice remains accountable to content, task, evidence, and readability.

These are historical and analytical lenses rather than mutually exclusive styles or fixed ratios. Analyze each work through its actual methods and context instead of relying on a school label alone.

The initial engineering implementation uses **shadcn/ui Sera with Base UI** as its starting component and visual reference. This practical baseline supports implementation while Motif’s governing visual language remains International Typographic Style. Retain, adapt, or replace Sera defaults according to Motif principles and owner-approved decisions.

## 3. Communication principles

1. Purpose precedes style; audience and reader task precede layout.
2. Content and evidence precede templates; components adapt to meaning and preserve the integrity of the source material.
3. Typography is both language and graphic material.
4. Photography is selected, directed, and sequenced according to its editorial and evidentiary role.
5. Geometry is a construction language; each shape must organize information, express a relationship, or create purposeful tension.
6. Grid establishes relationships; not every page must have equal columns, symmetry, or visible grid lines.
7. Negative space, scale, overlap, density, and rhythm are explicit design decisions.
8. Expression may change, but semantics, provenance, reading order, and accessibility must remain intact.
9. Responsive behavior, multilingual typesetting, themes, interaction, and failure states are part of design.
10. Facts, quotations, images, rights, data, and methods must be traceable. Unknowns must remain explicit.

## 4. Design requirements

- Significant pages, articles, features, and composition patterns require a Composition Brief before implementation.
- Significant compositions must show deliberate grid/alignment logic, typographic hierarchy, and at least one purposeful spatial or graphic relationship.
- Page structures follow the reader task and content. Generic SaaS heroes, uniform card walls, dashboard shells, and two-column templates require a clear editorial or functional reason.
- Photography is art-directed through subject, viewpoint, crop, sequence, caption, credit, source, and rights; its presentation follows the role of each image.
- Geometry uses a concise vocabulary and clear operations. Each form has a communicative function; simple geometry uses CSS/basic primitives, while SVG serves meaningful diagrams, maps, charts, complex vectors, or approved identity assets.
- Reference works inform transferable methods. Motif develops its own identity and composition, and uses third-party art or media only under verified rights.
- Visual placement preserves semantic headings, logical reading/focus order, provenance, source relationships, and keyboard use.
- Motif specifications and owner-approved decisions govern the use of frameworks, component libraries, Skills, MCP servers, model output, and reference sites.

## 5. Product boundary

The Motif website `/`, general-purpose Documentation `/docs`, and general-purpose Blog `/blog` are three surfaces within one Next.js project, one repository, and one deployment unit. Documentation can contain design, product, user, and technical documentation; it is not limited to a design-system atlas. Blog supports ordinary posts, updates, articles, and longer features without imposing a single editorial format. The three surfaces share a visual foundation and site identity but use layouts and navigation suited to their reading tasks. This does not authorize a fourth surface, separate application, or separate deployment.

## 6. Scope boundaries

Motif uses historical poster methods, asymmetry, oversized type, photography-led composition, and motion selectively when they serve the communication task. Grid logic may remain implicit. Reading clarity remains essential. Custom components, configuration options, interactions, services, libraries, and tools are introduced only when a real requirement justifies their cost.

## 7. Decision authority and trade-offs

The project owner decides identity, visual output, content contracts, public APIs, routes, architecture, dependencies, resources, scope, and acceptance exceptions. Implementers may analyze and propose bounded alternatives but may not silently choose.

When requirements conflict, prioritize:

1. Law, privacy, security, and data integrity.
2. Content truth, provenance, rights, and semantic correctness.
3. Accessibility and essential reader functions.
4. Communication purpose and Motif's visual language.
5. Responsive integrity and publishing usability.
6. Technical simplicity and maintainability.
7. Convenience and implementation speed.

A lower-priority convenience never takes precedence over a higher-priority requirement. Missing decisions are blockers.
