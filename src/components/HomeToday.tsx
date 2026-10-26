'use client';
import Link from 'next/link';
import type { Mistake, Stats } from '@/lib/types';
import { MISTAKES_KEY, STATS_KEY, dayKey, emptyStats, isDue, liveStreak, useLocal } from '@/lib/storage';

export default function HomeToday() {
  const [stats, , ready] = useLocal<Stats>(STATS_KEY, emptyStats());
  const [mistakes] = useLocal<Mistake[]>(MISTAKES_KEY, []);
  const [done] = useLocal<Record<string, Record<string, number>>>('sp:daily-done', {});
  const streak = ready ? liveStreak(stats) : 0;
  const quizDone = ready && Object.keys(done[dayKey()] ?? {}).length > 0;
  const due = ready ? mistakes.filter(isDue).length : 0;
  return (
    <aside className="today" aria-label="Your day">
      <h2>Your day</h2>
      <div className="today-row"><span><span className="flame" aria-hidden>🔥</span> Streak</span><strong>{streak} day{streak === 1 ? '' : 's'}</strong></div>
      <div className="today-row"><span>Daily quiz</span><strong>{quizDone ? 'Done ✓' : 'Not yet'}</strong></div>
      <div className="today-row"><span>Mistakes due</span><strong>{due}</strong></div>
      <Link className="btn" href={quizDone && due ? '/mistake-notebook' : '/daily-quiz'}>{quizDone ? (due ? 'Revise mistakes' : 'See my dashboard') : 'Take today’s quiz'}</Link>
    </aside>
  );
}
