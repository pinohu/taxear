---
title: "Covered accounts (e.g., FBAR, Form 8938)"
code: "1.6.3.b"
part: 1
domain: "Specialized Returns for Individuals"
section: "International information reporting"
description: "One form reaches accounts, the other assets. Where the branch sits decides the FBAR; what the institution is decides Form 8938. Held directly, most things escape both."
status: published
taxYear: 2026
lastReviewed: "2026-08-21"
reviewedBy: "Draft for N. O. review"
authorities:
  - { type: IRC, ref: "§ 6038D", title: "Information with respect to foreign financial assets", url: "https://www.law.cornell.edu/uscode/text/26/6038D" }
  - { type: IRC, ref: "§ 1471", title: "Withholdable payments to foreign financial institutions", url: "https://www.law.cornell.edu/uscode/text/26/1471" }
  - { type: IRC, ref: "§ 1473", title: "Definitions", url: "https://www.law.cornell.edu/uscode/text/26/1473" }
  - { type: Pub, ref: "FBAR", title: "Report of Foreign Bank and Financial Accounts", url: "https://www.irs.gov/businesses/small-businesses-self-employed/report-of-foreign-bank-and-financial-accounts-fbar" }
  - { type: Pub, ref: "8938 vs FBAR", title: "Comparison of Form 8938 and FBAR requirements", url: "https://www.irs.gov/businesses/comparison-of-form-8938-and-fbar-requirements" }
forms: []
related: ["1.6.3.a", "1.6.3.c", "1.6.3.d", "1.6.3.e", "1.6.3.f"]
changelog:
  - { date: "2026-08-21", summary: "Initial draft. Sets out what each regime actually covers — the IRC § 6038D(b) definition of a specified foreign financial asset and the Bank Secrecy Act's foreign financial account — with the branch rule, signature authority, non-account assets, indirect interests through entities, grantor trusts, and the categories that escape both forms entirely." }
  - { date: "2026-08-25", summary: "Added a plain-language summary, typed scenarios, and glossary marks under the comprehension-layer rollout." }
---

<div class="plain-terms">
This page explains what a U.S. taxpayer must report about money or property tied to a foreign country,
and which of two forms applies. One form looks at foreign bank and financial accounts. The other looks
more broadly at foreign assets, including some that are not accounts at all. Someone with only domestic
accounts and no foreign holdings is not affected by either form. Someone with a foreign account, foreign
stock, or a stake in a foreign business may owe one form, the other, both, or — for some property, like
foreign real estate owned outright — neither. What decides which form applies is usually a small detail:
where an account sits physically, or who issued the asset, more than how large the holding is.
</div>

The two international reporting regimes were built at different times for different purposes, and they
draw their boundaries in different places. The FBAR reaches *accounts*, located outside the United
States. Form 8938 reaches *assets*, held with or issued by foreign persons. Those two ideas overlap
heavily and diverge in ways that decide real cases — an account at the Frankfurt branch of a New York
bank is on one form and not the other, and a portfolio of foreign shares held in a drawer rather than an
account is on the other and not the one. Neither reaches the asset most clients assume is the problem.

## The rule

**What Form 8938 covers.** {fig:covered.8938_definition}

**What the FBAR covers.** {fig:covered.fbar_definition}

**And the exclusions from that.** {fig:fbar.exclusions}

**The branch rule.** {fig:covered.branch_rule}

**Signature authority.** {fig:covered.signature_authority}

**Assets that are not accounts.** {fig:covered.non_account_assets} But
{fig:covered.contents_not_separate}

**Interests held through something else.** {fig:covered.indirect_interest} And
{fig:covered.grantor_trust}

**Insurance and funds.** {fig:covered.insurance_and_funds}

**What escapes both.** {fig:covered.not_reportable} With one refinement:
{fig:covered.real_estate_through_entity}

## Current figures

| Item | Rule |
| --- | --- |
| Specified foreign financial asset | {fig:covered.8938_definition} |
| Foreign financial account | {fig:covered.fbar_definition} |
| FBAR exclusions | {fig:fbar.exclusions} |
| Branch rule | {fig:covered.branch_rule} |
| Signature authority | {fig:covered.signature_authority} |
| Non-account assets | {fig:covered.non_account_assets} |
| Contents of an account | {fig:covered.contents_not_separate} |
| Indirect interests | {fig:covered.indirect_interest} |
| Grantor trusts | {fig:covered.grantor_trust} |
| Insurance and mutual funds | {fig:covered.insurance_and_funds} |
| Real estate through an entity | {fig:covered.real_estate_through_entity} |
| Outside both regimes | {fig:covered.not_reportable} |
| FBAR threshold | {fig:fbar.filing_threshold} |
| FBAR valuation | {fig:intlfile.fbar_valuation} |
| Form 8938 valuation | {fig:intlfile.8938_valuation} |

## How it works in practice

**Ask two different questions, in two different vocabularies.** For the FBAR: is there an account, and
is the institution holding it located outside the United States? For Form 8938 (IRC § 6038D(b)): is
there an asset, and is the institution or issuer or counterparty a foreign person? A client's answer to one does not settle
the other.

**The branch rule is the cleanest discriminator and the one most often got wrong.** An account at a
foreign branch of a domestic bank is FBAR-reportable — the branch is outside the United States — but is
not a Form 8938 asset, because the institution is not a foreign financial institution. The reverse case,
an account at a United States branch of a foreign bank, is on neither form.

**Signature authority is an FBAR concept and not a Form 8938 one.** A bookkeeper or officer with
authority over an employer's foreign account has an FBAR obligation, subject to the exceptions, and no
Form 8938 obligation at all unless they have their own interest. Ask about this explicitly: clients do
not volunteer authority over money that is not theirs.

**Do not report the contents of a reported account.** Where foreign shares sit in an account at a
foreign institution, the account is reported and the holdings inside it are not listed separately. The
same holdings held outside any account are a Form 8938 asset in their own right and are not on the FBAR
at all.

**Say plainly what is outside both.** Foreign real estate held directly, foreign currency in hand,
precious metals in a vault, art and jewellery, and foreign state pension entitlements are not reportable
on either form. Clients who have heard that "foreign assets must be reported" often assume the holiday
apartment is the problem, and it is not — the small bank account opened to pay its utility bills is.

**Watch the entity wrapper.** Holding the same apartment through a foreign company changes the answer
for Form 8938: the apartment is still not reportable, but the interest in the company is a specified
foreign financial asset, and its value includes the property.

<div class="scenario" data-type="baseline">
<h3>The account at the Frankfurt branch</h3>

A client on a two-year assignment in Germany opened a current account at the Frankfurt branch of a large
United States bank, to receive her local salary. It peaked at $84,000.

The account is FBAR-reportable: the branch holding it is located outside the United States, and the
aggregate exceeded the threshold. It is not a Form 8938 specified foreign financial asset, because the
institution maintaining it is not a foreign financial institution. She files an {gloss:fbar} and —
assuming no other foreign assets — no Form 8938, and the answer turns entirely on the corporate identity
of the bank rather than on where she banked.

</div>

<div class="scenario" data-type="boundary">
<h3>The bookkeeper with no money of her own</h3>

A client is the office manager of a company with a supplier account in Mexico. She can authorise
payments from it. She owns nothing abroad.

She has an {gloss:fbar} obligation, subject to the exceptions for certain officers and employees,
because signature or other authority over a foreign financial account triggers the report whether or not
she has any interest in the funds. She has no Form 8938 obligation, because signature authority is not an
interest in a specified foreign financial asset. It is the one common case where the FBAR reaches
someone with no foreign wealth at all.

</div>

<div class="scenario" data-type="fails">
<h3>The shares in the drawer</h3>

A client inherited certificated shares in a French company from his grandmother. They are worth
$310,000. There is no brokerage account; the certificates are registered in his name and kept at home.
He also has no foreign bank account.

He has a Form 8938 obligation and no FBAR obligation. Stock issued by a person other than a United
States person, held outside an account maintained by a financial institution, is a specified foreign
financial asset under IRC § 6038D(b)(2)(A). There is no account for the FBAR to reach. Had the same
shares been held in a French brokerage account, the account would have been on both forms and the shares
would not have been separately listed on either.

</div>

<div class="scenario" data-type="interaction">
<h3>The apartment and the company that owned it</h3>

A client owns a flat in Lisbon worth $480,000 outright. She reports nothing, correctly. Two years later
her adviser restructures the ownership into a Portuguese company of which she is the sole shareholder.

The flat is still not reportable on either form. But her interest in the company is now a specified
foreign financial asset for Form 8938, and its maximum value includes the value of the flat — so a
transaction undertaken for local law reasons has created a reporting obligation on an asset that had
none. The restructuring changed nothing about what she owns and everything about what she must file.

</div>

<div class="callout trap">

**Treating the two regimes as one enquiry.** The FBAR asks about accounts and where they are; Form 8938
asks about assets and who issued or holds them.

**Getting the branch rule backwards.** Foreign branch of a domestic bank: FBAR yes, Form 8938 no.
Domestic branch of a foreign bank: neither.

**Overlooking signature authority.** It is an FBAR trigger and not a Form 8938 one, and it catches
employees who own nothing abroad.

**Listing the contents of a reported account.** The account is reported; the holdings inside it are not
separately reportable on either form.

**Assuming foreign real estate is reportable.** Held directly it is on neither form. Held through a
foreign entity, the entity is a Form 8938 asset and carries the property's value with it.

**Assuming an IRA-held foreign account must be reported.** An account held in an individual retirement
account of which the client is owner or beneficiary is among the FBAR exclusions.

**Reporting a domestic fund that invests abroad.** A domestic mutual fund holding foreign stocks and
securities is on neither form; a foreign mutual fund is on both.

**Treating a foreign state pension as an asset.** Social-security-type benefits provided by a foreign
government are outside both regimes.

</div>

## How this has changed

The FBAR's coverage rests on Bank Secrecy Act regulations that have been substantially settled for
years. The Form 8938 regime arrived with FATCA in 2010, and its definition of a specified foreign financial
asset borrows wholesale from the FATCA withholding definitions (IRC §§ 1471, 1473) — which is why the
Form 8938 boundary tracks the status of the *institution* rather than its location. That single drafting
choice produces the branch rule and most of the divergence between the two forms.

Pub. L. 119-21 amended neither regime. The Service's comparison table remains the working authority for
the asset-by-asset answers, and it is worth checking rather than reasoning from first principles: several
of its rows — indirect interests through entities, grantor trusts, real estate in a wrapper — resolve in
ways the statutes do not obviously predict.

The practical shift over the last decade has been in who is affected. Automatic information exchange
means foreign institutions now report accounts to the Service directly, so an unreported account is far
more likely to be identified than it was, and the population of clients discovering a historic obligation
has grown accordingly. The rules have not moved; the probability of the failure surfacing has.

## Exam focus

Expect an "all of the following except" list of asset types. The reliable discriminators are: real
estate held directly (neither), currency and precious metals held directly (neither), personal property
(neither), foreign state pension benefits (neither), foreign stock outside an account (Form 8938 only),
partnership interests and hedge or private equity funds (Form 8938 only), and signature authority
(FBAR only).

Know the branch rule in both directions, and know that a foreign-issued life insurance or annuity
contract with a cash value is on both forms while a domestic fund investing abroad is on neither.

The IRA exclusion is a recurring FBAR item, as is the point that whether an account produced taxable
income is irrelevant to whether it is reportable.

## Check yourself

**1.** A client holds an account at the Singapore branch of a United States bank. Which form reaches it?

*Answer: The FBAR only. The account is at a financial institution located outside the United States, so
it is a foreign financial account; but the institution is not a foreign financial institution, so it is
not a specified foreign financial asset for Form 8938.*

**2.** A client owns foreign partnership interests worth $220,000 and has no foreign accounts. What must
she file?

*Answer: Form 8938 if she is over the applicable threshold. Foreign partnership interests are specified
foreign financial assets and are not FBAR accounts, so no FBAR arises.*

**3.** A client has signature authority over his employer's foreign bank account but no interest in it.
What must he file?

*Answer: An FBAR, subject to the exceptions for certain officers and employees. Signature or other
authority triggers the FBAR; it is not an interest in a specified foreign financial asset, so Form 8938
does not apply.*

**4.** A client owns a villa in Italy directly, worth $900,000. Is it reportable?

*Answer: No, on either form. Foreign real estate held directly is outside both regimes. Held through a
foreign entity, the entity would be a specified foreign financial asset for Form 8938 and its maximum
value would include the villa.*

**5.** A client holds foreign shares in an account at a foreign bank. Must the shares be listed
separately?

*Answer: No. Where foreign stock or securities are held in a financial account at a foreign financial
institution, the account is subject to reporting but the contents of the account are not separately
reported — on either form.*
