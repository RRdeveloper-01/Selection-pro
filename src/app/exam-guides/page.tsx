import Link from 'next/link';
import SectionIndex from '@/components/SectionIndex';
import { buildMetadata } from '@/lib/seo';
export const metadata = buildMetadata({ title: 'Exam Guides: UPSC CSE, SSC CGL Eligibility, Syllabus & Pattern', description: 'Complete guides to UPSC Civil Services and SSC CGL with eligibility, exam pattern, syllabus and preparation approach.', path: '/exam-guides' });
export default function Page() {
  return <SectionIndex section="exam-guides" title="Exam guides" intro="Detailed, structured guides to major government exams: who can apply, how selection works, what to study and how to plan."
    more={<><h2>Related resources</h2><p>Practise for SSC with the <Link href="/exam/ssc-cgl">SSC CGL tests</Link>, and see the <Link href="/guides/banking-guide">banking exams guide</Link> and the <Link href="/guides/govt-exams-after-12th">government exams after 12th guide</Link>.</p></>} />;
}
