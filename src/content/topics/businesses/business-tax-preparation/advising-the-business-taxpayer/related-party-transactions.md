---
title: "Related party transactions"
code: "2.2.5.d"
part: 2
domain: "Business Tax Preparation"
section: "Advising the business taxpayer"
description: "Pricing a related-party transaction wrongly rarely costs tax on the transaction itself; it costs the character of the payment, and the character is where the money is."
status: review
taxYear: 2026
lastReviewed: "2026-08-21"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 162", title: "Trade or business expenses", url: "https://www.law.cornell.edu/uscode/text/26/162" }
  - { type: IRC, ref: "§ 267", title: "Losses, expenses, and interest with respect to transactions between related taxpayers", url: "https://www.law.cornell.edu/uscode/text/26/267" }
  - { type: IRC, ref: "§ 301", title: "Distributions of property", url: "https://www.law.cornell.edu/uscode/text/26/301" }
  - { type: IRC, ref: "§ 316", title: "Dividend defined", url: "https://www.law.cornell.edu/uscode/text/26/316" }
  - { type: IRC, ref: "§ 469", title: "Passive activity losses and credits limited", url: "https://www.law.cornell.edu/uscode/text/26/469" }
  - { type: IRC, ref: "§ 482", title: "Allocation of income and deductions among taxpayers", url: "https://www.law.cornell.edu/uscode/text/26/482" }
  - { type: IRC, ref: "§ 707", title: "Transactions between partner and partnership", url: "https://www.law.cornell.edu/uscode/text/26/707" }
  - { type: IRC, ref: "§ 1239", title: "Gain from sale of depreciable property between certain related taxpayers", url: "https://www.law.cornell.edu/uscode/text/26/1239" }
  - { type: IRC, ref: "§ 6662", title: "Imposition of accuracy-related penalty on underpayments", url: "https://www.law.cornell.edu/uscode/text/26/6662" }
  - { type: IRC, ref: "§ 461", title: "General rule for taxable year of deduction", url: "https://www.law.cornell.edu/uscode/text/26/461" }
  - { type: Reg, ref: "§ 1.482-1", title: "Allocation of income and deductions among taxpayers", url: "https://www.law.cornell.edu/cfr/text/26/1.482-1" }
  - { type: Reg, ref: "§ 1.469-2", title: "Passive activity loss", url: "https://www.law.cornell.edu/cfr/text/26/1.469-2" }
forms: []
related: ["2.2.4.h", "2.2.4.i", "2.2.5.e", "2.2.5.f", "2.2.5.h"]
changelog:
  - { date: "2026-08-21", summary: "Initial draft. The advisory counterpart to 2.2.4.h. Sets out the IRC § 482 allocation power and the Reg. § 1.482-1(b)(1) arm's length standard, the IRC § 162(a)(1) reasonable compensation limit and the IRC § 301(c) constructive distribution that follows a failed deduction, the IRC § 707(a)(2) disguised payment and disguised sale rules, and the Reg. § 1.469-2(f)(6) self-rental rule that recharacterises income without recharacterising loss." }
---

The disallowance rules — IRC § 267, § 707(b), § 1239 and § 1031(f) — are set out under
[analysis of financial records](/businesses/business-tax-preparation/analysis-of-financial-records/related-party-activity/).
This page is the advisory side: what a preparer should say *before* the transaction, when the
question is still how to structure and price it rather than what to do about it afterwards.

## The rule

**The Service can reprice.** {fig:rpt.482} (IRC § 482), against the standard in
{fig:rpt.arms_length} (Reg. § 1.482-1(b)(1)). Note the breadth: whether or not incorporated,
whether or not organised in the United States, whether or not affiliated. Two businesses under
common control are enough.

**Compensation must be reasonable and earned.** {fig:rpt.reasonable_comp} (IRC § 162(a)(1)).

**And a failed deduction does not simply disappear.** {fig:rpt.constructive_dividend}
(IRC § 301(c); IRC § 316). In an S corporation the mirror problem runs the other way — too little
compensation, recharacterised into wages with employment tax.

**A partner dealing with the partnership may be outside it.** {fig:rpt.707a1}
(IRC § 707(a)(1)), and two anti-abuse rules follow: {fig:rpt.disguised_payment}
(IRC § 707(a)(2)(A)) and {fig:rpt.disguised_sale} (IRC § 707(a)(2)(B)).

**Renting to yourself is asymmetric.** {fig:rpt.self_rental} (Reg. § 1.469-2(f)(6)).

## Current figures

| Item | Rule | Authority |
| --- | --- | --- |
| Allocation power | {fig:rpt.482} | IRC § 482 |
| Arm's length standard | {fig:rpt.arms_length} | Reg. § 1.482-1(b)(1) |
| Reasonable compensation | {fig:rpt.reasonable_comp} | IRC § 162(a)(1) |
| Failed deduction | {fig:rpt.constructive_dividend} | IRC § 301(c) |
| Disguised payment | {fig:rpt.disguised_payment} | IRC § 707(a)(2)(A) |
| Disguised sale | {fig:rpt.disguised_sale} | IRC § 707(a)(2)(B) |
| Self-rental | {fig:rpt.self_rental} | Reg. § 1.469-2(f)(6) |

## How it works in practice

**Advise on character before amount.** A related-party payment usually moves money that was going
to move anyway; what the tax system cares about is what the payment *is*. Rent, interest,
compensation and distribution have different deductibility, different employment tax treatment and
different consequences for basis and for the passive activity rules. Getting the amount slightly
wrong costs an adjustment. Getting the character wrong costs the deduction, the payroll treatment
and sometimes both.

**Reasonable compensation runs in opposite directions in the two entity types.** A C corporation
overpays its owner-employee to convert non-deductible dividends into deductible salary, and the
exposure is the excess being treated as a distribution under IRC § 301(c) — not deductible, and
taxable to the shareholder as a dividend to the extent of earnings and profits. An S corporation
underpays to avoid employment tax, and the exposure is a recharacterisation into wages. Same
statutory phrase, opposite incentives, so ask which way the client's incentive points before
looking at the number.

**Document the comparables while the transaction is being priced.** The arm's length standard is
comparative, and the comparison is very hard to reconstruct years later. A lease at market rent
supported by two contemporaneous agents' letters is almost unassailable; the same rent with no
file is a negotiation.

**Watch the sequence in a partnership.** The § 707(a)(2) rules are about linked steps: a
contribution followed by a distribution, or services followed by an allocation and distribution.
Neither is caught in isolation. What makes them dangerous is that the linkage is judged on
substance, so a genuine two-year gap and a genuine business reason matter more than the labels on
the documents.

**Self-rental is the most common planning error in this topic.** Renting a building to a company in
which the owner materially participates converts the rental *income* to non-passive under
Reg. § 1.469-2(f)(6), so it cannot absorb passive losses from anywhere else. But a rental *loss*
on the same property remains passive. The asymmetry means the arrangement is worse than either a
purely passive or a purely active one, and it catches owners who set the rent to break even and
then find a repair year turns the position against them.

**IRC § 482 does not require a foreign element.** The provision reaches any two or more businesses
under common control, domestic or not, incorporated or not, and it is regularly applied to a pair
of commonly owned domestic companies shifting income between a profitable one and one with losses
or credits about to expire.

## Scenarios

<div class="scenario">
<h3>The salary that became a dividend</h3>

Fennimore Tooling, a C corporation, pays its sole shareholder-officer $780,000 in a year when
comparable executives in the industry earn $250,000 to $320,000, and the corporation has substantial
earnings and profits. The officer works full time and genuinely runs the business.

The excess is at risk. IRC § 162(a)(1) allows only a reasonable allowance for compensation for
services actually rendered, and the services here were rendered — so the issue is amount, not
existence. Roughly $460,000 is likely unreasonable, and the disallowed portion does not vanish: it
becomes a distribution taxed under IRC § 301(c), a dividend to the extent of earnings and profits.

The result is the double taxation the payment was designed to avoid, and it is worse than doing
nothing, because the corporation has also paid employment tax on the excess. Contemporaneous
evidence — a compensation study, board minutes recording the basis, comparability data — is what
separates a defensible figure from an indefensible one, and it has to exist at the time.
</div>

<div class="scenario">
<h3>The building rented to the company</h3>

Ilkley Holdings' owner personally owns the warehouse and leases it to her operating company, in
which she materially participates, at a market rent producing $40,000 of net rental income. She also
has $40,000 of suspended passive losses from an unrelated limited partnership.

She cannot offset them. Reg. § 1.469-2(f)(6) treats gross rental income from property rented for
use in a trade or business in which the taxpayer materially participates as non-passive, up to the
net rental income from that property — so the $40,000 is non-passive income and the suspended
passive losses stay suspended.

Change the year and the asymmetry shows. If a roof replacement turns the rental into a $30,000
*loss*, that loss is passive: the recharacterisation rule operates only on income. So the
arrangement produces income the passive losses cannot reach and losses that cannot reach anything
else. That is a structural feature to advise on before the lease is signed, not a surprise to
explain afterwards.
</div>

<div class="scenario">
<h3>The contribution that came straight back</h3>

A partner contributes land worth $900,000 to a partnership in January. In March the partnership,
which has just borrowed, distributes $850,000 to that partner. Neither document refers to the other,
and the partnership agreement treats both as ordinary capital transactions.

IRC § 707(a)(2)(B) is squarely in point. There is a transfer of property by a partner to the
partnership, a related transfer of money back, and the two viewed together are properly
characterised as a sale — in which case they are treated as a transaction between the partnership
and a non-partner, so the partner recognises gain on a sale of the land rather than taking
non-recognition on a contribution.

The absence of cross-references in the documents is not a defence, because the test is how the
transfers are *properly characterised* rather than how they are papered. What would help is a real
gap in time, a distribution funded from operations rather than from a borrowing that tracks the
contribution, and a business reason for each step that stands on its own.
</div>

## Traps

<div class="callout trap">

**IRC § 482 is not a foreign provision.** It applies to any two or more organisations, trades or
businesses under common control, "whether or not incorporated, whether or not organized in the
United States, and whether or not affiliated".

</div>

<div class="callout trap">

**The reasonable compensation exposure points in opposite directions.** A C corporation's risk is
paying too much, recharacterised into a non-deductible distribution; an S corporation's is paying
too little, recharacterised into wages with employment tax.

</div>

<div class="callout trap">

**Self-rental recharacterises income but not loss.** Reg. § 1.469-2(f)(6) operates on gross rental
income up to the net rental income from the property. A loss year stays passive, so the taxpayer
gets the worst of both regimes.

</div>

<div class="callout trap">

**The § 707(a)(2) rules turn on linkage, not labels.** A contribution and a distribution are each
unremarkable alone. What triggers recharacterisation is that the two, viewed together, are properly
characterised as a sale — a substance test the documents cannot displace.

</div>

## How this has changed

IRC § 482 has been in essentially its present form since 1928, and the arm's length standard in
Reg. § 1.482-1(b)(1) has been the governing test throughout. What has changed is the machinery
around it: the best method rule replaced the old priority of methods in 1994, and the
documentation and penalty regime under IRC § 6662(e) now makes contemporaneous analysis
effectively compulsory for larger transactions rather than merely prudent.

The § 707(a)(2) rules arrived in 1984 in response to arrangements that used the flexibility of
subchapter K to convert sales into contributions and distributions, and the disguised sale
regulations under § 707(a)(2)(B) have been repeatedly revised since — most recently around the
treatment of liabilities, where the boundary between a genuine leveraged distribution and a
disguised sale has moved more than once. A preparer should check the current regulations rather
than rely on a remembered rule.

The self-rental rule has not changed, but its consequences have grown. IRC § 461(l), made permanent
by Pub. L. 119-21 § 70601(a) and indexed for the first time in 2026, adds a further limitation
after the passive activity rules, so a self-rental arrangement now sits inside a longer chain of
limitations than it did.

Nothing in the post-2024 legislation alters IRC § 482, § 162(a)(1) or § 707(a)(2).

## Exam focus

Know that IRC § 482 reaches purely domestic groups and that the standard is the arm's length
standard applied by comparison, under the best method rule.

For reasonable compensation, know the statutory phrase — a reasonable allowance for compensation
for services *actually rendered* — and be able to say what happens to the disallowed portion in each
entity type. In a C corporation it is a distribution under IRC § 301(c); in an S corporation the
problem is the reverse and the remedy is wage recharacterisation.

Keep the two § 707(a)(2) rules apart: (A) is services or property followed by a related allocation
and distribution, (B) is a transfer to the partnership followed by a related transfer back.

The self-rental rule is the likeliest single question. State it precisely: gross rental income is
non-passive up to the net rental income from that property where the property is rented for use in
an activity in which the taxpayer materially participates — income only, never loss.

Finally, remember the division of labour between this topic and the disallowance rules. Questions
asking what happens to a loss on a sale belong to IRC § 267 and § 707(b); questions asking whether
a price or a structure will hold belong here.

## Check yourself

**1.** Two commonly owned domestic corporations, one profitable and one with expiring credits,
transact at prices favouring the second. Neither has any foreign operations. Is IRC § 482 available
to the Service?

*Answer: Yes. IRC § 482 applies to two or more organisations, trades or businesses owned or
controlled directly or indirectly by the same interests, and says in terms that it applies whether
or not incorporated, whether or not organised in the United States, and whether or not affiliated.
The Secretary may allocate income, deductions, credits or allowances among them where necessary to
prevent evasion of taxes or clearly to reflect income — and shifting income to absorb expiring
credits is a paradigm case.*

**2.** An S corporation shareholder-employee who runs the business full time takes no salary and
$180,000 of distributions. What is the exposure?

*Answer: Recharacterisation of some or all of the distributions as wages. IRC § 162(a)(1)
presupposes that compensation for services actually rendered is paid, and the arrangement pays none
for services that are plainly being rendered. The consequence is employment tax on the
recharacterised amount, with the employer and employee shares plus penalties and interest. Note the
direction: unlike a C corporation, where the risk is excessive compensation converted into a
distribution, the S corporation risk runs from distribution to wages.*

**3.** A taxpayer materially participates in an operating company and rents it a building at a rent
producing $25,000 of net rental income. He has $60,000 of passive losses from other activities. How
much can he offset?

*Answer: None of it against this income. Reg. § 1.469-2(f)(6) treats gross rental income from
property rented for use in a trade or business in which the taxpayer materially participates as not
from a passive activity, up to the net rental income from that property — so the whole $25,000 is
non-passive and the passive losses cannot reach it. They remain suspended until he has passive
income from elsewhere or disposes of the loss activity in a fully taxable transaction.*

**4.** A partner transfers equipment to a partnership and, six weeks later, receives a distribution
of an amount close to the equipment's value, funded by a loan the partnership took out to make it.
The documents describe a contribution and a distribution. How is it analysed?

*Answer: Under IRC § 707(a)(2)(B). There is a transfer of property by a partner to the partnership,
a related transfer of money back, and the question is whether the two viewed together are properly
characterised as a sale or exchange. The short interval, the closeness of the amounts and the
borrowing taken out to fund the distribution all point that way, and the documents' labels do not
control. If it is a sale, the partner recognises gain and the partnership takes a cost basis, rather
than the carryover treatment a contribution would give.*

**5.** Why is contemporaneous documentation worth more in this topic than in most?

*Answer: Because the tests are comparative and about intent, and both decay. The arm's length
standard asks what uncontrolled parties would have done in comparable circumstances, which requires
evidence of the market as it stood at the time; reasonable compensation asks what the services were
worth then; and the § 707(a)(2) rules ask how linked steps are properly characterised, which turns
on the business reason for each. A compensation study, a market rent letter or a board minute
written at the time is evidence of the very thing in issue. The same document reconstructed later is
argument.*
