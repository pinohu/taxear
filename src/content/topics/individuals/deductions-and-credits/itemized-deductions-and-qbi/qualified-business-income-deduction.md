---
title: "Qualified Business Income Deduction"
code: "1.3.1.h"
part: 1
domain: "Deductions and Credits"
section: "Itemized deductions and QBI"
description: "The section 199A deduction is permanent now, and the sunset was replaced by a floor. What changed for 2026 is the width of the phase-in and a new minimum."
status: published
taxYear: 2026
lastReviewed: "2026-08-19"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 199A", title: "Qualified business income", url: "https://www.law.cornell.edu/uscode/text/26/199A" }
  - { type: IRC, ref: "§ 63(b)(3)", title: "Taxable income of individuals who do not itemize", url: "https://www.law.cornell.edu/uscode/text/26/63" }
  - { type: IRC, ref: "§ 1202(e)(3)(A)", title: "Field-of-services list borrowed by § 199A(d)(2)(A)", url: "https://www.law.cornell.edu/uscode/text/26/1202" }
  - { type: IRC, ref: "§ 469(h)", title: "Material participation", url: "https://www.law.cornell.edu/uscode/text/26/469" }
  - { type: IRC, ref: "§ 707", title: "Guaranteed payments and payments for services", url: "https://www.law.cornell.edu/uscode/text/26/707" }
  - { type: RevProc, ref: "Rev. Proc. 2025-32, §§ 2.12, 3.26", title: "2026 inflation-adjusted § 199A threshold amounts", url: "https://www.irs.gov/pub/irs-drop/rp-25-32.pdf" }
  - { type: Statute, ref: "Pub. L. 119-21, § 70105", title: "Permanent § 199A deduction and minimum deduction for active QBI", url: "https://www.law.cornell.edu/uscode/text/26/199A" }
forms: []
related: ["1.2.1.l", "1.2.3.e", "1.2.4.a", "1.3.1.f", "1.2.3.k", "1.3.2.a"]
changelog:
  - { date: "2026-08-19", summary: "Initial draft. Sets out the two-limb IRC § 199A(a) computation, the § 199A(b)(2) wage and property limitation and its § 199A(b)(3) phase-in, the § 199A(d) specified service exclusion, the § 199A(f)(1) partner-level application, the 2026 threshold and phase-in figures from Rev. Proc. 2025-32 § 3.26, and the new § 199A(i) minimum deduction that Pub. L. 119-21 § 70105 put where the sunset used to be." }
  - { date: "2026-08-25", summary: "Added a plain-language summary, a decision diagram of the threshold/phase-in/SSTB gates, glossary marks, and two typed scenarios (the employee-wage exclusion and the owner-level filing mechanics)." }
diagram:
  archetype: "decision"
  caption: "Does the wage-and-property limitation apply, and how much?"
  tests:
    - { test: "Employee wages, or income from a C corporation", result: "No § 199A deduction — no exception at any income level", outcome: "fail" }
    - { test: "Taxable income at or below the threshold amount", result: "Full 20% of QBI — no wage test, and SSTB status doesn't matter", outcome: "pass" }
    - { test: "Above the threshold, but inside the phase-in range", result: "Reduced by the ratio — partial wage limitation, partial SSTB percentage", outcome: "pass" }
    - { test: "Above the top of the phase-in range", result: "Full wage/property limitation applies; an SSTB gets nothing", outcome: "fail" }
---

<div class="plain-terms">
Many people who run a business or freelance outside a regular job can claim the
{gloss:qualified-business-income-deduction} — a slice of that income deducted before it
gets taxed. It can be worth up to a fifth of business profit. It does not apply to wages from a job, and it does not apply to a regular
corporation. Above a certain income level, the deduction gets trickier. The type of
business starts to matter, and how much the business pays in wages starts to matter too.
Below that level, none of that complexity applies, and the deduction is simple. This page
works out which taxpayers land in the simple case and which land in the complicated one.
</div>

Section 199A was written to expire with the rest of the 2017 individual provisions, and for seven filing
seasons every explanation of it carried that warning. The warning is now wrong. Pub. L. 119-21 § 70105
struck the sunset and, at the same address in the Code, put a minimum deduction there instead — so the
subsection read for years as the end date now reads as a floor.

## The rule

**The deduction, in two limbs.** For a taxpayer other than a corporation there is allowed a deduction
equal to the lesser of the combined qualified business income amount, or 20 percent of the excess of
taxable income over net capital gain (IRC § 199A(a)(1), (2)): {fig:qbi.deduction}. The second limb is a
ceiling on the whole deduction, and because net capital gain comes out of the base, a taxpayer whose
income is mostly investment gain can have real business income and still be capped near zero.

**The combined amount.** It is the sum of a per-business figure for each qualified trade or business,
plus 20 percent of qualified REIT dividends and qualified publicly traded partnership income (IRC
§ 199A(b)(1)(A), (B)). That second component sits outside the wage and property test entirely.

**The per-business figure and its limitation.** For each qualified trade or business the amount is
{fig:qbi.per_business_amount} (IRC § 199A(b)(2)(A), (B)(i), (ii)). The wage-or-wage-and-basis prong is
what is meant by "the wage limitation"; the 2.5 percent alternative exists so a capital-intensive
business with almost no payroll — rental real estate is the standard example — is not shut out.

**Who the deduction belongs to.** Section 199A is applied at the partner or shareholder level. A
partnership or S corporation computes nothing; each owner takes an allocable share of every qualified
item, and is treated as having an allocable share of the entity's W-2 wages and of the unadjusted basis
of its qualified property — wages allocated as wage expense is, basis as depreciation is (IRC
§ 199A(f)(1)(A)(i)–(iii)). So {fig:qbi.entity_scope}.

**What is not qualified business income.** QBI is the net of qualified items of income, gain, deduction
and loss from a qualified trade or business, and excludes REIT dividends and PTP income, counted in the
other component (IRC § 199A(c)(1)). Section 199A(c)(3)(B) strips out capital gain and loss of either
holding period, dividends, interest not allocable to a trade or business, most § 954(c)(1) items, and
annuities not received in connection with the business. Section 199A(c)(4) removes
{fig:qbi.exclusions}. A net negative is carried into the next year as a loss from a qualified trade or
business (IRC § 199A(c)(2)).

**Two exclusions the threshold governs.** A qualified trade or business is any trade or business other
than a specified service trade or business and other than performing services as an employee (IRC
§ 199A(d)(1)(A), (B)). The employee exclusion is absolute — no threshold rescues it.
{fig:qbi.specified_service} The list is borrowed from § 1202(e)(3)(A) with engineering and architecture
read out, so those two fields are qualified businesses however large they grow, and § 199A(d)(2)(B) adds
investing and investment management, trading, and dealing in securities, partnership interests or
commodities.

**The threshold.** {fig:qbi.threshold} The statutory figure is the 2018 base amount, doubled for a
joint return and indexed since (IRC § 199A(e)(2)(A), (B)) — the section as printed cannot give the
current number, and Rev. Proc. 2025-32 § 3.26 supplies it.

**The phase-in.** Above the threshold, both the wage limitation and the specified service exclusion
phase in over a range: {fig:qbi.phase_in_range}. Within that range the wage limitation is not applied as
a cliff. The excess amount — the difference between 20 percent of QBI and the wage-and-property figure —
is reduced in the ratio that the taxpayer's excess over the threshold bears to the width of the range,
and only that reduced amount comes off (IRC § 199A(b)(3)(B)(i)–(iii)). A specified service business
inside the range keeps only the applicable percentage of its items, wages and basis (IRC
§ 199A(d)(3)(A)). Above the range it keeps none.

**The minimum.** {fig:qbi.minimum_deduction} (IRC § 199A(i)(1), (2), (3)). Material participation is the
§ 469(h) test, so a passive investor does not qualify for the floor even though the same income is
qualified business income for the main computation.

**Where it sits on the return.** It is not an itemized deduction. Section 63(b)(3) subtracts any § 199A
deduction in arriving at taxable income for an individual who does not itemize, alongside the standard
deduction — so it is available either way, and it reduces neither adjusted gross income nor
self-employment income.

## Current figures

| Item | Amount |
| --- | --- |
| Per qualified trade or business | {fig:qbi.per_business_amount} |
| Threshold amount | {fig:qbi.threshold} |
| Phase-in range | {fig:qbi.phase_in_range} |
| Phase-in width | {fig:qbi.phase_in_width} |
| Minimum deduction | {fig:qbi.minimum_deduction} |
| Permanence | {fig:qbi.permanence} |

## How it works in practice

Work the computation as three questions in order, and most of the difficulty disappears.

**First: is taxable income at or below the threshold?** If it is, IRC § 199A(b)(3)(A) applies the
per-business rule without subparagraph (B) — no wage test, no property test, and a specified service
business is a qualified business in full. Note which income figure is tested: taxable income, not
adjusted gross income and not business income, computed before the § 199A deduction itself.

**Second: if it is above, is it above by more than the range?** Past the top of the phase-in range the
two limitations apply flat. A specified service business is simply not a qualified trade or business, and
its income, wages and property drop out altogether. An ordinary business is capped at the greater of 50
percent of W-2 wages, or 25 percent of wages plus 2.5 percent of unadjusted basis in qualified
property.

**Third: if it is inside the range, apply the ratio.** For the wage limitation, the gap between 20
percent of QBI and the wage-and-property figure is the excess amount, and the reduction is that gap
multiplied by the fraction of the range already used. For a specified service business, the applicable
percentage is one minus that same fraction, applied to income, wages and basis alike.

Two mechanical points cause more errors than the arithmetic. W-2 wages means the amounts reported under
§ 6051(a)(3) and (8) — so a sole proprietor with no employees has no W-2 wages at all, and an S
corporation shareholder's own reasonable compensation is W-2 wages of the business even though it is
excluded from that shareholder's QBI. And the unadjusted basis is basis immediately after acquisition,
unreduced by depreciation, so bonus depreciation costs a taxpayer nothing here.

<div class="scenario" data-type="interaction">
<h3>The ceiling that is not the wage limitation</h3>

Devlin is single, materially participates in a consulting practice, and has $60,000 of qualified
business income from it. His taxable income is $52,000, of which $34,000 is net capital gain from a
stock sale. He is far below the threshold, so no wage test applies and consulting being a specified
service is irrelevant. His combined qualified business income amount is $12,000. But the second limb of
§ 199A(a) caps the deduction at 20 percent of taxable income over net capital gain — 20 percent of
$18,000, or $3,600. Stopping at "20 percent of QBI, he is under the threshold" overstates it by more
than triple.
</div>

<div class="scenario" data-type="boundary">
<h3>Inside the range, with the ratio done properly</h3>

Priya and Marcus file jointly. Her S corporation is not a specified service business; her share of QBI
is $300,000, her share of W-2 wages $70,000, and the entity holds no qualified property. Their taxable
income is $478,500 — above the joint threshold and inside the range, having used $75,000 of the
$150,000 width, so the fraction is one half.

Twenty percent of QBI is $60,000. The wage figure is the greater of 50 percent of $70,000 ($35,000) or
25 percent plus 2.5 percent of nothing ($17,500) — so $35,000. The excess amount is $25,000, half of
that is $12,500, and the deduction is $60,000 less $12,500, or $47,500. Applying the wage cap as a cliff
gives $35,000; halving the deduction gives $30,000. Both are wrong: the ratio applies to the gap, not to
the deduction.
</div>

<div class="scenario" data-type="baseline">
<h3>The floor doing work</h3>

Odile's only business is a small studio with $1,200 of qualified business income, in which she meets
the {gloss:material-participation} standard. Twenty percent is $240. Because her aggregate QBI from active
qualified trades or businesses is at least $1,000, she is an applicable taxpayer, and her deduction is
the greater of $240 or $400. She deducts $400 — a floor, not an addition to the $240. Had the studio
earned $900, she would fail the applicable-taxpayer test and deduct $180.
</div>

<div class="scenario" data-type="fails">
<h3>The wages the threshold cannot rescue</h3>

Tomás earns $180,000 in W-2 wages as an in-house engineer, and nothing else. His taxable income is well
below the threshold, so he assumes his wages get the same treatment his self-employed neighbor's income
does.

They do not. IRC § 199A(d)(1)(B) excludes the trade or business of performing services as an employee
from the definition of a qualified trade or business, with no threshold exception — that limb only ever
rescues a specified service business. His wages produce no § 199A deduction at any income level.
</div>

<div class="scenario" data-type="procedural">
<h3>What the owner actually files</h3>

Priya's {gloss:s-corporation} computes nothing under § 199A. It reports her allocable share of qualified
business income, W-2 wages, and unadjusted basis in qualified property on her Schedule K-1, the same way
it reports any other separately stated item.

Priya carries those figures onto her own return and works through the three questions — threshold, range,
ratio — herself, under IRC § 199A(f)(1)(A). If her accountant only reviews the corporation's return, the
deduction is never computed: it belongs one level up from where the K-1 numbers originate.
</div>

<div class="callout trap">

**The employee exclusion has no threshold.** Section 199A(d)(1)(B) excludes the trade or business of
performing services as an employee outright. Being under the threshold rescues a specified service
business; it never rescues wages.

**Net capital gain is subtracted from the ceiling, not from QBI.** It is already out of QBI by
§ 199A(c)(3)(B)(i); its second appearance is in § 199A(a)(2)(B), reducing the taxable income against
which 20 percent is measured.

**The deduction is the owner's, not the entity's.** A partnership or S corporation reports the
components; the return that claims the deduction is the owner's. A C corporation is excluded by the
opening words of § 199A(a).

**Reasonable compensation is excluded from QBI but is still wages.** An S corporation shareholder's
salary reduces their QBI under § 199A(c)(4)(A) and increases the business's W-2 wages for
§ 199A(b)(2)(B). Paying more salary can raise the deduction where the wage limitation binds and lower it
where it does not.

**The § 707(c) guaranteed payment has no wage counterpart.** It comes out of the partner's QBI, and
being no W-2 wage it does nothing for the wage limitation either — an asymmetry with S corporations that
is a favourite exam point.

**"Threshold" and "range" are different numbers.** Below the threshold there is no limitation; above
the top of the range there is a full one. The statute expresses the top as the threshold plus a fixed
width, so a question giving only the threshold has given you the range as well.
</div>

## How this has changed

The change of record is Pub. L. 119-21 § 70105. Section 199A(i) used to say the section would not apply
to taxable years beginning after 31 December 2025. That sentence is gone; the subsection now carries the
minimum deduction instead, and {fig:qbi.permanence}. Anyone working from a 2024 or 2025 explanation is
carrying a sunset that no longer exists — a general pattern in the 2025 Act, so any provision an older
source describes as expiring after 2025 should be checked at source before it is repeated.

Two substantive changes travelled with the permanence. The phase-in width was doubled:
{fig:qbi.phase_in_width}, which appears in the statutory text of both § 199A(b)(3)(B)(i) and
§ 199A(d)(3)(A) and in the Rev. Proc. 2025-32 § 3.26 tables. A wider range means the limitation bites
more gradually, and taxpayers who were fully phased out in 2025 may be back inside the range in 2026 on
unchanged income. The new § 199A(i) minimum deduction takes effect for taxable years beginning after
31 December 2025, with both of its amounts indexed for years beginning after 2026 (IRC § 199A(i)(3)).

One further 2026 change reaches into the definition: § 199A(c)(4) now also excludes from qualified
business income any amount for which the § 224(a) deduction for qualified tips is allowable — a tipped
proprietor cannot take both on the same dollars.

## Exam focus

Expect the threshold to be the hinge of the question. The favourite structure gives a taxpayer plainly
below it and asks for the deduction — the answer is 20 percent, with the specified service question a
distractor — or gives one plainly above it with a specified service business, where the answer is
nothing. The phase-in arithmetic appears less often, but when it does the reduction is applied to the
excess amount and not to the deduction.

Know that the deduction is available whether or not the taxpayer itemizes, that it reduces neither
adjusted gross income nor self-employment income, and that it belongs to the owner rather than the
entity. Know who is outside it entirely: C corporations, and employees on their wages. Be able to say
why a sole proprietor with no employees has no W-2 wages, and why that only matters above the threshold.
For 2026, know that the section is permanent, that the phase-in width doubled, and that a small active
business now has a floor under its deduction.

## Check yourself

**1.** A single taxpayer with taxable income of $140,000 runs a law practice with $110,000 of qualified
business income and pays no wages. What is the § 199A deduction, and does the practice being a specified
service trade or business matter?

*Answer: $22,000, and no. Taxable income is below the threshold, so IRC § 199A(b)(3)(A) applies the
per-business rule without the wage and property limitation and § 199A(d)(3)(A) treats the specified
service business as qualified in full — subject only to the § 199A(a)(2) ceiling.*

**2.** A partnership pays a partner a $90,000 guaranteed payment for services and pays $200,000 of W-2
wages to its employees. How does the guaranteed payment affect that partner's qualified business income
and the partnership's W-2 wages for the limitation?

*Answer: It reduces the partner's qualified business income — IRC § 199A(c)(4)(B) excludes a § 707(c)
guaranteed payment — and does nothing for the wage limitation, because a guaranteed payment is not a W-2
wage under § 6051(a) and is not in the $200,000. The partner loses on both sides.*

**3.** Why can a rental real estate business with a single part-time employee still claim a substantial
deduction above the threshold?

*Answer: Because IRC § 199A(b)(2)(B)(ii) offers the alternative of 25 percent of W-2 wages plus 2.5
percent of the unadjusted basis of all qualified property, and the taxpayer takes the greater of that
and 50 percent of wages. A capital-intensive business with little payroll is carried by the basis
component, which depreciation does not reduce.*

**4.** A married couple filing jointly have $3,000 of qualified business income from a craft business in
which they both materially participate, and taxable income well below the threshold. What is their
deduction?

*Answer: $600 by the ordinary computation, but IRC § 199A(i) makes it $400 or the computed amount,
whichever is greater — so $600 stands. The floor would apply only if 20 percent of QBI came to less than
$400, which needs QBI below $2,000; they clear the $1,000 applicable-taxpayer test either way.*

**5.** A taxpayer's only business income is $40,000 of qualified publicly traded partnership income. The
partnership reports no allocable W-2 wages. Does the wage limitation reduce the deduction?

*Answer: No. Qualified publicly traded partnership income enters the combined qualified business income
amount through IRC § 199A(b)(1)(B) at a flat 20 percent, outside the § 199A(b)(2) per-business
computation where the wage and property limitation lives. Qualified REIT dividends are treated the same
way.*
