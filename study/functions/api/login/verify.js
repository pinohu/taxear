import { verifyToken, sessionToken, setCookieHeader } from '../../_lib/cookie.js';

// GET /api/login/verify?token=… — the link from the sign-in email. One use: the token's
// id is deleted from KV as it is consumed. Redirects to the account page either way,
// with ?error=link when the link is stale.
export async function onRequestGet({ request, env }) {
  const url = new URL(request.url);
  const back = (q) => Response.redirect(`${url.origin}/account/${q}`, 303);
  if (!env.COOKIE_SECRET || !env.ACCESS_KV) return back('?error=config');
  const payload = await verifyToken(url.searchParams.get('token'), env.COOKIE_SECRET);
  if (!payload || payload.purpose !== 'login' || !payload.jti || !payload.email) return back('?error=link');
  const pending = await env.ACCESS_KV.get(`login:${payload.jti}`);
  if (pending !== payload.email) return back('?error=link');
  await env.ACCESS_KV.delete(`login:${payload.jti}`);
  const token = await sessionToken(payload.email, env.COOKIE_SECRET);
  return new Response(null, { status: 303, headers: { Location: `${url.origin}/account/`, 'Set-Cookie': setCookieHeader(token) } });
}
