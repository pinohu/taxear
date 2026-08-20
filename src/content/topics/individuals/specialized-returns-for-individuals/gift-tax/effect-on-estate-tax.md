---
title: "Effect on estate tax (e.g., Generation skipping transfer tax)"
code: "1.6.2.d"
part: 1
domain: "Specialized Returns for Individuals"
section: "Gift tax"
description: "Gifts do not leave the system. They return to the estate base, the tax on recent ones is added back, and a third tax sits on transfers that skip a generation."
status: review
taxYear: 2026
lastReviewed: "2026-08-20"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 2001", title: "Imposition and rate of tax", url: "https://www.law.cornell.edu/uscode/text/26/2001" }
  - { type: IRC, ref: "§ 2035", title: "Adjustments for certain gifts made within 3 years of decedent's death", url: "https://www.law.cornell.edu/uscode/text/26/2035" }
  - { type: IRC, ref: "§ 2611", title: "Generation-skipping transfer defined", url: "https://www.law.cornell.edu/uscode/text/26/2611" }
  - { type: IRC, ref: "§ 2613", title: "Skip person and non-skip person defined", url: "https://www.law.cornell.edu/uscode/text/26/2613" }
  - { type: IRC, ref: "§ 2631", title: "GST exemption", url: "https://www.law.cornell.edu/uscode/text/26/2631" }
  - { type: IRC, ref: "§ 2641", title: "Applicable rate", url: "https://www.law.cornell.edu/uscode/text/26/2641" }
  - { type: IRC, ref: "§ 2651", title: "Generation assignment", url: "https://www.law.cornell.edu/uscode/text/26/2651" }
  - { type: IRC, ref: "§ 2503", title: "Taxable gifts", url: "https://www.law.cornell.edu/uscode/text/26/2503" }
forms: []
related: ["1.6.2.a", "1.6.2.b", "1.6.2.c", "1.6.2.e", "1.6.1.a"]
changelog:
  - { date: "2026-08-20", summary: "Initial draft. Covers what lifetime gifts do to the estate tax — the IRC § 2001(b)(1)(B) add-back of adjusted taxable gifts and the § 2035(b) gross-up for gift tax paid within three years of death — and the third transfer tax: the § 2611 definitions, the § 2613(a) skip person test, generation assignment by family under § 2651(b) and by age only under § 2651(d), the § 2651(c) and (e) spouse and predeceased parent rules, the flat § 2641 rate and the § 2631 exemption." }
---

Two things about lifetime giving surprise clients who thought a gift ended the matter. The first is that
gifts come back: taxable gifts are added to the estate tax base at death, and gift tax paid on gifts made
in the last three years of life is added to the gross estate on top. The second is that a third tax
exists. The generation-skipping transfer tax applies to transfers that reach two generations down, it is
a flat top-bracket rate rather than a graduated one, and it has its own exemption that must be allocated
rather than simply claimed.

## The rule

**Gifts return to the base.** {fig:estate.tax_computation} A gift removes future appreciation from the
estate; it does not remove the gift.

**And recent gift tax is grossed up.** {fig:gifteffect.gross_up} This is what defeats the deathbed gift:
the money used to pay the gift tax is pulled back into the estate unless the donor lives three more
years.

**The third tax.** {fig:gst.transfers} A direct skip is an outright transfer to a skip person; a taxable
termination and a taxable distribution reach trusts.

**Who is a skip person.** {fig:gst.skip_person}

**How generations are counted — by family, not by age.** {fig:gst.lineal_assignment} A grandchild is two
generations down whatever the ages involved, and a much younger child is one generation down.

**Age decides only for strangers.** {fig:gst.age_assignment} That is where the familiar 37½ years comes
from, and it applies only to someone the family rules do not already place.

**Two rules that stop the tax.** {fig:gst.spouse_assignment} And
{fig:gst.predeceased_parent}

**Two transfers outside the tax entirely.** {fig:gst.excluded_transfers}

**The rate is flat.** {fig:gst.applicable_rate}

**And the exemption must be allocated.** {fig:gst.exemption_mechanics} It is
{fig:estate.gst_exemption} — the same figure as the estate tax exclusion, but a separate amount, and
unlike that one it is not portable between spouses.

## Current figures

| Item | Rule |
| --- | --- |
| Gifts added to the estate base | {fig:estate.tax_computation} |
| Gift tax gross-up | {fig:gifteffect.gross_up} |
| Three-year rule on transfers | {fig:estate.three_year_rule} |
| Generation-skipping transfers | {fig:gst.transfers} |
| Skip person | {fig:gst.skip_person} |
| Generation by family | {fig:gst.lineal_assignment} |
| Generation by age | {fig:gst.age_assignment} |
| Spouses | {fig:gst.spouse_assignment} |
| Predeceased parent | {fig:gst.predeceased_parent} |
| Excluded transfers | {fig:gst.excluded_transfers} |
| Applicable rate | {fig:gst.applicable_rate} |
| Exemption mechanics | {fig:gst.exemption_mechanics} |
| GST exemption amount | {fig:estate.gst_exemption} |
| Basic exclusion amount | {fig:estate.basic_exclusion} |
| Annual exclusion | {fig:estate.annual_exclusion} |
| Qualified transfers | {fig:annualex.qualified_transfer} |

## How it works in practice

**Say what a gift actually achieves.** It moves future growth and future income out of the estate. It
does not move the gifted amount out of the transfer tax base, because § 2001(b)(1)(B) brings it back as
an adjusted taxable gift. Clients told that gifts "use up" exclusion have been given a shortcut that
happens to produce the right number; clients told that gifts escape the estate tax have simply been
misinformed.

**Model the three-year window on any gift large enough to generate tax.** Where gift tax is actually
paid — which now means a client who has exhausted the credit — § 2035(b) adds that tax to the gross
estate if death follows within three years. The strategy of paying gift tax to shrink the estate works
only for a donor who survives the window.

**Test generation by relationship first.** Reach for ages only when the recipient is not a lineal
descendant of a grandparent of the client or the client's spouse. A friend, an employee, a partner's
child: those are the § 2651(d) cases. Family is counted on the tree.

**Check whether a parent has died before assuming a grandchild is a skip person.** Section 2651(e) moves
the grandchild up a generation where their parent predeceased the transfer, and the transfer stops being
a generation-skipping transfer at all.

**Allocate the exemption deliberately.** The exemption is not applied automatically to the transfers
where it does most good, and an allocation once made is irrevocable. The automatic allocation rules
handle simple direct skips; anything involving a trust needs a decision on the Form 709.

**And remember it is not portable.** A surviving spouse can inherit unused basic exclusion through the
portability election. There is no equivalent for the GST exemption — an unused amount dies with the
first spouse, which is a reason for the first estate to allocate rather than leave it.

<div class="scenario">
<h3>The gift that did not shrink the estate</h3>

A client with an exhausted credit gives her son $6,000,000 and pays $2,400,000 of gift tax. She dies
twenty months later with a remaining estate of $9,000,000.

Her gross estate is $11,400,000, not $9,000,000, because § 2035(b) adds the gift tax paid within the
three-year period. And the $6,000,000 gift itself returns to the computation as an adjusted taxable gift
under § 2001(b)(1)(B). What she achieved was to remove twenty months of growth on $6,000,000 from her
estate. Had she lived past the three-year mark, the $2,400,000 of tax would have been out of the estate
permanently, which is the real benefit of paying gift tax early.

</div>

<div class="scenario">
<h3>The 40-year age gap that was not a skip</h3>

A client of 71 has a son of 31, born late in his life, and gives him $500,000.

There is no generation-skipping transfer. The son is a lineal descendant of a grandparent of the
transferor, so § 2651(b) assigns him by counting generations on the family tree — one generation down —
and the 40-year age gap is irrelevant. The 37½ year test in § 2651(d) applies only to an individual whom
the family rules do not place, and a son is placed.

</div>

<div class="scenario">
<h3>The grandchild who was not a skip person</h3>

A woman wants to leave $2,000,000 to her granddaughter. Her son, the granddaughter's father, died two
years ago.

The transfer is not a generation-skipping transfer. Under § 2651(e) a descendant of a parent of the
transferor whose own parent died before the transfer moves up a generation, so the granddaughter is
treated as occupying her father's generation and is one generation down, not two. No exemption
allocation is needed and no chapter 13 tax arises.

</div>

<div class="scenario">
<h3>The tuition that escaped three taxes</h3>

A grandfather pays $70,000 of his granddaughter's medical school tuition directly to the university.

It is not a gift under § 2503(e)(2)(A), so no gift tax and no use of the annual exclusion. It is not a
generation-skipping transfer, because § 2611(b)(1) excludes any transfer that would not be a taxable
gift by reason of § 2503(e) — even though the granddaughter is a skip person. And nothing enters his
estate. A direct payment to the institution is the only routine transaction in the transfer tax system
that is outside all three taxes at once.

</div>

<div class="callout trap">

**Telling a client a gift removes the amount from the estate.** It removes the growth. Section
2001(b)(1)(B) brings the gift itself back as an adjusted taxable gift.

**Forgetting the gross-up.** IRC § 2035(b) adds gift tax paid within three years of death to the gross
estate, and it reaches tax paid by the decedent's spouse on those gifts too.

**Using the 37½ year test on a relative.** It is in § 2651(d), which applies only to an individual not
assigned by the family rules in § 2651(b) and (c).

**Assuming any grandchild is a skip person.** Section 2651(e) moves a grandchild up where the
intervening parent has died before the transfer.

**Treating a much younger spouse as a skip person.** Section 2651(c)(1) assigns anyone ever married to
the transferor to the transferor's own generation.

**Expecting a graduated GST rate.** Section 2641(a) uses the maximum federal estate tax rate multiplied
by the inclusion ratio. There is no bracket structure to work up through.

**Assuming the GST exemption ports to a surviving spouse.** Only the basic exclusion amount does. An
unused GST exemption is lost.

**Assuming an allocation can be revised.** Section 2631(b) makes an allocation irrevocable once made.

</div>

## How this has changed

The generation-skipping tax in its present form dates from 1986, replacing a 1976 version that was
repealed retroactively. Sections 2611, 2613, 2631, 2641 and 2651 have not been amended in substance
since, and Pub. L. 119-21 touched none of them.

What the 2025 Act did was raise the basic exclusion amount, which the GST exemption follows
automatically: § 2631(c) sets the exemption equal to the § 2010(c) basic exclusion amount for the
calendar year, so the exemption is now {fig:estate.gst_exemption} without any amendment to chapter 13.
That is a large practical change delivered entirely by a cross-reference.

The change in emphasis matters more than the change in figures. When the exemption was small, GST
planning was about rationing it. At the current level, very few families will pay the tax, and the risk
has shifted from paying it to *tripping* it — a trust drafted decades ago whose beneficiaries have now
moved a generation down, or an allocation never made because nobody expected the tax to matter. The tax
is rarer and the mistakes are quieter.

## Exam focus

Generation assignment is the reliable question. Work it in order: is the person a lineal descendant of a
grandparent of the transferor or the transferor's spouse — if so, count the tree. Has the person ever
been married to the transferor or to a lineal descendant — if so, take that generation. Only if neither
applies do you reach § 2651(d) and the 12½ and 37½ year bands.

Expect the predeceased parent rule as a fact pattern in which a grandchild's parent has died. Expect the
§ 2611(b)(1) exclusion for direct tuition and medical payments.

On the estate tax side, know that adjusted taxable gifts are added to the base, and know the § 2035(b)
gross-up — including that it reaches gift tax paid by the spouse.

## Check yourself

**1.** A donor pays $900,000 of gift tax on a gift made 14 months before her death. What is the effect on
her gross estate?

*Answer: It is increased by the $900,000. IRC § 2035(b) adds any gift tax paid by the decedent or the
decedent's spouse on gifts made during the 3-year period ending at death.*

**2.** A 68-year-old transfers property to his 26-year-old daughter. Is she a skip person?

*Answer: No. She is a lineal descendant of a grandparent of the transferor, so IRC § 2651(b) assigns her
by counting generations on the family tree — one generation below him. The age bands in § 2651(d) apply
only where the family rules do not assign a generation.*

**3.** A transferor makes a gift to his grandson. The grandson's mother, the transferor's daughter, died
last year. Is this a generation-skipping transfer?

*Answer: No. Under IRC § 2651(e) the grandson is treated as moving up a generation because his parent
died before the transfer, so he is one generation below the transferor and not a skip person.*

**4.** How is the generation-skipping transfer tax rate determined?

*Answer: The applicable rate is the maximum federal estate tax rate multiplied by the inclusion ratio
for the transfer (IRC § 2641(a)). It is flat, not graduated.*

**5.** A grandmother pays her grandson's tuition directly to his college. Is that a generation-skipping
transfer?

*Answer: No. IRC § 2611(b)(1) excludes any transfer that, if made inter vivos, would not be a taxable
gift by reason of § 2503(e) — which covers tuition paid directly to the educational organization.*
