import Link from 'next/link';
import SectionIndex from '@/components/SectionIndex';
import { buildMetadata } from '@/lib/seo';
export const metadata = buildMetadata({ title: 'Scholarships 2026-27: NSP, PM-USP, AICTE, Reliance & State Scholarships', description: 'Eligibility, documents, amount and how to apply for major government and private scholarships for Indian students.', path: '/scholarship' });
export default function Page() {
  return <SectionIndex section="scholarship" title="Scholarships for Indian students" intro="Eligibility, required documents, amounts and application steps for major government and private scholarships. Always confirm dates on the official portal."
    more={<><h2>Before you apply</h2><p>Keep your Aadhaar-linked mobile number, bank passbook, income and caste certificates (if applicable) and previous marksheet ready. Deadlines and amounts change every year, so verify them on the official portal such as <a href="https://scholarships.gov.in" target="_blank" rel="noopener noreferrer">scholarships.gov.in</a> before applying.</p><p>Preparing for entrance exams as well? Visit the <Link href="/exam">exam hub</Link>.</p></>} />;
}
