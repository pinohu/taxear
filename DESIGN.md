# TaxEar — design constraints

The rulebook every page is built against. Written 23 August 2026, replacing the
navy-and-gold system that CLAUDE.md rule 8 previously froze. Rule 8 is rewritten to
point here.

## The brief (owner's answers, not inferred)

| | |
|---|---|
| Range | Full identity open — palette, type and structure all reconsidered |
| Surfaces | Homepage and topic pages, as one system |
| Signature move | The verification stamp, made live |
| World | Legal publishing / the statute book |

**One belief the site installs:** *every number here was opened at its source on a
date I can see.*

**One action:** Read. That label, everywhere — never "Learn more", never "Explore".

## The world it is drawn from

Not "law firm". The specific ancestor is the **loose-leaf tax service** — CCH's
Standard Federal Tax Reporter, RIA, the binders a practitioner actually kept.
Their physical properties are the design vocabulary:

- Thin grey-white stock, tight leading, small type, dense setting
- Hairline rules; almost no boxes
- Marginal annotation — paragraph marks, codes, running heads set in the margin
- Two-colour printing: black text, one editorial red for apparatus
- **A release stamp on every page** — "Release 47, October 2024"

That last one is the whole thesis. Loose-leaf services were trusted *because every
page told you when it was last replaced.* TaxEar's `verified` date is the same
promise in a different century. The design's job is to make that promise visible
instead of burying it in a `title` attribute.

## Style gate

### Colour — six roles, one accent, locked page-wide

```
--paper        #F7F7F4   onionskin; grey-leaning, deliberately NOT cream
--surface      #FFFFFF
--ink          #15171B   off-black, never #000
--ink-soft     #565B63
--rule         #D5D3CC   hairline
--accent       #8C1D18   the printing red of two-colour legal setting
--accent-soft  #F4E9E7
```

Measured on the composited render before adoption — every pairing clears 4.5:1:

| Role | Ratio |
|---|---|
| ink on paper | 16.72:1 |
| ink-soft on paper | 6.37:1 |
| accent on paper | 8.49:1 |
| accent on accent-soft | 7.66:1 |

**Why this replaces navy-and-gold.** Two reasons, one structural and one about slop.
Structurally: gold `#C8A24A` sits at 2.25:1 on paper and fails below ~14px, which is
why the old system needed a second `--gold-text` token as a workaround. `#8C1D18`
clears 8.49:1, so one accent serves every size. And navy-and-gold serif *is* the
statistical mean of tax and legal sites — precisely what the anti-slop test exists
to catch.

**Why the paper is grey and not cream.** Warm cream + serif + clay accent is the
first entry on the slop-fingerprint list. `#F7F7F4` is a cool grey-white — onionskin,
not artisan bakery. The red is a printing red, not terracotta. The distinction is the
point; keep it.

### Type — two families, not three

- **Source Serif 4** — body *and* display. A transitional serif at reading size is
  the statute-book register. 500 for text, 600 for headings.
- **IBM Plex Mono** — apparatus only: codes, citations, dates, the release stamp.
  400/600.

**Public Sans is removed.** Three families was one more than the work needed, and the
serif carries the authority the brief asks for. Dropping it also removes two woff2
files from the critical path.

### Spacing and measure

4px base scale. More space above a heading than below it. Body measure 62–68ch.
Tracking tightens as size grows. Radius cap 2px — loose-leaf pages have corners.

### Banned outright

Gradients of any kind. Glow and coloured halo shadows. Card grids as a default
layout. Decorative section counters. An eyebrow above every heading. Centred body
copy. `transition: all`. Animating box geometry. Any second accent colour.

## Structure gate

**Grammar: chaptered reference apparatus.** Not a documentation site, not a landing
page. The page behaves like a leaf from a bound service — running head in the margin,
body in a single measure, annotation alongside.

This grammar *forbids*: a fixed sticky navbar, hero-plus-three-cards, and equal-weight
section stacking. Those are what it is defined against.

**Nav treatment: margin folio.** Position (Part · Domain · Section · SEE code) is set
in the margin as a running head, the way a reference volume does it. Primary
navigation stays a real, visible, reachable list — the directory playbook's warning
holds: over-designing a tool reads as untrustworthy, and this is partly a tool.

**Sequence, homepage.** No two adjacent sections share a layout:

1. **Title page** — type only, asymmetric, release line. No cards, no image.
2. **The outline** — dense structural list; 3 parts, 13 domains, 44 sections, 360 topics.
3. **The peak** — a single live figure, full-bleed against the folio, breaking the
   measure. Quiet on either side.
4. **Entry** — three parts, plain.
5. **Colophon** — running text: what this is, who maintains it, when it was released.
   It resolves and holds; it is not a footer that fades.

**Grid break:** section 3 only, on purpose.

## The signature move — the release stamp, live

Every `{fig:}` token already carries its source and the date that source was opened.
Today that lives in a `title` attribute: invisible, unreachable by keyboard, useless
on touch.

**Every figure becomes an inspectable citation.** The reader can open any number in
place and see the authority it came from and the day it was checked. Native
disclosure semantics — keyboard reachable, screen-reader announced, and it degrades
to visible text with no JavaScript.

No other tax site can copy this, because no other tax site has 2,488 individually
sourced and dated figures. That is the test the skill sets: a signature move seeded
from something only this client has, not a recoloured stock effect.

Everything around it stays quiet. Boldness is spent here and nowhere else.

## Craft floor — non-negotiable, verified not assumed

- Contrast measured on the composited render: body ≥4.5:1, large ≥3:1, controls ≥3:1
- Responsive walked at desktop, 390px, and reduced-motion, with the screenshots read
- Hero type steps down below ~700px
- Visible keyboard focus on every interactive element
- `transform`/`opacity` motion only, and only under `prefers-reduced-motion: no-preference`
- Zero horizontal overflow, swept across pages — not spot-checked
- Real semantic HTML; text never baked into images

## The plan's own critique

Recorded because the skill requires the plan be attacked before it is built, and
because two of these changed the design.

1. **"Ink on paper with an editorial red" is adjacent to the slop trap.** Warm cream
   plus serif plus clay accent is slop entry #1. *Changed the plan:* paper pulled cool
   and grey, red pushed dark and toward printing ink. The register is body-serif with
   mono apparatus, not display-serif — a different thing — but the values needed
   moving and were moved.

2. **The margin folio risks over-committing to the metaphor.** A reference site whose
   job is moving between 360 topics cannot trade navigation for atmosphere.
   *Changed the plan:* the folio carries identity and position only; navigation stays
   an ordinary visible list.

3. **Dropping Public Sans** — kept. Two families is the discipline, and the serif
   covers the register the brief asks for.

4. **Is the signature move a recoloured stock effect?** No. It is built on data
   unique to this project, and it fixes a real accessibility defect on the way.

5. **The honest risk is scope.** New tokens, new type, new grammar and a new
   interaction across 421 built pages is a lot to verify in one pass. The mitigation
   is the sweep, not optimism.
