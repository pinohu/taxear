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

**Every scenario declares its type in frontmatter, and no page may run two of the same
type.** The taxonomy:

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

- **Reading modes.** A control that switches between *Plain* (the plain layer, scenarios,
  diagram) and *Full* (everything, including citations and the authority rail).
  Preference remembered per reader. Static-site-friendly: CSS classes, no rebuild.
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

**Phase 0 — Build the machine (no content).** Schema, `verify` rules, glossary file, the
eight diagram components, reading-mode control, ToC, search. Nothing ships to readers
until one page proves the shape.

**Phase 1 — The exemplar.** One page, complete: plain layer, glossary marks, 5 typed
scenarios, its diagram. Run every gate. Screenshot desktop, 390px, print. **Owner reads
it and approves the shape before anything scales.** If the shape is wrong, it is wrong
once, not 360 times.

**Phase 2 — One domain (~28 pages).** Prove the pattern holds across varied content.
Expect the archetype list to need one or two additions here; that is the point of doing
a domain before a corpus.

**Phase 3 — The corpus,** by domain, in outline order. Each page: plain layer, glossary
pass, scenarios to 4–6 typed, diagram where it earns its place, gates green, committed.

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

## Open decisions for the owner

1. **Is the reframe accepted** — layered plain-language, or a genuinely separate
   simplified corpus?
2. **Flesch ≥ 65 for the plain layer** — right target, or push to 70 (≈7th grade)?
3. **Diagram coverage** — every page including the linear ones, or only where one earns
   its place (~300)?
4. **Search** — worth adding now, or a separate piece of work?
5. **Reading modes** — is a Plain/Full switch wanted, or should the plain layer simply
   always be present for everyone?
