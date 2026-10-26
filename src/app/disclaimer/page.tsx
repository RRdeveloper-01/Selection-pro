import Breadcrumbs from '@/components/Breadcrumbs';
import { buildMetadata } from '@/lib/seo';
export const metadata = buildMetadata({ title: 'Disclaimer & Copyright Notice', description: 'Selection Pro is an independent educational platform. Read our disclaimer on affiliation, accuracy, previous year papers and copyright removal requests.', path: '/disclaimer' });
export default function Page() {
  return (
    <div className="page narrow prose">
      <Breadcrumbs items={[{ name: 'Disclaimer', path: '/disclaimer' }]} />
      <h1>Disclaimer and copyright notice</h1>
      <h2>Independent platform</h2>
      <p>Selection Pro is an independent educational website. We are not affiliated with, endorsed by or connected to any government agency, exam-conducting authority, board or university, including UPSC, SSC, NTA, IBPS, SBI, RBI, CBSE or Indian Railways.</p>
      <h2>Previous year papers</h2>
      <p>Previous year question papers linked on this site are for educational and reference purposes. Copyright and ownership belong to the respective boards and conducting authorities. We do not claim any rights over them.</p>
      <p>हिंदी: इस वेबसाइट पर दिए गए पिछले वर्षों के प्रश्नपत्र केवल छात्रों की सहायता और शैक्षिक उद्देश्य के लिए हैं। इनका कॉपीराइट संबंधित बोर्ड और परीक्षा संस्थाओं के पास है।</p>
      <h2>Accuracy of information</h2>
      <p>We take care to keep tests, explanations and guides correct, but exam patterns, eligibility rules, dates and fees change. Always confirm important details on the official notification before you apply or plan. Selection Pro is not responsible for decisions made solely on the basis of our content.</p>
      <h2>Practice tests</h2>
      <p>Our practice tests are original preparation material and are not actual exam papers. Scores on them do not predict official results.</p>
      <h2>Content removal</h2>
      <p>If you are a copyright owner and believe content on this site should be removed, please send us details through the <a href="/contact">contact page</a>. We will review the request and act promptly.</p>
      <h2>External links</h2>
      <p>We are not responsible for the content or availability of third-party websites we link to.</p>
    </div>
  );
}
