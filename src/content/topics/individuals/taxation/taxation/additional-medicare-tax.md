---
title: "Additional Medicare tax"
code: "1.4.1.j"
part: 1
domain: "Taxation"
section: "Taxation"
description: "Withholding starts at one figure and liability at another, so the two almost never agree. Form 8959 exists to settle the difference in whichever direction it falls."
status: published
taxYear: 2026
lastReviewed: "2026-08-19"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 3101", title: "Rate of tax — employee FICA", url: "https://www.law.cornell.edu/uscode/text/26/3101" }
  - { type: IRC, ref: "§ 3102", title: "Deduction of tax from wages", url: "https://www.law.cornell.edu/uscode/text/26/3102" }
  - { type: IRC, ref: "§ 1401", title: "Rate of tax — self-employment", url: "https://www.law.cornell.edu/uscode/text/26/1401" }
  - { type: IRC, ref: "§ 1411", title: "Imposition of tax on net investment income", url: "https://www.law.cornell.edu/uscode/text/26/1411" }
  - { type: Pub, ref: "IRS Topic no. 554", title: "Self-employment tax and additional Medicare tax", url: "https://www.irs.gov/taxtopics/tc554" }
forms: []
related: ["1.4.1.i", "1.4.1.e", "1.4.1.d", "1.4.1.b", "1.4.1.k"]
changelog:
  - { date: "2026-08-19", summary: "Initial draft. Sets out the IRC § 3101(b)(2) and § 1401(b)(2) 0.9 percent tax with its unindexed thresholds, the mismatch between the § 3102(f)(1) withholding trigger and the liability threshold, the absence of any employer match, the ordering rule between wages and self-employment income, and the relationship with the § 1411 net investment income tax." }
  - { date: "2026-08-25", summary: "Added a plain-language summary, two typed scenarios (timing, procedural), and glossary marks." }
---

<div class="plain-terms">
This is an extra Medicare tax on top of the regular one. It kicks in once a worker's pay, or a
self-employed person's earnings, cross a set dollar line for the year. It hits higher earners, and it
often catches two-earner couples by surprise, since each spouse can earn a solid amount and still cross
the joint line together. It does not touch anyone whose total pay stays under that line. The tricky part
is timing: an employer only sees its own paychecks, so it may hold back too little, or nothing at all,
even when the tax is truly owed. This page shows how the real amount owed is worked out, and how any gap
gets settled when the return is filed.
</div>

Every other employment tax is withheld at the rate the employee owes. This one is not. The employer
withholds once wages from that employer pass one figure, while the employee's liability is measured
against a different figure that depends on filing status and on income the employer knows nothing about.
The result is a mismatch in both directions, settled on Form 8959.

## The rule

**The tax.** {fig:addmed.rate} It applies to wages under § 3101(b)(2), to self-employment income under
§ 1401(b)(2), and to railroad retirement compensation under the parallel provision. There is no
corresponding employer tax — the ordinary 1.45 percent hospital insurance tax has an employer match and
this addition does not.

**The threshold.** {fig:addmed.threshold} Note that the married-filing-separately figure is half the
joint figure, not half of the figure for a single filer.

**Withholding is on a different trigger** (IRC § 3102(f)(1)). {fig:addmed.withholding} Three
consequences follow. An employer withholds nothing for a joint-filing couple each earning just under the
trigger, though together they are well over their threshold. It withholds on a married taxpayer filing
separately by reference to the trigger rather than to that taxpayer's much lower threshold, and
under-withholds. And a single taxpayer with two employers each paying below the trigger has no
withholding at all and a real liability.

**Wages first, then self-employment income.** The threshold applies to the combined amount, with wages
taken first: for self-employment income the threshold is reduced — but not below zero — by the wages
taken into account (IRC § 1401(b)(2)(B)). So there is one threshold, not two, and splitting income
between employment and self-employment does not avoid the tax.

**No deduction, either half.** The additional tax is disregarded both in the § 1402(a)(12) reduction of
net earnings and in the § 164(f) deduction for one half of self-employment tax (IRC § 1402(a)(12)(B)).
It is the one component of self-employment tax that gets neither of the two halvings.

**It is not the net investment income tax.** The two share their threshold figures and nothing else.
This one reaches earned income; § 1411 reaches investment income; and § 1411(c)(6) makes sure the same
dollar is never in both.

## Current figures

| Item | Amount |
| --- | --- |
| Rate | {fig:addmed.rate} |
| Threshold | {fig:addmed.threshold} |
| Withholding trigger | {fig:addmed.withholding} |

## How it works in practice

**Compute the liability from the return, not from the Forms W-2.** Add wages, railroad retirement
compensation and self-employment income; compare the total to the threshold for the filing status; take
0.9 percent of the excess.

**Then subtract what was actually withheld.** Whatever the employer took is a credit against the
liability. If it withheld more than the taxpayer owes — the classic case being a single high earner in a
household whose joint threshold is not reached — the excess comes back as an overpayment.

**Then check the estimated tax position.** A taxpayer who will owe this tax and will not have it
withheld should either increase withholding or make estimated payments. It is a common cause of a small
unexpected balance due, and of an underpayment addition on top of it.

The planning point is narrow but real: because withholding keys off a single employer's wages, a
two-earner couple or a taxpayer with several jobs will almost always be under-withheld. Asking for
additional income tax withholding on a Form W-4 is the simplest fix, since additional withholding is
credited against total liability without regard to which tax it was labelled for.

<div class="scenario" data-type="baseline">
<h3>Wages and self-employment income together</h3>

Kwabena is single with $185,000 of wages and $35,000 of net self-employment income.

Neither source alone crosses the $200,000 threshold, and his employer withholds nothing because his
wages are below the § 3102(f)(1) trigger. But the threshold applies to the combined $220,000. The excess
is $20,000, and the tax is 0.9 percent of it — $180 — reported and paid with his return on Form 8959.
The wages are counted first and reduce the threshold available to the self-employment income to $15,000,
which produces the same answer by the other route.
</div>

<div class="scenario" data-type="interaction">
<h3>Withheld too much, on a joint return</h3>

Amara earns $210,000 and her husband Tobias earns $65,000. Her employer withholds the additional
Medicare tax on the $10,000 of her wages above $200,000 — $90.

Their joint threshold is $250,000 and their combined wages are $275,000, so their actual liability is
0.9 percent of $25,000, or $225. Credit for the $90 already withheld leaves $135 payable with the
return. Had Tobias earned nothing, the same $90 would have been withheld against a liability of zero,
and the $90 would have come back as part of their refund.
</div>

<div class="scenario" data-type="boundary">
<h3>Two employers, no withholding, real liability</h3>

Sione is single and works for two unrelated companies, each paying $150,000.

Neither employer's wages exceed $200,000, so under § 3102(f)(1) neither withholds anything — and
§ 3102(f)(1) expressly allows an employer to disregard other wages. His combined wages are $300,000, his
threshold is $200,000, and he owes 0.9 percent of $100,000, or $900, entirely at filing. This is the
same structural problem as excess social security withholding at 1.4.1.e, running in the opposite
direction: there, two employers cause over-withholding; here, they cause none at all.
</div>

<div class="scenario" data-type="timing">
<h3>The threshold that got smaller in real terms</h3>

Priyanka earned $185,000 in wages in 2014, comfortably under the $200,000 threshold, and owed nothing on
this tax. She kept the same job, and by 2026 ordinary raises — mostly tracking inflation rather than a
promotion — brought her wages to $205,000.

The threshold has not moved since 2013, so the same $200,000 line that missed her in 2014 catches her in
2026. Her employer withholds 0.9 percent of the $5,000 above the line, or $45. Nothing about the statute
changed to cause it; her nominal pay simply grew while the line stood still.
</div>

<div class="scenario" data-type="procedural">
<h3>No employer to withhold at all</h3>

Genevieve is a self-employed consultant with no wages and $260,000 of net self-employment income for the
year. No employer exists to withhold anything on her behalf, so the entire tax is her own responsibility.

She works out her liability — 0.9 percent of the $60,000 above the single filer's $200,000 threshold, or
$540 — and includes it with her quarterly estimated payments alongside her regular
{gloss:self-employment-tax}, rather than waiting to report it only at filing. Because this tax is
separate from the {gloss:net-investment-income-tax}, she owes it even though none of her income is
investment income.
</div>

<div class="callout trap">

**Withholding and liability use different figures.** A fixed amount per employer for withholding; the
filing status threshold for liability. They agree only by coincidence.

**There is no employer match.** The employer withholds and remits but pays nothing of its own.

**The married-filing-separately threshold is half the joint figure**, not half of the single figure.

**One threshold, not two.** Wages are counted first and reduce the threshold available to
self-employment income, so splitting income between the two does not help.

**Neither halving applies.** The additional tax is outside both the § 1402(a)(12) base reduction and the
§ 164(f) deduction — unlike every other part of self-employment tax.

**It can be over-withheld.** A single earner above the withholding trigger in a household below the
joint threshold gets the excess back; it is not a cost.

**It is not the net investment income tax.** Same thresholds, different base, and § 1411(c)(6) keeps the
same dollar out of both.

**The thresholds are not indexed.** They have been the same figures since 2013.
</div>

## How this has changed

Nothing has changed. Sections 3101(b)(2) and 1401(b)(2) were added by Pub. L. 111-148 § 9015 and
amended by Pub. L. 111-152 § 1402(b), applying to remuneration received and taxable years beginning
after 31 December 2012, and neither has been amended since. Pub. L. 119-21 did not touch them.

The point of currency is the same as for the net investment income tax: the thresholds are fixed dollar
amounts in the statute with no indexing provision. Thirteen years on, figures set well above the median
household income now catch a substantial number of two-earner professional households. Nothing in the law has moved; the incomes have.

One consequence deserves attention because it compounds each year. Because the § 3102(f)(1) withholding
trigger is also fixed and applies per employer, the gap between what is withheld and what is owed widens
as more taxpayers cross the liability threshold through combined income rather than through a single
large salary. The mismatch is not a defect that will be corrected administratively — it is what
the statute directs — so it should be planned around rather than waited out.

## Exam focus

The computation is straightforward and the examiners test the mismatch rather than the arithmetic.
Expect a fact pattern with two earners, or with wages plus self-employment income, where the answer
requires combining amounts the employer never saw.

Know the two figures and which is which: the fixed per-employer amount for withholding, and the filing
status threshold for liability. Know that the married-filing-separately threshold is half the joint
one.

Know that there is no employer match, that wages are counted before self-employment income against a
single threshold, and that the tax gets neither of the two halvings that apply to the rest of
self-employment tax. And know that over-withholding is recovered on the return.

## Check yourself

**1.** A single taxpayer has $185,000 of wages and $35,000 of self-employment income. What is the
additional Medicare tax?

*Answer: $180. The threshold applies to the combined $220,000, giving an excess of $20,000 taxed at 0.9
percent. Neither source alone crosses the threshold, and the employer withholds nothing because the
wages are below the § 3102(f)(1) trigger.*

**2.** A married couple filing jointly earn $210,000 and $65,000. The higher earner's employer withheld
the tax on wages above $200,000. What is payable with the return?

*Answer: $135. Combined wages of $275,000 exceed the $250,000 joint threshold by $25,000, giving a
liability of $225. The employer withheld 0.9 percent of $10,000, or $90, which is credited, leaving
$135.*

**3.** Two employers each pay a single taxpayer $150,000. How much do they withhold?

*Answer: Nothing. IRC § 3102(f)(1) requires withholding only to the extent the taxpayer receives wages
from that employer in excess of $200,000, and expressly permits the employer to disregard other wages.
The taxpayer owes 0.9 percent of $100,000 at filing.*

**4.** Does the additional Medicare tax on self-employment income enter the deduction for one half of
self-employment tax?

*Answer: No. The § 1401(b)(2) tax is disregarded both in the § 1402(a)(12) reduction of net earnings and
in the § 164(f) deduction for one half of the tax. It is the only component of self-employment tax that
receives neither halving.*

**5.** A married taxpayer files separately with $210,000 of wages. Is the employer's withholding enough?

*Answer: No. The employer withholds on the $10,000 above $200,000, but the threshold for a married
individual filing separately is $125,000 — half the joint figure — so the liability is 0.9 percent of
$85,000. The difference is settled on Form 8959.*
