---
title: "Net investment income tax"
code: "1.4.1.i"
part: 1
domain: "Taxation"
section: "Taxation"
description: "A lesser-of computation with an unindexed threshold, so it reaches further every year. What it never touches is anything already bearing employment tax."
status: published
taxYear: 2026
lastReviewed: "2026-08-19"
reviewedBy: "Draft for N. O. review"
authorities:
  - { type: IRC, ref: "§ 1411", title: "Imposition of tax on net investment income", url: "https://www.law.cornell.edu/uscode/text/26/1411" }
  - { type: IRC, ref: "§ 469", title: "Passive activity losses and credits limited", url: "https://www.law.cornell.edu/uscode/text/26/469" }
  - { type: IRC, ref: "§ 1401", title: "Rate of tax — self-employment", url: "https://www.law.cornell.edu/uscode/text/26/1401" }
  - { type: RevProc, ref: "Rev. Proc. 2025-32, § 3.01", title: "2026 rate tables including estates and trusts", url: "https://www.irs.gov/pub/irs-drop/rp-25-32.pdf" }
forms: []
related: ["1.4.1.j", "1.2.3.b", "1.2.1.l", "1.4.1.h", "1.4.1.l"]
changelog:
  - { date: "2026-08-19", summary: "Initial draft. Sets out the IRC § 1411(a) lesser-of computation for individuals and for estates and trusts, the § 1411(b) unindexed thresholds, the § 1411(c) definition of net investment income with its passive activity and trading business limbs, the § 1411(c)(5) and (6) exclusions for qualified plan distributions and self-employment income, the § 1411(d) modified adjusted gross income definition, and the § 1411(e) non-application to nonresident aliens." }
  - { date: "2026-08-25", summary: "Added a plain-language summary, two typed scenarios (fails, procedural), and glossary marks." }
---

<div class="plain-terms">
This is an extra tax on money made from investments, not from work. Interest, dividends, rent, and
gains from selling investments are the usual examples. It only applies once a person's total income for
the year passes a set dollar line. It affects higher earners who also have investment income. Wages and
normal profit from running a business are never taxed by this rule. But they still count toward that
income line, and can push other income over it. A taxpayer whose income stays under the line owes
nothing here, no matter how much came from investments. What it decides is a smaller of two amounts: the
investment income itself, or the part of total income above the line.
</div>

This tax is easy to compute and easy to get wrong, because the answer is a *lesser of* and both limbs
have to be worked out. It is also the clearest example on an individual return of a threshold Congress
never indexed: the figures have stood since the tax took effect in 2013, so each year of wage growth
pulls more taxpayers into it without any change in the law.

## The rule

**The tax.** {fig:niit.rate} (IRC § 1411(a)(1)). Two consequences follow from the shape. A taxpayer
below the threshold pays nothing however large their investment income, and a taxpayer with no
investment income pays nothing however large their modified adjusted gross income.

**The threshold.** {fig:niit.threshold}

**Estates and trusts.** {fig:niit.estate_threshold} (IRC § 1411(a)(2)). The trust threshold is a
fraction of the individual one, which is why investment income accumulating in a trust attracts the tax
far sooner than the same income in an individual's hands — and why distributing it can be worth doing.

**What net investment income is.** {fig:niit.components} (IRC § 1411(c)(1)). Read the three limbs
together and the pattern is clear: passive income is in, and income from an active trade or business is
out unless the business is trading in financial instruments or commodities.

**What "passive" means here.** A trade or business is within § 1411(c)(2) if it is a passive activity
within § 469 with respect to the taxpayer, or is a trade or business of trading in financial instruments
or commodities as defined in § 475(e)(2). So the § 469 material participation tests do double duty: they
decide whether a loss is deductible and whether the income is subject to this tax.

**Working capital.** A rule similar to § 469(e)(1)(B) applies (IRC § 1411(c)(3)), so income from
investing working capital is not treated as derived in the ordinary course of the business — it is net
investment income even where the business itself is active.

**Selling a partnership or S corporation interest.** Gain is taken into account only to the extent of
the net gain the transferor would have taken into account had the entity sold all its property at fair
market value immediately before the disposition, with a similar rule for losses (IRC § 1411(c)(4)(A),
(B)). The effect is to look through to the underlying assets rather than treating the whole gain as
investment income.

**Two exclusions that matter more than anything else.** {fig:niit.exclusions} The second is the
structural one: § 1411(c)(6) prevents an item from bearing both this tax and the § 1401(b) Medicare tax,
which is why an active sole proprietor's profit is outside § 1411 entirely.

**Modified adjusted gross income.** {fig:niit.magi}

**Who is outside it.** {fig:niit.nonapplication}

## Current figures

| Item | Amount |
| --- | --- |
| Rate and computation | {fig:niit.rate} |
| Threshold | {fig:niit.threshold} |
| Estates and trusts | {fig:niit.estate_threshold} |
| Net investment income | {fig:niit.components} |
| Exclusions | {fig:niit.exclusions} |
| Modified adjusted gross income | {fig:niit.magi} |
| Non-application | {fig:niit.nonapplication} |

## How it works in practice

**Compute both limbs, always.** Net investment income, and modified adjusted gross income less the
threshold. The tax is 3.8 percent of the smaller. Working only one limb is the commonest error, and it
can overstate or understate depending on which limb was skipped.

**Then check what is actually investment income.** Wages are not, and never enter the first limb — but
they do enter modified adjusted gross income and so can push a taxpayer over the threshold, exposing
investment income that would otherwise have escaped. A taxpayer whose income is all wages has a large
second limb and a first limb of zero, and owes nothing.

**Then look for the exclusions.** Retirement plan distributions are out by name, however large. Income
already in the self-employment tax base is out. Tax-exempt interest is not gross income at all, so it
never reaches the definition.

**Then think about the § 469 characterisation**, because it decides the answer for anyone with rental
property or an interest in a business they do not run. Material participation takes the income out of
§ 1411; failing it puts the income in. Grouping elections made for § 469 purposes carry through.

For planning, the two levers are the threshold and the character. Deferring a gain across a year, or
accelerating a deductible expense allocable to investment income, can move a taxpayer under one limb or
the other. And because the threshold never moves, a taxpayer who was clear of it two years ago may not
be now on unchanged real income.

<div class="scenario" data-type="baseline">
<h3>The lesser of, and why both limbs matter</h3>

Idris is single with $190,000 of wages and a $22,000 gain on shares. His modified adjusted gross income
is $212,000.

Net investment income is $22,000. The excess over the $200,000 threshold is $12,000. The tax is 3.8
percent of the lesser — $12,000 — or $456. A preparer who taxed the whole $22,000 would report $836, and
one who ignored the wages entirely would report nothing at all. Note that the wages, though not
investment income, are what brought him over the threshold in the first place.
</div>

<div class="scenario" data-type="interaction">
<h3>Rental income on both sides of the line</h3>

Two clients each have $40,000 of net rental income and modified adjusted gross income well over the
threshold.

The first owns two apartments managed by an agent and does not qualify as materially participating. The
rental is a passive activity within § 469, so the income is within § 1411(c)(2)(A) and the whole $40,000
is net investment income. The second is a real estate professional who materially participates in her
rental operations; her rentals are not a passive activity, so § 1411(c)(1)(A)(i) excludes the rents as
derived in the ordinary course of a trade or business not described in paragraph (2). Same income, same
income level, opposite answers — decided entirely by § 469.
</div>

<div class="scenario" data-type="boundary">
<h3>The trust that should have distributed</h3>

A complex trust has $60,000 of dividends and interest, distributes nothing, and has adjusted gross
income of $60,000.

Its threshold is the point at which the highest § 1(e) bracket begins — a figure in the low tens of
thousands rather than the hundreds. Almost the whole $60,000 is exposed, and the tax is 3.8 percent of
the lesser of undistributed net investment income and that excess. Had the trustee distributed the
income to a beneficiary whose own modified adjusted gross income was below $200,000, the income would
have carried out to the beneficiary and borne no net investment income tax at all.
</div>

<div class="scenario" data-type="fails">
<h3>Interest that never enters the computation</h3>

A retiree holds $500,000 in municipal bonds paying $18,000 of tax-exempt interest a year, along with
enough taxable pension income to sit well above the $200,000 threshold. She assumes the municipal bond
interest is investment income like any other and sets aside 3.8 percent of it for this tax.

It never enters the computation at all. Tax-exempt interest is not gross income under the Code, so it
never reaches the § 1411(c)(1) definition of net investment income in the first place. Nothing is owed
on the $18,000, and nothing about her other income changes that. This is unrelated to the
{gloss:additional-medicare-tax}, which reaches wages and self-employment earnings instead of investment
income.
</div>

<div class="scenario" data-type="procedural">
<h3>Missing it in the first quarterly payment</h3>

A taxpayer sells a long-held investment in February for a $90,000 {gloss:capital-gain}, pushing her
{gloss:adjusted-gross-income} well above her threshold for the year. She pays her usual estimated tax
based on wages alone in April, without accounting for this tax at all, and picks it up only when she
prepares her return the following spring.

Because the tax is added to income tax liability for purposes of the estimated tax rules, the shortfall
in her first-quarter payment can carry an underpayment addition with it, even though the return itself,
filed on time with full payment, has no balance-due problem otherwise. Reporting it on Form 8960 the
following April corrects the liability, but not the addition already accrued for paying late in the
year.
</div>

<div class="callout trap">

**It is a lesser-of, not a percentage of investment income.** Both limbs have to be computed.

**Wages are not investment income but they matter.** They are in modified adjusted gross income and can
open the door for investment income that would otherwise be untaxed.

**Retirement plan distributions are excluded by name** — §§ 401(a), 403(a), 403(b), 408, 408A and 457(b)
— however large the distribution and whatever the taxpayer's income.

**Self-employment income is excluded** by § 1411(c)(6), so an active business owner's profit bears
Medicare tax rather than this one. The same dollar is never in both.

**Tax-exempt interest is outside it entirely**, because it is not gross income. Municipal bond interest
therefore escapes both this tax and the income tax.

**A trust's threshold is tiny** compared with an individual's, and distributing income can eliminate the
tax altogether.

**The threshold is never indexed.** A source describing this as a tax on the very wealthy is describing
2013, not 2026.

**A nonresident alien is wholly outside it** (IRC § 1411(e)(1)) — and where one spouse is a nonresident
alien, the § 6013(g) or (h) election that makes them a resident for income tax purposes brings them
inside this tax too.
</div>

## How this has changed

Nothing in Pub. L. 119-21 amended § 1411, and the section has not been substantively amended since it
was enacted by Pub. L. 111-152 § 1402(a)(1) in 2010, effective for taxable years beginning after 31
December 2012.

What has changed is its reach, and entirely through inaction. The thresholds in § 1411(b) are stated as
fixed dollar amounts with no indexing provision anywhere in the section — unlike almost every other
dollar figure on an individual return. Thirteen years of wage and asset price growth have therefore
moved the tax steadily down the income distribution without a single amendment. This is the same
mechanism recorded for the § 6654(d)(1)(C) estimated tax threshold, and it should be stated plainly to
clients who remember the tax as something that did not concern them.

The one figure on this page that does move is the estate and trust threshold, because § 1411(a)(2)(B)(ii)
points at the start of the highest § 1(e) bracket, which is indexed annually. That figure comes from the
rate tables in the annual revenue procedure rather than from § 1411 itself.

A drafting point worth noting: § 1411 sits in its own chapter — chapter 2A — rather than in chapter 1 or
chapter 2. That placement is why the § 26(a) limitation on nonrefundable credits does not reach it, and
why § 6654(f)(3) has to name it expressly to bring it into the estimated tax base.

## Exam focus

Expect a computation, and expect the distractors to be the two limbs computed separately. Work net
investment income, work modified adjusted gross income less the threshold, take 3.8 percent of the
smaller.

Know the thresholds and that they are not indexed. Know that wages are not net investment income but do
count toward the threshold. Know the two big exclusions — qualified plan distributions and
self-employment income — and that tax-exempt interest never enters at all.

Know that the passive activity determination under § 469 decides whether rental and business income is
caught, and that an estate or trust is exposed at a far lower threshold.

## Check yourself

**1.** A single taxpayer has $190,000 of wages and $22,000 of net investment income. What is the tax?

*Answer: $456. Net investment income is $22,000 and modified adjusted gross income exceeds the $200,000
threshold by $12,000, so IRC § 1411(a)(1) applies 3.8 percent to the lesser figure of $12,000.*

**2.** A taxpayer with $600,000 of modified adjusted gross income takes a $150,000 distribution from a
traditional individual retirement account. Is it subject to the tax?

*Answer: No. IRC § 1411(c)(5) excludes any distribution from a plan or arrangement described in
§§ 401(a), 403(a), 403(b), 408, 408A or 457(b) from net investment income. The distribution does,
however, increase modified adjusted gross income and so can expose other investment income to the tax.*

**3.** Why is a sole proprietor's business profit not subject to the net investment income tax?

*Answer: Because IRC § 1411(c)(6) excludes any item taken into account in determining self-employment
income on which the § 1401(b) tax is imposed. The profit bears the hospital insurance component of
self-employment tax instead, and the same dollar is never subject to both.*

**4.** Two taxpayers each have $40,000 of rental income and identical high incomes. Why might only one
owe the tax?

*Answer: Because § 1411(c)(2)(A) brings in a trade or business that is a passive activity within § 469.
Where the taxpayer materially participates, the rents are derived in the ordinary course of a trade or
business not described in that paragraph and are excluded by § 1411(c)(1)(A)(i); where they do not, the
income is caught in full.*

**5.** Is the threshold adjusted for inflation?

*Answer: No. The amounts in IRC § 1411(b) are fixed in the statute with no indexing provision, and have
been unchanged since the tax took effect for taxable years beginning after 31 December 2012. Only the
estate and trust threshold moves, because § 1411(a)(2)(B)(ii) points at the indexed start of the highest
§ 1(e) bracket.*
