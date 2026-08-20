---
title: "Self-employment tax"
code: "1.4.1.d"
part: 1
domain: "Taxation"
section: "Taxation"
description: "Who owes it, what escapes it, and the two optional methods that let a taxpayer report more income than they earned. The computation itself lives on the adjustments page."
status: review
taxYear: 2026
lastReviewed: "2026-08-19"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 1401", title: "Rate of tax", url: "https://www.law.cornell.edu/uscode/text/26/1401" }
  - { type: IRC, ref: "§ 1402", title: "Definitions", url: "https://www.law.cornell.edu/uscode/text/26/1402" }
  - { type: IRC, ref: "§ 761", title: "Terms defined — qualified joint venture", url: "https://www.law.cornell.edu/uscode/text/26/761" }
  - { type: IRC, ref: "§ 26", title: "Limitation based on amount of tax", url: "https://www.law.cornell.edu/uscode/text/26/26" }
  - { type: IRC, ref: "§ 6654", title: "Failure by individual to pay estimated income tax", url: "https://www.law.cornell.edu/uscode/text/26/6654" }
  - { type: Pub, ref: "Instructions for Schedule SE (2025)", title: "Optional methods and reporting", url: "https://www.irs.gov/instructions/i1040sse" }
forms: []
related: ["1.2.4.a", "1.4.1.j", "1.4.1.f", "1.4.1.c", "1.4.1.b", "1.4.1.e"]
changelog:
  - { date: "2026-08-19", summary: "Initial draft. Covers the reporting side of the self-employment tax: who is within IRC § 1402(c), the § 1402(a) exclusions, the qualified joint venture election under § 761(f), the farm and non-farm optional methods with the § 1402(l) limits, the § 1402(e) and (g) exemptions, and why the tax is a chapter 2 liability that most nonrefundable credits cannot reach. The rate structure and the two halvings are on 1.2.4.a." }
---

The rates and the two halvings that make up the self-employment tax computation are set out on the
adjustments page for this topic — see 1.2.4.a. What this page covers is everything around that
computation: who is caught by it, what falls outside it, the two optional methods that let a taxpayer
report *more* income than they earned, the two religious exemptions, and why the resulting liability
behaves differently from income tax on the return.

## The rule

**It is a chapter 2 tax.** The tax on self-employment income sits in chapter 2 rather than chapter 1
(IRC § 1401(a), (b)). That placement has a practical consequence: the nonrefundable credits in subpart
A of part IV are limited by § 26(a) to the chapter 1 liability, so they do not reduce self-employment
tax. A taxpayer with no income tax at all can still owe several thousand dollars of it, and only
payments and refundable credits will meet the bill.

**Who is self-employed.** Trade or business carries its § 162 meaning, with exclusions listed in the
definition (IRC § 1402(c)) — the performance of service as a public officeholder, as an employee, and for certain
religious workers unless they elect in. An individual is self-employed by the character of the activity,
not by whether they hold themselves out as a business: a director's fee, a one-off consulting engagement
and a share of partnership ordinary income are all within it, while a wage is not whatever the parties
call it.

**What falls out of net earnings.** Rentals from real estate and personal property leased with it are
excluded unless received in the course of a real estate trade or business, along with most interest and
dividends, gain or loss from the disposition of property that is not stock in trade, and the
distributive share of a limited partner other than guaranteed payments for services actually rendered
(IRC § 1402(a)(1), (2), (3), (13)). The exclusions are set out in full on 1.2.4.a.

**A spouse's share of a qualified joint venture.** Each spouse's share of income or loss from a
qualified joint venture is taken into account as provided in § 761(f) in determining that spouse's net
earnings (IRC § 1402(a)(17)). The point of the election is social security coverage: without
it, an unincorporated business run by both spouses is a partnership, and reporting it all on one
spouse's Schedule C leaves the other with no earnings record.

**The optional methods, and why anyone would use them.** Both let a taxpayer report net earnings
*higher* than actual, and therefore pay more tax. {fig:se.optional_farm} {fig:se.optional_nonfarm} The
limits are not fixed dollar amounts in the Code: {fig:se.optional_limits}

Three reasons to elect. Social security coverage — a year of low earnings might otherwise produce no
quarters of coverage toward eligibility for retirement and disability benefits. Earned income credit —
the credit is computed on earned income, and raising it can raise the credit by more than the extra tax
costs. And the additional child tax credit, which uses the same earned income figure. The Schedule SE
instructions set out the same three.

**The farm and non-farm methods are not symmetrical.** The farm method has no limit on the number of
years it may be used. The non-farm method is capped at five taxable years for any individual and
requires the taxpayer to be self-employed on a regular basis, a test defined by reference to a minimum
of net earnings in at least two of the three immediately preceding years (IRC § 1402(h)).

**Two religious exemptions.** {fig:se.minister_exemption} And separately, {fig:se.religious_sect_exemption}
The first exempts income from ministerial services only; other self-employment income remains taxable.
The second is broader but requires the sect to have an established practice of providing for its
dependent members.

**A minister who does not elect out is self-employed for this purpose** (IRC § 1402(c)(4)) even when
treated as a common law employee for income tax withholding — which is why a minister's compensation can appear on a Form
W-2 and on Schedule SE at the same time.

## Current figures

| Item | Amount |
| --- | --- |
| Optional method limits | {fig:se.optional_limits} |
| Latest published figures | {fig:se.optional_2025} |
| Farm optional method | {fig:se.optional_farm} |
| Non-farm optional method | {fig:se.optional_nonfarm} |
| Minister exemption | {fig:se.minister_exemption} |
| Religious sect exemption | {fig:se.religious_sect_exemption} |

## How it works in practice

**Classify the activity first.** Employee, self-employed, or neither. A payment reported on a Form
1099-NEC is not automatically self-employment income — the question is whether it arose from a trade or
business carried on by the recipient. An isolated sale by a collector, a one-off prize, or the sale of a
capital asset is not.

**Then strip out what § 1402(a) excludes**, in particular rentals and investment income, before applying
any rate.

**Then consider whether the ordinary computation is the best answer.** For a taxpayer with very low or
negative net earnings, an optional method may be worth more in credits and coverage than it costs in
tax. This is the one place in the individual return where electing to report more income is routinely
the right advice, and it has to be considered before the return is filed — the choice is made on
Schedule SE.

**Then check the exemptions.** They are applied for on a form and approved in advance, and the
ministerial exemption is irrevocable. A client who asks about it after the fact has usually missed the
window.

**Then remember what the liability is.** Self-employment tax is not reduced by nonrefundable credits and
it enters the estimated tax computation under § 6654(f)(2) alongside the income tax. A new
self-employed client with no withholding needs estimated payments covering both.

<div class="scenario">
<h3>Electing to pay more</h3>

Priya's Schedule C shows net profit of $1,400 for the year. She has two children and no other earned
income. Her ordinary net earnings from self-employment, after the base reduction, are about $1,293.

Reporting them costs her roughly $198 of self-employment tax. If instead she elects the non-farm
optional method — available because her net profit is below the lower limit and below the required
percentage of gross income, and because she has been self-employed on a regular basis — she reports two
thirds of gross non-farm income instead, which on her figures is materially higher. The extra tax is
modest; the increase in earned income raises her earned income credit and additional child tax credit by
more, and it secures quarters of coverage for the year. She may use this method for five years in total,
so it is worth tracking which years she has used.
</div>

<div class="scenario">
<h3>The minister on a Form W-2</h3>

Reverend Achebe receives a Form W-2 from his congregation with no social security or Medicare withheld,
plus a housing allowance. He filed no exemption application.

He is a common law employee for income tax purposes — hence the Form W-2 — but § 1402(c) treats his
ministerial services as a trade or business for self-employment tax, so the compensation and the housing
allowance go on Schedule SE. Had he filed a timely application under § 1402(e) stating conscientious or
religious opposition to public insurance, his ministerial income would be exempt. That exemption would
not reach a separate consulting practice he ran on the side, and it could not be revoked later because
his views changed.
</div>

<div class="scenario">
<h3>The credit that does not help</h3>

Ola has $61,000 of net profit from consulting, a large itemized deduction that reduces her taxable
income to nearly nothing, and a $900 nonrefundable credit.

Her income tax is zero, so the $900 credit is worth nothing — but her self-employment tax is unaffected
by any of it. Section 26(a) limits the credit to her chapter 1 liability, and the self-employment tax
sits in chapter 2. She owes it in full, and the only things that will pay it are estimated payments,
withholding from other work, and refundable credits.
</div>

<div class="callout trap">

**Nonrefundable credits do not reduce it.** This is the most commonly missed consequence of the tax
sitting in chapter 2.

**A Form 1099-NEC is not a determination.** Whether the payment is self-employment income depends on
whether the recipient carried on a trade or business.

**The optional methods increase the tax on purpose.** A question describing them as a way to reduce
self-employment tax has them backwards.

**The non-farm method has a five-year lifetime cap and a regular-basis test**; the farm method has
neither.

**The § 1402(e) exemption is irrevocable and covers ministerial income only.** Other self-employment
income of the same person remains taxable.

**A minister can hold a Form W-2 and still file Schedule SE.** The employment status differs between
the income tax and the self-employment tax.

**A qualified joint venture election is about coverage, not about tax.** It usually changes nothing in
total tax while giving the second spouse an earnings record.

**Self-employment tax counts for estimated tax.** The chapter 2 tax is part of the figure the
instalments are measured against (IRC § 6654(f)(2)).
</div>

## How this has changed

Nothing in Pub. L. 119-21 amended §§ 1401 or 1402. The structural provisions on this page — the
optional methods, the religious exemptions, the limited partner exclusion — have been in place for
decades, and the last substantial change to the section was the qualified joint venture rule added in
2007.

What does move is the pair of limits governing the optional methods, and they move by an unusual route.
{fig:se.optional_limits} Because the lower limit is built from the Social Security Act quarter of
coverage amount, it is announced by the Social Security Administration rather than published in a
Treasury revenue procedure, and it reaches practitioners through the Schedule SE instructions.

That has a currency consequence worth stating plainly: {fig:se.optional_2025} A page or client letter
quoting optional method figures should always name the year they belong to, because the two limits move
every year and the instructions carrying them are published late.

The one point on this topic that has changed in substance in recent years is not in the Code at all. The
boundary of the § 1402(a)(13) limited partner exclusion has been litigated repeatedly, and the position
that a state law limited partnership interest is automatically outside self-employment tax has not
survived. That is covered on 1.2.4.a.

## Exam focus

Expect the classification question rather than a computation: which of four receipts is subject to
self-employment tax, with rental income, a capital gain, an employee's wages and investment income as
the usual wrong answers. The correct answer is whatever arose from a trade or business the taxpayer
carried on.

Know that the optional methods increase reported earnings, why a taxpayer would want that, and the two
asymmetries between them — the five-year cap and the regular-basis test on the non-farm method.

Know the two religious exemptions, that the ministerial one is irrevocable and limited to ministerial
income, and that a minister without an exemption pays self-employment tax on income reported to them on
a Form W-2.

Know that the tax is not reduced by nonrefundable credits and that it enters the estimated tax
computation.

## Check yourself

**1.** A collector who has owned stamps for years sells a single rare item at a large gain. Is the gain
subject to self-employment tax?

*Answer: No. Self-employment tax reaches net earnings from a trade or business carried on by the
taxpayer, and IRC § 1402(a)(3) excludes gain from the disposition of property that is not stock in trade
or held primarily for sale to customers. An isolated sale by a collector does not establish a trade or
business, so the gain is a capital gain.*

**2.** Why would a taxpayer elect an optional method that increases their self-employment tax?

*Answer: For social security quarters of coverage, and because the earned income credit and the
additional child tax credit are computed on earned income. Raising reported net earnings can increase
those credits by more than the additional tax costs, which is why the election exists at all.*

**3.** A taxpayer used the non-farm optional method in each of the last five years. May they use it
again?

*Answer: No. IRC § 1402(a) limits the non-farm optional method to five taxable years for any individual.
The farm optional method has no such limit, so a taxpayer with farm income could continue to use that
one.*

**4.** A minister filed an approved exemption application under § 1402(e) and now also earns fees from
an unrelated consulting business. What is the position?

*Answer: The exemption covers services performed as a minister and does not reach the consulting fees,
which are self-employment income in the ordinary way. The exemption is also irrevocable, so it cannot be
withdrawn to obtain coverage.*

**5.** A self-employed taxpayer has enough itemized deductions to reduce income tax to zero and holds a
nonrefundable credit. What does the credit do to the self-employment tax?

*Answer: Nothing. Sections 1401(a) and (b) impose the tax in chapter 2, and IRC § 26(a) limits
nonrefundable credits to the chapter 1 liability. The self-employment tax is payable in full and can
only be met by payments or refundable credits.*
