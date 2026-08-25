# Comprehension plan — making 360 pages land for any reader

Owner's brief: every article perfectly understood by a reader of any age; consumption
extremely user-friendly; multiple scenarios illustrating each point; a representative
infographic for each article.

This is the plan of record for that work. It is deliberately honest about one thing
before anything else.

## The one reframe this plan rests on

**"Understood by a reader of any age" cannot mean "written for a child."** Passive
activity loss limitation, the § 7122 offer regime, and unrelated business taxable
income have irreducible technical structure. A page that a nine-year-old fully
understands is a page that no longer states the rule accurately — and rule 1 of this
project is that the rule is stated accurately, from the source.

What is achievable, and is what this plan builds:

> **Every page has a plain-language layer that any literate reader can follow, sitting
> above an authoritative layer that a practitioner can rely on. Nobody is turned away
> at the door, and nobody is patronised once inside.**

Concretely: a reader who has never filed a return should finish the first screen of any
page knowing *what this is about, who it affects, and what it decides*. A reader who
needs the citation finds it unchanged, one scroll down.

If the owner wants literal child-readability instead, that is a different product — a
separate simplified corpus, not an edit to this one — and it should be decided
explicitly rather than drifted into.

## Measured baseline (23 August 2026, all 360 published pages)

| Metric | Value |
|---|---|
| Flesch reading ease | **54.2 mean**, range 34.5 – 72.1 |
| Words per page | 1,983 mean (1,307 – 2,755) |
| Scenarios per page | 3.3 mean (min 2, max 4) |
| Callouts per page | 2.2 mean |
| Pages carrying a table | 340 of 360 (94%) |

Flesch 54 is college-level prose. That is *appropriate* for the authoritative layer and
*too hard* as a front door. The gap between 54 and a 65–70 plain-language layer is the
work.

Note the ceiling: no page currently exceeds 4 scenarios, because `verify` caps it there.
That cap is a deliberate constraint being lifted by this plan, not an accident.

## Audit — is it working yet? (25 August 2026)

Re-measured against the live 360-page corpus, not the 23 August sample. Two findings
mattered more than the numbers moving slightly.

| Metric | Measured | Reads as |
|---|---|---|
| Flesch reading ease | 55.9 mean, 37.2 – 73.3 | Still "fairly difficult" — an educated-adult read, nowhere near any-age |
| Pages below Flesch 50 | 60 of 360 | Genuinely hard going, not catastrophic |
| Pages with a plain-terms section | 1 of 360 | The exemplar. Zero on the live site until it merges |
| Pages with any `{gloss:}` mark | 1 of 360 | 2 marks total |
| Glossary terms defined | 6 | Negligible against the corpus's actual vocabulary |
| Pages with a diagram | 1 of 360 | The exemplar only |
| Search | none | A reader who doesn't know outline vocabulary has no way in |

**The bigger finding wasn't a number.** The homepage and About page both said, in as
many words, that the site was "written for Enrolled Agent candidates and the people who
represent taxpayers." That's not a missing feature — it's the site's own stated mission
naming a different, narrower audience than "any reader, any educational stratum." Fixing
the mechanism (plain layer, glossary, diagrams, search) without fixing that sentence
would have left the site telling every visitor it wasn't built for them.

**One thing worth saying plainly, and not chasing past this point:** "any age" cannot
literally mean pre-literate children reading federal tax law — that ceiling was already
named above. The working target from here on is *any adult regardless of tax
background, capable teenagers included*.

---

## Workstream 1 — The plain-language layer

**New required section, first in the body: "In plain terms."** 90–150 words, before
"The rule". Answers exactly three questions in this order:

1. What is this about, in one sentence a stranger understands?
2. Who does it affect — and who does it *not*?
3. What does it decide, or what does it change?

Rules for this section, enforced by `verify`:

- Flesch reading ease **≥ 65** measured on that section alone
- No citation, no `§`, no defined term used before it is explained
- No figure tokens (numbers belong in the figures table, not the opening)
- Sentences average ≤ 18 words
- It states the rule *correctly*. Simplified is not the same as wrong; if a
  simplification would mislead, the sentence gets longer instead.

The authoritative body is **not rewritten**. This is additive. That decision matters:
rewriting 360 verified pages risks the accuracy the whole project exists for, and
`lastReviewed` would all need restamping.

**Second device: a glossary with real definitions.** Every term of art gets one entry in
`src/data/glossary.json` with a plain definition and, where useful, the section that
defines it. Terms are marked up on first use per page and open in place — the same
disclosure mechanism the figure citations already use. No new interaction to learn.

## Workstream 2 — Scenarios, expanded and differentiated

Today: 2–4 per page, capped by the verifier. Target: **4–6, with a job for each.**

More scenarios only help if each one adds something. The rule that makes this true:

**Every scenario declares its type with a `data-type` attribute on its `<div class="scenario">`,
and no page may run two of the same type.** (Scenarios live in the markdown body, not
frontmatter — this stays consistent with how the verifier already finds them, and avoids a
schema migration across 360 pages.) The taxonomy:

| Type | What it does |
|---|---|
| `baseline` | The straightforward case. The rule working as intended. |
| `boundary` | Just over or just under a threshold — shows where the line is. |
| `fails` | The taxpayer does *not* qualify, and why. As instructive as success. |
| `interaction` | Collides with another rule. Where practitioners actually get hurt. |
| `timing` | Same facts, different year or date, different answer. |
| `procedural` | What you file, when, and what happens next. |

A page with four scenarios of type `baseline` has one scenario written four times. The
verifier will reject it.

Copyright rule 2 is unchanged and absolute: **every scenario stays original.** Nothing
from `private/questions.json` reaches the site. Invented amounts inside scenarios remain
inline — that is the standing exception and `verify` knows it.

## Workstream 3 — Infographics

The dangerous version of this workstream is 360 bespoke illustrations. That produces
inconsistency, errors, and — because a diagram drawn from a summary is a diagram drawn
from a summary — claims that no longer trace to a source.

**Instead: eight diagram archetypes, each a real Astro component, each fed from
structured frontmatter.** The page declares its data; the component draws it.

| Archetype | Answers | Fits |
|---|---|---|
| `decision` | "Do I qualify?" | eligibility tests, elections |
| `threshold` | "Where are the lines?" | phase-outs, brackets, limits |
| `timeline` | "By when?" | deadlines, statutes, notice clocks |
| `flow` | "What happens next?" | procedure, appeals, collection |
| `waterfall` | "How is it computed?" | basis, AMT, computations |
| `compare` | "How do these differ?" | entity choice, method choice |
| `authority` | "Where does this come from?" | statute → reg → guidance chains |
| `anatomy` | "What are the parts?" | forms, notices, elections |

Why this is better than bespoke art, concretely:

- **Numbers stay live.** A `threshold` diagram reads `figures.json`. When a figure is
  re-verified, every diagram containing it updates. Hardcoding numbers into artwork
  would break rule 3 outright.
- **Text stays text.** Real `<text>` in SVG: selectable, translatable, searchable,
  screen-reader accessible, sharp at any zoom. DESIGN.md forbids text baked into images.
- **Themeable.** Diagrams inherit the six colour roles. One accent, hairlines, radius
  cap 2px — the same system as everything else.
- **Correct by construction.** The data is in frontmatter next to the prose, reviewed
  the same way, and `verify` can check that a diagram's referenced figure keys exist.

Every diagram needs a text alternative that carries the same information — a caption or
a table, not `alt="diagram"`. A reader who cannot see it must not lose the point.

**Not every page needs one.** A page whose content is genuinely linear gets a diagram
only if it earns its place. The target is "a representative infographic wherever one
clarifies", and the honest expectation is roughly 300 of 360, not a forced 360.

## Workstream 4 — Consumption and user-friendliness

- **No reading-mode toggle** (decided below) — the plain layer is always present,
  first in reading order, for every reader. Nothing to find, nothing to miss.
- **Answer-first ordering.** Plain layer → diagram → rule → figures → scenarios → traps
  → changes → exam focus → check yourself. The reader gets the answer before the
  apparatus.
- **A real table of contents** on every page, sticky on desktop, collapsible on mobile.
  At ~2,000 words, readers need to skip.
- **Estimated reading time**, computed at build.
- **Print and offline.** A print stylesheet that produces something worth keeping —
  this audience prints.
- **Search.** 360 pages with no search is a real gap. A prebuilt static index
  (Pagefind or similar) — no server, no runtime generation, rule 7 intact.
- **Mobile first for real.** Already verified: zero horizontal overflow at 390px.
  Diagrams must hold that line; each archetype needs a narrow-viewport form.

## How we prove it worked

Not opinion. Four gates, all computed:

1. **Readability, per section.** `verify` computes Flesch on the plain layer and fails
   below 65. The authoritative body is measured and reported but not gated — it is
   allowed to be hard.
2. **The question bank as a comprehension test.** `private/questions.json` already maps
   to outline codes. A reader who has read only the plain layer plus scenarios should be
   able to answer the recall-level questions for that code. Where they could not, the
   plain layer is missing something. This is the strongest instrument we have and it
   already exists.
3. **Diagram integrity.** Every figure key referenced by a diagram exists; every diagram
   has a text alternative; contrast measured on the composited render.
4. **The craft floor**, unchanged: zero contrast failures, zero horizontal overflow,
   keyboard reachable, reduced motion respected.

## Sequencing

**Phase 0 — Build the machine (no content). Done.** Schema, `verify` rules, the glossary
mechanism, three of eight diagram components (`decision`/`threshold`/`timeline` — the
other five wait for a page whose content actually needs them, rather than being built
speculatively), a real table of contents, and search (Pagefind, static, live at
`/search/`, scoped to published pages only — the same line the sitemap already draws).
No reading-mode control was built; decision 5 below ruled that out before it started.

**Phase 1 — The exemplar.** One page, complete: plain layer, glossary marks, 5 typed
scenarios, its diagram. Run every gate. Screenshot desktop, 390px, print. **Owner reads
it and approves the shape before anything scales.** If the shape is wrong, it is wrong
once, not 360 times. *(Built — `offer-in-compromise.md` — sitting on the working branch
awaiting review.)*

**Phase 2 — One domain (~28 pages), from Tier 1 below.** Prove the pattern holds across
varied content, in the domain most likely to actually be read by a lay visitor. Expect
the archetype list to need one or two additions here; that is the point of doing a
domain before a corpus.

**Phase 3 — The corpus, by audience tier, not by outline order.** The outline's order is
a study sequence for someone taking the exam; it is not the order in which a general
reader's needs show up. Rolling out Tier 1 first means the pages most likely to actually
be searched for get the plain layer, the diagrams, and the glossary passes soonest,
while the corpus finishes in the background. Each page: plain layer, glossary pass,
scenarios to 4–6 typed, diagram where it earns its place, gates green, committed.

- **Tier 1 — everyday relevance, first.** Preliminary Work and Taxpayer Data (filing
  status, dependents, filing requirements); Deductions and Credits; the collection and
  notice topics under Specific Types of Representation (payment plans, offers,
  liens/levies, what a notice means) and Completion of the Filing Process.
- **Tier 2 — adjacent, still common.** The rest of Part 1 (Income and Assets, Taxation,
  Advising the Individual Taxpayer, Specialized Returns for Individuals) and the
  small-business-relevant parts of Part 2 (Business Entities, Business Tax Preparation)
  — self-employment and a side business are ordinary-reader territory even though the
  entity mechanics get technical.
- **Tier 3 — practitioner-facing; a solid plain-terms paragraph is enough.** Practices
  and Procedures (Circular 230, professional responsibility), Representation before the
  IRS (power of attorney mechanics, practitioner conduct), and Specialized Returns and
  Taxpayers (estates, trusts, exempt organizations). This tier's real audience is
  practitioners; don't over-invest in making it toddler-simple at the expense of Tier 1.

This is domain-level guidance, not a fixed page list — Phase 2's pilot domain confirms
whether the tier boundaries hold before Phase 3 commits to them at scale.

**Phase 4 — Cross-cutting.** Glossary completeness, diagram consistency sweep, full-site
readability report, print pass.

## Honest cost

This is the largest workstream since writing the corpus. 360 pages × (a new section +
scenario expansion + a diagram + glossary marks) is comparable in effort to the original
authoring, not a polish pass. Phase 0 and 1 are small and fast; phases 2–4 are the bulk.

Sequencing it by domain means it ships continuously — every completed domain is live —
rather than as one long dark period.

## Risks, named

1. **Simplification that misleads.** The primary risk. A plain sentence that is *nearly*
   right is worse than a hard sentence that is right, because the reader cannot tell.
   Mitigation: the plain layer is checked against the same authority as the body, and
   the §4 question-bank reconciliation catches drift.
2. **Diagrams asserting things the sources don't.** A flow chart is a claim. Every
   diagram's data lives in frontmatter and is reviewed as content, not decoration.
3. **Scenario bloat.** Six weak scenarios are worse than three strong ones. The type
   taxonomy exists to force each one to earn its place.
4. **Reading modes fragmenting the content.** If Plain mode hides something a reader
   needs, it has done harm. Plain mode hides *apparatus*, never *substance*.
5. **`lastReviewed` drift.** Adding a plain layer is not re-verifying the authorities.
   Dates are not restamped for this work. That rule stands.

## Decisions (made 23 August 2026, owner delegated judgement)

1. **Reframe accepted as written.** Layered plain-language over the existing
   authoritative body, not a separate simplified corpus. Rewriting 360 verified pages
   into child-level prose risks the accuracy the project exists for; a second corpus
   is a second maintenance burden with its own drift risk. Additive wins on both counts.
2. **Flesch ≥ 65, not 70.** 65 is solid plain English (~8th–9th grade) without forcing
   sentence fragments that would strain accuracy on genuinely technical points. 70 reads
   as condescending on a site whose stated audience includes EA candidates.
3. **Diagrams where they earn their place, not all 360.** A forced diagram on a page
   that is genuinely linear prose produces exactly the decorative-default pattern
   DESIGN.md exists to forbid. Target ~300; every skip gets logged, not silent.
4. **Search: in scope now.** Static index (Pagefind), no server, no runtime generation —
   rule 7 intact. 360 pages with no way to jump to one is a real gap independent of
   this workstream, and it is cheap relative to the rest.
5. **No Plain/Full toggle. The plain layer is always present, for everyone.** A toggle
   adds a state to design, remember, and test, and risks exactly the fragmentation risk
   named above — a reader who never finds the switch never gets the benefit. The plain
   layer sits first in reading order; the authoritative body follows in the same
   document, not behind a control.

## Decisions (made 25 August 2026, after the audit above)

6. **The mission statement gets fixed, not just the pages.** Homepage lede, meta
   description, and the About page no longer say the site is "written for Enrolled
   Agent candidates and the people who represent taxpayers." They now name a wider
   audience while keeping the EA-exam alignment as a true secondary fact. This shipped
   ahead of any content rollout because a mismatched mission statement undercuts every
   plain-language page the plan produces.
7. **Rollout is ordered by audience tier, not outline order.** See the Tier 1/2/3
   breakdown under Phase 3. An ordinary reader's actual questions cluster in a handful
   of domains; there's no reason to make them wait behind Part 2 entity mechanics that
   were always going to read as practitioner content regardless of effort spent.
8. **Search shipped in Phase 0, ahead of full diagram coverage.** Between "every page
   has a diagram" and "a reader can find the page that answers their question," search
   wins for this goal — a diagram helps nobody on a page nobody finds. Live at
   `/search/`, Pagefind, static, themed onto the site's own tokens.
9. **The glossary gets a front-loaded sweep, not a per-page trickle.** One glossary
   entry services every page that cites it, so it is cheaper to draft ~150–250 real
   terms against the corpus's actual vocabulary in one pass than to discover gaps one
   page at a time during the Tier 1 rollout.
