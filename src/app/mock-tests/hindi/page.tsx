import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { mocks } from '@/lib/content';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Hindi Medium Mock Tests: JEE Main, NEET, CUET (हिंदी)',
  description: 'हिंदी माध्यम के छात्रों के लिए JEE Main, NEET और CUET के चैप्टर-वाइज़ मॉक टेस्ट। मुफ़्त, तुरंत रिज़ल्ट और सही उत्तर के साथ।',
  path: '/mock-tests/hindi',
});

export default function HindiMocks() {
  const hi = mocks.filter((m) => m.lang === 'hi');
  return (
    <div className="page">
      <Breadcrumbs items={[{ name: 'Mock tests', path: '/mock-tests' }, { name: 'Hindi', path: '/mock-tests/hindi' }]} />
      <h1>हिंदी माध्यम मॉक टेस्ट</h1>
      <p className="lead">Hindi medium students can practise chapter-wise tests for JEE Main, NEET and CUET. Each test shows your score instantly and saves wrong answers for revision.</p>
      <div className="grid wide" style={{ marginTop: 18 }}>
        {hi.map((m) => <Link key={m.slug} className="link-card" href={m.route}><h3>{m.h1}</h3><p>{m.intro.slice(0, 130)}…</p></Link>)}
      </div>
    </div>
  );
}
