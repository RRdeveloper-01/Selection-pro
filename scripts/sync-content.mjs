// Run after adding files:  node scripts/sync-content.mjs   (or: npm run sync)
// - public/data/*.json          -> chapter tests (adds to chapters.json and links them on the mock-test pages)
// - public/practice-tests/*.json -> full tests (adds to tests.json and links them to the exam page)
// - public/tests/jee/day-N.json  -> JEE revision days
import fs from 'node:fs';
import path from 'node:path';

const read = (p) => JSON.parse(fs.readFileSync(p, 'utf8'));
const write = (p, d) => fs.writeFileSync(p, JSON.stringify(d, null, 1));
const norm = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').replace(/-and-/g, '-').replace(/^the-/, '');
const list = (dir) => (fs.existsSync(dir) ? fs.readdirSync(dir).filter((f) => f.endsWith('.json')).map((f) => f.slice(0, -5)) : []);

// ---------------------------------------------------------------- chapter tests
const chaptersPath = 'src/content/chapters.json';
const mocksPath = 'src/content/mocks.json';
const chapters = read(chaptersPath);
const have = new Set(chapters.map((c) => c.slug));
let addedChapters = 0;
for (const slug of list('public/data')) {
  if (have.has(slug)) continue;
  const m = slug.match(/^(c|ch|h)-(.+)$/);
  const name = (m ? m[2] : slug).replace(/-/g, ' ');
  const data = read(`public/data/${slug}.json`);
  chapters.push({ slug, raw: slug, title: name.replace(/\b\w/g, (x) => x.toUpperCase()), prefix: m ? m[1] : '', count: data.length });
  have.add(slug);
  addedChapters++;
}
const byNorm = new Map();
for (const c of chapters) byNorm.set(c.slug, c.slug);
const find = (title, hindi) => {
  const english = (title.match(/\(([^)]*[A-Za-z][^)]*)\)/) || [])[1] || title;
  const n = norm(english);
  const get = (prefix) => chapters.find((c) => norm(c.slug) === (prefix ? `${prefix}-${n}` : n) || (prefix && c.slug.startsWith(prefix + '-') && norm(c.slug.slice(prefix.length + 1)) === n));
  if (hindi) {
    const h = get('h') || get('ch');
    if (h) return { slug: h.slug };
    const en = get('') || get('c');
    return en ? { slug: en.slug, note: 'English' } : null;
  }
  const en = get('') || get('c');
  return en ? { slug: en.slug } : null;
};
const mocks = read(mocksPath);
let linked = 0;
for (const mock of mocks) {
  for (const g of mock.groups) {
    for (const c of g.chapters) {
      if (c.slug && !c.note) continue; // already linked (a Hindi page may still be using the English test)
      const hit = find(c.title, mock.lang === 'hi');
      if (!hit) continue;
      if (c.slug === hit.slug) continue;
      c.slug = hit.slug;
      if (hit.note) c.note = hit.note; else delete c.note; // a real Hindi test replaces the English fallback
      linked++;
    }
  }
}
write(chaptersPath, chapters);
write(mocksPath, mocks);
console.log(`chapter tests: ${addedChapters} new files, ${linked} chapters linked on mock pages`);

// ---------------------------------------------------------------- full practice tests
const testsPath = 'src/content/tests.json';
const tests = read(testsPath);
const haveT = new Set(tests.map((t) => t.id));
let addedTests = 0;
const valid = (q) => q && typeof q.question === 'string' && q.question.trim() && Array.isArray(q.options) && q.options.length >= 2 && Number.isInteger(q.correctAnswer) && q.correctAnswer >= 0 && q.correctAnswer < q.options.length;
for (const id of list('public/practice-tests')) {
  if (haveT.has(id)) continue;
  const m = id.match(/^(.+)_pt_(\d+)$/);
  if (!m) { console.log('skipped (name must look like prefix_pt_01):', id); continue; }
  const d = read(`public/practice-tests/${id}.json`);
  const qs = (d.questions || []).filter(valid);
  if (qs.length !== (d.questions || []).length) console.log(`warning: ${id} has ${(d.questions || []).length - qs.length} incomplete question(s); they are skipped on the site`);
  const topics = {};
  for (const q of qs) { const k = q.topicTag || 'General'; topics[k] = (topics[k] || 0) + 1; }
  tests.push({ id, prefix: m[1], no: +m[2], title: d.chapter, subject: d.subject, count: qs.length, topics });
  addedTests++;
}
write(testsPath, tests);

const examsPath = 'src/content/exams.json';
const exams = read(examsPath);
const PREFIX = { 'ssc-cgl': 'ssc_cgl', 'ssc-chsl': 'ssc_chsl', 'rrb-ntpc': 'rrb', 'ibps-po': 'ibps_po', 'sbi-clerk': 'sbi_clerk', 'rbi-grade-b': 'rbi', neet: 'neet', 'jee-main': 'jee_main', cuet: 'cuet' };
let wired = 0;
for (const e of exams) {
  const p = PREFIX[e.slug];
  if (!e.prefix && p && tests.some((t) => t.prefix === p)) { e.prefix = p; wired++; }
}
write(examsPath, exams);
console.log(`practice tests: ${addedTests} new, ${wired} exam page(s) now show tests`);

// ---------------------------------------------------------------- JEE revision days
const daysPath = 'src/content/jee-days.json';
const days = read(daysPath);
const haveD = new Set(days.map((d) => d.file));
let addedDays = 0;
for (const f of fs.existsSync('public/tests/jee') ? fs.readdirSync('public/tests/jee').filter((x) => x.endsWith('.json')) : []) {
  if (haveD.has(f)) continue;
  const n = f.match(/(\d+)/);
  if (!n) continue;
  const d = read(path.join('public/tests/jee', f));
  days.push({ file: f, day: +n[1], subject: d.subject, chapter: d.chapter, count: (d.questions || []).length });
  addedDays++;
}
days.sort((a, b) => a.day - b.day);
write(daysPath, days);
console.log(`jee days: ${addedDays} new`);
