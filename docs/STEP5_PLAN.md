# Work order

Step 5 is complete. This file is the **short-horizon** work order: what the next session
picks up. **`docs/BUILD_PLAN.md` is the plan of record for the whole remaining build** — the
phase order, the batching rationale, and the Phase 0 work that must happen before Parts 1
and 2 begin. Read that first if you are starting a new phase rather than continuing this one.

Regenerate the numbers with `npm run progress`.

## Where the project stands (19 August 2026)

**131 topic pages at `published`**, 229 at `stub`, none at `review`. The owner approved the
whole review queue on 19 August 2026, so everything written to date is live and in the
sitemap; 21 form entries and 7 notice entries went with it. **All 415 keys in
`figures.json` carry a `verified` date against a source opened that day**, so no page is
blocked on a figure. `npm run verify` reports 0 errors across all 131.

Two things that publication settled, and that the next session should not relearn:

- A published page renders only those `related[]` links whose counterpart is itself
  published (`publishedCodes` in `src/lib.ts`). Keep the full graph in frontmatter — verify
  still enforces it both ways — and the links surface as the counterparts go live.
- `lastReviewed` is the day the page's authorities were opened. It is **not** touched by a
  status change. Restamping it on approval would overstate the currency of the sources.

New pages still land at `review` and wait for the owner. That rule did not change.

| Section | Written |
|---|---|
| 3.1.1 Practice before the IRS | **2 / 2** |
| 3.1.2 Requirements for enrolled agents | **16 / 16** |
| 3.2.1 Power of attorney | **11 / 11** |
| 3.1.3 Sanctionable acts | **4 / 4** |
| 3.1.4 Rules and penalties | **7 / 7** |
| 3.2.6 Related issues | **10 / 10** |
| 3.2.5 Legal authority and references | **8 / 8** |
| 3.2.2 Building the taxpayer's case | **5 / 5** |
| 3.2.3 Taxpayer financial situation | **5 / 5** |
| 3.2.4 Supporting documentation | **5 / 5** |
| 3.3.1 Collection process | **16 / 16** |
| 3.3.2 Penalties and interest abatement | **5 / 5** |
| 3.3.3 Audits and examinations | **9 / 9** |
| 3.3.4 Representing a taxpayer before Appeals | **5 / 5** |
| 3.4.1 Accuracy | **2 / 2** |
| 3.4.2 Record maintenance | **2 / 2** |
| 3.4.3 Electronic filing | **9 / 9** |

# PART 3 IS COMPLETE — 121 / 121 topics, all `published`.

All four domains are finished: 3.1 (29), 3.2 (44), 3.3 (35), 3.4 (13). `verify` reports
0 errors. Parts 1 and 2 are entirely unwritten — 120 and 119 topics respectively.

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
| 3.2.6.e | FOIA requests — 5 U.S.C. § 552, Reg. § 601.702, IRS FOIA guidelines |
| 3.2.6.h | Taxpayer Advocate Service — IRC §§ 7803(c), 7811, the TAS criteria page |
| 3.2.6.f | tax avoidance vs. tax evasion — IRC §§ 7201, 7203, 7206, 7212, 6663, 18 U.S.C. § 3571 |
| 3.2.6.i | identity theft — the IRS IP PIN and identity theft guide pages |
| 3.2.6.g | tax return disclosure statements — Forms 8275 and 8275-R instructions |
| 3.2.6.d | third-party correspondence — IRC §§ 7609 and 7603 |
| 3.2.6.c | deadlines and timeliness — IRC §§ 7502, 7503, 7508A |
| 3.2.5.g | authoritative vs non-authoritative source material — Reg. § 1.6662-4(d)(3)(iii) |
| 3.2.5.b | revenue rulings and revenue procedures — Reg. § 601.601, IRC § 7805 |
| 3.2.5.e | private letter ruling — Reg. § 601.201, IRC §§ 6110, 7528 |
| 3.2.5.a | Code and income tax regulations — IRC § 7805, Reg. § 601.601 |
| 3.2.5.f | Internal Revenue Manual — IRM 1.11.1, IRC § 7811(a)(3) |
| 3.2.5.c | case law — IRM 4.10.7, IRC § 7463 |
| 3.2.5.d | forms, instructions and publications — IRS reliance page, IRM 4.10.7.2.7 |
| 3.2.5.h | tax treaties — IRC §§ 894, 7852(d), 6114, 6712 |
| 3.2.2.d | conflict of interest — Circular 230 §§ 10.29, 10.35, 10.22 |
| 3.2.2.c | competence, expertise and time — Circular 230 §§ 10.35, 10.22, 10.23, 10.36 |
| 3.2.2.b | potential for criminal aspects — IRC §§ 7602(d)–(e), 7525, Circular 230 § 10.21 |
| 3.2.2.e | transcripts and e-Services — IRS transcript types and TDS pages |
| 3.4.3.b | e-file mandate and exceptions |
| 3.2.2.a | identification of tax issues — Circular 230 §§ 10.37, 10.34, 10.22 |
| 3.2.3.e | Collection Financial Standards — IRM 5.15.1.8-.10, 5.14.1.4.1 |
| 3.2.3.a | ability to pay — IRM 5.15.1.3-.4, IRC §§ 6159, 7122, 6331(k), 6503 |
| 3.2.3.d | discharge in bankruptcy — 11 U.S.C. §§ 523(a)(1), 507(a)(8), 1328(a), 524(a), 522(c) |
| 3.2.3.b | general financial health — IRM 5.15.1.16, .21, .22, IRC §§ 108, 6334 |
| 3.2.3.c | third-party research — IRM 5.15.1.6, .7 |

Forms: 2848, 8821, 1040-X, 843, 656, 9465, 12153, 9423, 6118, 8867, 8948, 8944, 8453,
433-A, 433-B, 433-F, 872. Notices: CP14, CP501, CP503, CP504, LT11/Letter 1058,
Letter 3172, CP2000.

**Form 872 is the one entry whose `irsUrl` is not a form page.** The IRS does not publish it
in the public catalogue — it is issued by the examiner — so the entry links IRM 25.6.22 and
says so in its body. Do not "fix" it to a guessed `about-form-872` URL; that page 404s.

**Check scaffolded directory entries against `topics.json`.** The CP2000 notice entry was
seeded pointing at 3.3.3.a, "IRS authority to investigate", when the CP2000 topic is 3.3.3.g.
Others may carry the same kind of error.

## Next: Parts 1 and 2

Part 3 is done. `docs/BUILD_PLAN.md` is the plan of record for Parts 1 and 2 — read it before
starting, and in particular the Phase 0 tagger and figure work that gates them.

| Codes | Why next |
|---|---|
| Phase 0 tagger work | The Part 3 experience says the tagger is the bottleneck. At least a dozen questions were mis-tagged across Part 3 (listed in `private/discrepancies.md`), and Parts 1 and 2 are where the bank's coverage actually is. Fix the rule table before writing, not after. |
| Part 1 (120 topics) | Individuals. Bank coverage is dense here, unlike most of Part 3, so the §4 check will do real work on every page. |
| Part 2 (119 topics) | Businesses. |

### What Part 3 taught about pace

Sections written in one sustained pass — 3.1.2, 3.2.5, 3.2.6, 3.3.3, 3.2.3, 3.3.4, 3.4.3, 3.2.4 —
came out better and faster than pages written one at a time, because the sources were already open
and the `related[]` graph closed as each section went in. Fetch the governing publication or
statute once per section, cache it in the scratchpad, and write the whole section against it.

The recurring `verify` failures, in order of frequency: word count over 2,500; description outside
150-170 characters; no in-line citation matching `/\((?:IRC|Reg\.|Circular 230|IRM)\s/`; a cited
section not listed in `authorities[]`; a missing backlink. Budget a trim pass for every page.

### Bank coverage across Part 3 — a finding, not a complaint

Twenty-six genuine bank **content** gaps were logged across Part 3, not tagging faults. The bank
concentrates on Circular 230 mechanics, the collection process and the examination process. It is
thin or silent on the evidentiary and documentary topics (3.2.3, 3.2.4), on Appeals settlement
practice (3.3.4.c, 3.3.4.d), on most of the e-file programme's administrative apparatus (3.4.3),
and on data security (3.4.2.b). Do not read thin coverage as permission to write a thin page.

### Bank questions found wrong on the law across Part 3

Recorded in full in `private/discrepancies.md`. The list to carry forward: P3E1Q454 (IP PIN
reissued "three years" — it is annual, and no option offered is correct); P3E1Q415 (substantial
authority described as the highest certainty level — Reg. § 1.6662-4(d)(2) says the opposite);
P3E2Q575 (maximum time to petition the Tax Court marked 90 days where 150 is offered and correct
under IRC § 6213(a)); P3E1Q448 (at least two options are evasion); P3E1Q472, P3E2Q582, P3E1Q491,
P3E1Q411, P3E1Q459 (rationales wrong on the law). **Read the log before correcting any page toward
the bank.**

### Numbering trap — the § 7602 referral bar moved in 2019

The Justice Department referral bar is now **IRC § 7602(d)**. It was **§ 7602(c)** until the
Taxpayer First Act of 2019 inserted the rewritten third-party contact notice at § 7602(c).
Material citing § 7602(c) for the referral bar is pre-2019; § 7602(c) today is the 45-day
contact notice. 3.3.3.a and 3.2.2.b each state their own subsection correctly, but a reader
moving between older study material and the current Code will hit this.

### Sourcing note — the IRS "Reliance on Guidance" page is hard to find

The authoritative IRS statement on what may and may not be relied on is **"General overview
of taxpayer reliance on guidance published in the Internal Revenue Bulletin and FAQs"**,
under `/newsroom/`, page last reviewed 5 December 2025. The obvious URLs
(`/privacy-disclosure/reliance-on-guidance`, `/privacy-disclosure/irs-guidance`,
`/help/reliance-on-guidance`) all **404**. Reach it via the **"Reliance on Guidance" link in
the irs.gov footer**. It is the source for 3.2.5.d and is worth reusing on any page about
FAQ or webpage reliance.

### Annual refresh — the IRM is under revision and posted content may lag

The irs.gov IRM index carries a standing notice that the Manual "is continually being updated
to comply with **Executive Orders 14151 and 14168**," and that current versions "are provided
to meet Electronic Freedom of Information Act requirements and **may not yet reflect these
updates**." Separately, **interim guidance** (IRM 1.11.10) carries changes made faster than
the Manual can be republished, so a posted section can be current on its face and superseded
in fact — check the transmittal for incorporated IPUs. Re-verify `irm.parts` and any page
citing an IRM section each year.

### Open item — the legislative / interpretive / procedural regulation taxonomy

Bank question P3E1Q482 turns on it, and it is standard practitioner vocabulary, but **it
appears in none of the primary sources opened for 3.2.5.a** — not IRC § 7805, not
Reg. § 601.601, not Reg. § 1.6662-4(d)(3)(iii). The sources use a different axis: proposed,
temporary, final. 3.2.5.a covers the substance behind legislative-versus-interpretive from
source — the general and residual grant in § 7805(a) against a specific grant in the Code
section construed — without adopting the labels. If the three labels are wanted on the site,
find a source first.

### Recurring pattern — pre-1998 institutional vocabulary in Part 601 and older regulations

Five pages now record the same thing: the regulation's **standards are current** while the
**offices named around them are not**. Reg. §§ 601.601 and 601.201 speak of the "Assistant
Commissioner (Technical)", district directors, the Superintendent of Documents and the
"Internal Revenue Code of 1954"; Reg. § 301.7605-1 of districts and the Office of the
Assistant Commissioner (International); Reg. § 1.6001-1 of the district director. All were
restructured out of existence after RRA 1998. Read "district" as the area served by the
office handling the matter, and do not follow the sourcing instructions literally. Worth a
single glossary note when the glossary is built, rather than repeating it page by page.

### Open item — IRC § 7508A subsection lettering

The Cornell text of § 7508A renders **two** subsections as "(f)" — one defining "significant
fire", one on the application to the limitation on credit or refund (added by Pub. L. 119-64)
— with a footnote marker. 3.2.6.c therefore refers to the credit-or-refund provision as "a
further subsection" and cites no letter. Confirm the designation against the enrolled text
before any page cites it as § 7508A(f) or (g).

### Open item — the annual adequate-disclosure revenue procedure

3.2.6.g cites the Form 8275 instructions' statement that guidance identifying items treated
as adequately disclosed "is published annually in a revenue procedure." **The current
procedure's number could not be found** — direct guesses at rp-25-* and rp-26-* returned
unrelated procedures, the irs.gov site-index search returns 403 here, and the About Form 8275
page does not name it. The page makes no claim resting on the number. Add it when it can be
opened, and treat it as an annual-refresh item; it is the element on that page most likely to
go stale.

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

### Section 3.2.3 is the least-tested section in the bank so far

All five topics of 3.2.3 had zero or partial bank coverage: 3.2.3.b, 3.2.3.c and 3.2.3.d have
no tagged questions at all, and 3.2.3.a and 3.2.3.e have questions that touch the topic without
reaching its load-bearing rule. `private/discrepancies.md` records each gap. Do not read the
thin coverage as a reason to write these pages thinly — the outline lists them, so the exam may
reach them, and the bank is one vendor's guess at the exam.

### Currency finding — the principal residence exclusion has lapsed

IRC § 108(a)(1)(E) excluded qualified principal residence indebtedness discharged **before
1 January 2026**, or under a written arrangement entered into before that date. Pub. L. 116-260
§ 114(a) set that date and nothing since has moved it. Pub. L. 119-21 § 70119(a) (4 July 2025)
amended § 108(f)(5), the student loan provision, not (a)(1)(E). Re-check the statute before any
page relies on the exclusion — it has been extended repeatedly in the past.

### The Collection Financial Standards and IRM 5.15.1 move together

The standards effective 29 June 2026 were published the same day IRM 5.15.1 was transmitted in
revised form, and IRM 5.14.1 was revised 20 July 2026. When the standards change, re-verify all
twelve `cfs.*` figures and re-read IRM 5.15.1.8 through .10 — the 2026 revision changed the
inflation index from CPI to PCE, added forced sale value and reduced forced sale value, and
incorporated the International Collection Financial Standards.

**IRM 5.14.1 lives at a URL with a trailing `r`** — `irm_05-014-001r`. The unsuffixed URL 404s.

## Domain 1.3 complete — Deductions and Credits, 16 of 16 (19 August 2026)

Section 1.3.1 finished with 1.3.1.h (qualified business income deduction) and section 1.3.2 with all
eight credit topics. Part 1 now stands at 69 of 120.

### The 2026 credit landscape is not the 2025 one

Every topic in section 1.3.2 except the earned income credit and the foreign tax credit was changed by
Pub. L. 119-21 or by an expiry that fell at the end of 2025. Written out, because no single source
collects them:

| Code | What changed for 2026 | Authority |
|---|---|---|
| 1.3.2.a | Applicable percentage rewritten — starts at 50 percent, two breakpoints, middle floor of 35 | § 70405, IRC § 21(a)(2) |
| 1.3.2.a | § 129 exclusion raised to $7,500 / $3,750 | § 70404, IRC § 129(a)(2)(A) |
| 1.3.2.b | § 24(h) overlay made permanent, credit to $2,200, taxpayer SSN now required | § 70104, IRC § 24(h) |
| 1.3.2.c | Education credits now need a social security number, not a TIN | § 70606, IRC § 25A(g)(1) |
| 1.3.2.f | Adoption credit partly refundable, from taxable years beginning after 2024 | § 70402, IRC § 23(a)(4) |
| 1.3.2.f | Tribal determinations establish special needs | § 70403, IRC § 23(d)(3) |
| 1.3.2.g | Excess advance premium tax credit recaptured in full — cap repealed | § 71305, IRC § 36B(f)(2)(B) |
| 1.3.2.g | 400 percent cliff returns; temporary percentage table lapses | IRC §§ 36B(c)(1)(E), (b)(3)(A)(iii) |
| 1.3.2.h | §§ 25C and 25D end for 2026; §§ 30D and 25E ended 30 September 2025 | §§ 70502, 70505, 70506 |

**Effective dates do not line up and must be read one at a time.** Within § 36B alone the OBBBA's five
amendments carry four different effective dates, two of which are not live until 2027 and 2028. The
adoption credit changes reached back to taxable year 2024. The child tax credit changes reached back to
2025.

### Figures come from three documents, not one

- **Rev. Proc. 2025-32** — the general annual inflation adjustments (§§ 23, 24, 32, 137, 6695 and the
  rest).
- **Rev. Proc. 2025-25** — the § 36B applicable percentage table and required contribution percentage,
  published separately and on a plan-year basis.
- **Notice 2025-67** — everything retirement-related, including the § 25B saver's credit income limits.

A figure absent from Rev. Proc. 2025-32 is not necessarily missing. Three sections have no 2026 figure
anywhere because they are not indexed at all: § 21(c) (dependent care expense caps, unchanged since
2003), § 25A (indexing repealed by Pub. L. 116-260 § 104(a)(2)), and § 22 (amounts frozen since 1983).

### Bank coverage across section 1.3.2 — worse than Part 3

Thirty-one questions across the eight codes, and **eleven of them cannot be answered correctly for
2026**. The failures are concentrated: all five child tax credit questions are written against the 2021
American Rescue Plan rules, both health coverage tax credit questions test a credit that expired in
2021, and the adoption computation question dates itself to 2021 in its own rationale. The foreign tax
credit has no questions at all.

Two questions — P1E1Q062 and P1E2Q163, both on the premium tax credit — are **correct for 2026 and were
wrong for 2021 through 2025**, because the temporary rule they ignore has now lapsed. That is the second
occurrence of this shape after P1E2Q142 (mortgage insurance premiums). The working rule: agreement with
the bank is never evidence that a page is current.

### Next

Part 1 remaining: 1.4.1 (12 topics, taxation — AMT, household employees, net investment income tax),
1.5.1 (15, advising the individual taxpayer), 1.6.1 (5), 1.6.2 (5), 1.6.3 (6). Then Part 2, which is
119 topics and entirely unwritten.
