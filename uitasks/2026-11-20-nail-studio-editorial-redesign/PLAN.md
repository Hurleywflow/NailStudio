# Nail Studio — Editorial Redesign & Motion System

**Task ID:** 2026-11-20-nail-studio-editorial-redesign
**Mode:** IMPLEMENT + MOTION (combined)
**Contract revision:** 1 (2026-11-20)
**Repository:** Nail Studio (Next.js 14 App Router, React 18, Tailwind 3.4, shadcn/ui primitives, framer-motion available)

---

## 1. Design Read

- **Page type / surface mode:** Single-route marketing site for a nail salon. **Persuade** (primary) with an **Experience** layer for the work galleries.
- **Audience:** Local Gadsden, AL clients looking for manicure, pedicure and nail-art services; mobile-first discovery, often from Google Maps. Primary action: call the studio.
- **Desired character:** Warm, editorial, quietly luxurious. "Atelier" rather than "beauty template". Ivory paper, oxblood accent, high-contrast display serif, generous negative space, real photography.
- **Main UX priority:** Make the services and the work legible within one scroll, keep a persistent, obvious way to book by phone, and never let motion delay reading or interaction.
- **Design-system foundation:** Existing shadcn/ui primitives and Tailwind tokens are preserved. The palette and type system are re-grounded on the salon's real brand assets (gold crest logo, red/oxblood nail photography).

## 2. Audit summary (current state)

- One route (`/`), one page, composed of 12 independently-built demo-style blocks (`components/cc/**`), many duplicated marquees, carousels and scroll animations.
- Competing motion: aurora, skew marquee, infinite giant text, mouse-following tooltip, three parallax galleries, splide autoplay, embla autoplay, border beam, shimmer button, `whileInView` reveals. Motion density is high and inconsistent.
- Visual language is generic: pink radial gradient body, gradient-clipped headings, three-card carousel, glassy effects.
- Real assets available: 58 manicure, 18 pedicure, 30 nail-art photos; 25 customer photos; 51 Google review screenshots; gold crest logo; contact portrait and map. Existing copy is real and usable.
- Accessibility risks: pinch-zoom disabled (`userScalable: no`, `maximumScale: 1`), moving marquee text, motion with no reduced-motion handling, autoplay carousels, non-semantic headings.
- Build stack is sound: strict TS, ESLint with tailwind/jsx-a11y/type-aware rules, `next build`, images `unoptimized: true`.

## 3. Scope and objectives

### In scope

1. Redesign `/` end-to-end as one art-directed experience: header, hero, ticker, manifesto, services index, three service chapters, reviews, studio strip, contact, footer.
2. Establish a tokenised visual system: colour, type scale, spacing, rules, surfaces, focus states.
3. Establish a tokenised motion system with native CSS as the primary runtime, with `prefers-reduced-motion` and no-support fallbacks.
4. Replace the generic body gradient and gradient-clipped headings with a coherent editorial type/colour system.
5. Fix accessibility defects: enable zoom, add skip link, semantic landmarks/headings, visible focus, decorative content marked `aria-hidden`, readable static fallbacks.
6. Reuse real content and imagery only. No invented reviews, ratings, prices, hours, staff or claims.
7. Update page metadata/OG to the real site (remove empty image URLs) and keep the GTM tags.

### Out of scope / non-goals

- No new routes, CMS, booking backend, e-commerce, or form submission service.
- No new dependencies. `framer-motion`, `embla`, `splide`, `lucide-react`, `next-themes` remain installed; new code uses CSS + existing primitives only.
- No deletion or rewriting of legacy `components/cc/**` demo files (user work). They become unreferenced from the route.
- No invented business facts. Hours and prices are not shown because they are not verifiable in the repo.

## 4. Visual direction

### Palette (semantic tokens)

| Token | Value | Use |
| --- | --- | --- |
| `--paper` | warm off-white `40 40% 97%` | page base |
| `--bone` | `36 30% 93%` | alternate section surface |
| `--ink` | warm near-black `24 15% 8%` | dark sections, text |
| `--wine` | oxblood `351 55% 30%` | accent, links, focus, stars |
| `--clay` | warm grey `28 12% 42%` | secondary text (AA on paper) |
| `--line` | `34 16% 84%` | hairline rules and borders |
| `--blush` | `15 35% 90%` | rare tinted surface |

No gradients as decoration. No glassmorphism. Gold is reserved for the real crest logo.

### Typography

- **Display:** `Bodoni Moda` (next/font, variable `--font-display`), weights 400/500/600 + italic. Fashion-editorial, high contrast.
- **Text/UI:** `Inter` (existing `--font-sans`).
- Fluid display sizes via Tailwind `fontSize` tokens (`display-xl/lg/md/sm`), `eyebrow` (0.6875rem, 0.22em tracking, uppercase), `body-lg`.
- Headings use sentence case, not title case. Body copy max ~68ch. Small caps labels carry section numbering.

### Layout

- Shared `Container`: `max-w-[96rem]`, fluid gutters `clamp(1.25rem, 4vw, 4rem)`.
- 12-column editorial grid on desktop; asymmetric splits (7/5, 5/7), hairline rules between sections, numbered section labels.
- Section rhythm: `py-24 / md:py-32 / lg:py-40`; dark chapters break the ivory run.
- Arched portrait frame in hero; full-bleed galleries; map band.

### Imagery

- Real salon photography only. Curated subsets per chapter (not all 58/18/30).
- Hero: contact portrait with `mix-blend-multiply` on paper so its white studio background dissolves into the page.
- Contact: the dark red-nail close-up, which belongs on ink.
- Reviews: real transcribed Google review text with names as published; no aggregate score invented.
- Customer photos: real, warm-graded, presented as a small honest "in the studio" strip.

## 5. Component architecture

New, route-owned components under `components/site/`:

| File | Responsibility | Client? |
| --- | --- | --- |
| `Container.tsx` | shared max-width/gutter wrapper | no |
| `SectionLabel.tsx` | numbered eyebrow + rule | no |
| `SiteHeader.tsx` | sticky header, wordmark, desktop nav, book CTA | no |
| `MobileNav.tsx` | Radix Sheet mobile menu | yes |
| `Hero.tsx` | hero composition | no |
| `Ticker.tsx` | CSS marquee service strip | no |
| `Manifesto.tsx` | studio statement + image | no |
| `Services.tsx` | three-row service index with hover preview | no |
| `PanGallery.tsx` | sticky horizontal gallery (manicure + nail art variants) | no |
| `DriftGallery.tsx` | two-column scroll-drift gallery (pedicure) | no |
| `Reviews.tsx` | editorial review grid | no |
| `StudioStrip.tsx` | native scroll-snap photo strip | no |
| `Contact.tsx` | ink visit section + map band | no |
| `SiteFooter.tsx` | footer with crest, nav, credit | no |

Shared data in `lib/site.ts` (business facts, services, galleries, reviews, studio photos).
`app/page.tsx` composes sections only. `app/layout.tsx` owns fonts, metadata, body shell. `app/globals.css` owns tokens, primitives and motion utilities.

Reused: `components/ui/sheet`, `components/ui/button` (adapted with classes), `lib/utils` `cn`, existing image assets, existing copy.
No new npm packages.

## 6. Motion thesis

- **Personality:** slow, weighted, editorial. Motion behaves like paper and light, not like a product demo.
- **Focal moment:** the sticky horizontal galleries — the work physically travels past the viewer while the section holds still. One focal moment per service chapter, no competing loops.
- **Supporting motion:** masked line entrances, hairline rules drawing across, image clip reveals, a single service ticker, restrained hover states.
- **Runtime:** native CSS animations, transitions and scroll/view timelines. Zero scroll listeners, zero rAF loops, zero JS animation libraries in new code.
- **Budget:** transform/opacity/clip-path only; no layout or paint-heavy animation; all scroll-driven work compositor-friendly; all motion removed under `prefers-reduced-motion`.

### Per-section motion decisions

| # | Section | Decision | Behaviour |
| --- | --- | --- | --- |
| 1 | Header | Subtle interaction | sticky translucent paper, underline hover, focus rings, no scroll listener |
| 2 | Hero | Animated | load-time masked headline rise, portrait clip reveal, scroll-linked portrait drift, scroll cue |
| 3 | Ticker | Animated | continuous CSS marquee, pause on hover, static under reduced motion |
| 4 | Manifesto | Animated | masked heading + rule draw + image clip reveal; body text readable immediately |
| 5 | Services index | Subtle interaction | hover reveals the service image and shifts the row; arrows nudge |
| 6 | Manicure chapter | Animated (focal) | sticky viewport, horizontal pan driven by `view()` timeline |
| 7 | Pedicure chapter | Animated | sticky copy, two image columns drifting in opposite directions |
| 8 | Nail Art chapter | Animated (focal) | dark full-bleed sticky panorama, reverse pan, overlay title |
| 9 | Reviews | Subtle | staggered card reveals only; static grid, no marquee, fully readable |
| 10 | Studio strip | Subtle interaction | native scroll-snap, hover zoom, edge mask |
| 11 | Contact | Animated | image clip reveal, heading rise, map band hover |
| 12 | Footer | Static by design | no motion beyond link/focus states |

### Motion tokens

`--ease-out: cubic-bezier(.16,1,.3,1)`, `--ease-in-out: cubic-bezier(.65,0,.35,1)`, durations 240/600/1200ms. Motion utilities are `data-reveal`, `data-reveal="mask"`, `data-reveal="rule"`, `data-drift="up|down"`, `data-pan-track`, `data-marquee`.

### Fallbacks

- All animation declarations live inside `@media (prefers-reduced-motion: no-preference)` and, for scroll timelines, inside `@supports (animation-timeline: view())`.
- Base state is the final visible state, so unsupported browsers and reduced-motion users get a complete static page.
- Sticky heights and oversized sections are only applied when the timeline is supported and motion is allowed.
- Mobile galleries are native horizontal scrollers; sticky pan is desktop-only (≥900px).

## 7. Responsive requirements

- 375, 768, 1024, 1440, 1960 widths.
- Mobile: single column, native horizontal scrollers with snap, no sticky pan, ticker remains.
- Tablet: two-column service index, drift gallery, pan enabled only if width ≥900 and pointer is fine? Keep width-based for predictability.
- Desktop: full editorial grid, sticky pans, 12-column alignment.
- No horizontal page overflow; `overflow-x: clip` retained on body; gallery scrollers contained.

## 8. Accessibility requirements

- Restore pinch zoom (`userScalable` removed, `maximumScale` removed).
- Skip link to `#main`.
- One `h1`; ordered heading levels; landmark elements.
- Visible `:focus-visible` ring in wine on all interactive elements.
- All images have meaningful or empty alt text; decorative marquee `aria-hidden`.
- Phone and map links have descriptive accessible names.
- Reduced motion removes all non-essential animation.
- Text contrast: ink/paper, wine/paper, clay/paper ≥ 4.5:1 for body sizes.
- Native scrollers are keyboard reachable with visible focus.

## 9. Performance constraints

- No new JS animation runtime; only `MobileNav` is a client component.
- Animate transform/opacity/clip-path; avoid `background-position`, filters and box-shadow animation.
- `next/image` with explicit `sizes`; hero image `priority`; below-fold lazy.
- No layout shifts: fixed aspect ratios via `aspect-[…]` wrappers.
- `will-change` only on the two pan tracks.

## 10. Implementation sequence

1. Create `uitasks/` plan + gates (this file, `GATES.md`). *(gate-first)*
2. Add design tokens, type scale, base styles and motion primitives (`tailwind.config.ts`, `app/globals.css`).
3. Add fonts, metadata, body shell (`app/layout.tsx`); update loading/not-found to the new system.
4. Add shared data (`lib/site.ts`) and primitives (`Container`, `SectionLabel`).
5. Build header, hero, ticker, manifesto.
6. Build services index and the three chapters (pan, drift, panorama).
7. Build reviews, studio strip, contact, footer.
8. Compose `app/page.tsx`; remove legacy imports from the route.
9. Lint, type-check, build.
10. Browser verification at 375/768/1440/1960, reduced motion, console, scroll/sticky release points; fix defects.
11. Re-run all gates and record evidence in `GATES.md`.

## 11. Dependencies and risks

- **Next/font network:** Google Fonts is reachable (verified 200). If the build environment loses network, `next/font` will fail; fallback stack is declared in Tailwind.
- **Scroll-timeline support:** Chrome/Edge supported; Safari/Firefox may fall back to static. Base state is complete, so this is graceful.
- **MillionLint wrapper** in `next.config.mjs` may slow or instrument builds. Do not remove without evidence; measure the build.
- **Strict ESLint** (`tailwindcss`, type-aware rules): new code must avoid custom classnames and `any`; run lint and fix.
- **Legacy components** remain but are unreferenced; no route-level impact.
- **Asset quality:** customer photos are phone snapshots; used small and warm-graded. Review text is transcribed from real screenshots — must match the screenshots verbatim.

## 12. Verification strategy

- Runnable: `npx tsc --noEmit`, `npm run lint`, `npm run build`.
- Manual/evidence: browser screenshots at 375/768/1440/1960; console check; reduced-motion emulation; sticky pan release points; keyboard focus pass; no horizontal overflow; static fallback with animations disabled.
- Record actual results and any blocked checks in `GATES.md`.
