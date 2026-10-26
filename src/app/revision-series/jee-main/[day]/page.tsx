import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/Breadcrumbs';
import QuizRunner from '@/components/QuizRunner';
import { jeeDays } from '@/lib/content';
import { loadJeeDay } from '@/lib/server-data';
import { buildMetadata } from '@/lib/seo';
import { MARKING } from '@/lib/quiz';

export const dynamicParams = false;
export const generateStaticParams = () => jeeDays.map((d) => ({ day: String(d.day) }));
export async function generateMetadata({ params }: { params: Promise<{ day: string }> }) {
  const { day } = await params;
  const d = jeeDays.find((x) => String(x.day) === day);
  return d ? buildMetadata({ title: `JEE Main Revision Day ${d.day}: ${d.subject} ${d.chapter}`, description: `Day ${d.day} of the JEE Main 100-day revision series: ${d.count} questions on ${d.chapter} (${d.subject}) with explanations.`, path: `/revision-series/jee-main/${d.day}` }) : {};
}

export default async function RevisionDay({ params }: { params: Promise<{ day: string }> }) {
  const { day } = await params;
  const d = jeeDays.find((x) => String(x.day) === day);
  const data = d && loadJeeDay(d.file);
  if (!d || !data) notFound();
  return (
    <div className="page">
      <Breadcrumbs items={[{ name: '100-day revision', path: '/revision-series/jee-main' }, { name: `Day ${d.day}`, path: `/revision-series/jee-main/${d.day}` }]} />
      <h1>Day {d.day}: {d.subject}, {d.chapter}</h1>
      <p className="lead">{d.count} JEE Main-style questions. Marking +4 / −1.</p>
      <QuizRunner questions={data.questions} title={`JEE revision day ${d.day}: ${d.chapter}`} source={`JEE revision day ${d.day}`} marking={MARKING.jee_main} timeLimitSec={d.count * 144} backHref="/revision-series/jee-main" backLabel="All days" />
    </div>
  );
}
