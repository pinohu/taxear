---
title: "Required minimum distributions and excess accumulations"
code: "1.2.2.h"
part: 1
domain: "Income and Assets"
section: "Retirement income"
description: "The distribution is computed per account and the penalty is charged per taxpayer. Which accounts may be pooled to satisfy it decides whether there is a shortfall."
status: review
taxYear: 2026
lastReviewed: "2026-08-19"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 401", title: "Qualified pension, profit-sharing, and stock bonus plans", url: "https://www.law.cornell.edu/uscode/text/26/401" }
  - { type: IRC, ref: "§ 402A", title: "Optional treatment of elective deferrals as Roth contributions", url: "https://www.law.cornell.edu/uscode/text/26/402A" }
  - { type: IRC, ref: "§ 408", title: "Individual retirement accounts", url: "https://www.law.cornell.edu/uscode/text/26/408" }
  - { type: IRC, ref: "§ 408A", title: "Roth IRAs", url: "https://www.law.cornell.edu/uscode/text/26/408A" }
  - { type: IRC, ref: "§ 4974", title: "Excise tax on certain accumulations in qualified retirement plans", url: "https://www.law.cornell.edu/uscode/text/26/4974" }
  - { type: Reg, ref: "§ 1.401(a)(9)-5", title: "Required minimum distributions from defined contribution plans", url: "https://www.law.cornell.edu/cfr/text/26/1.401(a)(9)-5" }
  - { type: Reg, ref: "§ 1.401(a)(9)-9", title: "Life expectancy and Uniform Lifetime tables", url: "https://www.law.cornell.edu/cfr/text/26/1.401(a)(9)-9" }
  - { type: Reg, ref: "§ 1.408-8", title: "Distribution requirements for individual retirement plans", url: "https://www.law.cornell.edu/cfr/text/26/1.408-8" }
  - { type: Form, ref: "5329", title: "Additional taxes on qualified plans and other tax-favored accounts — instructions", url: "https://www.irs.gov/pub/irs-pdf/i5329.pdf" }
forms: []
related: ["1.2.2.b", "1.2.2.c", "1.2.2.g", "1.2.2.a", "1.2.2.e", "1.2.2.i", "1.2.2.j", "1.2.2.l"]
changelog:
  - { date: "2026-08-19", summary: "Initial draft. Sets out the IRC § 401(a)(9)(C) required beginning date and its applicable-age table, the Treas. Reg. § 1.401(a)(9)-5 computation and Uniform Lifetime denominators, the Treas. Reg. § 1.408-8(e) aggregation rules, and the IRC § 4974 excise tax with its § 4974(e) reduced rate and § 4974(d) reasonable-error waiver." }
---

The required minimum distribution is a rule about **timing**, not about tax rates: nothing here changes
what a distribution costs, only when it must be taken. The penalty for missing it, however, is an excise
tax on the taxpayer personally, and the mistake that produces it is almost never arithmetic. It is
pooling — taking one large distribution from one account and assuming it covered everything.

## The rule

**A retirement account cannot be held indefinitely.** A qualified trust must provide that the entire
interest of each employee will be distributed by the required beginning date, or beginning by that date
over the life or life expectancy of the employee and a designated beneficiary (IRC § 401(a)(9)(A)(i),
(ii)). Rules similar to § 401(a)(9) apply to individual retirement accounts and annuities by force of
IRC § 408(a)(6) and (b)(3).

**The required beginning date turns on an "applicable age".** It is April 1 of the calendar year
following the later of the year the employee attains the applicable age or the year the employee retires
(IRC § 401(a)(9)(C)(i)). The retirement leg is withdrawn from a **5-percent owner** (§ 401(a)(9)(C)(ii)(I))
and withdrawn entirely **for purposes of § 408(a)(6) or (b)(3)** (§ 401(a)(9)(C)(ii)(II)) — so an IRA owner
never gets to defer by continuing to work, and the regulation makes the point by directing that an IRA
owner's required beginning date is determined using the rules for 5-percent owners (Reg.
§ 1.408-8(b)(1)(i)). The applicable age itself is set by a two-line schedule in § 401(a)(9)(C)(v).

**The amount is a quotient.** For an individual account, the minimum for each distribution calendar year
is the account balance divided by the applicable denominator (Reg. § 1.401(a)(9)-5(a)(1)). The balance is
the balance as of the last valuation date in the preceding calendar year — for an IRA, 31 December of the
preceding year, with no adjustment for later contributions or distributions (Reg. § 1.408-8(b)(2)). The
denominator during life comes from the Uniform Lifetime Table for the owner's age on their birthday in
the distribution year (Reg. § 1.401(a)(9)-5(c)(1)), unless the **sole** beneficiary at all times during
the year is a spouse more than ten years younger, in which case the joint and last survivor denominator
is used instead (Reg. § 1.401(a)(9)-5(c)(2)(i), (ii)).

**The first year, and only the first, may be deferred.** The distribution for the first distribution
calendar year may be made on or before April 1 of the following year; every other year's must be made by
the end of that year (Reg. § 1.401(a)(9)-5(a)(3)). Deferring therefore stacks two distributions into the
second year — and the second is computed on a balance that has not been reduced by the first.

**A required minimum distribution is not eligible for rollover.** IRC § 408(d)(3)(E) denies rollover
treatment to any amount required to be distributed, and the first dollars distributed in a year for
which one is due are treated as the required amount until it is satisfied (Reg. § 1.408-8(b)(3)). That is
why a required distribution can never be converted to a Roth IRA.

**Roth accounts are outside the lifetime rule.** Notwithstanding § 408(a)(6) and (b)(3), § 401(a)(9)(A)
and the incidental death benefit requirements do not apply to a Roth IRA (IRC § 408A(c)(4)); § 402A(d)(5)
now says the same for a designated Roth account in an employer plan. Both provisions are confined to the
owner's lifetime — after death the rules apply, and Reg. § 1.408-8(b)(1)(ii) treats a Roth IRA owner as
having died before their required beginning date.

**Which accounts may be pooled is the operative rule.** The required distribution is calculated
separately for each IRA, and the sum may then be taken from any one or more of them (Reg.
§ 1.408-8(e)(1)(i)). Only IRAs the individual holds **as owner** aggregate; inherited IRAs aggregate with
each other but only per decedent, and never with the beneficiary's own (Reg. § 1.408-8(e)(2)). Non-Roth
IRAs, Roth IRAs and § 403(b) contracts form three closed groups that cannot satisfy each other (Reg.
§ 1.408-8(e)(3)). Employer plans under § 401(a) are not in this regime at all: each plan must pay its own.

**The excise tax.** Where the amount distributed during the taxable year is less than the minimum
required distribution, a tax on the shortfall is imposed and is **paid by the payee** (IRC § 4974(a)). A
lower rate applies where, within the correction window, the payee both receives a distribution of the
shortfall from the same plan and submits a return reflecting the tax (§ 4974(e)(1), (2)). Separately, the
Secretary **may waive** the tax where the taxpayer establishes that the shortfall was due to reasonable
error and that reasonable steps are being taken to remedy it (§ 4974(d)). The rates and the window are in
the table below.

## Current figures

| Item | 2026 |
| --- | --- |
| Applicable age | {fig:rmd.applicable_age} |
| Required beginning date | {fig:rmd.required_beginning_date} |
| First year only | {fig:rmd.first_year_deferral} |
| The computation | {fig:rmd.computation} |
| Uniform Lifetime denominators | {fig:rmd.uniform_lifetime_divisors} |
| Aggregation | {fig:rmd.aggregation} |
| Roth accounts | {fig:rmd.roth_exempt} |
| Rollover and conversion | {fig:rmd.not_rollover_eligible} |
| Excise tax on a shortfall | {fig:excessaccum.excise_tax} |
| Reduced rate | {fig:excessaccum.reduced_rate} |
| Correction window | {fig:excessaccum.correction_window} |
| Waiver | {fig:excessaccum.waiver} |

## How it works in practice

Work the computation account by account, then decide where to take the money from. For each IRA, take the
31 December balance of the prior year and divide by the denominator for the owner's age this year. Add
the results. That total may come out of any IRA, or several, in any proportion — the aggregate is what
matters. Then check for anything outside the IRA group: a former employer's 401(k) that was never rolled
over pays its own, and a § 403(b) contract pools only with other § 403(b) contracts.

The tax is reported on Form 5329, Part IX. Where relief is sought under § 4974(d), the instructions
direct the taxpayer to enter "RC" and the amount of the shortfall being waived on the dotted line, reduce
the reported shortfall accordingly, and attach a statement of explanation. This is a request, not an
election — the IRS decides. The reduced rate under § 4974(e), by contrast, is not discretionary: it
applies if the two conditions are met.

A distribution is due for the calendar year of the owner's death, and to the extent it was not
distributed to the owner it must be distributed during that year to the beneficiary (Reg.
§ 1.401(a)(9)-5(c)(1)). Everything after that year is governed by a different set of rules.

<div class="scenario">
<h3>Scenario 1 — three accounts, one distribution, one shortfall</h3>

Amara turns 73 in 2026. On 31 December 2025 she held a traditional IRA worth 400,000 dollars, a second
traditional IRA worth 100,000 dollars, and a 401(k) at a former employer worth 300,000 dollars. In
October 2026 she withdraws 30,000 dollars from the larger IRA and treats the year as handled.

Her IRA requirement is 500,000 divided by 26.5, about 18,868 dollars, and taking all of it from one IRA
is expressly permitted by Reg. § 1.408-8(e)(1)(i). Her 401(k) requirement is 300,000 divided by 26.5,
about 11,321 dollars, and the IRA distribution does not touch it — an employer plan is outside the IRA
aggregation group. That whole amount is a shortfall, and IRC § 4974(a) taxes it. If she withdraws it from
the 401(k) and files Form 5329 reflecting the tax within the correction window, § 4974(e)(1) cuts the
rate, and she may also ask for a waiver under § 4974(d).
</div>

<div class="scenario">
<h3>Scenario 2 — the deferral that doubles up</h3>

Bertrand attains the applicable age in 2026 and is retired. His required beginning date is 1 April 2027.
He takes nothing in 2026, and on 15 March 2027 withdraws his 2026 amount.

He has complied: Reg. § 1.401(a)(9)-5(a)(3) permits the first distribution calendar year's amount to be
paid by 1 April of the following year. But 2027 is not a first distribution calendar year, so its amount
is also due — by 31 December 2027 — and it is computed on his 31 December 2026 balance, which the March
withdrawal did not reduce. Two distributions land in one tax year. Nothing is wrong with that; it is
simply a bracket question, and it is why the deferral is usually declined.
</div>

<div class="scenario">
<h3>Scenario 3 — the working owner who cannot defer</h3>

Chidi is 74, still working full time for the company he founded and in which he holds a third of the
stock, and contributes to both the company's 401(k) and a traditional IRA.

For the 401(k), the retirement leg of IRC § 401(a)(9)(C)(i)(II) is unavailable to him: a 5-percent owner
is excluded by clause (ii)(I), so his required beginning date for the plan was fixed by his age, not his
retirement. For the IRA, clause (ii)(II) removes the retirement leg for everyone, so it would have made
no difference even if he owned nothing. He owes a required distribution from each, and the two do not
aggregate with each other.
</div>

<div class="callout trap">

**"I took more than the total, so I am fine" is wrong across groups and right within them.** Excess taken
from one IRA covers the whole IRA group and nothing else. It does not carry forward to a later year
either — each distribution calendar year stands alone.

**The balance is the prior 31 December value.** A market fall in the distribution year does not reduce
the amount required; the only cap is that the requirement can never exceed the whole balance on the date
of distribution (Reg. § 1.401(a)(9)-5(a)(1)).

**The younger-spouse table needs sole beneficiary status for the whole year.** Adding a child as a
co-beneficiary for one day in the year moves the owner back to the Uniform Lifetime Table (Reg.
§ 1.401(a)(9)-5(c)(2)(ii)).

**The § 4974(d) waiver and the § 4974(e) reduced rate are different reliefs.** One is discretionary and
removes the tax; the other is automatic on conditions and merely lowers the rate. A taxpayer can seek
both.
</div>

## How this has changed

**The age has moved twice in four years and is scheduled to move again.** IRC § 401(a)(9)(C)(v) now
carries the applicable age as a two-clause schedule rather than a number: 73 for an individual attaining
age 72 after 2022 and age 73 before 2033, and 75 for an individual attaining age 74 after 2032. The
statute elsewhere still refers to age 70½ — § 401(a)(9)(C)(iii), the actuarial-increase rule — because
that provision was never conformed. Any material written against "age 70½" or "age 72" is describing a
prior schedule, and material that gives a single number for the current one is describing only half of
the present rule.

**The excise tax was halved and made correctable.** Pub. L. 117-328 § 302(a) and (b) cut the
long-standing rate by half and added subsection (e), the reduced rate and the correction window. The
§ 4974(d) reasonable-error waiver predates both and is unchanged; it is now one of two routes rather than
the only one, which materially changes the advice in a missed-distribution case.

**Designated Roth accounts left the lifetime regime.** IRC § 402A(d)(5) now disapplies § 401(a)(9)(A) to
a designated Roth account notwithstanding §§ 403(b)(10) and 457(d)(2). Before that amendment, a Roth
401(k) was subject to lifetime required distributions while a Roth IRA was not, and rolling the plan
balance to a Roth IRA was the standard fix. That planning step is no longer necessary for this reason,
though it may still be desirable for others.

**The regulations were rewritten.** The current Treas. Reg. §§ 1.401(a)(9)-1 through -9 and § 1.408-8
replaced the 2002 regulations, and the language changed with them: what practitioners called the
"applicable distribution period" or "life expectancy factor" is now the **applicable denominator**, and
the aggregation rules that used to sit in a question-and-answer format at § 1.408-8 A-9 are now at
§ 1.408-8(e). Citations to the Q&A numbering no longer resolve.

## Exam focus

Expect a computation with **more than one account type**, because that is where the rule bites. Sort the
accounts into groups first — IRAs as owner, IRAs as beneficiary of one decedent, § 403(b) contracts, each
§ 401(a) plan separately — and only then divide.

Expect the **applicable age** to be tested as a date rather than a number: given a birth year, identify
the required beginning date. Watch for the 5-percent owner and for the fact that the still-working
deferral never applies to an IRA.

Expect **both excise-tax rates** together with the reasonable-error waiver. A question describing a
taxpayer who discovers the shortfall and immediately withdraws it is pointing at § 4974(e)(1); one that
describes a custodian's error and a corrected distribution is pointing at § 4974(d).

Do not confuse this excise tax with the additional tax on early distributions. They sit at opposite ends
of the same account's life, and only this one is measured by a shortfall.

## Check yourself

**1.** A taxpayer holds two traditional IRAs and one § 403(b) contract, all subject to required
distributions. May a single withdrawal from the larger IRA satisfy all three?

*Answer: No. It satisfies both IRAs, because Reg. § 1.408-8(e)(1)(i) permits the aggregate IRA amount to
come from any one of them, but Reg. § 1.408-8(e)(3) forbids a distribution from a non-Roth IRA from
satisfying a § 403(b) contract.*

**2.** An IRA owner's required minimum distribution for 2026 is 20,000 dollars and she withdraws 12,000
dollars. What is the excise tax, and how might it be reduced?

*Answer: 25 percent of the 8,000-dollar shortfall, so 2,000 dollars, under IRC § 4974(a). Distributing
the 8,000 dollars from the same plan and filing a return reflecting the tax within the correction window
substitutes the 10 percent rate under § 4974(e)(1); a waiver may also be requested under § 4974(d).*

**3.** A 78-year-old with a Roth IRA and a traditional IRA asks whether the Roth balance is included in
the computation. Is it?

*Answer: No. IRC § 408A(c)(4) disapplies § 401(a)(9)(A) to a Roth IRA during the owner's lifetime, and
Reg. § 1.408-8(e)(3) keeps Roth IRAs out of the non-Roth IRA aggregation group in both directions.*

**4.** May a taxpayer who is due a required minimum distribution convert the whole IRA to a Roth IRA and
count the conversion as satisfying it?

*Answer: No, on both halves. IRC § 408(d)(3)(E) denies rollover treatment to a required amount, so it
cannot be converted, and Reg. § 1.408-8(b)(3) treats the first dollars distributed in the year as the
required amount — which must be taken in cash before anything is converted.*

**5.** Why does deferring the first year's distribution to 1 April often cost more than it saves?

*Answer: Because only the first distribution calendar year may be deferred (Reg. § 1.401(a)(9)-5(a)(3)).
The second year's amount is still due by 31 December of that year and is computed on the prior
31 December balance, which the deferred distribution did not reduce — so two amounts fall in one year.*
