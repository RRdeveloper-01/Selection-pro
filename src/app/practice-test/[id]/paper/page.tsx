import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/Breadcrumbs';
import MathJax from '@/components/MathJax';
import PrintButton from '@/components/PrintButton';
import { getTest, tests } from '@/lib/content';
import { loadTest } from '@/lib/server-data';
import { buildMetadata } from '@/lib/seo';

export const dynamicParams = false;
export const generateStaticParams = () => tests.map((t) => ({ id: t.id }));
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const t = getTest(id);
  return t ? buildMetadata({ title: `${t.subject} ${t.title} Question Paper with Answer Key (Print / PDF)`, description: `Printable question paper and answer key for ${t.subject} ${t.title}. Save it as PDF from your browser.`, path: `/practice-test/${t.id}/paper` }) : {};
}

export default async function PaperPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const meta = getTest(id);
  const data = loadTest(id);
  if (!meta || !data) notFound();
  return (
    <div className="page narrow">
      <div className="no-print"><Breadcrumbs items={[{ name: meta.title, path: `/practice-test/${meta.id}` }, { name: 'Printable paper', path: `/practice-test/${meta.id}/paper` }]} /></div>
      <h1>{meta.subject}: {meta.title}</h1>
      <p className="muted">Question paper with answer key. Selection Pro</p>
      <PrintButton />
      <MathJax trigger={id} />
      {data.questions.map((q, i) => (
        <div className="paper-q card" key={q.id}>
          <div><b>Q{i + 1}.</b> <span dangerouslySetInnerHTML={{ __html: q.question }} /></div>
          {q.imageUrl && /* eslint-disable-next-line @next/next/no-img-element */ <img src={q.imageUrl} alt={`Diagram for question ${i + 1}`} loading="lazy" />}
          <ol type="A" style={{ margin: '8px 0' }}>{q.options.map((o, k) => <li key={k} dangerouslySetInnerHTML={{ __html: o }} />)}</ol>
          <p className="verdict-right" style={{ margin: 0 }}>Answer: ({String.fromCharCode(65 + q.correctAnswer)}) <span dangerouslySetInnerHTML={{ __html: q.options[q.correctAnswer] }} /></p>
          {q.explanation && <p className="muted" style={{ margin: '6px 0 0' }} dangerouslySetInnerHTML={{ __html: q.explanation }} />}
        </div>
      ))}
    </div>
  );
}
