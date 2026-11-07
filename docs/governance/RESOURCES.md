# Motif Resources

## 1. Purpose and principles

This file lists allowed references, standards, technical documentation, Skills, MCP servers, and quality tools. It does not define Motif's visual rules. Resource use must be task-triggered, bounded, and evidenced.

### Obligation levels

| Level                   | Rule                                                                                                |
| ----------------------- | --------------------------------------------------------------------------------------------------- |
| `MANDATORY`             | Must inspect/use within the stated scope; if unavailable, report a blocker or request a replacement |
| `CONDITIONAL-MANDATORY` | Required when the trigger applies                                                                   |
| `RECOMMENDED`           | Use when it has clear value; explain when not applicable                                            |
| `OPTIONAL`              | Available when it serves a defined task and its use is justified                                    |
| `NON-AUTHORITATIVE`     | Can advise or enable implementation but cannot decide Motif visual/product direction                |
| `PROHIBITED`            | Excluded from the approved workflow unless the owner explicitly changes the decision                |

A listing is not proof of inspection; installation is not proof of invocation; tool output is not owner approval. New resources require owner approval before joining the formal list. Technical documentation links were checked for this specification on 2026-11-07 and must be re-checked against installed versions before implementation.

## 2. International Typographic Style and publishing references

| Resource                                                                                                                               | Obligation/trigger                                               | Required extraction                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| [Swiss National Library — The International Style 1950–1970](https://www.nb.admin.ch/en/the-international-style-1950-1970)             | `MANDATORY`: substantive visual composition                      | Historical context, grid, typography, photography, exchange, social context  |
| [Poster House — The Swiss Grid](https://access.posterhouse.org/exhibition/swiss-grid-2/)                                               | `MANDATORY`: substantive visual composition                      | Alignment, modules, proportion, type, image relationships in specific works  |
| [Swiss National Library — Zurich Concretists](https://www.nb.admin.ch/en/the-zurich-concretists)                                       | `CONDITIONAL-MANDATORY`: geometry/composition/Zurich methods     | Geometry, space, proportion, and limits of generalization                    |
| [Cooper Hewitt — A Harmony of Contrasts](https://www.cooperhewitt.org/2018/08/05/aharmonyofcontrasts/)                                 | `CONDITIONAL-MANDATORY`: Basel/photography/contrast              | Hofmann, photographic realism, geometric type, optical tension               |
| [Letterform Archive — Legacies of Swiss Style](https://letterformarchive.org/news/legacies-of-swiss-style-tyografische-monatsblatter/) | `CONDITIONAL-MANDATORY`: typography-led task                     | Ruder/Basel type practice and typographic spatiality                         |
| [The Paris Review](https://www.theparisreview.org/)                                                                                    | `CONDITIONAL-MANDATORY`: literary long-form/publication identity | Actual article openings, reading, contributor, publication details           |
| [Aeon](https://aeon.co/)                                                                                                               | `CONDITIONAL-MANDATORY`: argument/long-form essay                | Argument structure, section rhythm, media evidence                           |
| [The Public Domain Review](https://publicdomainreview.org/)                                                                            | `CONDITIONAL-MANDATORY`: archival feature                        | Specific objects, interpretation, institutional sources, object-level rights |
| [The Pudding](https://pudding.cool/)                                                                                                   | `CONDITIONAL-MANDATORY`: data/visual narrative                   | Claim/evidence, method, interaction, static path                             |
| [The Guardian Photography](https://www.theguardian.com/artanddesign/photography)                                                       | `RECOMMENDED`: contemporary photography study                    | Specific feature sequence, credit, caption, editorial rhythm                 |

A substantive composition must study at least one historical/method source and one contemporary work matching its reader task. Open and inspect the actual work; search snippets/homepages alone are insufficient. Reference access grants no asset reuse rights.

## 3. Standards and technical documentation

| Resource                                                                                                                                                                     | Obligation/trigger                                                    | Boundary                                                                                         |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| [WCAG 2.2](https://www.w3.org/TR/WCAG22/)                                                                                                                                    | `MANDATORY`: all page/interaction acceptance                          | AA target                                                                                        |
| [WAI-ARIA APG](https://www.w3.org/WAI/ARIA/apg/)                                                                                                                             | `CONDITIONAL-MANDATORY`: custom interactions                          | Native HTML first; implement documented keyboard pattern                                         |
| [W3C Internationalization](https://www.w3.org/International/)                                                                                                                | `CONDITIONAL-MANDATORY`: localization/direction                       | `lang`, `dir`, bidi, internationalization                                                        |
| [Chinese Layout Requirements](https://www.w3.org/TR/clreq/)                                                                                                                  | `MANDATORY`: Chinese typography validation                            | Chinese punctuation, line breaking, mixed-script layout                                          |
| [CSS Text](https://www.w3.org/TR/css-text-3/) / [Writing Modes](https://www.w3.org/TR/css-writing-modes-4/)                                                                  | `CONDITIONAL-MANDATORY`: line breaking/direction/vertical writing     | Verify current browser support                                                                   |
| [MDN HTML Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements)                                                                                   | `MANDATORY`: semantic implementation                                  | Native elements/structure                                                                        |
| [MDN Responsive Design](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design)                                                    | `MANDATORY`: responsive implementation                                | Grid/Flexbox, fluid layout, breakpoints                                                          |
| [Next.js App Router](https://nextjs.org/docs/app)                                                                                                                            | `MANDATORY`: Next implementation                                      | Check docs for installed version                                                                 |
| [create-next-app CLI](https://nextjs.org/docs/app/api-reference/cli/create-next-app)                                                                                         | `MANDATORY`: A0 project creation                                      | Select App Router, TypeScript, Tailwind, ESLint, pnpm, and `@/*`; verify current prompts/options |
| [Sera style](https://ui.shadcn.com/sera)                                                                                                                                     | `MANDATORY`: A0/A2 initial visual baseline                            | Starting point only; Motif retains visual authority                                              |
| [shadcn CLI](https://ui.shadcn.com/docs/cli)                                                                                                                                 | `MANDATORY`: A0 initialization and component changes                  | Run `pnpm dlx shadcn@latest init`; select Sera and Base UI in the interactive prompts            |
| [shadcn/ui Next.js](https://ui.shadcn.com/docs/installation/next)                                                                                                            | `MANDATORY`: shadcn setup/adaptation                                  | Editable source/registry; not visual authority                                                   |
| [Tailwind CSS](https://tailwindcss.com/docs)                                                                                                                                 | `CONDITIONAL-MANDATORY`: Tailwind setup                               | Match installed major version                                                                    |
| [Fumadocs CLI](https://www.fumadocs.dev/docs/cli)                                                                                                                            | `MANDATORY`: A0 integration into the existing app                     | Review generated route group and file changes before integration                                 |
| [Fumadocs Next.js](https://www.fumadocs.dev/docs/manual-installation/next)                                                                                                   | `MANDATORY`: Fumadocs integration                                     | Current prerequisites/API; not visual authority                                                  |
| [Fumadocs MDX](https://www.fumadocs.dev/docs/mdx)                                                                                                                            | `MANDATORY`: collections/MDX                                          | Collections, schema, loader, compilation                                                         |
| [Fumadocs Blog integration](https://www.fumadocs.dev/docs/integrations/blog)                                                                                                 | `CONDITIONAL-MANDATORY`: blog integration                             | Evaluate schema and components, then adapt presentation to Motif                                 |
| [IBM Plex](https://github.com/IBM/plex), [Newsreader](https://github.com/productiontype/Newsreader), [Noto Fonts](https://github.com/notofonts)                              | `CONDITIONAL-MANDATORY`: font packaging/validation                    | Exact files, glyphs, weights, licenses                                                           |
| [GitHub protected branches](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches) | `MANDATORY`: branch governance                                        | Required PRs/checks, restrictions, merge rules                                                   |
| [Vercel Git deployment](https://vercel.com/docs/git)                                                                                                                         | `MANDATORY`: Git/Vercel integration                                   | Production branch, Preview branches, staging branch domain                                       |
| [Vercel environments](https://vercel.com/docs/deployments/environments)                                                                                                      | `MANDATORY`: environment setup                                        | Local, Preview, Production variables/boundaries                                                  |
| [Vercel Preview promotion](https://vercel.com/docs/deployments/promote-preview-to-production)                                                                                | `CONDITIONAL-MANDATORY`: only if direct Preview promotion is selected | Production rebuild/environment behavior; not byte-identical promotion                            |

## 4. Skills

Skills are bounded execution capabilities rather than design authorities. Review source, license, permissions, dependencies, and maintenance before use; owner approval is required for installation or updates. When available and relevant, they may assist with:

- [Frontend Design](https://github.com/anthropics/skills/tree/main/skills/frontend-design): page implementation under a Motif Brief.
- [Impeccable](https://github.com/pbakaus/impeccable): typography/layout review and constrained polish; may not reset Motif style.
- [Microsoft Frontend Design Review](https://github.com/microsoft/skills/tree/main/.github/skills/frontend-design-review): usability/trust/implementation review; WCAG 2.2 AA remains the baseline.
- [shadcn Design System Skill](https://github.com/shadcn-ui/ui/tree/main/skills/shadcn): shadcn source adaptation and token mapping.
- [Vercel Composition Patterns](https://github.com/vercel-labs/agent-skills/tree/main/skills/composition-patterns): React composition/API boundaries, not visual composition authority.
- [Vercel React Best Practices](https://github.com/vercel-labs/agent-skills/tree/main/skills/react-best-practices): React/Next implementation and performance.
- [Vercel Web Design Guidelines](https://github.com/vercel-labs/agent-skills/tree/main/skills/web-design-guidelines): review implemented interfaces against Motif.

A listing records a possible capability, not proof of installation, connection, or execution. Generic frontend Skills complement historical research, editorial typography, photography art direction, and data storytelling expertise.

## 5. MCP and quality tools

| Tool                                                                         | Obligation/trigger                                                     | Limit                                                          |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------- | -------------------------------------------------------------- |
| [Playwright MCP](https://playwright.dev/docs/getting-started-mcp)            | `CONDITIONAL-MANDATORY`: browser checks through MCP                    | Local/approved Preview only; not a Playwright Test replacement |
| [shadcn MCP](https://ui.shadcn.com/docs/mcp)                                 | `CONDITIONAL-MANDATORY`: official registry lookup                      | Source lookup only; cannot define Motif visuals                |
| [Context7](https://github.com/upstash/context7)                              | `OPTIONAL`: version-specific docs lookup if official docs insufficient | Cross-check facts with official docs and lockfile              |
| [Chrome DevTools MCP](https://github.com/ChromeDevTools/chrome-devtools-mcp) | `CONDITIONAL-MANDATORY`: reproducible browser diagnosis                | Diagnostic use, not aesthetic judgment                         |
| [MCP Inspector](https://github.com/modelcontextprotocol/inspector)           | `OPTIONAL`: MCP config/schema debugging                                | Not a runtime dependency                                       |
| [Playwright Test](https://playwright.dev/)                                   | `MANDATORY`: browser/page/interaction verification                     | Use actual repository version/scripts                          |
| [axe-core](https://github.com/dequelabs/axe-core)                            | `MANDATORY`: accessibility scan when DOM/browser exists                | Does not replace manual review                                 |

## 6. Approval-required capabilities

The following capabilities remain outside the approved initial stack and require a scoped proposal and owner approval: autonomous style-picking agents, component registries, decorative SVG/icon illustration packages, image libraries or generated imagery used as evidence, additional fonts/palettes, automatic design scoring, CMS/analytics platforms, extra deployment services, and new Skills/MCP connections. Evaluate each proposal for purpose, source, license, permissions, maintenance, compatibility, and project impact.

## 7. Capability-to-deliverable mapping

| Capability                                       | Trigger                               | Required artifact/evidence                                             |
| ------------------------------------------------ | ------------------------------------- | ---------------------------------------------------------------------- |
| International Typographic Style / Zurich / Basel | Significant visual composition        | Historical method analysis and structural/expressive relationship      |
| Editorial typography                             | Long-form/type-led task               | Type hierarchy and real-content specimen                               |
| Photography art direction                        | Images carry narrative/evidence       | Photography Brief, sequence, crop/credit/rights record                 |
| Geometry and grid                                | Geometry/grid-led composition         | Annotated grid/geometry and purpose of each form                       |
| Editorial storytelling                           | Long-form/archive/data/hybrid feature | Reader path and evidence sequence                                      |
| Data visualization                               | Chart/data content                    | Claim-data-source-method-limitation mapping and alternative            |
| Responsive composition                           | Significant pages                     | Wide/intermediate/narrow/narrow-container evidence                     |
| Multilingual/accessibility                       | Supported language/interaction        | Script matrix, focus/screen-reader/reflow evidence                     |
| Git/release governance                           | Every implementation/release unit     | PR, local test, staging SHA, Preview evidence, Production smoke record |

## 8. Usage records

For each resource actually used, record date, stage/task, resource ID, exact URL/version, status (`inspected`, `analyzed`, `invoked`, `executed`), findings, evidence, and limitations. Plans remain distinct from completed use. When a resource is inaccessible or unsuitable, record the issue and request a bounded replacement.
