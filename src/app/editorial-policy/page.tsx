import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { buildMetadata } from '@/lib/seo';
export const metadata = buildMetadata({ title: 'Editorial Policy: How We Create and Review Content', description: 'How Selection Pro writes, reviews and corrects its practice questions, explanations, guides and current-affairs content.', path: '/editorial-policy' });
export default function Page() {
  return (
    <div className="page narrow prose">
      <Breadcrumbs items={[{ name: 'Editorial policy', path: '/editorial-policy' }]} />
      <h1>Editorial policy</h1>
      <p>Students rely on this site to prepare for exams that matter to them, so accuracy and usefulness come first. This page explains how we work.</p>
      <h2>Practice questions and explanations</h2>
      <p>Every practice question has a single correct answer and an explanation written to teach the method, not just to name the option. Questions are checked for clarity before publishing and options are shuffled so that answer positions cannot be memorised.</p>
      <h2>Guides and articles</h2>
      <p>Guides explain eligibility, syllabus and strategy in plain language. We base facts on official notifications where possible and we tell readers to verify dates and rules on the official website. Articles show their last updated date.</p>
      <h2>Current affairs</h2>
      <p>We do not copy news. Our current-affairs content explains concepts and shows how topics are tested, written in our own words with an exam-focused angle.</p>
      <h2>Corrections</h2>
      <p>If you find a wrong answer, a broken link or outdated information, <Link href="/contact">tell us</Link>. We review reports and correct confirmed errors quickly.</p>
      <h2>Advertising and independence</h2>
      <p>Ads, where shown, are served by third parties and never influence what we publish or recommend. Support from readers helps us keep the content free: see <Link href="/support">support us</Link>.</p>
    </div>
  );
}
