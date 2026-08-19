---
title: "Application process to be an e-file provider"
code: "3.4.3.a"
part: 3
domain: "Completion of the Filing Process"
section: "Electronic filing"
description: "Becoming an Authorized IRS e-file Provider: the three steps, provider options, who counts as a Principal, the suitability check, and the grounds for denial."
status: review
taxYear: 2026
lastReviewed: "2026-08-19"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: Pub, ref: "3112", title: "IRS e-file Application and Participation (Rev. 11-2025)", url: "https://www.irs.gov/pub/irs-pdf/p3112.pdf" }
  - { type: Pub, ref: "1345", title: "Handbook for Authorized IRS e-file Providers of Individual Income Tax Returns", url: "https://www.irs.gov/pub/irs-pdf/p1345.pdf" }
  - { type: IRC, ref: "§ 6695(g)", title: "Failure to be diligent in determining eligibility for certain tax benefits" }
  - { type: Circ230, ref: "§ 10.51", title: "Incompetence and disreputable conduct" }
forms: []
related: ["3.4.3.b", "3.1.3.a", "3.1.2.o", "3.4.3.d", "3.4.3.i", "3.4.3.c"]
changelog:
  - { date: "2026-08-19", summary: "Initial draft against Publication 3112 (Rev. 11-2025)." }
---

## The rule

Nobody transmits a return to the IRS without permission. To participate in IRS e-file a firm must
be an **Authorized IRS e-file Provider**, and that status is obtained by application, suitability
check and assignment of an Electronic Filing Identification Number. Publication 3112 is the
governing document, and it reduces the process to three steps: access the e-file Application through
e-Services, complete and submit it, and pass the suitability check.

The application is a firm application with individual components. Every **Principal** and
**Responsible Official** listed on it must create an e-Services account and enter their own
information, and each must satisfy three baseline requirements: be a United States citizen or an
alien lawfully admitted for permanent residence, be {fig:efile.provider_min_age}, and meet
applicable state and local licensing or bonding requirements for the preparation and collection of
tax returns.

Fingerprinting is the default. A Principal or Responsible Official must be fingerprinted **unless**
they provide professional status information — the relevant credentials being attorney, certified
public accountant, **enrolled agent**, officer of a publicly traded corporation, or bonded bank
official. An enrolled agent applying to become an ERO therefore enters credential number and state
of jurisdiction rather than scheduling a fingerprint appointment. Anyone without those credentials
must use the IRS Authorized Vendor for fingerprinting, scheduled through the link on the e-file
Application Summary page.

Each Principal and Responsible Official answers a set of personal questions, acknowledges the
Privacy Act and Paperwork Reduction Act notice, the FBI Privacy Act Statement and the Terms of
Agreement, and signs by entering the PIN chosen when the account was created — thereby declaring
**under penalty of perjury** that the personal information is true.

## Current figures

| Item | Value |
| --- | --- |
| Time to approve an application | {fig:efile.application_processing} |
| Minimum age for a Principal or Responsible Official | {fig:efile.provider_min_age} |
| Window to request reactivation after removal for inactivity | {fig:efile.reactivation_window} |
| Online Provider EFIN prefixes | {fig:efile.online_provider_prefixes} |
| Large Taxpayer provider option | {fig:efile.large_taxpayer} |

Plan for the approval time. An application submitted in January for the current filing season may
not be approved in time for it.

## How it works in practice

**Choose the provider options deliberately.** The application asks the applicant to select from
Electronic Return Originator, Intermediate Service Provider, Online Provider, Transmitter, Software
Developer, Reporting Agent and Large Taxpayer. More than one may be chosen, and Publication 3112
says to choose only the options the business intends to use.

- **Electronic Return Originator (ERO)** begins the process of electronic submission of returns.
  This is the option a practice that e-files for clients selects.
- **Transmitter** sends electronic return data directly to the IRS and must have software and
  computers that interface with the IRS. An ERO may also apply to be a transmitter, or may contract
  with an accepted third-party transmitter.
- **Intermediate Service Provider** processes return data, typically from an ERO or an individual
  taxpayer, and forwards it to a transmitter.
- **Software Developer** writes origination or transmission software to IRS specifications.
- **Reporting Agent** originates and/or transmits certain returns for clients. Reporting agents are
  **companies, not individuals**, performing payroll services, and must submit Form 8655 before or
  with the e-file application.
- **Online Provider** lets taxpayers self-prepare by entering data directly into commercial or
  downloaded software or through an online site. It is a **secondary role**: the business must also
  choose another option such as Software Developer, Transmitter or Intermediate Service Provider.
- **Large Taxpayer** is an entity meeting the asset or partner test that originates the electronic
  submission of its own returns. Publication 3112 notes that although it is a provider option on the
  application, a Large Taxpayer is **not** an Authorized IRS e-file Provider.

An ERO that uses a website to collect information from taxpayers in order to originate returns is
still an ERO, not an Online Provider. The distinction is who keys the return.

**The suitability check reaches the firm and every individual.** During processing the IRS conducts
a suitability check on the firm and on all Principals and Responsible Officials. It may include a
tax compliance check, a check for prior non-compliance with IRS e-file requirements, and a criminal
background check.

**The grounds for denial are broad and largely conduct-based.** Publication 3112 lists them as
including, but not limited to: indictment or conviction of any criminal offence, or an active IRS
criminal investigation; failure to file accurate federal, state or local returns; failure to pay any
federal, state or local tax liability; assessment of fraud penalties; suspension or disbarment from
practice before the IRS or a state or local tax agency; disreputable conduct or other facts adversely
affecting IRS e-file; misrepresentation on the application, including using another person's
identifying information without permission; unethical practices in return preparation;
non-compliance with the paid preparer due diligence requirement (IRC § 6695(g)); stockpiling returns
before acceptance; and directly or indirectly employing, accepting assistance from, accepting
employment with, or sharing fees with any firm or individual denied, suspended or expelled from
IRS e-file — including any individual whose actions caused a firm's denial. The last of these
catches firms that hire a disqualified person, and it is the ground most often stumbled into rather
than chosen.

**Denial is usually appealable — with one exception.** Where a firm or an individual fails the
suitability check, the IRS notifies the applicant of the denial, the date they may reapply, and that
they may reapply sooner if the suitability issues are resolved. In most circumstances the denial may
be appealed through Administrative Review. It may **not** be appealed where the denial rests on a
federal or state court injunction against filing returns, or another federal or state legal action
prohibiting participation. If that injunction or action expires or is reversed, the applicant may
reapply.

**Acceptance is not annual, but inactivity is fatal.** Once accepted, a provider does not reapply
each year so long as it continues to e-file and to satisfy suitability requirements. But a provider
that files no returns in **both** the current and prior processing year may be notified of removal;
it can be reactivated if it replies within the window in the table and requests reactivation, and
otherwise must reapply.

**The EFIN belongs to the IRS, not to the practice.** Only the IRS may issue an EFIN or an ETIN.
Providers must protect them from unauthorised use and never share them, which expressly includes
accepting payment for their use — renting, leasing or purchasing — and transferring them to another
entity when the business is sold, gifted or otherwise disposed of. The acquiring entity must obtain
its own. A provider found renting, leasing or purchasing another provider's EFIN, or letting
someone who has not passed suitability use it, **will be sanctioned**.

<div class="scenario">
<h3>The enrolled agent who booked a fingerprint appointment</h3>

Adaeze Lindqvist-Mbeki, an enrolled agent, starts an e-file application for her new practice and
begins arranging an electronic fingerprinting appointment through the vendor link.

She does not need one. Principals and Responsible Officials must be fingerprinted **unless** they
provide professional status information, and enrolled agent is one of the listed credentials
alongside attorney, CPA, officer of a publicly traded corporation and bonded bank official. Entering
her enrolment credential number and state of jurisdiction on the application replaces the
fingerprinting requirement. Her office manager, who is also listed as a Responsible Official and
holds no credential, does need the appointment — the requirement is per individual, not per firm.
</div>

<div class="scenario">
<h3>Buying a practice, and the EFIN that did not come with it</h3>

Isidoro Brennan-Achebe buys a small tax practice, including its client list, its software and,
he assumes, its EFIN. He plans to file the coming season under the seller's number while his own
application processes.

The EFIN does not transfer. Publication 3112 is explicit that EFINs and ETINs may not be transferred
to another entity when a business changes hands by sale, gift or other disposition, and that only
the IRS may issue them. Filing under the seller's number would be allowing someone who has not
passed suitability as that firm to use the EFIN — a sanctionable act, and one the IRS is
specifically watching for. The right sequence is to submit a new application well before the season,
allowing for the approval period, and to arrange with the seller for returns to be transmitted under
the seller's own continuing authorisation only if the seller genuinely remains the provider.
</div>

<div class="scenario">
<h3>The associate nobody checked</h3>

A two-partner firm takes on a contract preparer to handle overflow. Nobody asks why he left his
previous employer. He was expelled from IRS e-file two years earlier following a due diligence
investigation.

The firm has walked into one of the enumerated grounds for denial: directly or indirectly employing
or accepting assistance from any individual expelled from participating in IRS e-file. The ground
applies to the firm, not only to the individual, and the firm's own participation is now at risk.
The check that would have prevented it is a short one — ask, and confirm the answer — and
Publication 3112 separately requires that providers use only other Authorized IRS e-file Providers
to perform IRS e-file activities.
</div>

<div class="callout trap">
<strong>An enrolled agent credential replaces fingerprinting, not suitability.</strong> Credentialed
Principals skip the fingerprint appointment. They do not skip the tax compliance check, the prior
non-compliance check or the criminal background check, all of which apply to every individual listed
on the application.
</div>

<div class="callout trap">
<strong>Online Provider cannot stand alone.</strong> It is a secondary provider option and must be
paired with Software Developer, Transmitter or Intermediate Service Provider. Online Provider EFINs
also carry specific prefix codes, which must appear with each online return.
</div>

<div class="callout trap">
<strong>Reporting Agent is a company role.</strong> Reporting agents are companies, not individuals,
that perform payroll services for other businesses, and Form 8655 must reach the IRS before or with
the e-file application. An individual practitioner cannot select it.
</div>

<div class="callout trap">
<strong>A Large Taxpayer is not an Authorized IRS e-file Provider.</strong> Publication 3112 flags
this specifically: the option exists on the application, but selecting it does not confer provider
status. Large Taxpayers follow Publication 4163 rather than the ordinary route.
</div>

<div class="callout trap">
<strong>Two dormant years and the status goes.</strong> No returns filed in both the current and
prior processing year triggers a removal notice. The reactivation reply window is short and it is
easy to miss during an off-season — a practice pausing e-filing for a year should diarise it.
</div>

## How this has changed

The application moved online long ago, but the identity layer around it has tightened steadily. The
process now runs through e-Services with a Secure Access account, each Principal and Responsible
Official signs the Terms of Agreement by PIN under penalty of perjury, and fingerprinting runs
through a single IRS Authorized Vendor with appointments scheduled from the Application Summary page
— replacing the paper fingerprint cards practitioners of an earlier generation will remember.

The list of grounds for denial has grown in the same direction. Misrepresentation on the application
now expressly includes using another individual's personal information without permission — that is,
identity theft — and non-compliance with the § 6695(g) paid preparer due diligence requirement
appears as a named ground. The prohibition on renting, leasing or purchasing an EFIN carries an
explicit statement that a provider doing so **will** be sanctioned, which is stronger than the
permissive language the same publication uses elsewhere.

Publication 3112 is revised regularly — the edition this page is written against is dated November
2025. Re-read it each season rather than relying on a remembered version; the provider option
definitions and the denial grounds are where it changes.

## Exam focus

Know that participation requires an application through e-Services, a suitability check covering the
firm and every Principal and Responsible Official, and an EFIN issued by the IRS. Know that
fingerprinting is required unless the individual provides professional status information, and that
enrolled agent is one of the qualifying credentials. Know that an EFIN may never be sold, rented,
leased or transferred with a business, and that only the IRS may issue one. Be able to distinguish
ERO from Transmitter and to recognise that Online Provider is a secondary option. The 45-day
processing period is worth remembering; the EFIN prefix codes are not.

## Check yourself

**1. An enrolled agent is listed as a Principal on an e-file application. What does the professional
status information she provides replace?**

A. The tax compliance check
B. The fingerprinting requirement
C. The criminal background check
D. The Terms of Agreement signature

*Answer: B. Attorneys, CPAs, enrolled agents, officers of publicly traded corporations and bonded
bank officials provide credentials instead of being fingerprinted; every other check still applies.*

**2. A practitioner sells her practice, including the client list and software. What happens to her
EFIN?**

A. It transfers to the buyer with the business
B. It may be leased to the buyer for one filing season
C. It does not transfer; the buyer must obtain its own EFIN from the IRS
D. It transfers if both parties notify the e-help Desk

*Answer: C. EFINs may not be transferred on a sale, gift or other disposition, and only the IRS may
issue them.*

**3. Which provider option cannot be selected on its own?**

A. Electronic Return Originator
B. Transmitter
C. Online Provider
D. Software Developer

*Answer: C. Online Provider is a secondary role and must be paired with Software Developer,
Transmitter or Intermediate Service Provider.*

**4. Which is not among the enumerated grounds on which the IRS may deny participation in IRS
e-file?**

A. Failure to pay a state or local tax liability
B. Employing an individual expelled from participating in IRS e-file
C. Operating a practice with fewer than three employees
D. Stockpiling returns before acceptance to participate

*Answer: C. Firm size is not a criterion; the grounds are conduct, compliance and suitability based.*

**5. A provider files no returns in either the current or the prior processing year. What follows?**

A. Nothing; acceptance is permanent once granted
B. The IRS may notify the provider of removal, with a limited window to request reactivation
C. The provider must be fingerprinted again
D. The EFIN is automatically reassigned to another firm

*Answer: B. If the provider does not reply and request reactivation within the window, it must
reapply.*
