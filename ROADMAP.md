# Motif Roadmap

> **Project status:** Alpha  
> **Delivery target:** One Next.js application containing the Motif website, general-purpose Documentation, and general-purpose Blog.  
> **Order:** Initialize the actual starter → freeze its baseline → establish visual language → adapt components → validate components → build the three publishing surfaces.

## Target application

```text
One repository / one Next.js App Router application / one deployment unit
│
├── /                 Motif website — Next.js + adapted shadcn primitives
├── /docs/*           General-purpose Fumadocs documentation
└── /blog/*           General-purpose Fumadocs blog

Shared: Motif visual foundation, site identity, accessibility, content contracts,
        and progressively introduced test infrastructure
```

The route structure above defines the eventual product target. A0 initializes Fumadocs so the application foundation can be tested early; A5 delivers the full documentation information architecture, published content, and blog experience.

## Stage overview

| Stage | Direction                | Main deliverable                                                                  |
| ----- | ------------------------ | --------------------------------------------------------------------------------- |
| A0    | Project Initialization   | Next.js + shadcn Sera + Base UI + Fumadocs starter                                |
| A1    | Baseline Freeze          | Verified project state, lockfile, baseline documentation, initial commit          |
| A2    | Visual Foundation        | Initial Motif style adaptations and a minimal visual specimen page                |
| A3    | shadcn Adaptation        | Adapted foundational components with stable implementation conventions            |
| A4    | Component Validation     | Component test/showcase pages, approved variants, states, and responsive behavior |
| A5    | Motif Publishing Website | Website, Documentation, Blog, and cross-surface release checks                    |

## A0 — Project Initialization

**Purpose:** Create a clean, runnable starter using official initialization workflows. Keep A0 focused on the framework baseline; Motif-specific architecture and design abstractions begin in their later stages.

### Required sequence

1. Create a Next.js project using the App Router, TypeScript, Tailwind CSS, ESLint, and the `@/*` import alias. Use pnpm.
2. Initialize shadcn/ui in the existing project by running the CLI, then select **Sera** as the visual preset and **Base UI** as the component base in the interactive initialization prompts.
3. Initialize Fumadocs inside the same project using its CLI.
4. Review the generated diff, resolve any visible integration issue, and verify the application locally.

### Initial commands

```bash
# Create the application; choose the recommended App Router defaults.
pnpm create next-app@latest motif
cd motif

# Initialize shadcn/ui, then select Sera and Base UI in the interactive prompts.
pnpm dlx shadcn@latest init

# Initialize Fumadocs in the existing Next.js application.
pnpm dlx @fumadocs/cli init

# Verify the starter with a production build.
pnpm build

# Start the development server in a separate terminal when ready to inspect locally.
pnpm dev
```

During the interactive `init` flow, select **Sera** as the visual preset and **Base UI** as the component base. CLI prompts may evolve; consult the official documentation in `docs/governance/RESOURCES.md` when executing the setup.

### Constraints

- Keep A0 limited to the single application starter and its approved initial integrations. A Monorepo, separate component package, Storybook, CMS, database, analytics service, custom registry, and deployment integration each require a later scope decision.
- Preserve the generated application shell during A0; public Motif pages belong to A5.
- Establish the Motif token architecture and semantic component taxonomy in A2–A4, when visual and component requirements can be evaluated.
- Retain the generated directory structure as the baseline; make structural changes only to resolve a verified integration need.
- Review Fumadocs CLI changes to `next.config`, global CSS, root layout, route group, and `.gitignore` before integrating them with the Next.js starter.
- Fumadocs route generation establishes infrastructure; A5 defines the final `/docs` information architecture and `/blog` publishing experience.

### Exit criteria

- Next.js starts locally.
- shadcn configuration exists and records the selected Sera/Base UI setup.
- Fumadocs routes and source configuration are present and integrate cleanly with the root application.
- `pnpm build` succeeds.
- The package manager and lockfile are consistent.
- Generated files and dependency versions are inspected; no unexplained changes remain.

## A1 — Baseline Freeze

**Purpose:** Document the real initial project rather than a hypothetical scaffold.

### Deliverables

- Confirm repository name, package manager, Node.js requirement, and actual versions from the lockfile and package metadata.
- Record the interactive Sera preset and Base UI selections, plus the generated component/configuration paths.
- Record the Fumadocs integration locations and route-group behavior generated by the CLI.
- Add and verify `.gitignore` and `.gitattributes`.
- Update `README.md`, `PACKAGE-MANIFEST.json`, and implementation notes to match the actual repository.
- Establish the agreed Git branch workflow.
- Commit the complete starter and its authoritative Alpha documentation baseline as the repository's initial project commit.

### Constraints

- The initial commit may contain the working starter project, not documentation alone.
- Report tests, accessibility, visual quality, and deployment status strictly from executed checks and recorded evidence.
- Record exact versions from the package manifest and lockfile.
- Keep the baseline as small as the verified requirements allow.

### Exit criteria

The repository has one coherent initial Alpha baseline: runnable application, lockfile, generated tool configuration, required project documents, ignore/attribute rules, and an initial commit. A clean install and production build are recorded.

## A2 — Visual Foundation

**Purpose:** Understand the actual Sera baseline and begin turning it into Motif through visible, reviewable changes.

### Work

- Inspect the generated Sera implementation in the browser before changing it.
- Build a small internal visual specimen page or route for the foundations being adjusted. This is a development aid, not the public Motif homepage.
- Review typography, color, geometry, borders, spacing, surfaces, focus, and Light/Dark presentation.
- Test real Chinese/English mixed text and the other writing systems that Motif commits to support.
- Compare the existing Alpha visual specifications with Sera's generated implementation. Retain, adapt, or reject each conflicting detail based on Motif's International Typographic Style principles and actual rendering.
- Record approved token and CSS-variable decisions in the design specification and implementation.

### Constraints

- Sera is the starting point, not the final specification.
- Compare each Sera default with the Motif working specifications and rendered evidence; retain, adapt, or replace it deliberately.
- Maintain one Motif token source of truth and map upstream variables to it as the system becomes defined.
- Add only the visual controls needed to inspect the current work.

### Exit criteria

The owner has reviewed the rendered foundation specimens. The typography, color, geometry, spacing, surfaces, focus, and theme decisions needed for initial component work are recorded. Unresolved design questions remain explicitly open.

## A3 — shadcn Adaptation

**Purpose:** Adapt the selected shadcn primitives to the approved Motif visual foundation without prematurely creating a large new semantic component library.

### Work

- Inspect which shadcn components are present and which are actually needed.
- Adapt foundational components in small, reviewable groups.
- Preserve the selected Base UI interaction semantics unless a documented limitation requires reconsideration.
- Align component visuals with approved Motif tokens and design decisions.
- Review component anatomy, keyboard behavior, focus, disabled/loading/error states, and content sizing as relevant.
- Keep upstream-derived component code editable and locally understandable.

### Constraints

- Install shadcn components when an identified interface requirement needs them.
- Create semantic wrappers for primitives when they add stable meaning, content structure, or a distinct accessibility contract.
- Add variants only for approved, meaningful expressive or adaptive differences.
- Keep Base UI as the selected primitive base. A proposed base change requires owner approval and a compatibility analysis.

### Exit criteria

The selected foundational components have consistent Motif presentation, stable local conventions, working interaction behavior, and documented deviations from their Sera baseline.

## A4 — Component Validation

**Purpose:** Turn the adapted components into a dependable set through visible examples and progressive testing.

### Work

- Expand the internal component specimen/test page as components are adapted.
- Add examples for meaningful states, sizes, and approved expressive variants.
- Define adaptive behavior for viewport width, narrow containers, content length, writing system, direction, and input conditions where relevant.
- Add appropriate unit/integration/browser checks as real component behavior requires.
- Add automated accessibility scanning and manual keyboard review when the browser fixture environment is ready.
- Add visual regression only after rendering is deterministic and the owner has reviewed the initial reference images.
- Record approved component contracts and keep the public API finite and intentional.

### Constraints

- Begin browser verification in A2 and expand its coverage through A4.
- Select viewport, theme, and state combinations that represent each component's meaningful use cases.
- Define responsive behavior as part of each component's design from its first implementation.
- A screenshot diff is not design acceptance.

### Exit criteria

The components selected for the initial Motif website are documented and tested for relevant visuals, behavior, accessibility, themes, and responsive conditions. Unimplemented catalog items remain out of scope rather than being represented by empty placeholders.

## A5 — Motif Publishing Website

**Purpose:** Build the public Motif product on top of the established visual and component foundation.

### Surface 1 — Motif website `/`

- Communicate Motif's identity, principles, and purpose.
- Provide clear paths to Documentation and Blog.
- Design the homepage composition around its actual reader task and Motif identity.
- Build navigation, footer, metadata, and responsive behavior as needed.

### Surface 2 — Documentation `/docs`

- Use Fumadocs MDX and a general-purpose documentation structure.
- Support getting started, concepts, guides, tutorials, reference, examples, troubleshooting, policies, and technical information as needed.
- Give documentation its own reading layout, local navigation, table of contents, and search behavior.
- Adapt or replace Fumadocs UI presentation where necessary; Fumadocs is documentation infrastructure, not visual authority.

### Surface 3 — Blog `/blog`

- Use a separate MDX content collection and schema.
- Support posts, updates, articles, authors/contributors, dates, and optional topics/categories.
- Design listing, article, archive, and discovery patterns only where actual publishing needs justify them.
- Reuse contributor, source, media, and rights concepts where useful while keeping Blog and Documentation as distinct publishing collections.

### Cross-surface work

- Keep all three surfaces in one Next.js application and deployment unit.
- Share Motif's visual foundation and site identity while keeping layouts suited to distinct reading tasks.
- Verify cross-surface navigation, metadata, canonical URLs, sitemap/robots, search scope, responsive behavior, accessibility, and build output.
- Add the content-shape fixtures in `docs/testing/TEST-SUITE.md` as publication content is introduced.

### Exit criteria

All three surfaces build and render in the same application. Their navigation, content, themes, responsive behavior, accessibility, metadata, and cross-surface boundaries are verified. Owner acceptance is required before production release.

## Initial stage state

All stages begin as `NOT STARTED`. Update status only from observed work and evidence.

| Stage                       | Initial state |
| --------------------------- | ------------- |
| A0 Project Initialization   | `NOT STARTED` |
| A1 Baseline Freeze          | `NOT STARTED` |
| A2 Visual Foundation        | `NOT STARTED` |
| A3 shadcn Adaptation        | `NOT STARTED` |
| A4 Component Validation     | `NOT STARTED` |
| A5 Motif Publishing Website | `NOT STARTED` |
