---
title: "Conditions for filing a claim for refund (amended returns)"
code: "1.5.1.n"
part: 1
domain: "Advising the Individual Taxpayer"
section: "Advising the individual taxpayer"
description: "Two clocks run at once: one decides whether the claim is timely, the other caps what it can recover. A timely claim can still be worth nothing at all."
status: published
taxYear: 2026
lastReviewed: "2026-08-20"
reviewedBy: "Draft for N. O. review"
authorities:
  - { type: IRC, ref: "§ 6511", title: "Limitations on credit or refund", url: "https://www.law.cornell.edu/uscode/text/26/6511" }
  - { type: IRC, ref: "§ 6513", title: "Time return deemed filed and tax considered paid", url: "https://www.law.cornell.edu/uscode/text/26/6513" }
  - { type: IRC, ref: "§ 6402", title: "Authority to make credits or refunds", url: "https://www.law.cornell.edu/uscode/text/26/6402" }
  - { type: IRC, ref: "§ 7508", title: "Time for performing certain acts postponed by reason of service in combat zone", url: "https://www.law.cornell.edu/uscode/text/26/7508" }
  - { type: IRC, ref: "§ 7508A", title: "Authority to postpone certain deadlines by reason of federally declared disaster", url: "https://www.law.cornell.edu/uscode/text/26/7508A" }
  - { type: Form, ref: "Form 1040-X", title: "Amended U.S. Individual Income Tax Return", url: "https://www.irs.gov/forms-pubs/about-form-1040x" }
forms: []
related: ["1.5.1.h", "1.5.1.i", "1.5.1.g", "1.5.1.m", "1.1.1.a", "1.5.1.a", "1.5.1.o", "1.6.1.e"]
changelog:
  - { date: "2026-08-20", summary: "Initial draft. Sets out the two limitations that govern a refund claim — the IRC § 6511(a) period for filing and the § 6511(b)(2) cap on what may be recovered — with the § 6513(a) early return rule and § 6513(b) deemed payment dates that make them run from the same day for most individuals, the special periods in § 6511(d)(1), (2) and (3), the § 6511(h) financial disability suspension, and the postponements under §§ 7508 and 7508A." }
  - { date: "2026-08-25", summary: "Added a plain-language summary, a timeline diagram of the filing periods, glossary marks, and typed scenarios, including a new baseline scenario." }
diagram:
  archetype: "timeline"
  caption: "How long you have to file a claim for refund, and from when"
  events:
    - { when: "General rule", what: "3 years from filing the return, or 2 years from paying the tax — whichever gives more time" }
    - { when: "No return was ever filed", what: "2 years from the time the tax was treated as paid" }
    - { when: "Worthless securities or bad debts", what: "7 years from the due date of that year's return" }
    - { when: "NOL or capital loss carryback", what: "3 years from the due date, with extensions, of the loss year's return — not the year being amended" }
    - { when: "Foreign tax paid or accrued", what: "10 years from the due date of that year's return" }
---

<div class="plain-terms">
If you paid too much tax, you can ask the IRS for it back, but two separate deadlines control whether
you get anything. One deadline decides whether your request counts at all. A different deadline
limits how much of the payment you can actually recover, even if the request itself is on time. This
page is for anyone who discovers they overpaid a past year's tax and wants to know whether it is too
late, or how much they can still get back. It does not cover current-year corrections, which are fixed
on the original return instead.
</div>

A refund claim can fail in two entirely different ways, and preparers routinely check only the first.
The claim can be out of time, in which case it is not considered at all. Or it can be perfectly timely
and still recover nothing, because a second limitation caps the refund at the tax paid within a
look-back window measured from the day the claim was filed. Both have to be cleared. The second one is
what catches a client who filed a return years late and then discovers an overpayment on it.

## The rule

**The period for filing.** {fig:refundclaim.general_period} There is no separate "amended return"
deadline — Form 1040-X is the vehicle, and § 6511 is the rule.

**Two rules make the dates predictable.** {fig:refundclaim.early_return} And
{fig:refundclaim.withholding_deemed_paid} Between them, an individual who filed early and whose tax was
all withheld has both branches of § 6511(a) running from the same 15 April, so the three-year branch is
always the longer one.

**The cap on what can be recovered.** {fig:refundclaim.lookback_cap} This is the part that is missed. A
claim can be within the § 6511(a) period and still recover nothing, because no tax was paid inside the
look-back window.

**Four special periods replace the three years.** {fig:refundclaim.bad_debt_period}
{fig:refundclaim.carryback_period} {fig:refundclaim.foreign_tax_period} And a suspension rather than an
extension: {fig:refundclaim.financial_disability}

**Two postponements sit outside § 6511 entirely.** {fig:refundclaim.combat_zone}
{fig:refundclaim.disaster}

**A refund is not automatic even when the claim succeeds.** Under IRC § 6402(a) the Secretary may credit
an overpayment against any liability for internal revenue tax of the person who made it, and refunds
only the balance — before the offsets in § 6402(c) to (f) for other debts, which is where the injured
spouse allocation at 1.5.1.h becomes relevant.

## Current figures

| Item | Rule |
| --- | --- |
| Period for filing the claim | {fig:refundclaim.general_period} |
| Early return and early payment | {fig:refundclaim.early_return} |
| Withholding and estimated tax deemed paid | {fig:refundclaim.withholding_deemed_paid} |
| Cap on the amount recoverable | {fig:refundclaim.lookback_cap} |
| Bad debt or worthless security | {fig:refundclaim.bad_debt_period} |
| Net operating loss or capital loss carryback | {fig:refundclaim.carryback_period} |
| Foreign taxes paid or accrued | {fig:refundclaim.foreign_tax_period} |
| Financial disability | {fig:refundclaim.financial_disability} |
| Combat zone service | {fig:refundclaim.combat_zone} |
| Federally declared disaster | {fig:refundclaim.disaster} |

## How it works in practice

**Establish two dates before anything else.** When was the return for that year filed, treating an early
return as filed on the due date; and when was the tax for that year paid, treating withholding as paid
on the following 15 April. Everything follows from those two dates, and getting the second one wrong is
the usual source of error.

**Then ask both questions in order.** Is the claim within the § 6511(a) period? If yes, what was paid
inside the § 6511(b)(2) look-back window? A claim that clears the first and fails the second is not an
error by the preparer, but telling the client to expect a refund before checking the second is.

**The delinquent return is the hard case.** A client who files a 2021 return in 2026 showing an
overpayment made up entirely of 2021 withholding gets nothing. The withholding was deemed paid on
15 April 2022, more than three years before the claim; the return filed in 2026 is itself the claim, so
the three-year branch measured from filing does not help, and the two-year branch reaches only payments
made since 2024. The money is not late — it is gone.

**Check for a special period before concluding the claim is dead.** Worthless securities and bad debts
get seven years, and clients often do not volunteer that a loss was a worthlessness loss. A carryback
claim runs from the *loss* year, which can be much later than the year being amended. Foreign tax gets
ten years, measured from the year the foreign tax was actually paid or accrued.

**Financial disability is real and underused.** Where a client was genuinely incapacitated, § 6511(h)
suspends the clock. The two conditions that matter in practice are the twelve-month duration and the
absence of anyone authorised to act in financial matters — a client with a power of attorney in place
throughout does not qualify.

**Do not use Form 1040-X for a math error.** The IRS corrects arithmetic on its own under its
mathematical error authority and issues a notice. Filing an amended return to fix arithmetic duplicates
work and can cross with the notice.

<div class="scenario" data-type="baseline">
<h3>The claim that simply worked</h3>

A taxpayer files her 2023 return on time on 15 April 2024 and pays the $1,600 balance due with it. In
August 2026 she finds a deduction her preparer missed and wants it back.

She is well within the ordinary {gloss:statute-of-limitations}: the {gloss:claim-for-refund} is filed
less than three years after the return, and the $1,600 she paid with that return sits comfortably
inside the two-year look-back measured from today as well. Both tests clear easily, and the refund
comes back in full. Most claims that reach a preparer's desk look like this one — the two limitations
only start to matter at the edges.

</div>

<div class="scenario" data-type="fails">
<h3>The refund that was timely and worthless</h3>

A client never filed for 2021. In June 2026 he files, showing $6,400 of withholding against $4,100 of
tax — a $2,300 overpayment. He made no other payments for that year.

The return is the claim. Because no return had been filed, the § 6511(a) period is two years from the
time the tax was paid, and under § 6513(b)(1) the withholding was paid on 15 April 2022 — so the claim
is more than two years late and fails on the first test. Even had it been timely under the three-year
branch, § 6511(b)(2)(B) would have capped the refund at tax paid in the two years before the claim,
which is nothing. Both tests fail, for the same underlying reason.

</div>

<div class="scenario" data-type="timing">
<h3>The clock that ran from a different year</h3>

A client had a large net operating loss in 2024 that she elected to carry back, producing an overpayment
for 2021. It is now August 2026 and she has not yet filed the claim. Her 2021 return was filed on time
in April 2022.

Measured the ordinary way, the 2021 claim would have run out in April 2025. But § 6511(d)(2)(A)
substitutes a period ending three years after the due date, including extensions, of the return for the
*loss* year — 2024, so April 2028 without an extension, October 2028 with one. The claim is comfortably
in time. The year being amended is not the year the clock runs from.

</div>

<div class="scenario" data-type="interaction">
<h3>The extension that bought two things</h3>

A client extended his 2022 return to October 2023 and paid the balance due with the return in October.
In August 2026 he discovers a deduction he missed.

Both limitations move. The § 6511(a) three-year period runs from the date the return was actually filed
in October 2023, not from April, so it closes in October 2026 — he is in time. And the § 6511(b)(2)(A)
look-back is three years *plus the period of any extension*, so the October 2023 payment sits inside the
window and is fully recoverable. Had he filed on time in April 2023 and paid then, the claim in August
2026 would have been within the three years but the payment would have been within it too, so the result
would be the same — the extension matters most when the payment is late in the year.

</div>

<div class="scenario" data-type="boundary">
<h3>The power of attorney that defeated the suspension</h3>

A client suffered a stroke in 2021 and was incapacitated for eighteen months. In 2026 his son wants to
claim a refund for 2021 and relies on financial disability to suspend the period.

It does not apply. The son held a durable power of attorney over his father's financial affairs
throughout, and § 6511(h)(2)(B) excludes any period during which a spouse or any other person was
authorised to act on the individual's behalf in financial matters. The medical facts are not in doubt
and are not the point — the suspension exists because nobody could act, and somebody could.

</div>

<div class="callout trap">

**Checking only whether the claim is in time.** Section 6511(b)(2) is a separate limitation on the
*amount*. A timely claim against a year in which nothing was paid inside the look-back window recovers
nothing.

**Measuring the two-year branch from when the client wrote a cheque.** For withheld tax the payment date
is fixed by § 6513(b)(1) at the 15th day of the fourth month after the year ends, whatever the pay dates
were.

**Forgetting that an early return is deemed filed on the due date.** A return filed on 2 March is filed
on 15 April for § 6511 purposes (IRC § 6513(a)), which is why the three-year period so often ends on an
April date.

**Treating the carryback period as running from the year being amended.** It runs from the loss year
(IRC § 6511(d)(2)(A)), which is later and often much later.

**Assuming financial disability follows from the medical facts.** The exception in § 6511(h)(2)(B) for
an authorised representative disqualifies many of the clients who most obviously look disabled.

**Filing Form 1040-X to correct arithmetic.** The IRS fixes math errors itself. Use the {gloss:amended-return}
for changes to income, deductions, credits, filing status and the like.

**Assuming a successful claim produces cash.** IRC § 6402(a) lets the Secretary credit the overpayment
against other internal revenue tax liabilities first, and subsections (c) to (f) reach other debts
before any balance is refunded.

</div>

## How this has changed

Section 6511 is one of the more stable provisions in the Code. The three-year and two-year periods and
the look-back cap date from the 1954 Code; the financial disability suspension in § 6511(h) was added by
the Restructuring and Reform Act of 1998, in response to the line of cases holding that no equitable
tolling was available. Pub. L. 119-21 did not amend § 6511, § 6513 or § 7508A.

What has changed, repeatedly and materially, is the frequency of postponements under § 7508A. Disaster
declarations now postpone filing and payment deadlines for large numbers of taxpayers most years, and
because § 7508A(a)(3) reaches "the amount of any credit or refund" and not merely the filing act, a
postponement can preserve a claim that the ordinary look-back would have capped at nothing. Always check
whether the client's address was inside a disaster postponement for the year in question before
concluding a claim is out of time.

The other practical change is administrative rather than statutory: Form 1040-X can now be filed
electronically for recent years, which has shortened the interval between claim and refund but has not
altered a single date in § 6511.

## Exam focus

Expect a date question. The reliable method is to write down the deemed filing date under § 6513(a) and
the deemed payment date under § 6513(b), then apply the later of three years from the first or two years
from the second.

Expect the special periods as an "all of the following except" list: seven years for worthless securities
and bad debts, ten years for foreign taxes, and the carryback period measured from the loss year. Note
that an ordinary period of unemployment or financial hardship is *not* among them — only financial
disability as defined, which is a medical test.

The look-back cap is the harder half and appears as a scenario in which the claim is in time but the
refund is limited. Read for when the tax was actually paid, not for when the return was filed.

## Check yourself

**1.** A taxpayer filed her 2022 return on 3 March 2023. The due date was 18 April 2023. She now wants
to claim a refund. What is the last day to file the claim?

*Answer: 18 April 2026. Under IRC § 6513(a) the early return is considered filed on the last day
prescribed for filing, so the three-year period in § 6511(a) runs from 18 April 2023 rather than from
3 March.*

**2.** A taxpayer never filed for a year in which $9,000 was withheld from his wages and no other
payments were made. He files a return claiming a refund four years later. What does he recover?

*Answer: Nothing. With no return previously filed, IRC § 6511(a) gives 2 years from the time the tax was
paid, and § 6513(b)(1) deems the withholding paid on the 15th day of the fourth month after the year
closed. The claim is out of time, and § 6511(b)(2)(B) would independently cap the refund at tax paid in
the preceding two years, which is nil.*

**3.** A taxpayer has an overpayment for 2020 caused by a net operating loss arising in 2023. From which
year does the period for the refund claim run?

*Answer: From 2023, the loss year. IRC § 6511(d)(2)(A) gives a period ending 3 years after the time
prescribed for filing the return, including extensions, for the taxable year of the loss that produces
the carryback.*

**4.** A client was hospitalised and unable to manage his affairs for fourteen months, during which his
sister held a power of attorney over his finances. Does § 6511(h) suspend the limitation period?

*Answer: No. IRC § 6511(h)(2)(B) provides that an individual is not treated as financially disabled
during any period in which a spouse or any other person is authorised to act on the individual's behalf
in financial matters.*

**5.** A taxpayer's claim relates to an overpayment caused by a security that became worthless. How long
does she have to file it?

*Answer: 7 years from the date prescribed by law for filing the return for the year concerned, under
IRC § 6511(d)(1), in place of the ordinary 3-year period.*
