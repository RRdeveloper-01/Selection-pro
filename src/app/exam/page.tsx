import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import FaqList from '@/components/FaqList';
import { exams, testsForExam, tests } from '@/lib/content';
import { EXAM_CATEGORIES } from '@/lib/site';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'All Exams: Free Practice Tests, Previous Year Papers & Strategy',
  description: 'Choose your exam: SSC CGL, SSC CHSL, RRB NTPC, IBPS PO, SBI Clerk, RBI Grade B, NEET, JEE Main, JEE Advanced, GATE, CUET. Free tests, PYQ links and study plans.',
  path: '/exam',
});

export default function ExamHub() {
  return (
    <div className="page">
      <Breadcrumbs items={[{ name: 'Exams', path: '/exam' }]} />
      <h1>All exams: practice tests, PYQs and strategy</h1>
      <p className="lead">{tests.length} full-length practice tests with explanations are live, along with a preparation plan for each exam below.</p>
      {Object.entries(EXAM_CATEGORIES).map(([cat, c]) => (
        <section className="section" key={cat}>
          <h2><Link href={`/exams/${cat}`} style={{ color: 'inherit', textDecoration: 'none' }}>{c.title}</Link></h2>
          <p className="muted">{c.blurb}</p>
          <div className="grid">
            {exams.filter((e) => e.category === cat).map((e) => {
              const n = testsForExam(e).length;
              return (
                <Link key={e.slug} className="link-card" href={`/exam/${e.slug}`}>
                  {e.image && /* eslint-disable-next-line @next/next/no-img-element */ <img src={e.image} alt={`${e.name} preparation`} loading="lazy" width={320} height={180} />}
                  <h3>{e.name}</h3>
                  <p>{n ? `${n} practice tests` : 'Tests coming soon'} · PYQs · Strategy</p>
                </Link>
              );
            })}
          </div>
        </section>
      ))}
      <section className="section prose">
        <h2>How to choose and use these resources</h2>
        <p>Start by opening the page of your target exam and reading the pattern and marking scheme, because they decide how you should practise. Then attempt one full test in exam conditions to find your starting level.</p>
        <p>After every test, read the explanations, retry the questions you missed and let the <Link href="/mistake-notebook">Mistake Notebook</Link> bring them back at spaced intervals. Pair this with the <Link href="/syllabus-tracker">syllabus tracker</Link> so you always know what is left.</p>
        <p>Download previous year papers from the official websites linked on the exam pages. Solve them under a timer, not as reading material, since the real gain comes from practising the pressure of the actual paper.</p>
      </section>
      <FaqList faqs={[
        { q: 'Are the tests free?', a: 'Yes. All tests, quizzes and tools on Selection Pro are free and need no registration.' },
        { q: 'Do you provide previous year papers?', a: 'We do not host previous year papers. Each exam page points to the official website, which is the best source. The papers belong to the conducting bodies.' },
        { q: 'How often is new content added?', a: 'New tests and chapters are added regularly after they are reviewed. Follow our Telegram channel for announcements.' },
      ]} />
    </div>
  );
}
