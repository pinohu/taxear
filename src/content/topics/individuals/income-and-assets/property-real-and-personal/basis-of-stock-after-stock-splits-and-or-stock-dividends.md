---
title: "Basis of stock after stock splits and stock dividends"
code: "1.2.3.d"
part: 1
domain: "Income and Assets"
section: "Property, real and personal"
description: "Total basis never changes on a split — it is spread thinner. The date that governs the allocation is the distribution date, not the record date, and lots default to FIFO."
status: published
taxYear: 2026
lastReviewed: "2026-08-19"
reviewedBy: "Draft for N. O. review"
authorities:
  - { type: IRC, ref: "§ 305", title: "Distributions of stock and stock rights", url: "https://www.law.cornell.edu/uscode/text/26/305" }
  - { type: IRC, ref: "§ 307", title: "Basis of stock and stock rights acquired in distributions", url: "https://www.law.cornell.edu/uscode/text/26/307" }
  - { type: IRC, ref: "§ 1012", title: "Basis of property — cost", url: "https://www.law.cornell.edu/uscode/text/26/1012" }
  - { type: IRC, ref: "§ 1223", title: "Holding period of property", url: "https://www.law.cornell.edu/uscode/text/26/1223" }
  - { type: IRC, ref: "§ 6045", title: "Returns of brokers", url: "https://www.law.cornell.edu/uscode/text/26/6045" }
  - { type: Reg, ref: "§ 1.307-1", title: "General rule", url: "https://www.law.cornell.edu/cfr/text/26/1.307-1" }
  - { type: Reg, ref: "§ 1.1012-1", title: "Basis of property", url: "https://www.law.cornell.edu/cfr/text/26/1.1012-1" }
forms: []
related: ["1.2.3.c", "1.2.3.b", "1.2.1.c", "1.2.3.a", "1.2.3.h"]
changelog:
  - { date: "2026-08-19", summary: "Initial draft. Sets out the IRC § 305(a) exclusion and its § 305(b) exceptions, the § 307(a) allocation by fair market value on the distribution date under Treas. Reg. § 1.307-1(a), the § 307(b) 15 percent rule for rights, the § 1223(4) tacked holding period, and the Treas. Reg. § 1.1012-1(c) default to first-in first-out with its settlement-date identification deadline." }
  - { date: "2026-08-25", summary: "Added a plain-language summary, glossary marks, and typed scenarios." }
---

<div class="plain-terms">
When a company splits its stock or pays a stock dividend, shareholders end up with more shares, but
nothing new has actually been created. This page explains what happens to your basis, the amount you are
treated as having paid, when that happens. It affects anyone who owns stock in a company that later
splits its shares or distributes extra shares instead of cash. Your total basis stays exactly the same;
it is simply spread across more shares, so each share is worth less on paper. The tricky parts are
figuring out which date and which values to use for the split, and which shares are treated as sold first
when you later sell only part of your position.
</div>

A stock split creates nothing and destroys nothing. Total basis is unchanged; it is divided over more
shares. What actually causes trouble is everything around that simple fact — whether the distribution was
excluded from income at all, which date the allocation uses, and which lot a later sale comes out of when
the client has been buying the same stock for fifteen years.

## The rule

**A stock distribution is normally not income.** Gross income does not include the amount of any
distribution of the stock of a corporation made by that corporation to its shareholders with respect to
its stock (IRC § 305(a)).

**Five exceptions turn it back into a property distribution.** Section 305(a) does not apply, and the
distribution is treated as a § 301 distribution of property, where it is payable in stock or in property
at any shareholder's election; where it is disproportionate, some shareholders receiving property and
others an increased proportionate interest; where some common shareholders receive preferred and others
common; where it is a distribution on preferred stock; or where convertible preferred is distributed (IRC
§ 305(b)(1)–(5)). The first exception is the one that catches ordinary facts: a dividend reinvestment
election is a shareholder election between stock and money.

**Where § 305(a) applies, basis is allocated, not created.** The adjusted basis of the old stock is
allocated between the old stock and the new stock or rights (IRC § 307(a)). The regulation supplies the
method: **in proportion to the fair market values of each on the date of distribution** — and states
expressly that the date of distribution is the date the stock or rights are distributed to the
shareholder, **not the record date** (Treas. Reg. § 1.307-1(a)).

**Rights below a threshold get a zero basis unless the shareholder elects otherwise.** Where a corporation
distributes rights to acquire its stock in a § 305(a) distribution and the fair market value of those
rights is less than 15 percent of the fair market value of the old stock at that time, § 307(a) does not
apply and the basis of the rights is zero — unless the taxpayer elects to allocate (IRC § 307(b)(1), (2)).
The regulation adds that the general allocation rule applies to rights **only if they are exercised or
sold** (Reg. § 1.307-1(a), closing sentence).

**The holding period tacks.** In determining the period for which stock or rights received on a
distribution have been held, where basis is determined under § 307, there is included the period the
shareholder held the stock in the distributing corporation before the distribution (IRC § 1223(4)). New
shares from a split are therefore as old as the shares that produced them.

**When shares are sold, the lot must be identified or the earliest one is used.** Where a taxpayer sells
shares purchased on different dates or at different prices and does not adequately identify the lot, the
shares sold are charged against **the earliest lot acquired**, which fixes both the basis and the holding
period (Treas. Reg. § 1.1012-1(c)(1)(i)).

**Identification has a deadline.** An identification is adequate only if made no later than the earlier of
the settlement date or the settlement time required by Rule 15c6-1 (Treas. Reg. § 1.1012-1(c)(8)). A
standing order or instruction for specific identification is treated as made at the time of sale. An
instruction given when the return is prepared is far too late.

**Average basis is available only in two situations.** A taxpayer may use the average basis method for
identical shares where they are shares in a regulated investment company, or shares acquired after
31 December 2010 in connection with a dividend reinvestment plan, and are left with a custodian or agent
in an account maintained for their acquisition or disposition (Treas. Reg. § 1.1012-1(e)(1)(i)).

**None of these choices is a method of accounting.** A method of determining the basis of stock,
including lot identification and the average basis method, is not a method of accounting, so changing it
is not a change to which §§ 446 and 481 apply (Treas. Reg. § 1.1012-1(c)(10)).

**The broker reports basis, but not always correctly.** A broker reporting gross proceeds on a covered
security must also report the customer's adjusted basis and whether the gain or loss is long or short term
within the meaning of § 1222 (IRC § 6045(g)(1), (2)(A)).

## Current figures

| Item | 2026 |
| --- | --- |
| Stock distributions | {fig:stockbasis.305_exclusion} |
| The five exceptions | {fig:stockbasis.305b_exceptions} |
| Allocation | {fig:stockbasis.allocation} |
| Rights below the threshold | {fig:stockbasis.rights_de_minimis} |
| Holding period | {fig:stockbasis.holding_period} |
| Default identification | {fig:stockbasis.default_identification} |
| Identification deadline | {fig:stockbasis.identification_timing} |
| Average basis | {fig:stockbasis.average_basis} |
| Not a method of accounting | {fig:stockbasis.not_accounting_method} |
| Broker reporting | {fig:stockbasis.broker_reporting} |

## How it works in practice

For a straight split — two for one, three for two — the arithmetic is simply total basis divided by the
new share count, and the holding period of every share runs from the original purchase under § 1223(4).
Nothing is reported in the year of the split.

For a stock dividend of a different class, do the allocation properly. Take the fair market value of the
old stock and of the new on the distribution date, form the ratio, and split the old basis between them.
Using the record date, or using the value on the date the dividend was declared, produces a different and
wrong answer, and the regulation says so in terms.

For rights, note the order of the questions. First, is this a § 305(a) distribution at all. Second, are
the rights worth less than 15 percent of the old stock — if so the default basis is zero and the
allocation is elective. Third, were the rights exercised or sold; if they simply lapsed, the allocation
rule never engages.

For a long-held position, the real work is records. The default is first-in first-out, and the broker's
Form 1099-B will reflect whatever method the broker was told — which is not necessarily what the taxpayer
intended and not necessarily right for shares acquired before basis reporting began. Reconcile before
filing, and if the client wants specific identification, get the standing instruction in place, because
the deadline in Reg. § 1.1012-1(c)(8) runs to settlement and not to filing.

<div class="scenario" data-type="baseline">
<h3>Scenario 1 — the split that changes nothing</h3>

Rafi bought 200 shares in 2019 for 9,000 dollars. In 2026 the company declares a two-for-one split and he
receives 200 more shares.

His total {gloss:basis} is still 9,000 dollars, now spread over 400 shares at 22.50 dollars each. Under
IRC § 305(a) nothing is included in income, and under § 1223(4) all 400 shares carry a {gloss:holding-period}
running from 2019, so a sale of any of them produces long-term gain. If he sells 150 shares in 2027
without identifying a lot, Treas. Reg. § 1.1012-1(c)(1)(i) charges them against the earliest lot — which
here is the same basis per share either way, one of the few cases where the default costs nothing.
</div>

<div class="scenario" data-type="timing">
<h3>Scenario 2 — the preferred dividend and the two dates</h3>

Sasha holds common stock with a basis of 60,000 dollars. The company declares a preferred stock dividend
with a record date of 10 March 2026; the preferred is distributed on 2 April 2026. On the record date the
common is worth 180,000 dollars and the preferred 20,000; by 2 April the common is worth 150,000 and the
preferred 50,000.

The allocation uses **2 April**, the distribution date, because Treas. Reg. § 1.307-1(a) says so
expressly. {gloss:fair-market-value} figures are 150,000 and 50,000 dollars on that date, so three
quarters of the 60,000-dollar basis — 45,000 dollars — stays with the common and 15,000 dollars attaches
to the preferred. Using the record date instead would have put 54,000 dollars on the common and 6,000 on
the preferred — the same shares, a different date, a different answer, and every later sale of either
block would have been wrong.
</div>

<div class="scenario" data-type="boundary">
<h3>Scenario 3 — rights right at the line</h3>

A company distributes stock rights in a § 305(a) transaction. Nadia's rights are worth exactly 15 percent
of her old stock's value; her sister, holding the same stock in a different account, receives rights
worth 14.9 percent.

The sister's rights fall below the threshold in IRC § 307(b)(1), so their basis defaults to zero unless
she elects to allocate under § 307(b)(2). Nadia's rights, at exactly 15 percent, are not "less than" the
threshold, so § 307(b)(1) does not switch off the general rule at all — her rights get an allocated basis
under § 307(a) with no election needed. A tenth of a percentage point moves her from an opt-in allocation
to an automatic one.
</div>

<div class="scenario" data-type="fails">
<h3>Scenario 4 — the reinvestment election that stayed taxable</h3>

Oren's dividend reinvestment plan lets him choose, each quarter, between a cash dividend and an equal
value of additional shares. He chooses shares every quarter this year.

The § 305(a) exclusion does not apply at all. IRC § 305(b)(1) turns off the exclusion wherever the
distribution is payable in stock or in property at any shareholder's election — and a plan letting Oren
pick stock or cash is exactly that. The shares he receives are treated as an ordinary § 301 property
distribution, valued at fair market value and taxable as a dividend, not as a basis-allocation question
under § 307 at all.
</div>

<div class="scenario" data-type="procedural">
<h3>Scenario 5 — the identification that came too late</h3>

Toma has bought the same stock every year since 2016. In November 2026 she calls her broker and sells 500
shares, saying nothing about which lot. In April 2027 her preparer wants to use the highest-basis lot to
reduce the gain.

It is too late. Treas. Reg. § 1.1012-1(c)(8) requires an adequate identification no later than the earlier
of the settlement date or the Rule 15c6-1 settlement time, so the identification window closed days after
the sale. Under § 1.1012-1(c)(1)(i) the shares are charged against her 2016 lot, with its low basis and
long holding period. A standing instruction for specific identification, in place before the sale, would
have been treated as made at the time of sale.
</div>

<div class="callout trap">

**The date of distribution is not the record date.** Treas. Reg. § 1.307-1(a) closes this off in its own
words, and the two dates are usually weeks apart with different prices.

**A stock dividend is not always tax-free.** The five exceptions in IRC § 305(b) turn it into a § 301
property distribution, and the election-between-stock-and-money exception is the one ordinary facts hit.

**Rights that lapse never engage the allocation.** The rule applies to rights only if they are exercised
or sold.

**Changing the identification method is not a change of accounting method**, so there is nothing to
request and no § 481 adjustment — but the identification itself still has a settlement-date deadline.
</div>

## How this has changed

**Broker basis reporting is the single largest practical change and it created a boundary.** Section
6045(g) requires a broker to report adjusted basis and the long or short character on a **covered
security**. Shares acquired before the relevant phase-in dates are not covered, so a taxpayer with a
decades-old position will receive a Form 1099-B with basis blank or marked as not reported, and the return
has to supply it. The statute never displaced the taxpayer's own obligation to determine basis; it added a
reporting layer on top of it.

**Average basis was extended beyond mutual funds.** Treas. Reg. § 1.1012-1(e)(1)(i) now reaches shares
acquired after 31 December 2010 through a dividend reinvestment plan, not only regulated investment
company shares. Material written before that describes average basis as a mutual fund method only.

**The identification deadline was tightened to settlement.** Paragraph (c)(8) fixes the time at the
earlier of the settlement date or the Rule 15c6-1 time, and recognises a standing instruction. Older
practice of identifying lots on the return is no longer available, and the change matters more now that
settlement cycles have shortened.

**Section 305 itself has been stable, and its structure is often misread.** Subsection (a) is the
exclusion and subsection (b) is a list of five circumstances in which the exclusion is switched off
entirely — not a list of partial inclusions. Where an exception applies, the distribution is a § 301
distribution of property in full, valued as such.

## Exam focus

Expect a **split** with a question about total basis, per-share basis, or holding period. Total is
unchanged, per-share is divided, and the holding period tacks under § 1223(4).

Expect a **stock dividend of a different class** with two dates in the facts, one of them the record date.
Use the distribution date.

Expect **rights** with a value close to the 15 percent line, testing whether you know the default is a
zero basis with an election to allocate rather than the other way round.

Expect a **lot identification** question where the taxpayer wants a different lot after the fact. The
default is first-in first-out and the deadline has passed.

## Check yourself

**1.** A taxpayer holds 300 shares with a total basis of 12,000 dollars and receives 300 more in a
two-for-one split. What is the basis per share and the holding period of the new shares?

*Answer: 20 dollars per share across 600 shares — total basis is unchanged under IRC § 307(a) — and the
new shares tack the holding period of the old under § 1223(4).*

**2.** Rights are distributed in a § 305(a) distribution and are worth 9 percent of the value of the old
stock. What is their basis?

*Answer: Zero, under IRC § 307(b)(1), because their value is less than 15 percent of the old stock —
unless the taxpayer elects under § 307(b)(2) to allocate basis under § 307(a).*

**3.** A shareholder may elect to take a distribution in stock or in cash and takes stock. Is it excluded
from income?

*Answer: No. IRC § 305(b)(1) removes the § 305(a) exclusion where the distribution is payable in stock or
property at any shareholder's election, and the distribution is treated as a § 301 distribution of
property.*

**4.** Shares from five different purchase lots are sold with no identification given. Which lot is used?

*Answer: The earliest lot acquired, under Treas. Reg. § 1.1012-1(c)(1)(i), which determines both the basis
and the holding period of the shares sold.*

**5.** A client asks in March to designate which lot was sold the previous November. Can it be done?

*Answer: No. Treas. Reg. § 1.1012-1(c)(8) requires the identification no later than the earlier of the
settlement date or the Rule 15c6-1 settlement time. A standing instruction in place before the sale would
have qualified; a later designation does not.*

**6. Sasha holds common stock with a basis of 40,000 dollars and receives a preferred stock dividend excluded under § 305(a). On the record date the common is worth 130,000 dollars and the preferred 30,000; on the distribution date the common is worth 120,000 and the preferred 40,000. What basis attaches to the preferred?**
(A) 7,500 dollars (B) 10,000 dollars (C) 40,000 dollars (D) Zero
*Answer: B. IRC § 307(a) allocates the old basis between old and new stock, and Treas. Reg. § 1.307-1(a) fixes the allocation in proportion to fair market values on the date of distribution, not the record date, so one quarter of 40,000 dollars goes to the preferred.*

**7. Rights distributed in a § 305(a) transaction are worth 20 percent of the old stock. The shareholder neither exercises nor sells them, and they lapse. What happens to the basis of the old stock?**
(A) Part is allocated to the rights under § 307(a) and lost as a capital loss on the lapse (B) None is allocated, because the allocation rule applies to rights only if they are exercised or sold (C) The rights take a zero basis under § 307(b)(1) and the old stock is unchanged (D) Part is allocated to the rights and carried forward to future distributions
*Answer: B. Treas. Reg. § 1.307-1(a), closing sentence: the general allocation rule applies to rights only if they are exercised or sold, so rights that lapse never engage it and the old stock keeps its full basis; the 15 percent rule in § 307(b)(1) is not reached because the rights are above it.*

**8. A taxpayer has bought shares of one operating company directly through her broker over several years, outside any dividend reinvestment plan. May she use the average basis method when she sells some of them?**
(A) Yes, average basis is available for any identical shares (B) No, average basis is confined to regulated investment company shares and post-2010 dividend reinvestment plan shares left with a custodian (C) Yes, if she elects it on the return for the year of sale (D) No, because the average basis method was withdrawn when broker basis reporting began
*Answer: B. Treas. Reg. § 1.1012-1(e)(1)(i) allows average basis only for shares in a regulated investment company, or shares acquired after 31 December 2010 in connection with a dividend reinvestment plan, held with a custodian or agent; otherwise the lot rules of § 1.1012-1(c) apply.*
