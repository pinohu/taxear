---
title: "S corporations"
code: "2.1.1.d"
part: 2
domain: "Business Entities and Considerations"
section: "Business entities"
description: "One class of stock, a hundred shareholders that a family counts as one, a March election date, and a fringe benefit to a two percent owner that is wages."
status: review
taxYear: 2026
lastReviewed: "2026-08-21"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 1361", title: "S corporation defined", url: "https://www.law.cornell.edu/uscode/text/26/1361" }
  - { type: IRC, ref: "§ 1362", title: "Election; revocation; termination", url: "https://www.law.cornell.edu/uscode/text/26/1362" }
  - { type: IRC, ref: "§ 1363", title: "Effect of election on corporation", url: "https://www.law.cornell.edu/uscode/text/26/1363" }
  - { type: IRC, ref: "§ 1366", title: "Pass-thru of items to shareholders", url: "https://www.law.cornell.edu/uscode/text/26/1366" }
  - { type: IRC, ref: "§ 1368", title: "Distributions", url: "https://www.law.cornell.edu/uscode/text/26/1368" }
  - { type: IRC, ref: "§ 1372", title: "Partnership rules to apply for fringe benefit purposes", url: "https://www.law.cornell.edu/uscode/text/26/1372" }
  - { type: IRC, ref: "§ 1377", title: "Definitions and special rule", url: "https://www.law.cornell.edu/uscode/text/26/1377" }
  - { type: IRC, ref: "§ 6072(b)", title: "Returns of partnerships and S corporations", url: "https://www.law.cornell.edu/uscode/text/26/6072" }
  - { type: Reg, ref: "§ 301.6037-2", title: "Required use of electronic form for S corporation returns", url: "https://www.law.cornell.edu/cfr/text/26/301.6037-2" }
forms: []
related: ["2.1.1.b", "2.1.1.c", "2.1.1.e", "2.1.1.g", "2.1.1.k", "2.1.1.i", "2.1.2.j", "2.1.2.k", "2.1.5.a"]
changelog:
  - { date: "2026-08-21", summary: "Initial draft. Sets out the IRC § 1361(b)(1) eligibility conditions and the § 1361(c)(1) family aggregation rule, the § 1362(b) election window and the § 1362(d) and (f) termination and inadvertent-termination rules, the § 1363(a) absence of entity-level tax with the § 1366(d)(1) basis limitation on losses, the § 1368(b) treatment of distributions, the § 1372 fringe benefit rule for 2-percent shareholders, the § 1377(a)(2) terminating-interest election, and the Reg. § 301.6037-2(a) electronic filing requirement as rewritten to a 10-return test with no asset threshold." }
---

Subchapter S is a set of conditions attached to a corporation that is, in every other respect, an
ordinary state-law corporation. Nothing about the entity changes when the election is made; what changes
is that the tax stops at the entity and lands on the shareholders. The examination tests the conditions
much harder than it tests the consequences, because the conditions are the part that can be lost by
accident — a share issued to the wrong holder, a second class of stock created without anyone intending
one, an election filed a day late.

## The rule

**Who may elect.** {fig:scorp.eligibility}

Each of those five conditions has to hold on every day the election is in force, not merely on the day it
was made. The 100-shareholder ceiling is the one that sounds most binding and is in practice the loosest,
because of the counting rule that follows.

**How shareholders are counted.** {fig:scorp.family_aggregation}

The aggregation is automatic. There is no election to make and no form to file; a family that meets the
six-generation test simply is one shareholder for the purpose of the ceiling. A corporation with two
hundred natural persons on its stock ledger can be comfortably inside the limit if they descend from a
common ancestor.

**Which trusts may hold the stock.** {fig:scorp.trusts}

**When the election is made.** {fig:scorp.election_timing}

**The effect of the election.** An S corporation is not subject to the taxes imposed by chapter 1
(IRC § 1363(a)), and its items pass through to the shareholders, who take them into account whether or not
anything is distributed. A shareholder's share of losses and deductions cannot exceed the sum of the
adjusted basis of the stock and the shareholder's adjusted basis in any indebtedness of the corporation to
that shareholder (IRC § 1366(d)(1)); anything disallowed by that limit is treated as incurred by the
corporation in the succeeding year with respect to that shareholder, indefinitely (IRC § 1366(d)(2)(A)).

**The return.** {fig:scorp.return_date}

**Distributions.** {fig:scorp.distribution}

**Fringe benefits.** {fig:scorp.fringe_benefits}

**How the election ends.** {fig:scorp.termination}

**Relief where it ended by accident.** Where the Secretary determines that the circumstances producing an
ineffective election or a termination were inadvertent, steps were taken within a reasonable period after
discovery to fix them, and the corporation and every shareholder for the period agree to make the
adjustments required, the corporation is treated as an S corporation throughout (IRC § 1362(f)).

**The closing-of-the-books election.** {fig:scorp.terminating_election}

**Electronic filing.** {fig:scorp.efile_threshold}

## Current figures

| Item | Rule | Authority |
| --- | --- | --- |
| Shareholder ceiling and stock classes | {fig:scorp.eligibility} | IRC § 1361(b)(1) |
| Family counted as one | {fig:scorp.family_aggregation} | IRC § 1361(c)(1) |
| Eligible trusts | {fig:scorp.trusts} | IRC § 1361(c)(2)(A) |
| Election window | {fig:scorp.election_timing} | IRC § 1362(b) |
| Termination | {fig:scorp.termination} | IRC § 1362(d) |
| Return due date | {fig:scorp.return_date} | IRC § 6072(b) |
| Distributions, no accumulated E&P | {fig:scorp.distribution} | IRC § 1368(b) |
| Fringe benefits to owners | {fig:scorp.fringe_benefits} | IRC § 1372 |
| Terminating-interest election | {fig:scorp.terminating_election} | IRC § 1377(a)(2) |
| Electronic filing | {fig:scorp.efile_threshold} | Reg. § 301.6037-2(a) |

## How it works in practice

The election window is the first thing to get right, and the way it is written trips people who read it
quickly. There is no penalty for lateness, because there is no such thing as a late election — an election
made after the fifteenth day of the third month is simply an election for the *following* year. A
corporation formed in June that files its election in September has made a valid election, effective the
following January, not an invalid one. Whether that is what the client wanted is a different question, and
it is the question the practitioner has to raise before the second year's return is prepared on the wrong
assumption.

The one-class-of-stock condition is the one that is most often broken without anyone deciding to break it.
The condition is about rights to distribution and liquidation proceeds, not about voting: differences in
voting power alone are expressly disregarded by IRC § 1361(c)(4). What creates the risk is informal
practice — a shareholder who takes distributions the others do not, a loan from a shareholder on terms
that make it look like equity, a buy-sell agreement that fixes different prices for different holders.
None of these is a share certificate, and all of them can produce a second class.

The fringe benefit rule at IRC § 1372 is the single most commonly missed item in S corporation practice,
and its mechanics are worth being precise about. It does not disallow the benefit. The corporation still
deducts what it pays. What it does is deny the *shareholder* the exclusion, by treating the corporation as
a partnership and the shareholder as a partner, so the health insurance premium, the group-term life
coverage, the meals and lodging furnished for the convenience of the employer all become compensation
included in the shareholder's income. For health insurance in particular the practical result is usually
neutral or better, because the premium reported as wages is then deductible above the line, but that
outcome depends on the amount actually being reported. Where it is not reported, the shareholder has taken
an exclusion the statute does not allow.

Note the reach of the 2-percent test. It picks up anyone owning, or *considered as owning* under the
IRC § 318 attribution rules, more than 2 percent of the stock on any one day of the year. A person who owns
no stock at all but whose spouse owns 40 percent is a 2-percent shareholder. A person who held 3 percent
for a fortnight and sold it is a 2-percent shareholder for the whole year.

Distributions under IRC § 1368(b) require the shareholder's basis to be computed before the character of
the distribution can be known, and basis is computed at the end of the year after all the year's items
have been taken into account. This produces the practical awkwardness that a shareholder who takes money
out in March cannot know until the following spring whether it was a return of capital or a capital gain.
Where the corporation has accumulated earnings and profits from a period before the election, IRC § 1368(c)
applies instead and the ordering runs through the accumulated adjustments account first — that is a
different rule, and it applies only to corporations with a C corporation history.

## Scenarios

<div class="scenario">
<h3>The family that looks too large</h3>
<p>Marisol founded a produce distribution company in 1996 and elected S status the same year. She died in
2019. Her stock passed to her four children, and over the following six years it was gifted down to
nineteen grandchildren, thirty-one great-grandchildren, and the spouses of eleven of them. Counting
certificates, there are sixty-five holders. Marisol's nephew, who holds 2 percent from an early purchase,
tells the family that the corporation is close to the ceiling and that further gifts should stop.</p>
<p>He is wrong, and by a wide margin. Every one of the sixty-five descends from Marisol or is the spouse
of someone who does, so under IRC § 1361(c)(1) they and their estates are a single shareholder. The nephew
descends from Marisol's parents, and Marisol's parents are also a common ancestor within six generations
of the youngest holders, so on that reading he too falls inside the same family. The corporation has one
shareholder for the purpose of the ceiling, or at most two. The condition to watch in this family is not
the count — it is that a great-grandchild who marries a non-resident alien and puts stock in the spouse's
name would terminate the election on the day of the transfer under IRC § 1362(d)(2).</p>
</div>

<div class="scenario">
<h3>The premium nobody put on the W-2</h3>
<p>Devraj owns 60 percent of an engineering firm that has been an S corporation since 2011. The
corporation pays the premiums on a family health policy covering Devraj, and has done so for years. The
bookkeeper records the payments as employee benefit expense. Devraj's W-2 shows salary of $180,000 and
nothing else. On his own return he claims the self-employed health insurance deduction for the $19,400 of
premiums, on the footing that the corporation paid them on his behalf.</p>
<p>The corporation's deduction is fine. Devraj's treatment is not, in two directions at once. Under
IRC § 1372 he is a partner for fringe benefit purposes, so the exclusion that an ordinary employee would
have does not reach him; the $19,400 is compensation and belongs in box 1 of his W-2. And because it was
never included, the above-the-line deduction he claimed has no premium reported as wages to attach to. The
correction is to include the amount in wages and then take the deduction, which for Devraj is close to a
wash on the income tax — but it changes his W-2, and it changes the base on which reasonable-compensation
questions will be asked if the return is examined.</p>
</div>

<div class="scenario">
<h3>The March distribution and the December basis</h3>
<p>Priya holds all the stock of a design studio that elected S status at formation and has never been a C
corporation. Her stock basis at 1 January is $34,000. In March she takes $50,000 out of the company to
fund a house deposit. The studio's year turns out well: her share of ordinary income for the year is
$61,000, and there are no separately stated items.</p>
<p>Nothing about the March payment is determined in March. Under IRC § 1368(b) the distribution is
tax-free to the extent of adjusted basis, and basis is worked out after the year's income is taken into
account. The $61,000 of pass-through income increases her basis to $95,000; the $50,000 distribution
reduces it to $45,000 and is entirely tax-free. Priya reports $61,000 of ordinary income and no gain on
the distribution. Had the studio instead broken even, her basis would have stopped at $34,000, the first
$34,000 of the distribution would have been a return of capital and the remaining $16,000 would have been
gain from the sale or exchange of property under IRC § 1368(b)(2).</p>
</div>

<div class="scenario">
<h3>The shareholder who left in April</h3>
<p>A logistics company with three equal shareholders has an unusually lopsided year: it loses money
heavily through the first quarter and then wins a contract in May that makes the year profitable overall.
Ordinary income for the full year is $360,000. Tomás sells his entire third to the other two on 30 April.
Under the default rule of IRC § 1377(a)(1) his share is worked out per day, so he picks up roughly a third
of a third of the year's income — about $39,500 — on results that were, in the months he owned the stock,
losses.</p>
<p>IRC § 1377(a)(2) offers a way out, but only on terms. Because Tomás terminated his entire interest, the
corporation may elect to treat the year as two taxable years, the first ending on 30 April, with his share
computed on the actual results of that period. That would give him a loss rather than income. The election
requires the agreement of all affected shareholders and of the corporation, which means the two remaining
shareholders must agree to absorb the whole of the profitable period. Whether they will is a negotiating
point, and it is one to raise while the sale is being papered, not in February when the return is being
prepared.</p>
</div>

<div class="callout trap">
<strong>Traps</strong>
<ul>
<li><strong>A late election is not late.</strong> It is an election for the next year (IRC § 1362(b)(3)).
The client who believes they have been an S corporation since June may have been a C corporation all year.</li>
<li><strong>Voting differences are not a second class of stock.</strong> IRC § 1361(c)(4) disregards them.
Distribution and liquidation rights are what count, and those can be created by conduct.</li>
<li><strong>The 2-percent test runs on attribution and on any single day.</strong> A spouse who owns no
stock, and a shareholder who sold out in January, are both caught by IRC § 1372.</li>
<li><strong>IRC § 1372 does not disallow the deduction.</strong> It removes the shareholder's exclusion.
The corporation deducts; the shareholder includes.</li>
<li><strong>Losses stop at basis, and debt basis means debt owed to the shareholder.</strong> A shareholder
guarantee of bank debt gives no basis under IRC § 1366(d)(1)(B) — unlike the partnership rules, where a
guarantee can affect the share of liabilities.</li>
<li><strong>Passive investment income only terminates an election where there are accumulated earnings and
profits.</strong> A corporation that has always been an S corporation can hold nothing but portfolio
investments indefinitely; the IRC § 1362(d)(3) test needs both limbs.</li>
</ul>
</div>

## How this has changed

The eligibility conditions themselves have been stable for years. What has moved is the filing mechanics.

Electronic filing of Form 1120-S used to be a requirement for large corporations only, tested by two
figures at once: total assets and a return count in the hundreds. Reg. § 301.6037-2 as it now reads
imposes the requirement on any S corporation required to file at least 10 returns of any type during the
calendar year, and drops the asset test entirely. The count is aggregate across return types — information
returns, employment tax returns and excise returns all go into it — so a small corporation issuing a
modest number of Forms W-2 and 1099 is inside the requirement without ever approaching the old thresholds.
The same rewrite reached the C corporation rule at Reg. § 301.6011-5. Any material that still describes an
asset threshold for the mandate is describing a regime that no longer exists, and study material written
before 2024 very often does.

The six-generation limit in the family aggregation rule is worth noting as a piece of history that is
easily mis-stated: the rule as enacted in 2004 was framed differently, and the current formulation — the
common ancestor no more than six generations removed from the youngest generation of shareholders,
measured for that purpose alone — came with later amendment. Sources describing a three-generation test are
describing pre-2005 law.

## Exam focus

Expect the conditions rather than the consequences. The recurring shapes are: a corporation that has
acquired an ineligible shareholder and the date on which the election ends; a count of shareholders where
the point is the family rule; an election filed in the second half of the year and the year it takes
effect; a distribution that exceeds basis, where the required answer is gain from the sale or exchange of
property and not a dividend; and a fringe benefit paid to an owner, where the required answer is that it
is wages.

Read the shareholder-count questions for descent before counting names. Read the election-date questions
for the year in which the election was filed as well as the date within it — the fifteenth-day-of-the-third-month
line only does work for an election filed during the year it is meant to govern, since an election made at
any time in the *preceding* year is timely regardless of the date. And when a question gives you both a
distribution and a year's income, compute basis at the year end before characterising the distribution;
the order is the whole of the question.

## Check yourself

**1.** A calendar-year corporation formed on 3 February 2026 files Form 2553 on 20 July 2026. All
shareholders consent. For which taxable year is the election effective?

*Answer: 2027. The election was made during the taxable year but after the fifteenth day of the third
month of it, so under IRC § 1362(b)(3) it is treated as made for the following taxable year. It is not
invalid, and there is no relief to seek unless the corporation wants 2026 covered, which would require
relief for a late election under separate administrative authority. For 2026 the entity is a C corporation.*

**2.** An S corporation with no accumulated earnings and profits distributes $80,000 to its sole
shareholder during the year. The shareholder's basis at the start of the year is $25,000 and her share of
the corporation's ordinary income for the year is $40,000. What does she report on the distribution?

*Answer: $15,000 of gain. Basis is increased by the $40,000 of income to $65,000. The distribution is
tax-free to the extent of that basis under IRC § 1368(b)(1), and the $15,000 excess is treated as gain from
the sale or exchange of property under IRC § 1368(b)(2). It is not a dividend.*

**3.** A shareholder owns no stock in an S corporation. His wife owns 30 percent. The corporation pays
$14,000 of premiums on a health policy covering him. How is the payment treated on his return?

*Answer: as compensation, included in income. Under IRC § 1372 the corporation is treated as a partnership
and any 2-percent shareholder as a partner, and the 2-percent test picks up stock a person is considered as
owning under IRC § 318 — which attributes his wife's 30 percent to him. He is a 2-percent shareholder, the
employee exclusion does not reach him, and the premium is wages.*

**4.** An S corporation that has never been a C corporation earns 80 percent of its gross receipts as
interest and dividends for four consecutive years. Does the election terminate?

*Answer: no. IRC § 1362(d)(3) terminates an election only where the corporation both has accumulated
earnings and profits at the close of each of three consecutive years and has more than 25 percent passive
investment income in each of them. A corporation that has always been an S corporation has no accumulated
earnings and profits, so the first limb is never satisfied and the passive income is irrelevant.*

**5.** An S corporation is required to file eight Forms W-2, one Form 1120-S and three Forms 1099-NEC for
the calendar year. Its total assets are $900,000. Must it file Form 1120-S electronically?

*Answer: yes. Reg. § 301.6037-2(a) requires electronic filing where the corporation is required to file at
least 10 returns of any type during the calendar year, and the twelve returns here exceed that. The asset
figure is a distractor: the former asset threshold was removed, and no reading of the current regulation
makes total assets relevant.*
