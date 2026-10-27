import type { Question } from './types';

/** Deterministic PRNG so "today's quiz" is identical for every visitor on the same date. */
export function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function seedFrom(str: string) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export function shuffle<T>(arr: T[], rnd: () => number = Math.random): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function pickSeeded<T>(pool: T[], n: number, seed: string): T[] {
  return shuffle(pool, mulberry32(seedFrom(seed))).slice(0, n);
}

/** True when a question has text, at least two options and a valid answer index. */
export function isValidQuestion(q: Partial<Question> | null | undefined): q is Question {
  return !!q && typeof q.question === 'string' && q.question.trim().length > 0 && Array.isArray(q.options) && q.options.length >= 2 &&
    Number.isInteger(q.correctAnswer) && (q.correctAnswer as number) >= 0 && (q.correctAnswer as number) < q.options.length;
}

/** Shuffle options but keep track of the right one (same behaviour as the old practice-test page). */
export function shuffleOptions(q: Question, rnd: () => number = Math.random): Question {
  const correct = q.options[q.correctAnswer];
  const options = shuffle(q.options, rnd);
  return { ...q, options, correctAnswer: Math.max(0, options.indexOf(correct)) };
}

type LegacyChapterQ = { question_no: number; question: string; options: Record<string, string>; answer: string };

/** Chapter-wise JSON ({A:..,B:..}, "answer":"A") -> common Question shape. */
export function normalizeChapter(raw: LegacyChapterQ[], slug: string): Question[] {
  return raw.filter((r) => r && typeof r.question === 'string' && r.options && r.answer in r.options).map((r, i) => {
    const keys = Object.keys(r.options);
    return {
      id: `${slug}-${r.question_no ?? i + 1}`,
      question: r.question,
      options: keys.map((k) => r.options[k]),
      correctAnswer: Math.max(0, keys.indexOf(r.answer)),
      topicTag: undefined,
    };
  });
}

export type Marking = { correct: number; wrong: number; label: string };

export const MARKING: Record<string, Marking> = {
  ssc_cgl: { correct: 2, wrong: 0.5, label: '+2 / −0.5' },
  ssc_chsl: { correct: 2, wrong: 0.5, label: '+2 / −0.5' },
  rrb: { correct: 1, wrong: 1 / 3, label: '+1 / −⅓' },
  sbi_clerk: { correct: 1, wrong: 0.25, label: '+1 / −0.25' },
  ibps_po: { correct: 1, wrong: 0.25, label: '+1 / −0.25' },
  rbi: { correct: 1, wrong: 0.25, label: '+1 / −0.25' },
  neet: { correct: 4, wrong: 1, label: '+4 / −1' },
  jee_main: { correct: 4, wrong: 1, label: '+4 / −1' },
  cuet: { correct: 5, wrong: 1, label: '+5 / −1' },
};
export const DEFAULT_MARKING: Marking = { correct: 1, wrong: 0, label: '+1 / 0' };

export function formatTime(sec: number) {
  const h = Math.floor(sec / 3600);
  const m = Math.floor((sec % 3600) / 60);
  const s = sec % 60;
  return h > 0 ? `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}` : `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}
