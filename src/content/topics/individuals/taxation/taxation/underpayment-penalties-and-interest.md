---
title: "Underpayment penalties and interest"
code: "1.4.1.c"
part: 1
domain: "Taxation"
section: "Taxation"
description: "Three separate charges with three different rates, and the one most often described wrongly is the estimated tax addition — it is interest, not a flat monthly percentage."
status: published
taxYear: 2026
lastReviewed: "2026-08-19"
reviewedBy: "Draft for N. O. review"
authorities:
  - { type: IRC, ref: "§ 6654", title: "Failure by individual to pay estimated income tax", url: "https://www.law.cornell.edu/uscode/text/26/6654" }
  - { type: IRC, ref: "§ 6651", title: "Failure to file tax return or to pay tax", url: "https://www.law.cornell.edu/uscode/text/26/6651" }
  - { type: IRC, ref: "§ 6601", title: "Interest on underpayment, nonpayment, or extensions of time for payment of tax", url: "https://www.law.cornell.edu/uscode/text/26/6601" }
  - { type: IRC, ref: "§ 6621", title: "Determination of rate of interest", url: "https://www.law.cornell.edu/uscode/text/26/6621" }
  - { type: RevProc, ref: "Rev. Proc. 2025-32, § 3.52", title: "Minimum failure to file addition for returns required to be filed in 2027", url: "https://www.irs.gov/pub/irs-drop/rp-25-32.pdf" }
  - { type: Pub, ref: "IRS quarterly interest rates", title: "Published underpayment and overpayment rates by quarter", url: "https://www.irs.gov/payments/quarterly-interest-rates" }
forms: []
related: ["1.4.1.a", "1.1.1.k", "1.4.1.b", "1.1.1.d", "1.4.1.d", "1.4.1.f", "1.4.1.g", "1.5.1.j"]
changelog:
  - { date: "2026-08-19", summary: "Initial draft. Sets out the IRC § 6654 estimated tax addition — its four installments, the required annual payment and the 110 percent rule, the three exceptions and the annualised income method — the § 6651 failure to file and failure to pay additions with their interaction and the indexed 60-day minimum, and interest under §§ 6601 and 6621 with the 2026 published quarterly rates." }
  - { date: "2026-08-25", summary: "Added a plain-language summary, glossary marks, two typed scenarios (fails, procedural) alongside the three existing ones now typed boundary/timing/interaction, and a decision diagram of the § 6654 exceptions. The threshold archetype was considered and rejected: the relevant figures bundle several numbers into one string and would garble on the number line." }
diagram:
  archetype: "decision"
  caption: "Does the § 6654 estimated tax addition apply?"
  tests:
    - { test: "Tax owed, after withholding, under the de minimis figure?", result: "No addition — § 6654(e)(1)", outcome: "pass" }
    - { test: "No tax liability at all for a full 12-month preceding year?", result: "No addition — § 6654(e)(2)", outcome: "pass" }
    - { test: "Paid at least the required annual payment by each due date?", result: "No addition — the safe harbour is met", outcome: "pass" }
    - { test: "None of the above", result: "Addition runs quarter by quarter, at the § 6621 rate", outcome: "fail" }
---

<div class="plain-terms">
This page explains what happens when someone pays too little tax during the year, or pays late. Three separate charges can apply. Each one is figured a different way, and more than one can hit the same return. It affects anyone who owes tax beyond what came out of their paycheck. That means the self-employed, and people with investment or business income, most of all. It decides whether a taxpayer paid enough through the year. It decides what happens when a return or a payment is late. And it decides how interest keeps adding up on unpaid tax the whole time, no matter the reason for the delay.
</div>

A taxpayer who pays late can face three different charges at three different rates, and they are
frequently confused with one another. The estimated tax addition under § 6654 is computed at an interest
rate for the days an installment was short. The failure to pay addition under § 6651(a)(2) is a flat
half a percent a month. Interest under § 6601 runs on the tax from the due date until payment. Any of
them can apply without the others.

## The rule

**The estimated tax addition.** This is one form of {gloss:underpayment-penalty}. Section 6654(a) adds to tax an amount found by applying the § 6621
underpayment rate to the amount of the underpayment for the period of the underpayment. It is therefore
interest in everything but name, and describing it as a fixed monthly percentage is wrong. The
underpayment is the excess of the required installment over what was paid by its due date (IRC
§ 6654(b)(1)), and the period runs from that due date to the earlier of the date paid or the following
15 April (IRC § 6654(b)(2)).

**The installments.** {fig:estpen.installments}

**The required annual payment.** {fig:estpen.required_annual_payment} The prior-year safe harbour is not
available if the preceding year was not a full 12 months or if no return was filed for it (IRC
§ 6654(d)(1)(B), closing sentence). Note what the safe harbour protects: paying 100 or 110 percent of
last year's tax defeats the addition entirely, however large this year's liability turns out to be.

**Three exceptions.** {fig:estpen.de_minimis} {fig:estpen.no_prior_liability} And a waiver where the
Secretary determines that a casualty, disaster or other unusual circumstance makes the addition contrary
to equity and good conscience (IRC § 6654(e)(3)(A)).

**The retirement and disability waiver is discretionary.** {fig:estpen.retirement_waiver} Both limbs
must be satisfied, and both are for the Secretary to determine — being retired and over 62 is not by
itself an exception.

**The annualised income method.** Where the taxpayer establishes that the annualised income installment
for a quarter is lower than 25 percent of the required annual payment, that lower figure becomes the
required installment — but the reduction is recaptured by increasing the next installment, and later
ones until it is fully recovered (IRC § 6654(d)(2)(A)(i), (ii)). It is the answer for income that
arrives late in the year, and it is why a large fourth-quarter capital gain need not produce an addition
for the first three quarters.

**Withholding is treated as paid evenly.** Tax withheld is credited in equal parts across the four
installments unless the taxpayer establishes the actual dates. This is the mechanism behind the standard
fix for a taxpayer who has fallen behind: increasing withholding late in the year repairs earlier
quarters in a way that a late estimated payment cannot.

**Failure to file and failure to pay.** {fig:ftf_ftp.rates} Both yield to the {gloss:reasonable-cause-defense} and absence
of wilful neglect. {fig:ftf_ftp.interaction} And {fig:ftf.minimum}.

**Interest.** Section 6601(a) charges interest at the § 6621 underpayment rate from the last date
prescribed for payment to the date paid. {fig:interest.underpayment_rate} The overpayment side is
{fig:interest.overpayment_rate}. Interest is not a penalty: reasonable cause does not abate it, and it
runs on additions to tax as well as on the tax itself.

## Current figures

| Item | Amount |
| --- | --- |
| Required annual payment | {fig:estpen.required_annual_payment} |
| Installments | {fig:estpen.installments} |
| De minimis exception | {fig:estpen.de_minimis} |
| No prior year liability | {fig:estpen.no_prior_liability} |
| Retirement or disability waiver | {fig:estpen.retirement_waiver} |
| Underpayment interest rate | {fig:interest.underpayment_rate} |
| Overpayment interest rate | {fig:interest.overpayment_rate} |
| Failure to file and pay | {fig:ftf_ftp.rates} |
| Minimum failure to file | {fig:ftf.minimum} |
| Interaction | {fig:ftf_ftp.interaction} |

## How it works in practice

**Test the exceptions before computing anything.** A taxpayer under the de minimis figure, or with no
liability at all last year, owes no estimated tax addition however the year's payments were spread.

**Then pick the safe harbour.** Last year's tax is a known number; this year's is a forecast. For a
client with rising or volatile income the prior-year harbour is almost always the right target, and the
only question is whether the 110 percent multiplier applies.

**Then look at timing, not just totals.** The addition is computed installment by installment. A
taxpayer who paid nothing until December and then paid the whole year's liability still has three
quarters of underpayment. The two repairs are the annualised income method, if the income genuinely
arrived late, and withholding, which is deemed spread evenly.

**Then separate the charges.** Filing on time with no payment attracts the half-percent failure to pay
addition and interest, but not the 5 percent failure to file addition. Filing late attracts both, with
the offset in § 6651(c)(1). An extension of time to file is not an extension of time to pay, so it
prevents the larger addition and neither of the other two.

<div class="scenario" data-type="boundary">
<h3>The safe harbour beats the forecast</h3>

Renata's tax was $28,000 last year on adjusted gross income of $162,000. This year she sells a business
interest and her tax comes to $94,000. She paid four estimated installments of $7,700 — $30,800 in
total.

Her prior year adjusted gross income exceeded the $150,000 threshold, so the prior-year harbour requires
110 percent of $28,000, or $30,800. She hit it exactly, and § 6654(d)(1)(B)(ii) makes that the required
annual payment. No addition to tax is due on any installment, despite $63,200 of tax remaining unpaid
until 15 April. That balance carries interest under § 6601 from the due date of the return, but no
estimated tax addition and no failure to pay addition if she pays with a timely return.
</div>

<div class="scenario" data-type="timing">
<h3>Same money, wrong quarters</h3>

Bo owes $12,000 for the year and has no withholding. He pays nothing for the first three installments
and $12,000 with the fourth, on 15 January.

The required annual payment on the 90 percent test is $10,800, so each required installment is $2,700.
The first three were unpaid: the addition runs on $2,700 from 15 April to 15 January, on a cumulative
$5,400 from 15 June, and on $8,100 from 15 September — each at the § 6621 rate in force for the days
concerned, which for 2026 changed between quarters. Paying the full year's liability did not cure the
timing. Had the same $12,000 been withheld from wages instead, it would have been treated as paid in
four equal parts and there would be no addition at all.
</div>

<div class="scenario" data-type="interaction">
<h3>Late filing and late payment together</h3>

Ivo files four months late and pays the $10,000 balance when he files. He has no reasonable cause.

The failure to pay addition is 0.5 percent a month on $10,000 for four months, or $200. The failure to
file addition is 5 percent a month for four months, or $2,000, reduced by the $200 under § 6651(c)(1) —
so $1,800. Together $2,000, plus interest under § 6601 on the tax from the original due date. Had he
filed on time and paid four months late, he would have owed $200 plus interest: the same money, one
tenth of the addition. Filing on time is the single most valuable thing a taxpayer in this position can
do.
</div>

<div class="scenario" data-type="fails">
<h3>Zero tax, but the wrong kind of zero</h3>

Wren had no income tax liability last year, but that year was a short period — she filed a part-year
return covering only seven months because she first became a filer partway through the year. This year
she owes $6,000 with no withholding and no estimated payments.

She reads the no-prior-year-liability exception as a clean escape and is wrong. Section 6654(e)(2)
requires the preceding taxable year to have been a full twelve months, not merely a year with no tax
due. A short first year forecloses the exception entirely, regardless of what the liability for it was.
Unless the de minimis test or the ordinary required-annual-payment safe harbour helps her instead, the
§ 6654 addition runs on the full underpayment.
</div>

<div class="scenario" data-type="procedural">
<h3>Asking for the discretionary waiver</h3>

Delroy retired in June of the year estimated payments were due, at age 64, after decades of having tax
withheld from a paycheck. His first year without withholding leaves him well short of the required
annual payment.

Retirement is not a box to check — it is a request the Secretary has to grant. He has to show both
limbs of § 6654(e)(3)(B): that he retired after turning 62, in the year the payments were due or the one
before it, and that the underpayment was due to reasonable cause and not willful neglect. He raises it by
attaching a request and an explanation when he files, rather than assuming the addition will not apply;
the IRS reviews the facts and decides, and nothing about his age or retirement date grants the waiver on
its own.
</div>

<div class="callout trap">

**The § 6654 addition is not a flat percentage.** It uses the § 6621 underpayment rate applied for the
days of the shortfall, and that rate is redetermined every quarter. A rationale giving a fixed monthly
figure has confused it with § 6651(a)(2).

**110 percent, not 100, above the prior-year income threshold**, and that threshold halves for a
married individual filing separately.

**Withholding is spread evenly; estimated payments are not.** This asymmetry is the whole of the
year-end planning on this topic.

**An extension to file is not an extension to pay.** It stops the 5 percent addition and nothing else.

**Retirement is not an automatic exception.** Section 6654(e)(3)(B) needs a determination by the
Secretary on both limbs, and requires the retirement or disability to have occurred in the year or the
one before.

**The de minimis test uses tax reduced by withholding**, not gross liability — § 6654(e)(1) reduces
the tax shown by the § 31 credit before comparing.

**Interest is not abated for reasonable cause.** Section 6601 is not a penalty provision. Reasonable
cause reaches the § 6651 additions and, through § 6654(e)(3), the estimated tax addition, but never the
interest.

**The failure to pay rate moves in both directions.** It falls to 0.25 percent while an {gloss:installment-agreement}
is in effect on a timely filed return, and rises to 1 percent after a notice of intent to levy.

**The prior-year harbour is unavailable if no return was filed last year** or if last year was a short
period.
</div>

## How this has changed

Nothing in Pub. L. 119-21 amended §§ 6654, 6651, 6601 or 6621. What moves on this topic moves quarterly
and annually rather than by legislation, and both mechanisms are worth knowing.

The interest rate is redetermined every quarter under § 6621(b): the Secretary determines the federal
short-term rate for the first month of each quarter, and it applies during the *following* quarter. The
IRS publishes the resulting figures, and for 2026 they have not been constant —
{fig:interest.underpayment_rate}. A computation spanning a rate change has to be split, which is why the
published table matters more here than the statutory formula.

The § 6651(a) minimum for a return more than 60 days late is indexed. The figure in the statute has been
overtaken; {fig:ftf.minimum}. Note the convention: the revenue procedure states it for returns *required
to be filed* in a calendar year rather than for a taxable year, so the 2026 return's minimum is the one
published for 2027 filings.

The estimated tax figures themselves have never moved: {fig:estpen.unindexed} An increasing number of
taxpayers therefore meet the 110 percent rule each year without any change in real income.

## Exam focus

Expect a question on the exceptions, presented as four taxpayers of whom three are exempt. The reliable
exemptions are no liability in the preceding year and a current year tax under the de minimis figure.
The unreliable one is retirement — read it as discretionary unless the facts give both a qualifying
event in the right year and reasonable cause.

Know the required annual payment as a lesser-of test, and know that the prior-year leg becomes 110
percent above the income threshold. Know the four due dates, and that the fourth falls in January of the
following year.

Know the difference between the three charges and their rates: 5 percent a month for failing to file,
0.5 percent a month for failing to pay, the § 6621 rate for interest and for the estimated tax addition.
Know that they interact under § 6651(c)(1) and that an extension to file does not extend time to pay.

## Check yourself

**1.** Last year a taxpayer's adjusted gross income was $180,000 and their tax was $40,000. What
estimated payments defeat the § 6654 addition this year regardless of this year's liability?

*Answer: $44,000, paid in four equal instalments of $11,000 by the four due dates. Because prior year
adjusted gross income exceeded the § 6654(d)(1)(C)(i) threshold, the prior-year leg of the required
annual payment is 110 percent rather than 100 percent.*

**2.** A taxpayer's tax for the year, after withholding, is $850. They made no estimated payments. Is
there an addition to tax?

*Answer: No. IRC § 6654(e)(1) imposes no addition where the tax shown on the return, reduced by the § 31
credit for withheld tax, is less than $1,000. The exception is tested after withholding, not on gross
liability.*

**3.** Why does a taxpayer who pays the entire year's tax with the fourth instalment still owe an
addition?

*Answer: Because IRC § 6654(b) computes the underpayment and its period instalment by instalment. The
first three required instalments were unpaid from their own due dates, and the addition runs on each for
the days it remained short. Only the annualised income method under § 6654(d)(2), or withholding, can
reach back to those quarters.*

**4.** A taxpayer files five months late and pays at the same time. What is the failure to file addition
on $6,000 of tax?

*Answer: $1,350. The addition is 5 percent a month capped at 25 percent — five months gives 25 percent,
or $1,500 — reduced under IRC § 6651(c)(1) by the failure to pay addition of 0.5 percent for five
months, or $150. Both remain subject to the reasonable cause defence.*

**5.** Does reasonable cause abate the interest charged under § 6601?

*Answer: No. Section 6601 charges interest at the § 6621 underpayment rate for the period the tax is
unpaid, and it is not an addition to tax subject to a reasonable cause defence. Reasonable cause reaches
the § 6651 additions and the § 6654 addition through its own waiver provisions, but the interest runs
regardless.*
