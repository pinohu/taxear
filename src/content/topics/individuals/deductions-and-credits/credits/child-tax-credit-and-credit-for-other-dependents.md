---
title: "Child tax credit and credit for other dependents"
code: "1.3.2.b"
part: 1
domain: "Deductions and Credits"
section: "Credits"
description: "Almost nothing you remember about this credit from 2021 is still law, and the numbers printed in the statute are not the numbers you use. Read subsection (h) first."
status: review
taxYear: 2026
lastReviewed: "2026-08-19"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 24", title: "Child tax credit", url: "https://www.law.cornell.edu/uscode/text/26/24" }
  - { type: IRC, ref: "§ 152", title: "Dependent defined", url: "https://www.law.cornell.edu/uscode/text/26/152" }
  - { type: IRC, ref: "§ 26", title: "Limitation based on tax liability", url: "https://www.law.cornell.edu/uscode/text/26/26" }
  - { type: RevProc, ref: "Rev. Proc. 2025-32, §§ 2.03, 3.05", title: "2026 child tax credit and refundable portion", url: "https://www.irs.gov/pub/irs-drop/rp-25-32.pdf" }
  - { type: Statute, ref: "Pub. L. 119-21, § 70104", title: "Permanent and enhanced child tax credit", url: "https://www.law.cornell.edu/uscode/text/26/24" }
forms: []
related: ["1.1.1.i", "1.3.2.a", "1.1.1.j", "1.1.1.k", "1.3.2.c", "1.3.2.e"]
changelog:
  - { date: "2026-08-19", summary: "Initial draft. Sets out the IRC § 24(h) overlay that displaces the credit amount, threshold, refundable cap, earned income floor and identification rule printed in the body of the section, the § 24(h)(4) credit for other dependents, the § 24(d) refundability computation, the § 24(g) disallowance periods, and the changes made by Pub. L. 119-21 § 70104 effective for taxable years beginning after 31 December 2024." }
---

Section 24 cannot be read from the top. The credit amount in subsection (a), the phase-out thresholds in
subsection (b)(2) and the earned income floor in subsection (d)(1)(B)(i) have not applied since 2017.
Subsection (h) overrides all of them, and Pub. L. 119-21 made that overlay permanent while raising the
credit. Anyone quoting a figure out of the body of the section is quoting law that has been switched off
for nine years.

## The rule

**The credit and the overlay.** A credit is allowed for each qualifying child of the taxpayer (IRC
§ 24(a)). For every taxable year beginning after 2017, the section is applied as provided in
§ 24(h)(2)–(7), which substitute a different credit amount, a different threshold, a cap on the
refundable part, a lower earned income floor, and a social security number requirement. The credit for
2026 is {fig:ctc.credit_amount}.

**Qualifying child.** A qualifying child of the taxpayer within § 152(c) who {fig:ctc.age_limit} (IRC
§ 24(c)(1)). Section 152(c) itself requires a relationship — a child of the taxpayer or a descendant, or
a sibling, step-sibling or a descendant of one — the same principal place of abode for more than half
the year, an age test, no more than half of the individual's own support provided by the individual, and
no joint return other than a refund claim (IRC § 152(c)(1)(A)–(E), (2)). Section 24(c)(2) excludes a
child who would not be a dependent if the § 152(b)(3)(A) residency rule were read without everything
following "resident of the United States".

**The phase-out.** The credit is reduced by {fig:ctc.phase_out_rate} (IRC § 24(b)(1)). The threshold is
{fig:ctc.threshold}. Because the reduction runs on whole *or partial* thousands, a single dollar over a
thousand-dollar boundary costs a full step.

**Refundability.** The credit is not fully refundable. Section 24(d)(1) makes the refundable portion the
lesser of two amounts: the credit determined without regard to § 24(d) and without the § 26(a) tax
liability limitation — capped per qualifying child at {fig:ctc.refundable_portion} by § 24(h)(5) — or
the amount by which the taxpayer's allowable credits would increase if the § 26(a) limitation were
raised by {fig:ctc.earned_income_threshold}. A taxpayer with three or more qualifying children may
instead use the excess of their social security taxes over the § 32 credit (IRC § 24(d)(1)(B)(ii)). In
practice the refundable amount is the unused credit, capped both per child and by the earned income
formula.

**The credit for other dependents.** The credit determined under § 24(a) is increased by
{fig:ctc.odc_amount} (IRC § 24(h)(4)(A)). Three points follow from the way it is drafted. It is an
increase in the child tax credit, so the same § 24(b) phase-out and the same threshold apply to it. It
is expressly excluded from the refundable computation, because § 24(h)(5) directs that § 24(d)(1)(A) be
applied without regard to § 24(h)(4). And the dependent must still be a dependent within § 152 —
every relationship, support, residency and citizenship test that § 152 imposes still has to be met.

**Identification.** No credit is allowed with respect to a qualifying child unless the return carries
both the taxpayer's social security number — at least one spouse's on a joint return — and the child's,
each issued to a citizen or to a work-authorized individual, and issued before the return's due date
(IRC § 24(h)(7)(A), (B)). A child who fails only this test is not lost entirely: § 24(h)(4)(C) treats
that child as a dependent eligible for the smaller other-dependent amount. The body of the section adds
its own weaker requirements at § 24(e)(1) and (2), which the § 24(h)(7) overlay supersedes for the
qualifying child.

**Two more restrictions.** No credit is allowable for a taxable year of fewer than 12 months, except a
year closed by the taxpayer's death (IRC § 24(f)). And a taxpayer whose earlier claim was disallowed is
locked out for {fig:ctc.disallowance_period}, with a lesser requirement — production of whatever
information the Secretary requires — where the earlier denial came through the deficiency procedures
(IRC § 24(g)(1), (2)).

## Current figures

| Item | Amount |
| --- | --- |
| Credit per qualifying child | {fig:ctc.credit_amount} |
| Age limit | {fig:ctc.age_limit} |
| Threshold | {fig:ctc.threshold} |
| Phase-out rate | {fig:ctc.phase_out_rate} |
| Refundable cap per child | {fig:ctc.refundable_portion} |
| Earned income formula | {fig:ctc.earned_income_threshold} |
| Credit for other dependents | {fig:ctc.odc_amount} |
| Disallowance period | {fig:ctc.disallowance_period} |
| Permanence | {fig:ctc.permanence} |

## How it works in practice

Count the children, then the other dependents, then run one phase-out over the total, then split the
result into a nonrefundable part and a refundable part.

**Counting.** A child aged 16 at the close of the year is a qualifying child; the same child at 17 is
not, but is almost always still a dependent, so the credit does not vanish — it shrinks to the
other-dependent amount. That single fact accounts for most of the questions on this topic.

**The phase-out over the total.** The reduction applies to the credit as increased by the
other-dependent amounts, so a family with two young children and a dependent parent phases out one
combined figure rather than three separate ones.

**Splitting the result.** Apply the credit against tax first. Whatever is left over is potentially
refundable, subject to two ceilings: the per-child cap, and 15 percent of earned income above the
floor. The earned income formula is what excludes a family with no earnings — a household living
entirely on investment income or benefits gets no refundable child tax credit however many children it
has.

Where the phase-out bites, remember which income figure is used. It is modified adjusted gross income —
adjusted gross income increased by amounts excluded under §§ 911, 931 and 933 — so a taxpayer claiming
the foreign earned income exclusion adds it back for this purpose.

<div class="scenario">
<h3>The seventeenth birthday</h3>

Nkem and Ruth file jointly with modified adjusted gross income of $128,000. Their daughter turned 17 in
November and their son is 12. Both live at home and neither provides half of their own support.

The son is a qualifying child: the credit for him is $2,200. The daughter is not, because § 24(c)(1)
requires her to be under 17 at the close of the calendar year. She is still a dependent within § 152, so
§ 24(h)(4)(A) increases the credit by $500 for her. The total is $2,700, and no phase-out applies
because the joint threshold is $400,000. A candidate who reads the age test as "under 17 at some point
in the year" gets $4,400 and is wrong by $1,700.
</div>

<div class="scenario">
<h3>Refundability is not full refundability</h3>

Ines is single with one qualifying child aged 6. Her earned income is $19,000 and her income tax before
credits is $340.

Her credit is $2,200. It reduces her tax to zero, using $340 and leaving $1,860 unused. The refundable
portion is the lesser of the per-child cap of $1,700 and the amount the earned income formula supports:
15 percent of $19,000 less $2,500, which is 15 percent of $16,500, or $2,475. It is also bounded by the
unused credit of $1,860. She receives $1,700 as a refund and loses $160 of the credit outright. Anyone
still applying the 2021 rule would tell her the whole $2,200 is refundable.
</div>

<div class="scenario">
<h3>The dependent who is not a child at all</h3>

Sunil supports his mother, who lives in her own apartment, has $3,800 of interest income and receives
more than half her support from him. He also has a 20-year-old son who is a full-time student living at
home.

The mother is a qualifying relative under § 152(d): she is not a qualifying child, so she brings $500
under § 24(h)(4)(A). The son is a qualifying child of Sunil under § 152(c) — he is a student under 24 —
but he is not a qualifying child *described in § 24(c)*, because that provision needs him to be under
17. He too brings $500. Sunil's total is $1,000, entirely nonrefundable, and both amounts phase out
against his modified adjusted gross income on the same schedule as a child tax credit would.
</div>

<div class="callout trap">

**The numbers in the body of § 24 are dead letters.** {fig:ctc.superseded_statutory_amounts} Quoting
them is the most common error on this topic, and a study source written before 2018 will quote them.

**The 2021 rules are gone.** {fig:ctc.arpa_2021_amounts} None of it is law for 2026.

**"Credit for other dependents" is not a separate credit.** It is an increase in the child tax credit
under § 24(h)(4). It shares the threshold and the phase-out, and it is never refundable.

**Age 17 is a hard line at the close of the calendar year**, and it is stricter than the § 152(c)(3)
test. A 17-year-old is a dependent, and often a qualifying child for the earned income credit and the
dependent care credit, but never a qualifying child for this one.

**A missing social security number does not destroy the whole claim.** Section 24(h)(4)(C) converts that
child into an other dependent, so the smaller amount survives. A late-issued number — issued after the
return's due date — fails the test just as a missing one does.

**Modified adjusted gross income, not adjusted gross income.** Sections 911, 931 and 933 exclusions are
added back.

**A short taxable year kills the credit entirely** under § 24(f), unless the year is short because the
taxpayer died.
</div>

## How this has changed

Pub. L. 119-21 § 70104 made four amendments to § 24, all applying to taxable years beginning after 31
December 2024. It struck ", and before January 1, 2026" from § 24(h)(1) and changed the heading of the
subsection from "2018 through 2025" to "after 2017", so the overlay no longer expires:
{fig:ctc.permanence}. It raised the substituted credit amount in § 24(h)(2). It rewrote § 24(h)(5),
which had carried both the refundable cap and its own inflation rule, and moved the indexing into
§ 24(i)(1). And it rewrote § 24(h)(7) so that the return must now carry a social security number for the
*taxpayer* as well as for the child — where the former paragraph required only the child's.

That last change is easy to miss and it costs the whole credit. A couple where one spouse has an
individual taxpayer identification number rather than a social security number still qualifies, because
§ 24(h)(7)(A)(i) asks for the number of at least one spouse on a joint return. A single filer with an
ITIN does not.

Section 24(i) was rewritten entirely. Its former contents are gone, replaced by two inflation
adjustments and a rounding rule: {fig:ctc.rounding}. The credit amount for 2026 is confirmed at Rev.
Proc. 2025-32 § 3.05(1) and the refundable cap, which did move, at § 3.05(2).

## Exam focus

The examiners test the age line and the other-dependent amount more than anything else. Be able to say
immediately that under 17 at the close of the year is the test, that a 17-year-old dependent brings the
smaller amount, and that the smaller amount is never refundable. Know the threshold — and know that it
is the § 24(h)(3) figure, not the number printed in § 24(b)(2).

For computation, expect a question that gives a tax liability below the credit and asks for the refund.
Run it as: credit against tax, then the lesser of the per-child cap, the unused credit, and 15 percent
of earned income above the floor. Know that the credit is not fully refundable and has not been since
2021.

Be alert to any source, question or seminar that gives a larger credit for a child under 6, a
17-year-old qualifying child, full refundability, or a threshold in the low hundreds of thousands. Every
one of those is a 2021 number, and every one of them is wrong for 2026.

## Check yourself

**1.** A single taxpayer with modified adjusted gross income of $214,300 has two qualifying children.
What is the credit before any refundability analysis?

*Answer: $3,700. The credit starts at $4,400. Modified adjusted gross income exceeds the § 24(h)(3)
threshold of $200,000 by $14,300, which is fourteen full thousands and a fraction, so fifteen steps of
$50 apply — a reduction of $750. Note that the fraction counts as a whole step under § 24(b)(1).*

**2.** A married couple have earned income of $6,000, no tax liability, and three qualifying children.
How much of the credit is refundable?

*Answer: $525. Fifteen percent of earned income above $2,500 — 15 percent of $3,500 — is $525, and that
is far below both the unused credit and the per-child cap, so it controls. The alternative in
§ 24(d)(1)(B)(ii) for three or more children uses social security taxes less the § 32 credit, which on
these facts is unlikely to be larger.*

**3.** Why does a taxpayer's 19-year-old dependent son, a full-time student living at home, produce only
a small credit?

*Answer: Because IRC § 24(c)(1) requires a qualifying child to be under 17 at the close of the calendar
year. He is a qualifying child under § 152(c)(3)(A)(ii) as a student under 24, but not one described in
§ 24(c), so § 24(h)(4)(A) treats him as an other dependent worth $500, nonrefundable.*

**4.** A return claims two children. One has a social security number issued in March, after the April
due date passed unextended. What is the consequence?

*Answer: No child tax credit for that child, because § 24(h)(7)(B)(ii) requires the number to be issued
before the return's due date. Section 24(h)(4)(C) then treats that child as a dependent eligible for the
$500 other-dependent amount. The other child's credit is unaffected.*

**5.** A taxpayer's child tax credit was disallowed three years ago on a final determination that the
claim was due to reckless disregard of the rules. May the taxpayer claim it this year?

*Answer: Yes. IRC § 24(g)(1)(B)(ii) sets the disallowance period at two taxable years after the most
recent year for which there was such a determination, and three years have passed. Ten years would apply
had the determination been one of fraud.*
