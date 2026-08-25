---
title: "Shareholder dividends, distributions, and recognition requirements"
code: "2.1.3.c"
part: 2
domain: "Business Entities"
section: "Corporations in general"
description: "A corporation recognises gain on distributing appreciated property and no loss on distributing depreciated property. The shareholder takes value as basis either way."
status: published
taxYear: 2026
lastReviewed: "2026-08-21"
reviewedBy: "Draft for N. O. review"
authorities:
  - { type: IRC, ref: "§ 301", title: "Distributions of property", url: "https://www.law.cornell.edu/uscode/text/26/301" }
  - { type: IRC, ref: "§ 311", title: "Taxability of corporation on distribution", url: "https://www.law.cornell.edu/uscode/text/26/311" }
  - { type: IRC, ref: "§ 316", title: "Dividend defined", url: "https://www.law.cornell.edu/uscode/text/26/316" }
  - { type: IRC, ref: "§ 305", title: "Distributions of stock and stock rights", url: "https://www.law.cornell.edu/uscode/text/26/305" }
  - { type: IRC, ref: "§ 1(h)(11)", title: "Dividends taxed as net capital gain", url: "https://www.law.cornell.edu/uscode/text/26/1" }
  - { type: IRC, ref: "§ 246(c)", title: "Exclusion of certain dividends", url: "https://www.law.cornell.edu/uscode/text/26/246" }
  - { type: IRC, ref: "§ 312", title: "Effect on earnings and profits", url: "https://www.law.cornell.edu/uscode/text/26/312" }
  - { type: IRC, ref: "§ 317(a)", title: "Property defined", url: "https://www.law.cornell.edu/uscode/text/26/317" }
forms: []
related: ["2.1.3.b", "2.1.3.e", "2.1.3.d", "2.1.3.a", "2.1.3.f", "2.1.5.d", "2.1.5.h"]
changelog:
  - { date: "2026-08-21", summary: "Initial draft. Sets out the IRC § 301(b) measurement of the amount distributed with its reduction for liabilities, the § 301(c) three tiers of dividend, return of capital and gain, the § 301(d) fair market value basis to the recipient, the § 311(a) and (b) asymmetry under which a corporation recognises gain on appreciated property and no loss on depreciated property, the § 305(a) exclusion for stock dividends with the § 305(b) exceptions, the § 1(h)(11) definition of qualified dividend income, and the § 246(c) holding period condition that qualified dividend treatment borrows." }
  - { date: "2026-08-25", summary: "Added a plain-language summary, glossary marks, and typed the four existing scenarios (baseline, boundary, interaction, timing)." }
---

<div class="plain-terms">
A company can pay out cash or property to the people who own it. This page sorts out what that means
for taxes. It covers regular payouts to owners, often called dividends. It does not cover pay for work,
and it does not cover what happens when a company shuts down for good. Four things get worked out here:
how much did the owner actually get? Does it count as a dividend, or as something else? What is the
owner's new cost basis in what they got? Does the company itself owe tax for handing the property over?
The answers can feel odd. A company can owe tax just for giving property away, even as a gift to its own
owner.
</div>

Four separate questions have to be answered about any corporate distribution, and each has its own
provision. How much was distributed — IRC § 301(b). What is it to the shareholder — IRC § 301(c). What
basis does the shareholder take — IRC § 301(d). And what does it do to the corporation — IRC § 311.
Getting one of these right does not help with the others, and the asymmetry built into the fourth is the
part that most reliably surprises.

## The rule

**The amount.** {fig:dist.amount}

**What it is to the shareholder.** {fig:dist.three_tiers}

**And what is a dividend.** {fig:ep.dividend_defined}

**The shareholder's basis in property received.** {fig:dist.recipient_basis}

**What it does to the corporation.** {fig:dist.corporate_gain}

**And to its earnings and profits.** {fig:ep.appreciated_property}

**Stock dividends.** {fig:dist.stock_dividend}

**Rate on the shareholder's side.** {fig:dist.qualified_dividend}

**With a holding period.** {fig:dist.holding_period}

## Current figures

| Item | Rule | Authority |
| --- | --- | --- |
| Amount distributed | {fig:dist.amount} | IRC § 301(b) |
| Three tiers | {fig:dist.three_tiers} | IRC § 301(c) |
| Recipient's basis | {fig:dist.recipient_basis} | IRC § 301(d) |
| Corporate recognition | {fig:dist.corporate_gain} | IRC § 311 |
| Qualified dividend income | {fig:dist.qualified_dividend} | IRC § 1(h)(11) |
| Holding period | {fig:dist.holding_period} | IRC § 246(c) |

## How it works in practice

Take the shareholder's side first because it is the mechanical part. The amount is money plus the fair
market value of other property, valued at the date of distribution, and reduced — but never below zero —
by liabilities the shareholder assumes or that encumber the property received. That reduction is where the
net economic transfer is captured: a shareholder who receives a mortgaged building has received the equity
in it, not the building's gross value.

Then the three tiers, in order and without discretion. Dividend to the extent of earnings and profits;
return of capital reducing stock basis; gain from the sale or exchange of property beyond that. Note that
the third tier is *gain*, not a dividend at a capital rate — the character comes from the deemed sale, so
holding period matters and the amount is not qualified dividend income.

The corporation's side is where the asymmetry lives, and it is worth stating starkly. Distributing
appreciated property triggers gain to the corporation as though it had sold the property to the
shareholder at fair market value (IRC § 311(b)). Distributing depreciated property triggers nothing —
IRC § 311(a) denies recognition and IRC § 311(b) applies only where value exceeds basis. So a corporation
distributing property at a loss destroys the loss permanently: it is not recognised, and the shareholder
takes fair market value as basis under IRC § 301(d), so nobody ever deducts it.

That combination has a straightforward planning implication and it is one of the few in this area. A
corporation intending to distribute depreciated property should generally sell it, recognise the loss, and
distribute the cash. A corporation intending to distribute appreciated property gains nothing by selling
first, since the gain arises either way.

The shareholder's basis rule completes the picture and is easy to state wrongly. It is fair market value —
full stop. Not the corporation's basis, not the amount treated as a dividend, and not reduced by
liabilities. The liability reduction operates on the *amount distributed* for the purpose of the three
tiers, not on the basis of what was received.

Stock dividends are excluded from income by IRC § 305(a) because nothing has left the corporation and no
shareholder's proportionate interest has changed. The exceptions in IRC § 305(b) all identify situations
where one of those two things is untrue — an election between stock and property, a disproportionate
distribution, common to some and preferred to others. Where an exception applies, the distribution is
treated as a IRC § 301 distribution and runs through the ordinary tiers.

On rate, qualified dividend income is added to net capital gain and taxed accordingly. Two conditions
matter in practice: the payer must be a domestic corporation or a qualified foreign corporation, and the
shareholder must satisfy the holding period that IRC § 1(h)(11)(B)(iii) borrows from IRC § 246(c) — more
than 45 days within the 91-day period beginning 45 days before the ex-dividend date. A shareholder who
buys just before the record date and sells shortly after has an ordinary dividend, not a qualified one.

## Scenarios

<div class="scenario" data-type="baseline">
<h3>The building with a mortgage on it</h3>
<p>A corporation with $3,000,000 of earnings and profits distributes an office building to its sole
shareholder. The building is worth $2,400,000, has an adjusted {gloss:basis} of $900,000, and is subject to a
$1,000,000 mortgage that the shareholder takes subject to.</p>
<p>Four answers. The amount distributed is $1,400,000 — fair market value less the liability, under
IRC § 301(b)(2)(B). It is a dividend in full, because earnings and profits exceed it. The shareholder's
basis in the building is $2,400,000, its full fair market value under IRC § 301(d), with no reduction for
the mortgage. And the corporation recognises $1,500,000 of gain under IRC § 311(b), as though it had sold
the building to the shareholder at value — which in turn increases its earnings and profits under
IRC § 312(b) before the distribution reduces them.</p>
</div>

<div class="scenario" data-type="boundary">
<h3>The loss that disappeared</h3>
<p>A corporation holds equipment with an adjusted basis of $700,000 and a fair market value of $250,000.
It distributes the equipment to its shareholder rather than selling it.</p>
<p>The $450,000 of economic loss vanishes. IRC § 311(a) denies recognition to the corporation on a
distribution of property, and IRC § 311(b) creates an exception only where fair market value exceeds
adjusted basis — which it does not here. The shareholder takes a basis of $250,000 under IRC § 301(d),
being fair market value, so the $450,000 of basis the corporation had is simply gone. Had the corporation
sold the equipment for $250,000 and distributed the cash, it would have recognised the loss and the
shareholder's position would have been identical. This is one of the few places in subchapter C where the
order of two steps changes the answer by the whole amount.</p>
</div>

<div class="scenario" data-type="interaction">
<h3>The distribution that ran past the pool</h3>
<p>A corporation has current and accumulated {gloss:earnings-and-profits} totalling $90,000. It distributes
$400,000 in cash to its sole shareholder, whose stock basis is $180,000.</p>
<p>Three tiers under IRC § 301(c). $90,000 is a dividend, included in gross income and eligible for
qualified dividend treatment if the payer and holding period conditions are met. $180,000 is applied
against and reduces the stock basis to zero — not income, and not reported as such. The remaining
$130,000 is treated as gain from the sale or exchange of property under IRC § 301(c)(3)(A). That last
amount is {gloss:capital-gain} by virtue of the deemed sale, which means it depends on how long the stock was
held and is not qualified dividend income however low the shareholder's rate on it turns out to be.</p>
</div>

<div class="scenario" data-type="timing">
<h3>The shareholder who bought too late</h3>
<p>Rosamund buys shares in a domestic corporation twelve days before the ex-dividend date, receives the
dividend, and sells the shares eighteen days after it. She held the shares for thirty days in total.</p>
<p>The dividend is ordinary income, not qualified dividend income. IRC § 1(h)(11)(B)(iii) excludes a
dividend on a share failing the holding period in IRC § 246(c), and that test requires the share to be
held for more than 45 days during the 91-day period beginning 45 days before the ex-dividend date.
Thirty days does not satisfy it. The payer being domestic and the dividend being paid out of earnings and
profits are both necessary and neither is sufficient — the holding period is a condition on the
shareholder, tested share by share.</p>
</div>

<div class="callout trap">
<strong>Traps</strong>
<ul>
<li><strong>Liabilities reduce the amount, not the basis.</strong> IRC § 301(b)(2) operates on the amount
distributed; IRC § 301(d) gives fair market value regardless.</li>
<li><strong>Gain yes, loss no.</strong> IRC § 311(b) reaches only appreciated property, and the loss on
depreciated property distributed is destroyed for everyone.</li>
<li><strong>The third tier is gain, not a dividend.</strong> Its character comes from a deemed sale, so it
is not qualified dividend income.</li>
<li><strong>Return of capital is not income.</strong> The second tier reduces basis and is not reported as
a receipt.</li>
<li><strong>A stock dividend is usually not income at all.</strong> IRC § 305(a) excludes it unless one of
the IRC § 305(b) exceptions applies.</li>
<li><strong>Qualified dividend treatment has a holding period.</strong> More than 45 days in the 91-day
window around the ex-dividend date, borrowed from IRC § 246(c).</li>
<li><strong>Corporate gain increases earnings and profits first.</strong> IRC § 312(b) grosses the pool up
before the distribution reduces it.</li>
</ul>
</div>

## How this has changed

The IRC § 311 asymmetry is the product of a deliberate reversal. Before 1986 a corporation generally
recognised no gain on distributing appreciated property, which allowed appreciation to leave the corporate
solvent untaxed at the entity level. That was repealed, and IRC § 311(b) now requires recognition as if
the property had been sold. The non-recognition of loss in IRC § 311(a) was left in place, so what had been
a symmetrical rule became a one-way one. Material describing corporate distributions as generally
tax-free at the entity level is pre-1987.

Qualified dividend income is newer than the rest of this topic and is now permanent. Before 2003 all
dividends were ordinary income to individuals; the reduced rate was introduced with an expiry date and
extended repeatedly before being made permanent. What is worth watching is not the rate but the
conditions, which have not moved: the payer requirement and the IRC § 246(c) holding period are the same
tests they have always been, and they are where questions are set.

IRC §§ 301, 305 and 316 have not been materially amended in a way that affects this topic. The
IRC § 301(c)(3)(B) exemption for distributions out of pre-March 1913 appreciation remains in the Code and
is, at this distance, of no practical application whatever — worth noticing only because a candidate
reading the subsection will wonder what it is for.

## Exam focus

The commonest computation gives earnings and profits, a distribution and a stock basis, and asks for the
shareholder's treatment. Run the three tiers in order and remember that the second is not income and the
third is gain rather than dividend.

The second reliable shape gives a corporation distributing property and asks what the corporation
recognises. Appreciated: gain, as if sold at fair market value. Depreciated: nothing. Where a question
offers a loss deduction to the corporation on a distribution, that option is always wrong.

Where a question gives a mortgage on distributed property, apply it to the amount distributed and not to
the shareholder's basis. Both figures are usually offered.

And where a question turns on the rate, check the holding period before concluding that a dividend from a
domestic corporation is qualified.

## Check yourself

**1.** A corporation distributes land worth $600,000 with an adjusted basis of $250,000, subject to a
$200,000 mortgage assumed by the shareholder. What is the amount distributed, and what is the
shareholder's basis in the land?

*Answer: $400,000 distributed, and a basis of $600,000. IRC § 301(b)(1) measures the amount by fair market
value, and IRC § 301(b)(2)(A) reduces it by the liability assumed. IRC § 301(d) gives the shareholder a
basis equal to the fair market value of the property, with no reduction for the mortgage — the liability
adjustment belongs to the amount distributed, not to basis.*

**2.** On the same facts, what does the corporation recognise?

*Answer: $350,000 of gain. Under IRC § 311(b) a corporation distributing property whose fair market value
exceeds its adjusted basis recognises gain as if the property had been sold to the distributee at fair
market value. The mortgage does not reduce the gain, and the gain increases earnings and profits under
IRC § 312(b) before the distribution reduces them.*

**3.** A corporation distributes equipment worth $80,000 with an adjusted basis of $300,000. What does it
recognise?

*Answer: nothing. IRC § 311(a) denies recognition of gain or loss on a distribution with respect to stock,
and the exception in IRC § 311(b) applies only where fair market value exceeds adjusted basis. The
$220,000 of loss is not recognised by the corporation, and because the shareholder takes fair market value
as basis under IRC § 301(d), it is never deducted by anybody.*

**4.** A corporation with $40,000 of earnings and profits distributes $250,000 to a shareholder whose
stock basis is $70,000. What does the shareholder report?

*Answer: $40,000 of dividend income, a $70,000 return of capital reducing basis to zero, and $140,000 of
gain from the sale or exchange of property. IRC § 301(c) fixes the order, the second tier is not income,
and the third tier is gain rather than a dividend — so it is not qualified dividend income even though
the shareholder's rate on it may be the same.*

**5.** A shareholder buys stock in a domestic corporation 20 days before the ex-dividend date and sells it
15 days afterwards. Is the dividend qualified dividend income?

*Answer: no. IRC § 1(h)(11)(B)(iii) excludes a dividend on stock that fails the IRC § 246(c) holding
period, which requires the share to be held for more than 45 days during the 91-day period beginning 45
days before the ex-dividend date. Thirty-five days is not enough, and the dividend is ordinary income
however domestic the payer.*
