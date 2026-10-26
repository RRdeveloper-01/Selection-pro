import { notFound } from 'next/navigation';
import ArticleView from '@/components/ArticleView';
import { articlesIn, getArticle } from '@/lib/content';
import { buildMetadata } from '@/lib/seo';

export const dynamicParams = false;
export const generateStaticParams = () => articlesIn('scholarship').map((a) => ({ slug: a.slug }));
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = getArticle('scholarship', slug);
  return a ? buildMetadata({ title: a.title, description: a.description, path: '/scholarship/' + a.slug, image: a.image, keywords: a.keywords, type: 'article' }) : {};
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = getArticle('scholarship', slug);
  if (!a) notFound();
  return <ArticleView a={a} />;
}
