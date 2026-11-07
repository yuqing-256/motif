# Motif Content Model

## 1. Principles

Content identity, facts, and provenance remain stable across visual expressions. A page may change presentation while preserving identity, facts, semantics, rights, provenance, and reading order.

## 2. Six conceptual layers

1. Content records.
2. Native document structure.
3. Semantic content components.
4. Collections and composition patterns.
5. UI interaction primitives.
6. Complete page composition.

These are responsibility boundaries. Their implementation may use files, schemas, components, or services according to actual project needs.

## 3. Core records

| Record                | Responsibility                                               | Key relationships                                                        |
| --------------------- | ------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `ContentItem`         | Identity, title, slug, type, language, state, body reference | Identifiable without rendering                                           |
| `Contributor`         | Person/institution and contribution role                     | Author, photographer, translator, editor, etc.                           |
| `MediaAsset`          | Image, video, audio, diagram, map, chart                     | Source, creator, rights, alternatives, caption, body position            |
| `SourceRecord`        | Citation, archive, document, dataset, external source        | URL/stable ID, title, type, page/time locator                            |
| `RightsRecord`        | License, permission, jurisdiction, restrictions, uncertainty | Bound to the specific asset/content and supported by verifiable evidence |
| `PublicationMetadata` | Publication, issue, date, language, edition, editorial state | Original publication facts distinct from current site metadata           |
| `Topic` / `Series`    | Topic classification and editorial sequence                  | Stable ID, order, membership                                             |
| `Dataset`             | Structured evidence data                                     | Source, method, period, sample, units, transformations, limitations      |
| `RevisionRecord`      | Verifiable change history                                    | Version, date, contributor, reason; unknowns remain unknown              |

This conceptual model guides implementation. Map actual repository content and publishing needs before choosing files, schemas, or infrastructure.

## 4. Multilingual relationships

Separate `Interface Locale` from `Editorial Content Locale`. Each language version has its own language, slug, publication status/date, and necessary metadata; connect related versions through a stable `translationGroupId` or equivalent. Originals and translations may be published, updated, or withdrawn independently. Treat paragraph and media alignment as editorial relationships that require explicit data. Label any fallback language clearly when a translation is unavailable. Format dates and numbers according to content language.

## 5. Native structure and semantic components

Prefer native HTML: headings, paragraphs, lists, definition lists, tables, code, links, quotations, emphasis, and separators. Create a semantic component only when stable content meaning, structure, provenance, an independent accessibility contract, and real reuse needs exist.

| Component           | Semantic responsibility                                               | Must not become                                                              |
| ------------------- | --------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `Lead`              | Introductory summary associated with a content item                   | Arbitrarily enlarged body text                                               |
| `Quote`             | Quotation with optional contributor and source                        | Unsourced decorative pull quote                                              |
| `Definition`        | Term, explanation, optional pronunciation/usage/source                | Generic highlight box                                                        |
| `EditorialNote`     | Editorial note related to nearby content                              | UI alert/system state                                                        |
| `Figure`            | Image/video/audio/chart/map with alternative, caption, source, rights | Unsourced media card                                                         |
| `ContributorCredit` | Contributor with a specific role                                      | Unverified byline string                                                     |
| `ContentPreview`    | Content target, title, optional summary/media/date/topic              | Universal card container                                                     |
| `Citation`          | Stable source target and optional locator                             | A source relationship with sufficient context to identify the cited material |
| `Footnote`          | Stable-ID note with return link                                       | A traceable note connected to its reference point                            |
| `SourceReference`   | Source record, name/type, URL/archive ID                              | A verifiable source identity and locator                                     |
| `RightsStatement`   | Applicable license, scope, and uncertainty                            | An evidence-based statement of permitted use and unresolved rights           |

Before implementation, each component requires meaning, use/avoid conditions, anatomy, fields, data relationships, native HTML, accessible name/description, reading order, empty/error/long-content/localization behavior, variants, responsive behavior, and acceptance tests.

## 6. Collections and patterns

Byline/publication details, Source Register, Glossary, Practice Comparison, Change Log, Figure Sequence, Article Opening, Evidence Sequence, Archival Object Comparison, and Claim–Visualization Narrative are content-composition patterns. They do not automatically become new entities or components.

A `DataFigure` is normally a `Figure` with Dataset, method, and alternative-data requirements; retain one semantic family unless a distinct content contract emerges.

## 7. Variant rules

- `Expressive Variant`: an alternative expression for a different semantic role in comparable space.
- `Adaptive Expression`: re-composition driven by viewport, container, content, script, direction, or input conditions.

Register allowed variants/combinations per component. Each variant preserves meaning, required fields, provenance, accessible names/descriptions, heading hierarchy, and logical reading order. Express differences through finite named variants and adaptive rules rather than page-, school-, color-, or breakpoint-specific duplicates or unbounded boolean props.

## 8. Media and rights integrity

Where applicable, record creator/photographer/institution, alt/description, caption, source/archive ID, original date and publication date, license/permission/jurisdiction/restrictions, crop origin, sequence position, and the claim/narrative step supported.

Video requires caption tracks and languages. Audio requires transcripts and chapter/time locators. Complex charts/maps require long descriptions, data summaries, or structured alternatives. Alt text describes information; captions provide editorial context; transcripts provide spoken content. Their responsibilities differ.

Label synthetic fixtures as `synthetic` or `illustrative`, distinct from archival and field records. Record unknown rights as `unknown`; determine public-domain status from the specific work, jurisdiction, and applicable evidence.

## 9. Data and evidence

A data narrative may use Claim/Question, EvidenceItem, Dataset, Visualization, Annotation, MethodNote, and NarrativeStep relationships. A visualization must trace variables, units, source, dates/coverage, sample/population, transformations, exclusions, uncertainty, and limitations. Provide useful text or structured data alternatives. Readers must understand the central claim without operating the visualization.

## 10. Documentation and Blog content sources

Documentation and Blog are two general-purpose publishing collections, not two branded editorial concepts.

### Documentation (`/docs`)

Use a Fumadocs documentation collection with an explicit content tree and schema. The site must be able to support common documentation forms without requiring all forms to exist at launch:

- Getting-started and onboarding pages;
- Concepts and explanatory pages;
- Guides and how-to instructions;
- Tutorials and learning paths;
- Reference pages (components, APIs, configuration, terminology, standards);
- Examples and recipes;
- Troubleshooting and frequently asked questions;
- Policies, contribution guidance, and technical documentation.

Core metadata should be limited to actual requirements, normally title, description, slug/path, locale, navigation label/order, publication status, and optional update date. Content type can be expressed by collection/folder/frontmatter where useful. Keep the documentation taxonomy and metadata proportional to actual reader needs. Introduce documentation versioning only after a separate owner decision.

The Fumadocs page tree, navigation, table of contents, and search support the documentation reading task. Motif controls the presentation and semantics. The documentation information architecture must be useful to readers outside the visual-design domain.

### Blog (`/blog`)

Use a separate Fumadocs MDX blog collection and schema. Support conventional blog publishing:

- Posts/articles with title, description/summary, slug, body, locale, publication date, and publication status;
- One or more authors/contributors;
- Optional tags/categories and cover image;
- Optional series, featured status, related posts, and archive grouping only when justified;
- Media, sources, and rights relationships where applicable.

Fumadocs' Blog integration may provide a starting point for post collections, author records, tags, post listings, post navigation, and feeds. Select features according to publishing needs and adapt presentation to Motif. Support varied post forms, from short updates to long-form essays and magazine features.

### Shared rules

Fumadocs frontmatter/schema implements this conceptual model. Content facts and visual semantics remain governed by Motif specifications and verified source records. Documentation and Blog may share Contributor, MediaAsset, SourceRecord, and RightsRecord concepts, but their collection schemas and reading layouts remain separate. Search scope must be explicit; documentation search does not automatically include Blog or the website. Archives, filters, featured content, feeds, and pagination are capabilities to choose, not mandatory launch features.
