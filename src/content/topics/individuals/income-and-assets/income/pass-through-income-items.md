---
title: "Pass-through income items"
code: "1.2.1.l"
part: 1
domain: "Income and Assets"
section: "Income"
description: "A Schedule K-1 reports character as well as amount, and the individual return has to preserve it. Basis governs losses, and 2026 made the QBI deduction permanent."
status: review
taxYear: 2026
lastReviewed: "2026-08-19"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 199A", title: "Qualified business income", url: "https://www.law.cornell.edu/uscode/text/26/199A" }
  - { type: IRC, ref: "§ 702", title: "Income and credits of partner", url: "https://www.law.cornell.edu/uscode/text/26/702" }
  - { type: IRC, ref: "§ 704", title: "Partner's distributive share", url: "https://www.law.cornell.edu/uscode/text/26/704" }
  - { type: IRC, ref: "§ 705", title: "Determination of basis of partner's interest", url: "https://www.law.cornell.edu/uscode/text/26/705" }
  - { type: IRC, ref: "§ 1366", title: "Pass-thru of items to shareholders", url: "https://www.law.cornell.edu/uscode/text/26/1366" }
  - { type: IRC, ref: "§ 469", title: "Passive activity losses and credits limited", url: "https://www.law.cornell.edu/uscode/text/26/469" }
  - { type: IRC, ref: "§ 224", title: "Qualified tips", url: "https://www.law.cornell.edu/uscode/text/26/224" }
  - { type: IRC, ref: "§ 465", title: "Deductions limited to amount at risk", url: "https://www.law.cornell.edu/uscode/text/26/465" }
  - { type: RevProc, ref: "2025-32", title: "Inflation-adjusted items for 2026", url: "https://www.irs.gov/pub/irs-drop/rp-25-32.pdf" }
  - { type: Statute, ref: "Pub. L. 119-21", title: "An Act to provide for reconciliation, title VII" }
forms: []
related: ["1.2.1.k", "1.2.1.j", "1.2.1.c", "1.2.1.a", "1.2.1.m", "1.2.3.e", "1.2.4.a", "1.2.4.e", "1.3.1.h", "1.4.1.i"]
changelog:
  - { date: "2026-08-19", summary: "Initial draft. Records the removal of the IRC § 199A sunset and the new minimum deduction in § 199A(i), the widened phase-in range under § 199A(b)(3)(B) and (d)(3), and the new § 199A(c)(4)(D) exclusion for amounts deducted as qualified tips." }
---

A pass-through entity pays no tax on its operating income; the owners do. What the entity does supply
is **character** — the Schedule K-1 separates items so that each keeps on the owner's return the
treatment it would have had if the owner had earned it directly. Most errors in this topic are failures
to preserve that character, or failures to test a loss against basis before deducting it.

## The rule

**Character passes through, item by item.** Each partner takes into account separately their
distributive share of the partnership's short-term and long-term capital gains and losses, § 1231 gains
and losses, charitable contributions, dividends to which § 1(h)(11) applies, foreign taxes described in
§ 901, and other items to the extent regulations provide (IRC § 702(a)(1)–(7)). That is why a K-1 has
many boxes rather than one: an item that would be a long-term capital gain in the partner's hands does
not become ordinary income by passing through an entity. Subchapter S works the same way (IRC § 1366(a)).

**Basis is the gate on losses, and the two regimes differ.** A partner's distributive share of loss is
allowed only to the extent of the adjusted basis of the partnership interest **at the end of the
partnership year in which the loss occurred** (IRC § 704(d)(1)), with the excess allowed when the
basis is restored (IRC § 704(d)(2)). An S corporation shareholder's aggregate losses and deductions
cannot exceed the sum of the adjusted basis of their **stock** and the adjusted basis of any
**indebtedness of the corporation to the shareholder** (IRC § 1366(d)(1)(A), (B)), carried forward
indefinitely (IRC § 1366(d)(2)(A)). The difference matters: a partner's basis includes a share of
partnership liabilities, while an S corporation shareholder gets basis from debt only where the
corporation owes them directly.

**Basis moves every year.** A partner's basis is increased by their distributive share of taxable
income, of income exempt from tax, and of the excess of depletion deductions over basis, and reduced by
distributions and by losses (IRC § 705(a)). Tax-exempt income increases basis even though it is not
taxed — otherwise it would be taxed indirectly on a later distribution or sale.

**Three limitations stack, in order.** Basis under § 704(d) or § 1366(d); then the at-risk limitation
in IRC § 465(a)(1); then the passive activity limitation in IRC § 469(a). A loss must clear all three,
and it can fail any one of them independently.

**The qualified business income deduction is now permanent.** Section 199A(i) formerly read that the
section "shall not apply to taxable years beginning after December 31, 2025". Pub. L. 119-21
§ 70105(b)(1) amended the subsection generally, replacing the sunset with a **minimum deduction** for a
taxpayer whose aggregate qualified business income from all **active** qualified trades or businesses
reaches a stated floor — active meaning one in which the taxpayer materially participates (IRC
§ 199A(i)(1), (i)(2)). Section 70105(a) separately widened the phase-in range in § 199A(b)(3)(B) and
(d)(3), and § 70105(c) applies both to taxable years beginning after 31 December 2025.

**Qualified business income has four exclusions.** It does not include reasonable compensation paid to
the taxpayer by the business, a § 707(c) guaranteed payment to a partner for services, a § 707(a)
service payment to the extent regulations provide, or — added for 2026 — any amount for which the
qualified tips deduction under § 224(a) is allowable (IRC § 199A(c)(4)(A)–(D)).

## Current figures

| Item | 2026 |
| --- | --- |
| Qualified business income thresholds | {fig:qbi.thresholds} |
| Phase-in range width | {fig:qbi.phase_in_width} |
| Minimum deduction | {fig:qbi.minimum_deduction} |
| Excluded from qualified business income | {fig:qbi.exclusions} |
| Loss limited by basis | {fig:passthrough.loss_basis_limit} |

## How it works in practice

Read the K-1 as a set of instructions about character, not as a single income figure. Each box has a
destination on the individual return, and putting a capital gain into ordinary income or a § 1231 gain
into the wrong netting is the error that costs most and is hardest to spot later.

Keep the basis schedule yourself. The entity's records show capital accounts, which are not the same
thing, and a partner's basis includes a share of liabilities that the capital account does not. For an
S corporation shareholder, the point to watch is that a personal guarantee of corporate debt gives no
basis — only a direct loan from the shareholder to the corporation does. Clients frequently assume the
opposite, and the difference decides whether a loss is deductible.

Apply the three limitations in order and record where a loss stopped. A loss suspended for basis under
§ 704(d) comes back when basis is restored; one suspended at risk under § 465 comes back when the
amount at risk increases; one suspended as passive under § 469 comes back against passive income or on
disposition. They are different queues with different releases, and a single "suspended losses" figure
carried forward will not survive an examination.

For § 199A, do the eligibility work before the arithmetic. Check whether the business is a specified
service trade or business, where the taxpayer's income sits relative to the threshold and phase-in
range, and whether wages or property limit the deduction. And be alert to the interaction with the new
tips deduction: an amount deducted under § 224(a) is out of qualified business income under
§ 199A(c)(4)(D), so a tipped sole proprietor cannot take both on the same dollars.

<div class="scenario">
<h3>The guarantee that gave no basis</h3>

Priya owns all of an S corporation. It borrows $200,000 from a bank, which she personally guarantees.
Her stock basis is $15,000 and the corporation has a $90,000 loss for the year.

She may deduct $15,000. IRC § 1366(d)(1) caps aggregate losses at the sum of the adjusted basis of her
stock and the adjusted basis of **any indebtedness of the corporation to the shareholder**. The bank
loan is indebtedness to the bank, and guaranteeing it does not make the corporation her debtor — she
has no debt basis at all.

The remaining $75,000 is not lost. IRC § 1366(d)(2)(A) carries it forward indefinitely, to be deducted
when she has basis. Had she instead borrowed the money personally and lent it to the corporation, the
same economics would have produced $200,000 of debt basis and a fully deductible loss. A partner in a
partnership would also have fared better, because a partner's basis includes a share of entity
liabilities.
</div>

<div class="scenario">
<h3>Character preserved, and character lost</h3>

Marcus receives a K-1 from a partnership showing $40,000 of ordinary business income, $12,000 of
long-term capital gain, $3,000 of § 1231 gain, $1,800 of qualified dividends, and $900 of charitable
contributions.

Every one of those goes somewhere different. IRC § 702(a) requires each partner to take into account
separately their distributive share of capital gains by holding period, § 1231 gains and losses,
charitable contributions and § 1(h)(11) dividends. The long-term gain and the dividends reach the
capital gain rate computation; the § 1231 gain enters that netting; the contribution is an itemized
deduction subject to its own limits.

Reporting the whole $57,700 as business income would overstate his tax substantially — the capital gain
and the dividends would lose their rate, and the contribution would disappear. The K-1's boxes are not
presentation; they are the mechanism by which § 702(a) works.
</div>

<div class="scenario">
<h3>A loss stopped three different ways</h3>

Devi has a $50,000 distributive share of loss from a rental partnership in which she does not
participate. Her basis is $30,000, her amount at risk is $22,000, and she has no other passive income.

The limitations bite in sequence. IRC § 704(d)(1) allows the loss only to the extent of her $30,000
basis, so $20,000 stops there. IRC § 465(a)(1) then allows only $22,000 of what survives, so a further
$8,000 stops. The remaining $22,000 reaches IRC § 469, which suspends it because the activity is passive
and she has no passive income to absorb it.

She deducts nothing this year, and the $50,000 sits in three separate queues with three separate
releases — basis restored, at-risk amount increased, and passive income or disposition. Recording them
as a single figure loses the information needed to release them correctly.
</div>

<div class="callout trap">
<p class="callout-label">Traps</p>

- **The K-1 reports character, not just amount** (IRC § 702(a)), and each item keeps its treatment on
  the owner's return.
- **Basis is not the capital account.** A partner's basis includes a share of partnership liabilities;
  the capital account does not.
- **A guarantee gives an S corporation shareholder no basis.** IRC § 1366(d)(1)(B) reaches only
  indebtedness **of the corporation to the shareholder**.
- **Partnership loss is tested at the end of the partnership year** in which the loss occurred (IRC
  § 704(d)(1)), not at the start.
- **Tax-exempt income increases basis** (IRC § 705(a)(1)(B)) — omitting it taxes the exempt income
  later.
- **Three limitations stack** — basis, then at risk, then passive — and each has its own release.
- **§ 199A no longer expires.** Its former sunset was replaced, not extended.
- **Reasonable compensation and guaranteed payments are outside qualified business income** (IRC
  § 199A(c)(4)(A), (B)), so paying yourself more reduces the deduction.
- **Deducted tips are outside qualified business income too** (IRC § 199A(c)(4)(D), new for 2026) —
  the same dollars cannot support both.
- **The phase-in range widened for 2026**, so a taxpayer who was fully phased out last year may not be
  this year on the same income.

</div>

## How this has changed

**The § 199A sunset is gone, and the mechanism matters.** Pub. L. 119-21 § 70105(b)(1) amended
§ 199A(i) *generally*, replacing text that read "This section shall not apply to taxable years
beginning after December 31, 2025" with the new minimum deduction. So the deduction was not extended to
a later date — the expiry provision was removed and the subsection now does something else entirely. A
source saying § 199A expires after 2025 is wrong, and a source citing § 199A(i) for the sunset is
citing a subsection that now reads on a different subject. This is the second such redesignation trap
found in Pub. L. 119-21, alongside the move of the miscellaneous itemized suspension from § 67(g) to
§ 67(h).

**The phase-in range widened by half.** Section 70105(a)(1) and (a)(2) substituted the larger figures in
§ 199A(b)(3)(B) and § 199A(d)(3), effective for taxable years beginning after 31 December 2025. The
practical effect is that the wage and property limitations, and the specified service trade or business
disallowance, now phase in over a longer income band — so a taxpayer fully phased out in 2025 may have
a partial deduction in 2026 on identical income.

**A minimum deduction is new.** Section 199A(i) now guarantees a floor for a taxpayer with at least a
stated amount of qualified business income from **active** businesses — those in which the taxpayer
materially participates. Both figures are indexed for taxable years beginning after 2026, so 2026 is
the first and unindexed year.

**One new exclusion.** Section 70201(d) added § 199A(c)(4)(D), taking amounts deductible as qualified
tips out of qualified business income, for taxable years beginning after 31 December 2024.

## Exam focus

Know that § 702(a) requires separate statement of listed items, and be able to say why — character
follows the item to the owner.

Know both basis rules and the difference between them: a partner's basis includes entity liabilities, an
S corporation shareholder's does not, and a guarantee is not debt basis. Expect a question turning on
exactly that.

Know the three-limitation ordering, and that each suspension has its own release.

For § 199A, know that it is now permanent, that the phase-in range widened for 2026, and the four
exclusions from qualified business income — including the new one for deducted tips.

## Check yourself

**1.** A partner's share of partnership loss is $60,000 and their basis at the end of the partnership
year is $45,000. How much is allowed, and what happens to the rest?

*Answer: $45,000 is allowed. IRC § 704(d)(1) limits a partner's distributive share of loss to the
adjusted basis of the partnership interest at the end of the partnership year in which the loss
occurred. The remaining $15,000 is allowed under § 704(d)(2) at the end of the partnership year in which
the excess is repaid to the partnership — that is, when basis is restored — and it must then still clear
the at-risk and passive limitations.*

**2.** An S corporation shareholder personally guarantees a bank loan to the corporation. Does that
increase the basis against which losses may be deducted?

*Answer: no. IRC § 1366(d)(1)(B) allows losses up to the adjusted basis of indebtedness **of the S
corporation to the shareholder**. A guarantee creates a contingent obligation to the bank, not
indebtedness of the corporation to the shareholder. Only an actual loan from the shareholder to the
corporation produces debt basis.*

**3.** A partnership allocates a partner $8,000 of tax-exempt municipal bond interest. What is the
effect on basis?

*Answer: basis increases by $8,000. IRC § 705(a)(1)(B) increases a partner's basis by their distributive
share of income of the partnership exempt from tax. Without that adjustment the exempt income would be
taxed indirectly — as a gain on a later sale of the interest, or on a distribution exceeding basis.*

**4.** A sole proprietor has $30,000 of qualified tips for which the IRC § 224(a) deduction is allowable,
within a business that would otherwise generate qualified business income. Can both be claimed on those
amounts?

*Answer: no. IRC § 199A(c)(4)(D), added by Pub. L. 119-21 § 70201(d), excludes from qualified business
income any amount with respect to which a deduction is allowable under § 224(a) for the taxable year.
The tips deduction may be taken, but those dollars are removed from the base on which the § 199A
deduction is computed.*
