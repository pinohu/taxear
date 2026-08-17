"""
Extract (1) the IRS SEE Content Outline topic tree and (2) the private
practice-question test bank from the Bova Books PDF.

Usage:  python scripts/extract_source.py /path/to/Enrolled_Agent_All_Parts.pdf

Outputs:
  src/data/topics.json          -- public: IRS content outline (site skeleton)
  private/questions.json        -- PRIVATE, gitignored: 600 Qs + solutions,
                                   tagged by topic, used only as QA test cases.
"""
import json, re, sys, os
from pypdf import PdfReader

pdf = sys.argv[1]
r = PdfReader(pdf)
P = lambda i: r.pages[i - 1].extract_text()  # 1-based page numbers

# ---------------------------------------------------------------- outline
def clean(s):
    return re.sub(r"\s+", " ", s).strip()

def slug(s, maxlen=60):
    s = s.lower()
    s = re.sub(r"\(e\.g\.,?.*?\)", "", s)          # drop e.g. parentheticals
    s = re.sub(r"[^a-z0-9]+", "-", s).strip("-")
    parts = s.split("-")
    out = []
    for p in parts:
        if len("-".join(out + [p])) > maxlen: break
        out.append(p)
    STOP={"of","and","or","the","a","an","to","for","in","on","with","by","from","as","at","e","g"}
    while out and out[-1] in STOP: out.pop()
    return "-".join(out) or "topic"

parts_meta = {
    1: {"name": "Individuals", "slug": "individuals",
        "pages": range(5, 10)},
    2: {"name": "Businesses", "slug": "businesses",
        "pages": range(10, 14)},
    3: {"name": "Representation, Practices and Procedures",
        "slug": "representation", "pages": range(14, 18)},
}

topics = {"source": "IRS Special Enrollment Examination Content Outline "
                    "(2025-2026 testing window), public domain",
          "parts": []}

for pnum, meta in parts_meta.items():
    text = "\n".join(P(i) for i in meta["pages"])
    lines = [l.rstrip() for l in text.split("\n")]
    # join wrapped lines: a line that doesn't start a new item continues prev
    item_re = re.compile(r"^\s*(\d+\.\s|\d+\.\d+\s|[a-z]\)\s)")
    merged = []
    for l in lines:
        if not l.strip() or re.fullmatch(r"\s*\d+\s*", l): continue
        if re.match(r"\s*Content Outline Part", l): continue
        if item_re.match(l) or not merged:
            merged.append(l.strip())
        else:
            merged[-1] += " " + l.strip()
    part = {"part": pnum, "name": meta["name"], "slug": meta["slug"],
            "domains": []}
    dom = sec = None
    for l in merged:
        m = re.match(r"^(\d+)\.(\d+)\s+(.*)", l)
        if m:
            sec = {"code": f"{pnum}.{m.group(1)}.{m.group(2)}",
                   "title": clean(m.group(3)).rstrip(" –-"), "slug": slug(m.group(3)),
                   "topics": []}
            dom["sections"].append(sec); continue
        m = re.match(r"^(\d+)\.\s+(.*)", l)
        if m:
            dom = {"code": f"{pnum}.{m.group(1)}", "title": clean(m.group(2)),
                   "slug": slug(m.group(2)), "sections": []}
            part["domains"].append(dom); continue
        m = re.match(r"^([a-z])\)\s+(.*)", l)
        if m and sec is not None:
            title = clean(m.group(2))
            # strip stray trailing section header glued by PDF wrap
            title = re.sub(r"\s+\d+\.\d+\s+Credits$", "", title)
            sec["topics"].append({
                "code": f"{sec['code']}.{m.group(1)}",
                "title": title, "slug": slug(title),
                "path": f"/{meta['slug']}/{dom['slug']}/{sec['slug']}/{slug(title)}/"
            })
    topics["parts"].append(part)

os.makedirs("src/data", exist_ok=True)
json.dump(topics, open("src/data/topics.json", "w"), indent=2)

n_dom = sum(len(p["domains"]) for p in topics["parts"])
n_sec = sum(len(s["sections"]) for p in topics["parts"] for s in p["domains"])
n_top = sum(len(sec["topics"]) for p in topics["parts"]
            for d in p["domains"] for sec in d["sections"])
print(f"outline: {n_dom} domains, {n_sec} sections, {n_top} topics")

# --------------------------------------------------------------- questions
exam_ranges = {  # (part, exam): (question_pages, solution_pages)
    (1, 1): ((18, 47), (184, 207)), (1, 2): ((48, 75), (208, 234)),
    (2, 1): ((76, 103), (235, 258)), (2, 2): ((104, 131), (259, 282)),
    (3, 1): ((132, 157), (283, 307)), (3, 2): ((158, 183), (308, 332)),
}
def strip_pagenums(t):
    return re.sub(r"^\s*\d+\s*$", "", t, flags=re.M)

def split_blocks(text, label):
    text = strip_pagenums(text)
    blocks = re.split(rf"\n\s*{label} (\d+)\s*\n", "\n" + text)
    out = {}
    for i in range(1, len(blocks) - 1, 2):
        out[int(blocks[i])] = clean(blocks[i + 1])
    return out

def parse_q(txt):
    m = re.match(r"(.*?)\s*\(A\)\s*(.*?)\s*\(B\)\s*(.*?)\s*\(C\)\s*(.*?)\s*\(D\)\s*(.*)$", txt, re.S)
    if not m: return {"stem": txt, "choices": {}}
    return {"stem": clean(m.group(1)),
            "choices": {k: clean(v) for k, v in zip("ABCD", m.groups()[1:])}}

def parse_s(txt):
    m = re.search(r"The answer(?: is)? \(?([A-D])\)?", txt)
    ans = m.group(1) if m else None
    expl = clean(re.sub(r"The answer(?: is)? \(?[A-D]\)?.*$", "", txt))
    return {"answer": ans, "explanation": expl}

bank = []
for (part, exam), (qp, sp) in exam_ranges.items():
    qtext = "\n".join(P(i) for i in range(qp[0], qp[1] + 1))
    stext = "\n".join(P(i) for i in range(sp[0], sp[1] + 1))
    qs = split_blocks(qtext, "Question")
    ss = split_blocks(stext, "Solution")
    for n in sorted(qs):
        item = {"id": f"P{part}E{exam}Q{n:03d}", "part": part, "exam": exam,
                "n": n, **parse_q(qs[n]), **parse_s(ss.get(n, "")),
                "topic_code": None}
        bank.append(item)

os.makedirs("private", exist_ok=True)
json.dump({"source": "Bova Books LLC, Enrolled Agent Practice Exams "
                     "(c) 2022 -- PRIVATE QA test bank, never publish",
           "questions": bank}, open("private/questions.json", "w"), indent=2)
missing = [q["id"] for q in bank if not q["answer"] or len(q["choices"]) < 4]
print(f"questions: {len(bank)} parsed, {len(missing)} incomplete: {missing[:10]}")
