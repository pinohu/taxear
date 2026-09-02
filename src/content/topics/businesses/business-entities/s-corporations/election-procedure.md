---
title: "Election procedure"
code: "2.1.5.b"
part: 2
domain: "Business Entities"
section: "S corporations"
description: "A late election is an election for next year, not a failed one — and for a new corporation the clock starts when it first has shareholders, not when it was chartered."
status: published
taxYear: 2026
lastReviewed: "2026-08-21"
reviewedBy: "Draft for N. O. review"
authorities:
  - { type: IRC, ref: "§ 1362", title: "Election; revocation; termination", url: "https://www.law.cornell.edu/uscode/text/26/1362" }
  - { type: IRC, ref: "§ 1361(b)", title: "Small business corporation", url: "https://www.law.cornell.edu/uscode/text/26/1361" }
  - { type: IRC, ref: "§ 6037", title: "Return of S corporation", url: "https://www.law.cornell.edu/uscode/text/26/6037" }
  - { type: Reg, ref: "§ 1.1362-6", title: "Elections and consents", url: "https://www.law.cornell.edu/cfr/text/26/1.1362-6" }
  - { type: Reg, ref: "§ 301.7701-3(c)(1)(v)(C)", title: "Deemed election to be classified as an association", url: "https://www.law.cornell.edu/cfr/text/26/301.7701-3" }
  - { type: Form, ref: "2553", title: "Election by a Small Business Corporation", url: "https://www.irs.gov/forms-pubs/about-form-2553" }
forms: []
related: ["2.1.5.a", "2.1.5.f", "2.1.1.d", "2.1.1.e", "2.1.5.c"]
changelog:
  - { date: "2026-08-21", summary: "Initial draft. Sets out the IRC § 1362(a) election and the requirement that all shareholders on the day of the election consent, the § 1362(b) timing with its rule that a late election is an election for the following year, the § 1362(b)(5) authority to treat a late election as timely for reasonable cause, the Reg. § 1.1362-6 mechanics of Form 2553 and the contents of a shareholder consent, and the Reg. § 1.1362-6(a)(2)(ii) rule that a new corporation's taxable year begins when it first has shareholders, acquires assets or begins doing business." }
  - { date: "2026-08-25", summary: "Added a plain-language summary, a timeline diagram of the election window and late-relief rule, glossary marks, and a fifth typed scenario (timing) covering a late election deemed effective the following year." }
diagram:
  archetype: "timeline"
  caption: "When a new corporation's S election is due, and what happens if it is late"
  events:
    - { when: "First taxable year begins", what: "The day the corporation first has shareholders, acquires assets, or begins doing business — not the charter date" }
    - { when: "Anytime during the preceding year", what: "Alternative window: the election can also be filed at any point during the year before it is to take effect" }
    - { when: "15th day, 3rd month of the year", what: "Deadline to file Form 2553 for the election to apply to that year" }
    - { when: "After the deadline", what: "Still a valid election, but effective the following year — unless reasonable-cause relief pulls it back" }
---

<div class="plain-terms">
This page is about how a corporation actually becomes an S corporation. It covers the form the
corporation files, who must sign it, and the deadline for filing it. It matters for any
corporation that wants its profits taxed to its owners instead of taxed twice. For a brand-new
corporation, the clock does not start on the day it was chartered. It starts on the day it first
has owners, gets assets, or starts doing business. Filing too early is invalid. Filing too late
does not kill the election outright. It just pushes the start date back a year, unless the
corporation later gets that late filing forgiven.
</div>

The election is simple to make and easy to get wrong in two specific ways. The first is timing, where the
statute's answer is counter-intuitive: an election filed too late is not invalid, it is an election for the
following year. The second is the starting point of the period, which for a new corporation is not the date
on the certificate of incorporation but the date the corporation first has shareholders, acquires assets,
or begins doing business.

## The rule

**The election.** {fig:elect.form}

**Everyone must consent.** {fig:elect.consent}

**What a consent must say.** {fig:elect.consent_contents}

**When it may be made.** {fig:scorp.election_timing}

**When the clock starts for a new corporation.** {fig:elect.new_corporation_year}

**And if the first year is very short.** {fig:elect.short_first_year}

**Relief for a late election.** {fig:elect.late_relief}

**No separate classification election needed.** {fig:llc.deemed_s_election}

## Current figures

| Item | Rule | Authority |
| --- | --- | --- |
| Timing | {fig:scorp.election_timing} | IRC § 1362(b) |
| Start of a new corporation's year | {fig:elect.new_corporation_year} | Reg. § 1.1362-6(a)(2)(ii) |
| Consent | {fig:elect.consent} | IRC § 1362(a)(2) |
| Consent contents | {fig:elect.consent_contents} | Reg. § 1.1362-6(b)(1) |
| Late election relief | {fig:elect.late_relief} | IRC § 1362(b)(5) |

## How it works in practice

There are two windows and they are alternatives. An election may be made at any time during the *preceding*
taxable year, or during the year for which it is to be effective provided it is made on or before the
fifteenth day of the third month of that year. An election made in the second half of a year is therefore
perfectly valid — it simply takes effect for the following year.

That reframing matters commercially. There is no such thing as a late S election in the sense of an
invalid one. What the client has is an election for a year later than they wanted, and the question is
whether relief is available to pull it back. IRC § 1362(b)(5) gives the Secretary authority to treat a late
election as timely where there was reasonable cause for the failure, and administrative procedures set out
how that relief is claimed. Those procedures are not in the Code or the regulation and should be checked
against current guidance rather than remembered.

For a new corporation the arithmetic is done from the start of its first taxable year, and
Reg. § 1.1362-6(a)(2)(ii) is explicit that this is the date the corporation first has shareholders,
acquires assets, or begins doing business — whichever comes first. The regulation adds that the existence
of incorporators does not necessarily begin the taxable year. So a corporation chartered in March that
issues no shares and does nothing until June begins its first taxable year in June, and the election
window runs from there. A practitioner who counts from the charter date will file early rather than late,
which is a different problem: the same regulation's first example makes clear that an election made before
the first taxable year begins is not valid, because there is no preceding taxable year to make it in.

The consent requirement is strict and mechanical. Every person who is a shareholder on the day the
election is made must consent, and the election is not valid if any required consent is missing. The
consent is a signed statement under penalties of perjury containing seven specified items — the
shareholder's identifying details, share count, acquisition dates, year end, the corporation's details,
and the election consented to. Form 2553 collects all of this, which is why the form is signed by every
shareholder rather than by the corporation alone.

Two points about consent are worth holding. New shareholders arriving *after* a valid election need not
consent to it — the election is the corporation's and it continues. But where the election is made in the
first window, during the preceding taxable year, anyone who held stock during that preceding year and no
longer holds it must also consent, which can mean chasing a departed shareholder.

Finally, an entity that is not already a corporation does not need to elect classification separately.
Reg. § 301.7701-3(c)(1)(v)(C) treats a timely S election by an eligible entity as an election to be
classified as an association, provided the entity meets the IRC § 1361(b) requirements on the effective
date. Filing a Form 8832 first is unnecessary and can start the sixty-month re-election bar for no reason.

## Scenarios

<div class="scenario" data-type="baseline">
<h3>The June incorporation</h3>
<p>A corporation is incorporated on 1 June, issues its shares and opens for business the same day, and
adopts a calendar year for its first short taxable year. It wants S status from the start.</p>
<p>The election must be made on or before 15 August. The first taxable year begins 1 June, because that is
when the corporation first has shareholders and begins doing business. Under IRC § 1362(b)(1)(B) the
election may be made during that year on or before the fifteenth day of the third month of it — June being
the first month, July the second, August the third — so 15 August. An election filed on 16 August would be
valid but effective for the following taxable year, and the corporation would be a C corporation for the
period to 31 December.</p>
</div>

<div class="scenario" data-type="boundary">
<h3>The charter that came first</h3>
<p>Articles of incorporation are filed on 4 March. No shares are issued, no assets are acquired and no
business is conducted until 20 September, when the founders subscribe and trading begins. The adviser
files Form 2553 on 15 May, counting from the charter date.</p>
<p>The filing is premature and invalid for the first year. Reg. § 1.1362-6(a)(2)(ii) provides that the
taxable year of a new corporation begins when it first has shareholders, acquires assets or begins doing
business, whichever occurs first, and that the existence of incorporators does not necessarily begin it —
so the first taxable year begins on 20 September. An election made in May was made neither during the
preceding taxable year (there was none) nor during the year for which it is to be effective. The window
actually ran from 20 September, and the correct deadline was the fifteenth day of the third month from
then.</p>
</div>

<div class="scenario" data-type="fails">
<h3>The shareholder who had already sold</h3>
<p>A calendar-year corporation decides in November 2026 to elect S status with effect from 1 January 2027.
It files Form 2553 on 20 November 2026, signed by its four current shareholders. A fifth person held
shares from January to August 2026 and sold out before the election was made.</p>
<p>The former shareholder's consent is required. The election is being made during the taxable year
preceding the year for which it is to be effective, and where that route is used the consent of anyone who
held stock at any time during that preceding year is needed as well as that of the current shareholders.
The four current consents are not sufficient, and without the fifth the election is not valid. The
practical lesson is to check the share register for the whole of the preceding year before filing in the
first window, and that the second window — during the effective year itself — needs only the consents of
shareholders on the day of filing.</p>
</div>

<div class="scenario" data-type="procedural">
<h3>The LLC that filed two forms</h3>
<p>A three-member {gloss:llc} wants to be taxed as an {gloss:s-corporation} from 1 January 2027. Its adviser files Form
8832 electing association status effective 1 January 2027, followed by Form 2553 electing S status from
the same date.</p>
<p>The Form 8832 was unnecessary and is not harmless. Reg. § 301.7701-3(c)(1)(v)(C) treats an eligible
entity that timely elects S corporation status as having elected to be classified as an association,
provided it meets the other IRC § 1361(b) requirements on the effective date — so Form 2553 alone would
have done both jobs. The Form 8832 is an election to change classification, and under
Reg. § 301.7701-3(c)(1)(iv) the entity cannot change its classification by election again for sixty months
from its effective date. The adviser has bought a restriction the client did not need.</p>
</div>

<div class="scenario" data-type="timing">
<h3>The election filed one day too late — twice</h3>
<p>A calendar-year corporation wants S status for 2027. Its accountant files Form 2553 on 20 March 2027 —
five days after the 15 March deadline — with all shareholder consents attached. A second, unrelated
corporation is in exactly the same position but its late filing traces to a payroll service's processing
error, documented in an email chain from February 2027.</p>
<p>Both filings are valid elections; neither is void. Under IRC § 1362(b)(3) a late election is simply
treated as made for the following taxable year, so both corporations are, without more, C corporations for
2027 and S corporations starting 2028. The difference between the two is what happens next: the first
corporation has no basis to ask for anything more, and 2027 stands as a C corporation year. The second has
a documented reason for the delay and can seek to have the late election treated as timely for 2027 under
IRC § 1362(b)(5), because there was reasonable cause for the failure to file by 15 March. Identical filing
date, identical statute — the outcome for 2027 turns entirely on whether reasonable cause can be shown, not
on anything about the election itself.</p>
</div>

<div class="callout trap">
<strong>Traps</strong>
<ul>
<li><strong>A late election is not invalid.</strong> IRC § 1362(b)(3) makes it an election for the
following taxable year.</li>
<li><strong>The clock starts at the first taxable year, not the charter.</strong>
Reg. § 1.1362-6(a)(2)(ii) — shareholders, assets or business, whichever comes first.</li>
<li><strong>An election filed too early is invalid.</strong> There is no preceding taxable year for a new
corporation to elect in.</li>
<li><strong>Every shareholder must consent.</strong> One missing consent invalidates the election.</li>
<li><strong>Electing in the preceding year needs more consents.</strong> Anyone who held stock during that
year, including people who have since sold.</li>
<li><strong>New shareholders need not consent.</strong> Once a valid election exists it continues without
them.</li>
<li><strong>Do not file Form 8832 first.</strong> The S election carries the classification, and the
Form 8832 starts a sixty-month bar for nothing.</li>
</ul>
</div>

## How this has changed

The election mechanics have been stable. What has changed is the availability of relief.

IRC § 1362(b)(5) gives the Secretary authority to treat a late election as timely where there was
reasonable cause, and the administrative machinery built on it has been consolidated and broadened over
time — from a series of separate procedures addressing particular failures into a single set of relief
provisions covering late S elections, late entity classification elections intended to accompany them, and
late elections for qualified subchapter S subsidiaries and electing small business trusts. The direction
has consistently been toward making relief simpler to claim without a private letter ruling.

Two consequences follow for practice. A late election is a routine problem with a routine answer, not a
disaster. And the specific conditions for relief — how late is too late, what the corporation must have
done in the interval, what statements must accompany the filing — are administrative and change, so they
must be checked against current guidance rather than recalled. This page deliberately states the statutory
authority and not the conditions, because the conditions are not in the Code or the regulation.

The deemed classification election in Reg. § 301.7701-3(c)(1)(v)(C) removed what used to be a genuine
two-form trap for LLCs and other eligible entities. Material advising an eligible entity to file
Form 8832 before Form 2553 is describing a step that has not been necessary for a long time and that
carries a cost.

## Exam focus

The timing computation is the reliable question. Identify the first day of the taxable year, count the
third month from there, and the deadline is its fifteenth day. For a new corporation, read the facts for
when it first had shareholders, acquired assets or began business — the incorporation date is often given
as a distractor.

Expect at least one question where the election is filed after the deadline. The answer is that it is
effective for the following taxable year, not that it is void.

Where a question describes a shareholder who sold during the preceding year, it is testing the consent
rule for elections made in the first window.

## Check yourself

**1.** A calendar-year corporation wants S status for 2027. What is the last day to file Form 2553?

*Answer: 15 March 2027 — the fifteenth day of the third month of the year for which the election is to be
effective (IRC § 1362(b)(1)(B)). It could alternatively have filed at any time during 2026, the preceding
taxable year, under IRC § 1362(b)(1)(A).*

**2.** A new corporation first has shareholders and begins business on 1 June. By when must it elect for
its first taxable year?

*Answer: 15 August. The first taxable year begins 1 June under Reg. § 1.1362-6(a)(2)(ii), and
IRC § 1362(b)(1)(B) allows the election on or before the fifteenth day of the third month of that year —
June, July, August — so 15 August.*

**3.** A corporation files Form 2553 on 20 September for a calendar year beginning the previous 1 January.
Is the election valid?

*Answer: yes, but for the following taxable year. IRC § 1362(b)(3) provides that an election made after the
fifteenth day of the third month of the taxable year is treated as made for the following taxable year.
Relief to pull it back into the current year requires reasonable cause under IRC § 1362(b)(5) and the
administrative procedures built on it.*

**4.** A corporation elects during the preceding taxable year. One person held shares for part of that
preceding year and sold before the election was filed. Is their consent needed?

*Answer: yes. Where the election is made in the preceding taxable year, consent is required from those who
held stock during that year as well as from the shareholders on the day of the election. Without it the
election is not valid, since IRC § 1362(a)(2) and Reg. § 1.1362-6(a)(2)(i) make the election invalid if any
required consent is missing.*

**5.** A multi-member LLC files a timely Form 2553 and meets all the IRC § 1361(b) requirements. Must it
also file Form 8832?

*Answer: no. Reg. § 301.7701-3(c)(1)(v)(C) treats an eligible entity that timely elects S corporation
status as having elected to be classified as an association. Filing Form 8832 as well is unnecessary and
starts the sixty-month bar on a further classification election under Reg. § 301.7701-3(c)(1)(iv).*

**6. A corporation made a valid S election in 2026 with every shareholder's consent. In 2027 an unrelated investor buys shares. Must the new shareholder consent to the election?**
(A) No, the election is the corporation's and continues without her consent (B) Yes, within two and a half months of acquiring the shares (C) Yes, or the election terminates on the date of the transfer (D) Yes, by filing an amended Form 2553
*Answer: A. IRC § 1362(a)(2) requires consent from all persons who are shareholders on the day the election is made; once a valid election exists, new shareholders need not consent to it.*

**7. Articles of incorporation are filed on 10 January. The corporation issues no shares, acquires no assets and conducts no business until 1 August. Form 2553 is filed on 1 March. The election is:**
(A) Invalid, because it was made before the first taxable year began (B) Valid for the first taxable year (C) Valid, but effective for the following taxable year (D) Valid if the corporation shows reasonable cause
*Answer: A. Reg. § 1.1362-6(a)(2)(ii): a new corporation's taxable year begins when it first has shareholders, acquires assets or begins doing business, and the existence of incorporators does not begin it; an election made before that date is made in neither the preceding year nor the effective year.*

**8. A new corporation's first taxable year runs from 1 November to 31 December. It files Form 2553 on 10 January of the following year. Is the election effective for that first short year?**
(A) Yes, because for a year of two and a half months or less an election made before the sixteenth day of the third month after the first day of the year is treated as made during that year (B) No, because the taxable year had already ended (C) No, because the deadline was 15 December (D) No, it is treated as made for the following taxable year
*Answer: A. Reg. § 1.1362-6(a)(2)(ii)(A): where the first taxable year is 2½ months or less, an election made before the sixteenth day of the third month after the first day of that year — here 16 January — is treated as made during it.*
