'use client';
import { useEffect, useMemo, useState } from 'react';
import type { Question } from '@/lib/types';
import { pickSeeded } from '@/lib/quiz';
import { dayKey, useLocal } from '@/lib/storage';
import { GK_BANK } from '@/data/quiz-bank';
import QuizRunner from './QuizRunner';

export type Pool = { key: string; label: string; ids: string[]; marking?: string };

export default function DailyQuiz({ pools }: { pools: Pool[] }) {
  const [key, setKey] = useState('gk');
  const [done, setDone, ready] = useLocal<Record<string, Record<string, number>>>('sp:daily-done', {});
  const [qs, setQs] = useState<Question[] | null>(null);
  const [error, setError] = useState('');
  const today = dayKey();
  const all: Pool[] = useMemo(() => [{ key: 'gk', label: 'GK & current-affairs basics', ids: [] }, ...pools], [pools]);
  const pool = all.find((p) => p.key === key) as Pool;

  useEffect(() => {
    let cancelled = false;
    setQs(null); setError('');
    if (key === 'gk') {
      setQs(pickSeeded(GK_BANK, 5, `${today}-gk`).map(({ exams, ...q }) => { void exams; return q; }));
      return;
    }
    const id = pickSeeded(pool.ids, 1, `${today}-${key}-file`)[0];
    fetch(`/practice-tests/${id}.json`)
      .then((r) => r.json())
      .then((d: { questions: Question[] }) => { if (!cancelled) setQs(pickSeeded(d.questions, 5, `${today}-${key}-q`)); })
      .catch(() => !cancelled && setError('Could not load today’s questions. Check your connection and try again.'));
    return () => { cancelled = true; };
  }, [key, today, pool.ids]);

  const todays = ready ? done[today] ?? {} : {};
  const doneCount = Object.keys(todays).length;

  return (
    <div>
      <div className="card no-print" style={{ marginBottom: 16 }}>
        <div className="field" style={{ marginBottom: 8 }}>
          <label htmlFor="pool">Choose today&apos;s quiz</label>
          <select id="pool" value={key} onChange={(e) => setKey(e.target.value)}>
            {all.map((p) => <option key={p.key} value={p.key}>{p.label}{todays[p.key] !== undefined ? `  ✓ ${todays[p.key]}/5` : ''}</option>)}
          </select>
        </div>
        <p className="muted" style={{ margin: 0, fontSize: '0.92rem' }}>{doneCount > 0 ? `You have completed ${doneCount} quiz${doneCount > 1 ? 'zes' : ''} today. Your streak is safe.` : 'Finish any one quiz today to keep your streak alive.'} The same five questions are served to everyone each day, so you can compare with friends.</p>
      </div>
      {error && <div className="notice">{error}</div>}
      {!qs && !error && <div className="empty" role="status">Loading today&apos;s questions…</div>}
      {qs && (
        <QuizRunner key={`${key}-${today}`} questions={qs} title={`Daily quiz: ${pool.label}`} source={`Daily quiz (${pool.label})`} instant backHref="/dashboard" backLabel="My dashboard"
          onSubmit={(right) => setDone((d) => ({ ...d, [today]: { ...(d[today] ?? {}), [key]: right } }))} />
      )}
    </div>
  );
}
