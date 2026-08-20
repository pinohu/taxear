---
title: "Foreign tax credit"
code: "1.3.2.d"
part: 1
domain: "Deductions and Credits"
section: "Credits"
description: "A credit with a ratio limitation, four separate baskets, a one-back ten-forward carryover, and an election that lets a small investor skip the whole apparatus."
status: review
taxYear: 2026
lastReviewed: "2026-08-19"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 901", title: "Taxes of foreign countries and of possessions of the United States", url: "https://www.law.cornell.edu/uscode/text/26/901" }
  - { type: IRC, ref: "§ 903", title: "Credit for taxes in lieu of income, etc., taxes", url: "https://www.law.cornell.edu/uscode/text/26/903" }
  - { type: IRC, ref: "§ 904", title: "Limitation on credit", url: "https://www.law.cornell.edu/uscode/text/26/904" }
  - { type: IRC, ref: "§ 275", title: "Certain taxes", url: "https://www.law.cornell.edu/uscode/text/26/275" }
  - { type: IRC, ref: "§ 6511", title: "Limitations on credit or refund", url: "https://www.law.cornell.edu/uscode/text/26/6511" }
  - { type: Statute, ref: "Pub. L. 119-21, §§ 70311, 70313", title: "Foreign tax credit limitation amendments", url: "https://www.law.cornell.edu/uscode/text/26/904" }
forms: []
related: ["1.1.1.j", "1.1.1.c", "1.3.2.c", "1.1.1.k"]
changelog:
  - { date: "2026-08-19", summary: "Initial draft. Sets out the IRC § 901(a) election and the § 275(a)(4) all-or-nothing consequence, the § 903 in-lieu-of rule, the § 904(a) ratio limitation with the § 904(b) modifications, the four § 904(d)(1) baskets, the § 904(c) one-back ten-forward carryover, the § 904(j) de minimis election, the § 901(k) dividend holding period, the § 6511(d)(3)(A) ten-year refund period, and the Pub. L. 119-21 §§ 70311 and 70313 amendments effective for taxable years beginning after 31 December 2025." }
---

The foreign tax credit is not a matter of subtracting what a foreign country charged. It is an election,
followed by a ratio, applied separately in four categories, with anything unusable carried one year back
and ten forward. Most individual returns claiming it involve a few hundred dollars of withholding on
mutual fund dividends, and for those there is an election that dispenses with the whole apparatus — but
only if the taxpayer knows to make it, and only at a price.

## The rule

**It is an election, and it is all or nothing.** The credit is allowed only if the taxpayer chooses the
benefits of subpart A, and that choice may be made or changed at any time before the refund claim period
expires for the year (IRC § 901(a)). {fig:ftc.credit_or_deduction} So a taxpayer cannot credit some
foreign income taxes and deduct others in the same year — the choice binds the whole year, though not
adjacent years.

**What is creditable.** Income, war profits and excess profits taxes paid or accrued to a foreign
country or a US possession (IRC § 901(b)(1) for a citizen or domestic corporation). Section 903 extends
the term to a tax paid *in lieu of* an income tax otherwise generally imposed — which is how many gross
withholding taxes on dividends and royalties become creditable at all.

**The limitation.** {fig:ftc.limitation} Read the ratio the way it is drafted: the numerator is foreign
source taxable income, the denominator is entire taxable income, and the product is applied to the US
tax. Because taxable income is used rather than gross income, deductions allocable to foreign source
income shrink the numerator and so shrink the credit.

**Four separate limitations.** The subsection is applied separately to {fig:ftc.baskets}. Separate
application means excess credits in one basket cannot shelter US tax on income in another. For an
individual return, almost everything falls into passive category income — dividends, interest, rents and
royalties of the kind that would be foreign personal holding company income under § 954(c) — or into
general category income, which § 904(d)(2)(A)(ii) defines as everything that is not one of the other
three.

**Carryover.** Foreign taxes exceeding the limitation are {fig:ftc.carryover}. The order is fixed: back
one year first, then forward, earliest year first. The carryover stays inside its basket.

**The de minimis election.** An individual may elect out of the limitation entirely where
{fig:ftc.de_minimis_election} (IRC § 904(j)(1), (2)). Qualified passive income means passive income
shown on a payee statement — in practice a Form 1099-DIV or 1099-INT (IRC § 904(j)(3)(A)). The election
is what allows the credit to be taken directly on Form 1040 without a Form 1116. The price is in
§ 904(j)(1)(B) and (C): no carryback or carryover into or out of that year, so any excess is simply lost.

**The dividend holding period.** {fig:ftc.holding_period} The rule exists to stop a taxpayer buying a
foreign stock immediately before its ex-dividend date purely to acquire a creditable withholding tax.

**A longer period to claim.** {fig:ftc.refund_period} (IRC § 6511(d)(3)(A)). This is a genuinely
practical point: a foreign tax finally determined years after the fact can still be credited on an
amended return long after the ordinary period for that year has closed.

**Where the credit does not run.** Section 901(j) denies the credit altogether for taxes paid to a
country whose government the United States does not recognise, has severed diplomatic relations with, or
which the Secretary of State has designated as repeatedly providing support for acts of international
terrorism, and requires income from that country to be limited separately.

## Current figures

| Item | Amount |
| --- | --- |
| Limitation | {fig:ftc.limitation} |
| Baskets | {fig:ftc.baskets} |
| Carryover | {fig:ftc.carryover} |
| De minimis election | {fig:ftc.de_minimis_election} |
| Dividend holding period | {fig:ftc.holding_period} |
| Credit or deduction | {fig:ftc.credit_or_deduction} |
| Period to claim a refund | {fig:ftc.refund_period} |

## How it works in practice

**Decide credit or deduction first.** The credit is usually better because it reduces tax dollar for
dollar while a deduction reduces income — and since 2018 the deduction route is unavailable to most
individuals anyway, because foreign income taxes are deductible only as an itemized deduction under
§ 164(a)(3) and most taxpayers take the standard deduction. Where the limitation would waste most of the
credit and the taxpayer itemizes, the deduction can still win.

**Then test the de minimis election.** Two questions: is all foreign source gross income passive and
reported on a payee statement, and are the creditable taxes within the dollar ceiling? If both are yes,
the election gives the full credit with no Form 1116 and no ratio computation. It is the right answer
for the ordinary client holding an international index fund.

**Otherwise compute the ratio, basket by basket.** Allocate income to baskets, allocate deductions to
that income, and compute foreign source taxable income for each. The limitation is separate for each
basket, so a taxpayer can have unusable credits in one basket while paying full US tax in another.

**Then handle the excess.** Carry back one year and forward ten, within the basket. Track it: the
carryforward is a real asset and a common casualty of a change of preparer.

Two computational traps sit inside the ratio. Personal exemptions are ignored in computing taxable
income for this purpose (IRC § 904(b)(1)), which no longer changes the arithmetic but still appears in
questions. And foreign source capital gain enters the numerator only to the extent of foreign source
capital gain net income (IRC § 904(b)(2)(A)), so a taxpayer with foreign capital losses cannot inflate
the numerator with gross gains.

<div class="scenario">
<h3>The election that avoids the form</h3>

Corinne holds an international index fund in a taxable account. Her Form 1099-DIV shows $4,100 of
ordinary dividends, all foreign source, and $290 of foreign tax paid. She has no other foreign income.

Both § 904(j) conditions are met: all her foreign source gross income is passive income shown on a payee
statement, and the creditable tax is under the single-filer ceiling. She elects, takes the whole $290 as
a credit directly on her Form 1040, and files no Form 1116. Had the fund withheld $340, she would have
been over the ceiling, and the same $340 would have required the full limitation computation — with the
real possibility that only part of it was usable this year.
</div>

<div class="scenario">
<h3>The ratio bites</h3>

Yusuf has entire taxable income of $180,000, of which $30,000 is foreign source general category income
from consulting performed abroad. His US tax before credits is $32,000, and he paid $9,600 of foreign
income tax on the consulting income — a foreign rate of 32 percent against an effective US rate well
below that.

The § 904(a) limitation is $32,000 multiplied by $30,000 over $180,000, or $5,333. He credits $5,333 this
year. The remaining $4,267 is carried back one year to the general category basket, and to the extent it
finds no room there, forward for ten years. Nothing about the excess is lost yet — but if his foreign
consulting ends this year, the carryforward may never be used, and § 275(a)(4) means he cannot switch
that portion to a deduction.
</div>

<div class="scenario">
<h3>Two baskets, one taxpayer</h3>

Priya has $12,000 of foreign source passive income with $1,800 of foreign withholding, and $40,000 of
foreign source general category income with $2,000 of foreign tax. Her limitation computes to $1,100 in
the passive basket and $6,400 in the general basket.

She credits $1,100 of the passive taxes and all $2,000 of the general taxes. The $700 of unusable
passive credit cannot be absorbed by the $4,400 of unused general basket limitation — § 904(d)(1)
applies the limitation separately. It carries back one year and forward ten *in the passive basket
only*. A taxpayer who nets the two baskets together will report $3,800 of credit and be wrong by $700.
</div>

<div class="callout trap">

**Credit or deduction, not both.** Section 275(a)(4) denies the deduction for any year in which the
taxpayer chooses the credit "to any extent". The choice is per year, so alternating between years is
allowed.

**The limitation is a ratio, not a rate comparison.** It does not ask whether the foreign rate exceeded
the US rate; it applies the US effective rate to foreign source taxable income.

**Baskets do not cross-subsidise.** Excess credits in one category are locked in that category, on
carryback and carryforward alike.

**The de minimis election costs the carryover.** Section 904(j)(1)(B) and (C) block movement of taxes
into or out of an electing year in both directions. For a taxpayer whose credits are fully usable that
is free; for one with an excess it is a real loss.

**Only income taxes, or taxes in lieu of them, qualify.** A foreign value added tax, property tax or
social security contribution is not creditable under § 901. Section 903 rescues gross-basis withholding
taxes, not consumption taxes.

**Foreign tax paid on income excluded under § 911 is not creditable**, because there is no US tax on
that income to credit against — a point that catches taxpayers who claim the foreign earned income
exclusion and the credit on the same dollars.

**Short-held foreign dividends produce no credit** under the § 901(k) holding period, which is a
different and shorter period from the § 1(h)(11) qualified dividend holding period.

**Ten years to claim, not three.** Section 6511(d)(3)(A) is the reason a foreign tax redetermination
years later is still worth acting on.
</div>

## How this has changed

Pub. L. 119-21 made two amendments to § 904 with effect for taxable years beginning after 31 December
2025. Section 70311(a) added § 904(b)(5), which for the purposes of the limitation on the § 951A basket
alone allocates the § 250(a)(1)(B) deduction and any § 164(a)(3) tax deduction on that income to that
income, allocates *no* interest expense or research and experimental expenditure to it, and allocates any
other deduction only if directly allocable — pushing everything else to US source income. Section
70313(a) added § 904(b)(6), a source rule treating a portion of income from inventory produced in the
United States and sold through a foreign branch office as foreign source. Section 70311(b) made
conforming cross-reference changes within § 904(d).

Both are aimed at the international corporate regime rather than at individual returns, and neither
touches the § 904(a) ratio, the § 904(c) carryover or the § 904(j) election that an individual return
actually turns on. They are noted here because a reader checking § 904 for currency will see the 2025
amendment notes and should know what they cover.

Two older changes still shape the topic. The categories in § 904(d)(1) have included a foreign branch
basket and a § 951A basket since 2017, so a source describing only a passive basket and a general basket
is pre-2018. And since 2018 foreign income taxes reach an individual's return as a deduction only
through itemizing, which has made the credit the practical default rather than a considered choice.

## Exam focus

Know the shape before the detail: elect, limit by ratio, apply separately by basket, carry back one and
forward ten. Be able to compute the § 904(a) limitation from a set of figures — it is the most likely
computational question, and the trap is using gross income rather than taxable income in the numerator.

Know the de minimis election cold: passive income only, shown on a payee statement, taxes within the
dollar ceiling, no Form 1116, and no carryover in either direction. That is the fact pattern most
individual returns present.

Know that the credit and the deduction are mutually exclusive for a year, that only income taxes and
§ 903 in-lieu-of taxes qualify, and that the period for claiming a refund attributable to foreign taxes
is ten years rather than three.

## Check yourself

**1.** A single taxpayer's only foreign income is $2,900 of dividends from a foreign mutual fund
reported on Form 1099-DIV, with $265 of foreign tax withheld. What is the simplest correct treatment?

*Answer: Elect under IRC § 904(j). All foreign source gross income is qualified passive income shown on
a payee statement and the tax is under the $300 single-filer ceiling, so the § 904(a) limitation does not
apply and the full $265 is credited without a Form 1116. The cost is that no carryback or carryforward
is available for that year.*

**2.** A taxpayer with US tax of $40,000, entire taxable income of $200,000 and foreign source taxable
income of $25,000 paid $8,000 of foreign tax. What is credited this year?

*Answer: $5,000. The IRC § 904(a) limitation is $40,000 multiplied by the ratio of $25,000 to $200,000.
The remaining $3,000 carries back one taxable year and then forward up to ten under § 904(c), within the
same basket.*

**3.** Why can a taxpayer with unused credits in the passive basket not apply them against US tax on
general category income?

*Answer: Because IRC § 904(d)(1) applies subsections (a), (b) and (c) separately to each category. The
separate application governs the carryback and carryforward as well, so the excess stays in the passive
basket for its whole life.*

**4.** A taxpayer paid $4,000 of foreign income tax and also paid a foreign value added tax of $900 on
purchases. What is creditable?

*Answer: The $4,000 only. IRC § 901(b) allows a credit for income, war profits and excess profits taxes,
and § 903 extends that only to a tax paid in lieu of an income tax otherwise generally imposed. A value
added tax is neither, so it is not creditable — though it may be deductible if it is a business expense.*

**5.** A taxpayer deducted foreign income taxes on an original return and now wants the credit instead,
four years later. Is it too late?

*Answer: No. IRC § 901(a) allows the choice to be made or changed at any time before the refund claim
period expires, and § 6511(d)(3)(A) gives ten years from the due date of the return for the year the
taxes were paid or accrued. Switching also triggers § 275(a)(4), so the deduction must be given up
entirely for that year.*
