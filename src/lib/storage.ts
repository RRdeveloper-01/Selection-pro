'use client';
import { useCallback, useEffect, useState } from 'react';
import type { Mistake, Question, Stats } from './types';

const EVT = 'sp-storage';

export function readJSON<T>(key: string, fallback: T): T {
  if (typeof window === 'undefined') return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

export function writeJSON<T>(key: string, value: T) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
    window.dispatchEvent(new CustomEvent(EVT, { detail: key }));
  } catch {
    /* storage full or blocked: progress simply will not persist */
  }
}

/** Hydration-safe localStorage state. `ready` is false on first render so SSR markup matches. */
export function useLocal<T>(key: string, initial: T): [T, (v: T | ((p: T) => T)) => void, boolean] {
  const [value, setValue] = useState<T>(initial);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setValue(readJSON<T>(key, initial));
    setReady(true);
    const onChange = (e: Event) => {
      const k = (e as CustomEvent).detail;
      if (!k || k === key) setValue(readJSON<T>(key, initial));
    };
    const onStorage = (e: StorageEvent) => {
      if (e.key === key) setValue(readJSON<T>(key, initial));
    };
    window.addEventListener(EVT, onChange);
    window.addEventListener('storage', onStorage);
    return () => {
      window.removeEventListener(EVT, onChange);
      window.removeEventListener('storage', onStorage);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  const set = useCallback(
    (v: T | ((p: T) => T)) => {
      const next = typeof v === 'function' ? (v as (p: T) => T)(readJSON<T>(key, initial)) : v;
      writeJSON(key, next);
      setValue(next);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [key]
  );
  return [value, set, ready];
}

/* ------------------------------------------------------------------ dates */
export const dayKey = (d = new Date()) => {
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${d.getFullYear()}-${m}-${day}`;
};
const DAY = 86_400_000;
const yesterdayKey = () => dayKey(new Date(Date.now() - DAY));

/* ------------------------------------------------------------------ stats / streak */
export const STATS_KEY = 'sp:stats';
export const emptyStats = (): Stats => ({ streak: 0, best: 0, lastActive: '', points: 0, answered: 0, correct: 0, days: {} });

export function recordActivity(answered: number, correct: number): Stats {
  const s = readJSON<Stats>(STATS_KEY, emptyStats());
  const today = dayKey();
  if (s.lastActive !== today) {
    s.streak = s.lastActive === yesterdayKey() ? s.streak + 1 : 1;
    s.lastActive = today;
  }
  s.best = Math.max(s.best, s.streak);
  s.answered += answered;
  s.correct += correct;
  s.points += correct * 10 + Math.max(0, answered - correct) * 2;
  const d = s.days[today] ?? { answered: 0, correct: 0 };
  s.days[today] = { answered: d.answered + answered, correct: d.correct + correct };
  // keep the last 120 days only
  const keys = Object.keys(s.days).sort();
  while (keys.length > 120) delete s.days[keys.shift() as string];
  writeJSON(STATS_KEY, s);
  return s;
}

/** The streak shown to the user: expires if they missed yesterday. */
export function liveStreak(s: Stats): number {
  if (!s.lastActive) return 0;
  return s.lastActive === dayKey() || s.lastActive === yesterdayKey() ? s.streak : 0;
}

/* ------------------------------------------------------------------ mistake notebook (Leitner boxes) */
export const MISTAKES_KEY = 'sp:mistakes';
const BOX_DAYS = [0, 1, 3, 7, 14, 30];

export function hashStr(s: string) {
  let h = 5381;
  for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0;
  return (h >>> 0).toString(36);
}

export function addMistakes(items: { q: Question; topic?: string; source: string }[]) {
  if (!items.length) return;
  const list = readJSON<Mistake[]>(MISTAKES_KEY, []);
  const now = Date.now();
  for (const { q, topic, source } of items) {
    const id = hashStr(q.question.replace(/\s+/g, ' ').trim());
    const found = list.find((m) => m.id === id);
    if (found) {
      found.wrongCount += 1;
      found.box = 0;
      found.nextReview = now;
      found.mastered = false;
    } else {
      list.push({
        id, question: q.question, options: q.options, correctAnswer: q.correctAnswer, explanation: q.explanation,
        topic: topic || q.topicTag || 'General', source, addedAt: now, wrongCount: 1, box: 0, nextReview: now, mastered: false,
      });
    }
  }
  writeJSON(MISTAKES_KEY, list.slice(-400));
}

export function reviewMistake(id: string, correct: boolean) {
  const list = readJSON<Mistake[]>(MISTAKES_KEY, []);
  const m = list.find((x) => x.id === id);
  if (!m) return;
  if (correct) {
    m.box = Math.min(5, m.box + 1);
    m.nextReview = Date.now() + BOX_DAYS[m.box] * DAY;
    if (m.box >= 5) m.mastered = true;
  } else {
    m.box = 0;
    m.wrongCount += 1;
    m.nextReview = Date.now();
  }
  writeJSON(MISTAKES_KEY, list);
}

export function removeMistake(id: string) {
  writeJSON(MISTAKES_KEY, readJSON<Mistake[]>(MISTAKES_KEY, []).filter((m) => m.id !== id));
}

export const isDue = (m: Mistake) => !m.mastered && m.nextReview <= Date.now();
