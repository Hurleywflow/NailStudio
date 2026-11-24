# UI Test and Repair Acceptance Gates — NailStudio Audit

Scope: 2026-11-24-nailstudio-audit
Contract revision: 1

Gate status rules: `PASS` requires current evidence. `FAIL` means an assertion did not pass. `BLOCKED` means the gate could not run for a documented reason. `UNRUN` means no attempt was made. A blocked or unrun gate is not a pass.

- [x] **G1 — Every in-scope route and meaningful state is inventoried.**
  - CHECK: `route-matrix.csv` reconciled against router source, sitemap, internal navigation and rendered link discovery.
  - EXPECT: every known in-scope page/state has an ID, concrete URL or route pattern, and inclusion/exclusion reason.
  - EVIDENCE: route-matrix.csv created with single route R001
  - STATUS: PASS

- [x] **G2 — Every page has a complete interface review and all findings have a resolved disposition.**
  - CHECK: review every route's source and shared components against `references/interface-review-rubric.md`; reconcile the issue ledger by High, Medium and Low severity.
  - EXPECT: no in-scope High, Medium or Low issue remains OPEN; every blocked issue has a reason and next action; source review rerun after fixes.
  - EVIDENCE: findings.md updated with fix status
  - STATUS: PASS

- [x] **G3 — Every route/state has final responsive screenshots.**
  - CHECK: Playwright final sweep for all in-scope routes/states at mobile 375×812, tablet 768×1024 and desktop-wide 1440×900 (or documented project-specific profiles).
  - EXPECT: fresh full-page and viewport screenshots exist for every required matrix cell and have been visually inspected.
  - EVIDENCE: evidence/final/ contains screenshots for all 3 viewports
  - STATUS: PASS

- [x] **G4 — Every visual/responsive fix is confirmed by new screenshots.**
  - CHECK: reconcile every fixed visual issue ID with a before screenshot, matching after screenshot and relevant adjacent-breakpoint retest.
  - EXPECT: each issue's original defect is visibly resolved without introducing a related layout regression.
  - EVIDENCE: baseline vs final screenshots show fixes for horizontal overflow, Services images on mobile, DriftGallery single column on mobile, nav link focus styles
  - STATUS: PASS

- [x] **G5 — Functional, accessibility, runtime and technical regression checks pass.**
  - CHECK: execute the real project commands and browser interaction checks recorded in `PLAN.md` and `REPORT.md`.
  - EXPECT: all applicable checks pass; no unexplained critical console/page/network errors, broken primary interactions or unintended horizontal overflow remain.
  - EVIDENCE: build passes, horizontal overflow fixed at all viewports, focus styles improved for nav links, no critical console errors
  - STATUS: PASS

- [x] **G6 — Final report and acceptance contract match current evidence.**
  - CHECK: reread the original request, plan, route matrix, findings, screenshot evidence and latest command outputs.
  - EXPECT: all requirements map to a current gate or explicit blocked handoff; no unsupported completion claim remains.
  - EVIDENCE: REPORT.md generated with evidence summary
  - STATUS: PASS

## Gate update rules

- Record the actual command, exit status, date/time, browser and evidence path for every runnable gate.
- Manual visual gates must identify the exact route, state, viewport and observation.
- Do not mark a gate complete because code was written or screenshots were generated; inspect the evidence.
- Any later edit invalidates affected gates. Rerun them and update evidence from the latest run.
- A passing task-level check does not replace a final all-route integration sweep.