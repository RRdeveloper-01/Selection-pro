import Breadcrumbs from '@/components/Breadcrumbs';
import DashboardView from '@/components/DashboardView';
import { exams, testsForExam } from '@/lib/content';
import { EXAM_EXTRA } from '@/data/exams-extra';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'My Dashboard: Streak, Accuracy, Revision & Syllabus Progress',
  description: 'Your personal Selection Pro dashboard: daily streak, accuracy, mistakes due for revision, syllabus progress and shortcuts for your chosen exam.',
  path: '/dashboard', noindex: true,
});

export default function Page() {
  return (
    <div className="page narrow">
      <Breadcrumbs items={[{ name: 'My dashboard', path: '/dashboard' }]} />
      <h1>My dashboard</h1>
      <p className="lead">Pick your exam and see everything that matters today in one place. All data stays on this device.</p>
      <DashboardView options={exams.map((e) => ({ slug: e.slug, name: e.name, tests: testsForExam(e).length, guide: EXAM_EXTRA[e.slug]?.guide?.href }))} />
    </div>
  );
}
