---
title: "Taxpayer filing status"
code: "1.1.1.e"
part: 1
domain: "Preliminary Work and Taxpayer Data"
section: "Preliminary work to prepare tax returns"
description: "Status is fixed on the last day of the year, with exceptions that matter: the dependent parent who need not live with you, and the spouse treated as unmarried."
status: published
taxYear: 2026
lastReviewed: "2026-08-19"
reviewedBy: "I. Ohu"
authorities:
  - { type: IRC, ref: "§ 2(a)", title: "Definition of surviving spouse" }
  - { type: IRC, ref: "§ 2(b)", title: "Definition of head of household" }
  - { type: IRC, ref: "§ 7703", title: "Determination of marital status" }
  - { type: IRC, ref: "§ 6013", title: "Joint returns of income tax by husband and wife" }
  - { type: IRC, ref: "§ 63(c)", title: "Standard deduction" }
  - { type: IRC, ref: "§ 151(d)(5)(C)", title: "Deduction for seniors" }
  - { type: RevProc, ref: "2025-32", title: "Inflation-adjusted items for 2026", url: "https://www.irs.gov/pub/irs-drop/rp-25-32.pdf" }
forms: []
related: ["1.1.1.d", "1.1.1.i", "1.5.1.m", "1.1.1.c", "1.1.1.a", "1.1.1.b"]
changelog:
  - { date: "2026-08-19", summary: "Initial draft." }
---

## The rule

Filing status is decided by facts as they stand on **the last day of the taxable year**, not by how
the year mostly looked. Marital status is determined as of the close of the year, except that where a
spouse dies during the year it is determined as of the time of death, and an individual legally
separated under a decree of divorce or separate maintenance is not considered married (IRC
§ 7703(a)). A couple married on 31 December was married for the whole year for tax purposes; a couple
divorced on 31 December was not married at all.

**Married filing jointly.** Spouses may make a single joint return even where one has neither gross
income nor deductions (IRC § 6013(a)). Three restrictions sit in the same subsection: no joint return
where either spouse is a **nonresident alien at any time during the year**; none where the spouses
have **different taxable years**, subject to a death exception; and where a spouse has died, the
joint return as to the decedent is made by the executor or administrator — though the surviving
spouse may make it for both where no return has been made for the decedent and no executor is
appointed before the last day prescribed for the survivor's own return. And the consequence that
clients most need to hear: on a joint return the tax is computed on aggregate income and **the
liability is joint and several** (IRC § 6013(d)(3)).

**Surviving spouse** — the status the forms call qualifying surviving spouse — requires, under IRC
§ 2(a)(1), that the taxpayer's spouse died during **either of the two taxable years immediately
preceding** the taxable year, and that the taxpayer maintains as their home a household which is for
the taxable year the principal place of abode of a dependent son, stepson, daughter or stepdaughter
for whom the taxpayer is entitled to a deduction. Maintaining a household means furnishing **over
half** its cost for the year. Two limitations follow in § 2(a)(2): the status is unavailable if the
taxpayer **has remarried at any time before the close of the taxable year**, and unavailable unless a
joint return could have been made for the year the spouse died.

**Head of household** requires, under IRC § 2(b)(1), that the individual is **not married at the
close of the year** and **is not a surviving spouse**, and then either:

- maintains as their home a household which is, for **more than one-half** of the taxable year, the
  principal place of abode of a **qualifying child** of the individual, or of any other person who is
  a dependent for whom the taxpayer is entitled to a deduction; **or**
- maintains a household which is for the taxable year the principal place of abode of the taxpayer's
  **father or mother**, where the taxpayer is entitled to a deduction for that parent.

The second limb is the one that catches people out, and it is worth reading twice. For a parent, the
statute asks whether the taxpayer *maintains a household that is the parent's* principal place of
abode — not whether the parent lives in the taxpayer's home. A taxpayer who pays over half the cost
of a parent's own residence, or of the parent's care facility, can qualify without the parent ever
living with them.

## Current figures

| Filing status | 2026 basic standard deduction |
| --- | --- |
| Married filing jointly and surviving spouse | {fig:sd.mfj} |
| Head of household | {fig:sd.hoh} |
| Single | {fig:sd.single} |
| Married filing separately | {fig:sd.mfs} |

The additional amount for the aged or the blind is {fig:sd.aged_or_blind}, and the new deduction for
seniors is {fig:seniors.deduction}, {fig:seniors.phaseout} — available to a married taxpayer **only
on a joint return**.

## How it works in practice

**Head of household has special determination rules of its own.** Section 2(b)(2) provides that a
taxpayer legally separated under a decree of divorce or separate maintenance is not considered
married; that a taxpayer is considered **not married** if at any time during the year their spouse is
a **nonresident alien**; and that a taxpayer *is* considered married at the close of the year if
their spouse (other than a nonresident alien spouse) died during the year. Section 2(b)(3) then bars
the status to anyone who is a nonresident alien at any time during the year.

**The married-living-apart rule is a separate route.** Under IRC § 7703(b) a married individual who
files a separate return is **not considered married** where three conditions are all met: the
individual maintains as their home a household which is for more than half the year the principal
place of abode of a child for whom they are entitled to a deduction (or would be but for the release
of the claim to a noncustodial parent); the individual furnishes over half the cost of maintaining
that household; and **during the last six months of the taxable year the spouse is not a member of
that household**. This is the provision that lets a separated but not divorced taxpayer file as head
of household, and each of the three conditions is load-bearing — a spouse who moved out in August
defeats it.

**Married filing separately is a real choice with real costs.** It is available to any married
couple, and it is the default where one spouse will not sign. It also disallows or restricts a long
list of benefits, and where one spouse itemises the other must. The reason clients choose it anyway
is joint and several liability: a spouse who has reason to doubt the other's reporting is buying
protection that innocent spouse relief only imperfectly restores after the fact.

**Compute the alternatives rather than assuming.** Where a taxpayer qualifies for more than one
status — head of household and single, or qualifying surviving spouse and head of household — the
statuses carry different standard deductions and different rate brackets, and the better answer is
not always the one with the larger deduction once credits and phase-outs are applied. Run both.

<div class="scenario">
<h3>The parent who lives elsewhere</h3>

Rosalind Okonkwo-Vance is unmarried and supports her mother, who lives in her own flat two towns
away. Rosalind pays about seventy per cent of the flat's costs and claims her mother as a dependent.
Her preparer files her as single, reasoning that head of household requires the qualifying person to
live with the taxpayer.

That is right for every qualifying person except a parent. Section 2(b)(1)(B) allows head of
household status where the taxpayer **maintains a household which constitutes for the taxable year
the principal place of abode of the father or mother**, if the taxpayer is entitled to a deduction
for that parent. Nothing in that limb requires the parent to live in the taxpayer's home. Rosalind
maintains the household — she pays over half its cost — and it is her mother's principal place of
abode. She qualifies, and the difference between the single and head of household standard deduction
is several thousand dollars before the rate brackets are even considered.
</div>

<div class="scenario">
<h3>Two years, then not</h3>

Ambrose Fitzwilliam-Nkemdirim's wife died in March 2023. He has a dependent daughter living with him
and has been filing as qualifying surviving spouse. For 2026 his preparer files the same way.

The status ran for 2024 and 2025 — the two taxable years following the year of death — and 2026 is
one year too far. Section 2(a)(1)(A) requires the spouse to have died during **either of the two
taxable years immediately preceding** the taxable year. For 2026 that means a death in 2024 or 2025.
For 2023 itself he was entitled to file a joint return, which is a separate rule and often mistaken
for the first of the two years. From 2026 he files as head of household if his daughter still
qualifies him, and as single if she does not.
</div>

<div class="scenario">
<h3>The spouse who moved out in August</h3>

Perpetua Vasquez-Haraldsen separated from her husband and he moved out on 12 August. She has their
son living with her all year and pays every cost of the home. She wants to file as head of
household.

She cannot, for this year. The married-living-apart rule in IRC § 7703(b) requires that during the
**last six months of the taxable year** the spouse is not a member of the household — that is, from
1 July. A departure on 12 August fails it by six weeks. She is married at the close of the year and
not legally separated under a decree, so her choices are married filing jointly, if he will sign, or
married filing separately. Next year, if he remains out of the household, head of household is
available. Where a client's separation is in progress and the date is still movable, this is a rule
worth mentioning early — it is one of the few in this area where a few weeks changes the answer.
</div>

<div class="callout trap">
<strong>Status is fixed on the last day of the year.</strong> Except where a spouse dies, in which
case marital status is determined at the time of death. Eleven months of marriage followed by a
30 December divorce produces an unmarried taxpayer for the whole year.
</div>

<div class="callout trap">
<strong>A dependent parent need not live with the taxpayer.</strong> Every other qualifying person
must occupy the taxpayer's household for more than half the year. The parent limb asks instead
whether the taxpayer maintains the household that is the parent's principal place of abode.
</div>

<div class="callout trap">
<strong>Remarriage before the close of the year ends surviving spouse status.</strong> Not
remarriage during the following year, and not remarriage after filing. Section 2(a)(2)(A) says at any
time before the close of the taxable year.
</div>

<div class="callout trap">
<strong>A nonresident alien spouse blocks a joint return but can unlock head of household.</strong>
Section 6013(a)(1) bars a joint return where either spouse is a nonresident alien at any time during
the year. Section 2(b)(2)(B) treats the taxpayer as **not married** for head of household purposes in
the same situation. The two rules point in opposite directions and both are correct.
</div>

<div class="callout trap">
<strong>Joint means joint and several.</strong> The tax is computed on aggregate income and each
spouse is liable for the whole of it. This is the fact behind every innocent spouse case, and it
belongs in the conversation before the return is signed rather than after a notice arrives.
</div>

## How this has changed

The architecture of §§ 2 and 7703 has been stable for decades; the changes have been at the edges and
in the vocabulary. The status once called "qualifying widow(er) with dependent child" is now
presented on the forms as **qualifying surviving spouse**, with no change to the statutory test in
§ 2(a). The statute itself still reads "husband and wife" in § 6013 and uses masculine pronouns
throughout § 2 — language that predates the recognition of same-sex marriage for federal tax purposes
and has not been modernised, though the rules apply without regard to it.

For 2026 the amounts moved and one new provision arrived. The standard deduction figures in the table
above come from Rev. Proc. 2025-32. Separately, Public Law 119-21 added a **deduction for seniors** at
IRC § 151(d)(5)(C) for taxable years beginning before 2029, and attached a filing-status condition to
it: a married taxpayer may claim it **only on a joint return**. That converts what used to be a purely
arithmetic married-filing-separately comparison into one with an additional item on the joint side for
any couple where either spouse is 65 or over.

## Exam focus

Learn the three head of household requirements as the IRS states them — unmarried or considered
unmarried on the last day of the year, paid more than half the cost of keeping up a home, and a
qualifying person lived in that home for more than half the year — and then learn the exception that
a dependent parent need not live with the taxpayer. That exception is the single most tested point on
this topic. Know that surviving spouse status runs for the **two** years after the year of death, ends
on remarriage before the close of the year, and requires a dependent child in the home. Know that
marital status is determined on the last day of the year, or at death.

## Check yourself

**1. Which is not a requirement for head of household status?**

A. The individual is unmarried or considered unmarried on the last day of the year
B. A qualifying dependent parent lives at the same residence as the taxpayer
C. The individual paid more than half the cost of keeping up the home
D. A qualifying person lived in the home for more than half the year

*Answer: B. For a parent, the test is whether the taxpayer maintains the household that is the
parent's principal place of abode — the parent need not live with the taxpayer.*

**2. A taxpayer's spouse died in 2024. For which years may the taxpayer file as a qualifying
surviving spouse, assuming a dependent child in the home and no remarriage?**

A. 2024 only
B. 2024 and 2025
C. 2025 and 2026
D. 2025 through 2027

*Answer: C. A joint return is available for the year of death itself; surviving spouse status covers
the two taxable years after it.*

**3. When is marital status determined?**

A. On the first day of the taxable year
B. On the last day of the taxable year, or at the time of death if a spouse dies during the year
C. By the number of months married during the year
D. On the date the return is filed

*Answer: B.*

**4. A married taxpayer files separately, has a child living with her all year, pays all household
costs, and her husband moved out on 12 August. May she file as head of household?**

A. Yes; she paid all the costs and the child lived with her
B. Yes, because they are separated in fact
C. No; the spouse must not have been a member of the household during the last six months of the year
D. No; head of household is never available to a married person

*Answer: C. The spouse's departure must precede the final six months, so a departure after 30 June
fails the test for that year.*

**5. Neither spouse will sign a joint return and one spouse is a nonresident alien for part of the
year. What follows?**

A. A joint return may still be filed if the alien spouse consents
B. No joint return may be made, and the other spouse may be treated as not married for head of
   household purposes
C. Both spouses must file as single
D. The couple must file jointly by default

*Answer: B. Section 6013(a)(1) bars the joint return; § 2(b)(2)(B) treats the taxpayer as not married
for head of household.*
