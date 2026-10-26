'use client';
import { useEffect, useRef } from 'react';
import { SITE } from '@/lib/site';

declare global {
  interface Window { adsbygoogle?: unknown[] }
}

/**
 * Manual ad unit. Renders nothing until you set NEXT_PUBLIC_ADS_ENABLED=true and pass a real slot id,
 * so there are no empty boxes while AdSense is still under review.
 */
export default function AdSlot({ slot, className = '' }: { slot?: string; className?: string }) {
  const ref = useRef<HTMLModElement>(null);
  const enabled = process.env.NEXT_PUBLIC_ADS_ENABLED === 'true' && !!slot;
  useEffect(() => {
    if (!enabled) return;
    try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch { /* ad blocked */ }
  }, [enabled]);
  if (!enabled) return null;
  return (
    <aside className={`no-print ${className}`} aria-label="Advertisement" style={{ margin: '24px 0', minHeight: 100 }}>
      <ins ref={ref} className="adsbygoogle" style={{ display: 'block' }} data-ad-client={SITE.adsenseClient} data-ad-slot={slot} data-ad-format="auto" data-full-width-responsive="true" />
    </aside>
  );
}
