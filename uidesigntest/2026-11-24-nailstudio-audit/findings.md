# Issue Ledger — NailStudio Audit

Scope: 2026-11-24-nailstudio-audit
Contract revision: 1

| ID | Severity | Route/State | Viewport | Source | Observation | Impact | Repair | Status | Evidence |
|---|---|---|---|---|---|---|---|---|---|
| ISS-001 | High | / (home) | All | app/globals.css:247-261 | Scroll-driven animations use `@supports (animation-timeline: view())` which requires Chrome 115+/Firefox 116+/Safari 16.4+. On unsupported browsers, animations simply don't run but content remains visible. This is acceptable progressive enhancement. | Users on older browsers miss animations but content is accessible | Document as progressive enhancement, no fix needed | OPEN | |
| ISS-002 | Medium | / (home) | Mobile 375×812 | components/site/Hero.tsx:97-110 | Hero image uses `object-[50%_28%]` which may crop important content on very narrow screens | Hero image focal point may be lost on mobile | Test and adjust object-position if needed | OPEN | |
| ISS-003 | Low | / (home) | All | components/site/Ticker.tsx:27-34 | Ticker uses `aria-hidden` on entire marquee, but content is decorative - this is correct | No impact | Confirm correct usage | OPEN | |
| ISS-004 | Medium | / (home) | Tablet 768×1024 | components/site/PanGallery.tsx:70-77 | Gallery scroller uses `w-[68vw]` on mobile, `w-[46vw]` on sm, `w-[32vw]` on md, `w-[36vh]` on lg, `w-[38vh]` on xl - may have sizing issues at tablet breakpoint | Cards may be too wide or narrow at tablet | Test at 768px and adjust | OPEN | |
| ISS-005 | Medium | / (home) | All | components/site/DriftGallery.tsx:51-66 | DriftGallery uses fixed 2-column grid with gap-3/gap-4 - images may be too small on mobile | Images may be too small to appreciate on mobile | Test and consider single column on mobile | OPEN | |
| ISS-006 | Low | / (home) | All | components/site/StudioStrip.tsx:27-35 | StudioStrip gallery scroller has similar responsive widths to PanGallery - needs verification | Cards may not size optimally | Test and verify | OPEN | |
| ISS-007 | Medium | / (home) | Mobile | components/site/Services.tsx:53-61 | Services section images are hidden on mobile (`md:block`) - mobile users don't see service images | Mobile users miss visual context for services | Consider showing images on mobile with different layout | OPEN | |
| ISS-008 | Low | / (home) | All | components/site/SectionLabel.tsx | Need to verify SectionLabel component for accessibility and styling | Unknown | Review component | OPEN | |
| ISS-009 | Medium | / (home) | All | app/layout.tsx:114-120 | Skip to content link uses `-translate-y-24` to hide, `focus-visible:translate-y-0` to show - should verify it works correctly | Keyboard users may not see skip link | Test keyboard navigation | OPEN | |
| ISS-010 | Low | / (home) | All | components/ui/sheet.tsx | MobileNav uses Radix Sheet - need to verify focus trapping, escape key, and accessibility | Mobile menu accessibility | Test mobile nav | OPEN | |
| ISS-011 | Low | / (home) | All | components/ui/button.tsx | Button component - verify focus states, disabled states, and variants | Button accessibility and styling | Review component | OPEN | |
| ISS-012 | Low | / (home) | All | app/globals.css:89-92 | Focus-visible outline uses `outline: 2px solid hsl(var(--wine)); outline-offset: 3px;` - verify visibility on all backgrounds | Focus indicator visibility | Test on all section backgrounds | OPEN | |
| ISS-013 | Medium | / (home) | Mobile | components/site/Hero.tsx:86-92 | Service tags (Manicure/Pedicure/Nail Art) use `flex-wrap` but may wrap awkwardly on very narrow screens | Tags may wrap poorly | Test at 320px and 375px | OPEN | |
| ISS-014 | Low | / (home) | All | components/site/Reviews.tsx:32-37 | Reviews use 3-column grid on lg, 2 on md, 1 on mobile - verify layout at all breakpoints | Review cards may not flow well | Test responsive grid | OPEN | |
| ISS-015 | Low | / (home) | All | components/site/Contact.tsx:99-119 | Contact map section - verify image loads, alt text, and interaction | Map may not load or be accessible | Test map image and link | OPEN | |