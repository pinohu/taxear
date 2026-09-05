# TaxEar — working rules

Reference site on federal tax law and IRS procedure, structured on the IRS Special
Enrollment Examination outline: 3 parts, 13 domains, 44 sections, 360 topics. Astro 5
static site, deployed on Cloudflare Pages. Owner and editor: Nnamdi O. (`pinohu`).

Read `docs/PAGE_TEMPLATE.md` and `docs/VERIFICATION.md` before writing any page.
`docs/BUILD_PLAN.md` is the plan of record; `docs/STEP5_PLAN.md` is the current work order.

## The rules that do not bend

1. **Primary sources, actually opened.** Every rule statement cites the controlling
   authority in-line — IRC §, Treas. Reg. §, Circular 230 §, IRM — and that authority is
   listed in the page frontmatter *and was opened and read for this page*. Publications
   support procedure; the Code and Regs control substance. **If you cannot open the
   source, do not make the claim.** A search-engine summary is not the source. Recalling
   it from training is not the source.
2. **Copyright.** No text, question, scenario, or explanation from any commercial study
   guide — including `private/questions.json` — ever appears on the site. Scenarios and
   practice questions are always original. The IRS outline, IRC, Regs, IRM, Circular 230,
   and IRS publications and forms may be cited and quoted briefly.
3. **Figures are never inline.** Every dollar amount, threshold, or count in the editorial
   voice lives in `src/data/figures.json` with a `source` and a `verified` date, referenced
   as `{fig:key}`. Verify each figure against the current Rev. Proc., statute, or IRS page
   and record the date you opened it. Never copy a previous `verified` date forward. A rate
   or percentage fixed directly by the Code — the 110/100 percent §6654 safe harbor, the
   5 percent and 0.5 percent §6651 additions, the 3.8 percent NIIT, the 20 percent QBI
   deduction, and the like — stays inline, cited to its section: only Congress can move it,
   so there is no annual verification to date. Before leaving one inline, check that it
   is not one of the rare rates the IRS itself adjusts (e.g. the standard mileage rate) —
   those still take a `{fig:}` token like any other indexed figure. Invented amounts inside
   scenarios and practice questions stay inline too — the one exception for dollar figures
   — and `verify` knows about both exceptions.
4. **Currency.** Check each topic against post-2024 legislation and the current year's
   inflation adjustments before publishing. Tax year 2026 is the default; note where 2025
   differs. Material changes get a dated `changelog` entry so they appear on `/changes/`.
5. **Status discipline.** `stub → draft → review → published`. Only `published` is indexed
   and only `published` enters the sitemap. **You may move a page to `review`; only the
   owner moves it to `published`.** Never change a status to make a count look better.
6. **Test cases.** For each page, find the `private/questions.json` items for that outline
   code, confirm the finished page yields the right answer with the right reasoning, and
   log anything that does not reconcile in `private/discrepancies.md` — page wrong, fix the
   page; bank dated or imprecise, note it. Nothing from that check reaches the site.
7. **No generated content at runtime.** Every page is a reviewed commit. Never build an
   "generate an article" feature.
8. **Design.** `DESIGN.md` is the constraints file and governs — read it before touching
   a stylesheet. Six colour roles on onionskin `#F7F7F4` with one accent, the printing red
   `#8C1D18`; two families only, Source Serif 4 for text and display, IBM Plex Mono for
   apparatus; hairlines instead of boxes; radius cap 2px. No second accent, no gradients,
   no card grids as a default. The signature move is the live figure citation — every
   number opens its own source and verification date. Responsive, visible keyboard focus,
   reduced motion respected. Screenshot it and look before calling layout done, and measure
   contrast on the composited render rather than by eye.
9. **Commits.** Small, one concern each, descriptive. Run `npm test && npm run build &&
   npm run verify` before every one. Never commit `private/`, `dist/`, `node_modules/`,
   `.env`.

## Commands

```sh
npm ci                      # install (Node 22, pinned in .nvmrc)
npm run dev                 # local server
npm run build               # static build into dist/
npm test                    # parsers, tag rules, sitemap filter
npm run verify              # template + figure provenance + link graph, on review & published
npm run progress            # regenerate docs/PROGRESS.md   (-- --check fails when stale)
npm run tag                 # map bank questions to outline codes
npm run tag -- --code 3.2.6.a   # question IDs for one topic
npm run scaffold            # stub files for topics with no page (never overwrites)
```

CI runs `npm ci → test → build → verify → progress --check` on every push, and fails if
anything under `private/` is ever tracked.

## Writing a page

Body order is fixed by `docs/PAGE_TEMPLATE.md`: the rule (cited) → current figures table
→ how it works in practice → 2–4 original scenarios in `<div class="scenario">` with an
`<h3>` each → traps in `<div class="callout trap">` → how this has changed → exam focus →
3–5 original "Check yourself" questions. Target 1,400–2,500 words; depth over length.
`verify` enforces the shape, the word target, the 150–170 character description, dated
changelogs, `related[]` in both directions, and that every figure carries a verified date.

Definition of done for a page: `verify` passes, every authority link opens, every figure
has a verified date, scenarios and questions are original, the bank questions for that
code reconcile or are logged, status set to `review`, `docs/PROGRESS.md` regenerated,
committed.

## Layout

- `src/data/topics.json` — the outline. The site skeleton and master checklist. **Do not
  restructure it.**
- `src/data/figures.json` — every tax-year figure, with source and verified date.
- `src/content/topics/**` — one Markdown file per topic; path = URL.
- `src/content/forms/`, `src/content/notices/` — directory entries, linked back to topics.
- `scripts/` — `verify_pages.mjs`, `progress.mjs`, `tag_questions.mjs`, `remark-figures.mjs`,
  `sitemap-exclude.mjs`, `run_tests.mjs`.
- `private/` — gitignored, never published, never quoted. The purchased question bank and
  the discrepancy log.
- `docs/` — template, verification checklist, progress table, work order, launch runbook,
  annual refresh.

## Where the project stands

**All 360 topic pages are `published`**, along with 44 form entries and 7 notice entries;
the owner approved the last of the review queue in August 2026, and every page's
authorities were opened between 18 and 21 August. That means the 120-day review window
closes for the whole site at once in mid-December: `docs/ANNUAL_REFRESH.md` staggers it.

**Every key in `figures.json` carries a `verified` date against a source that was opened
that day** — 2,488 keys — so no page is blocked on a figure. The Phase 0 tagger covers
all three parts: bank coverage is 465 of 600 questions, and the 135 left untagged are
deliberate, not missed.

The work now is the revenue build in `docs/REVENUE_BUILD.md`: the paid Study product
rebuilt on the pages' own questions, and a Practitioner tier that alerts subscribers when
a rule they follow changes. Both leave every reference page free.

A published page does not render `related[]` links to pages that are still stubs, so the
frontmatter can carry the full graph while the reader only ever sees live links. Publishing
a counterpart makes its inbound links appear on their own. `lastReviewed` is the day the
page's authorities were opened, never the day approval came in — do not restamp it on a
status change.

`docs/BUILD_PLAN.md` is the plan of record for all remaining work — phases, batching and
the Phase 0 tagger and figure work that gates Parts 1 and 2. `docs/STEP5_PLAN.md` is the
running work order: what is written, what comes next, and the bank question IDs per code. `private/discrepancies.md` is the log of every §4 check run so
far — which bank questions are wrong on the law, which are merely dated, and which page
gaps are still open. **Read it before "correcting" a page toward the bank**; several
questions test regimes that have since been retired, and the log says so explicitly.
