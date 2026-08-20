---
title: "Other taxes"
code: "1.4.1.l"
part: 1
domain: "Taxation"
section: "Taxation"
description: "The catch-all line on the return. Several of these are recaptures of benefits already taken, and one of them is a section still in the Code imposing nothing."
status: review
taxYear: 2026
lastReviewed: "2026-08-19"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 36", title: "First-time homebuyer credit", url: "https://www.law.cornell.edu/uscode/text/26/36" }
  - { type: IRC, ref: "§ 965", title: "Treatment of deferred foreign income upon transition to participation exemption system", url: "https://www.law.cornell.edu/uscode/text/26/965" }
  - { type: IRC, ref: "§ 4973", title: "Tax on excess contributions to certain tax-favored accounts and annuities", url: "https://www.law.cornell.edu/uscode/text/26/4973" }
  - { type: IRC, ref: "§ 4974", title: "Excise tax on certain accumulations in qualified retirement plans", url: "https://www.law.cornell.edu/uscode/text/26/4974" }
  - { type: IRC, ref: "§ 72", title: "Annuities — additional tax on early distributions", url: "https://www.law.cornell.edu/uscode/text/26/72" }
  - { type: IRC, ref: "§ 5000A", title: "Requirement to maintain minimum essential coverage", url: "https://www.law.cornell.edu/uscode/text/26/5000A" }
forms: []
related: ["1.4.1.k", "1.2.3.f", "1.2.2.h", "1.4.1.i"]
changelog:
  - { date: "2026-08-19", summary: "Initial draft. Sets out the IRC § 36(f) first-time homebuyer credit recapture with its acceleration, gain cap and three exceptions, the § 965(h) instalment election, the § 4973 and § 4974 excise taxes, the § 72(t) additional tax, and the state of § 5000A after the shared responsibility payment was zeroed." }
---

This is the line where things that are not income tax end up. Most of them share a shape: a benefit was
taken in an earlier year on a condition, the condition failed, and the benefit is being clawed back.
Knowing that shape makes the individual provisions easier to keep straight than learning them as a list.

## The rule

**First-time homebuyer credit — the annual repayment.** {fig:other_taxes.fthb_recapture} This is the
version that still appears on returns: the 2008 credit was structured as an interest-free loan repaid
over fifteen years, and taxpayers who bought in that window are in the closing years of it.

**And the acceleration.** {fig:other_taxes.fthb_acceleration} The gain cap is the part most often
missed: a taxpayer who sells at a loss to an unrelated buyer repays nothing further.

**Three exceptions.** {fig:other_taxes.fthb_exceptions}

**The § 965 transition tax.** A one-time inclusion enacted in 2017 on the accumulated post-1986 deferred
foreign income of specified foreign corporations. What survives on individual returns is the payment
schedule: {fig:other_taxes.transition_tax} An individual who made the election is still paying
instalments, and the amount due each year is a fixed percentage of a liability determined years ago.

**Excess contributions.** {fig:other_taxes.excess_contributions} The tax repeats every year the excess
is left in the account, which is what turns a modest over-contribution into a real cost if it is not
withdrawn.

**Excess accumulations.** {fig:other_taxes.excess_accumulations} The rate is 25 percent, reduced where
the shortfall is corrected within the correction window — the figure of 50 percent that appears in older
material is no longer the law.

**Early distributions.** {fig:other_taxes.early_distribution}

**The shared responsibility payment.** {fig:other_taxes.shared_responsibility} Section 5000A still
imposes the requirement to maintain minimum essential coverage and still describes a penalty in
elaborate detail. Reading the section without reaching § 5000A(c)(2)(B)(iii) and (c)(3)(A) will produce
a confident and entirely wrong answer.

**Others that reach the same line.** Recapture of an education credit where a refund of qualified
expenses is received, the additional tax on a distribution from a health savings account not used for
qualified medical expenses, the additional tax on an ABLE or Coverdell distribution, and the § 1291
interest charge on an excess distribution from a passive foreign investment company.

## Current figures

| Item | Amount |
| --- | --- |
| Homebuyer credit repayment | {fig:other_taxes.fthb_recapture} |
| Acceleration | {fig:other_taxes.fthb_acceleration} |
| Exceptions | {fig:other_taxes.fthb_exceptions} |
| § 965 instalments | {fig:other_taxes.transition_tax} |
| Excess contributions | {fig:other_taxes.excess_contributions} |
| Excess accumulations | {fig:other_taxes.excess_accumulations} |
| Early distributions | {fig:other_taxes.early_distribution} |
| Shared responsibility | {fig:other_taxes.shared_responsibility} |

## How it works in practice

**Look at the prior year's return before anything else.** Most of these are continuing obligations
rather than events of the current year — a homebuyer repayment instalment, a § 965 instalment, a
recurring excess contribution tax. They do not announce themselves in the current year's documents, and
the commonest failure is simply omitting one because nothing in the mail mentioned it.

**Then ask what changed about the property or the account.** A residence sold, a home that stopped being
the principal residence, an excess contribution not withdrawn, a required minimum distribution missed —
each of these turns a dormant provision into a current liability.

**Then check whether an exception applies before computing anything.** The homebuyer provisions in
particular have three, and the gain cap can reduce an accelerated repayment to nothing.

**Then remember these are additions to tax, not reductions.** They are not affected by nonrefundable
credits, and several of them — the excise taxes in particular — are payable even by a taxpayer with no
income tax at all.

<div class="scenario">
<h3>The sale that ends the repayments</h3>

The Okories claimed the 2008 first-time homebuyer credit of $7,500 and have been repaying $500 a year.
Twelve instalments have been paid, leaving $1,500 outstanding. In 2026 they sell the house to an
unrelated buyer for $6,000 less than their adjusted basis, computed after reducing basis by the
unrecaptured credit.

Section 36(f)(2) would accelerate the whole $1,500 into 2026. But § 36(f)(3) caps the increase at the
gain on a sale to an unrelated person, and there is no gain — so nothing further is due, and
§ 36(f)(2)(B) switches off the annual instalments for that year and every year after. Had they sold at a
$900 gain, the repayment would have been $900 and the remaining $600 would have been extinguished.
</div>

<div class="scenario">
<h3>The excess that compounds</h3>

Farah contributed $9,000 to a traditional individual retirement account for 2024, $1,500 more than she
was entitled to, and did not withdraw the excess.

Section 4973(a) imposes 6 percent of the excess for 2024 — $90 — and again for 2025, and again for 2026,
for as long as the excess remains in the account at the close of the year. Three years of inattention
have cost $270 on a $1,500 mistake. Withdrawing the excess, with the net income attributable to it,
stops the tax prospectively; it does not undo the years already accrued.
</div>

<div class="scenario">
<h3>Reading § 5000A without the dates</h3>

A client asks whether they owe a penalty for having gone without health coverage for eight months of
2026.

Section 5000A(a) still requires an applicable individual to maintain minimum essential coverage, and
§ 5000A(b) still imposes a penalty for failing to. But § 5000A(c)(2)(B)(iii) sets the percentage of
income at zero for taxable years beginning after 2018, and § 5000A(c)(3)(A) sets the applicable dollar
amount at $0. The monthly penalty amount is the greater of two figures that are both zero. The answer is
nothing — but only because two subparagraphs deep in the computation say so, and nothing in the
section's operative language does.
</div>

<div class="callout trap">

**The gain cap applies only to a sale to an unrelated person.** A transfer to a related party
accelerates the full unrecaptured balance regardless of the price.

**The homebuyer recapture period starts late.** It runs from the second taxable year after the year of
purchase, not from the year of purchase.

**Death ends the recapture** for any taxable year ending after it — not just the acceleration, but the
annual instalments too.

**Excess contribution tax recurs.** It is not a one-off penalty; it is imposed for each taxable year the
excess remains.

**The excess accumulation rate is 25 percent, not 50.** A source giving 50 percent predates the change,
and the log at 1.2.2.h records a bank question keyed to the old figure.

**Section 5000A is still in the Code and imposes nothing.** The zeroing is in the definitions, not in
the operative subsections.

**The § 965 instalments are not equal.** They rise from 8 percent to 25 percent across the eight years,
so a taxpayer who budgeted the first year's figure will be short.

**These are additions to tax.** Nonrefundable credits do not reduce them, and they are payable by a
taxpayer with no income tax liability.
</div>

## How this has changed

Two of these provisions are best understood as archaeology, and one has moved recently.

The first-time homebuyer credit was repealed for purchases after the 2008–2010 window, but § 36(f)
survives because the 2008 version created a fifteen-year obligation. Those repayments are now in their
final years, and the practical question on most returns is not how the recapture works but whether the
client still has one running — the IRS account transcript is the reliable answer, because the taxpayer
frequently does not know.

Section 965 is the same shape at larger scale: the inclusion happened once, in a taxable year now long
closed, and what remains is a payment schedule under § 965(h) that a small number of individual returns
still carry.

The provision that moved is § 4974. The excise tax on a missed required minimum distribution was 50
percent for decades and is now 25 percent, with a further reduction where the shortfall is corrected
promptly. Any material written before that change overstates the exposure by double, and the bank
question logged at 1.2.2.h does exactly that.

Section 5000A is the clearest case on this project of a section left standing after its effect was
removed. It is worth treating as the template for a category: the operative language is untouched, the
repeal is accomplished by setting definitional amounts to zero, and a reader who stops before the
definitions gets the wrong answer with complete confidence. The same reading discipline applies to
§ 35 (logged at 1.3.2.h) and to § 5000A alike.

## Exam focus

Expect the first-time homebuyer credit to be tested on its mechanics: fifteen years, 6⅔ percent a year,
acceleration on disposition, capped at gain on a sale to an unrelated person. The 2008 credit is the one
with the repayment obligation.

Know that the excess contribution tax recurs annually and the excess accumulation tax is 25 percent.
Know that § 72(t) is 10 percent of the includible portion, with a list of exceptions.

Know that the shared responsibility payment is zero and why — the definitional zeroing rather than a
repeal of the requirement.

And know the general character: these are additions to tax, not reductions, and they survive a taxpayer
having no income tax liability at all.

## Check yourself

**1.** A taxpayer claimed the 2008 first-time homebuyer credit. How is it repaid?

*Answer: In equal annual instalments of 6⅔ percent of the credit across a 15-year recapture period
beginning with the second taxable year after the year of purchase — $500 a year on the maximum $7,500
credit (IRC § 36(f)(1), (7)).*

**2.** The same taxpayer sells the home to an unrelated buyer at a loss before the period ends. What is
owed?

*Answer: Nothing further. IRC § 36(f)(2) accelerates the unrecaptured balance into the year of
disposition, but § 36(f)(3) limits the increase to the gain on a sale to an unrelated person, and there
is no gain. Section 36(f)(2)(B) then switches off the annual instalments for that year and after.*

**3.** An excess individual retirement account contribution is left in place for four years. How many
times is the § 4973 tax imposed?

*Answer: Four. The tax is 6 percent of the excess determined as of the close of each taxable year, so it
recurs for every year the excess remains in the account, capped at 6 percent of the account value.*

**4.** Does a taxpayer with no income tax liability owe the tax on a missed required minimum
distribution?

*Answer: Yes. IRC § 4974(a) imposes the tax on the payee at 25 percent of the shortfall regardless of
income tax liability, and nonrefundable credits do not reduce it.*

**5.** What is the shared responsibility payment for 2026?

*Answer: Zero. IRC § 5000A(a) and (b) still state the requirement and the penalty, but
§ 5000A(c)(2)(B)(iii) sets the percentage of income at zero for taxable years beginning after 2018 and
§ 5000A(c)(3)(A) sets the applicable dollar amount at $0, so the monthly penalty amount is the greater
of two zeros.*
