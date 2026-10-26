import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import TrapQuiz from '@/components/TrapQuiz';
import FaqList from '@/components/FaqList';
import { TRAPS } from '@/data/quiz-bank';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'MCQ Trap of the Day: Questions Where the Obvious Answer Is Wrong',
  description: 'A new tricky MCQ every day with the reason most students slip and the correct reasoning. Maths, reasoning, polity, science, English and banking traps for SSC and bank exams.',
  path: '/mcq-trap',
});

export default function TrapPage() {
  return (
    <div className="page narrow">
      <Breadcrumbs items={[{ name: 'MCQ trap of the day', path: '/mcq-trap' }] } />
      <h1>MCQ trap of the day</h1>
      <p className="lead">One question where the first answer that comes to mind is usually wrong. Answer it, then see exactly where students slip and how to think it through.</p>
      <TrapQuiz />
      <section className="section">
        <h2>Trap library: {TRAPS.length} classic exam traps</h2>
        <p className="muted">Read the trap first, then check yourself on similar questions in the <Link href="/daily-quiz">daily quiz</Link>.</p>
        {TRAPS.map((t) => (
          <details className="faq" key={t.id}>
            <summary>[{t.topicTag}] {t.question}</summary>
            <div>
              <p><strong>Answer:</strong> {t.options[t.correctAnswer]}</p>
              <p><strong>The trap:</strong> {t.trap}</p>
              <p style={{ marginBottom: 0 }}><strong>Reasoning:</strong> {t.explanation}</p>
            </div>
          </details>
        ))}
      </section>
      <FaqList faqs={[
        { q: 'What is an MCQ trap?', a: 'A question designed so that a quick, intuitive answer is wrong. Exams use traps to test careful reading and concept clarity.' },
        { q: 'How can I avoid traps in the exam?', a: 'Read the last line of the question first, check units, and ask what common mistake the option set is inviting before you tick.' },
      ]} />
    </div>
  );
}
