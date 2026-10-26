const strip = (s: string) => s.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&#x27;|&#39;/g, "'").replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9\u0900-\u097f]+/g, '-').replace(/^-|-$/g, '').slice(0, 60) || 'section';

export function slugifyHeading(html: string): string {
  const used = new Set<string>();
  return html.replace(/<h2([^>]*)>([\s\S]*?)<\/h2>/gi, (_m, attrs: string, inner: string) => {
    if (/\sid=/.test(attrs)) return `<h2${attrs}>${inner}</h2>`;
    let id = slug(strip(inner));
    let n = 2;
    while (used.has(id)) id = `${slug(strip(inner))}-${n++}`;
    used.add(id);
    return `<h2${attrs} id="${id}">${inner}</h2>`;
  });
}

export function extractToc(html: string): { id: string; text: string }[] {
  const out: { id: string; text: string }[] = [];
  const used = new Set<string>();
  const re = /<h2([^>]*)>([\s\S]*?)<\/h2>/gi;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html))) {
    const text = strip(m[2]);
    if (!text || /table of contents|contents/i.test(text)) continue;
    const idm = /\sid="([^"]+)"/.exec(m[1]);
    let id = idm ? idm[1] : slug(text);
    let n = 2;
    while (!idm && used.has(id)) id = `${slug(text)}-${n++}`;
    used.add(id);
    out.push({ id, text });
  }
  return out;
}

/** Strips the author's own "Table of Contents" block, because we render a consistent one. */
export function dropOldToc(html: string): string {
  return html.replace(/<div class="toc"[\s\S]*?<\/div>\s*/i, '').replace(/<section class="card">\s*<h2>[^<]*Table of Contents[\s\S]*?<\/section>/i, '');
}

export const wordCount = (html: string) => strip(html).split(' ').filter(Boolean).length;
