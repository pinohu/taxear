import { verifyToken } from '../_lib/cookie.js';
import { removeAllFollows } from '../_lib/follows.js';

// The "stop all alerts" link in every alert email. GET only shows a confirmation with a
// button, because mail scanners and link previews fetch every URL in a message; the
// POST behind the button is what stops the alerts. The token names the address and
// nothing else; no sign-in needed.
const page = (body, status = 200) => new Response(`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Alerts | TaxEar Study</title><meta name="robots" content="noindex"></head><body style="font:17px/1.5 Georgia,serif;max-width:40em;margin:3em auto;padding:0 1em;color:#15171B;background:#F7F7F4">${body}</body></html>`, { status, headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' } });

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

async function payloadFrom(token, env) {
  const p = env.COOKIE_SECRET ? await verifyToken(token, env.COOKIE_SECRET) : null;
  return p?.purpose === 'unfollow-all' && p.email && env.ACCESS_KV ? p : null;
}

export async function onRequestGet({ request, env }) {
  const token = new URL(request.url).searchParams.get('token') || '';
  const p = await payloadFrom(token, env);
  if (!p) return page('<p>That link is not valid. Sign in on your <a href="/account/">account page</a> to manage what you follow.</p>', 400);
  return page(`<h1 style="font-size:1.4em">Stop all alerts?</h1><p>This turns off every change alert for <strong>${esc(p.email)}</strong>. You can follow topics again from your account page at any time. To stop one topic only, use the <a href="/account/">account page</a> instead.</p><form method="post" action="/api/unfollow-all"><input type="hidden" name="token" value="${esc(token)}"><button type="submit" style="font:600 16px ui-monospace,Menlo,monospace;background:#8C1D18;color:#fff;border:0;border-radius:2px;padding:.7em 1.2em;cursor:pointer">Stop all alerts</button></form>`);
}

export async function onRequestPost({ request, env }) {
  const form = await request.formData().catch(() => null);
  const p = await payloadFrom(form?.get('token') || '', env);
  if (!p) return page('<p>That link is not valid. Sign in on your <a href="/account/">account page</a> to manage what you follow.</p>', 400);
  await removeAllFollows(env, p.email);
  return page(`<p>Alerts are off for <strong>${esc(p.email)}</strong>. You can follow topics again from your <a href="/account/">account page</a> at any time.</p>`);
}
