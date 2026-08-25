---
title: "Related party activity"
code: "2.2.4.h"
part: 2
domain: "Business Tax Preparation"
section: "Analysis of financial records"
description: "A disallowed related-party loss is not deferred to the seller but handed to the buyer, and it is lost for good unless the buyer later sells the same property at a gain."
status: published
taxYear: 2026
lastReviewed: "2026-08-21"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 267", title: "Losses, expenses, and interest with respect to transactions between related taxpayers", url: "https://www.law.cornell.edu/uscode/text/26/267" }
  - { type: IRC, ref: "§ 707", title: "Transactions between partner and partnership", url: "https://www.law.cornell.edu/uscode/text/26/707" }
  - { type: IRC, ref: "§ 1239", title: "Gain from sale of depreciable property between certain related taxpayers", url: "https://www.law.cornell.edu/uscode/text/26/1239" }
  - { type: IRC, ref: "§ 1031", title: "Exchange of real property held for productive use or investment", url: "https://www.law.cornell.edu/uscode/text/26/1031" }
  - { type: IRC, ref: "§ 7872", title: "Treatment of loans with below-market interest rates", url: "https://www.law.cornell.edu/uscode/text/26/7872" }
  - { type: IRC, ref: "§ 1091", title: "Loss from wash sales of stock or securities", url: "https://www.law.cornell.edu/uscode/text/26/1091" }
  - { type: IRC, ref: "§ 501", title: "Exemption from tax on corporations, certain trusts, etc.", url: "https://www.law.cornell.edu/uscode/text/26/501" }
  - { type: IRC, ref: "§ 1221", title: "Capital asset defined", url: "https://www.law.cornell.edu/uscode/text/26/1221" }
  - { type: IRM, ref: "4.10.3.10.4", title: "Balance sheet examination techniques — accounts receivable", url: "https://www.irs.gov/irm/part4/irm_04-010-003" }
forms: []
related: ["2.2.4.c", "2.2.4.i", "2.2.3.c", "2.2.4.b", "2.2.4.f", "2.2.5.d"]
changelog:
  - { date: "2026-08-21", summary: "Initial draft. Sets out the IRC § 267(a)(1) loss disallowance and the § 267(a)(2) matching rule for accrued expenses, the § 267(b) relationships with the § 267(c) attribution rules and the narrow § 267(c)(4) family definition, the § 267(d) transferee relief that makes a disallowed loss useless to the seller, the parallel partnership rules in § 707(b), the § 1239 conversion of gain to ordinary income on sales of depreciable property, the § 1031(f) two-year rule on related-party exchanges, and § 7872 on below-market loans." }
  - { date: "2026-08-25", summary: "Added a plain-language summary, glossary marks, and two typed scenarios (boundary, fails) alongside the existing three." }
---

<div class="plain-terms">
Tax law treats a deal between close relatives differently from a sale to a stranger. The same is
true for a deal between an owner and their own business. A loss on that kind of deal is often not
deductible at all. That is true even when the price was completely fair. What matters is simply who
was on the other side. This affects family members, and owners dealing with their own companies or
partnerships. It does not affect sales between people with no such tie. The rules decide whether a
loss can be used now. They also decide whether a gain is taxed at higher, ordinary rates instead of
lower ones. And they decide whether certain tax-free swaps and expense write-offs are allowed at
all.
</div>

Related party rules do not ask whether a transaction was fair. They ask who was on the other side,
and then they disallow, defer or recharacterise without regard to how arm's length the price was.
That is why they are unforgiving: a perfectly priced sale between a shareholder and their company
can still produce a loss nobody ever deducts.

## The rule

**Losses first.** {fig:rp.loss_disallowed} (IRC § 267(a)(1)). Note the words *directly or
indirectly*: routing the sale through a third party does not save it.

**Then timing.** {fig:rp.matching} (IRC § 267(a)(2)). This is the rule that catches an accrual
basis company accruing a bonus or interest to a cash basis owner.

**Who is related.** {fig:rp.relationships} (IRC § 267(b)), with ownership tested through
{fig:rp.attribution} (IRC § 267(c)). The family definition is narrower than intuition suggests:
{fig:rp.family} (IRC § 267(c)(4)).

**What happens to the disallowed loss.** {fig:rp.267d} (IRC § 267(d)(1)). It does not carry over to
the seller and it does not sit in suspense. It goes to the buyer, as a shield against later gain,
and only against gain on that property.

**Partnerships have their own version.** {fig:rp.707b} (IRC § 707(b)(1)), and gain is caught too:
{fig:rp.707b2} (IRC § 707(b)(2)).

**Gain on depreciable property.** {fig:rp.1239} (IRC § 1239(a)).

**Like-kind exchanges.** {fig:rp.1031f} (IRC § 1031(f)(1)), subject to
{fig:rp.1031f_exceptions} (IRC § 1031(f)(2) and (4)).

**Below-market loans.** {fig:rp.7872} (IRC § 7872(a)). And on the records side,
{fig:bs.receivable_credit} — a related party balance in receivables is one of the items
IRM 4.10.3.10.4 directs an examiner to test for adequate stated interest and original issue discount.

## Current figures

| Item | Rule | Authority |
| --- | --- | --- |
| Loss disallowance | {fig:rp.loss_disallowed} | IRC § 267(a)(1) |
| Matching rule | {fig:rp.matching} | IRC § 267(a)(2) |
| Family | {fig:rp.family} | IRC § 267(c)(4) |
| Transferee relief | {fig:rp.267d} | IRC § 267(d)(1) |
| Partnership version | {fig:rp.707b} | IRC § 707(b)(1) |
| Depreciable property gain | {fig:rp.1239} | IRC § 1239(a) |
| Related-party exchange | {fig:rp.1031f} | IRC § 1031(f)(1) |

## How it works in practice

**Test the relationship before testing the price.** None of these provisions has a fairness
exception. A sale at a professionally appraised value between a father and daughter is caught by
§ 267(a)(1) exactly as a sale at a contrived price would be, and the taxpayer's evidence that the
terms were commercial is beside the point.

**Learn the family list by what it excludes.** Brothers and sisters of the whole or half blood, the
spouse, ancestors and lineal descendants — and nothing else. Aunts, uncles, nieces, nephews, cousins,
in-laws and step-relations are all outside § 267(c)(4). Candidates lose marks in both directions:
assuming a nephew is related, and assuming a half-brother is not.

**The disallowed loss changes hands.** This is the single most misunderstood point. The seller does
not defer the loss and cannot use it later; it is gone. What survives is a right in the *buyer* to
reduce a later gain on that same property. If the buyer sells at a loss, or holds forever, or gives
the property away, the disallowed loss is never used by anyone.

**Watch accrued amounts owed to owners at year end.** An accrual method S corporation that accrues
interest to its cash basis sole shareholder gets no deduction until the year the shareholder
includes it. The pair is related throughout, and the mismatch the matching rule exists to prevent is
exactly the one a year-end accrual creates.

**Section 1239 defeats the obvious plan.** Selling a fully depreciated asset to a controlled company
would otherwise convert the seller's gain into capital gain while giving the buyer a fresh
depreciable basis. Section 1239 makes the gain ordinary whenever the property is depreciable in the
transferee's hands, which removes the point of the exercise.

**On an exchange, the two-year clock runs on both sides.** A disposition by either the taxpayer or
the related person within two years of the last transfer unwinds the nonrecognition, and the gain is
taken into account as of the date of that disposition rather than the original exchange. Death,
compulsory conversion and a no-tax-avoidance disposition are the escapes.

## Scenarios

<div class="scenario" data-type="baseline">
<h3>The loss that went to the buyer</h3>

Ridley Holdings sells a warehouse with a basis of $900,000 to a corporation in which its sole
shareholder owns all the stock, for its appraised value of $700,000. Four years later the buyer
sells the warehouse to an unrelated party for $1,050,000.

Ridley's $200,000 loss is disallowed by IRC § 267(a)(1). The appraisal does not help — the provision
has no arm's length exception, and the shareholder's ownership makes both parties persons described
in § 267(b) once the attribution rules in § 267(c) are applied.

On the later sale the buyer has a realised gain of $350,000 against its $700,000 basis. IRC
§ 267(d)(1) recognises the gain only to the extent it exceeds the disallowed loss allocable to the
property, so $200,000 is sheltered and $150,000 is recognised. The relief belongs to the buyer alone,
and had the buyer sold for $650,000 instead, the $200,000 would simply have vanished.
</div>

<div class="scenario" data-type="timing">
<h3>The accrual that waited a year</h3>

Cawdor Engineering, an accrual basis S corporation with a December year end, accrues $80,000 of
management fees payable to its sole shareholder on 31 December of year one and pays them on
15 March of year two. The shareholder is a cash basis taxpayer.

The deduction belongs in year two, not year one. IRC § 267(a)(2) defers it because the payee's
method means the amount is not includible until paid and the two are related at the close of
Cawdor's year. The result is symmetry: the deduction and the income land in the same year.

Note the rule's reach. It is not confined to family or to corporations — § 267(a)(2) operates
wherever the parties are described in § 267(b) at the year end, and partnerships described in
§ 707(b)(1)(B) are treated as § 267(b) persons for this purpose. Note also what it does *not* do: it
defers the deduction, it does not disallow it.
</div>

<div class="scenario" data-type="interaction">
<h3>The exchange that unwound</h3>

Melling Properties exchanges a rental building for a like-kind building owned by a partnership in
which Melling's owner holds a 70 percent profits interest. Eighteen months later the partnership
sells the building it received to an unrelated buyer.

The nonrecognition Melling claimed is denied. IRC § 1031(f)(1) applies where the taxpayer exchanges
with a related person — defined by § 1031(f)(3) by reference to § 267(b) or § 707(b)(1), which the
70 percent profits interest satisfies — and either party disposes within two years of the last
transfer. Melling's gain is taken into account as of the date the partnership sold, not the date of
the original exchange.

None of the exceptions applies: neither party has died, the sale was voluntary, and a sale motivated
by price is not a disposition of which tax avoidance was not a principal purpose in the sense the
statute means. Had the partnership simply waited seven months more, the exchange would have stood.
</div>

<div class="scenario" data-type="boundary">
<h3>Just inside the family, just outside it</h3>

An individual sells depreciated machinery at a loss to his stepbrother — testing the edges of what
counts as {gloss:related-party} activity — and separately sells inventory at a loss to his wife's
brother.

{fig:rp.family} defines the family for § 267(c)(4) as brothers and sisters of the whole or half
blood, spouse, ancestors and lineal descendants. A stepbrother — no blood relationship, only a
parent's remarriage — is outside that list, so the machinery loss is not disallowed under
§ 267(a)(1) on relationship grounds. A brother-in-law is likewise outside it: § 267(c)(4) attributes
by blood and marriage to the taxpayer directly, not by marriage to the taxpayer's sibling. Both sales
sound equally "in the family," and land on opposite sides of a list that is narrower than either
sounds.
</div>

<div class="scenario" data-type="fails">
<h3>Related in substance, not in the statute</h3>

A taxpayer sells land, with a {gloss:fair-market-value} below her adjusted basis, at a loss to a
corporation in which she owns 45 percent of the stock; the remaining 55 percent is owned by
unrelated investors with whom she has no attribution relationship.

IRC § 267(b)(2) reaches an individual and a corporation only where the individual owns, directly or
indirectly, more than 50 percent of the corporation's stock, measured under the § 267(c) attribution
rules. At 45 percent, with no family or entity attribution pulling in more, she is not a related
person under § 267(b) with respect to this corporation, and the loss disallowance under § 267(a)(1)
does not apply on this ground alone. The sale may still be tested under other provisions, but § 267
itself is not the reason to disallow it — a taxpayer who assumes "I own a big piece of this company"
is automatically related has assumed too much.
</div>

## Traps

<div class="callout trap">

**There is no arm's length exception.** IRC § 267, § 707(b), § 1239 and § 1031(f) all turn on the
relationship. Evidence that the price was fair is irrelevant to every one of them.

</div>

<div class="callout trap">

**A disallowed loss does not belong to the seller.** It is not suspended, not carried forward and
not restored on a later transaction. IRC § 267(d) gives the *transferee* a shield against gain on
that property, and if no such gain arises the loss is never used.

</div>

<div class="callout trap">

**The § 267(c)(4) family is short.** Siblings of whole or half blood, spouse, ancestors, lineal
descendants. Nephews, nieces, aunts, uncles, cousins, in-laws and step-relations are outside it —
and half-siblings are firmly inside.

</div>

<div class="callout trap">

**Section 267(a)(2) defers; § 267(a)(1) disallows.** Expenses and interest accrued to a related cash
basis payee are deductible eventually, in the payee's year of inclusion. Losses on sales are gone
from the seller's return permanently.

</div>

## How this has changed

The architecture here is old and has moved mainly at the edges. IRC § 267 in something like its
present form dates from the 1930s, when the loss disallowance was enacted against sales designed to
harvest losses without changing beneficial ownership; the matching rule in § 267(a)(2) was added in
1984 to close the mirror-image mismatch on accrued expenses. The relationships list has been extended
several times, most recently to cover S corporation and C corporation pairings under common
ownership.

Section 1031(f) arrived in 1989 in response to exchanges in which related parties swapped a
high-basis for a low-basis property and the low-basis property was then sold, which extracted the
benefit of nonrecognition without the intended continuity. The anti-abuse provision in § 1031(f)(4)
was drafted broadly enough to reach structures the two-year rule alone would miss.

The most consequential recent change is not to these provisions at all but to what they now apply
to. Since Pub. L. 115-97 confined IRC § 1031 to real property, related-party exchanges of equipment,
vehicles and intangibles no longer arise, and the § 1031(f) analysis has narrowed accordingly.
Meanwhile bonus depreciation permanent at the full statutory rate makes § 1239 more important, since
a related buyer of depreciable property can now recover the whole purchase price immediately — which
is precisely the asymmetry § 1239 was written to prevent.

## Exam focus

Know the § 267(c)(4) family list exactly, in both directions. It is the most reliably tested item
here and the distractors are always the excluded relations.

Distinguish § 267(a)(1) from § 267(a)(2) by their effect: permanent disallowance for losses on
sales, deferral to the payee's year for expenses and interest. Then know that a § 267(a)(1) loss
moves to the transferee under § 267(d) and is available only against gain on that property.

For partnerships, remember that § 707(b)(1) applies the same disallowance on a more-than-50-percent
capital or profits interest, and § 707(b)(2) makes gain ordinary where the property is not a capital
asset in the transferee's hands.

Keep § 1239 and § 707(b)(2) apart. Section 1239 turns on the property being *depreciable* in the
transferee's hands; § 707(b)(2) turns on it being *other than a capital asset*.

For § 1031(f), memorise the two-year period, that a disposition by *either* party starts it, that
the gain is taken into account at the date of the later disposition, and the three exceptions.

## Check yourself

**1.** A taxpayer sells stock at a $40,000 loss to her nephew, and separately sells land at a
$25,000 loss to her half-brother. Which losses are disallowed?

*Answer: Only the land. IRC § 267(c)(4) defines family as brothers and sisters whether by the whole
or half blood, spouse, ancestors and lineal descendants — so a half-brother is squarely within it
and the $25,000 loss is disallowed under § 267(a)(1). A nephew is not on the list and is not a
related party for this purpose, so the $40,000 stock loss is allowed provided nothing else, such as
the wash sale rule, applies. The intuition that a closer-sounding relation is caught and a
half-relation is not gets both answers wrong.*

**2.** A father sells equipment with a basis of $60,000 to his daughter for $95,000. She will use it
in her business. How is his gain taxed?

*Answer: As ordinary income. IRC § 1239(a) treats gain on a sale between related persons as ordinary
income where the property is, in the transferee's hands, of a character subject to the allowance for
depreciation — which equipment used in a business is. The character conversion is the whole point:
without § 1239 the father would take capital gain while the daughter took a stepped-up depreciable
basis. Note that § 1239 has its own definition of related persons in § 1239(b), which is not
identical to § 267(b), so the relationship must be tested under the right provision.*

**3.** An accrual basis partnership accrues $30,000 of rent to a partner holding a 60 percent profits
interest, who reports on the cash method, and pays it four months after year end. When is the
deduction allowed?

*Answer: In the year of payment. IRC § 267(a)(2) defers a deduction where the payee's method means
the amount is not includible until paid and the parties are related at the close of the payer's
year. A partner holding more than 50 percent of the profits interest and the partnership are within
IRC § 707(b)(1)(A), and § 707(b)(1) provides that partnerships described in subparagraph (B) are
treated as § 267(b) persons for § 267(a)(2) purposes. The deduction is not lost — deferred only, to
match the partner's inclusion.*

**4.** Two related companies exchange like-kind real property. Twenty months later one of them is
liquidated and the property distributed. What is the consequence?

*Answer: The nonrecognition is denied to the taxpayer, and the gain or loss is taken into account as
of the date of that disposition rather than the exchange date. IRC § 1031(f)(1) is triggered by a
disposition by *either* party within two years of the last transfer, and a liquidating distribution
is a disposition. The exceptions in § 1031(f)(2) do not reach it: nobody has died, it is not a
compulsory or involuntary conversion, and a liquidation of a related entity holding property received
in a related-party exchange will struggle to establish that neither the exchange nor the disposition
had tax avoidance as a principal purpose.*

**5.** Why does IRC § 267(d) give relief to the buyer rather than restoring the loss to the seller?

*Answer: Because the object of § 267(a)(1) is to stop a loss being realised on a transaction that
does not change the economic position of the related group, while still preventing the same
appreciation being taxed twice. Restoring the loss to the seller would defeat the first purpose;
giving nothing to anyone would achieve it at the cost of taxing the buyer on gain that merely
reverses the seller's disallowed loss. Attaching the shield to the property in the buyer's hands does
both — and accepts, as the price, that the loss disappears entirely if the buyer never sells at a
gain.*
