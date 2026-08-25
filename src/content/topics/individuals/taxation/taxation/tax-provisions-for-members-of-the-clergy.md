---
title: "Tax provisions for members of the clergy"
code: "1.4.1.f"
part: 1
domain: "Taxation"
section: "Taxation"
description: "A minister is an employee for income tax and self-employed for social security, and the housing allowance is excluded from one while being taxed by the other."
status: published
taxYear: 2026
lastReviewed: "2026-08-19"
reviewedBy: "Draft for N. O. review"
authorities:
  - { type: IRC, ref: "§ 107", title: "Rental value of parsonages", url: "https://www.law.cornell.edu/uscode/text/26/107" }
  - { type: IRC, ref: "§ 1402", title: "Definitions — self-employment", url: "https://www.law.cornell.edu/uscode/text/26/1402" }
  - { type: IRC, ref: "§ 3121", title: "Definitions — FICA", url: "https://www.law.cornell.edu/uscode/text/26/3121" }
  - { type: IRC, ref: "§ 3401", title: "Definitions — income tax withholding", url: "https://www.law.cornell.edu/uscode/text/26/3401" }
  - { type: IRC, ref: "§ 265", title: "Expenses and interest relating to tax-exempt income", url: "https://www.law.cornell.edu/uscode/text/26/265" }
  - { type: Reg, ref: "Reg. § 1.107-1", title: "Rental value of parsonages", url: "https://www.law.cornell.edu/cfr/text/26/1.107-1" }
forms: []
related: ["1.4.1.d", "1.2.4.a", "1.4.1.c", "1.4.1.e", "1.4.1.g"]
changelog:
  - { date: "2026-08-19", summary: "Initial draft. Sets out the IRC § 107 housing exclusion and the Reg. § 1.107-1(b) advance designation requirement, the § 1402(a)(8) inclusion of the same amount in net earnings from self-employment with its retirement carve-out, the two exemptions in § 1402(c) and (e), the exclusion of ministerial service from FICA and from income tax withholding under §§ 3121(b)(8)(A) and 3401(a)(9), and the § 265(a)(6)(B) preservation of mortgage interest and property tax deductions." }
  - { date: "2026-08-25", summary: "Added a plain-language summary, glossary marks, two typed scenarios (timing, procedural) alongside the three existing ones now typed baseline/fails/interaction, and a decision diagram of the two self-employment tax exemptions." }
diagram:
  archetype: "decision"
  caption: "Is a minister's ministerial income exempt from self-employment tax?"
  tests:
    - { test: "Member of a religious order under a vow of poverty?", result: "Exempt automatically — no application needed", outcome: "pass" }
    - { test: "Approved § 1402(e) application on file (conscientious or religious opposition)?", result: "Exempt from self-employment tax on ministerial income only", outcome: "pass" }
    - { test: "Neither of the above?", result: "Self-employment tax applies — housing value or allowance included", outcome: "fail" }
---

<div class="plain-terms">
This page covers the tax rules for ministers and other clergy. It is for anyone ordained or licensed to serve as a minister. It matters most for a minister who gets a home, or a housing allowance, as part of their pay. Two things get decided here. First, how much of that housing benefit stays out of regular income tax. Second, how much of it still counts toward Social Security and Medicare tax. A minister pays that second tax alone, as if self-employed, even while working as a normal employee for everything else.
</div>

A minister occupies two positions at once, and the whole of this topic follows from that. For income tax
they are ordinarily a common law employee, receiving a Form W-2. For social security they are
self-employed, filing Schedule SE. The housing allowance sits across the line: excluded from gross
income under one provision, and expressly put back for the other.

## The rule

**The housing exclusion.** {fig:clergy.housing_exclusion} The two limbs behave differently. A home
furnished in kind is excluded without limit and without conditions. A cash allowance is capped three
ways — by the amount actually spent on providing a home, by the fair rental value of the home with
furnishings plus utilities, and by the amount designated.

**The designation must come first.** {fig:clergy.designation} And an allowance not spent on providing a
home in the year received must be included in gross income for that year (Reg. § 1.107-1(c)).

**{gloss:self-employment-tax} reaches it anyway.** {fig:clergy.se_inclusion} This is the single most important
point on the topic, and the one that surprises clients: the same dollars that escape income tax are in
the base for self-employment tax at the full combined rate, with no employer paying half.

**Except after retirement.** {fig:clergy.retirement_carve_out} So a retired minister whose former
congregation designates part of a pension as a housing allowance excludes it from income tax and from
self-employment tax alike.

**Ministerial service is a trade or business.** Section 1402(c)(4) appears to exclude the exercise of a
ministry from trade or business, but the closing sentence of § 1402(c) reverses that: the exclusion does
not apply unless an exemption under § 1402(e) is in effect. So the default is that a minister is
self-employed for this purpose, and the exclusion is the exception rather than the rule.

**The two exemptions.** {fig:clergy.exemptions} Only these two. The vow of poverty operates by itself —
the closing sentence of § 1402(c) carves a member of a religious order who has taken one out of the
reversal — while everyone else must apply and be approved. The application under § 1402(e) is
irrevocable and reaches only ministerial income.

**No withholding, either kind — no income tax and no {gloss:fica}.** {fig:clergy.withholding} A minister who wants tax withheld may agree
with the congregation to have additional income tax withheld under a voluntary arrangement, which is
often used to cover the self-employment liability as well; otherwise estimated payments are required.

**The deduction that survives the exclusion.** {fig:clergy.double_deduction} This is a deliberate
statutory choice rather than an oversight: a minister may exclude an allowance used to pay a mortgage
and still deduct the interest and the property taxes on the same house.

**A member of a religious order with a vow of poverty** is outside self-employment tax on services
performed for the order, and services performed for the order are generally treated as performed by the
order rather than by the individual.

## Current figures

| Item | Amount |
| --- | --- |
| Housing exclusion | {fig:clergy.housing_exclusion} |
| Advance designation | {fig:clergy.designation} |
| Self-employment inclusion | {fig:clergy.se_inclusion} |
| After retirement | {fig:clergy.retirement_carve_out} |
| The two exemptions | {fig:clergy.exemptions} |
| Withholding | {fig:clergy.withholding} |
| Interest and taxes | {fig:clergy.double_deduction} |

## How it works in practice

**Separate the two computations from the start.** Income tax: wages plus fees, less the housing
exclusion. Self-employment tax: wages plus fees plus the housing value or allowance, with no exclusion.
The two figures are almost never the same, and a return that uses one figure twice is wrong in one
direction or the other.

**Check the designation before excluding anything.** If the church did not designate an amount in
advance by some official act, there is no rental allowance to exclude — only salary. The remedy is
prospective: the designation cannot be made retroactively for payments already made.

**Then apply the three caps to a cash allowance.** Amount designated, amount spent, and fair rental
value plus utilities. The exclusion is the lowest of the three, and the excess is ordinary income.

**Then handle the payments.** No withholding happens automatically. A minister with a Form W-2 showing
no social security or Medicare tax withheld and no income tax withheld needs estimated payments covering
both taxes, or a voluntary withholding agreement large enough to cover both.

**Then consider the exemption only if it genuinely applies.** It requires a statement of conscientious
or religious opposition to public insurance — not a financial objection — and it cannot be undone.

<div class="scenario" data-type="baseline">
<h3>Two different totals from the same facts</h3>

Reverend Mensah lives in a parsonage owned by the congregation with a fair rental value of $800 a month.
She receives $35,000 of salary and $2,000 of fees for weddings and funerals paid to her personally.

For income tax, § 107(1) excludes the $9,600 rental value entirely, so her gross income from the
ministry is $37,000. For self-employment tax, § 1402(a)(8) requires net earnings to be computed without
regard to § 107, so the base is $35,000 plus $2,000 plus $9,600, or $46,600. Same facts, two figures, and
the larger one carries the tax that has no employer half.
</div>

<div class="scenario" data-type="fails">
<h3>The designation that came too late</h3>

A congregation votes in November to designate $18,000 of the year's salary, already paid month by month,
as a housing allowance. The minister spent more than that on rent and utilities.

Nothing is excludable for that year. Reg. § 1.107-1(b) requires the designation to be made by official
action taken *in advance of the payment*, and a resolution passed after the salary has been paid cannot
reach it. Had the congregation adopted the designation in its budget the previous December, the same
$18,000 would have been excluded subject to the fair rental value and actual expenditure caps. The
minister's remedy is a designation for next year, and the point is worth raising with any church client
before the budget is set.
</div>

<div class="scenario" data-type="interaction">
<h3>Interest, taxes, and an allowance that paid for them</h3>

Pastor Oyelaran receives a designated housing allowance of $24,000, spends it on mortgage payments,
property taxes and utilities on a home he owns, and the fair rental value plus utilities exceeds
$24,000.

He excludes the whole allowance from gross income under § 107(2). He also deducts the mortgage interest
and the real property taxes on Schedule A, even though the money that paid them was excluded — § 265(a)
would normally deny a deduction allocable to tax-exempt income, and § 265(a)(6)(B) disapplies it for
exactly this case. And the $24,000 is still in his self-employment tax base.
</div>

<div class="scenario" data-type="timing">
<h3>The same allowance, before and after retirement</h3>

Reverend Achike's former denomination designates $16,000 a year as a housing allowance: first while she
is still serving a congregation, and again five years later out of her church pension after she retires.

Same label, different tax years, different answer. While she is active, § 1402(a)(8) requires the
$16,000 to be added back into net earnings from self-employment, so it carries self-employment tax
even though it is excluded from income tax. Once she has retired, the identical designation is a
parsonage allowance provided after retirement, and § 1402(a)(8) removes it from the self-employment
base as well — the income tax exclusion is unchanged, but the self-employment tax exposure disappears
the moment her employment does.
</div>

<div class="scenario" data-type="procedural">
<h3>Two exemptions, two very different processes</h3>

Brother Femi, a member of a religious order, has taken a vow of poverty. Reverend Diallo, ordained but
belonging to no order, wants out of self-employment tax on grounds of conscientious opposition to
public insurance.

Brother Femi does nothing further — the closing sentence of § 1402(c) removes services performed for the
order from self-employment tax without an application. Reverend Diallo must file a timely application
under § 1402(e), stating the opposition and waiving the right to Social Security benefits based on his
ministerial earnings, and have it approved before it takes effect; approval is not automatic and, once
granted, cannot later be revoked because his views or his finances changed.
</div>

<div class="callout trap">

**Excluded from income tax, included for self-employment tax.** Section 1402(a)(8) is explicit. A
question asking for "total self-employment income" wants the housing amount added back.

**The designation must precede the payment.** A retroactive designation excludes nothing.

**A cash allowance has three caps; a furnished home has none.** Section 107(1) and § 107(2) are not
parallel.

**"Deduction" is the wrong word.** Section 107 is an exclusion from gross income, so it is available
whether or not the minister itemizes and it does not appear as a deduction anywhere on the return.

**Only two exemptions from self-employment tax exist here** — a vow of poverty for a member of a
religious order, and an approved § 1402(e) application on grounds of conscientious or religious
opposition to public insurance. A vow of obedience, a vow of celibacy, low income, or an objection based
on cost are not among them.

**The § 1402(e) exemption is irrevocable and ministerial only.** Outside earnings remain taxable.

**No FICA and no income tax withholding** on ministerial services, so estimated payments are the norm.
A Form W-2 with empty social security and Medicare boxes is correct, not an error.

**After retirement the position reverses**: a parsonage allowance or church plan benefit is out of the
self-employment base as well as out of income.
</div>

## How this has changed

Nothing in Pub. L. 119-21 touched any provision on this page, and the structure is long-settled — § 107
dates from 1954 and the § 1402(a)(8) add-back has been in place since the ministerial exemption regime
was built.

The live question is constitutional rather than legislative. The exclusion for a cash allowance under
§ 107(2) has been challenged as an establishment of religion; the challenge failed in the Seventh
Circuit in 2019 on standing and merits grounds, and the provision remains in force. A page or client
letter should treat § 107(2) as good law while recognising that it is the one part of this topic that
could change without an amendment to the Code.

The other point of movement is administrative rather than legal. The three caps on a cash allowance —
designated, spent, and fair rental value plus utilities — require the church and the minister to keep
records that many do not, and the fair rental value ceiling is a factual question re-tested every year.
An allowance designated once and never revisited will eventually exceed the ceiling, and the excess is
ordinary income in the year concerned.

## Exam focus

Expect two computations from one fact pattern: income subject to income tax, and income subject to
self-employment tax. The difference between them is the housing amount, and the examiners test both
directions.

Know that the housing benefit is an exclusion rather than a deduction, that a furnished home is excluded
without limit while a cash allowance has three caps, and that the designation must be made in advance.

Know the two exemptions exactly, that a vow of poverty operates without an application while everything
else requires one, and that the application is irrevocable and covers only ministerial income.

Know that ministerial service is outside FICA and outside income tax withholding, so the minister pays
by estimated tax, and that mortgage interest and property taxes survive § 265 by virtue of
§ 265(a)(6)(B).

## Check yourself

**1.** A minister receives $40,000 of salary, $3,000 of fees, and lives in a church-owned home with a
fair rental value of $12,000. What are the income tax and self-employment tax bases?

*Answer: $43,000 for income tax, because IRC § 107(1) excludes the rental value of a home furnished as
part of compensation. $55,000 for self-employment tax, because § 1402(a)(8) requires net earnings from
ministerial service to be computed without regard to § 107.*

**2.** A church designates a housing allowance in June for salary paid from January. How much of the
January to May salary is excludable?

*Answer: None of it. Reg. § 1.107-1(b) requires the designation to be by official action taken in
advance of the payment. The designation is effective only for payments made after it is adopted.*

**3.** Which of a vow of poverty, a vow of obedience, and conscientious opposition to public insurance
exempts a minister from self-employment tax?

*Answer: The vow of poverty, for a member of a religious order, and the conscientious or religious
opposition, on an approved application under IRC § 1402(e). A vow of obedience is not among them. The
closing sentence of § 1402(c) carves out the vow of poverty; everyone else needs the application.*

**4.** A minister excludes a $20,000 housing allowance and uses it to pay mortgage interest and property
taxes. May those amounts still be deducted?

*Answer: Yes. IRC § 265(a) would ordinarily deny a deduction allocable to tax-exempt income, but
§ 265(a)(6)(B) provides that no deduction is denied for mortgage interest or real property taxes on the
taxpayer's home by reason of receiving a parsonage allowance excludable under § 107.*

**5.** A retired minister's former denomination designates part of a church plan pension as a housing
allowance. What is the treatment?

*Answer: Excluded from gross income under IRC § 107 to the extent of the usual limits, and also outside
net earnings from self-employment — § 1402(a)(8) expressly removes a parsonage allowance provided after
retirement and any other church plan retirement benefit from the self-employment tax base.*
