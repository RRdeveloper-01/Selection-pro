import { notFound } from 'next/navigation';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import FaqList from '@/components/FaqList';
import { examsByCategory, testsForExam } from '@/lib/content';
import { EXAM_CATEGORIES } from '@/lib/site';
import { EXAM_EXTRA } from '@/data/exams-extra';
import { buildMetadata } from '@/lib/seo';

export const dynamicParams = false;
export const generateStaticParams = () => Object.keys(EXAM_CATEGORIES).map((category) => ({ category }));
export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const c = EXAM_CATEGORIES[category];
  return c ? buildMetadata({ title: `${c.title}: Tests, PYQs & Strategy`, description: c.blurb, path: `/exams/${category}` }) : {};
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const c = EXAM_CATEGORIES[category];
  if (!c) notFound();
  const list = examsByCategory(category);
  return (
    <div className="page">
      <Breadcrumbs items={[{ name: 'Exams', path: '/exam' }, { name: c.title, path: `/exams/${category}` }]} />
      <h1>{c.title}</h1>
      <p className="lead">{c.blurb}</p>
      <div className="grid wide" style={{ marginTop: 18 }}>
        {list.map((e) => (
          <Link className="link-card" key={e.slug} href={`/exam/${e.slug}`}>
            {e.image && /* eslint-disable-next-line @next/next/no-img-element */ <img src={e.image} alt={`${e.name} exam`} loading="lazy" width={400} height={225} />}
            <h3>{e.name}</h3>
            <p>{EXAM_EXTRA[e.slug]?.pattern ?? e.intro}</p>
            <span className="pill">{testsForExam(e).length ? `${testsForExam(e).length} tests live` : 'Tests coming soon'}</span>
          </Link>
        ))}
      </div>
      <section className="section prose">
        <h2>Preparing for these exams</h2>
        {c.guide.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
        <p>Each exam page has the pattern, marking scheme, syllabus overview, phase-wise plan, practice tests and previous year paper links. Use the <Link href="/daily-quiz">daily quiz</Link> for a daily habit and the <Link href="/mistake-notebook">mistake notebook</Link> to turn errors into marks.</p>
      </section>
      <FaqList faqs={c.faqs} />
    </div>
  );
}
