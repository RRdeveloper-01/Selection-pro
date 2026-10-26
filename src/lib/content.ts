import fs from 'node:fs';
import path from 'node:path';
import examsJson from '@/content/exams.json';
import testsJson from '@/content/tests.json';
import chaptersJson from '@/content/chapters.json';
import mocksJson from '@/content/mocks.json';
import articlesJson from '@/content/articles.json';
import jeeDaysJson from '@/content/jee-days.json';
import type { ArticleMeta, ChapterMeta, Exam, MockPage, TestMeta } from './types';

export const exams = examsJson as unknown as Exam[];
export const tests = testsJson as unknown as TestMeta[];
export const chapters = chaptersJson as unknown as ChapterMeta[];
export const mocks = mocksJson as unknown as MockPage[];
export const articles = articlesJson as unknown as ArticleMeta[];
export const jeeDays = jeeDaysJson as { file: string; day: number; subject: string; chapter: string; count: number }[];

export const getExam = (slug: string) => exams.find((e) => e.slug === slug);
export const examsByCategory = (cat: string) => exams.filter((e) => e.category === cat);
export const testsForExam = (e: Exam) => (e.prefix ? tests.filter((t) => t.prefix === e.prefix).sort((a, b) => a.no - b.no) : []);
export const getTest = (id: string) => tests.find((t) => t.id === id);
export const getChapter = (slug: string) => chapters.find((c) => c.slug === slug);
export const getMock = (slug: string) => mocks.find((m) => m.slug === slug);
export const articlesIn = (section: ArticleMeta['section']) => articles.filter((a) => a.section === section);
export const getArticle = (section: ArticleMeta['section'], slug: string) => articles.find((a) => a.section === section && a.slug === slug);

export function articleHtml(a: ArticleMeta): string {
  return fs.readFileSync(path.join(process.cwd(), 'src/content', a.file), 'utf8');
}

/** Exam that owns a practice-test prefix (e.g. "ssc_cgl" -> SSC CGL) */
export function examForPrefix(prefix: string) {
  return exams.find((e) => e.prefix === prefix);
}

export function totalQuestionCount() {
  return tests.reduce((n, t) => n + t.count, 0) + chapters.reduce((n, c) => n + c.count, 0);
}
