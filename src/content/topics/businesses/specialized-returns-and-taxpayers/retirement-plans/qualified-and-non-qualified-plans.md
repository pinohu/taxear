---
title: "Qualified and non-qualified plans"
code: "2.3.3.e"
part: 2
domain: "Specialized Returns and Taxpayers"
section: "Retirement plans"
description: "A qualified plan buys three tax advantages with a long list of conditions; a non-qualified plan trades all three away to escape the one that mattered most."
status: published
taxYear: 2026
lastReviewed: "2026-08-21"
reviewedBy: "Draft for N. O. review"
authorities:
  - { type: IRC, ref: "§ 401", title: "Qualified pension, profit-sharing, and stock bonus plans", url: "https://www.law.cornell.edu/uscode/text/26/401" }
  - { type: IRC, ref: "§ 402", title: "Taxability of beneficiary of employees' trust", url: "https://www.law.cornell.edu/uscode/text/26/402" }
  - { type: IRC, ref: "§ 404", title: "Deduction for contributions of an employer to an employees' trust or annuity plan", url: "https://www.law.cornell.edu/uscode/text/26/404" }
  - { type: IRC, ref: "§ 409A", title: "Inclusion in gross income of deferred compensation under nonqualified deferred compensation plans", url: "https://www.law.cornell.edu/uscode/text/26/409A" }
  - { type: IRC, ref: "§ 501", title: "Exemption from tax on corporations, certain trusts, etc.", url: "https://www.law.cornell.edu/uscode/text/26/501" }
  - { type: IRC, ref: "§ 83", title: "Property transferred in connection with performance of services", url: "https://www.law.cornell.edu/uscode/text/26/83" }
  - { type: IRC, ref: "§ 72", title: "Annuities; certain proceeds of endowment and life insurance contracts", url: "https://www.law.cornell.edu/uscode/text/26/72" }
  - { type: IRC, ref: "§ 410", title: "Minimum participation standards", url: "https://www.law.cornell.edu/uscode/text/26/410" }
  - { type: IRC, ref: "§ 4975", title: "Tax on prohibited transactions", url: "https://www.law.cornell.edu/uscode/text/26/4975" }
forms: []
related: ["2.3.3.a", "2.3.3.f", "2.3.3.d", "2.3.3.b", "2.3.3.c"]
changelog:
  - { date: "2026-08-21", summary: "Initial draft. Sets the three tax advantages of a qualified plan — employer deduction on contribution under IRC § 404, employee deferral until distribution under IRC § 402(a), and tax-free accumulation under IRC § 501(a) — against the conditions in IRC § 401(a), then the non-qualified alternative: IRC § 402(b) and IRC § 83 taxation of a funded arrangement, the IRC § 404(a)(5) matching deduction rule, and the IRC § 409A distribution, acceleration and election requirements with their 20 percent additional tax." }
  - { date: "2026-08-25", summary: "Added a plain-language summary, glossary marks, and typed scenarios." }
---

<div class="plain-terms">
A retirement plan can meet a long list of federal rules, or it can skip them. Meeting the rules
earns three things: the employer can deduct the cost right away, the worker does not pay tax
until money comes out, and the money grows tax-free in between. This affects employers who want
to reward or pay executives more than everyone else, and any worker promised money later instead
of now. Skip the rules and you free the plan from having to treat every worker the same way. But
you also lose all three tax perks, and strict rules take over for when and how the promised money
can be paid.
</div>

The word "qualified" is not a compliment. It is a statutory status that buys three specific tax
results, and every condition in IRC § 401(a) is the price of one of them. A non-qualified plan gives
up all three and gets one thing in return: freedom from the coverage and non-discrimination rules
that force an employer to cover rank-and-file workers on the same terms as executives.

## The rule

**What qualification means** (IRC § 401(a)(1)). {fig:qp.definition} {fig:qp.exclusive_benefit} The exclusive benefit
requirement is the backbone: the assets must be beyond the employer's reach until every liability to
participants is satisfied.

**What it buys.** {fig:qp.three_advantages} {fig:qp.402a} These three results only travel together.
A plan cannot have the deduction without the participant's deferral, or the tax-free accumulation
without the exclusive benefit condition that makes it possible.

**Benefits cannot be reached.** {fig:qp.anti_alienation} That protection is also a constraint: it
is why a qualified plan cannot be used as collateral, and why the participant loan exemption in
IRC § 4975(d)(1) had to be written explicitly.

**The non-qualified alternative, if it is funded.** {fig:nq.402b_contributions}
{fig:nq.402b_distributions} A funded non-qualified arrangement is therefore usually pointless: the
employee is taxed on vesting, before receiving anything.

**And if it is unfunded.** The classic non-qualified deferred compensation arrangement is a bare
promise. The employee has no property, so IRC § 83 does not apply and nothing is taxed until
payment. The price is that the promise ranks with those of the employer's general creditors, and
must genuinely do so — a trust that shelters the money from creditors is a funded arrangement and
brings IRC § 402(b) back.

**The employer's deduction follows the employee.** {fig:nq.404a5} This is the structural difference
that matters most in planning. A qualified plan gives the employer a deduction years before the
employee is taxed; a non-qualified plan matches the two, so the deferral costs the employer the time
value of its deduction.

**IRC § 409A polices the promise.** {fig:nq.409a_distributions} {fig:nq.409a_acceleration}
{fig:nq.409a_elections} {fig:nq.409a_subsequent}

**And punishes failure severely.** {fig:nq.409a_failure} {fig:nq.409a_penalty} Note who bears it:
the employee, not the employer that drafted the plan.

**Two funding traps.** {fig:nq.409a_funding}

## Current figures

| Item | 2026 |
| --- | --- |
| Qualified trust | {fig:qp.definition} |
| Exclusive benefit | {fig:qp.exclusive_benefit} |
| The three advantages | {fig:qp.three_advantages} |
| Anti-alienation | {fig:qp.anti_alienation} |
| Funded non-qualified plan | {fig:nq.402b_contributions} |
| Employer deduction | {fig:nq.404a5} |
| IRC § 409A distribution events | {fig:nq.409a_distributions} |
| IRC § 409A elections | {fig:nq.409a_elections} |
| IRC § 409A failure | {fig:nq.409a_failure} |
| IRC § 409A additional tax | {fig:nq.409a_penalty} |

## How it works in practice

When a client asks why they cannot simply defer the executive's bonus into a plan and deduct it now,
the answer is IRC § 404(a)(5). The deduction and the inclusion are welded together outside the
qualified plan world. An employer deferring a large bonus for ten years is lending the government
the deduction for a decade, and that cost has to be weighed against whatever the arrangement
achieves.

Test whether an arrangement is funded before anything else, because that single question decides
which regime applies. Money in a rabbi trust — a grantor trust whose assets remain subject to the
employer's general creditors — is unfunded for these purposes and IRC § 402(b) does not apply. Money
in a secular trust, or in any arrangement that protects the employee from the employer's creditors,
is funded, and the employee is taxed on vesting under IRC § 83 whether or not anything has been
paid.

For IRC § 409A, get the initial election in before the year begins. The general rule allows no
deferral election for compensation earned in a year once that year has started. The two exceptions
are narrow: thirty days from first eligibility, and six months before the end of a performance period
of at least twelve months for performance-based compensation. Neither is a general escape, and an
election made in January for that year's salary is simply invalid.

When an IRC § 409A failure has occurred, quantify it before advising. The inclusion is not the
current year's deferral; it is everything deferred under the plan for that year and every preceding
year, to the extent vested and not previously taxed, plus 20 percent of that amount, plus interest
computed as though the whole thing had been taxed when first vested. For a long-standing
arrangement that number can exceed the account balance.

<div class="scenario" data-type="fails">

<h3>The secular trust</h3>

A manufacturer promises its chief financial officer $200,000 a year of deferred compensation,
payable at retirement. To reassure her that the money will be there, the board sets up a
{gloss:trust} with an independent trustee and irrevocably places the annual amounts in it, with the
trust deed stating that the assets are not available to the company's creditors. She is fully vested immediately.

The arrangement is funded. Because the trust is not exempt under IRC § 501(a) and the assets are
beyond the employer's creditors, IRC § 402(b)(1) includes the contributions in her gross income under
IRC § 83, substituting the value of her interest in the trust for the {gloss:fair-market-value} of property.
She is fully vested, so there is no substantial risk of forfeiture to defer inclusion — she is taxed
on $200,000 each year while receiving nothing. The company gets its deduction in the same years
under IRC § 404(a)(5), which is the one thing that works as intended. Had the board used a rabbi
trust, leaving the assets reachable by general creditors, nothing would have been taxed until
payment. The reassurance is exactly what destroyed the deferral.

</div>

<div class="scenario" data-type="timing">

<h3>The January election</h3>

A partner in a consulting firm decides in February 2026 to defer 30 percent of her 2026 salary under
the firm's non-qualified plan. The plan administrator processes the election and the deferrals begin
in March. She has participated in the plan since 2019.

The election is invalid. IRC § 409A(a)(4)(B)(i) requires that an election to defer compensation for
services performed during a taxable year be made no later than the close of the preceding taxable
year. Neither exception helps: she is not in her first year of eligibility, and salary is not
performance-based compensation over a period of at least twelve months. The consequence is not
merely that the 2026 deferral fails. Under IRC § 409A(a)(1)(A) all compensation deferred under the
plan for 2026 and every preceding year, to the extent vested and not previously included, is income
to her in 2026 — seven years of deferrals — plus 20 percent of that amount and interest at the
underpayment rate plus one point running from when each amount vested.

</div>

<div class="scenario" data-type="interaction">

<h3>The acceleration nobody thought about</h3>

A closely held company's non-qualified plan pays deferred amounts in ten annual instalments starting
at separation from service. Two years into one former executive's instalments, the company is sold.
The buyer, wanting a clean balance sheet, pays out the remaining eight instalments at closing. The
plan document says nothing about a change in control.

The acceleration is a failure. IRC § 409A(a)(3) requires that the plan not permit acceleration of the
time or schedule of any payment except as regulations allow, and IRC § 409A(a)(2)(A)(v) permits a
change in ownership or effective control as a *distribution event* only where the plan provides for
it at the date of deferral. This plan did not. The former executive therefore includes the whole
remaining balance in income — which the payment does anyway — but also owes 20 percent of it as an
additional tax plus interest, on money that was always going to be his. The failure is the plan's;
the tax is his.

</div>

<div class="callout trap">

**A rabbi trust is unfunded; a secular trust is funded.** The label is not what matters — whether
the assets remain subject to the employer's general creditors is. An arrangement that gives the
employee security against the employer's insolvency has given them property, and IRC § 402(b) and
IRC § 83 follow.

</div>

<div class="callout trap">

**IRC § 409A does not apply to qualified plans.** It polices non-qualified deferred compensation. A
question that applies the 20 percent additional tax to a 401(k) distribution has the wrong statute;
the relevant provision there is IRC § 72(t) at 10 percent.

</div>

<div class="callout trap">

**The IRC § 409A inclusion is cumulative, not annual.** A failure in one year pulls in every prior
year's vested deferrals under the plan for the affected participants. The exposure grows with the
age of the arrangement, which is why an old plan with a small annual deferral can produce a very
large assessment.

</div>

<div class="callout trap">

**The employer's deduction is not accelerated by a non-qualified plan.** IRC § 404(a)(5) puts it in
the year the employee includes the amount. Advice premised on the employer deducting a deferral now
and the employee paying later has the qualified plan rule in mind and is wrong outside it.

</div>

## How this has changed

IRC § 409A was added by the American Jobs Creation Act of 2004, Pub. L. 108-357 § 885, generally for
amounts deferred in taxable years beginning after 31 December 2004, in response to the Enron
collapse and the acceleration of executive deferrals ahead of it. Before that, non-qualified deferred
compensation was governed by constructive receipt and economic benefit doctrine and a body of revenue
rulings. The statute did not replace those doctrines; it added a set of hard requirements on top, so
an arrangement must now satisfy both.

The final regulations under IRC § 409A were issued in 2007 and the correction programmes in
Notice 2008-113 and Notice 2010-6 followed. Those notices remain the practical route out of most
operational and document failures, and they matter more in practice than the statute's own terms,
because a failure corrected under them can avoid the additional tax entirely.

The IRC § 402(b) treatment of funded arrangements is much older and has not moved. What has changed
is the surrounding practice: rabbi trusts became standard after Rev. Proc. 92-64 published a model
trust, and the IRC § 409A(b)(1) offshore rule and IRC § 409A(b)(2) financial-health trigger were
added in 2004 to close the two routes by which an arrangement could be made secure without being
called funded.

## Exam focus

Know the three tax advantages of a qualified plan as a set, and know that IRC § 404(a)(5) removes the
first of them outside that world. Expect a question contrasting the timing of the employer's
deduction under the two regimes.

Know that a funded non-qualified arrangement is taxed to the employee on vesting under IRC § 402(b)
and IRC § 83, and that "funded" turns on whether the employer's general creditors can reach the
assets.

Know the IRC § 409A election timing rules — prior year in general, thirty days in the first year of
eligibility, six months before the end of a performance period of at least twelve months — the six
permitted distribution events, the bar on acceleration, and the 20 percent additional tax plus
interest on failure.

## Check yourself

**1.** An employer promises a key employee $100,000 payable in five years, records a liability, and
deducts it currently. Is the deduction allowable?

*Answer:* No. IRC § 404(a)(5) defers the employer's deduction to the taxable year in which the amount
is includible in the employee's gross income, which on an unfunded promise is the year of payment.
Accrual accounting does not override it; the section is a specific timing rule that displaces the
general rules for this class of payment.

**2.** A company establishes a trust to pay deferred compensation, funds it, and provides in the
trust deed that the assets remain subject to the claims of the company's general creditors in
insolvency. Is the employee taxed on funding?

*Answer:* No. That is a rabbi trust. Because the assets remain reachable by general creditors the
employee has received no property, IRC § 83 is not engaged, and IRC § 402(b) does not apply. The
employee is taxed on payment and the employer deducts then. The arrangement gives protection against
a change of heart, not against insolvency — which is the only protection the tax law will allow
without accelerating the tax.

**3.** A newly hired executive becomes eligible for a non-qualified plan on 1 September. On
20 September she elects to defer 40 percent of her remaining 2026 salary. Is the election valid?

*Answer:* Yes, as to services performed after the election. IRC § 409A(a)(4)(B)(ii) allows an
election within 30 days of first becoming eligible, and 20 September is inside that window. The
election cannot reach compensation for services already performed between 1 and 20 September; only
compensation for services performed after the election may be deferred under it.

**4.** A plan permits a participant to request early payment of deferred amounts on 10 percent
forfeiture of the balance. Is that acceptable?

*Answer:* No. That is the "haircut" provision IRC § 409A(a)(3) was written to stop: the plan permits
acceleration of the time of payment, and no regulation allows this one. The plan fails on its terms
whether or not anyone uses the provision, and every affected participant faces the cumulative
inclusion plus the additional tax.

**5.** A participant in a non-qualified plan has $600,000 of vested deferrals accumulated since 2018.
An operational failure occurs in 2026 affecting her alone. What is included, and what is added?

*Answer:* The whole $600,000, to the extent vested and not previously included, is income in 2026
under IRC § 409A(a)(1)(A) — not just the 2026 deferral. On top, IRC § 409A(a)(1)(B) adds 20 percent
of the included amount, so $120,000, plus interest at the underpayment rate plus one percentage
point computed as though each amount had been included when it vested. Only participants to whom the
failure relates are affected.
