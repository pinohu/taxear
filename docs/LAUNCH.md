# Launch runbook

Deploying `taxear.com` on Cloudflare Pages. Steps marked **owner** need registrar or
dashboard access. Values that are specific to the account — nameservers, tokens,
verification strings — are read from the dashboard at the time; they are not written
here because guessing them produces a broken zone.

Cloudflare's dashboard labels move around. Where a path is given, treat it as the
current name of the setting rather than an exact route.

## 0. The branch situation — one step left, and it is the owner's

`main` now carries the finished site. PR #1 was merged on 22 August 2026 as
`5aff918`; all 360 published topic pages, 44 form entries and 7 notice entries are on
`main`, and that is what Pages should build.

One thing is still wrong, and it needs repository-settings access:

**The repository default branch still points at `claude/taxear-build-handoff-gdzo4x`,
not `main`.** GitHub → the repo → Settings → General → Default branch → switch it to
`main`. Until that happens, a fresh `git clone` lands on the feature branch rather than
on `main`, which is confusing rather than broken — Pages is configured with an explicit
production branch and is unaffected.

Confirm from a fresh clone before creating the Pages project:

```sh
git clone https://github.com/pinohu/taxear && cd taxear
git checkout main
npm ci && npm run build && npm run verify
```

Expect **421 HTML files** in `dist/` and **420 URLs** in `dist/sitemap-0.xml` — the
difference is `404.html`, which is deliberately not in the sitemap. `verify` should
report zero errors.

## 1. Create the Pages project — owner

Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git, then pick
`pinohu/taxear`.

| Setting | Value |
|---|---|
| Production branch | `main` |
| Framework preset | Astro (or None) |
| Build command | `npm run build` |
| Output directory | `dist` |
| Root directory | *(repo root)* |
| Node version | 22 — set by `.nvmrc`; also settable as a `NODE_VERSION` variable |

The first build should report **421 pages** — the same count as a local `npm run build`
against the merged `main`. If it reports fewer, either the production branch is still
pointing at the old `main` (see step 0) or the build picked up a stale lockfile — check
that `package-lock.json` is committed and that the build log shows `npm ci`.

### Environment variables

Set under Settings → Environment variables, for Production and Preview. Both are
optional; each feature is simply absent when its variable is unset (see `.env.example`).

| Name | Purpose |
|---|---|
| `PUBLIC_DIGEST_ENDPOINT` | Where the digest form posts. From the email provider. |
| `PUBLIC_CF_BEACON_TOKEN` | Cloudflare Web Analytics site token. |

Anything named `PUBLIC_*` is compiled into the static HTML and is world-readable. Never
put an API secret in one.

## 2. DNS — owner

Two ways to point the domain. The first is materially easier and is what the rest of
this document assumes.

### Path A (recommended): Cloudflare as DNS provider

1. Cloudflare dashboard → Add a site → `taxear.com`, pick a plan (Free is sufficient).
2. Cloudflare shows **two assigned nameservers**, unique to the account, of the form
   `<name>.ns.cloudflare.com`. Copy them exactly.
3. At the registrar, replace the existing nameservers with those two. Remove the
   registrar's defaults; do not keep both sets.
4. Wait for Cloudflare to report the zone active. Propagation is usually under an hour
   and can take up to 24.
5. In the Pages project → Custom domains, add **both** `taxear.com` and `www.taxear.com`.
   Cloudflare creates the records itself; nothing needs to be typed into DNS.

The records it creates look like this — listed so they can be recognised, not typed:

| Type | Name | Content | Proxy |
|---|---|---|---|
| CNAME | `taxear.com` | `<project>.pages.dev` | Proxied |
| CNAME | `www` | `<project>.pages.dev` | Proxied |

An apex `CNAME` is legal here because Cloudflare flattens it at the edge. That is exactly
why Path A is preferred: most registrars cannot host a CNAME at the apex.

### Path B: DNS stays at the registrar

Only workable if the registrar supports `ALIAS`, `ANAME`, or apex `CNAME` flattening.

| Type | Name | Content | TTL |
|---|---|---|---|
| ALIAS or ANAME (or apex CNAME, if supported) | `@` | `<project>.pages.dev` | Auto / 300 |
| CNAME | `www` | `<project>.pages.dev` | Auto / 300 |

Never point an `A` record at an IP address read from a `dig` of `pages.dev`. Those
addresses are shared and rotate; the site breaks without warning when they do.

## 3. Redirect `www` to the apex — owner

Both hostnames are added to Pages so both serve TLS, then one redirects to the other.
Canonical URLs on the site are apex, so `www` is the one that redirects.

Cloudflare dashboard → the `taxear.com` zone → Rules → Redirect Rules → Create:

- **If** hostname equals `www.taxear.com`
- **Then** dynamic redirect to `concat("https://taxear.com", http.request.uri.path)`
- Status **301**, preserve query string

Verify both, after the certificate is issued:

```sh
curl -sSI https://www.taxear.com/ | head -n 5   # expect 301 and Location: https://taxear.com/
curl -sSI https://taxear.com/     | head -n 5   # expect 200
curl -sS  https://taxear.com/robots.txt         # expect the sitemap line
```

The `public/_redirects` file is for path-level redirects within the site. Use the
Redirect Rule above for the hostname change.

## 4. Search Console and Bing — owner

Both accept a file in `public/`, which is the durable choice: it lives in the repo and
survives DNS changes.

1. Google Search Console → Add property → **URL prefix** → `https://taxear.com`.
   Choose the HTML-file method. It offers `google<hash>.html`. Save that file into
   `public/` exactly as downloaded, commit, let Pages deploy, then press Verify.
2. Bing Webmaster Tools → Add site. Either import from Search Console (fastest) or
   download `BingSiteAuth.xml` into `public/` the same way.
3. In both, submit `https://taxear.com/sitemap-index.xml`.

Do not commit a placeholder verification file with a made-up hash: verification then
fails in a way that looks like a DNS problem.

Note what is and is not indexable before submitting: only `status: published` pages are
indexed, everything else carries `noindex`, and `/changes/` is the page worth watching
in the coverage report as pages are published.

## 5. Analytics — owner

Cloudflare dashboard → the zone → Analytics → Web Analytics → enable for `taxear.com`,
then copy the site token into `PUBLIC_CF_BEACON_TOKEN` and redeploy. No cookies, no
cross-site identifiers, nothing to disclose in a cookie banner.

Plausible is the alternative if hosted-elsewhere analytics is preferred later; it needs a
script tag rather than a token, so it would be a small change to `src/layouts/Base.astro`.
Ad and retargeting trackers are out of scope for this site by policy.

## 6. Email digest — owner decision

The form is built and posts wherever it is told. It needs a provider that accepts a plain
`POST` with an `email` field and does its own confirmation:

| Provider | Endpoint shape | Notes |
|---|---|---|
| Buttondown | `https://buttondown.com/api/emails/embed-subscribe/<user>` | Simple, no JS |
| MailerLite | Provider-generated form action | Free tier is generous |
| Mailchimp | `https://<dc>.list-manage.com/subscribe/post?u=…&id=…` | Heavier, more tracking |

Name the provider and the endpoint goes in `PUBLIC_DIGEST_ENDPOINT`. One more change:
the Content-Security-Policy in `public/_headers` lists the hosts a form may post to
(`form-action`), and it names Buttondown today. Add the chosen provider's host there
in the same commit, or the browser blocks the subscribe button silently.
Whichever is chosen, keep double opt-in on and confirm the provider's privacy statement
matches what `/about/` says.

## 7. Fonts are self-hosted — done

Measured on the exemplar topic page before the change, desktop Lighthouse: accessibility
100, SEO 100, performance 90, best practices 96. The whole gap was the one
render-blocking `fonts.googleapis.com` stylesheet.

The three families now ship from `public/fonts/` — the same woff2 builds Google serves,
latin and latin-ext only, with the SIL OFL 1.1 text for each beside them. The
`@font-face` rules are at the top of `src/styles/global.css` and carry the
`unicode-range` values verbatim, so a page with no latin-ext characters fetches only the
latin files. `src/layouts/Base.astro` preloads the two faces used above the fold, and
`_headers` gives `/fonts/*` the same immutable cache header as the Astro assets.

With fonts self-hosted the site's own assets make no third-party request. Two features
do, and `/privacy/` discloses both: the related-developments widget on pages that carry
a `newsQuery` fetches the Federal Register's public API from the reader's browser
(docs/NEWS_TRACKING.md), and the analytics beacon loads from Cloudflare when
`PUBLIC_CF_BEACON_TOKEN` is set.

`public/fonts/README.md` records the provenance and how to refresh a family — take the
new woff2 URLs *and* the new `unicode-range` values together, because the ranges change
between font versions.

Re-run Lighthouse against the deployed site to confirm the score; it was measured
locally, not on Pages.

## 8. Post-launch checks

```sh
npm run build && npm run verify       # never deploy a red tree
curl -sS https://taxear.com/sitemap-index.xml | head
```

- [ ] `main` is the repository default branch again (step 0). PR #1 is already merged.
- [ ] The deployed build reports 421 pages; `/sitemap-index.xml` resolves to 420 URLs.
- [ ] Both hostnames serve TLS; `www` 301s to apex.
- [ ] `robots.txt` reachable and names the sitemap.
- [ ] A published page's `<link rel="canonical">` points at the apex URL.
- [ ] An unpublished page still carries `noindex`.
- [ ] Digest form submits and the provider sends its confirmation email.
- [ ] Analytics records the visit.
- [ ] Search Console and Bing both verified, sitemap submitted.
