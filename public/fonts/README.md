# Fonts

Self-hosted so the site issues no third-party request. Each file is the woff2 build
Google Fonts serves for the same family and weight, taken from `fonts.gstatic.com` and
committed here unmodified; only the `latin` and `latin-ext` subsets are kept, which is
everything this site sets. Public Sans was removed on 23 August 2026 with the
navy-and-gold system: the design uses two families, not three.

| Family | Weights used | Files | Licence |
|---|---|---|---|
| Source Serif 4 | 500, 600 | `source-serif-4-{latin,latin-ext}.woff2` | SIL OFL 1.1 |
| IBM Plex Mono | 400, 600 | `ibm-plex-mono-{400,600}-{latin,latin-ext}.woff2` | SIL OFL 1.1 |

Source Serif 4 is a variable font, so its two weights share a single file and are
instanced by the `font-weight` descriptor — that is what Google's own
stylesheet does, and it is why those filenames carry no weight. IBM Plex Mono ships as
static cuts, one file per weight.

The `@font-face` rules, including the `unicode-range` values copied from the Google
stylesheet, are at the top of `src/styles/global.css`. `src/layouts/Base.astro` preloads
only the two latin faces used above the fold.

Full licence text for each family sits beside the files as `LICENSE-<family>.txt`.

To refresh a family, request its CSS from `fonts.googleapis.com/css2` with a current
browser user-agent, take the `latin` and `latin-ext` `woff2` URLs, and replace both the
files and the `unicode-range` values together — the ranges change between font versions.
