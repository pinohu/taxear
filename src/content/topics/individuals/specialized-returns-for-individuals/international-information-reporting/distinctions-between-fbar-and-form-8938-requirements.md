---
title: "Distinctions between FBAR and Form 8938 requirements"
code: "1.6.3.d"
part: 1
domain: "Specialized Returns for Individuals"
section: "International information reporting"
description: "Six axes of difference, and only one of them is the threshold. They disagree about who files, what counts, what an interest is, and even where the United States ends."
status: published
taxYear: 2026
lastReviewed: "2026-08-21"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 6038D", title: "Information with respect to foreign financial assets", url: "https://www.law.cornell.edu/uscode/text/26/6038D" }
  - { type: Statute, ref: "31 U.S.C. § 5314", title: "Records and reports on foreign financial agency transactions", url: "https://www.law.cornell.edu/uscode/text/31/5314" }
  - { type: Statute, ref: "31 U.S.C. § 5321", title: "Civil penalties", url: "https://www.law.cornell.edu/uscode/text/31/5321" }
  - { type: Pub, ref: "8938 vs FBAR", title: "Comparison of Form 8938 and FBAR requirements", url: "https://www.irs.gov/businesses/comparison-of-form-8938-and-fbar-requirements" }
  - { type: Pub, ref: "FBAR", title: "Report of Foreign Bank and Financial Accounts", url: "https://www.irs.gov/businesses/small-businesses-self-employed/report-of-foreign-bank-and-financial-accounts-fbar" }
forms: []
related: ["1.6.3.a", "1.6.3.b", "1.6.3.c", "1.6.3.e", "1.6.3.f"]
changelog:
  - { date: "2026-08-21", summary: "Initial draft. Compares the two regimes across the six axes on which they differ — who files, what is covered, what an interest is, the threshold structure, valuation and timing, and where the filing goes — including the territories point on which they define the United States differently, and the rule that neither filing substitutes for the other." }
  - { date: "2026-08-25", summary: "Added a plain-language summary, a decision diagram walking through which form a holding lands on, typed scenarios, and glossary marks under the comprehension-layer rollout." }
diagram:
  archetype: "decision"
  caption: "Which form does a foreign holding land on?"
  tests:
    - { test: "Is it held in a financial account, not just owned outright?", result: "No account — check Form 8938 only", outcome: "fail" }
    - { test: "Account sits at a branch located outside the United States?", result: "FBAR applies to the account", outcome: "pass" }
    - { test: "Is the institution itself a foreign financial institution?", result: "Form 8938 applies too, not just the FBAR", outcome: "pass" }
    - { test: "No account at all — asset issued by or held with a foreign person?", result: "Form 8938 only; there is no FBAR account", outcome: "pass" }
    - { test: "Held directly — real estate, currency, metals, personal property?", result: "Neither form applies", outcome: "fail" }
---

<div class="plain-terms">
The federal government has two separate reports for foreign money and property, and they do not always
agree. This page lines the two up side by side and shows where they differ. It is written for someone
who already knows they have some foreign reporting to do, and wants to know exactly which report covers
which account or asset, and when. It affects U.S. taxpayers with any foreign account, foreign investment,
or the power to sign for someone else's foreign account. The two reports disagree about who must file,
what kinds of holdings count, what counts as an interest in something, how the dollar limits are built,
how value is measured, and even whether a U.S. territory counts as part of the United States. Filing one
report never covers the other. Each must be worked out on its own, every time.
</div>

Practitioners describe these two as overlapping, which understates the problem. They overlap on the
common case — a bank account abroad, owned outright, worth a lot — and diverge on almost everything
around it. Six things differ, and only one of them is the number everybody remembers. The two forms
disagree about who has to file, about what counts as a covered thing, about what it means to have an
interest in one, about how the threshold is shaped, about how to value what is reported, and about where
the filing goes. On one point they disagree about the geography of the United States itself.

## The rule

**Who files.** Form 8938: {fig:distinct.who_8938} The FBAR: {fig:distinct.who_fbar}

**Where the United States ends.** {fig:distinct.territories}

**What is covered.** Form 8938 reaches assets: {fig:covered.8938_definition} The FBAR reaches accounts:
{fig:covered.fbar_definition} From that flow the branch rule —
{fig:covered.branch_rule} — and the treatment of things that are not accounts at all:
{fig:covered.non_account_assets}

**What an interest is.** {fig:distinct.interest_test} Which is why
{fig:covered.signature_authority}

**How the thresholds are shaped.** {fig:distinct.threshold_shape}

**How value is measured.** Form 8938: {fig:intlfile.8938_valuation} The FBAR:
{fig:intlfile.fbar_valuation}

**When and where.** Form 8938: {fig:intlfile.8938_due} The FBAR: {fig:intlfile.fbar_due}

**And the rule that governs all of it.** {fig:distinct.no_substitution}

## Current figures

| Axis | Form 8938 | FBAR |
| --- | --- | --- |
| Who files | {fig:distinct.who_8938} | {fig:distinct.who_fbar} |
| Territories | Outside the United States | {fig:distinct.territories} |
| What is covered | {fig:covered.8938_definition} | {fig:covered.fbar_definition} |
| Branch rule | {fig:covered.branch_rule} | — |
| Non-account assets | {fig:covered.non_account_assets} | — |
| Signature authority | {fig:covered.signature_authority} | — |
| Interest test | {fig:distinct.interest_test} | — |
| Threshold shape | {fig:distinct.threshold_shape} | {fig:fbar.filing_threshold} |
| Valuation | {fig:intlfile.8938_valuation} | {fig:intlfile.fbar_valuation} |
| Timing | {fig:intlfile.8938_due} | {fig:intlfile.fbar_due} |
| Penalty | {fig:intlpen.8938} | {fig:intlpen.fbar_willful} |
| Substitution | {fig:distinct.no_substitution} | — |

## How it works in practice

**Run both analyses, always** (IRC § 6038D(b) for one, 31 U.S.C. § 5314 for the other). The efficient
instinct — work out the foreign position once and apply it
to both forms — is the source of most errors in this area. Take the client's holdings and pass them
through two independent filters.

**The four cases are all live.** Some things are on both forms (a foreign bank account owned outright).
Some are on Form 8938 only (foreign shares held outside an account, partnership interests, hedge fund
interests). Some are on the FBAR only (an account at a foreign branch of a domestic bank, signature
authority over someone else's account). And some are on neither (real estate, currency, metals and
personal property held directly). Knowing which quadrant a holding falls in is the entire skill.

**The interest tests are genuinely different.** Form 8938 asks whether the asset would produce something
reportable on the income tax return. The FBAR asks about record ownership, legal title, agency,
sufficient interest in a title-holding entity, or signature authority. A client can have an FBAR
interest in an account whose income is not theirs, and a Form 8938 interest in an asset they do not
legally own.

**The territories point catches people who move.** A resident alien of a United States territory is
subject to FBAR reporting; for Form 8938 the territories are outside the United States, which affects
which residence threshold pair applies. It is the one place where "the United States" means two
different things on the same client's file.

**Diary two dates.** The FBAR sits on the calendar year with its own automatic extension; Form 8938
rides the income tax return and its extensions. A client on a fiscal year, or one who extends the
return, has two different deadlines in the same season.

**Say the substitution rule out loud to the client.** People who have filed one for years and then learn
of the other assume the first covered them. It never did, and the penalty regimes are separate too.

<div class="scenario" data-type="baseline">
<h3>Four holdings, four answers</h3>

A client holds: a savings account at a bank in Chile; shares in a Chilean company registered in his own
name with no broker; an account at the Santiago branch of a United States bank; and signature authority
over his employer's Chilean payroll account.

The savings account is on both forms. The registered shares are on Form 8938 only — a security issued
by a non-United States person, held outside an account. The Santiago branch account is on the FBAR only
— the branch is abroad, but the institution is not a foreign financial institution. The payroll account
is on the FBAR only, as signature authority. One client, one country, and each of the four quadrants
occupied.

</div>

<div class="scenario" data-type="interaction">
<h3>The account whose income was not hers</h3>

A client is named on her elderly father's account in Canada so she can manage his affairs. The interest
is reported on his return, not hers, and she takes nothing from it.

She has an {gloss:fbar} obligation. The FBAR interest test reaches an owner of record or holder of legal
title regardless of whose income it is, and would reach her on signature authority in any event. She has
no Form 8938 obligation: nothing from the account is required to be reflected on *her* income tax return,
which is the Form 8938 test. Two forms, two questions, one answer each — and they differ.

</div>

<div class="scenario" data-type="timing">
<h3>The move to San Juan</h3>

A client relocates to Puerto Rico and continues to hold accounts in Spain.

For the FBAR nothing changes: a resident of a United States territory is a United States person subject
to reporting, and the territory is part of the United States for this purpose. For Form 8938 the
territories are outside the United States, so she is now a specified individual living outside it, and
the threshold pair that applies to her jumps fourfold. The same relocation makes one form no easier and
the other much easier.

</div>

<div class="scenario" data-type="procedural">
<h3>Twenty years of the wrong form</h3>

A client has filed an {gloss:fbar} faithfully every year since 2004 for an account in Australia that has
grown to $460,000. He has never filed Form 8938 and believes the FBAR covered his obligations.

It never did. The account is also a specified foreign financial asset and, at that value, over the
threshold for every filing status. Each unfiled Form 8938 carries its own penalty, and — the more
serious consequence — IRC § 6501(c)(8) has kept the {gloss:assessment} period open for every year in
which the form was required. His diligence on one form has done nothing to close the years on the other.

</div>

<div class="callout trap">

**Assuming one filing covers the other.** It does not, and never has.

**Applying the Form 8938 residence thresholds to a territory resident wrongly.** The territories are
outside the United States for Form 8938 and inside it for the FBAR.

**Using the FBAR interest test for Form 8938.** Signature authority is not a Form 8938 interest; the
Form 8938 test asks what the income tax return must reflect.

**Assuming both forms use a last-day test.** Only Form 8938 does. The FBAR has a single any-time
aggregate figure.

**Expecting the same deadline.** Form 8938 follows the return and its extensions; the FBAR is due
15 April with its own automatic extension to 15 October.

**Filing the FBAR with the return.** It goes to FinCEN electronically and never with a tax return.

**Treating the penalties as one exposure.** They are separate regimes in separate titles, administered
differently, and both can apply to the same account.

</div>

## How this has changed

The divergence is an accident of history rather than a design. The FBAR is a 1970 Bank Secrecy Act
report aimed at money movement, administered by FinCEN, with concepts — signature authority, financial
interest through a majority-owned entity — drawn from anti-money-laundering practice. Form 8938 is a
2010 tax provision aimed at unreported income (IRC § 6038D), administered by the Service, with concepts
drawn from the FATCA withholding rules, which is why it follows the status of the institution rather than its location.

Nothing has been done to reconcile them. Proposals to merge the two filings have been made repeatedly
and none has been enacted; Pub. L. 119-21 did not touch either regime. The practical consequence is that
the Service's comparison table, rather than either statute, is the working authority — and that the table
is worth re-reading each year rather than remembered, because several of its rows resolve in ways neither
statute predicts.

What has changed is the cost of getting it wrong. Automatic exchange of information means the Service
now receives account data directly from foreign institutions, so the historic pattern — a client who
filed one form for years and no one noticed the other was missing — resolves far more often, and
resolves against the client.

## Exam focus

Expect a matrix question: a list of holdings, and which form each goes on. Work the two filters
separately — account and location for the FBAR, asset and institution status for Form 8938.

The four highest-yield discriminators are the branch rule in both directions, signature authority
(FBAR only), non-account foreign securities and partnership interests (Form 8938 only), and the fact
that neither reaches directly held real estate, currency, metals or personal property.

Know that only Form 8938 has a last-day test and residence-based thresholds, that only the FBAR treats
the territories as part of the United States, and that filing one has never satisfied the other.

## Check yourself

**1.** Which form reaches signature authority over an account in which the filer has no interest?

*Answer: The FBAR only, subject to the exceptions for certain officers and employees. Signature
authority is not an interest in a specified foreign financial asset for Form 8938.*

**2.** A specified individual holds an account at the London branch of a United States bank. Which form
reaches it?

*Answer: The FBAR only. The account is located outside the United States, but the institution
maintaining it is not a foreign financial institution.*

**3.** Are United States territories part of the United States for these purposes?

*Answer: They differ. For Form 8938 the territories are outside the United States; for the FBAR resident
aliens of the territories and territory entities are subject to reporting.*

**4.** A client's foreign accounts peaked at $60,000 in June and stood at $48,000 on the last day of the
year. She is unmarried and lives in the United States, and has no other foreign assets. What must she
file?

*Answer: The FBAR only. The aggregate exceeded $10,000 at a time during the year, so the FBAR is
required. For Form 8938 the thresholds for an unmarried specified individual living in the United States
are more than $50,000 on the last day of the year or more than $75,000 at any time during it, and
neither is met — $48,000 on the last day and $60,000 at the peak.*

**5.** Does filing an FBAR satisfy the Form 8938 requirement?

*Answer: No. The two are separate regimes under different titles of the United States Code, administered
by different agencies, with separate penalties; neither filing substitutes for the other.*
