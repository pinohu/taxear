---
title: "Forms 1099-MISC, 1099-NEC and 1099-K — reporting, irregularities and corrections"
code: "1.2.1.o"
part: 1
domain: "Income and Assets"
section: "Income"
description: "Three forms, three statutes, three thresholds — and 2026 moved two of them in opposite directions. An information return is evidence about a payment, never a tax rule."
status: review
taxYear: 2026
lastReviewed: "2026-08-19"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 61", title: "Gross income defined", url: "https://www.law.cornell.edu/uscode/text/26/61" }
  - { type: IRC, ref: "§ 3406", title: "Backup withholding", url: "https://www.law.cornell.edu/uscode/text/26/3406" }
  - { type: IRC, ref: "§ 6041", title: "Information at source", url: "https://www.law.cornell.edu/uscode/text/26/6041" }
  - { type: IRC, ref: "§ 6041A", title: "Returns regarding payments of remuneration for services and direct sales", url: "https://www.law.cornell.edu/uscode/text/26/6041A" }
  - { type: IRC, ref: "§ 6050W", title: "Returns relating to payments made in settlement of payment card and third party network transactions", url: "https://www.law.cornell.edu/uscode/text/26/6050W" }
  - { type: IRC, ref: "§ 6721", title: "Failure to file correct information returns", url: "https://www.law.cornell.edu/uscode/text/26/6721" }
  - { type: IRC, ref: "§ 6722", title: "Failure to furnish correct payee statements", url: "https://www.law.cornell.edu/uscode/text/26/6722" }
  - { type: IRC, ref: "§ 6724", title: "Waiver; definitions and special rules", url: "https://www.law.cornell.edu/uscode/text/26/6724" }
  - { type: Statute, ref: "Pub. L. 119-21", title: "An Act to provide for reconciliation, title VII" }
forms: []
related: ["1.2.1.a", "1.2.1.f", "1.1.1.f", "1.2.1.n"]
changelog:
  - { date: "2026-08-19", summary: "Initial draft. Records the IRC § 6041(a) threshold increase with indexing from 2027, the IRC § 6041A(a)(2) amendment tying nonemployee compensation reporting to that figure, the retroactive restoration of the IRC § 6050W(e) thresholds, and the new tip and occupation accounting required on payer statements." }
---

Three forms, three separate statutes, three different thresholds — and 2026 moved two of them in
opposite directions. Before any of that, though, one proposition governs the whole topic: an
information return is **evidence about a payment**, not a rule about tax. Income is taxable because
§ 61 says so, not because a form arrived, and it does not stop being taxable because one did not.

## The rule

**Form 1099-MISC — the general provision.** Every person engaged in a trade or business making payment
in the course of that business of rent, salaries, wages, premiums, annuities, compensations,
remunerations, emoluments or other fixed or determinable gains, profits and income at or above the
threshold in a calendar year must file an information return (IRC § 6041(a)). The figure is adjusted for
inflation for calendar years after 2026 (IRC § 6041(h)).

**Form 1099-NEC — remuneration for services.** Where a service-recipient engaged in a trade or business
pays remuneration for services in the course of that business, and the aggregate for the calendar year
**equals or exceeds the dollar amount in effect for that calendar year under § 6041(a)**, the
service-recipient must file a return (IRC § 6041A(a)(1), (2)). That cross-reference is new: the
threshold no longer carries a figure of its own, so it now moves with § 6041(a) automatically.

**Direct sales are a separate rule that did not move.** A person selling consumer products to a buyer
on a buy-sell or deposit-commission basis for resale other than in a permanent retail establishment
must report where the aggregate sales to that buyer reach the figure in the table below (IRC
§ 6041A(b)(1)(A), (B)). That figure is stated in the section itself and does not track § 6041(a).

**Form 1099-K — third party network transactions.** A third party settlement organization is required
to report a participating payee's third party network transactions **only if both** the dollar
threshold and the transaction-count threshold are exceeded (IRC § 6050W(e)(1), (2)).

**All payer statements now carry tips.** Section 6041A(a) requires the return to set out a **separate
accounting of any amounts reasonably designated as cash tips and the occupation described in
§ 224(d)(1)** of the recipient, and parallel amendments made the same change to § 6041(f)(2),
§ 6050W(f)(2) and § 6051(a)(18). Because §§ 224 and 225 define their deductions by reference to amounts
appearing on these statements, the reporting is substantive rather than administrative.

**Two penalties, and one waiver.** Failing to file a correct information return is penalised per return,
at reduced amounts for correction within 30 days or by 1 August, with annual caps varying by the filer's
gross receipts and no cap at all for intentional disregard (IRC § 6721(a), (b), (d), (e)). Failing to
furnish a correct **payee statement** is a separate and cumulative penalty (IRC § 6722). No penalty is
imposed where the failure is shown to be due to **reasonable cause and not to wilful neglect** (IRC
§ 6724(a)).

**Backup withholding is the payer's remedy.** Where a payee fails to furnish a taxpayer identification
number, the Service notifies the payor that the number is wrong, or there has been notified payee
underreporting or a certification failure, the payor must withhold at the statutory rate (IRC
§ 3406(a)(1)).

## Current figures

| Item | 2026 |
| --- | --- |
| General reporting threshold | {fig:info.6041_threshold} |
| Nonemployee compensation threshold | {fig:info.6041a_threshold} |
| Direct sales threshold | {fig:info.direct_sales_threshold} |
| Third party network threshold | {fig:info.1099k_threshold} |
| Information return penalty | {fig:infopenalty.6721} |
| Reasonable cause waiver | {fig:info.reasonable_cause} |
| New tip accounting on statements | {fig:info.tip_reporting_addition} |
| Backup withholding rate | {fig:backup.withholding_rate} |

## How it works in practice

Build the return from records and use the forms as a cross-check, not the other way round. That
ordering matters more in 2026 than it has for years, because the general threshold rose sharply while
the platform thresholds were restored to much higher figures — so a great deal of genuinely taxable
income now generates no form at all. A client who reconciles only to the forms they received will
understate income, and nothing on the return will flag it.

Where a form is wrong, ask first whether it is wrong about the **amount** or about the **payee**. An
overstated amount is usually a gross-versus-net problem: platforms report gross settlement amounts
before fees, refunds and chargebacks, so the form is correct as a statement of what passed through and
wrong as a statement of the client's income. That is reported and reconciled, not disputed.

Where the form is genuinely wrong — payment to the wrong person, duplicate reporting, an amount never
received — the first step is to ask the payer for a corrected form, because that is the only fix that
reaches the Service's matching system. If the payer will not correct it, report the amount as shown and
back out the erroneous portion with a clear description, so the return reconciles to the form on its
face and the explanation is visible. Silently reporting the right number invites a matching notice.

For clients who pay others, the penalty structure rewards speed. The reduced tiers in § 6721(b) apply
to correction within 30 days and to correction by 1 August, so a discovered failure is much cheaper if
acted on immediately. And where the failure was genuinely inadvertent, § 6724(a) waives the penalty for
reasonable cause not amounting to wilful neglect — a defence that has to be documented at the time
rather than argued later.

<div class="scenario">
<h3>Income with no form at all</h3>

Rashid does design work through an online marketplace and directly for two small businesses. The
marketplace settled $17,400 across 90 transactions; one business paid him $1,700 and the other $2,600.

He receives one form. The marketplace is below both § 6050W(e) thresholds — the dollar figure and the
transaction count are cumulative, not alternative — so no Form 1099-K issues. The $1,700 is below the
§ 6041A threshold, so no form for that either. Only the $2,600 payer must report.

All $21,700 is gross income from his business under IRC § 61(a)(2) and belongs on his Schedule C. The
gap between what the Service is told and what he owes is now wide enough that his own records are the
only reliable basis for the return.
</div>

<div class="scenario">
<h3>The form that was right and wrong at once</h3>

Camila sells through a platform that reports $58,000 on a Form 1099-K. Her actual receipts were
$49,300 after platform fees of $6,200 and customer refunds of $2,500.

The form is not wrong. Section 6050W reports the gross amount of reportable payment transactions, which
is what passed through the platform. Her income is not $58,000, but the difference is deductions and
returns rather than an error in the form.

So she reports gross receipts consistent with the form and deducts the fees as a business expense and
the refunds as returns and allowances. Reporting $49,300 as gross receipts would produce a matching
notice for a return that is arithmetically correct — the reconciliation has to be visible on the face
of the return.
</div>

<div class="scenario">
<h3>A form for someone else's money</h3>

Jonah's consultancy received a Form 1099-NEC for $40,000, but $15,000 of it was passed straight to a
subcontractor who invoiced through him. The payer refuses to issue a corrected form.

The right first step failed, so the second applies. A corrected form is the only fix that reaches the
matching system, and having asked and been refused, Jonah reports the full $40,000 as gross receipts and
deducts the $15,000 as a subcontractor cost — supported by the subcontractor's invoice and by Jonah's
own Form 1099-NEC to them, which he must issue because the amount is above the § 6041A threshold.

The instinct to report $25,000 and explain later is the wrong one. It produces a mismatch the Service
will pursue, and the explanation is no easier a year on than it is now.
</div>

<div class="callout trap">
<p class="callout-label">Traps</p>

- **No form does not mean no income.** The thresholds govern the payer's filing duty, nothing else.
- **The § 6050W thresholds are cumulative.** Both the dollar figure and the transaction count must be
  exceeded (IRC § 6050W(e)(1), (2)).
- **A Form 1099-K reports gross settlement**, before fees, refunds and chargebacks.
- **Three thresholds, and they no longer move together.** § 6041A(a)(2) now tracks § 6041(a)
  automatically, but § 6041A(b) direct sales and § 6050W(e) each keep their own figures.
- **The general threshold is indexed from 2027** (IRC § 6041(h)), so a fixed figure is good for one
  year.
- **Penalties are two, not one.** IRC § 6721 for the return and IRC § 6722 for the payee statement,
  cumulative on the same omission.
- **Correction timing changes the penalty** — within 30 days, or by 1 August, under IRC § 6721(b).
- **Reasonable cause is a real defence** (IRC § 6724(a)) but requires evidence contemporaneous with the
  failure.
- **Ask for a corrected form first.** Only that reaches the matching system.
- **Report and back out rather than netting silently**, so the return reconciles on its face.
- **Payer statements now carry a separate tip accounting** and the recipient's occupation, and the
  §§ 224 and 225 deductions are defined by reference to those statements — so a reporting failure costs
  the recipient a deduction.

</div>

## How this has changed

**The general threshold rose sharply and became indexed.** Pub. L. 119-21 § 70433(a) raised the
§ 6041(a) figure more than threefold, § 70433(e) retitled the subsection "Payments exceeding threshold"
and put it on a calendar-year rather than taxable-year footing, and § 70433(f) applies the change to
payments made after 31 December 2025. New § 6041(h) indexes it for calendar years after 2026.

**Nonemployee compensation lost its own number.** Section 70433(c) amended § 6041A(a)(2) to substitute
"equals or exceeds the dollar amount in effect for such calendar year under section 6041(a)" for the
former fixed figure. So the Form 1099-NEC threshold is now defined by reference and will move each year
without any further amendment — a structural change, not just a numerical one.

**Direct sales did not move**, and neither did several neighbouring provisions. Section 6041A(b) keeps
its own stated figure; § 6050P for cancelled debt and § 6050E for state tax refunds were untouched. So
2026 has no single information-reporting threshold, and treating one figure as universal is a mistake
that will produce both missed filings and unnecessary ones.

**The platform threshold went the other way, retroactively.** Section 70432(a)(1) restored the two-part
test in § 6050W(e), and § 70432(a)(2) makes that restoration take effect **as if included in** the 2021
Act — so the much lower threshold is treated as never having been enacted. Material describing a
transition to it, including the IRS's administrative delays of that transition, is describing something
the statute no longer contains.

**Statements gained a tip accounting.** Section 70201(f) added the separate accounting of cash tips and
the § 224(d)(1) occupation to § 6041, § 6041A, § 6050W and § 6051. This is easy to file under
"administrative", and it is not: §§ 224(a) and 225(a) define their deductions by reference to amounts
**included on those statements**, so a payer who reports incorrectly removes the recipient's deduction.

## Exam focus

Know which statute governs which form, and that the three thresholds are now set differently — one
indexed general figure, a nonemployee figure defined by reference to it, a stated direct-sales figure,
and a two-part platform test.

Know that the § 6050W test is conjunctive. Expect a fact pattern where one limb is met and the other is
not, and the answer is that no form issues while the income remains fully taxable.

Know that § 6721 and § 6722 are separate penalties on the same omission, that correction within 30 days
or by 1 August reduces them, and that § 6724(a) waives them for reasonable cause not amounting to wilful
neglect.

And know the practical rule for a wrong form: request a correction, and failing that report the amount
shown and back out the error visibly.

## Check yourself

**1.** A platform settles $30,000 across 150 transactions for a seller. Must it file a Form 1099-K?

*Answer: no. IRC § 6050W(e) requires reporting only if the amount exceeds the dollar threshold **and**
the aggregate number of transactions exceeds 200. The dollar limb is met and the count limb is not, and
both are required. The seller's $30,000 remains fully taxable — the threshold governs the settlement
organization's filing duty, not the character of the receipts.*

**2.** A business pays a contractor $1,900 for services in 2026. Is a Form 1099-NEC required?

*Answer: no, on these facts. IRC § 6041A(a)(2) now requires reporting where the aggregate remuneration
equals or exceeds the dollar amount in effect for the calendar year under § 6041(a), and $1,900 is below
the 2026 figure. Note that the threshold is defined by reference rather than stated, so it will change
with § 6041(a) — and § 6041(h) indexes that amount for calendar years after 2026.*

**3.** A taxpayer receives a Form 1099-NEC overstating income by $8,000 and the payer refuses to correct
it. How should the return be prepared?

*Answer: report the amount shown and back out the $8,000 with a clear description, so the return
reconciles to the form on its face. A corrected form is the only fix that reaches the Service's matching
system, so it should be requested first; where that fails, reporting the lower figure without
explanation produces a matching notice on a return that is otherwise correct.*

**4.** A payer discovers in February that it failed to file twelve information returns due in January.
What reduces the exposure?

*Answer: speed and, if available, reasonable cause. IRC § 6721(b) applies reduced per-return amounts
where the failure is corrected on or before the 30th day after the required filing date, and a higher
but still reduced amount where corrected after that but on or before 1 August. Separately, IRC § 6724(a)
imposes no penalty at all where the failure is shown to be due to reasonable cause and not to wilful
neglect. The § 6722 payee statement penalty runs in parallel and is reduced on the same timetable.*
