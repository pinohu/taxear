# Topic page template

Every topic page follows this shape so verification is repeatable and readers learn where things live.
Sections in **bold** are required. Keep the frontmatter accurate; the site renders the authority rail and
the verification stamp from it, and unpublished pages are noindexed automatically.

```
---
title: "Offer in compromise"                # what a practitioner would call it
code: "3.3.1.c"                              # IRS SEE outline code (do not change)
part: 3
domain: "Specific Types of Representation"
section: "Representing a taxpayer in the collection process"
description: "150–170 characters. Plain statement of what the page answers."
status: published                            # stub | draft | review | published
taxYear: 2026                                # tax year the figures were verified for
lastReviewed: "2026-08-17"
reviewedBy: "N. O."
authorities:
  - { type: IRC, ref: "§ 7122", title: "Compromises" }
  - { type: Reg, ref: "301.7122-1" }
  - { type: IRM, ref: "5.8.1", title: "Offer in Compromise, Overview", url: "https://www.irs.gov/irm/part5/irm_05-008-001" }
  - { type: Form, ref: "656" }
forms: ["656", "433-A (OIC)", "433-B (OIC)"]
related: ["3.3.1.b", "3.2.3.a"]
changelog:
  - { date: "2026-08-17", summary: "Initial publication." }
newsQuery: "offer in compromise"             # optional — see docs/NEWS_TRACKING.md
---
```

`newsQuery` is optional and rare: a short phrase, run live client-side against the Federal
Register's public API scoped to the IRS, rendered as a plain list of dated links with no
synthesized commentary. Add it only where recent rulemaking or notices genuinely track this
topic — most pages won't have one. See `docs/NEWS_TRACKING.md` for the design rationale.

## Body, in order

1. **The rule** — two to four paragraphs. What it is, who it applies to, the outcome. Cite the authority in
   the sentence that relies on it, in parentheses: `(IRC § 7122(a))`, `(Reg. § 301.7122-1(b)(1))`,
   `(Circular 230 § 10.22)`. Every factual claim must trace to something in the `authorities` list.
2. **Current figures** — a short table where the topic has dollar amounts, rates, or thresholds. Values are
   pulled from `src/data/figures.json` with the `{fig:key}` token, never typed inline, e.g.
   `The application fee is {fig:oic.application_fee}.` Missing keys render red on the page.
3. **How it works in practice** — the procedure: forms, sequence, deadlines, what the IRS does in response.
4. **Scenarios** — two to four original, realistic scenarios in `<div class="scenario">` blocks, each with an
   `<h3>` title, the facts, the analysis, and the outcome. Names and numbers are invented; the law is not.
5. **Traps and practitioner notes** — `<div class="callout trap">` blocks. What people get wrong, IRS
   positions, interactions with other rules.
6. **How this has changed** — history and recent changes in prose. Anything material also goes in
   `changelog` with a date so it appears on /changes/.
7. **Exam focus** — one short paragraph: what the SEE tends to test on this outline item.
8. **Strategy notes** (optional) — `## Strategy notes`, added only where the topic has a genuine
   planning dimension (an election, a timing choice, a structuring option), never forced onto a
   purely compliance-mechanical topic. Educational and illustrative only: "here is how this
   generally works and who tends to benefit," never "you should" or "consider doing X" aimed at
   the reader's own facts — that crosses from explaining the law into individualized advice, which
   the site's About page explicitly disclaims. Original hypothetical numbers only, same voice and
   invented-amounts rule as scenarios. If a page has this section, it should also carry 1–2
   scenarios that show the planning choice actually playing out, typed `interaction` or `boundary`
   as fits.

Do not add: content from any commercial study guide, quotations longer than a sentence from anything but
statute or regulation, or "current as of" claims that are not backed by `taxYear` and `lastReviewed`.

## Original practice questions

Add up to five original questions at the end under `## Check yourself`, each as a bold question,
four options, then the answer and a one-line reason. They must be written from the page's own scenarios,
not adapted from any published bank.
