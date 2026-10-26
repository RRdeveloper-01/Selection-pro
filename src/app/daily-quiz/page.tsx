import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import DailyQuiz, { type Pool } from '@/components/DailyQuiz';
import FaqList from '@/components/FaqList';
import JsonLd from '@/components/JsonLd';
import { exams, tests } from '@/lib/content';
import { buildMetadata, quizLd } from '@/lib/seo';
import { CA_TOPICS } from '@/data/ca-topics';

export const metadata = buildMetadata({
  title: 'Daily Quiz: 5 Questions a Day for SSC, Banking, JEE & NEET (Free)',
  description: 'Take a free 5-question daily quiz with explanations for SSC, Banking, NEET, JEE Main and GK. Build a streak, earn points and revise your mistakes.',
  path: '/daily-quiz',
});

export default function DailyQuizPage() {
  const pools: Pool[] = exams
    .filter((e) => e.prefix)
    .map((e) => ({ key: e.slug, label: `${e.name} practice questions`, ids: tests.filter((t) => t.prefix === e.prefix).map((t) => t.id) }));
  return (
    <div className="page narrow">
      <Breadcrumbs items={[{ name: 'Daily quiz', path: '/daily-quiz' }]} />
      <JsonLd data={quizLd('Selection Pro daily quiz', '/daily-quiz', 5)} />
      <h1>Daily quiz: five questions, five minutes</h1>
      <p className="lead">Pick a track, answer five questions and read the explanation after each one. Finish one quiz a day to grow your streak. Wrong answers are saved to your notebook so you see them again.</p>
      <DailyQuiz pools={pools} />
      <section className="section prose">
        <h2>Why a daily five-question habit works</h2>
        <p>Short daily practice beats long occasional sessions because recall improves each time you retrieve something after a gap. Five questions take about five minutes, which makes it easy to do even on a busy day, and the streak makes it hard to skip.</p>
        <p>The &quot;GK &amp; current-affairs basics&quot; track tests the static knowledge that current-affairs questions are built on. To learn how news becomes questions, read <Link href="/current-affairs">current affairs for exams</Link>. Try the harder <Link href="/mcq-trap">MCQ trap of the day</Link> when you want a challenge.</p>
        <h2>Topics in the GK track</h2>
        <p>{CA_TOPICS.map((t) => t.title).join(', ')}.</p>
      </section>
      <FaqList faqs={[
        { q: 'Is the quiz the same for everyone?', a: 'Yes. Each track serves the same five questions on a given date, so friends can compare scores.' },
        { q: 'How does the streak work?', a: 'Your streak grows by one for every calendar day on which you complete any quiz or test. Miss a day and it restarts at one.' },
        { q: 'Where is my progress stored?', a: 'In your own browser on your device. Nothing is sent to a server, so clearing browser data will reset it.' },
      ]} />
    </div>
  );
}
