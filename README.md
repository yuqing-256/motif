# Motif

Motif is a cross-media, cross-platform design system for creating, organizing, expressing, presenting, and distributing content.

Motif aims to establish a coherent design language and set of design principles that can adapt to different media and platforms without forcing every platform into the same implementation model.

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

### Hugin

Hugin is Motif's editorial design approach.

It focuses on content expression, presentation, reading, and communication.

Its primary concerns include:

- Content hierarchy and narrative structure.
- Typography and reading experience.
- Visual emphasis and information presentation.
- Text, image, and media composition.
- Page composition and reading rhythm.
- Editorial presentation and distribution.

### Munin

Munin is Motif's functional design approach.

It focuses on content creation, organization, management, and operation.

Its primary concerns include:

- Information architecture and navigation.
- Workspaces and operational workflows.
- Controls and interaction states.
- Information organization and usability.
- Feedback and system status.
- Task efficiency and functional clarity.

Hugin and Munin are complementary design approaches within Motif. They are not separate component libraries or mutually exclusive interface modes. Both may contribute to the same product or page.

### Theme System

Motif initially defines four independent themes:

- **Hugin** — the core theme serving Hugin's design goals.
- **Munin** — the core theme serving Munin's design goals.
- **Hugin Dark** — an independently designed dark derivative of Hugin.
- **Munin Light** — an independently designed light derivative of Munin.

These are four complete themes, not combinations generated from independent density, brightness, or other theme dimensions.

Hugin Dark and Munin Light may share principles and selected foundations with their respective parent themes, but each requires its own design decisions and validation.

Hugin and Munin remain design approaches as well as the names of the two core themes. Their conceptual relationship must not be reduced to a simple theme switch.

No independent Density dimension is defined in the initial theme system.

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
- Design philosophy and approaches.
- Initial design language.
- Project development and progress.
- Selected examples and demonstrations.

### Documentation

The documentation system explains:

- Design principles and foundations.
- Design tokens.
- Components and patterns.
- Theme specifications.
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

Astro Content Collections will be used to manage structured documentation and blog content.

The project will define its own content models, navigation, page layouts, component examples, and documentation experience.

Existing templates and design systems may be studied as references, but a ready-made website template will not be used as the final Motif website.

## Design System Architecture

Motif will be developed incrementally through the following layers:

1. **Design Principles** — why Motif makes particular design decisions.
2. **Design Language** — typography, grids, spacing, color, imagery, borders, and other visual and interaction conventions.
3. **Foundations** — reusable design foundations and rules.
4. **Design Tokens** — structured representations of reusable design decisions.
5. **Components** — reusable interface elements.
6. **Patterns** — recurring compositions and interaction structures built from components.
7. **Theme Guidelines** — the design requirements and behavior of the four themes.
8. **Platform Adaptations** — implementations that preserve design intent while respecting platform capabilities.

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

**Typst** is the planned direction for exploring publication and typesetting applications.

### Desktop

**Go and Fyne** are the planned direction for exploring desktop applications.

Cross-platform development is an adaptation of design intent, not a direct port of web components.

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
- Define design tokens.
- Develop components and patterns.
- Specify how Hugin and Munin work together.
- Design and validate Hugin Dark and Munin Light independently.

Completion criteria:

- Motif has a practical, documented, and validated foundation.
- Its themes, components, and patterns have been tested against real website requirements.

### P3 — Web Dogfooding

Use Motif to redesign and improve the Motif website itself.

Goals:

- Apply Motif foundations, tokens, components, and patterns.
- Validate Hugin and Munin in real page compositions.
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

The development environment has been audited, and a minimal Astro foundation now exists: Astro 7 with TypeScript, Tailwind CSS, a base layout with initial pages, and a Playwright smoke-test baseline covering desktop and mobile.

The immediate priority is to verify the deployment path, then begin P1 — Real Web Presence.

Future phases are planning directions, not authorization to implement their infrastructure prematurely.
