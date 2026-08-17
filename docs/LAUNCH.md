# Launch runbook

Deploying `taxear.com` on Cloudflare Pages. Steps marked **owner** need registrar or
dashboard access. Values that are specific to the account — nameservers, tokens,
verification strings — are read from the dashboard at the time; they are not written
here because guessing them produces a broken zone.

Cloudflare's dashboard labels move around. Where a path is given, treat it as the
current name of the setting rather than an exact route.

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

The first build should report the same page count as a local `npm run build`. If it
reports fewer, the build picked up a stale lockfile — check that `package-lock.json` is
committed and that the build log shows `npm ci`.

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

Name the provider and the endpoint goes in `PUBLIC_DIGEST_ENDPOINT`; nothing else changes.
Whichever is chosen, keep double opt-in on and confirm the provider's privacy statement
matches what `/about/` says.

## 7. Post-launch checks

```sh
npm run build && npm run verify       # never deploy a red tree
curl -sS https://taxear.com/sitemap-index.xml | head
```

- [ ] Both hostnames serve TLS; `www` 301s to apex.
- [ ] `robots.txt` reachable and names the sitemap.
- [ ] A published page's `<link rel="canonical">` points at the apex URL.
- [ ] An unpublished page still carries `noindex`.
- [ ] Digest form submits and the provider sends its confirmation email.
- [ ] Analytics records the visit.
- [ ] Search Console and Bing both verified, sitemap submitted.
