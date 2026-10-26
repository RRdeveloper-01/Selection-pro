import Breadcrumbs from '@/components/Breadcrumbs';
import CopyUpi from '@/components/CopyUpi';
import { SITE } from '@/lib/site';
import { buildMetadata } from '@/lib/seo';
export const metadata = buildMetadata({ title: 'Support Selection Pro: Help Keep Study Material Free', description: 'Selection Pro is free for every student. A small voluntary contribution helps cover hosting and the time spent preparing tests.', path: '/support', noindex: true });
export default function Page() {
  return (
    <div className="page narrow">
      <Breadcrumbs items={[{ name: 'Support us', path: '/support' }]} />
      <h1>Support our mission ❤️</h1>
      <p className="lead">Everything on Selection Pro is free and will stay free. If it has helped you, a small voluntary contribution covers hosting and the time spent preparing new tests. It is never required.</p>
      <section className="card" style={{ textAlign: 'center' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/supportimg.jpg" alt="UPI QR code to support Selection Pro" width={240} height={240} style={{ margin: '0 auto 12px' }} />
        <CopyUpi upi={SITE.upi} />
        <p className="muted" style={{ marginTop: 10 }}>Scan with PhonePe, Google Pay, Paytm or any UPI app. Any amount helps, even ₹10.</p>
      </section>
      <section className="section prose">
        <h2>Where the support goes</h2>
        <p>Hosting, domain and tools, and the time spent writing questions and explanations. Sharing the site with a friend who is preparing for an exam helps just as much.</p>
      </section>
    </div>
  );
}
