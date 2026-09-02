// A minimal HTML page for the few Function responses a person reads in a browser
// (confirmation steps behind emailed links). Same colours as the site; no scripts.
export const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const page = (body, status = 200, title = 'TaxEar Study') => new Response(
  `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${esc(title)} | TaxEar Study</title><meta name="robots" content="noindex"></head><body style="font:17px/1.5 Georgia,serif;max-width:40em;margin:3em auto;padding:0 1em;color:#15171B;background:#F7F7F4">${body}</body></html>`,
  { status, headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' } },
);

export const BUTTON = 'font:600 16px ui-monospace,Menlo,monospace;background:#8C1D18;color:#fff;border:0;border-radius:2px;padding:.7em 1.2em;cursor:pointer';
