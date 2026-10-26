import type { Metadata, Viewport } from 'next';
import { Sora, Hind } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import AppShell from '@/components/AppShell';
import Footer from '@/components/Footer';
import InstallBanner from '@/components/InstallBanner';
import JsonLd from '@/components/JsonLd';
import { SITE, abs } from '@/lib/site';

const head = Sora({ subsets: ['latin'], weight: ['500', '600', '700'], variable: '--font-head', display: 'swap' });
const body = Hind({ subsets: ['latin', 'devanagari'], weight: ['400', '500', '600'], variable: '--font-body', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: `${SITE.name}: Free Mock Tests, PYQs & Daily Quiz for Indian Exams`, template: `%s | ${SITE.name}` },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  manifest: '/manifest.json',
  icons: { icon: '/favicon.png', apple: '/icons/icon-192.png' },
  verification: { google: 'u7lpoYae-efN_n-w_mvBHkZGn3Gfi99XjOf8rxcm7Ss' },
  appleWebApp: { capable: true, title: SITE.name, statusBarStyle: 'default' },
  formatDetection: { telephone: false },
  openGraph: { siteName: SITE.name, locale: 'en_IN', type: 'website' },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#1a5f7a' },
    { media: '(prefers-color-scheme: dark)', color: '#0d1520' },
  ],
};

// Runs before first paint so there is no light/dark flash.
const themeScript = `(function(){try{var t=localStorage.getItem('sp:theme');if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.setAttribute('data-theme',t)}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${head.variable} ${body.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script async src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${SITE.adsenseClient}`} crossOrigin="anonymous" />
      </head>
      <body>
        <a className="skip-link" href="#content">Skip to content</a>
        <JsonLd
          data={[
            { '@context': 'https://schema.org', '@type': 'WebSite', name: SITE.name, alternateName: 'selectionpro.in', url: SITE.url,
              potentialAction: { '@type': 'SearchAction', target: `${SITE.url}/search?q={search_term_string}`, 'query-input': 'required name=search_term_string' } },
            { '@context': 'https://schema.org', '@type': 'EducationalOrganization', name: SITE.name, url: SITE.url, logo: abs('/icons/icon-512.png'),
              sameAs: [SITE.youtube, SITE.telegram] },
          ]}
        />
        <AppShell>
          {children}
          <Footer />
        </AppShell>
        <InstallBanner />
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${SITE.gaId}`} strategy="afterInteractive" />
        <Script id="ga-init" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${SITE.gaId}');`}</Script>
        <Script src="https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js" strategy="afterInteractive" defer />
        <Script id="onesignal-init" strategy="afterInteractive">{`window.OneSignalDeferred=window.OneSignalDeferred||[];OneSignalDeferred.push(async function(OneSignal){await OneSignal.init({appId:"${SITE.oneSignalAppId}",serviceWorkerPath:"sw.js"});});`}</Script>
      </body>
    </html>
  );
}
