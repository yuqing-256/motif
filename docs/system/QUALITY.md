# Motif Quality

## 1. Quality model

Quality is built progressively. Match each stage to the implementation that exists: verify the starter in A0, begin browser inspection in A2, and expand the publishing-site test matrix as components and surfaces are introduced.

Acceptance has three layers:

- **Design:** Motif visual language, Composition Brief, content, and reference evidence.
- **Implementation:** semantics, tokens, APIs, code, build, performance, and dependencies.
- **Experience:** reading, navigation, keyboard, screen reader, responsive, multilingual, theme, media, and failure behavior.

Passing one layer does not compensate for failing another.

## 2. Progressive quality gates

| Stage                     | Minimum quality gate                                                                                                                                                          |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| A0 — Initialization       | Clean dependency install, local dev server, generated root/docs route smoke check, production build, inspect CLI changes                                                      |
| A1 — Baseline             | Lockfile consistency, documented actual versions/configuration, clean install/build reproducibility, no secrets or generated artifacts committed                              |
| A2 — Visual foundation    | Real browser rendering; inspect typography, color, surfaces, geometry, focus, Light/Dark, and representative CJK/Latin text; owner reviews specimen output                    |
| A3 — Component adaptation | Component-specific behavior, keyboard/focus semantics, relevant disabled/loading/error states, visual consistency with approved foundation                                    |
| A4 — Component validation | Meaningful component states/variants, responsive/narrow-container behavior, automated and manual accessibility checks where applicable, stable visual references after review |
| A5 — Publishing product   | Content-shape suites, page-level browser tests, cross-surface navigation, metadata, accessibility, responsive behavior, media/provenance, build and deployment checks         |

A stage is accepted from recorded test scope, environment, evidence, and resolution of blocking issues; command completion alone is insufficient.

## 3. Accessibility

Target WCAG 2.2 AA; prefer native HTML over ARIA. Check landmarks/headings, keyboard interaction, visible focus, names/labels/descriptions/errors, color and non-color cues, contrast, focus management, captions/alternatives/transcripts, text scaling, reflow, and reduced motion.

Use relevant WAI-ARIA APG patterns for custom interactions and verify their actual keyboard models. Run axe scans when a browser environment is available. Combine automated findings with manual keyboard and applicable assistive-technology checks before accepting interactive components and public surfaces against the WCAG 2.2 AA target.

## 4. Responsive and reflow

Responsive behavior is considered from the first specimen/component, then tested more systematically in A4 and A5.

At minimum, the full publication-quality review should inspect `320, 375, 640, 768, 1024, 1280, 1440, 1536 CSS px`, intermediate widths, narrow containers inside wide viewports, long/short content, missing metadata, long labels, applicable orientations, 200% text scaling, and 400% zoom.

At 320px, preserve content and functions without unnecessary page-level horizontal scrolling. An essential two-dimensional region, such as a complex data table, may scroll locally when it includes context and a useful alternative.

Preserve semantic order, source/caption/rights, evidence relationships, and key functions. Columns, crop, sidebars, density, navigation, spacing, and overlap require deliberate re-composition. Simply collapsing to one column is insufficient.

## 5. Multilingual and writing systems

Primary languages: `zh-Hans`, `zh-Hant`, `ja`, `en`, `nl`, `ru`, `fr`. Compatibility validation: `ko`, `ar`.

Verify `lang`/`dir`, logical CSS, bidi isolation, glyph shaping, font fallback, punctuation, line breaks, long URLs/words, translation expansion, and date/number formats. Chinese uses CLREQ for punctuation, line-breaking rules, and mixed-script text. Japanese punctuation must be tested; vertical writing only when content uses it. Arabic requires shaping, bidi, alignment, and punctuation checks.

A2 begins with representative Chinese/English typography specimens. Broader language matrices are added as real font choices and publishing content are introduced. Declaring a font family is not proof that real font files support a script.

## 6. Theme and color

The initial Sera theme is inspected in A0/A2. Approved Motif Light/Dark behavior is established in A2 and then kept consistent across components and publication surfaces. Check text/non-text contrast, focus, control boundaries, hover/active/selected/disabled/loading/error/success, text over photography, chart encoding, color-vision differences, and non-color status cues. Check `forced-colors`/system high contrast where applicable.

## 7. Typography, photography, geometry

- **Typography:** roles, actual weights/glyphs, line height, measure, line breaks, punctuation, alignment, tables/code, zoom, font failure, layout shift.
- **Photography:** source, creator, date, rights, alt/description, caption, credit, focal subject, crop, aspect ratio, sequence, body relationship; verify that each crop preserves the image information required by its editorial role.
- **Geometry/graphics:** purpose of every significant form; charts/diagrams have title, labels, units, scale, source/method, and accessible alternatives; no decorative fillers.

## 8. Content and provenance

When publication content is added, verify creator, source, citation, archive ID, source chain, license, dataset, method, coverage, units, limitations, and uncertainty where applicable. Verify statistics, quotations, dates, object IDs, author identity, permissions, and research conclusions against traceable sources; record unknowns explicitly. Separate historical facts from contemporary editorial interpretation.

## 9. Interaction, motion, failure

Verify relevant states for the component or page under test: default, hover, active, focus, selected, disabled, loading, success, empty, warning, error, recovery. Motion must support orientation/explanation, respect `prefers-reduced-motion`, and be pausable/stoppable when necessary.

Interactive/scrollytelling content must allow keyboard entry/operation/exit; provide clear focus order and measured announcements; allow filters to reset; preserve core content without animation/script; define loading, partial-data, no-data, error, recovery, and unsupported states as applicable.

## 10. Performance and resilience

Establish performance budgets from realistic content and target environments, then obtain owner approval for hard thresholds. Check font/image layout shift, reasonable image payloads, necessary lazy loading, media fallback, and resilience when enhancements fail.

## 11. Acceptance record

Record stage/route/fixture/Brief, decision IDs/spec sections, commit, browser/device/tool versions, dimensions/container/theme/locale/state, automated command output, manual checks, screenshots/links, defect severity, retest, and unrun reasons. Status values: `PASS / FAIL / BLOCKED / NOT RUN`. PASS requires evidence. BLOCKED means a decision/resource/license/environment is missing. NOT RUN is not a pass. Only the owner accepts stages and exceptions.
