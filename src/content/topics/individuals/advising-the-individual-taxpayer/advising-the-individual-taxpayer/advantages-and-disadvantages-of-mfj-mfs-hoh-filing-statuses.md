---
title: "Advantages and disadvantages of MFJ/MFS/HOH filing statuses in various scenarios. (joint and several liability)"
code: "1.5.1.m"
part: 1
domain: "Advising the Individual Taxpayer"
section: "Advising the individual taxpayer"
description: "Joint is usually cheaper and always joint and several. Separate buys one thing only — liability separation — and the price is a long list of denied provisions."
status: published
taxYear: 2026
lastReviewed: "2026-08-20"
reviewedBy: "Draft for N. O. review"
authorities:
  - { type: IRC, ref: "§ 6013", title: "Joint returns of income tax by husband and wife", url: "https://www.law.cornell.edu/uscode/text/26/6013" }
  - { type: IRC, ref: "§ 7703", title: "Determination of marital status", url: "https://www.law.cornell.edu/uscode/text/26/7703" }
  - { type: IRC, ref: "§ 2", title: "Definitions and special rules", url: "https://www.law.cornell.edu/uscode/text/26/2" }
  - { type: IRC, ref: "§ 63", title: "Taxable income defined", url: "https://www.law.cornell.edu/uscode/text/26/63" }
  - { type: IRC, ref: "§ 21", title: "Expenses for household and dependent care services", url: "https://www.law.cornell.edu/uscode/text/26/21" }
  - { type: IRC, ref: "§ 25A", title: "American Opportunity and Lifetime Learning credits", url: "https://www.law.cornell.edu/uscode/text/26/25A" }
  - { type: IRC, ref: "§ 32", title: "Earned income", url: "https://www.law.cornell.edu/uscode/text/26/32" }
  - { type: IRC, ref: "§ 221", title: "Interest on education loans", url: "https://www.law.cornell.edu/uscode/text/26/221" }
  - { type: IRC, ref: "§ 86", title: "Social security and tier 1 railroad retirement benefits", url: "https://www.law.cornell.edu/uscode/text/26/86" }
  - { type: IRC, ref: "§ 219", title: "Retirement savings", url: "https://www.law.cornell.edu/uscode/text/26/219" }
  - { type: IRC, ref: "§ 469", title: "Passive activity losses and credits limited", url: "https://www.law.cornell.edu/uscode/text/26/469" }
  - { type: IRC, ref: "§ 6015", title: "Relief from joint and several liability on joint return", url: "https://www.law.cornell.edu/uscode/text/26/6015" }
forms: []
related: ["1.1.1.e", "1.5.1.i", "1.5.1.h", "1.5.1.f", "1.5.1.k", "1.5.1.n", "1.5.1.o"]
changelog:
  - { date: "2026-08-20", summary: "Initial draft. Sets out the trade-off between the three statuses available to a married or formerly married client — the IRC § 6013(d)(3) joint and several liability that comes with a joint return, the one-way election in § 6013(b), the § 7703(b) considered-unmarried test that § 2(c) imports for head of household, and the provisions a separate return loses under §§ 21(e)(2), 25A(g)(6), 32(d)(1), 63(c)(6)(A), 86(c)(1)(C), 219(g)(4), 221(e)(2) and 469(i)(5)." }
  - { date: "2026-08-25", summary: "Added a plain-language summary, a decision diagram for the considered-unmarried route to head of household, glossary marks, and typed scenarios, including a new baseline scenario." }
diagram:
  archetype: "decision"
  caption: "Can a married client claim head of household instead of MFJ or MFS?"
  tests:
    - { test: "Filing a separate return, not a joint one?", result: "Required — this route is closed to joint filers", outcome: "pass" }
    - { test: "A qualifying child lived in the home more than half the year?", result: "Required", outcome: "pass" }
    - { test: "Taxpayer paid over half the cost of maintaining the home?", result: "Required", outcome: "pass" }
    - { test: "Spouse not a member of the household for the last 6 months of the year?", result: "All four conditions met — considered unmarried under § 7703(b); head of household is available", outcome: "pass" }
    - { test: "Any one of the above fails", result: "Married filing jointly or separately only", outcome: "fail" }
---

<div class="plain-terms">
This page compares three tax filing choices for a married couple, and for someone who used to be
married. Filing jointly usually costs less tax. But it makes each spouse liable for the whole tax
bill, even for the other spouse's mistakes. Filing separately avoids that risk, but it gives up
several tax breaks. Head of household is sometimes open to someone who is still legally married but
has lived apart from their spouse. This page helps a married or separated taxpayer pick the status
that fits them. It does not apply to someone who has never been married.
</div>

Almost every married client is better off on a joint return, and the exceptions are not usually about
tax at all. The joint return is cheaper because the rate brackets and phase-outs are built for it and
because a long list of provisions is simply unavailable on a separate return. What it costs is a legal
exposure that no amount of tax saving reverses: each spouse becomes liable for the entire tax, including
the part attributable to the other's income and the other's errors. The advising question is therefore
rarely "which is cheaper" — it is "is there a reason to buy separation, and does the client understand
what it costs."

## The rule

**The joint return is joint and several.** {fig:status.joint_and_several} That liability attaches to the
signature, not to the income. Relief exists under § 6015 — covered at 1.5.1.i — but it is relief from a
liability that has already attached, granted on conditions, and not a substitute for choosing correctly.

**The election runs one way.** {fig:status.separate_to_joint} {fig:status.joint_to_separate} A couple
who file separately can change their minds for three years; a couple who file jointly cannot change
theirs after the due date at all.

**A separate return loses a specific list.** {fig:status.mfs_denied} Beyond the outright denials, three
provisions are reduced rather than removed: {fig:status.mfs_social_security_base}
{fig:status.mfs_rental_allowance} {fig:status.mfs_ira_phaseout}

**And the standard deduction is not independent.** {fig:status.mfs_standard_deduction} A spouse who
itemizes therefore forces the other to itemize as well, whatever the other's deductions come to. This is
the single most expensive detail of a separate return and the one most often discovered late.

**Head of household is not available to a married person, except by one route.**
{fig:status.hoh_gateway} That route is {fig:status.considered_unmarried} All four conditions must hold
— separate return, a qualifying child in the home for more than half the year, over half the cost of
maintaining the household, and the spouse absent for the last six months.

## Current figures

| Item | Rule |
| --- | --- |
| Joint and several liability | {fig:status.joint_and_several} |
| Separate return changed to joint | {fig:status.separate_to_joint} |
| Joint return changed to separate | {fig:status.joint_to_separate} |
| Provisions denied on a separate return | {fig:status.mfs_denied} |
| Standard deduction on a separate return | {fig:status.mfs_standard_deduction} |
| Social security base amount | {fig:status.mfs_social_security_base} |
| Rental real estate allowance | {fig:status.mfs_rental_allowance} |
| IRA active participant phase-out | {fig:status.mfs_ira_phaseout} |
| Head of household gateway | {fig:status.hoh_gateway} |
| Considered unmarried | {fig:status.considered_unmarried} |
| Standard deduction, joint | {fig:sd.mfj} |
| Standard deduction, separate | {fig:sd.mfs} |
| Standard deduction, head of household | {fig:sd.hoh} |

## How it works in practice

**Start from joint and look for a reason to leave it.** Run the return both ways if there is any doubt —
most software will do it in one pass — but understand that the comparison is incomplete. It prices the
tax and not the liability, and the liability is the reason separate returns exist.

**The reasons to file separately that are actually about tax.** There are two worth knowing. The first
is a large medical expense on the lower-income spouse: because the floor is a percentage of adjusted
gross income, moving those expenses onto a return with a much smaller income base can clear a floor that
the joint return cannot. The second is a similar effect on any other deduction with an income-based
floor. Both are arithmetic, both are checkable, and both are frequently outweighed by the denials above.

**The reasons that are not about tax.** A spouse who suspects the other's return positions, a couple in
the middle of a separation, a client whose spouse has undisclosed business activity, a client whose
refund would otherwise be taken for the other spouse's pre-existing debt. In the last case check whether
the injured spouse allocation under 1.5.1.h solves the problem on a joint return, which is usually the
better outcome.

**The head of household question is the highest-value one.** A separated client with a child who meets
the § 7703(b) test does not merely avoid the separate-return denials — the client is not married for
these purposes at all, which restores the earned income credit, the education credits and the dependent
care credit, and gives a larger standard deduction and wider brackets. Test it explicitly for every
separated client with a child; the difference is often several thousand dollars.

**Watch the six-month rule.** The most common failure of the § 7703(b) test is a spouse who moved out in
August. "Not a member of the household during the last six months" means from 1 July, so an August
departure fails and the client is married filing separately for the year, with everything that follows.

**Both spouses must be told about the liability.** The joint return is signed by both, and both are
liable. Where a client is separating, or where one spouse has income the other cannot verify, the
conversation about § 6013(d)(3) belongs in the file, not in an aside.

<div class="scenario" data-type="interaction">
<h3>The medical expenses that justified separate returns</h3>

A couple have $128,000 and $31,000 of income. The lower-earning spouse had $19,000 of unreimbursed
medical expenses. On a joint return, the floor is a percentage of $159,000 and almost nothing is
deductible. On a separate return for the spouse with $31,000, most of the $19,000 clears the floor.

The arithmetic favours separate returns — until the rest is priced. They have a child in day care, so
the dependent care credit is lost under § 21(e)(2). The higher earner itemizes, so under § 63(c)(6)(A)
the lower earner's standard deduction is zero and the medical deduction has to carry the whole return.
Both are repaying student loans, so § 221(e)(2) removes that deduction too. The medical saving is real;
whether it survives the other three depends on numbers that must actually be run.

</div>

<div class="scenario" data-type="boundary">
<h3>The spouse who moved out in August</h3>

A client separated from her husband on 12 August. Their daughter has lived with her all year and she
pays every cost of the home. She wants to file as {gloss:head-of-household}.

She cannot. IRC § 7703(b)(3) requires the spouse not to be a member of the household during the last six
months of the taxable year — from 1 July — and he was there until 12 August. She is married as of 31
December and her only choices are joint or separate. Had he left on 25 June, she would have been treated
as not married under § 7703(b), and § 2(c) would have carried that into head of household status. Six
weeks decide it.

</div>

<div class="scenario" data-type="fails">
<h3>Separate returns and the social security surprise</h3>

A retired couple, still living together, file separately after a disagreement. Each receives social
security; one also has a pension of $34,000.

Their base amount is zero. Under § 86(c)(1)(C) a taxpayer married at the close of the year who does not
file jointly and does not live apart from the spouse at all times during the year has a base amount and
an adjusted base amount of zero, so benefits are taxable from the first dollar, up to the statutory
maximum inclusion. The couple filing separately pay more tax on the same benefits than they would have
filing jointly, and nothing in the fact pattern warned them.

</div>

<div class="scenario" data-type="timing">
<h3>The change of mind that came too late</h3>

A couple filed separately for 2022. In 2026 their new preparer notices that a joint return would have
produced a refund and asks whether they can still switch.

They cannot. IRC § 6013(b)(2)(A) bars the election more than three years after the last date prescribed
for filing that year's return, determined without regard to extensions — that ran out in April 2026 for
a 2022 return. Had they filed jointly and now wanted separate returns, they could not have switched
either: § 6013(b) provides only the separate-to-joint direction, and after the due date the joint return
stands.

</div>

<div class="scenario" data-type="baseline">
<h3>The straightforward joint return</h3>

David and Priya have combined wages of $150,000 and no complicating facts. They file jointly.

This is {gloss:married-filing-jointly} working as designed: the brackets and credits are built for it,
and neither spouse has a reason to want out. The trade-off above is real but theoretical here — both
take on {gloss:joint-and-several-liability} for the whole balance, with nothing to worry about.

</div>

<div class="callout trap">

**Believing the software's comparison is the whole answer.** It prices tax, not liability. A joint
return that saves a modest amount of tax while exposing a client to the whole of someone else's
understatement is not the better return.

**Assuming separate returns can be undone.** IRC § 6013(b) runs one way only, and even that direction
closes at three years, or earlier on a Tax Court petition, a refund suit, a closing agreement or a
compromise.

**Missing that one spouse's itemizing forces the other's.** Under § 63(c)(6)(A) the standard deduction
is zero for a married individual filing separately where *either* spouse itemizes. It is not a choice
made independently.

**Calling a separated client head of household without testing § 7703(b).** All four conditions must
hold. A qualifying relative who is not a child does not satisfy the first one for this purpose.

**Forgetting that the six months run to the end of the year.** The spouse must be absent for the *last*
six months. An absence from January to June does not qualify.

**Treating the earned income credit as merely reduced on a separate return.** It is unavailable
(IRC § 32(d)(1)), unless the taxpayer meets the separated-spouse rule in § 32(d)(2)(B), which is a
different and narrower test than § 7703(b).

**Assuming § 6015 will fix a bad joint filing.** It is relief on conditions, granted after the fact, and
the innocent spouse rules at 1.5.1.i set out how narrow the conditions are.

</div>

## How this has changed

The framework here is stable. Sections 2, 6013 and 7703 have not been materially amended in decades, and
Pub. L. 119-21 left all three alone. What the 2017 Act changed indirectly, and what remains true, is the
size of the standard deduction: with {fig:sd.mfj} on a joint return, far fewer couples itemize, which
means the § 63(c)(6)(A) trap bites less often than it used to — but bites harder when it does, because
the spouse forced out of the standard deduction now loses a much larger number.

One provision on this page has been left behind by a change elsewhere. IRC § 7703(b)(1) conditions the
considered-unmarried test on the individual being "entitled to a deduction for the taxable year under
section 151" for the child. The § 151 exemption amount has been zero since 2018. The test still works,
because § 151(d)(5)(B) provides that the reduction of the exemption amount to zero is not taken into
account in determining whether a deduction is allowed or allowable under that section for purposes of
any other provision — but a reader who follows the cross-reference without also finding § 151(d)(5)(B)
will conclude that no married individual can ever be considered unmarried, which is wrong.

The other change worth noting is presentational: the phase-out thresholds throughout the Code are now
mostly built as "half the joint amount" for a separate return, which makes the separate return neutral
where it used to be punitive. The provisions that deny outright, listed above, are the survivors of an
older approach and are the ones to check.

## Exam focus

Expect a scenario asking which statuses are available. Work it in order: is the client married at the
close of the year under § 7703(a); if so, does § 7703(b) treat them as not married; if not married by
either route, does § 2(b) give head of household.

The § 7703(b) test is the heart of it, and the details that decide questions are the *last* six months
and the requirement that the qualifying individual be a child. Expect at least one question where the
spouse departed slightly too late.

For the separate return, know the outright denials — dependent care, education credits, earned income
credit, student loan interest — and know that the social security base amount drops to zero only where
the couple did not live apart at all times. Know that § 6013(b) runs separate-to-joint only, and that
its outer limit is three years from the unextended due date.

## Check yourself

**1.** A married couple filed separate returns for a year. Eighteen months after the due date they want
to file jointly instead. May they?

*Answer: Yes, provided none of the bars applies. IRC § 6013(b)(1) permits a joint return after separate
returns, and § 6013(b)(2) closes the election only after 3 years from the unextended due date, or after
a notice of deficiency has been mailed and the spouse has petitioned the Tax Court, or after a suit for
recovery, closing agreement or compromise.*

**2.** A married couple filed a joint return and now wish to file separately for that year. The due date
has passed. May they?

*Answer: No. IRC § 6013(b) provides only for a joint return after separate returns. There is no
corresponding provision allowing the reverse after the due date, so the joint return — and the joint and
several liability under § 6013(d)(3) — stands.*

**3.** A married individual files a separate return. Her husband itemizes deductions. Her own itemized
deductions total less than the standard deduction. What is her standard deduction?

*Answer: Zero. IRC § 63(c)(6)(A) sets the standard deduction at zero for a married individual filing a
separate return where either spouse itemizes. She must itemize whatever her own deductions come to.*

**4.** A married man lived with his wife until 4 July, then moved out. His son lived with him all year
and he paid the whole cost of the home. Can he be considered unmarried?

*Answer: No. IRC § 7703(b)(3) requires the spouse not to be a member of the household during the last 6
months of the taxable year, which begins 1 July. She was a member on 1 to 4 July, so the test fails and
he is married for the year.*

**5.** A couple who live together file separate returns. One receives social security benefits. How much
of the base amount does she get?

*Answer: None. Under IRC § 86(c)(1)(C) the base amount is zero for a taxpayer who is married at the
close of the year within the meaning of § 7703, does not file a joint return, and does not live apart
from the spouse at all times during the year. The adjusted base amount is zero as well under
§ 86(c)(2)(C).*

**6. A married couple live together all year and file separate returns. The wife has earned income within the credit range and a qualifying child who lives with her. What earned income credit may she claim?**
(A) The full credit on her own return (B) Half the credit a joint return would have produced (C) None, because the credit is allowed to a married individual only on a joint return (D) The full credit, provided her husband does not also claim the child
*Answer: C. IRC § 32(d)(1) makes the earned income credit unavailable on a separate return; it is denied outright rather than reduced, unless the taxpayer meets the narrower separated-spouse rule in § 32(d)(2)(B), which a couple living together cannot.*

**7. A married woman has lived apart from her husband since February, files a separate return, and pays the whole cost of the home she shares all year with her dependent mother. May she file as head of household?**
(A) Yes, she is considered unmarried under § 7703(b) (B) No, the qualifying individual for the considered-unmarried test must be a child (C) No, a married person can never file as head of household (D) Yes, because her husband was absent for the last six months of the year
*Answer: B. IRC § 7703(b) requires a household that is the principal place of abode of a child; a qualifying relative who is not a child does not satisfy that condition, so she remains married and her choices are joint or separate.*

**8. A couple who live together all year file separate returns. The husband actively participates in a rental activity that produces a $9,000 loss. How much of the rental real estate special allowance may he use?**
(A) The full allowance available on a joint return (B) Half the allowance, with a halved phase-out range (C) None; the allowance is denied entirely to a separate filer who did not live apart from the spouse at all times (D) The $9,000 loss in full, because the allowance is not limited on a separate return
*Answer: C. IRC § 469(i)(5) halves the allowance and its phase-out range only for a married individual filing separately who lives apart from the spouse at all times during the year, and denies it entirely to one who does not.*
