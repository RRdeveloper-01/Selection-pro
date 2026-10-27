import fs from 'node:fs';
import path from 'node:path';
import type { Question, TestFile } from './types';
import { isValidQuestion, normalizeChapter } from './quiz';

const pub = (...p: string[]) => path.join(process.cwd(), 'public', ...p);

const clean = (t: TestFile): TestFile => ({ ...t, questions: (t.questions ?? []).filter(isValidQuestion) });

export function loadTest(id: string): TestFile | null {
  try { return clean(JSON.parse(fs.readFileSync(pub('practice-tests', `${id}.json`), 'utf8')) as TestFile); } catch { return null; }
}
export function loadChapter(slug: string): Question[] | null {
  try { return normalizeChapter(JSON.parse(fs.readFileSync(pub('data', `${slug}.json`), 'utf8')), slug); } catch { return null; }
}
export function loadJeeDay(file: string): TestFile | null {
  try { return JSON.parse(fs.readFileSync(pub('tests', 'jee', file), 'utf8')) as TestFile; } catch { return null; }
}
