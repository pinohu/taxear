---
title: "Separately stated items (items reported on the K-1)"
code: "2.3.1.f"
part: 2
domain: "Specialized Returns and Taxpayers"
section: "Trust and estate income tax"
description: "A first-tier beneficiary is taxed on income required to be distributed whether or not it ever arrives, and character reaches every beneficiary in the same proportions."
status: published
taxYear: 2026
lastReviewed: "2026-08-21"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 642", title: "Special rules for credits and deductions", url: "https://www.law.cornell.edu/uscode/text/26/642" }
  - { type: IRC, ref: "§ 643", title: "Definitions applicable to subparts A, B, C, and D", url: "https://www.law.cornell.edu/uscode/text/26/643" }
  - { type: IRC, ref: "§ 651", title: "Deduction for trusts distributing current income only", url: "https://www.law.cornell.edu/uscode/text/26/651" }
  - { type: IRC, ref: "§ 652", title: "Inclusion of amounts in gross income of beneficiaries of trusts distributing current income only", url: "https://www.law.cornell.edu/uscode/text/26/652" }
  - { type: IRC, ref: "§ 661", title: "Deduction for estates and trusts accumulating income", url: "https://www.law.cornell.edu/uscode/text/26/661" }
  - { type: IRC, ref: "§ 662", title: "Inclusion of amounts in gross income of beneficiaries of estates and trusts accumulating income", url: "https://www.law.cornell.edu/uscode/text/26/662" }
  - { type: IRC, ref: "§ 172", title: "Net operating loss deduction", url: "https://www.law.cornell.edu/uscode/text/26/172" }
  - { type: IRC, ref: "§ 1212", title: "Capital loss carrybacks and carryovers", url: "https://www.law.cornell.edu/uscode/text/26/1212" }
  - { type: IRC, ref: "§ 1411", title: "Imposition of tax", url: "https://www.law.cornell.edu/uscode/text/26/1411" }
  - { type: IRC, ref: "§ 67", title: "2-percent floor on miscellaneous itemized deductions", url: "https://www.law.cornell.edu/uscode/text/26/67" }
forms: []
related: ["2.3.1.b", "2.3.1.e", "2.3.1.c", "2.3.1.a", "2.3.1.g"]
changelog:
  - { date: "2026-08-21", summary: "Initial draft. Sets out the two-tier system in IRC § 662(a) with the proportionate reduction that applies where distributions exceed distributable net income, the character rule in IRC §§ 652(b) and 662(b) with the specific allocation exception and the allocation of deductions among classes, and the IRC § 642(h) pass-out of loss carryovers and excess deductions on termination." }
  - { date: "2026-08-25", summary: "Added a plain-language summary, glossary marks, and typed scenarios (baseline, boundary, fails)." }
---

<div class="plain-terms">
A trust sends each person who gets money from it a paper called a Schedule K-1. That paper answers
two questions. First, how much money must this person report as income? Second, what kind of
income is it — interest, dividends, tax-free money, or something else? These rules matter for
anyone who gets money from a trust, and for anyone who fills out its tax return. A person can owe
tax on money the trust was supposed to pay but never did. Every person gets the same mix of income
types, share for share, unless the trust paper says otherwise. The trust's last year works
differently. It passes out losses and leftover write-offs instead of income.
</div>

A fiduciary Schedule K-1 answers two questions that have nothing to do with each other: how much of
the trust's income each beneficiary must include, and what kind of income it is. The first is a
rationing exercise governed by tiers; the second is a proportion exercise that ignores the tiers
entirely.

## The rule

**Rationing: two tiers.** {fig:k1t.tier_one} (IRC § 662(a)(1)), then {fig:k1t.tier_two}
(IRC § 662(a)(2)). A simple trust has only the first, under IRC § 652(a).

**Character: one proportion.** {fig:k1t.character} (IRC §§ 652(b) and 662(b)). The exception is
narrow — a specific allocation of different classes to different beneficiaries *in the terms of the
governing instrument*, not a trustee's designation.

**Deductions are allocated first.** {fig:k1t.deduction_allocation} (IRC § 662(b)).

**And the last year is different.** {fig:k1t.termination} (IRC § 642(h)).

## Current figures

| Item | Rule | Authority |
| --- | --- | --- |
| First tier | {fig:k1t.tier_one} | IRC § 662(a)(1) |
| Second tier | {fig:k1t.tier_two} | IRC § 662(a)(2) |
| Character | {fig:k1t.character} | IRC §§ 652(b), 662(b) |
| Deduction allocation | {fig:k1t.deduction_allocation} | IRC § 662(b) |
| Termination | {fig:k1t.termination} | IRC § 642(h) |
| Distributable net income | {fig:dni.definition} | IRC § 643(a) |
| Administration costs | {fig:tex.admin_costs} | IRC § 67(e) |

## How it works in practice

**Work the tiers before the classes.** Compute distributable net income; identify the income
required to be distributed currently and give it to the first-tier beneficiaries; then apply what is
left of distributable net income to the second tier. Only when each beneficiary's *amount* is fixed
do you ask what classes it consists of.

**A first-tier beneficiary is taxed on what was required, not on what arrived.** IRC § 662(a)(1)
includes the income required to be distributed currently "whether distributed or not". A trustee who
fails to distribute does not defer the beneficiary's tax; the beneficiary reports the income and has
a claim against the trustee, which is a matter for trust law rather than for the return.

**The two proportionate reductions are different and both are tested.** Where the first tier alone
exceeds distributable net income, each first-tier beneficiary reports a share of distributable net
income *computed without the charitable deduction*, in the ratio their required distribution bears
to the total required. Where the two tiers together exceed distributable net income, second-tier
beneficiaries share what remains after the first tier, in the ratio of their other amounts. The
first tier is never squeezed by the second.

**Character flows in the same proportions to everyone.** Each beneficiary's amount is treated as
consisting of the same proportion of each class as that class bears to distributable net income. So
a beneficiary receiving a quarter of the total takes a quarter of the interest, a quarter of the
dividends and a quarter of the tax-exempt income, and the trustee cannot direct otherwise.

**The specific allocation exception has to be in the instrument and has to be specific.** The statute
displaces the proportionate rule only where "the terms of the governing instrument specifically
allocate different classes of income to different beneficiaries". A general power to distribute, a
trustee's resolution or a note on the accounts is not enough, and the allocation must have economic
effect independent of tax.

**Allocate the deductions to the classes before apportioning.** Distributable net income is a net
figure, and the deductions inside it — including the IRC § 642(c) charitable deduction — are
allocated among the classes of income under the regulations before the classes are shared out.
Indirect expenses are generally allocated proportionately, with a required allocation to tax-exempt
income first, and the fiduciary has some discretion over the rest.

**The final year reverses direction.** During the trust's life, income flows out to beneficiaries and
losses stay in. On termination IRC § 642(h) sends the net operating loss carryover, the capital loss
carryover and the excess deductions for the last year out to the beneficiaries succeeding to the
property. It is the only year in which a fiduciary Schedule K-1 routinely carries deductions rather
than income.

## Scenarios

<div class="scenario" data-type="baseline">
<h3>The income that never arrived</h3>

The Wingate Trust requires all income to be distributed annually to the settlor's son. For the year
its {gloss:distributable-net-income} is $58,000, all of it required to be distributed. The trustee, in
dispute with the son, distributes nothing.

The son reports $58,000. IRC § 662(a)(1) — and IRC § 652(a) for a simple trust — includes the amount
of income required to be distributed currently "whether distributed or not", and the trust takes a
corresponding deduction. The tax follows the requirement, not the cash.

The remedy is not a tax remedy. The son has a claim against the trustee under trust law for the
undistributed income, and the trustee may have breached a duty; none of that changes the return.
Preparers occasionally try to solve this by not deducting at the trust level and not reporting at
the beneficiary level, which is wrong twice and leaves the income taxed nowhere.
</div>

<div class="scenario" data-type="boundary">
<h3>Two tiers, one shortfall</h3>

The Aldingham Trust has distributable net income of $90,000. Its instrument requires $70,000 of
income to be distributed annually to A. The trustee also distributes $60,000 of corpus to B under a
discretionary power.

A reports $70,000 in full: the first tier is satisfied before anything is allocated to the second,
and $70,000 is within distributable net income. B reports $20,000 — what is left of distributable
net income after the first tier — even though B received $60,000 in cash. The balance of $40,000 is
a distribution of corpus.

Note what would change if the first tier alone had exceeded distributable net income. Then A would
report a proportionate share of distributable net income computed without the charitable deduction,
and B would report nothing at all. The tiers ration in order, and the second tier absorbs the
shortfall entirely.
</div>

<div class="scenario" data-type="fails">
<h3>The allocation the trustee could not make</h3>

The Selby Trust has distributable net income of $100,000: $55,000 of taxable interest, $25,000 of
qualified dividends and $20,000 of tax-exempt interest. It distributes $50,000 to each of two
beneficiaries. One beneficiary is in the top bracket and the other pays no tax, so the trustee
resolves to allocate all the tax-exempt income to the first.

The resolution has no effect. IRC § 662(b) treats each beneficiary's amount as consisting of the
same proportion of each class as that class bears to distributable net income, unless the *terms of
the governing instrument* specifically allocate different classes to different beneficiaries. A
trustee's resolution is not a term of the instrument.

Each {gloss:beneficiary} therefore reports $27,500 of taxable interest, $12,500 of qualified dividends and
$10,000 of tax-exempt interest. Had the settlor drafted a specific allocation into the instrument,
with economic effect independent of the tax consequences, the answer would differ — which is a
drafting point, not an administration one.
</div>

## Traps

<div class="callout trap">

**"Whether distributed or not" is the operative phrase.** A first-tier beneficiary reports income
required to be distributed currently even if the trustee withheld it. Non-payment is a trust law
problem, not a timing rule.

</div>

<div class="callout trap">

**The two proportionate reductions use different denominators.** The first tier uses distributable
net income computed *without* the charitable deduction; the second tier uses what remains after the
first tier. Substituting one for the other is a common computational error.

</div>

<div class="callout trap">

**Only the instrument can allocate classes specifically.** IRC §§ 652(b) and 662(b) displace the
proportionate rule for a specific allocation in the terms of the governing instrument — not for a
trustee's designation, a resolution, or the account a payment was drawn on.

</div>

<div class="callout trap">

**The final year carries deductions out, not income.** IRC § 642(h) passes the net operating loss
carryover, the capital loss carryover and the excess deductions to the beneficiaries succeeding to
the property, which is the reverse of every other year.

</div>

## How this has changed

The tier system and the character rules date from 1954 and have not been amended in substance. What
has changed is the value of what flows through. The compression of trust brackets after 1986 and the
application of the IRC § 1411 surtax to trusts at a very low threshold mean that pushing income out
is almost always better than accumulating it, so the K-1 now carries far more of a typical trust's
income than it once did.

The excess deductions rule was thrown into doubt in 2018 and then settled. Because IRC § 67(g), now
§ 67(h), suspended miscellaneous itemized deductions, it was unclear whether excess deductions
passed out under IRC § 642(h)(2) survived in the beneficiaries' hands. Regulations finalised in 2020
resolved it: the excess deductions retain their character in the beneficiaries' hands, so amounts
attributable to IRC § 67(e) administration costs remain deductible in arriving at adjusted gross
income, while amounts that would be miscellaneous itemized deductions are not. The fiduciary must
therefore report the excess deductions by category rather than as a single figure.

Nothing in the post-2024 legislation alters IRC §§ 652, 662 or 642(h). Pub. L. 119-21 § 70110 made
the suspension of miscellaneous itemized deductions permanent, which makes the categorisation on the
final K-1 permanently significant rather than a temporary complication.

## Exam focus

Separate the two questions and answer them in order. Amount first, through the tiers; character
second, through the proportions.

Know that a first-tier beneficiary includes income required to be distributed currently whether
distributed or not, and be ready to say what the beneficiary's remedy is.

Learn both proportionate reductions with their different denominators, and remember that the first
tier is never reduced to accommodate the second.

Know the specific allocation exception precisely — terms of the governing instrument, specifically
allocating different classes to different beneficiaries — and that nothing a trustee does can
substitute.

Finally, know that IRC § 642(h) passes losses and excess deductions to the beneficiaries on
termination, and that the excess deductions must be reported by character.

## Check yourself

**1.** A trust must distribute $40,000 of income annually to A and may distribute corpus to B.
Distributable net income is $30,000. The trustee distributes $40,000 to A and $25,000 to B. What
does each report?

*Answer: A reports $30,000 and B reports nothing. The first tier alone — $40,000 required to be
distributed currently — exceeds distributable net income, so under IRC § 662(a)(1) A includes a
proportionate share of distributable net income computed without the charitable deduction, and as
the sole first-tier beneficiary that is the whole $30,000. Nothing remains for the second tier, so
B's $25,000 is entirely a distribution of corpus carrying no income. The tiers ration in order.*

**2.** A trust's instrument says the trustee "may allocate different classes of income among the
beneficiaries as the trustee thinks fit". The trustee allocates all the municipal bond interest to
one beneficiary. Is that respected?

*Answer: No. IRC § 662(b) displaces the proportionate rule only where the terms of the governing
instrument *specifically allocate* different classes of income to different beneficiaries. A power
to allocate as the trustee thinks fit is not a specific allocation — it is a delegation of the
choice, and the statute requires the instrument itself to make it. The proportionate rule applies and
each beneficiary reports a share of every class.*

**3.** An estate terminates with a $60,000 capital loss carryover and $18,000 of deductions in excess
of gross income for its final year, of which $11,000 are executor's commissions and $7,000 are
investment advisory fees. What passes to the beneficiaries?

*Answer: The $60,000 capital loss carryover under IRC § 642(h)(1), and the excess deductions under
§ 642(h)(2) — but reported by character. The $11,000 of commissions are IRC § 67(e) costs and remain
deductible by the beneficiaries in arriving at adjusted gross income. The $7,000 of investment
advisory fees would be miscellaneous itemized deductions, which IRC § 67(h) disallows entirely, so
they yield nothing. The fiduciary must break the figure out rather than reporting $18,000 as one
number.*

**4.** Why is a beneficiary taxed on income the trustee refused to pay?

*Answer: Because IRC § 662(a)(1), and IRC § 652(a) for a simple trust, include the amount of income
required to be distributed currently "whether distributed or not". The statute taxes the entitlement
rather than the receipt, which is the necessary counterpart of the trust's deduction under IRC § 651
or § 661 — the deduction is likewise for amounts *required to be distributed*, so if the beneficiary
were not taxed the income would escape entirely. The beneficiary's remedy against the trustee is a
matter of trust law and does not affect either return.*

**5.** A trust has distributable net income of $80,000 including $16,000 of tax-exempt interest, and
distributes $40,000 to its sole beneficiary. What does the beneficiary report?

*Answer: $40,000 of distributable net income, of which one fifth — $8,000 — is tax-exempt interest,
because IRC § 662(b) treats the amount as consisting of the same proportion of each class as that
class bears to distributable net income. So the beneficiary reports $32,000 of taxable items with
their several characters preserved and $8,000 of exempt interest. Note the trust's distribution
deduction is correspondingly reduced for the exempt portion, so the exemption is preserved once and
not twice.*
