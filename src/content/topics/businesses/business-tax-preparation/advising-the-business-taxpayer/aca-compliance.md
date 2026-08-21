---
title: "ACA compliance"
code: "2.2.5.m"
part: 2
domain: "Business Tax Preparation"
section: "Advising the business taxpayer"
description: "Applicable large employer status is measured on last year's workforce and counts hours rather than job titles, so a business can become one without hiring anybody new."
status: review
taxYear: 2026
lastReviewed: "2026-08-21"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 4980H", title: "Shared responsibility for employers regarding health coverage", url: "https://www.law.cornell.edu/uscode/text/26/4980H" }
  - { type: IRC, ref: "§ 45R", title: "Employee health insurance expenses of small employers", url: "https://www.law.cornell.edu/uscode/text/26/45R" }
  - { type: IRC, ref: "§ 5000A", title: "Requirement to maintain minimum essential coverage", url: "https://www.law.cornell.edu/uscode/text/26/5000A" }
  - { type: IRC, ref: "§ 6055", title: "Reporting of health insurance coverage", url: "https://www.law.cornell.edu/uscode/text/26/6055" }
  - { type: IRC, ref: "§ 6056", title: "Certain employers required to report on health insurance coverage", url: "https://www.law.cornell.edu/uscode/text/26/6056" }
  - { type: IRC, ref: "§ 414", title: "Definitions and special rules", url: "https://www.law.cornell.edu/uscode/text/26/414" }
  - { type: IRC, ref: "§ 6721", title: "Failure to file correct information returns", url: "https://www.law.cornell.edu/uscode/text/26/6721" }
  - { type: IRC, ref: "§ 6722", title: "Failure to furnish correct payee statements", url: "https://www.law.cornell.edu/uscode/text/26/6722" }
  - { type: RevProc, ref: "Rev. Proc. 2025-32", title: "Inflation-adjusted items for 2026", url: "https://www.irs.gov/pub/irs-drop/rp-25-32.pdf" }
forms: []
related: ["2.2.5.k", "2.2.5.b", "2.2.5.a", "2.2.2.h", "2.2.5.e"]
changelog:
  - { date: "2026-08-21", summary: "Initial draft. Sets out the IRC § 4980H(c)(2) applicable large employer test measured on the preceding calendar year with its seasonal worker exception and IRC § 414 aggregation, the IRC § 4980H(c)(4) 30-hour definition of a full-time employee, the two assessable payments in § 4980H(a) and (b) with the reduction by 30 and the indexation in § 4980H(c)(5), the IRC §§ 6055 and 6056 reporting obligations, and the IRC § 45R small employer credit with its 2026 figure from Rev. Proc. 2025-32 § 3.09." }
---

The employer shared responsibility rules are unusual in the Code: nothing is owed until an employee
does something, the amount depends on which of two provisions applies, and the whole regime turns on
a headcount measured in a year that has already ended. That last feature is what catches employers,
because by the time the obligation exists it is too late to avoid it.

## The rule

**Who is caught.** {fig:aca.ale} (IRC § 4980H(c)(2)(A)), with {fig:aca.seasonal}
(§ 4980H(c)(2)(B)) and {fig:aca.aggregation} (§ 4980H(c)(2)(C)).

**Who counts.** {fig:aca.full_time} (IRC § 4980H(c)(4)(A)). The size test also brings in full-time
equivalents computed from the hours of part-time employees, which is how a business with few
full-time staff can still be an applicable large employer.

**Two payments, not one.** {fig:aca.a_payment} (IRC § 4980H(a)) — the no-coverage payment, computed
on the whole full-time workforce. And {fig:aca.b_payment} (IRC § 4980H(b)) — the offered-coverage
payment, computed only on the employees who received a credit. Both are subject to
{fig:aca.thirty_reduction} (§ 4980H(c)(2)(D)).

**The Code's figures are out of date on their face.** {fig:aca.indexation}
(IRC § 4980H(c)(5)).

**Reporting is separate from liability.** {fig:aca.reporting} (IRC §§ 6055(a) and 6056(a)), and a
failure is an information return failure penalised under IRC §§ 6721 and 6722 —
{fig:report.6721_2026}.

**And there is a credit at the other end.** {fig:aca.45R_eligible} (IRC § 45R(d)(1)), with
{fig:aca.45R_2026} (Rev. Proc. 2025-32 § 3.09).

## Current figures

| Item | Rule | Authority |
| --- | --- | --- |
| Applicable large employer | {fig:aca.ale} | IRC § 4980H(c)(2)(A) |
| Full-time employee | {fig:aca.full_time} | IRC § 4980H(c)(4)(A) |
| Seasonal exception | {fig:aca.seasonal} | IRC § 4980H(c)(2)(B) |
| Aggregation | {fig:aca.aggregation} | IRC § 4980H(c)(2)(C) |
| Reduction by 30 | {fig:aca.thirty_reduction} | IRC § 4980H(c)(2)(D) |
| Indexation | {fig:aca.indexation} | IRC § 4980H(c)(5) |
| Small employer credit, 2026 | {fig:aca.45R_2026} | Rev. Proc. 2025-32 § 3.09 |

## How it works in practice

**Determine status a year in advance, because that is when it is decided.** Applicable large
employer status for a calendar year is fixed by the average number of full-time employees on
business days during the *preceding* calendar year. An employer that crosses the line in one year is
subject to the rules for the whole of the next, and nothing done in the next year changes that.
Advising a growing business in December is advising it about the year after next.

**Count hours, not people.** A full-time employee is one averaging at least 30 hours of service per
week for the month. The count for the size test also includes full-time equivalents derived from the
aggregate hours of part-time employees, so a restaurant with fifteen full-time staff and eighty
part-timers can be an applicable large employer while an employer describing everyone as part time
is not thereby outside the rules.

**Aggregate before counting.** IRC § 414(b), (c), (m) and (o) treat commonly controlled and
affiliated service group members as one employer. Splitting a workforce across two companies with
the same owners does not work, and the reduction by 30 is allocated among the group rather than
given to each member.

**Distinguish the two payments and note the different bases.** The § 4980H(a) payment applies where
no offer of minimum essential coverage was made and is computed on *all* full-time employees less
the reduction of 30 — so it is much larger. The § 4980H(b) payment applies where an offer was made
but was unaffordable or lacked minimum value, and is computed only on the employees who actually
received a credit, subject to a ceiling of what the (a) payment would have been. Making a defective
offer is therefore very much better than making none.

**Never quote the figures from the Code text.** The statute prints figures that were current in 2014
and IRC § 4980H(c)(5) indexes them by the premium adjustment percentage, which has moved
substantially since. The same is true of the § 45R wage limit, which Rev. Proc. 2025-32 restates
annually.

**Treat reporting as a separate compliance obligation.** IRC § 6056 requires an applicable large
employer to report its offers of coverage, and IRC § 6055 requires any provider of minimum essential
coverage to report the coverage — two obligations, met on one form by a self-insured large employer
and on separate forms otherwise. A failure is penalised per return and per payee statement under
IRC §§ 6721 and 6722, entirely independently of whether any assessable payment is due.

## Scenarios

<div class="scenario">
<h3>The employer that became large without hiring</h3>

Ravensden Care employs 38 full-time staff and a large pool of part-time carers whose aggregate hours
work out to 19 full-time equivalents. It has never offered health coverage and believes it is too
small to have to.

It is not. The applicable large employer test counts full-time employees together with full-time
equivalents derived from part-time hours, so Ravensden is at 57 and is over the threshold. Nothing
about the arrangement changed; the arithmetic simply produced a different answer than the headcount
did.

Two consequences follow. Status for the following calendar year is already fixed by this year's
average, so the position cannot be avoided by reducing hours in January. And because no offer of
coverage was made, any full-time employee obtaining a premium tax credit exposes Ravensden to the
IRC § 4980H(a) payment computed on all 38 full-time employees less the reduction of 30 — not on the
one employee who claimed the credit.
</div>

<div class="scenario">
<h3>The defective offer that saved money</h3>

Bewcastle Engineering, an applicable large employer with 80 full-time employees, offers coverage to
all of them. The contribution required of employees is above the affordability threshold, and four
employees decline it and obtain premium tax credits on the exchange.

The IRC § 4980H(b) payment applies, not § 4980H(a), and the difference is large. Because an offer
was made, the payment is computed only on the four employees who received credits, subject to a
ceiling equal to what the § 4980H(a) payment would have been — which here is the higher per-employee
rate applied to 80 employees less 30.

The practical advice follows directly: an employer that cannot afford a fully affordable offer
should still make an offer. A defective offer moves the exposure from a whole-workforce computation
to a per-claimant one, and the ceiling means the position can never be worse than making no offer at
all.
</div>

<div class="scenario">
<h3>Two companies, one employer</h3>

An owner runs two corporations under common control, one with 32 full-time employees and one with
27. Neither offers coverage, and each believes it is below the threshold.

IRC § 4980H(c)(2)(C)(i) treats all persons treated as a single employer under IRC § 414(b), (c), (m)
or (o) as one employer for the size test. Common control brings both within § 414(b) or (c), so the
combined 59 full-time employees make the group an applicable large employer and both companies are
within the rules.

The reduction by 30 does not double either. IRC § 4980H(c)(2)(D)(ii) allows a single reduction for
persons treated as one employer, allocated among them — so the group gets one reduction of 30
between the two companies, not one each. Splitting a workforce is one of the few structures the
statute addresses by name.
</div>

## Traps

<div class="callout trap">

**Status is fixed by the preceding calendar year.** An employer that crosses the threshold is
subject to the rules for the whole of the following year, and cannot exit by reducing hours once
that year has begun.

</div>

<div class="callout trap">

**The size test includes full-time equivalents.** Part-time hours are aggregated into equivalents
for determining applicable large employer status, so a business with few full-time staff can still
be caught — even though the *payments* are computed on full-time employees only.

</div>

<div class="callout trap">

**The two payments have different bases.** Section 4980H(a) is computed on the whole full-time
workforce less 30; § 4980H(b) only on the employees who received a credit. Making no offer is far
more expensive than making a defective one.

</div>

<div class="callout trap">

**The figures in the Code text are the 2014 figures.** IRC § 4980H(c)(5) indexes them by the premium
adjustment percentage. Quoting the statute produces an answer that is substantially too low.

</div>

## How this has changed

The individual mandate payment under IRC § 5000A was reduced to zero by Pub. L. 115-97 for months
beginning after 31 December 2018, and it has not been restored. The *employer* shared responsibility
provisions in IRC § 4980H were not touched, which is the most common misunderstanding in this area:
individuals face no payment for going uncovered, while employers face the same assessable payments
they always did.

The reporting obligations have been eased in form rather than in substance. The requirement to
furnish statements to individuals may now be satisfied on request where the employer posts a clear
notice of availability, and the deadline for furnishing has been extended by regulation — but the
returns to the Service under IRC §§ 6055 and 6056 remain due, and the penalties under IRC §§ 6721
and 6722 apply to failures on both sides.

The assessable payment figures have risen every year since 2014 through the premium adjustment
percentage, and the § 45R wage limit is restated annually — for 2026 at the figure in
Rev. Proc. 2025-32 § 3.09. Neither has ever fallen.

Nothing in the post-2024 legislation alters IRC § 4980H, § 6055, § 6056 or § 45R.

## Exam focus

Know the applicable large employer test exactly: an average of at least 50 full-time employees on
business days during the *preceding* calendar year, with full-time equivalents included for the size
test, aggregation under IRC § 414, and the seasonal worker exception at 120 days or fewer.

Know that a full-time employee is one averaging at least 30 hours of service per week, and that the
payments are computed on full-time employees only.

Distinguish the two payments by trigger and by base — no offer against a defective offer, whole
workforce less 30 against claimants only — and know that the (b) payment is capped at what the (a)
payment would have been.

Remember the reduction by 30 is allowed once for an aggregated group, allocated among its members.

Finally, keep reporting separate from liability: IRC §§ 6055 and 6056 obligations exist regardless
of whether any payment is due, and their failure is penalised under IRC §§ 6721 and 6722.

## Check yourself

**1.** An employer averaged 46 full-time employees and 12 full-time equivalents during the preceding
calendar year. Is it an applicable large employer?

*Answer: Yes. The size test under IRC § 4980H(c)(2) counts full-time employees together with
full-time equivalents derived from part-time hours, so the total is 58 and the threshold of 50 is
exceeded. Note the asymmetry that makes this worth stating carefully: the equivalents count for
determining *status*, but any assessable payment under § 4980H(a) or (b) is computed on full-time
employees only — so the 12 equivalents bring the employer into the regime and then drop out of the
arithmetic.*

**2.** An applicable large employer with 60 full-time employees offers no coverage. Three employees
obtain premium tax credits. On how many employees is the payment computed?

*Answer: On 30 — all 60 full-time employees reduced by 30 under IRC § 4980H(c)(2)(D)(i). The
§ 4980H(a) payment is triggered by at least one full-time employee receiving a credit, but once
triggered it is computed on the whole full-time workforce, not on the claimants. The contrast with
§ 4980H(b), which is computed only on the employees who received credits, is the single most
important distinction in the section.*

**3.** A retailer's workforce exceeds 50 full-time employees for 95 days over the holiday season, and
the excess employees are all seasonal. Is it an applicable large employer?

*Answer: No, provided both limbs of IRC § 4980H(c)(2)(B) are met. The workforce must exceed 50
full-time employees for 120 days or fewer during the calendar year, and the employees in excess of
50 during that period must be seasonal workers — retail workers employed exclusively during holiday
seasons being named in the definition. Ninety-five days is inside the limit, so the exception
applies. Had the excess persisted for 130 days, or had any of the excess been non-seasonal, the
exception would fail.*

**4.** A client says the Affordable Care Act penalties were repealed. What is the accurate answer?

*Answer: That the *individual* payment under IRC § 5000A was reduced to zero for months beginning
after 31 December 2018, and that the *employer* shared responsibility payments under IRC § 4980H
were not changed at all. Applicable large employers remain exposed to both assessable payments, the
figures have been indexed upward every year since 2014, and the IRC §§ 6055 and 6056 reporting
obligations remain in force with penalties under §§ 6721 and 6722. Confusing the two is the most
common error in this area.*

**5.** Why should an employer that cannot afford affordable coverage still make an offer?

*Answer: Because it moves the exposure from IRC § 4980H(a) to § 4980H(b), and the two are computed
very differently. With no offer, one employee's premium tax credit triggers a payment on the entire
full-time workforce less 30, at the higher per-employee rate. With an offer that is merely
unaffordable or lacks minimum value, the payment is computed only on the employees who actually
received a credit — and § 4980H(b)(2) caps it at what the § 4980H(a) payment would have been, so the
offer can never make the position worse.*
