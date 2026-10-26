export const SITE = {
  name: 'Selection Pro',
  url: 'https://selectionpro.in',
  tagline: 'Free mock tests, PYQs and exam-focused practice for Indian students',
  description:
    'Free practice tests with detailed solutions, chapter-wise mock tests, daily quizzes, a mistake notebook and syllabus tracker for SSC, JEE, NEET, Banking, Railway, CUET and GATE.',
  adsenseClient: 'ca-pub-7751428341609824',
  gaId: 'G-EM0R8NFRM0',
  oneSignalAppId: '18fa4ad8-4d7f-46d3-b4d8-6d509aa9c425',
  youtube: 'https://www.youtube.com/@SelectionPro01',
  telegram: 'https://t.me/selectionpro1',
  upi: '8957940617@fam',
  emailjs: { publicKey: '2ETY6QOsE02yFcXx0', serviceId: 'service_sr26xsd', templateId: 'template_gm8ayrk' },
  founded: 2026,
  founder: 'RR Developer',
};

export type NavItem = { href: string; label: string; icon: string };
export type NavGroup = { title: string; items: NavItem[] };

export const NAV: NavGroup[] = [
  {
    title: 'Practice',
    items: [
      { href: '/daily-quiz', label: 'Daily Quiz', icon: '🔥' },
      { href: '/mcq-trap', label: 'MCQ Trap of the Day', icon: '🪤' },
      { href: '/exam', label: 'Practice Tests & PYQs', icon: '📝' },
      { href: '/mock-tests', label: 'Chapter-wise Mock Tests', icon: '📚' },
      { href: '/revision-series/jee-main', label: 'JEE 100-Day Revision', icon: '🗓️' },
    ],
  },
  {
    title: 'My Progress',
    items: [
      { href: '/dashboard', label: 'My Dashboard', icon: '📊' },
      { href: '/mistake-notebook', label: 'Mistake Notebook', icon: '📓' },
      { href: '/syllabus-tracker', label: 'Syllabus Tracker', icon: '✅' },
    ],
  },
  {
    title: 'Learn',
    items: [
      { href: '/current-affairs', label: 'Current Affairs for Exams', icon: '📰' },
      { href: '/exam-guides', label: 'Exam Guides', icon: '🧭' },
      { href: '/guides', label: 'Preparation Guides', icon: '📖' },
      { href: '/blog', label: 'Study Blog', icon: '✍️' },
      { href: '/scholarship', label: 'Scholarships', icon: '🎓' },
    ],
  },
  {
    title: 'Tools',
    items: [
      { href: '/tools/notes-maker', label: 'Handwritten Notes Maker', icon: '🗒️' },
      { href: '/tools/memory-game', label: 'Memory Game Break', icon: '🧠' },
      { href: '/resources', label: 'Official Resources', icon: '🔗' },
    ],
  },
];

export const EXAM_CATEGORIES: Record<string, { title: string; blurb: string; guide: string[]; faqs: { q: string; a: string }[] }> = {
  engineering: {
    title: 'Engineering & University Entrance Exams',
    blurb: 'JEE Main, JEE Advanced, GATE and CUET: practice tests, chapter-wise mocks, PYQ links and preparation strategy.',
    guide: [
      'JEE Main is the common gateway to NITs, IIITs and other technical institutions and the qualifier for JEE Advanced, which leads to the IITs. GATE is for graduates aiming at M.Tech or PSU jobs, and CUET opens undergraduate programmes in central universities.',
      'Start by choosing the exam that matches your stage. School students should build a strong Class 11 and 12 base with chapter tests, then move to full-length papers. Graduates should plan GATE around their branch and previous year papers.',
      'Whichever exam you choose, the routine is the same: study a topic, test it the same day, record mistakes and revise them at spaced intervals.',
    ],
    faqs: [
      { q: 'Which exam should I prepare for first?', a: 'If you are in Class 11 or 12, start with JEE Main preparation because it also builds the base for JEE Advanced and board exams. Graduates should look at GATE.' },
      { q: 'Are the chapter tests useful for boards too?', a: 'Yes. Chapter tests follow the same syllabus as Class 11 and 12 NCERT, so they strengthen board preparation as well.' },
    ],
  },
  medical: {
    title: 'Medical Entrance Exams',
    blurb: 'NEET UG and JIPMER: full-length practice tests with explanations, chapter tests and NCERT-first strategy.',
    guide: [
      'NEET UG is the single national entrance test for MBBS, BDS and AYUSH courses, and JIPMER MBBS admission also follows the NEET UG route. The paper is built on the NCERT syllabus, so careful NCERT reading is the foundation of preparation.',
      'Biology carries the largest share of marks, followed by Chemistry and Physics. A good plan keeps Biology daily, uses Chemistry for steady scoring and treats Physics as a practice subject where numericals must be solved repeatedly.',
      'Take full-length tests weekly in the last months and use topic-wise analysis to decide which chapters to revise first.',
    ],
    faqs: [
      { q: 'Is NCERT enough for NEET?', a: 'NCERT is the core, especially for Biology and Chemistry. Add extra practice questions for Physics and test series for exam-style speed.' },
      { q: 'Do I need a separate JIPMER exam?', a: 'JIPMER MBBS admission is via NEET UG counselling. Always confirm current rules on the official websites.' },
    ],
  },
  banking: {
    title: 'Banking & Insurance Exams',
    blurb: 'IBPS PO, SBI Clerk and RBI Grade B: sectional practice, banking awareness and a step-by-step study plan.',
    guide: [
      'Banking exams such as IBPS PO, SBI Clerk and RBI Grade B follow a staged process: prelims, mains and an interview or further phases. The prelims are speed tests of English, quantitative aptitude and reasoning, while mains add banking and economic awareness.',
      'Because of sectional time limits and negative marking, accuracy and time management matter as much as knowledge. Practise each section with a timer and track your attempts and accuracy.',
      'RBI Grade B is different: it tests economics, finance and management in depth, so give it more conceptual study time.',
    ],
    faqs: [
      { q: 'Which banking exam is the easiest to start with?', a: 'SBI Clerk and IBPS Clerk-level exams are common starting points. PO and RBI Grade B need deeper preparation.' },
      { q: 'How much banking awareness do I need?', a: 'Know RBI functions, payment systems, monetary policy basics and major schemes. Use the daily quiz and the economy and banking guide.' },
    ],
  },
  'ssc-railway': {
    title: 'SSC & Railway Exams',
    blurb: 'SSC CGL, SSC CHSL and RRB NTPC: Tier-wise practice tests, PYQ links and speed-building strategy.',
    guide: [
      'SSC CGL, SSC CHSL and RRB NTPC are among the largest government recruitments for graduate and 12th-pass candidates. Tier I or CBT 1 acts as a screening stage, and speed with accuracy decides the cut-off.',
      'These exams share the same core skills: arithmetic, reasoning and general awareness, with English added for SSC. A single, steady routine can prepare you for all three.',
      'Practise full tests under a timer, analyse mistakes and keep revising static GK through short daily quizzes.',
    ],
    faqs: [
      { q: 'Can I prepare for SSC and Railway exams together?', a: 'Yes. Maths, reasoning and general awareness overlap, so one preparation plan works for both. Check each exam notification for differences.' },
      { q: 'How many hours should I study daily?', a: 'Four to six focused hours with regular timed practice is better than long unfocused sessions.' },
    ],
  },
};

export const abs = (path: string) => `${SITE.url}${path === '/' ? '' : path}`;
