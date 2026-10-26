import { notFound } from 'next/navigation';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import FaqList from '@/components/FaqList';
import RichContent from '@/components/RichContent';
import AdSlot from '@/components/AdSlot';
import { PrepGuide, SimilarTests } from '@/components/ExamPrep';
import JsonLd from '@/components/JsonLd';
import { exams, getExam, testsForExam, mocks, articles } from '@/lib/content';
import { EXAM_EXTRA } from '@/data/exams-extra';
import { MARKING } from '@/lib/quiz';
import { buildMetadata } from '@/lib/seo';
import { abs } from '@/lib/site';

export const dynamicParams = false;
export const generateStaticParams = () => exams.map((e) => ({ slug: e.slug }));
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const e = getExam(slug);
  if (!e) return {};
  return buildMetadata({ title: e.title, description: e.description || e.intro, path: `/exam/${e.slug}`, image: e.image, keywords: [e.name, `${e.name} previous year papers`, `${e.name} mock test`, `${e.name} syllabus`] });
}

export default async function ExamPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const exam = getExam(slug);
  if (!exam) notFound();
  const x = EXAM_EXTRA[exam.slug];
  const list = testsForExam(exam);
  const marking = exam.prefix ? MARKING[exam.prefix] : undefined;
  const pyqLive = exam.pyqs.filter((p) => p.href);
  const relatedMocks = mocks.filter((m) => m.slug.startsWith(exam.slug.replace('-main', '-main')) || (exam.slug === 'cuet' && m.slug.startsWith('cuet')) || (exam.slug === 'neet' && m.slug.startsWith('neet')) || (exam.slug === 'jee-main' && m.slug.startsWith('jee-main')));
  const related = articles.filter((a) => a.section !== 'blog' && (a.title + a.description).toLowerCase().includes(exam.name.split(' ')[0].toLowerCase())).slice(0, 3);
  const others = exams.filter((e) => e.category === exam.category && e.slug !== exam.slug);
  return (
    <div className="page">
      <Breadcrumbs items={[{ name: 'Exams', path: '/exam' }, { name: exam.name, path: `/exam/${exam.slug}` }]} />
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'Course', name: `${exam.name} preparation`, description: exam.description || exam.intro, provider: { '@type': 'Organization', name: 'Selection Pro', url: abs('/') } }} />
      <h1>{exam.h1}</h1>
      <p className="lead">{exam.intro}</p>
      {x && <p>{x.body}</p>}
      <div className="btn-row" style={{ margin: '16px 0' }}>
        <a className="btn small" href="#tests">Practice tests</a><a className="btn ghost small" href="#pyq">Previous year papers</a>
        <a className="btn ghost small" href="#syllabus">Syllabus</a><a className="btn ghost small" href="#strategy">Strategy</a>
        <Link className="btn ghost small" href="/syllabus-tracker">Track syllabus</Link>
      </div>

      {x && (
        <section className="section">
          <h2>{exam.name} at a glance</h2>
          <div className="card table-wrap"><table><tbody>
            <tr><th>Mode</th><td>{x.mode}</td></tr><tr><th>Pattern</th><td>{x.pattern}</td></tr><tr><th>Marking</th><td>{x.marking}</td></tr>
          </tbody></table></div>
          <p className="muted" style={{ fontSize: '0.9rem', marginTop: 8 }}>{x.attemptsNote}</p>
        </section>
      )}

      <section className="section" id="tests">
        <h2>{exam.name} practice tests</h2>
        {list.length ? (
          <>
            <p>Every set has answers with explanations{marking ? ` and uses the real marking scheme (${marking.label})` : ''}. Your wrong answers go to the Mistake Notebook automatically.</p>
            <div className="grid tight">
              {list.map((t) => (
                <div className="test-card" key={t.id}>
                  <h3>{t.title}</h3><span className="meta">{t.count} questions</span>
                  <div className="btn-row"><Link className="btn small" href={`/practice-test/${t.id}`}>Start test</Link><Link className="btn ghost small" href={`/practice-test/${t.id}/paper`}>PDF</Link></div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <SimilarTests exam={exam} />
        )}
      </section>
      <AdSlot slot={process.env.NEXT_PUBLIC_AD_SLOT_EXAM} />

      {relatedMocks.length > 0 && (
        <section className="section"><h2>Chapter-wise mock tests</h2>
          <div className="btn-row">{relatedMocks.map((m) => <Link key={m.slug} className="btn ghost small" href={m.route}>{m.h1}</Link>)}</div></section>
      )}

      <section className="section" id="pyq">
        <h2>{exam.name} previous year papers</h2>
        {pyqLive.length ? (
          <div className="grid wide">
            {pyqLive.map((p) => <a key={p.label} className="link-card" href={p.href as string} target="_blank" rel="noopener noreferrer"><h3>{p.label}</h3><p>Opens the paper collection in Google Drive.</p></a>)}
          </div>
        ) : <div className="empty">Previous year paper links for {exam.name} are being added. Check the official website for the latest papers.</div>}
        <p className="muted" style={{ marginTop: 10, fontSize: '0.9rem' }}>Papers belong to their respective conducting bodies and are shared for educational reference. See our <Link href="/disclaimer">disclaimer</Link>.</p>
      </section>

      {x && (
        <section className="section" id="syllabus">
          <h2>{exam.name} syllabus overview</h2>
          <div className="grid wide">
            {x.syllabus.map((s) => (
              <div className="card" key={s.subject}><h3>{s.subject}</h3><ul style={{ margin: 0, paddingLeft: '1.2em' }}>{s.topics.map((t) => <li key={t}>{t}</li>)}</ul></div>
            ))}
          </div>
        </section>
      )}

      <PrepGuide exam={exam} />

      <section className="section" id="strategy">
        <h2>{exam.name} preparation strategy</h2>
        {exam.strategyHtml ? <RichContent html={exam.strategyHtml} /> : <p>Build a daily routine around concept study, timed practice and revision of mistakes.</p>}
      </section>

      {x && <FaqList faqs={x.faqs} />}

      <section className="section"><h2>Keep going</h2>
        <div className="grid">
          <Link className="link-card" href="/daily-quiz"><span className="ico">🔥</span><h3>Daily quiz</h3><p>Five questions a day and a streak to protect.</p></Link>
          <Link className="link-card" href="/mistake-notebook"><span className="ico">📓</span><h3>Mistake notebook</h3><p>Revise what you got wrong at the right time.</p></Link>
          <Link className="link-card" href="/current-affairs"><span className="ico">📰</span><h3>Current affairs for exams</h3><p>How news turns into questions.</p></Link>
          {x?.guide && <Link className="link-card" href={x.guide.href}><span className="ico">📖</span><h3>{x.guide.label}</h3><p>Detailed guide with eligibility and syllabus.</p></Link>}
          {related.map((a) => <Link key={a.slug} className="link-card" href={`/${a.section}/${a.slug}`}><span className="ico">📄</span><h3>{a.title}</h3></Link>)}
        </div>
      </section>
      {others.length > 0 && <section className="section"><h2>Related exams</h2><div className="btn-row">{others.map((o) => <Link key={o.slug} className="btn ghost small" href={`/exam/${o.slug}`}>{o.name}</Link>)}</div></section>}
    </div>
  );
}
