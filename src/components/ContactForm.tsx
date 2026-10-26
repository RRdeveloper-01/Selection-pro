'use client';
import { useState } from 'react';
import { SITE } from '@/lib/site';

export default function ContactForm() {
  const [state, setState] = useState<'idle' | 'sending' | 'ok' | 'err'>('idle');
  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setState('sending');
    try {
      const emailjs = (await import('@emailjs/browser')).default;
      await emailjs.sendForm(SITE.emailjs.serviceId, SITE.emailjs.templateId, form, { publicKey: SITE.emailjs.publicKey });
      form.reset();
      setState('ok');
    } catch {
      setState('err');
    }
  };
  return (
    <form onSubmit={submit} className="card">
      <div className="field"><label htmlFor="n">Your name</label><input id="n" name="from_name" type="text" required autoComplete="name" /></div>
      <div className="field"><label htmlFor="e">Email</label><input id="e" name="user_email" type="email" required autoComplete="email" /></div>
      <div className="field"><label htmlFor="m">Message</label><textarea id="m" name="message" required placeholder="Suggest an exam, report a wrong answer or ask a question" /></div>
      <button className="btn" disabled={state === 'sending'}>{state === 'sending' ? 'Sending…' : 'Send message'}</button>
      <p role="status" aria-live="polite" style={{ marginTop: 12 }}>
        {state === 'ok' && <span className="verdict-right">Message sent. Thank you, we will reply by email.</span>}
        {state === 'err' && <span className="verdict-wrong">Could not send. Please try again in a moment.</span>}
      </p>
    </form>
  );
}
