'use client';
import { useMemo, useState } from 'react';
import { EXAM_EXTRA } from '@/data/exams-extra';
import { useLocal } from '@/lib/storage';

export default function SyllabusTracker({ options }: { options: { slug: string; name: string }[] }) {
  const [slug, setSlug] = useLocal<string>('sp:exam', options[0].slug);
  const valid = options.some((o) => o.slug === slug) ? slug : options[0].slug;
  const [done, setDone] = useLocal<string[]>(`sp:syllabus:${valid}`, []);
  const [date, setDate] = useLocal<string>(`sp:examdate:${valid}`, '');
  const [open, setOpen] = useState<string | null>(null);
  const x = EXAM_EXTRA[valid];

  const total = useMemo(() => x.syllabus.reduce((n, s) => n + s.topics.length, 0), [x]);
  const left = total - done.length;
  const pct = Math.round((done.length / total) * 100);
  const days = date ? Math.ceil((new Date(date + 'T00:00:00').getTime() - Date.now()) / 86_400_000) : null;
  const toggle = (k: string) => setDone((d) => (d.includes(k) ? d.filter((i) => i !== k) : [...d, k]));
  const perWeek = days && days > 0 ? Math.ceil(left / Math.max(1, days / 7)) : null;

  return (
    <div>
      <div className="card">
        <div className="field"><label htmlFor="ex">Your exam</label>
          <select id="ex" value={valid} onChange={(e) => setSlug(e.target.value)}>{options.map((o) => <option key={o.slug} value={o.slug}>{o.name}</option>)}</select></div>
        <div className="field" style={{ marginBottom: 0 }}><label htmlFor="dt">Exam date (optional)</label>
          <input id="dt" type="date" value={date} onChange={(e) => setDate(e.target.value)} /></div>
      </div>
      <div className="stat-row" style={{ margin: '16px 0' }}>
        <div className="stat"><b>{pct}%</b><span>Syllabus done</span></div>
        <div className="stat"><b>{left}</b><span>Topics left</span></div>
        <div className="stat"><b>{days === null ? '–' : days > 0 ? days : 0}</b><span>Days to exam</span></div>
        <div className="stat"><b>{perWeek ?? '–'}</b><span>Topics / week needed</span></div>
      </div>
      <div className="bar" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100} aria-label="Syllabus completion"><i style={{ width: `${pct}%` }} /></div>
      {days !== null && days <= 0 && <p className="notice" style={{ marginTop: 12 }}>The date you chose has passed. Pick the next exam date to see your pace.</p>}
      {x.syllabus.map((s) => {
        const c = s.topics.filter((t) => done.includes(`${s.subject}::${t}`)).length;
        const isOpen = open === s.subject || open === null;
        return (
          <section className="card" key={s.subject} style={{ marginTop: 14 }}>
            <button className="btn ghost small" style={{ width: '100%', justifyContent: 'space-between' }} onClick={() => setOpen(open === s.subject ? '' : s.subject)} aria-expanded={isOpen}>
              <span>{s.subject}</span><span>{c}/{s.topics.length}</span>
            </button>
            {isOpen && s.topics.map((t) => {
              const k = `${s.subject}::${t}`; const on = done.includes(k);
              return <label className={`check${on ? ' done' : ''}`} key={k}><input type="checkbox" checked={on} onChange={() => toggle(k)} /><span>{t}</span></label>;
            })}
          </section>
        );
      })}
      <div className="btn-row" style={{ marginTop: 14 }}><button className="btn ghost small" onClick={() => { if (window.confirm('Reset progress for this exam?')) setDone([]); }}>Reset this exam</button></div>
    </div>
  );
}
