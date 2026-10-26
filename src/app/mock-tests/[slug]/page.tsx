import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/Breadcrumbs';
import MockIndex from '@/components/MockIndex';
import FaqList from '@/components/FaqList';
import { getMock, mocks } from '@/lib/content';
import { buildMetadata } from '@/lib/seo';

export const dynamicParams = false;
export const generateStaticParams = () => mocks.map((m) => ({ slug: m.slug }));
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const m = getMock(slug);
  return m ? buildMetadata({ title: m.title, description: m.intro || `${m.h1}: free chapter-wise tests with instant results.`, path: m.route }) : {};
}

export default async function MockPageRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const m = getMock(slug);
  if (!m) notFound();
  return (
    <div className="page">
      <Breadcrumbs items={[{ name: 'Mock tests', path: '/mock-tests' }, { name: m.h1, path: m.route }]} />
      <h1>{m.h1}</h1>
      <MockIndex mock={m} />
      <FaqList faqs={[
        { q: 'Are these mock tests free?', a: 'Yes. Every test listed here is free, with no sign-up needed.' },
        { q: 'Why are some chapters marked coming soon?', a: 'We publish a chapter only after its questions and answers are checked. New chapters are added regularly.' },
        { q: 'What happens to my wrong answers?', a: 'They are saved on your device in the Mistake Notebook, which schedules them for revision after 1, 3, 7, 14 and 30 days.' },
      ]} />
    </div>
  );
}
