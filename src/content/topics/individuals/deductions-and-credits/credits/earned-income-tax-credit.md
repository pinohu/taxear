---
title: "Earned income tax credit"
code: "1.3.2.e"
part: 1
domain: "Deductions and Credits"
section: "Credits"
description: "The largest refundable credit on an individual return, with a cliff rather than a phase-out for investment income, and a due diligence regime aimed at the preparer."
status: published
taxYear: 2026
lastReviewed: "2026-08-19"
reviewedBy: "Draft for N. O. review"
authorities:
  - { type: IRC, ref: "§ 32", title: "Earned income", url: "https://www.law.cornell.edu/uscode/text/26/32" }
  - { type: IRC, ref: "§ 152", title: "Dependent defined", url: "https://www.law.cornell.edu/uscode/text/26/152" }
  - { type: IRC, ref: "§ 6695", title: "Other assessable penalties with respect to the preparation of tax returns", url: "https://www.law.cornell.edu/uscode/text/26/6695" }
  - { type: Reg, ref: "Reg. § 1.6695-2", title: "Tax return preparer due diligence requirements for certain tax returns and claims", url: "https://www.law.cornell.edu/cfr/text/26/1.6695-2" }
  - { type: RevProc, ref: "Rev. Proc. 2025-32, §§ 3.06, 3.54", title: "2026 earned income credit amounts and § 6695 penalty amounts", url: "https://www.irs.gov/pub/irs-drop/rp-25-32.pdf" }
forms: []
related: ["1.3.2.b", "1.1.1.i", "1.1.1.k", "1.3.2.c", "1.3.2.f", "1.3.2.g", "1.4.1.g"]
changelog:
  - { date: "2026-08-19", summary: "Initial draft. Sets out the IRC § 32(a) computation and the 2026 table amounts from Rev. Proc. 2025-32 § 3.06, the § 32(c)(1) eligible individual tests including the childless age and abode rules, the § 32(c)(2) earned income definition with its exclusions and the § 112 combat pay election, the § 32(c)(3) qualifying child rules and why the support test does not apply, the § 32(d) joint return requirement and separated spouse exception, the § 32(i) disqualified income cliff, the § 32(k) disallowance periods, the § 32(m) social security number rule, and the preparer due diligence requirements in Reg. § 1.6695-2 with the § 6695(g) penalty." }
  - { date: "2026-08-25", summary: "Added a plain-language summary, typed scenarios, and glossary marks as part of the comprehension-layer rollout." }
---

<div class="plain-terms">
The earned income tax credit is a benefit for people who work but earn a modest income. It
can cut your tax bill below zero, so you get money back even if you paid little or no tax
yourself. It affects working parents most, but it can also help a worker with no children at
home, as long as they meet an age test. It does not help someone with a lot of interest,
dividends, or investment gains, even if their paycheck is small. What it decides is how much
extra money comes back on your return, and whether a paid preparer must ask you extra
questions before filing it.
</div>

Two things make this credit different from the others on an individual return. It is fully refundable, so
it is paid out whether or not there is any tax, which is why it is the most audited item on the form. And
Congress made the preparer, not only the taxpayer, answerable for getting it right — with a penalty per
failure and no ceiling.

## The rule

**The computation.** The credit is the credit percentage of earned income up to the earned income
amount, reduced by the phase-out percentage of the excess of adjusted gross income — or earned income if
greater — over the threshold phase-out amount (IRC § 32(a)(1), (2)). In practice the amount is read from
tables the Secretary prescribes under § 32(f). The 2026 figures are {fig:eitc.max_credit}.

**The plateau and the phase-out.** The credit rises to its maximum at {fig:eitc.earned_income_amount},
holds there, and then falls away from {fig:eitc.phase_out_start}, reaching zero at
{fig:eitc.completed_phase_out}. The joint-return figures carry the § 32(b)(2)(B) increase, which is what
prevents two working parents being worse off than one.

**Eligible individual, with a child.** Anyone with a qualifying child for the year (IRC
§ 32(c)(1)(A)(i)). No age test applies to the claimant.

**Eligible individual, without a child.** {fig:eitc.childless_age} These three conditions apply only to
the childless claimant, and each of them is regularly tested.

**Who is never eligible.** A person who is themselves the qualifying child of another taxpayer for a
year beginning in the same calendar year (IRC § 32(c)(1)(B)). Anyone claiming the § 911 foreign earned
income exclusion (IRC § 32(c)(1)(C)). A nonresident alien for any portion of the year, unless a § 6013(g)
or (h) election makes them a resident for the whole of it (IRC § 32(c)(1)(D)).

**Earned income.** Wages, salaries, tips and other employee compensation, but only to the extent
includible in gross income, plus net earnings from self-employment within § 1402(a) computed with the
§ 164(f) deduction (IRC § 32(c)(2)(A)(i), (ii)). Five things are expressly outside it: community property
allocations are ignored, no pension or annuity counts, no § 871(a) income of a nonresident alien counts,
nothing earned while an inmate of a penal institution counts, and subsidised State work-activity
payments do not count (IRC § 32(c)(2)(B)(i)–(v)). Then § 32(c)(2)(B)(vi) gives the section's one
election: a taxpayer **may elect** to treat § 112 combat pay as earned income. Electing can raise or
lower the credit depending on where the taxpayer sits on the curve.

**Qualifying child.** A qualifying child within § 152(c), but determined **without** § 152(c)(1)(D) and
without § 152(e) (IRC § 32(c)(3)(A)). Dropping § 152(c)(1)(D) removes the support test, so a child who
supports themselves entirely can still be a qualifying child for this credit though not for the child
tax credit. Dropping § 152(e) means the special rule for divorced parents does not apply — the credit
follows residence, and a Form 8332 release moves the child tax credit without moving this one. Section
32(c)(3)(B) excludes a child who is married at the close of the year unless the taxpayer is entitled to
claim them, and § 32(c)(3)(C) requires the principal place of abode to be in the United States.

**Married claimants.** The credit is allowed only on a joint return (IRC § 32(d)(1)). There is one
exception, in § 32(d)(2)(B): a married individual who does not file jointly, resides with a qualifying
child for more than half the year, and either lived apart from their spouse for the last six months or
holds a separation instrument and is not a member of the same household by year end, is treated as not
married. That exception has no counterpart for a childless claimant.

**The investment income cliff.** No credit at all if disqualified income exceeds
{fig:eitc.disqualified_income} (IRC § 32(i)(1)). Disqualified income is taxable interest and dividends,
tax-exempt interest, net rents and royalties not from a trade or business, capital gain net income, and
net passive activity income (IRC § 32(i)(2)(A)–(E)). This is a cliff, not a phase-out: a single dollar
over the ceiling denies the entire credit.

**Identification.** {fig:eitc.ssn_requirement} The taxpayer's and spouse's numbers are required by
§ 32(c)(1)(E) and each qualifying child's name, age and number by § 32(c)(3)(D), with § 32(m) supplying
what a number must be. A child without a qualifying number is simply not taken into account — the
taxpayer may still claim the childless credit if they otherwise qualify.

**Disallowance and recertification.** A taxpayer whose claim was disallowed is barred for
{fig:eitc.disallowance_period}. Where the disallowance came through the deficiency procedures rather
than a fraud or recklessness finding, no credit is allowed in a later year until the taxpayer provides
whatever information the Secretary requires — in practice Form 8862 (IRC § 32(k)(2)).

**Preparer due diligence.** Reg. § 1.6695-2(b) imposes {fig:eitc.due_diligence}. The knowledge
requirement is the substantive one: the preparer must not know or have reason to know that information
used is incorrect, may not ignore the implications of what they are told, must make reasonable inquiries
where a well-informed preparer would find the information incorrect, inconsistent or incomplete, and
must contemporaneously document the inquiries and the answers (Reg. § 1.6695-2(b)(3)(i)). The penalty is
{fig:eitc.preparer_penalty} (IRC § 6695(g)).

## Current figures

| Item | Amount |
| --- | --- |
| Maximum credit | {fig:eitc.max_credit} |
| Earned income amount | {fig:eitc.earned_income_amount} |
| Phase-out begins | {fig:eitc.phase_out_start} |
| Phase-out complete | {fig:eitc.completed_phase_out} |
| Disqualified income ceiling | {fig:eitc.disqualified_income} |
| Childless eligibility | {fig:eitc.childless_age} |
| Identification | {fig:eitc.ssn_requirement} |
| Disallowance period | {fig:eitc.disallowance_period} |
| Due diligence | {fig:eitc.due_diligence} |
| Preparer penalty | {fig:eitc.preparer_penalty} |

## How it works in practice

**Check the disqualifiers before computing anything.** Disqualified income above the ceiling, a
nonresident alien period, a § 911 claim, a married taxpayer not filing jointly and outside the separated
spouse exception, a missing social security number, or an open disallowance period — any one of these
ends the analysis.

**Then count qualifying children.** Relationship, abode in the United States for more than half the
year, age, and the joint return rule. No support test. A child who is married is out unless the taxpayer
can claim them.

**Then read the table.** Compare adjusted gross income and earned income and use the greater for the
phase-out. A taxpayer whose adjusted gross income exceeds earned income — because of unemployment
compensation, say — phases out on the larger figure.

**Then decide the combat pay election** if it is available, by computing the credit both ways. Including
combat pay helps a taxpayer on the rising part of the curve and hurts one already past the phase-out
threshold.

**Then do the due diligence**, and document it as you go. The regulation asks for contemporaneous
records, and a file reconstructed after an examination notice does not meet it.

<div class="scenario" data-type="baseline">
<h3>The straightforward case</h3>

Renata is single, works as a home health aide, and earned $19,000 for the year, with
adjusted gross income of $19,000 and no investment income at all. Her 8-year-old son lived
with her the entire year and is her {gloss:qualifying-child}.

There are no disqualifiers to check: she has no disqualified income, files as an unmarried
individual, and has a valid social security number for herself and her son. The credit is
read straight from the 2026 table for one qualifying child at her income level — this is the
credit operating exactly as designed, with nothing at the edges to resolve.
</div>

<div class="scenario" data-type="boundary">
<h3>The cliff</h3>

Dario is single with two qualifying children, earned income of $27,000, and adjusted gross income of
$27,400. He also sold shares during the year at a gain of $12,900 with no offsetting losses.

Without the share sale he would have a substantial credit. Capital gain net income is disqualified
income under § 32(i)(2)(D), and $12,900 exceeds the 2026 ceiling. The credit is not reduced — it is
denied in full by § 32(i)(1). Selling $700 less of stock, or realising an offsetting loss, would have
preserved the entire credit. This is the single most valuable piece of planning advice on the topic and
it has to be given before the year ends.
</div>

<div class="scenario" data-type="interaction">
<h3>Support does not matter, residence does</h3>

Alma's 20-year-old daughter is a full-time student who lives at home for the whole year and pays all of
her own expenses out of a part-time job and a scholarship.

For the child tax credit the daughter fails twice: she is over 16, and she provides more than half her
own support, so she is not a § 152(c) qualifying child at all. For the earned income credit § 32(c)(3)(A)
directs that § 152(c) be applied without paragraph (1)(D) — the support test — so she is a qualifying
child, and Alma may count her. The two credits use the same defined term and reach opposite answers on
the same facts.
</div>

<div class="scenario" data-type="fails">
<h3>Not eligible at all</h3>

Tomás is 22, works part-time, earned $9,000 for the year, and lives with his parents while attending
college full-time. He has no children of his own and wants to claim the credit for himself as a
childless worker.

Because he is under 24, a full-time student, and provides less than half his own support, he remains
his parents' {gloss:dependent} and their qualifying child under § 152(c) for the year. IRC § 32(c)(1)(B)
denies the credit entirely to anyone who is themselves the qualifying child of another taxpayer for the
year — his own income and work do not matter once that test is met. His parents may claim him as a
dependent, but neither he nor they can turn his earnings into an earned income credit for him.
</div>

<div class="scenario" data-type="procedural">
<h3>The inquiry the preparer had to make</h3>

A new client tells a preparer that he is single, that his two nephews aged 9 and 11 lived with him all
year, and that he supported them. He produces nothing about the boys beyond their names and social
security numbers.

Nephews are within the § 152(c)(2) relationship class as descendants of a sibling, so the claim is
plausible. But Reg. § 1.6695-2(b)(3)(i) requires {gloss:due-diligence} — reasonable inquiries where a
well-informed preparer would find the information incomplete — and here nothing establishes the
relationship. The preparer must ask, be satisfied by the answer, and record both at the time. Filing on
the bare assertion exposes the preparer to a separate {gloss:preparer-penalty} for each credit claimed
on that return.
</div>

<div class="callout trap">

**Disqualified income is a cliff.** One dollar over denies the whole credit. And it includes tax-exempt
interest, which appears nowhere in adjusted gross income.

**The phase-out uses the greater of adjusted gross income and earned income.** Using earned income alone
overstates the credit for a taxpayer with unemployment compensation, taxable social security or
retirement distributions.

**No support test, and no § 152(e) reallocation.** The earned income credit follows the child's
residence. Releasing the dependency on Form 8332 moves the child tax credit to the noncustodial parent
and leaves this credit with the custodial one.

**Combat pay is elective, not mandatory.** Section 32(c)(2)(B)(vi) says "may elect", and the election
can go either way. A question asserting that combat pay must be included is testing this word.

**The age test belongs to the childless claimant only.** A claimant with a qualifying child has no age
limit at either end.

**A pension is never earned income**, and neither is anything earned in prison.

**A missing social security number for a child does not sink the return.** That child drops out of the
computation; the taxpayer may still take the childless credit.

**Married filing separately fails** unless the § 32(d)(2)(B) separated spouse test is met in full, which
requires a qualifying child — so a childless married claimant filing separately is always out.

**Due diligence covers four benefits, not one.** Section 6695(g) reaches head of household status, the
child tax credit, the American Opportunity credit and this credit, and the penalty runs per failure per
return.
</div>

## How this has changed

The section's own text carries the mark of the 2021 legislation, and reading it without the dates is a
trap. Section 32(n) sets out special rules for individuals without qualifying children that applied to
taxable years beginning in 2021 alone, and it remains printed in the section. So does the unindexed base
figure in § 32(i)(1), along with the base amounts in § 32(b), all of which are meaningless without the
annual revenue procedure.

Three 2021 changes were made permanent and are current law, which is why they are easy to misattribute.
The American Rescue Plan struck former § 32(c)(1)(F), which had denied the credit outright to an
individual who had qualifying children but no valid social security number; the result is that such a
taxpayer may now claim the childless credit. It added the § 32(d)(2)(B) separated spouse rule. And it
raised the disqualified income base substantially, which is why an older ceiling in the low thousands
appears in pre-2021 sources.

Nothing in Pub. L. 119-21 amended § 32. The 2026 changes on this topic are the ordinary inflation
adjustments in Rev. Proc. 2025-32 § 3.06, and the § 6695 penalty amounts in § 3.54 of the same revenue
procedure, which are stated for a return or claim for refund filed in 2027.

## Exam focus

Expect definitional questions rather than computations, because the credit is read from tables. The
recurring ones are: which tests apply to a qualifying child here but not for the child tax credit — the
answer is that support applies there and not here; whether combat pay must be included — it is elective;
what happens when investment income is one dollar over — the credit is denied entirely; and how long a
disallowance lasts — ten years for fraud, two for reckless or intentional disregard.

Know the childless claimant's three conditions, know that a married claimant needs a joint return unless
the separated spouse exception applies, and know that an individual taxpayer identification number never
supports this credit for anyone on the return.

For the preparer side, know the four due diligence requirements, that Form 8867 must be filed with the
return rather than merely retained, that records are kept three years, and that the penalty applies per
failure with no maximum.

## Check yourself

**1.** A taxpayer with two qualifying children has earned income of $24,000, adjusted gross income of
$29,500 including unemployment compensation, and $600 of tax-exempt interest. Which figure drives the
phase-out, and does the interest matter?

*Answer: Adjusted gross income of $29,500, because IRC § 32(a)(2)(B) uses the greater of adjusted gross
income and earned income. The tax-exempt interest is disqualified income under § 32(i)(2)(B), but $600
is far below the ceiling, so it does not deny the credit.*

**2.** A married taxpayer lived apart from their spouse from March onwards, has a qualifying child who
lived with them for the whole year, and files separately. Is the credit available?

*Answer: Yes. IRC § 32(d)(2)(B) treats the individual as not married where they do not file jointly,
reside with a qualifying child for more than half the year, and do not share a principal place of abode
with the spouse during the last six months of the year. A March separation satisfies the third element.*

**3.** Why does releasing a dependency exemption to a noncustodial parent not move the earned income
credit?

*Answer: Because IRC § 32(c)(3)(A) applies § 152(c) determined without regard to § 152(e), the special
rule for divorced parents. The child remains a qualifying child of the parent with whom they reside, so
the earned income credit stays with the custodial parent even though the child tax credit moves.*

**4.** A preparer computes an earned income credit and a child tax credit on the same return and fails
to file Form 8867. How many penalties?

*Answer: Two. Section 6695(g) imposes the penalty for each failure to meet the due diligence
requirements with respect to each benefit listed in it, and both credits are listed. There is no maximum
on the aggregate.*

**5.** A taxpayer's earned income credit was disallowed two years ago in a deficiency proceeding, with no
finding of fraud or recklessness. What must they do to claim it now?

*Answer: Provide the information the Secretary requires to demonstrate eligibility — Form 8862 — under
IRC § 32(k)(2). No disallowance period applies, because § 32(k)(1) bars the credit only after a final
determination of fraud or of reckless or intentional disregard of the rules.*
