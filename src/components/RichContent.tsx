import { slugifyHeading } from '@/lib/html';

/** Renders trusted first-party HTML fragments (converted from the old pages) and adds ids to h2 for the TOC. */
export default function RichContent({ html, full = false }: { html: string; full?: boolean }) {
  return <div className={`prose${full ? ' full' : ''}`} dangerouslySetInnerHTML={{ __html: slugifyHeading(html) }} />;
}
