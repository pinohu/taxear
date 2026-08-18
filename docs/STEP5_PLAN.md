# Work order

Step 5 is complete. This file is the **short-horizon** work order: what the next session
picks up. **`docs/BUILD_PLAN.md` is the plan of record for the whole remaining build** — the
phase order, the batching rationale, and the Phase 0 work that must happen before Parts 1
and 2 begin. Read that first if you are starting a new phase rather than continuing this one.

Regenerate the numbers with `npm run progress`.

## Where the project stands (18 August 2026)

65 topic pages at `review`, 295 at `stub`, none at `published` — the owner publishes, no
session does. 21 form entries and 7 notice entries at `review`. **All 156 keys in
`figures.json` carry a `verified` date against a source opened that day**, so no page is
blocked on a figure. `npm run verify` reports 0 errors.

| Section | Written |
|---|---|
| 3.1.1 Practice before the IRS | **2 / 2** |
| 3.1.2 Requirements for enrolled agents | **16 / 16** |
| 3.2.1 Power of attorney | **11 / 11** |
| 3.1.3 Sanctionable acts | **4 / 4** |
| 3.1.4 Rules and penalties | **7 / 7** |
| 3.2.6 Related issues | 3 / 10 |
| 3.3.1 Collection process | 9 / 16 |
| 3.3.2 Penalties and interest abatement | **5 / 5** |
| 3.3.3 Audits and examinations | **9 / 9** |
| 3.4.3 Electronic filing | 1 / 9 |

Untouched Part 3 sections: 3.2.2 (5), 3.2.3 (5), 3.2.4 (5), 3.2.5 (8), 3.3.4 (5),
3.4.1 (2), 3.4.2 (2). Parts 1 and 2 are entirely unwritten.

**Domain 3.1 is complete — 29 / 29.**

## What has been written

**Domain 3.1 is complete, 29 / 29.** Section 3.1.2 was written in one pass from a
cached copy of Circular 230 subpart B, plus IRC §§ 6109, 6111, 6112, 6662, 6694-6696, 6707,
6707A, Reg. §§ 1.6109-2 and 1.6695-1, 26 CFR §§ 300.5-300.6, and the IRS PTIN and direct-
deposit pages.

| Codes | Pages |
|---|---|
| 3.1.1.a–b | practice before the IRS · who may practice |
| 3.1.3.a–d | disreputable conduct · OPR sanctions · frivolous submissions · fraudulent transactions |
| 3.1.4.a–g | the whole of rules and penalties |
| 3.2.1.a–d | power of attorney: purpose, signature authority, authority granted, limits on signing |
| 3.2.6.a–b | statute of limitations · post-filing correspondence |
| 3.3.1.b–e, i–k, m, o | installment agreements · OIC · CAP · CDP · lien · levy · CNC · collections statute · amended returns |
| 3.3.2.a–b | penalties subject to abatement · basis for abatement |
| 3.3.3.g | CP2000 and correspondence audits |
| 3.3.3.a | IRS authority to investigate |
| 3.3.3.b | limited practitioner privilege — IRC § 7525 |
| 3.3.3.e | steps in the process — the IRS audits page plus IRC § 7521 |
| 3.3.3.c | verification and substantiation — IRC §§ 6001, 274(d), 6201(d) |
| 3.3.3.d | time and place of investigation — IRC § 7605, Reg. § 301.7605-1 |
| 3.3.3.f | RAR and the 30-day letter — Pub. 3498, Pub. 5 |
| 3.3.3.h | explanations of taxpayer options — Pub. 5, IRC §§ 6213, 6673, 7463 |
| 3.3.3.i | taxpayer's burden of proof — IRC §§ 7491, 7454, 6902, Tax Court Rule 142 |
| 3.2.6.j | judicial levels beyond EA representation — Tax Court Rules 24 and 200 |
| 3.4.3.b | e-file mandate and exceptions |

Forms: 2848, 8821, 1040-X, 843, 656, 9465, 12153, 9423, 6118, 8867, 8948, 8944, 8453,
433-A, 433-B, 433-F, 872. Notices: CP14, CP501, CP503, CP504, LT11/Letter 1058,
Letter 3172, CP2000.

**Form 872 is the one entry whose `irsUrl` is not a form page.** The IRS does not publish it
in the public catalogue — it is issued by the examiner — so the entry links IRM 25.6.22 and
says so in its body. Do not "fix" it to a guessed `about-form-872` URL; that page 404s.

**Check scaffolded directory entries against `topics.json`.** The CP2000 notice entry was
seeded pointing at 3.3.3.a, "IRS authority to investigate", when the CP2000 topic is 3.3.3.g.
Others may carry the same kind of error.

## Next: finish the sections already opened

Prefer depth over breadth. Each of these sits beside a page that already exists, so the
`related[]` graph closes as you go and many authorities are already fetched and cached.

| Codes | Why next |
|---|---|
| 3.2.6.c–i | Related issues. Seven topics left, and the section now has three pages to link against |
| 3.4.3.a, c–i | Completes electronic filing, mostly from Pub. 3112 and Pub. 1345 |

### Open item — Tax Court opinion types

The Regular / Memorandum / Summary opinion taxonomy (bank question P3E1Q475) **could not be
sourced**. The Court's Definitions page defines Bench Opinion, Regular Tax Case and Small Tax
Case but not the three opinion types, and the Citation and Style Manual page returned only
navigation. IRC § 7463(b) covers the non-precedential status of small tax case decisions and
that is on 3.2.6.j; the Regular/Memorandum distinction is **not asserted anywhere on the
site**. Before adding it, open the Citation and Style Manual PDF or a Tax Court Reports
pamphlet directly.

### Tax Court Rules are retrievable — noted 2026-08-18

Individual rules are served as per-rule PDFs at
`https://ustaxcourt.gov/files/documents/rule-NNN.pdf`; the combined `Rules.pdf` paths 404.
With the pypdf fix below they extract cleanly. Rule 142 was the source for the default
burden allocation and for the clear-and-convincing standard in fraud cases — which is **not**
in IRC § 7454(a). Cite both.

### IRS publication PDFs now extract — resolved 2026-08-18

Earlier passes recorded that IRS PDFs could not be read in this environment and worked
around it via `irs.gov/instructions/iNNNN` HTML. That was a fixable environment fault, not
an unavailable source. `pip install pypdf` then `pip install --force-reinstall cffi` clears
the `_cffi_backend` failure, after which `PdfReader(...).pages[i].extract_text()` works.
Pub. 5, Pub. 3498, Pub. 3498-A, Pub. 556 and Pub. 1 all extract cleanly. **Re-check any
topic left thin for want of a publication** — Pub. 1660 (collection appeal rights),
Pub. 594, Pub. 947 and Pub. 556 are now all readable.

### The examination taxonomy — resolved 2026-08-18

The long-standing open item is closed. **IRM 4.10.2 returns 404 on irs.gov** and IRM 4.10.1
is "Overview of Examiner Responsibilities," which does not define the examination types.
The correspondence / office / field taxonomy is stated directly on the IRS **"IRS audits"**
page, last reviewed 17 February 2026, which also carries the initial-contact-by-mail rule,
the one-time automatic 30-day extension, the look-back and the three-way conclusion. It is
recorded in `figures.json` as `exam.types`, `exam.lookback`, `exam.mail_extension` and
`exam.record_retention`. Source 3.3.3.c, d, f, h and i from there, not from the IRM.

## Carried forward — content

Recorded in `private/discrepancies.md` when found; each needs a source opened before it goes
on a page.

- **Failure-to-pay accrual stops on payment** (bank P3E2Q562). Follows from § 6651(a)(2)'s
  "during which such failure continues" but 3.3.2.a and 3.3.2.b do not say it in terms.
- **Reasonable-cause worked examples** (bank P3E2Q599). IRM 20.1.1.3.3 carries accepted and
  rejected fact patterns; a short table with the IRM subsection for each would answer a
  question type the pages currently only gesture at.
- **CAP: whether Appeals considers collection alternatives.** Asserted in commercial
  material, not found in IRM 5.1.9 or 8.24, and deliberately omitted from 3.3.1.d. Either
  source it or leave it out.
- **Tagger rule.** "incompeten*" reaches 3.1.3.a from questions about a *durable* power of
  attorney, which is 3.2.1 material. Narrow the rule — do not retag the question — and pin
  it with a test, per the standing practice in `scripts/tag_questions.mjs`.

## Carried forward — site

| Item | State |
|---|---|
| Glossary at `/glossary/` | Not started, deliberately. Its value is sourced definitions; build it alongside pages so terms are lifted and linked both ways as they are written |
| `/ea-exam/` | Needs a sourced pass. Scored-question count, section and break structure, and carryover period are unverified against the current candidate bulletin, and the testing vendor changed during 2026 |
| Self-hosted fonts | `docs/LAUNCH.md` §7. Needs the woff2 files |
| Cloudflare, DNS, search console, analytics, email provider | Owner's accounts. `docs/LAUNCH.md` |
| Repository default branch | Still `claude/taxear-build-handoff-gdzo4x`, not `main` |

## Test cases per code (rule 6)

IDs only; the bank stays gitignored and unquoted. Regenerate with
`npm run tag -- --code <code>`. Results of every check run so far are in
`private/discrepancies.md`, including which bank questions are wrong on the law and must not
be used to "correct" a page.

| Code | Bank IDs |
|---|---|
| 3.1.1.a | P3E1Q401 P3E1Q402 P3E1Q403 P3E2Q573 |
| 3.1.1.b | P3E2Q501 P3E2Q502 |
| 3.1.3.a | P3E1Q433 — mis-tagged, see the log |
| 3.1.3.b | P3E1Q418 P3E1Q421 P3E1Q422 P3E1Q497 P3E1Q499 P3E2Q516 P3E2Q519 |
| 3.1.4.b | 19 questions — the broadest group; most are mis-tagged, read the log first |
| 3.2.1.a | P3E1Q431 P3E1Q490 P3E2Q531 P3E2Q533 P3E2Q535 P3E2Q571 |
| 3.2.1.h | P3E1Q435 P3E2Q534 P3E2Q536 |
| 3.3.1.b | P3E1Q440 P3E2Q540 — **both test the retired streamlined IA regime** |
| 3.3.1.c | P3E1Q500 P3E2Q597 |
| 3.3.1.e | P3E2Q581 |
| 3.3.2.a | P3E1Q463 P3E2Q562 P3E2Q563 |
| 3.3.2.b | P3E2Q564 P3E2Q599 |
| 3.4.3.b | P3E1Q483 P3E1Q487 P3E2Q591 |

Nothing is tagged to 3.2.6.a, 3.1.4.a, 3.2.1.b–d, or 3.3.1.d, and 3.1.4.a's subject is
untested by the bank in either part. That is a property of the tagger and of the bank, not a
reason to skip the check — run it, and record when the bank has nothing to say.

Expect mis-tags. Read the tags for a page before trusting them, and correct the rules rather
than the tags so the fix sticks.

## Open items raised by the 3.1.2 pass (18 August 2026)

Each is logged in `private/discrepancies.md` with the reasoning. None blocks a page; each
needs a source opened before anything is asserted.

- **Form 2848 and the PTIN.** Bank P3E2Q532 states that a representative must have a valid
  PTIN to sign Form 2848. The claim could not be verified — the Form 2848 instructions PDF
  would not extract in this environment — and nothing in Circular 230 or Reg. § 1.6109-2
  imposes it. The IRS PTIN FAQ lists Form 2848 among the forms whose *preparation* needs no
  PTIN. Resolve against the Form 2848 instructions Part II declaration; affects 3.1.1.b and
  the Form 2848 directory entry.
- **Form 8886 / 8886-T categories and the RIC exception.** Bank P3E1Q414 and P3E2Q513 turn
  on the Form 8886 instructions and Reg. § 1.6011-4(b), neither opened. 3.1.2.k rests on the
  statutes only. Resolve when a Form 8886 entry is written.
- **e-file logo advertising rules.** Bank P3E1Q486 (no use with "Federal", the eagle symbol,
  or anything implying an IRS relationship) is consistent with § 10.30(a)(1) but its specific
  terms come from the IRS e-file advertising standards, which were not opened. Neither 3.1.2.d
  nor 3.4.3.b asserts them.
- **Tagger, Phase 0.** No rule maps to 3.1.2.l or 3.1.2.p, and three questions reached the
  wrong code: P3E1Q432 and P3E2Q517 to 3.1.2.h, P3E1Q464 to 3.1.2.i. Narrow the rules; do
  not retag by hand.

## Bank questions found wrong on the law in this pass

Recorded in full in `private/discrepancies.md`. **Do not move a page toward these.**

- **P3E2Q588** — says a disbarred enrolled agent may represent a close family member.
  Circular 230 § 10.7(c)(2)(i) says an individual under suspension or disbarment **may not
  engage in limited practice** under § 10.7(c)(1), and representing an immediate family
  member is § 10.7(c)(1)(i). The correct answer is B, not D.
- **P3E2Q508** — asks which advertisement does *not* violate § 10.30 and answers "Endorsed
  by the IRS," which plainly does. The correct answer is "Enrolled to practice before the
  IRS," one of the three descriptions § 10.30(a)(1) supplies verbatim as acceptable.

## Section 3.2.1 complete (18 August 2026)

All eleven power-of-attorney topics are written. Sources: 26 CFR §§ 601.501–601.509, the
Instructions for Forms 2848 and 8821 (both last reviewed 30 April 2026), Pub. 947, IRC
§§ 6103(c), 7216 and 6713, and Reg. §§ 301.6103(c)-1, 301.7216-3 and 1.6012-1(a)(5).

**Publication currency findings from this section** — both mean a page must not be written
from the publication its topic is named after:

- **Pub. 216 is Rev. 3-92** and its front matter incorporates amendments only through
  56 FR 24001-24009 (28 May 1991). The sections it reprints were amended at 57 FR 27356 on
  **19 June 1992**. The publication predates the last amendment to its own subject matter by
  three months and has not been revised in 34 years. There is no HTML edition. 3.2.1.k cites
  the CFR throughout.
- **Pub. 947 no longer defines "durable power of attorney."** The definition survives in
  **Reg. § 601.501(b)(9)(ii)**, in stronger terms. 3.2.1.f takes it from the regulation.

**Divergence between a regulation and current instructions**, recorded as a figure rather
than resolved silently: the CAF forward-recording horizon is **three years from the date of
receipt** under Reg. § 601.506(d)(3)(ii) (1991) but **three years from 31 December of the
year of receipt** under the current Form 2848 instructions. The instructions are more
generous and are what the IRS applies. See `caf.future_horizon`.

**Tagger coverage across 3.2.1 is poor.** Codes e, f, g and k all return zero tagged
questions, and the §§ 6103(c)/7216 consent machinery is untested by the bank entirely. The
Phase 0 tagger work in `BUILD_PLAN.md` is scoped to Parts 1 and 2; it needs a pass over the
Part 3 rule table as well.

## Build discipline: run `npm run progress` last

`docs/PROGRESS.md` records a **word count per page**, so any edit that changes a page's
length — including the word-trimming pass that brings a page under the 2,500-word cap —
invalidates it. Running `npm run progress` before that last trim leaves the file stale and
`progress --check` fails in CI even though tests, build and verify all pass. Run it as the
**final** step before `git add`, after every content change is settled.

## Section 3.3.2 complete (18 August 2026)

All five penalty-and-interest-abatement topics are written, from IRC §§ 6404, 6511, 6601,
6621, 6622 and 6676, Reg. § 301.6404-2, the Instructions for Form 843 (rev. 12/2024), and
the IRS quarterly interest rates page.

**Findings that shape how these pages read:**

- **Interest and penalties do not share a vocabulary.** Reasonable cause has no application
  to interest. The only ordinary routes are § 6404(e) (unreasonable IRS error or delay in a
  ministerial or managerial act), the § 6404(g) suspension, or correcting the assessment.
- **The § 6404(g) suspension period was 18 months as enacted** by RRA 1998 and is now
  **36 months**. Any material carrying 18 months is eighteen months of interest wrong.
- **The Form 843 instructions add an element the law does not have.** They direct a
  § 6404(e)(1) claimant to explain why failure to abate would be "grossly unfair treatment."
  That phrase is in neither IRC § 6404 nor Reg. § 301.6404-2. Recorded on 3.3.2.e.
- **IRC § 6676's standard moved** from reasonable basis (2007) to **reasonable cause**.

**Rate discipline.** `interest.rates_q3_2026` names the quarter inside the figure value,
because an interest rate without a quarter attached is unusable. The underpayment rate held
at 7% through 2025, **dropped to 6% in Q2 2026 and returned to 7% in Q3** — a multi-year
recomputation must walk the quarters. This key must be re-verified every quarter, not
annually; it is the first figure in the file with a sub-annual life.

**Tagger coverage is zero across all three new codes** (3.3.2.c, .d, .e), and sweeps for
"abate interest", "ministerial", "6404" and "6676" return nothing. Add to the Phase 0 list.
