import Link from 'next/link';
import Breadcrumbs from './Breadcrumbs';
import { articlesIn } from '@/lib/content';
import type { ArticleMeta } from '@/lib/types';
import { SECTION_LABEL } from './ArticleView';

export default function SectionIndex({ section, title, intro, more }: { section: ArticleMeta['section']; title: string; intro: string; more: React.ReactNode }) {
  const list = articlesIn(section);
  return (
    <div className="page">
      <Breadcrumbs items={[{ name: SECTION_LABEL[section], path: `/${section}` }]} />
      <h1>{title}</h1>
      <p className="lead">{intro}</p>
      <div className="grid wide" style={{ marginTop: 18 }}>
        {list.map((a) => (
          <Link key={a.slug} className="link-card" href={`/${section}/${a.slug}`}>
            {a.image && /* eslint-disable-next-line @next/next/no-img-element */ <img src={a.image} alt="" loading="lazy" width={400} height={225} />}
            <h3>{a.title}</h3><p>{a.description.slice(0, 140)}{a.description.length > 140 ? '…' : ''}</p>
            <span className="pill soft">{Math.max(2, Math.round(a.words / 200))} min read{a.updated ? ` · ${a.updated}` : ''}</span>
          </Link>
        ))}
      </div>
      <section className="section prose">{more}</section>
    </div>
  );
}
