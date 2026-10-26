'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useRef, useState } from 'react';

type Item = { t: string; u: string; k: string; s?: string };

export default function SearchDialog({ onClose }: { onClose: () => void }) {
  const [items, setItems] = useState<Item[]>([]);
  const [q, setQ] = useState('');
  const router = useRouter();
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    input.current?.focus();
    fetch('/search-index.json').then((r) => r.json()).then(setItems).catch(() => setItems([]));
  }, []);

  const results = useMemo(() => {
    const terms = q.toLowerCase().split(/\s+/).filter(Boolean);
    if (!terms.length) return items.filter((i) => i.k === 'Popular').slice(0, 8);
    return items
      .map((i) => {
        const hay = `${i.t} ${i.s ?? ''}`.toLowerCase();
        const score = terms.reduce((n, term) => n + (i.t.toLowerCase().includes(term) ? 3 : hay.includes(term) ? 1 : -99), 0);
        return { i, score };
      })
      .filter((x) => x.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 30)
      .map((x) => x.i);
  }, [items, q]);

  return (
    <div className="search-layer" role="dialog" aria-modal="true" aria-label="Search Selection Pro" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="search-box">
        <input
          ref={input} type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search exams, tests, chapters, guides..."
          aria-label="Search" onKeyDown={(e) => { if (e.key === 'Enter' && results[0]) { router.push(results[0].u); onClose(); } }}
        />
        <ul>
          {results.map((r) => (
            <li key={r.u}><a href={r.u} onClick={(e) => { e.preventDefault(); router.push(r.u); onClose(); }}><span>{r.t}</span><small>{r.k}</small></a></li>
          ))}
          {!results.length && <li style={{ padding: 14 }} className="muted">No match. Try a shorter word like “physics”, “SSC” or “quiz”.</li>}
        </ul>
      </div>
    </div>
  );
}
