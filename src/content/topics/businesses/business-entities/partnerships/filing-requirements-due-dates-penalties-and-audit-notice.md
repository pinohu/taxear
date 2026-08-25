---
title: "Filing requirements, due dates, penalties, and audit notice requirements"
code: "2.1.2.i"
part: 2
domain: "Business Entities"
section: "Partnerships"
description: "The late filing penalty counts partners, not dollars of tax, and runs from the extended date. Partners lost their right to notice of an audit for years after 2017."
status: published
taxYear: 2026
lastReviewed: "2026-08-21"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 6031", title: "Return of partnership income", url: "https://www.law.cornell.edu/uscode/text/26/6031" }
  - { type: IRC, ref: "§ 6072(b)", title: "Returns of partnerships and S corporations", url: "https://www.law.cornell.edu/uscode/text/26/6072" }
  - { type: IRC, ref: "§ 6698", title: "Failure to file partnership return", url: "https://www.law.cornell.edu/uscode/text/26/6698" }
  - { type: IRC, ref: "§ 6222", title: "Partner's return must be consistent with partnership return", url: "https://www.law.cornell.edu/uscode/text/26/6222" }
  - { type: IRC, ref: "§ 6223", title: "Partners bound by actions of partnership", url: "https://www.law.cornell.edu/uscode/text/26/6223" }
  - { type: IRC, ref: "§ 6213(b)", title: "Exceptions to restrictions on assessment", url: "https://www.law.cornell.edu/uscode/text/26/6213" }
  - { type: IRC, ref: "§ 6221", title: "Determination at partnership level", url: "https://www.law.cornell.edu/uscode/text/26/6221" }
  - { type: IRC, ref: "§ 6225", title: "Partnership adjustment by Secretary", url: "https://www.law.cornell.edu/uscode/text/26/6225" }
  - { type: IRC, ref: "§ 6226", title: "Alternative to payment of imputed underpayment by partnership", url: "https://www.law.cornell.edu/uscode/text/26/6226" }
  - { type: RevProc, ref: "2025-32", title: "Inflation adjusted items for 2026", url: "https://www.irs.gov/pub/irs-drop/rp-25-32.pdf" }
forms: []
related: ["2.1.2.a", "2.1.2.h", "2.1.2.k", "2.1.1.i"]
changelog:
  - { date: "2026-08-21", summary: "Initial draft. Sets out the IRC § 6031(a) return requirement and the § 6031(b) obligation to furnish partner statements by the return due date with the four exceptions to the bar on amending them, the § 6072(b) filing date, the § 6698 penalty computed per partner per month with its 12-month cap and reasonable cause defence at the amount applying to returns required to be filed in 2027, the § 6222 consistency requirement enforced as a math error with the § 6213(b)(2) abatement right disapplied, the § 6223 designation of a partnership representative with sole authority, and the repeal by Pub. L. 114-74 § 1101 of the former §§ 6223 and 6224 partner notice and participation rights for years beginning after 2017." }
  - { date: "2026-08-25", summary: "Added a plain-language summary, a timeline diagram of the filing and audit clock, glossary marks, and typed scenarios." }
diagram:
  archetype: "timeline"
  caption: "The partnership compliance clock: filing, penalty accrual, and what changed for audits"
  events:
    - { when: "Original due date", what: "Form 1065 and Schedules K-1 are due — the 15th day of the third month after the tax year ends" }
    - { when: "If the return is extended", what: "Lateness is measured from the extended date, not the original one — the § 6698 clock restarts here" }
    - { when: "Each month (or part of one) late", what: "One more partner-month of penalty accrues, counting every partner who served any part of the year" }
    - { when: "12 months late", what: "The § 6698 penalty stops growing — a cap on the penalty, not a deadline to file" }
    - { when: "Years beginning after 2017", what: "The centralized audit regime applies: the partnership representative alone deals with the IRS, and partners have no statutory right to notice" }
---

<div class="plain-terms">
A partnership is a business owned by more than one person. It usually pays no tax of its own.
Instead, it files a report each year, and each owner reports their own share. This page covers
three things: when that report is due, what happens if it is late, and what happens if the IRS
decides to look closer at it. Every partnership and every owner is affected, even if the business
made no money at all. That is because the penalty for filing late depends on how many owners
there are and how late the report is, not on how much tax is owed. This page also covers who deals
with the IRS if it does take a closer look. Today, one person usually speaks for the whole
partnership. The other owners may never be told that a review is happening.
</div>

Partnership compliance has two features that make it unlike anything else a preparer handles. The
late-filing penalty is not measured by tax — a partnership owing nothing can accrue a five-figure penalty
— and since the {gloss:audit} regime changed, the partners have no statutory right to be told that their own tax
position is being examined. Both are consequences of the same design choice: the partnership is treated as
the unit for procedural purposes even though it is not the taxpayer.

## The rule

**The return.** {fig:ptr.return_requirement}

**Statements to the partners.** {fig:ptrfile.k1_to_partners}

**When it is due.** {fig:ptr.due_date}

**When the penalty applies.** {fig:ptrfile.penalty_trigger}

**How it is computed.** {fig:ptrfile.penalty_base}

**And at what rate.** {fig:ptr.late_penalty}

**Consistency.** {fig:ptrfile.consistency}

**Who speaks for the partnership.** {fig:ptrfile.representative}

**And what the partners lost.** {fig:ptrfile.superseded_tefra_notice}

**Electronic filing.** {fig:report.efile_threshold}

## Current figures

| Item | Rule | Authority |
| --- | --- | --- |
| Due date | {fig:ptr.due_date} | IRC § 6072(b) |
| Penalty rate | {fig:ptr.late_penalty} | Rev. Proc. 2025-32 § 3.55 |
| Penalty base | {fig:ptrfile.penalty_base} | IRC § 6698(b) |
| Partner statements | {fig:ptrfile.k1_to_partners} | IRC § 6031(b) |
| Partnership representative | {fig:ptrfile.representative} | IRC § 6223 |
| Repealed partner notice rights | {fig:ptrfile.superseded_tefra_notice} | IRC § 6223 prior provisions |

## How it works in practice

The penalty is the item that produces the most client damage relative to how little it is thought about.
It is charged for each month or fraction of a month the failure continues, multiplied by the number of
persons who were partners *during any part of the taxable year*. Three features compound: a fraction of a
month counts as a whole month, the partner count includes people who left mid-year, and the amount has
nothing to do with the tax at stake. A twelve-partner partnership that files four months late accrues
forty-eight partner-months of penalty on a return that may show a loss.

Two details decide most computations. The lateness runs from the due date determined with regard to any
extension (IRC § 6698(a)(1)), so a partnership that extended is late only from the extended date. And the
cap is twelve months, so a return years late is not penalised beyond a year — though the reasonable cause
defence, not the cap, is where the real relief lies.

The rate is indexed and the statute does not print the current figure. IRC § 6698(b) gives a base amount
that IRC § 6698(e) then adjusts, rounded down to a multiple of five dollars. Reading the section alone
gives a number that has not been correct for many years, which is why the operative figure has to come
from the annual revenue procedure.

The obligation to furnish partner statements sits alongside the return and carries its own timing:
{gloss:schedule-k-1}s must reach the partners on or before the day the return is due. Note the restriction that
follows in IRC § 6031(b) — the information furnished may not be amended after the due date except in four
listed situations, all of which belong to the centralised audit regime. A partnership that discovers an
error in a Schedule K-1 after the due date cannot simply reissue it.

IRC § 6222 is the provision that binds the partner to the partnership's treatment, and its enforcement
mechanism is unusually sharp. An underpayment resulting from inconsistent treatment is assessed as though
it were a mathematical or clerical error — meaning no {gloss:notice-of-deficiency}, no Tax Court petition before
assessment — and IRC § 6213(b)(2), which would ordinarily let a taxpayer request abatement of a math error
assessment and force the Service to proceed by deficiency, is expressly disapplied. A partner who takes a
different view from the partnership and does not notify the Service of the inconsistency has almost no
procedural protection.

The audit regime is where the largest change sits. Under the current rules the partnership designates a
partnership representative — a partner or other person with a substantial presence in the United States —
who has *sole* authority to act for the partnership, and the partnership and all its partners are bound
by what that person does and by any final decision in the proceeding. If no designation is in effect, the
Service may select the representative.

What that replaced is the point worth knowing. The prior regime gave partners a statutory right to notice
that a proceeding had begun and that it had concluded, and rights to participate in it. Those provisions
were repealed for returns filed for partnership taxable years beginning after 2017. A partner in a
partnership under examination today has no statutory entitlement to be told, and is nonetheless bound by
the outcome. Whatever notice a partner receives comes from the partnership agreement, not from the Code —
which makes a notice-and-consultation clause a substantive protection rather than boilerplate.

## Scenarios

<div class="scenario" data-type="timing">
<h3>The extension that was used up</h3>
<p>A calendar-year partnership with five partners obtains a six-month extension of its 2026 Form 1065 and
files on 10 November 2027.</p>
<p>The unextended due date was 15 March 2027 and the extension carried it to 15 September 2027. Lateness
runs from the extended date, because IRC § 6698(a)(1) measures the failure from the time prescribed
"determined with regard to any extension of time for filing". From 16 September to 10 November is one full
month and part of a second, and a fraction of a month counts as a whole one, so the penalty runs for two
months. Two months multiplied by five partners gives ten partner-months, at the rate applying to returns
required to be filed in 2027. The partnership's tax position is irrelevant to the computation.</p>
</div>

<div class="scenario" data-type="boundary">
<h3>The partner who left in February</h3>
<p>A partnership had nine partners at the start of 2026. One retired on 28 February and was not replaced,
so eight partners remained for the rest of the year and eight Schedules K-1 were issued for the full
period plus one short-period K-1 for the retiring partner. The return is filed three months late.</p>
<p>The multiplier is nine, not eight. IRC § 6698(b)(2) counts the number of persons who were partners in
the partnership <em>during any part of the taxable year</em>, and the retiring partner was a partner
during part of it. Twenty-seven partner-months rather than twenty-four. The same principle catches
partnerships with high turnover: a firm that admitted three partners and lost two during the year is
penalised on a count higher than the number appearing on its year-end balance sheet.</p>
</div>

<div class="scenario" data-type="procedural">
<h3>The partner who disagreed quietly</h3>
<p>A partnership reports a large expenditure as currently deductible. One partner, advised that it should
have been capitalised, reports her share differently on her own return. She files nothing to notify the
Service of the inconsistency and assumes any dispute will follow the ordinary deficiency route.</p>
<p>It will not. Under IRC § 6222(a) she must treat a partnership-related item consistently with the
partnership return, and under IRC § 6222(b) any underpayment resulting from a failure to do so is assessed
and collected as if it were a mathematical or clerical error. That means no notice of deficiency and no
opportunity to petition the Tax Court before assessment — and IRC § 6222(b) goes further, disapplying
IRC § 6213(b)(2), which would otherwise let her request abatement and force the Service to proceed by way
of deficiency. Notifying the Service of the inconsistent treatment is what preserves her position; taking
it silently forfeits the procedure.</p>
</div>

<div class="scenario" data-type="fails">
<h3>The audit nobody told the partners about</h3>
<p>A partnership with thirty limited partners is examined for its 2024 year. The partnership
representative negotiates and settles the adjustments without informing the limited partners, who learn of
the settlement when the resulting statements reach them. Several object that they were entitled to notice
and a chance to participate.</p>
<p>They were not, as a matter of statute. IRC § 6223(a) gives the partnership representative sole
authority to act on behalf of the partnership, and IRC § 6223(b) binds the partnership and all its
partners both by the actions taken and by any final decision in the proceeding. The provisions that once
gave partners notice of the beginning and completion of a proceeding and rights to participate were
repealed for returns filed for partnership taxable years beginning after 2017. Any rights these partners
have come from the partnership agreement. Where the agreement is silent, they have none.</p>
</div>

<div class="callout trap">
<strong>Traps</strong>
<ul>
<li><strong>The penalty is not measured by tax.</strong> A partnership with no income and no tax can accrue
a substantial penalty.</li>
<li><strong>A fraction of a month is a whole month.</strong> Filing one day late costs a full month per
partner.</li>
<li><strong>Count everyone who was a partner at any point.</strong> IRC § 6698(b)(2) is not a year-end
headcount.</li>
<li><strong>Lateness runs from the extended date.</strong> The extension is taken into account, so a
partnership that extended is not late until the extended date passes.</li>
<li><strong>The statute's printed figure is not the rate.</strong> IRC § 6698(e) indexes it; the operative
amount comes from the annual revenue procedure.</li>
<li><strong>Schedules K-1 cannot generally be amended after the due date.</strong> IRC § 6031(b) allows it
only in four listed circumstances.</li>
<li><strong>Inconsistent treatment is a math error assessment.</strong> With the IRC § 6213(b)(2)
abatement right expressly disapplied.</li>
<li><strong>Partners have no statutory notice right.</strong> The representative acts alone and binds
them all.</li>
</ul>
</div>

## How this has changed

The centralised audit regime replaced its predecessor for returns filed for partnership taxable years
beginning after 31 December 2017, and the change to partner rights is more radical than the change to
mechanics.

Under the prior regime, partnerships above a size threshold were subject to unified proceedings in which
each partner had a statutory right to notice that a proceeding had begun and that it had concluded, and a
right to participate in it. A tax matters partner represented the partnership but did not displace those
rights. Pub. L. 114-74 § 1101 repealed the notice and participation provisions and replaced the tax matters
partner with a partnership representative who has *sole* authority. The representative need not even be a
partner, and if the partnership fails to designate one the Service may choose.

The practical consequence is that a protection which used to come from the Code must now come from the
partnership agreement. Any agreement drafted before 2016 that relies on the statutory notice rights is
relying on provisions that no longer exist, and a limited partner who wants to know about an examination
of their own tax position needs a contractual right to be told.

The IRC § 6698 penalty has not changed in structure. Its amount is indexed, which is a slower kind of
change but one that makes any figure quoted from memory wrong within a few years — and the statute's own
printed number was last correct decades ago.

## Exam focus

The penalty computation is the reliable question, and it has four inputs: the number of months, counting
any fraction as a whole month; the number of persons who were partners at any time in the year; the rate
for the year the return was required to be filed; and whether an extension moved the starting point.
Distractors usually change one of these — most often substituting the year-end partner count or ignoring
the extension.

Expect the due date to be tested alongside the S corporation date, since they are the same. Both are the
fifteenth day of the third month, not the fourth.

For the audit material, the answer to "must the partners be notified" is no under the current regime, and
the answer to "who may bind the partnership" is the partnership representative alone. A question set in a
year before 2018 takes the opposite answers, so read the year.

## Check yourself

**1.** A calendar-year partnership with seven partners files its Form 1065 for 2026 on 2 April 2027,
having obtained no extension. For how many partner-months is the penalty charged?

*Answer: seven. The return was due 15 March 2027, and 16 March to 2 April is a fraction of a month, which
IRC § 6698(a) counts as a whole month. One month multiplied by seven partners gives seven partner-months.
Whether the partnership had income or tax is irrelevant.*

**2.** A partnership had eleven partners at 1 January, admitted two in June, and had one retire in
August. How many partners are counted for the IRC § 6698 penalty?

*Answer: thirteen. IRC § 6698(b)(2) counts the number of persons who were partners in the partnership
during any part of the taxable year. The eleven at the start plus the two admitted in June are all
partners during part of the year, and the one who retired in August is counted too — the count is
cumulative, not a snapshot.*

**3.** A partner disagrees with the partnership's treatment of an item, reports it differently, and does
not notify the Service. The Service assesses the resulting underpayment. What procedural rights does the
partner have?

*Answer: very few. IRC § 6222(b) provides that the underpayment is assessed and collected as if it were a
mathematical or clerical error, so there is no notice of deficiency and no pre-assessment Tax Court
petition — and it expressly disapplies IRC § 6213(b)(2), which would otherwise allow the partner to
request abatement and force the Service to proceed by deficiency.*

**4.** A partnership is under examination. Must the Service notify each partner that a proceeding has
begun?

*Answer: no, for partnership taxable years beginning after 2017. IRC § 6223(a) gives the partnership
representative sole authority to act, and IRC § 6223(b) binds the partnership and all its partners. The
former IRC §§ 6223 and 6224, which gave partners notice and participation rights, were repealed by
Pub. L. 114-74 § 1101. Any notice right must come from the partnership agreement.*

**5.** A partnership discovers in June, three months after its return was filed on the 15 March due date,
that a Schedule K-1 overstated a partner's share of income. May it furnish an amended statement?

*Answer: not simply by reissuing it. IRC § 6031(b) prohibits amending the information furnished after the
due date of the return except in four cases: where the partnership elected out under IRC § 6221(b), under
the IRC § 6225(c) modification procedures, in connection with IRC § 6226 statements, or as regulations
otherwise permit. The correction has to be made through one of those routes.*
