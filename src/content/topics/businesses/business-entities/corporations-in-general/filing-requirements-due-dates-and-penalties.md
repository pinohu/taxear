---
title: "Filing requirements, due dates, and penalties"
code: "2.1.3.a"
part: 2
domain: "Business Entities"
section: "Corporations in general"
description: "The June year end lost its extra month for years beginning after 2025, so 2026 is the changeover. Failing to file and failing to pay do not simply add up either."
status: review
taxYear: 2026
lastReviewed: "2026-08-21"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 6072(a)", title: "Time for filing income tax returns", url: "https://www.law.cornell.edu/uscode/text/26/6072" }
  - { type: IRC, ref: "§ 6651", title: "Failure to file tax return or to pay tax", url: "https://www.law.cornell.edu/uscode/text/26/6651" }
  - { type: IRC, ref: "§ 170", title: "Charitable contributions (Pub. L. 114-41 § 2006(a)(3) note)", url: "https://www.law.cornell.edu/uscode/text/26/170" }
  - { type: Reg, ref: "§ 1.6081-3", title: "Automatic extension of time to file corporation income tax returns", url: "https://www.law.cornell.edu/cfr/text/26/1.6081-3" }
  - { type: Reg, ref: "§ 301.6011-5", title: "Required use of electronic form for corporate income tax returns", url: "https://www.law.cornell.edu/cfr/text/26/301.6011-5" }
  - { type: IRC, ref: "§ 6698", title: "Failure to file partnership return", url: "https://www.law.cornell.edu/uscode/text/26/6698" }
  - { type: RevProc, ref: "2025-32", title: "Inflation adjusted items for 2026", url: "https://www.irs.gov/pub/irs-drop/rp-25-32.pdf" }
forms: []
related: ["2.1.3.g", "2.1.1.c", "2.1.1.i", "2.1.3.b", "2.1.3.c"]
changelog:
  - { date: "2026-08-21", summary: "Initial draft. Sets out the IRC § 6072(a) fourth-month filing date for C corporations, the Pub. L. 114-41 § 2006(a)(3)(B) deferral that kept June 30 corporations on the third-month date for taxable years beginning before 1 January 2026 and the fact that it expires with the year beginning 1 July 2026, the Reg. § 1.6081-3(a) automatic six-month extension with the Reg. § 1.6081-3(e) seven-month exception expiring on the same terms, the IRC § 6651(a)(1) and (a)(2) additions to tax, the § 6651(c)(1) coordination that stops them accumulating, the minimum addition for a return more than 60 days late at the amount applying to returns required to be filed in 2027, and the Reg. § 301.6011-5 electronic filing requirement." }
---

Corporate filing is mostly mechanical, and the mechanics have one moving part this year. A transitional
rule that has kept June-year-end C corporations on an earlier filing date for a decade expires with the
taxable year beginning 1 July 2026, so the same corporation files on one date for the year ending 30 June
2026 and on a different one for the year ending 30 June 2027. Almost everything else on this page has been
stable for years, which is precisely why the one change is worth being exact about.

## The rule

**When the return is due.** {fig:corp.return_date}

**Except for a June year end, until now.** {fig:corpfile.june30_transition}

**Extension.** {fig:corpfile.extension}

**And its own June exception.** {fig:corpfile.june30_extension}

**Failure to file.** {fig:corpfile.failure_to_file}

**Failure to pay.** {fig:corpfile.failure_to_pay}

**How they interact.** {fig:corpfile.penalty_coordination}

**The floor for a return more than sixty days late.** {fig:corpfile.minimum_penalty}

**Electronic filing.** {fig:corp.efile_threshold}

## Current figures

| Item | Rule | Authority |
| --- | --- | --- |
| Filing date | {fig:corp.return_date} | IRC § 6072(a) |
| June 30 transition | {fig:corpfile.june30_transition} | Pub. L. 114-41 § 2006(a)(3)(B) |
| Extension | {fig:corpfile.extension} | Reg. § 1.6081-3(a) |
| June 30 extension | {fig:corpfile.june30_extension} | Reg. § 1.6081-3(e) |
| Failure to file | {fig:corpfile.failure_to_file} | IRC § 6651(a)(1) |
| Failure to pay | {fig:corpfile.failure_to_pay} | IRC § 6651(a)(2) |
| Minimum addition | {fig:corpfile.minimum_penalty} | Rev. Proc. 2025-32 § 3.52 |

## How it works in practice

Get the entity type right before the date. A C corporation files under the general rule in IRC § 6072(a)
— the fifteenth day of the fourth month after the close of the year. Partnerships and S corporations file
under IRC § 6072(b), the fifteenth day of the third month. The two are a month apart in the opposite
direction from what most people remember, because the pass-through entities file *first*: their owners
need the Schedules K-1 before their own returns are due.

The June exception is the item to be careful with in 2026 and 2027. When the filing dates were rewritten
in 2015, C corporations moved from the third month to the fourth — but a corporation with a June year end
was left on the old date for a further decade. That deferral applies to returns for taxable years
*beginning* before 1 January 2026, so the last year covered is the one beginning 1 July 2025 and ending
30 June 2026, due 15 September 2026. The next year, beginning 1 July 2026, is on the general rule and is
due 15 October 2027.

The extension carries the same split and expires with it. A corporation gets an automatic six-month
extension on a timely Form 7004 with the estimated unpaid liability remitted; a June-year C corporation
whose year begins before 1 January 2026 gets seven months instead. Both halves of the June concession end
together, so the year ending 30 June 2027 gets the ordinary six months from the ordinary fourth-month
date.

Two things about the extension are worth stating because they are so often assumed away. It is an
extension of time to *file*, not to pay (Reg. § 1.6081-3(b)), and the failure-to-pay addition runs from
the unextended payment date regardless. And it is conditional: remitting the properly estimated
unpaid tax liability is one of the requirements, so an application filed without payment is vulnerable.

On penalties, the two additions in IRC § 6651(a) are different animals. Failure to file is charged on the
tax *required to be shown* on the return, at five percent a month to a twenty-five percent ceiling.
Failure to pay is charged on the tax *shown*, at half a percent a month. Both count a fraction of a month
as a whole month, and both measure from a date determined with regard to any extension — but they are
different extensions: the filing date for the first, the payment date for the second.

IRC § 6651(c)(1) is the provision that stops the two accumulating and is routinely overlooked. For any
month to which both apply, the failure-to-file addition is reduced by the failure-to-pay addition. So a
corporation both late in filing and late in paying is charged at the higher rate for those months, not at
the sum of the two.

The minimum addition applies where a return is more than sixty days late, and it is the lesser of a fixed
indexed amount or the whole of the tax required to be shown. It is indexed annually, so the figure has to
come from the revenue procedure rather than from IRC § 6651(a) itself.

## Scenarios

<div class="scenario">
<h3>The June year that changed date</h3>
<p>A C corporation has always used a year ending 30 June. Its controller diaries the Form 1120 for
15 September each year and has done so since 2016.</p>
<p>For the year ending 30 June 2026 he is right: that year began 1 July 2025, before 1 January 2026, so
Pub. L. 114-41 § 2006(a)(3)(B) keeps it on the third-month date, due 15 September 2026, with a seven-month
extension available to 15 April 2027. For the year ending 30 June 2027 he is wrong. That year began
1 July 2026, so the general rule in IRC § 6072(a) applies: due 15 October 2027, with the ordinary
six-month extension to 15 April 2028. The extended dates happen to coincide, which is why the change is
easy to miss — it is the unextended date that moves, by a month.</p>
</div>

<div class="scenario">
<h3>The return filed on time and the tax paid late</h3>
<p>A calendar-year C corporation files its Form 1120 on the due date showing tax of $4,000, and pays
nothing until two months later.</p>
<p>There is no failure-to-file addition at all, because the return was filed on time. The failure-to-pay
addition under IRC § 6651(a)(2) is 0.5 percent of the tax shown for the first month and a further
0.5 percent for the second, so 1 percent of $4,000, or $40. The commonest error on facts like these is to
describe the charge as a late-filing penalty; it is not, and the distinction matters because the
late-filing rate is ten times higher and is charged on a different base.</p>
</div>

<div class="scenario">
<h3>Both late, and not twice as bad</h3>
<p>A calendar-year C corporation with tax of $200,000 files its return three months late and pays nothing
until the return is filed. It has no extension and no reasonable cause.</p>
<p>Run the two additions separately and then coordinate. Failure to file is 5 percent a month for three
months, so 15 percent, or $30,000. Failure to pay is 0.5 percent a month for the same three months, so
1.5 percent, or $3,000. Under IRC § 6651(c)(1) the failure-to-file addition is reduced by the
failure-to-pay addition for each month both apply, so the combined charge is $30,000 and not $33,000 —
in effect 4.5 percent a month for filing plus 0.5 percent for paying. The corporation's exposure is the
higher of the two rates for the overlapping months, which is the point of the subsection.</p>
</div>

<div class="scenario">
<h3>The dormant corporation that filed nothing</h3>
<p>A calendar-year C corporation is dormant and owes no tax for the year. It files its Form 1120 fourteen
months late.</p>
<p>The exposure is nil. Both additions in IRC § 6651(a) are computed as a percentage of tax — required to
be shown in the case of (a)(1) and shown in the case of (a)(2) — and a percentage of nothing is nothing.
The minimum addition for a return more than sixty days late does not rescue the Service either: it is the
lesser of the fixed indexed amount or 100 percent of the tax required to be shown, and the second of those
is zero. Note that this is where a corporation differs sharply from a partnership: the IRC § 6698 penalty
is measured in partners and months rather than tax, so a dormant partnership filing fourteen months late
would face twelve months of penalty per partner.</p>
</div>

<div class="callout trap">
<strong>Traps</strong>
<ul>
<li><strong>Fourth month for a C corporation, third for a pass-through.</strong> IRC § 6072(a) and (b) run
in the opposite direction from most people's memory.</li>
<li><strong>The June concession ends with the year beginning 1 July 2026.</strong> Both the filing date
and the seven-month extension.</li>
<li><strong>An extension is of time to file only.</strong> The failure-to-pay addition runs from the
unextended payment date.</li>
<li><strong>The extension is conditional.</strong> Remitting the properly estimated unpaid liability is a
requirement of Reg. § 1.6081-3(a), not a courtesy.</li>
<li><strong>Different bases.</strong> Failure to file is on tax required to be shown; failure to pay is on
tax shown.</li>
<li><strong>They do not add up.</strong> IRC § 6651(c)(1) reduces the filing addition by the paying
addition for any overlapping month.</li>
<li><strong>No tax means no penalty for a corporation.</strong> Both additions are percentages of tax,
which is not true of the partnership penalty.</li>
</ul>
</div>

## How this has changed

The filing dates were rewritten in 2015 and the change was a swap. Before it, C corporations filed in the
third month and partnerships in the fourth; afterwards, partnerships and S corporations file in the third
month and C corporations in the fourth. The purpose was to let the pass-through entities report to their
owners before the owners' own returns were due, and it reversed the order that had held for decades. Any
material describing a March date for a C corporation is pre-2016 — and, awkwardly, is *correct* for a June
year end in every year before the one now beginning.

The June concession is the residue of that swap. Pub. L. 114-41 § 2006(a)(3)(B) gave C corporations with a
June year end an extra ten years on the old date, and Reg. § 1.6081-3(e) gave them a seven-month extension
to match. Both are drafted by reference to taxable years beginning before 1 January 2026, so both expire
together, and the first year affected is the one beginning 1 July 2026. This is the last year in which a
practitioner can rely on the old date for such a corporation, and the first in which the file is likely to
carry a diary note that has become wrong.

The additions to tax in IRC § 6651 have not changed in structure. The minimum addition for a return more
than sixty days late is indexed and therefore moves annually, which makes any figure recalled from memory
unreliable within a couple of years.

## Exam focus

The date question is the reliable one, and it usually turns on the entity type. A C corporation files in
the fourth month; a partnership or S corporation in the third. Where the question gives a June year end
for a C corporation, check the year: for a year beginning before 2026 the answer is the third month, and
for a year beginning after 2025 it is the fourth.

The penalty computation usually gives tax, a number of months, and asks for the addition. Read whether the
failure was to file, to pay, or both. If both, remember IRC § 6651(c)(1) and do not add the two rates
together. If neither the return nor the payment was late, there is no addition however unhelpful the
corporation has been.

Where a question describes a return filed on time with the tax paid late, the answer is the half-percent
rate, and any option computed at five percent is testing whether the candidate read the stem.

## Check yourself

**1.** A C corporation has a taxable year ending 30 June 2027. When is its Form 1120 due, without
extension?

*Answer: 15 October 2027. That year began 1 July 2026, so it is outside the Pub. L. 114-41
§ 2006(a)(3)(B) deferral, which applied only to taxable years beginning before 1 January 2026. The general
rule in IRC § 6072(a) applies: the fifteenth day of the fourth month following the close of the fiscal
year.*

**2.** The same corporation's year ends 30 June 2026. When is the return due, and how long an extension is
available?

*Answer: 15 September 2026, with a seven-month extension to 15 April 2027. That year began 1 July 2025, so
it is inside the deferral and inside the Reg. § 1.6081-3(e) exception, both of which turn on the year
beginning before 1 January 2026.*

**3.** A calendar-year C corporation files its return on time showing $9,000 of tax and pays three months
late. What is the addition to tax?

*Answer: $135. There is no failure-to-file addition, because the return was filed on time. IRC § 6651(a)(2)
charges 0.5 percent of the tax shown for each month or fraction of a month, so 1.5 percent of $9,000. The
five percent rate applies only to a failure to file.*

**4.** A calendar-year C corporation with $60,000 of tax files four months late and pays when it files.
What is the total addition?

*Answer: $12,000. Failure to file at 5 percent a month for four months is 20 percent, or $12,000. Failure
to pay at 0.5 percent a month for four months is 2 percent, or $1,200. Under IRC § 6651(c)(1) the
failure-to-file addition is reduced by the failure-to-pay addition for each month both apply, so the total
is $12,000 rather than $13,200.*

**5.** A dormant C corporation owing no tax files its return eleven months late. What is the addition?

*Answer: nil. Both additions in IRC § 6651(a) are percentages of tax — required to be shown for (a)(1) and
shown for (a)(2) — and the corporation has none. The minimum addition for a return more than sixty days
late is the lesser of a fixed indexed amount or 100 percent of the tax required to be shown, and that is
also nil.*
