# Decisions
- Keep Kenneth Bukenya as the primary brand and Hama Techservices as supporting service identity.
- Use verified project evidence and conservative status labels.
- Keep contact frontend-only with direct email and profile links; do not pretend a form submission succeeds.
- Do not expose private evidence files or operational screenshots by default.
- Avoid a backend and CMS in version one; leave a clear path for a future content adapter.

# Stage 2 structural decisions
- Keep `src/main.tsx` as the React entry point and preserve the production Error Boundary there.
- Store all project content in `src/data/projects.ts`, typed by `src/types/project.ts`; cards, routing and case studies consume that same source.
- Use a reusable `CaseStudyLayout` with optional sections so unsupported or empty content is not rendered.
- Use a dependency-free `MediaGallery` with lazy thumbnails, keyboard controls, Escape closing, focus return, body-scroll locking and reduced-motion CSS.
- Derive canonical URLs from the current site origin rather than inventing a production domain.
- Publish only reviewed public-safe media. Exclude analytics screenshots containing identifiable customer names and transaction amounts.

# Stage 3 UI decisions
- Use the approved portrait in the homepage hero and move the existing approach panel into a separate section so the hero remains focused.
- Keep `Projects` as the single public navigation label and treat `/work` and `/projects/:slug` as part of the same active navigation state.
- Prefer CSS-only visual refinement over adding a UI framework or animation library.
- Omit a marquee because it would not improve the page's clarity or accessibility.

# Focused content decisions
- Use contextual evidence headings instead of a generic screenshot-gallery label: architecture/workflows for KAM, website views/diagrams for MedLink, architecture/evaluation for LeadBridgeAI and analysis/workflow evidence when analytics media is available.
- Keep the analytics case study text-first because its available screenshots contain identifiable customer names or transaction values.
- Present zoom and original/download controls in the shared viewer so large diagrams remain useful without publishing additional source files.
