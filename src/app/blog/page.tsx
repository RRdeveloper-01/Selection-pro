import Link from 'next/link';
import SectionIndex from '@/components/SectionIndex';
import { buildMetadata } from '@/lib/seo';
export const metadata = buildMetadata({ title: 'Study Blog: Time Management, Mock Test Tips & Board Exam Strategy', description: 'Practical study advice for exam aspirants: timetables that work, mock test mistakes to avoid and board exam preparation strategy.', path: '/blog' });
export default function Page() {
  return <SectionIndex section="blog" title="Study blog" intro="Practical, tested advice on how to study, how to use mock tests and how to manage your time before exams."
    more={<><h2>Put the advice to work</h2><p>Reading about study methods only helps if you apply them. Try the <Link href="/daily-quiz">daily quiz</Link> to build the habit, review mistakes in the <Link href="/mistake-notebook">notebook</Link> and plan your syllabus with the <Link href="/syllabus-tracker">tracker</Link>.</p></>} />;
}
