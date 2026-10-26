'use client';
import { useEffect, useRef, useState } from 'react';
import { useLocal } from '@/lib/storage';

export default function NotesMaker() {
  const ref = useRef<HTMLDivElement>(null);
  const [title, setTitle] = useLocal<string>('sp:notes-title', 'My short notes');
  const [text, setText, ready] = useLocal<string>('sp:notes-text', '');
  const [busy, setBusy] = useState(false);
  const [size, setSize] = useState(19);

  useEffect(() => { if (ready && ref.current && ref.current.innerText !== text) ref.current.innerText = text; }, [ready]); // eslint-disable-line react-hooks/exhaustive-deps

  const download = async () => {
    if (!ref.current) return;
    setBusy(true);
    try {
      const html2pdf = (await import('html2pdf.js')).default;
      const wrap = document.createElement('div');
      wrap.style.cssText = 'padding:24px;background:#fffef6;color:#1c2430;font-family:Segoe Print,Bradley Hand,Comic Sans MS,cursive;';
      const h = document.createElement('h2'); h.textContent = title; h.style.cssText = 'margin:0 0 12px;color:#1c2430';
      const body = document.createElement('div'); body.textContent = ref.current.innerText; body.style.cssText = `white-space:pre-wrap;line-height:32px;font-size:${size}px`;
      wrap.append(h, body);
      await html2pdf().set({ margin: 8, filename: `${title.replace(/\W+/g, '-').toLowerCase() || 'notes'}.pdf`, html2canvas: { scale: 2 }, jsPDF: { unit: 'mm', format: 'a4' } }).from(wrap).save();
    } finally { setBusy(false); }
  };

  return (
    <div>
      <div className="card no-print">
        <div className="field"><label htmlFor="nt">Notes title</label><input id="nt" type="text" value={title} onChange={(e) => setTitle(e.target.value)} /></div>
        <div className="field" style={{ marginBottom: 0 }}><label htmlFor="fs">Text size: {size}px</label><input id="fs" type="range" min={14} max={28} value={size} onChange={(e) => setSize(+e.target.value)} /></div>
      </div>
      <div style={{ margin: '14px 0' }}>
        <div ref={ref} className="notes-paper" contentEditable suppressContentEditableWarning role="textbox" aria-multiline aria-label="Write your notes here" style={{ fontSize: size }} onInput={(e) => setText((e.target as HTMLElement).innerText)} />
      </div>
      <div className="btn-row no-print">
        <button className="btn" onClick={download} disabled={busy}>{busy ? 'Preparing PDF…' : 'Download as PDF'}</button>
        <button className="btn ghost" onClick={() => { if (window.confirm('Clear your notes?')) { setText(''); if (ref.current) ref.current.innerText = ''; } }}>Clear</button>
      </div>
      <p className="muted" style={{ fontSize: '0.9rem' }}>Notes autosave on this device. Nothing is uploaded.</p>
    </div>
  );
}
