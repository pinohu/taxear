---
title: "Sale or disposition of property and depreciation recapture"
code: "1.2.3.a"
part: 1
domain: "Income and Assets"
section: "Property, real and personal"
description: "Recapture on real property is almost always zero, and what practitioners call it is a rate ceiling on capital gain. On a foreclosure, one checkbox decides everything."
status: review
taxYear: 2026
lastReviewed: "2026-08-19"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 1", title: "Tax imposed", url: "https://www.law.cornell.edu/uscode/text/26/1" }
  - { type: IRC, ref: "§ 108", title: "Income from discharge of indebtedness", url: "https://www.law.cornell.edu/uscode/text/26/108" }
  - { type: IRC, ref: "§ 168", title: "Accelerated cost recovery system", url: "https://www.law.cornell.edu/uscode/text/26/168" }
  - { type: IRC, ref: "§ 179", title: "Election to expense certain depreciable business assets", url: "https://www.law.cornell.edu/uscode/text/26/179" }
  - { type: IRC, ref: "§ 1001", title: "Determination of amount of and recognition of gain or loss", url: "https://www.law.cornell.edu/uscode/text/26/1001" }
  - { type: IRC, ref: "§ 1231", title: "Property used in the trade or business and involuntary conversions", url: "https://www.law.cornell.edu/uscode/text/26/1231" }
  - { type: IRC, ref: "§ 1245", title: "Gain from dispositions of certain depreciable property", url: "https://www.law.cornell.edu/uscode/text/26/1245" }
  - { type: IRC, ref: "§ 1250", title: "Gain from dispositions of certain depreciable realty", url: "https://www.law.cornell.edu/uscode/text/26/1250" }
  - { type: IRC, ref: "§ 6050J", title: "Returns relating to foreclosures and abandonments of security", url: "https://www.law.cornell.edu/uscode/text/26/6050J" }
  - { type: Reg, ref: "§ 1.1001-2", title: "Discharge of liabilities", url: "https://www.law.cornell.edu/cfr/text/26/1.1001-2" }
  - { type: Form, ref: "1099-A", title: "Instructions for Forms 1099-A and 1099-C", url: "https://www.irs.gov/pub/irs-pdf/i1099ac.pdf" }
forms: []
related: ["1.2.3.b", "1.2.3.c", "1.2.1.f", "1.2.3.f", "1.2.3.i", "1.2.3.d", "1.2.3.e", "1.2.3.g", "1.2.3.h", "1.2.3.j", "1.2.3.k"]
changelog:
  - { date: "2026-08-19", summary: "Initial draft. Sets out the IRC § 1001 computation and the Treas. Reg. § 1.1001-2 treatment of discharged liabilities, the IRC § 1245 recapture formula and its recomputed basis, the IRC § 1250 formula and why § 168(b)(3) leaves it at nothing for modern real property, the 25 percent ceiling on unrecaptured section 1250 gain under § 1(h)(1)(E), the § 1231 netting and five-year lookback, and the § 6050J reporting on Form 1099-A." }
---

Two things about this topic are widely taught wrongly. The first is that gain on a rental building is
subject to "§ 1250 recapture" — for anything placed in service after 1986 it almost never is, because
§ 1250 recaptures only depreciation **in excess of straight line** and straight line is mandatory. What is
actually happening is a 25 percent rate ceiling on capital gain, which is a different provision in a
different part of the Code. The second is that a foreclosure is one transaction. It is often two, and
which it is turns on a single checkbox on the Form 1099-A.

## The rule

**The computation.** Gain is the excess of the amount realized over the adjusted basis provided in
§ 1011; loss is the excess of that adjusted basis over the amount realized (IRC § 1001(a)). The amount
realized is money received plus the fair market value of property other than money received
(§ 1001(b)) — and, by regulation, **includes the amount of liabilities from which the transferor is
discharged as a result of the disposition** (Treas. Reg. § 1.1001-2(a)(1)).

**Nonrecourse and recourse debt part company here.** The disposition of property securing a **nonrecourse**
liability discharges the transferor from it (Reg. § 1.1001-2(a)(4)(i)), so the whole balance enters the
amount realized however little the property is worth — the regulation's own Example 7 produces a
19,000-dollar amount realized on property worth 15,000 dollars. Where the liability is **recourse**, the
amount realized does **not** include amounts that are income from the discharge of indebtedness
(§ 1.1001-2(a)(2)): Example 8 splits a transfer of an asset worth 6,000 dollars against 7,500 dollars of
personal liability into a 6,000-dollar amount realized and 1,500 dollars of discharge income, tested
separately under § 108.

**Section 1245 recapture.** On a disposition of § 1245 property, the amount by which the **lower** of the
recomputed basis or — on a sale, exchange or involuntary conversion — the amount realized, or on any other
disposition the fair market value, exceeds the adjusted basis is **ordinary income**, recognised
notwithstanding any other provision of the subtitle (IRC § 1245(a)(1)). Recomputed basis is adjusted basis
plus all adjustments for depreciation or amortisation allowed or allowable, with deductions under § 179
and its neighbours treated as amortisation, and with "allowed" substituted where the taxpayer proves less
was taken than was allowable (§ 1245(a)(2)(A)–(C)). Section 1245 property is depreciable property that is
personal property, or certain tangible property **not including a building or its structural components**
(§ 1245(a)(3)).

**Section 1250 recapture, and why it produces nothing.** On a disposition of § 1250 property, the
applicable percentage of the lower of the **additional depreciation** attributable to periods after 1975
or the gain is ordinary income (IRC § 1250(a)(1)(A)). The applicable percentage is 100 percent for all
§ 1250 property outside four named housing categories (§ 1250(a)(1)(B)(v)). But additional depreciation,
for property held more than one year, means the depreciation adjustments **only to the extent they exceed
what the straight line method would have produced** (§ 1250(b)(1)) — and § 168(b)(3)(A) and (B) make the
straight line method the applicable method for nonresidential real property and residential rental
property. There is nothing in excess of straight line, so there is nothing to recapture.

**What people mean instead is a rate ceiling.** Unrecaptured section 1250 gain is taxed at 25 percent
(IRC § 1(h)(1)(E)). It is defined as the long-term capital gain, not otherwise ordinary, that **would**
have been ordinary income if § 1250(b)(1) had included all depreciation and the applicable percentage were
100 percent (§ 1(h)(6)(A)(i)). It remains capital gain throughout: it nets against capital losses and it is
not recharacterised. The 25 percent is a maximum rate, so a taxpayer whose ordinary rate is lower pays
the lower rate.

**Both recapture sections stop at the same four doors.** Neither applies to a disposition by gift
(§§ 1245(b)(1), 1250(d)(1)) or, except as § 691 provides, to a transfer at death (§§ 1245(b)(2),
1250(d)(2)). On a transfer whose basis carries over under §§ 332, 351, 361, 721 or 731, recapture is
capped at the gain actually recognised (§§ 1245(b)(3), 1250(d)(3)), and the same capping approach applies
to a § 1031 or § 1033 disposition (§§ 1245(b)(4), 1250(d)(4)).

**Then § 1231 sorts what is left.** Where § 1231 gains for the year exceed § 1231 losses, both are
long-term capital; where they do not, both are ordinary (IRC § 1231(a)(1), (2)). But net § 1231 gain is
ordinary income to the extent of **non-recaptured net § 1231 losses** — the aggregate net § 1231 losses of
the five most recent preceding years, less amounts already recaptured (§ 1231(c)(1), (2)).

**Form 1099-A reports the event, not the tax.** A person who lends money secured by property in a trade or
business, and who acquires an interest in that property in satisfaction of the debt or has reason to know
it has been abandoned, files a return (IRC § 6050J(a)) — not required for a loan to an individual secured
by tangible personal property held neither for investment nor in a trade or business (§ 6050J(b)). Box 2
is the balance of principal outstanding, excluding accrued interest and foreclosure costs; box 4 is the
fair market value; box 5 is a checkbox for whether the borrower was personally liable.

## Current figures

| Item | 2026 |
| --- | --- |
| Gain or loss | {fig:disposition.gain_formula} |
| Amount realized | {fig:disposition.amount_realized} |
| Nonrecourse debt | {fig:disposition.nonrecourse} |
| Recourse debt | {fig:disposition.recourse} |
| Section 1245 recapture | {fig:recapture.1245} |
| Recomputed basis | {fig:recapture.1245_recomputed_basis} |
| Section 1245 property | {fig:recapture.1245_property} |
| Section 1250 recapture | {fig:recapture.1250} |
| Additional depreciation | {fig:recapture.1250_additional_depreciation} |
| On property placed in service today | {fig:recapture.1250_modern_property} |
| Unrecaptured section 1250 gain | {fig:recapture.unrecaptured_1250_gain} |
| Exceptions to both | {fig:recapture.exceptions} |
| Section 1231 | {fig:disposition.1231_netting} |
| Form 1099-A | {fig:disposition.1099a} |

## How it works in practice

On an ordinary sale of a rental building, the sequence is short and the order matters. Compute the gain
under § 1001. Ask whether any of it is § 1250 additional depreciation — on post-1986 property the answer
is no. Identify the depreciation allowed or allowable and treat that much of the gain as unrecaptured
section 1250 gain, carrying a 25 percent ceiling. The remainder is ordinary § 1231 gain or long-term
capital gain depending on the year's § 1231 netting and the five-year lookback. Everything reaches the
return through Form 4797.

Notice what "allowed or allowable" does. Depreciation the taxpayer never claimed still feeds the
recapture computation, because § 1245(a)(2)(A) reaches adjustments "allowed or allowable".
Section 1245(a)(2)(B) offers an escape only where the taxpayer can prove by adequate records that less
was **allowed** than was allowable — a reason to fix a missed depreciation deduction, not ignore it.

On a foreclosure, read box 5 before anything else. If the borrower was personally liable, there are two
computations: a disposition measured against the fair market value in box 4, and a discharge of
indebtedness measured by the balance in box 2 less that value, which then goes through § 108. If the
borrower was not personally liable, there is one computation, the full box 2 balance is the amount
realized, and no discharge income arises at all. A loss on a personal residence is not deductible either
way, but discharge income is still income.

<div class="scenario">
<h3>Scenario 1 — the rental building and the phantom recapture</h3>

Priyanka sells a residential rental building in 2026 for 480,000 dollars. She bought it in 2009 for
330,000 dollars and has taken 130,000 dollars of straight-line depreciation, leaving an adjusted basis of
200,000 dollars.

Her gain under IRC § 1001(a) is 280,000 dollars. Section 1250 produces nothing: § 168(b)(3)(B) required
straight line, so there is no additional depreciation under § 1250(b)(1) and the § 1250(a) amount is zero.
Of the 280,000 dollars, 130,000 is unrecaptured section 1250 gain under § 1(h)(6)(A)(i), carrying the
25 percent ceiling in § 1(h)(1)(E), and 150,000 dollars is ordinary long-term capital gain rate. Both
halves remain **capital** gain and net against any capital losses she has.
</div>

<div class="scenario">
<h3>Scenario 2 — the equipment that goes the other way</h3>

Devon sells a machine for 42,000 dollars. It cost 60,000 dollars, he expensed 60,000 dollars under
IRC § 179, and his adjusted basis is zero.

Recomputed basis is 60,000 dollars, because § 1245(a)(2)(C) treats the § 179 deduction as if it were
amortisation. The lower of recomputed basis (60,000) and the amount realized (42,000) is 42,000, and the
excess over the zero adjusted basis is 42,000 dollars — **all of it ordinary income** under § 1245(a)(1),
recognised notwithstanding any other provision. None of it reaches the § 1231 netting, and none of it is
capital gain.
</div>

<div class="scenario">
<h3>Scenario 3 — one checkbox, two answers</h3>

Ronan loses a rental property to foreclosure in 2026. The lender's Form 1099-A shows 310,000 dollars in
box 2 and 265,000 dollars in box 4. His adjusted basis is 240,000 dollars.

If box 5 is unchecked — no personal liability — Treas. Reg. § 1.1001-2(a)(4)(i) puts the whole 310,000
dollars into the amount realized, and he has a 70,000-dollar gain and no discharge income. If box 5 is
checked, § 1.1001-2(a)(2) limits the amount realized to the 265,000-dollar fair market value, giving a
25,000-dollar gain, **and** 45,000 dollars of discharge of indebtedness income, which is tested separately
under § 108. Same facts, same form, entirely different return.
</div>

<div class="callout trap">

**"Recapture" on a building is nearly always the wrong word.** Section 1250 recaptures only depreciation
above straight line. Say unrecaptured section 1250 gain, and remember it is capital gain with a rate
ceiling.

**The 25 percent figure is a maximum, not a rate.** A taxpayer in a lower bracket pays their own rate;
§ 1(h)(1)(E) caps rather than imposes.

**Depreciation never claimed still counts.** IRC § 1245(a)(2)(A) reaches adjustments allowed **or
allowable**, and subparagraph (B) puts the burden of proving otherwise on the taxpayer.

**Section 1231 losses come back for five years.** A net § 1231 gain is ordinary to the extent of
non-recaptured net § 1231 losses from the five preceding years (§ 1231(c)), which is easy to miss when the
loss year is outside the working papers.
</div>

## How this has changed

**Section 1250 was written for a depreciation system that no longer exists.** Accelerated methods for
buildings were the norm when it was enacted; the modern statute requires straight line for both
nonresidential real property and residential rental property (§ 168(b)(3)(A), (B)). The section is
therefore live, unrepealed and almost always productive of zero. Its four applicable-percentage
categories in § 1250(a)(1)(B)(i) to (iv) all point at housing programmes of the 1960s and 1970s — one of
them refers to § 167(k), long since repealed — and clause (v) sweeps everything else up at 100 percent.
The result is a provision whose detailed machinery is nearly dead text while its shadow, the § 1(h)(6)
definition, does the real work.

**Cost segregation moved the question rather than answering it.** Separating personal property and land
improvements out of a building puts those components under § 1245, where recapture is real and ordinary,
rather than under § 1250, where it is not. The front-end deduction is larger and the back-end character is
worse, and the trade-off only becomes visible on the disposition.

**Bonus depreciation and § 179 have the same effect at a smaller scale.** Every dollar expensed on § 1245
property is a dollar of ordinary income waiting at the disposition. This has not changed in principle, but
the amounts involved have grown by an order of magnitude, so the recapture on a routine equipment sale is
now frequently the largest ordinary item on a small business return.

**The recourse and nonrecourse split has not changed and remains the most misapplied rule here.** Treas.
Reg. § 1.1001-2 dates from 1980 and its Examples 7 and 8 still state the rule exactly. The confusion is
not about the law but about the facts: whether a particular mortgage is recourse is a question of state
law and of the loan documents, and the lender's box 5 is a report of the lender's view, not a
determination.

## Exam focus

Expect a **rental property sale** where the distractors offer § 1250 recapture as ordinary income. The
answer is unrecaptured section 1250 gain at a 25 percent ceiling, and the reason is § 168(b)(3).

Expect **§ 1245 on equipment** with a § 179 or bonus deduction in the facts, testing whether you build the
recomputed basis correctly and take the **lower** of it and the amount realized.

Expect a **Form 1099-A** with box 5 either checked or not, and a question that changes answer on that
fact. Read box 2 as principal only — accrued interest and foreclosure costs are excluded by the
instructions.

Watch for the § 1231(c) five-year lookback, and for a disposition by gift or at death, where neither
recapture section applies at all.

## Check yourself

**1.** A taxpayer sells equipment for 30,000 dollars. Original cost 50,000 dollars, depreciation taken
38,000 dollars, adjusted basis 12,000 dollars. How much is ordinary income?

*Answer: 18,000 dollars. Recomputed basis is 50,000 dollars; the lower of that and the 30,000-dollar
amount realized is 30,000; the excess over the 12,000-dollar adjusted basis is 18,000, ordinary under
IRC § 1245(a)(1). There is no remaining gain.*

**2.** A commercial building placed in service in 2012 is sold at a gain of 400,000 dollars, of which
depreciation allowed was 175,000 dollars. What is recaptured under § 1250?

*Answer: Nothing. IRC § 168(b)(3)(A) required straight line for nonresidential real property, so there is
no additional depreciation within § 1250(b)(1). The 175,000 dollars is unrecaptured section 1250 gain,
capital gain with a 25 percent ceiling under § 1(h)(1)(E).*

**3.** A Form 1099-A shows box 2 of 200,000 dollars, box 4 of 150,000 dollars, box 5 unchecked, and the
property's adjusted basis is 120,000 dollars. What is reported?

*Answer: A gain of 80,000 dollars and no discharge income. Box 5 unchecked means the debt was
nonrecourse, so Treas. Reg. § 1.1001-2(a)(4)(i) puts the full 200,000-dollar balance into the amount
realized.*

**4.** The same facts with box 5 checked. What changes?

*Answer: The amount realized falls to the 150,000-dollar fair market value under Treas.
Reg. § 1.1001-2(a)(2), giving a 30,000-dollar gain, and the 50,000-dollar difference is discharge of
indebtedness income tested under IRC § 108.*

**5.** A taxpayer has a net § 1231 gain of 60,000 dollars this year and had a net § 1231 loss of 25,000
dollars two years ago that has not been recaptured. How is the gain characterised?

*Answer: 25,000 dollars is ordinary income under IRC § 1231(c)(1), because net § 1231 gain is ordinary to
the extent of non-recaptured net § 1231 losses from the five most recent preceding years; the remaining
35,000 dollars is long-term capital gain.*
