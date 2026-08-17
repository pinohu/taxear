// Tags the private QA question bank with SEE outline codes so each page can be
// checked against the questions that belong to it (docs/VERIFICATION.md §4).
//
// The bank is third-party copyrighted material: gitignored, never published, never
// quoted. This script only reads it, writes `topic_code` back into it, and prints
// question IDs and counts — never stems, choices, or explanations. Keep it that way.
//
//   npm run tag                 tag every untagged question it can place
//   npm run tag -- --retag      recompute all tags, overwriting existing ones
//   npm run tag -- --code 3.2.6.a   list the IDs mapped to one outline code
//   npm run tag -- --report     coverage per outline code
import fs from 'node:fs';
import { pathToFileURL } from 'node:url';

const BANK = 'private/questions.json';
const args = process.argv.slice(2);
const flag = n => args.includes(n);
const valueOf = n => { const i = args.indexOf(n); return i === -1 ? null : args[i + 1]; };

const outline = JSON.parse(fs.readFileSync('src/data/topics.json', 'utf8'));
const validCodes = new Set(outline.parts.flatMap(p => p.domains.flatMap(d => d.sections.flatMap(s => s.topics.map(t => t.code)))));
const titleOf = new Map(outline.parts.flatMap(p => p.domains.flatMap(d => d.sections.flatMap(s => s.topics.map(t => [t.code, t.title])))));

// Rules are ordered: the first match wins, so the specific comes before the general
// and the broad terms of art sit at the bottom as fallbacks. Every pattern is a
// generic term of art (statute names, form numbers, IRS procedure vocabulary), not
// phrasing taken from the bank.
const RULES = [
  // 3.1.1 practice before the IRS
  ['3.1.1.b', /\b(unenrolled|annual filing season program|afsp|limited practice|who may (?:practice|represent)|practice privileges|attorney,? cpa,? (?:and|or) enrolled agent)\b/i],
  // Preparer due diligence on credits and filing status sits in 3.1.4.g, so it has to be
  // tested before the general Circular 230 due-diligence rule below.
  ['3.1.4.g', /\b8867\b|\b(refundable credit|head of household|hoh|eic|eitc|ctc|actc|aotc)\b.{0,60}due diligence|due diligence.{0,60}\b(refundable credit|head of household|hoh|eic|eitc)\b/i],
  // A notice question that happens to mention an amended return is about the notice, so
  // the CP2000 rule outranks the amended-return rule further down.
  ['3.3.3.g', /\bcp-?2000\b|correspondence audit/i],
  // 3.1.2 Circular 230 duties
  ['3.1.2.o', /\bptin\b|preparer tax identification number/i],
  ['3.1.2.j', /\bcontinuing (?:education|professional education)\b|\bce (?:credit|hours|requirement)/i],
  ['3.1.2.l', /\benrollment (?:cycle|renewal)|renew (?:their|his|her)? ?enrollment|form 8554/i],
  ['3.1.2.g', /\bconflict of interest\b/i],
  ['3.1.2.e', /\b(contingent fee|unconscionable fee)\b/i],
  ['3.1.2.d', /\b(advertising|solicitation)\b/i],
  ['3.1.2.h', /\brefund check\b/i],
  ['3.1.2.n', /\breturn(?:ing)? (?:a )?client'?s? records\b|client records/i],
  ['3.1.2.f', /\bdue diligence\b(?!.*\b(?:refundable credit|head of household|eitc)\b)/i],
  ['3.1.2.i', /\bwritten advice|covered opinion|tax return position\b/i],
  ['3.1.2.c', /\bformer (?:irs )?employee|disbarred|suspended (?:practitioner|person)\b/i],
  ['3.1.2.b', /\bomission or error\b/i],
  ['3.1.2.p', /\bsupervisory responsibilit|10\.36\b/i],
  ['3.1.2.k', /\btax shelter\b/i],
  ['3.1.2.m', /\bprompt disposition\b/i],
  // 3.1.3 sanctions
  ['3.1.3.b', /\boffice of professional responsibility\b|\bopr\b|\b(censure|disbar|suspension from practice)\b/i],
  ['3.1.3.a', /\b(disreputable conduct|incompeten)\w*/i],
  ['3.1.3.c', /\bfrivolous\b/i],
  ['3.1.3.d', /\bbadges of fraud\b/i],
  // 3.1.4 preparer penalties
  ['3.1.4.a', /\bpreparer penalt\w*.{0,40}(appeal|assess)|assessment and appeal/i],
  ['3.1.4.c', /\bfurnish\w* a copy\b/i],
  ['3.1.4.d', /\bsign\w* (?:the )?return\b.{0,60}(preparer|identifying number)/i],
  ['3.1.4.e', /\bkeep\w* (?:copies|a list)\b/i],
  ['3.1.4.f', /\b6060\b/i],
  ['3.1.4.b', /\b(6694|6695|negligence penalty|substantial understatement|overvaluation|understatement of (?:a )?taxpayer'?s liability)\b/i],
  // 3.2.1 power of attorney
  ['3.2.1.h', /\b8821\b|tax information authorization/i],
  ['3.2.1.j', /\bcentralized authorization file\b|\bcaf\b/i],
  ['3.2.1.f', /\bdurable power of attorney\b/i],
  ['3.2.1.i', /\b(withdraw|revoke|drop|change).{0,30}representative\b/i],
  ['3.2.1.g', /\bconsent to disclose|client privacy|7216\b/i],
  ['3.2.1.d', /\bsign\w* (?:a |the )?(?:tax )?return on behalf\b/i],
  ['3.2.1.b', /\bsignature authority|closing agreement\b/i],
  ['3.2.1.e', /\bcomplet\w* (?:of )?(?:the )?(?:form )?2848\b/i],
  ['3.2.1.k', /\bpublication 216|conference and practice\b/i],
  // 3.2.2–3.2.5
  ['3.2.2.e', /\btranscript\b|e-services/i],
  ['3.2.2.b', /\bcriminal (?:aspect|investigation|referral)\b/i],
  ['3.2.3.d', /\bdischarge\w*.{0,30}bankruptcy|bankruptcy.{0,30}discharge\b/i],
  ['3.2.3.e', /\bcollection financial standards\b|allowable living expense/i],
  ['3.2.3.b', /\b(insolven|garnishment)\w*/i],
  ['3.2.3.a', /\bability to pay|currently not collectible\b|\bcnc\b/i],
  ['3.2.5.e', /\bprivate letter ruling\b|\bplr\b/i],
  ['3.2.5.f', /\binternal revenue manual\b|\birm\b/i],
  ['3.2.5.h', /\btax treat(?:y|ies)\b/i],
  ['3.2.5.g', /\bauthoritative\b/i],
  ['3.2.5.b', /\brevenue (?:ruling|procedure)\b/i],
  ['3.2.5.c', /\bcase law|tax court (?:opinion|memorandum)\b/i],
  // 3.2.6 related issues
  ['3.2.6.e', /\bfreedom of information\b|\bfoia\b/i],
  ['3.2.6.d', /\bthird-?party (?:contact|correspondence|witness)\b/i],
  ['3.2.6.b', /\b(math error|under-?reporting notice|post-?filing correspondence)\b/i],
  ['3.2.6.c', /\btimel(?:y|iness)\b.{0,40}(?:mail|file)|mailbox rule|timely mailed/i],
  // 3.3.1 collection process
  ['3.3.1.p', /\bpassport\b|\b7345\b/i],
  ['3.3.1.n', /\btrust fund recovery\b|\b6672\b|responsible person penalty/i],
  ['3.3.1.o', /\b1040-?x\b|\b(form )?843\b|amended return|claim for refund/i],
  ['3.3.1.m', /\bcollection statute expiration\b|\bcsed\b|\b6502\b|statute of limitations? (?:on|for) collect|collections? statute/i],
  ['3.3.1.l', /\bsummons\b/i],
  ['3.3.1.k', /\bcurrently not collect\w*|\bcnc\b|status 53/i],
  ['3.3.1.j', /\b(levy|seizure|seiz\w+|wage garnishment|668-?[aw])\b/i],
  ['3.3.1.i', /\bnotice of federal tax lien\b|\bnftl\b|\b(lien|6320|6321|6323)\b|cp50[134]|lt11|letter 1058|cp14\b/i],
  ['3.3.1.h', /\bdecedent\b|\bdeceased\b|\b1310\b/i],
  ['3.3.1.g', /\baudit reconsideration\b/i],
  ['3.3.1.f', /\brefund offset\b|\boffset\w*.{0,25}refund/i],
  ['3.3.1.e', /\bcollection due process\b|\bcdp\b|\b12153\b|equivalent hearing|\b6330\b/i],
  ['3.3.1.d', /\bcollection appeals? program\b|\bcap\b|\b9423\b|denial of (?:an )?installment agreement|discharge application/i],
  ['3.3.1.c', /\boffer in compromise\b|\b(form )?656\b|\b7122\b|doubt as to (?:collectibility|liability)|effective tax administration/i],
  ['3.3.1.b', /\binstallment agreement\b|\b(form )?9465\b|\b6159\b|payment plan|direct debit/i],
  ['3.3.1.a', /\bextension of time to pay\b|\b(form )?1127\b|\b6161\b/i],
  // 3.3.2 penalty and interest abatement
  ['3.3.2.d', /\binterest recalculat\w*|recomput\w*.{0,20}interest/i],
  ['3.3.2.c', /\binterest\b.{0,30}abat|abat\w*.{0,30}interest|\b6404(?:\(e\))?\b/i],
  ['3.3.2.e', /\bprocedure\w*.{0,40}(?:request\w*)?.{0,20}abat|\b(form )?843\b.{0,40}abat/i],
  ['3.3.2.b', /\bfirst-?time abate\w*|\bfta\b|reasonable cause/i],
  ['3.3.2.a', /\b(penalt\w*).{0,30}abat|abat\w*.{0,30}penalt/i],
  // 3.3.3 audits and examinations
  ['3.3.3.f', /\brevenue agent'?s? report\b|\brar\b|\b30-?day letter\b/i],
  ['3.3.3.b', /\b7525\b|practitioner privilege|federally authorized tax practitioner/i],
  ['3.3.3.i', /\bburden of proof\b|\b7491\b/i],
  ['3.3.3.d', /\btime and place\b.{0,30}(?:examination|investigation|audit)/i],
  ['3.3.3.c', /\bsubstantiat\w*|verification of entries/i],
  ['3.3.3.e', /\binitial (?:meeting|interview|appointment)\b|information document request|\bidr\b/i],
  ['3.3.3.h', /\b(agree or appeal|taxpayer'?s? options)\b/i],
  ['3.3.3.a', /\bauthority to (?:investigate|examine)\b|\b7602\b/i],
  // 3.3.4 appeals
  ['3.3.4.e', /\b90-?day letter\b|notice of deficiency|\b6212\b/i],
  ['3.3.4.d', /\bsettlement (?:function|authority)\b|hazards of litigation/i],
  ['3.3.4.c', /\bappeals conference\b/i],
  ['3.3.4.b', /\b(written )?protest\b|request for appeals/i],
  ['3.3.4.a', /\bright to appeal\b|\bappeal\w*\b.{0,30}(?:right|entitled)/i],
  // 3.4 completion of the filing process
  ['3.4.3.i', /\brejected return\w*|\bip ?pin\b|reject code/i],
  ['3.4.3.h', /\b8879\b|\b8453\b|e-?file authorization/i],
  ['3.4.3.g', /\befin\b.{0,30}revo|revo\w*.{0,30}\befin\b/i],
  ['3.4.3.f', /\bcompliance requirement\w*.{0,40}program\b/i],
  ['3.4.3.e', /\blevel\w*.{0,20}infraction\w*|infraction/i],
  ['3.4.3.d', /\bero\b|electronic return originator/i],
  ['3.4.3.c', /\badvertising standard\w*/i],
  ['3.4.3.b', /\be-?file (?:mandate|requirement)|\b8948\b|specified tax return preparer|\b6011\(e\)/i],
  ['3.4.3.a', /\befin\b|e-?services|e-?file (?:provider|application)/i],
  ['3.4.2.b', /\bdata security\b|safeguard\w*|\bgramm-?leach\b|written information security/i],
  ['3.4.2.a', /\bretain\w*.{0,30}(?:record|return)|record ?keeping|retention (?:of|period)/i],
  ['3.4.1.b', /\bmiscalculat\w*|duplicate entr\w*/i],
  ['3.4.1.a', /\b(tax )?software\b/i],
  // Broad fallbacks: only reached when nothing more specific matched.
  ['3.2.6.a', /\bstatute of limitations?\b|\b(6501|6511|6513)\b|(?:assessment|refund) (?:statute|period) expir|\based\b/i],
  ['3.1.4.b', /\bpenalt\w*/i],
  ['3.2.1.a', /\b(form )?2848\b|power of attorney/i],
  ['3.1.1.a', /\bconstitutes practice before|practice before the (?:irs|internal revenue service)\b/i],
];

const partOf = code => Number(code.split('.')[0]);

// Exported for the tests, which exercise the rules with invented text. Never feed bank
// text into a test fixture.
export function classify(q) {
  const text = `${q.stem} ${Object.values(q.choices ?? {}).join(' ')} ${q.explanation ?? ''}`;
  for (const [code, re] of RULES) {
    if (partOf(code) !== q.part) continue;      // never tag across exam parts
    if (re.test(text)) return code;
  }
  return null;
}

// A rule pointing at a code that is not in the outline would write a tag no page can
// ever claim.
export const bogusRuleCodes = () => RULES.map(([c]) => c).filter(c => !validCodes.has(c));

// Everything below runs only when invoked as a command, so importing this module for
// tests neither reads the bank nor exits the process.
const isMain = process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href;
if (!isMain) { /* imported: expose the rules only */ } else {

if (!fs.existsSync(BANK)) {
  console.log(`tag: ${BANK} not found. It is gitignored on purpose — ask the owner for it.`);
  process.exit(1);
}
const bank = JSON.parse(fs.readFileSync(BANK, 'utf8'));

const bogus = bogusRuleCodes();
if (bogus.length) { console.log(`tag: rules target codes that are not in the outline: ${bogus.join(', ')}`); process.exit(1); }

if (valueOf('--code')) {
  const code = valueOf('--code');
  const hits = bank.questions.filter(q => q.topic_code === code);
  console.log(`${code} — ${titleOf.get(code) ?? 'unknown code'}: ${hits.length} question(s)`);
  console.log(hits.map(q => q.id).join(' ') || '(none tagged)');
  process.exit(0);
}

if (flag('--report')) {
  const counts = new Map();
  for (const q of bank.questions) if (q.topic_code) counts.set(q.topic_code, (counts.get(q.topic_code) ?? 0) + 1);
  const untagged = bank.questions.filter(q => !q.topic_code);
  for (const code of [...counts.keys()].sort()) console.log(`${code.padEnd(9)} ${String(counts.get(code)).padStart(3)}  ${titleOf.get(code) ?? ''}`);
  console.log(`\ntagged ${bank.questions.length - untagged.length}/${bank.questions.length}; untagged by part: ` +
    [1, 2, 3].map(p => `${p}=${untagged.filter(q => q.part === p).length}`).join(' '));
  process.exit(0);
}

let tagged = 0, changed = 0;
for (const q of bank.questions) {
  if (q.topic_code && !flag('--retag')) continue;
  const code = classify(q);
  if (!code) continue;
  if (q.topic_code !== code) changed++;
  q.topic_code = code;
  tagged++;
}
fs.writeFileSync(BANK, JSON.stringify(bank, null, 2) + '\n');
const total = bank.questions.filter(q => q.topic_code).length;
console.log(`tag: placed ${tagged} question(s) (${changed} changed); ${total}/${bank.questions.length} now carry a topic_code`);
console.log('tag: review the tags for any page you are authoring — the rules are a first pass, not a verdict.');

}
