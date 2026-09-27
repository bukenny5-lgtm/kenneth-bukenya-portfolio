# Stage 3 / final QA remaining

- Manual visual acceptance is still required at 320px, 375px, 768px, 1024px, 1280px and 1440px.
- Browser runtime-console verification and detailed keyboard/focus QA remain pending because browser automation was unavailable.
- Final visual review of spacing, typography, gallery presentation and diagrams remains pending.
- Deployment preparation remains out of scope for this stage.

# Resolved in Stage 3

- Approved profile image is displayed in the homepage hero.
- Active navigation is route-aware and uses `aria-current="page"` plus a visible indicator.
- Homepage How I Work content is a dedicated section below the hero.
- Capability descriptions are distinct and project cards have consistent aspect ratios and focus states.
- Project label is consistently `Projects` across header, footer and page heading.
- Gallery focus cycling, Escape closing, click-outside closing, body-scroll locking and reduced-motion behavior are implemented.
