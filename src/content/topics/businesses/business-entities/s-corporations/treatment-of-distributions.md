---
title: "Treatment of distributions"
code: "2.1.5.d"
part: 2
domain: "Business Entities"
section: "S corporations"
description: "An S corporation distribution is a basis recovery until the corporation has old C corporation earnings behind it, and then the ordering rules decide what is a dividend."
status: published
taxYear: 2026
lastReviewed: "2026-08-21"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 1368", title: "Distributions", url: "https://www.law.cornell.edu/uscode/text/26/1368" }
  - { type: IRC, ref: "§ 1371", title: "Coordination with subchapter C", url: "https://www.law.cornell.edu/uscode/text/26/1371" }
  - { type: IRC, ref: "§ 301", title: "Distributions of property", url: "https://www.law.cornell.edu/uscode/text/26/301" }
  - { type: IRC, ref: "§ 1377(b)", title: "Post-termination transition period", url: "https://www.law.cornell.edu/uscode/text/26/1377" }
  - { type: IRC, ref: "§ 1362(d)(3)", title: "Termination where passive investment income exceeds 25 percent of gross receipts", url: "https://www.law.cornell.edu/uscode/text/26/1362" }
  - { type: IRC, ref: "§ 1375", title: "Tax imposed when passive investment income of corporation having accumulated earnings and profits exceeds 25 percent of gross receipts", url: "https://www.law.cornell.edu/uscode/text/26/1375" }
  - { type: Reg, ref: "§ 1.1368-1", title: "Distributions by S corporations", url: "https://www.law.cornell.edu/cfr/text/26/1.1368-1" }
  - { type: Reg, ref: "§ 1.1368-2", title: "Accumulated adjustments account (AAA)", url: "https://www.law.cornell.edu/cfr/text/26/1.1368-2" }
forms: []
related: ["2.1.5.c", "2.1.5.e", "2.1.5.h", "2.1.5.f", "2.1.3.c", "2.1.5.g"]
changelog:
  - { date: "2026-08-21", summary: "Initial draft. Sets out IRC § 1368(a) to (e) — the basis-recovery rule where the corporation has no accumulated earnings and profits, the three-tier ordering where it has them, the accumulated adjustments account and its net negative adjustment rule, the proration of the account among distributions, and the election to distribute earnings first — with the Reg. § 1.1368-2(a)(5) ordering of adjustments to the account and the Reg. § 1.1368-1(f) elections, and IRC § 1371(c) and (e) on earnings and profits and post-termination distributions." }
---

The default treatment is simple: a distribution comes out of money the shareholder has already
been taxed on, so it is a recovery of basis and nothing more. The complexity arrives only where
the corporation carries accumulated earnings and profits from an earlier life as a C
corporation — and then the whole apparatus of the accumulated adjustments account exists to keep
what has already been taxed once from being taxed again.

## The rule

**What the section covers.** {fig:dist.sc_trigger} (IRC § 1368(a)). So subchapter S displaces
IRC § 301(c) for an ordinary distribution, but only for one.

**No accumulated earnings and profits.** {fig:dist.sc_no_ep} (IRC § 1368(b)). There is no
dividend, because there is nothing for a dividend to come out of.

**With accumulated earnings and profits.** {fig:sc.aaa_ordering} (IRC § 1368(c)). Three tiers,
in order: the accumulated adjustments account, treated as IRC § 1368(b) treats a distribution;
then a dividend to the extent of the accumulated earnings and profits; then IRC § 1368(b) again.

**The account.** {fig:sc.aaa_definition} (IRC § 1368(e)(1)(A)), and
{fig:dist.aaa_not_apportioned} (Reg. § 1.1368-2(a)(1)).

**Timing.** {fig:dist.sc_basis_timing} (IRC § 1368(d)).

**Where does the earnings and profits balance come from?** Not from the S years.
{fig:dist.no_ep_adjustment} (IRC § 1371(c)). An S corporation that has never been a C
corporation and has never acquired one in a reorganisation has no accumulated earnings and
profits at all, and IRC § 1368(c) never applies to it.

## Current figures

| Item | Rule | Authority |
| --- | --- | --- |
| Distributions covered | {fig:dist.sc_trigger} | IRC § 1368(a) |
| No accumulated earnings and profits | {fig:dist.sc_no_ep} | IRC § 1368(b) |
| With accumulated earnings and profits | {fig:sc.aaa_ordering} | IRC § 1368(c) |
| The account, defined | {fig:sc.aaa_definition} | IRC § 1368(e)(1)(A) |
| Whose account it is | {fig:dist.aaa_not_apportioned} | Reg. § 1.1368-2(a)(1) |
| Order of adjustments | {fig:dist.aaa_order} | Reg. § 1.1368-2(a)(5) |
| How far it may fall | {fig:dist.aaa_negative} | Reg. § 1.1368-2(a)(3)(ii), (iii) |
| Net negative adjustment | {fig:dist.net_negative} | IRC § 1368(e)(1)(C) |
| Proration among distributions | {fig:dist.sc_proration} | IRC § 1368(c), flush text |
| Redemptions | {fig:dist.aaa_redemption} | IRC § 1368(e)(1)(B) |
| Election to distribute earnings first | {fig:dist.ep_first} | IRC § 1368(e)(3) |
| The three elections | {fig:dist.three_elections} | Reg. § 1.1368-1(f)(1), (f)(5)(iii) |
| Deemed dividend | {fig:dist.deemed_dividend} | Reg. § 1.1368-1(f)(3) |
| Earnings and profits, adjustments to | {fig:dist.no_ep_adjustment} | IRC § 1371(c) |
| After termination | {fig:sc.ptt_distribution} | IRC § 1371(e) |

## How it works in practice

**Ask the earnings and profits question first.** Everything turns on it. If the corporation has
no accumulated earnings and profits, IRC § 1368(b) applies and the answer is a two-line
calculation: basis first, gain on the excess. If it has them, IRC § 1368(c) applies and you need
the account balance.

**Then get the order of adjustments right.** {fig:dist.aaa_order}
(Reg. § 1.1368-2(a)(5)). Four features of that sequence do the work. Income increases the
account before losses reduce it. Losses reduce it before distributions do — but only to the
extent they are not a net negative adjustment. Distributions may not take the account below
zero. And the net negative adjustment, if any, is applied last, after the distributions have
already been measured.

**Understand what the net negative adjustment protects.** {fig:dist.net_negative}
(IRC § 1368(e)(1)(C)). Without it, a bad year would shrink the account before a mid-year
distribution was tested against it, and a distribution the shareholder had every reason to
believe came out of previously taxed income would be recharacterised as a dividend at the end of
the year. The rule holds the account up for the purpose of measuring the year's distributions,
and then lets it fall.

**Distinguish the two directions the account can move.** {fig:dist.aaa_negative}
(Reg. § 1.1368-2(a)(3)(ii), (iii)). Losses can drive it negative; distributions cannot. That
asymmetry is deliberate and is a common trap.

**Prorate where the distributions exceed the account.** {fig:dist.sc_proration}
(IRC § 1368(c), flush text). Not first-in-time — proportionately by size, across the year.

**Note that the account is the corporation's, not the shareholder's.**
{fig:dist.aaa_not_apportioned} (Reg. § 1.1368-2(a)(1)). Stock basis is per shareholder and per
share; the account is a single corporate figure. A new shareholder who buys in shares the
existing account. That is why basis and the account, which move in step at the start of an S
corporation's life, drift apart over time and are never interchangeable.

**Three elections can rearrange the ordering.** {fig:dist.three_elections}
(Reg. § 1.1368-1(f)(1), (f)(5)(iii)). The most useful is the election to distribute earnings
first: {fig:dist.ep_first} (IRC § 1368(e)(3)). It sounds perverse to volunteer for dividend
treatment, but a corporation close to the passive investment income limits of IRC § 1362(d)(3)
may prefer to clear its accumulated earnings and profits deliberately rather than lose the
election. The deemed dividend does the same thing without moving cash:
{fig:dist.deemed_dividend} (Reg. § 1.1368-1(f)(3)).

**After the election ends, the account still matters for a while.**
{fig:sc.ptt_distribution} (IRC § 1371(e)). The period is defined by IRC § 1377(b), and only a
distribution of **money** qualifies — property distributed in the post-termination transition
period is an ordinary C corporation distribution under IRC § 301.

<div class="scenario">
<h3>The corporation that was never a C corporation</h3>

Fennimore Acoustics Inc. has been an S corporation since it was organised. Its sole shareholder
has a stock basis of $85,000 at the start of the year. The corporation earns $40,000 of ordinary
income and distributes $150,000 in December.

Because the corporation has no accumulated earnings and profits, IRC § 1368(c) is irrelevant and
so is the accumulated adjustments account. IRC § 1368(b) governs. Basis is first increased by the
year's income under IRC § 1368(d), to $125,000 — the flush sentence of IRC § 1368(d) directs that
the increases come first. The distribution is then a tax-free recovery of basis to $125,000, and
the remaining $25,000 is gain from the sale or exchange of property.

The shareholder reports $40,000 of ordinary income and $25,000 of capital gain, and her basis
ends at zero. No part of the distribution is a dividend, and the word does not appear in the
analysis.
</div>

<div class="scenario">
<h3>The old C corporation, and a loss year</h3>

Thackeray Millwork Inc. converted from C to S status in 2019 and carries $200,000 of accumulated
earnings and profits from its C years. At the start of 2026 its accumulated adjustments account
stands at $90,000. During 2026 it distributes $120,000 in equal quarterly instalments, and the
year turns out badly: an ordinary loss of $70,000.

Take the ordering of Reg. § 1.1368-2(a)(5) in sequence. There is no income to increase the
account. The $70,000 loss is a reduction other than for a distribution, and since there are no
increases for the year it is a net negative adjustment of $70,000 in full — so it is *not* taken
into account at this stage. The account therefore stands at $90,000 when the distributions are
measured against it.

The first $90,000 of the $120,000 is IRC § 1368(c)(1) money: a recovery of basis, then gain.
The account is reduced to zero, not below. The remaining $30,000 is a dividend under
IRC § 1368(c)(2), taxable in full and reducing the accumulated earnings and profits to $170,000.
Only then does the $70,000 net negative adjustment come off, leaving the account at negative
$70,000 going into 2027.

Had the loss been applied before the distributions, the account would have been $20,000, and
$100,000 rather than $30,000 would have been a dividend. The net negative adjustment rule is
worth $70,000 of ordinary dividend income here.
</div>

<div class="scenario">
<h3>Two distributions, one account</h3>

Osgood Reprographics Inc. has accumulated earnings and profits and an accumulated adjustments
account of $60,000 at the close of the year. It made two distributions: $40,000 in March and
$160,000 in November, $200,000 in all.

The instinct is to charge the March distribution against the account first, in time order, and
treat all $160,000 of November as a dividend. The flush sentence of IRC § 1368(c) says otherwise:
{fig:dist.sc_proration}. The account is allocated in the ratio 40 to 160, so $12,000 goes to the
March distribution and $48,000 to the November one.

Each shareholder therefore has $12,000 of the March distribution and $48,000 of the November one
treated under IRC § 1368(b), and the balance of each treated as a dividend to the extent of the
accumulated earnings and profits. The timing of the payments changes nothing.
</div>

<div class="callout trap">
<strong>Traps.</strong>

<p><strong>The accumulated adjustments account is not stock basis.</strong> It is a single
corporate account, is not apportioned among shareholders, and is not reduced by tax-exempt income
or the expenses related to it — all of which do adjust stock basis. A question that gives you one
figure and asks for a conclusion that needs the other is testing this distinction.</p>

<p><strong>An S corporation cannot create accumulated earnings and profits.</strong>
{fig:dist.no_ep_adjustment} (IRC § 1371(c)). If the facts do not give the corporation a C
corporation history or a reorganisation, there are no accumulated earnings and profits and no
dividend is possible however large the distribution.</p>

<p><strong>Losses can drive the account negative; distributions cannot.</strong> The regulation
says so in two adjacent sentences (Reg. § 1.1368-2(a)(3)(ii), (iii)). Answer choices that produce
a negative account through a distribution are always wrong.</p>

<p><strong>Distributions are prorated, not stacked.</strong> {fig:dist.sc_proration}
(IRC § 1368(c), flush text). The first distribution of the year has no priority over the
last.</p>

<p><strong>Only money qualifies after termination.</strong> {fig:sc.ptt_distribution}
(IRC § 1371(e)). A distribution of property in the post-termination transition period falls
outside the relief and is governed by IRC § 301.</p>
</div>

## How this has changed

The architecture of IRC § 1368 has been stable since the Subchapter S Revision Act of 1982, and
the net negative adjustment rule that does most of the work in the second scenario was added by
Pub. L. 104-188 § 1309(b) in 1996, effective for taxable years beginning after 31 December 1996.
The current ordering of adjustments to the account in Reg. § 1.1368-2(a)(5) applies to taxable
years beginning on or after 18 August 1998; the regulation retains the earlier ordering at
Reg. § 1.1368-2(a)(4) for years beginning before 1 January 1997, which is now of historical
interest only.

Two pieces of the regulation are best read as archaeology rather than law in practice.
Reg. § 1.1368-1(d)(2) and the election in Reg. § 1.1368-1(f)(4) both address previously taxed
income, defined by reference to IRC § 1375(d)(2) "as in effect prior to its amendment by the
Subchapter S Revision Act of 1982." A corporation can only hold such an account if it was an
electing small business corporation before 1983. Nothing about the current statute creates it,
and no new corporation can acquire it — but the regulation still gives it priority over the
accumulated adjustments account, so it appears in the ordering rules a reader may otherwise
find complete.

The one live change to watch is not in this section at all. Because IRC § 1368(c)(2) treats a
tier-two distribution as a dividend, the shareholder's rate on it, and the treatment of that
dividend for the net investment income tax, are set on the individual side of the Code and move
with it. IRC § 1368 itself is silent on rate.

## Exam focus

The single most productive question to ask is whether the corporation has accumulated earnings
and profits. If the facts do not put a C corporation somewhere in its history, the answer is a
short IRC § 1368(b) calculation and every dividend-flavoured answer choice is a distractor.

Where the facts do supply accumulated earnings and profits, expect the three tiers in order and
expect one of the two ordering refinements to be the point: the net negative adjustment, which
holds the account up while the year's distributions are measured, or the proration of the account
across distributions rather than a first-in-time stacking.

Learn the asymmetry — losses take the account negative, distributions stop at zero — and learn
that the account belongs to the corporation while basis belongs to the shareholder. A large
share of wrong answers comes from treating the two as one number.

Finally, keep IRC § 1371(e) in view. The post-termination transition period lets a former S
corporation distribute the account against basis, but only in money, and only within the period
IRC § 1377(b) defines.

## Check yourself

**1.** An S corporation with no accumulated earnings and profits distributes $90,000 to a
shareholder whose basis, after the year's income adjustments, is $65,000. What does she report?

*Answer: $65,000 is not included in gross income, because IRC § 1368(b)(1) applies it against
basis. The $25,000 excess is treated as gain from the sale or exchange of property under
IRC § 1368(b)(2), and her basis is zero. No part is a dividend — there are no accumulated
earnings and profits for a dividend to come out of.*

**2.** A corporation has $50,000 of accumulated earnings and profits, an account balance of
$30,000, and distributes $100,000. The shareholder's basis is $200,000. How is the $100,000
characterised?

*Answer: $30,000 is treated under IRC § 1368(b) — here a tax-free reduction of basis, since basis
exceeds it. The next $50,000 is a dividend under IRC § 1368(c)(2). The remaining $20,000 is again
treated under IRC § 1368(b), reducing basis further. Her basis ends at $150,000 and she reports a
$50,000 dividend.*

**3.** In a year with no income, an S corporation has a $40,000 ordinary loss and distributes
$25,000. Its account stood at $25,000 at the start of the year. What is the balance at the close?

*Answer: Negative $40,000. Under Reg. § 1.1368-2(a)(5) the $40,000 loss is a net negative
adjustment and is not taken into account before the distribution is measured, so the $25,000
distribution is charged against the $25,000 account and reduces it to zero. The net negative
adjustment is then applied, taking the account to negative $40,000.*

**4.** Why might an S corporation with a large accumulated earnings and profits balance elect
under IRC § 1368(e)(3) to distribute earnings first?

*Answer: To clear the balance deliberately. Accumulated earnings and profits are one of the two
conditions for the passive investment income tax and for termination of the election on that
ground, so a corporation with substantial passive receipts may prefer a controlled dividend now
to an involuntary termination later. {fig:dist.ep_first}*

**5.** An S election terminates on 31 December. In March of the following year the corporation
distributes appreciated land to its former shareholders. Does IRC § 1371(e) apply?

*Answer: No. {fig:sc.ptt_distribution} — the relief is confined to a distribution of money. A
distribution of land in the post-termination transition period is an ordinary corporate
distribution governed by IRC § 301.*
