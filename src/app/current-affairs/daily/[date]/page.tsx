import { notFound } from 'next/navigation';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import FaqList from '@/components/FaqList';
import JsonLd from '@/components/JsonLd';
import { CA_TOPICS } from '@/data/ca-topics';
import { MIN_INDEXED, dailyDates, entriesOn, formatDate } from '@/lib/daily';
import { buildMetadata } from '@/lib/seo';
import { abs } from '@/lib/site';

export const dynamicParams = false;
export const generateStaticParams = () => dailyDates().map((date) => ({ date }));

export async function generateMetadata({ params }: { params: Promise<{ date: string }> }) {
  const { date } = await params;
  const list = entriesOn(date);
  if (!list.length) return {};
  const d = formatDate(date);
  return buildMetadata({
    title: `Current Affairs ${d}: ${list.length} Exam Imp News`,
    description: `Current affairs for ${d}: ${list.slice(0, 3).map((e) => e.title).join('; ')}. Each News has an exam angle and likely questions for SSC, Banking and Railway exams.`,
    path: `/current-affairs/daily/${date}`,
    type: 'article',
    noindex: list.length < MIN_INDEXED,
  });
}

export default async function DailyPage({ params }: { params: Promise<{ date: string }> }) {
  const { date } = await params;
  const list = entriesOn(date);
  if (!list.length) notFound();
  const d = formatDate(date);
  const dates = dailyDates();
  const i = dates.indexOf(date);
  const newer = i > 0 ? dates[i - 1] : null;
  const older = i < dates.length - 1 ? dates[i + 1] : null;
  const path = `/current-affairs/daily/${date}`;
  return (
    <div className="page narrow">
      <Breadcrumbs items={[{ name: 'Current affairs', path: '/current-affairs' }, { name: 'Daily', path: '/current-affairs/daily' }, { name: d, path }]} />
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'Article', headline: `Current Affairs ${d}`, datePublished: date, dateModified: date, mainEntityOfPage: abs(path),
        author: { '@type': 'Organization', name: 'Selection Pro' }, publisher: { '@type': 'Organization', name: 'Selection Pro', logo: { '@type': 'ImageObject', url: abs('/icons/icon-512.png') } } }} />
      <h1>Current Affairs {d}</h1>
      <p className="muted" style={{ marginTop: -6 }}>Published <time dateTime={date}>{d}</time> · {list.length} notes · SSC, Banking, Railway</p>
      <p className="lead">{list.length} notes for {d}, each explained with its exam angle and the questions it can lead to. Useful for SSC, Banking and Railway exam preparation.</p>

      <nav className="toc-box" aria-label="Notes in this page">
        <strong>Quick revision: {d}</strong>
        <ol>{list.map((e, k) => <li key={e.title}><a href={`#n${k + 1}`}>{e.title}</a></li>)}</ol>
      </nav>

      {list.map((e, k) => {
        const topic = CA_TOPICS.find((t) => t.slug === e.topic);
        return (
          <article className="card" id={`n${k + 1}`} key={e.title} style={{ marginTop: 16 }}>
            {topic && <Link className="pill" href={`/current-affairs/${topic.slug}`}>{topic.icon} {topic.title}</Link>}
            <h2 style={{ marginTop: 10 }}>{k + 1}. {e.title}</h2>
            <p>{e.summary}</p>
            <p><strong>Exam angle:</strong> {e.examAngle}</p>
            <p style={{ marginBottom: 4 }}><strong>Possible questions</strong></p>
            <ul>{e.possibleQuestions.map((q) => <li key={q}>{q}</li>)}</ul>
            {e.source && <p className="muted" style={{ fontSize: '0.88rem', marginBottom: 0 }}>Official source: <a href={e.source.url} target="_blank" rel="noopener noreferrer">{e.source.label}</a></p>}
          </article>
        );
      })}

      <section className="section">
        <h2>Revise with practice</h2>
        <div className="btn-row">
          <Link className="btn" href="/daily-quiz">Take the daily quiz</Link>
          <Link className="btn ghost" href="/mcq-trap">MCQ trap of the day</Link>
          <Link className="btn ghost" href="/mistake-notebook">Mistake notebook</Link>
        </div>
      </section>

      <nav className="btn-row" aria-label="Other days" style={{ justifyContent: 'space-between', marginTop: 24 }}>
        {older ? <Link className="btn ghost small" href={`/current-affairs/daily/${older}`}>← {formatDate(older, { day: 'numeric', month: 'short', year: 'numeric' })}</Link> : <span />}
        <Link className="btn ghost small" href="/current-affairs/daily">All days</Link>
        {newer ? <Link className="btn ghost small" href={`/current-affairs/daily/${newer}`}>{formatDate(newer, { day: 'numeric', month: 'short', year: 'numeric' })} →</Link> : <span />}
      </nav>

      <FaqList faqs={[
        { q: `Where can I verify the facts in the ${d} news?`, a: 'Each news links to the official website where available. Always confirm dates and figures there before using them in an exam answer.' },
        { q: 'How should I use these news notes?', a: 'Read the summary, learn the exam angle, then answer the possible questions from memory. Use the daily quiz to test yourself.' },
      ]} />
    </div>
  );
}
