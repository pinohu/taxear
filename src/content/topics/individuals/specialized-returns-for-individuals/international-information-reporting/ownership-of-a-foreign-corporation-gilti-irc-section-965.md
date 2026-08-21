---
title: "Ownership of a foreign corporation (GILTI, IRC Section 965 transition tax)"
code: "1.6.3.e"
part: 1
domain: "Specialized Returns for Individuals"
section: "International information reporting"
description: "GILTI no longer exists by that name, and the tangible-asset offset that defined it has been repealed outright. The transition tax is spent except for its installments."
status: review
taxYear: 2026
lastReviewed: "2026-08-21"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 951", title: "Amounts included in gross income of United States shareholders", url: "https://www.law.cornell.edu/uscode/text/26/951" }
  - { type: IRC, ref: "§ 951A", title: "Net CFC tested income included in gross income of United States shareholders", url: "https://www.law.cornell.edu/uscode/text/26/951A" }
  - { type: IRC, ref: "§ 957", title: "Controlled foreign corporations; United States persons", url: "https://www.law.cornell.edu/uscode/text/26/957" }
  - { type: IRC, ref: "§ 250", title: "Foreign-derived deduction eligible income and net CFC tested income", url: "https://www.law.cornell.edu/uscode/text/26/250" }
  - { type: IRC, ref: "§ 962", title: "Election by individuals to be subject to tax at corporate rates", url: "https://www.law.cornell.edu/uscode/text/26/962" }
  - { type: IRC, ref: "§ 965", title: "Treatment of deferred foreign income upon transition to participation exemption system", url: "https://www.law.cornell.edu/uscode/text/26/965" }
  - { type: IRC, ref: "§ 6038", title: "Information reporting with respect to certain foreign corporations and partnerships", url: "https://www.law.cornell.edu/uscode/text/26/6038" }
forms: []
related: ["1.6.3.a", "1.6.3.b", "1.6.3.c", "1.6.3.d", "1.6.3.f"]
changelog:
  - { date: "2026-08-21", summary: "Initial draft. Covers the two thresholds that matter — the IRC § 951(b) 10 percent United States shareholder test and the § 957(a) controlled foreign corporation test — the § 951A inclusion as rewritten by Pub. L. 119-21 § 70323, which renamed global intangible low-taxed income as net CFC tested income and repealed the qualified business asset investment offset outright, the § 250 deduction available to corporations only, the § 962 election by which an individual reaches corporate treatment, and the § 965 transition tax now spent except for its installment stream." }
---

This is the topic where a preparer's existing knowledge is most likely to be wrong, because the
vocabulary changed in 2025 and the underlying arithmetic changed with it. The provision everyone learned
as GILTI is no longer called that, and the feature that gave it its name — a deemed return on tangible
assets held abroad, which took the low-taxed *intangible* income out of a larger figure — has been
repealed. What is left is a broader inclusion under a plainer name. The transition tax, meanwhile, is
finished as a charge and survives only as an instalment obligation and a compliance history.

## The rule

**Two thresholds decide everything.** {fig:cfc.us_shareholder} And
{fig:cfc.definition} A shareholder below 10 percent has no inclusion; a corporation not controlled is
not a controlled foreign corporation, whatever any single holder owns.

**The inclusion.** {fig:cfc.net_tested_income}

**What changed in 2025.** {fig:cfc.gilti_renamed} And with it,
{fig:cfc.qbai_repealed}

**The deduction that softens it — for corporations.** {fig:cfc.section_250_deduction}

**Which is why individuals elect.** {fig:cfc.section_962_election}

**The transition tax.** {fig:cfc.transition_tax} It could be paid over time:
{fig:cfc.transition_installments} And its present status is {fig:cfc.transition_spent}

**And the reporting sits on top.** A United States shareholder of a controlled foreign corporation files
Form 5471 under IRC § 6038, with {fig:intl.6038_penalty} and
{fig:intlpen.6038_credit_reduction}

## Current figures

| Item | Rule |
| --- | --- |
| United States shareholder | {fig:cfc.us_shareholder} |
| Controlled foreign corporation | {fig:cfc.definition} |
| The inclusion | {fig:cfc.net_tested_income} |
| GILTI renamed | {fig:cfc.gilti_renamed} |
| Qualified business asset investment | {fig:cfc.qbai_repealed} |
| Section 250 deduction | {fig:cfc.section_250_deduction} |
| Section 962 election | {fig:cfc.section_962_election} |
| Transition tax | {fig:cfc.transition_tax} |
| Transition tax installments | {fig:cfc.transition_installments} |
| Present status | {fig:cfc.transition_spent} |
| Form 5471 penalty | {fig:intl.6038_penalty} |
| Credit reduction | {fig:intlpen.6038_credit_reduction} |
| Limitation period | {fig:intlpen.limitations} |

## How it works in practice

**Test the shareholder before the corporation** (IRC § 951(b)). Ten percent of vote *or* value,
counting indirect and constructive ownership under § 958. Clients routinely describe a holding as small when attribution from
family members or entities puts them over.

**Then test control** (IRC § 957(a)). More than 50 percent of vote or value held by United States
shareholders — in aggregate, on any day of the year. A company owned 30 percent each by three United States persons is a
controlled foreign corporation; one owned 60 percent by a single foreign person and 40 percent by one
United States person is not.

**Then say plainly that GILTI is gone as a term.** A client or a prior adviser who talks about a GILTI
computation is describing the pre-2025 regime. The inclusion is now net CFC tested income, and the
question "what is the QBAI offset" no longer has an answer.

**The individual's problem is the deduction they cannot have.** The 40 percent deduction is allowed to a domestic
corporation (IRC § 250(a)). An individual United States shareholder is taxed on the inclusion
at ordinary rates with no deduction and, without an election, no deemed-paid foreign tax credit — which
is the whole reason § 962 exists.

**Model the § 962 election rather than assuming it.** It substitutes corporate rate treatment for the
inclusion and opens the deemed-paid credit, at the cost of a second layer of tax when the earnings are
actually distributed. It is an annual election and the arithmetic changes with the foreign rate.

**And treat § 965 as history with a tail.** No new inclusion can arise. What still turns up is a client
part-way through the eight-instalment stream, or a client who never made the § 965 filing at all — in
which case the exposure is a reporting and limitation problem rather than a computational one.

<div class="scenario">
<h3>The 9 percent that was 14</h3>

A client owns 9 percent of the voting stock of a Portuguese company. His adult son owns a further
5 percent. He assumes he is below the threshold.

He is not. The United States shareholder test in § 951(b) counts stock owned indirectly and stock
considered owned under the § 958(b) attribution rules, which reach family members. At 14 percent he is a
United States shareholder, with a Form 5471 obligation and a share of any inclusion. The threshold is
not a test of what he bought.

</div>

<div class="scenario">
<h3>The offset that no longer exists</h3>

A client's controlled foreign corporation manufactures abroad and holds substantial plant. Under the
pre-2025 regime her inclusion was reduced by a deemed return on that tangible property, which brought
it close to nil in most years. Her 2026 computation shows a much larger number and she asks what went
wrong.

Nothing went wrong. Pub. L. 119-21 § 70323(a)(2) struck the subsection defining qualified business asset
investment, so there is no longer any reduction for a deemed return on tangible assets. The same
business, the same plant and the same profit now produce an inclusion where they previously produced
almost none. This is the single largest practical change in the topic and it is invisible in any
material written before July 2025.

</div>

<div class="scenario">
<h3>The election that changed the rate</h3>

An individual United States shareholder has a substantial inclusion from a controlled foreign
corporation that pays tax abroad at a moderate rate. Taxed at his own marginal rate with no deemed-paid
credit, the United States tax is large.

With a § 962 election the inclusion is taxed as if received by a domestic corporation — at the § 11 rate
in lieu of §§ 1 and 55 — and the foreign taxes become creditable under § 960. The election does not make
the income disappear: when the earnings are eventually distributed to him, the distribution is taxable
again beyond the amount of tax already paid. It converts a single high-rate charge into a low-rate
charge now and a further charge later, and whether that is better depends on the foreign rate and on
whether he intends to repatriate.

</div>

<div class="scenario">
<h3>The instalment stream nobody transferred</h3>

A client made a § 965 election in 2018 to pay her transition tax in eight instalments. She changed
advisers twice. The seventh instalment, at 20 percent of the net tax liability, was missed.

The charge itself is long spent — no new § 965 inclusion can arise — but the instalment obligation
survives the passage of time and the change of adviser. Missing an instalment can accelerate the
remaining liability, and the client's file gives no hint of the obligation because there is no annual
form that reminds anyone of it. It is worth asking any client with pre-2018 foreign corporate holdings
whether an election was made.

</div>

<div class="callout trap">

**Counting only stock actually bought.** The 10 percent test counts indirect and constructive ownership
under IRC § 958.

**Testing control shareholder by shareholder.** Section 957(a) aggregates all United States
shareholders and asks whether together they hold more than 50 percent, on any day of the year.

**Calling the inclusion GILTI.** The term was removed from IRC § 951A in 2025; the inclusion is net CFC
tested income.

**Looking for the QBAI offset.** It was repealed, not reduced. There is no deemed return on tangible
assets.

**Giving an individual the § 250 deduction.** It is allowed to a domestic corporation. An individual
reaches comparable treatment only by electing under § 962.

**Treating the § 962 election as free.** It brings a second layer of tax on eventual distribution.

**Expecting a current § 965 inclusion.** The section reaches only the last taxable year of a deferred
foreign income corporation beginning before 1 January 2018.

**Forgetting Form 5471.** The inclusion and the information return are separate obligations, and the
§ 6038(c) credit reduction applies to the reporting failure independently of the tax.

</div>

## How this has changed

Everything structural here is new twice over. The 2017 Act created the § 951A inclusion, the § 250
deduction and the § 965 transition charge as a package, moving the United States from deferral toward a
participation exemption. The 2025 Act rewrote the first two of them.

Pub. L. 119-21 § 70323 renamed the § 951A inclusion, struck the definitions of global intangible
low-taxed income and the net deemed tangible income return, and repealed qualified business asset
investment. In § 250 it renamed foreign-derived intangible income as foreign-derived deduction eligible
income and reset both percentages. The effect is a broader base with a differently-sized deduction, and
the loss of the tangible-asset offset falls hardest on exactly the businesses the offset was designed to
protect — those with real operations and real plant abroad.

Section 965 has not been amended and does not need to be. Its operative sentence is confined to taxable
years beginning before 1 January 2018, so it has ceased to be a charging provision by the passage of
time while remaining fully in force on its own terms. It is the clearest example on the site of a
provision that is simultaneously current law and spent.

## Exam focus

Know the two thresholds cold: 10 percent of vote or value for a United States shareholder, counting
attribution; more than 50 percent held by United States shareholders in aggregate for a controlled
foreign corporation.

Expect the § 962 election to be tested as the individual's route to corporate treatment, and know that
the § 250 deduction itself is not available to an individual.

On § 965, know that it applies to the last taxable year beginning before 1 January 2018, that the
inclusion is the greater of the accumulated post-1986 deferred foreign income at two measuring dates,
and that the eight instalments run 8, 8, 8, 8, 8, 15, 20 and 25 percent.

Material written before July 2025 will describe GILTI and a QBAI offset. Both are gone.

## Check yourself

**1.** A United States person owns 8 percent of a foreign corporation's stock by value and is treated as
owning a further 4 percent under the attribution rules. Is he a United States shareholder?

*Answer: Yes. IRC § 951(b) counts stock owned within the meaning of § 958(a) and stock considered owned
under § 958(b), and 12 percent meets the 10 percent test.*

**2.** Three unrelated United States persons own 20 percent each of a foreign corporation; the rest is
owned by foreign persons. Is it a controlled foreign corporation?

*Answer: Yes. Each is a United States shareholder at 10 percent or more, and together they own 60
percent — more than the 50 percent required by IRC § 957(a), which aggregates United States
shareholders.*

**3.** What happened to the qualified business asset investment offset?

*Answer: It was repealed. Pub. L. 119-21 § 70323(a)(2) struck IRC § 951A(d), which had defined qualified
business asset investment, so the inclusion is no longer reduced by a deemed return on tangible assets.*

**4.** May an individual United States shareholder claim the IRC § 250 deduction?

*Answer: No. Section 250(a)(1) allows it to a domestic corporation. An individual reaches comparable
treatment only by electing under § 962 to be taxed on the inclusion at corporate rates.*

**5.** Can a § 965 transition tax inclusion arise for a 2026 taxable year?

*Answer: No. IRC § 965(a) applies to the last taxable year of a deferred foreign income corporation
beginning before 1 January 2018. What can still arise in 2026 is an instalment obligation under
§ 965(h) or the consequences of a failure to have reported at the time.*
