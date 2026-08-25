---
title: "Revocation, termination and reinstatement"
code: "2.1.5.f"
part: 2
domain: "Business Entities"
section: "S corporations"
description: "Revocation needs half the shares, not half the shareholders, and a single disqualifying share ends the election on the day it is issued rather than at year end."
status: published
taxYear: 2026
lastReviewed: "2026-08-21"
reviewedBy: "Draft for N. O. review"
authorities:
  - { type: IRC, ref: "§ 1362(d)", title: "Termination", url: "https://www.law.cornell.edu/uscode/text/26/1362" }
  - { type: IRC, ref: "§ 1362(e)", title: "Treatment of S termination year", url: "https://www.law.cornell.edu/uscode/text/26/1362" }
  - { type: IRC, ref: "§ 1362(f)", title: "Inadvertent invalid elections or terminations", url: "https://www.law.cornell.edu/uscode/text/26/1362" }
  - { type: IRC, ref: "§ 1362(g)", title: "Election after termination", url: "https://www.law.cornell.edu/uscode/text/26/1362" }
  - { type: IRC, ref: "§ 1361(b)", title: "Small business corporation", url: "https://www.law.cornell.edu/uscode/text/26/1361" }
  - { type: IRC, ref: "§ 1371", title: "Coordination with subchapter C", url: "https://www.law.cornell.edu/uscode/text/26/1371" }
  - { type: IRC, ref: "§ 1377(b)", title: "Post-termination transition period", url: "https://www.law.cornell.edu/uscode/text/26/1377" }
  - { type: IRC, ref: "§ 481(d)", title: "Adjustments attributable to conversion from S corporation to C corporation", url: "https://www.law.cornell.edu/uscode/text/26/481" }
forms: []
related: ["2.1.5.a", "2.1.5.b", "2.1.5.d", "2.1.5.c", "2.1.1.d", "2.1.5.g", "2.1.5.h"]
changelog:
  - { date: "2026-08-21", summary: "Initial draft. Sets out the three ways an election ends under IRC § 1362(d) — revocation by more than one-half of the shares, cessation of small business corporation status effective on the date of cessation, and the three-year passive investment income test — with the IRC § 1362(e) S termination year and its daily allocation, closing-of-the-books election and mandatory close on a 50 percent ownership change, the IRC § 1362(f) inadvertent termination relief, and the IRC § 1362(g) five-year waiting period. Records that the IRC § 481(d) and IRC § 1371(f) eligible terminated S corporation rules are confined to revocations made in the two-year window that closed on 21 December 2019." }
  - { date: "2026-08-25", summary: "Added a plain-language summary, a decision diagram of the three ways an election ends, glossary marks, and a typed scenario showing the revocation and mandatory-close rules colliding in the same S termination year." }
diagram:
  archetype: "decision"
  caption: "Does the S election survive the year?"
  tests:
    - { test: "More than half the shares vote to revoke?", result: "Revoked — effective on the date chosen or required by statute", outcome: "fail" }
    - { test: "Still meets the § 1361(b) small business corporation tests?", result: "Terminates on the date it stopped qualifying", outcome: "fail" }
    - { test: "Three straight years of E&P plus excess passive investment income?", result: "Terminates at the start of the next tax year", outcome: "fail" }
    - { test: "None of the above happened this year", result: "The election stays in effect", outcome: "pass" }
---

<div class="plain-terms">
An S corporation's tax election can end in three ways. The owners can vote to end it. The
company can stop meeting the ownership rules for a small business. Or too much of its income
can come from investments for three years straight. This page covers how each path works,
when the change takes effect, and how a company can come back to S status later. It matters
to owners and advisors of small, closely held corporations that have already elected S
treatment. It does not affect partnerships, sole proprietors, or corporations that never made
that election. The page sets the exact date an election ends, how that year's income gets
split between the old company and the new one, and how long a company must wait before it can
elect S status again.
</div>

An election ends in one of three ways, and only the first is deliberate. The two that are not
share a feature worth internalising early: they take effect on the day the disqualifying fact
occurs, not at the end of the year in which someone notices.

## The rule

**Revocation.** {fig:term.revoke_consent} (IRC § 1362(d)(1)(B)). And
{fig:term.revoke_timing} (IRC § 1362(d)(1)(C), (D)).

**Ceasing to qualify.** {fig:term.cease_qualify} (IRC § 1362(d)(2)). Any failure of the
IRC § 1361(b) requirements will do it — an ineligible shareholder, a 101st shareholder, a second
class of stock — and the effective date is the date of the failure.

**Passive investment income.** {fig:term.passive_test} (IRC § 1362(d)(3)(A)). Two conditions,
both required, for three consecutive years. {fig:term.passive_defined}
(IRC § 1362(d)(3)(C)), and {fig:term.gross_receipts_assets} (IRC § 1362(d)(3)(B)).

**The year of the break.** {fig:term.s_termination_year} (IRC § 1362(e)(4), (e)(1)). Items are
split: {fig:term.pro_rata_split} (IRC § 1362(e)(2)), unless
{fig:term.closing_books} (IRC § 1362(e)(3)) — and {fig:term.fifty_percent}
(IRC § 1362(e)(6)(D)).

**Relief.** {fig:term.inadvertent} (IRC § 1362(f)).

**Coming back.** {fig:term.five_year_wait} (IRC § 1362(g)).

## Current figures

| Item | Rule | Authority |
| --- | --- | --- |
| Consent to revoke | {fig:term.revoke_consent} | IRC § 1362(d)(1)(B) |
| When a revocation bites | {fig:term.revoke_timing} | IRC § 1362(d)(1)(C), (D) |
| Ceasing to qualify | {fig:term.cease_qualify} | IRC § 1362(d)(2) |
| Passive investment income test | {fig:term.passive_test} | IRC § 1362(d)(3)(A) |
| Passive investment income, defined | {fig:term.passive_defined} | IRC § 1362(d)(3)(C) |
| Gross receipts from asset sales | {fig:term.gross_receipts_assets} | IRC § 1362(d)(3)(B) |
| The S termination year | {fig:term.s_termination_year} | IRC § 1362(e)(4), (e)(1) |
| Default allocation | {fig:term.pro_rata_split} | IRC § 1362(e)(2) |
| Closing the books | {fig:term.closing_books} | IRC § 1362(e)(3) |
| Mandatory close | {fig:term.fifty_percent} | IRC § 1362(e)(6)(D) |
| C short year tax | {fig:term.c_short_annualized} | IRC § 1362(e)(5)(A) |
| Due date | {fig:term.due_date} | IRC § 1362(e)(6)(B) |
| Inadvertent termination relief | {fig:term.inadvertent} | IRC § 1362(f) |
| Waiting period | {fig:term.five_year_wait} | IRC § 1362(g) |
| Distributions after termination | {fig:sc.ptt_distribution} | IRC § 1371(e) |
| Eligible terminated S corporation | {fig:term.eligible_terminated} | IRC § 481(d)(2) |
| Six-year spread | {fig:term.481_spread} | IRC § 481(d)(1) |
| Ratio rule after the period | {fig:term.1371f_ratio} | IRC § 1371(f) |

## How it works in practice

**Count shares, not heads.** {fig:term.revoke_consent} (IRC § 1362(d)(1)(B)). The contrast with
the election is deliberate and is examined constantly: an election under IRC § 1362(a) needs the
consent of **every** shareholder, while a revocation needs the consent of holders of **more than
half the shares**. Non-voting shares count in the denominator and in the numerator, so a
shareholder holding a majority of a non-voting block can revoke over the objection of the voting
holders.

**A revocation has three possible effective dates.** {fig:term.revoke_timing}
(IRC § 1362(d)(1)(C), (D)). The 15th-day-of-the-third-month line is the same line that governs a
late election, and for the same reason: it is the point past which retroactivity to the start of
the year is no longer available. The prospective-date rule of IRC § 1362(d)(1)(D) is the escape,
and it is why a well-advised revocation almost always names its own date.

**Disqualification is instantaneous.** {fig:term.cease_qualify} (IRC § 1362(d)(2)). Transfer one
share to a partnership on 3 April and the election is gone from 3 April. Nothing about the
corporation's intentions, and nothing about when the transfer is discovered, changes that. The
remedy is IRC § 1362(f), not a re-reading of IRC § 1362(d)(2).

**The passive income test needs both limbs, three years running.**
{fig:term.passive_test} (IRC § 1362(d)(3)(A)). A corporation with no accumulated earnings and
profits can hold nothing but municipal bonds indefinitely and never terminate on this ground — the
first limb is never satisfied. That is the single most common error on this rule, and it is worth
saying to yourself in the negative: **no accumulated earnings and profits, no termination under
IRC § 1362(d)(3)**.

**Watch the gross receipts arithmetic.** {fig:term.gross_receipts_assets}
(IRC § 1362(d)(3)(B)). A corporation that sells a building at a gain adds only the gain to gross
receipts, not the sale price. Because the fraction is passive receipts over total receipts, using
the gross sale price would drown the passive income and produce the wrong answer.

**Split the year of the break.** {fig:term.s_termination_year} (IRC § 1362(e)(4), (e)(1)).
Two returns, and {fig:term.due_date} (IRC § 1362(e)(6)(B)) — so the S short year return is pulled
forward to the C corporation's date rather than keeping the 1120-S date. The default allocation is
{fig:term.pro_rata_split} (IRC § 1362(e)(2)), which is a daily average and ignores when the income
actually arose. The corporation may elect out, but {fig:term.closing_books}
(IRC § 1362(e)(3)) — every shareholder on either side of the line, which is a harder consent to
collect than it sounds when the termination was caused by a shareholder who has since gone.

**One case closes the books without an election.** {fig:term.fifty_percent}
(IRC § 1362(e)(6)(D)). Where half or more of the stock changes hands in the termination year, the
daily allocation is switched off by the statute itself.

**Relief is available and is used constantly.** {fig:term.inadvertent} (IRC § 1362(f)). Note the
four conditions, and note in particular the last: every shareholder for the period must agree to
whatever adjustments the Secretary requires. Relief is discretionary and is sought by private
letter ruling.

**Coming back takes five years, or the Secretary's consent.**
{fig:term.five_year_wait} (IRC § 1362(g)). The clock runs from the first taxable year for which
the termination was effective, and it reaches a successor corporation, so a reorganisation does
not reset it.

<div class="scenario" data-type="fails">
<h3>The share that ended it in April</h3>

Whitfield Cartage Inc. is a calendar-year S corporation. On 12 April a shareholder transfers ten
of his shares to a limited partnership he controls. Nobody notices until the return is being
prepared the following February.

A partnership is not a permitted shareholder under IRC § 1361(b)(1)(B), so the corporation ceased
to be a small business corporation on 12 April, and IRC § 1362(d)(2) terminates the election on
and after that date. 2026 is an S termination year: an S short year of 1 January to 11 April and a
C short year of 12 April to 31 December.

Unless someone elects to close the books, IRC § 1362(e)(2) assigns an equal portion of each item
to each day, so 101 of 365 days of the year's income belongs to the S short year regardless of
when it was earned. The C short year's tax is then computed on the annualised basis of
IRC § 1362(e)(5)(A), which can be materially worse than a straight computation where the income
was concentrated in the early months.

The corporation's real remedy is IRC § 1362(f): unwind the transfer, ask for a ruling that the
termination was inadvertent, and have every shareholder agree to the adjustments. Without that,
IRC § 1362(g) keeps it out of subchapter S until 2032.
</div>

<div class="scenario" data-type="boundary">
<h3>The rents that never terminated anything</h3>

Marbury Holdings Inc. elected {gloss:s-corporation} status on formation and has never been a C corporation. For six
consecutive years more than 80 percent of its gross receipts have been rents.

Nothing happens. IRC § 1362(d)(3)(A) requires both accumulated earnings and profits at the close
of each of three consecutive years **and** passive investment income above the threshold for each
of those years. Marbury has never had accumulated earnings and profits — IRC § 1371(c) prevents an
S corporation from generating any — so the first limb can never be met and the election is not at
risk on this ground.

Change one fact: suppose Marbury had acquired a C corporation's earnings and profits in a
reorganisation four years ago. From that point the three-year clock can start, and the election
would terminate on the first day of the year after the third qualifying year. The rents would not
have changed at all; the balance sheet would have.
</div>

<div class="scenario" data-type="timing">
<h3>Revoking with a minority of the votes</h3>

Ellsworth Cable Inc. has 1,000 voting shares held by two founders in equal parts and 3,000
non-voting shares held by four outside investors. Three of the investors, holding 2,200 shares
between them, want to revoke the election.

They can. IRC § 1362(d)(1)(B) requires the consent of shareholders holding more than one-half of
the shares of stock on the day the revocation is made, and it draws no distinction between voting
and non-voting shares. Their 2,200 shares out of 4,000 are a majority, and the founders' control
of every vote is irrelevant.

If they file the revocation on 20 February in a calendar year, IRC § 1362(d)(1)(C)(i) makes it
effective from 1 January — retroactively, across weeks in which the corporation has already
operated as an S corporation. Filing on 20 April instead would push it to 1 January of the
following year, and specifying 1 July under IRC § 1362(d)(1)(D) would make it effective that day.
The three dates produce three different answers on the same facts.
</div>

<div class="scenario" data-type="interaction">
<h3>Revocation collides with the fifty-percent rule</h3>

Trenton Fixtures Inc. revokes its S election effective 1 July, naming that date under
IRC § 1362(d)(1)(D). Earlier the same year, an outside investor bought 55 percent of the
company's stock from the founders in an unrelated sale.

The revocation gives 2026 an S termination year: an S short year running 1 January to 30 June
and a {gloss:c-corporation} short year running 1 July to 31 December (IRC § 1362(e)(1), (e)(4)).
The corporation's advisors assumed they controlled the allocation because they had named the
revocation's effective date — but {fig:term.fifty_percent} (IRC § 1362(e)(6)(D)). Because 55
percent of the stock changed hands during the termination year, the daily allocation of
IRC § 1362(e)(2) is switched off by the statute itself, whether or not anyone elects to close
the books. The freedom to choose a revocation date does not extend to choosing how the year's
income is split.
</div>

<div class="callout trap">
<strong>Traps.</strong>

<p><strong>Election needs everyone; revocation needs half the shares.</strong> Compare
IRC § 1362(a)(2) with IRC § 1362(d)(1)(B). And it is half the <em>shares</em>, not half the
shareholders and not half the votes.</p>

<p><strong>No accumulated earnings and profits means no passive income termination.</strong> Both
limbs of IRC § 1362(d)(3)(A)(i) are required. An answer choice that terminates an election on
passive receipts alone is wrong, however extreme the percentage.</p>

<p><strong>Termination for disqualification is dated to the event.</strong> IRC § 1362(d)(2)
says "on and after the date of cessation." It is not a year-end test and there is no grace
period.</p>

<p><strong>Gross receipts on an asset sale are the gain, not the price.</strong>
{fig:term.gross_receipts_assets} (IRC § 1362(d)(3)(B)). Using the sale price understates the
passive percentage, sometimes decisively.</p>

<p><strong>The five-year wait runs from the first year of the termination, not from the
termination date.</strong> {fig:term.five_year_wait} (IRC § 1362(g)). And it binds a successor
corporation, so it cannot be shed in a reorganisation.</p>

<p><strong>Only money qualifies in the post-termination transition period.</strong>
{fig:sc.ptt_distribution} (IRC § 1371(e)). Property distributed in that window is an ordinary
corporate distribution.</p>
</div>

## How this has changed

**The two conversion reliefs enacted in 2017 are now closed to new entrants.** Pub. L. 115-97
§ 13543 added IRC § 481(d) and IRC § 1371(f), both keyed to an "eligible terminated S
corporation." That term is defined in IRC § 481(d)(2) as {fig:term.eligible_terminated}. The
window it describes ran for two years from the enactment date and closed on 21 December 2019.
No corporation can qualify now, and none ever will — but the two reliefs remain live law for the
corporations that did.

For those corporations, {fig:term.481_spread} (IRC § 481(d)(1)) — so a change from the cash
method forced by the conversion is spread over six years rather than the usual four. And
{fig:term.1371f_ratio} (IRC § 1371(f)), which is a genuine departure from ordinary subchapter C
treatment: after the post-termination transition period, a distribution of money is charged
proportionately to the accumulated adjustments account and to accumulated earnings and profits,
rather than being a dividend to the extent of earnings and profits. An eligible terminated S
corporation therefore never loses the whole of its account, while an ordinary former S
corporation does once the period under IRC § 1377(b) runs out.

The practical consequence is a two-tier rule that a reader will not find in any summary of
"what happens when an S election ends." Which tier applies turns entirely on facts fixed in
December 2017, and the page states the general rule first for that reason.

## Exam focus

The highest-yield distinction here is between the consent required to elect and the consent
required to revoke. Learn it as a pair, and learn that revocation counts shares rather than votes
or heads.

The second is the two-limb structure of the passive investment income test. Read any question on
it by asking about accumulated earnings and profits first; if the facts do not supply them, the
rest of the question is a distractor.

The third is the S termination year. Know that it produces two short years with one due date, that
the default is a daily allocation, that the election out needs consent from both sides of the
line, and that a change of half or more of the stock makes the close mandatory.

Finally, hold IRC § 1362(f) and IRC § 1362(g) together: relief is available for an inadvertent
termination, and where relief is not obtained the corporation waits five years. Questions
frequently present a termination and ask what the corporation can do — the answer is almost
always one of those two provisions.

## Check yourself

**1.** A corporation has four shareholders holding 100, 100, 100 and 700 shares. The holder of
700 shares wants to revoke the election; the other three object. Can the election be revoked?

*Answer: Yes. {fig:term.revoke_consent} 700 of 1,000 shares is more than one-half, and the number
of shareholders consenting is irrelevant. Contrast the election itself, which requires the consent
of every shareholder on the day it is made.*

**2.** An S corporation with no C corporation history derives 90 percent of its gross receipts
from dividends and interest for five consecutive years. Does the election terminate?

*Answer: No. IRC § 1362(d)(3)(A)(i) requires accumulated earnings and profits at the close of each
of three consecutive years as well as excess passive investment income, and a corporation that has
always been an S corporation has none — IRC § 1371(c) prevents it from creating any.*

**3.** An S corporation sells a warehouse for $1,800,000, realising a gain of $250,000, and has
$400,000 of rents and $150,000 of operating receipts in the same year. What are its gross receipts
for the passive income test, and what is the passive percentage?

*Answer: {fig:term.gross_receipts_assets} so the sale contributes $250,000, not $1,800,000. Gross
receipts are $800,000, of which $400,000 of rents is passive — 50 percent, above the threshold.
Using the sale price would give $2,350,000 and 17 percent, and the wrong answer.*

**4.** An election terminates on 1 September. Sixty percent of the stock was sold to a new
investor in March of the same year. May the corporation use the daily allocation of
IRC § 1362(e)(2)?

*Answer: No. {fig:term.fifty_percent} (IRC § 1362(e)(6)(D)). The sale of 50 percent or more of
the stock during the S termination year switches the daily allocation off by force of statute, so
the books close whether or not anyone elects.*

**5.** A corporation's election terminated with effect from 1 January 2026 because it acquired an
ineligible shareholder, and no relief was sought. When is the earliest it may elect again without
the Secretary's consent?

*Answer: For its taxable year beginning in 2031. {fig:term.five_year_wait} — the fifth taxable
year beginning after 2026, the first taxable year for which the termination was effective.*
