'use client';
import Link from 'next/link';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { Question } from '@/lib/types';
import { DEFAULT_MARKING, formatTime, shuffleOptions, type Marking } from '@/lib/quiz';
import { addMistakes, recordActivity } from '@/lib/storage';
import MathJax from './MathJax';

type Props = {
  questions: Question[];
  title: string;
  source: string;
  marking?: Marking;
  timeLimitSec?: number;
  instant?: boolean; // show answer immediately after each pick (daily quiz)
  backHref?: string;
  backLabel?: string;
  shuffle?: boolean;
  onSubmit?: (right: number, total: number) => void;
};

const html = (s: string) => ({ __html: s });

export default function QuizRunner({ questions, title, source, marking = DEFAULT_MARKING, timeLimitSec, instant = false, backHref = '/exam', backLabel = 'More tests', shuffle = true, onSubmit }: Props) {
  const [qs, setQs] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<(number | undefined)[]>([]);
  const [flags, setFlags] = useState<boolean[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [round, setRound] = useState(0);
  const saved = useRef(false);

  useEffect(() => {
    const list = shuffle ? questions.map((q) => shuffleOptions(q)) : questions;
    setQs(list);
    setAnswers(new Array(list.length).fill(undefined));
    setFlags(new Array(list.length).fill(false));
    setSubmitted(false);
    setElapsed(0);
    saved.current = false;
  }, [questions, shuffle, round]);

  const submit = useCallback(() => setSubmitted(true), []);

  useEffect(() => {
    if (submitted || !qs.length) return;
    const id = setInterval(() => setElapsed((e) => e + 1), 1000);
    return () => clearInterval(id);
  }, [submitted, qs.length]);

  useEffect(() => {
    if (timeLimitSec && elapsed >= timeLimitSec && !submitted) submit();
  }, [elapsed, timeLimitSec, submitted, submit]);

  const summary = useMemo(() => {
    let right = 0, wrong = 0, skipped = 0;
    const topics: Record<string, { right: number; total: number }> = {};
    qs.forEach((q, i) => {
      const a = answers[i];
      const t = q.topicTag || 'General';
      topics[t] = topics[t] || { right: 0, total: 0 };
      topics[t].total++;
      if (a === undefined) skipped++;
      else if (a === q.correctAnswer) { right++; topics[t].right++; }
      else wrong++;
    });
    const score = right * marking.correct - wrong * marking.wrong;
    return { right, wrong, skipped, score, max: qs.length * marking.correct, topics };
  }, [qs, answers, marking]);

  useEffect(() => {
    if (!submitted || saved.current || !qs.length) return;
    saved.current = true;
    const attempted = summary.right + summary.wrong;
    if (attempted > 0) recordActivity(attempted, summary.right);
    onSubmit?.(summary.right, qs.length);
    addMistakes(qs.flatMap((q, i) => (answers[i] !== undefined && answers[i] !== q.correctAnswer ? [{ q, topic: q.topicTag, source }] : [])));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submitted, qs, answers, summary, source]);

  const answered = answers.filter((a) => a !== undefined).length;
  const pick = (i: number, o: number) => {
    if (submitted || (instant && answers[i] !== undefined)) return;
    setAnswers((a) => a.map((x, k) => (k === i ? o : x)));
  };
  const reveal = submitted || instant;

  const retryWrong = () => {
    const wrongQs = qs.filter((q, i) => answers[i] !== q.correctAnswer);
    if (!wrongQs.length) return;
    setQs(wrongQs.map((q) => shuffleOptions(q)));
    setAnswers(new Array(wrongQs.length).fill(undefined));
    setFlags(new Array(wrongQs.length).fill(false));
    setSubmitted(false); setElapsed(0); saved.current = false;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const share = async () => {
    const text = `I scored ${summary.right}/${qs.length} in "${title}" on Selection Pro. Try it:`;
    try {
      if (navigator.share) await navigator.share({ title, text, url: window.location.href });
      else await navigator.clipboard.writeText(`${text} ${window.location.href}`);
    } catch { /* cancelled */ }
  };

  if (!qs.length) return <div className="empty" role="status">Loading questions…</div>;
  const accuracy = summary.right + summary.wrong ? Math.round((summary.right / (summary.right + summary.wrong)) * 100) : 0;
  const remaining = timeLimitSec ? Math.max(0, timeLimitSec - elapsed) : null;

  return (
    <div>
      <MathJax trigger={`${round}-${qs.length}-${submitted}-${instant ? answers.join() : ''}`} />
      {submitted && (
        <section className="card result" aria-live="polite">
          <h2>Your result</h2>
          <div className="score">{Number.isInteger(summary.score) ? summary.score : summary.score.toFixed(2)} <span className="muted" style={{ fontSize: '1.1rem' }}>/ {summary.max}</span></div>
          <p className="muted">Marking {marking.label}. Accuracy {accuracy}% on attempted questions.</p>
          <div className="stat-row" style={{ margin: '14px 0' }}>
            <div className="stat"><b className="verdict-right">{summary.right}</b><span>Correct</span></div>
            <div className="stat"><b className="verdict-wrong">{summary.wrong}</b><span>Wrong</span></div>
            <div className="stat"><b>{summary.skipped}</b><span>Skipped</span></div>
            <div className="stat"><b>{formatTime(elapsed)}</b><span>Time taken</span></div>
          </div>
          {Object.keys(summary.topics).length > 1 && (
            <div className="table-wrap" style={{ textAlign: 'left', marginBottom: 14 }}>
              <table>
                <thead><tr><th>Topic</th><th>Correct</th><th>Accuracy</th></tr></thead>
                <tbody>
                  {Object.entries(summary.topics).sort((a, b) => a[1].right / a[1].total - b[1].right / b[1].total).map(([t, v]) => (
                    <tr key={t}><td>{t}</td><td>{v.right}/{v.total}</td><td>{Math.round((v.right / v.total) * 100)}%</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {summary.wrong > 0 && <p className="notice">{summary.wrong} wrong answer{summary.wrong > 1 ? 's were' : ' was'} saved to your <Link href="/mistake-notebook">Mistake Notebook</Link> for spaced revision.</p>}
          <div className="btn-row" style={{ justifyContent: 'center', marginTop: 14 }}>
            {summary.wrong + summary.skipped > 0 && <button className="btn accent" onClick={retryWrong}>Retry wrong & skipped</button>}
            <button className="btn ghost" onClick={() => { setRound((r) => r + 1); window.scrollTo({ top: 0 }); }}>Restart test</button>
            <button className="btn ghost" onClick={share}>Share result</button>
            <Link className="btn ghost" href={backHref}>{backLabel}</Link>
          </div>
        </section>
      )}

      {!instant && (
        <div className="quiz-bar" role="group" aria-label="Test controls">
          <span className="timer" aria-live="off">{remaining !== null && !submitted ? `⏳ ${formatTime(remaining)}` : `⏱ ${formatTime(elapsed)}`}</span>
          <span className="muted">{answered}/{qs.length} answered</span>
          <span className="spacer" />
          {!submitted && (
            <button className="btn small" onClick={() => { if (answered === qs.length || window.confirm(`You have ${qs.length - answered} unanswered question(s). Submit now?`)) submit(); }}>Submit test</button>
          )}
        </div>
      )}

      {!instant && qs.length > 1 && (
        <nav className="palette" aria-label="Question palette">
          {qs.map((q, i) => {
            const a = answers[i];
            const cls = submitted ? (a === undefined ? '' : a === q.correctAnswer ? 'right' : 'wrong') : a !== undefined ? 'done' : '';
            return <a key={q.id + i} href={`#q${i + 1}`} className={`${cls}${flags[i] ? ' flag' : ''}`} aria-label={`Question ${i + 1}${a !== undefined ? ', answered' : ''}${flags[i] ? ', marked for review' : ''}`}>{i + 1}</a>;
          })}
        </nav>
      )}

      {qs.map((q, i) => (
        <article className="q-card" id={`q${i + 1}`} key={q.id + i + round}>
          <div className="q-head">
            <span className="q-num">Q{i + 1}.</span>
            <div style={{ width: '100%' }}>
              <div className="q-text" dangerouslySetInnerHTML={html(q.question)} />
              {q.imageUrl && /* eslint-disable-next-line @next/next/no-img-element */ <img className="q-img" src={q.imageUrl} alt={`Diagram for question ${i + 1}`} loading="lazy" />}
              {(q.topicTag || q.year) && (
                <div className="q-tags">
                  {q.topicTag && <span className="pill soft">{q.topicTag}</span>}
                  {q.year && <span className="pill soft">{q.year}</span>}
                </div>
              )}
            </div>
          </div>
          <div className="options" role="radiogroup" aria-label={`Options for question ${i + 1}`}>
            {q.options.map((o, k) => {
              const picked = answers[i] === k;
              let cls = 'opt';
              if (reveal && answers[i] !== undefined) {
                if (k === q.correctAnswer) cls += ' right';
                else if (picked) cls += ' wrong';
              } else if (submitted && k === q.correctAnswer) cls += ' right';
              else if (picked) cls += ' picked';
              return (
                <button key={k} type="button" role="radio" aria-checked={picked} className={cls} disabled={submitted || (instant && answers[i] !== undefined)} onClick={() => pick(i, k)}>
                  <span className="letter">{String.fromCharCode(65 + k)}</span>
                  <span dangerouslySetInnerHTML={html(o)} />
                </button>
              );
            })}
          </div>
          {!submitted && !instant && (
            <div className="q-actions">
              <button className="btn ghost small" onClick={() => setFlags((f) => f.map((x, k) => (k === i ? !x : x)))}>{flags[i] ? 'Unmark review' : 'Mark for review'}</button>
              {answers[i] !== undefined && <button className="btn ghost small" onClick={() => setAnswers((a) => a.map((x, k) => (k === i ? undefined : x)))}>Clear answer</button>}
            </div>
          )}
          {reveal && (answers[i] !== undefined || submitted) && (
            <div className="expl">
              <b>{answers[i] === undefined ? 'Skipped' : answers[i] === q.correctAnswer ? <span className="verdict-right">Correct</span> : <span className="verdict-wrong">Not quite</span>}. Right answer: {String.fromCharCode(65 + q.correctAnswer)}</b>
              {q.explanation ? <span dangerouslySetInnerHTML={html(q.explanation)} /> : <span className="muted">Review this topic in your NCERT or class notes.</span>}
            </div>
          )}
        </article>
      ))}

      {!submitted && !instant && <div className="btn-row"><button className="btn" onClick={() => { if (answered === qs.length || window.confirm(`You have ${qs.length - answered} unanswered question(s). Submit now?`)) submit(); }}>Submit test</button></div>}
      {instant && answered === qs.length && !submitted && (
        <div className="btn-row"><button className="btn" onClick={submit}>Finish and see result</button></div>
      )}
    </div>
  );
}
