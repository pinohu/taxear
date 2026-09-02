// Response helpers shared by every Function.
const JSON_HEADERS = { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' };

export function json(body, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(body), { status, headers: { ...JSON_HEADERS, ...extraHeaders } });
}

export function error(message, status = 400, extra = {}) {
  return json({ error: message, ...extra }, status);
}

export async function readJson(request) {
  try { return await request.json(); } catch { return {}; }
}

// The main site posts "follow" requests cross-origin; nothing else needs CORS.
export const CORS_ORIGINS = new Set(['https://taxear.com', 'https://www.taxear.com']);
export function corsHeaders(request) {
  const origin = request.headers.get('Origin') || '';
  if (!CORS_ORIGINS.has(origin)) return {};
  return { 'Access-Control-Allow-Origin': origin, 'Access-Control-Allow-Methods': 'POST, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type', 'Vary': 'Origin' };
}

// Lower-case, trimmed, and shaped like an address; the account key everywhere.
export function normalizeEmail(s) {
  const e = String(s || '').trim().toLowerCase();
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e) && e.length <= 254 ? e : null;
}

export function randomId(bytes = 16) {
  const a = new Uint8Array(bytes); crypto.getRandomValues(a);
  return [...a].map((b) => b.toString(16).padStart(2, '0')).join('');
}
