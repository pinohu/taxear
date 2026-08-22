---
title: "Sole proprietorships"
code: "2.1.1.a"
part: 2
domain: "Business Entities and Considerations"
section: "Business entities"
description: "A sole proprietorship is not an entity, files no return, and has no date of its own. Everything about it is the owner, which is exactly why it is easy to get wrong."
status: published
taxYear: 2026
lastReviewed: "2026-08-21"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: Reg, ref: "§ 301.7701-2", title: "Business entities; definitions", url: "https://www.law.cornell.edu/cfr/text/26/301.7701-2" }
  - { type: IRC, ref: "§ 6072", title: "Time for filing income tax returns", url: "https://www.law.cornell.edu/uscode/text/26/6072" }
  - { type: IRC, ref: "§ 6017", title: "Self-employment tax returns", url: "https://www.law.cornell.edu/uscode/text/26/6017" }
  - { type: IRC, ref: "§ 1402", title: "Definitions", url: "https://www.law.cornell.edu/uscode/text/26/1402" }
  - { type: IRC, ref: "§ 162", title: "Trade or business expenses", url: "https://www.law.cornell.edu/uscode/text/26/162" }
  - { type: IRC, ref: "§ 1401", title: "Rate of tax", url: "https://www.law.cornell.edu/uscode/text/26/1401" }
forms: []
related: ["2.1.1.b", "2.1.1.e", "2.1.1.g", "2.1.1.l", "1.4.1.d", "2.1.1.c", "2.1.1.h", "2.1.1.j", "2.1.1.k", "2.2.4.a"]
changelog:
  - { date: "2026-08-21", summary: "Initial draft. Sets out the sole proprietorship as the absence of an entity — disregarded under Reg. § 301.7701-2(c)(2)(i), reported on the owner's return with no separate filing date under IRC § 6072, subject to self-employment tax under §§ 1401 and 1402 with the § 6017 return requirement and the unindexed $400 floor, and deducting under the ordinary § 162 standard." }
---

The sole proprietorship is the default state of an unincorporated business with one owner, and it is
defined by what it is not. There is no entity, no separate return, no separate taxable year and no
filing date of its own. Every question about a sole proprietorship resolves into a question about its
owner. That sounds simple, and it is the reason the topic generates errors: preparers reach for entity
answers — a March filing date, an entity-level election, an entity-level liability — that do not exist
here.

## The rule

**It is disregarded.** {fig:soleprop.disregarded} A single-member unincorporated business is its owner
for federal tax purposes unless an election changes that, which is the subject of 2.1.1.g.

**It has no filing date of its own.** {fig:soleprop.return_date}

**The income is the owner's, and so is the self-employment tax.**
{fig:soleprop.net_earnings} The tax is imposed on that amount by IRC § 1401, and
{fig:soleprop.se_floor}

**A return is required at a low figure.** {fig:soleprop.se_return_threshold}

**And "business" means what it means everywhere else.**
{fig:soleprop.trade_or_business} With deductions on the ordinary standard:
{fig:soleprop.deduction_standard}

## Current figures

| Item | Rule |
| --- | --- |
| Disregarded status | {fig:soleprop.disregarded} |
| Filing date | {fig:soleprop.return_date} |
| Net earnings from self-employment | {fig:soleprop.net_earnings} |
| Self-employment tax floor | {fig:soleprop.se_floor} |
| Self-employment tax return | {fig:soleprop.se_return_threshold} |
| Trade or business | {fig:soleprop.trade_or_business} |
| Deduction standard | {fig:soleprop.deduction_standard} |
| Self-employment tax rate | {fig:se.rates} |
| Wage base | {fig:se.wage_base} |
| Deduction for half the tax | {fig:se.deduction} |

## How it works in practice

**Start by saying what does not exist.** No entity return, no entity-level tax, no entity-level election
except the one that stops it being a sole proprietorship, and no separate year end. The business adopts
the owner's taxable year because it has none of its own.

**The filing date question is the one clients ask and get wrong.** Partnerships and S corporations file
by the fifteenth day of the third month. A sole proprietorship has no return to file by any date: the
business schedules ride on the owner's individual return and follow the individual deadline.

**Self-employment tax is the real cost of the form.** An owner drawing profit from a sole proprietorship
pays both halves of the social security and Medicare charge on the net earnings, which is the single
largest arithmetic difference between operating this way and operating through an S corporation. That
comparison belongs at 2.1.1.d, but it starts here.

**The statutory figure does two things and they are not the same.** Below it the amount is excluded
from self-employment income (IRC § 1402(b)(2)); at or above it a self-employment tax return is required
(IRC § 6017). {fig:soleprop.se_floor} — so it now catches almost any deliberate business activity.

**Spouses are computed separately.** On a joint return the self-employment tax is not computed on
aggregate earnings — § 6017 requires the sum of the tax on each spouse's separate self-employment
income, which matters where one spouse is over the wage base and the other is not.

**And a sole proprietorship can still have employees.** Disregarded status is about income tax. Employment
tax obligations, an employer identification number and the payroll filings are the owner's
responsibility in their own name, and are covered at 2.1.1.h and 2.1.1.k.

<div class="scenario">
<h3>The March deadline that did not apply</h3>

A client runs a design business as a sole proprietor. Her accountant's checklist, written for the firm's
partnership clients, tells her the business return is due on 15 March. She panics in February about
records she has not gathered.

There is no business return. IRC § 6072(b) sets the fifteenth day of the third month for partnership and
S corporation returns; a sole proprietorship files nothing of its own, and the business results appear
on schedules to her individual return under the ordinary individual deadline. The only thing March
brings her is the first estimated tax instalment date the following month.

</div>

<div class="scenario">
<h3>The $380 that was not self-employment income</h3>

A retired client repairs clocks occasionally and made $380 of net profit from it in the year, with no
other business activity.

His net earnings from self-employment are less than $400, so under IRC § 1402(b)(2) the amount is
excluded from self-employment income altogether and no self-employment tax arises. No § 6017 return is
required either, since that obligation begins at $400. The profit is still gross income for income tax
purposes — the exclusion is from the self-employment charge, not from the return.

</div>

<div class="scenario">
<h3>Two spouses, one joint return, two computations</h3>

A couple file jointly. She has $210,000 of net earnings from a consultancy; he has $16,000 from a small
craft business.

The self-employment tax is not computed on their combined $226,000. Section 6017 requires the sum of the
tax computed on each spouse's separate self-employment income, so her earnings run against the wage base
on their own and his do the same. Aggregating them would move part of his earnings above a base that his
own earnings never reach, and would overstate the tax.

</div>

<div class="scenario">
<h3>The business that was still the owner</h3>

A client forms a single-member limited liability company for his consultancy, obtains an employer
identification number for it, and opens a bank account in its name. He asks which return the company
files.

None. Under Reg. § 301.7701-2(c)(2)(i) a business entity with a single owner that is not a corporation
is disregarded as separate from its owner, so for income tax purposes the company is a sole
proprietorship and its results go on his individual return. State law liability protection and federal
tax classification are different questions, and the answer to one says nothing about the other. Whether
he can change that answer is 2.1.1.g.

</div>

<div class="callout trap">

**Applying the 15 March date.** That is IRC § 6072(b), for partnerships and S corporations. A sole
proprietorship has no return of its own.

**Assuming a single-member LLC files something.** It is disregarded for income tax unless an election is
made; the limited liability is a state law matter.

**Treating the statutory floor as a threshold below which nothing is reported.** It removes the
self-employment charge and the § 6017 return, not the income tax reporting of the profit.

**Aggregating spouses' self-employment income on a joint return.** Section 6017 computes each spouse
separately and adds the results.

**Assuming disregarded means invisible.** A disregarded entity can be an employer, with its own
obligations for employment tax purposes.

**Expecting a different deduction standard.** Section 162(a) applies as it does to any trade or business
— ordinary and necessary, paid or incurred in carrying it on.

**Forgetting the partnership share.** Net earnings from self-employment include the distributive share
of trade or business income from a partnership of which the individual is a member, whether distributed
or not.

</div>

## How this has changed

The classification rules that make a single-owner unincorporated business a sole proprietorship date
from the check-the-box regulations of 1996, which replaced a multi-factor test with an election. Nothing
in Pub. L. 119-21 amended Reg. § 301.7701-2, § 6017 or § 1402(b).

What has changed around the form is the arithmetic that makes people leave it. The qualified business
income deduction, made permanent by the 2025 Act and covered at 1.3.1.h, applies to a sole
proprietorship's income, which removed one historic reason to incorporate. Against that, the
self-employment charge on the whole of the profit remains, and it is the reason the S corporation
comparison at 2.1.1.d is the most common entity conversation in practice.

The floor is the oldest thing on this page. It has stood unindexed since the self-employment tax
was introduced in 1950, and it is now low enough that it exempts essentially nothing — a striking
contrast with the transfer tax thresholds, which have multiplied many times over the same period.

## Exam focus

The reliable question is the filing date, framed as an "all of the following except" list in which the
sole proprietorship is the odd one out. Know that § 6072(b) governs partnerships and S corporations and
that a sole proprietorship has no separate return.

Know the statutory floor and what it does: it excludes the amount from self-employment income under
§ 1402(b)(2) and it sets the § 6017 return requirement. {fig:soleprop.se_floor}

Expect the single-member LLC as a disguised sole proprietorship, and know that disregarded status is the
default rather than an election.

## Check yourself

**1.** When is a calendar-year sole proprietorship's business return due?

*Answer: There is none. A sole proprietorship files no return of its own; the business results are
reported on schedules to the owner's individual return and follow the individual due date. The 15 March
date in IRC § 6072(b) applies to partnerships and S corporations.*

**2.** A taxpayer's only business produced net earnings from self-employment of $360. Is self-employment
tax due?

*Answer: No. IRC § 1402(b)(2) excludes net earnings from self-employment of less than the statutory
floor from self-employment income, and the § 6017 return requirement begins at the same figure. Both
stand at $400.*

**3.** A single-member LLC has an employer identification number and its own bank account. Which income
tax return does it file?

*Answer: None of its own. Under Reg. § 301.7701-2(c)(2)(i) a business entity with a single owner that is
not a corporation is disregarded as an entity separate from its owner, so its results are reported on
the owner's return.*

**4.** On a joint return, how is self-employment tax computed where both spouses have self-employment
income?

*Answer: Separately and then added. IRC § 6017 provides that the tax is not computed on aggregate income
but is the sum of the taxes computed on the separate self-employment income of each spouse.*

**5.** Does a partner's distributive share enter net earnings from self-employment?

*Answer: Yes. IRC § 1402(a) includes the distributive share, whether or not distributed, of income or
loss described in § 702(a)(8) from any trade or business carried on by a partnership of which the
individual is a member.*
