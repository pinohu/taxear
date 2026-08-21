---
title: "Reporting requirements (e.g. Forms W2, W-4, Form 1099)"
code: "2.1.1.k"
part: 2
domain: "Business Entities and Considerations"
section: "Business entities"
description: "The 1099 threshold has moved, and the 1099-K threshold moved back as though it never left. Both changes first operate for 2026, and most sources have not caught up."
status: review
taxYear: 2026
lastReviewed: "2026-08-21"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 6041", title: "Information at source", url: "https://www.law.cornell.edu/uscode/text/26/6041" }
  - { type: IRC, ref: "§ 6041A", title: "Returns regarding payments of remuneration for services and direct sales", url: "https://www.law.cornell.edu/uscode/text/26/6041A" }
  - { type: IRC, ref: "§ 6050W", title: "Returns relating to payments made in settlement of payment card and third party network transactions", url: "https://www.law.cornell.edu/uscode/text/26/6050W" }
  - { type: IRC, ref: "§ 6050I", title: "Returns relating to cash received in trade or business", url: "https://www.law.cornell.edu/uscode/text/26/6050I" }
  - { type: IRC, ref: "§ 6051", title: "Receipts for employees", url: "https://www.law.cornell.edu/uscode/text/26/6051" }
  - { type: IRC, ref: "§ 6071", title: "Time for filing returns and other documents", url: "https://www.law.cornell.edu/uscode/text/26/6071" }
  - { type: IRC, ref: "§ 6721", title: "Failure to file correct information returns", url: "https://www.law.cornell.edu/uscode/text/26/6721" }
  - { type: IRC, ref: "§ 6722", title: "Failure to furnish correct payee statements", url: "https://www.law.cornell.edu/uscode/text/26/6722" }
  - { type: IRC, ref: "§ 3402(f)", title: "Withholding allowance", url: "https://www.law.cornell.edu/uscode/text/26/3402" }
  - { type: Reg, ref: "§ 301.6011-2", title: "Required use of electronic form for information returns", url: "https://www.law.cornell.edu/cfr/text/26/301.6011-2" }
  - { type: Reg, ref: "§ 1.6050I-1", title: "Returns relating to cash in excess of $10,000", url: "https://www.law.cornell.edu/cfr/text/26/1.6050I-1" }
  - { type: RevProc, ref: "2025-32", title: "Inflation adjusted items for 2026", url: "https://www.irs.gov/pub/irs-drop/rp-25-32.pdf" }
forms: []
related: ["2.1.1.a", "2.1.1.d", "2.1.1.h", "2.1.1.c", "2.1.1.f", "2.2.1.a"]
changelog:
  - { date: "2026-08-21", summary: "Initial draft. Sets out the IRC § 6041(a) information-at-source threshold as raised by Pub. L. 119-21 § 70433(a) for payments made after 31 December 2025 and indexed by the new § 6041(h), the § 6041A(a) cross-reference that ties nonemployee compensation to the same figure, the § 6050W(e) 1099-K thresholds restored by Pub. L. 119-21 § 70432 as if included in the 2021 Act, the § 6051(a) employee statement and the § 6071(b) and (c) filing dates, the Reg. § 301.6011-2(c) 10-return electronic filing threshold, the § 6050I cash reporting return and its 15-day filing and January statement deadlines, and the § 6721 and § 6722 penalties at the amounts applying to returns and statements required in 2027." }
---

Information reporting is the part of business tax practice where the rules changed most recently and where
the profession's memory is most stubborn. Two thresholds moved in 2025 and both first operate for the 2026
calendar year: the general information-at-source threshold went up, and the third party network threshold
went back to where it had been before 2021. Almost every checklist, software default and training note
written before July 2025 has at least one of them wrong, and the two errors run in opposite directions —
one causes over-reporting, the other under-reporting.

## The rule

**Information at source.** {fig:report.6041_threshold}

**Nonemployee compensation.** {fig:report.6041a_services}

**Direct sales for resale.** {fig:report.6041a_direct_sales}

**Third party network transactions.** {fig:report.1099k}

**Statements to employees.** {fig:report.w2}

**When each is filed.** {fig:report.due_dates}

**When it must be electronic.** {fig:report.efile_threshold}

**Cash received in a trade or business.** {fig:report.8300}

**And when that one is due.** {fig:report.8300_timing}

**The withholding certificate.** An employee receiving wages is entitled to a withholding allowance
determined on the facts the statute lists — whether a deduction is allowable to another taxpayer for the
employee, the position of a spouse, the individuals for whom the child credit may reasonably be expected
to be allowable, and the employee's estimated deductions and additional income (IRC § 3402(f)(1)). Form W-4
is how the employee reports those facts, and the employer withholds on what the certificate says.

**Failure to file the return.** {fig:report.6721_2026}

**Failure to furnish the statement.** {fig:report.6722_2026}

**Intentional disregard.** {fig:report.intentional_disregard}

## Current figures

| Item | Rule | Authority |
| --- | --- | --- |
| Information at source | {fig:report.6041_threshold} | IRC § 6041(a), (h) |
| Third party network | {fig:report.1099k} | IRC § 6050W(e) |
| Direct sales | {fig:report.6041a_direct_sales} | IRC § 6041A(b) |
| Cash reporting | {fig:report.8300} | IRC § 6050I(a) |
| Electronic filing | {fig:report.efile_threshold} | Reg. § 301.6011-2(c) |
| Failure to file | {fig:report.6721_2026} | Rev. Proc. 2025-32 § 3.57 |
| Intentional disregard | {fig:report.intentional_disregard} | IRC § 6721(e)(2) |

## How it works in practice

The information-at-source threshold is the one to get right first, because it governs the largest number
of forms. It applies to a payment made *in the course of* a trade or business, which is what keeps
personal payments out of it, and it applies to fixed or determinable income generally rather than to a
list of specified payments. Rent to a landlord, fees to a professional, prizes and awards, and payments to
an attorney all fall inside it. Payments to a corporation are, by long-standing regulation, generally
outside it — with the well-known exception for legal fees.

The threshold is now a moving figure rather than a fixed one, which changes how it must be handled in
practice. It is indexed for calendar years after 2026 and rounded, so a firm cannot hard-code it in a checklist the
way it hard-coded the old amount for decades. The cross-reference in IRC § 6041A(a) is
worth noticing for the same reason: nonemployee compensation no longer has its own figure at all, but
tracks whatever IRC § 6041(a) says for the year, so the two move in lockstep and neither needs to be
remembered separately.

The third party network story is different in kind, and it is the one most likely to appear as a trap. The
2021 Act had replaced the long-standing dual test with a flat threshold and no transaction count, a change
whose start date was repeatedly postponed by administrative action so that it never actually governed a
full filing season. In 2025 Congress restored the dual test *as if included in* the 2021 provision, which
means the flat threshold is treated as never having taken effect at all. Both limbs must now be exceeded:
the amount and the transaction count. A payee with a large dollar volume across a handful of transactions
is not reportable, and neither is one with hundreds of small transactions.

Note that this affects the *organisation's* reporting obligation and nothing else. Income is taxable
whether or not a Form 1099-K arrives, and the restoration of the higher threshold does not make anything
non-taxable. It changes who receives a form, not who owes tax — which is exactly the point a client hears
backwards.

The electronic filing threshold catches more businesses than practitioners expect because it aggregates
across return types. Ten returns in total, counting Forms W-2, the 1099 series, employment tax returns and
excise returns together. A business with eight employees and three contractors is over it.

On Form 8300, hold two dates apart. The return goes to the Service by the fifteenth day after the cash is
received — days, not months, and counted from receipt rather than from the end of any period. The written
statement to each person named goes out by 31 January of the following year. Nothing about the two deadlines
is parallel, and confusing them is the standard error.

The penalty structure rewards speed with an unusual sharpness. The per-return amount for a correction made
within 30 days is a fraction of the general figure, and the tier for a correction made by 1 August sits
between the two. The reduced *caps* for a small business apply only to the general and tiered penalties;
intentional disregard has no cap at all, and its Form 8300 tier is on a different scale from every other
return.

## Scenarios

<div class="scenario">
<h3>The contractor payments that no longer need reporting</h3>
<p>A landscaping company paid eleven individual subcontractors during 2026. Seven were paid between $700
and $1,400 each; four were paid more than $4,000 each. The bookkeeper's checklist, written in 2019,
says to issue a Form 1099-NEC to anyone paid $600 or more, so she prepares eleven.</p>
<p>Four are required and seven are not. IRC § 6041A(a)(2) requires the return where the aggregate paid for
services equals or exceeds the dollar amount in effect under IRC § 6041(a) for the calendar year, and for
2026 that amount is the raised figure rather than the old one. Issuing the seven is not a penalty
exposure — there is no sanction for filing a return that was not required — but it is unnecessary work,
and it produces payee statements that the recipients will reconcile against returns nobody needed. The
checklist is the thing to fix, and it should record that the figure is indexed rather than fixed.</p>
</div>

<div class="scenario">
<h3>The marketplace seller who expected a form</h3>
<p>Kwabena sold handmade instruments through an online marketplace during 2026, receiving $46,000 across
nine transactions. No Form 1099-K arrives. He tells his preparer that because the platform reported
nothing, the income is not reportable.</p>
<p>Both halves of that are wrong, in different ways. The platform is correct not to report: under
IRC § 6050W(e) as restored, a third party settlement organisation reports only where both the amount
exceeds the dollar threshold and the number of transactions exceeds the count, and nine transactions do
not. And the absence of a form has nothing to do with the taxability of the income. Kwabena has $46,000 of
gross receipts from a trade or business, reportable on Schedule C whether or not any third party told the
Service about it.</p>
</div>

<div class="scenario">
<h3>The car dealer and two dates</h3>
<p>A dealership sells a vehicle on 3 March 2026 and receives $12,400 in cash across three payments made on
that day. The controller correctly identifies the transaction as reportable and asks when the paperwork is
due.</p>
<p>Two deadlines, neither of them the same. The Form 8300 return itself is due by the fifteenth day after
the date the cash is received (Reg. § 1.6050I-1(e)(1)), so 18 March 2026. The written statement to the
purchaser — showing the dealership's information contact and the aggregate cash received — is due on or
before 31 January 2027 under IRC § 6050I(e). A controller who diaries "15 days" for both, or "January 31"
for both, will miss one of them. Note also that intentional disregard on a Form 8300 carries its own
penalty scale, well above the one for an ordinary information return, and with no annual cap.</p>
</div>

<div class="scenario">
<h3>The corrected forms that arrived in two waves</h3>
<p>A staffing agency with average annual gross receipts of about $3 million files 240 information returns
for the 2026 calendar year. In February 2027 it discovers that 40 carry an incorrect taxpayer
identification number, and it corrects those within three weeks of the filing deadline. In June 2027 it
discovers 25 more and corrects those on 20 July 2027.</p>
<p>Three tiers apply, not one. The 40 corrected within 30 days of the required filing date attract the
lowest per-return figure. The 25 corrected after that but before 1 August attract the middle figure. And
because the agency's average annual gross receipts are at or under the small-business level, the annual
caps that apply to it are the reduced ones. Nothing here is intentional disregard, which is the
distinction that matters most: the top tier has no cap and is an order of magnitude higher per return.</p>
</div>

<div class="callout trap">
<strong>Traps</strong>
<ul>
<li><strong>The information-at-source threshold moved.</strong> Any checklist carrying the old fixed figure
is wrong for payments made after 2025, and the new figure is indexed rather than fixed.</li>
<li><strong>Nonemployee compensation has no threshold of its own.</strong> IRC § 6041A(a)(2) now
cross-refers to the IRC § 6041(a) amount, so the two move together.</li>
<li><strong>The 1099-K test is conjunctive again.</strong> Both the amount and the transaction count must
be exceeded, and the flat threshold is treated as never having taken effect.</li>
<li><strong>No form does not mean no income.</strong> The reporting threshold governs the payer, not the
payee's return.</li>
<li><strong>The electronic filing count aggregates.</strong> Ten returns across all types, not ten of one
type.</li>
<li><strong>Form 8300 has two unrelated deadlines.</strong> Fifteen days for the return, 31 January of the
following year for the statement.</li>
<li><strong>Intentional disregard has no cap.</strong> And the Form 8300 tier of it is on an entirely
different scale from every other return.</li>
</ul>
</div>

## How this has changed

Two changes made in July 2025 first operate for the 2026 calendar year, and they are the reason this topic
needs rewriting rather than updating.

The information-at-source threshold in IRC § 6041(a) was raised by Pub. L. 119-21 § 70433(a) for payments
made after 31 December 2025, its heading was rewritten from a fixed amount to "Payments exceeding
threshold", and a new IRC § 6041(h) indexes the figure for calendar years after 2026. The same Act
substituted a cross-reference for the fixed amount in IRC § 6041A(a)(2), so nonemployee compensation
follows it. The practical effect is that the number every practitioner has carried in their head for their
whole career is now both different and moving.

The third party network threshold went the other way and did so retroactively. Pub. L. 119-21 § 70432(a)
restored the dual amount-and-count test in IRC § 6050W(e), and § 70432(a)(2) provides that the amendment
takes effect *as if included in* the 2021 provision that had replaced it. The flat threshold is therefore
treated as never having been law. That is an unusual drafting move and it has a practical consequence
worth stating: there is no transitional period to reason about, and no year in which the lower threshold
correctly applied.

The electronic filing threshold is the older change of the three, but still recent enough to be
mis-stated. It is now ten returns counted in aggregate across return types, replacing a much higher count
applied per type. A business that filed on paper for years without difficulty may have been required to
file electronically since 2024 without anyone noticing.

## Exam focus

Expect threshold questions, and read the year in the question carefully — a question set in an earlier
year takes the earlier figure. Where a question gives payments to several recipients and asks how many
returns are required, apply the threshold recipient by recipient on the aggregate for the calendar year,
and check whether any recipient is a corporation.

Form 8300 is a reliable source of questions because it has two deadlines and both are unusual: fifteen
days from receipt for the return, 31 January of the following year for the payee statement. Expect one of
them to be the answer and the other to be the distractor.

For penalties, the structure matters more than the amounts: a general figure, a lower one for correction
within 30 days, a middle one for correction by 1 August, reduced annual caps for smaller businesses, and
an uncapped tier for intentional disregard. A question that describes a deliberate failure is asking about
the last of those.

## Check yourself

**1.** A business pays a self-employed graphic designer $1,500 during calendar year 2026 for services. Is
a Form 1099-NEC required?

*Answer: no. IRC § 6041A(a)(2) requires the return where the aggregate remuneration for services equals or
exceeds the dollar amount in effect for the calendar year under IRC § 6041(a), and for 2026 that amount is
above $1,500. Under the pre-2026 threshold the answer would have been yes, which is why the year in the
question decides it.*

**2.** A third party settlement organisation processes $95,000 for a participating payee across 40
transactions in 2026. Must it file a Form 1099-K?

*Answer: no. IRC § 6050W(e) as restored requires reporting only if both the amount exceeds the dollar
threshold and the aggregate number of transactions exceeds 200. The amount is exceeded, the count is not,
and both limbs must be satisfied. The payee's income remains fully taxable.*

**3.** A jeweller receives $15,000 in cash from a customer on 10 June 2026 in a single transaction. When
must the Form 8300 be filed, and when must the customer receive a statement?

*Answer: the return by 25 June 2026 — the fifteenth day after the cash is received, under
Reg. § 1.6050I-1(e)(1) — and the written statement to the customer by 31 January 2027 under
IRC § 6050I(e). The two deadlines are unrelated to each other and neither is derived from the other.*

**4.** A business is required to file six Forms W-2 and five Forms 1099-NEC for the calendar year. Must it
file them electronically?

*Answer: yes. Reg. § 301.6011-2(c)(1) requires electronic filing where the person is required to file at
least 10 returns during the calendar year, and the count aggregates across return types. Eleven returns in
total exceed the threshold even though neither type alone reaches ten.*

**5.** An employer deliberately fails to file 30 required information returns for 2026, having been
advised that it must. What is the penalty exposure?

*Answer: intentional disregard, at the greater of the per-return figure or 10 percent of the aggregate
amount required to be reported correctly, with no calendar year limit (IRC § 6721(e)(2)). The tiered
reductions for prompt correction and the annual caps — including the reduced caps for a small business —
are all unavailable where the failure is intentional.*
