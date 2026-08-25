---
title: "Trust types (e.g., simple/complex, grantor, irrevocable, tax shelters, foreign)"
code: "2.3.1.a"
part: 2
domain: "Specialized Returns and Taxpayers"
section: "Trust and estate income tax"
description: "Simple and complex are properties of a year rather than of a trust, and a grantor trust is neither, because for income tax purposes it is not a separate taxpayer at all."
status: published
taxYear: 2026
lastReviewed: "2026-08-21"
reviewedBy: "Draft for N. O. review"
authorities:
  - { type: IRC, ref: "§ 641", title: "Imposition of tax", url: "https://www.law.cornell.edu/uscode/text/26/641" }
  - { type: IRC, ref: "§ 642", title: "Special rules for credits and deductions", url: "https://www.law.cornell.edu/uscode/text/26/642" }
  - { type: IRC, ref: "§ 651", title: "Deduction for trusts distributing current income only", url: "https://www.law.cornell.edu/uscode/text/26/651" }
  - { type: IRC, ref: "§ 661", title: "Deduction for estates and trusts accumulating income", url: "https://www.law.cornell.edu/uscode/text/26/661" }
  - { type: IRC, ref: "§ 662", title: "Inclusion of amounts in gross income of beneficiaries of estates and trusts accumulating income", url: "https://www.law.cornell.edu/uscode/text/26/662" }
  - { type: IRC, ref: "§ 1411", title: "Imposition of tax", url: "https://www.law.cornell.edu/uscode/text/26/1411" }
  - { type: IRC, ref: "§ 671", title: "Trust income, deductions, and credits attributable to grantors", url: "https://www.law.cornell.edu/uscode/text/26/671" }
  - { type: IRC, ref: "§ 673", title: "Reversionary interests", url: "https://www.law.cornell.edu/uscode/text/26/673" }
  - { type: IRC, ref: "§ 674", title: "Power to control beneficial enjoyment", url: "https://www.law.cornell.edu/uscode/text/26/674" }
  - { type: IRC, ref: "§ 675", title: "Administrative powers", url: "https://www.law.cornell.edu/uscode/text/26/675" }
  - { type: IRC, ref: "§ 676", title: "Power to revoke", url: "https://www.law.cornell.edu/uscode/text/26/676" }
  - { type: IRC, ref: "§ 677", title: "Income for benefit of grantor", url: "https://www.law.cornell.edu/uscode/text/26/677" }
  - { type: IRC, ref: "§ 7701", title: "Definitions", url: "https://www.law.cornell.edu/uscode/text/26/7701" }
forms: []
related: ["2.3.1.b", "2.3.1.c", "2.3.1.g", "2.3.1.e", "2.3.1.d", "2.3.1.f"]
changelog:
  - { date: "2026-08-21", summary: "Initial draft. Sets out the IRC § 641(b) computation rule and the foreign trust deeming provision, the IRC § 651(a) definition of a simple trust as a description of a year rather than of an instrument, the five grantor trust triggers in IRC §§ 673 through 677 with the IRC § 671 consequence that the items are reported by the owner, and the IRC § 7701(a)(30)(E) court and control tests that decide whether a trust is domestic or foreign." }
  - { date: "2026-08-25", summary: "Added a plain-language summary, a decision diagram of the domestic/foreign test, glossary marks, and typed scenarios (timing, fails, boundary)." }
diagram:
  archetype: "decision"
  caption: "Domestic or foreign — both tests must pass to stay domestic"
  tests:
    - { test: "Can a U.S. court exercise primary supervision over administration?", result: "Yes", outcome: "pass" }
    - { test: "Do U.S. persons control all substantial decisions?", result: "Yes", outcome: "pass" }
---

<div class="plain-terms">
A trust can be sorted three different ways, and each sorting answers a different question. The
first asks whether the trust pays its own tax, or whether the person who created and funded it
pays instead. The second asks whether the trust owes tax only on money it kept, or also on money
it gave to beneficiaries that year. The third asks whether the trust counts as based in the United
States or somewhere else. These questions matter for anyone who sets up a trust, manages one as a
trustee, or receives money from one. They decide who owes the tax, how much income is exempt, and
what the trust must report each year.
</div>

Three classifications operate on a trust at once and they answer different questions. Grantor or
non-grantor decides *whether there is a taxpayer*. Simple or complex decides *which distribution
deduction applies for the year*. Domestic or foreign decides *what is taxed and what is reported*.
Treating any of them as a permanent label of the instrument is the reliable way to get the answer
wrong.

## The rule

**A non-grantor trust is a taxpayer.** {fig:tr.taxable_income} (IRC § 641(b)).

**Simple describes a year.** {fig:tr.simple} (IRC § 651(a)). A trust that satisfies the terms test
but distributes corpus in a year is complex for that year, and simple again the next. A trust with a
charitable provision in its instrument is never simple in any year.

**A grantor trust is not a separate taxpayer.** {fig:tr.grantor_effect} (IRC § 671). Five
provisions can produce that result:

- **Reversionary interest.** {fig:tr.reversionary} (IRC § 673(a)).
- **Power to control beneficial enjoyment.** {fig:tr.power_disposition} (IRC § 674(a)).
- **Administrative powers.** {fig:tr.admin_powers} (IRC § 675).
- **Power to revoke.** {fig:tr.revocable} (IRC § 676(a)).
- **Income for the grantor's benefit.** {fig:tr.income_to_grantor} (IRC § 677(a)).

**Domestic or foreign.** A trust is domestic only if a court within the United States can exercise
primary supervision over its administration *and* one or more United States persons have authority
to control all substantial decisions — IRC § 7701(a)(30)(E). Both tests must be met; failing either
makes the trust foreign, and IRC § 641(b) then treats it as a non-resident alien individual.

## Current figures

| Item | Rule | Authority |
| --- | --- | --- |
| Computation | {fig:tr.taxable_income} | IRC § 641(b) |
| Simple trust | {fig:tr.simple} | IRC § 651(a) |
| Grantor trust consequence | {fig:tr.grantor_effect} | IRC § 671 |
| Reversionary interest | {fig:tr.reversionary} | IRC § 673(a) |
| Power to revoke | {fig:tr.revocable} | IRC § 676(a) |
| Income for grantor | {fig:tr.income_to_grantor} | IRC § 677(a) |
| Administrative powers | {fig:tr.admin_powers} | IRC § 675 |

## How it works in practice

**Ask the grantor question first, because it can end the analysis.** If the trust is a grantor trust
in whole, there is no separate taxable income, no distributable net income question and no
distribution deduction — the items appear on the grantor's own return. Everything else in this
section presupposes a non-grantor trust.

**The ordinary revocable living trust is a grantor trust for a simple reason.**
IRC § 676(a) treats the grantor as owner of any portion where the power to revest title is
exercisable by the grantor or a non-adverse party. A revocable trust is revocable by definition, so
the section applies and the trust is disregarded while the grantor lives. On the grantor's death the
power lapses, the trust becomes irrevocable, and it becomes a taxpayer for the first time.

**Do not equate irrevocable with non-grantor.** They are different questions.
IRC §§ 673, 674, 675 and 677 can all make an irrevocable trust a grantor trust — a retained
reversion above the statutory threshold, a retained power over beneficial enjoyment, a power to
substitute assets in a non-fiduciary capacity, or income that may be applied to premiums on the
grantor's life insurance. Intentionally defective grantor trusts are drafted to be irrevocable for
estate tax purposes and grantor trusts for income tax purposes, on exactly this distinction.

**Test simple or complex each year on the facts of that year.** The terms test in IRC § 651(a) is
about the instrument; the second sentence is about what actually happened. A trust required to
distribute all income currently, with no charitable provision, is simple in a year in which it
distributes only income, and complex in a year in which it also distributes corpus. The consequence
is which deduction section applies — IRC § 651 or IRC § 661 — and the exemption amount.

**A grantor trust can be partial.** IRC § 671 speaks of a *portion* of a trust, and the remaining
portion stays subject to the ordinary rules. A trust in which the grantor retained an interest in
one asset is a grantor trust as to that asset and a taxpayer as to the rest, which produces a return
reporting both.

**Check the foreign trust tests separately and remember both must be met.** A trust administered
abroad fails the court test; a trust administered domestically but with a foreign protector holding
a veto over substantial decisions fails the control test. Either failure makes the trust foreign,
with a materially different tax and reporting regime.

## Scenarios

<div class="scenario" data-type="timing">
<h3>The trust that was simple in one year and not the next</h3>

The Harkness Trust requires all income to be distributed to the settlor's daughter annually and
contains no charitable provision. In year one it distributes $42,000 of income and nothing else. In
year two it distributes the same income plus $150,000 of {gloss:corpus} to fund a house purchase.

It is a simple trust in year one and a complex trust in year two. IRC § 651(a) requires both that
the terms provide for current distribution of all income and no charitable provision, *and* that the
trust does not in fact distribute amounts other than income for the year. Distributing corpus fails
the second limb for that year only.

The consequences are mechanical rather than dramatic. Year one uses the IRC § 651 distribution
deduction and the simple trust exemption; year two uses IRC § 661 and the complex trust exemption,
and the tier system in IRC § 662 allocates distributable net income between the income beneficiary
and the corpus distribution. Nothing about the instrument changed.
</div>

<div class="scenario" data-type="fails">
<h3>The irrevocable trust that was still the grantor's</h3>

A settlor creates an {gloss:irrevocable-trust} for her children and retains, in a non-fiduciary capacity, a
power to reacquire trust assets by substituting property of equivalent value. She has no power to
revoke, no reversion, and no right to income.

The trust is a {gloss:grantor-trust}. IRC § 675(4)(C) treats a power of administration exercisable in a
non-fiduciary capacity — including a power to reacquire the trust corpus by substituting other
property of an equivalent value — as making the grantor the owner. Irrevocability is irrelevant to
that provision, which is precisely why the power is used.

The result is that the settlor reports the trust's income under IRC § 671 and pays the tax, which
lets the trust grow without the tax drag, while the assets are outside her estate. That is
intentional, and it turns entirely on the fact that irrevocable and non-grantor are different
questions.
</div>

<div class="scenario" data-type="boundary">
<h3>The trust that became foreign</h3>

A domestic trust is administered by a bank in Delaware under Delaware law. Its instrument is amended
to appoint a protector resident abroad with power to veto investment decisions, distributions and
the removal of trustees.

The trust may now be foreign. IRC § 7701(a)(30)(E) requires both that a court within the United
States be able to exercise primary supervision over the administration *and* that one or more United
States persons have authority to control all substantial decisions. The court test is still met; the
control test is not, because a veto over investments, distributions and trustee removal is control
over substantial decisions held by a person who is not a United States person.

The consequences are severe and immediate. Under IRC § 641(b) a foreign trust is treated as a
non-resident alien individual, the withholding and reporting regime changes, and the change in
status is itself an event with consequences. This is a drafting decision with a tax outcome that
nobody in the room may have intended.
</div>

## Traps

<div class="callout trap">

**Simple and complex describe a year, not an instrument.** A trust meeting the terms test is complex
for any year in which it distributes amounts other than income, and simple again afterwards. A trust
whose instrument permits charitable distributions is never simple.

</div>

<div class="callout trap">

**Irrevocable does not mean non-grantor.** IRC §§ 673, 674, 675 and 677 each make an irrevocable
trust a grantor trust on their own terms, and the whole intentionally-defective structure depends on
that.

</div>

<div class="callout trap">

**Grantor status can be partial.** IRC § 671 attributes only the items of the *portion* owned; the
rest of the trust remains a taxpayer. A return can report both.

</div>

<div class="callout trap">

**The foreign trust definition is conjunctive.** Both the court test and the control test must be
satisfied for a trust to be domestic. Failing either — including by giving a non-United States
person a veto over substantial decisions — makes it foreign.

</div>

## How this has changed

The grantor trust rules date from 1954 and were written to stop income splitting when individual
rates were steeply progressive and trust brackets were wide. Their function inverted after 1986,
when trust rates were compressed so that a trust reaches the top bracket at a very low level of
income: today grantor status is usually sought rather than avoided, because having the grantor pay
the tax is a transfer to the beneficiaries that is not itself a gift. The statutory text has barely
changed; what it is used for has reversed entirely.

The definition of a domestic trust was rewritten in 1996, replacing a facts-and-circumstances test
with the two-part court and control test now in IRC § 7701(a)(30)(E). That change made status
determinable in advance and simultaneously made it easy to lose through drafting, since a single
foreign veto-holder defeats the control test.

The compression of the rate brackets has continued through indexation without ever being reversed,
and the IRC § 1411 net investment income tax applies to a trust at a threshold far below the
individual one. Both make distributions to beneficiaries more attractive than accumulation for
almost every trust, which is the practical background to everything in this section.

## Exam focus

Learn the three classifications as three separate questions and answer them in order: grantor or
not, then simple or complex for the year, then domestic or foreign.

Know the IRC § 651(a) test in both its limbs — the terms test and the what-actually-happened test —
and that a charitable provision defeats simple status permanently.

Memorise the five grantor trust sections by what triggers each: a reversion above the threshold,
a power over beneficial enjoyment, administrative powers, a power to revoke, income for the
grantor's benefit. Expect a question giving one retained power and asking for the consequence.

Know that IRC § 671 attributes the items of the owned portion to the owner, and that the attribution
can be partial.

Finally, state the foreign trust test as two conjunctive conditions, and know that failing either
makes the trust foreign and brings IRC § 641(b)'s non-resident alien treatment with it.

## Check yourself

**1.** A trust's instrument requires all income to be distributed annually and permits the trustee to
make charitable gifts from corpus at its discretion. No charitable gift has ever been made. Is it a
simple trust?

*Answer: No, and it never can be. IRC § 651(a)(2) requires that the terms of the trust *do not
provide* that any amounts are to be paid, permanently set aside or used for the purposes specified
in IRC § 642(c). The test is on the terms, not on what the trustee has done, so a discretionary
charitable power in the instrument defeats simple status in every year whether or not it is
exercised. The trust uses IRC § 661 and the complex trust exemption throughout.*

**2.** A grantor creates an irrevocable trust and retains a reversion worth 4 percent of the value of
the trust at inception. Is she treated as the owner?

*Answer: Not under IRC § 673(a), which requires the value of the reversionary interest to exceed
5 percent of the value of the portion as of the inception of that portion. Four percent is below the
threshold, so the reversion alone does not make her an owner. The other four grantor trust sections
still have to be checked — a retained power over beneficial enjoyment under § 674, an administrative
power under § 675, or income that may be applied for her benefit under § 677 would each produce the
result independently.*

**3.** Why is an ordinary revocable living trust not required to file its own return during the
settlor's lifetime?

*Answer: Because IRC § 676(a) treats the grantor as owner of any portion where the power to revest
title in the grantor is exercisable by the grantor or a non-adverse party, and a revocable trust is
by definition subject to such a power. IRC § 671 then attributes the trust's items of income,
deduction and credit to the grantor, who reports them on their own return. There is no separate
taxable income to report. On the grantor's death the power lapses, the trust becomes irrevocable,
and it becomes a taxpayer.*

**4.** A domestically administered trust gives a trustee resident in the United States all
discretionary powers, but requires the consent of the settlor's brother, who lives abroad, before
any distribution may be made. Domestic or foreign?

*Answer: Foreign. IRC § 7701(a)(30)(E) requires both that a court within the United States be able
to exercise primary supervision over the administration and that one or more United States persons
have authority to control *all* substantial decisions. Distributions are a substantial decision, and
a consent requirement means the domestic trustee does not control it alone. The court test is met
and the control test is not, and because the definition is conjunctive that is enough. IRC § 641(b)
then treats the trust as a non-resident alien individual.*

**5.** How can a single trust be both a grantor trust and a taxpayer in the same year?

*Answer: Because IRC § 671 operates on a *portion* of a trust rather than on the trust as a whole.
Where the grantor is treated as owner of one portion — say a particular asset over which a power was
retained — the items attributable to that portion are reported by the grantor, and the section says
expressly that any remaining portion is subject to subparts A through D. So the trust files a return
reporting the non-grantor portion and provides the grantor with information about the portion they
are treated as owning. Partial grantor status is common and is easy to miss because the instrument
looks like an ordinary irrevocable trust.*
