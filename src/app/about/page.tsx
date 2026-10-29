import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RichContent from '@/components/RichContent';
import { pageHtml } from '@/lib/pages';
import { buildMetadata } from '@/lib/seo';
import { tests, chapters, exams } from '@/lib/content';
export const metadata = buildMetadata({ title: 'About Selection Pro: Free Exam Preparation for Indian Students', description: 'Who we are, why we built Selection Pro and how we create free practice tests, quizzes and study tools for competitive and entrance exams.', path: '/about' });
export default function Page() {
  return (
    <div className="page narrow">
      <Breadcrumbs items={[{ name: 'About us', path: '/about' }]} />
      <h1>About Selection Pro</h1>
      <RichContent html={pageHtml('about')} />
      <section className="section prose">
        <h2>What you can use today</h2>
        <ul>
          <li>{tests.length} full-length practice tests with explanations across {exams.filter((e) => e.prefix).length} exams.</li>
          <li>{chapters.length} chapter-wise tests in English and Hindi medium.</li>
          <li>A daily quiz, an MCQ trap of the day, a mistake notebook and a syllabus tracker.</li>
          <li>Exam guides, preparation guides, scholarship information and guidance on using previous year papers.</li>
        </ul>
        <h2>How we work</h2>
        <p>We review questions and explanations before publishing, fix errors when readers report them and keep tools free of sign-up. Read the full <Link href="/editorial-policy">editorial policy</Link>. To report a mistake or suggest an exam, <Link href="/contact">contact us</Link>.</p>
      </section>
    </div>
  );
}
