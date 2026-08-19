---
title: "Data security"
code: "3.4.2.b"
part: 3
domain: "Completion of the Filing Process"
section: "Record maintenance"
description: "Protecting taxpayer data is a legal obligation, not a best practice. The FTC Safeguards Rule, the written plan every preparer must have, and what to do after a breach."
status: published
taxYear: 2026
lastReviewed: "2026-08-19"
reviewedBy: "I. Ohu"
authorities:
  - { type: Pub, ref: "4557", title: "Safeguarding Taxpayer Data — A Guide for Your Business", url: "https://www.irs.gov/pub/irs-pdf/p4557.pdf" }
  - { type: Pub, ref: "1345", title: "Handbook for Authorized IRS e-file Providers of Individual Income Tax Returns (Rev. 12-2025)", url: "https://www.irs.gov/pub/irs-pdf/p1345.pdf" }
  - { type: Pub, ref: "3112", title: "IRS e-file Application and Participation (Rev. 11-2025)", url: "https://www.irs.gov/pub/irs-pdf/p3112.pdf" }
  - { type: Statute, ref: "Gramm-Leach-Bliley Act", title: "Financial institution safeguards", url: "https://www.irs.gov/pub/irs-pdf/p4557.pdf" }
  - { type: IRC, ref: "§ 7216", title: "Disclosure or use of information by preparers of returns" }
  - { type: IRC, ref: "§ 6713", title: "Disclosure or use of information by preparers of returns — civil penalty" }
forms: []
related: ["3.4.2.a", "3.4.3.f", "3.2.6.i"]
changelog:
  - { date: "2026-08-19", summary: "Initial draft against Publication 4557." }
---

## The rule

Publication 4557 opens with a sentence that decides how this topic should be taught: **protecting
taxpayer data is the law.** Federal law gives the Federal Trade Commission authority to set data
safeguard regulations for various entities, including professional tax return preparers, and under
the FTC Safeguards Rule tax return preparers **must create and enact security plans to protect
client data**. Failure to do so may result in an FTC investigation.

The route by which a tax practice became a regulated financial institution is worth knowing. The
Gramm-Leach-Bliley Act requires companies defined under that law as "financial institutions" to
ensure the security and confidentiality of consumer information, and **the definition of financial
institutions includes professional tax preparers**. Implementing the Act, the FTC issued the
Safeguards Rule requiring institutions under its jurisdiction to keep customer information secure,
including by developing a **written information security plan** describing the programme.

The plan must be appropriate to the company's size and complexity, the nature and scope of its
activities, and the sensitivity of the customer information it handles. Publication 4557 lists what
every company must do as part of it:

1. **Designate a qualified individual** responsible for overseeing, implementing and enforcing the
   information security programme.
2. **Implement multi-factor authentication** for anyone accessing customer information on the system.
3. **Identify and assess the risks** to customer information in each relevant area of operations, and
   evaluate the effectiveness of current safeguards.
4. **Design and implement a safeguards programme**, and regularly monitor and test it.
5. **Select service providers** that can maintain appropriate safeguards, contractually require them
   to do so, and oversee their handling of customer information.
6. **Evaluate and adjust** the programme in light of changes in the business, or the results of
   testing and monitoring.
7. **Provide security awareness training** and schedule regular refreshers.

Separately, Online Providers must follow {fig:datasec.online_provider_standards}, and every
Authorized IRS e-file Provider is subject to the safeguarding obligations in Publication 3112.

## Current figures

| Item | Requirement |
| --- | --- |
| Multi-factor authentication | {fig:datasec.mfa_factors} |
| Password strength | {fig:datasec.password_length} |
| Areas a plan must address | {fig:datasec.plan_areas} |
| Online Provider standards | {fig:datasec.online_provider_standards} |

## How it works in practice

**Multi-factor authentication is not scaled to firm size.** Publication 4557 states that the
requirement applies to **all companies regardless of size**. A sole practitioner is as squarely
within it as a national firm, and "we are too small for that" is not an available position.

**The basic steps are concrete, and most are cheap.** Publication 4557's list for tax professionals
includes: recognising phishing e-mails, particularly those purporting to come from the IRS,
e-Services, a tax software provider or a cloud storage provider, and never opening an embedded link
or attachment from a suspicious message; installing anti-malware and anti-virus software on **all**
devices — laptops, desktops, routers, tablets and phones — set to update automatically; strong,
unique passwords with a password manager considered; encrypting sensitive files and e-mails,
especially those carrying personally identifiable information; backing up sensitive data to a secure
external source **not connected full-time to a network**; making a final review of return
information, especially direct deposit details, before e-filing; wiping or destroying old hard
drives and printers containing sensitive data; limiting access to those who need it; implementing
audit logs recording who did what and when; and a clean desk policy.

**Two of the steps are specific to practitioners and often skipped.** Check e-file applications and
PTIN accounts **weekly** for the total returns filed under the firm's EFINs and PTINs, and deactivate
unused EFINs — a stolen EFIN reveals itself as a return count that does not match the firm's own
records. And withdraw outstanding powers of attorney and tax information authorizations for people
who are no longer clients: an authorization left in place is a live disclosure channel and a live
liability.

**Employee management is part of the plan, not adjacent to it.** Publication 4557's checklist
includes checking references or running background checks before hiring anyone who will have access
to customer information; having every new employee sign an agreement to follow the firm's
confidentiality and security standards; limiting access to those with a business reason to see the
information; requiring strong, regularly changed passwords with no sharing and a unique password per
person; password-activated screen savers; and policies for laptops and mobile devices, including
storing them securely and encrypting the client information they hold.

**Report a breach immediately, and to the right place.** Publication 4557 and Publication 3112 both
direct that any suspected data theft or data loss be reported **immediately** to the appropriate IRS
Stakeholder Liaison. Publication 4557 additionally addresses reporting to state agencies and
responding to and recovering from a loss. Reporting is not contingent on completing an internal
investigation or on being certain that data left the building.

**Disclosure rules run in parallel.** Disclosure of return information among providers for the
purpose of preparing a return is permitted without consent, but any other disclosure or use without
the taxpayer's consent exposes the practitioner to a criminal penalty (IRC § 7216) and a civil
penalty (IRC § 6713). A data security failure and an unauthorised disclosure are different wrongs
that frequently arise from the same incident.

**Tell clients about the IP PIN.** Publication 4557 lists educating clients about the availability
of the Identity Protection PIN among the basic steps. It is now open to anyone with a social security
number or ITIN who can verify their identity, as a proactive measure rather than a remedy.

<div class="scenario">
<h3>The return count that did not match</h3>

Ottavia Fernsby-Mwangi checks her e-file application weekly, as Publication 4557 recommends. In late
February the total returns filed under her EFIN is thirty-one higher than her own records show.

That gap is the signal the weekly check exists to produce. Someone is filing under her EFIN. She
reports the suspected data theft immediately to the appropriate IRS Stakeholder Liaison rather than
investigating first, because the reporting instruction is not conditioned on certainty. The practices
that made the discovery possible — a weekly check and reconcilable internal records — are the whole
of the defence here; a firm that checks in June finds out in June.
</div>

<div class="scenario">
<h3>The plan that was a folder of software licences</h3>

A three-person practice is asked by its liability insurer for its written information security plan.
It produces a folder containing anti-virus licences, a password policy and a note about backups.

That is not a plan. The Safeguards Rule requires a **written** information security plan describing
the programme, appropriate to the firm's size and complexity, and Publication 4557 sets out what it
must contain: a designated qualified individual, multi-factor authentication, a risk assessment across
each relevant area of operations, a designed safeguards programme that is monitored and tested,
service provider selection and oversight with contractual safeguards requirements, periodic
evaluation and adjustment, and security awareness training with refreshers. Publication 5708 exists
to help create one. The controls the firm already has are inputs to the plan, not a substitute for
it, and the absence of one may draw an FTC investigation.
</div>

<div class="scenario">
<h3>The authorization nobody withdrew</h3>

A client leaves for another firm in 2023. The Form 2848 filed in 2021 remains on the IRS's Centralized
Authorization File. In 2026 the old firm suffers a phishing compromise, and the attacker uses the
practitioner's e-Services access to pull transcripts.

The former client's transcripts are among them, because the authorization was never withdrawn.
Publication 4557 lists withdrawing outstanding powers of attorney and tax information authorizations
for people who are no longer clients among the basic security steps, and this is why: an authorization
is a standing right of access that survives the engagement unless someone ends it. The remediation is
now a breach notification to a person who has not been a client for three years.
</div>

<div class="callout trap">
<strong>A tax preparer is a "financial institution."</strong> Under the Gramm-Leach-Bliley Act's
definition as the FTC applies it. This is the doorway to the whole Safeguards Rule obligation and it
surprises practitioners who assume the rule is about banks.
</div>

<div class="callout trap">
<strong>Multi-factor authentication has no small-firm exemption.</strong> Publication 4557 says the
requirement applies to all companies regardless of size, and specifies at least two of the three
factor types.
</div>

<div class="callout trap">
<strong>Report first, investigate second.</strong> The instruction is to report suspected data theft
or loss immediately to the appropriate IRS Stakeholder Liaison. Waiting until the scope is understood
inverts the sequence and costs the days in which fraudulent returns get filed.
</div>

<div class="callout trap">
<strong>Backups connected full-time to the network are not backups.</strong> Publication 4557 says to
back up to a secure external source not connected full-time to a network — the point being
ransomware, which encrypts everything it can reach.
</div>

<div class="callout trap">
<strong>Old hardware carries client data out of the office.</strong> Hard drives **and printers**.
Publication 4557 names both. A traded-in office printer with a populated internal drive is a data
loss nobody notices.
</div>

## How this has changed

Data security moved from advice to obligation over roughly a decade. The Security Summit — the IRS
working with state tax agencies and the tax industry — was formed in response to a wave of
refund fraud, and Publication 4557 frames the current guidance as its product, noting that as the
Summit's safeguards make progress, identity thieves need more taxpayer data and "have placed tax
practitioners firmly in their sights."

The FTC's 2021 amendments to the Safeguards Rule, effective in 2023, put specific technical
requirements into what had been a flexible standard. The designated **qualified individual** and the
**multi-factor authentication** requirement are the two that changed practice most, because both are
binary — a firm either has them or does not — where the previous formulation asked only for
reasonable safeguards. Publication 4557 now states both as requirements of the plan rather than as
recommendations.

Publication 5708 was added to help practitioners produce the written plan itself, which is a fair
signal about how many firms were found not to have one.

## Exam focus

Know that protecting taxpayer data is a legal obligation arising under the Gramm-Leach-Bliley Act and
the FTC Safeguards Rule, that the definition of "financial institution" includes professional tax
preparers, and that the Rule requires a **written information security plan**. Know that
multi-factor authentication is required of all companies regardless of size. Know that suspected data
theft or loss is reported immediately to the appropriate IRS Stakeholder Liaison. The detailed
checklist items are unlikely to be tested individually; the obligation to have a written plan, and
the reporting duty, are.

## Check yourself

**1. Under what authority must a professional tax return preparer maintain a data security plan?**

A. Circular 230 alone
B. The FTC Safeguards Rule, implementing the Gramm-Leach-Bliley Act, whose "financial institution"
   definition includes professional tax preparers
C. State licensing boards only
D. It is a recommended practice with no legal basis

*Answer: B. Failure to create and enact a plan may result in an FTC investigation.*

**2. Which firms must implement multi-factor authentication for access to customer information?**

A. Firms with more than 50 employees
B. Firms that file more than 1,000 returns annually
C. All companies, regardless of size
D. Only Online Providers

*Answer: C. At least two of a knowledge factor, a possession factor and an inherence factor are
required.*

**3. A practitioner suspects client data may have been stolen but is not yet certain. What should
happen?**

A. Complete an internal investigation, then report if confirmed
B. Report the suspected data theft or loss immediately to the appropriate IRS Stakeholder Liaison
C. Notify only the affected clients
D. Nothing, unless fraudulent returns appear

*Answer: B. Reporting is not conditioned on certainty.*

**4. Which is among the required elements of the information security plan?**

A. Designating a qualified individual to oversee and enforce the programme
B. Purchasing cyber liability insurance
C. Retaining an outside auditor annually
D. Filing a copy of the plan with the IRS

*Answer: A. The plan must also include risk assessment, a monitored and tested safeguards programme,
service provider oversight, periodic adjustment, and security awareness training.*

**5. Which practice does Publication 4557 recommend specifically for detecting misuse of a firm's
credentials?**

A. Changing the EFIN annually
B. Checking e-file applications and PTIN accounts weekly for total returns filed
C. Filing Form 14039 for every client
D. Transmitting only through a third-party transmitter

*Answer: B. Unused EFINs should also be deactivated.*
