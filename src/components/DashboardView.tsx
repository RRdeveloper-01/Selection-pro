'use client';
import Link from 'next/link';
import type { Mistake, Stats } from '@/lib/types';
import { MISTAKES_KEY, STATS_KEY, dayKey, emptyStats, isDue, liveStreak, useLocal } from '@/lib/storage';
import { EXAM_EXTRA } from '@/data/exams-extra';

type Opt = { slug: string; name: string; tests: number; guide?: string };

export default function DashboardView({ options }: { options: Opt[] }) {
  const [stats, , ready] = useLocal<Stats>(STATS_KEY, emptyStats());
  const [mistakes] = useLocal<Mistake[]>(MISTAKES_KEY, []);
  const [slug, setSlug] = useLocal<string>('sp:exam', options[0].slug);
  const exam = options.find((o) => o.slug === slug) ?? options[0];
  const [done] = useLocal<string[]>(`sp:syllabus:${exam.slug}`, []);
  const [date] = useLocal<string>(`sp:examdate:${exam.slug}`, '');
  const x = EXAM_EXTRA[exam.slug];
  const total = x.syllabus.reduce((n, s) => n + s.topics.length, 0);
  const pct = Math.round((done.length / total) * 100);
  const days = date ? Math.ceil((new Date(date + 'T00:00:00').getTime() - Date.now()) / 86_400_000) : null;
  const acc = stats.answered ? Math.round((stats.correct / stats.answered) * 100) : 0;
  const week = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(Date.now() - (6 - i) * 86_400_000);
    const k = dayKey(d);
    return { label: d.toLocaleDateString('en-IN', { weekday: 'short' }), n: stats.days[k]?.answered ?? 0 };
  });
  const max = Math.max(5, ...week.map((w) => w.n));

  return (
    <div>
      <div className="card">
        <div className="field" style={{ marginBottom: 0 }}><label htmlFor="exam">I am preparing for</label>
          <select id="exam" value={exam.slug} onChange={(e) => setSlug(e.target.value)}>{options.map((o) => <option key={o.slug} value={o.slug}>{o.name}</option>)}</select></div>
      </div>
      <div className="stat-row" style={{ margin: '16px 0' }}>
        <div className="stat"><b>🔥 {ready ? liveStreak(stats) : 0}</b><span>Day streak (best {stats.best})</span></div>
        <div className="stat"><b>{stats.points}</b><span>Focus points</span></div>
        <div className="stat"><b>{stats.answered}</b><span>Questions answered</span></div>
        <div className="stat"><b>{acc}%</b><span>Overall accuracy</span></div>
      </div>
      <section className="card">
        <h2 style={{ fontSize: '1.1rem' }}>Last 7 days</h2>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, height: 110 }} role="img" aria-label={`Questions answered per day: ${week.map((w) => `${w.label} ${w.n}`).join(', ')}`}>
          {week.map((w) => (
            <div key={w.label} style={{ flex: 1, textAlign: 'center', fontSize: '0.78rem' }}>
              <div style={{ height: `${Math.max(4, (w.n / max) * 80)}px`, background: 'var(--brand)', borderRadius: 6, margin: '0 auto', width: '70%' }} />
              <div className="muted">{w.label}</div><div>{w.n}</div>
            </div>
          ))}
        </div>
      </section>
      <div className="grid wide" style={{ marginTop: 14 }}>
        <Link className="link-card" href="/mistake-notebook"><span className="ico">📓</span><h3>{mistakes.filter(isDue).length} mistakes due</h3><p>Review them now to lock them in memory.</p></Link>
        <Link className="link-card" href="/syllabus-tracker"><span className="ico">✅</span><h3>{pct}% of {exam.name} syllabus</h3><p>{days !== null ? (days > 0 ? `${days} days to your exam date.` : 'Update your exam date.') : 'Add your exam date to see your pace.'}</p></Link>
        <Link className="link-card" href="/daily-quiz"><span className="ico">🔥</span><h3>Today&apos;s quiz</h3><p>Five questions keep your streak going.</p></Link>
      </div>
      <h2 style={{ marginTop: 28 }}>Your {exam.name} shortcuts</h2>
      <div className="btn-row">
        <Link className="btn" href={`/exam/${exam.slug}`}>{exam.name} page</Link>
        {exam.tests > 0 && <Link className="btn ghost" href={`/exam/${exam.slug}#tests`}>{exam.tests} practice tests</Link>}
        <Link className="btn ghost" href="/current-affairs">Current affairs for exams</Link>
        {exam.guide && <Link className="btn ghost" href={exam.guide}>Exam guide</Link>}
      </div>
    </div>
  );
}
