---
title: "Worker classification (i.e. independent contractor versus employee, outside sales, full-time vs part-time)"
code: "2.2.5.k"
part: 2
domain: "Business Tax Preparation"
section: "Advising the business taxpayer"
description: "A statutory employee gets a Form W-2 and files Schedule C, which is the one combination that looks like an error and is not — and there are only four categories of them."
status: published
taxYear: 2026
lastReviewed: "2026-08-21"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 3121", title: "Definitions", url: "https://www.law.cornell.edu/uscode/text/26/3121" }
  - { type: IRC, ref: "§ 3401", title: "Definitions", url: "https://www.law.cornell.edu/uscode/text/26/3401" }
  - { type: IRC, ref: "§ 3508", title: "Treatment of real estate agents and direct sellers", url: "https://www.law.cornell.edu/uscode/text/26/3508" }
  - { type: IRC, ref: "§ 3509", title: "Determination of employer's liability for certain employment taxes", url: "https://www.law.cornell.edu/uscode/text/26/3509" }
  - { type: IRC, ref: "§ 1402", title: "Definitions", url: "https://www.law.cornell.edu/uscode/text/26/1402" }
  - { type: IRC, ref: "§ 6041", title: "Information at source", url: "https://www.law.cornell.edu/uscode/text/26/6041" }
  - { type: IRC, ref: "§ 6041A", title: "Returns regarding payments of remuneration for services and direct sales", url: "https://www.law.cornell.edu/uscode/text/26/6041A" }
  - { type: IRC, ref: "§ 6051", title: "Receipts for employees", url: "https://www.law.cornell.edu/uscode/text/26/6051" }
  - { type: IRC, ref: "§ 6721", title: "Failure to file correct information returns", url: "https://www.law.cornell.edu/uscode/text/26/6721" }
  - { type: IRC, ref: "§ 6722", title: "Failure to furnish correct payee statements", url: "https://www.law.cornell.edu/uscode/text/26/6722" }
  - { type: Reg, ref: "§ 31.3121(d)-1", title: "Who are employees", url: "https://www.law.cornell.edu/cfr/text/26/31.3121(d)-1" }
forms: []
related: ["2.2.5.b", "2.2.2.j", "2.2.5.a", "2.2.5.c", "2.2.5.l", "2.2.5.m"]
changelog:
  - { date: "2026-08-21", summary: "Initial draft. Sets out the IRC § 3121(d) definition of employee in its three limbs — corporate officers, the common law test, and the four statutory employee categories with their two conditions and two exclusions — the IRC § 3508 statutory nonemployee treatment of qualified real estate agents and direct sellers with its written contract requirement, and the IRC § 3509 reduced-rate assessment for a misclassification with the doubling where reporting requirements were also missed." }
  - { date: "2026-08-25", summary: "Added a plain-language summary, a decision diagram of the classification chain, glossary marks, and a timing scenario." }
diagram:
  archetype: "decision"
  caption: "Is this worker an employee?"
  tests:
    - { test: "Officer of the corporation performing services? (IRC § 3121(d)(1))", result: "Employee — decided at the first limb, nothing else is checked", outcome: "fail" }
    - { test: "Not an officer — does the payer control how the work is done, not just the result?", result: "Employee under the common law test", outcome: "fail" }
    - { test: "Not controlled — does the worker fit one of the four statutory employee categories and meet both its conditions? (IRC § 3121(d)(3))", result: "Statutory employee — FICA withheld, but reported on Schedule C, not as wages", outcome: "fail" }
    - { test: "Not on that list — a written contract under IRC § 3508(b) makes the worker a qualified real estate agent or direct seller?", result: "Statutory nonemployee — outside employment tax entirely", outcome: "pass" }
    - { test: "None of the above", result: "Independent contractor — self-employment tax under IRC § 1402(a)", outcome: "pass" }
---

<div class="plain-terms">
Worker classification decides whether someone who does work for a business counts as an employee or
as an independent contractor. This is not a label either side can pick. It follows from how the work
really happens. The answer decides who pays payroll tax. It decides who must withhold income tax. It
also decides what the worker can deduct on their own tax return. Most workers are sorted by one
question. Does the business control how the work gets done, not just what the end result looks
like? A small group of jobs follow a fixed rule instead. That group is company officers, a few sales
roles, and real estate agents with the right contract. The fixed rule applies no matter what the
control test would say. Getting this wrong costs the business real money.
</div>

Worker classification is a two-question topic usually treated as a one-question topic. The first
question is whether the worker is an employee at common law. The second, which arises only for a
narrow set of workers, is whether a statute overrides that answer — and it can do so in either
direction.

## The rule

**The definition has three limbs.** {fig:wc.employee} (IRC § 3121(d)). The first is mechanical: any
officer of a corporation. The second is the common law control test. The third is a closed statutory
list.

**The statutory employees.** {fig:wc.statutory_employee} (IRC § 3121(d)(3)), subject to
{fig:wc.statutory_employee_conditions}. Both conditions and both exclusions have to be checked; the
category label alone decides nothing.

**The statutory nonemployees.** {fig:wc.statutory_nonemployee} (IRC § 3508(a)), for which
{fig:wc.qualified_agent} (IRC § 3508(b)(1)). Note the third requirement — a written contract
providing that the individual will not be treated as an employee for federal tax purposes.

**And the cost of getting it wrong.** {fig:wc.3509} (IRC § 3509(a)), doubling under
{fig:wc.3509_doubled} (IRC § 3509(b)(1)).

**Self-employment follows the classification.** A worker who is not an employee has net earnings
from self-employment under IRC § 1402(a) and pays both halves of the tax through Schedule SE; an
employee has wages, half the FICA withheld and half paid by the employer.

## Current figures

| Item | Rule | Authority |
| --- | --- | --- |
| Employee | {fig:wc.employee} | IRC § 3121(d) |
| Statutory employees | {fig:wc.statutory_employee} | IRC § 3121(d)(3) |
| Conditions and exclusions | {fig:wc.statutory_employee_conditions} | IRC § 3121(d)(3) |
| Statutory nonemployees | {fig:wc.statutory_nonemployee} | IRC § 3508(a) |
| Qualified real estate agent | {fig:wc.qualified_agent} | IRC § 3508(b)(1) |
| Reduced-rate assessment | {fig:wc.3509} | IRC § 3509(a) |
| Doubled rates | {fig:wc.3509_doubled} | IRC § 3509(b)(1) |

## How it works in practice

**Start with the common law test and know what it asks.** The question is the right to direct and
control *how* the work is done, not merely what result is required. A payer who specifies the
outcome, the deadline and the standard and leaves the method to the worker is buying a result. A
payer who sets the hours, supplies the tools, trains the worker and directs the sequence of tasks
has an employee whatever the contract says.

**Then check whether the worker is on either statutory list.** Both are short and closed — four
categories of statutory employee, two of statutory nonemployee, and nothing else. A worker on
neither list is decided by the common law test alone, and a worker on one of them is decided by the
statute regardless of what the common law test would have produced.

**The statutory employee combination is the one that looks like a mistake.** A statutory employee
receives a Form W-2 with the statutory employee box checked, has social security and Medicare tax
withheld by the payer, is *not* subject to income tax withholding, and reports the earnings on
Schedule C with the related expenses deducted there. A Form W-2 alongside a Schedule C is normally a
red flag; here it is correct, and there are only four categories in which it can happen.

**A statutory nonemployee needs the written contract.** IRC § 3508(b)(1)(C) requires the services to
be performed under a written contract providing that the individual will not be treated as an
employee for federal tax purposes. A brokerage relying on the section without that document is
relying on nothing, and the requirement cannot be satisfied retrospectively.

**Full-time versus part-time is not a classification.** Neither the common law test nor either
statutory list turns on hours. Two of the statutory employee categories require full-time work, but
that is a condition inside the category rather than a test of status generally. A part-time worker
under close direction is an employee; a full-time worker genuinely running their own business is
not.

**Understand what IRC § 3509 does and does not do.** Where an employer treated an employee as a
non-employee, the assessment is computed at reduced percentages instead of at the full withholding
and employee FICA. It is a relief provision, but it is unavailable where the misclassification was
intentional, and the rates double where the employer also missed the information reporting
requirements without reasonable cause. The employer's own share of FICA and its FUTA are unaffected:
the relief runs only to amounts that should have been withheld from the worker.

## Scenarios

<div class="scenario" data-type="baseline">
<h3>The W-2 that belonged with a Schedule C</h3>

Denholm Assurance engages a full-time life insurance salesman under a contract requiring him to
perform the services personally. He owns no facilities beyond his car, and the relationship is
continuing. Denholm issues him a Form W-2 with the statutory employee box checked and withholds
social security and Medicare but no income tax.

That is correct. IRC § 3121(d)(3)(B) makes a full-time life insurance salesman a statutory employee,
and both conditions are met — the contract contemplates personal performance and there is no
substantial investment in facilities, the exclusion for transportation facilities putting his car
outside the test. Nor is this a single transaction.

The salesman reports the Form W-2 amount on Schedule C rather than as wages, and deducts his
business expenses there. He pays no {gloss:self-employment-tax}, because {gloss:fica} has already
been withheld. This is the one combination in which a Form W-2 and a Schedule C belong together, and
a preparer who "corrects" it to wages loses the expense deductions entirely.
</div>

<div class="scenario" data-type="fails">
<h3>The brokerage without the paperwork</h3>

Kelsall Realty treats its twelve licensed agents as independent contractors, pays them entirely on
commission with no reference to hours, and issues Forms 1099-NEC. There is no written agreement with
any of them.

IRC § 3508 does not apply. Two of its three requirements are met — the agents are licensed, and
substantially all their remuneration is directly related to sales or output rather than to hours
worked — but § 3508(b)(1)(C) also requires the services to be performed under a written contract
providing that the individual will not be treated as an employee for federal tax purposes, and there
is none.

So the classification falls back to the common law test, where a brokerage that sets floor duty
rosters, requires attendance at sales meetings and directs how listings are handled is in
difficulty. The remedy is a written contract signed prospectively; it does nothing for years already
filed, and § 3509 relief is unavailable if the Service concludes the treatment was intentional.
</div>

<div class="scenario" data-type="boundary">
<h3>The assessment that doubled</h3>

Ardenshaw Logistics treated eleven drivers as contractors, issued no Forms 1099-NEC and no Forms W-2,
and on examination is found to have had employees. The wages involved are $640,000.

Two provisions do the work. IRC § 3509(a) would compute the withholding liability at 1.5 percent of
the wages and the employee social security tax at 20 percent of the amount otherwise imposed — a
substantial reduction on the full withholding and employee FICA.

But Ardenshaw filed no information returns, so IRC § 3509(b)(1) substitutes 3 percent and 40 percent
unless the failure was due to reasonable cause and not wilful neglect. The failure to issue any form
at all makes that argument hard. And § 3509 relieves only the amounts that should have been withheld
from the workers: the employer's own share of FICA, its FUTA, and the information return penalties
under IRC §§ 6721 and 6722 are all payable in full on top.
</div>

<div class="scenario" data-type="timing">
<h3>The relationship that changed underneath the paperwork</h3>

Millbrook Studio engages a photo editor in year one. At the start, Millbrook assigns daily tasks,
sets her hours, supplies the editing software licence, and reviews her work before it goes out — the
{gloss:worker-classification} points to an employee under the common law test, whatever the parties
call the arrangement. By year three the same editor works from her own equipment, sets her own
schedule, edits for two other studios as well, and Millbrook only specifies the deadline and the
delivery format.

Nothing in IRC § 3121(d) fixes a worker's status for all time; the common law test asks about
control as it actually exists, and control can change one year to the next without either side
signing anything new. Millbrook should reassess the relationship each year rather than carry forward
a determination made when the facts were different — the year-one facts supported wages and
withholding, and the year-three facts support treating her as an {gloss:independent-contractor}
filing her own Schedule C. Continuing year-one's Form W-2 treatment into year three because "that is
how we have always classified her" answers the wrong year's question.
</div>

## Traps

<div class="callout trap">

**A corporate officer performing services is an employee by definition.**
IRC § 3121(d)(1) puts officers in the first limb, before the common law test is reached — which is
why an S corporation shareholder-officer taking only distributions has a classification problem as
well as a reasonable compensation problem.

</div>

<div class="callout trap">

**The statutory employee categories have conditions attached.** Personal performance must be
contemplated by the contract, and the individual must have no substantial investment in facilities
other than transportation, and the services must not be a single transaction. Fitting the category
description is not enough.

</div>

<div class="callout trap">

**IRC § 3508 requires a written contract.** Being licensed and paid on output satisfies two of three
requirements. Without the written agreement stating the individual will not be treated as an
employee for federal tax purposes, the section does not apply at all.

</div>

<div class="callout trap">

**IRC § 3509 relief covers only the withheld amounts.** The employer's own FICA share, its FUTA and
the information return penalties are unaffected, and the relief is unavailable altogether where the
misclassification was intentional.

</div>

## How this has changed

The common law test has not changed, but its presentation has. The twenty common law factors of
Rev. Rul. 87-41 are now organised by the Service into three categories — behavioural control,
financial control and the type of relationship — which is the framework a current examination uses.
The factors themselves are unchanged; what has gone is the impression that they are scored.

IRC § 3509 dates from 1982 and the relief has been stable, as has the section 530 relief in the
Revenue Act of 1978 that protects an employer with a reasonable basis for its treatment and
consistent reporting. Section 530 sits outside the Code, which is why it is easily missed, and it
remains the first argument in most classification disputes.

The pressure on classification has come from outside the tax system. Platform work has produced a
large population of workers whose status is genuinely arguable, and the information reporting regime
around them — the Form 1099-K thresholds in particular — has moved repeatedly. What has not moved is
the underlying test, which still asks about control and not about the medium through which the work
is arranged.

Nothing in the post-2024 legislation alters IRC § 3121(d), § 3508 or § 3509.

## Exam focus

Know the three limbs of IRC § 3121(d) in order, and that officers come first.

Learn the four statutory employee categories and both conditions attached to them. Questions
frequently give a worker who fits a category description and fails one of the conditions.

Know the statutory employee's reporting combination — Form W-2 with the box checked, FICA withheld,
no income tax withholding, income and expenses on Schedule C — because it is counterintuitive and
therefore tested.

Know the three requirements for a qualified real estate agent under IRC § 3508(b)(1), and that the
written contract is one of them.

Finally, know the IRC § 3509 rates in both versions and what triggers the doubling, and be able to
say what the relief does not reach.

## Check yourself

**1.** A worker fits the description of a travelling salesman soliciting orders for resale, works
full time for one principal, but owns the warehouse from which he operates and stores samples. Is he
a statutory employee?

*Answer: Probably not. He fits IRC § 3121(d)(3)(D), but the statute excludes an individual who has a
substantial investment in facilities used in performing the services, other than facilities for
transportation. A warehouse is such a facility and is not transportation, so the exclusion applies
and the third limb does not make him an employee. He would then be tested under the common law rules
in § 3121(d)(2) like anyone else — the exclusion removes the statutory shortcut, it does not decide
that he is a contractor.*

**2.** An S corporation's sole officer performs substantial services and takes only distributions.
What is the classification issue?

*Answer: There are two, and the classification one comes first. IRC § 3121(d)(1) makes any officer
of a corporation an employee for employment tax purposes, so the common law test is never reached —
the officer is an employee by definition where services are performed. That means the corporation
should be paying wages and running payroll, and the reasonable compensation question is about how
much, not whether. Recharacterising distributions as wages follows from the classification rather
than being an alternative to it.*

**3.** A brokerage has written contracts with its agents stating they are not employees for federal
tax purposes, pays them a base salary plus commission, and requires no minimum hours. Does IRC § 3508
apply?

*Answer: No, because of the base salary. IRC § 3508(b)(1)(B) requires that substantially all the
remuneration for the services be directly related to sales or other output rather than to the number
of hours worked, and a base salary is remuneration unrelated to output. The written contract and the
licence satisfy the other two requirements but all three must be met. Classification then falls back
to the common law test, where the absence of any hours requirement helps and the base salary does
not.*

**4.** An employer misclassified workers but issued Forms 1099-NEC correctly and had a reasonable
basis for its treatment. What relief is available?

*Answer: Potentially two. IRC § 3509(a) computes the assessment at the reduced percentages rather
than the doubled ones, because the information reporting requirements were met — so the doubling in
§ 3509(b)(1) does not apply. Separately, section 530 of the Revenue Act of 1978, which sits outside
the Code, may relieve the employer entirely where it had a reasonable basis for treating the workers
as non-employees, treated them consistently, and filed all required returns on that basis. Section
530 is the stronger argument and is easily overlooked precisely because it is not in the Code.*

**5.** Why is "full-time versus part-time" in the outline title if hours do not determine
classification?

*Answer: Because hours appear as a condition within particular rules rather than as a general test.
Two of the four statutory employee categories in IRC § 3121(d)(3) require full-time work — the life
insurance salesman and the travelling or city salesman — so a part-time worker in either category
falls out of the statutory list and back to the common law test. Hours can also be evidence under
the common law test, as an indicator of behavioural control. What hours never do is decide status
on their own.*
