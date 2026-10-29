import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import FaqList from '@/components/FaqList';
import { CA_TOPICS } from '@/data/ca-topics';
import { CA_ENTRIES } from '@/data/ca-entries';
import { entriesOn, formatDate, teaser } from '@/lib/daily';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Current Affairs for Competitive Exams: Concepts, Question Patterns & Quiz',
  description: 'Learn how current affairs turn into exam questions. Topic-wise guides for economy, polity, international relations, science, environment, awards and schemes with practice questions.',
  path: '/current-affairs',
});

export default function CurrentAffairsHub() {
  const entries = [...CA_ENTRIES].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 12);
  return (
    <div className="page">
      <Breadcrumbs items={[{ name: 'Current affairs', path: '/current-affairs' }]} />
      <h1>Current affairs for exams</h1>
      <p className="lead">Reading the news is not the same as preparing for a question paper. These guides show the concepts that sit behind the headlines, how questions are framed and how to revise efficiently.</p>
      <div className="btn-row" style={{ margin: '14px 0' }}><Link className="btn" href="/daily-quiz">Take the daily quiz</Link><Link className="btn ghost" href="/mcq-trap">MCQ trap of the day</Link><Link className="btn ghost" href="/current-affairs/daily">Daily archive</Link></div>

      {entries.length > 0 && (
        <section className="section">
          <h2>Latest notes</h2>
          <p className="muted">Each note opens on its own daily page with the full exam angle and questions.</p>
          {entries.map((e) => {
            const n = entriesOn(e.date).indexOf(e) + 1;
            const url = `/current-affairs/daily/${e.date}#n${n}`;
            return (
              <article className="card" key={e.date + e.title} style={{ marginBottom: 12 }}>
                <span className="pill soft">{formatDate(e.date, { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                <span className="pill" style={{ marginLeft: 6 }}>{CA_TOPICS.find((t) => t.slug === e.topic)?.title}</span>
                <h3 style={{ marginTop: 8 }}><Link href={url}>{e.title}</Link></h3>
                <p style={{ marginBottom: 6 }}>{teaser(e.summary)}</p>
                <Link href={url}>Read the full note with exam angle and questions →</Link>
              </article>
            );
          })}
        </section>
      )}

      <section className="section">
        <h2>Topic guides</h2>
        <div className="grid wide">
          {CA_TOPICS.map((t) => (
            <Link key={t.slug} className="link-card" href={`/current-affairs/${t.slug}`}>
              <span className="ico">{t.icon}</span><h3>{t.title}</h3><p>{t.summary}</p><span className="pill soft">{t.exams.slice(0, 3).join(' · ')}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section prose">
        <h2>A better way to study current affairs</h2>
        <p>Most students try to read everything and remember nothing. A better approach has three habits. First, learn the static concept behind each topic so any new fact has a place to attach. Second, turn each news item into a likely question and its answer, in your own words. Third, test yourself daily and revise your wrong answers at spaced intervals.</p>
        <p>Selection Pro supports this directly: the topic guides give you the concepts and sample questions, the <Link href="/daily-quiz">daily quiz</Link> tests recall, and the <Link href="/mistake-notebook">mistake notebook</Link> schedules revision. For dates, figures and the latest developments, always confirm with official sources and a reliable newspaper.</p>
        <h2>What changed on this section</h2>
        <p>We stopped publishing daily news summaries because the same information is available everywhere. This section focuses on what is hard to find elsewhere: how a topic is tested, what to remember and how to practise it.</p>
      </section>
      <FaqList faqs={[
        { q: 'Do you publish daily current affairs?', a: 'This section is concept-first. Dated notes with an exam angle are added in the latest notes list when available.' },
        { q: 'How much time should I give current affairs each day?', a: 'Thirty to forty-five minutes is enough for most exams when combined with daily quiz practice and weekly revision.' },
      ]} />
    </div>
  );
}
