# UI Test and Repair Plan — NailStudio Audit

Scope: 2026-11-24-nailstudio-audit
Contract revision: 1
Status: PLANNED
Mode: solo

## Request and intended outcome
Audit every page in the Nail Studio application (single-page site with multiple sections). Fix all high, medium and low severity UI issues. Capture mobile, tablet and desktop screenshots. Verify every fix with new screenshots. Continue testing and fixing until all acceptance gates pass.

## Test strategy
- Step A — source review: Review all components in `components/site/` and `components/ui/`, page layout in `app/page.tsx`, `app/layout.tsx`, styling in `app/globals.css` and tokens in `tailwind.config.ts` against `references/interface-review-rubric.md`
- Step B — browser verification: Use Playwright to run the Next.js dev server, capture screenshots at all required viewports for the single page
- Required viewport profiles: mobile 375×812; tablet 768×1024; desktop-wide 1440×900
- Required states: default/populated (the page is static content, no dynamic states)

## Repository findings
- Framework/router: Next.js 14.2.3 with App Router, single page at `/`
- Routes and page templates: Single route `/` using `app/page.tsx` which composes Hero, Ticker, Manifesto, Services, PanGallery (×2), DriftGallery, Reviews, StudioStrip, Contact sections
- Shared layouts/components/styles: 
  - `app/layout.tsx` - Root layout with SiteHeader, SiteFooter, fonts (Inter + Bodoni_Moda), Google Analytics
  - `components/site/Container.tsx` - Max-width container with responsive padding
  - `components/site/SectionLabel.tsx` - Section labels with index numbers
  - `components/ui/button.tsx`, `sheet.tsx`, `carousel.tsx`, `card.tsx`, `skeleton.tsx` - UI primitives
  - `app/globals.css` - Full design system with CSS custom properties, animations, scroll-driven animations
  - `tailwind.config.ts` - Tailwind configuration
- Existing design system/tokens: Custom CSS properties (--paper, --bone, --ink, --wine, --clay, --line, --blush), shadcn semantic tokens mapped to studio palette, fluid typography, scroll-driven animations via `animation-timeline: view()`
- Existing browser/unit test tools: None visible in package.json scripts
- Available package scripts: `dev`, `build`, `start`, `lint`, `lint:fix`, `knip`, `oxc`, `biome`
- Safe test accounts/data/services: Static content only, no auth required. All images are local in `/public/Images/`

## Assumptions and unknowns
- Assumptions: The dev server starts on localhost:3000. All images exist in public/Images/. No authentication or backend services needed.
- Unknowns/blockers: None known at this time

## Constraints and non-goals
- Preserve: Existing design language, typography (Inter + Bodoni_Moda), color palette, scroll-driven animations, component architecture
- Must not change: Brand identity, content, route structure, core animations
- Protected/high-risk paths: Scroll-driven animation CSS (complex view-timeline animations)
- Out of scope: Backend changes, new features, design system overhaul
- Test safety boundaries: No production forms, no external API calls, no mutations

## Route and viewport coverage
- Route inventory: `route-matrix.csv`
- Route count: 1
- Meaningful state count: 1 (default/populated)
- Required screenshot combinations: 1 route × 1 state × 3 viewport profiles = 3 baseline + 3 final = 6 minimum, plus fix evidence
- Exclusions/blocked routes and reasons: None

## Acceptance contract
| ID | Required outcome or constraint | Observing gate | Status |
|---|---|---|---|
| R1 | Every in-scope route/state is inventoried | G1 | ACTIVE |
| R2 | Every page receives source review and all High/Medium/Low findings are resolved or explicitly blocked | G2 | ACTIVE |
| R3 | Every route/state is screenshot-tested at mobile, tablet and desktop-wide sizes | G3 | ACTIVE |
| R4 | Each fix has before/after evidence and affected breakpoints are retested | G4 | ACTIVE |
| R5 | Functional, runtime and technical regression checks pass | G5 | ACTIVE |
| R6 | Final report matches current evidence and open limitations | G6 | ACTIVE |

## Task breakdown
| Task | Deliverable | Owns (exact repository-relative paths) | Depends on | State |
|---|---|---|---|---|
| T01 | Complete audit and repair of home page | app/page.tsx, app/layout.tsx, app/globals.css, components/site/*, components/ui/*, tailwind.config.ts | none | READY |

## Implementation sequence
1. Inspect project and enumerate routes/states → verify G1.
2. Create plan, gates and evidence structure before application writes/build → verify G1.
3. Review all pages and shared components; record every finding → verify G2.
4. Fix High, then Medium, then Low issues; rerun source checks after each phase → verify G2/G5.
5. Capture browser baseline at every required route/state/viewport → verify G3.
6. Repair every visual/responsive defect and capture before/after screenshots for each fix → verify G4.
7. Run final full screenshot matrix, interactions, runtime and technical regression checks → verify G3/G5.
8. Reconcile all requirements and publish the evidence-based report → verify G6.

## Decisions and revisions
- 2026-11-24 — Initial plan created for single-page Nail Studio site