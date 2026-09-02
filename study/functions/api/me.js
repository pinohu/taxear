import { sessionEmail } from '../_lib/cookie.js';
import { entitlementsFor } from '../_lib/entitlements.js';
import { json } from '../_lib/json.js';

// GET /api/me — who this browser is signed in as and what they can open. The pages
// call this on load; nothing gated renders until it answers.
export async function onRequestGet({ request, env }) {
  const email = await sessionEmail(request, env);
  if (!email) return json({ email: null, entitlements: { parts: [], practitioner: false, expires: {}, revoked: false }, configured: !!(env.COOKIE_SECRET && env.ACCESS_KV) });
  return json({ email, entitlements: await entitlementsFor(env, email), configured: true });
}
