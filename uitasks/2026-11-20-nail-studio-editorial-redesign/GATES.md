# Acceptance Gates — Nail Studio Editorial Redesign

**Task:** 2026-11-20-nail-studio-editorial-redesign
**Contract revision:** 1
**Status legend:** `PASS` (current evidence), `FAIL`, `BLOCKED`, `NOT RUN`.
A gate is only `PASS` with evidence recorded in the Evidence column.

## A. Contract gates (root)

| ID | Outcome | Gate | Evidence | Status |
| --- | --- | --- | --- | --- |
| G1 | Complete route | `/` renders header, hero, ticker, manifesto, services index, manicure chapter, pedicure chapter, nail-art chapter, reviews, studio strip, contact, footer — in that order, with no missing section | Browser DOM audit at 1440: 12 blocks in order (header, hero, ticker, manifesto, `#services`, `#manicure`, `#pedicure`, `#nail-art`, `#reviews`, studio strip, `#contact`, footer); one `h1`; `evidence/final-1440-reduced.png` | PASS |
| G2 | Cohesive visual system | New palette/type/spacing tokens applied across every new section; no legacy gradient-clipped headings or pink body gradient remain in the rendered page | Computed styles: body `rgb(250,248,244)`, `background-image: none`; 0 elements with `background-clip: text`; 0 gradient backgrounds; Bodoni Moda on `h1`; `--wine: 351 55% 30%`; `evidence/final-1440-*.png` | PASS |
| G3 | Real content integrity | Every review quote/name matches its source screenshot; no invented price, hours, rating, staff or claim | OCR (tesseract) of all 51 `public/Images/feedback/*`; 9 published reviews matched verbatim against source images 1, 6, 12, 20, 21, 24, 28, 43, 51 (names incl. diacritics, punctuation, emoji). 7 discrepancies found and fixed in `lib/site.ts` (see evidence log). No price/hour/rating/staff claims in `components/site/**` | PASS |
| G4 | Native-CSS motion | No scroll listeners, rAF loops or JS animation libraries in new route code; scroll-driven effects use `animation-timeline` | Grep over `components/site`, `app/page.tsx`, `app/layout.tsx`, `lib/site.ts`: no `addEventListener`, `requestAnimationFrame`, `framer-motion`, `useScroll`, `useInView`, `IntersectionObserver`, `setTimeout`, `setInterval`. `globals.css` drives motion with `animation-timeline: view()` / `scroll()` / `--pan` | PASS |
| G5 | Motion coverage | Every section has an explicit motion decision recorded in `PLAN.md` §6 and is implemented as specified | DOM audit: header transitions only; hero 5 hero hooks; manifesto 4 `data-reveal`; services 2 reveals + hover; `#manicure [data-pan="forward"]`; pedicure 2 `data-drift`; `#nail-art [data-pan="reverse"]`; reviews 11 reveals; studio strip native snap; contact 2 reveals; footer static. Matches PLAN §6 rows 1–12 | PASS |
| G6 | Reduced motion | With `prefers-reduced-motion: reduce`, all non-essential animation stops and all content is visible/usable | Emulation at 1440: `document.getAnimations()` = 0; 0 hidden reveal elements; pan sticky = false; ticker `animation: none`; galleries remain native scrollers; `evidence/final-1440-reduced.png` | PASS |
| G7 | No-support fallback | Without `animation-timeline` support (or with motion disabled), galleries are usable native scrollers and no oversized blank sections remain | `globals.css`: all animation declarations inside `@supports (animation-timeline: view())` + `@media (prefers-reduced-motion: no-preference)`; pan heights/sticky only inside `@supports` + `min-width: 900px`. Base state is the final visible state (proved by the reduced-motion run, which renders the same static fallback); mobile galleries are `overflow-x: auto` scrollers | PASS |
| G8 | Responsive | 375, 768, 1440, 1960 render without horizontal overflow, clipped content or broken composition | `scrollWidth` vs `innerWidth`: 360/375, 753/768, 1425/1440, 1945/1960 (no overflow at any width). `evidence/final-375.png`, `final-768.png`, `final-1440.png`, `final-1960.png` | PASS |
| G9 | Accessibility | Skip link, landmarks, one `h1`, focus-visible, alt text, pinch zoom enabled, contrast AA | Tab pass: skip link first, then wordmark → nav → phone → Book → hero CTAs → service rows; every stop shows 2px wine outline. Skip link + Enter moves the next Tab into `main`. Landmarks: header/main/footer + 2 navs; one `h1`; all 45 images have alt text; viewport `width=device-width, initial-scale=1` (zoom enabled). Contrast: clay/paper 4.92:1, ink/paper 17.3:1, 65% paper on ink ≈ 7.7:1 | PASS |
| G10 | Type safety | `bunx tsc --noEmit` exits 0 | Command output | PASS |
| G11 | Lint | `bun run lint` exits 0 (0 errors; remaining 29 warnings all pre-existing in untouched legacy files: `components/cc/**`, `components/ui/**`, `lib/utils.ts`) | Command output | PASS |
| G12 | Production build | `bun run build` exits 0 and the route is statically rendered | Build output: 8/8 static pages; `/` static, 186 B / 99.1 kB First Load JS | PASS |
| G13 | Console clean | No errors or hydration warnings on `/` at 1440 and 375 | Production `next start` on :3002: 0 console messages at 1440 and 375. (The only dev-mode errors were MillionLint's telemetry POSTs to :42424, injected by `next.config.mjs` in development only; absent in production) | PASS |
| G14 | Sticky release | Manicure and nail-art pans pin and release without trapping scroll; section heights collapse when motion is off | Scroll samples: manicure track `tx` 0 → -496 → -997 → -1497 → -1998 → -2252, sticky top stays 0 then goes negative after ~1400px; nail-art reverse `tx` -2148 → -1713 → -1169 → -625 → -81 → 0. Under reduce/mobile sticky = false and heights collapse to 979px; `evidence/final-1440-manicure-pan.png`, `final-1440-nailart-pan.png` | PASS |
| G15 | Performance sanity | Animations use transform/opacity/clip-path; no scroll handler; pan tracks are the only `will-change`; hero image prioritised | Keyframes animate only `transform`/`opacity`/`clip-path`/`scaleX`; exactly 2 `will-change: transform` (the pan tracks); hero `fetchpriority="high"`; 11 animation names, all CSS; no scroll handler | PASS |
| G16 | Task docs current | `PLAN.md` and `GATES.md` reflect final implementation and current evidence | This folder; PLAN §5 component list and §6 motion table match the shipped code; gate evidence below | PASS |

## B. Runnable checks

```bash
# types
bunx tsc --noEmit

# lint
bun run lint

# production build
bun run build
```

Success condition: exit code 0. Any warning that is pre-existing in untouched legacy files must be identified as such.

## C. Manual browser checks

1. `/` at 1440×900: full-page screenshot; verify all sections and section order.
2. `/` at 375×812: full-page screenshot; verify no horizontal page scroll (`document.documentElement.scrollWidth <= innerWidth`).
3. `/` at 768×1024 and 1960×1080: composition check.
4. Scroll to `#manicure` and `#nail-art`: confirm sticky pin, horizontal travel, release, and that the next section follows.
5. Emulate `prefers-reduced-motion: reduce`: reload, confirm static galleries, no marquee motion, all content visible.
6. Keyboard: Tab from top — skip link, header nav, CTAs, gallery scrollers, contact links all reachable with visible focus.
7. Console: no errors/hydration warnings.

## D. Evidence log

| Date | Gate | Evidence |
| --- | --- | --- |
| 2026-11-20 | planning | PLAN.md + GATES.md created before any source edit |
| 2026-11-22 | G11 lint | `bun run lint` exit 0, 0 errors, 29 warnings (all legacy). Root cause of the pre-existing failure was a duplicate `eslint-plugin-react-hooks` registration: the plugin was listed in `.eslintrc.cjs` `plugins` while `plugin:react-hooks/recommended` (via `eslint-config-next`) also registered it, and `eslint-config-next` ships its own nested copy of the plugin. Removed the direct plugin entry + extend. Follow-up rule errors fixed in legacy code: `BoxTextReveal.tsx` (floating promises), `boxTextRevealDemo.tsx` (curly-brace presence), `NailCards.tsx` (unused `useCallback`, `consistent-return`), `Reviews.tsx` (index key). `tailwindcss/migration-from-tailwind-2` turned off — obsolete for Tailwind 3.4 and false-positives on `overflow-clip`. |
| 2026-11-22 | G3 content audit | Tesseract OCR of all 51 feedback screenshots, then visual check of images 1, 6, 12, 20, 21, 24, 28, 43, 51. Found and fixed 7 non-verbatim entries in `lib/site.ts`: `Hien Tuyet` → `Hiền Tuyết` and quote emoji `🙏💕💐` → `😂👍👍❤️❤️` with source spacing; `Dionisia Mason` → `Daonia Mason`, `Mrs Christine` → `Ms.Christine`, two hearts → three; `your nail!` → `your nails!`; `Jody Helbert` → `Jody Hebert` with source wording (`a amazing`, `I lived`, lowercase `i`); `wonderful!!!` → `wonderful!!!!`; `us!` → `us.` and added trailing `5⭐`; `Christine` → `Christie`, `best!!` → `best !!`, `nails!` → `nails!!`. Re-read from the rendered DOM: all 9 quotes now match their source images. |
| 2026-11-22 | G1, G2, G5, G8, G14 | Browser pass on the production build (`next start`, :3002). Section order and single `h1` confirmed; no gradients or `background-clip: text`; motion attributes match PLAN §6; overflow-free at 375/768/1440/1960; pan travel and release measured (manicure 0 → -2252, nail-art -2148 → 0). Artifacts: `evidence/final-1440.png`, `final-1440-reduced.png`, `final-1440-hero.png`, `final-1440-manicure-pan.png`, `final-1440-nailart-pan.png`, `final-375.png`, `final-768.png`, `final-1960.png`. |
| 2026-11-22 | G6, G7, G9, G13 | Reduced-motion emulation: 0 animations, 0 hidden reveals, sticky off, ticker static, galleries native scrollers. Keyboard pass: skip link → nav → phone → Book → hero CTAs → service rows, all with 2px wine focus ring. Contrast: clay/paper 4.92:1, ink/paper 17.3:1. Production console: 0 messages at 1440 and 375. |
| 2026-11-22 | G10, G12, G15, G16 | `bunx tsc --noEmit` exit 0; `bun run build` exit 0 (8/8 static, `/` 186 B / 99.1 kB); keyframes only transform/opacity/clip-path, 2 `will-change` pan tracks, hero `fetchpriority=high`; PLAN/GATES reconciled with the shipped code and this evidence log. |
