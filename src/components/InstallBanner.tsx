'use client';
import { useEffect, useState } from 'react';

type BIPEvent = Event & { prompt: () => Promise<void>; userChoice: Promise<{ outcome: string }> };

export default function InstallBanner() {
  const [evt, setEvt] = useState<BIPEvent | null>(null);

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => navigator.serviceWorker.register('/sw.js').catch(() => undefined), { once: true });
    }
    if (localStorage.getItem('sp:install-dismissed')) return;
    const handler = (e: Event) => { e.preventDefault(); setEvt(e as BIPEvent); };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  if (!evt) return null;
  const dismiss = () => { localStorage.setItem('sp:install-dismissed', '1'); setEvt(null); };
  return (
    <div className="install-banner" role="dialog" aria-label="Install Selection Pro">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/icons/icon-192.png" alt="" width={44} height={44} />
      <p><strong>Install Selection Pro</strong><br />Daily quiz and tests one tap away, even on a weak network.</p>
      <button className="btn small" onClick={async () => { await evt.prompt(); dismiss(); }}>Install</button>
      <button className="icon-btn" aria-label="Dismiss" onClick={dismiss}>×</button>
    </div>
  );
}
