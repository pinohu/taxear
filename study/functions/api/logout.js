import { clearCookieHeader } from '../_lib/cookie.js';
import { json } from '../_lib/json.js';

// POST /api/logout — forgets this browser. Entitlements are untouched.
export async function onRequestPost() {
  return json({ ok: true }, 200, { 'Set-Cookie': clearCookieHeader() });
}
