export type Syllabus = { subject: string; topics: string[] }[];

export type ExamExtra = {
  body: string;
  mode: string;
  pattern: string;
  marking: string;
  attemptsNote: string;
  syllabus: Syllabus;
  faqs: { q: string; a: string }[];
  guide?: { href: string; label: string };
};

const NOTE = 'Exam patterns change from year to year. Always confirm the latest pattern and dates on the official notification before you plan your preparation.';

const quant = ['Number system', 'Simplification & approximation', 'Percentage', 'Ratio & proportion', 'Average', 'Profit, loss & discount', 'Simple & compound interest', 'Time & work', 'Time, speed & distance', 'Mixture & alligation', 'Algebra', 'Geometry', 'Mensuration', 'Trigonometry', 'Data interpretation'];
const reasoning = ['Analogy & classification', 'Number & letter series', 'Coding-decoding', 'Blood relations', 'Direction sense', 'Syllogism', 'Venn diagrams', 'Seating arrangement & puzzles', 'Order & ranking', 'Statement & conclusion', 'Non-verbal reasoning'];
const english = ['Reading comprehension', 'Cloze test', 'Error spotting', 'Sentence improvement', 'Para jumbles', 'Synonyms & antonyms', 'Idioms & phrases', 'One-word substitution', 'Active-passive & direct-indirect'];
const gs = ['History (ancient, medieval, modern)', 'Geography', 'Indian polity', 'Indian economy', 'General science', 'Static GK', 'Current affairs'];

export const EXAM_EXTRA: Record<string, ExamExtra> = {
  'ssc-cgl': {
    body: 'SSC CGL (Combined Graduate Level) is conducted by the Staff Selection Commission for Group B and Group C posts in central government ministries, departments and offices. Selection is multi-stage, and Tier I is a computer-based screening test that decides who moves forward.',
    mode: 'Computer-based test (CBT)',
    pattern: 'Tier I: 100 questions in 60 minutes across Reasoning, General Awareness, Quantitative Aptitude and English (25 each).',
    marking: '2 marks per correct answer, 0.5 mark deducted per wrong answer.',
    attemptsNote: NOTE,
    syllabus: [
      { subject: 'Quantitative Aptitude', topics: quant },
      { subject: 'General Intelligence & Reasoning', topics: reasoning },
      { subject: 'English Comprehension', topics: english },
      { subject: 'General Awareness', topics: gs },
    ],
    faqs: [
      { q: 'How many practice tests are available for SSC CGL on Selection Pro?', a: 'Every SSC CGL practice test listed on this page is a complete set with answers and explanations. New sets are added as they are reviewed.' },
      { q: 'Is there negative marking in SSC CGL Tier I?', a: 'Yes. 0.5 mark is deducted for every wrong answer in Tier I. Our practice tests apply the same scheme so your score is realistic.' },
      { q: 'How should I use PYQs for SSC CGL?', a: 'Solve one paper under timed conditions, mark every mistake in the Mistake Notebook, and revisit those questions after 1, 3 and 7 days.' },
    ],
    guide: { href: '/exam-guides/ssc-cgl', label: 'SSC CGL complete guide' },
  },
  'ssc-chsl': {
    body: 'SSC CHSL (Combined Higher Secondary Level) recruits 12th-pass candidates for posts such as Lower Division Clerk, Junior Secretariat Assistant, Postal Assistant and Data Entry Operator. Tier I is a CBT on the same four sections as CGL but with a 12th-level syllabus.',
    mode: 'Computer-based test (CBT)',
    pattern: 'Tier I: 100 questions in 60 minutes (Reasoning, General Awareness, Quantitative Aptitude and English, 25 each).',
    marking: '2 marks per correct answer, 0.5 mark deducted per wrong answer.',
    attemptsNote: NOTE,
    syllabus: [
      { subject: 'Quantitative Aptitude', topics: quant.slice(0, 12) },
      { subject: 'General Intelligence & Reasoning', topics: reasoning },
      { subject: 'English Language', topics: english },
      { subject: 'General Awareness', topics: gs },
    ],
    faqs: [
      { q: 'Who can apply for SSC CHSL?', a: 'Candidates who have passed Class 12 (or are in their final year, as permitted in the notification) and meet the age limit can apply. Check the official notification for post-wise criteria.' },
      { q: 'Is SSC CHSL easier than SSC CGL?', a: 'The syllabus is a level lower, but competition is intense and cut-offs depend on speed and accuracy, so timed practice matters more than reading theory.' },
    ],
  },
  'rrb-ntpc': {
    body: 'RRB NTPC (Non-Technical Popular Categories) recruits for graduate and under-graduate level posts in Indian Railways such as Goods Guard, Station Master, Commercial Apprentice and Clerk. CBT 1 is a common screening stage for most posts.',
    mode: 'Computer-based test (CBT)',
    pattern: 'CBT 1: 100 questions in 90 minutes covering General Awareness, Mathematics and General Intelligence & Reasoning.',
    marking: '1 mark per correct answer, one-third mark deducted per wrong answer.',
    attemptsNote: NOTE,
    syllabus: [
      { subject: 'Mathematics', topics: ['Number system', 'Decimals & fractions', 'LCM & HCF', 'Ratio & proportion', 'Percentage', 'Mensuration', 'Time & work', 'Time & distance', 'Simple & compound interest', 'Profit & loss', 'Elementary algebra', 'Geometry & trigonometry', 'Statistics'] },
      { subject: 'General Intelligence & Reasoning', topics: reasoning },
      { subject: 'General Awareness', topics: ['History', 'Geography', 'Indian polity', 'Economy', 'General science', 'Sports & awards', 'Railway & static GK', 'Current affairs'] },
    ],
    faqs: [
      { q: 'What is the marking scheme in RRB NTPC CBT 1?', a: 'Each correct answer carries 1 mark and each wrong answer costs one-third of a mark.' },
      { q: 'Which section should I prepare first?', a: 'Start with Mathematics and Reasoning because they reward practice, then build General Awareness steadily with daily revision.' },
    ],
  },
  'ibps-po': {
    body: 'IBPS PO recruits Probationary Officers and Management Trainees for participating public sector banks. Selection runs through Prelims, Mains and Interview, and Prelims is a qualifying screening round.',
    mode: 'Online test',
    pattern: 'Prelims: 100 questions in 60 minutes: English (30), Quantitative Aptitude (35) and Reasoning Ability (35), with sectional timing.',
    marking: '1 mark per correct answer, 0.25 mark deducted per wrong answer.',
    attemptsNote: NOTE,
    syllabus: [
      { subject: 'Quantitative Aptitude', topics: ['Simplification', 'Number series', 'Quadratic equations', 'Data interpretation', 'Arithmetic word problems', 'Approximation'] },
      { subject: 'Reasoning Ability', topics: ['Puzzles & seating arrangement', 'Syllogism', 'Inequalities', 'Coding-decoding', 'Blood relations', 'Direction sense', 'Input-output'] },
      { subject: 'English Language', topics: ['Reading comprehension', 'Cloze test', 'Error spotting', 'Para jumbles', 'Fillers'] },
      { subject: 'Banking & General Awareness (Mains)', topics: ['Banking awareness', 'Monetary policy basics', 'Financial institutions', 'Government schemes', 'Current affairs'] },
    ],
    faqs: [
      { q: 'How many attempts or what age limit applies?', a: 'Eligibility such as age and attempts is published in each IBPS notification. Read the official notice before applying.' },
      { q: 'Is there sectional timing in IBPS PO Prelims?', a: 'Yes, each section has its own time limit, so practise switching sections on time rather than spending extra minutes on one section.' },
    ],
    guide: { href: '/guides/banking-guide', label: 'Banking exams syllabus guide' },
  },
  'sbi-clerk': {
    body: 'SBI Clerk (Junior Associate) recruits customer-support and sales staff for State Bank of India branches. Prelims is a timed objective test and Mains adds General/Financial Awareness and Computer Aptitude.',
    mode: 'Online test',
    pattern: 'Prelims: 100 questions in 60 minutes: English (30), Numerical Ability (35) and Reasoning Ability (35).',
    marking: '1 mark per correct answer, 0.25 mark deducted per wrong answer.',
    attemptsNote: NOTE,
    syllabus: [
      { subject: 'Numerical Ability', topics: ['Simplification', 'Number series', 'Quadratic equations', 'Data interpretation', 'Percentage & ratio', 'Time, work & distance', 'Profit & loss', 'Interest'] },
      { subject: 'Reasoning Ability', topics: ['Puzzles', 'Seating arrangement', 'Syllogism', 'Inequality', 'Coding-decoding', 'Blood relations', 'Direction sense'] },
      { subject: 'English Language', topics: ['Reading comprehension', 'Cloze test', 'Error spotting', 'Para jumbles', 'Vocabulary'] },
      { subject: 'General / Financial Awareness (Mains)', topics: ['Banking basics', 'RBI & monetary policy', 'Budget & economy', 'Schemes', 'Current affairs'] },
    ],
    faqs: [
      { q: 'Are the SBI Clerk practice tests timed?', a: 'Yes, you can run each test with a countdown that matches the exam pace and review explanations once you submit.' },
    ],
    guide: { href: '/guides/banking-guide', label: 'Banking exams syllabus guide' },
  },
  'rbi-grade-b': {
    body: 'RBI Grade B (Officers in Grade B, General) is one of the most respected central banking recruitments. The process includes Phase I, Phase II and an interview, and the paper tests aptitude as well as economics, finance and management.',
    mode: 'Online test',
    pattern: 'Phase I: 200 questions in 120 minutes: General Awareness (80), English (30), Quantitative Aptitude (30) and Reasoning (60).',
    marking: '1 mark per correct answer, 0.25 mark deducted per wrong answer in Phase I.',
    attemptsNote: NOTE,
    syllabus: [
      { subject: 'General Awareness', topics: ['Indian economy', 'Monetary policy & RBI functions', 'Banking & financial markets', 'Government schemes', 'Budget & Economic Survey', 'Current affairs'] },
      { subject: 'Quantitative Aptitude', topics: quant.slice(0, 11) },
      { subject: 'Reasoning', topics: reasoning },
      { subject: 'English Language', topics: english },
      { subject: 'Phase II subjects', topics: ['Economic & Social Issues', 'Finance & Management', 'English (descriptive writing)'] },
    ],
    faqs: [
      { q: 'How is RBI Grade B different from bank PO exams?', a: 'Phase II tests economics, social issues, finance and management in depth, so conceptual understanding matters more than speed tricks.' },
    ],
  },
  neet: {
    body: 'NEET UG is the single national entrance test for MBBS, BDS, AYUSH and allied courses, conducted by the National Testing Agency. The paper is based on the NCERT syllabus of Classes 11 and 12.',
    mode: 'Pen-and-paper (OMR) test',
    pattern: 'Physics, Chemistry and Biology (Botany and Zoology); 180 questions in 3 hours in the recent pattern.',
    marking: '4 marks per correct answer, 1 mark deducted per wrong answer.',
    attemptsNote: NOTE,
    syllabus: [
      { subject: 'Physics', topics: ['Units & measurements', 'Kinematics', 'Laws of motion', 'Work, energy & power', 'Rotational motion', 'Gravitation', 'Properties of matter', 'Thermodynamics', 'Oscillations & waves', 'Electrostatics', 'Current electricity', 'Magnetism & EMI', 'Optics', 'Modern physics', 'Semiconductors'] },
      { subject: 'Chemistry', topics: ['Some basic concepts', 'Atomic structure', 'Chemical bonding', 'Thermodynamics', 'Equilibrium', 'Redox', 'Organic basics', 'Hydrocarbons', 'Solutions', 'Electrochemistry', 'Chemical kinetics', 'Coordination compounds', 'Haloalkanes & haloarenes', 'Alcohols, phenols & ethers', 'Aldehydes, ketones & acids', 'Amines', 'Biomolecules'] },
      { subject: 'Biology', topics: ['Diversity of living organisms', 'Cell structure & division', 'Biomolecules', 'Plant physiology', 'Human physiology', 'Reproduction', 'Genetics & evolution', 'Biotechnology', 'Ecology & environment', 'Human health & disease'] },
    ],
    faqs: [
      { q: 'Should I read NCERT line by line for NEET?', a: 'Yes, especially for Biology and Inorganic Chemistry. Many questions are framed directly from NCERT statements and diagrams.' },
      { q: 'How many NEET mocks should I attempt before the exam?', a: 'Aim for one full-length test every week in the last three months, and spend twice as long reviewing as attempting.' },
    ],
  },
  jipmer: {
    body: 'JIPMER (Jawaharlal Institute of Postgraduate Medical Education and Research) offers MBBS seats that are filled through the NEET UG score and counselling. Preparing for NEET is therefore the main preparation for JIPMER.',
    mode: 'Via NEET UG score',
    pattern: 'Admission is based on NEET UG rank followed by counselling; refer to the official JIPMER and counselling notices for details.',
    marking: 'Same as NEET UG: 4 marks per correct answer, 1 mark deducted per wrong answer.',
    attemptsNote: NOTE,
    syllabus: [
      { subject: 'Physics', topics: ['Mechanics', 'Heat & thermodynamics', 'Electricity & magnetism', 'Optics', 'Modern physics'] },
      { subject: 'Chemistry', topics: ['Physical chemistry', 'Inorganic chemistry', 'Organic chemistry'] },
      { subject: 'Biology', topics: ['Botany', 'Zoology', 'Human physiology', 'Genetics', 'Ecology'] },
    ],
    faqs: [
      { q: 'What should I study first for JIPMER MBBS?', a: 'Complete NCERT Biology first, then Chemistry and Physics. Since admission uses the NEET UG score, follow the NEET syllabus and practise NEET-style questions.' },
      { q: 'How is counselling done?', a: 'Counselling is conducted through official admission authorities after NEET UG results. Follow the official notices for dates, documents and choice filling.' },
      { q: 'Is there a separate JIPMER MBBS entrance exam?', a: 'MBBS admission to JIPMER is through NEET UG counselling. Always verify on the official websites since admission rules can change.' },
    ],
  },
  'jee-main': {
    body: 'JEE Main is the national entrance exam for NITs, IIITs and other centrally funded technical institutions, and it is also the qualifying round for JEE Advanced. The paper tests Physics, Chemistry and Mathematics at the Class 11 and 12 level.',
    mode: 'Computer-based test (CBT)',
    pattern: 'Paper 1 (B.E./B.Tech): 75 questions (25 each in Physics, Chemistry, Mathematics) in 3 hours, with multiple-choice and numerical-value questions.',
    marking: 'Multiple-choice: 4 marks for a correct answer and 1 mark deducted for a wrong one. Check the bulletin for numerical-value rules.',
    attemptsNote: NOTE,
    syllabus: [
      { subject: 'Mathematics', topics: ['Sets, relations & functions', 'Complex numbers & quadratic equations', 'Matrices & determinants', 'Permutations & combinations', 'Binomial theorem', 'Sequences & series', 'Limits, continuity & derivatives', 'Integrals', 'Differential equations', 'Straight lines & circles', 'Conic sections', 'Three-dimensional geometry', 'Vector algebra', 'Probability', 'Trigonometry'] },
      { subject: 'Physics', topics: ['Units & measurements', 'Kinematics', 'Laws of motion', 'Work, energy & power', 'Rotational motion', 'Gravitation', 'Properties of solids & fluids', 'Thermodynamics', 'Kinetic theory', 'Oscillations & waves', 'Electrostatics', 'Current electricity', 'Magnetism & EMI', 'Alternating current', 'Optics', 'Dual nature & atoms', 'Nuclei', 'Semiconductors'] },
      { subject: 'Chemistry', topics: ['Some basic concepts', 'Atomic structure', 'Periodicity', 'Chemical bonding', 'Thermodynamics', 'Equilibrium', 'Redox', 'Solutions', 'Electrochemistry', 'Chemical kinetics', 'd and f block', 'Coordination compounds', 'Organic basics', 'Hydrocarbons', 'Haloalkanes & haloarenes', 'Alcohols, phenols & ethers', 'Aldehydes, ketones & acids', 'Amines', 'Biomolecules'] },
    ],
    faqs: [
      { q: 'Are the JEE Main practice tests based on the latest pattern?', a: 'They mirror the 75-question structure and carry full explanations. Use them for timed practice and then study the explanation of each wrong answer.' },
      { q: 'Do you have a revision plan for JEE Main?', a: 'Yes, see the 100-day revision series for a day-by-day plan with daily chapter tests.' },
    ],
    guide: { href: '/revision-series/jee-main', label: 'JEE Main 100-day revision series' },
  },
  'jee-advanced': {
    body: 'JEE Advanced is the gateway to the IITs. It is open only to top JEE Main rankers and is known for concept-heavy, multi-step problems that reward deep understanding over speed.',
    mode: 'Computer-based test (two papers)',
    pattern: 'Two compulsory papers in Physics, Chemistry and Mathematics; question types and marking change from year to year.',
    marking: 'Varies by section and year. Read the information brochure carefully.',
    attemptsNote: NOTE,
    syllabus: [
      { subject: 'Mathematics', topics: ['Algebra', 'Trigonometry', 'Differential calculus', 'Integral calculus', 'Analytical geometry', 'Vectors', 'Probability'] },
      { subject: 'Physics', topics: ['General physics', 'Mechanics', 'Thermal physics', 'Electricity & magnetism', 'Optics', 'Modern physics'] },
      { subject: 'Chemistry', topics: ['Physical chemistry', 'Inorganic chemistry', 'Organic chemistry'] },
    ],
    faqs: [
      { q: 'Who is eligible for JEE Advanced?', a: 'Only candidates who qualify through JEE Main, within the rank cut-off announced each year, can appear. Check the official brochure for attempt limits and age rules.' },
      { q: 'How many hours of study are needed?', a: 'Consistent, focused study of 6 to 8 hours on most days, with weekly problem-solving sessions, works better than irregular long marathons.' },
      { q: 'How is JEE Advanced preparation different from JEE Main?', a: 'JEE Advanced needs multi-concept problem solving, so spend more time on fewer, harder problems and learn to derive results rather than memorise them.' },
    ],
  },
  gate: {
    body: 'GATE (Graduate Aptitude Test in Engineering) tests undergraduate-level engineering and science subjects. Scores are used for M.Tech/PhD admissions and by several public sector undertakings for recruitment.',
    mode: 'Computer-based test',
    pattern: '65 questions for 100 marks in 3 hours: General Aptitude (15 marks) and the chosen subject paper (85 marks).',
    marking: 'MCQs carry 1 or 2 marks with negative marking of one-third of the marks; numerical-answer questions have no negative marking.',
    attemptsNote: NOTE,
    syllabus: [
      { subject: 'General Aptitude', topics: ['Verbal ability', 'Quantitative aptitude', 'Analytical reasoning', 'Spatial aptitude'] },
      { subject: 'Engineering Mathematics', topics: ['Linear algebra', 'Calculus', 'Differential equations', 'Probability & statistics', 'Numerical methods'] },
      { subject: 'Core subject', topics: ['Core topics of your branch (see the official GATE syllabus)', 'Previous year papers', 'Mock tests'] },
    ],
    faqs: [
      { q: 'Can I use a calculator in GATE?', a: 'GATE provides a virtual calculator in the test interface. Practise with it before the exam and check the current rules in the official brochure.' },
      { q: 'Which subjects have the highest weight?', a: 'It differs by branch. Study the weightage of your branch from previous year papers and prioritise those topics first.' },
      { q: 'Where do I find GATE previous year papers?', a: 'The PYQ tab on this page links to the paper collections by year. Always cross-check with the official GATE website.' },
    ],
  },
  cuet: {
    body: 'CUET (Common University Entrance Test) is conducted by the NTA for admission to undergraduate programmes in central and many participating universities. Its subject-wise tests are based on the NCERT syllabus of Class 12.',
    mode: 'Computer-based test',
    pattern: 'Subject-wise multiple-choice papers (language, domain subjects and General Aptitude Test); exact structure is published in the NTA bulletin each year.',
    marking: 'Recent cycles used 5 marks for a correct answer and 1 mark deducted for a wrong answer; confirm in the current bulletin.',
    attemptsNote: NOTE,
    syllabus: [
      { subject: 'General Aptitude Test', topics: ['General knowledge', 'Current affairs', 'Numerical ability', 'Logical & analytical reasoning', 'Quantitative reasoning'] },
      { subject: 'Domain subjects', topics: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'Economics', 'Business studies', 'Accountancy', 'History', 'Political science', 'Geography'] },
      { subject: 'Language', topics: ['Reading comprehension', 'Verbal ability', 'Vocabulary & grammar'] },
    ],
    faqs: [
      { q: 'How many subjects can I choose in CUET?', a: 'The number of papers you can take is set by the NTA each year. Choose subjects based on the courses and universities you want and check the current bulletin.' },
      { q: 'Is the General Test compulsory?', a: 'It depends on the courses you apply for. Check the requirements of your target university programmes.' },
      { q: 'Is CUET the same as the Class 12 board exam?', a: 'No. CUET is a separate entrance test, but its domain subjects follow the Class 12 NCERT syllabus, so board preparation helps directly.' },
    ],
  },
};
