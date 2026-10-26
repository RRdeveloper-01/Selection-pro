import type { Metadata } from 'next';
import { SITE, abs } from './site';

type Opts = {
  title: string;
  description: string;
  path: string;
  keywords?: string | string[];
  image?: string | null;
  noindex?: boolean;
  type?: 'website' | 'article';
};

export function buildMetadata(o: Opts): Metadata {
  const url = abs(o.path);
  const image = o.image ? (o.image.startsWith('http') ? o.image : abs(o.image)) : abs('/icons/icon-512.png');
  const desc = o.description.length > 160 ? o.description.slice(0, 157).trimEnd() + '...' : o.description;
  return {
    title: o.title,
    description: desc,
    keywords: o.keywords,
    alternates: { canonical: url },
    robots: o.noindex ? { index: false, follow: false } : { index: true, follow: true, 'max-image-preview': 'large' },
    openGraph: { type: o.type ?? 'website', url, title: o.title, description: desc, siteName: SITE.name, images: [{ url: image }], locale: 'en_IN' },
    twitter: { card: 'summary_large_image', title: o.title, description: desc, images: [image] },
  };
}

export const breadcrumbLd = (items: { name: string; path: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: abs(it.path) })),
});

export const faqLd = (faqs: { q: string; a: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
});

export const articleLd = (a: { title: string; description: string; path: string; image?: string | null; updated?: string }) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: a.title,
  description: a.description,
  mainEntityOfPage: abs(a.path),
  image: a.image ? abs(a.image) : abs('/icons/icon-512.png'),
  dateModified: a.updated || undefined,
  author: { '@type': 'Organization', name: SITE.name, url: SITE.url },
  publisher: { '@type': 'Organization', name: SITE.name, logo: { '@type': 'ImageObject', url: abs('/icons/icon-512.png') } },
});

export const quizLd = (name: string, path: string, count: number) => ({
  '@context': 'https://schema.org',
  '@type': 'Quiz',
  name,
  url: abs(path),
  about: { '@type': 'Thing', name: 'Competitive exam preparation' },
  educationalLevel: 'Competitive exam',
  numberOfQuestions: count,
  provider: { '@type': 'Organization', name: SITE.name, url: SITE.url },
});
