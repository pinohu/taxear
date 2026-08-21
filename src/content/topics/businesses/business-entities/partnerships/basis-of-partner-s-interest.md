---
title: "Basis of partner's interest"
code: "2.1.2.e"
part: 2
domain: "Business Entities"
section: "Partnerships"
description: "Outside basis is one running account with a floor at zero. It is where a partner's share of partnership debt lives, and it is the first ceiling on every loss."
status: review
taxYear: 2026
lastReviewed: "2026-08-21"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 705", title: "Determination of basis of partner's interest", url: "https://www.law.cornell.edu/uscode/text/26/705" }
  - { type: IRC, ref: "§ 722", title: "Basis of contributing partner's interest", url: "https://www.law.cornell.edu/uscode/text/26/722" }
  - { type: IRC, ref: "§ 723", title: "Basis of property contributed to partnership", url: "https://www.law.cornell.edu/uscode/text/26/723" }
  - { type: IRC, ref: "§ 733", title: "Basis of distributee partner's interest", url: "https://www.law.cornell.edu/uscode/text/26/733" }
  - { type: IRC, ref: "§ 742", title: "Basis of transferee partner's interest", url: "https://www.law.cornell.edu/uscode/text/26/742" }
  - { type: IRC, ref: "§ 752", title: "Treatment of certain liabilities", url: "https://www.law.cornell.edu/uscode/text/26/752" }
  - { type: IRC, ref: "§ 704(d)", title: "Limitation on allowance of losses", url: "https://www.law.cornell.edu/uscode/text/26/704" }
  - { type: IRC, ref: "§ 731", title: "Extent of recognition of gain or loss on distribution", url: "https://www.law.cornell.edu/uscode/text/26/731" }
  - { type: IRC, ref: "§ 721", title: "Nonrecognition of gain or loss on contribution", url: "https://www.law.cornell.edu/uscode/text/26/721" }
  - { type: IRC, ref: "§ 754", title: "Manner of electing optional adjustment to basis of partnership property", url: "https://www.law.cornell.edu/uscode/text/26/754" }
  - { type: IRC, ref: "§ 1012", title: "Basis of property — cost", url: "https://www.law.cornell.edu/uscode/text/26/1012" }
forms: []
related: ["2.1.2.a", "2.1.2.d", "2.1.2.f", "2.1.2.c", "2.1.2.h", "2.1.2.j", "2.1.5.e"]
changelog:
  - { date: "2026-08-21", summary: "Initial draft. Sets out the three starting points for outside basis — IRC § 722 on contribution, IRC § 742 with IRC § 1012 on acquisition otherwise, and the § 705(b) alternative rule — the § 705(a) running adjustments including tax-exempt income and non-deductible expenditures, the § 733 reduction for current distributions, the § 752 treatment of liabilities as contributions and distributions, the zero floor and its consequences under § 731(a)(1), and the § 704(d) loss ceiling with its carryover. Records that IRC § 723 gives the partnership a transferred basis equal to the contributor's adjusted basis, not fair market value." }
---

Outside basis is the single number that controls almost every partnership answer a practitioner needs to
give: how much loss a partner may deduct, whether a distribution is taxable, and what gain arises on a
sale. It is a running account rather than a fixed figure, it is adjusted for things that never appear in
a bank statement, and it cannot go below zero — that last constraint being the origin of most of the tax
that partnerships unexpectedly produce.

## The rule

**Where it starts, on a contribution.** {fig:contrib.outside_basis}

**Where it starts, otherwise.** {fig:basis.acquired_otherwise}

**Cost, for a purchase.** {fig:basis.cost}

**How it moves.** {fig:ptr.outside_basis}

**Current distributions.** {fig:basis.current_distribution}

**Liabilities move it too.** {fig:ptr.liabilities}

**The floor, and what happens at it.** {fig:ptr.distribution_gain}

**What it limits.** {fig:ptr.loss_limit}

**The alternative rule.** {fig:basis.alternative_rule}

**And a figure it is not.** {fig:contrib.inside_basis}

## Current figures

| Item | Rule | Authority |
| --- | --- | --- |
| Starting basis on contribution | {fig:contrib.outside_basis} | IRC § 722 |
| Starting basis otherwise | {fig:basis.acquired_otherwise} | IRC § 742 |
| Running adjustments | {fig:ptr.outside_basis} | IRC § 705(a) |
| Current distributions | {fig:basis.current_distribution} | IRC § 733 |
| Liabilities | {fig:ptr.liabilities} | IRC § 752 |
| Loss ceiling | {fig:ptr.loss_limit} | IRC § 704(d) |

## How it works in practice

Work outside basis as a ledger with a fixed order of operations, because several of the rules only give
the right answer if applied in sequence. Start with the opening balance. Add the year's contributions,
including any increase in the partner's share of liabilities. Add the distributive share of income —
taxable and tax-exempt alike. Subtract distributions, including any decrease in the share of liabilities.
Then, and only then, subtract the share of losses, limited to what basis remains.

The ordering matters most where distributions and losses appear in the same year. Distributions come out
before losses (IRC § 733), which means a distribution can strip the basis a loss needed. Reversing the two gives a
larger deduction and a smaller distribution gain, and it is wrong.

Two of the adjustments in IRC § 705(a) look like technicalities and are not. Tax-exempt income increases
basis; non-deductible, non-capitalisable expenditures decrease it. Both exist so that the character of
those items is permanent. Without the first, exempt income would be taxed when the partner sold the
interest, because the sale proceeds would exceed a basis that never recognised it. Without the second, a
disallowed expense would eventually be deducted through a larger loss on sale.

The liability rules are what make partnership basis unlike anything in subchapter C. A partner's share of
partnership debt is treated as money they contributed, so basis includes borrowings the partner never
made and often never guaranteed. That is why a partner can deduct losses funded entirely by partnership
borrowing, up to their share of it — and why refinancing, repaying debt, or admitting a new partner who
takes a share of existing debt can each reduce a partner's basis without anything visible happening.

The zero floor is the source of the surprises. Basis is reduced by distributions but not below zero, so an
excess distribution is not a negative basis; it is gain under IRC § 731(a)(1), treated as gain from the
sale or exchange of the partnership interest. Because a decrease in the share of liabilities is a deemed
distribution of money, the gain can arrive with no cash and no transaction the partner participated in.

Finally, keep outside basis and inside basis apart. Outside basis is the partner's basis in the interest;
inside basis is the partnership's basis in its assets. On a contribution the two start at the same figure —
the contributor's adjusted basis, under IRC §§ 722 and 723 respectively — and they diverge over time, most
sharply when an interest is sold and the buyer takes a cost basis outside while the partnership's inside
basis is unchanged. The statement that inside basis is the fair market value of contributed property is
simply wrong: IRC § 723 says adjusted basis, and says it twice in a single sentence.

## Scenarios

<div class="scenario">
<h3>The distribution that came first</h3>
<p>Cyprien begins 2026 with an outside basis of $50,000. During the year the partnership distributes
$40,000 of cash to him and allocates him a $45,000 loss. He would like to deduct the loss in full and
treat the distribution as a tax-free return of capital.</p>
<p>He cannot have both. Distributions reduce basis under IRC § 733 before losses are tested under
IRC § 704(d). His basis falls from $50,000 to $10,000 on the distribution, which is entirely tax-free
because it did not exceed basis. The loss is then allowed only to the extent of the $10,000 remaining, and
$35,000 is suspended under IRC § 704(d)(2) until basis is restored. Had the two been applied the other way
round, he would have deducted $45,000 and recognised $35,000 of gain on the distribution — a different
answer with different character, and not the one the statute gives.</p>
</div>

<div class="scenario">
<h3>The exempt interest and the fine</h3>
<p>A partnership holds municipal bonds and receives $30,000 of tax-exempt interest in 2026. It also pays a
$12,000 regulatory fine that is not deductible. A partner with a one-third interest asks why either should
touch her basis, given that neither affects her taxable income.</p>
<p>Both must, or the character of each would be temporary. Her basis rises by $10,000 under
IRC § 705(a)(1)(B) for the exempt interest, so that when she sells her interest the proceeds attributable
to that income are matched by basis and produce no gain — exempt income stays exempt. Her basis falls by
$4,000 under IRC § 705(a)(2)(B) for the fine, so that the non-deductible expenditure is not recovered later
through a larger loss on sale — a disallowed deduction stays disallowed. Neither adjustment affects her
current year's income at all; both affect whether the current year's treatment survives.</p>
</div>

<div class="scenario">
<h3>The new partner who reduced everyone's basis</h3>
<p>A three-partner partnership carries $900,000 of recourse debt, shared equally, so each partner's basis
includes $300,000 attributable to it. A fourth partner is admitted for cash, taking an equal share, and
the debt is now shared four ways.</p>
<p>Each of the original three has their share of liabilities reduced from $300,000 to $225,000. That
$75,000 reduction is a deemed distribution of money under IRC § 752(b), reducing each of their outside
bases. Any of the three whose basis was below $75,000 recognises gain under IRC § 731(a)(1) to the extent
of the shortfall, treated as gain from the sale or exchange of their partnership interest. Nobody sold
anything and nobody received anything — the admission of a partner, by itself, produced tax. The new
partner's own basis includes their $225,000 share as a deemed contribution under IRC § 752(a).</p>
</div>

<div class="scenario">
<h3>The contributed property and the sale of the interest</h3>
<p>Wilhelmina contributes property with an adjusted basis of $60,000 and a fair market value of $100,000
for a 50 percent interest. The partnership has no liabilities, allocates her no income or loss, and makes
no distributions. She later sells her interest for $90,000.</p>
<p>Her gain is $30,000. Her outside basis is $60,000 under IRC § 722, being the adjusted basis of the
property she contributed, and it has not moved. The partnership's basis in the property is also $60,000,
under IRC § 723 — not $100,000. A common misstatement holds that a contribution sets outside basis at
adjusted basis and inside basis at fair market value; on these facts that would give the partnership a
$40,000 step-up nobody paid for, and it is not what either section says. Both are the contributor's
adjusted basis.</p>
</div>

<div class="callout trap">
<strong>Traps</strong>
<ul>
<li><strong>Order of operations.</strong> Contributions and income up, distributions down, then losses
last. Distributions can strip the basis a loss needed.</li>
<li><strong>Tax-exempt income raises basis.</strong> And non-deductible, non-capital expenditures lower
it — both under IRC § 705(a).</li>
<li><strong>Debt is basis.</strong> A partner's share of partnership liabilities is a deemed contribution
under IRC § 752(a), whether or not the partner is personally liable.</li>
<li><strong>Basis never goes negative.</strong> The excess is gain under IRC § 731(a)(1), not a negative
number carried forward.</li>
<li><strong>A liability shift is a distribution.</strong> Admitting a partner, or repaying debt, can
produce gain with no cash and no sale.</li>
<li><strong>Inside basis is not fair market value.</strong> IRC § 723 gives the partnership the
contributor's adjusted basis.</li>
<li><strong>Suspended losses survive.</strong> IRC § 704(d)(2) allows them when basis is restored, and
basis can be restored by a liability increase as readily as by income.</li>
</ul>
</div>

## How this has changed

The basis provisions themselves are original to subchapter K and have not been materially amended. The
change worth knowing is procedural rather than substantive: partnerships are now required to report
partners' capital accounts on the tax basis method on Schedule K-1, which has made the difference between
a capital account and outside basis visible to clients in a way it was not before. The two are not the
same figure. A tax basis capital account excludes the partner's share of partnership liabilities; outside
basis includes it. A partner with a negative tax basis capital account may have substantial outside basis,
and a partner with a positive one may have none.

That distinction is now the single most common source of client confusion in this area, and it is worth
stating plainly whenever a Schedule K-1 is discussed. The capital account answers what the partner would
be entitled to on a hypothetical liquidation at book value. Outside basis answers what the partner may
deduct and what they will be taxed on.

The stack of limitations that outside basis sits at the top of has grown. A partnership loss must clear
IRC § 704(d), then the at-risk rules, then the passive activity rules, then the excess business loss
limitation, which was made permanent in 2025. Older material presenting IRC § 704(d) as the operative
constraint is describing the first gate of four.

## Exam focus

Nearly every question is a computation, and the marks are in the order of operations. Build the ledger:
opening basis, plus contributions and liability increases, plus the distributive share of all income
including tax-exempt, less distributions and liability decreases, less losses limited to the remainder.

Two figures are reliably offered as distractors. Fair market value of contributed property, where the
answer is adjusted basis. And the partner's capital account, where the answer is outside basis including
the share of liabilities.

Where a question mentions a change in partnership debt, treat it as cash. Where it produces a basis below
zero, the answer is gain under IRC § 731(a)(1) and never a negative basis.

## Check yourself

**1.** A partner's outside basis at the start of the year is $30,000. During the year she is allocated
$12,000 of ordinary income and $5,000 of tax-exempt interest, receives a $20,000 cash distribution, and is
allocated $4,000 of non-deductible fines. What is her basis at the end of the year?

*Answer: $23,000. Basis rises by $12,000 of taxable income and $5,000 of exempt income under
IRC § 705(a)(1)(A) and (B), falls by the $20,000 distribution under IRC § 733, and falls by $4,000 for the
non-deductible expenditure under IRC § 705(a)(2)(B). $30,000 plus $17,000 less $24,000 is $23,000.*

**2.** A partner contributes property with an adjusted basis of $75,000 and a fair market value of
$120,000. What is the partnership's basis in the property?

*Answer: $75,000. IRC § 723 gives the partnership the adjusted basis of the property to the contributing
partner at the time of contribution, increased only by any gain recognised under IRC § 721(b). Fair market
value plays no part, and there is no step-up on a contribution.*

**3.** A partner's outside basis is $18,000 when the partnership repays debt, reducing his share of
liabilities by $26,000. No cash is distributed to him. What are the consequences?

*Answer: $8,000 of gain. The reduction in his share of liabilities is a deemed distribution of money under
IRC § 752(b). Basis is reduced to zero but not below it, and the $8,000 excess is gain under
IRC § 731(a)(1), treated as gain from the sale or exchange of the partnership interest. That he received
nothing is not relevant.*

**4.** A partner buys a partnership interest from an existing partner for $250,000. What is her outside
basis?

*Answer: $250,000. IRC § 742 determines the basis of an interest acquired other than by contribution under
part II of subchapter O, and IRC § 1012(a) gives cost basis. Note that the partnership's inside basis in
its assets is unaffected by the purchase unless an IRC § 754 election is in place.*

**5.** A partner's tax basis capital account on his Schedule K-1 is negative $40,000, and his share of
partnership liabilities is $180,000. Can he deduct a $90,000 allocated loss?

*Answer: on these figures, yes. Outside basis includes the share of liabilities under IRC § 752(a), which
the tax basis capital account excludes, so his outside basis is around $140,000 rather than negative. The
capital account and outside basis answer different questions, and IRC § 704(d) is measured against the
latter. The at-risk and passive activity rules must still be applied.*
