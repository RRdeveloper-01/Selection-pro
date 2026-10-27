'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { NAV } from '@/lib/site';
import { STATS_KEY, emptyStats, liveStreak, useLocal } from '@/lib/storage';
import type { Stats } from '@/lib/types';
import SearchDialog from './SearchDialog';

type Theme = 'light' | 'dark';

function useTheme() {
  const [theme, setTheme] = useState<Theme>('light');
  useEffect(() => {
    setTheme((document.documentElement.getAttribute('data-theme') as Theme) || 'light');
  }, []);
  const apply = (t: Theme) => {
    document.documentElement.setAttribute('data-theme', t);
    try { localStorage.setItem('sp:theme', t); } catch { /* private mode */ }
    setTheme(t);
  };
  return { theme, apply };
}

export default function AppShell({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [searching, setSearching] = useState(false);
  const { theme, apply } = useTheme();
  const [stats, , ready] = useLocal<Stats>(STATS_KEY, emptyStats());
  const streak = ready ? liveStreak(stats) : 0;

  useEffect(() => { setOpen(false); }, [path]);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); setSearching(true); }
      if (e.key === 'Escape') { setOpen(false); setSearching(false); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const isActive = (href: string) => (href === '/' ? path === '/' : path === href || path.startsWith(href + '/'));

  return (
    <>
      <header className="topbar">
        <button className="icon-btn menu-btn" aria-label="Open menu" aria-expanded={open} aria-controls="sidebar" onClick={() => setOpen((o) => !o)}>
          {open ? '✕' : '☰'}
        </button>
        <Link href="/" className="logo" aria-label="Selection Pro home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icons/header.webp" alt="Selection Pro" width={84} height={36} fetchPriority="high" />
        </Link>
        <Link href="/daily-quiz" className="streak-chip" aria-label={`${streak} day streak. Open daily quiz`}>
          <span aria-hidden>🔥</span> {streak > 0 ? `${streak} day${streak > 1 ? 's' : ''}` : 'Start streak'}
        </Link>
        <button className="icon-btn" aria-label="Search (Ctrl+K)" onClick={() => setSearching(true)}>🔍</button>
        <button className="icon-btn" aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`} onClick={() => apply(theme === 'dark' ? 'light' : 'dark')}>
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </header>

      <div className="frame">
        <nav id="sidebar" className={`sidebar${open ? ' open' : ''}`} aria-label="Main navigation">
          <div className="side-group">
            <Link href="/" className="side-link" aria-current={path === '/' ? 'page' : undefined}><span className="ico">🏠</span>Home</Link>
          </div>
          {NAV.map((g) => (
            <div className="side-group" key={g.title}>
              <div className="side-title">{g.title}</div>
              {g.items.map((it) => (
                <Link key={it.href} href={it.href} className="side-link" aria-current={isActive(it.href) ? 'page' : undefined}>
                  <span className="ico" aria-hidden>{it.icon}</span>{it.label}
                </Link>
              ))}
            </div>
          ))}
          <div className="side-foot">
            <div className="theme-switch" role="group" aria-label="Colour theme">
              <button aria-pressed={theme === 'light'} onClick={() => apply('light')}>☀️ Light</button>
              <button aria-pressed={theme === 'dark'} onClick={() => apply('dark')}>🌙 Dark</button>
            </div>
            <Link className="side-link" href="/support"><span className="ico">❤️</span>Support Selection Pro</Link>
          </div>
        </nav>
        {open && <div className="scrim" onClick={() => setOpen(false)} aria-hidden />}
        <div className="main-col" id="content" tabIndex={-1}>{children}</div>
      </div>
      {searching && <SearchDialog onClose={() => setSearching(false)} />}
    </>
  );
}
