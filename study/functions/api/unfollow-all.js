import { verifyToken } from '../_lib/cookie.js';
import { removeAllFollows } from '../_lib/follows.js';

// GET /api/unfollow-all?token=… — the one-click "stop all alerts" link in every alert
// email. The token names the address and nothing else; no sign-in needed.
export async function onRequestGet({ request, env }) {
  const url = new URL(request.url);
  const payload = env.COOKIE_SECRET ? await verifyToken(url.searchParams.get('token'), env.COOKIE_SECRET) : null;
  const ok = payload?.purpose === 'unfollow-all' && payload.email && env.ACCESS_KV;
  if (ok) await removeAllFollows(env, payload.email);
  const body = ok
    ? `<p>Alerts are off for <strong>${payload.email}</strong>. You can follow topics again from your <a href="/account/">account page</a> at any time.</p>`
    : '<p>That link is not valid. Sign in on your <a href="/account/">account page</a> to manage what you follow.</p>';
  return new Response(`<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Alerts | TaxEar Study</title><meta name="robots" content="noindex"></head><body style="font:17px/1.5 Georgia,serif;max-width:40em;margin:3em auto;padding:0 1em;color:#15171B;background:#F7F7F4">${body}</body></html>`, { status: ok ? 200 : 400, headers: { 'Content-Type': 'text/html; charset=utf-8' } });
}
