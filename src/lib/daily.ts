import { CA_ENTRIES, type CaEntry } from '@/data/ca-entries';

export const dailyDates = (): string[] => Array.from(new Set(CA_ENTRIES.map((e) => e.date))).sort().reverse();
export const MIN_INDEXED = 3;
export const entriesOn = (date: string): CaEntry[] => CA_ENTRIES.filter((e) => e.date === date);

export function formatDate(date: string, opts: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' }) {
  return new Date(date + 'T00:00:00Z').toLocaleDateString('en-IN', { ...opts, timeZone: 'UTC' });
}

export const indexableDates = (): string[] => dailyDates().filter((d) => entriesOn(d).length >= MIN_INDEXED);

/** First sentence of a summary, trimmed for list pages. */
export function teaser(summary: string, max = 150): string {
  const first = summary.split('. ')[0].replace(/\.$/, '');
  if (first.length <= max) return first + '.';
  return first.slice(0, max).replace(/\s+\S*$/, '') + '…';
}
