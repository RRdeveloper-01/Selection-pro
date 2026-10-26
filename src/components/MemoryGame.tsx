'use client';
import { useEffect, useState } from 'react';
import { shuffle } from '@/lib/quiz';

const SYMBOLS = ['π', 'Σ', '√', '∞', 'Δ', 'λ', 'Ω', 'θ'];
type Card = { id: number; s: string; up: boolean; done: boolean };
const deal = (): Card[] => shuffle([...SYMBOLS, ...SYMBOLS]).map((s, id) => ({ id, s, up: false, done: false }));

export default function MemoryGame() {
  const [cards, setCards] = useState<Card[]>([]);
  const [moves, setMoves] = useState(0);
  const [best, setBest] = useState<number | null>(null);
  useEffect(() => { setCards(deal()); try { const b = localStorage.getItem('sp:memory-best'); if (b) setBest(+b); } catch { /* ignore */ } }, []);
  const won = cards.length > 0 && cards.every((c) => c.done);
  useEffect(() => {
    if (!won) return;
    if (best === null || moves < best) { setBest(moves); try { localStorage.setItem('sp:memory-best', String(moves)); } catch { /* ignore */ } }
  }, [won]); // eslint-disable-line react-hooks/exhaustive-deps

  const flip = (id: number) => {
    const open = cards.filter((c) => c.up && !c.done);
    if (open.length >= 2 || cards[id].up || cards[id].done) return;
    const next = cards.map((c) => (c.id === id ? { ...c, up: true } : c));
    setCards(next);
    const nowOpen = next.filter((c) => c.up && !c.done);
    if (nowOpen.length === 2) {
      setMoves((m) => m + 1);
      if (nowOpen[0].s === nowOpen[1].s) setTimeout(() => setCards((cs) => cs.map((c) => (c.up && !c.done ? { ...c, done: true } : c))), 350);
      else setTimeout(() => setCards((cs) => cs.map((c) => (c.done ? c : { ...c, up: false }))), 800);
    }
  };
  return (
    <div>
      <div className="stat-row" style={{ maxWidth: 460, marginBottom: 14 }}><div className="stat"><b>{moves}</b><span>Moves</span></div><div className="stat"><b>{best ?? '–'}</b><span>Best</span></div></div>
      <div className="memory-grid">
        {cards.map((c) => <button key={c.id} className={`mem-card${c.up ? ' up' : ''}${c.done ? ' matched' : ''}`} aria-label={c.up || c.done ? c.s : 'Hidden card'} onClick={() => flip(c.id)}>{c.up || c.done ? c.s : '?'}</button>)}
      </div>
      {won && <p className="verdict-right" role="status" style={{ marginTop: 14 }}>Cleared in {moves} moves. Nice focus. Time to get back to studying!</p>}
      <div className="btn-row" style={{ marginTop: 14 }}><button className="btn ghost" onClick={() => { setCards(deal()); setMoves(0); }}>New game</button></div>
    </div>
  );
}
