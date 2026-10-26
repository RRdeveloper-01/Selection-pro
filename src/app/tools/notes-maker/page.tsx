import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import NotesMaker from '@/components/NotesMaker';
import FaqList from '@/components/FaqList';
import { buildMetadata } from '@/lib/seo';
export const metadata = buildMetadata({ title: 'Free Handwritten-Style Notes Maker: Type Short Notes & Download PDF', description: 'Write short revision notes on a ruled-paper page and download them as a PDF. Free, private and works in your browser.', path: '/tools/notes-maker' });
export default function Page() {
  return (
    <div className="page narrow">
      <Breadcrumbs items={[{ name: 'Tools', path: '/tools/notes-maker' }, { name: 'Notes maker', path: '/tools/notes-maker' }]} />
      <h1>Handwritten-style notes maker</h1>
      <p className="lead">Type your short notes on a ruled page and download them as a PDF for quick revision on your phone or in print.</p>
      <NotesMaker />
      <section className="section prose">
        <h2>Making notes that help you revise</h2>
        <p>Good revision notes are short. Write the formula, the rule, one worked example and the mistake you usually make. Review them with the <Link href="/mistake-notebook">mistake notebook</Link> so that notes and practice reinforce each other.</p>
        <p>Keep one sheet per chapter, and add the page to your <Link href="/syllabus-tracker">syllabus tracker</Link> routine when you finish the topic.</p>
      </section>
      <FaqList faqs={[{ q: 'Is my text uploaded anywhere?', a: 'No. Notes are saved in your browser and the PDF is generated on your device.' }, { q: 'Can I use Hindi?', a: 'Yes, you can type in any language your keyboard supports.' }]} />
    </div>
  );
}
