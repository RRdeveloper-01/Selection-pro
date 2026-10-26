import Link from 'next/link';
import HomeToday from '@/components/HomeToday';
import FaqList from '@/components/FaqList';
import AdSlot from '@/components/AdSlot';
import { exams, tests, chapters, articles, testsForExam } from '@/lib/content';
import { CA_TOPICS } from '@/data/ca-topics';
import { buildMetadata } from '@/lib/seo';
import { SITE } from '@/lib/site';

export const metadata = buildMetadata({
  title: 'Selection Pro: Free Mock Tests, Daily Quiz & PYQs for SSC, Banking, JEE, NEET',
  description: SITE.description,
  path: '/',
});

const tools = [
  { href: '/daily-quiz', icon: '🔥', t: 'Daily quiz', d: 'Five questions a day. Build a streak.' },
  { href: '/mcq-trap', icon: '🪤', t: 'MCQ trap of the day', d: 'Where the obvious answer is wrong.' },
  { href: '/mistake-notebook', icon: '📓', t: 'Mistake notebook', d: 'Wrong answers return on a revision schedule.' },
  { href: '/syllabus-tracker', icon: '✅', t: 'Syllabus tracker', d: 'See topics left and the pace you need.' },
];

export default function Home() {
  const latest = articles.filter((a) => a.section === 'blog' || a.section === 'guides').slice(0, 3);
  return (
    <div className="page">
      <section className="hero">
        <div>
          <h1>Practise a little every day. Fix what you miss.</h1>
          <p>Free practice tests with explanations, chapter-wise mocks, a daily quiz and a notebook that brings your mistakes back at the right time. Built for SSC, Banking, Railway, JEE, NEET, CUET and GATE.</p>
          <div className="btn-row"><Link className="btn" href="/exam">Choose your exam</Link><Link className="btn ghost" href="/mock-tests">Chapter-wise tests</Link></div>
        </div>
        <HomeToday />
      </section>

      <section className="section">
        <h2>Build your daily habit</h2>
        <div className="grid">{tools.map((x) => <Link key={x.href} href={x.href} className="link-card"><span className="ico">{x.icon}</span><h3>{x.t}</h3><p>{x.d}</p></Link>)}</div>
      </section>

      <section className="section">
        <h2>Practice tests by exam</h2>
        <div className="grid">
          {exams.map((e) => (
            <Link key={e.slug} href={`/exam/${e.slug}`} className="link-card">
              {e.image && /* eslint-disable-next-line @next/next/no-img-element */ <img src={e.image} alt={`${e.name} preparation`} width={320} height={180} loading="lazy" />}
              <h3>{e.name}</h3><p>{testsForExam(e).length ? `${testsForExam(e).length} full tests` : 'Strategy and PYQs'}</p>
            </Link>
          ))}
        </div>
      </section>
      <AdSlot slot={process.env.NEXT_PUBLIC_AD_SLOT_HOME} />

      <section className="section">
        <h2>Current affairs, the exam way</h2>
        <p className="muted">News changes daily; what exams test does not. Learn the concept behind each topic and how questions are framed.</p>
        <div className="grid">{CA_TOPICS.map((t) => <Link key={t.slug} href={`/current-affairs/${t.slug}`} className="link-card"><span className="ico">{t.icon}</span><h3>{t.title}</h3><p>{t.summary}</p></Link>)}</div>
      </section>

      <section className="section">
        <h2>Study guides and tips</h2>
        <div className="grid wide">
          {latest.map((a) => <Link key={a.slug} href={`/${a.section}/${a.slug}`} className="link-card">{a.image && /* eslint-disable-next-line @next/next/no-img-element */ <img src={a.image} alt="" loading="lazy" width={400} height={225} />}<h3>{a.title}</h3><p>{a.description.slice(0, 110)}…</p></Link>)}
        </div>
      </section>

      <section className="section prose">
        <h2>Why students use Selection Pro</h2>
        <p>Most exam websites give you a list of papers and stop there. Selection Pro is designed around what happens after a test: every question has an explanation, your score is broken down by topic and each wrong answer is saved so you revise it again before you forget it. Today there are {tests.length} full-length practice tests and {chapters.length} chapter-wise tests, and new ones are added after review.</p>
        <p>Everything is free and works without an account. Your streak, notebook and syllabus progress live in your own browser, so your data stays private. Start with the <Link href="/exam">exam hub</Link>, take the <Link href="/daily-quiz">daily quiz</Link> and let the platform tell you what to revise next.</p>
      </section>

      <FaqList faqs={[
        { q: 'Are all tests on Selection Pro free?', a: 'Yes. All practice tests, chapter tests, quizzes and tools are free and need no sign-up.' },
        { q: 'Which exams are covered?', a: 'SSC CGL, SSC CHSL, RRB NTPC, IBPS PO, SBI Clerk, RBI Grade B, NEET, JIPMER, JEE Main, JEE Advanced, GATE and CUET, with more added over time.' },
        { q: 'Where do you get previous year papers?', a: 'We link to paper collections where available. The papers belong to the conducting bodies. Please use the official websites for the latest versions.' },
        { q: 'Do I need to create an account?', a: 'No. Progress is stored on your device in your browser.' },
      ]} />
    </div>
  );
}
