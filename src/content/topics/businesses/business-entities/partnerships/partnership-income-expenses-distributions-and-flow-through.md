---
title: "Partnership income, expenses, distributions, and flow-through (e.g.,self- employment income)"
code: "2.1.2.a"
part: 2
domain: "Business Entities"
section: "Partnerships"
description: "The partnership pays no tax but computes everything twice — once as an entity, once item by item — because character survives the trip out to the partner's return."
status: published
taxYear: 2026
lastReviewed: "2026-08-21"
reviewedBy: "Draft for N. O. review"
authorities:
  - { type: IRC, ref: "§ 701", title: "Partners, not partnership, subject to tax", url: "https://www.law.cornell.edu/uscode/text/26/701" }
  - { type: IRC, ref: "§ 702", title: "Income and credits of partner", url: "https://www.law.cornell.edu/uscode/text/26/702" }
  - { type: IRC, ref: "§ 703", title: "Partnership computations", url: "https://www.law.cornell.edu/uscode/text/26/703" }
  - { type: IRC, ref: "§ 704", title: "Partner's distributive share", url: "https://www.law.cornell.edu/uscode/text/26/704" }
  - { type: IRC, ref: "§ 705", title: "Determination of basis of partner's interest", url: "https://www.law.cornell.edu/uscode/text/26/705" }
  - { type: IRC, ref: "§ 731", title: "Extent of recognition of gain or loss on distribution", url: "https://www.law.cornell.edu/uscode/text/26/731" }
  - { type: IRC, ref: "§ 752", title: "Treatment of certain liabilities", url: "https://www.law.cornell.edu/uscode/text/26/752" }
  - { type: IRC, ref: "§ 707(c)", title: "Guaranteed payments", url: "https://www.law.cornell.edu/uscode/text/26/707" }
  - { type: IRC, ref: "§ 1231", title: "Property used in the trade or business and involuntary conversions", url: "https://www.law.cornell.edu/uscode/text/26/1231" }
  - { type: IRC, ref: "§ 1402(a)(13)", title: "Net earnings from self-employment; limited partner exclusion", url: "https://www.law.cornell.edu/uscode/text/26/1402" }
forms: []
related: ["2.1.2.e", "2.1.2.c", "2.1.1.b", "2.1.2.i", "2.1.2.b", "2.1.2.d", "2.1.2.f", "2.1.2.g", "2.1.2.h", "2.1.2.j", "2.1.2.k", "2.1.5.c", "2.2.2.l", "2.2.4.f"]
changelog:
  - { date: "2026-08-21", summary: "Initial draft. Sets out the IRC § 701 absence of entity tax, the IRC § 702(a) separately stated items and the § 702(b) conduit rule for character, the § 703(a) computation of partnership taxable income and the deductions denied to it, the § 703(b) allocation of elections between partnership and partner, the § 704(a) and (b) determination of distributive share and the § 704(d) basis limitation on losses, the § 705(a) outside basis mechanics and the § 752 treatment of liabilities as contributions and distributions, the § 731 recognition rules on distributions, and the IRC § 1402(a)(13) limited partner exclusion from self-employment income." }
  - { date: "2026-08-25", summary: "Added a plain-language summary, glossary marks, and typed scenarios." }
---

<div class="plain-terms">
A partnership usually pays no tax of its own. Instead, it works out its income and costs once,
then splits the result among its owners. Each owner reports their own share and pays tax on it.
This page covers how that split works. Some items are folded into one combined business number.
Others must be pulled out and reported on their own, because each owner's own situation changes
how that item is taxed. This affects every partner, whether or not they work in the business day
to day. This page also covers how much of a loss an owner can actually deduct, and how the
business's own borrowing changes what each owner is treated as having put in.
</div>

Every difficulty in partnership taxation comes from one design decision: the partnership computes and the
partner pays. Two consequences follow and both are tested. The computation happens at the entity, so
elections, methods and characterisation are settled there and the partner cannot revisit them. But the tax
happens at the partner, so items must arrive in a form the partner's own return can use — which is why so
much has to be stated separately rather than folded into a single number.

## The rule

**No tax at the entity.** {fig:ptr.no_entity_tax}

**What must be stated separately.** {fig:ptr.separately_stated}

**Why it must be.** {fig:ptr.character_conduit}

**How the partnership computes.** {fig:ptr.taxable_income}

**Who makes the elections.** {fig:ptr.elections}

**How the share is fixed.** {fig:ptr.distributive_share}

**The ceiling on losses.** {fig:ptr.loss_limit}

**The basis that ceiling runs against.** {fig:ptr.outside_basis}

**Liabilities as money.** {fig:ptr.liabilities}

**Distributions.** {fig:ptr.distribution_gain}

**Self-employment income.** {fig:llc.limited_partner_exclusion}

## Current figures

| Item | Rule | Authority |
| --- | --- | --- |
| Separately stated items | {fig:ptr.separately_stated} | IRC § 702(a) |
| Deductions denied to the partnership | {fig:ptr.taxable_income} | IRC § 703(a) |
| Loss limitation | {fig:ptr.loss_limit} | IRC § 704(d) |
| Outside basis | {fig:ptr.outside_basis} | IRC § 705(a) |
| Liabilities | {fig:ptr.liabilities} | IRC § 752 |
| Distributions | {fig:ptr.distribution_gain} | IRC § 731(a) |

## How it works in practice

The list of {gloss:separately-stated-item}s in IRC § 702(a) is not arbitrary, and learning it as a list is the
hard way. Each entry is an item whose treatment on the partner's return depends on something the
partnership cannot know: a capital gain has to meet the partner's own capital losses, a charitable
contribution has to meet the partner's own contribution limits, a foreign tax has to be tested against
the partner's own foreign tax credit position. Anything whose treatment is fixed at the entity goes into the residual figure — ordinary business income
(IRC § 702(a)(8)) — and everything else comes out on its own line.

IRC § 703(a)(2) is the mirror of that. The partnership is denied exactly the deductions it cannot properly
compute: personal exemptions, foreign taxes, charitable contributions, the net operating loss deduction,
the individual itemized deductions in part VII, and oil and gas depletion. It is not that these are
disallowed; they are relocated to the partner.

Character is the point of the whole arrangement, and IRC § 702(b) states it in the strongest possible
terms. The character of an item is determined as if the partner had realised it directly from the source
the partnership realised it from. A partnership dealing in real estate produces ordinary income for its
partners even if a particular partner is an investor in every other respect; a partnership that holds an
investment produces capital gain for its partners even if one of them is a dealer.

The basis machinery is where computation actually happens, and IRC § 705(a) should be read as a running
account rather than a rule. Basis goes up with the distributive share of taxable income *and* with
tax-exempt income — the second is easy to forget and matters, because otherwise the exempt income would be
taxed on a later sale. It goes down with distributions and with the share of losses, and also with
non-deductible, non-capitalisable expenditures, which is the mirror of the tax-exempt income rule. It never
goes below zero.

IRC § 752 is the provision that makes partnership basis behave unlike any other basis. A partner's share of
partnership liabilities is treated as money contributed, so a partner's basis includes borrowings the
partner never made personally. That is why partners can deduct losses funded by partnership debt, and why
a reduction in partnership debt is a deemed cash distribution that can produce gain under IRC § 731(a)(1)
without a dollar moving.

The loss limitation in IRC § 704(d) is only the first of several. A loss must survive outside basis, then
the at-risk rules, then the passive activity rules, then the excess business loss limitation, in that
order. A question that says "the partner's basis is sufficient" has answered only the first gate.

On self-employment income, note what the statute excludes and what it does not. The exclusion is for a
limited partner's distributive share "as such"; guaranteed payments for services actually rendered are
carved back in. A general partner's distributive share from a trade or business is self-employment
income in full, which is the single largest practical difference between a partnership and an S
corporation for an owner who works in the business.

## Scenarios

<div class="scenario" data-type="baseline">
<h3>The {gloss:charitable-contribution} that could not be deducted at the partnership</h3>
<p>A four-partner architecture firm donates $40,000 of cash to a local arts charity in 2026. The
bookkeeper deducts it in computing the partnership's ordinary business income, which reduces the ordinary
income reported on every Schedule K-1 by the partners' respective shares.</p>
<p>That is wrong twice over. IRC § 703(a)(2)(C) denies the partnership the charitable deduction, so it
cannot reduce ordinary business income, and IRC § 702(a)(4) requires the contribution to be stated
separately on each K-1. The reason is the partner-level limits: each partner's deduction is tested against
their own contribution base and their own itemising position. A partner who takes the standard deduction
gets nothing for it, and a partner already at their percentage limit carries it forward. Folding it into
ordinary income would have given all four partners a deduction none of them might have been entitled
to.</p>
</div>

<div class="scenario" data-type="boundary">
<h3>The loss that exceeded basis</h3>
<p>Solange holds a 30 percent interest in a partnership. Her outside basis at 1 January 2026 is $22,000,
including $9,000 attributable to her share of partnership liabilities. Her distributive share of the 2026
loss is $31,000. During 2026 the partnership repaid debt, reducing her share of liabilities to $4,000.</p>
<p>Two things happen before the loss is tested. The $5,000 reduction in her share of liabilities is a
deemed distribution of money under IRC § 752(b), reducing her basis to $17,000 — and because that is
still positive, no gain arises under IRC § 731(a)(1). Her loss is then allowed only to the extent of her
adjusted basis at the end of the partnership year under IRC § 704(d)(1), so $17,000 is allowed and $14,000
is suspended. The suspended amount is not lost: it becomes deductible in a later year when she has basis
again, whether from income, a contribution or an increased share of liabilities.</p>
</div>

<div class="scenario" data-type="interaction">
<h3>The dealer and the investment</h3>
<p>Two partners form a partnership that acquires a single parcel of undeveloped land and holds it for
seven years before selling at a $600,000 gain. One partner is a full-time property developer who treats
every parcel they own personally as inventory. The other is a retired teacher.</p>
<p>Both take capital gain. Under IRC § 702(b) the character of the item is determined as if each partner
had realised it directly from the source from which the partnership realised it, and the partnership held
the parcel as an investment. The developer's personal status is not the source, and it does not convert
their share into ordinary income. The result would reverse if the partnership itself were a dealer — then
the teacher would take ordinary income, however passive their involvement.</p>
</div>

<div class="scenario" data-type="fails">
<h3>The {gloss:general-partner} who wanted to be limited</h3>
<p>Ifeoma is one of two general partners in a consulting partnership. Her distributive share of ordinary
business income for 2026 is $180,000, and she also receives a guaranteed payment of $60,000 for managing
the firm. Her accountant suggests amending the agreement to make her a {gloss:limited-partner} so that the
distributive share escapes self-employment tax.</p>
<p>The guaranteed payment is self-employment income whatever her status: IRC § 1402(a)(13) carves back
IRC § 707(c) guaranteed payments for services actually rendered, to the extent established to be
remuneration for those services. As for the distributive share, the exclusion is for a limited partner
"as such", which qualifies the capacity in which the income is earned and not merely the label in the
agreement. A partner who continues to manage the firm is not obviously acting as a limited partner in
respect of that income. The re-papering is not the straightforward saving it appears to be, and this is
contested ground rather than settled planning.</p>
</div>

<div class="callout trap">
<strong>Traps</strong>
<ul>
<li><strong>Separately stated is not optional.</strong> The IRC § 702(a) items may not be folded into
ordinary business income, and IRC § 703(a)(2) denies the partnership the matching deductions.</li>
<li><strong>Character is the partnership's, not the partner's.</strong> IRC § 702(b) traces to the source
the partnership realised the item from.</li>
<li><strong>Tax-exempt income increases basis.</strong> And non-deductible, non-capital expenditures
reduce it — both under IRC § 705(a).</li>
<li><strong>A debt reduction is a cash distribution.</strong> IRC § 752(b) can produce gain under
IRC § 731(a)(1) with no money moving.</li>
<li><strong>Basis is the first gate, not the only one.</strong> At-risk, passive activity and excess
business loss limits all come after IRC § 704(d).</li>
<li><strong>Suspended losses are not lost.</strong> IRC § 704(d)(2) allows them when basis is restored.</li>
<li><strong>Guaranteed payments are self-employment income regardless.</strong> IRC § 1402(a)(13) carves
them back in even for a limited partner.</li>
</ul>
</div>

## How this has changed

The architecture of subchapter K has been stable since 1954 and none of the provisions above has been
amended recently. What has changed is the stack of limitations that a partnership loss must now pass
through after IRC § 704(d). The excess business loss limitation was made permanent by the 2025 Act, so a
non-corporate partner whose aggregate business losses exceed the threshold defers the excess indefinitely
even where basis, at-risk and passive activity rules are all satisfied. Any material presenting IRC
§ 704(d) as the last gate is describing a shorter list than the one that now applies.

The self-employment treatment of a limited partner's distributive share is the live area, and it is live
in litigation rather than in legislation. IRC § 1402(a)(13) has not been amended, and the words "limited
partner, as such" have carried their weight unchanged since 1977. What has moved is how firmly the
Service and the courts read "as such" as a functional test about the capacity in which the income was
earned, rather than a formal test about the label in the partnership agreement. Advice that treats a
limited partnership interest as automatically outside self-employment income should be given with that
uncertainty stated.

## Exam focus

The most common shape gives a list of partnership items and asks which are separately stated. Work from
the principle rather than the list: an item is separately stated if its treatment depends on facts about
the partner. Capital gains, IRC § 1231 items, charitable contributions, qualified dividends, foreign taxes
and credits all qualify; wages paid to employees, rent paid, and depreciation on business assets do not.

The second shape gives a partner's basis, a share of losses, and sometimes a change in liabilities, and
asks how much loss is deductible. Order matters: adjust basis for liabilities and distributions first,
then apply IRC § 704(d), then note that the excess is suspended rather than lost.

Watch for questions where a partnership distribution exceeds basis. The answer is gain under
IRC § 731(a)(1) treated as gain from the sale or exchange of the partnership interest — and remember that
a reduction in the partner's share of liabilities counts as a distribution of money for this purpose.

## Check yourself

**1.** A partnership's books show ordinary business income of $300,000 after deducting $20,000 of
charitable contributions and $15,000 of long-term capital gain included in revenue. What ordinary business
income should appear on the Schedules K-1 in aggregate?

*Answer: $305,000. The charitable contribution must be added back, because IRC § 703(a)(2)(C) denies the
partnership the deduction and IRC § 702(a)(4) requires it to be stated separately. The capital gain must
be removed, because IRC § 702(a)(2) requires it to be stated separately. Ordinary business income is
$300,000 plus $20,000 less $15,000, and the other two items travel on their own lines.*

**2.** A partner's outside basis is $40,000 at the end of the partnership year, and their distributive
share of the year's loss is $58,000. How much may they deduct, subject to no other limitation?

*Answer: $40,000, with $18,000 suspended. IRC § 704(d)(1) allows the loss only to the extent of the
adjusted basis of the interest at the end of the partnership year in which the loss occurred, and
IRC § 704(d)(2) allows the excess in a later year. The at-risk, passive activity and excess business loss
rules are then applied to the $40,000 in turn.*

**3.** A partnership refinances, reducing a partner's share of liabilities by $25,000. The partner's
outside basis immediately before the refinancing is $9,000. What is the consequence?

*Answer: $16,000 of gain. The decrease in the partner's share of liabilities is treated as a distribution
of money under IRC § 752(b), basis is reduced to zero rather than below it, and the excess of the deemed
distribution over basis is gain under IRC § 731(a)(1), treated as gain from the sale or exchange of the
partnership interest. No cash was distributed.*

**4.** A partnership receives $8,000 of tax-exempt municipal bond interest and pays a $3,000 fine that is
not deductible. How do these affect a 50 percent partner's outside basis?

*Answer: up $4,000 and down $1,500, for a net increase of $2,500. IRC § 705(a)(1)(B) increases basis by
the distributive share of income exempt from tax, and IRC § 705(a)(2)(B) decreases it by the share of
expenditures that are neither deductible nor properly chargeable to capital account. Both are necessary so
that the exempt income is never taxed and the non-deductible expense is never deducted on a later sale.*

**5.** A limited partner receives a $75,000 distributive share and a $30,000 guaranteed payment for
services actually rendered to the partnership. What is subject to self-employment tax?

*Answer: the $30,000. IRC § 1402(a)(13) excludes a limited partner's distributive share as such, but
expressly does not exclude IRC § 707(c) guaranteed payments for services actually rendered to the extent
established to be remuneration for those services. Whether the $75,000 is genuinely excluded also depends
on the partner acting as a limited partner in respect of it, which is a question of capacity rather than
of the agreement's wording.*

**6. A partnership holds one parcel of land as an investment for six years and sells it at a $400,000 gain. One partner is a full-time real estate dealer; the other is a retired nurse. How is each partner's share characterised?**
(A) Capital gain for both (B) Ordinary income for the dealer and capital gain for the nurse (C) Ordinary income for both (D) Whatever character each partner's own activities would give it
*Answer: A. IRC § 702(b) determines character as if the partner had realised the item directly from the source from which the partnership realised it, and the partnership held the parcel as an investment; the dealer's personal status is not the source.*

**7. A partner's distributive share of loss has cleared the IRC § 704(d) basis limitation. Which limitation is applied next?**
(A) The at-risk rules (B) The passive activity rules (C) The excess business loss limitation (D) None, because basis is the only gate
*Answer: A. IRC § 704(d) is the first of several gates; the loss must then survive the at-risk rules, then the passive activity rules, then the excess business loss limitation, in that order.*

**8. Clementine contributes $10,000 of cash for her interest. The partnership then borrows $200,000, of which her share is $50,000. Her outside basis is:**
(A) $60,000 (B) $10,000 (C) $50,000 (D) $210,000
*Answer: A. IRC § 752 treats a partner's share of partnership liabilities as money contributed, so her basis includes the $50,000 of borrowing she never made personally on top of the $10,000 of cash.*
