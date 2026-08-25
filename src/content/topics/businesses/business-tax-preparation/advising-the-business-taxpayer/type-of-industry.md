---
title: "Type of industry (e.g., specified service business owners)"
code: "2.2.5.j"
part: 2
domain: "Business Tax Preparation"
section: "Advising the business taxpayer"
description: "Engineering and architecture are excluded from the small business stock exclusion and are not specified service trades for section 199A — the two lists are not the same."
status: published
taxYear: 2026
lastReviewed: "2026-08-21"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 199A", title: "Qualified business income", url: "https://www.law.cornell.edu/uscode/text/26/199A" }
  - { type: IRC, ref: "§ 448", title: "Limitation on use of cash method of accounting", url: "https://www.law.cornell.edu/uscode/text/26/448" }
  - { type: IRC, ref: "§ 460", title: "Special rules for long-term contracts", url: "https://www.law.cornell.edu/uscode/text/26/460" }
  - { type: IRC, ref: "§ 613", title: "Percentage depletion", url: "https://www.law.cornell.edu/uscode/text/26/613" }
  - { type: IRC, ref: "§ 613A", title: "Limitations on percentage depletion in case of oil and gas wells", url: "https://www.law.cornell.edu/uscode/text/26/613A" }
  - { type: IRC, ref: "§ 1202", title: "Partial exclusion for gain from certain small business stock", url: "https://www.law.cornell.edu/uscode/text/26/1202" }
  - { type: IRC, ref: "§ 475", title: "Mark to market accounting method for dealers in securities", url: "https://www.law.cornell.edu/uscode/text/26/475" }
  - { type: IRC, ref: "§ 263A", title: "Capitalization and inclusion in inventory costs of certain expenses", url: "https://www.law.cornell.edu/uscode/text/26/263A" }
  - { type: Reg, ref: "§ 1.448-1T", title: "Limitation on use of the cash receipts and disbursements method", url: "https://www.law.cornell.edu/cfr/text/26/1.448-1T" }
  - { type: Form, ref: "Form 1120-S instructions", title: "Principal Business Activity Codes", url: "https://www.irs.gov/instructions/i1120s" }
forms: []
related: ["2.2.4.a", "2.2.5.e", "2.2.2.l", "2.2.5.l", "2.2.5.g"]
changelog:
  - { date: "2026-08-21", summary: "Initial draft. Sets out the three different industry lists that operate in the Code and shows they are not interchangeable — the IRC § 199A(d)(2) specified service trade or business list, the IRC § 1202(e)(3) exclusions from a qualified trade or business, and the Reg. § 1.448-1T(e)(4) qualified personal service corporation fields — with the IRC § 199A(d)(3) applicable percentage phase-out, and the industry-specific regimes in IRC §§ 460, 613 and 263A." }
  - { date: "2026-08-25", summary: "Added a plain-language summary, glossary marks, and a fourth typed scenario showing that specified-service status is irrelevant below the section 199A threshold." }
---

<div class="plain-terms">
This page is about how a business's line of work changes its tax treatment. It is also a warning:
several rules use lists that sound alike but are not the same list. Some rules truly depend on what
a business does. Builders, oil and gas firms, and farmers each get their own special treatment.
Other rules use a list of jobs only as a stand-in for something else, and those lists do not match
each other. This affects business owners in professional fields most of all. A job like engineering
can be treated in very different ways, depending on which rule is being used. The code printed on
the tax return itself changes nothing on its own.
</div>

Industry matters in the Code in two quite different ways. Some provisions ask what a business *does*
and give a different rule accordingly — long-term contracts, extraction, farming. Others use an
industry list as a proxy for something else, and those lists overlap without matching. Treating any
two of them as the same list is the reliable way to get a question wrong.

## The rule

**Three lists, and they differ.** For section 199A: {fig:qbi.sstb} (IRC § 199A(d)(2)). For the small
business stock exclusion: {fig:ind.qsbs_excluded} (IRC § 1202(e)(3)). For the cash method:
{fig:method.qpsc_function} (Reg. § 1.448-1T(e)(4)(i)). The relationship between the first two is
stated in the statute itself: {fig:ind.sstb_vs_qsbs}.

**A specified service business is not simply excluded.** {fig:ind.sstb_phase}
(IRC § 199A(d)(3)). Below the threshold — {fig:qbi.below_threshold} (IRC § 199A(b)(3)) — the status
does not matter at all.

**And the figures.** {fig:qbi.threshold_2026} (IRC § 199A(e)(2); Rev. Proc. 2025-32 § 3.26), with
{fig:qbi.phasein_2026} and {fig:qbi.phase_in_width}.

**Industry regimes that turn on what the business does.** Construction:
{fig:ind.construction_exception} (IRC § 460(e)(1)). Extraction: {fig:depr.percentage_scope}
(IRC § 613(b)) and {fig:depr.oil_gas_default} (IRC § 613A(a)). Farming:
IRC § 448(b)(1) lifts the cash method prohibition for a farming business regardless of receipts.

**And the code on the return.** {fig:bizclass.code} (Instructions for Form 1120-S) — a different
classification again, chosen by receipts and used for comparison rather than for any substantive
rule.

## Current figures

| Item | Rule | Authority |
| --- | --- | --- |
| Specified service trade | {fig:qbi.sstb} | IRC § 199A(d)(2) |
| Section 1202 exclusions | {fig:ind.qsbs_excluded} | IRC § 1202(e)(3) |
| How the two lists differ | {fig:ind.sstb_vs_qsbs} | IRC § 199A(d)(2)(A) |
| Applicable percentage | {fig:ind.sstb_phase} | IRC § 199A(d)(3) |
| Threshold, 2026 | {fig:qbi.threshold_2026} | IRC § 199A(e)(2); Rev. Proc. 2025-32 |
| Phase-in top, 2026 | {fig:qbi.phasein_2026} | Rev. Proc. 2025-32 § 3.26 |
| Construction exception | {fig:ind.construction_exception} | IRC § 460(e)(1) |

## How it works in practice

**Ask which list the question is using before answering it.** Engineering is the clearest example:
it is excluded from a qualified trade or business for the section 1202 small business stock
exclusion, and it is *not* a specified service trade or business for section 199A, because
IRC § 199A(d)(2)(A) applies the section 1202 list "without regard to the words 'engineering,
architecture'". A candidate carrying one list answers half the questions wrongly.

**The section 199A list is wider than section 1202 in one direction too.**
IRC § 199A(d)(2)(B) adds investing and investment management, trading, and dealing in securities,
partnership interests or commodities — categories § 1202(e)(3)(A) does not name. And it substitutes
"employees or owners" for "employees" in the reputation-or-skill limb, which catches a business
built around its proprietor rather than its staff.

**Get the three-band structure right.** Below the threshold, specified service status is irrelevant
and the wage and property limitations are disregarded entirely. Between the threshold and the top of
the phase-in range, the applicable percentage in IRC § 199A(d)(3)(B) reduces the qualified items,
W-2 wages and unadjusted basis proportionately — so the deduction shrinks rather than disappearing.
Above the top of the range, a specified service business gets nothing. Saying the deduction is
"disallowed above the threshold" collapses the middle band and is wrong for most of the taxpayers it
matters to.

**The qualified personal service corporation fields are a third list with a different purpose.**
They decide access to the cash method for a corporation under IRC § 448(b)(2), and their content
differs again: engineering *is* on that list, expressly including surveying and mapping, and the
test is 95 percent of employee time rather than a share of receipts or income.

**Some industry rules are about the activity, not about a list.** A construction business is on
percentage of completion unless it fits the IRC § 460(e) exception, which combines a duration
estimate with the gross receipts test. An extractive business may take percentage depletion only for
the deposits IRC § 613(b) names, and oil and gas is denied it by default under IRC § 613A(a). A
farming business escapes the IRC § 448 cash method bar outright.

**Do not confuse any of this with the activity code.** The six-digit code on the return classifies
the business for comparison against industry data. It has no substantive effect on any of these
provisions, and a business can carry a manufacturing code while being a specified service trade or
business for section 199A purposes.

## Scenarios

<div class="scenario" data-type="interaction">
<h3>The engineer and the consultant</h3>

Two sole proprietors each have $600,000 of qualified business income and taxable income well above
the top of the phase-in range. One runs an engineering practice; the other runs a management
consultancy. Neither pays W-2 wages or holds significant qualified property.

The consultant gets nothing. Consulting is named in IRC § 1202(e)(3)(A) and is therefore a specified
service trade or business under IRC § 199A(d)(2)(A), and above the phase-in range a specified
service business is excluded entirely.

The engineer is not a specified service trade or business at all, because IRC § 199A(d)(2)(A)
applies the section 1202 list without regard to the words "engineering, architecture". But the
engineer's deduction is still limited: above the threshold the wage and property limitation applies,
and with no W-2 wages and no qualified property that limitation produces nothing either. Same answer,
entirely different reason — and the reasons diverge as soon as either hires staff.
</div>

<div class="scenario" data-type="boundary">
<h3>The practice in the middle band</h3>

A married couple filing jointly run an accountancy practice. Their taxable income sits $60,000 above
the section 199A threshold, and the practice has substantial W-2 wages.

Their deduction is neither full nor nil. Accounting is a specified service trade or business, but
IRC § 199A(d)(3)(A) provides that while taxable income is below the threshold plus the phase-in
width, the business does not fail to be a qualified trade or business — only the applicable
percentage of its qualified items, W-2 wages and unadjusted basis is taken into account.

The applicable percentage under (d)(3)(B) is 100 percent reduced by the ratio of the excess over the
threshold to the phase-in width. At $60,000 into a $150,000 joint range, that leaves 60 percent of
each input. The wage limitation then operates on the reduced figures. A preparer who treats the
couple as having no deduction because they are "over the threshold" has given away a substantial
number.
</div>

<div class="scenario" data-type="timing">
<h3>The builder who wanted the cash method</h3>

Cranbourne Construction averages $18,000,000 of gross receipts, is not a tax shelter, and takes on
contracts it expects to finish in about eighteen months.

Two provisions have to be satisfied and both are. IRC § 460(e)(1)(B) removes the percentage of
completion requirement for a construction contract where the taxpayer estimates at the outset that
it will be completed within two years and meets the IRC § 448(c) gross receipts test for the year
the contract is entered into. And § 448(c) itself lifts the {gloss:cash-method} bar under the
{gloss:method-of-accounting} rules.

Two cautions belong in the advice. The two-year estimate is made contract by contract at the
commencement date, so a longer contract taken later is on percentage of completion even though the
company still qualifies. And the gross receipts test is retested annually on the preceding three
years, so growth will eventually put both reliefs out of reach at once.
</div>

<div class="scenario" data-type="baseline">
<h3>The financial planner who never asked the question</h3>

A sole proprietor runs an investment advisory practice in its second year, with $70,000 of qualified
business income and taxable income comfortably below the section 199A threshold. She asks whether
investment advice counts as a specified service trade or business, worried the answer might cost her
the {gloss:qualified-business-income-deduction} entirely.

The question does not need answering. Investment advice is squarely on the specified service list —
IRC § 199A(d)(2)(B) names investing and investment management by name — but IRC § 199A(b)(3)
disregards specified service status entirely for a taxpayer below the threshold. She takes the full
20 percent deduction on her qualified business income regardless of what list her practice sits on.

This is the ordinary case for most small businesses, and it is why the three-list warning that
dominates this topic matters mainly to businesses that have grown past the threshold. Below it, the
lists are academic.
</div>

## Traps

<div class="callout trap">

**The section 199A and section 1202 lists are not the same list.** Engineering and architecture are
excluded from a qualified trade or business under IRC § 1202(e)(3)(A) but are read out of the
section 199A definition by IRC § 199A(d)(2)(A).

</div>

<div class="callout trap">

**"Disallowed above the threshold" is wrong for the middle band.** IRC § 199A(d)(3) reduces the
inputs by an applicable percentage across the phase-in range; the deduction only disappears above
the top of it.

</div>

<div class="callout trap">

**The qualified personal service corporation list is a third list.** Reg. § 1.448-1T(e)(4)(i)
includes engineering, expressly with surveying and mapping, and applies a 95 percent employee time
test — nothing to do with either of the other two.

</div>

<div class="callout trap">

**The activity code has no substantive effect.** It classifies the return for comparison against
industry data. A business with a manufacturing code can still be a specified service trade or
business, and vice versa.

</div>

## How this has changed

Section 199A's industry list was drafted by cross-reference in 2017 and has not been amended since,
which is why the "without regard to the words engineering, architecture" construction survives — the
words are still in section 1202 and still read out of section 199A. What moved in 2025 was the
arithmetic around the list rather than the list itself: Pub. L. 119-21 § 70105(a) widened the
phase-in range by half, so a specified service business now keeps a partial deduction across a
materially wider band of income, and § 70105(b)(1) removed the section's expiry.

Section 1202 has moved more substantially. The exclusion percentage now depends on when the stock
was acquired and how long it was held, with a shorter minimum holding period for stock acquired
after the applicable date, so an industry question about qualified small business stock has to be
answered with the acquisition date in hand.

The long-term contract exception has been stable, but its reach has grown with the IRC § 448(c)
threshold — a construction business that was required to use percentage of completion a decade ago
may now qualify for the exception without changing anything about its contracts.

Nothing in the post-2024 legislation alters IRC § 460(e), § 613 or the qualified personal service
corporation definition.

## Exam focus

Learn the section 1202 list first, because both of the others are defined against it. Then learn the
two modifications section 199A makes — the removal of engineering and architecture, and the
substitution of "employees or owners" — and the additional financial categories in
IRC § 199A(d)(2)(B).

Know the three-band structure for section 199A and be able to compute the applicable percentage:
100 percent reduced by the ratio of the excess over the threshold to the phase-in width.

Keep the qualified personal service corporation fields separate and remember that engineering is on
that list and that the test is a share of employee time.

For industry-specific regimes, know the IRC § 460(e) construction exception with both its limbs,
that IRC § 613A(a) denies percentage depletion for oil and gas by default, and that a farming
business escapes the IRC § 448 cash method bar under § 448(b)(1).

Finally, keep the activity code out of the substantive analysis entirely.

## Check yourself

**1.** An architect with taxable income above the top of the phase-in range asks whether the practice
is a specified service trade or business. What do you say?

*Answer: No. IRC § 199A(d)(2)(A) adopts the IRC § 1202(e)(3)(A) list "applied without regard to the
words 'engineering, architecture'", so architecture is read out of the definition for section 199A
purposes even though it is excluded from a qualified trade or business for the small business stock
exclusion. The practice is a qualified trade or business — but above the threshold the wage and
property limitation applies in full, so whether it produces a deduction depends on the W-2 wages
paid and the unadjusted basis of qualified property held.*

**2.** A joint-filing couple's taxable income exceeds the section 199A threshold by half the phase-in
width. Their business is a law firm. What percentage of its qualified items enters the computation?

*Answer: 50 percent. IRC § 199A(d)(3)(B) defines the applicable percentage as 100 percent reduced by
the ratio of the taxable income in excess of the threshold to the phase-in width, and half of the
width gives a reduction of 50 points. That percentage applies to the qualified items of income,
gain, deduction and loss, to the W-2 wages and to the unadjusted basis of qualified property alike,
so all three inputs are halved before the wage and property limitation is applied to what remains.*

**3.** Why can a corporation be a qualified personal service corporation for IRC § 448 and not a
specified service trade or business for section 199A?

*Answer: Because the two provisions use different lists for different purposes.
Reg. § 1.448-1T(e)(4)(i) lists eight fields including engineering, expressly with surveying and
mapping, and asks whether 95 percent or more of employee time is spent in one of them — a test about
access to the cash method. IRC § 199A(d)(2) works from the section 1202 list with engineering and
architecture read out, and asks about the character of the trade or business for the deduction. An
engineering corporation meets the first and fails the second, which is not a contradiction.*

**4.** A construction company meeting the gross receipts test enters a contract it estimates will
take thirty months. May it use the completed contract method?

*Answer: Not under IRC § 460(e)(1)(B), which requires the taxpayer to estimate at the time the
contract is entered into that it will be completed within the 2-year period beginning on the
contract commencement date. Thirty months fails that limb even though the gross receipts test is
met — both are required. The exception is applied contract by contract, so the company's other
contracts under two years are unaffected. A residential construction contract has its own more
generous treatment.*

**5.** Why does the activity code on the return not answer any of these questions?

*Answer: Because it is a classification for comparison, not a substantive test. The six-digit code
is chosen by the activity producing the largest percentage of total receipts and is used to measure
the return against published industry data on examination. None of section 199A, section 1202,
IRC § 448, IRC § 460 or IRC § 613 refers to it. A business can hold a manufacturing code and be a
specified service trade or business, or hold a professional services code and not be one — the
substantive tests look at what the business does and how, not at what it entered on page one.*
