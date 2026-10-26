import { notFound } from 'next/navigation';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import QuizRunner from '@/components/QuizRunner';
import AdSlot from '@/components/AdSlot';
import { examForPrefix, getTest, tests, testsForExam } from '@/lib/content';
import { loadTest } from '@/lib/server-data';
import { buildMetadata, quizLd } from '@/lib/seo';
import { DEFAULT_MARKING, MARKING } from '@/lib/quiz';

export const dynamicParams = false;
export const generateStaticParams = () => tests.map((t) => ({ id: t.id }));

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const t = getTest(id);
  if (!t) return {};
  const e = examForPrefix(t.prefix);
  return buildMetadata({
    title: `${t.subject} ${t.title}: Free Online Practice Test with Solutions`,
    description: `Attempt ${t.title} of ${t.subject}: ${t.count} questions with detailed explanations, score analysis and topic-wise report. Free on Selection Pro.`,
    path: `/practice-test/${t.id}`, keywords: [t.subject, 'free mock test', e?.name ?? '', 'practice test with solutions'],
  });
}

export default async function PracticeTestPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const meta = getTest(id);
  const data = loadTest(id);
  if (!meta || !data) notFound();
  const exam = examForPrefix(meta.prefix);
  const marking = MARKING[meta.prefix] ?? DEFAULT_MARKING;
  const siblings = exam ? testsForExam(exam) : [];
  const idx = siblings.findIndex((s) => s.id === meta.id);
  const next = siblings[idx + 1];
  const topics = Object.entries(meta.topics).sort((a, b) => b[1] - a[1]);
  const minutes = Math.round(meta.count * (meta.prefix === 'jee_main' || meta.prefix === 'neet' ? 2.4 : 0.6));
  return (
    <div className="page">
      <Breadcrumbs items={[{ name: 'Exams', path: '/exam' }, ...(exam ? [{ name: exam.name, path: `/exam/${exam.slug}` }] : []), { name: meta.title, path: `/practice-test/${meta.id}` }]} />
      <JsonLd data={quizLd(`${meta.subject} ${meta.title}`, `/practice-test/${meta.id}`, meta.count)} />
      <h1>{meta.subject}: {meta.title}</h1>
      <p className="lead">{meta.count} questions with explanations. Marking {marking.label}. Suggested time {minutes} minutes. Your wrong answers are saved automatically to the Mistake Notebook.</p>
      <div className="btn-row no-print" style={{ marginBottom: 18 }}>
        <Link className="btn ghost small" href={`/practice-test/${meta.id}/paper`}>Open printable paper with answer key</Link>
        {exam && <Link className="btn ghost small" href={`/exam/${exam.slug}`}>All {exam.name} tests</Link>}
      </div>
      <QuizRunner questions={data.questions} title={`${meta.subject} ${meta.title}`} source={`${meta.subject} ${meta.title}`} marking={marking} timeLimitSec={minutes * 60} backHref={exam ? `/exam/${exam.slug}` : '/exam'} backLabel="More tests" />
      <AdSlot slot={process.env.NEXT_PUBLIC_AD_SLOT_TEST} />
      <section className="section">
        <h2>What this test covers</h2>
        <p>This paper includes questions from {topics.length} topics. Spend your review time on the topics where accuracy falls below 70% in your result table.</p>
        <div className="btn-row">{topics.slice(0, 14).map(([t, n]) => <span className="pill" key={t}>{t} ({n})</span>)}</div>
      </section>
      <section className="section">
        <h2>How to get the most from this test</h2>
        <ol>
          <li>Attempt the full paper once in one sitting without searching for answers.</li>
          <li>After submitting, read the explanation of every wrong and every guessed question.</li>
          <li>Use “Retry wrong &amp; skipped” immediately, then again after a day from the Mistake Notebook.</li>
          <li>Note the topic with the lowest accuracy and study it before the next test.</li>
        </ol>
        {next && <p><Link className="btn small" href={`/practice-test/${next.id}`}>Next: {next.title}</Link></p>}
      </section>
    </div>
  );
}
