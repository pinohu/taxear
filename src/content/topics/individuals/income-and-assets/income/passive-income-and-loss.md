---
title: "Passive income and loss"
code: "1.2.1.k"
part: 1
domain: "Income and Assets"
section: "Income"
description: "Passive losses are suspended, not lost. Everything turns on material participation, and rental activity is passive by definition however hard the owner works at it."
status: published
taxYear: 2026
lastReviewed: "2026-08-19"
reviewedBy: "Draft for I. Ohu review"
authorities:
  - { type: IRC, ref: "§ 465", title: "Deductions limited to amount at risk", url: "https://www.law.cornell.edu/uscode/text/26/465" }
  - { type: IRC, ref: "§ 469", title: "Passive activity losses and credits limited", url: "https://www.law.cornell.edu/uscode/text/26/469" }
  - { type: IRC, ref: "§ 267", title: "Losses, expenses, and interest with respect to transactions between related taxpayers", url: "https://www.law.cornell.edu/uscode/text/26/267" }
  - { type: Reg, ref: "§ 1.469-5T", title: "Material participation (temporary)", url: "https://www.law.cornell.edu/cfr/text/26/1.469-5T" }
forms: []
related: ["1.2.1.d", "1.2.1.j", "1.2.1.b", "1.2.1.m", "1.2.1.l", "1.2.3.e"]
changelog:
  - { date: "2026-08-19", summary: "Initial draft. Sets out the IRC § 469(c) definition with its rental rule and real estate professional exception, the seven Reg. § 1.469-5T(a) material participation tests, the IRC § 469(i) offset and its unindexed phase-out, and the IRC § 469(g) release on disposition." }
  - { date: "2026-08-25", summary: "Added a plain-language summary, glossary marks, a decision diagram of the rental-loss escape routes, and two typed scenarios (boundary, timing) alongside the existing three." }
diagram:
  archetype: "decision"
  caption: "Escaping the passive limitation on a rental loss"
  tests:
    - { test: "Rental activity under § 469(c)(2)?", result: "Passive by definition — hours worked don't change that", outcome: "fail" }
    - { test: "Active participation — at least a 10% interest?", result: "Up to $25,000 of loss offsets other income, phased out $100,000–$150,000 AGI", outcome: "pass" }
    - { test: "Real estate professional — over 750 hours and more than half of personal services in real property trades?", result: "Rental is out of § 469(c)(2) entirely — losses aren't passive at all", outcome: "pass" }
---

<div class="plain-terms">
This rule limits losses from a business you do not actively run, or from almost any rental property.
If you just invest money or sign papers but do not do real work in the activity, your loss may be put
on hold. It does not vanish. It waits until you have matching income from a similar activity, or until
you sell your whole stake. This mainly affects landlords, silent business partners, and people with
side ventures they barely touch. It does not affect a business you run yourself day to day. What this
page decides is whether a loss counts now, later, or only after a sale, and how much work or ownership
lets a landlord dodge the limit.
</div>

Section 469 does not deny losses; it postpones them. A passive activity loss for the year is simply not
allowed (IRC § 469(a)(1)(A)) and is carried to the next year as a deduction allocable to the same
activity (IRC § 469(b)), waiting either for passive income to absorb it or for the activity to be
disposed of. Understanding that the suspension is temporary is what keeps the topic in proportion —
the real questions are what makes an activity passive, and what releases the suspended loss.

## The rule

**Who is caught, and what is disallowed.** Neither the passive activity loss nor the passive activity
credit is allowed for the year (IRC § 469(a)(1)) in the case of an individual, estate or trust, a
closely held C corporation, or a personal service corporation (IRC § 469(a)(2)). What is disallowed
carries to the next taxable year as a deduction or credit allocable to that activity (IRC § 469(b)).

**Two definitions, and the second swallows more than it seems.** A passive activity is any activity
which involves the conduct of a trade or business and **in which the taxpayer does not materially
participate** (IRC § 469(c)(1)). Separately, and except as § 469(c)(7) provides, a passive activity
**includes any rental activity** (IRC § 469(c)(2)) — so a rental is passive by definition, and the
amount of work the owner does is beside the point. A working interest in oil or gas held directly or
through an entity that does not limit liability is expressly outside the definition (IRC § 469(c)(3)(A)).

**Material participation has a statutory standard and a regulatory test.** The taxpayer must be
involved in the operations on a basis which is **regular, continuous and substantial** (IRC
§ 469(h)(1)), and no interest as a limited partner is treated as one in which the taxpayer materially
participates except as regulations provide (IRC § 469(h)(2)). The regulation converts the standard into
seven alternative tests, any one of which suffices (Reg. § 1.469-5T(a)(1)–(7)).

**Portfolio income is carved out of the computation.** In determining income or loss from an activity,
gross income from interest, dividends, annuities or royalties **not derived in the ordinary course of a
trade or business** is not taken into account, nor the expenses and interest allocable to it, nor gain
or loss on property producing such income or held for investment (IRC § 469(e)(1)(A)). So investment
income cannot soak up a suspended passive loss.

**Two escapes from the rental rule.** A natural person who **actively participates** in rental real
estate may offset a limited amount of loss against other income (IRC § 469(i)(1)), capped (IRC
§ 469(i)(2)) and phased out by reference to adjusted gross income (IRC § 469(i)(3)(A)). Active
participation requires at least a stated percentage interest by value, counting a spouse's (IRC
§ 469(i)(6)(A)). Separately, a taxpayer who meets the two real property tests in § 469(c)(7)(B) escapes
§ 469(c)(2) altogether for rental real estate, each interest being treated as a separate activity
unless an election is made to treat them all as one (IRC § 469(c)(7)(A)).

**Disposition releases the loss.** On a disposition of the taxpayer's entire interest in a passive
activity in a fully taxable transaction, the excess of the loss from that activity over net income from
all other passive activities is treated as **not from a passive activity** (IRC § 469(g)(1)(A)) — but
not where the acquirer is related within § 267(b) or § 707(b)(1), in which case the release waits until
the interest is acquired by an unrelated person (IRC § 469(g)(1)(B)).

**A second limitation sits underneath.** A loss from an activity is allowed only to the extent of the
amount the taxpayer is **at risk** at the close of the year (IRC § 465(a)(1)), with the excess carried
forward (IRC § 465(a)(2)). At risk is applied before § 469.

## Current figures

| Item | 2026 |
| --- | --- |
| Material participation tests | {fig:passive.material_participation_tests} |
| Rental real estate offset | {fig:passive.rental_offset} |
| Active participation | {fig:passive.active_participation} |
| Real estate professional | {fig:passive.real_estate_professional} |

## How it works in practice

Run the limitations in order: basis, then at risk under § 465, then passive under § 469. A loss can
survive the first two and fail the third, and reporting it as though only one applied is the common
error.

For material participation, the seven tests are alternatives and the client only needs one — so start
with the easiest to prove rather than the most obvious. The 500-hour test needs records; the
"substantially all the participation" test often needs none, because a sole proprietor with no
employees satisfies it by the nature of the business. The five-of-ten-years test carries a taxpayer
through a year of reduced involvement without any current-year hours at all.

Records are the whole of the evidential question, and contemporaneous records are worth far more than
reconstructions. A calendar, appointment diary or time log kept as the year runs will settle a 100-hour
or 500-hour test; a summary written after a notice arrives usually will not.

For rentals, be precise about which relief is in play. **Active** participation is a much lower bar than
material participation and unlocks only the capped offset, which phases out and is gone entirely at a
fixed income level. The **real estate professional** rules are a different provision with two hard
quantitative tests, and on a joint return one spouse must meet both alone — spouses may not aggregate
their hours for that purpose, though they may for material participation itself.

Finally, track suspended losses by activity, not in aggregate. Section 469(g) releases them on a
disposition of an entire interest in *that* activity, so the records have to be able to say which loss
belongs where, sometimes many years later.

<div class="scenario" data-type="fails">
<h3>Hard work that did not help</h3>

Anton owns two residential rentals. He advertises, screens tenants, handles repairs himself, and spends
roughly 600 hours a year on them. His adjusted gross income is $190,000 and the rentals show a combined
loss of $23,000.

The hours do not matter. IRC § 469(c)(2) provides that a passive activity includes **any** rental
activity except as § 469(c)(7) provides, so the losses are passive whatever his level of involvement.
Nor does the § 469(i) offset help: his adjusted gross income is above the point at which the phase-out
in § 469(i)(3)(A) has eliminated it entirely.

The whole $23,000 is suspended under IRC § 469(a) and carried forward under § 469(b). It is not lost —
it will be released against future passive income or on a fully taxable disposition of an entire
interest under § 469(g)(1)(A). His route to using it sooner would be qualifying as a
{gloss:real-estate-professional} under § 469(c)(7), and his day job makes the more-than-one-half test
impossible.
</div>

<div class="scenario" data-type="baseline">
<h3>The easiest test, not the obvious one</h3>

Beatriz owns a small consulting company alongside a partner who invests but does no work. She spent
about 320 hours on it this year, which is well short of 500, and assumes she lacks
{gloss:material-participation}, so her loss is passive.

She should look further down the regulation. Reg. § 1.469-5T(a)(2) treats an individual as materially
participating where their participation constitutes **substantially all** the participation of all
individuals in the activity for the year, including non-owners. With a passive partner and no
employees, her 320 hours are substantially all of it.

Two further routes are open even if that one failed. Reg. § 1.469-5T(a)(3) needs only more than 100
hours plus participation no less than anyone else's, which she also meets. And § 1.469-5T(a)(5) would
carry her through a future quiet year on the strength of having materially participated in five of the
preceding ten.
</div>

<div class="scenario" data-type="interaction">
<h3>Selling to a daughter, and waiting</h3>

Karim has $140,000 of suspended losses from a partnership interest he has held for years. He sells the
entire interest to his daughter in a fully taxable sale.

The disposition would ordinarily free the losses. IRC § 469(g)(1)(A) treats the excess of the loss from
the activity over net income from all other passive activities as a loss not from a passive activity
where the entire interest is disposed of and all gain or loss is recognised.

But his daughter is a related person within IRC § 267(b), so IRC § 469(g)(1)(B) disapplies that rule
until the interest is acquired by someone unrelated. The losses stay suspended, now attached to an
interest he no longer owns. Selling to an unrelated buyer, even at a lower price, would have released
$140,000 of deductions — which is the kind of arithmetic worth doing before the sale rather than after.
</div>

<div class="scenario" data-type="boundary">
<h3>One dollar from zero</h3>

Deshawn actively participates in a small rental with a $6,000 loss. His adjusted gross income before
the rental is $149,000. His neighbor, in an identical rental with an identical loss, has adjusted gross
income of $150,001.

IRC § 469(i)(3)(A) reduces the $25,000 ceiling by 50 cents for every dollar of adjusted gross income
over $100,000. Deshawn's allowance has shrunk to $500 — barely enough to absorb part of his loss. His
neighbor's allowance reached zero at $150,000 and stays there; past that point, more income makes no
further difference, but the last dollar before it can still decide the case.
</div>

<div class="scenario" data-type="timing">
<h3>The same loss, released a year later</h3>

In 2025, Farah's rental partnership interest produces an $18,000 loss. She has no other passive income
that year, so the full amount is suspended under § 469(a) and carried forward under § 469(b). In 2026,
the same partnership produces $18,000 of passive income from a different property she also holds.

Nothing about the 2025 loss changes — it was correctly disallowed for that year. What changes is 2026's
facts: passive income now exists to absorb it, so the carried-forward $18,000 offsets the new passive
income and is deducted in 2026 instead. Same taxpayer, same suspended loss, a different answer because
the year is different.
</div>

<div class="callout trap">
<p class="callout-label">Traps</p>

- **Losses are suspended, not lost** (IRC § 469(b)). The question is always when they come back.
- **Rental activity is passive by definition** (IRC § 469(c)(2)), so hours worked are irrelevant unless
  § 469(c)(7) applies.
- **Active and material participation are different tests** with different consequences — the first
  unlocks only the capped offset.
- **The § 469(i) figures are unindexed**, so the offset has eroded steadily since 1986 and reaches
  fewer taxpayers every year.
- **The seven tests are alternatives**, and the easiest to prove is often not the 500-hour one.
- **Portfolio income cannot absorb passive losses** (IRC § 469(e)(1)(A)) — interest and dividends are
  taken out of the computation.
- **Limited partnership interests are presumptively not material participation** (IRC § 469(h)(2)).
- **On a joint return, one spouse must meet both real estate professional tests alone** (IRC
  § 469(c)(7)(B), final sentence) — hours may not be combined for that purpose.
- **A sale to a related person does not release the losses** (IRC § 469(g)(1)(B)); the release waits
  for an unrelated acquirer.
- **At risk comes first.** IRC § 465(a)(1) limits the loss before § 469 is reached, and a loss can fail
  either independently.
- **Track suspended losses by activity**, because § 469(g) releases them activity by activity.

</div>

## How this has changed

The architecture of § 469 dates from 1986 and has been remarkably stable. What has changed is its
practical reach, and it has changed without any amendment.

The § 469(i) offset is the clearest case. Its cap and its phase-out thresholds are written into the
statute and have never been adjusted for inflation, so an allowance designed for middle-income
landlords in 1986 now excludes a large share of them. Nothing in the text has moved; the number of
taxpayers it helps falls every year. This is worth stating explicitly to clients, because they will
often have read about the rental loss allowance without any mention that it disappears entirely above a
fixed income.

The material participation regulation is the other point worth flagging. Reg. § 1.469-5T remains a
**temporary** regulation decades after it was issued, and its seven tests are relied on daily by
taxpayers and the Service alike. That is unusual enough to note, and it means the operative rules for
the most litigated question in this area live in a regulation that was never finalised.

Where currency does bite is in what happens to a loss once it is released. Suspended losses freed under
§ 469(g) enter the ordinary loss computations, and those have their own limitations — so the answer to
"when do I get my losses" is not settled by § 469 alone.

## Exam focus

Know the two limbs of § 469(c): trade or business without material participation, **and** any rental
activity regardless. Expect a fact pattern where a landlord works hard and the answer is still passive.

Know that the seven Reg. § 1.469-5T(a) tests are alternatives, and be able to name several — the
500-hour test, the substantially-all test, the more-than-100-hours test, and the five-of-ten-years test
are the ones questions use.

Know the difference between active participation, which unlocks the capped § 469(i) offset with its
phase-out, and the § 469(c)(7) real estate professional tests, which take rental real estate out of
§ 469(c)(2) altogether.

Know that a disposition of the entire interest releases suspended losses under § 469(g)(1)(A), and that
a sale to a related person under § 267(b) or § 707(b)(1) does not.

## Check yourself

**1.** A taxpayer spends 900 hours a year managing a rental property and has a $30,000 loss. Adjusted
gross income is $210,000 and they are a full-time architect. Is the loss allowed?

*Answer: no. IRC § 469(c)(2) makes any rental activity passive except as § 469(c)(7) provides, so the
hours do not make it non-passive. The § 469(c)(7) route is unavailable because more than one-half of
their personal services are not performed in real property trades or businesses. And the § 469(i)
offset has phased out entirely at that income. The $30,000 is suspended and carried forward under
§ 469(b).*

**2.** An individual participates 140 hours in an activity in which no other individual participates
more than 90 hours. Do they materially participate?

*Answer: yes, under Reg. § 1.469-5T(a)(3) — more than 100 hours of participation during the year, and
participation not less than that of any other individual, including individuals who are not owners.
Failing the 500-hour test in § 1.469-5T(a)(1) is irrelevant, because the seven tests are alternatives.*

**3.** A taxpayer with $80,000 of suspended passive losses from a partnership sells the entire interest
to their brother in a fully taxable sale. Are the losses released?

*Answer: no. IRC § 469(g)(1)(A) would ordinarily treat the excess loss as not from a passive activity on
a fully taxable disposition of the entire interest, but § 469(g)(1)(B) disapplies it where the acquirer
is related to the taxpayer within IRC § 267(b) or § 707(b)(1). A brother is so related, and the losses
remain suspended until the interest is acquired by an unrelated person.*

**4.** Why can a taxpayer with substantial interest and dividend income not use it to absorb a
suspended passive loss?

*Answer: because IRC § 469(e)(1)(A) excludes it from the computation. Gross income from interest,
dividends, annuities or royalties not derived in the ordinary course of a trade or business is not taken
into account in determining income or loss from an activity, together with the expenses and interest
allocable to it. Portfolio income is therefore neither passive income nor available to absorb passive
losses.*
