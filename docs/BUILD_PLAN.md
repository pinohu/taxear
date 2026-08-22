# Build plan — all remaining work

Written 18 August 2026, at 36 of 360 topics. This is the plan of record for finishing the
site. `docs/STEP5_PLAN.md` remains the short-horizon work order — what the next session
picks up; this document is the shape of the whole job and the reasoning behind the order.

Everything here is measured from the repository, not estimated:

| Measure | Value |
|---|---|
| Topics written / total | 36 / 360 |
| Median page length | 1,783 words |
| Authorities opened per page | 5.4 |
| Distinct figures referenced per page | 3.5 |
| Figures in `figures.json`, all verified | 117 |
| Question bank tagged | 149 / 600 |
| **Question bank tagged, Parts 1 and 2** | **0 / 400** |

## The three findings that shape the order

**1. The tagger is a hard blocker on 239 pages, and nothing has hit it yet.**
Rule 6 requires every page to be checked against its bank questions. The tagger maps
questions to outline codes, and it currently has **no rules for Parts 1 or 2** — 400 of the
600 questions are untagged. Writing Part 1 without extending it means either skipping rule 6
on 120 pages or hand-searching the bank 120 times. This is Phase 0 work and it is cheap
relative to what it unblocks.

**2. Figures should be verified per source, not per page.**
Part 3 is procedural and figure-light: 117 figures across 36 pages. Parts 1 and 2 are
figure-dense — brackets, standard deduction, every credit phase-out, contribution and
compensation limits, mileage, depreciation. **Rev. Proc. 2025-32 alone carries 63 numbered
inflation-adjusted items**, several of which (the rate tables) contain dozens of values.
Opening it once and extracting the whole Part 1 base in a single pass costs one reading;
opening it per page costs 120. The same holds for Pub. 17, Pub. 334 and Pub. 535.

**3. Batching by shared authority is the throughput lever, and it is large.**
At 5.4 authorities per page, source-opening dominates. Where a batch shares its sources the
marginal cost of each page after the first collapses — writing 3.1.4.c through 3.1.4.g
together reused one reading of Reg. § 1.6695-1 across four pages. The outline already groups
by subject, so **the section is the natural batch unit**, and sections should be finished
rather than sampled.

## Phase 0 — Unblock. Before any more pages.

| # | Work | Why it comes first |
|---|---|---|
| 0.1 | **Extend `scripts/tag_questions.mjs` to Parts 1 and 2.** Add rules for the 26 untouched sections; pin each with a test in `test/tag_questions.test.mjs`, as the existing rules are. Target: the 400 untagged questions substantially covered, with `bogusRuleCodes()` still empty. | Rule 6 cannot be honoured on 239 pages without it |
| 0.2 | **Fix the one known mis-tag rule.** "incompeten*" reaches 3.1.3.a from durable power-of-attorney questions. Narrow the rule, do not retag the question. | Already found; will recur across Part 1 as rules multiply |
| 0.3 | **Finish tagging Part 3.** 51 questions still untagged. | Cheap now, and it validates the rule-writing approach before scaling it |
| 0.4 | **Batch-verify the Part 1 figure base** from the current Rev. Proc. in one pass — rate tables, standard deduction, credit amounts and phase-outs, AMT exemptions, retirement and HSA limits, mileage. Record each with its source and today's date. | One reading instead of 120 |
| 0.5 | **Agree a publishing cadence** (owner). Reviewing 360 pages one at a time will not happen. Proposal: publish **by section**, once every page in it is at `review` and `verify` is clean. | Nothing is indexed until this starts; the site is invisible meanwhile |

## Phase 1 — Finish Part 3. 85 topics.

Ordered by how much authority each batch shares, densest first. Every batch is a whole
section, so the `related[]` graph closes as it goes.

| Order | Section | Topics | Principal sources — open once per batch |
|---|---|---|---|
| 1 | **3.1.2** Requirements for Enrolled Agents | 16 | Circular 230 subpart B in full (§§ 10.20–10.38), plus § 10.6 for CE and enrollment |
| 2 | **3.2.5** Legal authority and references | 8 | IRM 4.10.7; Pub. 1; the authority hierarchy itself — IRC, Regs, rulings, procedures, PLRs, case law, treaties |
| 3 | **3.4.3** Electronic filing, remainder | 8 | Pub. 3112, Pub. 1345, Form 8879 and 8453 instructions |
| 4 | **3.2.1** Power of attorney, remainder | 7 | Form 2848 and 8821 instructions; Pub. 947; Pub. 216; Reg. § 601.50x |
| 5 | **3.3.3** Audits and examinations | 8 | IRM 4.10; IRC § 7525, §§ 7602–7605; Pub. 556 |
| 6 | **3.2.6** Related issues, remainder | 8 | FOIA 5 USC 552; IRC § 7803(c) TAS; identity theft guidance; IRC § 7525 |
| 7 | **3.2.2 / 3.2.3 / 3.2.4** Case-building, finances, documentation | 15 | Collection Financial Standards; Form 433 series; bankruptcy discharge under 11 USC 523(a)(1); e-Services transcripts |
| 8 | **3.3.4** Appeals | 5 | IRM 8.1 and 8.6; Pub. 5; Pub. 556; IRC § 6212 |
| 9 | **3.3.2** Interest abatement, remainder | 3 | IRC §§ 6404(e), 6601, 6621, 6622 |
| 10 | **3.3.1** Collection, remainder | 3 | IRC § 6161 and Form 1127; IRC §§ 6901, 6903 decedents; IRC §§ 7602–7610 summons |
| 11 | **3.4.1 / 3.4.2** Accuracy and record maintenance | 4 | Circular 230 § 10.22; IRC § 6001; Pub. 4557 data security |

**Two flags carried into this phase.** The correspondence / office / field examination
taxonomy is tested by two bank questions and was deliberately **not asserted** on any page
because IRM 4.10 has not been opened — batch 5 must open it before stating it. And
`penalties-subject-to-abatement.md` cites IRC § 6664 without listing it in `authorities[]`;
fix it when batch 9 touches that section.

## Phase 2 — Annual refresh gate. October–November 2026.

`docs/ANNUAL_REFRESH.md` runs when the IRS publishes the inflation adjustments for the
coming year. **This gate is why the figure-heavy parts come after it, not before.**

Every figure now in the repository is verified against tax year 2026. A Part 1 written in
September would have its several hundred figures verified against TY2026 and then
re-verified weeks later against TY2027 — the same work twice, on the largest figure set in
the project. Finishing Part 3 first is nearly free by comparison: it is figure-light, and
most of its 117 figures are statutory rather than indexed.

If the build reaches this gate mid-Part-3, run the refresh across what exists and continue.

## Phase 3 — Part 1, Individuals. 120 topics.

Batched by section; every batch opens its sources once. Order runs foundation-first, because
later sections cite earlier ones.

| Order | Sections | Topics | Principal sources |
|---|---|---|---|
| 1 | 1.1.1 Preliminary work | 17 | IRC §§ 1, 2, 63, 151–152; Pub. 17; filing status and dependency rules |
| 2 | 1.2.1 Income · 1.2.4 Adjustments | 20 | IRC §§ 61–90, 101–140; §§ 62, 219, 223; Pub. 525 |
| 3 | 1.2.2 Retirement income | 13 | IRC §§ 401–409, 72, 408; Pub. 575, Pub. 590-A/B |
| 4 | 1.2.3 Property | 11 | IRC §§ 1001–1016, 1031, 1221–1223, 121; Pub. 544, Pub. 551 |
| 5 | 1.3.1 Itemized and QBI · 1.3.2 Credits | 16 | IRC §§ 161–224, 199A; §§ 21–36; Pub. 502, 526, 936 |
| 6 | 1.4.1 Taxation | 12 | IRC §§ 1, 55–59, 1411, 6654; Pub. 505 |
| 7 | 1.5.1 Advising the individual | 15 | Cross-cutting; largely built from sections already written |
| 8 | 1.6.1–1.6.3 Estate, gift, international | 16 | IRC §§ 2001–2058, 2501–2524, 6018; FBAR, FATCA, Forms 3520, 5471, 8938 |

## Phase 4 — Part 2, Businesses. 119 topics.

| Order | Sections | Topics | Principal sources |
|---|---|---|---|
| 1 | 2.1.1 Entities · 2.1.4 Forming a corporation | 18 | Reg. § 301.7701-1 to -3; IRC §§ 351, 358, 362, 1244 |
| 2 | 2.1.2 Partnerships | 11 | IRC §§ 701–761; Pub. 541 |
| 3 | 2.1.3 Corporations · 2.1.5 S corporations | 16 | IRC §§ 301–385; §§ 1361–1379; Pub. 542 |
| 4 | 2.2.1 Income · 2.2.2 Expenses and credits | 19 | IRC §§ 162, 163, 167–168, 179, 195, 274; Pub. 535 |
| 5 | 2.2.3 Assets · 2.2.4 Financial records | 14 | IRC §§ 1231, 1245, 1250; Pub. 946 |
| 6 | 2.2.5 Advising the business taxpayer | 13 | Cross-cutting |
| 7 | 2.3.1–2.3.5 Specialised returns | 28 | Subchapter J; §§ 501–530; §§ 401–420; Sch. F; §§ 469, 280A |

## Running alongside, not after

| Work | Cadence |
|---|---|
| **Glossary** at `/glossary/` | Lift terms as pages are written, link both ways. Never a retro-fit pass — its value is sourced definitions gathered while the source is open |
| **`private/discrepancies.md`** | Per page, per rule 6. It has already caught four real omissions and one of my own errors; it is the project's quality record |
| **`/changes/`** | Dated `changelog` entries whenever a page states something that changed |
| **`docs/PROGRESS.md`** | `npm run progress` on every commit; CI fails when stale |

## Still owned by you

| Item | Where |
|---|---|
| Cloudflare Pages project, DNS, `www` redirect | `docs/LAUNCH.md` §§ 1–3 |
| Search Console and Bing verification | `docs/LAUNCH.md` § 4 |
| Analytics and the email digest decision | `docs/LAUNCH.md` §§ 5–6 |
| **Moving pages to `published`** | `docs/VERIFICATION.md`. No session will do this |
| Self-hosting the fonts | `docs/LAUNCH.md` § 7 — needs the woff2 files |
| `/ea-exam/` sourced pass | Testing vendor changed during 2026; the current page may describe a format that no longer exists |

## Risks, and what each one costs

| Risk | Consequence | Handling |
|---|---|---|
| Writing Parts 1–2 before extending the tagger | Rule 6 silently skipped on 239 pages, or 120 hand-searches | Phase 0.1 is a prerequisite, not a nicety |
| Writing figure-heavy parts before the annual refresh | Several hundred figures verified twice | Phase 2 gate |
| Sampling topics across sections instead of finishing sections | `related[]` warnings accumulate; sources reopened repeatedly | Batch = whole section |
| Publishing left to the end | Nothing indexed for the life of the build | Publish by section from Phase 1 |
| A source that cannot be opened | A page that cites what was not read | Rule 1: leave it unwritten and note why. Already applied — Form 872 has no public IRS page and its entry says so |
| Bank questions treated as authority | Pages corrected toward wrong law | `private/discrepancies.md` names each one and says not to |

## Definition of done

A page: `verify` passes; every authority opens; every figure carries a verified date; the
scenarios and questions are original; the bank questions for that code reconcile or are
logged; `related[]` closes both ways; status `review`; `docs/PROGRESS.md` regenerated;
committed.

A section: every page in it done; the glossary terms it introduced are linked both ways;
ready for the owner's publish gate.

The site: 360 topics at `published`, every figure verified against the current tax year, the
glossary complete, `/ea-exam/` sourced, fonts self-hosted, DNS and Search Console live.
