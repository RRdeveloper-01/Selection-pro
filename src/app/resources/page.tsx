import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { buildMetadata } from '@/lib/seo';
export const metadata = buildMetadata({ title: 'Official Exam Resources: NCERT, NTA, SSC, IBPS, RBI & Scholarship Portals', description: 'A checked list of official websites every aspirant should bookmark for notifications, syllabus, admit cards and results.', path: '/resources' });

const groups = [
  { t: 'Study material', l: [['NCERT textbooks', 'https://ncert.nic.in', 'Free textbooks for Classes 1 to 12. The base for NEET, CUET and boards.']] },
  { t: 'Entrance exams', l: [['National Testing Agency (NTA)', 'https://nta.ac.in', 'Notices for JEE Main, NEET UG and CUET UG.'], ['JIPMER', 'https://jipmer.edu.in', 'Admission information for JIPMER.']] },
  { t: 'Government jobs', l: [['Staff Selection Commission', 'https://ssc.gov.in', 'Official notices for SSC CGL, CHSL and other exams.'], ['Indian Railways', 'https://indianrailways.gov.in', 'Railway recruitment information.'], ['UPSC', 'https://upsc.gov.in', 'Civil services and other UPSC examinations.']] },
  { t: 'Banking', l: [['IBPS', 'https://ibps.in', 'Notifications for IBPS PO, Clerk and others.'], ['Reserve Bank of India', 'https://rbi.org.in', 'RBI Grade B notices, policy statements and publications.']] },
  { t: 'Scholarships', l: [['National Scholarship Portal', 'https://scholarships.gov.in', 'Apply for central and state scholarships.']] },
];
export default function Page() {
  return (
    <div className="page">
      <Breadcrumbs items={[{ name: 'Official resources', path: '/resources' }]} />
      <h1>Official resources for aspirants</h1>
      <p className="lead">Dates, eligibility and syllabus are always final on the official website. Bookmark these and check them before you apply.</p>
      {groups.map((g) => (
        <section className="section" key={g.t}><h2>{g.t}</h2>
          <div className="grid wide">{g.l.map(([n, u, d]) => <a key={u} className="link-card" href={u} target="_blank" rel="noopener noreferrer"><h3>{n}</h3><p>{d}</p></a>)}</div></section>
      ))}
      <section className="section prose"><h2>Our own tools</h2><p>Use the <Link href="/syllabus-tracker">syllabus tracker</Link> to plan, the <Link href="/tools/notes-maker">notes maker</Link> to make revision sheets and the <Link href="/mistake-notebook">mistake notebook</Link> to revise.</p></section>
    </div>
  );
}
