---
title: "Publicly traded partnerships"
code: "1.2.3.e"
part: 1
domain: "Income and Assets"
section: "Property, real and personal"
description: "Losses from one PTP offset only that PTP's income, and stay suspended until the whole interest goes. On sale, part of the gain is ordinary however long it was held."
status: review
taxYear: 2026
lastReviewed: "2026-08-19"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 469", title: "Passive activity losses and credits limited", url: "https://www.law.cornell.edu/uscode/text/26/469" }
  - { type: IRC, ref: "§ 705", title: "Determination of basis of partner's interest", url: "https://www.law.cornell.edu/uscode/text/26/705" }
  - { type: IRC, ref: "§ 741", title: "Recognition and character of gain or loss on sale or exchange", url: "https://www.law.cornell.edu/uscode/text/26/741" }
  - { type: IRC, ref: "§ 751", title: "Unrealized receivables and inventory items", url: "https://www.law.cornell.edu/uscode/text/26/751" }
  - { type: IRC, ref: "§ 1446", title: "Withholding of tax on foreign partners' share of effectively connected income", url: "https://www.law.cornell.edu/uscode/text/26/1446" }
  - { type: IRC, ref: "§ 7704", title: "Certain publicly traded partnerships treated as corporations", url: "https://www.law.cornell.edu/uscode/text/26/7704" }
forms: []
related: ["1.2.1.k", "1.2.3.b", "1.2.3.a", "1.2.1.l", "1.2.3.c", "1.2.3.f", "1.2.3.g"]
changelog:
  - { date: "2026-08-19", summary: "Initial draft. Sets out the IRC § 7704(a) corporate default and the § 7704(c) qualifying income exception, the § 469(k)(1) separate application of the passive loss rules and the § 469(k)(3) rule deferring release of suspended losses until the whole interest goes, the § 741 and § 751(a) split of gain on sale, the § 705 outside basis mechanics, and the § 1446(f) withholding on a transferee." }
---

Two features make a publicly traded partnership behave unlike anything else an individual is likely to
hold. Its passive losses are quarantined — they offset income from **that partnership only**, and stay
suspended until the entire interest is disposed of. And on a sale, part of the gain is ordinary income
under § 751 regardless of holding period, computed from a figure the partnership supplies rather than one
the taxpayer can derive from the brokerage statement.

## The rule

**A publicly traded partnership is a corporation unless it escapes.** For purposes of the title, and
except as § 7704(c) provides, a publicly traded partnership is treated as a corporation (IRC § 7704(a)).
The term means any partnership whose interests are traded on an established securities market, or are
readily tradable on a secondary market or the substantial equivalent (§ 7704(b)(1), (2)).

**The escape is a gross income test, applied cumulatively.** Subsection (a) does not apply for a year if
the partnership met the gross income requirements for that year **and each preceding year beginning after
31 December 1987** during which it or a predecessor was in existence (IRC § 7704(c)(1)). It meets those
requirements where 90 percent or more of gross income is qualifying income (§ 7704(c)(2)), a term defined
by § 7704(d)(1) to include interest, dividends, real property rents, gain from real property, and income
from mineral or natural resource activities. A partnership that would be a regulated investment company
if it were a domestic corporation cannot use the exception (§ 7704(c)(3)).

**The passive loss rules are applied one partnership at a time.** Section 469 is applied **separately**
with respect to items attributable to each publicly traded partnership, and § 469(i) — the rental real
estate allowance — does not apply to those items at all (IRC § 469(k)(1)). A loss from one PTP therefore
cannot offset income from another PTP, from any other passive activity, or from anything else.

**And the suspended losses do not come free on a partial exit.** For purposes of § 469(g), a taxpayer is
not treated as having disposed of an entire interest in an activity of a publicly traded partnership until
they dispose of the **entire interest in the partnership** (IRC § 469(k)(3)). Selling half the units
releases nothing.

**On a sale, the character starts as capital.** Gain or loss on the sale or exchange of a partnership
interest is recognised to the transferor and is gain or loss from the sale of a capital asset, **except as
otherwise provided in § 751** (IRC § 741).

**Section 751 carves out an ordinary slice.** The money or fair market value of property received in
exchange for all or part of an interest, to the extent attributable to **unrealized receivables** or
**inventory items** of the partnership, is treated as an amount realized from the sale of property other
than a capital asset (IRC § 751(a)(1), (2)). That slice is ordinary income however long the units were
held, and it can exceed the total gain, producing ordinary income and a capital loss on one transaction.

**Outside basis moves every year.** The adjusted basis of a partner's interest is the contributed or
purchased basis, increased by the distributive share of taxable income, of tax-exempt income, and of
excess depletion deductions, and decreased — but not below zero — by distributions and by the distributive
share of losses and of nondeductible, non-capital expenditures (IRC § 705(a)(1), (2)). For a PTP holder
this is the number the brokerage statement does not have: cash distributions have been reducing basis year
after year, so the gain on sale is usually far larger than the difference between the sale proceeds and
what was paid.

**A transferee may have to withhold.** Where any portion of the gain on a disposition of a partnership
interest would be effectively connected income under § 864(c)(8), the transferee must deduct and withhold
10 percent of the amount realized (IRC § 1446(f)(1)) — unless the transferor furnishes an affidavit under
penalty of perjury giving their taxpayer identification number and stating that they are not a foreign
person (§ 1446(f)(2)(A)).

## Current figures

| Item | 2026 |
| --- | --- |
| What a PTP is | {fig:ptp.definition} |
| Default classification | {fig:ptp.corporate_default} |
| The qualifying income exception | {fig:ptp.qualifying_income_test} |
| Passive losses | {fig:ptp.passive_loss_separate} |
| Releasing suspended losses | {fig:ptp.suspended_loss_release} |
| Character on sale | {fig:ptp.sale_character} |
| The ordinary slice | {fig:ptp.751_ordinary} |
| Outside basis | {fig:ptp.outside_basis} |
| Withholding on a transferee | {fig:ptp.foreign_withholding} |

## How it works in practice

The annual return work is mostly bookkeeping and it has to be kept per partnership. Each PTP's Schedule
K-1 feeds its own column: income offsets that partnership's suspended losses first, and any remaining loss
joins the suspended pile for that partnership alone. A spreadsheet with one row per PTP per year is not
optional — nothing on the return itself carries the tracking forward, and a client who has held six
partnerships for a decade has six independent histories.

On disposal, three numbers matter and only one of them is on the broker's statement. The proceeds come
from the broker. The **adjusted basis** comes from the § 705 running account, which the partnership
usually supplies as a sales schedule with the final K-1. The **ordinary income portion** comes from that
same schedule, because § 751 requires the partnership's own inside figures for unrealized receivables and
inventory. Reporting a PTP sale from the Form 1099-B alone will overstate basis and miss the ordinary
component entirely.

Expect the arithmetic to be counterintuitive. Years of cash distributions reduce basis without being
taxed, so a unit bought for 30 dollars and sold for 25 can produce a gain. And the § 751 amount is
computed independently of the overall result, so a taxpayer with an economic loss can still report
ordinary income, offset by a capital loss constrained by the annual capital loss allowance.

<div class="scenario">
<h3>Scenario 1 — two partnerships, one wasted loss</h3>

Wren holds units in two pipeline partnerships. In 2026 the first allocates her a 9,000-dollar loss and the
second allocates her 7,000 dollars of income. She also has 40,000 dollars of wage income.

Nothing nets. IRC § 469(k)(1) applies § 469 separately to the items of each publicly traded partnership,
so the 9,000-dollar loss is suspended against the first partnership's own future income and cannot touch
the second partnership's 7,000 dollars, her wages, or any other passive activity. She reports the 7,000
dollars of income and carries the 9,000-dollar loss forward inside the first partnership's silo.
</div>

<div class="scenario">
<h3>Scenario 2 — the loss on paper, the income on the return</h3>

Yosef bought PTP units in 2018 for 44,000 dollars. Over eight years he received 19,000 dollars of cash
distributions and was allocated 6,000 dollars of cumulative net income. He sells the whole position in
2026 for 38,000 dollars. The final sales schedule shows 11,000 dollars of § 751 ordinary income.

His adjusted basis under IRC § 705 is 44,000 plus 6,000 minus 19,000, or 31,000 dollars — not the 44,000
he paid. Total gain is therefore 7,000 dollars, not the 6,000-dollar loss the brokerage statement implies.
Of that, IRC § 751(a) makes 11,000 dollars ordinary income, leaving a 4,000-dollar capital loss. He
reports both. And because he disposed of the entire interest, § 469(k)(3) is satisfied and any suspended
losses from this partnership are released.
</div>

<div class="scenario">
<h3>Scenario 3 — the partial sale that released nothing</h3>

Zeinab holds 2,000 units of a single PTP with 14,000 dollars of suspended passive losses. Needing cash in
2026, she sells 1,200 units.

She reports the gain on those units, including any § 751 ordinary portion, but the suspended losses stay
where they are. IRC § 469(k)(3) provides that she is not treated as having disposed of her entire interest
in an activity of a publicly traded partnership until she disposes of her entire interest in the
partnership, and 800 units remain. Selling the last 800 in a later year is what releases the 14,000
dollars.
</div>

<div class="callout trap">

**Suspended losses are released by disposing of the whole interest, not the whole activity.** IRC
§ 469(k)(3) redefines the trigger for a PTP, and a partial sale releases nothing.

**Basis is not what was paid.** Cash distributions reduce it under § 705(a)(2) without being taxed, which
is why a unit sold below cost can still produce gain.

**The ordinary slice is computed inside the partnership.** Section 751(a) measures the amount attributable
to unrealized receivables and inventory items, figures only the partnership has.

**The rental real estate allowance is switched off entirely** for PTP items by the parenthetical in
§ 469(k)(1) — not merely limited.
</div>

## How this has changed

**Section 7704 was enacted to stop the growth of publicly traded partnerships and left a defined
survivor class.** The corporate default in subsection (a) is the rule; the § 7704(c) exception is what
lets today's energy and pipeline partnerships remain partnerships. Note how demanding the exception is:
§ 7704(c)(1) requires the 90 percent test to have been met not only for the year in question but for
**every preceding year after 1987** in which the partnership existed. A single failed year is not a
one-year problem.

**Section 1446(f) added a withholding obligation that reaches ordinary secondary-market sales.** Where any
part of the gain would be effectively connected income, a transferee must withhold 10 percent of the
amount realized unless a non-foreign affidavit is furnished. For publicly traded interests the mechanics
run through brokers rather than the buyer personally, but the statutory obligation is on the transferee,
and material predating this provision describes a sale with no withholding dimension at all.

**Section 199A brought PTP income into the qualified business income computation** as a separate
component, which changed how the K-1 has to be read but not the rules on this page. The interaction is
worth flagging because it gives PTP income a second, unrelated silo alongside the § 469(k) one.

**What has not changed is the § 751 mechanism**, and it remains the most reliable source of error. The
provision has read the same way for decades, and the difficulty is entirely practical: the taxpayer cannot
compute the ordinary portion, the partnership must supply it, and the supply arrives with the final
Schedule K-1 rather than with the trade confirmation.

## Exam focus

Expect the **quarantine** to be tested with two partnerships in the facts, one profitable and one not. The
loss does not offset the income.

Expect a **partial disposition** with suspended losses, testing § 469(k)(3). Nothing is released.

Expect a **sale computation** where the proceeds are below the original cost and the answer is a gain,
because distributions reduced basis under § 705(a)(2).

Expect **§ 751** as a character question: the ordinary portion is ordinary regardless of holding period,
and it can leave a capital loss on the same transaction.

## Check yourself

**1.** A taxpayer has a 5,000-dollar loss from PTP A and 5,000 dollars of income from PTP B. What is
reported?

*Answer: 5,000 dollars of income from PTP B, with PTP A's loss suspended. IRC § 469(k)(1) applies § 469
separately to the items of each publicly traded partnership, so the two do not net.*

**2.** Units bought for 20,000 dollars, cumulative income allocations of 3,000 dollars, cumulative cash
distributions of 9,000 dollars. What is the adjusted basis?

*Answer: 14,000 dollars — 20,000 increased by the 3,000-dollar distributive share of income under IRC
§ 705(a)(1)(A) and decreased by the 9,000 dollars of distributions under § 705(a)(2).*

**3.** The same units are sold for 17,000 dollars, and the sales schedule shows 6,000 dollars of § 751
ordinary income. What is reported?

*Answer: A total gain of 3,000 dollars, of which 6,000 dollars is ordinary income under IRC § 751(a),
leaving a 3,000-dollar capital loss. Both are reported; the ordinary portion is not reduced by the capital
result.*

**4.** A taxpayer sells 60 percent of their units in a PTP with suspended losses. Are the losses released?

*Answer: No. IRC § 469(k)(3) provides that the taxpayer is not treated as having disposed of the entire
interest in an activity until the entire interest in the partnership is disposed of.*

**5.** Why is a publicly traded partnership not taxed as a corporation?

*Answer: Because IRC § 7704(c) disapplies the § 7704(a) default where 90 percent or more of gross income
is qualifying income under § 7704(d), tested for the year and for every preceding year after 1987 in which
the partnership existed.*
