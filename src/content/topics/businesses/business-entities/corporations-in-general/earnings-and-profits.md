---
title: "Earnings and profits"
code: "2.1.3.b"
part: 2
domain: "Business Entities"
section: "Corporations in general"
description: "Earnings and profits is not retained earnings and not taxable income. It measures what a corporation could distribute without returning the shareholders' capital."
status: published
taxYear: 2026
lastReviewed: "2026-08-21"
reviewedBy: "Draft for N. O. review"
authorities:
  - { type: IRC, ref: "§ 316", title: "Dividend defined", url: "https://www.law.cornell.edu/uscode/text/26/316" }
  - { type: IRC, ref: "§ 312", title: "Effect on earnings and profits", url: "https://www.law.cornell.edu/uscode/text/26/312" }
  - { type: IRC, ref: "§ 301", title: "Distributions of property", url: "https://www.law.cornell.edu/uscode/text/26/301" }
  - { type: IRC, ref: "§ 61", title: "Gross income defined", url: "https://www.law.cornell.edu/uscode/text/26/61" }
  - { type: Reg, ref: "§ 1.312-6", title: "Earnings and profits", url: "https://www.law.cornell.edu/cfr/text/26/1.312-6" }
forms: []
related: ["2.1.3.c", "2.1.3.a", "2.1.3.f", "2.1.1.c", "2.1.3.d", "2.1.3.e"]
changelog:
  - { date: "2026-08-21", summary: "Initial draft. Sets out the IRC § 316(a) definition of a dividend by reference to current and accumulated earnings and profits with the rule that a distribution comes from the most recently accumulated earnings and profits, the § 312(a) reduction on a distribution and the § 312(b) treatment of appreciated property, the § 312(k) straight-line depreciation override and the § 312(n) economic adjustments, and the Reg. § 1.312-6 rules that the computation follows the corporation's accounting method and that tax-exempt income is included." }
  - { date: "2026-08-25", summary: "Added a plain-language summary, glossary marks, and typed scenarios." }
---

<div class="plain-terms">
Earnings and profits is a company's own gauge of how much it could pay owners as a real dividend. It is
not simply giving their investment back. It applies to any company that pays out cash or property to its
owners. It decides whether that payout counts as taxable income, a tax-free return of their money, or a
taxable gain. The number often looks nothing like the company's normal profit or its tax return. It
counts some income the tax return never sees. It skips some costs the tax return allows. A company can pay
a real, taxable dividend even in a year its tax return shows a loss.
</div>

{gloss:earnings-and-profits} has no definition in the Code. Section 312 says how it changes and section 316 says
what it does, but neither says what it is. What it functions as is a measure of the corporation's capacity
to make a distribution that is genuinely a return *on* the shareholders' investment rather than a return
*of* it — which is why it includes income the tax system exempts, excludes deductions that do not
represent an economic outlay, and looks nothing like either the retained earnings on the balance sheet or
the taxable income on the return.

## The rule

**What a dividend is.** {fig:ep.dividend_defined}

**What a distribution does to it.** {fig:ep.reduction}

**Appreciated property.** {fig:ep.appreciated_property}

**Depreciation.** {fig:ep.depreciation}

**And the economic adjustments.** {fig:ep.economic_adjustments}

**The computation follows the books.** {fig:ep.method_follows_books}

**Including what is not taxed.** {fig:ep.exempt_income}

## Current figures

| Item | Rule | Authority |
| --- | --- | --- |
| Dividend defined | {fig:ep.dividend_defined} | IRC § 316(a) |
| Reduction on distribution | {fig:ep.reduction} | IRC § 312(a) |
| Appreciated property | {fig:ep.appreciated_property} | IRC § 312(b) |
| Depreciation override | {fig:ep.depreciation} | IRC § 312(k) |
| Tax-exempt income | {fig:ep.exempt_income} | Reg. § 1.312-6(b) |

## How it works in practice

Two pools, and the order between them is fixed. Current earnings and profits are computed as of the close
of the taxable year, *without* reduction for distributions made during it. Accumulated earnings and profits
are what has built up since 28 February 1913. A distribution is a dividend to the extent of current
earnings and profits first, then accumulated, and the statute directs that it comes from the most recently
accumulated pool (IRC § 316(a)).

The consequence practitioners find counter-intuitive is that a corporation with a large accumulated
deficit can still pay a dividend. Current-year earnings and profits are tested on their own, so a
corporation that has lost money for a decade and makes a profit this year has current earnings and profits
to distribute out of, and the accumulated deficit does not absorb them. The reverse is also true: a
corporation with a current-year deficit and a large accumulated surplus is generally still distributing a
dividend, out of the accumulated pool.

The adjustments that separate earnings and profits from taxable income run in both directions. *Upward*,
for income that never reached taxable income: municipal bond interest, life insurance proceeds, the excess
of gain realised over gain recognised where a provision defers it. *Downward*, for economic outlays that
never produced a deduction: federal income tax paid, non-deductible fines and penalties, the disallowed
portion of meals, the excess of capital losses over capital gains. The organising question in each case is
whether the corporation is actually richer or poorer, not whether the Code allowed a deduction.

Timing differences are handled by overriding the Code's own accelerations. {gloss:depreciation} is recomputed on
the straight line method under IRC § 312(k), so a corporation taking a large first-year cost recovery
deduction reduces taxable income far more than it reduces earnings and profits — and may therefore have
ample earnings and profits to make a dividend in a year it reports a loss. The IRC § 312(n) adjustments do
the same work for construction period carrying charges, long-term contracts, installment sales and
mineral costs.

Distributions reduce earnings and profits by money, by the principal amount of the corporation's own
obligations, and by the adjusted basis of other property. Appreciated property is the exception worth
knowing: IRC § 312(b) first increases earnings and profits by the appreciation and then measures the
reduction by {gloss:fair-market-value}, so the net effect is a reduction equal to the property's value rather than
its basis. That reflects the fact that the corporation recognises gain on the distribution and has parted
with something worth more than it cost.

One structural point that decides a surprising number of questions: earnings and profits cannot be reduced
below zero by a distribution. A distribution can exhaust the pool but cannot create a deficit in it. A
deficit arises only from operations. So a corporation with modest earnings and profits that distributes far
more has a dividend to the extent of the pool, a return of capital to the extent of the shareholders'
basis, and capital gain beyond that — and its earnings and profits are nil, not negative.

## Scenarios

<div class="scenario" data-type="baseline">
<h3>The profitable year after a decade of losses</h3>
<p>A manufacturing corporation has an accumulated earnings and profits deficit of $4,000,000 built up over
eleven years. In 2026 it earns current earnings and profits of $600,000 and distributes $500,000 to its
shareholders.</p>
<p>The whole $500,000 is a dividend. IRC § 316(a)(2) makes a distribution a dividend to the extent of the
earnings and profits of the taxable year, computed as of the close of the year and without regard to the
amount on hand when the distribution was made — and current-year earnings and profits are tested without
being absorbed by the accumulated deficit. The shareholders have ordinary dividend income even though the
corporation has never, cumulatively, made money. This is the single most common misconception about
earnings and profits, and it runs the opposite way from the intuition that a company must be in profit
overall before it can pay a dividend.</p>
</div>

<div class="scenario" data-type="timing">
<h3>The loss year with a dividend in it</h3>
<p>A corporation takes a large first-year cost recovery deduction on new equipment and reports a taxable
loss of $180,000 for 2026. Its accumulated earnings and profits at 1 January were $900,000. It distributes
$300,000 during the year.</p>
<p>The distribution is very likely a dividend in full. Under IRC § 312(k) the depreciation allowance for
earnings and profits purposes is recomputed on the straight line method, so the accelerated deduction that
produced the taxable loss reduces earnings and profits by much less — and the corporation may well have
positive current earnings and profits despite the loss. Even if current earnings and profits are negative,
the $900,000 accumulated pool is available under IRC § 316(a)(1). A taxable loss is not an answer to a
dividend question; it is the beginning of a separate computation.</p>
</div>

<div class="scenario" data-type="interaction">
<h3>The municipal bonds and the fine</h3>
<p>A corporation's taxable income for 2026 is $400,000. During the year it received $70,000 of tax-exempt
municipal bond interest, paid a $25,000 regulatory fine that is not deductible, and paid $84,000 of federal
income tax.</p>
<p>Earnings and profits move differently from taxable income in all three cases. The municipal interest
increases earnings and profits by $70,000 even though it never entered taxable income —
Reg. § 1.312-6(b) includes all income exempted by statute. The fine reduces earnings and profits by
$25,000 even though it produced no deduction, because the corporation is $25,000 poorer. And the federal
income tax reduces earnings and profits by $84,000, again with no deduction. The pattern is consistent:
the question is whether the corporation is better or worse off, not what the return showed.</p>
</div>

<div class="scenario" data-type="boundary">
<h3>The distribution larger than the pool</h3>
<p>A corporation has $120,000 of combined current and accumulated earnings and profits and distributes
$500,000 in cash. Its sole shareholder has a stock basis of $200,000.</p>
<p>Three tiers. $120,000 is a dividend to the extent of earnings and profits under IRC § 316(a).
$200,000 is a tax-free return of capital reducing the shareholder's basis to zero. The remaining $180,000
is gain from the sale or exchange of the stock. And the corporation's earnings and profits are now nil
rather than negative $380,000 — IRC § 312(a) reduces them "to the extent thereof", so a distribution can
exhaust the pool but cannot create a deficit in it. Only operating losses can do that.</p>
</div>

<div class="callout trap">
<strong>Traps</strong>
<ul>
<li><strong>Current and accumulated are separate pools.</strong> An accumulated deficit does not absorb
current-year earnings and profits.</li>
<li><strong>Current earnings and profits ignore distributions made during the year.</strong>
IRC § 316(a)(2) computes them as of the close of the year without diminution.</li>
<li><strong>Tax-exempt income increases the pool.</strong> Reg. § 1.312-6(b) includes income exempted by
statute.</li>
<li><strong>Non-deductible outlays reduce it.</strong> Federal income tax, fines, disallowed expenses —
the test is economic, not whether a deduction was allowed.</li>
<li><strong>Depreciation is recomputed straight line.</strong> IRC § 312(k) means a taxable loss can
coexist with positive earnings and profits.</li>
<li><strong>Appreciated property reduces by value, not basis.</strong> IRC § 312(b) grosses the pool up
first.</li>
<li><strong>A distribution cannot create a deficit.</strong> IRC § 312(a) operates only to the extent of
the pool.</li>
</ul>
</div>

## How this has changed

The framework is old and stable. IRC § 316 dates from 1954 in substantially its present form, and the
"most recently accumulated" ordering has not moved.

What has changed is the size of the gap between taxable income and earnings and profits, which has widened
considerably as cost recovery has accelerated. The IRC § 312(k) straight-line override was enacted for
years beginning after 30 June 1972, when the gap it addressed was modest. With the expensing and bonus
depreciation regimes now available, a corporation can reduce taxable income to nothing while its earnings
and profits barely move — so the situation in which a corporation reports a loss and pays a fully taxable
dividend is far more common than it was when the provision was written. Anything that treats a taxable
loss as evidence of no earnings and profits is reasoning from a world in which the two figures tracked each
other.

The IRC § 312(n) adjustments were added later and for the same reason: each identifies a place where the
Code's timing rules had diverged from economic reality far enough that earnings and profits needed to be
computed differently. Their number has grown over time and the direction of travel is consistent — more
adjustments, not fewer.

## Exam focus

The reliable question gives current earnings and profits, accumulated earnings and profits, a distribution
and a shareholder basis, and asks for the character of the distribution. Work the tiers in order: dividend
to the extent of current earnings and profits, then to the extent of accumulated, then return of capital
against basis, then capital gain.

Watch for the two sign traps. A corporation with an accumulated *deficit* and current earnings and profits
still pays a dividend. A corporation with a current *deficit* and accumulated earnings and profits usually
does too, though the current deficit is allocated to the date of distribution.

Where a question mentions a taxable loss, do not treat that as the answer. Check whether the loss came
from accelerated depreciation, which IRC § 312(k) reverses for this purpose.

And where a question lists items of income and expense and asks for earnings and profits, sort them by
whether the corporation is richer or poorer, not by whether the item was taxable or deductible.

## Check yourself

**1.** A corporation has accumulated earnings and profits of negative $800,000 and current earnings and
profits of $150,000. It distributes $150,000. What is the character of the distribution?

*Answer: a dividend in full. IRC § 316(a)(2) makes a distribution a dividend to the extent of the
earnings and profits of the taxable year, and current earnings and profits are not reduced by an
accumulated deficit. The shareholders have $150,000 of dividend income notwithstanding that the
corporation has an $800,000 accumulated deficit.*

**2.** A corporation receives $50,000 of tax-exempt municipal bond interest and pays $30,000 of federal
income tax. Neither figure appears in taxable income as an item of income or deduction. How do they affect
earnings and profits?

*Answer: up $50,000 and down $30,000. Reg. § 1.312-6(b) includes all income exempted by statute in the
computation, and federal income tax is an economic outlay that reduces the corporation's capacity to
distribute even though no deduction is allowed for it. Earnings and profits track economic position, not
taxable income.*

**3.** A corporation distributes land worth $500,000 with an adjusted basis of $120,000. By how much do
its earnings and profits change on account of the distribution?

*Answer: a net reduction of $500,000. Under IRC § 312(b)(1) earnings and profits are first increased by
the $380,000 excess of fair market value over adjusted basis, and IRC § 312(b)(2) then measures the
reduction by fair market value rather than by the $120,000 adjusted basis. The net movement is a reduction
equal to the property's value.*

**4.** A corporation claims $900,000 of accelerated cost recovery in 2026, producing a taxable loss. What
depreciation figure is used in computing earnings and profits?

*Answer: the straight line amount. IRC § 312(k)(1) provides that for earnings and profits purposes the
allowance for depreciation for a taxable year beginning after 30 June 1972 is deemed to be what would be
allowable had the straight line method been used. The accelerated deduction reduces taxable income far
more than it reduces earnings and profits, which is why a taxable loss and a dividend can coexist.*

**5.** A corporation with $60,000 of earnings and profits distributes $400,000. What are its earnings and
profits afterwards?

*Answer: nil. IRC § 312(a) decreases earnings and profits on a distribution only "to the extent thereof",
so the pool is exhausted but not driven negative. The balance of the distribution is a return of capital
to the extent of shareholder basis and capital gain beyond it, but none of that creates a deficit in
earnings and profits. Only operating losses do.*

**6. A corporation has current earnings and profits of $50,000 and accumulated earnings and profits of $30,000. It distributes $130,000 in cash to its sole shareholder, whose stock basis is $60,000. What is the character of the distribution?**
(A) $80,000 dividend and $50,000 return of capital (B) $50,000 dividend, $60,000 return of capital and $20,000 gain (C) $130,000 dividend (D) $80,000 dividend, $30,000 return of capital and $20,000 gain
*Answer: A. IRC § 316(a) makes the distribution a dividend to the extent of current earnings and profits first and then accumulated — $80,000 in total — and the remaining $50,000 is a return of capital against the $60,000 basis, so no gain arises.*

**7. A corporation distributes to its shareholders its own $200,000 promissory note and a parcel of land with an adjusted basis of $140,000 and a fair market value of $140,000. By how much are its earnings and profits reduced?**
(A) $140,000 (B) $200,000 (C) $340,000 (D) Nil, because no cash left the corporation
*Answer: C. IRC § 312(a) reduces earnings and profits by the principal amount of the corporation's own obligations and by the adjusted basis of other property distributed, so $200,000 plus $140,000; the IRC § 312(b) fair market value rule applies only to appreciated property.*

**8. A corporation distributes $90,000 on 1 March 2026. At that date it has no accumulated earnings and profits and has earned nothing so far in the year; by 31 December 2026 its current earnings and profits total $120,000. How is the March distribution treated?**
(A) A return of capital, because there were no earnings and profits on 1 March (B) A dividend in full, because current earnings and profits are computed as of the close of the year (C) A dividend only to the extent of earnings and profits earned by 1 March (D) Gain from the sale or exchange of the stock
*Answer: B. IRC § 316(a)(2) makes a distribution a dividend to the extent of the earnings and profits of the taxable year computed as of the close of the year, without regard to the amount on hand when the distribution was made.*
