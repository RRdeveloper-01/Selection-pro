import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';
import { articles, chapters, exams, jeeDays, mocks, tests } from '@/lib/content';
import { CA_TOPICS } from '@/data/ca-topics';
import { indexableDates } from '@/lib/daily';
import { EXAM_CATEGORIES } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const u = (path: string, priority: number, changeFrequency: 'daily' | 'weekly' | 'monthly' | 'yearly' = 'weekly') => ({ url: `${SITE.url}${path}`, lastModified: now, changeFrequency, priority });
  return [
    u('/', 1, 'daily'), u('/exam', 0.9), u('/daily-quiz', 0.9, 'daily'), u('/mcq-trap', 0.8, 'daily'), u('/mock-tests', 0.9), u('/mock-tests/hindi', 0.8),
    u('/current-affairs', 0.8), u('/mistake-notebook', 0.6), u('/syllabus-tracker', 0.7), u('/blog', 0.7), u('/guides', 0.7), u('/exam-guides', 0.7), u('/scholarship', 0.7),
    u('/resources', 0.5, 'monthly'), u('/tools/notes-maker', 0.5, 'monthly'), u('/tools/memory-game', 0.3, 'monthly'), u('/revision-series/jee-main', 0.7),
    u('/about', 0.4, 'yearly'), u('/contact', 0.4, 'yearly'), u('/privacy', 0.3, 'yearly'), u('/terms-and-conditions', 0.3, 'yearly'), u('/disclaimer', 0.3, 'yearly'), u('/editorial-policy', 0.3, 'yearly'), u('/support', 0.3, 'yearly'),
    ...Object.keys(EXAM_CATEGORIES).map((c) => u(`/exams/${c}`, 0.7)),
    ...exams.map((e) => u(`/exam/${e.slug}`, 0.9)),
    ...tests.map((t) => u(`/practice-test/${t.id}`, 0.7, 'monthly')),
    ...chapters.map((c) => u(`/chapter-test/${c.slug}`, 0.6, 'monthly')),
    ...mocks.map((m) => u(m.route, 0.7)),
    ...jeeDays.map((d) => u(`/revision-series/jee-main/${d.day}`, 0.6, 'monthly')),
    ...CA_TOPICS.map((t) => u(`/current-affairs/${t.slug}`, 0.7)),
    u('/current-affairs/daily', 0.8, 'daily'),
    ...indexableDates().map((d) => u(`/current-affairs/daily/${d}`, 0.7, 'monthly')),
    ...articles.map((a) => u(`/${a.section}/${a.slug}`, 0.7, 'monthly')),
  ];
}
