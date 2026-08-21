---
title: "Non-discrimination rules"
code: "2.3.3.f"
part: 2
domain: "Specialized Returns and Taxpayers"
section: "Retirement plans"
description: "Coverage testing, contribution testing and top-heavy testing ask three different questions, and a plan can pass any two of them while failing the third outright."
status: published
taxYear: 2026
lastReviewed: "2026-08-21"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 410", title: "Minimum participation standards", url: "https://www.law.cornell.edu/uscode/text/26/410" }
  - { type: IRC, ref: "§ 401", title: "Qualified pension, profit-sharing, and stock bonus plans", url: "https://www.law.cornell.edu/uscode/text/26/401" }
  - { type: IRC, ref: "§ 411", title: "Minimum vesting standards", url: "https://www.law.cornell.edu/uscode/text/26/411" }
  - { type: IRC, ref: "§ 414", title: "Definitions and special rules", url: "https://www.law.cornell.edu/uscode/text/26/414" }
  - { type: IRC, ref: "§ 415", title: "Limitations on benefits and contribution under qualified plans", url: "https://www.law.cornell.edu/uscode/text/26/415" }
  - { type: IRC, ref: "§ 416", title: "Special rules for top-heavy plans", url: "https://www.law.cornell.edu/uscode/text/26/416" }
  - { type: Notice, ref: "2025-67", title: "2026 amounts relating to retirement plans and IRAs, as adjusted for changes in cost-of-living", url: "https://www.irs.gov/pub/irs-drop/n-25-67.pdf" }
forms: []
related: ["2.3.3.a", "2.3.3.e", "2.3.3.c", "2.3.3.b"]
changelog:
  - { date: "2026-08-21", summary: "Initial draft. Separates the three tests a qualified plan must pass — IRC § 410(b) coverage, IRC § 401(k)(3) and § 401(m)(2) contribution testing, and IRC § 416 top-heavy testing — and sets out the IRC § 401(k)(12) safe harbours that buy an exemption from the second, the IRC § 414(q) highly compensated employee definition against the IRC § 416(i) key employee definition, and the IRC § 411(a)(2) vesting schedules." }
---

Three separate tests stand between a plan and disqualification, and they are not variations on a
theme. Coverage asks who is in the plan. Contribution testing asks what the people in it actually
received. Top-heavy testing asks where the money has ended up. A plan can be generous, cover
everyone, and still be top-heavy; it can pass coverage comfortably and fail the deferral test
because nobody at the lower end chose to participate.

## The rule

**Coverage** (IRC § 410(b)(1)). {fig:nd.coverage} {fig:nd.average_benefit} The first two tests count heads. The third
measures benefits, and is the escape route for a plan whose classification is defensible but whose
headcount is not.

**Who counts as highly compensated.** {fig:nd.hce} {fig:rc.hce} Ownership is measured in the current
or preceding year; compensation is measured in the preceding year only. The top-paid group election
is what a plan uses when a large share of its workforce is above the dollar threshold.

**Contribution testing: deferrals.** {fig:nd.adp} {fig:nd.adp_computation} The averaging method is
the point most often got wrong. Each employee's own ratio is computed first and the ratios are then
averaged, so one employee deferring heavily on a small salary moves the group average far more than
the dollars would suggest.

**Contribution testing: matches.** {fig:nd.acp} The two tests run in parallel on different
contributions, and a plan can pass one and fail the other.

**Buying an exemption.** {fig:nd.safe_harbor_match} {fig:nd.safe_harbor_nonelective}
{fig:nd.safe_harbor_notice} A safe harbour plan is deemed to satisfy the deferral test, which is why
almost every small 401(k) is designed as one. {fig:nd.safe_harbor_late}

**Top-heavy testing.** {fig:nd.topheavy} {fig:nd.key_employee} Note that key employee and highly
compensated employee are different definitions doing different jobs. An officer earning above the
key employee threshold is a key employee; a rank-and-file worker who owns five percent is both.

**And what a top-heavy plan owes.** {fig:nd.topheavy_minimum}

**Vesting.** {fig:nd.vesting_dc} {fig:nd.vesting_db}

## Current figures

| Item | 2026 |
| --- | --- |
| Coverage tests | {fig:nd.coverage} |
| Highly compensated and key employee thresholds | {fig:rc.hce} |
| Actual deferral percentage test | {fig:nd.adp} |
| Actual contribution percentage test | {fig:nd.acp} |
| Safe harbour match | {fig:nd.safe_harbor_match} |
| Safe harbour nonelective | {fig:nd.safe_harbor_nonelective} |
| Top-heavy definition | {fig:nd.topheavy} |
| Top-heavy minimum | {fig:nd.topheavy_minimum} |
| Defined contribution vesting | {fig:nd.vesting_dc} |
| Defined benefit vesting | {fig:nd.vesting_db} |

## How it works in practice

Classify every employee before running any test, because both definitions turn on facts the payroll
system does not record. Highly compensated status looks at ownership in the current *or* preceding
year and at compensation in the preceding year only, so a new hire on a large salary is not highly
compensated in their first year unless they are a five percent owner. Key employee status looks at
the current plan year and reaches officers, five percent owners and one percent owners above a much
lower compensation figure.

For the deferral test, compute the individual ratios first. The statute defines the actual deferral
percentage as the average of the ratios calculated separately for each employee, not the ratio of
total deferrals to total compensation. An employer who computes it the aggregate way will usually get
a flattering answer, because the highly compensated employees' large salaries dominate the
denominator.

Decide on the safe harbour before the plan year begins, not after. The matching safe harbour requires
the advance notice, so it cannot be adopted retrospectively at all. The nonelective safe harbour can
be adopted late — up to thirty days before the year ends at three percent, or as late as the deadline
for distributing excess contributions if the employer is willing to pay four percent — and that
flexibility is the practical answer for a plan that discovers a failure after the year has run.

Check top-heavy status separately every year, because it moves. A plan that has been comfortably
under sixty percent for a decade can cross the line when a long-serving owner's balance grows or a
group of employees takes their money on leaving. Crossing it triggers the minimum contribution for
every non-key employee, including those who deferred nothing, and that cost is not budgeted for in
the year it first appears.

<div class="scenario">

<h3>The ratio that flattered</h3>

A design firm's 401(k) has four highly compensated employees earning $250,000 each and deferring
$25,000 each, and sixteen other employees earning $50,000 each. Of the sixteen, four defer $2,500
each and twelve defer nothing. The plan administrator computes the deferral percentages as total
deferrals over total compensation for each group: $100,000 over $1,000,000 for the highly compensated
group, and $10,000 over $800,000 for the rest.

That gives 10 percent against 1.25 percent, which fails either way, but the method is wrong and the
correct method gives a different answer. Under IRC § 401(k)(3)(B) each employee's own ratio is
computed and the ratios are averaged. For the highly compensated group every ratio is 10 percent, so
the average is 10 percent — the same answer, because the group is uniform. For the other group four
employees have a ratio of 5 percent and twelve have a ratio of zero, so the average is 1.25 percent.
Here the two methods coincide, but only because compensation happens to be uniform within each
group. Change one of the sixteen to a $20,000 part-timer deferring $2,500 and the individual-ratio
method jumps while the aggregate method barely moves. The plan fails on either computation:
1.25 times 1.25 percent is 1.5625 percent, and 1.25 plus two points is 3.25 percent, both far below
10 percent.

</div>

<div class="scenario">

<h3>The late safe harbour</h3>

A veterinary practice's 401(k) has never used a safe harbour. In October the administrator's interim
testing shows the plan will fail the deferral test for the calendar year by a wide margin. The owner
asks whether the practice can adopt a safe harbour now to avoid refunding her deferrals.

Only one of the two safe harbours is available, and it costs more. The matching safe harbour under
IRC § 401(k)(12)(B) requires the notice under subparagraph (D) within a reasonable period *before*
the year, so it cannot be adopted in October. The nonelective safe harbour can be: under
IRC § 401(k)(12)(F)(i)(I) the plan may be amended at any time before the 30th day before the close
of the plan year, which is 1 December for a calendar-year plan, and the required contribution is
3 percent of compensation for every eligible non-highly compensated employee. Had the practice
waited past that date, subparagraph (F)(i)(II) would still allow the amendment up to the deadline
for distributing excess contributions — but only at 4 percent under subparagraph (F)(iii).

</div>

<div class="scenario">

<h3>The plan that turned top-heavy</h3>

A family printing business sponsors a profit-sharing plan. The owner, aged 63, has an account of
$1,400,000 after thirty years. Her operations manager, an officer earning $260,000, has $310,000. The
remaining eleven employees have accounts totalling $980,000. Three long-serving employees left last
year and rolled their balances out.

Key employee accounts are the owner's $1,400,000, as a five percent owner, plus the operations
manager's $310,000, as an officer above the key employee compensation threshold — $1,710,000 against
a plan total of $2,690,000, or 63.6 percent. That exceeds 60 percent, so the plan is top-heavy for
the year. The consequence is that every non-key employee who is a participant must receive an
employer contribution of at least 3 percent of IRC § 415 compensation, whether or not they deferred
and whether or not the profit-sharing formula would have given them anything. Note what tipped it:
the departures. Rollovers out by non-key employees shrank the denominator without touching the
numerator.

</div>

<div class="callout trap">

**Highly compensated and key employee are different definitions.** IRC § 414(q) uses a 5-percent
ownership test and a prior-year compensation threshold; IRC § 416(i) uses officer status above a
lower threshold, 5-percent ownership, and 1-percent ownership above a fixed unindexed figure. The two
thresholds also move independently — for 2026 the highly compensated figure did not change while the
key employee figure did.

</div>

<div class="callout trap">

**The deferral percentage is an average of ratios.** IRC § 401(k)(3)(B) is explicit. Computing total
deferrals over total compensation is a different calculation that gives a different answer whenever
compensation varies within a group, which it always does.

</div>

<div class="callout trap">

**Top-heavy status is about balances, not contributions.** A plan can contribute identically for
everyone every year and still become top-heavy through investment returns, length of service, or
non-key employees taking distributions. It has to be retested annually against the determination
date.

</div>

<div class="callout trap">

**A safe harbour exempts the deferral test, not everything.** IRC § 401(k)(12) addresses
IRC § 401(k)(3)(A)(ii). Coverage under IRC § 410(b) still has to be satisfied, and a safe harbour
plan is still subject to top-heavy testing — though a plan whose only contributions are safe harbour
contributions and deferrals is deemed to satisfy the top-heavy requirements.

</div>

## How this has changed

The current structure dates from the Tax Reform Act of 1986, which introduced the actual deferral
percentage test in its present form, and from the Small Business Job Protection Act of 1996, which
added the IRC § 401(k)(12) safe harbours and simplified the highly compensated employee definition
down to the two-limb test now in IRC § 414(q). Before 1996 that definition ran to five categories.

The Pension Protection Act of 2006 shortened defined contribution vesting to the present three-year
cliff or two-to-six graded schedules for all employer contributions; before it, only matching
contributions were on the shorter schedules and other employer contributions could use five-year
cliff or three-to-seven graded vesting. Material describing a five-year cliff for a profit-sharing
plan is pre-2007.

SECURE 2.0 changed who must be covered. For plan years beginning after 31 December 2024, a long-term
part-time employee who completes at least 500 hours in two consecutive years must be permitted to
make elective deferrals, down from three years under the original SECURE Act. Such employees may be
excluded from coverage, non-discrimination and top-heavy testing, which is what makes the rule
workable — but they are in the plan.

The safe harbour amendment timing at IRC § 401(k)(12)(F) is also a SECURE 2.0-era relaxation, and it
is the reason a mid-year rescue is possible at all. The three percent and four percent figures in it
are statutory and are not indexed.

## Exam focus

Know the three coverage tests and that only one of them has to be met. Know that the ratio percentage
test compares the *percentage* of non-highly compensated employees benefiting to the percentage of
highly compensated employees benefiting, and that seventy percent is the ratio, not a headcount.

Know both contribution tests and their two alternative limits — 1.25 times, or two points plus a
doubling cap. Know that they run on different contributions and that a safe harbour exempts only
the deferral test.

Know the two definitions of a favoured employee and which test uses which. Know the sixty percent
top-heavy threshold, the three percent minimum for non-key employees in a defined contribution plan,
and the two vesting schedules for each plan type.

## Check yourself

**1.** A plan benefits 40 of an employer's 50 non-highly compensated employees and 9 of its 10 highly
compensated employees. Does it pass coverage?

*Answer:* Yes, on the ratio percentage test. The plan benefits 80 percent of non-highly compensated
employees and 90 percent of highly compensated employees; 80 divided by 90 is 88.9 percent, which is
at least 70 percent. Note it fails the first test in IRC § 410(b)(1)(A) only if fewer than 70 percent
of non-highly compensated employees benefit — here 80 percent do, so that test is also met.

**2.** The actual deferral percentage for non-highly compensated employees is 4 percent. What is the
maximum for highly compensated employees?

*Answer:* 6 percent. The two alternatives in IRC § 401(k)(3)(A)(ii) give 1.25 times 4 percent, which
is 5 percent, or the lesser of 4 plus 2 points and twice 4 percent — 6 percent against 8 percent, so
6 percent. The plan takes the more favourable of the two, so 6 percent.

**3.** An employee is hired on 1 February 2026 at $400,000 a year and owns no part of the employer.
Is she a highly compensated employee for 2026?

*Answer:* No. IRC § 414(q)(1)(B) looks at compensation *for the preceding year*, and she had none
from this employer in 2025. She is not a 5-percent owner, so subparagraph (A) does not reach her
either. She will be highly compensated for 2027.

**4.** A defined contribution plan uses a five-year cliff vesting schedule for its profit-sharing
contributions. Is that permissible?

*Answer:* No. IRC § 411(a)(2)(B) allows only 100 percent vesting after three years of service, or
graded vesting reaching 100 percent after six. Five-year cliff vesting is a defined benefit schedule
and has not been available for defined contribution employer contributions since the Pension
Protection Act of 2006.

**5.** A top-heavy profit-sharing plan makes no contribution for the year because there were no
profits. Does anything need to be contributed?

*Answer:* Yes, unless no key employee received anything either. IRC § 416(c)(2) requires a
contribution for each non-key employee participant of at least 3 percent of IRC § 415 compensation
where the plan is top-heavy. The minimum is capped at the percentage contributed for the key
employee with the highest percentage, so if no key employee received a contribution the required
minimum is zero — but a discretionary contribution to the owner alone would trigger the full
obligation.
