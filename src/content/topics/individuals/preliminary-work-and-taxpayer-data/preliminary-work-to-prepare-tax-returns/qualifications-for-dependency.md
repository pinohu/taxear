---
title: "Qualifications for dependency"
code: "1.1.1.i"
part: 1
domain: "Preliminary Work and Taxpayer Data"
section: "Preliminary work to prepare tax returns"
description: "Two definitions, four gates and a tiebreaker: how a qualifying child differs from a qualifying relative, and what happens when two taxpayers claim the same person."
status: published
taxYear: 2026
lastReviewed: "2026-08-19"
reviewedBy: "I. Ohu"
authorities:
  - { type: IRC, ref: "§ 152(b)", title: "Dependent — exceptions" }
  - { type: IRC, ref: "§ 152(c)", title: "Qualifying child" }
  - { type: IRC, ref: "§ 152(d)", title: "Qualifying relative" }
  - { type: IRC, ref: "§ 152(e)", title: "Special rule for divorced parents" }
  - { type: RevProc, ref: "2025-32", title: "Inflation-adjusted items for 2026", url: "https://www.irs.gov/pub/irs-drop/rp-25-32.pdf" }
forms: []
related: ["1.1.1.e", "1.1.1.c", "1.1.1.b", "1.1.1.p", "1.1.1.h", "1.1.1.j", "1.3.2.a", "1.3.2.b", "1.3.2.c", "1.3.2.e", "1.3.2.f"]
changelog:
  - { date: "2026-08-19", summary: "Initial draft against IRC § 152 and Rev. Proc. 2025-32 § 3.23." }
  - { date: "2026-08-25", summary: "Added a plain-language summary, glossary marks, typed scenarios, and a decision diagram of the five qualifying child tests." }
diagram:
  archetype: "decision"
  caption: "The five qualifying child tests — a child who fails any one may still be a qualifying relative"
  tests:
    - { test: "Relationship", result: "Child, sibling, step-sibling, or a descendant of either", outcome: "pass" }
    - { test: "Residency", result: "Same principal home as the taxpayer for more than half the year", outcome: "pass" }
    - { test: "Age", result: "Under 19, or under 24 if a student, and younger than the taxpayer; no limit if disabled", outcome: "pass" }
    - { test: "Support", result: "Child did not provide over half of their own support", outcome: "pass" }
    - { test: "Joint return", result: "Not filed one, other than to claim a refund", outcome: "pass" }
---

<div class="plain-terms">
This page explains who counts as your dependent on a tax return. There are two kinds: a qualifying
child and a qualifying relative, and each has its own set of tests. It affects any taxpayer who
supports a child, a parent, or another relative and wants to claim them on a return. It does not
affect someone who already files a joint return with a spouse, or a person living here on a
short-term visa. This page decides which tests a person must pass, how to split support when several
people share the cost, and which taxpayer wins when two people try to claim the same person.
</div>

## The rule

"Dependent" is not one definition but two, and every dependency question begins by asking which one
is in play. A dependent is either a **qualifying child** or a **qualifying relative**, and the two
have different tests, different arithmetic and different consequences.

**Three exceptions apply to both.** An individual who is themselves a dependent of another taxpayer
is treated as **having no dependents** (IRC § 152(b)(1)); an individual who has filed
a **joint return** with their spouse for the relevant year is not a dependent (§ 152(b)(2)); and a
person who is not a citizen or national of the United States is not a dependent **unless** they are a
resident of the United States or of a **country contiguous to** it (§ 152(b)(3)(A)). That last test
has a narrow exception for an adopted child who has the same principal place of abode as the
taxpayer, is a member of the taxpayer's household, and whose adopting taxpayer is a United States
citizen or national (§ 152(b)(3)(B)).

**Qualifying child** — {fig:dependency.qc_tests}. The relationship test reaches a child of the
taxpayer or a descendant of such a child, or a brother, sister, stepbrother or stepsister or a
descendant of any of them (§ 152(c)(2)). The age test is {fig:dependency.qc_age}.

Note what is **not** in the qualifying child list: there is no gross income test, and the support test
runs the other way — the question is whether the **child** provided over half of their own support,
not whether the taxpayer did.

**Qualifying relative** — {fig:dependency.qr_tests}. The relationship list in § 152(d)(2) is
enumerated and wide: a child or descendant; a sibling or step-sibling; a parent or ancestor of either;
a step-parent; a niece or nephew; an aunt or uncle; a range of in-laws; **or** any individual who has
the same principal place of abode as the taxpayer and is a member of the household for the year, other
than a spouse. The gross income limit for 2026 is {fig:dependency.qr_gross_income}.

Here the support test is the ordinary one — the taxpayer must provide **over one-half** — and the
last test is a gate rather than a relationship: an individual who is a qualifying child of the
taxpayer **or of any other taxpayer** cannot be a qualifying relative.

## Current figures

| Item | 2026 |
| --- | --- |
| Qualifying relative gross income limit | {fig:dependency.qr_gross_income} |
| Qualifying child tests | {fig:dependency.qc_tests} |
| Qualifying child age test | {fig:dependency.qc_age} |
| Qualifying relative tests | {fig:dependency.qr_tests} |
| Tiebreaker order | {fig:dependency.tiebreak} |
| Multiple support agreement conditions | {fig:dependency.multiple_support} |

## How it works in practice

**Compute support as a fraction of the whole.** The support test asks whether the taxpayer provided
over half of **total** support, and total support includes what the dependent spent on their own
support out of their own funds — including tax-exempt receipts. Money the dependent **saved** rather
than spent is not support at all. So a dependent with 10,000 dollars of taxable income and 4,000
dollars of tax-exempt income who saved 1,000 dollars applied 13,000 dollars to her own support, and
the taxpayer must provide more than that — 13,001 dollars — to pass. The instinct to compare the
taxpayer's contribution against the dependent's *income* rather than against the dependent's *spending*
is the usual error.

**The tiebreaker has an order, and it is not "whoever files first."** Section 152(c)(4) applies where
two or more taxpayers could claim the same qualifying child: {fig:dependency.tiebreak}. The
subparagraph (C) rule is the one most often missed — where the parents could claim but do not, another
taxpayer may claim the child **only if** their adjusted gross income is higher than the highest of any
parent's. A grandparent with a modest income cannot pick up a claim the parent declined.

**Multiple support agreements exist for the case nobody funds alone.** Where several people together
support a person and no one provides over half, § 152(d)(3) lets one of them be treated as providing
over half, on the conditions in the figures table. The contributor claiming must have provided over
ten per cent, and every other person over ten per cent must file a written declaration. This is
common with adult siblings supporting a parent, and it needs to be arranged before the returns are
filed rather than after.

**The dependent taxpayer test cascades.** Section 152(b)(1) means a person who is themselves claimable
as a dependent has no dependents of their own. A young parent living in her parents' household who is
their dependent cannot claim her own child, whatever the facts about the child.

**Divorced and separated parents run on a separate track.** Section 152(e) diverts the qualifying
child to the noncustodial parent, but only where the custodial parent signs a written declaration and
the noncustodial parent attaches it to the return. A decree awarding the claim does not do it. That
rule is treated in its own topic.

<div class="scenario" data-type="boundary">
<h3>Counting the grandmother's support</h3>

Ignatia Baptiste-Achebe supports her grandmother, who has 10,000 dollars of taxable income and 4,000
dollars of tax-exempt income, saves 1,000 dollars of it and spends the rest on herself. Ignatia wants
to know what she must contribute to claim her.

The grandmother applied 13,000 dollars to her own support. Total support is that figure plus whatever
Ignatia provides, and Ignatia must exceed half of the total — which means she must exceed 13,000
dollars, so 13,001 dollars is the minimum. Note the two adjustments that make this work: the
tax-exempt income counts, because support is measured by what was spent regardless of taxability; and
the 1,000 dollars saved does not count, because it was never applied to support. Comparing Ignatia's
contribution to the grandmother's 14,000 dollars of income would have produced the wrong answer.
</div>

<div class="scenario" data-type="interaction">
<h3>Two parents, one child, no joint return</h3>

A child lives with Parent A for more of the year than with Parent B, and Parent A also has the higher
adjusted gross income. The parents are not married and file separately. Both claim the child.

Parent A takes the claim, and the tiebreaker never reaches the income question. Section 152(c)(4)(B)
resolves competing parental claims first by **residence** — the parent with whom the child resided for
the longest period — and only turns to adjusted gross income where the child resided with both for the
same amount of time. Here residence decides it. The fact that Parent A also has the higher income is
true and irrelevant, which is exactly how this is tested: the question supplies both facts to see
whether the candidate reaches for the right one.
</div>

<div class="scenario" data-type="fails">
<h3>The exchange student</h3>

The Okonjo family hosts a foreign exchange student for the school year. He lives in their home, they
support him entirely, and they wish to claim him.

They cannot. Section 152(b)(3)(A) excludes from "dependent" anyone who is not a citizen or national of
the United States unless they are a resident of the United States or of a contiguous country — Canada
or Mexico. An exchange student on a temporary visa is generally neither. The narrow exception in
subparagraph (B) is for an **adopted** child living with the taxpayer as a member of the household, and
it does not reach a host arrangement. The household test the family is thinking of, in § 152(d)(2)(H),
is a *relationship* test for a {gloss:qualifying-relative} — passing it does not cure the citizenship
gate, which sits above both definitions.
</div>

<div class="scenario" data-type="baseline">
<h3>The straightforward qualifying child</h3>

Rosa's ten-year-old son lives with her all year, she pays for everything he needs, and he has no
income of his own.

He is Rosa's {gloss:qualifying-child}. He passes every one of the five tests without difficulty: he is
her son, he lived with her the whole year, he is under 19, he provided none of his own support, and he
has filed no return of any kind. No gross income test even applies to him — that test belongs only to
a qualifying relative. This is dependency working exactly as most people picture it, with nothing close
to any of the gates the rest of this page is about.
</div>

<div class="scenario" data-type="procedural">
<h3>Arranging a multiple support agreement before filing</h3>

Three adult siblings together pay for their widowed father's care. Each contributes roughly a third,
so none of them provides over half alone, but the three shares together clearly exceed half.

Before anyone files, the siblings must agree on which one of them will claim their father as a
{gloss:dependent} this year. The sibling who claims attaches a declaration to the return, and IRC
§ 152(d)(3) requires every other sibling who contributed over ten percent to file a written declaration
giving up their own claim for that year — commonly done on Form 2120. Filing first and sorting it out
afterward does not work: the declarations have to exist for the year being claimed, and only one
sibling may claim him for it.
</div>

<div class="callout trap">
<strong>The support test points in opposite directions.</strong> For a qualifying child, the question
is whether the **child** provided over half of their own support. For a qualifying relative, it is
whether the **taxpayer** provided over half. Reading the wrong one is the most common error in this
area.
</div>

<div class="callout trap">
<strong>Only a qualifying relative has a gross income test.</strong> A qualifying child may earn any
amount. A high-earning nineteen-year-old living at home who does not fund over half of their own
support is still a qualifying child.
</div>

<div class="callout trap">
<strong>Tax-exempt income counts in support; savings do not.</strong> Support is measured by what was
actually applied to the person's maintenance, whatever its source and whatever its taxability. Amounts
put aside are not support.
</div>

<div class="callout trap">
<strong>Residence beats income between parents.</strong> Section 152(c)(4)(B) reaches adjusted gross
income only where the child resided with both parents for the **same** amount of time. A question
supplying both facts is usually testing whether you stop at the first.
</div>

<div class="callout trap">
<strong>A non-parent needs a higher AGI than every parent.</strong> Where parents could claim but do
not, § 152(c)(4)(C) lets another taxpayer claim only if their adjusted gross income exceeds the highest
of any parent's. Declining to claim is not the same as handing the claim over.
</div>

## How this has changed

The Working Families Tax Relief Act of 2004 created the uniform definition of a qualifying child that
still governs, replacing five differently-worded tests scattered across the dependency exemption, head
of household status, the child credit, the dependent care credit and the earned income credit. The
structure of § 152 has been stable since.

The Tax Cuts and Jobs Act then produced the oddity that shapes the current text. Section 152(d)(1)(B)
sets the qualifying relative gross income limit by reference to "the exemption amount (as defined in
section 151(d))" — and § 151(d)(5) reduces that amount to **zero**. Read literally, no one could be a
qualifying relative. The IRS resolved this by treating the § 152(d)(1)(B) exemption amount as the
pre-TCJA figure indexed for inflation, and it is now published annually in the inflation revenue
procedure: for 2026 the figure is in the table above, from Rev. Proc. 2025-32 § 3.23. Public Law
119-21 made the zero exemption amount permanent in 2025, so this arrangement is now the settled
long-term position rather than a temporary workaround.

The practical consequence for a practitioner is that the qualifying relative gross income limit must
be looked up in the current revenue procedure every year. It is not the standard deduction, it is not
zero, and it does not appear in the statute.

## Exam focus

Know the five qualifying child tests and the four qualifying relative tests, and know which way the
support test points in each. Know the age test cold — under 19, or under 24 if a student, and younger
than the taxpayer, with no age limit for the permanently and totally disabled. Know that only the
qualifying relative has a gross income limit. Be ready to compute support from a fact pattern that
includes tax-exempt income and savings. And know the tiebreaker order: parent over non-parent, then
residence, then adjusted gross income.

## Check yourself

**1. Which does not meet the age requirement to be a qualifying child?**

A. A 17-year-old single mother
B. A 30-year-old with a permanent and total disability
C. A 28-year-old full-time student
D. A 9-year-old

*Answer: C. A student must be under 24; there is no age limit for an individual permanently and
totally disabled at any time during the year.*

**2. A child resided with Parent A longer than with Parent B during the year, and Parent A also has
the higher adjusted gross income. The parents do not file jointly and both claim the child. Who
prevails?**

A. Both may claim the child
B. Parent A
C. Parent B
D. Neither may claim the child

*Answer: B — decided by residence, not income. Income is reached only where residence is equal.*

**3. A dependent has $10,000 of taxable income and $4,000 of tax-exempt income, saves $1,000 and
spends the rest on her own support. What is the minimum the taxpayer must provide?**

A. $13,001
B. $18,001
C. $26,001
D. $28,001

*Answer: A. She applied $13,000 to her own support; the taxpayer must exceed half of total support,
which means exceeding $13,000.*

**4. Which individual may not be claimed as a dependent?**

A. A foreign exchange student living in the taxpayer's home
B. A foreign-born adopted child living with the taxpayer as a member of the household
C. A resident of Canada
D. A United States resident alien

*Answer: A. The citizenship and residency gate admits residents of the United States, Canada and
Mexico, with a narrow exception for an adopted child.*

**5. An 18-year-old mother who can be claimed as a dependent by her parents lives with them and her
own child. Who may claim the child?**

A. Both the grandparents and the teenage parent
B. Neither
C. Only the grandparents
D. Only the teenage parent

*Answer: C. An individual who is a dependent of another taxpayer is treated as having no dependents —
though the grandparents must also clear the tiebreaker rule that applies where no parent claims.*
