/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: false,
  async redirects() {
    // Old .html URLs -> new clean URLs (keeps Google rankings and shared links alive)
    const exams = {
      'ssccgl': 'ssc-cgl', 'sscchsl': 'ssc-chsl', 'rrb': 'rrb-ntpc', 'sbiclerk': 'sbi-clerk',
      'ibpspo': 'ibps-po', 'rbi': 'rbi-grade-b', 'neet': 'neet', 'jipmer': 'jipmer',
      'jeemains': 'jee-main', 'jeeadvanced': 'jee-advanced', 'gate': 'gate', 'cuet': 'cuet',
    };
    const list = Object.entries(exams).map(([o, n]) => ({ source: `/${o}.html`, destination: `/exam/${n}`, permanent: true }));
    return [
      ...list,
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/exam.html', destination: '/exam', permanent: true },
      { source: '/blog.html', destination: '/blog', permanent: true },
      { source: '/about.html', destination: '/about', permanent: true },
      { source: '/contact.html', destination: '/contact', permanent: true },
      { source: '/privacy.html', destination: '/privacy', permanent: true },
      { source: '/disclaimer.html', destination: '/disclaimer', permanent: true },
      { source: '/support.html', destination: '/support', permanent: true },
      { source: '/terms-&-conditions.html', destination: '/terms-and-conditions', permanent: true },
      { source: '/engineering.html', destination: '/exams/engineering', permanent: true },
      { source: '/medical.html', destination: '/exams/medical', permanent: true },
      { source: '/banking.html', destination: '/exams/banking', permanent: true },
      { source: '/sscrailway.html', destination: '/exams/ssc-railway', permanent: true },
      { source: '/english_mock_test.html', destination: '/mock-tests', permanent: true },
      { source: '/hindi_mock_test.html', destination: '/mock-tests/hindi', permanent: true },
      { source: '/my-dashboard.html', destination: '/dashboard', permanent: true },
      { source: '/resources/resources.html', destination: '/resources', permanent: true },
      { source: '/guides/guide-center.html', destination: '/guides', permanent: true },
      { source: '/guides/:slug.html', destination: '/guides/:slug', permanent: true },
      { source: '/blog/:slug.html', destination: '/blog/:slug', permanent: true },
      { source: '/scholarship/index.html', destination: '/scholarship', permanent: true },
      { source: '/scholarship/:slug.html', destination: '/scholarship/:slug', permanent: true },
      { source: '/examinfo/examhub.html', destination: '/exam-guides', permanent: true },
      { source: '/examinfo/:slug.html', destination: '/exam-guides/:slug', permanent: true },
      { source: '/tools/notes.html', destination: '/tools/notes-maker', permanent: true },
      { source: '/tools/notes-maker.html', destination: '/tools/notes-maker', permanent: true },
      { source: '/tools/game.html', destination: '/tools/memory-game', permanent: true },
      { source: '/mock/jee_mains_mock_test.html', destination: '/mock-tests/jee-main', permanent: true },
      { source: '/mock/neet_mock_test.html', destination: '/mock-tests/neet', permanent: true },
      { source: '/mock/cuet_mock_test.html', destination: '/mock-tests/cuet', permanent: true },
      { source: '/mock/class_12_board_mock_test.html', destination: '/mock-tests/class-12-board', permanent: true },
      { source: '/mock/jee_mains_mock_test_hindi.html', destination: '/mock-tests/jee-main-hindi', permanent: true },
      { source: '/mock/neet_mock_test_hindi.html', destination: '/mock-tests/neet-hindi', permanent: true },
      { source: '/mock/cuet_mock_test_hindi.html', destination: '/mock-tests/cuet-hindi', permanent: true },
      // Removed sections: send visitors to the new current-affairs hub / home instead of 404
      { source: '/current-affairs/affairs-hub.html', destination: '/current-affairs', permanent: true },
      { source: '/update/:path*', destination: '/', permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
      { source: '/images/:path*', headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }] },
      { source: '/icons/:path*', headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }] },
      { source: '/data/:path*', headers: [{ key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=604800' }] },
      { source: '/practice-tests/:path*', headers: [{ key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=604800' }] },
      { source: '/tests/:path*', headers: [{ key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=604800' }] },
    ];
  },
};
export default nextConfig;
