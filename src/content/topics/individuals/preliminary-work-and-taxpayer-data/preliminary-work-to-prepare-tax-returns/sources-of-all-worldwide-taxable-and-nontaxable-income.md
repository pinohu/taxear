---
title: "Sources of all worldwide taxable and nontaxable income"
code: "1.1.1.f"
part: 1
domain: "Preliminary Work and Taxpayer Data"
section: "Preliminary work to prepare tax returns"
description: "Gross income is everything unless a section says otherwise. The intake job is a sweep of the taxpayer's whole year, not a reconciliation of the forms that arrived."
status: review
taxYear: 2026
lastReviewed: "2026-08-19"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 61", title: "Gross income defined", url: "https://www.law.cornell.edu/uscode/text/26/61" }
  - { type: IRC, ref: "§ 86", title: "Social security and tier 1 railroad retirement benefits", url: "https://www.law.cornell.edu/uscode/text/26/86" }
  - { type: IRC, ref: "§ 102", title: "Gifts and inheritances", url: "https://www.law.cornell.edu/uscode/text/26/102" }
  - { type: IRC, ref: "§ 103", title: "Interest on State and local bonds", url: "https://www.law.cornell.edu/uscode/text/26/103" }
  - { type: IRC, ref: "§ 108", title: "Income from discharge of indebtedness", url: "https://www.law.cornell.edu/uscode/text/26/108" }
  - { type: IRC, ref: "§ 224", title: "Qualified tips", url: "https://www.law.cornell.edu/uscode/text/26/224" }
  - { type: IRC, ref: "§ 225", title: "Qualified overtime compensation", url: "https://www.law.cornell.edu/uscode/text/26/225" }
  - { type: IRC, ref: "§ 6050W", title: "Returns relating to payments made in settlement of payment card and third party network transactions", url: "https://www.law.cornell.edu/uscode/text/26/6050W" }
  - { type: IRC, ref: "§ 6051", title: "Receipts for employees", url: "https://www.law.cornell.edu/uscode/text/26/6051" }
  - { type: Reg, ref: "§ 1.1-1", title: "Income tax on individuals", url: "https://www.law.cornell.edu/cfr/text/26/1.1-1" }
  - { type: Statute, ref: "Pub. L. 119-21", title: "An Act to provide for reconciliation, title VII" }
forms: []
related: ["1.1.1.c", "1.1.1.g", "1.1.1.o", "1.1.1.a", "1.2.1.a", "1.2.1.b", "1.2.1.c", "1.2.1.d", "1.2.1.e", "1.2.1.f"]
changelog:
  - { date: "2026-08-19", summary: "Initial draft. Records the retroactive restoration of the IRC § 6050W(e) reporting threshold by Pub. L. 119-21 § 70432, the new IRC § 6051(a)(18) and (19) statement items, and the expiry of the IRC § 108(a)(1)(E) principal residence exclusion for discharges after 2025." }
---

Gross income means all income from whatever source derived. Everything else in this area is an
exception to that sentence, and the exceptions live in named sections. That ordering is the whole
method of the intake interview: you are not reconciling the forms that arrived in the client's
mailbox, you are sweeping a year of economic activity and then asking, item by item, whether a
section takes any of it back out.

## The rule

**The base rule and its list.** Gross income means all income from whatever source derived,
**including (but not limited to)** the enumerated items (IRC § 61(a)). The parenthetical matters more
than the list: the enumeration is illustrative, so an item's absence from it proves nothing. The list
runs compensation for services including fees, commissions and fringe benefits; gross income derived
from business; gains from dealings in property; interest; rents; royalties; dividends; annuities;
income from life insurance and endowment contracts; pensions; income from discharge of indebtedness;
distributive share of partnership gross income; income in respect of a decedent; and income from an
interest in an estate or trust. Items specifically **included** are in part II beginning at § 71;
items specifically **excluded** are in part III beginning at § 101 (IRC § 61(b)).

**"Worldwide" is not rhetoric.** All citizens of the United States, **wherever resident**, and all
resident alien individuals are liable to the income taxes imposed by the Code **whether the income is
received from sources within or without the United States** (Reg. § 1.1-1(b)). The same paragraph
carries the exceptions that prove the rule: a nonresident alien who is a bona fide resident of a
§ 931 possession or Puerto Rico for the entire taxable year is taxed like a resident alien except as
§ 931 or § 933 provides for possession-source income, and nonresident aliens generally are reached
through §§ 871 and 877 instead.

**"Nontaxable" describes three different mechanisms**, and conflating them produces wrong returns.
Some receipts are **excluded** and never enter gross income at all — the value of property acquired
by gift, bequest, devise or inheritance (IRC § 102(a)), and interest on a State or local bond (IRC
§ 103(a)). Some are **partially included** on a formula — social security benefits enter gross income
in an amount that depends on other income and can reach a statutory ceiling (IRC § 86(a)). And some
are **included and then deducted**, which looks like an exclusion on the bottom line but behaves
quite differently: qualified tips and qualified overtime compensation are in gross income as
compensation and are then removed by a deduction (IRC §§ 224, 225).

**The two exclusions above both have a second sentence.** Section 102(a) excludes the gift; § 102(b)
declines to exclude **the income from the property** given, and where the gift itself is of income
from property, that income is not excluded either. Section 103(a) excludes State and local bond
interest; § 103(b) withdraws the exclusion for a private activity bond that is not a qualified bond,
an arbitrage bond, and a bond not in registered form.

**Information returns are a floor on what you must report, never a ceiling.** A third party
settlement organization must report a participating payee's third party network transactions only
where **both** a dollar threshold and a transaction-count threshold are exceeded (IRC § 6050W(e)(1),
(2)). Nothing about falling under those thresholds makes the income non-taxable. On the employment
side the wage statement now carries two additional items: the total cash tips reported under § 6053(a)
together with the occupation described in § 224(d)(1), and the total qualified overtime compensation
as defined in § 225(c) (IRC § 6051(a)(18), (19)).

## Current figures

| Item | 2026 |
| --- | --- |
| Enumerated items in the gross income definition | {fig:income.61_items} |
| Third party network reporting threshold | {fig:info.1099k_threshold} |
| Social security base amount | {fig:ss.base_amount} |
| Social security adjusted base amount | {fig:ss.adjusted_base_amount} |
| Social security inclusion ceiling | {fig:ss.inclusion_ceiling} |

## How it works in practice

Sweep by activity, not by document. The questions that find unreported income are about what the
taxpayer *did*: did you work for anyone, did you sell anything, did you rent anything out, did anyone
pay you in cash, did you own any part of a business, did anyone forgive a debt, did you have an
account or asset abroad, did a relative die. Each of those maps to an item in § 61(a) or to a part II
inclusion, and each is a question a client can answer without knowing any tax law.

Then treat every form that did arrive as a cross-check on the sweep rather than the sweep itself.
The reporting thresholds are the reason: a client with substantial platform income can be under both
§ 6050W thresholds and receive nothing, and the income is fully taxable either way. The direction of
the error also matters for the practitioner — the return that omits income the Service can see from a
matching document produces a notice, but the return that omits income nobody reported is the one that
carries the larger exposure if it is later found.

For the excluded categories, ask the second question. A client who says "it was an inheritance"
usually means the corpus, and § 102(b) means the rent, interest and dividends the inherited property
threw off during the year are not excluded. A client who says "it's municipal, so it's tax-free"
usually means a fund holding many bonds, and § 103(b) means part of the interest may not qualify —
the fund's own year-end statement is the place that tells you.

On the worldwide side, the interview has to reach income that never touched a United States payer:
foreign employment, a foreign pension, rent on a property abroad, interest on a foreign account. Reg.
§ 1.1-1(b) makes all of it reportable for a citizen or resident alien regardless of where it arose or
whether any information return exists.

<div class="scenario">
<h3>The tax-free fund that was not entirely tax-free</h3>

Beatriz holds a state municipal bond fund and brings a statement showing $6,400 of interest. She
tells you it is tax-free.

Most of it is. Interest on a State or local bond is excluded (IRC § 103(a)), but § 103(b) withdraws
the exclusion for a private activity bond that is not a qualified bond, for an arbitrage bond, and for
a bond not in registered form. The fund's year-end tax statement breaks the distribution into
components, and $310 of it is interest on private activity bonds.

Two things follow. That $310 is includible, so "tax-free" was wrong as a statement about the whole
distribution. And the excluded portion still has to be reported on the return as tax-exempt interest,
because other computations reference it — the § 86 formula for social security benefits is built on a
figure that adds tax-exempt interest back in.
</div>

<div class="scenario">
<h3>The inheritance and the rent it produced</h3>

Tomas inherited a duplex from his aunt in March. He collected $14,700 of rent for the rest of the
year and says the whole thing was an inheritance, so none of it is taxable.

The duplex is excluded from gross income under IRC § 102(a) — the value of property acquired by
bequest or inheritance does not enter gross income, whatever the property is worth. The rent is not.
Section 102(b)(1) provides that subsection (a) does not exclude the income from any property referred
to in subsection (a), and rent is § 61(a)(5) income like any other rent.

The intake follow-up is about basis rather than income: because the property came from a decedent,
its basis and its depreciation start over, and getting that wrong costs more over the holding period
than the first year's rent is worth.
</div>

<div class="scenario">
<h3>The platform seller with no form</h3>

Priya sold handmade goods through an online marketplace all year. Her gross receipts were $18,300
across roughly 140 sales. No Form 1099-K arrived and she assumes that settles it.

It does not. IRC § 6050W(e) requires the settlement organization to report only where **both** the
dollar threshold is exceeded **and** the transaction count is exceeded. She is under both, so the
platform had no filing obligation — and that has no bearing on whether the receipts are income. They
are gross income derived from business (IRC § 61(a)(2)), reportable in full on a Schedule C with her
cost of goods and expenses against them.

Change one fact and the reporting flips without the tax changing at all: had she made 240 sales
totalling $22,000, a Form 1099-K would have issued. The return is prepared the same way either way.
</div>

<div class="callout trap">
<p class="callout-label">Traps</p>

- **The § 61(a) list is illustrative.** "Including (but not limited to)" means an item's absence from
  the list is not an argument for exclusion. Exclusions come from named sections.
- **Alimony is no longer in § 61(a).** It was struck by Pub. L. 115-97 § 11051(b)(1)(A), so for a
  post-2018 instrument the recipient does not include it. For a pre-2019 instrument not modified to
  adopt the new rule, the old treatment continues.
- **A gift is excluded; the income from the gift is not** (IRC § 102(b)).
- **Not all municipal interest is excluded** (IRC § 103(b)), and the excluded part is still reported —
  it feeds other computations.
- **No information return does not mean no income.** The § 6050W(e) thresholds are conditions on the
  *payer's* filing duty.
- **Social security is not exempt.** IRC § 86 includes up to a statutory ceiling of benefits, and the
  base amounts are **not indexed**, so the proportion included rises over time by itself.
- **Tips and overtime are deductions, not exclusions.** They are in gross income under § 61(a)(1) and
  removed by §§ 224 and 225, so they still count as compensation wherever a rule references gross
  income or adjusted gross income.

</div>

## How this has changed

**The Form 1099-K threshold never fell.** Pub. L. 117-2 § 9674(a) had replaced § 6050W(e) with a
single, much lower dollar test and no transaction count at all. Pub. L. 119-21 § 70432(a)(1) rewrote
the subsection back to the two-part test, and § 70432(a)(2) makes that amendment **take effect as if
included in** the 2021 Act. The retroactive form is the point: the lower threshold is treated as never
having been enacted, so material describing a transition to it — including material describing the
IRS's administrative delays of that transition — is describing something the statute no longer
contains.

**The wage statement gained two items.** IRC § 6051(a)(18) and (19) now require cash tips with the
§ 224(d)(1) occupation, and qualified overtime compensation, on the statement furnished to the
employee. Section 6050W(f)(2) was amended in parallel to require a separate accounting of amounts
payors reasonably designate as cash tips together with the recipient's occupation.

**Tips and overtime got deductions, not exclusions**, under new §§ 224 and 225. The distinction is
the examinable part. Because the amounts remain in gross income, they still enter adjusted gross
income and therefore still affect every threshold computed from it.

**Social security was not exempted.** The 2026 relief for older taxpayers is a deduction for
qualified individuals aged 65 and over under § 151(d)(5)(C), not any change to § 86. The § 86 formula
and its unindexed base amounts are as they were.

**The principal residence discharge exclusion has run out.** IRC § 108(a)(1)(E) reaches qualified
principal residence indebtedness discharged **before 1 January 2026**, or discharged under an
arrangement entered into and evidenced in writing before that date. It was not extended, so an
ordinary 2026 discharge of home mortgage debt is includible under § 61(a)(11) unless another
§ 108(a)(1) exclusion — title 11 or insolvency — applies.

## Exam focus

The reliable question is whether something is in gross income, and the reliable method is to start
from § 61(a) and demand a section for any exclusion. Be ready to say that the § 61(a) enumeration is
not exhaustive.

Know the three mechanisms apart. An exclusion keeps an amount out of gross income; a partial
inclusion formula puts some of it in; a deduction takes it out after it is in. Questions about tips,
overtime and social security are usually testing which mechanism applies rather than any amount.

Expect the § 102 and § 103 second sentences to be the trap, and expect at least one question where an
absent information return is offered as a reason income is not reportable. The worldwide rule in Reg.
§ 1.1-1(b) is worth knowing by its language, because questions phrase it as a citizen living abroad
for the whole year.

## Check yourself

**1.** A client receives $9,000 from a friend who describes it as a gift, and $400 of interest earned
on the money after depositing it. What is includible?

*Answer: the $400. The value of property acquired by gift is excluded from gross income (IRC
§ 102(a)), but IRC § 102(b)(1) provides that the exclusion does not extend to the income from that
property. The interest is § 61(a)(4) income.*

**2.** A United States citizen lived and worked in Portugal for the whole taxable year, was paid by a
Portuguese employer, and received no United States information return. Is the salary reportable?

*Answer: yes. All citizens of the United States, wherever resident, are liable to the income taxes
imposed by the Code whether the income is received from sources within or without the United States
(Reg. § 1.1-1(b)). Whether tax is ultimately due is a separate question — the § 911 exclusion and the
foreign tax credit may reduce or eliminate it — but the salary is gross income and is reported.*

**3.** A taxpayer receives $9,200 in cash tips during the year, all reported to the employer. Are
the tips excluded from gross income?

*Answer: no. Tips are compensation for services and so are gross income under IRC § 61(a)(1). What
IRC § 224 provides is a deduction for qualified tips, subject to its own cap and income phase-out.
Because the amount remains in gross income, it still enters adjusted gross income and still affects
every threshold measured from it.*

**4.** A lender forgives $40,000 of a taxpayer's home mortgage in 2026. The taxpayer is solvent and
not in bankruptcy. Is the discharge includible?

*Answer: yes. Discharge of indebtedness income is listed at IRC § 61(a)(11), and the qualified
principal residence indebtedness exclusion in IRC § 108(a)(1)(E) reaches only discharges before
1 January 2026, or discharges under an arrangement entered into and evidenced in writing before that
date. With neither the title 11 nor the insolvency exclusion available, the $40,000 is includible.*
