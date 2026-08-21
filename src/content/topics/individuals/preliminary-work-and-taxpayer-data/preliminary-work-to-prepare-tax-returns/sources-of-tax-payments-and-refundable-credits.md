---
title: "Sources of tax payments and refundable credits"
code: "1.1.1.k"
part: 1
domain: "Preliminary Work and Taxpayer Data"
section: "Preliminary work to prepare tax returns"
description: "Payments and refundable credits turn a computed liability into a refund or a balance due, and both are easy to miss because nothing on the return asks for them twice."
status: published
taxYear: 2026
lastReviewed: "2026-08-19"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 31", title: "Tax withheld on wages", url: "https://www.law.cornell.edu/uscode/text/26/31" }
  - { type: IRC, ref: "§ 32", title: "Earned income", url: "https://www.law.cornell.edu/uscode/text/26/32" }
  - { type: IRC, ref: "§ 3406", title: "Backup withholding", url: "https://www.law.cornell.edu/uscode/text/26/3406" }
  - { type: IRC, ref: "§ 6402", title: "Authority to make credits or refunds", url: "https://www.law.cornell.edu/uscode/text/26/6402" }
  - { type: IRC, ref: "§ 6654", title: "Failure by individual to pay estimated income tax", url: "https://www.law.cornell.edu/uscode/text/26/6654" }
  - { type: IRC, ref: "§ 6695", title: "Other assessable penalties with respect to the preparation of tax returns", url: "https://www.law.cornell.edu/uscode/text/26/6695" }
  - { type: RevProc, ref: "2025-32", title: "Inflation-adjusted items for 2026", url: "https://www.irs.gov/pub/irs-drop/rp-25-32.pdf" }
forms: []
related: ["1.1.1.j", "1.1.1.d", "1.1.1.q", "1.1.1.a", "1.1.1.m", "1.2.1.a", "1.3.2.b", "1.3.2.c", "1.3.2.d", "1.3.2.e", "1.3.2.g", "1.3.2.h", "1.4.1.b", "1.4.1.c"]
changelog:
  - { date: "2026-08-19", summary: "Initial draft. Sets out the IRC § 6654(d) safe harbours and the IRC § 6654(g) rule deeming withholding paid ratably across the installment dates, the IRC § 32 figures for 2026, and the IRC § 6402(m) refund hold." }
---

A return's computed liability is only half of the arithmetic. What the taxpayer already paid, and which
credits can pay out beyond liability, decide whether the return produces a refund or a balance due —
and both are easy to miss, because nothing on the return prompts for them a second time. Payments are
also where the year's penalties are decided: the addition to tax for underpaid estimated tax turns
entirely on when money arrived, not on whether the return was right.

## The rule

**Withholding is a credit.** Amounts withheld under chapter 24 are allowed to the recipient of the
income as a credit against the tax imposed by subtitle A (IRC § 31(a)(1)), and withholding during a
calendar year is credited to the taxable year beginning in that year (IRC § 31(a)(2)). Backup
withholding is the same kind of credit, imposed where a payee fails to furnish a taxpayer identification
number, the Service notifies the payor that the number is wrong, or there has been notified payee
underreporting or a certification failure — at a rate the statute defines by reference rather than by
figure, as the fourth lowest rate applicable under § 1(c) (IRC § 3406(a)(1)).

**Estimated tax has two safe harbours and a floor.** Each required installment is a share of the
required annual payment (IRC § 6654(d)(1)(A)), and the required annual payment is the **lesser** of a
percentage of this year's tax or a percentage of last year's — the second rising for taxpayers whose
prior-year adjusted gross income exceeded a threshold, halved for a married individual filing
separately (IRC § 6654(d)(1)(B), (C)). Last year's tax is unavailable as a safe harbour if the prior
year was not a full twelve months or no return was filed for it. A taxpayer who establishes that the
annualized income installment is lower may pay that instead, with the reduction recaptured in the next
installment (IRC § 6654(d)(2)(A)).

**Three exceptions and one shortcut sit in § 6654(e) and (h).** No addition applies where the tax shown
on the return, reduced by the § 31 withholding credit, is below a small threshold (IRC § 6654(e)(1));
or where the prior year was a full twelve months, the individual had no liability for it, and was a
citizen or resident throughout (IRC § 6654(e)(2)). The Secretary may waive the addition for casualty,
disaster or other unusual circumstances where imposing it would be against equity and good conscience,
and for newly retired or disabled individuals (IRC § 6654(e)(3)). And filing the return and paying in
full on or before 31 January removes any underpayment of the **fourth** installment (IRC § 6654(h)).

**Withholding is spread across the year unless you prove otherwise.** For § 6654 purposes the § 31
credit is deemed a payment of estimated tax, with an equal part deemed paid on each due date — *unless
the taxpayer establishes the dates on which the amounts were actually withheld* (IRC § 6654(g)(1)). The
election can be applied separately to wage withholding and to everything else withheld (IRC
§ 6654(g)(2)). This is the most useful provision in the section, and the one most often left unused.

**The earned income credit.** It is a percentage of earned income up to a maximum, then phased out
above a threshold measured on adjusted gross income or, if greater, earned income. An individual
without a qualifying child qualifies only within an age band, with a United States principal place of
abode for more than half the year, and only if not a dependent of another taxpayer (IRC
§ 32(c)(1)(A)(ii)). Excessive investment income disqualifies entirely (IRC § 32(i)). The identification
requirement is a **social security number** issued on or before the due date for filing the return
(IRC § 32(m)) — and a prior improper claim bars the credit for a disallowance period of ten taxable
years after a final determination of fraud, or two after a final determination of reckless or
intentional disregard (IRC § 32(k)(1)).

**Refunds of these credits are held.** No credit or refund of an overpayment may be made before the
15th day of the second month following the close of the taxable year where the earned income credit or
the refundable portion of the child tax credit is claimed (IRC § 6402(m)). The hold is on the whole
refund, not merely on the credit.

## Current figures

| Item | 2026 |
| --- | --- |
| Maximum earned income credit | {fig:eitc.max_credit} |
| Earned income amount | {fig:eitc.earned_income_amount} |
| Earned income credit phase-out | {fig:eitc.phaseout} |
| Disqualifying investment income | {fig:eitc.investment_income_limit} |
| Age band without a qualifying child | {fig:eitc.childless_age_range} |
| Required annual payment | {fig:estimated.required_annual_payment} |
| Share per installment | {fig:estimated.installment_share} |
| Estimated tax de minimis exception | {fig:estimated.de_minimis} |
| Refund hold | {fig:refund.eitc_actc_hold} |
| Backup withholding rate | {fig:backup.withholding_rate} |

## How it works in practice

Build the payment side from records, not from memory. Wage and pension withholding comes off the
statements; backup withholding hides on interest, dividend and broker statements and is genuinely easy
to overlook; estimated payments have to be reconciled against the account rather than the client's
recollection, because a payment made in January for the prior year and a payment applied from a prior
overpayment are both commonly misremembered. An overpayment applied forward from last year's return is
a payment for this year, and the prior return is where you find it.

Then ask which safe harbour is cheaper. For a client whose income rose, last year's tax is usually the
lower figure and the whole question becomes whether the prior-year percentage is the ordinary one or the
higher one — which turns on prior-year adjusted gross income, a number you can read off the prior
return. For a client whose income fell, this year's tax is lower and the annualized method may be lower
still, at the cost of a schedule.

The § 6654(g) point deserves a working habit. Because withholding is otherwise deemed spread evenly,
a client with heavy late-year withholding is treated as having paid a quarter of it by April — which
usually *helps*. But a client with heavy **early** withholding who then had a large fourth-quarter
liability may do better by establishing the actual dates. It is an election to consider both ways
rather than a rule that always favours one side.

For the earned income credit, treat the § 6695(g) due diligence file as part of the engagement, and get
identification numbers early: § 32(m) requires the number to have been issued on or before the due
date. Where a client claims the credit and expects a February refund, § 6402(m) makes that impossible
for the whole refund, and saying so at intake avoids a difficult call later.

<div class="scenario">
<h3>The safe harbour that was not the ordinary one</h3>

Dmitri had adjusted gross income of $164,000 last year with tax of $22,400. This year his income rose
sharply and his tax will be about $38,000. He paid four estimated installments of $5,600.

He aimed at last year's tax and hit it exactly — $22,400. That is not enough. IRC § 6654(d)(1)(C)(i)
provides that where prior-year adjusted gross income exceeded the statutory threshold, the prior-year
safe harbour is applied at the higher percentage. His required annual payment is the lesser of the
current-year percentage of $38,000 and the higher percentage of $22,400, which is $24,640.

The shortfall is small in dollars but the addition to tax runs from each installment's due date, so it
compounds across the whole year. The intake step that prevents it is reading the prior year's adjusted
gross income, not the prior year's tax.
</div>

<div class="scenario">
<h3>Where the withholding actually landed</h3>

Yuki has modest wage withholding through the year and took a large retirement distribution in November
with $18,000 withheld from it. Her estimated payments were nil, and she has an underpayment for the
first three installments.

Under IRC § 6654(g)(1) the § 31 credit is deemed paid in equal parts on each due date unless she
establishes the actual dates. Deemed spreading gives her $4,500 of the November withholding as of the
April installment, which is exactly what she wants — establishing the true dates would push it all into
the fourth quarter and make the first three underpayments worse.

Reverse the facts and the election flips. Had the $18,000 been withheld in February and the liability
arisen in December, establishing the actual dates would credit it against the early installments in
full. The provision cuts both ways, and § 6654(g)(2) lets her apply it separately to wage withholding
and to the rest.
</div>

<div class="scenario">
<h3>The number that arrived too late</h3>

Rosa claims the earned income credit for her son. His social security number was applied for in
February and issued in June; she filed in March using an ITIN he had held previously, and later
amended.

The credit is unavailable for the year. IRC § 32(m) requires a social security number issued **on or
before the due date for filing the return** for the taxable year, and issuance in June is after an
unextended April due date. Amending does not cure it, because the test is the date of issuance against
the filing due date rather than the date of the claim.

An extension would have. Extending the return moves the due date to October, and a number issued in
June would then have been in time — the same structural fix as the child tax credit's own number rule.
</div>

<div class="callout trap">
<p class="callout-label">Traps</p>

- **The required annual payment is the *lesser* of the two safe harbours** (IRC § 6654(d)(1)(B)), so
  aiming at the current-year figure when the prior-year figure is lower overpays.
- **The prior-year safe harbour rises above an income threshold**, and the threshold halves for a
  married individual filing separately (IRC § 6654(d)(1)(C)(i), (ii)).
- **The prior-year safe harbour is unavailable** if that year was short or no return was filed for it
  (IRC § 6654(d)(1)(B), final sentence).
- **Withholding is deemed spread evenly** across the installment dates (IRC § 6654(g)(1)). That is a
  default the taxpayer may displace, and it helps as often as it hurts.
- **The de minimis exception is net of withholding** (IRC § 6654(e)(1)), so a client with substantial
  withholding can fall inside it despite a large liability.
- **Filing and paying by 31 January cures only the fourth installment** (IRC § 6654(h)), not the
  earlier ones.
- **The earned income credit phase-out is measured on adjusted gross income or earned income,
  whichever is greater**, so deductions that reduce adjusted gross income below earned income do not
  help.
- **Investment income above the limit denies the credit outright** (IRC § 32(i)) — it is a cliff, not
  a phase-out.
- **A prior improper claim can bar the credit for years** (IRC § 32(k)(1)), two or ten depending on the
  finding.
- **The refund hold under IRC § 6402(m) applies to the entire refund**, not just the credit portion.

</div>

## How this has changed

The mechanics in this topic have been stable, and that stability is itself worth knowing: the § 6654
safe harbour percentages and the income threshold at which the prior-year percentage rises are
statutory and **not indexed**, so they do not move with the annual revenue procedure the way the earned
income credit figures do.

Two changes from earlier legislation still cause errors. The temporary rules for individuals without
qualifying children — a lower minimum age, no maximum age, and a larger credit — applied only to
taxable years beginning after 31 December 2020 and before 1 January 2022 (IRC § 32(n)). Material
written in that window describes an age band that no longer exists. And the investment income limit was
raised and made subject to annual adjustment, so any fixed figure for it is good for one year only.

On the payment side the practical change is administrative rather than statutory: the credit figures,
the investment income limit and the phase-out thresholds are re-announced every year, while the § 6654
architecture around them does not move. When a client's facts have not changed but the answer has, the
annual revenue procedure is where to look first.

## Exam focus

Know the § 6654 safe harbours cold, including that the required annual payment is the *lesser* of the
two, that the prior-year percentage rises above an income threshold, and that the threshold halves for
separate returns. Expect a question that supplies both years' figures and asks for the required annual
payment.

Know that withholding is deemed spread across the installment dates unless the taxpayer establishes
otherwise, and that this is an election.

For the earned income credit, know the three gating rules for a taxpayer with no qualifying child, the
investment income cliff, the social security number timing in § 32(m), and the disallowance periods in
§ 32(k). Expect the refund hold in § 6402(m) to appear as a question about when a refund can be paid.

## Check yourself

**1.** A taxpayer's prior-year tax was $18,000 on adjusted gross income of $210,000. This year's tax
will be $30,000. What is the required annual payment?

*Answer: $19,800. Under IRC § 6654(d)(1)(B) it is the lesser of 90 percent of this year's tax ($27,000)
and 100 percent of last year's — but because prior-year adjusted gross income exceeded $150,000, IRC
§ 6654(d)(1)(C)(i) substitutes 110 percent, giving $19,800. That is the lesser figure and so the
required annual payment.*

**2.** A taxpayer had no estimated payments and $12,000 withheld from a bonus paid in December. Is she
treated as having paid nothing by the April installment date?

*Answer: no. IRC § 6654(g)(1) deems the IRC § 31 credit to be a payment of estimated tax with an equal
part paid on each due date, so a quarter of the $12,000 is treated as paid by the April date. She could
displace that by establishing the actual withholding dates, but here the default is to her advantage
and she would not want to.*

**3.** A single taxpayer aged 22 with no children has earned income well within the phase-out range.
Does she qualify for the earned income credit?

*Answer: no. IRC § 32(c)(1)(A)(ii)(II) requires an individual with no qualifying child to have attained
age 25 but not 65 before the close of the taxable year. The temporary removal of the age floor in IRC
§ 32(n) applied only to taxable years beginning after 31 December 2020 and before 1 January 2022.*

**4.** A client claiming the earned income credit files electronically on 20 January and asks when the
refund will arrive.

*Answer: not before 15 February. IRC § 6402(m) bars any credit or refund of an overpayment before the
15th day of the second month following the close of the taxable year where a credit is allowed under
§ 32 or under § 24 by reason of subsection (d). The bar applies to the whole refund, not just the
credit, so the rest of it is held too.*
