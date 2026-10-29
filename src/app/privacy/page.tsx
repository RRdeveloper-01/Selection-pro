import Breadcrumbs from '@/components/Breadcrumbs';
import { buildMetadata } from '@/lib/seo';
export const metadata = buildMetadata({ title: 'Privacy Policy', description: 'How Selection Pro handles data: local storage, cookies, Google AdSense and Analytics, push notifications and your choices.', path: '/privacy' });
export default function Page() {
  return (
    <div className="page narrow prose">
      <Breadcrumbs items={[{ name: 'Privacy policy', path: '/privacy' }]} />
      <h1>Privacy policy</h1>
      <p className="muted">Last updated: 26 October 2026</p>
      <p>This policy explains what information Selection Pro (&quot;we&quot;, &quot;us&quot;) collects when you use selectionpro.in, how it is used and the choices you have. We keep data collection to the minimum needed to run the site.</p>
      <h2>Information we do not collect</h2>
      <p>You do not need an account. We do not ask for your name, phone number or password to use tests, quizzes and tools.</p>
      <h2>Data stored on your device</h2>
      <p>Your streak, points, quiz history, mistake notebook, syllabus progress, chosen exam and theme are stored in your browser&apos;s local storage. This data stays on your device and is not sent to our servers. You can delete it at any time by clearing site data in your browser.</p>
      <h2>Contact form</h2>
      <p>If you send a message through the contact page, the name, email address and message you type are sent to us by an email service (EmailJS) so we can reply. We use this information only to respond to you.</p>
      <h2>Cookies and advertising</h2>
      <p>We use Google AdSense to show ads. Google and its partners use cookies, including the DoubleClick cookie, to serve ads based on your visits to this and other websites. You can opt out of personalised advertising at <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">Google Ads Settings</a> or <a href="https://www.aboutads.info" target="_blank" rel="noopener noreferrer">aboutads.info</a>. Where required, we show consent choices before personalised ads. Learn more in <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">how Google uses data from partner sites</a>.</p>
      <h2>Analytics</h2>
      <p>We use Google Analytics to understand which pages are useful. It collects information such as pages visited, approximate location, device and browser type. This helps us improve content. You can block it with a browser extension or by disabling cookies.</p>
      <h2>Push notifications</h2>
      <p>If you choose to enable notifications, we use OneSignal to deliver them. Your browser asks for permission first and you can turn notifications off at any time from your browser or device settings.</p>
      <h2>Third-party links</h2>
      <p>Some pages link to external sites, including official exam websites. We do not control their privacy practices; please read their policies.</p>
      <h2>Children</h2>
      <p>Selection Pro is intended for students. We do not knowingly collect personal information from children. If you believe a child has sent us personal data, contact us and we will delete it.</p>
      <h2>Changes to this policy</h2>
      <p>We may update this policy when our practices change. The date at the top shows the latest revision.</p>
      <h2>Contact</h2>
      <p>Questions about privacy? Use the <a href="/contact">contact page</a>.</p>
    </div>
  );
}
