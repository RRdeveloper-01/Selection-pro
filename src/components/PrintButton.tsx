'use client';
export default function PrintButton() {
  return <button className="btn no-print" style={{ marginBottom: 16 }} onClick={() => window.print()}>🖨️ Print or save as PDF</button>;
}
