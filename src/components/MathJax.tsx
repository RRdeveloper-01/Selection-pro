'use client';
import { useEffect } from 'react';

declare global {
  interface Window { MathJax?: { typesetPromise?: (els?: Element[]) => Promise<void>; tex?: unknown; startup?: unknown } }
}

/** Loads MathJax once and re-typesets whenever `trigger` changes (new questions, results shown, ...). */
export default function MathJax({ trigger }: { trigger: unknown }) {
  useEffect(() => {
    if (!window.MathJax) {
      window.MathJax = { tex: { inlineMath: [['$', '$'], ['\\(', '\\)']], displayMath: [['$$', '$$'], ['\\[', '\\]']] } };
    }
    if (!document.getElementById('mathjax-script')) {
      const s = document.createElement('script');
      s.id = 'mathjax-script';
      s.async = true;
      s.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js';
      document.head.appendChild(s);
    }
  }, []);
  useEffect(() => {
    const t = setTimeout(() => window.MathJax?.typesetPromise?.().catch(() => undefined), 60);
    return () => clearTimeout(t);
  }, [trigger]);
  return null;
}
