# Motif Composition

## 1. Purpose

Composition translates communication purpose, content, and evidence into a readable page. It is not filling a template with components. It defines hierarchy, grid, sequence, rhythm, negative space, scale, overlap, and reader path.

## 2. Required workflow

1. Define audience, context, communication purpose, and primary reader task.
2. Inventory text, media, data, metadata, sources, rights, sequence, and unknowns.
3. Select an editorial mode: long-form, argument, photography feature, archival/documentary, visual/data narrative, or hybrid.
4. Inspect relevant historical and contemporary references; extract transferable methods and limits.
5. Assign leading/supporting materials and explain their interaction/counterpoint.
6. Decide grid anchors, type hierarchy, density, space, scale, overlap, sequence, and side-region roles.
7. Map content semantics before selecting components and styling.
8. Define re-composition for wide, intermediate, narrow, narrow-container, multilingual, theme, input, and reduced-motion conditions.
9. Record implementation scope, approved dependencies, tests, acceptance criteria, and unresolved decisions.
10. Render, inspect, record evidence, and request owner acceptance.

## 3. Composition Brief

A full Brief is mandatory for significant pages, articles/features, visual narratives, composition patterns, or large layout changes. A component task may use a concise Brief but must still state purpose, semantics, variants, spatial conditions, reading/focus order, and verification.

A full Brief includes: ID/scope/exclusions/approval; audience/context/communication purpose/reader task/central question; editorial mode/content/evidence/source/rights/unknowns; references inspected and transferable methods; leading/supporting materials and type roles; grid/axes/anchors/spans/geometric operations; negative space/scale/overlap/density/rhythm/reading order; mapping to content records/native structure/semantic components/patterns; wide/intermediate/narrow/narrow-container behavior; theme/locale/direction/keyboard/touch/reduced motion/static alternatives; approved dependencies, unresolved decisions, fixtures, and acceptance evidence.

```yaml
brief:
  id: ""
  title: ""
  scope: "page | article | feature | pattern | component"
  audience_and_task: ""
  communication_goal: ""
  editorial_mode: "longform | argument | photography | archival | visual_data | hybrid"
  content_and_evidence: []
  sources_rights_unknowns: []
  references_and_transferable_methods: []
  leading_material: ""
  typography_and_hierarchy: ""
  grid_anchors_and_geometry: []
  space_scale_overlap_rhythm: ""
  semantic_mapping: []
  responsive_recomposition:
    wide: ""
    intermediate: ""
    narrow: ""
    narrow_container: ""
  locale_theme_accessibility: ""
  approved_implementation_scope: []
  acceptance_evidence: []
  unresolved_decisions: []
```

Mark uncertain information `unknown` and leave it unresolved until evidence is available.

## 4. Editorial modes

| Mode        | Primary task                                  | Composition responsibility                                                 | Common failure                                          |
| ----------- | --------------------------------------------- | -------------------------------------------------------------------------- | ------------------------------------------------------- |
| Long-form   | Sustained reading                             | Type, measure, paragraph rhythm, clear opening; interruptions need reasons | Forced hero, excessive sidebars, decorative pull quotes |
| Argument    | Understand claim/evidence                     | Connect claims, examples, citations, conclusions                           | Equal-sized cards, evidence detached from claims        |
| Photography | Understand a subject through images           | Viewpoint, sequence, scale, crop, text alignment                           | Unsequenced uniform thumbnail wall                      |
| Archival    | Examine historical objects and interpretation | Separate archive facts, provenance, rights, current editorial reading      | Guessed authors/dates, assumed public domain            |
| Visual/Data | Follow a question and evidence                | Sequence charts, annotations, methods, limitations, explanation            | Unexplained charts, spectacle, scroll hijacking         |
| Hybrid      | Multiple reader tasks                         | Give each material a distinct role                                         | Form stacking without hierarchy                         |

## 5. Composition pattern catalogue

These are pattern categories, not fixed templates or automatic new components:

- Article Opening: title, Lead, contributor/publication details, key visual.
- Reading Column: body, sections, notes, quotations, footnotes for sustained reading.
- Figure / Figure Sequence: single image, paired image/text, full bleed, detail, sequence, caption, source.
- Source Register: source list, archive IDs, citation positions, rights.
- Object Comparison: parallel objects, scale, metadata.
- Claim–Evidence Sequence: claim, evidence, interpretation, method, limitation.
- Data Narrative: charts, annotations, prose, structured alternatives.
- Editorial Margin: notes, pull quotes, editorial guidance, related context.

Patterns compose existing content fields and source records. Promote a pattern to a component when a stable semantic contract and repeated need exist.

## 6. Grid, geometry, photography

A Brief identifies primary axes, repeated anchors, column-span relationships, and reasoned deviations. Grids may be asymmetric, unequal, nested, partially visible, or invisible. Explain each prominent geometric form's function. A photography sequence explains opening image, turns, details, pauses, ending, and text relationships; crop each image to preserve its important content.

## 7. Responsive re-composition

Inspect four conditions:

- **Viewport:** page frame, global navigation, primary grid, device preference.
- **Container:** actual available width; a component may sit in different-width parents.
- **Content:** text length, image dimensions, item count, missing metadata, script expansion, data shape.
- **Preference/capability:** color scheme, contrast, reduced motion, writing direction, input method.

Must remain invariant: semantic identity, heading hierarchy, claim/evidence relationships, source/rights/caption, logical reading/focus order, essential functions, primary reader task.

May be re-composed: columns, spans, alignment, image position/crop when meaning is preserved, heading scale, density, spacing, sidebar, navigation. Remove only redundant or non-essential display while preserving unique evidence, necessary explanation, and essential functions. Important patterns must be checked on wide, intermediate, narrow, and at least one narrow container inside a wide viewport. A simple one-column collapse is not sufficient.

## 8. Side regions, navigation, interaction

Every side region must have a role: global navigation, local navigation, current-page contents, contextual reference, editorial margin, or discovery. Keep a sidebar when it serves a defined reader task; otherwise integrate its content into the primary reading flow or a clearly named disclosure. On narrow screens, move its content into the reading flow or a clearly named disclosure while preserving anchors.

Add interaction only when it solves a reader task. State the problem, state changes, keyboard/touch behavior, no-interaction comprehension, and static/failure alternative. If scripts or third-party content fail, preserve the core claim, explanation, source, and useful alternative. No scroll hijacking or animation-chasing to read content.
