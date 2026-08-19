---
title: "Loans from qualified plans"
code: "1.2.2.i"
part: 1
domain: "Income and Assets"
section: "Retirement income"
description: "A plan loan is a distribution unless it fits an exception. When it fails, the tax is real but the money is not — the balance is untouched and nothing can be rolled over."
status: review
taxYear: 2026
lastReviewed: "2026-08-19"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 72", title: "Annuities; certain proceeds of endowment and life insurance contracts", url: "https://www.law.cornell.edu/uscode/text/26/72" }
  - { type: IRC, ref: "§ 402", title: "Taxability of beneficiary of employees' trust", url: "https://www.law.cornell.edu/uscode/text/26/402" }
  - { type: IRC, ref: "§ 408", title: "Individual retirement accounts", url: "https://www.law.cornell.edu/uscode/text/26/408" }
  - { type: IRC, ref: "§ 4975", title: "Tax on prohibited transactions", url: "https://www.law.cornell.edu/uscode/text/26/4975" }
  - { type: Reg, ref: "§ 1.72(p)-1", title: "Loans treated as distributions", url: "https://www.law.cornell.edu/cfr/text/26/1.72(p)-1" }
forms: []
related: ["1.2.2.c", "1.2.2.e", "1.2.2.f", "1.2.2.a", "1.2.2.h", "1.2.2.k"]
changelog:
  - { date: "2026-08-19", summary: "Initial draft. Sets out the IRC § 72(p)(1) rule that a plan loan is a distribution, the § 72(p)(2) exception and its four conditions, the Treas. Reg. § 1.72(p)-1 distinction between a deemed distribution and a plan loan offset, the § 402(c)(3)(C) extended rollover window for a qualified offset, and the § 4975(f)(6)(B)(iii) loan exception that leaves owner-employees able to borrow while IRA owners cannot." }
---

Start from the right default. IRC § 72(p)(1)(A) says that if a participant receives any amount as a loan
from a qualified employer plan, that amount **is** a distribution. Everything practitioners think of as
"the plan loan rules" is the exception in § 72(p)(2), and a loan that misses any one of its conditions
falls back to the rule. What makes the failure painful is what happens next: the tax is charged, the
account balance is not reduced, the participant still owes the plan, and nothing can be rolled over to
undo it.

## The rule

**A loan is a distribution, and so is a pledge.** Any amount received directly or indirectly as a loan
from a qualified employer plan is treated as received as a distribution (IRC § 72(p)(1)(A)); assigning or
pledging any portion of an interest in the plan is treated as receiving a loan of that portion
(§ 72(p)(1)(B)). A qualified employer plan means a § 401(a) plan with an exempt trust, a § 403(a) annuity
plan, or a § 403(b) arrangement (§ 72(p)(4)(A)(i)) — which is why the question never arises for an IRA.

**The exception has a ceiling with two limbs.** Paragraph (1) does not apply to the extent the loan, added
to the outstanding balance of all other loans from the plan, does not exceed the **lesser** of a fixed
statutory cap reduced by the excess of the highest outstanding balance during the year ending the day
before the loan over the balance on the day of the loan, or the **greater** of half the present value of
the nonforfeitable accrued benefit and a floor — both figures are in the table below (IRC
§ 72(p)(2)(A)(i), (ii)). The look-back in clause (i) is what stops a participant from repaying a loan in
December and borrowing the full amount again in January.

**Three more conditions.** The loan must by its terms be repayable within five years, unless used to
acquire a dwelling unit that within a reasonable time is to be the participant's principal residence —
tested when the loan is made (IRC § 72(p)(2)(B)). It must require substantially level amortization with
payments at least quarterly (§ 72(p)(2)(C)). And it must not be made through a credit card or any similar
arrangement (§ 72(p)(2)(D)).

**Plans of one employer are one plan.** The controlled group, common control and affiliated service group
rules of § 414(b), (c) and (m) apply, and all plans of an employer determined after applying them are
treated as one plan (IRC § 72(p)(2)(E)).

**Failure produces a deemed distribution, and its timing depends on how it failed.** Where the terms do
not satisfy the repayment-term or level-amortization requirement, or there is no enforceable agreement,
**the entire loan** is deemed distributed when made. Where the terms are fine but the amount exceeds the
ceiling, only the excess is deemed distributed when made. Where the loan was sound but payments stop, the
deemed distribution occurs on the failure to pay (Reg. § 1.72(p)-1, A-4(a)). A plan administrator may
allow a cure period, but it cannot run past the last day of the calendar quarter following the quarter in
which the missed installment was due (A-10(a)).

**A deemed distribution is taxed but is not a distribution.** Section 72 applies to it as if it were an
actual distribution, and so does the additional tax on early distributions under § 72(t) (Reg.
§ 1.72(p)-1, A-11(a), (b)). But it is not treated as an actual distribution for the qualification rules,
the distribution restrictions or § 402 — so it **is not eligible for rollover** (A-12), and it is not a
reduction of the accrued benefit (A-13(a)(2)). The participant is taxed on money that is still in the
plan and still owed to it. Repayments made after a deemed distribution do increase the participant's
investment in the contract, so the same dollars are not taxed twice on the way out (A-21(a)).

**An offset is the opposite: real money, and rollable.** A plan loan offset occurs where the accrued
benefit is actually reduced to repay the loan (Reg. § 1.72(p)-1, A-13(a)(2)). Where that offset arises
**solely** from termination of the plan or from failure to meet the repayment terms because of severance
from employment, it is a *qualified* plan loan offset amount, and the 60-day rollover deadline is
replaced by the due date, including extensions, for the return for the year of the distribution (IRC
§ 402(c)(3)(C)(i), (ii)). That relief is available only where the loan itself satisfied § 72(p)(2)
(§ 402(c)(3)(C)(iv)).

**Interest is usually not deductible.** No deduction is allowed for interest on a § 72(p)(2) loan for any
period on or after the first day the borrower is a key employee within § 416(i), or where the loan is
secured by amounts attributable to elective deferrals (IRC § 72(p)(3)).

**The loan must also clear § 4975.** Lending between a plan and a participant is a prohibited transaction
unless the § 4975(d)(1) exemption is met: available to all participants on a reasonably equivalent basis,
not more generous to highly compensated employees, made under specific plan provisions, bearing a
reasonable rate of interest, and adequately secured.

## Current figures

| Item | 2026 |
| --- | --- |
| Ceiling on the exception | {fig:planloan.limit} |
| Repayment term | {fig:planloan.term} |
| Amortization | {fig:planloan.amortization} |
| Aggregation | {fig:planloan.aggregation} |
| Cure period | {fig:planloan.cure_period} |
| Consequence of failure | {fig:planloan.deemed_distribution} |
| Qualified plan loan offset | {fig:planloan.offset_rollover} |
| Disaster increase | {fig:planloan.disaster_increase} |
| Credit card arrangements | {fig:planloan.credit_card} |
| Interest deduction | {fig:planloan.interest_deduction} |
| Prohibited transaction exemption | {fig:planloan.exemption_conditions} |
| Loans from an IRA | {fig:planloan.ira} |

## How it works in practice

Test the ceiling in the order the statute writes it. Take the smaller of the two limbs, not the larger:
the capped limb is an outer boundary and the accrued-benefit limb is usually the binding one for a modest
balance. Then reduce the capped limb by the look-back figure. A participant whose balance is small enough
that half of it falls under the floor may still borrow up to that floor, because clause (ii) takes the
greater of the two — the only place in the computation where "greater" appears.

Then read the plan document, because none of this compels a plan to offer loans at all, and most plans
impose tighter terms than the statute requires. Section 72(p) sets an outer boundary; the plan sets the
actual one, and a loan that breaches the plan's own terms is a loan not made in accordance with specific
plan provisions for § 4975(d)(1)(C) purposes.

The reporting follows the character. A deemed distribution is reported for the year of the failure and
taxed then, with the additional tax if applicable. An offset is reported too, but a *qualified* offset may
be replaced out of other funds until the extended due date of that year's return.

<div class="scenario">
<h3>Scenario 1 — the second loan and the look-back</h3>

Rosa has a vested 401(k) balance of 300,000 dollars. In March 2025 she borrowed 50,000 dollars and repaid
it in full in November 2025. In February 2026 she asks for another 50,000 dollars.

Her accrued-benefit limb permits 150,000 dollars, so it is not binding. The $50,000 limb is reduced by
the excess of her highest outstanding balance in the year ending the day before this loan — 50,000
dollars — over her balance on the day of the loan, which is zero. The reduction is the full 50,000
dollars, so her ceiling is zero and the entire new loan is a deemed distribution under IRC § 72(p)(1)(A).
Waiting until after March 2026, when the twelve-month look-back no longer reaches the repaid loan, would
have restored the full amount.
</div>

<div class="scenario">
<h3>Scenario 2 — missed payments and the quarter-end cure</h3>

Ken, age 44, has a compliant 25,000-dollar plan loan with monthly payments. He misses the payment due
15 May 2026 and every payment after it. The plan's loan policy allows the maximum cure period.

Failing to pay violates IRC § 72(p)(2)(C) at once, but Reg. § 1.72(p)-1, A-10(a) lets the plan defer the
consequence to the end of the calendar quarter following the quarter in which the payment was due — here,
30 September 2026. If nothing is paid by then, the outstanding balance plus accrued interest is a deemed
distribution in 2026, taxable to Ken and subject to the additional tax under § 72(t) because he is under
59½. His account balance does not change, he still owes the plan, and A-12 forecloses any rollover.
</div>

<div class="scenario">
<h3>Scenario 3 — severance, an offset, and the longer window</h3>

Talia leaves her employer in August 2026 with a 12,000-dollar loan outstanding. The plan requires
immediate repayment on severance; she cannot pay, and the plan reduces her account by 12,000 dollars to
discharge it.

This is a plan loan offset, not a deemed distribution: her accrued benefit actually fell. Because it
arose solely from severance from employment and the loan itself met IRC § 72(p)(2), it is a **qualified**
plan loan offset amount, and § 402(c)(3)(C)(i) gives her until the due date of her 2026 return including
extensions to contribute 12,000 dollars from other funds to an IRA and treat the offset as rolled over.
Had the plan instead deemed the loan distributed while she was still employed, no rollover would have
been available at all.
</div>

<div class="callout trap">

**"Owner-employees cannot borrow" is wrong for qualified plans and right for IRAs.** IRC
§ 4975(f)(6)(B)(iii) confines the owner-employee bar on plan loans to a participant or beneficiary of an
individual retirement plan and to an employer establishing a § 408(c) arrangement. A sole proprietor,
partner or S corporation shareholder-employee may borrow from the qualified plan on the ordinary terms.

**Two consequences share one name.** A deemed distribution is tax without money; an offset is money
without a choice. Only the offset can be rolled over, and only some offsets get the extended window.

**The principal residence exception buys a longer term, not a larger loan.** It removes the five-year
limit in § 72(p)(2)(B)(i) and touches neither limb of the ceiling in § 72(p)(2)(A).

**A leave of absence suspends the payments, not the deadline.** The level amortization requirement is
relaxed for up to a year of bona fide unpaid leave, but the loan must still be repaid by the latest
permissible term, and the instalments afterwards cannot be smaller than the originals (Reg.
§ 1.72(p)-1, A-9(a)).
</div>

## How this has changed

**The rollover window for offsets was rewritten and is now statutory.** Before it was added, a
participant whose account was offset on severance had 60 days to find the money — which is precisely the
period in which a person who has just lost a job does not have it. IRC § 402(c)(3)(C) replaced that with
the extended due date of the return, but only for an offset caused by plan termination or severance, and
only where the loan satisfied § 72(p)(2). An offset arising for any other reason still runs on 60 days.

**Disaster loan relief became a standing rule.** IRC § 72(p)(6) now sits in the Code rather than in
successive one-off statutes: for a qualified individual borrowing during the applicable period for a
qualified disaster, the statutory cap doubles, the one-half limb becomes the whole nonforfeitable accrued
benefit, and repayments falling due in the relief period may be delayed a year with the delay disregarded
in measuring the five-year term. Older material treats each disaster as
needing its own Act; it no longer does.

**The regulation has not moved, and that matters.** Treas. Reg. § 1.72(p)-1 is still in its original
question-and-answer form, and its A-4, A-10, A-12, A-13 and A-21 remain the operative authority on when a
deemed distribution occurs, what curing it means, and how it differs from an offset. Where a statement
about plan loans cannot be traced to § 72(p) itself, it almost always traces to one of those answers.

## Exam focus

Expect the **ceiling** to be computed, with a look-back designed to catch a candidate who applies the
statutory cap flat. Read for a prior loan in the preceding twelve months, and read whether the balance is
small enough for the floor in clause (ii) to matter.

Expect the **deemed distribution versus offset** distinction, because it decides both whether a rollover
is possible and whether the account balance changed. The signal words are "the plan reduced her account"
for an offset and "the loan was treated as distributed" for a deemed distribution.

Expect **§ 72(t)** to ride along. A deemed distribution to a participant under 59½ carries the additional
tax unless an exception in § 72(t)(2) applies; separation from service at 55 or later is one that often
does.

Watch for an IRA in the facts. There is no such thing as an IRA loan, and the consequence of trying is
not a deemed distribution but loss of the account's status under § 408(e)(2).

## Check yourself

**1.** A participant with a vested balance of 16,000 dollars and no prior loans asks for the largest
permitted loan. What is it?

*Answer: 10,000 dollars. IRC § 72(p)(2)(A)(ii) takes the greater of half the nonforfeitable accrued
benefit (8,000 dollars) or the statutory floor of 10,000 dollars, and the capped limb of clause (i) is
not binding.*

**2.** A loan is written with annual payments over four years. What is the consequence, and when?

*Answer: The entire loan is a deemed distribution at the time it is made. Annual payments fail the
level-amortization requirement of § 72(p)(2)(C), which demands payments at least quarterly, and Reg.
§ 1.72(p)-1, A-4(a) places the deemed distribution at the time the loan is made where the terms are
defective.*

**3.** After a deemed distribution, does the participant's account balance fall, and can the amount be
rolled over?

*Answer: No to both. A deemed distribution is not a distribution of the accrued benefit (Reg.
§ 1.72(p)-1, A-13(a)(2)) and is not eligible for rollover (A-12). The participant is taxed while the
money remains in the plan and the obligation remains outstanding.*

**4.** Two participants are each offset 20,000 dollars in 2026 — one on severance from employment, one on
taking an in-service distribution that the plan's terms required the loan to be repaid from. Do they have
the same rollover deadline?

*Answer: No. The severance offset is a qualified plan loan offset amount under § 402(c)(3)(C)(ii)(II) and
may be rolled over until the extended due date of the 2026 return. The other is an ordinary offset on the
usual 60-day rule.*

**5.** A client who is the sole shareholder and only employee of an S corporation asks whether she may
borrow from the corporation's 401(k) plan. May she?

*Answer: Yes, if the plan permits it and the § 4975(d)(1) conditions are met. IRC § 4975(f)(6)(B)(iii)
limits the owner-employee restriction on plan loans to participants in individual retirement plans, so a
shareholder-employee is not barred.*
