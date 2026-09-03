---
title: "Minor children's unearned income — the kiddie tax"
code: "1.1.1.p"
part: 1
domain: "Preliminary Work and Taxpayer Data"
section: "Preliminary work to prepare tax returns"
description: "When a child's investment income is taxed at a parent's rate: the age test that reaches past 18, the two-layer threshold, and the election that avoids a return."
status: published
taxYear: 2026
lastReviewed: "2026-08-19"
reviewedBy: "N. O."
authorities:
  - { type: IRC, ref: "§ 1(g)", title: "Certain unearned income of children taxed as if parent's income" }
  - { type: IRC, ref: "§ 63(c)(5)", title: "Limitation on standard deduction in the case of certain dependents" }
  - { type: IRC, ref: "§ 152(c)(3)", title: "Qualifying child — age requirements" }
  - { type: RevProc, ref: "2025-32", title: "Inflation-adjusted items for 2026", url: "https://www.irs.gov/pub/irs-drop/rp-25-32.pdf" }
forms: []
related: ["1.1.1.i", "1.1.1.d", "1.1.1.b", "1.1.1.h", "1.4.1.a"]
changelog:
  - { date: "2026-08-19", summary: "Initial draft against IRC § 1(g) and Rev. Proc. 2025-32 § 3.02." }
  - { date: "2026-08-25", summary: "Added a plain-language summary, a threshold diagram of the two-layer figure, glossary marks, and typed scenarios." }
diagram:
  archetype: "threshold"
  caption: "Where a child's unearned income crosses into the parent's tax rate"
  min: 0
  max: 3600
  marks:
    - { figureKey: "kiddie.base_amount", value: 1350, label: "1,350 — child's own rate begins" }
    - { figureKey: "kiddie.threshold", value: 2700, label: "2,700 — parent's rate begins", emphasis: true }
---

<div class="plain-terms">
Some families put stocks or savings accounts in a child's name so the earnings would be taxed
at the child's low rate instead of the parent's higher one. This rule blocks that shift. Once a
child's investment income passes a set amount, the extra amount is taxed at the parent's rate
instead of the child's own. It does not touch money the child earns from a job. It affects many
teenagers and college students, not just young children, as long as they do not earn enough from
work to cover most of their own living costs. It only applies while a parent is alive and the
child does not file a joint return. The child still files their own tax return. Only the rate on
part of the income changes, and in some cases a parent can report that income on their own
return instead.
</div>

## The rule

The kiddie tax stops a family from moving investment income to a child in order to have it taxed in a
lower bracket. Where it applies, the child's tax is the **greater** of the tax computed normally, or
the tax on the child's income reduced by net unearned income **plus** the child's share of the
allocable parental tax (IRC § 1(g)(1)). The child still files their own return; what changes is the
rate applied to one slice of their income.

**Who it applies to.** Section 1(g)(2) sets three conditions, all of which must hold:

- **Age.** The rule reaches {fig:kiddie.age_test}. So it is not simply a rule about minors: a
  19-year-old, or a full-time student under 24, is caught unless their own earned income exceeds half
  of their support.
- **A living parent.** Either parent must be alive at the close of the taxable year.
- **No joint return.** The child must not file a joint return for the year.

**What is taxed at the parent's rate.** Only **net unearned income**, which § 1(g)(4)(A) defines as
unearned adjusted gross income reduced by two amounts: the § 63(c)(5)(A) dependent standard deduction
floor, plus the greater of that same floor or the itemised deductions directly connected with
producing that income. Where the child does not itemise, the reduction is therefore **twice** the
floor. For 2026 the floor is {fig:kiddie.base_amount}, which puts the practical threshold at
{fig:kiddie.threshold}. Net unearned income can never exceed the child's taxable income
(§ 1(g)(4)(B)).

**The parental election.** Section 1(g)(7) lets a parent report the child's income on their own return
instead, and the child is then treated as having no gross income and need not file. The conditions are
{fig:kiddie.election_conditions}, and the income range for 2026 is
{fig:kiddie.parental_election_range}.

## Current figures

| Item | 2026 |
| --- | --- |
| Section 1(g)(4)(A)(ii)(I) amount | {fig:kiddie.base_amount} |
| Unearned income before any is taxed at the parent's rate | {fig:kiddie.threshold} |
| Parental election — child's gross income range | {fig:kiddie.parental_election_range} |
| Age test | {fig:kiddie.age_test} |
| Parental election conditions | {fig:kiddie.election_conditions} |

## How it works in practice

**Read the age test twice.** The most common error is treating this as a rule about children under 18.
It reaches an 18-year-old, and a student under 24, whenever their earned income does not exceed
one-half of their own support. A college student living largely on family support, with a summer job
and a brokerage account, is squarely within it. Conversely, a 17-year-old who genuinely supports
themselves through work is still caught, because the earned income escape applies only to the
over-18 limb.

**Three layers, not two.** The first slice of unearned income is absorbed by the dependent standard
deduction; the second slice is taxed at the **child's** rate; only what remains is taxed at the
parent's. Describing the rule as "unearned income above the threshold is taxed at the parent's rate"
is right about the third layer and silent about the second, which is where most small accounts land.

**Which parent's rate.** Section 1(g)(5) supplies the answer where parents are not married, are
separated, or file separately, and the choice is not the taxpayer's — it is determined by the statute.
Get this right before computing anything, because the whole allocable parental tax turns on it.

**The allocable parental tax is shared across siblings.** Section 1(g)(3) computes the additional tax
the parent would pay if their income included the net unearned income of **all** children to whom the
subsection applies, and then allocates it. Two children with investment accounts are not two
independent computations.

**The election trades a return for a rate.** Making the § 1(g)(7) election avoids preparing a return
for the child, which is its attraction. It is available only where the child's income is **only**
interest and dividends, within the stated range, and where no estimated payments or backup
withholding stand in the child's name and taxpayer identification number. That last condition catches
families who have already had tax withheld at the child's account — the election is then unavailable
and the withheld amount can only be recovered on the child's own return.

**Watch for the account that grew.** A custodial account that produced trivial income for years can
cross the threshold quietly after a good year or a large distribution. The intake question is not "does
the child have income" but "does the child have an account", and it should be asked every year rather
than once.

<div class="scenario" data-type="baseline">
<h3>The straightforward case</h3>

Isabela is 10 years old. A custodial account her grandparents funded years ago produced 4,000
dollars of dividends this year, and she has no earned income at all. Both of her parents are
alive, and she will not file a joint return.

All three conditions in § 1(g)(2) are met without argument: she is under 18, a parent is alive,
and there is no joint return. Her first 1,350 dollars of unearned income is absorbed by the
{gloss:standard-deduction}, the next 1,350 is taxed at her own rate, and the remaining 1,300 is
taxed at her parents' rate through the allocable parental tax. This is the {gloss:kiddie-tax}
working exactly as designed — nobody argues about age, support, or an election; the numbers
simply run.
</div>

<div class="scenario" data-type="boundary">
<h3>The nineteen-year-old with a summer job</h3>

Théodora Nkemdirim is 19, a full-time student, and lives at home. She earned about 4,200 dollars over
the summer and her custodial brokerage account produced roughly 6,800 dollars of dividends and
interest. Her total support for the year was around 24,000 dollars, most of it provided by her
parents. The family assumes the kiddie tax stopped applying when she turned 18.

It did not. Section 1(g)(2)(A)(ii) reaches a child who has attained 18 and meets the § 152(c)(3)
{gloss:qualifying-child} age requirement — she is a student under 24 — where earned income does not
exceed **one-half of the individual's support**. Half of 24,000 dollars is 12,000, and her 4,200
dollars of earnings is well under it. She is within the rule. Her first 1,350 dollars of unearned
income is absorbed by the dependent standard deduction, the next 1,350 is taxed at her own rate,
and the remaining 4,100 is taxed at her parents' rate through the allocable parental tax.
</div>

<div class="scenario" data-type="fails">
<h3>The election that was not available</h3>

The Halvorsen-Achebe family has a child with 5,600 dollars of dividend income and nothing else. The
income is comfortably inside the election range and the parents would rather not prepare a separate
return. Their bank, however, applied backup withholding to the account earlier in the year because a
certification was missing.

The election is closed to them. Section 1(g)(7)(A)(iii) requires that **no** estimated tax payments
have been made in the child's name and TIN and that **no** amount has been withheld under the backup
withholding provision. Withholding has occurred, so the election cannot be made — and there is a
second reason to file the child's return anyway, because the withheld tax is only recoverable through
it. The lesson for the following year is to fix the certification, not to fix the return.
</div>

<div class="scenario" data-type="interaction">
<h3>Two children, one computation</h3>

Both Obadiah and Rosalind Fitzwilliam-Vasquez have custodial accounts producing net unearned income.
Their preparer computes each child's allocable parental tax separately, as though the other did not
exist.

That overstates the total. Section 1(g)(3)(A) defines the allocable parental tax as the excess of the
tax on the parent's income **including the net unearned income of all children to whom the subsection
applies** over the tax without it — a single computation on the combined amount, then allocated among
the children. Doing it twice independently double-counts the bracket run-up. The correct sequence is
one parental computation, then an allocation, and the error is invisible unless someone notices the
siblings.
</div>

<div class="scenario" data-type="procedural">
<h3>Making the election instead of filing for the child</h3>

A child's only income is 3,000 dollars of interest, comfortably inside the range for the parental
election, and none of it has been withheld or prepaid. The parents would rather absorb the
reporting than open a separate filing for their child.

The mechanism is Form 8814, *Parents' Election To Report Child's Interest and Dividends*, attached
to the parent's own return by its due date, including extensions. Once made, the child's income is
folded into the parent's return, and under § 1(g)(7) the child is treated as having no gross income
for the year — no return is filed in the child's name at all. The election is made annually; a
year where a condition fails, such as the withholding trap above, simply falls back to a return
for the child.
</div>

<div class="callout trap">
<strong>It is not a rule about minors.</strong> The age test reaches 18-year-olds and students under
24 whose earned income does not exceed half of their support. Calling it the kiddie tax invites
exactly the wrong intuition.
</div>

<div class="callout trap">
<strong>The earned income escape applies only over 18.</strong> A child under 18 is within the rule
regardless of how much they earn. The support comparison in § 1(g)(2)(A)(ii)(II) sits inside the
over-18 limb.
</div>

<div class="callout trap">
<strong>The middle layer is taxed at the child's rate.</strong> The threshold is twice the
§ 63(c)(5)(A) floor because the definition subtracts that amount twice. Between the two figures the
income is taxed, just not at the parent's rate.
</div>

<div class="callout trap">
<strong>Backup withholding closes the election.</strong> So does an estimated payment in the child's
name. Families often discover this after the fact, and the answer is a return for the child rather
than an election.
</div>

<div class="callout trap">
<strong>Siblings share one parental computation.</strong> The allocable parental tax is computed once
on the combined net unearned income of all affected children and then allocated. Computing it per
child inflates the result.
</div>

## How this has changed

The kiddie tax was enacted by the Tax Reform Act of 1986 and originally applied only to children under
14. The age reach was extended twice — to under 18, and then by the Small Business and Work
Opportunity Tax Act of 2007 to the under-19 and student-under-24 tests with the earned income
comparison that still governs.

The most disruptive change was brief. The Tax Cuts and Jobs Act replaced the parental rate with the
**trust and estate rate schedule** for 2018 and later years, which produced sharply higher tax on
modest amounts of unearned income and hit families of deceased military personnel and some scholarship
recipients particularly hard. The SECURE Act of 2019 repealed that change and restored the parental
rate, with an election to apply the restoration retroactively to 2018 and 2019. Material written
between 2018 and 2020 may describe the trust rate schedule as current; it is not, and has not been for
five years.

What remains is the annual figure. The § 1(g)(4)(A)(ii)(I) amount is tied to the § 63(c)(5)(A)
dependent standard deduction floor and is published each year in the inflation revenue procedure — for
2026 in Rev. Proc. 2025-32 § 3.02. Look it up rather than remembering it.

## Exam focus

Know the three conditions in § 1(g)(2) and, in particular, that the age test reaches students under 24
and that the earned income comparison — earned income not exceeding half of support — applies only to
the over-18 limb. Know that the threshold is **twice** the § 63(c)(5)(A) amount and that income
between the two figures is taxed at the child's own rate. Know the four conditions for the parental
election, especially that the child's income must be only interest and dividends and that backup
withholding or an estimated payment in the child's name defeats it. Expect a computation that supplies
support figures to test the earned income comparison.

## Check yourself

**1. Which child is not subject to the kiddie tax?**

A. A 16-year-old with substantial earned income and unearned income above the threshold
B. A 19-year-old full-time student whose earned income is one-third of their support
C. A 22-year-old full-time student whose earned income exceeds one-half of their support
D. A 12-year-old whose parents are both alive

*Answer: C. The earned income comparison applies to the over-18 limb, and exceeding half of support
takes the child outside the rule; a child under 18 is within it regardless of earnings.*

**2. How much unearned income may a child have in 2026 before any of it is taxed at the parent's
rate?**

A. $1,350
B. $2,700
C. $5,400
D. $13,500

*Answer: B. The definition of net unearned income subtracts the § 63(c)(5)(A) amount twice where the
child does not itemise.*

**3. Income between the dependent standard deduction floor and the kiddie tax threshold is taxed at
what rate?**

A. Zero
B. The child's own rate
C. The parent's rate
D. The trust and estate rate

*Answer: B. Only net unearned income above the threshold reaches the parent's rate.*

**4. A child's only income is $6,000 of dividends, and backup withholding was applied to the account.
May the parent elect to report the income on their own return?**

A. Yes; the income is within the range and is only dividends
B. No; the election is unavailable where any amount has been withheld under the backup withholding
   provision
C. Yes, if the withholding is refunded first
D. Only if the child is under 18

*Answer: B — and the child should file anyway, because the withheld tax is recoverable only on the
child's return.*

**5. Two children of the same parent each have net unearned income. How is the allocable parental tax
computed?**

A. Separately for each child
B. Once, on the parent's income including the net unearned income of all affected children, then
   allocated
C. Only for the child with the larger amount
D. By adding the children's own tax liabilities

*Answer: B.*

**6. A 15-year-old has 9,000 dollars of dividend income and no earned income. Both of her parents died in March of the year. Is her net unearned income taxed at a parent's rate for the year?**
(A) Yes, because she is under 18 (B) Yes, using the rate of the parent who died last (C) No, because neither parent is alive at the close of the taxable year (D) No, because the trust and estate rate schedule applies instead
*Answer: C. Section 1(g)(2) requires all three conditions to hold, including that either parent be alive at the close of the taxable year; with no living parent the rule does not apply, and the trust rate schedule was repealed by the SECURE Act of 2019.*

**7. A 12-year-old has 3,200 dollars of interest and 600 dollars of capital gain from selling shares, with no withholding or estimated payments in her name. May her parent make the election to report her income on the parent's return?**
(A) Yes, because the total is within the election range (B) Yes, if the capital gain is reported separately by the child (C) No, because the election requires that the child's income be only interest and dividends (D) No, because the election is available only for children under 10
*Answer: C. The § 1(g)(7) election is available only where the child's income is only interest and dividends, within the stated range, with no estimated payments or backup withholding in the child's name; a capital gain takes the child outside it, and a return must be filed for the child.*

**8. A 10-year-old with no earned income and no itemised deductions has 5,000 dollars of unearned income in 2026. Both parents are alive and she files no joint return. How much is taxed at the parent's rate?**
(A) 5,000 dollars (B) 3,650 dollars (C) 2,300 dollars (D) 1,350 dollars
*Answer: C. Under § 1(g)(4)(A) net unearned income is unearned income reduced by the § 63(c)(5)(A) floor of 1,350 dollars twice where the child does not itemise; the first 1,350 is absorbed by the standard deduction, the next 1,350 is taxed at the child's own rate, and the remaining 2,300 reaches the parent's rate.*
