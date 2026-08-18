# Running this project locally

The content work has to happen where the primary sources are reachable. Cloud sessions
for this repo run behind an egress proxy that answers `403` to `CONNECT` for irs.gov,
law.cornell.edu, ecfr.gov, uscode.house.gov and govinfo.gov, which makes rules 1 and 3 in
`CLAUDE.md` impossible to satisfy there. On your own machine there is no such proxy.

This is a one-time setup. Fifteen minutes, most of it waiting on `npm ci`.

## 1. Get the code

```sh
git clone https://github.com/pinohu/taxear.git
cd taxear
git checkout claude/taxear-build-handoff-gdzo4x    # until PR #1 is merged into main
```

## 2. Node 22

The build is pinned to Node 22 by `.nvmrc`.

```sh
nvm use            # or: nvm install 22 && nvm use 22
node --version     # expect v22.x
npm ci
```

Use `npm ci`, not `npm install` — it installs exactly what the lockfile says, which is
what CI and Cloudflare Pages both do.

## 3. Put the question bank in place

`private/` is gitignored, so a fresh clone does not have it and never will. Copy the
purchased bank in by hand:

```sh
mkdir -p private
cp /path/to/PRIVATE-questions-bank.json private/questions.json
```

Without it, `npm run tag` exits with a message and the §4 test-case checks in
`docs/VERIFICATION.md` cannot run. Everything else works without it.

If you have the discrepancy log from the cloud session, drop it alongside as
`private/discrepancies.md`. If not, it will be recreated as pages are checked — it is a
working log, not an input.

Never commit either file. CI fails the build if anything under `private/` is tracked, and
`.gitignore` already covers the directory.

## 4. Confirm the tree is healthy

```sh
npm test          # expect 18 passing
npm run build     # expect ~372 pages, no errors
npm run verify    # expect 0 errors; warnings on the exemplar are known and listed below
npm run dev       # http://localhost:4321
```

`verify` currently reports ten warnings, all on the statute of limitations page: three
forms it cites that have no directory entry yet, four related topics not yet authored, one
rate written in prose, and two IRC sections cited in the body but absent from
`authorities[]`. They are expected until the first batch is written; none is an error.

## 5. Start the work

Open Claude Code in the repo root. `CLAUDE.md` is picked up automatically, so the rules,
the commands and the current state come with it — no re-briefing needed.

A first instruction that works:

> Work `docs/STEP5_PLAN.md`. Start with 3.2.6.a: open every authority in its
> `authorities[]` list and re-verify each citation on the page, then close the three gaps
> in `private/discrepancies.md` — the § 6511(d) special refund periods, currently not
> collectible, and the § 6330(e)(1) tail. Verify its five figure keys against sources and
> stamp them. Then run the §4 check for the bank IDs listed for that code. Leave it at
> `review` for me.

Two things that get easier the moment you are local, both blocked in the cloud session:

- **Self-hosting the fonts.** `docs/LAUNCH.md` §7 has the procedure. It is the entire gap
  between 90 and 100 on Lighthouse performance, and it removes the only third-party
  request the site makes.
- **The `/ea-exam/` page.** The scored-question count, section and break structure, and
  carryover period all need checking against the current candidate bulletin, and the
  testing vendor changed during 2026.

## Optional: Lighthouse locally

Not a project dependency, since it is only used for spot checks:

```sh
npm install --no-save lighthouse playwright
npm run build && npx astro preview --port 4321 &
npx lighthouse http://localhost:4321/ --only-categories=performance,accessibility,seo,best-practices --view
```

Baseline to beat, desktop, on a topic page: accessibility 100, SEO 100, best practices 96,
performance 90 — the last two limited only by the Google Fonts request.

## Pushing

Same branch rules as before: work on `claude/taxear-build-handoff-gdzo4x` (or a fresh
branch off `main` once PR #1 is merged), `git push -u origin <branch>`, and let CI run.
Nothing deploys until Cloudflare Pages is connected — see `docs/LAUNCH.md`.
