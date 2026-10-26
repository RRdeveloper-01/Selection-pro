import Breadcrumbs from '@/components/Breadcrumbs';
import MistakeNotebook from '@/components/MistakeNotebook';
import FaqList from '@/components/FaqList';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Mistake Notebook: Spaced Revision of Your Wrong Answers',
  description: 'Every wrong answer from your tests is saved and scheduled for revision after 1, 3, 7, 14 and 30 days. A free spaced-repetition notebook for exam aspirants.',
  path: '/mistake-notebook',
});

export default function Page() {
  return (
    <div className="page narrow">
      <Breadcrumbs items={[{ name: 'Mistake notebook', path: '/mistake-notebook' }]} />
      <h1>Mistake notebook</h1>
      <p className="lead">Your wrong answers come back at the right time. Answer a card correctly and it moves to a later box; miss it and it returns tomorrow. Questions you get right five times are marked mastered.</p>
      <MistakeNotebook />
      <section className="section prose">
        <h2>How the revision schedule works</h2>
        <p>The notebook uses a Leitner-style system with six boxes. New mistakes start in box one and are due immediately. A correct answer moves a question to the next box, which waits longer before the next review: one day, three days, a week, two weeks and a month. A wrong answer sends it back to the start.</p>
        <p>This spacing is based on how memory works: reviewing just as you are about to forget strengthens recall far more than rereading the same page repeatedly.</p>
        <h2>Your data stays with you</h2>
        <p>Everything is stored in your own browser. There is no account and nothing is uploaded. Use the same browser to keep your history, because clearing site data deletes the notebook.</p>
      </section>
      <FaqList faqs={[
        { q: 'Which questions are saved?', a: 'Any question you answered incorrectly in a practice test, chapter test, revision day, daily quiz or MCQ trap. Skipped questions are not saved.' },
        { q: 'Can I use the notebook on my phone and laptop?', a: 'Data is local to each browser, so a phone and a laptop keep separate notebooks.' },
      ]} />
    </div>
  );
}
