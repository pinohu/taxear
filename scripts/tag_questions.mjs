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
  // An accuracy-related penalty computation that merely mentions a notice of deficiency is a
  // penalty question, so it has to be tested before the 90-day letter rule below.
  ['3.1.4.b', /\baccuracy-?related penalty\b/i],
  // Preparer status questions often describe bookkeeping, which would otherwise fall to the
  // record-retention rule in 3.4.2.a.
  ['3.1.4.d', /\btax return preparer\b.{0,80}(?:defin|considered|is not|excep)|(?:considered|defined as|treated as)\s+(?:a )?tax return preparer/i],
  // 3.3.4 appeals
  ['3.3.4.e', /\b90-?day letter\b|notice of deficiency|\b6212\b/i],
  ['3.3.4.d', /\bsettlement (?:function|authority)\b|hazards of litigation/i],
  ['3.3.4.c', /\bappeals conference\b/i],
  ['3.3.4.b', /\b(written )?protest\b|request for appeals/i],
  ['3.3.4.a', /\bright to appeal\b|\bappeal\w*\b.{0,30}(?:right|entitled)/i],
  // 3.4 completion of the filing process
  ['3.4.3.i', /\brejected return\w*|\bip ?pin\b|reject code|perfection period|rejected e-?file|e-?file rejection|duplicate social security number/i],
  ['3.4.3.h', /\b8879\b|\b8453\b|e-?file authorization/i],
  ['3.4.3.g', /\befin\b.{0,30}revo|revo\w*.{0,30}\befin\b/i],
  ['3.4.3.f', /\bcompliance requirement\w*.{0,40}program\b/i],
  ['3.4.3.e', /\blevel\w*.{0,20}infraction\w*|infraction/i],
  ['3.4.3.d', /\bero\b|electronic return originator/i],
  ['3.4.3.c', /\badvertising standard\w*|\b(?:irs )?e-?file (?:logo|insignia)|treasury (?:seal|insignia)|irs (?:logo|insignia)/i],
  ['3.4.3.b', /\be-?file (?:mandate|requirement)|\b8948\b|specified tax return preparer|\b6011\(e\)/i],
  ['3.4.3.a', /\befin\b|e-?services|e-?file (?:provider|application)/i],
  ['3.4.2.b', /\bdata security\b|safeguard\w*|\bgramm-?leach\b|written information security/i],
  ['3.4.2.a', /\bretain\w*.{0,30}(?:record|return)|record ?keeping|retention (?:of|period)/i],
  ['3.4.1.b', /\bmiscalculat\w*|duplicate entr\w*/i],
  ['3.4.1.a', /\b(tax )?software\b/i],

  // ---------------------------------------------------------------------------
  // PART 1 — Individuals. Ordered specific to general within the part; classify()
  // never tests a rule against a question from another part, so this block is
  // independent of the Part 2 and Part 3 blocks.
  // ---------------------------------------------------------------------------
  // 1.6.3 international information reporting — most distinctive, tested first
  ['1.6.3.d', /\bfbar\b[\s\S]{0,80}\b8938\b|\b8938\b[\s\S]{0,80}\bfbar\b/i],
  ['1.6.3.f', /voluntary disclosure/i],
  ['1.6.3.e', /\bgilti\b|global intangible low-?taxed|\b965\b|transition tax/i],
  // "Which of these is a foreign financial account" is a 1.6.3.b question. It lists account types —
  // stock options among them — so it has to be recognised here or the bare "stock option" rule for
  // 1.2.3.h claims it first.
  ['1.6.3.b', /covered account|foreign financial account/i],
  ['1.6.3.c', /\b(?:fbar|8938|5471|8865|3520)\b[\s\S]{0,80}penalt|penalt[\s\S]{0,80}\b(?:fbar|8938|5471|8865|3520)\b/i],
  ['1.6.3.a', /\bfbar\b|fincen (?:form )?114|\b(?:5471|8865|8938|3520(?:-a)?)\b/i],
  // 1.6.2 gift tax
  ['1.6.2.a', /gift-?splitting|split(?:ting)? (?:of )?gifts?\b/i],
  ['1.6.2.d', /generation-?skipping/i],
  ['1.6.2.b', /annual (?:gift )?exclusion/i],
  ['1.6.2.e', /\b709\b/i],
  // 1.6.1 estate tax
  ['1.6.1.c', /marital deduction|portability (?:election)?/i],
  ['1.6.1.b', /jointly-? ?held propert/i],
  ['1.6.1.e', /\b706\b|\b1041\b/i],
  ['1.6.1.a', /gross estate|taxable estate|unified credit|applicable exclusion amount/i],
  ['1.6.2.c', /\bgift\b[\s\S]{0,60}unified credit/i],
  // 1.5.1 advising the individual taxpayer
  ['1.5.1.i', /innocent spouse|\b6015\b|relief from joint (?:and several )?liability|equitable relief|separation of liability/i],
  ['1.5.1.h', /injured spouse|\b8379\b/i],
  ['1.5.1.o', /penalt\w* of perjury/i],
  // The conditions for the IRC § 1(g)(7) parent's election are a four-part list, and one of the four is
  // that no estimated tax payments were made for the child. Any question testing the election therefore
  // contains the words "estimated tax" in a subordinate condition, which would otherwise hand it to
  // 1.5.1.j. The election is the subject, so it has to be recognised first.
  ['1.1.1.p', /\b8814\b|(?:interest|dividend)[\s\S]{0,60}child[\s\S]{0,60}parent|child(?:'|’)?s?[\s\S]{0,40}(?:interest|dividend)[\s\S]{0,60}parent(?:'|’)?s?/i],
  ['1.5.1.j', /estimated tax|\b2210\b|\b6654\b|safe harbor[\s\S]{0,30}estimat/i],
  ['1.5.1.n', /amend\w* (?:a |the |his |her |their )?(?:tax )?return|\b1040-?x\b|claim for refund|\b6511\b|statute of limitations[\s\S]{0,70}refund|refund[\s\S]{0,70}statute of limitations/i],
  ['1.5.1.c', /\b529\b|coverdell|qualified tuition program/i],
  ['1.5.1.f', /divorce|community property|common-?law marriage|prenuptial/i],
  ['1.5.1.g', /net operating loss|\bnol\b|\b8801\b|carryover/i],
  ['1.5.1.m', /joint and several liability|married filing separately[\s\S]{0,60}(?:advantage|disadvantage|versus|compare)/i],
  ['1.5.1.a', /\bbarter/i],
  ['1.5.1.d', /estate planning|family (?:limited )?partnership/i],
  // A bare "annuity" appears in the statutory employee categories ("life insurance or annuity
  // contracts") and in every list of what the net investment income tax reaches, so it cannot decide a
  // question on its own. Retirement planning has to be the subject, not a word in an answer choice.
  ['1.5.1.e', /retirement planning|annuit\w*[\s\S]{0,40}(?:distribution|payout|starting date|exclusion ratio)|(?:taxation|treatment) of\s+\w*\s*annuit/i],
  ['1.5.1.l', /capital gain rate\w*[\s\S]{0,40}ordinary income/i],
  ['1.5.1.k', /timing of income and expense/i],
  ['1.5.1.b', /sale of (?:a )?business|collectible/i],
  // 1.3.2 credits
  // "Which of the following are refundable credits except..." enumerates most of subpart C, so nearly
  // every 1.3.2 rule below would match one of its answer choices. The enumeration itself is the topic —
  // 1.3.2.h is "Other credits (refundable and nonrefundable)" — so it has to be recognised first.
  ['1.3.2.h', /all of the following (?:are|is)[\s\S]{0,30}(?:non-?)?refundable|which[\s\S]{0,40}(?:non-?)?refundable (?:tax )?credits?\b/i],
  // The education credits are named in full in questions about them and appear as bare distractors in
  // questions about other credits, so they are placed ahead of the earned income credit rule: an AOTC
  // question that lists the EITC among its wrong answers is an education credit question.
  ['1.3.2.c', /american opportunity|lifetime learning|education credit|\b8863\b|\b1098-?t\b/i],
  ['1.3.2.e', /earned income (?:tax )?credit|\beitc\b|\beic\b|\b8867\b/i],
  ['1.3.2.b', /child tax credit|credit for other dependents|\bactc\b|\b8812\b/i],
  ['1.3.2.a', /child and dependent care|\b2441\b|dependent care credit/i],
  ['1.3.2.d', /foreign tax credit|\b1116\b/i],
  ['1.3.2.f', /adoption credit|\b8839\b/i],
  ['1.3.2.g', /premium tax credit|\b8962\b|\baptc\b/i],
  ['1.3.2.h', /saver'?s credit|\b8880\b|energy credit|residential clean energy|health coverage tax credit|retirement savings contribution|(?:non-?)?refundable (?:tax )?credit/i],
  // 1.4.1 taxation
  ['1.4.1.a', /alternative minimum tax|\bamt\b|\b6251\b/i],
  ['1.4.1.b', /household employee|nanny tax|\bschedule h\b/i],
  ['1.4.1.i', /net investment income tax|\b1411\b|\b8960\b|\bniit\b/i],
  ['1.4.1.j', /additional medicare tax/i],
  ['1.4.1.k', /uncollected social security/i],
  ['1.4.1.e', /excess social security/i],
  ['1.4.1.f', /\bclergy\b|minister\w*[\s\S]{0,25}housing|parsonage/i],
  ['1.4.1.g', /combat zone|armed forces|\bmilitary\b/i],
  ['1.4.1.h', /income in respect of (?:a )?decedent|\bird\b/i],
  ['1.4.1.c', /underpayment penalt/i],
  ['1.4.1.l', /first-?time homebuyer credit repayment/i],
  // A question about whether an isolated sale by a collector is a business at all mentions
  // self-employment tax only as a wrong answer. The activity is the topic, not the tax that would
  // follow if it were a business, so the hobby phrasings are recognised first.
  ['1.2.1.h', /hobby|collector|collect\w* for (?:over |more than )?\w+ years/i],
  ['1.4.1.d', /self-?employment tax|\bschedule se\b|\b1401\b/i],
  // 1.2.4 adjustments to income
  ['1.2.4.c', /health savings account|\bhsa\b|\b8889\b/i],
  ['1.2.4.e', /self-?employed health insurance/i],
  ['1.2.4.d', /student loan interest|educator expense|moving expense/i],
  ['1.2.4.b', /(?:ira|retirement) contribution limit|deductib\w*[\s\S]{0,30}\bira\b/i],
  ['1.2.4.a', /(?:deduction for|one-?half of)[\s\S]{0,30}self-?employment tax/i],
  // 1.3.1 itemized deductions and QBI
  ['1.3.1.h', /qualified business income|\bqbi\b|\b199a\b|\b8995\b/i],
  ['1.3.1.d', /charitable contribution|noncash contribution|\b8283\b|contemporaneous written acknowledg/i],
  ['1.3.1.a', /medical (?:and dental )?expense|long-?term care/i],
  ['1.3.1.c', /mortgage interest|investment interest|acquisition indebtedness|tracing rule|(?:mortgage|loan) points|points paid/i],
  ['1.3.1.e', /casualty (?:and theft )?loss|\b4684\b|federally declared disaster/i],
  ['1.3.1.b', /\bsalt\b|state and local tax|real estate tax|personal property tax/i],
  ['1.3.1.g', /\b1040-?nr\b[\s\S]{0,60}itemi|itemi[\s\S]{0,60}\b1040-?nr\b|nonresident alien[\s\S]{0,80}(?:standard|itemized) deduction|(?:standard|itemized) deduction[\s\S]{0,80}nonresident alien/i],
  // Whether one spouse's itemizing forces the other to a zero standard deduction is IRC 63(c)(6)(A) —
  // a 1.1.1.h question about which deduction is available, not a question about a particular itemized
  // deduction, so it has to be caught before the generic 1.3.1.f rule.
  ['1.1.1.h', /married filing separate[\s\S]{0,120}itemiz|itemiz[\s\S]{0,120}(?:spouse|married filing separate)[\s\S]{0,120}standard deduction/i],
  ['1.3.1.f', /itemized deduction/i],
  // The standard deduction is 1.1.1.h ("Sources of applicable deductions (e.g., itemized, standard)"),
  // not "other itemized deductions" — a rule matching "standard deduction" on 1.3.1.f was collecting
  // every dependent-standard-deduction and additional-standard-deduction question.
  ['1.1.1.h', /standard deduction/i],
  // 1.2.2 retirement income
  ['1.2.2.h', /required minimum distribution|\brmd\b|excess accumulation/i],
  ['1.2.2.e', /(?:early|premature) (?:distribution|withdrawal)|\b5329\b|10 ?(?:%|percent)[\s\S]{0,30}(?:additional tax|penalty)/i],
  ['1.2.2.g', /roth conversion|recharacteriz/i],
  ['1.2.2.a', /\b8606\b|nondeductible[\s\S]{0,25}(?:ira )?contribution|basis in (?:a |the )?traditional ira/i],
  ['1.2.2.d', /excess contribution/i],
  ['1.2.2.f', /prohibited transaction/i],
  ['1.2.2.i', /loan from (?:a |the )?(?:qualified )?plan|plan loan/i],
  ['1.2.2.j', /social security benefit|railroad retirement|\bssa-?1099\b/i],
  ['1.2.2.k', /net unrealized appreciation|\bnua\b/i],
  ['1.2.2.l', /inherited (?:ira|retirement)|beneficiar\w*[\s\S]{0,30}(?:ira|distribution)/i],
  ['1.2.2.m', /foreign pension/i],
  ['1.2.2.b', /roth ira/i],
  ['1.2.2.c', /\b1099-?r\b|rollover|qualified plan distribution/i],
  // 1.2.3 property, real and personal
  ['1.2.3.f', /sale of (?:a |the )?(?:personal |principal )?residence|\b121\b[\s\S]{0,40}exclusion|exclusion of gain[\s\S]{0,30}home|(?:primary|principal|main) (?:residence|home)[\s\S]{0,60}(?:exclusion|exempt)|two of the last five/i],
  ['1.2.3.i', /like-?kind exchange|\b1031\b/i],
  ['1.2.3.g', /installment sale|\b6252\b/i],
  ['1.2.3.h', /\biso\b|incentive stock option|\bespp\b|employee stock purchase|stock option/i],
  ['1.2.3.e', /publicly traded partnership|\bptp\b/i],
  ['1.2.3.j', /non-?business bad debt/i],
  ['1.2.3.k', /trader (?:in securities|status)|mark-?to-?market election|\b475\b|investor versus trader/i],
  ['1.2.3.d', /stock split|stock dividend[\s\S]{0,40}basis/i],
  // A bare "1245" or "1250" is not a signal: dollar amounts in answer choices are written without a
  // separator often enough that "$1250" was pulling 401(k) deferral questions into property disposition.
  // Require the number to be carrying a section marker or the words "property" or "recapture".
  // A question about where royalty receipts are reported is 1.2.1.m even when "Schedule D" appears among
  // the wrong answers. Only the receipt phrasings jump the queue: a question about *selling* the
  // underlying property mentions "royalty income" only as a distractor and belongs on 1.2.3.b.
  ['1.2.1.m', /royalties from|receives? royalties/i],
  ['1.2.3.a', /depreciation recapture|(?:§+|sections?)\s*12(?:45|50)\b|\b12(?:45|50)\s+(?:property|recapture|gain)\b|\b1099-?a\b/i],
  ['1.2.3.c', /basis of (?:the |an |a )?(?:asset|propert)|stepped-?up basis|inherited (?:property|basis)|gifted (?:property|basis)|carryover basis/i],
  ['1.2.3.b', /capital (?:gain|loss)|\bschedule d\b|\b8949\b|virtual currency|cryptocurrenc|short-?term[\s\S]{0,30}long-?term/i],
  // 1.2.1 income
  ['1.2.1.f', /forgiveness of (?:a )?debt|cancellation of (?:indebtedness|debt)|\b1099-?c\b|insolven|foreclosur/i],
  ['1.2.1.e', /gambling|\bw-?2 ?g\b|wagering/i],
  // "qualified foreign corporation" is a § 1(h)(11)(C) dividend term, and its definition turns on a
  // treaty — so it has to be placed before the 1.2.1.g treaty rule or every question about it lands
  // in foreign income instead of dividends.
  ['1.2.1.c', /qualified foreign corporation/i],
  ['1.2.1.g', /foreign earned income|\b2555\b|\bfeie\b|tax treat(?:y|ies)/i],
  ['1.2.1.k', /passive (?:activity|income|loss)|\b469\b|at-?risk/i],
  ['1.2.1.l', /\bk-?1\b|pass-?through income/i],
  ['1.2.1.m', /royalt/i],
  ['1.2.1.n', /state (?:income )?tax refund|tax benefit rule/i],
  ['1.2.1.o', /\b1099-?(?:misc|nec|k)\b/i],
  ['1.2.1.i', /constructive receipt/i],
  ['1.2.1.j', /constructive dividend/i],
  ['1.2.1.d', /(?:rental of|renting) personal property|personal property rental/i],
  ['1.2.1.b', /\b1099-?int\b|tax-?exempt interest|municipal (?:bond|interest)|savings bond|series ee|series i\b|original issue discount|\boid\b/i],
  ['1.2.1.c', /qualified dividend|capital gain distribution|mutual fund|\b1099-?div\b|\bdividend/i],
  ['1.2.1.h', /scholarship|hobby income|alimony|combat pay|jury duty|unemployment compensation|prize\w*|award/i],
  ['1.2.1.a', /\bw-?2\b|statutory employee|\btips?\b|wages, salaries/i],
  // 1.1.1 preliminary work — broad by nature, so it sits at the end of the part
  ['1.1.1.p', /kiddie tax|\b8615\b|unearned income of (?:a )?(?:minor|child)/i],
  ['1.1.1.q', /affordable care act|\b1095\b|shared responsibility payment/i],
  ['1.1.1.i', /qualifying child|qualifying relative|dependenc\w*|\b152\b/i],
  ['1.1.1.e', /filing status|head of household|\bhoh\b|qualifying (?:surviving spouse|widow)/i],
  ['1.1.1.c', /resident alien|non-?resident alien|substantial presence|green card|\b1040-?nr\b/i],
  ['1.1.1.b', /identity protection pin|\bip ?pin\b|date of birth/i],
  ['1.1.1.d', /filing requirement|due date|gross income threshold/i],
  ['1.1.1.a', /prior year'?s? return/i],
  ['1.1.1.n', /presidentially declared disaster/i],
  ['1.1.1.l', /(?:previous|prior) (?:irs )?correspondence/i],
  ['1.1.1.m', /gift tax return|employment tax return/i],

  // ---------------------------------------------------------------------------
  // PART 2 — Businesses. Same discipline as the Part 1 block above.
  // ---------------------------------------------------------------------------
  ['2.1.1.b', /qualified joint venture|\bqjv\b/i],
  // 2.3.5 rental property
  ['2.3.5.a', /real estate professional/i],
  ['2.3.5.d', /25,000[\s\S]{0,30}allowance|passive loss limitation/i],
  ['2.3.5.c', /vacation home|mixed-? ?use (?:property|rental)|\b280a\b|personal use[\s\S]{0,40}rental/i],
  ['2.3.5.b', /commercial rental|residential rental/i],
  ['2.3.5.e', /security deposit|pre-?paid rent|not rented for profit/i],
  ['2.3.5.f', /rental expense|allocat\w*[\s\S]{0,40}(?:personal|rental) use/i],
  // 2.3.4 farmers
  ['2.3.4.e', /\bschedule j\b|income averaging/i],
  ['2.3.4.c', /drought|crop insurance/i],
  ['2.3.4.d', /\b4835\b|farm rental/i],
  ['2.3.4.b', /depreciation[\s\S]{0,30}farm/i],
  ['2.3.4.a', /\bschedule f\b|patronage dividend|farm income|livestock|\bfarmer/i],
  // 2.3.3 retirement plans
  ['2.3.3.c', /\bsep\b[- ]?ira|\bsimple\b[- ]?ira|solo 401|\bsep\b plan/i],
  ['2.3.3.f', /non-?discrimination|top-?heavy/i],
  ['2.3.3.d', /prohibited transaction/i],
  ['2.3.3.e', /non-?qualified (?:deferred compensation|plan)|\b409a\b/i],
  ['2.3.3.b', /\b5500\b/i],
  ['2.3.3.a', /elective deferral|employer (?:matching )?contribution/i],
  // 2.3.2 exempt organizations
  ['2.3.2.d', /unrelated business (?:taxable )?income|\bubti\b|\b990-?t\b/i],
  ['2.3.2.b', /\b1023\b|\b1024\b/i],
  ['2.3.2.c', /\b990\b/i],
  ['2.3.2.a', /501\(c\)|tax-?exempt status/i],
  // 2.3.1 trust and estate income tax
  ['2.3.1.b', /distributable net income|\bdni\b|accounting income/i],
  ['2.3.1.d', /(?:abusive|sham|fraudulent) trust/i],
  ['2.3.1.c', /(?:annual )?exemption[\s\S]{0,40}(?:trust|estate)|(?:trust|estate)[\s\S]{0,40}(?:annual )?exemption/i],
  ['2.3.1.a', /grantor trust|simple trust|complex trust|irrevocable trust/i],
  ['2.3.1.f', /separately stated item[\s\S]{0,70}(?:trust|estate|fiduciar)|(?:trust|estate|fiduciar\w*)[\s\S]{0,70}separately stated item/i],
  ['2.3.1.e', /\bcorpus\b/i],
  ['2.3.1.g', /\b1041\b|\b645\b/i],
  // 2.2.5 advising the business taxpayer
  ['2.2.5.k', /worker classification|independent contractor|\bss-?8\b|common-?law employee/i],
  ['2.2.5.f', /co-?mingl/i],
  ['2.2.5.c', /accountable plan|mileage log/i],
  ['2.2.5.e', /(?:selection|choice) of (?:a )?(?:business )?entity/i],
  ['2.2.5.b', /\b941\b|\b940\b|federal tax deposit|\beftps\b|deposit (?:schedule|requirement)/i],
  ['2.2.5.m', /applicable large employer|employer shared responsibility|\b1094\b|\b1095-?c\b/i],
  ['2.2.5.j', /specified service (?:trade or )?business|\bsstb\b/i],
  ['2.2.5.i', /dissolution|winding up/i],
  ['2.2.5.a', /extended return|international information return/i],
  // 2.2.4 analysis of financial records
  ['2.2.4.g', /\bschedule m-?[123]\b|book-?tax|reconcil\w*[\s\S]{0,30}book/i],
  ['2.2.4.d', /\b3115\b|change in accounting method|accrual method|cash method|hybrid method/i],
  ['2.2.4.e', /\b280f\b|listed property/i],
  ['2.2.4.h', /related part(?:y|ies)|\b267\b/i],
  ['2.2.4.i', /loan\w* (?:to|from)[\s\S]{0,25}(?:owner|shareholder|member)/i],
  ['2.2.4.c', /balance sheet|\bschedule l\b/i],
  ['2.2.4.b', /income statement/i],
  ['2.2.4.a', /\bnaics\b|classification code/i],
  ['2.2.4.f', /pass-?through activity/i],
  // Subchapter S beats the general business rules that follow it. A question about a
  // shareholder's stock basis, an S election terminating, or a fringe benefit paid to a
  // shareholder-employee is a subchapter S question first and a basis, termination or
  // compensation question second; without this block the generic rules below claim it.
  ['2.1.5.e', /\bshareholder'?s? basis\b|\bstock basis\b|\bloan basis\b|basis (?:in|of) (?:the |his |her |their )?s corporation|distribution\w*[\s\S]{0,60}(?:in excess of|exceed\w*)[\s\S]{0,30}basis/i],
  ['2.1.5.f', /(?:revocation|revok\w*|terminat\w*)[\s\S]{0,30}\bs election\b|\bs election\b[\s\S]{0,30}(?:revok|terminat)/i],
  // A fringe-benefit question that mentions a C corporation at all is a comparison drawn
  // from the C corporation's side and belongs with business compensation; only a question
  // set wholly inside subchapter S is testing the section 1372 partner treatment.
  ['2.1.5.c', /\b1377\b|\b2-?\s?(?:%|percent) shareholder\b|^(?![\s\S]*\bc corporation\b)[\s\S]*?(?:(?:fringe benefit|health insurance premium)[\s\S]{0,80}\bs corporation\b|\bs corporation\b[\s\S]{0,80}(?:fringe benefit|health insurance premium))/i],
  // 2.2.3 business assets
  ['2.2.3.c', /like-? ?kind exchange|\b1031\b/i],
  ['2.2.3.e', /de minimis safe harbor|repair regulation|tangible property regulation/i],
  ['2.2.3.d', /converted (?:to|from) (?:business|personal) use/i],
  ['2.2.3.b', /\b4797\b|disposition of (?:business )?(?:propert|asset)/i],
  ['2.2.3.a', /basis of (?:the |an |a )?(?:asset|propert|inherited|gifted)|stepped-?up basis/i],
  // 2.2.2 business expenses, deductions and credits
  ['2.2.2.l', /qualified business income|\bqbi\b|\b199a\b|\bubia\b/i],
  ['2.2.2.o', /home office|business use of (?:the |a )?home|\b8829\b/i],
  ['2.2.2.c', /\b179\b|bonus depreciation|\bmacrs\b|amortization|start-?up cost|organizational cost|depletion|\b4562\b/i],
  ['2.2.2.n', /net operating loss|\bnol\b/i],
  ['2.2.2.m', /general business credit|\b3800\b|disabled access credit|research (?:and development )?credit|work opportunity/i],
  ['2.2.2.e', /business (?:travel|meal)|per diem|entertainment expense|\b274\b/i],
  ['2.2.2.f', /standard mileage rate|actual expense method|vehicle expense/i],
  ['2.2.2.a', /fringe benefit|officer\w*[\s\S]{0,20}compensation|reasonable compensation|health insurance premium/i],
  ['2.2.2.j', /\bfica\b|\bfuta\b|employment tax|payroll tax/i],
  ['2.2.2.d', /business bad debt/i],
  ['2.2.2.k', /condemnation|involuntary conversion|\b1033\b/i],
  ['2.2.2.g', /business interest (?:expense|limitation)|163\(j\)/i],
  ['2.2.2.b', /self-?rental|business rent/i],
  ['2.2.2.i', /excise tax/i],
  ['2.2.2.h', /insurance expense/i],
  // 2.2.1 business income
  ['2.2.1.b', /cost of goods sold|\bcogs\b|invento|uniform capitaliz|\b263a\b/i],
  ['2.2.1.d', /cancellation of (?:business )?debt/i],
  ['2.2.1.c', /at-?risk limitation|excess business loss|461\(l\)/i],
  // "Gross receipts" is a measuring stick used all over the Code — an e-file threshold, an
  // exempt organization's late-filing penalty — and the bare phrase pulled all of those onto the
  // business income topic. Claim the ones that have a home elsewhere first.
  ['2.1.3.a', /electronic filing[\s\S]{0,60}\bc corporations?\b|\bc corporations?\b[\s\S]{0,60}(?:required to )?(?:file )?electronic/i],
  ['2.3.2.c', /exempt organization[\s\S]{0,90}(?:fails? to file|file the required|filing requirement|late)/i],
  ['2.2.1.a', /gross receipts/i],
  // 2.1.5 S corporations
  ['2.1.5.b', /\b2553\b|\bs (?:corporation )?election\b/i],
  ['2.1.5.f', /revocation|inadvertent termination|terminat\w*[\s\S]{0,40}s corporation/i],
  ['2.1.5.d', /\baaa\b|accumulated adjustments account/i],
  ['2.1.5.e', /(?:shareholder'?s?|stock|loan) basis/i],
  ['2.1.5.a', /(?:qualifying|eligible) shareholder|(?:one|single) class of stock/i],
  ['2.1.5.h', /non-?cash distribution/i],
  ['2.1.5.g', /debt discharge/i],
  // "Separately stated items" is the same concept in subchapter K and subchapter S, so the phrase alone
  // cannot tell them apart. A question about a partnership's Schedule K-1 was landing here. Require the
  // S corporation context, and let the partnership rules below take the rest.
  ['2.1.5.c', /separately stated item[\s\S]{0,80}\b(?:s corporation|1120-?s|shareholder)\b|\b(?:s corporation|1120-?s)\b[\s\S]{0,80}separately stated item/i],
  // 2.1.4 forming a corporation
  ['2.1.4.b', /\b351\b/i],
  ['2.1.4.e', /controlled group|brother-?sister/i],
  ['2.1.4.f', /closely held corporation|personal holding company/i],
  ['2.1.4.a', /services[\s\S]{0,40}(?:in return|in exchange) for stock/i],
  ['2.1.4.c', /\bboot\b/i],
  ['2.1.4.d', /subject to (?:a )?(?:liabilit|indebtedness|mortgage)/i],
  // 2.1.3 corporations in general
  ['2.1.3.b', /earnings and profits|\be ?& ?p\b/i],
  ['2.1.3.d', /dividends received deduction|\bdrd\b/i],
  ['2.1.3.e', /liquidation|stock redemption|\b302\b|\b331\b/i],
  ['2.1.3.f', /accumulated earnings tax/i],
  ['2.1.3.h', /minimum tax credit/i],
  ['2.1.3.g', /\b1120-?w\b|corporate estimated tax/i],
  ['2.1.3.c', /shareholder (?:dividend|distribution)/i],
  ['2.1.3.a', /\b1120\b/i],
  // 2.1.2 partnerships
  ['2.1.2.k', /\bbba\b|centralized partnership audit|partnership representative|opt-? ?out/i],
  ['2.1.2.c', /guaranteed payment/i],
  ['2.1.2.f', /(?:sale|disposition) of (?:a )?partnership interest|\b751\b/i],
  ['2.1.2.e', /(?:partner'?s?|outside) basis/i],
  ['2.1.2.h', /(?:dissolution|termination) of (?:a |the )?partnership|death of (?:a )?partner/i],
  ['2.1.2.d', /\b721\b|contribut\w*[\s\S]{0,40}(?:to (?:a |the )?partnership)/i],
  ['2.1.2.b', /family partnership/i],
  ['2.1.2.g', /partnership agreement|general (?:versus|vs\.?|and) limited partner/i],
  ['2.1.2.j', /partnership[\s\S]{0,30}cancellation of debt/i],
  ['2.1.2.i', /\b1065\b/i],
  ['2.1.2.a', /partnership (?:income|distribution|expense)|separately stated item[\s\S]{0,80}partner|partnership[\s\S]{0,60}schedule k-?1/i],
  // 2.1.1 business entities and considerations
  ['2.1.1.g', /\b8832\b|check-? ?the-? ?box|(?:default|entity) classification/i],
  ['2.1.1.h', /employer identification number|\bein\b|\bss-?4\b/i],
  ['2.1.1.l', /hobby (?:loss|versus|vs)|\b183\b|profit motive/i],
  // "tax year" on its own appears in the stem, the options or the rationale of a large share of the
  // Part 2 bank — a compensation deduction question says the amount must be paid "within the tax year",
  // a Form 8300 question offers "by the end of the tax year" as a distractor — none of which is about
  // accounting periods. The rule has to require the period itself to be the subject: a required or
  // permitted year, a natural business year, a section 444 election and its deferral period, a short
  // period, a 52-53 week year, or the act of adopting, changing or retaining one.
  ['2.1.1.i', /\b1128\b|section 444|required (?:tax|taxable) year|permitted year|natural (?:business|tax) year|short (?:period|tax year)|52-?\s?53|deferral period|annual accounting period|(?:adopt|chang|retain|elect)\w*[\s\S]{0,40}(?:tax year|taxable year|accounting period)/i],
  ['2.1.1.j', /accounting method/i],
  // Form 8300 is a reporting requirement of the business, so it belongs with the W-2, W-4 and 1099
  // rules rather than with the cash-transaction subject matter it happens to describe.
  ['2.1.1.k', /\bw-?4\b|\bw-?2\b|\b1099\b|\b8300\b|report of cash payments|information return/i],
  ['2.1.1.e', /limited liability company|\bllc\b/i],
  ['2.1.1.f', /tax-?exempt (?:entit|association)/i],
  ['2.1.1.a', /sole proprietor|\bschedule c\b/i],
  ['2.1.1.d', /\bs corporation\b/i],
  ['2.1.1.c', /\bc corporation\b|\bcorporation\b/i],
  // Broad fallbacks: only reached when nothing more specific matched.
  ['3.2.6.a', /\bstatute of limitations?\b|\b(6501|6511|6513)\b|(?:assessment|refund) (?:statute|period) expir|\based\b/i],
  ['3.1.4.b', /\bpenalt\w*/i],
  ['3.2.1.a', /\b(form )?2848\b|power of attorney/i],
  ['3.1.1.a', /\bconstitutes practice before|practice before the (?:irs|internal revenue service)\b/i],
];

const partOf = code => Number(code.split('.')[0]);

// Some subjects the bank tests have no topic anywhere in the IRS outline this site is built on.
// A question about one of them mentions enough incidental vocabulary to satisfy several rules,
// so without an explicit stop it lands on whichever page it brushed past. Leaving it untagged is
// the honest answer, and it keeps a §4 check for a page from being handed a question that page
// was never meant to answer. Each entry needs a reason.
const NO_HOME = [
  // The Base Erosion and Anti-Abuse Tax (IRC § 59A) appears nowhere in the outline's 360 topics.
  // A BEAT question names C and S corporations, gross receipts and credits in passing.
  [/base erosion/i, 'BEAT (IRC § 59A) — no topic in the outline'],
];

// Exported for the tests, which exercise the rules with invented text. Never feed bank
// text into a test fixture.
export function classify(q) {
  const text = `${q.stem} ${Object.values(q.choices ?? {}).join(' ')} ${q.explanation ?? ''}`;
  for (const [re] of NO_HOME) if (re.test(text)) return null;
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

let tagged = 0, changed = 0, cleared = 0;
for (const q of bank.questions) {
  if (q.topic_code && !flag('--retag')) continue;
  const code = classify(q);
  // On a --retag pass a question the rules no longer place must lose its tag. Leaving
  // the old one in place is how stale tags from a superseded rule set survive unnoticed,
  // and a page then reconciles itself against a question that was never its own.
  if (!code) {
    if (flag('--retag') && q.topic_code) { delete q.topic_code; cleared++; }
    continue;
  }
  if (q.topic_code !== code) changed++;
  q.topic_code = code;
  tagged++;
}
fs.writeFileSync(BANK, JSON.stringify(bank, null, 2) + '\n');
const total = bank.questions.filter(q => q.topic_code).length;
console.log(`tag: placed ${tagged} question(s) (${changed} changed, ${cleared} stale tag(s) cleared); ${total}/${bank.questions.length} now carry a topic_code`);
console.log('tag: review the tags for any page you are authoring — the rules are a first pass, not a verdict.');

}
