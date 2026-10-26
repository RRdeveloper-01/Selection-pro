import Breadcrumbs from '@/components/Breadcrumbs';
import RichContent from '@/components/RichContent';
import { pageHtml } from '@/lib/pages';
import { buildMetadata } from '@/lib/seo';
export const metadata = buildMetadata({ title: 'Terms and Conditions', description: 'Terms and conditions for using Selection Pro: acceptable use, content ownership, third-party links and limitation of liability.', path: '/terms-and-conditions' });
export default function Page() {
  return <div className="page narrow"><Breadcrumbs items={[{ name: 'Terms and conditions', path: '/terms-and-conditions' }]} /><h1>Terms and conditions</h1><RichContent html={pageHtml('terms')} /></div>;
}
