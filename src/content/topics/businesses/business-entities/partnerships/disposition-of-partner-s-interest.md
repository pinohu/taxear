---
title: "Disposition of partner's interest"
code: "2.1.2.f"
part: 2
domain: "Business Entities"
section: "Partnerships"
description: "A partnership interest is a capital asset until section 751 says otherwise, and the debt the buyer takes over is part of what the seller is treated as receiving."
status: published
taxYear: 2026
lastReviewed: "2026-08-21"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 741", title: "Recognition and character of gain or loss on sale or exchange", url: "https://www.law.cornell.edu/uscode/text/26/741" }
  - { type: IRC, ref: "§ 751", title: "Unrealized receivables and inventory items", url: "https://www.law.cornell.edu/uscode/text/26/751" }
  - { type: IRC, ref: "§ 742", title: "Basis of transferee partner's interest", url: "https://www.law.cornell.edu/uscode/text/26/742" }
  - { type: IRC, ref: "§ 743", title: "Special rules where section 754 election or substantial built-in loss", url: "https://www.law.cornell.edu/uscode/text/26/743" }
  - { type: IRC, ref: "§ 754", title: "Manner of electing optional adjustment to basis of partnership property", url: "https://www.law.cornell.edu/uscode/text/26/754" }
  - { type: IRC, ref: "§ 752", title: "Treatment of certain liabilities", url: "https://www.law.cornell.edu/uscode/text/26/752" }
  - { type: IRC, ref: "§ 1012", title: "Basis of property — cost", url: "https://www.law.cornell.edu/uscode/text/26/1012" }
  - { type: IRC, ref: "§ 1231", title: "Property used in the trade or business and involuntary conversions", url: "https://www.law.cornell.edu/uscode/text/26/1231" }
  - { type: IRC, ref: "§ 1245", title: "Gain from dispositions of certain depreciable property", url: "https://www.law.cornell.edu/uscode/text/26/1245" }
  - { type: IRC, ref: "§ 1250", title: "Gain from dispositions of certain depreciable realty", url: "https://www.law.cornell.edu/uscode/text/26/1250" }
  - { type: IRC, ref: "§ 6050K", title: "Returns relating to exchanges of certain partnership interests", url: "https://www.law.cornell.edu/uscode/text/26/6050K" }
forms: []
related: ["2.1.2.e", "2.1.2.a", "2.1.2.h", "2.1.2.c"]
changelog:
  - { date: "2026-08-21", summary: "Initial draft. Sets out the IRC § 741 default of capital treatment, the IRC § 751(a) recharacterisation of amounts attributable to unrealized receivables and inventory items with the § 751(c) and (d) definitions, the effect of Pub. L. 107-147 § 417(12) in striking the substantial appreciation test from § 741 in 2002 so that it now survives only in § 751(b), the treatment of relieved liabilities as amount realised under § 752, the buyer's cost basis under §§ 742 and 1012 against an unchanged inside basis unless § 754 is elected or § 743(d) applies, the § 743(b) adjustment and the § 743(d)(1) substantial built-in loss threshold, and the § 6050K reporting obligation." }
  - { date: "2026-08-25", summary: "Added a plain-language summary, a decision diagram of the inside-basis adjustment rules, typed scenarios, and glossary marks." }
diagram:
  archetype: "decision"
  caption: "Whether the partnership's inside basis adjusts after a sale of an interest"
  tests:
    - { test: "Is a § 754 election in effect for the partnership?", result: "Inside basis is adjusted under § 743(b) for this transferee", outcome: "pass" }
    - { test: "No election — does the partnership have a substantial built-in loss? (§ 743(d))", result: "A mandatory downward adjustment applies anyway", outcome: "pass" }
    - { test: "Neither applies", result: "Inside basis is unchanged — the buyer may be taxed on pre-purchase appreciation (§ 743(a))", outcome: "fail" }
---

<div class="plain-terms">
Selling a share in a partnership is usually like selling stock: capital gain or loss. But if the
partnership owns certain things — unpaid bills owed to it, unsold stock, or property that would
add extra tax on a sale — part of what the seller gets is taxed as regular income instead. This
page covers that split. It also covers what happens to the buyer's share of the partnership's own
basis in its assets after the sale. It affects anyone buying or selling a share in a partnership.
The price also counts any partnership debt the buyer takes on, not just the cash paid. What it
decides: how much of the price counts as regular income versus capital gain for the seller, and
whether the buyer's basis in partnership assets moves at all.
</div>

Two things make the sale of a partnership interest different from the sale of a share. The first is that
the interest is an entity-level wrapper around assets whose character the Code refuses to let the wrapper
disguise — hence IRC § 751. The second is that the seller's basis includes their share of partnership
debt, so the amount they are treated as receiving includes the relief of that debt. Both effects push in
the same direction: the taxable amount is larger, and more of it is ordinary, than the cash figure
suggests.

## The rule

**The default.** {fig:dispose.capital_gain}

**The exception.** {fig:dispose.hot_assets}

**Which assets are hot.** {fig:dispose.unrealized_receivables}

{fig:dispose.inventory_items}

**And the test that no longer applies here.** {fig:dispose.no_substantial_appreciation}

**Liabilities are part of the price.** {fig:ptr.liabilities}

**The buyer's basis.** {fig:basis.acquired_otherwise}

**But the partnership's basis does not move.** {fig:dispose.no_inside_adjustment}

**Unless it is elected.** {fig:dispose.754_election}

**Or the loss is large enough.** {fig:dispose.substantial_built_in_loss}

**What the adjustment does.** {fig:dispose.743b_adjustment}

**Reporting.** {fig:dispose.6050k}

## Current figures

| Item | Rule | Authority |
| --- | --- | --- |
| Character on sale | {fig:dispose.capital_gain} | IRC § 741 |
| Hot asset recharacterisation | {fig:dispose.hot_assets} | IRC § 751(a) |
| Inventory items defined | {fig:dispose.inventory_items} | IRC § 751(d) |
| No inside adjustment by default | {fig:dispose.no_inside_adjustment} | IRC § 743(a) |
| Substantial built-in loss | {fig:dispose.substantial_built_in_loss} | IRC § 743(d)(1) |

## How it works in practice

Compute the amount realised before anything else, because the commonest error is to use the cash. The
buyer takes over the seller's share of partnership liabilities, so the seller's share is relieved — a
deemed distribution of money under IRC § 752(b) — and it forms part of the amount realised. A partner
selling for cash while carrying a share of partnership debt always realises more than they receive. The
seller's basis also includes that debt, so the two effects partly cancel; but they cancel exactly only
where the debt share and the basis attributable to it are the same figure, which is not generally so.

Then split the amount realised. IRC § 741 says the whole gain is capital *except as otherwise provided in
IRC § 751*, and IRC § 751(a) treats so much of the amount received as is attributable to unrealized
receivables and inventory items as realised from the sale of a non-capital asset. In practice: compute
the ordinary income the seller would have taken had the partnership sold its hot assets at fair value,
report that as ordinary, and treat the rest as capital. The capital portion is the residual, and it can
be a capital *loss* even where there is an overall gain.

The scope of "hot" is much wider than it sounds. Unrealized receivables catch the accounts receivable of
a cash-basis partnership, but the second sentence of the definition also reaches recapture items
(IRC § 751(c)) —
IRC § 1245 property, IRC § 1250 property, mining property and others — to the extent of the recapture.
A partnership owning depreciated equipment has hot assets whether or not it has a single receivable.
Inventory items are wider still, catching anything that would not be a capital asset or IRC § 1231
property in the partnership's hands.

One trap here is a piece of law that changed in 2002 and is still commonly mis-stated. IRC § 741 once
referred to inventory items "which have appreciated substantially in value", and the substantial
appreciation test therefore gated IRC § 751(a). Pub. L. 107-147 struck those words. On a *sale* of an
interest, inventory is hot regardless of how much it has appreciated. The substantial appreciation test
survives only in IRC § 751(b)(1)(A)(ii), which governs certain *distributions* — a genuinely different
provision. Any source applying a substantial appreciation screen to a sale is applying pre-2002 law.

On the buyer's side, two bases now diverge. The buyer takes a cost basis in the interest under
IRC §§ 742 and 1012. The partnership's basis in its assets does not change at all — IRC § 743(a) says so
expressly — so the buyer inherits a share of inside basis that may be far below what they paid. Without
relief, the buyer would be allocated gain on appreciation they bought and paid for.

The relief is the IRC § 754 election, which switches on IRC § 743(b) and adjusts the partnership's inside
basis, but only with respect to the transferee. Two features matter. It is made by the partnership, not
the buyer, so a buyer's protection depends on the partnership's cooperation. And it is not revocable at
will: it applies to all distributions and all transfers in the year filed and in every subsequent year,
which is why partnerships hesitate — a downward adjustment on a later transfer is mandatory once the
election is in place.

IRC § 743(d) supplies a mandatory downward adjustment even without an election, where the partnership has
a substantial built-in loss. The threshold is tested two ways, either on the partnership's aggregate
basis against value or on the loss the transferee would be allocated on a hypothetical sale — the second
test being the one added to stop a partnership avoiding the rule by holding offsetting positions.

## Scenarios

<div class="scenario" data-type="baseline">
<h3>The debt that came with the price</h3>
<p>Ottoline holds a 25 percent interest with an adjusted basis of $50,000, of which $20,000 is her share
of partnership liabilities. She sells the interest for $45,000 in cash, and the buyer takes over her share
of the debt.</p>
<p>Her amount realised is $65,000, not $45,000. The relief of her $20,000 share of partnership liabilities
is treated as a distribution of money under IRC § 752(b) and forms part of what she realises on the sale.
Against her $50,000 {gloss:basis}, that gives a $15,000 gain. Under IRC § 741 it is {gloss:capital-gain},
subject to IRC § 751(a) — so if the partnership holds unrealized receivables or inventory items, some part of the
$15,000 is ordinary and the capital portion is correspondingly smaller. On these facts, with no hot assets
mentioned, the whole $15,000 is capital.</p>
</div>

<div class="scenario" data-type="interaction">
<h3>The capital loss inside a gain</h3>
<p>Fyodor sells his one-third interest in a cash-basis consultancy for $300,000. His outside basis is
$260,000. The partnership's only significant assets are $600,000 of unbilled receivables with no basis and
office furniture worth less than its written-down cost.</p>
<p>His overall gain is $40,000, but that is not what he reports. Under IRC § 751(a) the amount attributable
to his share of the unrealized receivables — $200,000, being a third of $600,000 with no basis to offset —
is treated as realised from the sale of a non-capital asset, so he has $200,000 of ordinary income. The
capital portion is the residual: $100,000 of remaining amount realised against $260,000 of basis, giving a
$160,000 {gloss:capital-loss}. He reports both. A great deal of ordinary income and a large capital loss, from a
transaction that produced $40,000 of economic gain, is the standard shape of a IRC § 751 sale and the
reason the section is worth checking before a sale is priced.</p>
</div>

<div class="scenario" data-type="fails">
<h3>The buyer who paid for basis nobody gave him</h3>
<p>Marguerite buys a 20 percent interest for $400,000. The partnership's assets have an aggregate adjusted
{gloss:basis} of $500,000 and a {gloss:fair-market-value} of $2,000,000, so her share of inside basis is
$100,000. The
partnership has never made a IRC § 754 election. The following year it sells an asset at a large gain.</p>
<p>She is allocated 20 percent of that gain, computed on the partnership's basis rather than on what she
paid, so she is taxed on appreciation that existed before she arrived and that she paid $300,000 for.
IRC § 743(a) is explicit: inside basis is not adjusted on a transfer unless IRC § 754 is elected or
IRC § 743(d) applies. She will eventually recover the $300,000 as a smaller gain or larger loss when she
sells her own interest, so the amount is not lost — but the timing is against her, potentially by
decades. The point to take is that the election belongs to the partnership, so a buyer must negotiate for
it before closing.</p>
</div>

<div class="scenario" data-type="boundary">
<h3>The mandatory adjustment nobody elected</h3>
<p>A real estate partnership holds property with an aggregate adjusted basis of $9,000,000 and a fair
market value of $8,300,000. It has never made a IRC § 754 election and does not want to. A partner sells
their interest to a new investor.</p>
<p>The adjustment applies anyway. Under IRC § 743(d)(1)(A) the partnership has a substantial built-in loss
because its adjusted basis in partnership property exceeds the fair market value of that property by more
than the statutory threshold, and IRC § 743(a) makes the adjustment mandatory in that case whether or not
IRC § 754 is elected. The effect is a downward adjustment to the transferee's share of inside basis, which
is precisely what the partnership was trying to avoid — the provision exists to stop built-in losses being
transferred to buyers who did not economically bear them.</p>
</div>

<div class="callout trap">
<strong>Traps</strong>
<ul>
<li><strong>Amount realised includes relieved debt.</strong> The cash figure is never the answer where the
seller had a share of partnership liabilities.</li>
<li><strong>Substantial appreciation is not a screen on a sale.</strong> Pub. L. 107-147 struck it from
IRC § 741 in 2002; it survives only in IRC § 751(b) for distributions.</li>
<li><strong>Hot assets include recapture.</strong> IRC § 751(c) reaches IRC § 1245 and § 1250 property, so
a partnership with depreciated equipment has hot assets.</li>
<li><strong>Ordinary income first, capital as the residual.</strong> The capital portion can be a loss even
where the overall result is a gain.</li>
<li><strong>Inside basis does not follow the price.</strong> IRC § 743(a) leaves it unchanged unless
IRC § 754 is elected or IRC § 743(d) applies.</li>
<li><strong>The election is the partnership's.</strong> A buyer cannot make it, and it binds the
partnership for every later year.</li>
<li><strong>A large built-in loss triggers the adjustment regardless.</strong> IRC § 743(d) is mandatory
and cuts against the transferee.</li>
</ul>
</div>

## How this has changed

Two amendments define the current shape of this topic.

The first is the 2002 removal of the substantial appreciation test from IRC § 741. Before it, inventory
items were hot on a sale only if they had appreciated substantially in value, and practitioners screened
for that before applying IRC § 751(a). Pub. L. 107-147 § 417(12) struck the words, and inventory is now
hot on a sale whatever its appreciation. The test was not repealed — it remains in IRC § 751(b)(1)(A)(ii)
for distributions — so a source describing it is describing something real, just not something that
applies to a sale. That partial survival is what makes the error durable.

The second is the mandatory basis adjustment for a substantial built-in loss, which converted IRC § 743
from a purely elective regime into one with a compulsory branch. Before it, a partnership could decline to
elect under IRC § 754 and leave a buyer's inside basis untouched in both directions; now the downward
adjustment is imposed where the loss exceeds the threshold, and the second limb of IRC § 743(d)(1) —
testing the loss the transferee would be allocated — was added because the aggregate test alone could be
defeated by offsetting positions.

Neither the IRC § 754 election mechanics nor the IRC § 741 default has otherwise moved.

## Exam focus

Almost every question begins with the amount realised, and almost every distractor is the cash figure.
Add the relieved share of liabilities first, then subtract outside basis — which itself includes that
share, so the arithmetic is not a wash unless the question says so.

The second shape gives a partnership with receivables or inventory and asks for the character of the
gain. Compute the seller's share of the ordinary income embedded in the hot assets, report that as
ordinary, and treat the balance as capital. Where the question offers "all capital gain" it is almost
always testing IRC § 751(a).

For the buyer's side, the question is usually whether inside basis changes. It does not, unless IRC § 754
is elected or the partnership has a substantial built-in loss — and where a question describes a buyer
being taxed on pre-purchase appreciation, the missing element is the election.

## Check yourself

**1.** A partner's adjusted basis in her interest is $80,000, including a $30,000 share of partnership
liabilities. She sells the interest for $70,000 cash, and the buyer assumes her share of the debt. What is
her gain or loss?

*Answer: a $20,000 gain. The amount realised is $70,000 of cash plus the $30,000 of relieved liabilities,
treated as a distribution of money under IRC § 752(b), so $100,000 against an $80,000 basis. Under
IRC § 741 the gain is capital except so far as IRC § 751(a) applies.*

**2.** A partnership holds inventory that has appreciated by 8 percent since acquisition. A partner sells
his interest. Does IRC § 751(a) apply to the inventory?

*Answer: yes. Since Pub. L. 107-147 struck the words "which have appreciated substantially in value" from
IRC § 741 in 2002, inventory items are within IRC § 751(a) on a sale whatever their appreciation. The
substantial appreciation test applies only to certain distributions under IRC § 751(b)(1)(A)(ii).*

**3.** A partner sells her interest for $500,000. Her outside basis is $470,000, and her share of the
ordinary income that would arise if the partnership sold its unrealized receivables at value is $180,000.
What does she report?

*Answer: $180,000 of ordinary income and a $150,000 capital loss. IRC § 751(a) treats the amount
attributable to the receivables as realised from the sale of a non-capital asset. The capital computation
is then the residual $320,000 of amount realised against the $470,000 basis. An overall $30,000 economic
gain produces a large ordinary income and a large capital loss.*

**4.** A buyer pays $600,000 for an interest whose share of partnership inside basis is $150,000. The
partnership has no IRC § 754 election and no substantial built-in loss. What happens to the partnership's
basis in its assets?

*Answer: nothing. IRC § 743(a) provides that the basis of partnership property is not adjusted as the
result of a transfer of an interest unless an IRC § 754 election is in effect or the partnership has a
substantial built-in loss immediately after the transfer. The buyer's outside basis is $600,000 under
IRC §§ 742 and 1012, but her share of inside basis remains $150,000.*

**5.** A partnership's adjusted basis in its property exceeds the fair market value of that property by
$400,000. A partner sells his interest. Is a basis adjustment required?

*Answer: yes. Under IRC § 743(d)(1)(A) the partnership has a substantial built-in loss where its adjusted
basis in partnership property exceeds the fair market value of that property by more than the statutory
threshold, and IRC § 743(a) makes the adjustment mandatory in that case even though no IRC § 754 election
has been made. The adjustment is downward as to the transferee.*
