---
title: "ACA net premium tax credit"
code: "1.3.2.g"
part: 1
domain: "Deductions and Credits"
section: "Credits"
description: "Two temporary rules expired at the end of 2025 and a repayment cap was repealed. For 2026 the cliff at 400 percent of the poverty line is back, and so is full repayment."
status: published
taxYear: 2026
lastReviewed: "2026-08-19"
reviewedBy: "Draft for N. O. review"
authorities:
  - { type: IRC, ref: "§ 36B", title: "Refundable credit for coverage under a qualified health plan", url: "https://www.law.cornell.edu/uscode/text/26/36B" }
  - { type: IRC, ref: "§ 5000A", title: "Requirement to maintain minimum essential coverage", url: "https://www.law.cornell.edu/uscode/text/26/5000A" }
  - { type: RevProc, ref: "Rev. Proc. 2025-25, §§ 3.01, 3.02", title: "2026 applicable percentage table and required contribution percentage", url: "https://www.irs.gov/pub/irs-drop/rp-25-25.pdf" }
  - { type: RevProc, ref: "Rev. Proc. 2025-32, § 2.04", title: "Removal of the § 36B(f)(2)(B) repayment limitation", url: "https://www.irs.gov/pub/irs-drop/rp-25-32.pdf" }
  - { type: Statute, ref: "Pub. L. 119-21, § 71305", title: "Repeal of the limitation on recapture of advance payments", url: "https://www.law.cornell.edu/uscode/text/26/36B" }
  - { type: Statute, ref: "Pub. L. 119-21, §§ 71301-71304", title: "Eligibility, verification and enrollment amendments", url: "https://www.law.cornell.edu/uscode/text/26/36B" }
forms: []
related: ["1.1.1.q", "1.1.1.k", "1.3.2.e", "1.1.1.j", "1.3.2.h"]
changelog:
  - { date: "2026-08-19", summary: "Initial draft. Sets out the IRC § 36B(b) premium assistance computation with the 2026 applicable percentage table from Rev. Proc. 2025-25 § 3.01, the return of the 400 percent ceiling on the expiry of § 36B(c)(1)(E), the § 36B(c)(2) coverage month and employer coverage tests with the 2026 required contribution percentage, the § 36B(f) reconciliation and the repeal of the repayment cap by Pub. L. 119-21 § 71305, and the eligibility and enrollment amendments made by §§ 71301 to 71304 with their staggered effective dates." }
  - { date: "2026-08-25", summary: "Added a plain-language summary, a threshold diagram of the 2026 applicable-percentage and 400-percent-of-poverty-line figures, glossary marks, and two typed scenarios (fails, procedural) alongside retyped existing ones." }
diagram:
  archetype: "threshold"
  caption: "Household income as a percent of the federal poverty line: where the credit rate rises, and where it ends"
  min: 0
  max: 450
  marks:
    - { figureKey: "ptc.income_range", value: 100, label: "100% FPL — credit begins" }
    - { figureKey: "ptc.applicable_percentage", value: 150, label: "4.19% of income" }
    - { figureKey: "ptc.applicable_percentage", value: 250, label: "8.44% of income" }
    - { figureKey: "ptc.applicable_percentage", value: 300, label: "9.96% begins" }
    - { figureKey: "ptc.income_range", value: 400, label: "400% FPL — credit ends", emphasis: true }
---

<div class="plain-terms">
This is the {gloss:premium-tax-credit}. It helps people pay for health insurance bought through the
ACA marketplace, not through a job. It only applies to households whose income falls within a set
range for their family size. Married couples usually must file a joint return to get it. Insurers are
often paid part of the credit in advance, every month, based on an income estimate. At tax time, that
estimate is checked against actual income for the year. This decides two things: how large the credit
really is, and whether the household must repay any extra amount it received in advance. For 2026, a
household that goes even slightly over the top of the income range loses the whole credit, not just
part of it, and must repay everything advanced.
</div>

For five years this credit had no upper income limit and a capped repayment. Both of those were
temporary, both ran out with taxable year 2025, and the second was then repealed outright rather than
merely allowed to lapse. The result is that 2026 is the first year since 2020 in which a taxpayer one
dollar over 400 percent of the federal poverty line loses the credit entirely and repays every dollar
advanced on their behalf.

## The rule

**The credit.** A refundable credit for an applicable taxpayer equal to the premium assistance credit
amount (IRC § 36B(a)). That amount is {fig:ptc.credit_amount}. The second limb is the operative one for
almost everybody: the credit is the gap between the benchmark plan's premium and what the statute says
the household should pay for itself.

**Applicable taxpayer.** {fig:ptc.income_range} (IRC § 36B(c)(1)(A)). Three further conditions:
a married taxpayer must file a joint return (IRC § 36B(c)(1)(C)); no credit is allowed to an individual
who is another taxpayer's dependent (IRC § 36B(c)(1)(D)); and household income is the measure, not
adjusted gross income.

**The applicable percentage.** {fig:ptc.applicable_percentage} (IRC § 36B(b)(3)(A)(i), as indexed). The
percentage slides linearly within each tier, so a household at 175 percent of the poverty line pays a
rate between the tier's initial and final figures rather than either one.

**Coverage month.** A month qualifies only if, on its first day, the taxpayer, spouse or a dependent is
covered by a qualified health plan enrolled in through an Exchange, and the premium for that month is
paid by the taxpayer or by advance payment (IRC § 36B(c)(2)(A)(i), (ii)). A month is excluded if the
individual is eligible for minimum essential coverage other than individual market coverage — Medicare,
Medicaid, or an employer plan (IRC § 36B(c)(2)(B)(i), (ii), taking the definition from § 5000A(f)).
Eligibility is enough; actual enrolment is not required.

**When an employer plan does not count.** An employee is not treated as eligible for minimum essential
coverage where the employer plan is unaffordable — the employee's required contribution exceeds
{fig:ptc.affordability} of household income — or where it fails minimum value, meaning
{fig:ptc.minimum_value} (IRC § 36B(c)(2)(C)(i)(II), (ii)). Both tests are switched off if the employee or
family member is actually covered by the plan (IRC § 36B(c)(2)(C)(iii)). The affordability test looks at
the cost of self-only coverage for the employee, and it reaches family members through the last sentence
of clause (i).

**Advance payment and reconciliation.** The credit may be paid in advance to the insurer under
§ 1412 of the Affordable Care Act. Section 36B(f)(1) then reduces the credit by the advance payments,
and {fig:ptc.repayment} (IRC § 36B(f)(2)). Reconciliation is why a return must be filed by anyone who
took an advance payment, whatever their income and whatever their filing threshold. The Exchange
reports the level of coverage, the total premium, the advance payments and the identifying details on
Form 1095-A (IRC § 36B(f)(3)(A)–(D)); the taxpayer reconciles on Form 8962.

**Two enrolment restrictions new for 2026 and later.** A plan enrolled in during an income-based special
enrollment period — one offered on the basis of expected household income relative to the poverty line
and not tied to a change in circumstances — is not a qualified health plan for this section (IRC
§ 36B(c)(3)(A)(iii)). And from a later year, a plan is not a qualified health plan unless the Exchange
operates a pre-enrollment verification process for household income and eligibility (IRC
§ 36B(c)(3)(A)(ii)).

## Current figures

| Item | Amount |
| --- | --- |
| Applicable percentage table | {fig:ptc.applicable_percentage} |
| Income range | {fig:ptc.income_range} |
| Credit computation | {fig:ptc.credit_amount} |
| Employer coverage affordability | {fig:ptc.affordability} |
| Minimum value | {fig:ptc.minimum_value} |
| Repayment of excess advance | {fig:ptc.repayment} |

## How it works in practice

**Start with the household, not the policy.** Family size and household income set the poverty line
percentage, which sets the applicable percentage, which sets the household's expected contribution. Only
then does the benchmark premium matter.

**Identify the benchmark.** The credit is measured against the second lowest cost silver plan available
to the family, not against the plan they actually bought. A family who chose a bronze plan cheaper than
their expected contribution gets no credit at all; one who chose gold gets the same credit as if they had
bought silver, capped by what they actually paid.

**Count coverage months one at a time.** A month in which anyone in the family became eligible for
Medicare or an affordable employer plan drops out. Mid-year changes are common and the credit is computed
monthly, which is why the annual reconciliation so often produces a balance.

**Reconcile without a cap.** Compare the credit actually allowable for the year with what was advanced.
A shortfall is refunded; an excess is added to tax in full. There is no longer any repayment limitation
to soften an income estimate that turned out low.

The practical planning point for 2026 is the cliff. Between 399 and 401 percent of the poverty line the
credit does not taper — it disappears. A self-employed client whose income is close to the line should
be told before year end that a deductible retirement contribution or a deferred invoice can be worth
several thousand dollars of credit, and that the reverse is true of a late payment received in December.

<div class="scenario" data-type="boundary">
<h3>The cliff, and what it costs</h3>

Elena is self-employed, single, and enrolled through the Exchange. Her expected income put her at 380
percent of the federal poverty line, and advance payments of $7,400 were made to her insurer over the
year. A December contract payment pushes her actual household income to 412 percent.

She is no longer an applicable taxpayer: § 36B(c)(1)(A) requires household income not exceeding 400
percent of the poverty line, and § 36B(c)(1)(E), which disregarded that ceiling, expired with taxable
year 2025. Her allowable credit for the year is nil. Section 36B(f)(2) adds the whole $7,400 to her tax,
and since Pub. L. 119-21 § 71305 struck the repayment limitation there is nothing to reduce it. Had she
made a deductible retirement contribution before year end to bring household income under the line, she
would have kept most of the credit.
</div>

<div class="scenario" data-type="interaction">
<h3>An offer of employer coverage, and the two tests</h3>

Raj is offered coverage by his employer. Self-only coverage would cost him 11 percent of household
income; the plan pays 72 percent of allowed benefit costs. He declines it and buys a silver plan on the
Exchange.

The offer does not disqualify him. Section 36B(c)(2)(C)(i)(II) provides that an employee is not treated
as eligible for minimum essential coverage where the required contribution for the employer plan exceeds
the required contribution percentage of household income, and 11 percent exceeds the 2026 figure. The
minimum value test in clause (ii) is met by the plan at 72 percent, so it does not help him — but only
one of the two needs to fail. Note the trap in clause (iii): had he actually enrolled in the employer
plan, neither test would apply and his months would not be coverage months.
</div>

<div class="scenario" data-type="baseline">
<h3>The benchmark is not the plan you bought</h3>

The Okonjo family's expected contribution under the applicable percentage is $410 a month. The second
lowest cost silver plan available to them costs $1,150 a month. They enrol instead in a bronze plan
costing $690.

The § 36B(b)(2)(B) figure is $1,150 less $410, or $740. But § 36B(b)(2)(A) caps the premium assistance
amount at the premiums actually paid — $690. Their credit is $690 a month and the bronze plan costs them
nothing. Had they bought a gold plan at $1,400, the credit would still be $740 and they would pay $660
themselves. The benchmark sets the credit; the plan chosen sets only the ceiling.
</div>

<div class="scenario" data-type="fails">
<h3>Filing separately closes the door</h3>
<p>Priya and her husband live together all year. Each earns income and each is covered by a marketplace
plan. On a friend's advice, Priya files married filing separately because she does not want to be
responsible for her husband's tax debt.</p>
<p><em>Analysis.</em> Section 36B(c)(1)(C) requires a married taxpayer to file a joint return to be an
applicable taxpayer at all. Filing {gloss:married-filing-separately} closes off the credit completely,
whatever household income turns out to be. The credit's income test actually runs on household income
rather than plain {gloss:adjusted-gross-income}, but that distinction never comes into play here,
because the joint-return requirement fails before income is even checked. Absent the regulatory relief
for domestic abuse or spousal abandonment, which the statute itself does not provide, there is no path
back to the credit while married filing separately.</p>
</div>

<div class="scenario" data-type="procedural">
<h3>Filing to reconcile, not to claim</h3>
<p>Dario's household income for the year turns out to be well under the standard filing threshold. He
received $3,100 of advance payments to his insurer over the year toward a silver plan bought on the
Exchange.</p>
<p><em>Analysis.</em> Section 36B(f)(1) requires the credit to be reconciled against the advance
payments, and that can only happen on a return. Dario must file a Form 1040 with Form 8962 attached,
using the coverage and payment figures the Exchange reports on Form 1095-A, even though his income
alone would not otherwise require a return. Skipping the filing does not make the advance payments go
away — it just leaves the reconciliation undone until the IRS catches it.</p>
</div>

<div class="callout trap">

**The 400 percent ceiling is back for 2026.** Section 36B(c)(1)(E) suspended it for taxable years
beginning after 2020 and before 2026, and that window has closed. Any source describing the credit as
available at any income level is describing 2021 through 2025.

**Repayment is now uncapped.** Section 36B(f)(2)(B), which limited recapture for households under 400
percent of the poverty line, was struck for taxable years beginning after 31 December 2025. Rev. Proc.
2025-32 § 2.04 records the consequence: the inflation adjustment for that limitation no longer appears
in the annual revenue procedure at all.

**A return must be filed.** Anyone who received an advance payment must file to reconcile, even with
income below the filing threshold and even if no additional tax is due.

**Eligibility for other coverage, not enrolment in it, ends the coverage month.** A taxpayer who could
have had Medicare or affordable employer coverage and declined it has no coverage month, unless the
employer plan fails affordability or minimum value.

**Enrolling in the employer plan switches off both employer tests.** Section 36B(c)(2)(C)(iii) is easy
to miss and it reverses the answer.

**Household income, not adjusted gross income.** And the percentage is of the poverty line for the
family size involved, so family size changes the answer as much as income does.

**Married filing separately fails**, subject only to the regulatory relief for victims of domestic abuse
and spousal abandonment, which the statute itself does not contain.

**The benchmark is the second lowest cost silver plan** — never the cheapest, never the plan actually
purchased. A catastrophic plan is not a qualified health plan for this section at all (IRC
§ 36B(c)(3)(A)(i)).
</div>

## How this has changed

Two provisions lapsed rather than being repealed, and both were written with the same end date. Section
36B(b)(3)(A)(iii) substituted a much lower applicable percentage table — running from zero to 8.5
percent, with a tier for income of 400 percent and higher — for taxable years beginning after 31
December 2020 and before 1 January 2026. Section 36B(c)(1)(E) disapplied the words "but does not exceed
400 percent" for the same window. Both were enacted by the American Rescue Plan and extended once by
Pub. L. 117-169 § 12001. Neither was extended again. For 2026 the statutory table in
§ 36B(b)(3)(A)(i) applies as indexed, and the ceiling in § 36B(c)(1)(A) applies as written.

The indexing itself resumed with a change of method. Rev. Proc. 2025-25 § 2 records that from calendar
year 2026 the premium growth measure captures individual market premiums as well as employer-sponsored
premiums, following the 2026 HHS Marketplace Integrity and Affordability rule, and § 1 records that the
additional adjustment in § 36B(b)(3)(A)(ii)(II) is not required for 2026 because the failsafe in
subclause (III) applies.

Pub. L. 119-21 then made four amendments with four different effective dates, which is unusual enough to
be worth setting out plainly:

- **§ 71305** struck the repayment limitation in § 36B(f)(2)(B), for taxable years beginning after 31
  December 2025. This is the change with the largest practical effect.
- **§ 71302** repealed § 36B(c)(1)(B), the special rule under which certain lawfully present individuals
  with household income below the poverty line were treated as applicable taxpayers, for taxable years
  beginning after 31 December 2025.
- **§ 71304** added § 36B(c)(3)(A)(iii), excluding plans enrolled in during an income-based special
  enrollment period, for plan years beginning after 31 December 2025.
- **§ 71303** added § 36B(c)(3)(A)(ii), the pre-enrollment verification requirement, and § 36B(c)(5) and
  (6), for taxable years beginning after 31 December **2027** — so it is not yet in effect.
- **§ 71301** narrowed eligibility by reference to "eligible aliens" in § 36B(e), for taxable years
  beginning after 31 December **2026** — also not yet in effect.

A page or seminar that lists all five as "the 2026 changes" is wrong about three of them.

## Exam focus

Know the shape of the computation: expected contribution equals the applicable percentage of household
income; the credit is the benchmark premium minus that, capped at premiums actually paid, summed over
coverage months. Be able to say that the benchmark is the second lowest cost silver plan.

Know the eligibility conditions — 100 to 400 percent of the poverty line for 2026, joint return if
married, not a dependent, no other minimum essential coverage available — and know that eligibility for
other coverage is enough to end a coverage month.

Know the two employer plan tests and that failing either one preserves eligibility, but that actually
enrolling in the plan switches both off. And know the reconciliation: a return must be filed, and for
2026 the excess is repaid in full with no limitation.

## Check yourself

**1.** A married couple with two children have household income of 410 percent of the federal poverty
line and received $9,000 of advance payments. What is the consequence at reconciliation for 2026?

*Answer: The entire $9,000 is added to tax. They are not applicable taxpayers under IRC § 36B(c)(1)(A)
because household income exceeds 400 percent of the poverty line, the temporary rule in § 36B(c)(1)(E)
expired with taxable year 2025, and the repayment limitation in § 36B(f)(2)(B) was struck by Pub. L.
119-21 § 71305 for taxable years beginning after 31 December 2025.*

**2.** An employee is offered an employer plan costing 6 percent of household income for self-only
coverage, which pays 55 percent of allowed benefit costs. Can the employee claim the credit for Exchange
coverage?

*Answer: Yes, assuming the other conditions are met. The plan is affordable, but IRC § 36B(c)(2)(C)(ii)
provides that an employee is not treated as eligible for minimum essential coverage where the plan's
share of total allowed costs is less than 60 percent. Failing either test is enough — unless the
employee actually enrolls, when § 36B(c)(2)(C)(iii) disapplies both.*

**3.** A family's expected contribution is $300 a month, the second lowest cost silver plan costs $980,
and they buy a bronze plan for $520. What is the monthly credit?

*Answer: $520. Section 36B(b)(2)(B) gives $980 less $300, or $680, but § 36B(b)(2)(A) caps the premium
assistance amount at the premiums actually paid for the plans they enrolled in. The bronze plan
therefore costs them nothing and the excess benchmark credit is not paid to them.*

**4.** A taxpayer whose income is below the filing threshold received advance payments all year. Must
they file?

*Answer: Yes. IRC § 36B(f)(1) and (2) require the credit to be reconciled against the advance payments,
which can only happen on a return. Filing is required regardless of the income threshold and regardless
of whether the reconciliation produces a refund or a balance.*

**5.** In which month does eligibility for Medicare end the credit — the month of enrolment or the month
of eligibility?

*Answer: Eligibility. Section 36B(c)(2)(B)(i) excludes from coverage months any month for which the
individual is eligible for minimum essential coverage other than individual market coverage, and
Medicare is minimum essential coverage under § 5000A(f). Declining to enrol does not preserve the
credit.*

**6. A married couple live together all year and each buys a silver plan on the Exchange. The wife files married filing separately so as not to be responsible for her husband's tax debt. Is she an applicable taxpayer for 2026?**
(A) Yes, if her household income is between 100 and 400 percent of the poverty line (B) Yes, but only for months in which her husband had no coverage of his own (C) No, because a married taxpayer must file a joint return to be an applicable taxpayer (D) No, unless she repays every advance payment made on her behalf
*Answer: C. IRC § 36B(c)(1)(C) requires a married taxpayer to file a joint return, so the joint-return requirement fails before household income is even checked. The only relief is the regulatory exception for domestic abuse or spousal abandonment, which the statute itself does not provide.*

**7. Which of these Pub. L. 119-21 amendments to § 36B is not yet in effect for taxable year 2026?**
(A) Section 71305, striking the limitation on repayment of excess advance payments (B) Section 71302, repealing the special rule for certain lawfully present individuals with income below the poverty line (C) Section 71304, excluding plans enrolled in during an income-based special enrollment period (D) Section 71303, requiring the Exchange to run pre-enrollment verification of income and eligibility
*Answer: D. Pub. L. 119-21 § 71303 added § 36B(c)(3)(A)(ii) for taxable years beginning after 31 December 2027, so it is not yet in effect. Sections 71302 and 71305 apply to taxable years beginning after 31 December 2025 and § 71304 to plan years beginning after that date.*

**8. In 2026 a taxpayer enrols in an Exchange plan during a special enrollment period the Exchange offered solely on the basis of her expected household income relative to the poverty line, with no change in her circumstances. Are her months under that plan coverage months?**
(A) Yes, provided the plan is a silver plan (B) No, because a plan enrolled in during an income-based special enrollment period is not a qualified health plan for § 36B (C) Yes, because the route by which a taxpayer enrolled never affects the credit (D) No, until the Exchange completes pre-enrollment verification of her income
*Answer: B. IRC § 36B(c)(3)(A)(iii), added by Pub. L. 119-21 § 71304 for plan years beginning after 31 December 2025, provides that a plan enrolled in during an income-based special enrollment period not tied to a change in circumstances is not a qualified health plan for this section. The pre-enrollment verification rule in § 36B(c)(3)(A)(ii) does not apply until a later year.*
