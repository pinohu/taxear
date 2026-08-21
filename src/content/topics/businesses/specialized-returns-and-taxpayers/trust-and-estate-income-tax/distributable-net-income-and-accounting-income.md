---
title: "Distributable net income and accounting income"
code: "2.3.1.b"
part: 2
domain: "Specialized Returns and Taxpayers"
section: "Trust and estate income tax"
description: "Fiduciary accounting income says what may be distributed and distributable net income says how much is taxable — similar names, different jobs, and both are needed."
status: published
taxYear: 2026
lastReviewed: "2026-08-21"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 641", title: "Imposition of tax", url: "https://www.law.cornell.edu/uscode/text/26/641" }
  - { type: IRC, ref: "§ 642", title: "Special rules for credits and deductions", url: "https://www.law.cornell.edu/uscode/text/26/642" }
  - { type: IRC, ref: "§ 643", title: "Definitions applicable to subparts A, B, C, and D", url: "https://www.law.cornell.edu/uscode/text/26/643" }
  - { type: IRC, ref: "§ 651", title: "Deduction for trusts distributing current income only", url: "https://www.law.cornell.edu/uscode/text/26/651" }
  - { type: IRC, ref: "§ 652", title: "Inclusion of amounts in gross income of beneficiaries of trusts distributing current income only", url: "https://www.law.cornell.edu/uscode/text/26/652" }
  - { type: IRC, ref: "§ 661", title: "Deduction for estates and trusts accumulating income", url: "https://www.law.cornell.edu/uscode/text/26/661" }
  - { type: IRC, ref: "§ 662", title: "Inclusion of amounts in gross income of beneficiaries of estates and trusts accumulating income", url: "https://www.law.cornell.edu/uscode/text/26/662" }
  - { type: IRC, ref: "§ 1202", title: "Partial exclusion for gain from certain small business stock", url: "https://www.law.cornell.edu/uscode/text/26/1202" }
  - { type: IRC, ref: "§ 265", title: "Expenses and interest relating to tax-exempt income", url: "https://www.law.cornell.edu/uscode/text/26/265" }
  - { type: IRC, ref: "§ 1411", title: "Imposition of tax", url: "https://www.law.cornell.edu/uscode/text/26/1411" }
  - { type: IRC, ref: "§ 67", title: "2-percent floor on miscellaneous itemized deductions", url: "https://www.law.cornell.edu/uscode/text/26/67" }
forms: []
related: ["2.3.1.a", "2.3.1.e", "2.3.1.c", "2.3.1.f", "2.3.1.g", "2.3.1.d"]
changelog:
  - { date: "2026-08-21", summary: "Initial draft. Distinguishes the IRC § 643(b) fiduciary accounting income figure, determined by the governing instrument and local law, from the IRC § 643(a) distributable net income figure that caps the distribution deduction and the beneficiaries' inclusion — with the capital gain exclusion in § 643(a)(3), the tax-exempt interest addition in § 643(a)(5), and the pro rata character flow-through in § 661(b)." }
---

Two figures with confusingly similar names do quite different work. Fiduciary accounting income is a
trust law figure that tells the trustee what may be paid out. Distributable net income is a tax
figure that limits the trust's deduction and the beneficiaries' income. A return needs both, and
they are rarely the same number.

## The rule

**Accounting income comes from the instrument, not the Code.** {fig:fai.definition}
(IRC § 643(b)), with {fig:fai.extraordinary}.

**Distributable net income is a modified taxable income.** {fig:dni.definition}
(IRC § 643(a)). Two modifications carry most of the weight:

- **Capital gains.** {fig:dni.capital_gains} (IRC § 643(a)(3)).
- **Tax-exempt interest.** {fig:dni.tax_exempt} (IRC § 643(a)(5)).

**It caps the deduction.** For a simple trust, {fig:dni.simple_cap} (IRC § 651(b)). For a complex
trust or an estate, {fig:dni.complex_deduction} (IRC § 661(a)).

**And it caps and characterises the beneficiary's income.** The beneficiary of a simple trust
includes the income required to be distributed, limited to distributable net income (IRC § 652(a));
the beneficiary of a complex trust or estate includes amounts under the two-tier system in
IRC § 662(a). Either way, {fig:dni.character} (IRC § 661(b); IRC § 652(b)).

## Current figures

| Item | Rule | Authority |
| --- | --- | --- |
| Accounting income | {fig:fai.definition} | IRC § 643(b) |
| Extraordinary dividends | {fig:fai.extraordinary} | IRC § 643(b) |
| Distributable net income | {fig:dni.definition} | IRC § 643(a) |
| Capital gains | {fig:dni.capital_gains} | IRC § 643(a)(3) |
| Tax-exempt interest | {fig:dni.tax_exempt} | IRC § 643(a)(5) |
| Deduction cap, complex | {fig:dni.complex_deduction} | IRC § 661(a) |
| Character flow-through | {fig:dni.character} | IRC § 661(b) |

## How it works in practice

**Compute accounting income from the instrument and local law, and only then look at the Code.**
The trustee's duty to distribute is measured in accounting income: what the instrument calls income,
supplemented by the state's principal and income act where the instrument is silent. That figure
decides how much cash leaves the trust. It does not decide anything about tax.

**Then compute distributable net income as a modified taxable income.** Start with taxable income,
add back the distribution deduction and the exemption, take out capital gains allocated to corpus,
and add tax-exempt interest net of the expenses IRC § 265 disallowed against it. What remains is the
ceiling on the deduction and on the beneficiaries' inclusion.

**The capital gain rule is the one that surprises.** Under IRC § 643(a)(3) gains allocated to corpus
are excluded from distributable net income, so they are taxed to the trust at the compressed
fiduciary rates even in a year when the trust distributed everything it could. That is why capital
gain is usually the largest item on a fiduciary return and why the instrument's treatment of gains
matters so much.

**Tax-exempt interest goes into distributable net income and then comes out of the deduction.** It is
added by IRC § 643(a)(5) so that the ceiling reflects what the trust economically has, and the
distribution deduction is then reduced by the exempt portion so that the exemption is not converted
into a deduction. The beneficiary receives the exempt character through IRC § 652(b) or § 662(b).

**Character flows pro rata unless something specific overrides it.** A distribution consisting of a
single cheque is treated as carrying the same proportion of each class of income as that class bears
to distributable net income. So a beneficiary receiving one payment from a trust with interest,
dividends and tax-exempt income reports all three in proportion — the trustee cannot choose to
distribute only the taxable items.

**Do not expect the two figures to match.** They are computed on different bases and from different
sources: accounting income excludes capital gains that distributable net income sometimes includes,
includes items the Code excludes, and follows a state statute rather than the Code. A trust can have
substantial accounting income and almost no distributable net income, or the reverse.

## Scenarios

<div class="scenario">
<h3>The gain the trust paid tax on</h3>

The Corbett Trust is a simple trust with $50,000 of dividends and interest and $300,000 of capital
gain from selling an investment. Under the instrument and state law the gain is allocated to corpus.
The trustee distributes the whole $50,000 of accounting income to the beneficiary.

Distributable net income excludes the gain. IRC § 643(a)(3) removes gains allocated to corpus that
are not paid, credited or required to be distributed to a beneficiary, so distributable net income is
about $50,000 and the distribution deduction is capped there. The trust reports the $300,000 gain and
pays tax on it at the compressed fiduciary rates, reaching the top bracket almost immediately.

The beneficiary includes the $50,000 with its character preserved. Nothing the trustee could have
done with the cash would have changed the gain's treatment — the allocation to corpus, made by the
instrument and local law, is what put it outside distributable net income.
</div>

<div class="scenario">
<h3>The two figures that did not match</h3>

The Denby Trust holds rental property. For the year it has rents of $90,000 and depreciation of
$34,000. Under the applicable state principal and income act a reserve for depreciation is not
required, so accounting income is $90,000. Taxable income is reduced by the depreciation.

Accounting income and distributable net income diverge. The trustee must distribute $90,000 because
that is the income the instrument requires. Distributable net income is computed from taxable
income, which the depreciation deduction has reduced to about $56,000, so the distribution deduction
is capped there.

The consequence is a beneficiary who receives $90,000 in cash and reports about $56,000, with the
excess treated as a distribution of corpus. Nothing is wrong: the two figures answer different
questions, and the fiduciary must be able to state both.
</div>

<div class="scenario">
<h3>The single cheque with three characters</h3>

The Vane Trust distributes $60,000 to its beneficiary. Distributable net income of $60,000 consists
of $30,000 of taxable interest, $18,000 of qualified dividends and $12,000 of tax-exempt interest.
The trustee, wanting the beneficiary to receive the exempt income, designates the payment as coming
first from the municipal bonds.

The designation has no effect. IRC § 661(b) treats the amount distributed as consisting of the same
proportion of each class of item entering into distributable net income as that class bears to the
total, so the beneficiary reports half as taxable interest, three tenths as qualified dividends and
one fifth as tax-exempt — regardless of which account the cheque was drawn on.

Only a specific allocation required by the governing instrument or local law, having economic effect
independent of tax consequences, can displace the pro rata rule. A trustee's designation in a letter
is not one.
</div>

## Traps

<div class="callout trap">

**Accounting income is not a Code figure.** IRC § 643(b) sends you to the governing instrument and
applicable local law. Computing it from the Code produces the wrong number and the wrong
distribution.

</div>

<div class="callout trap">

**Capital gains allocated to corpus stay with the trust.** IRC § 643(a)(3) excludes them from
distributable net income, so they are taxed at fiduciary rates however much cash was distributed.

</div>

<div class="callout trap">

**Tax-exempt interest is in distributable net income.** It is added by IRC § 643(a)(5) net of
allocable expenses, raising the ceiling — and the distribution deduction is then reduced for it, so
the exemption is preserved rather than doubled.

</div>

<div class="callout trap">

**Character flows pro rata.** IRC §§ 652(b) and 661(b) allocate each class of income across the
distribution in proportion. A trustee cannot direct which classes a particular payment carries.

</div>

## How this has changed

The subchapter J architecture has been stable since 1954, and IRC § 643 has been amended only at the
edges. What has changed around it is the rate structure. When the provisions were written, trust
brackets were wide and accumulating income inside a trust was a genuine planning choice; the
compression of the brackets after 1986 means a trust reaches the top rate at a few thousand dollars
of income, so the practical question in every fiduciary return is now how much can be pushed out to
beneficiaries rather than whether to accumulate.

Two later provisions sharpened that. The IRC § 1411 net investment income tax applies to a trust at
the same low threshold, so undistributed investment income bears it while the same income in a
beneficiary's hands often does not. And the suspension of miscellaneous itemized deductions removed
much of what trusts used to deduct, though IRC § 67(e) preserves deductions for costs paid or
incurred in connection with the administration of an estate or trust that would not have been
incurred if the property were not held in one.

The state principal and income acts have moved more than the Code. Most states have adopted a
version of the Uniform Principal and Income Act permitting the trustee to adjust between principal
and income, or to use a unitrust percentage — which changes accounting income directly, and so
changes what must be distributed, without touching distributable net income at all.

## Exam focus

State both definitions precisely and be able to say which question each answers. Accounting income:
instrument and local law, what may be distributed. Distributable net income: modified taxable
income, the ceiling on deduction and inclusion.

Memorise the IRC § 643(a) modifications in order — no distribution deduction, no exemption, capital
gains allocated to corpus excluded, extraordinary dividends excluded for simple trusts, tax-exempt
interest added net of allocable expenses, and the IRC § 1202 exclusion disregarded.

Know that capital gain allocated to corpus is taxed to the trust, and be ready to explain why the
distribution of all accounting income does not change that.

Know the deduction caps: IRC § 651(b) for a simple trust and the closing words of IRC § 661(a) for a
complex trust or estate.

Finally, know that character flows pro rata under IRC §§ 652(b) and 661(b), and that only a specific
allocation with independent economic effect displaces it.

## Check yourself

**1.** A simple trust has $40,000 of taxable interest, $10,000 of tax-exempt interest, and $2,000 of
trustee fees allocable between them. What is distributable net income, and what is the distribution
deduction?

*Answer: Distributable net income is about $48,400 — taxable income modified by adding back the
distribution deduction and the exemption, and by including the tax-exempt interest net of the
expenses allocable to it under IRC § 643(a)(5), so $10,000 less the fifth of the fees attributable to
it. The distribution deduction is then reduced by the net tax-exempt amount, because the trust
cannot deduct amounts attributable to income it never included. The beneficiary includes the taxable
portion and receives the exempt portion with its character intact.*

**2.** A complex trust has accounting income of $70,000, distributable net income of $52,000, and
distributes $95,000 to its sole beneficiary. What does each party report?

*Answer: The trust deducts $52,000. IRC § 661(a) allows the income required to be distributed
currently plus other amounts properly paid, but caps the deduction at distributable net income. The
beneficiary includes $52,000 under IRC § 662(a), with character allocated pro rata under § 662(b).
The remaining $43,000 is a distribution of corpus, carrying no income to the beneficiary and no
deduction to the trust. Distributing more cash than distributable net income never creates a larger
deduction.*

**3.** Why does a trust that distributed every dollar it received still pay tax on its capital gain?

*Answer: Because IRC § 643(a)(3) excludes from distributable net income gains from the sale or
exchange of capital assets to the extent they are allocated to corpus and are not paid, credited or
required to be distributed to a beneficiary during the year, nor set aside for charitable purposes.
The distribution deduction cannot exceed distributable net income, so a gain outside that figure
cannot be deducted however much cash left the trust. The gain is taxed to the trust at the
compressed fiduciary rates, which is why it usually dominates the return.*

**4.** A trustee wishes a beneficiary to receive only the trust's qualified dividends and issues a
cheque described as a distribution of the dividend account. Does that work?

*Answer: No. IRC § 661(b) — and § 652(b) for a simple trust — treats the amount distributed as
consisting of the same proportion of each class of item entering into distributable net income as
that class bears to the total, so the beneficiary reports a pro rata slice of every class. The
account the cheque was drawn on is irrelevant. Only a specific allocation required by the governing
instrument or by local law, and having economic effect independent of the tax consequences, can
displace the proportionate rule.*

**5.** Why can accounting income exceed distributable net income even where nothing is allocated to
corpus?

*Answer: Because they are computed from different sources and admit different deductions. Accounting
income follows the instrument and the state principal and income act, which may not require a
depreciation reserve, may treat certain receipts as income that the Code does not, and takes no
account of Code-only deductions. Distributable net income starts from taxable income, which is
reduced by depreciation, depletion and administration expenses. A rental trust is the standard
example: the trustee must distribute the full rents as accounting income while distributable net
income is the rents less depreciation, so the beneficiary receives more cash than income.*
