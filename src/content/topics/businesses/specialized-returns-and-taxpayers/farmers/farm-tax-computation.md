---
title: "Farm tax computation (e.g., Schedule J, Schedule SE, estimated tax)"
code: "2.3.4.e"
part: 2
domain: "Specialized Returns and Taxpayers"
section: "Farmers"
description: "A farmer gets one estimated tax payment a year instead of four, and the price of that concession is losing the prior-year safe harbour everyone else relies on."
status: published
taxYear: 2026
lastReviewed: "2026-08-21"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 6654", title: "Failure by individual to pay estimated income tax", url: "https://www.law.cornell.edu/uscode/text/26/6654" }
  - { type: IRC, ref: "§ 1301", title: "Averaging of farm income", url: "https://www.law.cornell.edu/uscode/text/26/1301" }
  - { type: IRC, ref: "§ 1402", title: "Definitions", url: "https://www.law.cornell.edu/uscode/text/26/1402" }
  - { type: IRC, ref: "§ 1401", title: "Rate of tax", url: "https://www.law.cornell.edu/uscode/text/26/1401" }
  - { type: IRC, ref: "§ 164", title: "Taxes", url: "https://www.law.cornell.edu/uscode/text/26/164" }
  - { type: IRC, ref: "§ 263A", title: "Capitalization and inclusion in inventory costs of certain expenses", url: "https://www.law.cornell.edu/uscode/text/26/263A" }
  - { type: IRC, ref: "§ 461", title: "General rule for taxable year of deduction", url: "https://www.law.cornell.edu/uscode/text/26/461" }
  - { type: IRC, ref: "§ 172", title: "Net operating loss deduction", url: "https://www.law.cornell.edu/uscode/text/26/172" }
  - { type: IRC, ref: "§ 1", title: "Tax imposed", url: "https://www.law.cornell.edu/uscode/text/26/1" }
  - { type: IRC, ref: "§ 199A", title: "Qualified business income", url: "https://www.law.cornell.edu/uscode/text/26/199A" }
forms: ["Schedule J", "Schedule SE", "4835"]
related: ["2.3.4.a", "2.3.4.d", "2.3.4.b", "2.3.4.c"]
changelog:
  - { date: "2026-08-21", summary: "Initial draft. Sets out the IRC § 6654(i) estimated tax regime for farmers — one installment due 15 January at 66⅔ percent of the current year's tax, the 1 March alternative substituted into IRC § 6654(h), and the express disregard of the prior-year safe harbour — the IRC § 6654(i)(2) two-thirds test measured on either year, the IRC § 1301 farm income averaging election, and self-employment tax on Schedule F income including the optional method." }
  - { date: "2026-08-25", summary: "Added a plain-language summary, glossary marks, and typed scenarios." }
---

<div class="plain-terms">
This page explains two special tax rules built just for farmers. It matters if you run a farming
business and pay estimated tax during the year, or if you had one especially good year after several
lean ones. It does not apply to other kinds of business owners, who follow different estimated tax
rules. A farmer gets to make one estimated tax payment a year instead of four, which is a real
convenience, but it comes with a catch explained here. A farmer can also spread a big income year
backward across the past three years to smooth out the tax bite. The page decides how much a farmer
must pay and when, and how much tax relief the averaging choice actually delivers.
</div>

Two computations distinguish a farm return from any other Schedule C business, and they pull in
opposite directions. The estimated tax rules are a concession, replacing four payments with one. The
income averaging election is a relief, spreading a good year backwards across three. Between them
sits {gloss:self-employment-tax}, which is computed the ordinary way but on an income figure that can
swing violently from year to year.

## The rule

**Who is a farmer for this purpose** (IRC § 6654(i)(2)). {fig:fc.farmer_defined} The test is gross income, not net, and
it can be met on either the current year or the preceding year — a farmer who has one bad year does
not lose the concession.

**One payment, not four.** {fig:fc.one_installment} {fig:fc.march_1} The 1 March route is not an
extension of the 15 January installment; it is a separate way of avoiding the addition to tax
altogether, by filing the return and paying in full.

**And what it costs.** {fig:fc.no_prior_year_safe_harbour} That is the trade. Everyone else may pay
100 percent of last year's tax and be safe whatever this year brings. A farmer must estimate the
current year to within a third.

**Averaging a good year.** {fig:fc.1301} {fig:fc.1301_elected} {fig:fc.1301_limits} The election does
not amend the three prior years; it computes a hypothetical increase in those years' tax and adds it
to the current year's liability. The prior returns are untouched.

**Self-employment tax.** {fig:se.net_earnings} {fig:se.rates} {fig:se.wage_base} {fig:se.floor}
{fig:se.deduction} Schedule F net profit is net earnings from self-employment; a Form 4835 landlord's
income is not.

**The optional method.** {fig:se.optional_farm} {fig:se.optional_limits} {fig:se.optional_2025} The
farm optional method exists to let a farmer with a poor year still earn Social Security credits, and
unlike the non-farm optional method it may be used for an unlimited number of years.

**Losses do not run free.** A farm's bad year is limited twice over — by the excess business loss
rule of IRC § 461(l) before it reaches other income, and by IRC § 172 once it becomes a
{gloss:net-operating-loss}. Both of those are general rules rather than farm rules, but they bite hardest on a business
whose income is this volatile.

## Current figures

| Item | 2026 |
| --- | --- |
| Farmer or fisherman test | {fig:fc.farmer_defined} |
| Single installment | {fig:fc.one_installment} |
| The 1 March alternative | {fig:fc.march_1} |
| No prior-year safe harbour | {fig:fc.no_prior_year_safe_harbour} |
| Income averaging | {fig:fc.1301} |
| Elected farm income | {fig:fc.1301_elected} |
| Self-employment rates | {fig:se.rates} |
| Wage base | {fig:se.wage_base} |
| Self-employment floor | {fig:se.floor} |
| Farm optional method | {fig:se.optional_farm} |

## How it works in practice

Test the two-thirds threshold on gross income and on both years before advising on payments. A
farmer whose farm receipts are three quarters of total gross receipts is over the threshold even if
the farm made a loss on net, and the preceding-year limb means a single atypical year does not cost
the concession. Miss the threshold and the ordinary
four-installment regime applies from the first quarter, retrospectively.

Choose deliberately between 15 January and 1 March. Paying a single installment on 15 January
requires estimating the year's tax to within two thirds, which is achievable for a farmer whose
selling is done by December. Filing and paying in full by 1 March avoids the estimate entirely but
requires a complete return in eight weeks, which for a farm with depreciation elections and inventory
questions is tight. Where the year's results are still uncertain in January, the 1 March route is
usually the safer one — but it must be both filed and paid, not merely filed.

For income averaging, remember what the election actually does. It computes the tax as if one third
of the elected farm income had been added to each of the three base years, then adds that increase
to the tax on the reduced current-year income. Nothing is carried back and no prior return is
amended, so the prior years' credits, phase-outs and alternative minimum tax are recomputed only
inside the calculation. The election is made on Schedule J and can be revisited by amending the
current-year return, so a farmer who elects and later regrets it is not stuck.

Watch the interaction between averaging and self-employment tax: there is none. IRC § 1301 reduces
the tax imposed by IRC § 1 only. Self-employment tax under IRC § 1401 is computed on the year's actual
net earnings regardless of the election, so a farmer averaging a large year still pays the full
self-employment tax on it in that year.

<div class="scenario" data-type="procedural">

<h3>The January estimate</h3>

A cattle rancher's gross income for 2026 is $620,000, of which $560,000 is from farming. His 2025
tax was $38,000. By early January 2027 he estimates his 2026 tax at about $71,000 but is not
confident — a large deferred livestock sale election is still open and the depreciation position
depends on a machinery purchase made in December.

He is a farmer under IRC § 6654(i)(2)(A): farming gross income of $560,000 against total gross income
of $620,000 is over two thirds. So he has one required installment, due 15 January 2027. The amount
is 66⅔ percent of the tax shown on the 2026 return — about $47,300 if his estimate is right — and
IRC § 6654(i)(1)(C) expressly disregards the prior-year safe harbour, so paying $38,000 or
$41,800 based on 2025 does nothing for him. Given the uncertainty, the better course is to make no
January payment at all and instead file the 2026 return and pay in full by 1 March 2027, which
IRC § 6654(i)(1)(D) substitutes for the 31 January date in IRC § 6654(h) and which removes the
addition to tax on the single installment entirely.

</div>

<div class="scenario" data-type="baseline">

<h3>The year the crop came in</h3>

A grain farmer's taxable income is $38,000, $41,000 and $29,000 for 2023, 2024 and 2025. In 2026 a
combination of yield and price gives her taxable income of $310,000, of which $290,000 is attributable
to the farming business. She elects to average $210,000 of it.

The computation runs in two parts. First, tax under IRC § 1 on $310,000 less the $210,000 of elected
farm income, so on $100,000. Second, the increase in tax that would result if each of 2023, 2024 and
2025 had $70,000 more taxable income — one third of $210,000 — added to it. Those three base years
were in low brackets, so the additional $70,000 in each is taxed largely at rates well below the
marginal rate she would otherwise face on the 2026 income. The sum of the two parts is her 2026
IRC § 1 tax. Her 2023 to 2025 returns are not amended and her self-employment tax on the 2026 farm
profit is unaffected — IRC § 1301 reduces only the tax imposed by IRC § 1.

</div>

<div class="scenario" data-type="boundary">

<h3>The bad year and the credits</h3>

A vegetable grower has gross farm income of $9,400 in 2026 and a net farm loss of $3,100 after
expenses. He has no other earned income. He is 54 and short of the quarters of coverage he needs for
Social Security.

With a net loss there are no net earnings from self-employment, so no self-employment tax and no
credits — the IRC § 1402(b)(2) floor of $400 is not reached from below. The farm optional method in
IRC § 1402(a) offers a route: because gross farm income does not exceed the upper limit, he may elect
to treat net earnings as two thirds of gross farm income. On $9,400 of gross income that is about
$6,270, on which he pays self-employment tax he would otherwise avoid — and earns four quarters of
coverage. Unlike the non-farm optional method, the farm method has no limit on the number of years it
may be used. Whether it is worth paying the tax depends entirely on his coverage record, which is a
Social Security question rather than a tax one.

</div>

<div class="callout trap">

**The prior-year safe harbour does not apply to a farmer.** IRC § 6654(i)(1)(C) disregards
IRC § 6654(d)(1)(C) expressly. Paying 100 percent of last year's tax, which protects every other
individual, protects a farmer from nothing. This is the price of the single-installment concession
and it is a favourite examination point.

</div>

<div class="callout trap">

**1 March is a filing-and-payment date, not a payment extension.** IRC § 6654(h) as modified requires
the taxpayer to file the return *and* pay in full the amount shown as payable. A farmer who pays by
1 March without filing, or files without paying, gets nothing from the provision.

</div>

<div class="callout trap">

**Two thirds is gross income, and either year will do.** IRC § 6654(i)(2) tests gross income from
farming or fishing against total gross income, and satisfying it on the preceding year's return is
enough. Answers using net farm income, or requiring the current year alone, are wrong on both counts.

</div>

<div class="callout trap">

**Income averaging does not touch self-employment tax.** IRC § 1301(a) recomputes "the tax imposed by
section 1." Self-employment tax is imposed by IRC § 1401 and is unaffected, as are the additional
Medicare tax and the net investment income tax. A question offering a reduced self-employment tax as
a consequence of a Schedule J election is wrong.

</div>

## How this has changed

Farm income averaging was reintroduced by the Taxpayer Relief Act of 1997 as a three-year election
and made permanent shortly afterwards; the modern version at IRC § 1301 has been stable since. What
changed materially was the interaction with the alternative minimum tax — averaging once could
increase alternative minimum tax and claw back most of the benefit, and the American Jobs Creation
Act of 2004 fixed that by keeping the averaging adjustment out of the alternative minimum tax
computation.

The estimated tax structure at IRC § 6654(i) is older and has not moved, but the environment around
it has. The 1 March filing route was comfortable when farm returns were simple; a modern return with
depreciation elections, deferred livestock sale elections and IRC § 199A computations is a harder
document to complete in eight weeks, so more farmers now make the January installment and accept the
estimating risk.

The excess business loss limitation at IRC § 461(l) was suspended for 2018 through 2020 by the
Coronavirus Aid, Relief, and Economic Security Act, restored, and then made permanent by
Pub. L. 119-21 § 70601. Farm losses had a special two-year net operating loss carryback which was
removed and partially restored during the same period; the current position is the general
IRC § 172 rule with no farm-specific carryback.

Self-employment tax itself has not changed in structure, but the additional 0.9 percent hospital
insurance tax added by the Patient Protection and Affordable Care Act in 2013 falls on farm earnings
like any other, and unlike the old-age portion it has no ceiling.

## Exam focus

Know the two-thirds test on gross income and that either the current or the preceding year satisfies
it. Know the single installment, the 15 January date, the 66⅔ percent measure, and that the
prior-year safe harbour is disregarded.

Know the 1 March alternative and that it requires both filing and payment. Expect a question giving a
calendar-year farmer who made no estimated payments and asking the last date to pay without penalty.

Know what income averaging does and does not do: it recomputes the IRC § 1 tax using the three base
years, does not amend them, and does not affect self-employment tax. Know that the farm optional
method may be used without limit on the number of years.

## Check yourself

**1.** A calendar-year farmer with all his income from farming made no estimated payments during
2026. What is the latest date he can pay without an addition to tax?

*Answer:* 1 March 2027 — but only if he also files the 2026 return by that date and pays in full the
amount shown as payable. IRC § 6654(i)(1)(D) substitutes 1 March for the 31 January date in
IRC § 6654(h) and treats the single farmer installment as the fourth required installment. Paying
without filing does not work.

**2.** A farmer's 2025 tax was $60,000. Her 2026 tax will be about $95,000. She pays $60,000 on
15 January 2027. Is she protected?

*Answer:* No. IRC § 6654(i)(1)(C) computes the required installment by substituting 66⅔ percent for
90 percent in IRC § 6654(d)(1)(B) *and without regard to* IRC § 6654(d)(1)(C), which is the
prior-year safe harbour. She needed 66⅔ percent of $95,000, or about $63,333. The $60,000 falls
short and the addition to tax runs on the shortfall.

**3.** A farmer's gross income for 2026 is $300,000, of which $150,000 is from farming. His 2025
return showed $280,000 of gross income with $220,000 from farming. Is he a farmer for estimated tax
purposes in 2026?

*Answer:* Yes. The 2026 year alone fails — $150,000 of $300,000 is exactly half, below two thirds.
But IRC § 6654(i)(2)(B) allows the test to be met on the preceding year's return, and $220,000 of
$280,000 is about 78.6 percent. Either limb suffices, so he keeps the single-installment treatment
for 2026.

**4.** A farmer elects to average $150,000 of 2026 farm income. Her self-employment tax on the 2026
Schedule F profit is $22,000 before the election. What is it after?

*Answer:* $22,000. IRC § 1301(a) recomputes only "the tax imposed by section 1." Self-employment tax
is imposed by IRC § 1401 on the year's actual net earnings and is untouched by the election, as are
the additional Medicare tax and the net investment income tax.

**5.** A farmer has used the farm optional method in each of the last six years. May she use it
again?

*Answer:* Yes. The farm optional method in IRC § 1402(a) has no limit on the number of years it may
be used, which is the principal difference between it and the non-farm optional method, and it is
available whenever gross farm income does not exceed the upper limit, or gross farm income exceeds
that limit but net earnings fall below the lower limit.
