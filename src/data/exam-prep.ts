export type Prep = {
  plan: { phase: string; weeks: string; focus: string }[];
  tips: { subject: string; points: string[] }[];
  mistakes: string[];
  similar?: { slug: string; why: string };
  usage: string;
};

const quantTips = ['Memorise squares up to 30, cubes up to 15 and fraction-percentage equivalents (1/7 = 14.28%) so calculations take seconds.', 'Solve each topic in sets of 20 questions, then re-solve the ones you took more than a minute on.', 'Practise data interpretation from tables, bar charts and pie charts every second day.'];
const reasonTips = ['Learn one clean method per question type (for example, a seating-arrangement grid) and stick to it.', 'Practise puzzles untimed first, then add a 90-second limit per puzzle.', 'Skip lengthy puzzles in the first pass during a mock; return to them with the time left.'];
const engTips = ['Read one editorial or passage daily and note five new words with meanings and a sentence of your own.', 'Revise grammar rules (subject-verb agreement, tenses, prepositions) before attempting error-spotting sets.', 'In comprehension, read the questions first and then scan the passage for the answers.'];

export const EXAM_PREP: Record<string, Prep> = {
  'ssc-cgl': {
    plan: [
      { phase: 'Foundation', weeks: 'Weeks 1 to 6', focus: 'Finish basic arithmetic, algebra and geometry; revise English grammar; read NCERT-level history, polity and geography notes once.' },
      { phase: 'Topic practice', weeks: 'Weeks 7 to 12', focus: 'Solve topic-wise sets with a timer. Track accuracy per topic and fix the weakest three.' },
      { phase: 'Mock phase', weeks: 'Weeks 13 to 18', focus: 'Two full practice tests a week. Spend at least as long reviewing each test as you spent attempting it.' },
      { phase: 'Final revision', weeks: 'Last 2 weeks', focus: 'Revise formulas, vocabulary and your Mistake Notebook. Take one test every two days to keep speed.' },
    ],
    tips: [
      { subject: 'Quantitative Aptitude', points: quantTips },
      { subject: 'Reasoning', points: reasonTips },
      { subject: 'English', points: engTips },
      { subject: 'General Awareness', points: ['Divide static GK into history, geography, polity, economy and science and revise one block per day.', 'Use short notes and the daily quiz for quick recall rather than rereading long chapters.'] },
    ],
    mistakes: ['Attempting every question; with negative marking, guessing blindly lowers your score.', 'Studying new topics in the last month instead of revising.', 'Taking mocks but not analysing them.', 'Ignoring General Awareness, which is the fastest section to score in.'],
    usage: 'Take a practice test, read every explanation, then use the Mistake Notebook to revise wrong answers after 1, 3 and 7 days. Tick topics in the syllabus tracker as you finish them.',
  },
  'ssc-chsl': {
    plan: [
      { phase: 'Foundation', weeks: 'Weeks 1 to 5', focus: 'Class 10 level maths, basic grammar and a first pass of general awareness.' },
      { phase: 'Topic practice', weeks: 'Weeks 6 to 10', focus: 'Timed topic sets; keep a log of accuracy and time per question.' },
      { phase: 'Mock phase', weeks: 'Weeks 11 to 15', focus: 'Full tests twice a week with a review session after each.' },
      { phase: 'Final revision', weeks: 'Last 2 weeks', focus: 'Formulas, vocabulary, one-liners and wrong-answer revision only.' },
    ],
    tips: [
      { subject: 'Quantitative Aptitude', points: quantTips },
      { subject: 'Reasoning', points: reasonTips },
      { subject: 'English', points: engTips },
      { subject: 'General Awareness', points: ['Prioritise polity, geography and basic science because they repeat often.', 'Revise important days, awards and schemes through the daily quiz.'] },
    ],
    mistakes: ['Spending too long on one hard question; the exam rewards speed.', 'Not practising typing and data-entry skills if your target post needs them.', 'Skipping English because it looks easy; it is often where marks are lost.'],
    similar: { slug: 'ssc-cgl', why: 'SSC CGL Tier I has the same sections and marking, so its tests are good extra practice.' },
    usage: 'Use the SSC CHSL practice tests for timed accuracy and the daily quiz for general awareness. Revise misses from the Mistake Notebook.',
  },
  'rrb-ntpc': {
    plan: [
      { phase: 'Foundation', weeks: 'Weeks 1 to 5', focus: 'Basic maths (percentages, ratio, time and work) and reasoning patterns; start a General Awareness notebook.' },
      { phase: 'Topic practice', weeks: 'Weeks 6 to 10', focus: 'Daily sets in Maths and Reasoning; 40 general awareness questions a day through quizzes.' },
      { phase: 'Mock phase', weeks: 'Weeks 11 to 14', focus: 'Full 90-minute CBT-style practice and section-wise timing.' },
      { phase: 'Final revision', weeks: 'Last 2 weeks', focus: 'One-liners, railway-related static GK, formulas and wrong-answer revision.' },
    ],
    tips: [
      { subject: 'Mathematics', points: ['Focus on arithmetic first; it forms most of the paper.', 'Practise calculations without a calculator for speed.'] },
      { subject: 'Reasoning', points: reasonTips },
      { subject: 'General Awareness', points: ['General Awareness carries the largest share of questions, so give it daily time.', 'Cover history, geography, polity, economy, science, sports and current events with a quiz-based routine.'] },
    ],
    mistakes: ['Ignoring the one-third negative marking and guessing randomly.', 'Memorising facts without understanding the topics they come from.', 'Not checking the exact post-wise requirements in the notification.'],
    similar: { slug: 'ssc-cgl', why: 'Practice tests for SSC CGL cover the same arithmetic, reasoning and general awareness skills.' },
    usage: 'Use the SSC CGL tests for Maths and Reasoning practice and the daily quiz for General Awareness.',
  },
  'ibps-po': {
    plan: [
      { phase: 'Foundation', weeks: 'Weeks 1 to 6', focus: 'Learn simplification, number series, quadratic equations and reasoning puzzles; build English reading habit.' },
      { phase: 'Sectional practice', weeks: 'Weeks 7 to 12', focus: 'Practise each section with its own time limit (20 minutes each is a common target).' },
      { phase: 'Mock phase', weeks: 'Weeks 13 to 18', focus: 'Full 60-minute prelims tests, then Mains-level data interpretation and puzzles.' },
      { phase: 'Mains and interview', weeks: 'After prelims', focus: 'Banking awareness, descriptive writing and current affairs; prepare for the interview.' },
    ],
    tips: [
      { subject: 'Quantitative Aptitude', points: ['Learn calculation shortcuts for simplification and approximation.', 'Master quadratic equations and number series patterns, which are fast scoring.'] },
      { subject: 'Reasoning', points: ['Puzzles and seating arrangement decide your attempt count. Practise 3 to 4 puzzles a day.', 'Learn syllogism and inequality rules by diagrams.'] },
      { subject: 'English', points: engTips },
    ],
    mistakes: ['Spending more than the sectional limit on a single section.', 'Skipping banking awareness until after prelims.', 'Attempting too few questions out of fear of negative marking.'],
    similar: { slug: 'sbi-clerk', why: 'SBI Clerk prelims has the same sections, timing and marking, so its tests are the closest practice available.' },
    usage: 'Use the SBI Clerk practice tests for sectional timing and the daily quiz for banking awareness. Add your mistakes to the notebook.',
  },
  'sbi-clerk': {
    plan: [
      { phase: 'Foundation', weeks: 'Weeks 1 to 5', focus: 'Arithmetic basics, number series, reasoning puzzles and grammar.' },
      { phase: 'Sectional practice', weeks: 'Weeks 6 to 10', focus: 'Timed sets for each section; log time per question.' },
      { phase: 'Mock phase', weeks: 'Weeks 11 to 15', focus: 'Full prelims tests twice a week with analysis.' },
      { phase: 'Mains', weeks: 'After prelims', focus: 'General and financial awareness, computer aptitude and mains-level reasoning.' },
    ],
    tips: [
      { subject: 'Numerical Ability', points: ['Practise simplification and approximation daily for speed.', 'Learn the standard data interpretation formats: table, bar, line and pie.'] },
      { subject: 'Reasoning', points: reasonTips },
      { subject: 'English', points: engTips },
    ],
    mistakes: ['Not practising with the exact sectional time limits.', 'Neglecting banking and financial awareness for mains.', 'Skipping review of wrong answers.'],
    usage: 'Take the SBI Clerk practice tests with the timer, analyse your section-wise accuracy and revise errors in the notebook.',
  },
  'rbi-grade-b': {
    plan: [
      { phase: 'Foundation', weeks: 'Months 1 to 2', focus: 'Basics of economics, finance, banking and polity, plus reasoning and quant fundamentals.' },
      { phase: 'Phase I focus', weeks: 'Months 3 to 4', focus: 'Reasoning, quant, English and general awareness with timed sets.' },
      { phase: 'Phase II focus', weeks: 'Months 5 to 6', focus: 'Economic and Social Issues, Finance and Management; descriptive writing.' },
      { phase: 'Mocks and interview', weeks: 'Final month', focus: 'Phase I and II mocks, interview preparation and current-affairs revision.' },
    ],
    tips: [
      { subject: 'General Awareness', points: ['Follow RBI policy statements, the Budget and the Economic Survey from official summaries.', 'Learn financial markets and banking terms with examples.'] },
      { subject: 'Reasoning and Quant', points: ['Reasoning has a high share of marks, so build speed in puzzles and data sufficiency.', ...quantTips.slice(0, 2)] },
      { subject: 'Phase II', points: ['Write short, structured answers on economic issues with a point, an example and a conclusion.', 'Read about growth, inflation, poverty, financial inclusion and monetary policy.'] },
    ],
    mistakes: ['Treating it like a bank PO exam and skipping economics depth.', 'Reading news without noting the underlying concept.', 'Not practising descriptive writing.'],
    similar: { slug: 'sbi-clerk', why: 'SBI Clerk tests are good for building reasoning and quant speed, which you also need in Phase I.' },
    usage: 'Practise reasoning and quant with the SBI Clerk tests and revise concepts through the economy, banking and finance guide in the current-affairs section.',
  },
  neet: {
    plan: [
      { phase: 'NCERT mastery', weeks: 'Months 1 to 4', focus: 'Read NCERT Biology line by line; cover Physics and Chemistry concepts with worked examples.' },
      { phase: 'Chapter practice', weeks: 'Months 5 to 8', focus: 'Solve chapter-wise questions right after finishing each chapter.' },
      { phase: 'Full tests', weeks: 'Months 9 to 11', focus: 'Weekly full-length tests at the same time of day as the exam.' },
      { phase: 'Revision', weeks: 'Last 4 weeks', focus: 'Revise NCERT diagrams, tables, formulas and your wrong answers only.' },
    ],
    tips: [
      { subject: 'Biology', points: ['Biology is 90 of 180 questions in the recent pattern, so treat NCERT as the base text.', 'Make tables for classification, hormones and diseases.'] },
      { subject: 'Chemistry', points: ['Learn physical chemistry formulas with units and practise numericals every day.', 'Revise the periodic table trends and named reactions in organic chemistry.'] },
      { subject: 'Physics', points: ['Focus on mechanics, electrostatics, current electricity and modern physics, which repeat often.', 'Solve numericals by writing the formula first, then substituting.'] },
    ],
    mistakes: ['Skipping NCERT diagrams and examples.', 'Neglecting negative marking; wrong answers cost 1 mark each.', 'Attempting mock tests without reviewing them.'],
    usage: 'Take the NEET practice tests under timed conditions, then use topic-wise analysis to find your weakest chapters and take the matching chapter tests.',
  },
  jipmer: {
    plan: [
      { phase: 'Concept base', weeks: 'Months 1 to 4', focus: 'Complete NCERT Class 11 and 12 Physics, Chemistry and Biology.' },
      { phase: 'Practice', weeks: 'Months 5 to 8', focus: 'Chapter tests and previous-year-style questions.' },
      { phase: 'Full tests', weeks: 'Months 9 to 11', focus: 'NEET-style full tests with strict timing.' },
      { phase: 'Counselling readiness', weeks: 'After results', focus: 'Understand the counselling process, documents and cut-offs from official sources.' },
    ],
    tips: [
      { subject: 'Biology', points: ['NCERT-first preparation, with extra attention to human physiology and genetics.'] },
      { subject: 'Physics and Chemistry', points: ['Practise numericals daily and revise formulae sheets weekly.'] },
    ],
    mistakes: ['Looking for a separate JIPMER entrance paper; admission follows the NEET UG route, so verify on the official site.', 'Ignoring official counselling schedules.'],
    similar: { slug: 'neet', why: 'JIPMER MBBS admission depends on NEET UG, so NEET practice tests are the best preparation.' },
    usage: 'Use the NEET practice tests and chapter tests. Track topics in the syllabus tracker and revise errors in the notebook.',
  },
  'jee-main': {
    plan: [
      { phase: 'Concepts', weeks: 'Months 1 to 5', focus: 'Finish Class 11 and 12 syllabus with worked examples for every chapter.' },
      { phase: 'Chapter practice', weeks: 'Months 6 to 8', focus: 'Solve chapter-wise tests and numerical-value questions right after studying each chapter.' },
      { phase: 'Full tests', weeks: 'Months 9 to 11', focus: 'Weekly 3-hour full tests, with a strategy for the order of subjects.' },
      { phase: 'Revision', weeks: 'Last 100 days', focus: 'Follow the daily revision series with one chapter test a day.' },
    ],
    tips: [
      { subject: 'Mathematics', points: ['Coordinate geometry, calculus and algebra carry high weight; practise a variety of problem types.', 'Maintain a formula sheet and revise it weekly.'] },
      { subject: 'Physics', points: ['Understand the concept before formula-based solving; draw diagrams for mechanics and optics.', 'Practise numerical-value questions for accuracy.'] },
      { subject: 'Chemistry', points: ['Physical chemistry is formula-based and scoring; inorganic needs NCERT memory; organic needs mechanisms.'] },
    ],
    mistakes: ['Overstudying one subject while neglecting another.', 'Not practising numerical-type questions.', 'Starting new topics in the last month.'],
    usage: 'Do daily chapter tests from the daily series, take full JEE Main tests weekly and keep all wrong answers in the notebook for revision.',
  },
  'jee-advanced': {
    plan: [
      { phase: 'Deep concepts', weeks: 'Months 1 to 5', focus: 'Study each chapter at advanced depth with multi-concept problems.' },
      { phase: 'Problem solving', weeks: 'Months 6 to 9', focus: 'Solve few but hard problems daily; analyse approaches before reading solutions.' },
      { phase: 'Paper practice', weeks: 'Months 10 to 11', focus: 'Full two-paper simulations with strict timing.' },
      { phase: 'Revision', weeks: 'Final month', focus: 'Revise key theorems, derivations and error logs.' },
    ],
    tips: [
      { subject: 'Mathematics', points: ['Prove results yourself to build intuition; Advanced rewards reasoning over formula recall.'] },
      { subject: 'Physics', points: ['Practise problems that combine two or three concepts such as mechanics with rotation.'] },
      { subject: 'Chemistry', points: ['Organic mechanisms, coordination chemistry and physical chemistry calculations need regular practice.'] },
    ],
    mistakes: ['Relying only on JEE Main style practice.', 'Skipping the information brochure and marking-scheme changes.', 'Not reviewing wrong attempts.'],
    similar: { slug: 'jee-main', why: 'JEE Main tests build the base; use them first, then move to advanced-level problems.' },
    usage: 'Use JEE Main practice and chapter tests to build the base, then add harder problem sets from your books. Track chapters in the syllabus tracker.',
  },
  gate: {
    plan: [
      { phase: 'Core subjects', weeks: 'Months 1 to 4', focus: 'Cover the core subjects of your branch and engineering mathematics.' },
      { phase: 'Practice', weeks: 'Months 5 to 7', focus: 'Solve topic-wise previous year questions and numerical-answer questions.' },
      { phase: 'Mocks', weeks: 'Months 8 to 9', focus: 'Full tests with the real GATE interface and calculator rules.' },
      { phase: 'Revision', weeks: 'Final month', focus: 'Formula sheets, short notes and error logs.' },
    ],
    tips: [
      { subject: 'General Aptitude', points: ['Practise verbal and numerical aptitude; it is 15 marks and scores quickly.'] },
      { subject: 'Core subject', points: ['Prioritise high-weight topics in your branch from previous year papers.', 'Use the PYQ links to study patterns across years.'] },
      { subject: 'Engineering mathematics', points: ['Linear algebra, calculus and probability are common to many branches.'] },
    ],
    mistakes: ['Ignoring negative marking on MCQs.', 'Studying without solving previous year papers.', 'Not practising numerical-answer questions.'],
    usage: 'Use the PYQ links for your branch, mark topics in the syllabus tracker and keep wrong answers in the notebook.',
  },
  cuet: {
    plan: [
      { phase: 'NCERT base', weeks: 'Months 1 to 3', focus: 'Revise Class 12 NCERT for each domain subject you chose.' },
      { phase: 'Chapter practice', weeks: 'Months 4 to 5', focus: 'Solve chapter-wise questions and the Class 12 board-style mock tests.' },
      { phase: 'General Test', weeks: 'Months 5 to 6', focus: 'Practise general knowledge, current affairs, reasoning and numerical ability.' },
      { phase: 'Mocks', weeks: 'Final month', focus: 'Subject-wise timed tests under the exam pattern.' },
    ],
    tips: [
      { subject: 'Domain subjects', points: ['NCERT is the primary source; read examples and in-text questions.', 'Use chapter-wise tests right after finishing a chapter.'] },
      { subject: 'General Test', points: ['Daily quiz and current-affairs practice help with GK; practise logical reasoning for accuracy.'] },
      { subject: 'Language', points: ['Read passages daily and practise vocabulary and grammar questions.'] },
    ],
    mistakes: ['Choosing subjects without checking your target university requirements.', 'Ignoring negative marking.', 'Not practising with the computer-based format.'],
    similar: { slug: 'neet', why: 'For Science subjects, NEET and JEE chapter tests build NCERT-level concept strength.' },
    usage: 'Use the CUET and Class 12 board mock tests for chapter practice, the daily quiz for the General Test and the syllabus tracker to plan your subjects.',
  },
};
