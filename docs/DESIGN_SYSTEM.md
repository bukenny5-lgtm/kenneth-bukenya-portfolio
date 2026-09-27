# Design system
Brand colours follow the supplied Hama Techservices guidance: navy #123B5D, dark navy #0B2438, teal #00A6A6, light blue-grey #EAF2F6, primary text #17212B and secondary text #52606D. The interface uses high-contrast navy headings, teal actions, semantic sections, visible focus-compatible native controls, responsive grids and restrained depth. The design avoids busy gradients, glassmorphism and unsupported claims.

## Stage 3 UI rules

- Spacing rhythm: 8px base increments, with 16px control gaps, 24px card padding, 40px content grouping and 72–100px section padding depending on viewport.
- Content width: 1180px outer container, approximately 760–820px readable text measure for long-form pages and case-study sections.
- Typography: responsive headings use `clamp()`, body copy stays at readable line height, and technical labels remain secondary rather than carrying essential meaning.
- Interaction: 150–350ms restrained transitions, visible amber focus rings, active navigation uses `aria-current` plus an underline, and hover styles have keyboard-focus equivalents.
- Motion: reduced-motion users receive immediate interactions; gallery opening/closing does not rely on animation.
- Responsive behavior: hero and approach content stack below 850px, controls become full-width below 520px, and gallery/case-study grids collapse without horizontal overflow.
