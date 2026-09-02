import { verifyToken, sessionToken, setCookieHeader } from '../../_lib/cookie.js';
import { applyPendingCode, topicOf } from '../../_lib/follows.js';
import { page, esc, BUTTON } from '../../_lib/page.js';

// The link from the confirmation email. GET only shows what will be followed and a
// button, because mail scanners and link previews fetch every URL in a message; the
// POST behind the button proves the mailbox, follows the one topic the link was sent
// for, signs the browser in, and lands on the account page. One use; 24 hours.
async function recordFor(token, env) {
  if (!env.COOKIE_SECRET || !env.ACCESS_KV) return null;
  const payload = await verifyToken(token, env.COOKIE_SECRET);
  if (!payload || payload.purpose !== 'confirm-follow' || !payload.jti || !payload.email) return null;
  const raw = await env.ACCESS_KV.get(`confirm:${payload.jti}`);
  if (!raw) return null;
  let rec;
  try { rec = JSON.parse(raw); } catch { rec = null; }
  // Records written before the link was bound to a topic hold the address alone; they
  // are honoured for the address but follow nothing, since the topic is unknown.
  if (!rec || typeof rec !== 'object') rec = { email: raw, code: null };
  if (rec.email !== payload.email) return null;
  return { ...rec, jti: payload.jti };
}

const invalid = () => page('<p>That link is not valid or has been used. Ask again from the topic page, or sign in on your <a href="/account/">account page</a> to manage what you follow.</p>', 400, 'Follow');

export async function onRequestGet({ request, env }) {
  const token = new URL(request.url).searchParams.get('token') || '';
  const rec = await recordFor(token, env);
  if (!rec) return invalid();
  const topic = rec.code ? topicOf(rec.code) : null;
  const what = topic ? `<strong>${esc(topic.title)}</strong> (SEE ${esc(rec.code)})` : 'the topic you asked for';
  return page(`<h1 style="font-size:1.4em">Follow ${what}?</h1><p>Alerts for material changes to this page will go to <strong>${esc(rec.email)}</strong>. Nothing else you may have asked for is followed by this step.</p><form method="post" action="/api/follow/confirm"><input type="hidden" name="token" value="${esc(token)}"><button type="submit" style="${BUTTON}">Confirm and follow</button></form>`, 200, 'Follow');
}

export async function onRequestPost({ request, env }) {
  const url = new URL(request.url);
  const form = await request.formData().catch(() => null);
  const rec = await recordFor(form?.get('token') || '', env);
  if (!rec) return invalid();
  await env.ACCESS_KV.delete(`confirm:${rec.jti}`);
  if (rec.code) await applyPendingCode(env, rec.email, rec.code);
  const token = await sessionToken(rec.email, env.COOKIE_SECRET);
  return new Response(null, { status: 303, headers: { Location: `${url.origin}/account/?followed=1`, 'Set-Cookie': setCookieHeader(token) } });
}
