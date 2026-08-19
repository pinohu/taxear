---
title: "Tax treatment of forgiveness of debt"
code: "1.2.1.f"
part: 1
domain: "Income and Assets"
section: "Income"
description: "Forgiven debt is income unless a named exclusion applies, and two of the exclusions clients relied on have just closed. Recourse and nonrecourse part company entirely."
status: review
taxYear: 2026
lastReviewed: "2026-08-19"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 61", title: "Gross income defined", url: "https://www.law.cornell.edu/uscode/text/26/61" }
  - { type: IRC, ref: "§ 108", title: "Income from discharge of indebtedness", url: "https://www.law.cornell.edu/uscode/text/26/108" }
  - { type: IRC, ref: "§ 1001", title: "Determination of amount of and recognition of gain or loss", url: "https://www.law.cornell.edu/uscode/text/26/1001" }
  - { type: IRC, ref: "§ 1017", title: "Discharge of indebtedness", url: "https://www.law.cornell.edu/uscode/text/26/1017" }
  - { type: IRC, ref: "§ 6041", title: "Information at source", url: "https://www.law.cornell.edu/uscode/text/26/6041" }
  - { type: IRC, ref: "§ 6050P", title: "Returns relating to the cancellation of indebtedness by certain entities", url: "https://www.law.cornell.edu/uscode/text/26/6050P" }
  - { type: Reg, ref: "§ 1.1001-2", title: "Discharge of liabilities", url: "https://www.law.cornell.edu/cfr/text/26/1.1001-2" }
  - { type: Statute, ref: "Pub. L. 119-21", title: "An Act to provide for reconciliation, title VII" }
forms: []
related: ["1.2.1.e", "1.2.1.a", "1.1.1.f", "1.2.1.h", "1.2.1.g", "1.2.1.n"]
changelog:
  - { date: "2026-08-19", summary: "Initial draft. Records the expiry of the IRC § 108(a)(1)(E) principal residence exclusion for discharges after 2025 and the rewrite of IRC § 108(f)(5) by Pub. L. 119-21 § 70119, which withdrew the broad 2021-2025 student loan discharge exclusion for discharges after 31 December 2025." }
---

Debt that goes away is income. Discharge of indebtedness is enumerated in the definition of gross
income (IRC § 61(a)(11)), and everything a taxpayer can do about it is an exception in a named section.
For 2026 two of the exceptions clients had come to rely on have closed within months of each other,
which makes this a topic where advice given eighteen months ago is now positively harmful.

## The rule

**Five exclusions, in a fixed order of precedence.** Gross income does not include discharge income
where the discharge occurs in a title 11 case, occurs while the taxpayer is insolvent, or is of
qualified farm indebtedness, qualified real property business indebtedness for a taxpayer other than a
C corporation, or qualified principal residence indebtedness — the last reaching only a discharge
before 1 January 2026, or one under an arrangement entered into and evidenced in writing before that
date (IRC § 108(a)(1)(A)–(E)). The title 11 exclusion displaces the other four (IRC § 108(a)(2)(A)),
and insolvency displaces the farm and real property business exclusions (IRC § 108(a)(2)(B)).

**Insolvency is measured, and it caps the exclusion.** "Insolvent" means the excess of liabilities over
the fair market value of assets, determined **immediately before the discharge** (IRC § 108(d)(3)), and
the amount excluded cannot exceed the amount by which the taxpayer is insolvent (IRC § 108(a)(3)). A
taxpayer who is insolvent by less than the discharge therefore has income for the difference.

**Exclusion is deferral, not forgiveness.** An amount excluded under the title 11, insolvency or
qualified farm exclusions reduces the taxpayer's tax attributes in a statutory order (IRC § 108(b)(1),
(2)), one dollar of attribute for each dollar excluded — except that the three credit carryovers are
reduced at 33⅓ cents per dollar (IRC § 108(b)(3)(A), (B)). The taxpayer may elect to apply the
reduction first against the basis of depreciable property, capped at the aggregate adjusted bases held
at the start of the following year, in which case the ordinary order does not apply (IRC § 108(b)(5)).
Basis reductions are made under § 1017.

**Recourse and nonrecourse are different transactions.** On a disposition, the amount realized includes
liabilities from which the transferor is discharged (Reg. § 1.1001-2(a)(1)) — but where the liability
is **recourse**, the amount realized does not include amounts that are discharge of indebtedness income
(Reg. § 1.1001-2(a)(2)). So a recourse foreclosure splits into two computations: gain or loss measured
against the property's fair market value, and separately discharge income for any deficiency forgiven.
A **nonrecourse** foreclosure does not split: the sale or other disposition of property securing a
nonrecourse liability discharges the transferor from that liability (Reg. § 1.1001-2(a)(4)(i)), so the
entire outstanding balance is amount realized and there is no discharge income at all.

**Student loan relief has narrowed sharply.** Discharge of a student loan under a provision requiring
work for a period in certain professions for a broad class of employers remains excluded (IRC
§ 108(f)(1)). Beyond that, IRC § 108(f)(5) now reaches only discharges on death or total and permanent
disability, and requires the taxpayer's social security number on the return (IRC § 108(f)(5)(A),
(C)). Pub. L. 119-21 § 70119(c) applies the change to **discharges after 31 December 2025**.

**Reporting is unchanged and low.** An applicable entity discharging indebtedness must file an
information return, with an exception only for a discharge below the small figure in the table below
(IRC § 6050P(a), (b)).

## Current figures

| Item | 2026 |
| --- | --- |
| Statutory exclusions | {fig:cod.exclusions} |
| Insolvency measure | {fig:cod.insolvency_measure} |
| Attribute reduction | {fig:cod.attribute_order} |
| Student loan discharge exclusion | {fig:studentloan.discharge_exclusion} |
| Form 1099-C reporting exception | {fig:cod.1099c_threshold} |

## How it works in practice

Work the questions in the order the statute does. Is there discharge income at all — which for a
secured debt means asking recourse or nonrecourse before anything else? If so, does an exclusion apply,
and which one takes precedence? If an exclusion applies, what attributes are reduced?

The recourse question is the one clients cannot answer and the loan documents can. It is also the one
that changes the character of the tax: a recourse foreclosure can produce capital gain *and* ordinary
discharge income from a single event, while a nonrecourse foreclosure produces only gain or loss.
Neither outcome is intuitively better — a nonrecourse disposition can generate a large gain on a
property the client thinks they lost.

Insolvency is the exclusion most often available and most often mis-measured. It is a balance-sheet
test taken immediately before the discharge, and it includes assets clients do not think of as assets —
retirement accounts, cash values, and property that is exempt from creditors. Building the schedule is
the work; the answer follows from it.

Say plainly that the insolvency and title 11 exclusions cost something later. Attribute reduction takes
away losses and basis the client would otherwise have used, so the exclusion converts a present tax
into a future one. Where the taxpayer has substantial depreciable property, the § 108(b)(5) election is
worth modelling rather than defaulting past.

Finally, check the date. A discharge of home mortgage debt in 2026 is outside § 108(a)(1)(E) unless the
written arrangement predates the year, and a student loan discharge in 2026 is outside § 108(f)(5)
unless it is on death or total and permanent disability. Both were available on very different terms in
2025, and clients will have been told so.

<div class="scenario">
<h3>Two computations from one foreclosure</h3>

Elena's rental property, bought for $290,000 and now with an adjusted basis of $240,000, secures a
**recourse** mortgage of $310,000. The lender forecloses when the property is worth $260,000 and
forgives the $50,000 shortfall.

Two separate items arise. Under Reg. § 1.1001-2(a)(2), because the liability is recourse, the amount
realized excludes amounts that are discharge income — so the disposition is measured at the property's
$260,000 fair market value against her $240,000 basis, giving $20,000 of gain. The $50,000 the lender
forgave is discharge of indebtedness income under IRC § 61(a)(11).

If she is insolvent by $30,000 immediately before the discharge, IRC § 108(a)(1)(B) and (a)(3) exclude
$30,000 of the $50,000 and $20,000 remains taxable. The excluded $30,000 then reduces her attributes in
the § 108(b)(2) order — and because the property is gone, that reduction will fall on losses she was
counting on rather than on its basis.
</div>

<div class="scenario">
<h3>Nonrecourse, and no discharge income at all</h3>

Marcus's home secures a **nonrecourse** loan with a balance of $340,000 and an adjusted basis of
$255,000. The lender takes the property when it is worth $300,000.

There is no discharge of indebtedness income. Under Reg. § 1.1001-2(a)(4)(i) the disposition of
property securing a nonrecourse liability discharges the transferor from that liability, and Reg.
§ 1.1001-2(a)(1) puts the full amount of the liability into the amount realized. So his amount realized
is $340,000, not the $300,000 the property was worth.

Against a $255,000 basis that is $85,000 of gain — on a house he lost. Whether any of it is sheltered
turns on the § 121 principal residence exclusion, not on § 108, and the IRC § 108(a)(1)(E) exclusion
would not have helped in any event because there is no discharge income for it to exclude.
</div>

<div class="scenario">
<h3>The loan forgiveness that arrived a year late</h3>

Priya reached the end of an income-driven repayment plan and had $62,000 of federal student loan
balance discharged in March 2026. A colleague whose balance was discharged in late 2025 paid no tax on
it, and she expects the same.

She will not get it. The broad exclusion her colleague used was IRC § 108(f)(5) as it stood for
discharges in 2021 through 2025; Pub. L. 119-21 amended the paragraph generally, and § 70119(c) applies
the amendment to discharges after 31 December 2025. What remains is the death or total and permanent
disability rule, which does not describe her, and the § 108(f)(1) work-in-profession exclusion, which
her plan is not.

So the $62,000 is gross income. Her remaining routes are the general § 108 exclusions — insolvency is
the realistic one, and it is measured immediately before the discharge on a full balance sheet. That is
a schedule worth preparing carefully, because on these numbers it is the whole of her relief.
</div>

<div class="callout trap">
<p class="callout-label">Traps</p>

- **Nonrecourse debt produces no discharge income** (Reg. § 1.1001-2(a)(4)(i)) — but it can produce a
  large gain, because the **full** liability is amount realized.
- **Recourse foreclosure is two computations**, gain measured at fair market value and discharge income
  separately (Reg. § 1.1001-2(a)(2)).
- **The principal residence exclusion has run out.** IRC § 108(a)(1)(E) reaches discharges before
  1 January 2026, or under a written arrangement entered into before that date.
- **The broad student loan exclusion is gone.** IRC § 108(f)(5) is back to death and total and permanent
  disability for discharges after 31 December 2025, and requires a social security number.
- **Insolvency is capped at the amount of insolvency** (IRC § 108(a)(3)), so partial insolvency leaves
  partial income.
- **Insolvency is measured immediately before the discharge** (IRC § 108(d)(3)) and counts assets
  clients overlook, including retirement accounts and creditor-exempt property.
- **Title 11 beats everything** (IRC § 108(a)(2)(A)); insolvency beats farm and real property business
  (IRC § 108(a)(2)(B)).
- **Exclusion is deferral.** Attribute reduction under IRC § 108(b)(2) takes losses, credits and basis.
- **Credit carryovers are reduced at 33⅓ cents per dollar**, not dollar for dollar (IRC § 108(b)(3)(B)).
- **A Form 1099-C is not proof of income**, and its absence is not proof of none — the reporting
  exception reaches only discharges below a low figure (IRC § 6050P(b)).

</div>

## How this has changed

**Two exclusions closed for 2026, and they closed independently.**

IRC § 108(a)(1)(E) was last extended by Pub. L. 116-260 § 114(a), which substituted 1 January 2026 for
1 January 2021 in both places. It was not extended again. An ordinary 2026 discharge of home mortgage
debt is therefore includible unless the title 11 or insolvency exclusion reaches it.

IRC § 108(f)(5) has now been rewritten twice in five years, and the second rewrite undoes the first.
Pub. L. 117-2 § 9675 replaced the death-and-disability rule with a broad exclusion for **any** student
loan discharge in 2021 through 2025. Pub. L. 119-21 § 70119 amended the paragraph generally, restoring
the death and total and permanent disability rule and adding a social security number requirement, for
discharges after 31 December 2025. The sequence matters for reading older material: a source written
between 2021 and 2025 describes a rule that has been withdrawn, and a source written before 2021
describes, almost exactly, the rule that is back.

**One figure did not move.** Pub. L. 119-21 § 70433 more than tripled the general information reporting
threshold in IRC § 6041(a) and indexed it, and made parallel changes elsewhere — but it did not touch
IRC § 6050P(b), which still excepts only a discharge below its own much smaller figure, unamended since
1999. So a client may now receive a Form 1099-C for an amount too small to generate a Form 1099-MISC.
Assuming a single uniform reporting threshold across 2026 is a mistake.

## Exam focus

The first question is always recourse or nonrecourse, and the examinable consequence is that
nonrecourse produces no discharge income while putting the whole liability into amount realized. Expect
facts where the property's value differs from the debt and the answer turns on which regime applies.

Know the five exclusions and the two precedence rules, and know that insolvency is capped at the amount
of insolvency measured immediately before the discharge.

Know that exclusion triggers attribute reduction, the order of the attributes, and the 33⅓ cent rate
for credit carryovers.

For 2026, expect the two closures to be tested as timing questions — a discharge either side of
31 December 2025 — rather than as questions about the exclusions themselves.

## Check yourself

**1.** A taxpayer's property secures a nonrecourse debt of $180,000 and has an adjusted basis of
$120,000. The lender forecloses when the property is worth $150,000. What are the consequences?

*Answer: $60,000 of gain and no discharge of indebtedness income. Reg. § 1.1001-2(a)(4)(i) treats the
disposition of property securing a nonrecourse liability as discharging the transferor from it, and
Reg. § 1.1001-2(a)(1) includes the full liability in the amount realized — so $180,000 less the
$120,000 basis. The property's $150,000 value is irrelevant to the computation.*

**2.** A taxpayer with liabilities of $400,000 and assets worth $370,000 immediately before a discharge
has $50,000 of debt forgiven outside bankruptcy. How much is excluded?

*Answer: $30,000. IRC § 108(d)(3) measures insolvency as the excess of liabilities over the fair market
value of assets immediately before the discharge, which is $30,000, and IRC § 108(a)(3) caps the
exclusion at that amount. The remaining $20,000 is includible, and the excluded $30,000 reduces tax
attributes under IRC § 108(b)(2).*

**3.** A federal student loan balance is forgiven in February 2026 at the end of an income-driven
repayment plan. Is it excluded?

*Answer: no. The broad exclusion for any student loan discharge applied to discharges in 2021 through
2025; Pub. L. 119-21 § 70119 amended IRC § 108(f)(5) generally, and § 70119(c) applies the amendment to
discharges after 31 December 2025. What remains is death or total and permanent disability under
§ 108(f)(5), and work-in-profession forgiveness under § 108(f)(1). Neither reaches an income-driven
repayment discharge, so the general § 108(a) exclusions are the only route.*

**4.** A taxpayer excludes $90,000 under the insolvency exclusion and holds a general business credit
carryover. By how much is that carryover reduced?

*Answer: by 33⅓ cents for each dollar excluded that reaches it. IRC § 108(b)(3)(A) sets the general rate
at a dollar per dollar, but § 108(b)(3)(B) applies 33⅓ cents per dollar to the reductions in
subparagraphs (B), (C) and (G) of § 108(b)(2) — the general business credit, minimum tax credit and
foreign tax credit carryovers. The order in § 108(b)(2) still governs which attributes are reached
first, net operating losses coming before the credit.*
