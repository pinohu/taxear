import { verifyToken, sessionToken, setCookieHeader } from '../../_lib/cookie.js';
import { applyPending } from '../../_lib/follows.js';

// GET /api/follow/confirm?token=… — the link from the confirmation email. Proves the
// mailbox, applies every pending follow for that address, signs the browser in, and
// lands on the account page. One use; 24 hours.
export async function onRequestGet({ request, env }) {
  const url = new URL(request.url);
  const back = (q) => Response.redirect(`${url.origin}/account/${q}`, 303);
  if (!env.COOKIE_SECRET || !env.ACCESS_KV) return back('?error=config');
  const payload = await verifyToken(url.searchParams.get('token'), env.COOKIE_SECRET);
  if (!payload || payload.purpose !== 'confirm-follow' || !payload.jti || !payload.email) return back('?error=link');
  const pending = await env.ACCESS_KV.get(`confirm:${payload.jti}`);
  if (pending !== payload.email) return back('?error=link');
  await env.ACCESS_KV.delete(`confirm:${payload.jti}`);
  await applyPending(env, payload.email);
  const token = await sessionToken(payload.email, env.COOKIE_SECRET);
  return new Response(null, { status: 303, headers: { Location: `${url.origin}/account/?followed=1`, 'Set-Cookie': setCookieHeader(token) } });
}
