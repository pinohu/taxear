# Slide deck — Offer in compromise (SEE 3.3.1.c)

An animated teaching deck pairing with `docs/video-scripts/offer-in-compromise.md` and the
published page. Built as a web artifact (HTML/CSS/JS, no build step) rather than a `.pptx`
so the animated transitions and TaxEar's own design tokens carry over exactly; export to
PowerPoint later if a specific delivery channel needs the file format.

**Live at:** https://claude.ai/code/artifact/1a58665f-1f8a-40f8-929d-5b98affb6e4c

Private by default — share it from the page's own share menu when it's ready for anyone
else to see. Seven slides: title, the three grounds, the payment/24-month threshold
(mirrors the page's own diagram), the 24-month rule isolated, the lump-sum-vs-periodic
scenario from the page, three traps, and a closing citation slide. Every figure and claim
matches the published page exactly — same discipline as the video script: update the page
first, then bring the deck in line, never the reverse.

Reuses TaxEar's DESIGN.md tokens (six colour roles, Source Serif 4 + IBM Plex Mono,
hairlines, one accent) so it reads as the same publication instead of a separate brand,
and carries the same light/dark support (via `prefers-color-scheme`, no toggle needed for
a single-session teaching deck).
