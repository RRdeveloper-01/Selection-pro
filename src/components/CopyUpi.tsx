'use client';
import { useState } from 'react';
export default function CopyUpi({ upi }: { upi: string }) {
  const [ok, setOk] = useState(false);
  return (
    <div className="btn-row" style={{ justifyContent: 'center', alignItems: 'center' }}>
      <code style={{ fontSize: '1.1rem' }}>{upi}</code>
      <button className="btn small" onClick={async () => { try { await navigator.clipboard.writeText(upi); setOk(true); setTimeout(() => setOk(false), 1800); } catch { /* clipboard blocked */ } }}>{ok ? 'Copied' : 'Copy ID'}</button>
    </div>
  );
}
