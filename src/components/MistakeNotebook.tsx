'use client';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import type { Mistake } from '@/lib/types';
import { MISTAKES_KEY, isDue, removeMistake, reviewMistake, useLocal } from '@/lib/storage';
import MathJax from './MathJax';

const h = (s: string) => ({ __html: s });
const BOX_LABEL = ['New', 'Day 1', 'Day 3', 'Week 1', 'Week 2', 'Month'];

export default function MistakeNotebook() {
  const [list, , ready] = useLocal<Mistake[]>(MISTAKES_KEY, []);
  const [tab, setTab] = useState<'due' | 'all' | 'mastered'>('due');
  const [topic, setTopic] = useState('all');
  const [reviewing, setReviewing] = useState(false);
  const [cur, setCur] = useState(0);
  const [pick, setPick] = useState<number | null>(null);

  const topics = useMemo(() => Array.from(new Set(list.map((m) => m.topic))).sort(), [list]);
  const due = list.filter(isDue);
  const shown = useMemo(() => {
    let l = tab === 'due' ? due : tab === 'mastered' ? list.filter((m) => m.mastered) : list.filter((m) => !m.mastered);
    if (topic !== 'all') l = l.filter((m) => m.topic === topic);
    return l.sort((a, b) => a.nextReview - b.nextReview);
  }, [list, due, tab, topic]);

  if (!ready) return <div className="empty">Loading your notebook…</div>;
  if (!list.length) return (
    <div className="empty">
      <p><strong>Your notebook is empty, which is good news.</strong></p>
      <p>Wrong answers from tests, chapter tests and the daily quiz are saved here automatically.</p>
      <Link className="btn" href="/daily-quiz">Take today&apos;s quiz</Link>
    </div>
  );

  const m = shown[cur];
  const answer = (i: number) => { if (pick !== null || !m) return; setPick(i); reviewMistake(m.id, i === m.correctAnswer); };
  const next = () => { setPick(null); if (cur + 1 >= shown.length) { setReviewing(false); setCur(0); } else setCur(cur + 1); };

  if (reviewing && m) return (
    <div className="card">
      <MathJax trigger={`${cur}-${pick}`} />
      <div className="muted" style={{ marginBottom: 6 }}>Card {cur + 1} of {shown.length} · {m.topic} · {m.source}</div>
      <div className="q-text" dangerouslySetInnerHTML={h(m.question)} />
      <div className="options">
        {m.options.map((o, i) => {
          let cls = 'opt';
          if (pick !== null) cls += i === m.correctAnswer ? ' right' : i === pick ? ' wrong' : '';
          return <button key={i} className={cls} disabled={pick !== null} onClick={() => answer(i)}><span className="letter">{String.fromCharCode(65 + i)}</span><span dangerouslySetInnerHTML={h(o)} /></button>;
        })}
      </div>
      {pick !== null && (
        <>
          <div className="expl"><b>{pick === m.correctAnswer ? <span className="verdict-right">Correct. It moves to the next box.</span> : <span className="verdict-wrong">Not yet. It will come back tomorrow.</span>}</b>{m.explanation && <span dangerouslySetInnerHTML={h(m.explanation)} />}</div>
          <div className="btn-row" style={{ marginTop: 12 }}><button className="btn" onClick={next}>{cur + 1 >= shown.length ? 'Finish' : 'Next card'}</button></div>
        </>
      )}
      <div className="btn-row" style={{ marginTop: 12 }}><button className="btn ghost small" onClick={() => { setReviewing(false); setPick(null); setCur(0); }}>Stop review</button></div>
    </div>
  );

  return (
    <div>
      <div className="stat-row">
        <div className="stat"><b>{due.length}</b><span>Due for revision</span></div>
        <div className="stat"><b>{list.filter((x) => !x.mastered).length}</b><span>Still learning</span></div>
        <div className="stat"><b>{list.filter((x) => x.mastered).length}</b><span>Mastered</span></div>
      </div>
      <div className="btn-row" style={{ margin: '16px 0' }}>
        <button className="btn" disabled={!due.length} onClick={() => { setTab('due'); setCur(0); setPick(null); setReviewing(true); }}>{due.length ? `Review ${due.length} due now` : 'Nothing due right now'}</button>
        <button className="btn ghost" onClick={() => { if (window.confirm('Remove every question from the notebook?')) list.forEach((x) => removeMistake(x.id)); }}>Clear all</button>
      </div>
      <div className="tabs" role="tablist">
        {(['due', 'all', 'mastered'] as const).map((t) => <button key={t} role="tab" aria-selected={tab === t} onClick={() => { setTab(t); setCur(0); }}>{t === 'due' ? 'Due' : t === 'all' ? 'All learning' : 'Mastered'}</button>)}
      </div>
      <div className="field"><label htmlFor="tf">Filter by topic</label>
        <select id="tf" value={topic} onChange={(e) => setTopic(e.target.value)}><option value="all">All topics</option>{topics.map((t) => <option key={t}>{t}</option>)}</select></div>
      {!shown.length && <div className="empty">Nothing here for this filter.</div>}
      {shown.map((x) => (
        <details className="faq" key={x.id}>
          <summary><span dangerouslySetInnerHTML={h(x.question.length > 140 ? x.question.slice(0, 140) + '…' : x.question)} /></summary>
          <div>
            <p><span className="pill soft">{x.topic}</span> <span className="pill soft">{BOX_LABEL[x.box]}</span> <span className="pill soft">Missed {x.wrongCount}×</span></p>
            <p><strong>Answer:</strong> <span dangerouslySetInnerHTML={h(x.options[x.correctAnswer])} /></p>
            {x.explanation && <p dangerouslySetInnerHTML={h(x.explanation)} />}
            <button className="btn ghost small" onClick={() => removeMistake(x.id)}>Remove</button>
          </div>
        </details>
      ))}
      <MathJax trigger={`${tab}-${topic}-${list.length}`} />
    </div>
  );
}
