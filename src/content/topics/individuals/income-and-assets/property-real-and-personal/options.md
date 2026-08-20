---
title: "Options — statutory, non-statutory, and traded"
code: "1.2.3.h"
part: 1
domain: "Income and Assets"
section: "Property, real and personal"
description: "An ISO produces no regular tax at exercise and an AMT adjustment on the same day. The two bases then differ, and the difference survives until the shares are sold."
status: review
taxYear: 2026
lastReviewed: "2026-08-19"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 56", title: "Adjustments in computing alternative minimum taxable income", url: "https://www.law.cornell.edu/uscode/text/26/56" }
  - { type: IRC, ref: "§ 421", title: "General rules for certain stock options", url: "https://www.law.cornell.edu/uscode/text/26/421" }
  - { type: IRC, ref: "§ 422", title: "Incentive stock options", url: "https://www.law.cornell.edu/uscode/text/26/422" }
  - { type: IRC, ref: "§ 423", title: "Employee stock purchase plans", url: "https://www.law.cornell.edu/uscode/text/26/423" }
  - { type: IRC, ref: "§ 1234", title: "Options to buy or sell", url: "https://www.law.cornell.edu/uscode/text/26/1234" }
  - { type: IRC, ref: "§ 6039", title: "Returns required in connection with certain options", url: "https://www.law.cornell.edu/uscode/text/26/6039" }
forms: []
related: ["1.2.3.b", "1.2.3.c", "1.2.1.a", "1.2.3.d", "1.2.3.a", "1.2.3.k", "1.4.1.a"]
changelog:
  - { date: "2026-08-19", summary: "Initial draft. Sets out the IRC § 421(a) effect of a qualifying transfer and the § 421(b) treatment of a disqualifying disposition, the § 422 conditions for an incentive stock option with its $100,000 annual limit, the § 56(b)(3) alternative minimum tax adjustment that arises at exercise, the § 423 employee stock purchase plan requirements and the § 423(c) discount compensation rule, the § 1234 character rules for purchasers and grantors, and the § 6039 reporting." }
---

The hardest thing about an incentive stock option is that two tax systems disagree about the same day.
For regular tax, IRC § 421(a) says nothing happens at exercise. For alternative minimum tax, § 56(b)(3)
says § 421 does not apply, so the bargain element is an adjustment in the year of exercise. The shares
then carry **two different bases** — and the difference does not resolve until they are sold, sometimes
years later and in a different rate environment.

## The rule

**What a qualifying transfer does.** Where a share is transferred to an individual on the exercise of an
option meeting § 422(a) or § 423(a): no income results at the transfer; the employer gets no § 162
deduction at any time for that share; and nothing beyond the option price is treated as received by the
corporation (IRC § 421(a)(1)–(3)).

**Incentive stock options — the holding conditions.** Section 421(a) applies only if no disposition is
made within **2 years from the grant** nor within **1 year after the share is transferred**, and the
individual was an employee of the granting corporation or a parent or subsidiary at all times from the
grant until the day 3 months before exercise (IRC § 422(a)(1), (2)).

**And the plan conditions.** The option must be granted under a shareholder-approved plan naming the
shares and eligible employees; granted within 10 years of the plan's adoption or approval; not exercisable
more than 10 years after grant; priced at not less than fair market value at grant; non-transferable
except by will or descent, exercisable in life only by the holder; and granted to someone who does not
then own more than 10 percent of the voting power (IRC § 422(b)(1)–(6)).

**A ceiling on how much can be an ISO in one year.** To the extent the aggregate fair market value of
stock for which incentive stock options are exercisable **for the first time** in a calendar year, across
all plans of the employer and its parents and subsidiaries, exceeds a statutory ceiling, those options are
not incentive stock options (IRC § 422(d)(1)) — applied by taking options in the order granted
(§ 422(d)(2)). Value is measured at grant, so a rising share price does not consume more of the limit; the
figure is in the table below.

**The AMT adjustment.** Section 421 does not apply for alternative minimum tax purposes to the transfer of
stock acquired on the exercise of an incentive stock option, and the adjusted basis of the stock so
acquired is determined on the basis of that treatment (IRC § 56(b)(3)). The bargain element at exercise is
therefore an AMT preference in the exercise year, and the stock's AMT basis is its fair market value at
exercise while its regular tax basis remains the option price.

**A disqualifying disposition moves the income, not the amount.** Where the transfer would qualify but for
a failure of the holding periods, the increase in the individual's income and the employer's deduction are
treated as arising in the taxable year of the **disposition** rather than the year of exercise, and no
chapter 24 withholding is required on that increase (IRC § 421(b)).

**Employee stock purchase plans — the same two holding periods.** No disposition within 2 years after the
grant nor within 1 year after the share is transferred, and employment from grant until 3 months before
exercise (IRC § 423(a)(1), (2)).

**And a different set of plan terms.** The option price may not be less than 85 percent of fair market
value at grant, or of value at exercise; where it is set against value at exercise the option period is
limited to 5 years; and each employee's rights to purchase stock, valued at grant, may not accrue faster
than a fixed annual ceiling for each calendar year the option is outstanding (IRC § 423(b)(6), (7), (8)).

**The discount is compensation even on a qualifying disposition.** Where the option price was below full
value at grant, a disposition meeting the holding periods — or death while holding the share — includes as
**compensation**, not capital gain, the **lesser** of the excess of value at disposition over the price
paid, or the excess of value at grant over the option price (IRC § 423(c)(1), (2)). The amount is added to
basis, and no withholding is required on it.

**Traded options take their character from the underlying.** Gain or loss on the sale or exchange of an
option to buy or sell property, or loss from failing to exercise it, is gain or loss from the sale of
property having the **same character as the underlying property** has, or would have, in the taxpayer's
hands (IRC § 1234(a)(1)); an option that lapses is deemed sold on the day it expired (§ 1234(a)(2)).

**The grantor is always short term.** For the grantor of an option in stock, securities or commodities,
gain or loss from a closing transaction, and gain on lapse, is treated as from the sale of a capital asset
held **not more than 1 year** (IRC § 1234(b)(1)).

**Reporting.** A corporation transferring stock on the exercise of an incentive stock option, or recording
a transfer of title to stock acquired under a § 423(c) option, must file a return and furnish a statement
to the individual (IRC § 6039(a), (b)).

## Current figures

| Item | 2026 |
| --- | --- |
| Effect of a qualifying transfer | {fig:options.statutory_effect} |
| ISO holding conditions | {fig:options.iso_holding} |
| ISO plan conditions | {fig:options.iso_plan_terms} |
| Annual ISO limit | {fig:options.iso_annual_limit} |
| Alternative minimum tax | {fig:options.iso_amt} |
| Disqualifying disposition | {fig:options.disqualifying_disposition} |
| ESPP holding conditions | {fig:options.espp_holding} |
| ESPP price and limits | {fig:options.espp_price_and_limits} |
| The ESPP discount | {fig:options.espp_discount_compensation} |
| Purchaser of a traded option | {fig:options.purchaser_character} |
| Grantor of a traded option | {fig:options.grantor_character} |
| Reporting | {fig:options.reporting} |

## How it works in practice

For an ISO, keep two basis records from the day of exercise. Regular tax basis is what was paid; AMT basis
is fair market value at exercise. When the shares are eventually sold, the regular tax gain and the AMT
gain differ by the original adjustment, and that difference is what releases the minimum tax credit built
up in the exercise year. A client who exercises and holds without understanding this will meet a large AMT
bill in a year with no cash proceeds, and the recovery of it is slow.

For an ESPP, the § 423(c) computation is the one that gets missed. Even on a fully qualifying disposition,
the discount is ordinary compensation — the lesser of two spreads — and it is not on the Form W-2 for that
year because no withholding is required. It has to be picked up from the § 6039 statement and added to
basis, or the same amount is taxed twice.

For traded options, ask who the taxpayer is. A purchaser takes the character of the underlying, so an
option over stock produces capital gain or loss and an expired option is a sale on the expiry date. A
writer is short term on every closing transaction and on every lapse, whatever the period the position was
open.

<div class="scenario">
<h3>Scenario 1 — the exercise with no cash and a tax bill</h3>

Elias exercises incentive stock options in March 2026, buying 10,000 shares at 4 dollars when they are
worth 31 dollars. He holds them.

For regular tax, IRC § 421(a)(1) means no income at all this year and his basis is 40,000 dollars. For
alternative minimum tax, § 56(b)(3) disapplies § 421, so the 270,000-dollar bargain element is an
adjustment for 2026 and his AMT basis is 310,000 dollars. He has received no cash and may owe substantial
minimum tax. When he sells, the two computations differ by the same 270,000 dollars, which is how the
minimum tax credit unwinds.
</div>

<div class="scenario">
<h3>Scenario 2 — the sale that changed the year</h3>

Fatima exercises an ISO in June 2026 at a 90,000-dollar bargain element and sells the shares in February
2027, less than a year after the transfer.

The holding period in IRC § 422(a)(1) fails. Under § 421(b), the increase in her income is treated as
arising in **2027**, the year of the disposition, not 2026 when she exercised — and no chapter 24
withholding is required on it. The compensation element is ordinary income in 2027, with any further
movement in the share price a short-term capital gain or loss.
</div>

<div class="scenario">
<h3>Scenario 3 — the ESPP discount that is never capital gain</h3>

Gideon buys shares under an ESPP at 85 percent of the value at grant. The grant-date value was 40 dollars,
so he pays 34. He holds for three years and sells at 62 dollars.

The holding periods in IRC § 423(a)(1) are met, but § 423(c) still includes compensation: the lesser of
the excess of value at disposition over the price paid (28 dollars) or the excess of value at grant over
the option price (6 dollars). So 6 dollars a share is ordinary compensation, added to his basis, and the
remaining 22 dollars a share is long-term capital gain. No withholding was taken on the 6 dollars, so it
has to be picked up from the § 6039 statement.
</div>

<div class="callout trap">

**The AMT adjustment happens at exercise, not at sale.** IRC § 56(b)(3) removes § 421 from the minimum tax
computation entirely, and the two bases diverge from that day.

**The annual ISO ceiling is measured at grant and by first exercisability**, not by what is actually
exercised — § 422(d)(1) says "exercisable for the 1st time" in the calendar year.

**A qualifying ESPP disposition still produces ordinary income.** Section 423(c) applies where the option
price was below full grant-date value, which is nearly always.

**Option writers are always short term.** Section 1234(b)(1) treats a grantor's closing transaction and
lapse gain as from an asset held not more than one year.
</div>

## How this has changed

**Section 422(b) acquired two closing sentences that make ISO status partly elective.** An option is not
an incentive stock option if its own terms provide that it will not be treated as one, or if an election
is made under § 83(i) with respect to the stock received on its exercise. Either lets a grant that meets
every statutory condition sit outside the regime deliberately.

**The § 83(i) interaction is the newer of the two** and matters because the election is made by the
employee, after the fact. An employee who elects deferral under § 83(i) converts what was an ISO into a
non-statutory option for tax purposes, losing § 421(a) and the AMT structure with it.

**Section 423(b)(8)'s accrual limit has never been indexed**, and it is measured by value at grant for
each calendar year the option is outstanding rather than by what is purchased. The practical ceiling
on an ESPP has therefore fallen steadily in real terms, in the same way as the § 1211(b) capital loss
allowance and the § 86 base amounts.

**What has not moved is the ISO holding structure**, and it remains the most misdescribed part of the
topic: **two** years from grant and **one** year from transfer, and both must be satisfied. A sale
eighteen months after exercise but only twenty-three months after grant is a disqualifying disposition,
which surprises clients who count only from exercise.

## Exam focus

Expect the **two-year and one-year** pair, with dates arranged so one is met and the other is not. Both are
required by § 422(a)(1).

Expect the **AMT adjustment** as a question about the exercise year. There is no regular tax and there is
an adjustment.

Expect the **§ 423(c) discount** on a fully qualifying ESPP disposition, testing whether you know part of
the gain is compensation.

Expect the **grantor** of an option, where the answer is short-term regardless of how long the position
was open.

## Check yourself

**1.** An ISO is granted in January 2024 and exercised in March 2026. What is the earliest disposition
date that keeps the qualifying treatment?

*Answer: March 2027 — one year after the transfer of the shares. The two-year period from grant expired in
January 2026, so under IRC § 422(a)(1) the later of the two conditions controls.*

**2.** What happens at exercise of an ISO for regular tax and for alternative minimum tax?

*Answer: Nothing for regular tax, under IRC § 421(a)(1). For alternative minimum tax, § 56(b)(3)
disapplies § 421, so the bargain element is an adjustment in the exercise year and the AMT basis of the
stock becomes its value at exercise.*

**3.** Options for stock worth 140,000 dollars at grant become exercisable for the first time in one
calendar year. What is the consequence?

*Answer: Options covering 40,000 dollars of that value are not incentive stock options, under IRC
§ 422(d)(1), applied by taking options in the order granted under § 422(d)(2).*

**4.** An employee holds ESPP shares for three years, then sells at a large gain. Is all of it capital?

*Answer: No. IRC § 423(c) includes as compensation the lesser of the excess of value at disposition over
the price paid or the excess of value at grant over the option price, with the remainder capital gain and
the compensation added to basis.*

**5.** A taxpayer writes a call option that expires worthless after fourteen months. What is the
character of the premium?

*Answer: Short-term capital gain. IRC § 1234(b)(1) treats gain on the lapse of an option granted by the
taxpayer as from the sale of a capital asset held not more than one year, regardless of the actual period.*
