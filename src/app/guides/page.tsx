import Link from 'next/link';
import SectionIndex from '@/components/SectionIndex';
import { buildMetadata } from '@/lib/seo';
export const metadata = buildMetadata({ title: 'Exam Preparation Guides: Banking, Government Exams After 12th & More', description: 'In-depth preparation guides covering syllabus, eligibility and strategy for banking and government exams.', path: '/guides' });
export default function Page() {
  return <SectionIndex section="guides" title="Preparation guides" intro="Long-form guides covering eligibility, syllabus, selection process and a realistic plan for popular exams."
    more={<><h2>Where to go next</h2><p>After reading a guide, check the matching <Link href="/exam">exam page</Link> for practice tests and previous year paper links, and the <Link href="/exam-guides">exam guide hub</Link> for UPSC and SSC CGL details.</p></>} />;
}
