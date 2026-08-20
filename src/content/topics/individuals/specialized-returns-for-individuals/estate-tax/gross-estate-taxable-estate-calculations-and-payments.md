---
title: "Gross estate, taxable estate (calculations and payments), unified credit, life insurance, and filing requirements"
code: "1.6.1.a"
part: 1
domain: "Specialized Returns for Individuals"
section: "Estate tax"
description: "Lifetime gifts do not shrink the exclusion. They are added back to the base, and the credit is applied once — a distinction that changes every answer built on it."
status: review
taxYear: 2026
lastReviewed: "2026-08-20"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 2001", title: "Imposition and rate of tax", url: "https://www.law.cornell.edu/uscode/text/26/2001" }
  - { type: IRC, ref: "§ 2010", title: "Unified credit against estate tax", url: "https://www.law.cornell.edu/uscode/text/26/2010" }
  - { type: IRC, ref: "§ 2031", title: "Definition of gross estate", url: "https://www.law.cornell.edu/uscode/text/26/2031" }
  - { type: IRC, ref: "§ 2032", title: "Alternate valuation", url: "https://www.law.cornell.edu/uscode/text/26/2032" }
  - { type: IRC, ref: "§ 2033", title: "Property in which the decedent had an interest", url: "https://www.law.cornell.edu/uscode/text/26/2033" }
  - { type: IRC, ref: "§ 2035", title: "Adjustments for certain gifts made within 3 years of decedent's death", url: "https://www.law.cornell.edu/uscode/text/26/2035" }
  - { type: IRC, ref: "§ 2042", title: "Proceeds of life insurance", url: "https://www.law.cornell.edu/uscode/text/26/2042" }
  - { type: IRC, ref: "§ 2051", title: "Definition of taxable estate", url: "https://www.law.cornell.edu/uscode/text/26/2051" }
  - { type: IRC, ref: "§ 2053", title: "Expenses, indebtedness, and taxes", url: "https://www.law.cornell.edu/uscode/text/26/2053" }
  - { type: IRC, ref: "§ 6018", title: "Estate tax returns", url: "https://www.law.cornell.edu/uscode/text/26/6018" }
  - { type: IRC, ref: "§ 6075", title: "Time for filing estate and gift tax returns", url: "https://www.law.cornell.edu/uscode/text/26/6075" }
  - { type: IRC, ref: "§ 6166", title: "Extension of time for payment of estate tax where estate consists largely of interest in closely held business", url: "https://www.law.cornell.edu/uscode/text/26/6166" }
forms: []
related: ["1.6.1.b", "1.6.1.c", "1.6.1.d", "1.6.1.e", "1.5.1.d", "1.6.2.c", "1.6.2.d"]
changelog:
  - { date: "2026-08-20", summary: "Initial draft. Sets out the estate tax computation from the gross estate under IRC §§ 2031 and 2033 through the taxable estate under §§ 2051 and 2053 to the tax under § 2001(b), with the unified credit in § 2010(c) applied as a credit rather than an exclusion from the base, the § 2032 alternate valuation election, the § 2035 three-year rule, life insurance under § 2042, and the filing threshold and dates in §§ 6018(a), 6075(a) and 6166." }
---

The estate tax computation is misunderstood in a specific and consequential way. People describe the
exclusion as an amount subtracted from the estate, and lifetime gifts as something that eats into it.
Neither is how the statute works. Lifetime gifts are *added* to the taxable estate to build the base;
the tax is computed on that whole base at the unified rates; and the exclusion arrives at the end as a
credit, worth the tax on the exclusion amount and nothing more. Getting this order wrong produces
answers that are close enough to look right and are not.

## The rule

**The gross estate is everything.** {fig:estate.gross_estate_definition} The inclusion sections that
follow — retained interests, powers, jointly held property, annuities, insurance — add things that are
not obviously the decedent's at death; § 2033 covers everything that plainly is.

**The taxable estate is what is left after deductions.** {fig:estate.taxable_estate_definition}

**Then the computation.** {fig:estate.tax_computation} The rate schedule is nominally graduated but
functionally flat at the top: {fig:estate.top_rate}

**The credit, not an exclusion.** {fig:estate.applicable_credit} And
{fig:estate.applicable_exclusion} For 2026 the basic exclusion amount is {fig:estate.basic_exclusion}

**Valuation may be moved once.** {fig:estate.alternate_valuation} Both conditions must hold, which is
why the election is unavailable to an estate that owes no tax — there is nothing for it to decrease.

**Two things reach back.** {fig:estate.three_year_rule} And {fig:estate.insurance_inclusion}

**Filing and payment.** {fig:estate.return_threshold} {fig:estate.return_due_date}
{fig:estate.closely_held_deferral}

## Current figures

| Item | Rule |
| --- | --- |
| Basic exclusion amount | {fig:estate.basic_exclusion} |
| Gross estate | {fig:estate.gross_estate_definition} |
| Taxable estate | {fig:estate.taxable_estate_definition} |
| Tax computation | {fig:estate.tax_computation} |
| Top rate | {fig:estate.top_rate} |
| Applicable credit amount | {fig:estate.applicable_credit} |
| Applicable exclusion amount | {fig:estate.applicable_exclusion} |
| Portability | {fig:estate.portability} |
| Alternate valuation | {fig:estate.alternate_valuation} |
| Three-year rule | {fig:estate.three_year_rule} |
| Life insurance | {fig:estate.insurance_inclusion} |
| Annual gift exclusion | {fig:estate.annual_exclusion} |
| Return threshold | {fig:estate.return_threshold} |
| Return due date | {fig:estate.return_due_date} |
| Closely held business deferral | {fig:estate.closely_held_deferral} |
| Generation-skipping exemption | {fig:estate.gst_exemption} |

## How it works in practice

The order of operations is the whole topic, and it runs in five steps.

**One: value the gross estate.** Everything the decedent owned at fair market value at death, plus the
statutory add-backs. Fair market value is not book value, not insured value and not what the family
agrees among themselves.

**Two: subtract the deductions.** Funeral and administration expenses, claims, mortgages, casualty
losses during administration, charitable transfers, and the marital deduction. That produces the taxable
estate.

**Three: add adjusted taxable gifts.** Post-1976 taxable gifts — gifts after the annual exclusion, not
gross gifts — that are not already in the gross estate. This is the step people replace with "reduce the
exclusion," and the substitution is what goes wrong.

**Four: compute the tentative tax on the total and subtract the gift tax that would have been payable.**
The subtraction prevents the same gifts being taxed twice, and it is computed at current rates under
§ 2001(g), not at the rates in force when the gifts were made.

**Five: subtract the applicable credit.** The credit is the tax on the applicable exclusion amount
(IRC § 2010(c)(1)). It is not a dollar-for-dollar reduction of the estate.

Steps three to five give the same answer as the shortcut "estate plus gifts less exclusion, taxed at 40
percent" *only* because the top bracket is flat and every taxable estate is inside it. The shortcut
breaks the moment a question involves a small estate, a state-level computation, or an exclusion that
has already been partly consumed.

**On payment.** The tax is due when the return is due — nine months (IRC § 6075(a)) — and an extension
of time to file is not an extension of time to pay. The § 6166 election is the main relief where the estate is illiquid,
and it is worth checking early, because the 35 percent test is measured against the adjusted gross
estate and can be affected by how expenses are claimed.

**On filing when no tax is due.** An estate below the threshold need not file, but a surviving spouse
who wants portability must have a timely return filed by the first estate — see 1.6.1.c. This is the
most common expensive omission in small estates, and it is a decision made by an executor who has been
correctly told no tax is owed.

<div class="scenario">
<h3>The gifts that did not shrink the exclusion</h3>

An unmarried woman gives her nephew $1,000,000 a year for four years and dies with a gross estate of
$8,000,000 and $300,000 of deductible expenses and claims. She made no other lifetime gifts.

Each gift is a taxable gift of $981,000 after the annual exclusion, so adjusted taxable gifts are
$3,924,000. The taxable estate is $7,700,000. The base for the tentative tax is $11,624,000, not
$8,000,000 and not $8,000,000 reduced by anything. The tentative tax on $11,624,000 is $345,800 plus 40
percent of $10,624,000, or $4,595,400. Against that stand the gift tax that would have been payable on
the four gifts and the applicable credit — the tax on the basic exclusion amount, which is larger than
the base here. No tax is due, and the reason no tax is due is that the credit exceeded the tax, not that
the estate was under a threshold.

</div>

<div class="scenario">
<h3>The election that was not available</h3>

An executor of an estate holding a concentrated stock position watches it fall by a third in the four
months after death and wants to elect alternate valuation. The estate is below the basic exclusion
amount and owes no estate tax.

The election is not available. IRC § 2032(c) permits it only where it decreases both the value of the
gross estate and the sum of the estate and generation-skipping taxes after credits. With no tax either
way, the second condition cannot be met. The consequence is a real one: the beneficiaries take a basis
under IRC § 1014 fixed by the date-of-death value, which is now above market. The election exists to
reduce tax, not to reset basis.

</div>

<div class="scenario">
<h3>The policy transferred too late</h3>

A man assigns a $2,000,000 policy on his own life to an irrevocable trust, giving up every incident of
ownership. He dies twenty-six months later.

The proceeds are in his gross estate. Section 2042 would not have reached them, because he held no
incident of ownership at death — but § 2035(a) pulls back a transfer made within the three-year period
ending at death where the property would have been included under § 2042 had the relinquished power been
retained. Had he lived another eleven months, the same transfer would have been outside the estate
entirely. Note that the three-year rule is narrow: it reaches transfers implicating §§ 2036, 2037, 2038
and 2042, not outright gifts of other property.

</div>

<div class="scenario">
<h3>The estate that had to file anyway</h3>

A widower dies with a gross estate of $2,400,000. His executor is told, correctly, that no estate tax is
due and no return is required under IRC § 6018(a).

The advice is right on its own terms and wrong overall. His late wife's estate had filed no return
either, so no deceased spousal unused exclusion amount was ever elected for her — and now his own estate
will not file, so nothing is preserved for anyone. Where the family expects the survivor's own estate to
grow, or where a second marriage is in prospect, the timely return that nobody was required to file is
the one that matters.

</div>

<div class="callout trap">

**Treating the exclusion as a deduction from the estate.** It is a credit under IRC § 2010(c) equal to
the tentative tax on the exclusion amount. Describing it as an amount "subtracted from the estate" gives
the right answer only because the top bracket is flat.

**Reducing the exclusion by lifetime gifts.** Adjusted taxable gifts are *added* to the base under
§ 2001(b)(1)(B). The double-counting is prevented by the subtraction in § 2001(b)(2), not by shrinking
the credit.

**Using gross gifts as adjusted taxable gifts.** The annual exclusion comes off first — adjusted taxable
gifts are taxable gifts within the meaning of § 2503.

**Assuming alternate valuation is available whenever values fall.** IRC § 2032(c) requires it to
decrease both the gross estate and the tax. An estate with no tax cannot elect it.

**Thinking a life insurance policy is outside the estate because someone else is the beneficiary.**
Section 2042(2) reaches proceeds receivable by anyone where the decedent held any incident of ownership
at death.

**Forgetting that an extension to file is not an extension to pay.** The tax is due nine months after
death under § 6075(a) whether or not the return is extended.

**Advising a small estate not to file without discussing portability.** The election is made on a timely
return, and the return is the only way to make it.

</div>

## How this has changed

The number that governs this topic has moved more than any other figure on the site. The regime it
replaced was {fig:estate.superseded_exclusion} So the exclusion is now
{fig:estate.basic_exclusion}, and it is a permanent figure indexed for decedents dying after 2026 rather
than a temporary one with a cliff at the end (IRC § 2010(c)(3)).

That has changed the shape of the advice more than the arithmetic. Under the scheduled reversion, a
great deal of planning was aimed at using exclusion before it disappeared. With the higher amount
permanent, that urgency is gone for all but the largest estates, and the centre of gravity has moved to
basis — because property in the gross estate takes a fair market value basis at death, while a lifetime
gift carries the donor's basis over. {fig:estate.basis_contrast} For a family well under the exclusion,
holding an appreciated asset until death is now usually better than giving it away, which is the
opposite of the advice that prevailed when the exclusion was small.

The structure itself is unchanged. Sections 2001, 2031, 2032, 2033, 2035, 2042, 2051 and 2053 have not
been amended in substance, and the unified rate schedule in § 2001(c) has stood since 2013.

## Exam focus

Expect a computation. Build it in the statutory order — gross estate, deductions, taxable estate, plus
adjusted taxable gifts, tentative tax, less gift tax payable, less applicable credit — because questions
are written to punish the shortcut. In particular, watch for a question where the gifts are given gross
and the annual exclusion has to be removed first.

Know that the credit is the tax on the exclusion amount and not the exclusion amount itself, know the
nine-month due date, and know that the return threshold is the basic exclusion amount for the year of
death, measured against the *gross* estate, before deductions.

The alternate valuation election is tested on its two conditions, and the § 2035 three-year rule is
tested on its narrowness — it reaches §§ 2036, 2037, 2038 and 2042 property, not gifts generally.

## Check yourself

**1.** An estate has a taxable estate of $4,000,000 and adjusted taxable gifts of $2,000,000. On what
amount is the tentative tax computed?

*Answer: $6,000,000. IRC § 2001(b)(1) computes the tentative tax on the sum of the taxable estate and
adjusted taxable gifts. The gifts are added to the base; they do not reduce the exclusion.*

**2.** A decedent's gross estate is valued at more than the basic exclusion amount, but deductions bring
the taxable estate below it. Is a return required?

*Answer: Yes. IRC § 6018(a)(1) measures the filing requirement against the *gross* estate at death, not
the taxable estate, so a return is required even though no tax may be due.*

**3.** An executor wants to elect alternate valuation for an estate that will owe no tax either way. May
he?

*Answer: No. IRC § 2032(c) permits the election only where it decreases both the value of the gross
estate and the sum of the estate and generation-skipping taxes after credits. Where no tax is payable,
the second condition fails.*

**4.** A decedent transferred a life insurance policy on her own life to her son 30 months before her
death, retaining nothing. Are the proceeds in her gross estate?

*Answer: Yes. IRC § 2035(a) includes property transferred within the 3-year period ending at death where
it would have been included under § 2042 had the interest been retained. A transfer more than three
years before death would have been outside the estate.*

**5.** When is the estate tax return due, and when is the tax due?

*Answer: Both 9 months after the date of death. IRC § 6075(a) sets the filing date, and the tax is
payable on the same date; an extension of time to file does not extend the time to pay.*
