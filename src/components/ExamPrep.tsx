import Link from 'next/link';
import { EXAM_PREP } from '@/data/exam-prep';
import { exams, testsForExam } from '@/lib/content';
import type { Exam } from '@/lib/types';

export function PrepGuide({ exam }: { exam: Exam }) {
  const p = EXAM_PREP[exam.slug];
  if (!p) return null;
  return (
    <>
      <section className="section" id="plan">
        <h2>How to prepare for {exam.name}: a phase-wise plan</h2>
        <div className="grid wide">
          {p.plan.map((x) => (
            <div className="card" key={x.phase}><span className="pill soft">{x.weeks}</span><h3 style={{ marginTop: 8 }}>{x.phase}</h3><p style={{ margin: 0 }}>{x.focus}</p></div>
          ))}
        </div>
      </section>
      <section className="section">
        <h2>Subject-wise tips</h2>
        <div className="grid wide">
          {p.tips.map((t) => (
            <div className="card" key={t.subject}><h3>{t.subject}</h3><ul style={{ margin: 0, paddingLeft: '1.2em' }}>{t.points.map((pt) => <li key={pt}>{pt}</li>)}</ul></div>
          ))}
        </div>
      </section>
      <section className="section">
        <h2>Common mistakes to avoid</h2>
        <ul>{p.mistakes.map((m) => <li key={m}>{m}</li>)}</ul>
      </section>
      <section className="section">
        <h2>How to use Selection Pro for {exam.name}</h2>
        <p>{p.usage}</p>
      </section>
    </>
  );
}

export function SimilarTests({ exam }: { exam: Exam }) {
  const p = EXAM_PREP[exam.slug];
  const sim = p?.similar && exams.find((e) => e.slug === p.similar!.slug);
  const n = sim ? testsForExam(sim).length : 0;
  return (
    <div className="card">
      <p style={{ marginTop: 0 }}>Full-length {exam.name} tests are being prepared and will appear here once they are reviewed. You can start practising right now:</p>
      <div className="btn-row">
        {sim && n > 0 && <Link className="btn small" href={`/exam/${sim.slug}#tests`}>{sim.name} tests ({n})</Link>}
        <Link className="btn ghost small" href="/daily-quiz">Daily quiz</Link>
        <Link className="btn ghost small" href="/mock-tests">Chapter-wise tests</Link>
      </div>
      {p?.similar && <p className="muted" style={{ marginBottom: 0, marginTop: 10, fontSize: '0.92rem' }}>{p.similar.why}</p>}
    </div>
  );
}
