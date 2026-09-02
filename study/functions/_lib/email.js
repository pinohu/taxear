// Transactional email through Resend's REST API. Only two kinds of message leave this
// system: a sign-in link someone asked for, and a change alert someone subscribed to.
// Without RESEND_API_KEY the send is refused with a clear error, never faked.

export async function sendEmail(env, { to, subject, text, html }) {
  if (!env.RESEND_API_KEY || !env.MAIL_FROM) throw new Error('Email is not configured (RESEND_API_KEY / MAIL_FROM).');
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ from: env.MAIL_FROM, to: [to], subject, text, html }),
  });
  if (!res.ok) {
    const body = await res.text().catch(() => '');
    throw new Error(`Email provider responded ${res.status}${body ? `: ${body.slice(0, 200)}` : ''}`);
  }
  return res.json();
}

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Plain, short, no images, no tracking. The text version is the primary one.
function wrap(title, bodyHtml) {
  return `<!doctype html><html><body style="margin:0;background:#F7F7F4;color:#15171B;font:16px/1.5 Georgia,serif"><div style="max-width:560px;margin:0 auto;padding:32px 24px"><p style="font:600 15px ui-monospace,Menlo,monospace;margin:0 0 24px">Tax<span style="color:#8C1D18">Ear</span> Study</p><h1 style="font-size:22px;margin:0 0 16px">${esc(title)}</h1>${bodyHtml}<p style="font:13px ui-monospace,Menlo,monospace;color:#565B63;border-top:1px solid #DAD8D0;padding-top:16px;margin-top:32px">Neat Circle LLC · <a href="https://taxear.com/privacy/" style="color:#565B63">Privacy</a> · editor@taxear.com</p></div></body></html>`;
}

export function loginEmail({ link }) {
  return {
    subject: 'Your TaxEar Study sign-in link',
    text: `Sign in to TaxEar Study:\n\n${link}\n\nThe link works once and expires in 15 minutes. If you did not ask for it, ignore this message; nothing happens without the link.`,
    html: wrap('Sign in to TaxEar Study', `<p><a href="${esc(link)}" style="display:inline-block;background:#8C1D18;color:#fff;text-decoration:none;padding:12px 20px;border-radius:2px;font-weight:600">Sign in</a></p><p>The link works once and expires in 15 minutes. If you did not ask for it, ignore this message; nothing happens without the link.</p><p style="color:#565B63;font-size:14px">Or paste this address into your browser:<br>${esc(link)}</p>`),
  };
}

export function alertEmail({ code, title, date, summary, url, manageUrl, stopUrl }) {
  return {
    subject: `Changed: ${title}`,
    text: `A rule you follow on TaxEar recorded a material change on ${date}.\n\n${title} (SEE ${code})\n${summary}\n\nRead the page: ${url}\n\nYou get this because you follow this topic. Manage what you follow: ${manageUrl}${stopUrl ? `\nStop all alerts: ${stopUrl}` : ''}`,
    html: wrap(`Changed: ${title}`, `<p style="font:13px ui-monospace,Menlo,monospace;color:#565B63">SEE ${esc(code)} · ${esc(date)}</p><p>${esc(summary)}</p><p><a href="${esc(url)}" style="color:#8C1D18">Read the page</a></p><p style="color:#565B63;font-size:14px">You get this because you follow this topic. <a href="${esc(manageUrl)}" style="color:#565B63">Manage what you follow</a>.${stopUrl ? ` <a href="${esc(stopUrl)}" style="color:#565B63">Stop all alerts</a>.` : ''}</p>`),
  };
}

export function confirmFollowEmail({ link, title }) {
  return {
    subject: `Confirm: follow "${title}" on TaxEar`,
    text: `Someone, probably you, asked to follow "${title}" on TaxEar with this address.\n\nConfirm and follow: ${link}\n\nThe link works once and expires in 24 hours. If you did not ask, ignore this message; nothing is followed without the link.`,
    html: wrap(`Follow "${title}"?`, `<p>Someone, probably you, asked to follow <strong>${esc(title)}</strong> on TaxEar with this address.</p><p><a href="${esc(link)}" style="display:inline-block;background:#8C1D18;color:#fff;text-decoration:none;padding:12px 20px;border-radius:2px;font-weight:600">Confirm and follow</a></p><p>The link works once and expires in 24 hours. If you did not ask, ignore this message; nothing is followed without the link.</p>`),
  };
}
