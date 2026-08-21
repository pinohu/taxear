---
title: "Interest income"
code: "1.2.1.b"
part: 1
domain: "Income and Assets"
section: "Income"
description: "Interest is gross income unless a section takes it out, and the sections that do are narrower than clients expect. Timing and character both need deciding separately."
status: published
taxYear: 2026
lastReviewed: "2026-08-19"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 61", title: "Gross income defined", url: "https://www.law.cornell.edu/uscode/text/26/61" }
  - { type: IRC, ref: "§ 57", title: "Items of tax preference", url: "https://www.law.cornell.edu/uscode/text/26/57" }
  - { type: IRC, ref: "§ 103", title: "Interest on State and local bonds", url: "https://www.law.cornell.edu/uscode/text/26/103" }
  - { type: IRC, ref: "§ 135", title: "Income from United States savings bonds used to pay higher education tuition and fees", url: "https://www.law.cornell.edu/uscode/text/26/135" }
  - { type: IRC, ref: "§ 265", title: "Expenses and interest relating to tax-exempt income", url: "https://www.law.cornell.edu/uscode/text/26/265" }
  - { type: IRC, ref: "§ 454", title: "Obligations issued at discount", url: "https://www.law.cornell.edu/uscode/text/26/454" }
  - { type: IRC, ref: "§ 1272", title: "Current inclusion in income of original issue discount", url: "https://www.law.cornell.edu/uscode/text/26/1272" }
  - { type: IRC, ref: "§ 6049", title: "Returns regarding payments of interest", url: "https://www.law.cornell.edu/uscode/text/26/6049" }
  - { type: IRC, ref: "§ 7872", title: "Treatment of loans with below-market interest rates", url: "https://www.law.cornell.edu/uscode/text/26/7872" }
  - { type: RevProc, ref: "2025-32", title: "Inflation-adjusted items for 2026", url: "https://www.irs.gov/pub/irs-drop/rp-25-32.pdf" }
forms: []
related: ["1.2.1.a", "1.1.1.f", "1.2.1.i", "1.1.1.g", "1.2.1.c", "1.2.1.d", "1.2.1.j", "1.2.1.k", "1.2.1.m", "1.2.2.j", "1.2.3.k"]
changelog:
  - { date: "2026-08-19", summary: "Initial draft. Sets out the IRC § 103 exclusion and its three exceptions, the IRC § 135 education savings bond exclusion and its separate-return bar, the IRC § 454 election on discount obligations, and the IRC § 7872 below-market loan rules." }
---

Interest is listed in the definition of gross income (IRC § 61(a)(4)), so the interesting questions are
never whether a payment is interest but whether a section takes it back out, and when it has to be
counted. Both answers are narrower than clients expect. "Tax-free" usually turns out to mean
"tax-exempt for regular tax purposes, still reported, and possibly a preference item"; and interest is
frequently taxable in a year when nothing was received.

## The rule

**The exclusion and its three exceptions.** Gross income does not include interest on any State or
local bond (IRC § 103(a)). Subsection (b) withdraws that for a **private activity bond which is not a
qualified bond** within § 141, an **arbitrage bond** within § 148, and any bond **not in registered
form** as required by § 149. So municipal interest is excluded by default and includible by exception,
and the exception is common enough that a bond fund's own statement is the only reliable place to
settle it.

**Excluded is not invisible, and not always free.** Interest on specified private activity bonds,
reduced by deductions that would have been allowable had it been includible, is an item of tax
preference for alternative minimum tax purposes (IRC § 57(a)(5)(A)), and an exempt-interest dividend
from a regulated investment company is treated as such interest to the extent of its proportionate
share (IRC § 57(a)(5)(B)). Separately, no deduction is allowed for interest on indebtedness incurred or
continued to purchase or carry obligations the interest on which is wholly exempt (IRC § 265(a)(2)).

**United States savings bonds have two rules, one on timing and one on exclusion.** A cash-basis holder
of a non-interest-bearing obligation issued at a discount and redeemable for increasing fixed amounts
may **elect** to treat the annual increase in redemption price as income received in that year (IRC
§ 454(a)); the election, once made, binds for that obligation and for all others of the same kind the
taxpayer holds or later acquires. Separately, no amount is includible by reason of redeeming a
qualified United States savings bond in a year in which the individual pays qualified higher education
expenses (IRC § 135(a)) — subject to a proportionate limit where the proceeds exceed those expenses
(IRC § 135(b)(1)), an income phase-out (IRC § 135(b)(2)), a reduction for scholarships, veterans
benefits and qualified tuition program payments (IRC § 135(d)(1)), and an absolute bar where a married
individual does not file jointly (IRC § 135(d)(3)).

**Original issue discount accrues whether or not anything is paid.** The holder of a debt instrument
having original issue discount includes the sum of the **daily portions** for each day held (IRC
§ 1272(a)(1)), with exceptions including tax-exempt obligations (IRC § 1272(a)(2)(A)). This is the
clearest case of interest income arising in a year with no cash.

**Below-market loans generate imputed interest.** Where individuals lend to each other below the
applicable federal rate, § 7872 recharacterises the foregone interest — but two thresholds soften it.
The section does not apply to any day on which aggregate gift loans directly between individuals do not
exceed a de minimis figure (IRC § 7872(c)(2)(A)), unless the loan is directly attributable to purchasing
or carrying income-producing assets (IRC § 7872(c)(2)(B)); and for gift loans not exceeding a larger
figure, the amount treated as retransferred to the lender cannot exceed the borrower's **net investment
income** (IRC § 7872(d)(1)(A)). Neither relief applies where a principal purpose of the interest
arrangement is the avoidance of federal tax (IRC §§ 7872(c)(3)(B), (d)(1)(B)).

**Reporting starts low.** A person paying interest aggregating a small figure or more to any other
person in a calendar year must file an information return, and so must a **nominee** who receives
interest and passes it on (IRC § 6049(a)(1), (2)).

## Current figures

| Item | 2026 |
| --- | --- |
| Education savings bond exclusion phase-out | {fig:savingsbond.exclusion_phaseout} |
| Qualified United States savings bond | {fig:savingsbond.qualification} |
| Below-market loan de minimis | {fig:belowmarket.de_minimis} |
| Gift loan net investment income limit | {fig:belowmarket.net_investment_cap} |
| Interest reporting threshold | {fig:interest.reporting_floor} |

## How it works in practice

Take the statements as a starting point and then ask two questions of each line: is any of this excluded,
and is any of it in the wrong year.

On exclusion, the recurring work is with municipal bond funds. The year-end statement breaks the
distribution into a tax-exempt portion, a portion attributable to specified private activity bonds, and
sometimes a taxable portion — and all three matter, because the exempt part still has to be reported,
the private activity part is an alternative minimum tax preference, and the taxable part is ordinary
income. A client who says "it's all municipal" has usually read only the first line.

On timing, three situations produce income with no cash. Original issue discount accrues daily.
Accrued interest paid to a seller when a bond is bought between coupon dates is not the buyer's income
even though the next coupon reports in full, so it has to be subtracted. And a § 454 election, once
made, keeps reporting savings bond increases every year thereafter — worth knowing when a client
inherits the consequences of an election someone made decades ago.

Two intake questions find things that never generate a statement. "Did you lend money to a family
member, and on what terms" reaches § 7872, where a genuinely interest-free family loan can still
produce imputed interest to the lender. And "did anything arrive in your name that belongs to someone
else" reaches nominee interest, where the payee of record must both report the gross and back out the
part belonging to the true owner.

<div class="scenario">
<h3>The tax-free fund and the minimum tax</h3>

Yusuf holds a national municipal bond fund and receives $9,200 of exempt-interest dividends. He has
substantial income and is in alternative minimum tax territory this year.

Most of the distribution is excluded from gross income under IRC § 103(a) and reported as tax-exempt
interest. But the fund's statement shows $1,850 attributable to specified private activity bonds, and
IRC § 57(a)(5)(B) treats an exempt-interest dividend as interest on such a bond to the extent of its
proportionate share. That $1,850 is an item of tax preference.

Two consequences follow. His alternative minimum taxable income is higher than his regular taxable
income by that amount, and the interest he pays on a margin loan carried against the fund is
non-deductible under IRC § 265(a)(2) — a disallowance that applies whether or not any minimum tax is
ultimately due.
</div>

<div class="scenario">
<h3>The bond bought between coupons</h3>

Nadine bought a corporate bond in September, paying the seller $470 of interest that had accrued since
the last coupon. In November the bond paid a $940 coupon, and her broker's statement reports the whole
$940 as interest paid to her.

She reports $470. The accrued interest she paid the seller was a return of the seller's income, not
hers, and the statement cannot know that — it reports what the issuer paid to whoever held the bond on
the record date. She reports the gross figure and subtracts the accrued interest purchased, so that the
return reconciles to the statement while taxing the right amount.

The same discipline applies to a bond bought at a premium, where an election to amortise the premium
reduces the interest reported year by year, and again the statement will not have done it for her.
</div>

<div class="scenario">
<h3>The interest-free loan to a daughter</h3>

Priya lent her daughter $85,000 interest-free to help with a house deposit. Her daughter has $600 of
dividend income and nothing else from investments. Priya assumes an interest-free family loan has no
tax consequences.

It has some, but less than the headline suggests. The loan is far above the de minimis figure in IRC
§ 7872(c)(2)(A), so the section applies and foregone interest is imputed. But because the loan does not
exceed the larger gift loan threshold, IRC § 7872(d)(1)(A) caps the amount treated as retransferred to
Priya at her daughter's **net investment income** for the year — here $600, not the several thousand
dollars the applicable federal rate would otherwise produce.

Change one fact and the relief disappears. Had the loan been made so the daughter could buy
income-producing assets, IRC § 7872(c)(2)(B) would disapply even the de minimis exception; and had tax
avoidance been a principal purpose of the terms, § 7872(d)(1)(B) would remove the net investment income
cap entirely.
</div>

<div class="callout trap">
<p class="callout-label">Traps</p>

- **Not all municipal interest is excluded.** IRC § 103(b) withdraws the exclusion for non-qualified
  private activity bonds, arbitrage bonds, and bonds not in registered form.
- **Excluded interest is still reported**, because other computations reference it — the § 86 social
  security formula among them.
- **Private activity bond interest is an alternative minimum tax preference** (IRC § 57(a)(5)), and that
  reaches through a fund as an exempt-interest dividend.
- **Interest to carry tax-exempt obligations is not deductible** (IRC § 265(a)(2)), independently of any
  minimum tax.
- **Original issue discount accrues without payment** (IRC § 1272(a)(1)) — a cash-basis taxpayer still
  reports it.
- **Accrued interest paid at purchase is not the buyer's income**, though the statement reports the full
  coupon.
- **The § 454 election is sticky.** It binds for that obligation and every other of the same kind held
  or later acquired.
- **The education savings bond exclusion has an owner-age test at issuance**, not at redemption (IRC
  § 135(c)(1)(B)) — a bond bought in a child's name never qualifies.
- **A separate return bars the § 135 exclusion outright** (IRC § 135(d)(3)).
- **§ 135 expenses are reduced by scholarships and qualified tuition program payments** before the
  limits apply (IRC § 135(d)(1)).
- **An interest-free family loan is not tax-free.** The § 7872 reliefs are thresholds, not exemptions,
  and both fall away where tax avoidance is a principal purpose.

</div>

## How this has changed

The architecture of this topic is old and stable; the movement is in the figures, and they move
unevenly. The § 135 phase-out is adjusted annually under § 135(b)(2)(B) and now stands at roughly two and a half
times the unindexed figures still printed in § 135(b)(2)(A) — a taxpayer or a question working from the
statutory text alone would deny the exclusion to almost everyone who now qualifies. The § 7872 thresholds, by contrast, are **statutory and
unindexed**: the de minimis and gift loan figures have stood since the section was enacted and are the
same today, so their real value has eroded steadily.

Two consequences of that unevenness are worth carrying. First, the § 7872 rules now catch loans that
would have been unremarkable when the thresholds were set, so ordinary family lending reaches them more
often than it used to. Second, any source that gives the § 135 income limits without a year attached is
wrong for every year but one, while a source giving the § 7872 figures without a year is right.

The one structural point that has changed in living memory is the alternative minimum tax's reach.
Because the exemption amounts and their phase-out thresholds have moved substantially, the practical
significance of § 57(a)(5) rises and falls with them even though the preference itself is untouched —
so whether private activity bond interest matters for a given client is an annual question, not a
settled one.

## Exam focus

Know § 103(a) with its three exceptions in § 103(b), and be ready to say that the exclusion is the
default and the taxability the exception. Expect the private activity bond to appear as either an
inclusion or a preference item.

Know that original issue discount accrues to a cash-basis holder, and that the § 454 election is
available, elective, and binding once made.

For § 135, the reliably examinable points are the age test at issuance, the separate-return bar, and
that expenses are reduced by scholarships and § 529 payments before the proportionate and income limits
are applied.

For § 7872, know the two thresholds and what each does — one disapplies the section, the other caps the
imputed amount at net investment income — and know that both fall away for tax avoidance and that the de
minimis exception fails for loans used to acquire income-producing assets.

## Check yourself

**1.** A client's municipal bond fund statement shows $8,000 of exempt-interest dividends, of which
$1,200 is attributable to specified private activity bonds. What is reported?

*Answer: the whole $8,000 as tax-exempt interest, none of it in gross income under IRC § 103(a), and
$1,200 as an item of tax preference for alternative minimum tax purposes. IRC § 57(a)(5)(B) treats an
exempt-interest dividend as interest on a specified private activity bond to the extent of its
proportionate share of such interest received by the company paying it.*

**2.** Grandparents bought Series EE bonds in their granddaughter's name when she was born. She redeems
them at 22 to pay tuition. Does IRC § 135 exclude the interest?

*Answer: no. IRC § 135(c)(1)(B) requires the bond to have been issued to an individual who had attained
age 24 **before the date of issuance**. A bond issued in a newborn's name can never satisfy that,
whatever the proceeds are later spent on. Bonds registered to a parent aged over 24 at issue could have
qualified.*

**3.** A cash-basis taxpayer holds a corporate bond with original issue discount and received no cash
from it this year. Is anything includible?

*Answer: yes. IRC § 1272(a)(1) includes in the holder's gross income the sum of the daily portions of
the original issue discount for each day held during the taxable year, regardless of the method of
accounting and regardless of whether anything was paid. The exceptions in § 1272(a)(2) — tax-exempt
obligations among them — do not reach an ordinary corporate bond.*

**4.** A parent makes an $8,000 interest-free loan to a child, who uses it to buy a car. Does IRC
§ 7872 apply?

*Answer: no. IRC § 7872(c)(2)(A) provides that the section does not apply to any day on which the
aggregate outstanding amount of gift loans directly between the individuals does not exceed the de
minimis figure, and $8,000 is below it. Had the child used the loan to buy income-producing assets, IRC
§ 7872(c)(2)(B) would disapply the exception and the section would operate.*
