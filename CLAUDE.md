# TaxEar — working rules

Reference site on federal tax law and IRS procedure, structured on the IRS Special
Enrollment Examination outline: 3 parts, 13 domains, 44 sections, 360 topics. Astro 5
static site, deployed on Cloudflare Pages. Owner and editor: Ike Ohu (`pinohu`).

Read `docs/PAGE_TEMPLATE.md` and `docs/VERIFICATION.md` before writing any page.
`docs/STEP5_PLAN.md` is the current work order.

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
3. **Figures are never inline.** Every dollar amount, rate, threshold, or count in the
   editorial voice lives in `src/data/figures.json` with a `source` and a `verified` date,
   referenced as `{fig:key}`. Verify each figure against the current Rev. Proc., statute,
   or IRS page and record the date you opened it. Never copy a previous `verified` date
   forward. Invented amounts inside scenarios and practice questions stay inline — that is
   the one exception, and `verify` knows about it.
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
8. **Design.** Keep the tokens: navy `#0E2340`, gold `#C8A24A`, Source Serif 4 / Public
   Sans / IBM Plex Mono, authority rail. Improve, don't restyle. Responsive, visible
   keyboard focus, reduced motion respected. Screenshot it and look before calling layout
   done. Note `--gold-text` exists for small gold text on light backgrounds; plain
   `--gold` fails AA below ~14px.
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

32 topic pages at `review`, 328 at `stub`, none at `published` — only the owner publishes.
17 form entries and 7 notice entries at `review`. **Every key in `figures.json` carries a
`verified` date against a source that was opened that day**, so no page is blocked on a
figure. Sections 3.1.1, 3.1.3 and 3.1.4 are complete.

`docs/STEP5_PLAN.md` is the running work order: what is written, what comes next, and the
bank question IDs per code. `private/discrepancies.md` is the log of every §4 check run so
far — which bank questions are wrong on the law, which are merely dated, and which page
gaps are still open. **Read it before "correcting" a page toward the bank**; several
questions test regimes that have since been retired, and the log says so explicitly.
