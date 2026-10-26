import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import MemoryGame from '@/components/MemoryGame';
import { buildMetadata } from '@/lib/seo';
export const metadata = buildMetadata({ title: 'Memory Game: A 3-Minute Study Break That Trains Focus', description: 'Match maths and science symbols in this quick memory card game. A short, screen-friendly study break between sessions.', path: '/tools/memory-game' });
export default function Page() {
  return (
    <div className="page narrow">
      <Breadcrumbs items={[{ name: 'Memory game', path: '/tools/memory-game' }]} />
      <h1>Memory game: a 3-minute study break</h1>
      <p className="lead">Flip two cards at a time and match all the pairs in the fewest moves. Stop when the board is cleared, then go back to your books.</p>
      <MemoryGame />
      <section className="section prose">
        <h2>Why take short breaks</h2>
        <p>Studying in blocks of 45 to 60 minutes with a short break afterwards keeps attention high. Keep breaks brief and screen-light. Read more in <Link href="/blog/management">how to build a study timetable that works</Link>.</p>
      </section>
    </div>
  );
}
