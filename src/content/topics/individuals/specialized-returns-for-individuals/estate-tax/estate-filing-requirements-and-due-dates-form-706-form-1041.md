---
title: "Estate filing requirements and due dates (Form 706, Form 1041)"
code: "1.6.1.e"
part: 1
domain: "Specialized Returns for Individuals"
section: "Estate tax"
description: "Three returns, three deadlines, and a filing threshold that lifetime gifts quietly lower. The estate that owes nothing is still the one most likely to file late."
status: published
taxYear: 2026
lastReviewed: "2026-08-20"
reviewedBy: "Draft for N. O. review"
authorities:
  - { type: IRC, ref: "§ 6018", title: "Estate tax returns", url: "https://www.law.cornell.edu/uscode/text/26/6018" }
  - { type: IRC, ref: "§ 6075", title: "Time for filing estate and gift tax returns", url: "https://www.law.cornell.edu/uscode/text/26/6075" }
  - { type: IRC, ref: "§ 6012", title: "Persons required to make returns of income", url: "https://www.law.cornell.edu/uscode/text/26/6012" }
  - { type: IRC, ref: "§ 6072", title: "Time for filing income tax returns", url: "https://www.law.cornell.edu/uscode/text/26/6072" }
  - { type: IRC, ref: "§ 6081", title: "Extension of time for filing returns", url: "https://www.law.cornell.edu/uscode/text/26/6081" }
  - { type: IRC, ref: "§ 6161", title: "Extension of time for paying tax", url: "https://www.law.cornell.edu/uscode/text/26/6161" }
  - { type: IRC, ref: "§ 441", title: "Period for computation of taxable income", url: "https://www.law.cornell.edu/uscode/text/26/441" }
  - { type: IRC, ref: "§ 645", title: "Certain revocable trusts treated as part of estate", url: "https://www.law.cornell.edu/uscode/text/26/645" }
  - { type: IRC, ref: "§ 2010", title: "Unified credit against estate tax", url: "https://www.law.cornell.edu/uscode/text/26/2010" }
forms: []
related: ["1.6.1.a", "1.6.1.b", "1.6.1.c", "1.6.1.d", "1.5.1.n", "1.6.2.e"]
changelog:
  - { date: "2026-08-20", summary: "Initial draft. Sets out the three returns a death produces and their deadlines — the final Form 1040, the estate's Form 1041 under IRC §§ 6012(a)(3) and 6072(a), and Form 706 under §§ 6018(a) and 6075(a) — with the § 6018(a)(3) reduction of the filing threshold by lifetime gifts, the § 441(e) constraint on an estate's fiscal year, the § 645 election, and the extensions available under §§ 6081 and 6161." }
  - { date: "2026-08-25", summary: "Added a plain-language summary, a timeline diagram of the three filing deadlines, glossary marks, and typed scenarios." }
diagram:
  archetype: "timeline"
  caption: "Three returns, three clocks — what's due when after a death"
  events:
    - { when: "Date of death", what: "Starts the clock on all three returns" }
    - { when: "Ordinary due date for that tax year", what: "Decedent's final Form 1040" }
    - { when: "9 months after death", what: "Form 706, if the estate is over the filing threshold" }
    - { when: "15th day of the 4th month after the estate's chosen year end", what: "Estate's first Form 1041" }
    - { when: "Up to 6 months more, on request", what: "Extension of time to file Form 706" }
    - { when: "Up to 12 months (longer for cause), on a separate request", what: "Extension of time to pay — not automatic with a filing extension" }
---

<div class="plain-terms">
When someone dies, their estate may need to file up to three tax returns. One is the last
personal return for the person who died. One is an income tax return for the estate itself. One
is just for federal estate tax. Most families only deal with the first two. The estate tax return
applies only to large estates. But gifts made during life can push even a small estate over that
line. Each return has its own due date, and the estate can often pick its own tax year for the
income tax return. Filing the estate tax return can matter even when no tax is owed. It is also
how a surviving spouse locks in an extra tax-free amount for later.
</div>

A death produces up to three separate returns, filed by the same person, on three different schedules,
under three different thresholds. Two of them are income tax returns and one is a transfer tax return,
and the commonest administrative failure is treating the last as optional because no tax is owed. It is
often optional. It is also the return on which the portability election lives, and the one whose
threshold lifetime gifts have quietly lowered.

## The rule

**Three returns.** The decedent's final Form 1040 for the part of the year up to death; Form 1041 for
the estate as a taxable entity from the day after death; and Form 706 for the estate tax. The personal
representative signs and files all three where each is required.

**Form 1041: when.** {fig:estatefile.1041_threshold} And {fig:estatefile.1041_due_date}

**Form 1041: an estate may choose its year.** {fig:estatefile.fiscal_year} This is the one election in
estate administration that is genuinely free and frequently missed — a fiscal year lets income and
distributions be aligned across two calendar years, and the choice is made simply by filing the first
return on that basis.

**Form 706: when.** {fig:estate.return_threshold} {fig:estate.return_due_date}

**And the threshold is not what it appears.** {fig:estatefile.706_threshold_reduced} An estate of
{fig:estate.basic_exclusion} less the client's lifetime taxable gifts is the real line, and the executor
will not know where it sits without the gift tax history.

**One election merges two of the returns.** {fig:estatefile.645_election} It runs until
{fig:estatefile.645_applicable_date}

**Extensions of time to file.** {fig:estatefile.filing_extension}

**Extensions of time to pay are separate, and longer.** {fig:estatefile.payment_extension} Where the
estate holds a closely held business, {fig:estate.closely_held_deferral}

## Current figures

| Item | Rule |
| --- | --- |
| Form 1041 filing threshold | {fig:estatefile.1041_threshold} |
| Form 1041 due date | {fig:estatefile.1041_due_date} |
| Estate fiscal year | {fig:estatefile.fiscal_year} |
| Form 706 filing threshold | {fig:estate.return_threshold} |
| Threshold reduced by lifetime gifts | {fig:estatefile.706_threshold_reduced} |
| Form 706 due date | {fig:estate.return_due_date} |
| Basic exclusion amount | {fig:estate.basic_exclusion} |
| Section 645 election | {fig:estatefile.645_election} |
| Section 645 applicable date | {fig:estatefile.645_applicable_date} |
| Extension of time to file | {fig:estatefile.filing_extension} |
| Extension of time to pay | {fig:estatefile.payment_extension} |
| Closely held business deferral | {fig:estate.closely_held_deferral} |
| Portability election | {fig:portability.election} |

## How it works in practice

**Fix the dates in the first meeting.** Death on a given day sets three clocks: the final Form 1040 on
the ordinary individual schedule for that calendar year; Form 706 at nine months; and the estate's first
Form 1041 at the fourth month after whatever year end the executor chooses. Only one of those is
negotiable, and it has to be chosen before the first return goes in.

**Choose the fiscal year deliberately.** A death in, say, October gives a choice between a short year to
31 December and a fiscal year running to the following 30 September. The second defers the estate's
first return by nine months, gives income time to be identified, and lets distributions carried out in
the second calendar year be reported in the estate's first year. It is worth a conversation, and it
disappears once a calendar year return has been filed.

**Check the gift history before concluding no Form 706 is required.** Section 6018(a)(3) reduces the
threshold by post-1976 adjusted taxable gifts. A client who gave away a substantial amount during life
and left a modest estate may still be over the line, and the executor has no way to know without the
prior Forms 709.

**File Form 706 anyway if there is a surviving spouse.** This is the recurring point across this section
and it belongs here too: {fig:portability.election} An estate that files nothing loses that permanently.

**Separate the two extensions.** An extension of time to file Form 706 does not extend the time to pay
the estate tax. Where liquidity is the problem, the request is under § 6161 — up to twelve months as of
right on the amount shown, or up to ten years for reasonable cause — or under § 6166 if a closely held
business qualifies.

**Consider the § 645 election where there is a revocable trust.** Most modern estates are administered
through one, and without the election the trust files its own Form 1041 on a mandatory calendar year
while the estate files on whatever year it chose. The election collapses them into one return with one
year end, and the fiscal year advantage extends to the trust's income as well.

<div class="scenario" data-type="boundary">
<h3>The estate that had to file after all</h3>

A woman dies with a {gloss:gross-estate} of $2,100,000. Her executor reads the filing threshold, compares it to
the basic exclusion amount, and concludes no Form 706 is required.

Her Forms 709 show $14,000,000 of post-1976 adjusted taxable gifts. Under § 6018(a)(3) the threshold is
reduced by that amount, so the line for her estate is $1,000,000, not $15,000,000 — and her $2,100,000
gross estate is over it. The return is required, and there is tax to compute, because those gifts are
added back to the base under § 2001(b)(1)(B). Nothing about the estate itself signalled this; only the
gift history did.

</div>

<div class="scenario" data-type="procedural">
<h3>The fiscal year that was thrown away</h3>

A man dies on 3 November. His {gloss:executor} files the estate's first Form 1041 for the period to
31 December, because that is what the software offered.

That election is now made and the estate is a calendar year taxpayer. Had the executor chosen a fiscal
year ending 31 October, the first return would not have been due until the following 15 February, the
estate would have had a full year to identify income, and a distribution made in the following spring
could have been carried back into the first fiscal year on the Form 1041. None of that is available now,
and nothing about the default was flagged as a choice.

</div>

<div class="scenario" data-type="baseline">
<h3>Three returns, three deadlines</h3>

A woman dies on 12 March with wages and interest to that date, an estate that will receive royalties for
several years, and a gross estate above the filing threshold.

Her final Form 1040 covers 1 January to 12 March and is due on the ordinary individual date for that
calendar year. Form 706 is due nine months after death, in December. The estate's first Form 1041 is due
on the 15th day of the fourth month after the year end the executor selects — as early as the following
April if a calendar year is chosen, or as late as the following July if a fiscal year to 28 February is.
Three returns, one signatory, three different clocks, and only the third is under the executor's
control.

</div>

<div class="scenario" data-type="interaction">
<h3>The extension that did not extend what mattered</h3>

An executor cannot value a partnership interest in time and obtains an extension to file Form 706. He
takes this to mean the {gloss:estate-tax} is not yet due and pays nothing at the nine-month mark.

Interest and the failure to pay addition run from the nine-month date regardless. Section 6081 extends
the time to *file*; the time to pay is extended only under § 6161, which is a separate request requiring
reasonable cause for anything beyond the twelve months available on the amount shown. He should have
estimated the tax, paid it, and extended only the filing.

</div>

<div class="callout trap">

**Assuming no tax means no return.** The Form 706 threshold is the gross estate against the basic
exclusion amount, before deductions — and the return is where the portability election lives.

**Forgetting § 6018(a)(3).** Lifetime gifts reduce the filing threshold. An executor who has not seen
the decedent's Forms 709 cannot say whether a return is required.

**Treating the Form 1041 threshold as taxable income.** It is measured on *gross* income for an estate
(IRC § 6012(a)(3)) — and any beneficiary who is a nonresident alien triggers a return whatever the
income (§ 6012(a)(5)).

**Letting the first Form 1041 default to a calendar year.** The choice of fiscal year is made by filing
and cannot be undone at will.

**Choosing a fiscal year that ends mid-month.** IRC § 441(e) requires a fiscal year to end on the last
day of a month other than December.

**Confusing the extension to file with the extension to pay.** Section 6081 is filing; § 6161 is
payment. Interest runs from the original date either way.

**Overlooking the § 645 election where a revocable trust exists.** Without it, the trust is a separate
calendar year filer and the estate's fiscal year advantage does not reach the trust's income.

</div>

## How this has changed

The mechanics are old. Sections 6012, 6018, 6072, 6075, 6081 and 6161 have been substantially in their
present form for decades, and Pub. L. 119-21 amended none of them. Section 645 arrived in 1997 and has
not been materially altered since.

What has changed is the population of estates that file. The Form 1041 threshold is
{fig:estatefile.1041_unindexed} — so the number of estates required to file an income tax return has
grown with inflation alone, and an estate holding a modest bank balance can clear it. The Form 706 threshold has
moved in the opposite direction: at {fig:estate.basic_exclusion} very few estates are required to file
at all, which is precisely why the portability election is missed so often.

The practical shape of the topic has therefore inverted. Form 706 used to be the return an executor
worried about and Form 1041 the afterthought. Now Form 1041 is the return most estates actually have to
file, and Form 706 is the one most estates should file voluntarily and do not.

## Exam focus

Expect a date computation. Form 706 is nine months from death (IRC § 6075(a)); Form 1041 is the 15th day
of the fourth month after the close of the estate's taxable year (§ 6072(a)). Watch for a fiscal year in
the facts, because the four-month count is from the year end and not from death.

Know the two thresholds and what they are measured against: gross income for Form 1041, and the
gross estate against the basic exclusion amount for Form 706 — reduced by lifetime adjusted taxable
gifts under § 6018(a)(3), which is the detail that distinguishes a prepared candidate.

Know that the personal representative signs all three returns, that an extension to file is not an
extension to pay, and that a fiscal year must end on the last day of a month.

## Check yourself

**1.** A domestic estate has gross income of $700 and taxable income of nil after deductions. Must it
file Form 1041?

*Answer: Yes. IRC § 6012(a)(3) requires a return from every estate whose gross income for the taxable
year is $600 or more, regardless of what taxable income comes to after deductions.*

**2.** A decedent dies on 8 June. The executor selects a fiscal year ending 31 March. When is the
estate's first Form 1041 due?

*Answer: 15 July of the following year. IRC § 6072(a) sets the date at the 15th day of the fourth month
following the close of the fiscal year, and the four months run from 31 March, not from the date of
death.*

**3.** A decedent's gross estate is $3,000,000 and she made post-1976 adjusted taxable gifts of
$13,500,000. Is a Form 706 required?

*Answer: Yes. IRC § 6018(a)(3) reduces the filing threshold by adjusted taxable gifts, so the applicable
figure is the basic exclusion amount less $13,500,000, and the gross estate exceeds it.*

**4.** An executor obtains an extension of time to file Form 706. Does the estate tax remain due at nine
months?

*Answer: Yes. IRC § 6081 extends the time to file only. An extension of time to pay must be sought
separately under § 6161, and interest runs from the original date in any event.*

**5.** May an estate adopt a taxable year ending on 15 September?

*Answer: No. IRC § 441(e) defines a fiscal year as a period of 12 months ending on the last day of a
month other than December, so a year end must fall on the last day of a month.*
