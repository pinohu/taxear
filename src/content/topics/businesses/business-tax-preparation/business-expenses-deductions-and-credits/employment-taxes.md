---
title: "Employment taxes"
code: "2.2.2.j"
part: 2
domain: "Business Tax Preparation"
section: "Business expenses, deductions and credits"
description: "Only the social security half of FICA stops at a wage base, the employer never matches the additional Medicare tax, and the trust fund penalty is personal."
status: published
taxYear: 2026
lastReviewed: "2026-08-21"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 3101", title: "Rate of tax on employees", url: "https://www.law.cornell.edu/uscode/text/26/3101" }
  - { type: IRC, ref: "§ 3111", title: "Rate of tax on employers", url: "https://www.law.cornell.edu/uscode/text/26/3111" }
  - { type: IRC, ref: "§ 3121", title: "Definitions — wages and employment", url: "https://www.law.cornell.edu/uscode/text/26/3121" }
  - { type: IRC, ref: "§ 3301", title: "Rate of tax — federal unemployment", url: "https://www.law.cornell.edu/uscode/text/26/3301" }
  - { type: IRC, ref: "§ 3302", title: "Credits against tax", url: "https://www.law.cornell.edu/uscode/text/26/3302" }
  - { type: IRC, ref: "§ 3306", title: "Definitions — federal unemployment", url: "https://www.law.cornell.edu/uscode/text/26/3306" }
  - { type: IRC, ref: "§ 3402", title: "Income tax collected at source", url: "https://www.law.cornell.edu/uscode/text/26/3402" }
  - { type: IRC, ref: "§ 6672", title: "Failure to collect and pay over tax", url: "https://www.law.cornell.edu/uscode/text/26/6672" }
  - { type: IRC, ref: "§ 275", title: "Certain taxes", url: "https://www.law.cornell.edu/uscode/text/26/275" }
forms: []
related: ["2.2.2.a", "2.2.2.i", "2.1.1.k", "2.2.2.h", "2.2.1.a", "2.2.5.b", "2.2.5.k"]
changelog:
  - { date: "2026-08-21", summary: "Initial draft. Sets out the IRC § 3101 and § 3111 FICA rates on employee and employer, the IRC § 3101(b)(2) additional hospital insurance tax that the employer does not match, the IRC § 3301 FUTA rate with the IRC § 3306(b)(1) wage base and successor rule and the IRC § 3302 credit structure with its 90 percent cap and credit reduction, and the IRC § 6672 penalty on a responsible person. Notes that only the employer's share is deductible under IRC § 164 and IRC § 275(a)(1)." }
  - { date: "2026-08-25", summary: "Added a plain-language summary, glossary marks, and two typed scenarios." }
---

<div class="plain-terms">
When a business has employees, it deals with several payroll taxes at once, and they do not work
the same way. Some come out of the employee's pay. Some are the employer's own cost on top of
wages. Some stop once wages hit a yearly cap; others never stop. This page sorts out which is
which. It affects any business with employees. It does not affect a sole owner with no staff, who
pays self-employment tax instead. It decides how much of each tax is owed, who is personally on
the hook if the money never reaches the government, and what a business can and cannot deduct.
</div>

Three separate taxes travel together on a payroll and behave differently. One is matched and
capped, one is matched and uncapped, one is not matched at all, and a fourth amount on the same
cheque is not the employer's tax in any sense. Keeping them apart is the whole of the topic.

## The rule

**FICA on the employee.** {fig:emp.employee_rates} (IRC § 3101(a), (b)(1)). The social security
half stops at {fig:se.wage_base}; the hospital insurance half does not.

**FICA on the employer.** {fig:emp.employer_rates} (IRC § 3111(a), (b)). Same rates, same base,
imposed separately.

**The additional tax the employer does not match.** {fig:emp.additional_medicare}
(IRC § 3101(b)(2)).

**Federal unemployment tax.** {fig:emp.futa_rate} (IRC § 3301) on
{fig:emp.futa_wage_base} (IRC § 3306(b)(1)), with {fig:emp.futa_successor}. Against it,
{fig:emp.futa_credit} (IRC § 3302(a), (b), (c)(1)) — but {fig:emp.futa_credit_reduction}
(IRC § 3302(c)(2)).

**Withheld income tax.** IRC § 3402(a) requires every employer making payment of wages to deduct
and withhold, and the amount is the employee's tax throughout.

**Deductibility.** Only the employer's own share is deductible; {fig:tax.never_deductible}
(IRC § 275(a)(1)).

**And a personal liability.** {fig:emp.trust_fund_penalty} (IRC § 6672(a)).

## Current figures

| Item | Rule | Authority |
| --- | --- | --- |
| Employee FICA | {fig:emp.employee_rates} | IRC § 3101(a), (b)(1) |
| Employer FICA | {fig:emp.employer_rates} | IRC § 3111(a), (b) |
| Social security wage base, 2026 | {fig:se.wage_base} | IRC § 3121(a)(1) |
| Additional hospital insurance tax | {fig:emp.additional_medicare} | IRC § 3101(b)(2) |
| FUTA rate | {fig:emp.futa_rate} | IRC § 3301 |
| FUTA wage base | {fig:emp.futa_wage_base} | IRC § 3306(b)(1) |
| Successor employer | {fig:emp.futa_successor} | IRC § 3306(b)(1) |
| FUTA credits | {fig:emp.futa_credit} | IRC § 3302(a), (b), (c)(1) |
| Credit reduction states | {fig:emp.futa_credit_reduction} | IRC § 3302(c)(2) |
| What is not deductible | {fig:tax.never_deductible} | IRC § 275(a)(1) |
| Trust fund recovery penalty | {fig:emp.trust_fund_penalty} | IRC § 6672(a) |
| Statutory employees | {fig:comp.statutory_employee} | IRC § 3121(d)(3) |
| Household employees | {fig:household.fica_threshold} | IRC § 3121(x) |

## How it works in practice

**Four amounts, four different characters.** On one payroll an employer handles the employee's
withheld income tax, the employee's FICA, its own FICA, and FUTA. The first two are the employee's
money held in trust; the second two are the employer's own liabilities. That distinction decides
the deduction, decides who is liable if the money is not remitted, and decides how a question
about "employment taxes paid" should be answered.

**Only one of the FICA components has a ceiling.**
{fig:emp.employee_rates} (IRC § 3101). IRC § 3121(a)(1) excludes from wages the remuneration paid
above the contribution and benefit base, but only for the old-age, survivors and disability
insurance tax — {fig:se.wage_base} for 2026. The hospital insurance tax has no base and runs on
every dollar of wages.

**The additional hospital insurance tax is the employee's alone.**
{fig:emp.additional_medicare} (IRC § 3101(b)(2)). Three features distinguish it from everything
else on the payroll. It is imposed on the employee only, and IRC § 3111 has no counterpart. Its
thresholds depend on filing status, which an employer does not know, so the employer withholds
once wages from that employer alone exceed the single threshold and any shortfall or excess is
settled on the employee's own return. And the thresholds have never been indexed.

**FUTA looks like a six percent tax and is not.**
{fig:emp.futa_rate} (IRC § 3301) applies to {fig:emp.futa_wage_base} (IRC § 3306(b)(1)) — a base
that has stood at the same figure for decades and is not indexed. Against the tax,
{fig:emp.futa_credit} (IRC § 3302(a), (b), (c)(1)), so an employer that has paid its state
contributions on time in a state with no outstanding federal advances pays a small net rate. But
{fig:emp.futa_credit_reduction} (IRC § 3302(c)(2)): in a credit reduction state the net cost rises,
and it rises retrospectively for the whole year because the reduction is determined by the
position on 10 November.

**The successor rule prevents a restart.** {fig:emp.futa_successor}
(IRC § 3306(b)(1)). An employer that buys a business and keeps the staff does not get a fresh wage
base for each of them. The same principle applies to the social security base under
IRC § 3121(a)(1) for a successor employer, though a mere change of employer without an acquisition
does start a new base — which is why an employee with two unrelated jobs can have social security
tax withheld above the annual maximum and claim the excess as a credit.

**The deduction follows ownership of the liability.**
{fig:tax.never_deductible} (IRC § 275(a)(1)). The employer deducts its own FICA and its FUTA. It
does not deduct the withheld income tax or the employee's FICA, because those are not its taxes —
it deducts the gross wages instead, which already includes them.

**And the penalty is personal.** {fig:emp.trust_fund_penalty} (IRC § 6672(a)). It reaches "any
person required to collect, truthfully account for, and pay over" the tax who wilfully fails to do
so, which means an officer, a bookkeeper or anyone with authority over which creditors get paid —
not the corporation. It is measured by the whole trust fund portion, and incorporation is no
protection against it.

<div class="scenario" data-type="baseline">
<h3>One employee, four calculations</h3>

An employer pays a single employee $260,000 of wages in 2026. The employee is unmarried.

**Employee social security.** 6.2 percent of wages up to {fig:se.wage_base}, because
IRC § 3121(a)(1) excludes the rest. On $184,500 that is $11,439.

**Employee hospital insurance.** 1.45 percent of the whole $260,000 — $3,770 — because that half
of IRC § 3101(b)(1) has no wage base.

**Additional hospital insurance.** {fig:emp.additional_medicare} (IRC § 3101(b)(2)) — 0.9 percent
of the $60,000 above the $200,000 threshold, or $540. The employer withholds it and does not match
it.

**Employer FICA.** {fig:emp.employer_rates} (IRC § 3111) — $11,439 plus $3,770, or $15,209. Not a
cent of the additional tax, because IRC § 3111 has no equivalent of IRC § 3101(b)(2).

The employer's deduction is $15,209 plus its FUTA. The $15,749 withheld from the employee is not
deductible as a tax, but the $260,000 of wages out of which it came is.
</div>

<div class="scenario" data-type="interaction">
<h3>The unemployment tax that was not six percent, and then was</h3>

A company employs forty people, all earning well above the FUTA base, in a state whose
unemployment fund is in good standing. Its FUTA wages are forty times
{fig:emp.futa_wage_base}, or $280,000.

The gross tax at the IRC § 3301 rate is $16,800. {fig:emp.futa_credit} (IRC § 3302(a), (b)) gives
credit for the state contributions actually paid plus an additional credit up to the 5.4 percent
figure, so with timely state payments the net federal tax is 0.6 percent of $280,000 — $1,680.

Now suppose the state has taken federal advances that remain outstanding.
{fig:emp.futa_credit_reduction} (IRC § 3302(c)(2)) reduces the credit, and the reduction increases
with each successive year the advances remain outstanding. A reduction of 0.3 percentage points
raises the company's net FUTA to 0.9 percent, or $2,520 — a 50 percent increase in the tax.

Two points matter for a preparer. The reduction is determined after the year has run, so the
liability for wages already paid changes late. And it is a **federal** cost imposed because of the
state's borrowing, so an employer in a credit reduction state pays more federal unemployment tax
than an identical employer across the state line.
</div>

<div class="scenario" data-type="boundary">
<h3>The bookkeeper who chose which bills to pay</h3>

A failing corporation owes $190,000 of withheld income tax and employee FICA for three quarters.
Its bookkeeper, who has cheque-signing authority and decides which creditors are paid, uses the
money to pay suppliers so that the business can keep trading. The corporation then fails.

{fig:emp.trust_fund_penalty} (IRC § 6672(a)) reaches "any person required to collect, truthfully
account for, and pay over any tax" who wilfully fails to do so. Two elements: responsibility, and
wilfulness. Cheque-signing authority and the power to decide which creditors are paid supply the
first. Knowing the tax was due and paying suppliers instead supplies the second — wilfulness here
does not require a bad motive, only a conscious preference.

The penalty equals the total trust fund amount, $190,000, and it is personal. The bookkeeper's
lack of ownership is irrelevant, and so is the corporation's insolvency.

Note what the penalty does **not** reach: the employer's own share of FICA and its FUTA. Those are
the corporation's own taxes rather than money collected from employees, so they die with the
corporation. The penalty is confined to the trust fund portion, which is exactly the money the
employer never owned.
</div>

<div class="scenario" data-type="timing">
<h3>Two jobs, two wage bases, in the same year</h3>

<p>An employee earns $140,000 from her first employer through August, then leaves and earns
another $90,000 from a second, unrelated employer for the rest of 2026.</p>

<p><em>Analysis.</em> Each employer withholds {gloss:fica} up to {fig:se.wage_base} on the wages it
alone pays — neither employer sees the other's payroll records, and there is no successor
relationship between them, so nothing combines. Between the two jobs she has more social security
tax withheld than the annual maximum on $230,000 of total wages. She recovers the excess as a
credit on her own income tax return; neither employer's withholding was wrong on its own facts, and
the fix happens only at the individual level, not on either Form W-2.</p>
</div>

<div class="scenario" data-type="procedural">
<h3>Falling behind on deposits</h3>

<p>A struggling retailer withholds {gloss:trust-fund-tax} from its employees' paychecks every pay
period but stops depositing it with the government for two full quarters to keep the doors open,
intending to catch up later.</p>

<p><em>Analysis.</em> The tax was due at each deposit date, not merely by the quarterly return's
filing deadline, so missing deposits triggers its own penalty apart from anything owed with the
return. The exposure does not stop at the business: whoever at the retailer had authority over
which bills got paid is a {gloss:responsible-person}, and the IRS can assess the
{gloss:trust-fund-recovery-penalty} against that person directly once it is clear the withheld
money was spent elsewhere instead of being deposited.</p>
</div>

<div class="callout trap">
<strong>Traps.</strong>

<p><strong>Only the social security half has a wage base.</strong> IRC § 3121(a)(1) excludes wages
above {fig:se.wage_base} for that tax alone. Hospital insurance runs on every dollar.</p>

<p><strong>The employer does not match the additional hospital insurance tax.</strong>
{fig:emp.additional_medicare} (IRC § 3101(b)(2)). IRC § 3111 has no counterpart to it.</p>

<p><strong>FUTA is not six percent in practice.</strong> {fig:emp.futa_credit} (IRC § 3302). The
statutory rate is reduced by the state credits to a small net figure — unless the state is a credit
reduction state.</p>

<p><strong>Withheld tax is not the employer's deduction.</strong> {fig:tax.never_deductible}
(IRC § 275(a)(1)). It is covered by the wages deduction, not by a taxes deduction.</p>

<p><strong>IRC § 6672 reaches people, not entities.</strong> {fig:emp.trust_fund_penalty}. A
responsible person is personally liable for the whole trust fund amount, and the employer's own
share is not part of it.</p>

<p><strong>A successor employer inherits the wage base.</strong> {fig:emp.futa_successor}
(IRC § 3306(b)(1)). Buying a business and keeping the staff does not restart it.</p>
</div>

## How this has changed

None of the rate or base provisions on this page was amended by Pub. L. 119-21. The FUTA rate in
IRC § 3301 has read the same since Pub. L. 115-141 tidied its drafting in 2018, and the
IRC § 3306(b)(1) wage base has not moved in decades — it is one of the few figures in the Code
with no indexing mechanism at all, so its real value falls every year.

**The additional hospital insurance tax is the same shape.** IRC § 3101(b)(2) applies to wages
received in a taxable year beginning after 31 December 2012, and its thresholds are stated as flat
dollar amounts with no cost-of-living adjustment. Fourteen years of inflation have therefore
brought it to progressively more employees, without any change in the law.

**Only the social security base moves**, and it moves under section 230 of the Social Security Act
rather than under the Code. The Code's role is IRC § 3121(a)(1), which excludes remuneration above
"the contribution and benefit base (as determined under section 230 of the Social Security Act)"
— so the figure is published by the Social Security Administration each autumn and is not in a
revenue procedure. For 2026 it is {fig:se.wage_base}.

The practical consequence for a preparer is that this topic changes less than almost any other in
Part 2, and that the current-year work is confined to one number.

## Exam focus

Separate the four amounts before doing anything else. Employee withheld income tax, employee FICA,
employer FICA, FUTA. Questions in this area almost always turn on which of the four the question
is asking about.

Know that the wage base applies to the social security component only, that the additional
hospital insurance tax is employee-only, and that the employer's obligation to withhold it starts
from a single threshold regardless of the employee's filing status.

For FUTA, know the statutory rate, the base, and that the credits bring it down to a small net
figure except in a credit reduction state.

Finally, know IRC § 6672 as a personal liability measured by the trust fund portion only, and be
ready to reject an answer that includes the employer's own share in it.

## Check yourself

**1.** An employee earns $300,000 in 2026 from one employer. How much additional hospital
insurance tax does the employer withhold, and how much does it match?

*Answer: It withholds 0.9 percent of $100,000, or $900, because {fig:emp.additional_medicare}
requires withholding once wages from that employer exceed the $200,000 figure. It matches nothing:
IRC § 3111 imposes no counterpart to IRC § 3101(b)(2).*

**2.** A company buys a business in July and keeps all its employees. Does it get a fresh FUTA
wage base for each of them?

*Answer: No. {fig:emp.futa_successor} (IRC § 3306(b)(1)) treats remuneration paid by the
predecessor during the calendar year as having been paid by the successor for the purpose of the
wage base, where the successor acquired substantially all the property used in the business and
immediately employed the individual.*

**3.** An employer remits $50,000 of employer FICA and $70,000 of withheld employee income tax and
employee FICA. What may it deduct as a tax?

*Answer: $50,000. {fig:tax.never_deductible} (IRC § 275(a)(1)(A) and (C)) names both the employee
FICA tax and tax withheld at source. The $70,000 is covered by the deduction for the gross wages
from which it was withheld.*

**4.** A corporation fails owing $120,000 of trust fund taxes and $40,000 of its own employer
FICA. For how much can a responsible person be assessed under IRC § 6672?

*Answer: $120,000. {fig:emp.trust_fund_penalty} (IRC § 6672(a)) is measured by the tax the person
was required to collect and pay over. The employer's own share was never collected from anyone and
is outside the penalty.*

**5.** Why does an employee with two unrelated employers sometimes pay too much social security
tax?

*Answer: Because each employer applies the wage base to the wages it pays, and there is no
mechanism for them to combine unless one is a successor to the other. The employee recovers the
excess as a credit on their own return — {fig:excess_ss.two_employer_test}.*
