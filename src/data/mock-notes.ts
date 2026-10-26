export type MockNote = { title: string; paras: string[]; tips: string[]; faqs: { q: string; a: string }[] };

const common = {
  faqs: [
    { q: 'How many chapter tests should I take in a week?', a: 'Take one test for each chapter you finish. Four to six tests a week is a good pace when combined with revision of earlier mistakes.' },
    { q: 'What score should I aim for in a chapter test?', a: 'Aim for at least 75% accuracy. If you score less, reread the chapter and attempt the test again after two days.' },
  ],
};

export const MOCK_NOTES: Record<string, MockNote> = {
  'jee-main': {
    title: 'How to use these JEE Main chapter tests',
    paras: [
      'JEE Main tests your command of Class 11 and 12 Physics, Chemistry and Mathematics. Chapter-wise testing works because each chapter has its own pattern of questions, and practising them right after you study keeps the method fresh.',
      'Start each test without notes. Afterwards, read the correct answer to every question you missed and write down in one line what you did wrong: a concept gap, a calculation slip or a misread question. The nature of the mistake tells you what to fix.',
      'Mathematics chapters such as calculus, coordinate geometry and algebra carry the most weight, so prioritise them, then balance Physics and Chemistry. When you finish a subject, move to the full-length tests on the JEE Main exam page.',
    ],
    tips: ['Attempt each test within a fixed time to build speed.', 'Retry wrong questions after two days, not immediately.', 'Maintain a formula sheet per chapter.', 'Combine chapter tests with the 100-day revision series.'],
    faqs: common.faqs,
  },
  neet: {
    title: 'How to use these NEET chapter tests',
    paras: [
      'NEET questions are based closely on the NCERT textbooks. After you read a chapter line by line, a chapter test shows whether you absorbed the facts, diagrams and examples the exam likes to ask about.',
      'Biology contributes half the paper, so make sure every Botany and Zoology chapter is followed by a test. For Physics and Chemistry, treat each test as numerical practice: after the test, redo the calculations you missed on paper.',
      'Review wrong answers the same day. NEET has negative marking, so notice whether you are losing marks by guessing; if so, practise leaving uncertain questions.',
    ],
    tips: ['Read NCERT before taking the test, not after.', 'Make short tables for classification, hormones and reactions.', 'Revise the Mistake Notebook daily.', 'Move to full NEET tests once most chapters are done.'],
    faqs: common.faqs,
  },
  cuet: {
    title: 'How to use these CUET chapter tests',
    paras: [
      'CUET domain subjects follow the Class 12 NCERT syllabus. Chapter tests give a quick check of how well you remember the content and how you handle objective questions under time pressure.',
      'Choose subjects that match your target courses and universities, then practise only those chapters in depth. Alongside, build the General Test skills of reasoning, numerical ability and awareness through the daily quiz.',
      'Since CUET is a computer-based test with negative marking in recent cycles, practise answering quickly and skipping uncertain questions.',
    ],
    tips: ['Check your target university subject requirements before choosing papers.', 'Read NCERT examples and in-text questions.', 'Use the daily quiz for general awareness.', 'Practise with a timer from the first week.'],
    faqs: common.faqs,
  },
  'class-12-board': {
    title: 'How to use these Class 12 board chapter tests',
    paras: [
      'Board exams reward clear understanding of the NCERT chapters. These objective tests help you check that understanding quickly and are good for the first round of revision.',
      'After each test, go back to the exact lines in the textbook for questions you missed, and write short notes in your own words. Combine objective practice with written answers, since boards also have descriptive questions.',
      'If you are also preparing for entrance exams like JEE, NEET or CUET, the same chapter practice supports both goals.',
    ],
    tips: ['Revise NCERT first, then test.', 'Write answers for descriptive questions separately.', 'Use previous year board papers from official sources.', 'Keep one notebook for formulas and definitions.'],
    faqs: common.faqs,
  },
};

export const mockNoteFor = (slug: string): MockNote | undefined => MOCK_NOTES[slug.replace(/-hindi$/, '')];
