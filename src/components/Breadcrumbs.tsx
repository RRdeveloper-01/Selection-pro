import Link from 'next/link';
import JsonLd from './JsonLd';
import { breadcrumbLd } from '@/lib/seo';

export default function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  const all = [{ name: 'Home', path: '/' }, ...items];
  return (
    <nav className="crumbs" aria-label="Breadcrumb">
      <JsonLd data={breadcrumbLd(all)} />
      <ol>
        {all.map((it, i) => (
          <li key={it.path}>
            {i === all.length - 1 ? <span aria-current="page">{it.name}</span> : <Link href={it.path}>{it.name}</Link>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
