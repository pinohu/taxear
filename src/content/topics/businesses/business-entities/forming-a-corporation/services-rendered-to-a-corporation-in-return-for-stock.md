---
title: "Services rendered to a corporation in return for stock"
code: "2.1.4.a"
part: 2
domain: "Business Entities"
section: "Forming a corporation"
description: "Stock for services is compensation, and those shares are invisible to the control test. A token contribution of property alongside them does not cure that either."
status: review
taxYear: 2026
lastReviewed: "2026-08-21"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 351(d)", title: "Services not treated as property", url: "https://www.law.cornell.edu/uscode/text/26/351" }
  - { type: IRC, ref: "§ 83", title: "Property transferred in connection with performance of services", url: "https://www.law.cornell.edu/uscode/text/26/83" }
  - { type: IRC, ref: "§ 368(c)", title: "Control defined", url: "https://www.law.cornell.edu/uscode/text/26/368" }
  - { type: IRC, ref: "§ 162", title: "Trade or business expenses", url: "https://www.law.cornell.edu/uscode/text/26/162" }
  - { type: IRC, ref: "§ 1032", title: "Exchange of stock for property", url: "https://www.law.cornell.edu/uscode/text/26/1032" }
  - { type: Reg, ref: "§ 1.351-1(a)(1)", title: "Transfer to corporation controlled by transferor", url: "https://www.law.cornell.edu/cfr/text/26/1.351-1" }
forms: []
related: ["2.1.4.b", "2.1.4.c", "2.1.4.d", "2.1.1.c"]
changelog:
  - { date: "2026-08-21", summary: "Initial draft. Sets out the IRC § 351(d)(1) exclusion of services from property and the matching rule in Reg. § 1.351-1(a)(1)(i), the Reg. § 1.351-1(a)(1)(ii) accommodation-transferor rule that denies property treatment to a token contribution made primarily to qualify others, the IRC § 83(a) inclusion of the value of stock received for services with the § 83(b) election and the § 83(h) matching deduction to the corporation, and the Reg. § 1.351-1(a)(1) gloss on \"immediately after the exchange\"." }
---

A founder who builds the business and a founder who funds it are in very different tax positions, and the
difference is settled at incorporation. Property goes in tax-free; services do not go in at all. The
person who receives stock for work has compensation income measured by the value of what they receive,
and — the part that damages other people — their shares are not counted in deciding whether the property
transferors have control.

## The rule

**Services are not property.** {fig:s351.services}

**And the regulation says the same.** {fig:svc.reg_not_property}

**Nor is a token contribution.** {fig:svc.accommodation}

**What the recipient includes.** {fig:svc.section83}

**And when.** {fig:svc.section83b}

**What the corporation gets.** {fig:svc.corporate_deduction}

**The control the shares are measured against.** {fig:s351.control}

**And what "immediately after" means.** {fig:svc.immediately_after}

## Current figures

| Item | Rule | Authority |
| --- | --- | --- |
| Services not property | {fig:s351.services} | IRC § 351(d)(1) |
| Accommodation transfer | {fig:svc.accommodation} | Reg. § 1.351-1(a)(1)(ii) |
| Inclusion by the service provider | {fig:svc.section83} | IRC § 83(a) |
| Election to accelerate | {fig:svc.section83b} | IRC § 83(b) |
| Corporate deduction | {fig:svc.corporate_deduction} | IRC § 83(h) |
| Control | {fig:s351.control} | IRC § 368(c) |

## How it works in practice

The two consequences are separate and both have to be worked through.

*For the service provider.* Receiving stock for services is receiving property in connection with the
performance of services, so IRC § 83 governs. The value of the stock, less anything paid for it, is
ordinary compensation income. The timing is the part that catches people: the inclusion happens at the first moment the shares are
transferable *or* are no longer subject to a substantial risk of forfeiture, whichever comes first
(IRC § 83(a)). Founder stock subject to a four-year vesting schedule is therefore
included as it vests, at each year's value — which for a business that succeeds means income measured at
the wrong end of the growth.

That is what the IRC § 83(b) election is for. Electing within the statutory window fixes the inclusion at
the value on the date of transfer, disregarding restrictions that will lapse, and everything afterwards is
capital appreciation on stock the founder already owns. For founder stock issued at formation, when the
value is often nominal, the election converts what would be years of ordinary income into a single small
inclusion. The risk is symmetrical and stated in the subsection itself: if the property is later
forfeited, no deduction is allowed for what was included. A founder who elects and then leaves before
vesting has paid tax on shares they never kept.

*For the corporation.* IRC § 83(h) gives it a IRC § 162 deduction equal to the amount the service provider
included, in the corporation's taxable year in which or with which ends the year of inclusion. The
matching is exact, which means the corporation's deduction follows the service provider's timing and not
the vesting schedule in the corporation's own accounts. It also means an IRC § 83(b) election accelerates
the corporation's deduction as well as the founder's income.

*For everybody else.* This is the damaging part. IRC § 351(d)(1) provides that stock issued for services
is not considered issued in return for property, and Reg. § 1.351-1(a)(1)(i) says the same. Those shares
are outside the control group, so the property transferors must reach eighty percent without them. Where
the service provider's stake is large, the property transferors can fall below control and every one of
them recognises their full built-in gain on a transaction they thought was tax-free.

The usual fix is to have the service provider also contribute property, so that their shares are counted.
Reg. § 1.351-1(a)(1)(ii) limits it. Where the property transferred is of relatively small value compared
with the stock already owned or to be received for services, *and* the primary purpose of the transfer is
to qualify other people's exchanges, the stock is not treated as issued for property at all. A token
contribution made for the purpose does not work. What does work is a contribution large enough to be
genuine relative to the service stake — the regulation states no percentage, and the administrative safe
harbour used in ruling practice is not in the regulation or the Code.

One further point of definition. Reg. § 1.351-1(a)(1) provides that "immediately after the exchange" does
not require simultaneous transfers, but comprehends a situation where the rights of the parties have been
previously defined and execution proceeds with an expedition consistent with orderly procedure. So a
staged closing can still be one exchange. The same paragraph excludes stock rights and warrants from
"stock", which matters where a service provider is compensated in options rather than shares.

## Scenarios

<div class="scenario">
<h3>The vesting schedule and the election</h3>
<p>Solveig receives 400,000 shares at formation for agreeing to run the company, subject to forfeiture if
she leaves within four years. The shares are worth $0.001 each at formation. By year four they are worth
$3.00 each.</p>
<p>Without an election she includes nothing at formation and then includes the value of each tranche as it
vests, at the value then — on these figures, close to $1,200,000 of ordinary income spread over four
years, most of it in the later ones. With an IRC § 83(b) election made within the statutory window she
includes $400 in the year of transfer, at the value on the date of transfer determined without regard to
the lapsing restriction, and everything after that is capital appreciation on shares she already owns. The
election costs her $400 of income and a filing. The exposure is that under IRC § 83(b)(1) no deduction is
allowed if she forfeits the shares — she will have paid tax on stock she never kept.</p>
</div>

<div class="scenario">
<h3>The token contribution that did not qualify</h3>
<p>Erasmus is to receive 30 percent of a new corporation for services; two investors contribute cash and
property for the other 70 percent. Their adviser, aware that Erasmus's shares are outside the control
group, has him contribute a laptop worth $2,000 alongside his services so that all his shares count as
issued for property.</p>
<p>It does not work. Reg. § 1.351-1(a)(1)(ii) provides that stock is not treated as issued for property
where the property is of relatively small value in comparison with the value of the stock already owned or
to be received for services by that person, and the primary purpose of the transfer is to qualify other
persons' exchanges. Both limbs are plainly satisfied — a laptop against a 30 percent stake, contributed
for exactly that reason. Erasmus's shares stay outside the control group, the investors hold 70 percent,
and the transaction fails IRC § 368(c). All of them recognise gain.</p>
</div>

<div class="scenario">
<h3>The matching that ran a year late</h3>
<p>A calendar-year corporation issues stock to a consultant in November 2026 for services already
performed. The shares are transferable immediately and worth $180,000. The consultant is on a calendar
year.</p>
<p>Both sides land in 2026. Under IRC § 83(a) the consultant includes $180,000 in the first taxable year
in which the rights are transferable or not subject to a substantial risk of forfeiture — here immediately
— so 2026. Under IRC § 83(h) the corporation's deduction is allowed for its taxable year in which or with
which ends the consultant's taxable year of inclusion, which is also 2026. Had the corporation been on a
June year end, its deduction would fall in the year ending 30 June 2027, because that is the year in which
the consultant's calendar 2026 ends. The matching rule follows the service provider, not the corporation's
own accounting.</p>
</div>

<div class="scenario">
<h3>The options that were not stock</h3>
<p>A corporation is formed by two property transferors who take 100 percent of the issued shares. A key
employee simultaneously receives options over 25 percent of the fully diluted equity in exchange for
agreeing to join.</p>
<p>The property transferors have control. Reg. § 1.351-1(a)(1) provides that stock rights and stock
warrants are not included in the term "stock" for this purpose, so the options are not counted in the
IRC § 368(c) computation and the transferors hold 100 percent of the stock that exists. The employee's
own position is governed by IRC § 83 when the options are exercised or, if applicable, when they are
granted with a readily ascertainable value — not at formation. This is why an option grant is a
structurally safer way to bring in a service provider at formation than an issue of shares.</p>
</div>

<div class="callout trap">
<strong>Traps</strong>
<ul>
<li><strong>Service shares are outside the control group.</strong> IRC § 351(d)(1) and
Reg. § 1.351-1(a)(1)(i) both say so.</li>
<li><strong>A token contribution does not fix it.</strong> Reg. § 1.351-1(a)(1)(ii) denies property
treatment where the value is relatively small and the purpose is to qualify others.</li>
<li><strong>Inclusion is at vesting without an election.</strong> IRC § 83(a) measures at the first time
the shares are transferable or not forfeitable — at that date's value.</li>
<li><strong>The IRC § 83(b) election is one-way.</strong> Forfeiture after electing gives no deduction for
what was included.</li>
<li><strong>The corporate deduction follows the service provider's year.</strong> IRC § 83(h), not the
corporation's vesting accruals.</li>
<li><strong>Options are not stock here.</strong> Reg. § 1.351-1(a)(1) excludes stock rights and warrants
from the control computation.</li>
<li><strong>"Immediately after" tolerates a staged closing.</strong> Provided the rights were previously
defined and execution is expeditious.</li>
</ul>
</div>

## How this has changed

The substantive rules are old and have not moved. IRC § 351(d)(1) has excluded services from property
since the provision was enacted, and IRC § 83 has governed compensatory transfers of property since 1969.

What has changed around them is the prevalence of the problem. When corporations were formed by people
who put in money, the services rule was an edge case. In a founder-and-engineer structure it is the
central planning question at incorporation, and the IRC § 83(b) election — a filing with a short,
unforgiving window and no relief for a late one — has become the most consequential piece of paperwork in
a company's first month.

IRC § 83(i), the qualified equity grant deferral, was added later and gives certain employees of eligible
privately held corporations an election to defer income on stock received on exercise of an option or
settlement of a restricted stock unit. It is a narrow provision with conditions on the corporation's
grant practices, and it does not touch the IRC § 351 control question at all — deferring the employee's
income does not turn service shares into property shares.

The one thing worth watching is that the administrative safe harbour practitioners rely on when sizing an
accommodation contribution — a percentage of the value of the service stake — appears in ruling practice
rather than in the regulation. The regulation itself states only a facts test, and a transaction structured
to the safe harbour is relying on something the Code and the regulation do not say.

## Exam focus

Two answers carry most questions. Stock issued for services is compensation income to the recipient under
IRC § 83. And those shares do not count toward control under IRC § 368(c), because IRC § 351(d)(1) says
they are not issued for property.

Where a question gives a service provider contributing a small amount of property as well, look for the
accommodation rule: relatively small value plus a primary purpose of qualifying others means the shares
still do not count.

For IRC § 83 timing questions, the answer without an election is the value at vesting, and with an
election the value at transfer. Where the question mentions forfeiture after an election, the answer is
that no deduction is allowed.

## Check yourself

**1.** Three people form a corporation. Two contribute property for 76 percent of the single class of
stock; the third receives 24 percent for services. Does IRC § 351(a) apply to the property transferors?

*Answer: no. IRC § 351(d)(1) provides that stock issued for services is not considered issued in return
for property, so the third person's shares are outside the control group. The property transferors hold
76 percent, below the 80 percent that IRC § 368(c) requires, and both recognise their realised gain in
full.*

**2.** A founder receives restricted stock worth $500 at formation, vesting over three years, and makes no
IRC § 83(b) election. The stock is worth $90,000 when it fully vests. What does she include?

*Answer: the value at each vesting date, not the $500. IRC § 83(a) includes the excess of fair market
value over the amount paid at the first time the rights are transferable or not subject to a substantial
risk of forfeiture — which is each vesting date — so she includes the value of each tranche as it vests,
totalling far more than $500 on these facts.*

**3.** The same founder makes a timely IRC § 83(b) election and then leaves before any of the stock vests,
forfeiting all of it. What relief is available?

*Answer: none for the amount included. IRC § 83(b)(1) provides that where the election is made and the
property is subsequently forfeited, no deduction is allowed. The election trades a small certain inclusion
for the risk of having paid tax on shares never kept.*

**4.** A person to receive 40 percent of a new corporation for services also contributes equipment worth
$3,000, so that his shares will count toward control. Do they?

*Answer: no. Reg. § 1.351-1(a)(1)(ii) provides that stock is not treated as issued for property where the
property is of relatively small value in comparison with the value of the stock to be received for
services by that person and the primary purpose of the transfer is to qualify the exchanges of other
persons transferring property. Both limbs are met.*

**5.** A corporation on a 30 June year end issues stock for services to a calendar-year consultant, who
includes the value in his 2026 return. In which year does the corporation deduct it?

*Answer: the year ending 30 June 2027. IRC § 83(h) allows the deduction for the taxable year of the person
for whom the services were performed in which or with which ends the taxable year in which the amount is
included in the service provider's gross income. The consultant's 2026 year ends 31 December 2026, which
falls within the corporation's year ending 30 June 2027.*
