# Related-developments tracking

What this is, why it's built the way it is, and the one rule it has to respect.

## The ask and the tension

The brief was "track related news for every rule," live and automated, no per-item human
review before anything appears. Taken literally, that risks landing on exactly the pattern
CLAUDE.md rule 7 rules out — "Never build a 'generate an article' feature" — and rule 1's
requirement that every claim trace to a source that was actually opened and read, not
recalled or summarized by a model at runtime.

The resolution: **the feature is live and automated, but it never asserts anything.** It
renders a title, a document type, a publication date, and a direct link — verbatim from the
Federal Register's own API, nothing rewritten, nothing summarized, no claim about what a
filing means. That's the same class of thing as the "Related topics" list or the authority
rail: an index into primary sources, not an authored claim. It stays inside rule 7 because
there is no article to generate; it stays inside rule 1's spirit because TaxEar itself
asserts nothing the reader has to trust — they click through and read the primary source
themselves, exactly as rule 1 already asks of every editor.

## How it works

- `NewsTracking.astro` renders a container; a small client script fetches directly from
  `api.federalregister.gov`, filtered to `agencies=internal-revenue-service` and the page's
  own `newsQuery` phrase, `order=newest`, top 5 results.
- Runs entirely in the visitor's browser. No API key, no server, no build-time fetch — the
  Federal Register API sends `Access-Control-Allow-Origin: *`, so a plain client-side
  `fetch()` works without a proxy. Nothing about this touches the static build or CI.
- Empty and error states link out to a pre-filled federalregister.gov search instead of
  failing silently, so the reader always has a next step even when the widget itself can't
  reach the API.
- Added via the `newsQuery` frontmatter field (optional, rare — see `docs/PAGE_TEMPLATE.md`).
  Only add it where a topic has genuine, ongoing rulemaking or notice activity; most topics
  won't have one, and an empty widget on every page would just be noise.

## What this is not

Not a substitute for the "How this has changed" section or a dated `changelog` entry — those
stay editorial, reviewed, and dated the way every other page fact is. This widget surfaces
*candidates* for a human editor to notice and, later, fold into the page properly if
something turns out to matter. It is not itself the record of what changed.

## Known limitation

The Federal Register only covers rulemaking, notices, and other Federal Register
publications — it does not cover Tax Court opinions, private letter rulings, or IRS
Internal Revenue Bulletin items (Revenue Rulings/Procedures), which have no comparably open,
CORS-enabled public API today. A topic whose real developments come from those channels
won't see them reflected here. Worth widening once a workable source exists for them.
