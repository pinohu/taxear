// Signed, stateless access tokens using HMAC-SHA256 (Web Crypto — available natively
// in the Cloudflare Pages Functions / Workers runtime and in Node 22, so the same code
// runs in the tests). Token shape: base64url(JSON payload) + "." + base64url(signature).
//
// The token proves who the browser is (an email address whose control was proven by a
// Stripe checkout or a magic link) and when that proof expires. It never carries what
// the person is entitled to: entitlements are read from KV on every gated request so a
// refund or a cancellation takes effect at once.

const COOKIE_NAME = 'ta_access';
export const SESSION_DAYS = 30;

function toBase64Url(bytes) {
  let bin = '';
  for (const b of bytes) bin += String.fromCharCode(b);
  return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function fromBase64Url(str) {
  const b64 = str.replace(/-/g, '+').replace(/_/g, '/');
  const bin = atob(b64 + '='.repeat((4 - (b64.length % 4)) % 4));
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return bytes;
}

async function hmacKey(secret) {
  return crypto.subtle.importKey('raw', new TextEncoder().encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign', 'verify']);
}

export async function signToken(payload, secret) {
  const body = toBase64Url(new TextEncoder().encode(JSON.stringify(payload)));
  const key = await hmacKey(secret);
  const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(body));
  return `${body}.${toBase64Url(new Uint8Array(sig))}`;
}

// Returns the payload, or null when the signature is wrong, the token is malformed,
// or `exp` (milliseconds since the epoch) has passed. Every token must carry exp.
export async function verifyToken(token, secret) {
  if (!token || !token.includes('.')) return null;
  const [body, sig] = token.split('.');
  let key, valid;
  try {
    key = await hmacKey(secret);
    valid = await crypto.subtle.verify('HMAC', key, fromBase64Url(sig), new TextEncoder().encode(body));
  } catch { return null; }
  if (!valid) return null;
  try {
    const payload = JSON.parse(new TextDecoder().decode(fromBase64Url(body)));
    if (!payload.exp || Date.now() > payload.exp) return null;
    return payload;
  } catch {
    return null;
  }
}

export async function sessionToken(email, secret) {
  const now = Date.now();
  return signToken({ email, iat: now, exp: now + SESSION_DAYS * 86400e3, purpose: 'session' }, secret);
}

export function setCookieHeader(token, { maxAgeSeconds = SESSION_DAYS * 86400 } = {}) {
  return `${COOKIE_NAME}=${token}; Path=/; Max-Age=${maxAgeSeconds}; Secure; HttpOnly; SameSite=Lax`;
}

export function clearCookieHeader() {
  return `${COOKIE_NAME}=; Path=/; Max-Age=0; Secure; HttpOnly; SameSite=Lax`;
}

export function readCookie(request) {
  const header = request.headers.get('Cookie') || '';
  const match = header.match(new RegExp(`(?:^|;\\s*)${COOKIE_NAME}=([^;]+)`));
  return match ? match[1] : null;
}

// The signed-in email for this request, or null.
export async function sessionEmail(request, env) {
  if (!env.COOKIE_SECRET) return null;
  const token = readCookie(request);
  const payload = token ? await verifyToken(token, env.COOKIE_SECRET) : null;
  return payload?.purpose === 'session' && payload.email ? payload.email : null;
}
