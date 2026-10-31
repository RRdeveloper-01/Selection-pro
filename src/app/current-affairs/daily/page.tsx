import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { CA_ENTRIES } from '@/data/ca-entries';
import { dailyDates, entriesOn, formatDate } from '@/lib/daily';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Daily Current Affairs Archive: Notes with Exam Angle and Questions',
  description: 'Browse daily current affairs notes by date. Each day has exam-focused notes with possible questions for SSC, Banking and Railway exams.',
  path: '/current-affairs/daily',
});

export default function DailyArchive() {
  const dates = dailyDates();
  const months = Array.from(new Set(dates.map((d) => d.slice(0, 7))));
  return (
    <div className="page narrow">
      <Breadcrumbs items={[{ name: 'Current affairs', path: '/current-affairs' }, { name: 'Daily', path: '/current-affairs/daily' }]} />
      <h1>Daily current affairs</h1>
      <p className="lead">One page for every day, with exam-focused notes and the questions they can lead to. {CA_ENTRIES.length} notes so far.</p>
      {!dates.length && <div className="empty">No daily pages have been published yet.</div>}
      {months.map((m) => (
        <section className="section" key={m}>
          <h2>{formatDate(m + '-01', { month: 'long', year: 'numeric' })}</h2>
          <div className="grid wide">
            {dates.filter((d) => d.startsWith(m)).map((d) => (
              <Link key={d} className="link-card" href={`/current-affairs/daily/${d}`}>
                <h3>{formatDate(d)}</h3><p>{entriesOn(d).length} notes: {entriesOn(d).slice(0, 2).map((e) => e.title).join(', ')}…</p>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
