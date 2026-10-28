import { articles, chapters, exams, mocks, tests } from '@/lib/content';
import { CA_TOPICS } from '@/data/ca-topics';
import { dailyDates, formatDate } from '@/lib/daily';

export const dynamic = 'force-static';

export function GET() {
  const items: { t: string; u: string; k: string; s?: string }[] = [
    { t: 'Daily quiz', u: '/daily-quiz', k: 'Popular', s: 'streak questions' },
    { t: 'MCQ trap of the day', u: '/mcq-trap', k: 'Popular' },
    { t: 'Mistake notebook', u: '/mistake-notebook', k: 'Popular', s: 'revision wrong answers' },
    { t: 'Syllabus tracker', u: '/syllabus-tracker', k: 'Popular', s: 'countdown' },
    { t: 'All exams', u: '/exam', k: 'Popular' },
    { t: 'Chapter-wise mock tests', u: '/mock-tests', k: 'Popular' },
    { t: 'Current affairs for exams', u: '/current-affairs', k: 'Popular' },
    { t: 'Scholarships', u: '/scholarship', k: 'Popular' },
    ...exams.map((e) => ({ t: `${e.name} tests, PYQs & strategy`, u: `/exam/${e.slug}`, k: 'Exam', s: e.category })),
    ...tests.map((t) => ({ t: `${t.subject} ${t.title}`, u: `/practice-test/${t.id}`, k: 'Practice test', s: Object.keys(t.topics).slice(0, 8).join(' ') })),
    ...chapters.map((c) => ({ t: `${c.title} chapter test`, u: `/chapter-test/${c.slug}`, k: 'Chapter test' })),
    ...mocks.map((m) => ({ t: m.h1, u: m.route, k: 'Mock tests' })),
    ...CA_TOPICS.map((c) => ({ t: c.title, u: `/current-affairs/${c.slug}`, k: 'Current affairs', s: c.summary })),
    ...dailyDates().map((d) => ({ t: `Current affairs ${formatDate(d)}`, u: `/current-affairs/daily/${d}`, k: 'Daily current affairs' })),
    ...articles.map((a) => ({ t: a.title, u: `/${a.section}/${a.slug}`, k: 'Article', s: a.description })),
  ];
  return Response.json(items);
}
