import Breadcrumbs from '@/components/Breadcrumbs';
import SyllabusTracker from '@/components/SyllabusTracker';
import FaqList from '@/components/FaqList';
import { exams } from '@/lib/content';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Syllabus Tracker & Exam Countdown for SSC, Banking, JEE, NEET, CUET',
  description: 'Tick off topics as you finish them, see how much syllabus is left and how many topics per week you need to finish before your exam date. Free and private.',
  path: '/syllabus-tracker',
});

export default function Page() {
  return (
    <div className="page narrow">
      <Breadcrumbs items={[{ name: 'Syllabus tracker', path: '/syllabus-tracker' }]} />
      <h1>Syllabus tracker and exam countdown</h1>
      <p className="lead">Choose your exam, tick topics as you complete them and add your exam date. The tracker shows how many topics remain and the weekly pace you need.</p>
      <SyllabusTracker options={exams.map((e) => ({ slug: e.slug, name: e.name }))} />
      <section className="section prose">
        <h2>Using the tracker well</h2>
        <p>Mark a topic done only when you have studied it and solved questions on it, not when you have merely read it. Revisit completed topics through the <a href="/mistake-notebook">mistake notebook</a> so they stay fresh.</p>
        <p>The topic lists are a study checklist based on commonly published syllabi. Exam syllabi change, so always compare with the official notification for your exam year.</p>
      </section>
      <FaqList faqs={[{ q: 'Is my progress saved?', a: 'Yes, in your browser on this device. It does not need an account.' }, { q: 'How is topics per week calculated?', a: 'Topics left divided by the number of weeks remaining until the exam date you set.' }]} />
    </div>
  );
}
