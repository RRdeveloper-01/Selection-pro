import Link from 'next/link';
import type { MockPage } from '@/lib/types';
import { mockNoteFor } from '@/data/mock-notes';

export default function MockIndex({ mock }: { mock: MockPage }) {
  const note = mockNoteFor(mock.slug);
  // only chapters that have a test are shown; groups without any test are hidden
  const groups = mock.groups
    .map((g) => ({ ...g, chapters: g.chapters.filter((c) => c.slug) }))
    .filter((g) => g.chapters.length > 0);
  const live = groups.reduce((n, g) => n + g.chapters.length, 0);
  return (
    <>
      <p className="lead">{mock.intro}</p>
      <div className="stat-row" style={{ margin: '14px 0' }}>
        <div className="stat"><b>{live}</b><span>Chapter tests</span></div>
        <div className="stat"><b>{groups.length}</b><span>Subject groups</span></div>
      </div>
      {mock.instructions.length > 0 && (
        <section className="card"><h2>Instructions</h2><ul>{mock.instructions.map((i) => <li key={i}>{i}</li>)}</ul></section>
      )}
      {groups.map((g) => (
        <section className="section" key={g.heading}>
          <h2>{g.heading}</h2>
          <div className="chapter-list">
            {g.chapters.map((c) => (
              <Link className="chapter" key={c.title} href={`/chapter-test/${c.slug}`}>
                <span>{c.title}</span><small>{c.note ? `Start (${c.note})` : 'Start'}</small>
              </Link>
            ))}
          </div>
        </section>
      ))}
      {note && (
        <section className="section prose">
          <h2>{note.title}</h2>
          {note.paras.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
          <h3>Quick tips</h3>
          <ul>{note.tips.map((t) => <li key={t}>{t}</li>)}</ul>
        </section>
      )}
    </>
  );
}
