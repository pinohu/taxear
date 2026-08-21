---
title: "Life cycle of the business (e.g., formation, dissolution)"
code: "2.2.5.i"
part: 2
domain: "Business Tax Preparation"
section: "Advising the business taxpayer"
description: "Formation choices are cheap and reversible; dissolution choices are neither, and most of what makes a wind-up expensive was decided before the business ever opened."
status: review
taxYear: 2026
lastReviewed: "2026-08-21"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 195", title: "Start-up expenditures", url: "https://www.law.cornell.edu/uscode/text/26/195" }
  - { type: IRC, ref: "§ 248", title: "Organizational expenditures", url: "https://www.law.cornell.edu/uscode/text/26/248" }
  - { type: IRC, ref: "§ 331", title: "Gain or loss to shareholders in corporate liquidations", url: "https://www.law.cornell.edu/uscode/text/26/331" }
  - { type: IRC, ref: "§ 336", title: "Gain or loss recognized on property distributed in complete liquidation", url: "https://www.law.cornell.edu/uscode/text/26/336" }
  - { type: IRC, ref: "§ 351", title: "Transfer to corporation controlled by transferor", url: "https://www.law.cornell.edu/uscode/text/26/351" }
  - { type: IRC, ref: "§ 708", title: "Continuation of partnership", url: "https://www.law.cornell.edu/uscode/text/26/708" }
  - { type: IRC, ref: "§ 721", title: "Nonrecognition of gain or loss on contribution", url: "https://www.law.cornell.edu/uscode/text/26/721" }
  - { type: IRC, ref: "§ 731", title: "Extent of recognition of gain or loss on distribution", url: "https://www.law.cornell.edu/uscode/text/26/731" }
  - { type: IRC, ref: "§ 1362", title: "Election; revocation; termination", url: "https://www.law.cornell.edu/uscode/text/26/1362" }
  - { type: IRC, ref: "§ 1374", title: "Tax imposed on certain built-in gains", url: "https://www.law.cornell.edu/uscode/text/26/1374" }
  - { type: IRC, ref: "§ 1361", title: "S corporation defined", url: "https://www.law.cornell.edu/uscode/text/26/1361" }
  - { type: IRC, ref: "§ 1375", title: "Tax imposed when passive investment income of corporation having accumulated earnings and profits exceeds 25 percent of gross receipts", url: "https://www.law.cornell.edu/uscode/text/26/1375" }
  - { type: IRC, ref: "§ 754", title: "Manner of electing optional adjustment to basis of partnership property", url: "https://www.law.cornell.edu/uscode/text/26/754" }
  - { type: Reg, ref: "§ 301.7701-3", title: "Classification of certain business entities", url: "https://www.law.cornell.edu/cfr/text/26/301.7701-3" }
forms: []
related: ["2.2.5.e", "2.2.5.h", "2.2.4.a", "2.2.5.a", "2.2.2.c"]
changelog:
  - { date: "2026-08-21", summary: "Initial draft. Follows the business through formation, election, operation and exit — the IRC § 195 and § 248 start-up and organisational rules with their common structure, the IRC § 1362(b) election window and the trap where an election in it is treated as made for the following year, the IRC § 1362(d) revocation timing and the § 1362(g) five-year bar, and the divergence at dissolution between IRC §§ 336 and 331 for a corporation and IRC §§ 708 and 731 for a partnership." }
---

A business passes through four moments where tax law is decisive: formation, election, a change of
ownership, and exit. Only the first is cheap. The others are governed by deadlines that have already
run or by consequences fixed years earlier, which is why the useful advice at each stage is mostly
about the stage after it.

## The rule

**Formation costs split into two categories.** Start-up expenditures — {fig:depr.startup_defined}
(IRC § 195(c)(1)) — get {fig:depr.startup_deduction} (IRC § 195(b)(1)(A)) with
{fig:depr.startup_amortization} (IRC § 195(b)(1)(B)). Organisational expenditures under IRC § 248
follow the same structure with their own limit. Note {fig:depr.startup_excluded}
(IRC § 195(c)(1)).

**Getting property in.** {fig:xfer.351} (IRC § 351(a)) or {fig:xfer.721} (IRC § 721(a)),
depending on the form chosen.

**The election window is short and unforgiving.** {fig:life.s_election_timing}
(IRC § 1362(b)(1) and (2)). And the entity classification election has its own window —
{fig:bizclass.election_effective} (Reg. § 301.7701-3(c)(1)(iii)).

**Leaving subchapter S.** {fig:life.revocation} (IRC § 1362(d)(1)), then
{fig:life.five_year_bar} (IRC § 1362(g)). Converting from C to S brings
{fig:sc.built_in_gains} (IRC § 1374).

**Dissolving a corporation costs twice.** {fig:life.corporate_liquidation} (IRC § 336(a)), and
{fig:life.shareholder_liquidation} (IRC § 331(a)).

**A partnership is harder to terminate than to end.** {fig:life.partnership_termination}
(IRC § 708(b)(1)), with {fig:life.partnership_merger} (IRC § 708(b)(2)(A)). On the way out,
{fig:xfer.731} (IRC § 731(a)).

## Current figures

| Item | Rule | Authority |
| --- | --- | --- |
| Start-up deduction | {fig:depr.startup_deduction} | IRC § 195(b)(1)(A) |
| Start-up amortisation | {fig:depr.startup_amortization} | IRC § 195(b)(1)(B) |
| S election window | {fig:life.s_election_timing} | IRC § 1362(b) |
| Revocation timing | {fig:life.revocation} | IRC § 1362(d)(1) |
| Five-year bar | {fig:life.five_year_bar} | IRC § 1362(g) |
| Corporate liquidation | {fig:life.corporate_liquidation} | IRC § 336(a) |
| Partnership termination | {fig:life.partnership_termination} | IRC § 708(b)(1) |

## How it works in practice

**Fix the start date before anything else.** IRC § 195 allows nothing until the active trade or
business begins, and the amortisation period runs from the month it does — so a business that spends
two years investigating carries every dollar until the doors open. That date is a question of fact,
and the file should record what happened on it.

**Do not let the S election window pass without checking eligibility for the whole year.** The trap
is in IRC § 1362(b)(2): an election made in the first two and a half months of a year is treated as
made for the *following* year if on any earlier day of that year the corporation failed the
§ 1361(b) requirements or a person who was a shareholder on such a day did not consent. So a
mid-January share issue to an ineligible holder, cured in February, pushes an otherwise timely
election out by a whole year.

**Advise on the exit at every stage, not only at the end.** The tax cost of dissolving a corporation
is set by IRC § 336 and IRC § 331 and cannot be planned around once the assets have appreciated
inside it. The useful conversations are early: whether appreciating property should sit inside the
entity at all, and whether the entity should have been a corporation.

**Treat a change of ownership as a separate event with its own rules.** A partnership does not
terminate merely because partners change — IRC § 708(b)(1) requires that no part of any business,
financial operation or venture continue to be carried on by any of its partners in a partnership. A
corporation is even more continuous. What the ownership change does affect is basis, the IRC § 754
election, and in an S corporation the per-share per-day allocation and the possibility of a
terminating election.

**Remember that leaving is expensive in both directions.** Revoking an S election starts the
five-year bar in IRC § 1362(g), and re-electing before it expires needs the Secretary's consent.
Converting a C corporation to S status brings the IRC § 1374 built-in gains tax for the recognition
period and the IRC § 1375 passive income tax where accumulated earnings and profits survive. Neither
direction is a free adjustment.

**Wind up in the right order.** Final returns, final employment tax filings and information returns,
the deposit obligations that run to the last payroll, and the retention of records long enough to
cover the assessment period all continue after the business has stopped trading. A business that
has ceased operating has not ceased filing.

## Scenarios

<div class="scenario">
<h3>The election that arrived a year late</h3>

Wexford Analytics is incorporated on 3 January and issues a small parcel of shares to a
partnership investor on 10 January. The mistake is spotted and the shares are repurchased on
6 February. The corporation files Form 2553 on 12 March, within two and a half months of the start
of the year.

The election is timely on its face and ineffective for the year anyway. IRC § 1362(b)(2) treats an
election made during the first two and a half months as made for the *following* taxable year where,
on one or more days in that year before the election was made, the corporation did not meet the
IRC § 1361(b) requirements — and a partnership shareholder, however briefly, is such a failure.

So Wexford is a C corporation for its first year and an S corporation from the second. Nothing in
the provision turns on the failure having been cured, and the repurchase does not rewrite the days
on which the requirement was not met. The remedy, if the first year matters, is relief for an
inadvertent invalid election, which is discretionary rather than available as of right.
</div>

<div class="scenario">
<h3>The company that could not be unwound cheaply</h3>

Padgate Instruments, a C corporation formed twenty years ago, holds land bought for $200,000 and now
worth $2,600,000, and its shareholders want to wind up and hold the land personally.

Liquidation costs twice. IRC § 336(a) recognises gain to the corporation on distributing the land in
complete liquidation as if it had been sold to the shareholders at fair market value — $2,400,000 of
corporate gain. IRC § 331(a) then treats the shareholders as having received full payment in
exchange for their stock, so they have capital gain to the extent the value received exceeds their
stock basis.

Neither layer can be avoided at this stage, and the alternatives are worse or unavailable: an
S election does not help because IRC § 1374 taxes the built-in gain during the recognition period,
and simply holding the land inside the company defers the problem to the shareholders' heirs. The
decision that made this expensive was putting appreciating land into a C corporation two decades
ago.
</div>

<div class="scenario">
<h3>The partnership that did not terminate</h3>

Harewood Design has four partners. Two retire and are bought out over eighteen months; the remaining
two continue the business with a new junior partner. The bookkeeper prepares a final Form 1065 and a
new one for a new partnership.

That is wrong. IRC § 708(b)(1) provides that a partnership is considered terminated only if no part
of any business, financial operation or venture of the partnership continues to be carried on by any
of its partners in a partnership — and here two of the original partners continue the same business.
The partnership is the same partnership, with the same taxpayer identification number, the same
taxable year and the same accounting methods.

What the ownership change does affect is different. The departing partners have IRC § 731 gain to
the extent money exceeds outside basis; the buyers take outside basis at cost; and an IRC § 754
election would let the partnership adjust the basis of its property to match. Treating a continuing
partnership as terminated loses all of that and starts elections and periods afresh for no reason.
</div>

## Traps

<div class="callout trap">

**IRC § 195 allows nothing before the active trade or business begins.** The deduction is taken in
the year it begins and the amortisation runs from that month, so investigation costs incurred years
earlier sit dormant until then.

</div>

<div class="callout trap">

**A timely S election can still be effective a year late.** IRC § 1362(b)(2) shifts it to the
following year if the corporation failed the eligibility requirements on any earlier day of the
year, whether or not the failure was cured.

</div>

<div class="callout trap">

**A partnership does not terminate when its partners change.** IRC § 708(b)(1) requires that no part
of any business continue to be carried on by any partner in a partnership. Filing a final return on
a partner buy-out throws away the entity's methods, elections and identification number.

</div>

<div class="callout trap">

**Liquidating a corporation is taxed twice and neither layer is elective.** IRC § 336(a) at the
corporate level and IRC § 331(a) at the shareholder level, with the corporate gain increasing
earnings and profits on the way through.

</div>

## How this has changed

The formation rules were simplified in 2004, when the start-up and organisational provisions were
given their present shape — an immediate deduction phasing out against total expenditures, with the
balance amortised over a fixed period. Before that the whole amount was amortised, so a small
business had nothing currently deductible. The dollar figures have not been indexed since, so the
phase-out threshold now bites at a level it did not twenty years ago.

The most consequential change at the other end of the life cycle was the repeal of the *General
Utilities* doctrine in 1986, which produced IRC § 336 in its present form. Before it a corporation
could generally liquidate without recognising gain on the appreciation in its assets, and the second
layer of tax on a wind-up did not exist. Every planning instinct about holding property inside a
corporation dates from a regime that ended forty years ago.

The partnership termination rule was narrowed in 2017. Pub. L. 115-97 § 13504 repealed the technical
termination rule in former IRC § 708(b)(1)(B), under which a sale or exchange of 50 percent or more
of the interests in capital and profits within twelve months terminated the partnership — closing
the taxable years, restarting depreciation periods and ending elections. For taxable years beginning
after 31 December 2017 only the general rule in what is now § 708(b)(1) applies, so partnerships now
survive ownership changes that formerly ended them.

## Exam focus

Know the IRC § 195 structure — a deduction in the year the active trade or business begins, phasing
out against total expenditures, with the balance amortised over the statutory period from that month
— and that IRC § 248 mirrors it for organisational expenditures.

The S election window is heavily tested. Know both limbs of IRC § 1362(b)(1), and know the
IRC § 1362(b)(2) rule that pushes an election into the following year where eligibility failed
earlier in the year.

Know the revocation timing in IRC § 1362(d)(1) — the more-than-half consent, and the 15th day of the
third month as the pivot — and the IRC § 1362(g) five-year bar with its consent exception.

For dissolution, be able to state both layers of a corporate liquidation with the right section for
each, and contrast IRC § 731(a) where a partnership distributes.

Finally, know that the technical termination rule for partnerships is gone for years beginning after
2017, so a sale of a majority of the interests no longer terminates the partnership.

## Check yourself

**1.** A business incurs $47,000 of start-up expenditures and begins trading in September. What may
it deduct that year?

*Answer: The immediate deduction is the lesser of the expenditures or the statutory amount, reduced
by the excess of the expenditures over the phase-out threshold. At $47,000 the expenditures are
below the threshold, so the full statutory deduction is available, and the balance is amortised
ratably over the statutory period beginning with the month the active trade or business begins —
September. So the first year gets the deduction plus four months of amortisation. Nothing is
available for any earlier year, however long the investigation took.*

**2.** A calendar-year corporation meets every IRC § 1361(b) requirement from 1 March onward but had
a non-resident alien shareholder in January. It files Form 2553 on 10 March. When is the election
effective?

*Answer: For the following taxable year. IRC § 1362(b)(2) applies because the election was made
during the year on or before the 15th day of the third month and, on one or more days in that year
before the election was made, the corporation did not meet the IRC § 1361(b) requirements. The
January failure controls even though it was cured before the filing. The corporation is a C
corporation for the current year unless it obtains relief for an inadvertent invalid election, which
is discretionary.*

**3.** An S corporation revokes its election on 20 April of a calendar year, with no prospective date
specified. When does the revocation take effect, and when may the corporation elect again?

*Answer: From the first day of the following taxable year, because IRC § 1362(d)(1)(C)(ii) makes a
revocation after the 15th day of the third month effective on the first day of the next year. It
also needs the consent of shareholders holding more than one half of the shares on the day the
revocation is made. Re-election is then barred by IRC § 1362(g) until the corporation's fifth taxable
year beginning after the first taxable year for which the termination was effective, unless the
Secretary consents.*

**4.** Sixty percent of the interests in a partnership are sold in a single transaction and the
business continues unchanged. Does the partnership terminate?

*Answer: No. The technical termination rule in former IRC § 708(b)(1)(B), which terminated a
partnership on a sale or exchange of 50 percent or more of the interests in capital and profits
within twelve months, was repealed by Pub. L. 115-97 § 13504 for taxable years beginning after
31 December 2017. Only the general rule now applies, and it terminates a partnership only where no
part of any business, financial operation or venture continues to be carried on by any of its
partners in a partnership. The taxable year, the methods and the elections all continue.*

**5.** Why is advice about dissolution most useful at formation?

*Answer: Because the cost of dissolving is determined by decisions taken years earlier and cannot be
undone once value has accrued. A corporation holding appreciated property faces gain under
IRC § 336(a) on liquidation as though it had sold at fair market value, plus shareholder gain under
IRC § 331(a) — and converting to S status does not escape it, because IRC § 1374 taxes the built-in
gain through the recognition period. The only cheap moment to decide whether appreciating property
belongs inside a corporation is before it is put there.*
