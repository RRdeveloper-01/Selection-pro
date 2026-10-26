'use client';
import { useEffect, useState } from 'react';
import { dayKey, recordActivity, addMistakes } from '@/lib/storage';
import { pickSeeded } from '@/lib/quiz';
import { TRAPS } from '@/data/quiz-bank';
import MathJax from './MathJax';

export default function TrapQuiz() {
  const [trap, setTrap] = useState<(typeof TRAPS)[number] | null>(null);
  const [pick, setPick] = useState<number | null>(null);
  useEffect(() => { setTrap(pickSeeded(TRAPS, 1, `trap-${dayKey()}`)[0]); }, []);
  const answer = (i: number) => {
    if (pick !== null || !trap) return;
    setPick(i);
    const ok = i === trap.correctAnswer;
    recordActivity(1, ok ? 1 : 0);
    if (!ok) addMistakes([{ q: trap, topic: trap.topicTag, source: 'MCQ trap of the day' }]);
  };
  if (!trap) return <div className="empty" role="status">Loading today&apos;s trap…</div>;
  return (
    <div className="card">
      <MathJax trigger={pick} />
      <span className="pill warn">{trap.topicTag}</span>
      <p className="q-text" style={{ margin: '10px 0' }}>{trap.question}</p>
      <div className="options">
        {trap.options.map((o, i) => {
          let cls = 'opt';
          if (pick !== null) cls += i === trap.correctAnswer ? ' right' : i === pick ? ' wrong' : '';
          return <button key={i} className={cls} disabled={pick !== null} onClick={() => answer(i)}><span className="letter">{String.fromCharCode(65 + i)}</span><span>{o}</span></button>;
        })}
      </div>
      {pick !== null && (
        <div className="expl" aria-live="polite">
          <b>{pick === trap.correctAnswer ? <span className="verdict-right">You avoided the trap.</span> : <span className="verdict-wrong">That is the trap.</span>}</b>
          <p style={{ margin: '4px 0' }}><strong>Why people slip:</strong> {trap.trap}</p>
          <p style={{ margin: 0 }}><strong>Correct reasoning:</strong> {trap.explanation}</p>
        </div>
      )}
    </div>
  );
}
