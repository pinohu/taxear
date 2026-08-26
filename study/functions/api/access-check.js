import { readCookie, verifyToken } from '../_lib/cookie.js';

// GET /api/access-check — used by the practice pages on load to confirm this
// browser holds a valid, signed purchase token before rendering any question content.
export async function onRequestGet({ request, env }) {
  if (!env.COOKIE_SECRET) {
    return new Response(JSON.stringify({ access: false }), { headers: { 'Content-Type': 'application/json' } });
  }
  const token = readCookie(request);
  const payload = token ? await verifyToken(token, env.COOKIE_SECRET) : null;
  return new Response(JSON.stringify({ access: !!payload }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
