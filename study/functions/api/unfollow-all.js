import { verifyToken } from '../_lib/cookie.js';
import { removeAllFollows } from '../_lib/follows.js';
import { page, esc, BUTTON } from '../_lib/page.js';

// The "stop all alerts" link in every alert email. GET only shows a confirmation with a
// button, because mail scanners and link previews fetch every URL in a message; the
// POST behind the button is what stops the alerts. The token names the address and
// nothing else; no sign-in needed.
async function payloadFrom(token, env) {
  const p = env.COOKIE_SECRET ? await verifyToken(token, env.COOKIE_SECRET) : null;
  return p?.purpose === 'unfollow-all' && p.email && env.ACCESS_KV ? p : null;
}

export async function onRequestGet({ request, env }) {
  const token = new URL(request.url).searchParams.get('token') || '';
  const p = await payloadFrom(token, env);
  if (!p) return page('<p>That link is not valid. Sign in on your <a href="/account/">account page</a> to manage what you follow.</p>', 400, 'Alerts');
  return page(`<h1 style="font-size:1.4em">Stop all alerts?</h1><p>This turns off every change alert for <strong>${esc(p.email)}</strong>. You can follow topics again from your account page at any time. To stop one topic only, use the <a href="/account/">account page</a> instead.</p><form method="post" action="/api/unfollow-all"><input type="hidden" name="token" value="${esc(token)}"><button type="submit" style="${BUTTON}">Stop all alerts</button></form>`, 200, 'Stop alerts');
}

export async function onRequestPost({ request, env }) {
  const form = await request.formData().catch(() => null);
  const p = await payloadFrom(form?.get('token') || '', env);
  if (!p) return page('<p>That link is not valid. Sign in on your <a href="/account/">account page</a> to manage what you follow.</p>', 400, 'Alerts');
  await removeAllFollows(env, p.email);
  return page(`<p>Alerts are off for <strong>${esc(p.email)}</strong>. You can follow topics again from your <a href="/account/">account page</a> at any time.</p>`, 200, 'Alerts');
}
