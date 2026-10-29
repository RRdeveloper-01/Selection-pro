import { notFound } from 'next/navigation';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import FaqList from '@/components/FaqList';
import AdSlot from '@/components/AdSlot';
import { CA_TOPICS, getCaTopic } from '@/data/ca-topics';
import { CA_ENTRIES } from '@/data/ca-entries';
import { entriesOn, formatDate, teaser } from '@/lib/daily';
import { buildMetadata } from '@/lib/seo';

export const dynamicParams = false;
export const generateStaticParams = () => CA_TOPICS.map((t) => ({ topic: t.slug }));
export async function generateMetadata({ params }: { params: Promise<{ topic: string }> }) {
  const { topic } = await params;
  const t = getCaTopic(topic);
  return t ? buildMetadata({ title: `${t.title}: Current Affairs Concepts & Practice Questions`, description: t.summary, path: `/current-affairs/${t.slug}` }) : {};
}

export default async function TopicPage({ params }: { params: Promise<{ topic: string }> }) {
  const { topic } = await params;
  const t = getCaTopic(topic);
  if (!t) notFound();
  const entries = CA_ENTRIES.filter((e) => e.topic === t.slug).sort((a, b) => b.date.localeCompare(a.date));
  const others = CA_TOPICS.filter((o) => o.slug !== t.slug);
  return (
    <div className="page narrow">
      <Breadcrumbs items={[{ name: 'Current affairs', path: '/current-affairs' }, { name: t.title, path: `/current-affairs/${t.slug}` }]} />
      <h1>{t.icon} {t.title}</h1>
      <p className="lead">{t.summary}</p>
      <p className="muted">Useful for: {t.exams.join(', ')}.</p>
      <div className="prose">{t.intro.map((p) => <p key={p.slice(0, 20)}>{p}</p>)}</div>

      <section className="section"><h2>Concepts to know</h2>
        <div className="grid wide">{t.concepts.map((c) => <div className="card" key={c.term}><h3>{c.term}</h3><p style={{ margin: 0 }}>{c.def}</p></div>)}</div></section>
      <AdSlot slot={process.env.NEXT_PUBLIC_AD_SLOT_ARTICLE} />

      <section className="section"><h2>How questions are framed</h2>
        {t.samples.map((s, i) => (
          <details className="faq" key={s.q}>
            <summary>Sample {i + 1}: {s.q}</summary>
            <div>
              <ol type="A" style={{ paddingLeft: '1.3em' }}>{s.options.map((o) => <li key={o}>{o}</li>)}</ol>
              <p><strong>Answer:</strong> {String.fromCharCode(65 + s.answer)}. {s.options[s.answer]}</p>
              <p style={{ marginBottom: 0 }}>{s.why}</p>
            </div>
          </details>
        ))}
      </section>

      <section className="section prose"><h2>How to study this topic</h2><ol>{t.steps.map((s) => <li key={s}>{s}</li>)}</ol>
        <p><Link className="btn" href="/daily-quiz">Practise in the daily quiz</Link></p></section>

      {entries.length > 0 && (
        <section className="section"><h2>Recent notes on this topic</h2>
          {entries.map((e) => {
            const n = entriesOn(e.date).indexOf(e) + 1;
            const url = `/current-affairs/daily/${e.date}#n${n}`;
            return (
              <article className="card" key={e.date + e.title} style={{ marginBottom: 12 }}>
                <span className="pill soft">{formatDate(e.date, { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                <h3 style={{ marginTop: 8 }}><Link href={url}>{e.title}</Link></h3>
                <p style={{ marginBottom: 6 }}>{teaser(e.summary)}</p>
                <Link href={url}>Read the full note with exam angle and questions →</Link>
              </article>
            );
          })}
        </section>
      )}

      <FaqList faqs={t.faqs} />
      <section className="section"><h2>More topic guides</h2><div className="btn-row">{others.map((o) => <Link key={o.slug} className="btn ghost small" href={`/current-affairs/${o.slug}`}>{o.title}</Link>)}</div></section>
    </div>
  );
}
