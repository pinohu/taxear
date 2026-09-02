import { json, error, readJson, normalizeEmail, corsHeaders } from '../_lib/json.js';
import { entitlementsFor } from '../_lib/entitlements.js';
import { addFollow, isKnownCode } from '../_lib/follows.js';

// POST /api/follow { email, code } — from the "Follow this rule" control on taxear.com
// (cross-origin) or from Study's own pages. A Practitioner subscriber is added to the
// topic's followers; anyone else gets pointed at the subscription, and the request is
// kept as a pending follow that is applied the moment they subscribe.
export async function onRequestOptions({ request }) {
  return new Response(null, { status: 204, headers: corsHeaders(request) });
}

export async function onRequestPost({ request, env }) {
  const cors = corsHeaders(request);
  if (!env.ACCESS_KV) return error('Following is not configured yet.', 503);
  const { email: raw, code } = await readJson(request);
  const email = normalizeEmail(raw);
  if (!email) return json({ error: 'That does not look like an email address.' }, 400, cors);
  if (!isKnownCode(code)) return json({ error: 'Unknown topic code.' }, 400, cors);

  const ent = await entitlementsFor(env, email);
  const origin = new URL(request.url).origin;
  if (!ent.practitioner) {
    await addFollow(env, email, code, { pending: true });
    return json({ status: 'needs_subscription', subscribeUrl: `${origin}/practitioner/?code=${encodeURIComponent(code)}`, message: 'Alerts are part of the Practitioner subscription. Subscribe and this topic is followed from the first alert.' }, 200, cors);
  }
  const count = await addFollow(env, email, code);
  return json({ status: 'following', count, manageUrl: `${origin}/account/` }, 200, cors);
}
