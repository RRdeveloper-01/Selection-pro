import { notFound } from 'next/navigation';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import QuizRunner from '@/components/QuizRunner';
import { chapters, getChapter, mocks } from '@/lib/content';
import { loadChapter } from '@/lib/server-data';
import { buildMetadata, quizLd } from '@/lib/seo';

export const dynamicParams = false;
export const generateStaticParams = () => chapters.map((c) => ({ slug: c.slug }));

const label = (c: { title: string; prefix: string }) =>
  `${c.title.replace(/\b\w/g, (m) => m.toUpperCase())}${c.prefix === 'h' || c.prefix === 'ch' ? ' (Hindi)' : ''}`;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getChapter(slug);
  if (!c) return {};
  return buildMetadata({
    title: `${label(c)} Chapter-wise Mock Test: ${c.count} Questions`,
    description: `Free chapter-wise mock test on ${label(c)} with ${c.count} questions for JEE, NEET, CUET and board exams. Instant score and review.`,
    path: `/chapter-test/${c.slug}`,
  });
}

export default async function ChapterTestPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getChapter(slug);
  const qs = loadChapter(slug);
  if (!c || !qs) notFound();
  const parents = mocks.filter((m) => m.groups.some((g) => g.chapters.some((x) => x.slug === c.slug)));
  return (
    <div className="page">
      <Breadcrumbs items={[{ name: 'Mock tests', path: '/mock-tests' }, { name: label(c), path: `/chapter-test/${c.slug}` }]} />
      <JsonLd data={quizLd(`${label(c)} mock test`, `/chapter-test/${c.slug}`, qs.length)} />
      <h1>{label(c)}: Chapter-wise Mock Test</h1>
      <p className="lead">{qs.length} multiple-choice questions. Choose answers, submit and review. Wrong answers go to your Mistake Notebook.</p>
      <QuizRunner questions={qs} title={`${label(c)} chapter test`} source={`${label(c)} chapter test`} timeLimitSec={Math.max(15, qs.length) * 90} backHref="/mock-tests" backLabel="All chapter tests" />
      {parents.length > 0 && (
        <section className="section">
          <h2>More chapter tests</h2>
          <div className="btn-row">{parents.map((m) => <Link key={m.slug} className="btn ghost small" href={m.route}>{m.h1}</Link>)}</div>
        </section>
      )}
    </div>
  );
}
