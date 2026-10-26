import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactForm from '@/components/ContactForm';
import FaqList from '@/components/FaqList';
import { SITE } from '@/lib/site';
import { buildMetadata } from '@/lib/seo';
export const metadata = buildMetadata({ title: 'Contact Us: Suggest an Exam, Report an Error or Ask a Question', description: 'Contact Selection Pro to suggest an exam, report a wrong answer, request content removal or ask for help with our tools.', path: '/contact' });
export default function Page() {
  return (
    <div className="page narrow">
      <Breadcrumbs items={[{ name: 'Contact us', path: '/contact' }]} />
      <h1>Contact us</h1>
      <p className="lead">We read every message. Use this form to suggest an exam or paper you want to see, report a wrong answer or broken link, or ask a question. We usually reply within a few days.</p>
      <ContactForm />
      <section className="section prose">
        <h2>Other ways to reach us</h2>
        <p>Join our <a href={SITE.telegram} target="_blank" rel="noopener noreferrer">Telegram channel</a> for announcements, or watch updates on <a href={SITE.youtube} target="_blank" rel="noopener noreferrer">YouTube</a>. Before writing, you may find answers in the FAQ below or on the <Link href="/about">about page</Link>.</p>
        <h2>What to include when reporting an error</h2>
        <p>Share the test name, the question number and what you think is wrong. Screenshots are helpful. We review reports and fix confirmed errors quickly.</p>
      </section>
      <FaqList faqs={[
        { q: 'How do I request removal of copyrighted content?', a: 'Write to us through this form with the page link and proof of ownership. We will review and act promptly.' },
        { q: 'Can I suggest a new exam?', a: 'Yes. Tell us the exam name and what resources would help. We prioritise exams with many requests.' },
        { q: 'Do you give personal study plans?', a: 'We cannot offer one-to-one guidance, but the syllabus tracker and exam strategy pages are built to help you plan on your own.' },
      ]} />
    </div>
  );
}
