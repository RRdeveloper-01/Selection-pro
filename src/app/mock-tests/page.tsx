import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import FaqList from '@/components/FaqList';
import { chapters, mocks } from '@/lib/content';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Free Chapter-wise Mock Tests: JEE Main, NEET, CUET & Class 12 Boards',
  description: 'Practise chapter-wise mock tests for JEE Main, NEET, CUET and Class 12 boards in English and Hindi. Instant scores, explanations and a mistake notebook.',
  path: '/mock-tests',
});

export default function MockTestsHome() {
  const en = mocks.filter((m) => m.lang === 'en');
  return (
    <div className="page">
      <Breadcrumbs items={[{ name: 'Mock tests', path: '/mock-tests' }]} />
      <h1>Free Chapter-wise Mock Tests</h1>
      <p className="lead">{chapters.length} chapter tests are live today across Physics, Chemistry and Mathematics, with more subjects added regularly. Pick an exam, practise one chapter at a time and revise your mistakes before moving on.</p>
      <div className="grid wide" style={{ marginTop: 18 }}>
        {en.map((m) => (
          <Link key={m.slug} className="link-card" href={m.route}><h3>{m.h1}</h3><p>{m.intro.slice(0, 120)}…</p></Link>
        ))}
        <Link className="link-card" href="/mock-tests/hindi"><h3>Hindi medium mock tests</h3><p>JEE Main, NEET and CUET chapter tests for Hindi-medium students.</p></Link>
      </div>
      <section className="section prose">
        <h2>How chapter-wise practice works</h2>
        <p>Finishing a chapter in class does not mean you can solve exam questions from it. A short test straight after you study finds the gaps while the topic is fresh. Each test here gives instant scoring, the right answer for every question and a record of your wrong answers in the Mistake Notebook.</p>
        <p>A simple routine: study a chapter, take its test the same day, retry the wrong questions, then revisit them after a week. Over a few months this builds both accuracy and speed.</p>
        <p>Looking for full-length papers? See <Link href="/exam">practice tests and PYQs by exam</Link>, or follow the <Link href="/revision-series/jee-main">100-day JEE Main revision series</Link>.</p>
      </section>
      <FaqList faqs={[
        { q: 'Are chapter-wise tests enough to prepare for JEE or NEET?', a: 'They build concept strength. Add full-length practice tests in the last few months so you learn time management.' },
        { q: 'Is the Hindi version available?', a: 'Yes. Open the Hindi medium hub for JEE Main, NEET and CUET chapter tests.' },
      ]} />
    </div>
  );
}
