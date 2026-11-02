# Motif

Motif is a cross-media, cross-platform design system for creating, organizing, expressing, presenting, and distributing content.

It establishes a coherent design language and set of design principles that adapt to different media and platforms without forcing every platform into the same implementation model.

Motif combines two complementary design approaches within one unified design system:

- **Hugin — Editorial Design Approach**, focused on content expression, presentation, reading, and communication.
- **Munin — Functional Design Approach**, focused on content creation, organization, management, and operation.

Motif supports two appearance modes:

- **Motif** — the light appearance.
- **Motif Dark** — an independently designed dark appearance derived from the same design system.

The project develops its design system through real products and practical use cases, beginning with a production website and gradually expanding into motion, publishing, and desktop applications.

## Goals & Scope

Motif is intended to support:

- Content creation and editing.
- Content organization and management.
- Editorial expression and long-form reading.
- Information presentation and communication.
- Reusable interface and interaction patterns.
- Cross-media and cross-platform design adaptation.

Motif is not limited to a web component library, a visual theme collection, or a collection of platform-specific UI implementations.

Its central concern is consistency of design intent, not uniformity of implementation.

## Design Philosophy

### Hugin — Editorial Design Approach

Hugin focuses on content expression, presentation, reading, and communication.

Its primary concerns include:

- Content hierarchy and narrative structure.
- Typography and reading experience.
- Visual emphasis and information presentation.
- Text, image, and media composition.
- Page composition and reading rhythm.
- Editorial presentation and distribution.

Hugin guides how content is expressed and experienced.

### Munin — Functional Design Approach

Munin focuses on content creation, organization, management, and operation.

Its primary concerns include:

- Information architecture and navigation.
- Workspaces and operational workflows.
- Controls and interaction states.
- Information organization and usability.
- Feedback and system status.
- Task efficiency and functional clarity.

Munin guides how users interact with information and accomplish tasks.

### Relationship Between Hugin and Munin

Hugin and Munin are complementary design approaches within Motif.

They are not separate themes, component libraries, or mutually exclusive interface modes. Both may contribute to the same product, page, or interface.

Their relative emphasis depends on the purpose of the experience. An editorial page may rely primarily on Hugin while using Munin for navigation and interaction. A functional workspace may rely primarily on Munin while using Hugin to present content clearly.

Neither approach is restricted to a particular platform or appearance mode.

### Appearance Modes

Motif is one unified design system with two appearance modes:

- **Motif** — the light appearance and initial visual foundation.
- **Motif Dark** — an independently designed dark appearance derived from Motif.

Motif Dark is not a simple color inversion. It requires its own design decisions, visual adjustments, and validation while preserving the underlying design principles, visual identity, and component semantics of Motif.

The two appearance modes are independent of the Hugin and Munin design approaches.

Both Hugin and Munin must work coherently in Motif and Motif Dark. The two approaches may also coexist within the same product or page in either appearance mode.

No independent Density dimension is defined in the initial system. Other appearance or presentation dimensions should be introduced only when demonstrated requirements justify them.

## Initial Design Language

The following directions establish the initial research and design foundation. They are not yet a complete or immutable design specification.

### International Typographic Structure

Grid, hierarchy, whitespace, and alignment take precedence over decoration.

### Literary Reading Experience

Long-form reading should be comfortable. Line length, typography, spacing, and reading rhythm should serve the content.

### Documentary Traceability

Sources, editions, citations, annotations, and provenance should be respected and made traceable where relevant.

### Restrained Modern Functionality

Functionality takes priority. Visual style must not compromise usability or task clarity.

### Multilingual Typography

Chinese, Japanese, Korean, Latin, and other writing systems should work together coherently in font selection, type scale, line height, punctuation, line breaking, and mixed-script layout.

These directions should be researched and validated through real content, pages, components, and platform implementations.

## Website Architecture

The first product is a production website built as a unified Astro project.

It contains three primary content areas.

### Website

The public-facing website introduces:

- Motif and its goals.
- Design philosophy and design approaches.
- Initial design language.
- Project development and progress.
- Selected examples and demonstrations.

### Documentation

The documentation system explains:

- Design principles and foundations.
- Design language and tokens.
- Components and patterns.
- Hugin and Munin design approaches.
- Motif and Motif Dark appearance specifications.
- Implementation guidelines.
- Platform-specific guidance and APIs where applicable.

The documentation system will be developed within the Astro project rather than relying on a separate documentation theme as the final product.

### Blog

The blog supports:

- Design research.
- Technical practice.
- Development notes.
- Case studies.
- Project updates.

The website, documentation, and blog share one project and common infrastructure while retaining content structures appropriate to their respective purposes.

### Content Architecture

Astro Content Collections manage structured documentation and blog content.

The project defines its own content models, navigation, page layouts, component examples, and documentation experience.

Existing templates and design systems may be studied as references, but a ready-made website template will not be used as the final Motif website.

The initial URL structure is:

| URL             | Content                                          |
| --------------- | ------------------------------------------------ |
| `/`             | Website pages, authored directly in `src/pages/` |
| `/docs/`        | Documentation index                              |
| `/docs/<slug>/` | A documentation entry                            |
| `/blog/`        | Blog index                                       |
| `/blog/<slug>/` | A blog post                                      |

Documentation and blog entries are Markdown files in `src/content/docs/` and `src/content/blog/`. Astro Content Collections validate their front matter at build time: documentation entries declare `title`, `description`, and an optional `order`; blog entries declare `title`, `description`, `pubDate`, optional `tags`, and an optional `draft` flag. Page routes are generated from the entries, and an invalid entry fails the build.

Images and static files follow Astro conventions. Content images live beside the Markdown file that uses them and are processed by Astro; shared UI assets belong in `src/assets/`; `public/` is reserved for files that must be served at a stable path unchanged, such as favicons and downloads.

Content is authored in English initially. The layout is language-aware and the site declares English as its default language, but locale-prefixed routes and translated content are deferred to a later stage.

## Design System Architecture

Motif will be developed incrementally through the following layers:

1. **Design Principles** — why Motif makes particular design decisions.
2. **Design Language** — typography, grids, spacing, color, imagery, borders, and other visual and interaction conventions.
3. **Foundations** — reusable design foundations and rules.
4. **Design Tokens** — structured representations of reusable design decisions.
5. **Components** — reusable interface elements.
6. **Patterns** — recurring compositions and interaction structures built from components.
7. **Design Approaches** — guidance for applying Hugin and Munin, independently or together.
8. **Appearance Modes** — the design requirements and behavior of Motif and Motif Dark.
9. **Platform Adaptations** — implementations that preserve design intent while respecting platform capabilities.

These layers describe related aspects of one design system, not separate systems or mandatory implementation packages.

The system should emerge from real requirements. Components, abstractions, and specifications should not be created in bulk before their purpose has been demonstrated.

## Technology Direction

### Web

The initial website technology direction is:

- **Astro** — website framework, pages, layouts, and content presentation.
- **Astro Content Collections** — structured documentation and blog content.
- **Tailwind CSS** — styling and layout implementation.
- **shadcn/ui** — a customizable source of UI component implementations where appropriate.
- **Style Dictionary** — a candidate tool for transforming and distributing design tokens once the token system is established.

Astro components should handle static pages and content presentation. A client-side framework such as React should be introduced only where actual interaction requirements justify it.

Not every page needs to become a React application.

Style Dictionary is not responsible for defining Motif's design principles or token semantics. Its adoption belongs to the stage where a real token system and output requirements exist.

### Motion and Video

**Remotion** is the planned direction for exploring motion and video applications of Motif.

### Publishing

**Typst** is the planned direction for exploring publication and typesetting applications of Motif.

### Desktop

**Go and Fyne** are the planned direction for exploring desktop applications of Motif.

Cross-platform development is an adaptation of design intent, not a direct port of web components.

### Toolchain

The project pins its toolchain with `mise.toml`: Go 1.27.3, Node.js 24.22.1, pnpm 12.15.0, and Typst 0.15.1.

- `mise install` installs the pinned versions, and `mise ls --current` shows the active ones.
- Run project commands from the project root so mise resolves the pinned versions.
- `go.set_gobin = false` keeps Go's default `GOBIN` (`$GOPATH/bin`); mise does not override it.

pnpm is the package manager, and its version is also recorded in `package.json` through the `packageManager` field.

## Development Roadmap

### P0 — Development Foundation

Establish a reliable development environment and Agent-assisted workflow.

Goals:

- Initialize the project repository and minimum web development environment.
- Audit the capabilities of the current DeepSeek Harness environment.
- Verify the relevant Skill, Workflow, Plugin, and MCP mechanisms.
- Establish development, build, preview, testing, and deployment foundations.
- Create the core project documentation.

Completion criteria:

- The minimum Astro project can be developed, built, previewed, and deployed.
- The Agent can inspect the project, consult relevant documentation, make scoped changes, and verify results.
- The project has clear decision boundaries and a maintainable development workflow.

### P1 — Real Web Presence

Build and launch the production website, documentation, and blog.

Goals:

- Establish the three primary website areas.
- Define content models and navigation.
- Build reusable page structures and necessary components.
- Establish content maintenance and publishing workflows.
- Validate the website through real content and browser use.

Completion criteria:

- The website is publicly accessible.
- Website, documentation, and blog content can be maintained through the shared project.
- The site is a usable production environment, not merely a design prototype.

### P2 — Motif Design

Develop Motif's design system from problems and requirements discovered through real use.

Goals:

- Establish and validate design principles.
- Develop the design language and foundations.
- Define design tokens where justified.
- Develop components and patterns.
- Specify how Hugin and Munin work independently and together.
- Establish Motif as the light appearance.
- Independently design and validate Motif Dark.
- Verify both design approaches in both appearance modes.

Completion criteria:

- Motif has a practical, documented, and validated design foundation.
- Hugin and Munin can be applied coherently, separately or together.
- Motif and Motif Dark preserve the same underlying design principles while providing appropriate appearance-specific decisions.
- Components and patterns have been tested against real website requirements.

### P3 — Web Dogfooding

Use Motif to redesign and improve the Motif website itself.

Goals:

- Apply Motif foundations, tokens, components, and patterns.
- Validate Hugin and Munin in real page compositions.
- Validate both appearance modes.
- Identify gaps and inconsistencies.
- Feed implementation findings back into the design system.

Completion criteria:

- The website uses Motif as its actual design system rather than merely presenting it.
- Design specifications have been improved through real implementation and validation.

### P4 — Cross-Platform Adaptation

Adapt Motif to additional media and platforms.

Initial directions:

- Remotion for motion and video.
- Typst for publishing and typesetting.
- Go and Fyne for desktop applications.

Each platform requires its own investigation of layout, typography, interaction, implementation, and output capabilities.

Completion criteria:

- Each supported platform has practical examples demonstrating how Motif's design intent is adapted and implemented.

### P5 — Showcase & Distribution

Make Motif understandable, demonstrable, and usable by external users.

Goals:

- Develop a cross-platform Showcase.
- Present practical examples and case studies.
- Provide component, pattern, and template examples where appropriate.
- Publish installation, usage, and contribution guidance.
- Establish release and distribution processes.

Completion criteria:

- External users can understand Motif, explore its examples, obtain relevant resources, and use the system.

## Agent-Assisted Development

Motif uses DeepSeek Harness as its Agent environment.

The project prioritizes existing Harness capabilities, reusable Skills, and established workflows before creating project-specific extensions.

Skills, MCP servers, Plugins, and Workflows are introduced only when they solve demonstrated needs.

The Agent must respect project decisions, use authoritative documentation, work incrementally, and verify implementation results.

See:

- `AGENTS.md` for Agent instructions and development rules.
- `REFERENCES.md` for reference websites, official documentation, Skills, MCP resources, and workflow guidance.

## Project Status

**Current phase: P0 — Development Foundation.**

The development environment has been audited, and a minimal Astro foundation now exists: Astro 7 with TypeScript, Tailwind CSS, a shared layout with primary navigation, and documentation and blog pages generated from Astro Content Collections with schema-validated front matter. The documentation covers the Hugin and Munin design approaches and the Motif and Motif Dark appearance modes. A Playwright smoke-test baseline covers the generated pages in Chromium, Firefox, and WebKit.

The immediate priority is to verify the deployment path, then begin P1 — Real Web Presence.

Future phases are planning directions, not authorization to implement their infrastructure prematurely.
