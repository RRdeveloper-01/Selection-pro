import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { jeeDays } from '@/lib/content';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'JEE Main 100-Day Revision Series: Daily Chapter Tests',
  description: 'A 100-day JEE Main revision plan with one chapter test every day across Physics, Chemistry and Mathematics. Free, with explanations.',
  path: '/revision-series/jee-main',
});

export default function Revision() {
  const live = new Map(jeeDays.map((d) => [d.day, d]));
  return (
    <div className="page">
      <Breadcrumbs items={[{ name: 'JEE Main', path: '/exam/jee-main' }, { name: '100-day revision', path: '/revision-series/jee-main' }]} />
      <h1>JEE Main 100-day revision series</h1>
      <p className="lead">One focused chapter test a day, for 100 days. {jeeDays.length} day{jeeDays.length > 1 ? 's are' : ' is'} live now and new days are added in order. Finish the day&apos;s test, retry the mistakes and move on.</p>
      <div className="notice">Tip: do each day&apos;s test in the morning, then revise the explanations in the evening. Mistakes automatically go to your <Link href="/mistake-notebook">notebook</Link>.</div>
      <div className="rev-grid" style={{ marginTop: 18 }}>
        {Array.from({ length: 100 }, (_, i) => i + 1).map((n) => {
          const d = live.get(n);
          return d
            ? <Link key={n} className="rev-day" href={`/revision-series/jee-main/${n}`}><b>Day {n}</b><small>{d.chapter}</small></Link>
            : <div key={n} className="rev-day locked" aria-disabled><b>Day {n}</b><small>Soon</small></div>;
        })}
      </div>
      <section className="section prose">
        <h2>How the series works</h2>
        <p>Every day covers one chapter from Mathematics, Physics or Chemistry. The tests follow JEE Main-style multiple-choice questions with a written explanation for each answer, so you learn the method and not only the result.</p>
        <p>For the full syllabus checklist use the <Link href="/syllabus-tracker">syllabus tracker</Link>, and for full-length papers see <Link href="/exam/jee-main">JEE Main practice tests</Link>.</p>
      </section>
    </div>
  );
}
