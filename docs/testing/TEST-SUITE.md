# Motif Test Suite

> Verification is introduced progressively. The suites below define eventual publication-quality scenarios and are adopted as the corresponding application, components, and content become available.

## 1. Purpose and adoption by stage

| Stage | Testing scope                                                                                                                     |
| ----- | --------------------------------------------------------------------------------------------------------------------------------- |
| A0    | `pnpm dev`, route smoke check, dependency/lockfile inspection, `pnpm build`                                                       |
| A1    | Repeatable clean install and build; confirm committed files match the documented baseline                                         |
| A2    | Browser inspection of visual specimens, themes, type specimens, focus and representative narrow widths                            |
| A3    | Targeted tests for each adapted primitive's behavior and relevant states                                                          |
| A4    | Component test/showcase page, browser checks, accessibility scans/manual keyboard checks, approved visual regression where stable |
| A5    | Content-shape fixtures, page-level and cross-surface tests, full responsive/theme/content quality review                          |

Choose tools based on the stage and actual need. Playwright Test and axe-core are reasonable options for browser and accessibility checks, but they are not required to be installed in A0. Any new dependency beyond the approved initializer set requires the approval process in `IMPLEMENTATION.md`.

## 2. Component validation

For each component that Motif actually adopts, define relevant examples for:

- Anatomy and intended role.
- Default and meaningful expressive variants.
- Sizes only where different sizes serve a real use case.
- Hover, active, focus-visible, selected, disabled, loading, error, and success states as applicable.
- Keyboard and pointer behavior.
- Long labels, localization, content overflow, and narrow containers.
- Light/Dark and forced-colors behavior where relevant.

Select states that apply to each component and record `NOT APPLICABLE` where a state has no meaningful use. Variants preserve semantics, accessible names, content provenance, and logical reading order.

## 3. Content-shape suites for A5

These suites are added as the corresponding publishing content exists. Fixtures must be real and approved or explicitly labeled `synthetic`/`illustrative`.

### TS-LONGFORM — Editorial long-form

**Fixture:** Title, Lead, Contributor/translator, publication/date metadata, substantial body, native section structure, at least one quotation, two Figures with caption/credit/alt/source/rights, Citation/Footnote, and a related-content relationship.

**Verify:** Reading measure/rhythm; title hierarchy; body sections; image/note interruption; sidebar necessity; multilingual expansion; narrow containers; font-load failure.

**Fail when:** A forced hero or card-based body is used; citation/quotation detach; paragraphs become unreadable; narrow layouts lose notes/rights or change reading order.

### TS-PHOTOGRAPHY — Photography feature

**Fixture:** Title, introduction, author/photographer, date/source, 6–8 ordered image records, each with caption/credit/rights/alt/description, plus body copy and sequence-role notes. Media must be licensed or clearly marked as synthetic test material.

**Verify:** Image sequence/narrative; image-specific scale/crop; text-image alignment; focal subject and must-keep details; captions/credits; full-bleed/narrow presentation; missing/slow images.

**Fail when:** Images collapse into a homogeneous thumbnail grid; crop changes meaning; sequence has no reason; source/rights are missing; narrow layout makes the sequence incomprehensible.

### TS-ARCHIVAL — Archival feature

**Fixture:** Interpretive article, 4–6 archival object records, institution/archive identifiers, verifiable creator/date (or explicit unknown), original medium, source links, rights/jurisdiction, caption/description, and relationships among objects.

**Verify:** Historical fact vs editorial interpretation; traceable objects/sources; archival metadata; object-specific rights; accessible detail/comparison on narrow screens and assistive technology.

**Fail when:** Creator/date are guessed; host site substitutes for object provenance; public-domain status is assumed; explanation detaches from object; source/rights are hidden in inaccessible visual layers.

### TS-VISUAL-DATA — Data and visual narrative

**Fixture:** Question/claim, ordered narrative steps, Dataset, variables/units/coverage/sample/source/method/transformation/exclusions/limitations/uncertainty, at least one chart/diagram, annotations, and textual/table alternative.

**Verify:** Claim-to-evidence mapping; chart type fits variables; axes/ticks/labels/units are accurate; method/uncertainty disclosed; interaction keyboard-accessible/resettable; narrow view readable; static alternative informative; core conclusion survives script/data failure.

**Fail when:** Chart lacks explanation; scale misleads; source/unit missing; only a screenshot is supplied as alternative; interaction hijacks scroll; narrow view causes page-level overflow; data failure erases the argument.

## 4. Shared test layers

For components/pages where applicable:

1. **Schema/content:** required fields, relationships, unknown values, frontmatter validation, translation relationships, content integrity.
2. **Semantic/accessibility:** HTML semantics, heading structure, alternatives, accessible names, keyboard order, screen-reader relationships, axe, manual review.
3. **Composition/visual:** compare against the approved Brief; inspect grid, typography, photography, geometry, space, scale, hierarchy, and non-generic expression.
4. **Responsive:** representative wide/intermediate/narrow viewports and wide/medium/narrow containers; full matrix at publication acceptance.
5. **Theme/locale:** Light/Dark/Forced Colors where applicable; Chinese punctuation and CJK/Latin mixing, Japanese, Cyrillic, RTL, font fallback.
6. **Interaction/failure:** relevant focus/active/disabled/loading/empty/error/recovery states; script/image/data failure and reduced motion.
7. **Rights/provenance:** creator, source, permission, date, archive ID, data method, unknowns, usage scope.
8. **Regression/build:** lint, type-check, unit/integration, browser, accessibility, visual regression, production build as configured.

## 5. Visual regression stability rules

Visual regression detects unintended rendering changes; it does not judge design quality.

- Pin browser/runtime versions and document the execution environment.
- Use approved local fonts and deterministic media fixtures.
- Fix viewport, device scale factor, color scheme, locale, timezone, and reduced-motion state.
- Wait for fonts and images to load; disable or settle animations/transitions for snapshots.
- Avoid dynamic dates, random data, external network dependencies, and unstable third-party embeds in fixtures.
- Define and justify a documented pixel-diff threshold. Treat threshold changes as test-policy changes with review evidence.
- Generate baselines only after real rendering and owner review.
- Update visual baselines through a reviewed PR containing before/after evidence, the reason for change, and owner approval.
- Re-run failing screenshots to distinguish genuine changes from environmental noise, and resolve systematic instability at its source.

## 6. Fixture rules

- Prefer real, approved content/assets; otherwise use explicitly labeled `synthetic` samples.
- Use traceable historical provenance, quotations, authors, data, and licenses; mark synthetic fixtures and unknown information explicitly.
- Cover long/short content, missing metadata, long URLs, mixed scripts, missing media, and unusually large collections.
- Reuse fixtures across schema, unit, integration, visual regression, and manual review; keep fixture facts separate from presentation.
- Combine repeatable fixtures with spot checks against real content; each catches issues the other may miss.

## 7. Site integration tests for A5

- Website `/` expresses Motif identity and links to `/docs` and `/blog`.
- Docs `/docs` provides hierarchy, current-page TOC, code/diagrams, and internal links.
- Blog `/blog` provides article list/detail, contributor/date/topic where enabled, and return paths.
- All three surfaces are in the same Next.js build/deployment; share tokens/fonts/identity but keep clear layout responsibilities.
- Verify that Fumadocs providers and styles remain scoped to documentation infrastructure and that website styles preserve Docs and Blog component behavior.
- Search scope, canonical metadata, sitemap/robots, and empty-result behavior match approved scope.

## 8. Execution record

```yaml
test_run:
  stage: "A0 | A1 | A2 | A3 | A4 | A5"
  suite: "STARTER | VISUAL-SPECIMEN | COMPONENT | TS-LONGFORM | TS-PHOTOGRAPHY | TS-ARCHIVAL | TS-VISUAL-DATA | SITE-INTEGRATION"
  date: ""
  commit: ""
  environment: ""
  browser_and_version: ""
  tool_versions: {}
  routes_or_fixtures: []
  viewports_and_containers: []
  themes_and_locales: []
  automated_checks:
    commands: []
    results: []
  manual_checks: []
  evidence: []
  defects: []
  not_run: []
  status: "NOT RUN"
  owner_disposition: ""
```

## 9. Status and acceptance

- `PASS`: executed, evidenced, and no unresolved blocking issue remains.
- `FAIL`: a requirement was not met.
- `BLOCKED`: a decision, resource, permission, or environment is missing.
- `NOT RUN`: not executed.

A fixture existing, a specification being written, a build succeeding, or a screenshot being generated does not imply a test passed. After a fix, rerun affected suites. The owner reviews evidence and accepts the stage.
