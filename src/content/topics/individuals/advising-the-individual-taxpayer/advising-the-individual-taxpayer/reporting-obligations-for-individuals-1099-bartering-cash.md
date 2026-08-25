---
title: "Reporting obligations for individuals"
code: "1.5.1.a"
part: 1
domain: "Advising the Individual Taxpayer"
section: "Advising the individual taxpayer"
description: "Two thresholds moved for 2026, and one of them moved retroactively — so the version of the rule most clients half-remember turns out never to have been law at all."
status: published
taxYear: 2026
lastReviewed: "2026-08-19"
reviewedBy: "Draft for N. O. review"
authorities:
  - { type: IRC, ref: "§ 6041", title: "Information at source", url: "https://www.law.cornell.edu/uscode/text/26/6041" }
  - { type: IRC, ref: "§ 6050W", title: "Returns relating to payments made in settlement of payment card and third party network transactions", url: "https://www.law.cornell.edu/uscode/text/26/6050W" }
  - { type: IRC, ref: "§ 6050I", title: "Returns relating to cash received in trade or business", url: "https://www.law.cornell.edu/uscode/text/26/6050I" }
  - { type: IRC, ref: "§ 6045", title: "Returns of brokers", url: "https://www.law.cornell.edu/uscode/text/26/6045" }
  - { type: IRC, ref: "§ 61", title: "Gross income defined", url: "https://www.law.cornell.edu/uscode/text/26/61" }
  - { type: RevProc, ref: "Rev. Proc. 2025-32, § 3.57", title: "2027 filing year information return penalty amounts", url: "https://www.irs.gov/pub/irs-drop/rp-25-32.pdf" }
  - { type: Statute, ref: "Pub. L. 119-21, §§ 70432, 70433", title: "Restoration of the 1099-K threshold and increase of the 1099 threshold", url: "https://www.law.cornell.edu/uscode/text/26/6050W" }
forms: []
related: ["1.5.1.b", "1.2.1.h", "1.5.1.n", "1.5.1.i"]
changelog:
  - { date: "2026-08-19", summary: "Initial draft. Sets out the IRC § 6041 threshold raised to $2,000 and newly indexed by Pub. L. 119-21 § 70433, the restoration of the conjunctive § 6050W(e) test by § 70432 with its retroactive effective date, the § 6050I cash reporting rule, barter exchange reporting under § 6045(c)(3) and the independence of § 61 taxability from any information return, and the § 6721 penalty amounts for returns required to be filed in 2027." }
  - { date: "2026-08-25", summary: "Added a plain-language summary, a decision diagram of the Form 1099-K conjunctive test, glossary marks, and three additional typed scenarios (baseline, fails, boundary) alongside the existing three." }
diagram:
  archetype: "decision"
  caption: "Does a Form 1099-K have to be issued?"
  tests:
    - { test: "More than $20,000 in payments during the year?", result: "No — no Form 1099-K, no matter how many transactions", outcome: "fail" }
    - { test: "If yes — more than 200 transactions in the year?", result: "No — the dollar amount alone does not trigger the form", outcome: "fail" }
    - { test: "Both exceeded", result: "Form 1099-K is required", outcome: "pass" }
---

<div class="plain-terms">
This page is about who must tell the IRS when money changes hands. It also covers a separate
question: when is a payment actually taxable? It affects anyone who runs a small business, sells
things online, gets paid in cash, or trades work for work instead of money. A business that pays
someone enough in a year usually must report it. Cash paid above a set amount gets reported too.
None of this changes whether the money is taxable. A form is a paperwork rule, not a tax verdict.
No form does not mean tax-free, and a form does not always mean the whole amount counts.
</div>

Two thresholds on this topic moved for 2026, and the more important of the two moved backwards in time.
The much-publicised reduction of the payment settlement reporting threshold was repealed *as if it had
never been enacted*, so a client who has spent three years bracing for a Form 1099-K on a few hundred
dollars of marketplace sales was bracing for something that never took effect.

## The rule

**Payments in the course of a trade or business.** A person engaged in a trade or business who pays
another person rent, salaries, wages, annuities, compensations or other fixed or determinable gains,
profits and income of {fig:reporting.6041_threshold} in a calendar year must file an information return
(IRC § 6041(a)). Payments already covered by another reporting section — dividends under § 6042,
patronage dividends under § 6044, interest under § 6049, broker transactions under § 6045 — are excluded
to prevent duplicate reporting.

**Payment settlement entities.** {fig:reporting.1099k_threshold} Both conditions must be exceeded, which
is the whole point of the restoration: the version that applied in the interim used a single low dollar
figure and no transaction count.

**Cash received in a trade or business.** {fig:reporting.cash_8300} The return gives the name, address
and taxpayer identification number of the payer, the amount, and the date and nature of the transaction
(IRC § 6050I(b)(2)). Related transactions are aggregated, which is what defeats structuring a payment
into instalments.

**Barter.** {fig:reporting.barter} And separately — {fig:reporting.barter_income}. The two propositions
are independent, and conflating them is the standard error: a client who bartered outside any exchange
receives no form and owes tax all the same.

**Penalties for the payer.** {fig:reporting.6721_penalty} And {fig:reporting.6721_intentional}. Section
6722 imposes a parallel penalty for failing to furnish a correct payee statement, so a single failure
usually attracts two penalties — one for the return to the Service and one for the copy to the payee.

**What the recipient does with a form.** Nothing about an information return determines taxability. A
Form 1099-K reporting gross payment volume may include amounts that are not income at all — sales at a
loss of personal items, reimbursements between friends miscoded as business — and a Form 1099-NEC
reporting a payment does not make the recipient self-employed if they were not carrying on a trade or
business. The return is a starting point for a conversation, not a conclusion.

## Current figures

| Item | Amount |
| --- | --- |
| § 6041 threshold | {fig:reporting.6041_threshold} |
| Form 1099-K threshold | {fig:reporting.1099k_threshold} |
| Cash reporting | {fig:reporting.cash_8300} |
| Barter exchange | {fig:reporting.barter} |
| Barter income | {fig:reporting.barter_income} |
| Penalty per return | {fig:reporting.6721_penalty} |
| Intentional disregard | {fig:reporting.6721_intentional} |

## How it works in practice

**Separate the two questions immediately.** Is this income? And is anyone required to report it? They
have different answers and different sources, and clients almost always assume the first follows from
the second.

**For a client who received a Form 1099-K, reconcile before reporting.** The form shows gross payment
volume, before refunds, fees and chargebacks, and it may include personal transactions. Reporting the
gross figure as business receipts overstates income; ignoring the form invites a notice. The correct
course is to report what the records show and to be able to explain the difference.

**For a client who pays others, check the threshold against the calendar year.** Note the wording change:
§ 6041(a) now speaks of a calendar year rather than a taxable year, so a fiscal-year business tests its
payments on the calendar year like everyone else.

**For cash, treat the aggregation rule as the operative one.** The threshold applies to one transaction
or to related transactions together. A client who takes half the price today and half next week for the
same car has a reporting obligation, and the failure is not cured by the payments being separate.

**And tell the barter client the truth early.** Trading services is a taxable exchange at fair market
value on both sides. Whether a Form 1099-B arrives depends on whether an exchange organisation was
involved; the tax does not.

<div class="scenario" data-type="baseline">
<h3>The straightforward payment above the line</h3>

A landscaping business pays an {gloss:independent-contractor} $3,500 for the year to maintain its
properties. Nothing else about the payment is unusual.

An information return is required. The payment exceeds the § 6041 threshold, was made in the course of
a trade or business, and is not covered by any of the other reporting sections that would otherwise
exclude it. This is the ordinary case the section is written for: a service payment above the line gets
reported, in full, once.
</div>

<div class="scenario" data-type="timing">
<h3>The threshold that never was</h3>

Rosalind sells surplus craft materials through an online marketplace and received about $2,300 across 40
transactions in 2026. She has been told for years to expect a Form 1099-K once she passed $600.

She will not receive one. Section 6050W(e) as restored requires both more than $20,000 of payments and
more than 200 transactions, and she exceeds neither. More to the point, Pub. L. 119-21 § 70432(a)(2)
made the restoration effective as if included in the American Rescue Plan provision that had lowered the
threshold, so the low threshold never took effect for any year. Whether her sales are taxable is a
separate question, decided by whether she sold at a gain and whether she was carrying on a business.
</div>

<div class="scenario" data-type="boundary">
<h3>Two hundred transactions, to the transaction</h3>

A payment app processes exactly 200 transactions for a seller in 2026, totaling $25,000.

No Form 1099-K is required. Section 6050W(e) requires more than 200 transactions, and exactly 200 does
not satisfy "more than." The dollar test is already well past its own threshold, so a single additional
transaction — not a single additional dollar — is the only thing that would change the answer here.
</div>

<div class="scenario" data-type="procedural">
<h3>Two payments, one transaction</h3>

Kofi runs a landscaping business. A customer pays him $7,000 in cash on Monday and $5,000 in cash the
following Monday for the same job.

Section 6050I(a) applies to more than $10,000 received in one transaction *or two or more related
transactions*. These are related — one job, one customer, one price — so the aggregate of $12,000
triggers the reporting obligation, and Form 8300 is due. Structuring the payments into two sub-threshold
instalments neither avoids the obligation nor helps the customer; it is the precise circumstance the
aggregation language exists to catch.
</div>

<div class="scenario" data-type="interaction">
<h3>Barter with no form at all</h3>

Amaka, an accountant, prepares returns for a dentist in exchange for dental work worth about $1,800. No
money changes hands and no barter exchange is involved.

Both have gross income of $1,800 under § 61(a) — the {gloss:fair-market-value} of what each received —
and both have a deductible business expense of the same amount if the services were business-related. No
information return is required of either, because neither is a barter exchange within § 6045(c)(3) and
neither made a payment in the course of a trade or business of the kind § 6041 reaches. The absence of a
form changes nothing about the tax.
</div>

<div class="scenario" data-type="fails">
<h3>The payment that already has its own return</h3>

A small corporation pays a shareholder $2,500 in dividends during 2026 — above the § 6041 threshold. The
bookkeeper assumes a § 6041 information return is required.

No § 6041 return is required. Dividends are reported under § 6042, and § 6041 excludes payments already
covered by another specified reporting section to prevent duplicate reporting. The corporation's
obligation, if any, runs through the dividend reporting rules, not through the general
information-at-source return — the size of the payment was never the issue.
</div>

<div class="callout trap">

**The Form 1099-K threshold is conjunctive.** Both the dollar amount and the transaction count must be
exceeded. A client who passes one and not the other gets no form.

**The restoration is retroactive.** {fig:reporting.1099k_history}

**The § 6041 threshold is now indexed** and now runs on the calendar year. Both are new for 2026.

**No form does not mean no income.** Section 61(a) does not depend on an information return.

**A form does not mean income either.** A Form 1099-K reports gross payment volume, including personal
transactions and amounts later refunded.

**Related cash transactions aggregate.** Splitting a payment does not defeat § 6050I.

**Two penalties, not one.** Section 6721 for the return and § 6722 for the payee statement.

**Intentional disregard has no annual cap** and is the greater of a fixed amount or 10 percent of what
should have been reported.
</div>

## How this has changed

Both changes come from Pub. L. 119-21 and they are structurally different.

**Section 70433** raised the § 6041 threshold, replaced the subsection heading — which had named the old
figure — with "Payments exceeding threshold", substituted "calendar year" for "taxable year", and added
a new § 6041(h) indexing the amount. {fig:reporting.6041_history}

**Section 70432** restored the § 6050W(e) de minimis exception to its pre-2021 conjunctive form. What
makes it unusual is § 70432(a)(2): the amendment "shall take effect as if included in section 9674 of
the American Rescue Plan Act". That is a repeal by retroactive substitution rather than a prospective
change. {fig:reporting.1099k_history}

For a practitioner the consequence is a client-communication problem more than a technical one. Three
years of press coverage, platform emails and software prompts told people to expect forms at a much
lower figure. The correct advice now is that the old rule is the current rule, that it always was, and
that the taxability of a marketplace sale was never affected by whether a form arrived.

## Exam focus

Know both thresholds and that the payment settlement test is conjunctive. Know that the § 6041 threshold
rose and is now indexed, and that the § 6050W restoration is retroactive.

Know the § 6050I rule as a combination of amount and aggregation: cash above the threshold, in one
transaction or related transactions, received in a trade or business, on Form 8300.

Know that barter is income at fair market value under § 61(a) regardless of reporting, and that a barter
exchange is a broker required to report under § 6045.

Know that § 6721 and § 6722 are separate penalties for the same failure, and that intentional disregard
removes the annual cap.

## Check yourself

**1.** A taxpayer receives $12,000 across 300 transactions through an online payment platform in 2026.
Will a Form 1099-K be issued?

*Answer: No. IRC § 6050W(e) as restored by Pub. L. 119-21 § 70432 requires both the dollar amount and
the transaction count to be exceeded. The count is met and the amount is not, so no return is required.
The income, if any, is reportable regardless.*

**2.** A business pays an unincorporated contractor $1,500 during 2026. Is an information return
required?

*Answer: No. The IRC § 6041(a) threshold for payments made after 31 December 2025 exceeds that amount,
following Pub. L. 119-21 § 70433(a), so no return is required. The contractor's income is taxable all
the same.*

**3.** A dealer receives $6,500 in cash on one day and $4,800 in cash a week later for the same vehicle.
What is required?

*Answer: A Form 8300. IRC § 6050I(a) applies where more than $10,000 in cash is received in one
transaction or two or more related transactions, and payments for a single vehicle are related. The
aggregate of $11,300 exceeds the threshold.*

**4.** Two professionals exchange services of equal value with no barter exchange involved. What are the
consequences?

*Answer: Each has gross income equal to the fair market value of what they received under IRC § 61(a),
and each may have a deductible business expense of the same amount. No information return is required,
because neither is a barter exchange within § 6045(c)(3), and the absence of a form does not affect
taxability.*

**5.** A payer files 100 incorrect information returns through intentional disregard. What is the
exposure?

*Answer: Under IRC § 6721(e)(2)(A) the penalty is the greater of $690 per return or 10 percent of the
aggregate amount required to be reported correctly, with no calendar year maximum — and a parallel
penalty applies under § 6722 for the corresponding payee statements.*
