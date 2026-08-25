---
title: "ACA requirements"
code: "1.1.1.q"
part: 1
domain: "Preliminary Work and Taxpayer Data"
section: "Preliminary work to prepare tax returns"
description: "What survives of the Affordable Care Act on an individual return in 2026: a zero mandate penalty, three information forms, and a premium credit that narrowed sharply."
status: published
taxYear: 2026
lastReviewed: "2026-08-19"
reviewedBy: "I. Ohu"
authorities:
  - { type: IRC, ref: "§ 36B", title: "Refundable credit for coverage under a qualified health plan" }
  - { type: IRC, ref: "§ 5000A", title: "Requirement to maintain minimum essential coverage" }
  - { type: IRC, ref: "§ 4980H(c)(2)", title: "Applicable large employer" }
  - { type: IRC, ref: "§ 6055", title: "Reporting of health insurance coverage" }
  - { type: RevProc, ref: "2025-32", title: "Inflation-adjusted items for 2026", url: "https://www.irs.gov/pub/irs-drop/rp-25-32.pdf" }
forms: []
related: ["1.1.1.k", "1.1.1.d", "1.1.1.b", "1.1.1.j", "1.3.2.g"]
changelog:
  - { date: "2026-08-19", summary: "Initial draft. Records that the 400 percent ceiling on premium tax credit eligibility and the temporary premium percentages both lapsed for taxable years beginning after 2025, and that the excess advance payment repayment limitation was removed." }
  - { date: "2026-08-25", summary: "Added a plain-language summary, a threshold diagram of the premium tax credit's income range, glossary marks, and typed scenarios." }
diagram:
  archetype: "threshold"
  caption: "The premium tax credit's income range, as a share of the poverty line"
  min: 0
  max: 450
  marks:
    - { figureKey: "aca.ptc_income_range", value: 100, label: "100% FPL — credit floor" }
    - { figureKey: "aca.ptc_cliff_restored", value: 400, label: "400% FPL — no credit above this for 2026", emphasis: true }
---

<div class="plain-terms">
The Affordable Care Act still shows up on a tax return in three ways. First, it touches almost
everyone a little. People are still supposed to have health coverage, but the penalty for
skipping it is now zero, so nobody pays for it. Second, it matters more for some people than
others. Someone with coverage from a job or another insurer barely notices it. Their form is just
for the record; nothing from it goes on the return. Someone who bought coverage through the
Marketplace is affected the most, because that is the only coverage tied to a credit that helps
pay for it. Third, for that group, the return settles up the credit. It checks whether the help
paid during the year was too much, too little, or about right, and it pays back or collects the
gap.
</div>

## The rule

Three things remain of the Affordable Care Act on an individual return, and only one of them now costs
anyone money.

**The individual mandate penalty is zero.** An applicable individual is still *required* to maintain
minimum essential coverage (IRC § 5000A(a)), and the requirement was never repealed. What was removed is the
consequence: the applicable dollar amount under § 5000A(c)(3)(A) is {fig:aca.shared_responsibility}.
Both limbs of the penalty computation now produce nothing — the flat dollar amount is zero and the
percentage-of-income alternative has been zero percent for taxable years beginning after 2015. A
client who had no coverage owes nothing federally, though some states impose their own requirement.

**The information forms identify the source of coverage**, and the distinction between them is what
gets tested:

- **Form 1095-A** — issued by the Marketplace to individuals enrolled in coverage through it. This is
  the one that matters most to the preparer, because the premium tax credit cannot be computed
  without it.
- **Form 1095-B** — issued by insurers and other providers of minimum essential coverage obtained
  **outside** the Marketplace.
- **Form 1095-C** — issued by an **applicable large employer**, meaning
  {fig:aca.ale_threshold}.

**The premium tax credit is where the 2026 return diverges from the last five.** An applicable
taxpayer under § 36B(c)(1)(A) is one with {fig:aca.ptc_income_range}. Married taxpayers must file a
joint return (§ 36B(c)(1)(C)), and no credit is allowed to an individual who is another taxpayer's
dependent (§ 36B(c)(1)(D)).

## Current figures

| Item | 2026 |
| --- | --- |
| Individual shared responsibility payment | {fig:aca.shared_responsibility} |
| Premium tax credit — income range | {fig:aca.ptc_income_range} |
| The 400 percent ceiling | {fig:aca.ptc_cliff_restored} |
| Temporary premium percentages | {fig:aca.enhanced_percentages_expired} |
| Excess advance payments | {fig:aca.aptc_repayment} |
| Applicable large employer | {fig:aca.ale_threshold} |

## How it works in practice

**Get the Form 1095-A before computing anything.** The credit is reconciled on the return against
advance payments made to the insurer during the year, and the reconciliation runs off the monthly
figures on the 1095-A — enrolment premium, the premium for the applicable second lowest cost silver
plan, and the advance payment. A return prepared from the client's recollection of what they paid will
be wrong, and the mismatch surfaces as a notice.

**Forms 1095-B and 1095-C are informational only.** Nothing on them is entered on the return and
neither is needed to file. They tell the preparer that the client had coverage from a non-Marketplace
source, which matters chiefly because it means the client is **not** eligible for the premium tax
credit for the months that employer coverage was affordable and adequate.

**Advance payments and the credit are reconciled, in both directions.** Where the advance payments
exceeded the credit the taxpayer actually earned — usually because income turned out higher than
projected — the excess is added back as additional tax. Where the credit exceeds the advance payments,
the difference is refundable. Clients rarely anticipate the first case, and it arrives as a reduced
refund on a return they expected to be routine.

**Ask about mid-year changes, because they move the credit.** Marriage, divorce, a birth, a move to a
different rating area, a new job with employer coverage, and a change in projected income all alter the
monthly computation. The client is supposed to report these to the Marketplace during the year; many
do not, and the reconciliation on the return is where the consequence appears.

**Employer coverage generally forecloses the credit.** An individual eligible for employer-sponsored
coverage that is affordable and provides minimum value cannot claim the premium tax credit for those
months, whether or not they enrolled. The question at intake is therefore about what was *offered*,
not only about what was *taken*.

<div class="scenario" data-type="baseline">
<h3>The credit working as intended</h3>

A single taxpayer with modest, steady income enrolls through the Marketplace, reports an accurate
income estimate, and receives advance payments sized to that estimate all year. Her actual income
at filing comes out close to the estimate.

This is the ordinary case. Her household income sits inside the range in § 36B(c)(1)(A), she is
not another taxpayer's dependent, and she files as a single filer, so nothing in § 36B(c)(1)(C) or
(D) is in play. The {gloss:premium-tax-credit} computed on the return comes out close to the
advance payments already made, and the true-up is small in either direction. Most Marketplace
enrollees land here — the reconciliation exists for the cases that drift, not to surprise the ones
that do not.
</div>

<div class="scenario" data-type="fails">
<h3>The dependent who can't claim it</h3>

A 20-year-old full-time student living at home enrolls in Marketplace coverage under her own name,
expecting to claim a credit on her own return because her income for the year is modest.

She cannot. Section 36B(c)(1)(D) denies applicable-taxpayer status to anyone who is another
taxpayer's {gloss:dependent} for the year, and her parents are entitled to claim her. Her own
return gets no premium tax credit, no matter how low her income runs or how the poverty-line math
would otherwise come out. Whether the coverage helps anyone at all turns on the parents' return,
not hers, and that has to be sorted out before enrollment, not after.
</div>

<div class="scenario" data-type="boundary">
<h3>The client just over the line</h3>

Aurelio Baptiste-Nwosu enrolled through the Marketplace and received advance premium tax credit
payments throughout 2026. A late bonus pushed his household income to about 415 per cent of the poverty
line for his family size.

For 2021 through 2025 this would have been survivable: the ceiling on eligibility was suspended and
his credit would simply have been computed on a percentage of income. For 2026 it is not. Section
36B(c)(1)(E) suspended the words "but does not exceed 400 percent" only for taxable years beginning
before 1 January 2026, so the ceiling operates again — and above it there is no credit at all, not a
reduced one. Every dollar of advance payment made on his behalf is repayable. This is the single most
consequential change on the 2026 individual return for Marketplace enrollees, and it needs to be raised
with clients during the year rather than discovered in filing season.
</div>

<div class="scenario" data-type="timing">
<h3>The repayment that used to be capped</h3>

Perpetua Okonkwo-Lindqvist's income came in higher than projected and her advance payments exceeded
her actual credit by a substantial amount. Her preparer recalls a limitation that caps repayment for
households below a stated income level and expects it to reduce the addition.

It has gone. Section 71305 of Public Law 119-21 removed IRC § 36B(f)(2)(B) — the provision that
limited the tax increase from excess advance payments for certain households — effective for taxable
years beginning after 31 December 2025. Rev. Proc. 2025-32 confirms it by removing that item from the
annual inflation adjustments. For 2026 the excess is repayable in full regardless of household income.
A preparer working from a remembered cap will understate the balance due.
</div>

<div class="scenario" data-type="procedural">
<h3>Which 1095 is which</h3>

A client brings a Form 1095-B from a small employer's insurer. Nothing was received from the
Marketplace. The preparer is unsure whether the form needs entering.

It does not. Form 1095-B reports minimum essential coverage from a source other than the Marketplace,
and it is informational. What it establishes is that the client had coverage — relevant to state
requirements and to whether a premium tax credit could have been claimed, but not an entry on the
federal return. Had the form been a 1095-A, the position would be the reverse: the monthly figures on
it are indispensable. A 1095-C from an applicable large employer sits with the 1095-B as
informational, and its significance is what it shows about an **offer** of coverage.
</div>

<div class="callout trap">
<strong>The mandate was not repealed; its penalty was zeroed.</strong> Section 5000A still states the
requirement. Both limbs of the computation now yield nothing, so nothing is owed — but the provision remains on the books, and several states impose their own
requirement with a real penalty.
</div>

<div class="callout trap">
<strong>The 400 percent ceiling is back for 2026.</strong> The suspension in § 36B(c)(1)(E) ran only
through taxable years beginning before 1 January 2026. Above the ceiling the credit is not reduced —
it is unavailable, and advance payments are repayable.
</div>

<div class="callout trap">
<strong>The repayment limitation is gone.</strong> IRC § 36B(f)(2)(B) was removed for taxable years
beginning after 31 December 2025. Excess advance payments are now repaid in full whatever the
household income.
</div>

<div class="callout trap">
<strong>An applicable large employer has at least 50, not more than 50.</strong> Section
4980H(c)(2)(A) uses "an average of at least 50 full-time employees" during the preceding calendar
year. An employer with exactly 50 is within the definition.
</div>

<div class="callout trap">
<strong>Only Form 1095-A is used to prepare the return.</strong> Forms 1095-B and 1095-C are
informational. Waiting for a 1095-B before filing delays the return for nothing; filing without a
1095-A produces a wrong one.
</div>

## How this has changed

Three separate contractions have landed on this topic, and 2026 is the year the largest of them takes
effect.

The **individual mandate penalty** was reduced to zero by the Tax Cuts and Jobs Act for months
beginning after December 2018. The requirement in § 5000A survives; only the numbers were zeroed.

The **American Rescue Plan Act of 2021**, extended by the Inflation Reduction Act of 2022, did two
things to the premium tax credit: it suspended the 400 per cent ceiling on eligibility and it
substituted a more generous schedule of premium percentages. Both were written into the Code as
temporary provisions expressly limited to taxable years beginning after 31 December 2020 **and before
1 January 2026** — § 36B(c)(1)(E) for the ceiling and § 36B(b)(3)(A)(iii) for the percentages. Neither
was extended. For 2026 both revert, which means a smaller credit across the income range and no credit
at all above the ceiling.

**Public Law 119-21** then made further changes in July 2025. Section 71305 removed the § 36B(f)(2)(B)
limitation on repaying excess advance payments, effective for taxable years beginning after 2025.
Section 71302(a) repealed § 36B(c)(1)(B), the special rule that had treated certain lawfully present
individuals with household income below the poverty line as applicable taxpayers. The Act also amended
§ 36B(e) and added new paragraphs (5) and (6) to § 36B(c) concerning eligibility by immigration status.

The combined effect is that a Marketplace enrollee's 2026 return can differ sharply from their 2025
one on identical facts. Where a client's income is near the ceiling, that conversation belongs in the
year, not in the filing season.

## Exam focus

Know the three information forms and their sources: 1095-A from the Marketplace, 1095-B from other
providers of minimum essential coverage, 1095-C from an applicable large employer. Know that the
individual shared responsibility payment is zero while the requirement itself remains in the Code.
Know that the premium tax credit requires household income between 100 and 400 per cent of the poverty
line, that married taxpayers must file jointly, and that a dependent cannot claim it. Expect the 2026
reversion of the ceiling and the removal of the repayment limitation to be tested as changes.

## Check yourself

**1. Which form reports health insurance obtained from a source other than the Marketplace?**

A. Form 1095-A
B. Form 1095-B
C. Form 1095-C
D. All of these

*Answer: B. Form 1095-A comes from the Marketplace; Form 1095-C comes from an applicable large
employer.*

**2. What is the individual shared responsibility payment for 2026?**

A. It is computed as a percentage of household income
B. It is the greater of a flat dollar amount or a percentage of income
C. Zero, because both limbs of the penalty computation now yield nothing
D. The requirement to maintain coverage was repealed, so there is none

*Answer: C. The requirement in § 5000A remains; only the penalty amounts were reduced to zero.*

**3. A taxpayer's household income is 415 percent of the poverty line for their family size in 2026,
and they received advance premium tax credit payments. What follows?**

A. A reduced credit computed on a percentage of income
B. No credit, and the advance payments are repayable
C. The credit is unaffected, because the ceiling was suspended
D. The credit is available but capped at the advance payments

*Answer: B. The suspension of the 400 percent ceiling applied only to taxable years beginning before
1 January 2026.*

**4. Excess advance premium tax credit payments in 2026 are repaid in what amount?**

A. Limited by a cap that varies with household income
B. In full, regardless of household income
C. Only to the extent they exceed the credit by more than a stated amount
D. Not at all, if income was correctly projected at enrolment

*Answer: B. The limitation in § 36B(f)(2)(B) was removed for taxable years beginning after
31 December 2025.*

**5. An employer averaged exactly 50 full-time employees during the preceding calendar year. Is it an
applicable large employer?**

A. No; the threshold is more than 50
B. Yes; the threshold is an average of at least 50
C. Only if it offers coverage
D. Only if the employees are in a single location

*Answer: B.*
