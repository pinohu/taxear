---
title: "Income (e.g., allocations, corpus versus income)"
code: "2.3.1.e"
part: 2
domain: "Specialized Returns and Taxpayers"
section: "Trust and estate income tax"
description: "Local law decides what is income, but only within limits: an instrument calling dividends principal is not respected, while a unitrust definition of total return is."
status: review
taxYear: 2026
lastReviewed: "2026-08-21"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 642", title: "Special rules for credits and deductions", url: "https://www.law.cornell.edu/uscode/text/26/642" }
  - { type: IRC, ref: "§ 643", title: "Definitions applicable to subparts A, B, C, and D", url: "https://www.law.cornell.edu/uscode/text/26/643" }
  - { type: IRC, ref: "§ 651", title: "Deduction for trusts distributing current income only", url: "https://www.law.cornell.edu/uscode/text/26/651" }
  - { type: IRC, ref: "§ 661", title: "Deduction for estates and trusts accumulating income", url: "https://www.law.cornell.edu/uscode/text/26/661" }
  - { type: IRC, ref: "§ 1411", title: "Imposition of tax", url: "https://www.law.cornell.edu/uscode/text/26/1411" }
  - { type: Reg, ref: "§ 1.643(a)-3", title: "Capital gains and losses", url: "https://www.law.cornell.edu/cfr/text/26/1.643(a)-3" }
  - { type: Reg, ref: "§ 1.643(b)-1", title: "Definition of income", url: "https://www.law.cornell.edu/cfr/text/26/1.643(b)-1" }
  - { type: Reg, ref: "§ 1.642(h)-1", title: "Unused loss carryovers on termination", url: "https://www.law.cornell.edu/cfr/text/26/1.642(h)-1" }
forms: []
related: ["2.3.1.b", "2.3.1.a", "2.3.1.f", "2.3.1.c", "2.3.1.d"]
changelog:
  - { date: "2026-08-21", summary: "Initial draft. Sets out the Reg. § 1.643(b)-1 definition of income by reference to the instrument and local law with the traditional-principles limit on what an instrument may do, the recognition of unitrust and power-to-adjust statutes as reasonable apportionments of total return, and the three routes in Reg. § 1.643(a)-3(b) by which capital gains enter distributable net income together with the charitable rule in (c) and the loss netting rule in (d)." }
---

The Code hands the definition of income to state law and then takes back part of what it gave. An
instrument or statute may allocate receipts between income and principal, and the Code will respect
it — but only where the allocation remains within traditional principles or represents a reasonable
apportionment of the trust's total return. Everything difficult in this topic sits on that boundary.

## The rule

**The delegation.** {fig:fai.definition} (IRC § 643(b)).

**And its limit.** {fig:inc.traditional} (Reg. § 1.643(b)-1). So the default holds:
{fig:inc.default_allocation}.

**What local law may do instead.** {fig:inc.reasonable_apportionment}
(Reg. § 1.643(b)-1). Two mechanisms are named as satisfying it:
{fig:inc.unitrust}, and {fig:inc.power_to_adjust}.

**Capital gains are the exception that proves the rule.** They are normally principal and therefore
outside distributable net income, but {fig:inc.gains_in_dni} (Reg. § 1.643(a)-3(b)). A fourth route
is mandatory rather than elective: {fig:inc.gains_charity} (Reg. § 1.643(a)-3(c)).

**Losses.** {fig:inc.capital_losses} (Reg. § 1.643(a)-3(d)).

## Current figures

| Item | Rule | Authority |
| --- | --- | --- |
| Income | {fig:fai.definition} | IRC § 643(b) |
| Traditional principles limit | {fig:inc.traditional} | Reg. § 1.643(b)-1 |
| Default allocation | {fig:inc.default_allocation} | Reg. § 1.643(b)-1 |
| Unitrust statutes | {fig:inc.unitrust} | Reg. § 1.643(b)-1 |
| Power to adjust | {fig:inc.power_to_adjust} | Reg. § 1.643(b)-1 |
| Gains in distributable net income | {fig:inc.gains_in_dni} | Reg. § 1.643(a)-3(b) |
| Capital losses | {fig:inc.capital_losses} | Reg. § 1.643(a)-3(d) |

## How it works in practice

**Start from the instrument, then the state act, then the regulation's limit.** The instrument
controls where it speaks; the state principal and income act fills the gaps; and
Reg. § 1.643(b)-1 disregards an instrument provision that departs fundamentally from traditional
principles. The regulation gives its own example — an instrument directing that all income be paid
out while defining dividends and interest as principal — and the consequence is not that the
provision is ignored for trust law purposes but that the trust is not treated as one required to
distribute all its income currently, so it loses both the higher exemption and simple trust status.

**Understand what a unitrust definition does.** It replaces the traditional receipts-based income
figure with a percentage of the trust's value, which detaches accounting income from what the
portfolio actually yielded. That is the point: a modern portfolio held for total return produces
little traditional income, so an income beneficiary under a traditional definition receives almost
nothing while the remainder grows. The regulation accepts a unitrust in the stated range as a
reasonable apportionment.

**The power to adjust does the same job differently.** Rather than replacing the income definition,
it lets the trustee move amounts between income and principal to fulfil the duty of impartiality.
The regulation accepts it where the trustee invests under the prudent investor standard, the trust
measures distributions by income, and the trustee cannot otherwise administer impartially — the
three conditions the state statutes generally impose.

**Capital gains reach distributable net income by three routes and one of them is a trap.** Allocated
to income is straightforward. Allocated to corpus but *consistently treated* on the books, records
and returns as part of a distribution is a choice that must be made and then kept — the regulation's
word is "consistently", so a fiduciary cannot include gains in one year and exclude them the next.
Allocated to corpus but actually distributed, or used in determining what is distributed, follows
the money rather than the label.

**Where charity is involved the inclusion is compulsory.** If capital gains are paid, permanently
set aside or to be used for IRC § 642(c) purposes so that a charitable deduction is allowed for
them, Reg. § 1.643(a)-3(c) requires them to be in distributable net income. That is not a fiduciary
election; it prevents a deduction for an amount that never entered the computation.

**Net losses at the trust level first.** Capital losses are netted against capital gains at the trust
level before anything else happens, with the single exception of a gain used under paragraph (b)(3)
in determining what a particular beneficiary receives. On final termination the unused carryover
passes to the beneficiaries under Reg. § 1.642(h)-1 rather than being lost.

## Scenarios

<div class="scenario">
<h3>The instrument that redefined income</h3>

The Ashworth Trust directs the trustee to distribute all trust income to the settlor's widow
annually, and separately defines "income" to exclude ordinary dividends and interest, treating them
as additions to principal. The trust holds only dividend-paying equities.

Reg. § 1.643(b)-1 does not accept the definition. Trust provisions that depart fundamentally from
traditional principles of income and principal are generally not recognised, and the regulation
gives this exact example. Dividends and interest are traditional income; calling them principal is
the departure the regulation names.

The consequences are the ones the settlor's draftsman would least have wanted. The trust is not
treated as one required under its governing instrument to distribute all its income currently, so it
is not a simple trust under IRC § 651 and does not qualify for the higher exemption under
IRC § 642(b)(2)(B). It uses IRC § 661 and the lower exemption, and the widow receives nothing the
instrument calls income while the trust accumulates and pays tax at compressed rates.
</div>

<div class="scenario">
<h3>The unitrust that rescued the income beneficiary</h3>

The Petherton Trust holds a portfolio invested for total return: modest dividends, substantial
unrealised appreciation. Under the traditional definition the income beneficiary receives about
1 percent of the trust's value each year while the remainder beneficiaries watch it grow. The
governing state has adopted a statute defining income as a unitrust amount of 4 percent of the fair
market value of the trust assets.

The statute is respected. Reg. § 1.643(b)-1 accepts a state statute providing that income is a
unitrust amount of no less than 3 percent and no more than 5 percent of fair market value, whether
determined annually or averaged over several years, as a reasonable apportionment of the trust's
total return between the income and remainder beneficiaries.

The practical effect is that accounting income becomes 4 percent of value regardless of what the
portfolio yielded, so the trustee distributes that amount and the trust's distribution deduction
follows. Note the interaction: where income is a unitrust amount and the fiduciary has discretion to
allocate gains to income, Reg. § 1.643(a)-3(b)(1) caps the amount so allocated at the excess of the
unitrust amount over distributable net income computed without it.
</div>

<div class="scenario">
<h3>The gain that followed the money</h3>

The Ilsley Trust sells an investment for a $200,000 gain, which under the instrument is allocated to
principal. In the same year the trustee, exercising a discretionary power over principal,
distributes $200,000 to the income beneficiary and records on the trust's books and return that the
distribution consists of the sale proceeds.

The gain is in distributable net income. Reg. § 1.643(a)-3(b)(3) includes a gain allocated to corpus
but actually distributed to the beneficiary or used by the fiduciary in determining the amount
distributed, and (b)(2) includes a gain allocated to corpus but consistently treated on the books,
records and returns as part of a distribution. Either limb reaches this.

So the trust deducts the distribution up to distributable net income, which now includes the gain,
and the beneficiary reports it with its capital character preserved. Had the trustee distributed
$200,000 of accumulated cash instead, and made no connection between the sale and the distribution,
the gain would have stayed with the trust and been taxed at fiduciary rates. The label follows the
fiduciary's own treatment.
</div>

## Traps

<div class="callout trap">

**An instrument may allocate but not redefine.** Reg. § 1.643(b)-1 disregards provisions departing
fundamentally from traditional principles, and the penalty is not confined to the provision: the
trust loses simple status and the higher exemption.

</div>

<div class="callout trap">

**Capital gains are not automatically outside distributable net income.** Three routes in
Reg. § 1.643(a)-3(b) bring them in, and a fourth in (c) requires it where a charitable deduction is
taken for them.

</div>

<div class="callout trap">

**The books-and-records route demands consistency.** A fiduciary treating gains as part of
distributions must do so consistently on the books, records and returns — not year by year as it
suits.

</div>

<div class="callout trap">

**A unitrust caps the discretionary allocation of gains to income.** Where income is a unitrust
amount, gains allocated to income under a discretionary power may not exceed the excess of the
unitrust amount over distributable net income determined without them.

</div>

## How this has changed

The current regulations date from 2004 and were a deliberate accommodation of a change in trust law
rather than in tax law. States had begun adopting the Uniform Principal and Income Act's power to
adjust and, separately, unitrust conversion statutes, both responses to the problem that a portfolio
managed for total return under the prudent investor rule produces very little traditional income.
The Treasury's question was whether an income figure detached from receipts could still be "income"
for IRC § 643(b), and Reg. § 1.643(b)-1 answered yes within the stated bounds.

The same 2004 project produced Reg. § 1.643(a)-3(b), which replaced a far more restrictive earlier
position on when capital gains could enter distributable net income. The three routes are now
settled and are the main planning lever a fiduciary has, because moving gains into distributable net
income moves them out of the compressed fiduciary rates and into the beneficiaries' brackets.

That lever matters more than it did. Trust brackets have been compressed since 1986 and the
IRC § 1411 net investment income tax applies to a trust at the same low threshold, so a gain left
inside the trust bears the top rate and the surtax while the same gain in a beneficiary's hands
often bears neither. Nothing in the post-2024 legislation changes any of this.

## Exam focus

State the delegation and its limit together: income is determined under the instrument and local law,
but provisions departing fundamentally from traditional principles are not recognised, and the
consequence is loss of simple status and the higher exemption.

Know the default allocation — dividends, interest and rents to income, sale proceeds to principal —
and be able to say when local law may depart from it.

Memorise the unitrust range and know that the power to adjust is accepted on the same reasoning.

The three routes in Reg. § 1.643(a)-3(b) are the highest-yield item. Learn them as allocated to
income, consistently treated as part of a distribution, or actually distributed or used in
determining the distribution — and add the compulsory charitable inclusion in (c).

Finally, know that losses net at the trust level and that unused carryovers pass to beneficiaries on
final termination.

## Check yourself

**1.** A trust instrument directs the trustee to pay all income to the life tenant and defines
income to include only rents, treating all dividends and interest as principal. What follows?

*Answer: The definition is disregarded and the trust loses two things. Reg. § 1.643(b)-1 provides
that trust provisions departing fundamentally from traditional principles of income and principal
are generally not recognised, and dividends and interest are traditional income. The trust is
therefore not one that under its governing instrument is required to distribute all its income
currently — so it is not a simple trust for IRC § 651, and it takes the ordinary $100 exemption under
IRC § 642(b)(2)(A) rather than the $300 figure in (B).*

**2.** A state statute defines trust income as 6 percent of the fair market value of the trust
assets. Is that respected?

*Answer: Not on the safe harbour. Reg. § 1.643(b)-1 names a statute providing a unitrust amount of
no less than 3 percent and no more than 5 percent as a reasonable apportionment of total return, and
6 percent is outside the range. That does not automatically make it unreasonable — the governing
test is whether local law provides a reasonable apportionment between the income and remainder
beneficiaries of the trust's total return, including ordinary and tax-exempt income, capital gains
and appreciation — but the taxpayer no longer has the example to rely on and must argue the general
standard.*

**3.** A trustee with discretion over principal sells an asset at a gain, allocates the gain to
corpus, and distributes an equal amount of cash to the beneficiary, recording the connection on the
trust's books and its return. Is the gain in distributable net income?

*Answer: Yes, on two of the three routes. Reg. § 1.643(a)-3(b)(2) includes a gain allocated to
corpus but treated consistently by the fiduciary on the books, records and tax returns as part of a
distribution to a beneficiary, and (b)(3) includes a gain allocated to corpus but actually
distributed to the beneficiary or used in determining the amount distributed. The recorded
connection satisfies the first and the matching distribution satisfies the second. The consequence
is that the gain is taxed to the beneficiary rather than at the trust's compressed rates.*

**4.** A trust realises $80,000 of capital gain and $95,000 of capital loss in the same year, and
uses $30,000 of the gain in determining a distribution to a particular beneficiary. How do the
losses apply?

*Answer: Reg. § 1.643(a)-3(d) requires losses to be netted first at the trust level against gains,
*except* for a gain utilised under paragraph (b)(3) in determining the amount distributed to a
particular beneficiary. So the $30,000 is set aside and enters distributable net income, and the
$95,000 of losses is netted against the remaining $50,000 of gains, leaving a $45,000 net loss at
the trust level. On final termination the unused carryover would pass to the beneficiaries under
Reg. § 1.642(h)-1.*

**5.** Why does the Treasury accept a unitrust definition that bears no relation to what the
portfolio actually earned?

*Answer: Because the alternative produces a result the trust law no longer intends. Under the
prudent investor standard a portfolio is managed for total return, which for a modern equity
portfolio means low dividends and substantial appreciation — so a traditional receipts-based income
definition gives the income beneficiary almost nothing while the remainder beneficiaries take
everything. Reg. § 1.643(b)-1 accepts a unitrust in the stated range, and the power to adjust, as a
reasonable apportionment of the trust's *total return* — the regulation's own words — because both
mechanisms divide the whole economic yield rather than an artefact of how it happened to arise.*
