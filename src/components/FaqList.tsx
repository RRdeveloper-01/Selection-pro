import JsonLd from './JsonLd';
import { faqLd } from '@/lib/seo';

export default function FaqList({ faqs, title = 'Frequently asked questions' }: { faqs: { q: string; a: string }[]; title?: string }) {
  if (!faqs.length) return null;
  return (
    <section className="section" aria-labelledby="faq-h">
      <JsonLd data={faqLd(faqs)} />
      <h2 id="faq-h">{title}</h2>
      {faqs.map((f) => (
        <details className="faq" key={f.q}>
          <summary>{f.q}</summary>
          <div>{f.a}</div>
        </details>
      ))}
    </section>
  );
}
