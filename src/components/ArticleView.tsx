import Link from 'next/link';
import Breadcrumbs from './Breadcrumbs';
import JsonLd from './JsonLd';
import RichContent from './RichContent';
import AdSlot from './AdSlot';
import { articleHtml, articles, exams } from '@/lib/content';
import { dropOldToc, extractToc, slugifyHeading } from '@/lib/html';
import { articleLd } from '@/lib/seo';
import type { ArticleMeta } from '@/lib/types';

export const SECTION_LABEL: Record<ArticleMeta['section'], string> = {
  blog: 'Study blog', guides: 'Preparation guides', scholarship: 'Scholarships', 'exam-guides': 'Exam guides',
};

export default function ArticleView({ a }: { a: ArticleMeta }) {
  const html = slugifyHeading(dropOldToc(articleHtml(a)));
  const toc = extractToc(html);
  const path = `/${a.section}/${a.slug}`;
  const related = articles.filter((x) => x.slug !== a.slug && (x.section === a.section || x.section === 'guides')).slice(0, 3);
  const keyword = `${a.title} ${a.keywords}`.toLowerCase();
  const exam = exams.filter((e) => keyword.includes(e.name.split(' ')[0].toLowerCase())).slice(0, 3);
  return (
    <div className="page narrow">
      <Breadcrumbs items={[{ name: SECTION_LABEL[a.section], path: `/${a.section}` }, { name: a.title, path }]} />
      <JsonLd data={articleLd({ title: a.h1, description: a.description, path, image: a.image })} />
      <h1>{a.h1}</h1>
      <div className="article-meta">
        {a.updated && <span>📅 Updated {a.updated}</span>}
        <span>⏱️ {Math.max(2, Math.round(a.words / 200))} min read</span>
      </div>
      {a.description && <p className="lead">{a.description}</p>}
      {a.image && /* eslint-disable-next-line @next/next/no-img-element */ <img className="hero-img" src={a.image} alt={a.h1} width={960} height={420} />}
      {toc.length > 2 && (
        <nav className="toc-box" aria-label="Table of contents">
          <strong>In this article</strong>
          <ol>{toc.map((t) => <li key={t.id}><a href={`#${t.id}`}>{t.text}</a></li>)}</ol>
        </nav>
      )}
      <RichContent html={html} />
      <AdSlot slot={process.env.NEXT_PUBLIC_AD_SLOT_ARTICLE} />
      <section className="section">
        <h2>Practise what you learned</h2>
        <div className="btn-row">
          <Link className="btn" href="/daily-quiz">Daily quiz</Link>
          <Link className="btn ghost" href="/syllabus-tracker">Syllabus tracker</Link>
          {exam.map((e) => <Link key={e.slug} className="btn ghost" href={`/exam/${e.slug}`}>{e.name} tests</Link>)}
        </div>
      </section>
      {related.length > 0 && (
        <section className="section"><h2>Keep reading</h2>
          <div className="grid wide">{related.map((r) => <Link key={r.slug} className="link-card" href={`/${r.section}/${r.slug}`}><h3>{r.title}</h3><p>{r.description.slice(0, 110)}…</p></Link>)}</div></section>
      )}
    </div>
  );
}
