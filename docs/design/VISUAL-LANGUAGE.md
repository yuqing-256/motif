# Motif Visual Language

> `MUST`, `MUST NOT`, `SHOULD`, and `MAY` are normative requirement levels.
>
> **Implementation relationship:** shadcn/ui Sera + Base UI is Motif's initial component/visual implementation baseline. This document expresses Motif's design direction; it does not claim that every listed value is already implemented. During A2, inspect the actual Sera output and reconcile it with these working values. Retain, adapt, or replace values deliberately with owner review. Sera is a starting point, not the design authority.

## 1. Visual materials

Motif coordinates eight materials:

- **Typography:** semantic voice, hierarchy, scale, line length, typographic blocks, rhythm.
- **Photography / Image:** subject, viewpoint, evidence, crop, sequence, text relationship.
- **Geometry / Graphics:** points, lines, planes, proportions, relationships, diagrams, data expression.
- **Grid / Alignment:** coordinate system for text, images, annotations, metadata, and space.
- **Color:** hierarchy, contrast, classification, topic-specific meaning.
- **Negative Space:** grouping, pause, balance, tension.
- **Scale / Overlap:** hierarchy, connection, contrast, movement.
- **Rhythm:** repetition, density variation, sequence, reading pace.

A significant composition must state which materials lead and which support them. Sans-serif type, a blue accent, thin borders, and generous whitespace alone do not establish an International Typographic Style composition.

## 2. Integrated Zurich / Basel method

**Zurich-oriented structural discipline:** grid, axes, margins, modules, alignment, hierarchy, proportion, repetition, consistency.

**Basel-oriented expressive tension:** optical balance, point/line/plane, photographic realism and crop, scale contrast, typographic spatiality, asymmetry, overlap, interruption, text/image counterpoint.

**Motif rule:** structure establishes legibility; expressive methods may reinforce or locally challenge it, but every deviation needs a communicative reason. A Composition Brief records anchors, expressive methods, exceptions, and responsive behavior. Treat Zurich and Basel as integrated historical methods rather than theme toggles or opposing categories.

## 3. Typography

### 3.1 Semantic roles

Distinguish publication/page title, section headings, Lead/Standfirst, body reading, quotation, Pull Quote, caption, credit, margin note, footnote, source metadata, navigation/control, data annotation, code, and table roles. Visual styling does not replace native semantic hierarchy. A Pull Quote must remain traceable to its original passage and source.

### 3.2 Font direction

| Script / purpose                 | Alpha direction                      | Verification                                        |
| -------------------------------- | ------------------------------------ | --------------------------------------------------- |
| Latin UI and structural headings | IBM Plex Sans                        | Verify actual weights/glyphs                        |
| Latin editorial reading          | Newsreader                           | Long-form, Lead, selected quotations                |
| Code and technical data          | IBM Plex Mono                        | Code, IDs, tokens, aligned data                     |
| Simplified Chinese               | Noto Sans SC / Noto Serif SC         | Assign structural/UI and editorial roles separately |
| Traditional Chinese              | Noto Sans TC / Noto Serif TC         | Verify regional glyph forms                         |
| Japanese                         | Noto Sans JP / Noto Serif JP         | Verify punctuation and kana/kanji coverage          |
| Cyrillic                         | IBM Plex Sans / IBM Plex Serif       | Verify real glyphs and metrics                      |
| Korean compatibility             | Noto Sans KR / Noto Serif KR         | Verify coverage                                     |
| Arabic compatibility             | Noto Sans Arabic / Noto Naskh Arabic | Verify RTL, shaping, reading                        |

Verify each approved local font file for source, license, subsets, weights, glyphs, and fallback. Use the actual available weight files wherever possible.

### 3.3 Alpha type scale

Values are CSS pixels in `font-size/line-height` format.

| Role                   |  Wide | Narrow |
| ---------------------- | ----: | -----: |
| Display                | 56/64 |  40/48 |
| H1                     | 40/48 |  34/42 |
| H2                     | 32/40 |  28/36 |
| H3                     | 24/32 |  22/30 |
| H4                     | 20/28 |  18/26 |
| Lead                   | 20/32 |  18/29 |
| Body UI                | 16/24 |  16/24 |
| Latin body             | 18/30 |  17/28 |
| CJK body working value | 17/30 |  16/28 |
| Small                  | 14/22 |  14/22 |
| Caption                | 13/20 |  13/20 |
| Code                   | 13/21 |  13/21 |

Overscale/poster type is optional: Wide `clamp(96px, 16vw, 256px)`; Narrow `clamp(64px, 22vw, 112px)`; line-height approximately `0.82–0.92`. Preserve complete content, avoid horizontal overflow, and retain semantic information at every size.

### 3.4 Reading measures and text behavior

| Content            |                                       Target measure | Maximum |
| ------------------ | ---------------------------------------------------: | ------: |
| Latin body         |                                              60–68ch |    68ch |
| CJK body           |                                              36–40em |    40em |
| Documentation body | approximately 60–72ch, adjusted for script/container |    72ch |

Use logical `start`/`end` alignment and reserve full justification for cases where the script and measure support it. Chinese follows CLREQ for punctuation, line-breaking prohibitions, line-start/end behavior, and mixed-script text. Japanese vertical writing is reserved for content explicitly designed for it. RTL uses logical CSS, correct `lang`/`dir`, and bidi isolation where needed. Preserve words and reading rhythm through appropriate measures and wrapping rather than relying on `word-break: break-all` or `overflow-wrap: anywhere` as routine body-layout rules.

Test long headings, Latin/CJK/numeric mixing, Chinese/Japanese punctuation, long URLs, fallback fonts, tables, code, and font-load failure. Text optimization is acceptable only when actual browser output improves.

## 4. Photography and image direction

Photography is a first-class material when it carries evidence, identity, atmosphere, place, scale, or narrative. Select roles by task: documentary/evidence, portrait, architecture/place, object/still-life, action/movement, close detail, or archival reproduction. A feature need not use every category.

Each significant image/sequence records subject and purpose, viewpoint/distance/focus, original source, crop/aspect ratio, details to preserve, tonal treatment, sequence rationale, caption/credit, alt/description, date/source, and rights constraints. Sequence order follows editorial logic. Choose ratios, tonal treatment, and presentation according to each image's role rather than applying a uniform grid. Alt text describes information; captions provide identification/editorial context, with distinct responsibilities.

## 5. Geometry and graphic construction

Basic vocabulary: point, line, rule, bar, circle, arc, square, rectangle, simple polygon. Operations: alignment, proportion, repetition, interval, rotation, intersection, overlap, crop, inversion, containment, scale contrast, negative space.

Every prominent geometric form organizes information, expresses a relationship, clarifies hierarchy, represents an object, guides sequence, creates meaningful contrast, or balances the composition. Use CSS/basic primitives for simple geometry. SVG serves meaningful diagrams, maps, charts, complex graphics, or approved identity marks.

Data graphics must also express variables, units, scales, labels, sources, methods, uncertainty, and textual/structured alternatives. General geometry rules do not replace data-visualization semantics.

## 6. Grid, margins, and spacing

### 6.1 Baseline grid

| Viewport width | Working columns | Outer margin | Gutter |
| -------------- | --------------: | -----------: | -----: |
| 0–767px        |               4 |         20px |   16px |
| 768–1023px     |               8 |         32px |   20px |
| ≥1024px        |              12 |         48px |   24px |

Breakpoint baseline: `sm 640`, `md 768`, `lg 1024`, `xl 1280`, `2xl 1536`. Maximum site frame: 1440px. Main composition frame: 1200px. Components respond to their actual container, with viewport and container conditions evaluated separately.

### 6.2 Spacing

Use a 4px base unit and approved values: `4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96, 128px`. Define semantic aliases for page gutter, reading measure, component gap, section interval, and layout gap. Use CSS logical properties and the approved spacing scale; document any justified local exception in the Composition Brief.

Grids may be asymmetric, unequal, nested, or overlapping. A Brief identifies axes, anchors, spans, offsets, and reasons for exceptions. Full-bleed media may cross the main frame, but captions and provenance remain anchored.

## 7. Color

The table below is the existing Alpha semantic color proposal and working reference. In A2, compare it against the generated Sera palette in rendered specimens, then retain, adapt, or replace values with owner review. Maintain one Motif palette. As Motif tokens are implemented, their semantic names become the source of truth; shadcn/Fumadocs variables map to them.

| Token            | Light     | Dark      | Purpose                                    |
| ---------------- | --------- | --------- | ------------------------------------------ |
| `canvas`         | `#FBFCFD` | `#11191F` | Main page field                            |
| `surface`        | `#FFFFFF` | `#1B2730` | Discrete menu/dialog surface               |
| `surface-muted`  | `#F1F4F7` | `#24323D` | Secondary grouping/control surface         |
| `ink`            | `#15232A` | `#F2F5F7` | Primary text and primary action            |
| `text-muted`     | `#52616A` | `#ADB9C1` | Secondary text                             |
| `signal`         | `#2857C5` | `#91ABFF` | Link, evidence reference, selection, focus |
| `signal-hover`   | `#1F459D` | `#B3C4FF` | Signal hover/active                        |
| `signal-soft`    | `#E9EEFC` | `#26365D` | Selected/highlight surface                 |
| `border`         | `#C8D1DA` | `#394854` | Non-essential structural separator         |
| `border-control` | `#748391` | `#71818F` | Necessary control boundary                 |
| `focus`          | `#2857C5` | `#91ABFF` | Focus indicator                            |
| `on-primary`     | `#FBFCFD` | `#11191F` | Text on ink primary action                 |
| `on-signal`      | `#FFFFFF` | `#11191F` | Text on signal background                  |
| `on-danger`      | `#FFFFFF` | `#11191F` | Text on danger background                  |

Status foreground/background pairs: Success `#166534/#E8F4EC`, dark `#82D49D/#1C3328`; Warning `#854D0E/#FBF1DB`, dark `#F3C46A/#3A301C`; Danger `#B42318/#FBE9E7`, dark `#FF9A8A/#3C2525`; Information `#2857C5/#E9EEFC`, dark `#AFC0FF/#26365D`. Status must have text; color alone cannot carry meaning.

Primary buttons use `ink/on-primary`; body links use underlined `signal`. `border` has low contrast and is only for non-essential separators; use `border-control` for interactive boundaries. Verify actual rendered contrast for text, controls, focus, and text over images.

Non-system colors require a Composition Brief stating semantic meaning, affected content, Light/Dark behavior, grayscale performance, and contrast, plus owner approval. New tokens/palette changes require a decision record.

## 8. Shape, boundaries, motion, and icons

- Editorial content defaults to 0px radius; controls/limited panels use 4px; overlays use 8px.
- Structural boundaries are 1px only when expressing a real boundary. Focus indicators are 2px with 2px offset.
- No default shadows; overlays may use one restrained shadow level.
- Avoid pervasive pills, exaggerated rounded cards, and layered elevation.
- Motion baseline: quick feedback 120ms, ordinary expansion/menu/tab 180ms, necessary overlay entry 240ms. Prefer transform/opacity for motion and use layout animation only when the spatial change is essential and verified.
- No autoplay hero, ambient parallax, decorative background animation, or scroll-triggered spectacle by default. Respect `prefers-reduced-motion`.
- Use Lucide icons, default 1.75px stroke; 16px inline, 20px control, 24px feature. Icons supplement labels; use a consistent icon set rather than emoji for interface controls.

## 9. Visual acceptance

A significant composition must demonstrate clear structural anchors, authored typographic hierarchy, at least one purposeful spatial/graphic relationship, meaningful roles for photography/geometry/data, narrow-screen and narrow-container re-composition, and unchanged semantics/provenance. It must not become a generic SaaS template when its brand name/accent color are removed. Ordinary utility controls need not be poster-like, but must follow Motif hierarchy, approved tokens, and interaction rules. During A2, visual acceptance applies to specimens; later component and page acceptance expands in A3–A5.
