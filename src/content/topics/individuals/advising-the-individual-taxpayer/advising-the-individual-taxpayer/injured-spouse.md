---
title: "Injured spouse"
code: "1.5.1.h"
part: 1
domain: "Advising the Individual Taxpayer"
section: "Advising the individual taxpayer"
description: "A refund allocation, not a liability relief. The claim is that the money taken was never the other spouse's to lose, and the two are constantly confused."
status: published
taxYear: 2026
lastReviewed: "2026-08-19"
reviewedBy: "Draft for N. O. review"
authorities:
  - { type: IRC, ref: "§ 6402", title: "Authority to make credits or refunds", url: "https://www.law.cornell.edu/uscode/text/26/6402" }
  - { type: IRC, ref: "§ 6013", title: "Joint returns of income tax by husband and wife", url: "https://www.law.cornell.edu/uscode/text/26/6013" }
  - { type: Pub, ref: "About Form 8379", title: "Injured Spouse Allocation", url: "https://www.irs.gov/forms-pubs/about-form-8379" }
  - { type: Pub, ref: "IRS Topic no. 203", title: "Reduced refund", url: "https://www.irs.gov/refunds/reduced-refund" }
forms: []
related: ["1.5.1.i", "1.5.1.m", "1.1.1.e", "1.5.1.n", "1.5.1.f"]
changelog:
  - { date: "2026-08-19", summary: "Initial draft. Sets out injured spouse allocation as a claim on a refund rather than relief from liability, the four IRC § 6402(c)–(f) offsets that trigger it, the distinction from the § 6402(a) internal credit, the Bureau of the Fiscal Service's role in notification, and the community property complication." }
  - { date: "2026-08-25", summary: "Added a plain-language summary, glossary marks, and a fourth typed scenario (comprehension layer)." }
---

<div class="plain-terms">
An injured spouse is someone who filed a joint tax return, but part of the couple's refund is being taken
to pay a debt that belongs only to the other spouse. Common examples are an old student loan or unpaid
child support from before the marriage. This does not apply to a debt the couple owes together, such as
tax due on a joint return from an earlier year. It affects a married couple who filed jointly and expected
a refund, only to have it reduced or wiped out by someone else's separate debt. It decides how much of
that refund the uninvolved spouse can still get back, and how to ask for it.
</div>

An injured spouse has done nothing wrong and owes nothing. Their money has been taken to pay somebody
else's debt — their spouse's — because the two filed one return and the refund arrived as one cheque.
The claim is arithmetic: this portion of the overpayment was mine. It is not a plea for relief, and it
has nothing to do with the innocent spouse provisions in § 6015, which do exactly the opposite job.

## The rule

**What an injured spouse is.** {fig:injured.definition}

**Why it happens.** A joint return produces one overpayment. Section 6402 lets that overpayment be
reduced to satisfy debts of "the person who made the overpayment", and on a joint return the Service
treats both spouses as having made it. The result is that one spouse's withholding and credits pay the
other's separate debt.

**Which debts.** {fig:injured.offsets}

**One thing that is not this.** {fig:injured.internal_offset} A couple whose refund is applied to their
own joint balance from an earlier year has no injured spouse claim, because the liability belongs to
both of them.

**Who tells the taxpayer.** {fig:injured.notice}

**Joint and several liability is the backdrop.** Where a joint return is made, the tax is computed on
aggregate income and the liability is joint and several (IRC § 6013(d)(3)). That is what makes both
spouses' refunds available to either spouse's creditors, and it is why the only remedy on the refund
side is an allocation rather than a defence.

**The allocation.** Each spouse's share of the joint overpayment is built from their own income, their
own withholding and estimated payments, their own share of credits, and their own share of deductions.
Refundable credits are allocated according to the facts that generated them — the earned income credit
follows the earned income and the qualifying children, and the child tax credit follows the children
claimed.

**Community property changes the arithmetic.** In a community property state, income and withholding
attributable to community earnings are generally split between the spouses regardless of who earned
them, so an injured spouse in such a state usually recovers less than the same facts would produce
elsewhere. The Service applies the relevant state's community property law to the allocation.

## Current figures

| Item | Amount |
| --- | --- |
| Injured spouse | {fig:injured.definition} |
| Offsets that trigger it | {fig:injured.offsets} |
| Not an injured spouse claim | {fig:injured.internal_offset} |
| Notification | {fig:injured.notice} |

## How it works in practice

**First establish that the debt is the other spouse's alone.** A pre-marital student loan, child support
for a child of an earlier relationship, a state tax debt from a year before the marriage — these are the
classic cases. A joint federal tax debt is not.

**Then decide when to file.** Form 8379 can be filed with the original return where the couple already
knows an offset is coming, which avoids the offset in the first place and is much faster, or afterwards
once the offset has happened. Filing it with the return is nearly always the better course when the debt
is known.

**Then do the allocation honestly.** Each item on the return is allocated between the spouses. The
temptation is to allocate everything favourable to the injured spouse; the Service will recompute it,
and an allocation that gives the injured spouse credits generated entirely by the other spouse's
circumstances will not survive.

**Then set expectations about time.** These claims are worked manually and take months. A client who
needs the money quickly should be told that filing the allocation with the return is the only way to
avoid the delay.

<div class="scenario" data-type="baseline">
<h3>The pre-marital debt</h3>

Ama and Yusuf file jointly for 2026. Ama earned $58,000 with $6,400 withheld; Yusuf earned $9,000 with
$300 withheld. Their joint refund is $3,900. Before they married, Yusuf defaulted on a federally
guaranteed student loan, and the whole refund is offset.

Ama is an injured spouse. Almost all of the overpayment is attributable to her earnings and her
withholding, and none of the debt is hers. Form 8379 allocates the income, the withholding and the
credits between them, and the Service recomputes what her share of the overpayment would have been. The
offset stands as to Yusuf's share; Ama's share is refunded to her.
</div>

<div class="scenario" data-type="fails">
<h3>The offset that is not one</h3>

The same couple's 2027 refund is applied to a balance due on their own joint 2024 return.

There is no injured spouse claim. Section 6402(a) permits the Service to credit an overpayment against
any liability of the person who made it, and a joint return subjects the 2024 liability to
{gloss:joint-and-several-liability} under § 6013(d)(3) — it is Ama's debt as much as Yusuf's. If Ama wants to be relieved of the 2024
liability itself, the question is whether she qualifies under § 6015, which is a different provision
with different conditions and is covered at 1.5.1.i.
</div>

<div class="scenario" data-type="interaction">
<h3>The same facts in a community property state</h3>

Take the first scenario and move the couple to a {gloss:community-property} state.

Ama's wages are community income, so half of them — and half the withholding on them — are treated as
Yusuf's for the allocation. Her recoverable share of the overpayment falls sharply, and on some fact
patterns to nothing. The claim is still worth making, because the allocation depends on the particular
state's rules and on which items are separate property, but the answer is materially different from the
same facts in a common law state, and a client should be told so before they wait months for it.
</div>

<div class="scenario" data-type="procedural">
<h3>Filing after the offset already happened</h3>

Kwame learns of the offset only when his refund arrives $2,900 short, with a notice from the Bureau of
the Fiscal Service. He never filed Form 8379 with his return, not knowing the offset was coming.

He can still file Form 8379 on its own, attaching copies of the joint return, but the case is now worked
manually rather than alongside a return, and it typically takes months rather than weeks. Nothing about
the delay shortens his ability to claim it: the request is governed by the ordinary refund
{gloss:statute-of-limitations} in § 6511, not by a shorter deadline of its own. Filing it with the
original return next time would avoid the wait entirely.
</div>

<div class="callout trap">

**Injured is not innocent.** An injured spouse claims a share of a refund; an innocent spouse seeks
relief from a liability. Different form, different section, different question.

**A joint federal tax debt is not an injured spouse case.** Both spouses owe it under § 6013(d)(3).

**The IRS does not run the offset.** The Bureau of the Fiscal Service does, under the Treasury Offset
Program, and it sends the notice. The IRS is not told the details.

**File it with the return where the debt is known.** It prevents the offset rather than reversing it,
and it is far quicker.

**Refundable credits follow their facts.** The earned income credit follows the earned income and the
children; allocating it to whichever spouse is convenient will be corrected.

**Community property states change the answer** by splitting community income and withholding between
the spouses.

**There is no two-year limit like § 6015's.** The claim is governed by the ordinary refund claim rules,
so the § 6511 period is what matters.

**A signature from the debtor spouse is not required.** The injured spouse signs their own allocation.
</div>

## How this has changed

Nothing legislative. Sections 6402 and 6013(d)(3) have stood in their present form for many years, and
Pub. L. 119-21 did not touch either.

What does change is the list of debts that can reach a refund, and it has grown by accretion rather than
by any single reform. Section 6402 began with federal tax, acquired past-due child support in subsection
(c), federal agency debts in (d), state income tax obligations in (e), and covered state unemployment
compensation debts in (f). Each addition widened the circumstances in which one spouse's refund can be
taken for the other's debt, and therefore the population of potential injured spouses. Any statement of
"what can offset a refund" should be checked against the current subsections rather than remembered.

The other practical change is administrative and worth knowing for client management: the IRS states at
Topic 203 that the details of an offset are not provided to it, and directs taxpayers to the Bureau of
the Fiscal Service unless the refund figure on the notice differs from the return. A preparer who calls
the IRS about an offset will not get an answer, and the client's time is better spent on the Bureau's
line.

## Exam focus

The distinction from innocent spouse relief is the question. Injured spouse: the refund was taken for
the other spouse's separate debt, and the remedy is an allocation on Form 8379. Innocent spouse: there
is a liability and the taxpayer wants off it, under § 6015 on Form 8857.

Know the four categories of debt in § 6402(c) to (f), and that a joint federal tax liability is outside
the concept entirely because it belongs to both spouses.

Know that the form may be filed with the return or afterwards, that the Bureau of the Fiscal Service
administers the offset and sends the notice, and that community property law can substantially reduce
what an injured spouse recovers.

## Check yourself

**1.** A couple's joint refund is taken to pay one spouse's pre-marital defaulted federal student loan.
What is the remedy?

*Answer: An injured spouse allocation on Form 8379. The debt is a past-due legally enforceable debt owed
to a federal agency within IRC § 6402(d), and the non-debtor spouse claims the portion of the joint
overpayment attributable to their own income, withholding and credits.*

**2.** The same couple's refund is instead applied to their own joint balance from a prior year. Does
Form 8379 help?

*Answer: No. IRC § 6402(a) credits an overpayment against a liability of the person who made it, and a
joint return makes that liability joint and several under § 6013(d)(3). The debt is the claimant's own,
so there is no injured spouse claim — relief, if any, would have to come under § 6015.*

**3.** Who notifies the taxpayer of an offset, and who should they contact?

*Answer: The Bureau of the Fiscal Service, which administers the Treasury Offset Program, sends a notice
showing the original refund, the offset and the agency paid. The details are not provided to the IRS, so
the taxpayer should contact the Bureau unless the refund amount on the notice differs from the amount on
the return.*

**4.** Why might an injured spouse in a community property state recover less?

*Answer: Because community income and the withholding on it are generally treated as belonging half to
each spouse under state law, which the Service applies to the allocation. A larger share of the
overpayment is therefore attributable to the debtor spouse than the same facts would produce in a common
law state.*

**5.** When is the best time to file the allocation?

*Answer: With the original return, where the couple already knows an offset is likely. That prevents the
offset rather than reversing it and avoids the months a post-offset claim takes to work.*

**6. A wife wants to be relieved of a deficiency assessed on a prior joint return, all of it attributable to her husband's unreported income. Which route applies?**
(A) An injured spouse allocation on Form 8379 (B) A request for relief from joint and several liability under § 6015 on Form 8857 (C) Either form, at her election (D) Form 8379 first, then Form 8857 if it is denied
*Answer: B. Relief under § 6015 on Form 8857 is relief from a liability, which is what she needs; an injured spouse claim under § 6402 allocates a refund taken for the other spouse's separate debt and does nothing about a liability she owes under § 6013(d)(3).*

**7. A joint refund was offset in March 2024 for the husband's pre-marital debt. The wife never filed Form 8379 and files it alone in September 2026. Is the claim in time?**
(A) No; a two-year deadline runs from the offset, as under § 6015 (B) Yes, if it falls within the ordinary refund claim period under § 6511 (C) No; the allocation can only be filed with the original return (D) Yes, but only if the husband also signs it
*Answer: B. The claim is governed by the ordinary refund claim rules in § 6511: an injured spouse allocation has no two-year limit of its own like § 6015's, it may be filed on its own after the offset, and the debtor spouse's signature is not required.*

**8. A couple's joint refund is taken for the wife's unpaid state income tax from a year before the marriage. Is the husband an injured spouse?**
(A) Yes; a past-due state income tax obligation is one of the offsets that trigger the allocation (B) No; only debts to federal agencies can offset a federal refund (C) No; a state debt is collected by the state, not through the refund (D) Yes, but only in a community property state
*Answer: A. IRC § 6402(e) authorises the offset of a refund for a past-due state income tax obligation, one of the four categories in § 6402(c) to (f), and the debt is the wife's alone, so his share of the overpayment is recoverable on Form 8379.*
