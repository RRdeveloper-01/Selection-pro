export type CaTopic = {
  slug: string;
  title: string;
  icon: string;
  summary: string;
  exams: string[];
  intro: string[];
  concepts: { term: string; def: string }[];
  samples: { q: string; options: string[]; answer: number; why: string }[];
  steps: string[];
  faqs: { q: string; a: string }[];
  quizTopics: string[];
};

export const CA_TOPICS: CaTopic[] = [
  {
    slug: 'economy-banking-finance',
    title: 'Economy, Banking & Finance',
    icon: '🏦',
    summary: 'RBI policy terms, budget vocabulary, financial institutions and the basic ideas that every news item in this area builds on.',
    exams: ['IBPS PO', 'SBI Clerk', 'RBI Grade B', 'SSC CGL', 'RRB NTPC'],
    intro: [
      'Economy and banking news looks different every week, but the vocabulary underneath it hardly changes. A rate decision by the RBI, a new regulation from SEBI or a Budget announcement is always a case of the same handful of concepts: liquidity, inflation, fiscal balance, credit flow and financial inclusion. If you know the concept, you can answer a question about almost any news item that uses it.',
      'Banking exams ask this section in two ways. Direct questions test terms and institutions (who regulates what, what a rate means). Application questions describe a situation and ask what happens next, for example the effect of a higher repo rate on loan EMIs. Practise both: learn the definition, then predict the consequence.',
    ],
    concepts: [
      { term: 'Repo rate', def: 'The rate at which the RBI lends short-term money to banks. A higher repo rate makes borrowing costlier and tends to cool inflation.' },
      { term: 'Reverse repo / standing deposit facility', def: 'The rate at which the RBI absorbs surplus liquidity from banks. It acts as the floor of the policy corridor.' },
      { term: 'CRR and SLR', def: 'CRR is the share of deposits kept with the RBI in cash. SLR is the share kept in liquid assets such as government securities, gold and cash.' },
      { term: 'Fiscal deficit', def: 'Total government expenditure minus total receipts excluding borrowings. It shows how much the government needs to borrow in a year.' },
      { term: 'Inflation targeting', def: 'India follows a flexible inflation target set with the government, with the RBI using policy rates to keep consumer-price inflation within the band.' },
      { term: 'Financial inclusion', def: 'Bringing bank accounts, credit, insurance and digital payments to people who were left out. Jan Dhan accounts and UPI are the standard examples.' },
    ],
    samples: [
      { q: 'A rise in the repo rate will most likely lead to:', options: ['Cheaper floating-rate loans', 'Costlier floating-rate loans', 'No change in lending rates', 'Lower deposit rates only'], answer: 1, why: 'Repo is the cost of funds for banks. When it rises, banks pass the increase to borrowers and floating-rate EMIs go up.' },
      { q: 'Fiscal deficit is calculated as total expenditure minus:', options: ['Revenue receipts', 'Total receipts excluding borrowings', 'Tax revenue', 'Capital receipts'], answer: 1, why: 'Subtracting receipts that exclude borrowings leaves the gap that must be financed by borrowing.' },
      { q: 'Which authority regulates the securities market?', options: ['RBI', 'SEBI', 'IRDAI', 'NABARD'], answer: 1, why: 'SEBI regulates stock markets and mutual funds. IRDAI handles insurance; NABARD supports agriculture and rural finance.' },
    ],
    steps: [
      'Keep a one-page glossary of rates and ratios and review it every morning.',
      'For each economic news item you read, write one line: which concept is this an example of?',
      'Once a week, solve ten banking-awareness questions and add every wrong answer to your Mistake Notebook.',
      'Before the exam, revise the Budget and Economic Survey highlights from official summaries.',
    ],
    faqs: [
      { q: 'How much economy should I study for IBPS and SBI exams?', a: 'Concentrate on banking awareness, RBI functions, payment systems and major government schemes. Mains and RBI Grade B go deeper into economics.' },
      { q: 'Where should I read economy news from?', a: 'Use official sources first (RBI, SEBI, Ministry of Finance press releases) and one reliable newspaper. Our daily quiz and trap questions help you test what you remember.' },
    ],
    quizTopics: ['Economy', 'Banking Awareness'],
  },
  {
    slug: 'polity-governance',
    title: 'Polity & Governance',
    icon: '🏛️',
    summary: 'Constitutional articles, institutions, bills and committees: the static base that makes every political news item easy to place.',
    exams: ['SSC CGL', 'SSC CHSL', 'RRB NTPC', 'CUET', 'Banking (GA)'],
    intro: [
      'Most polity questions in current-affairs form are really constitutional questions in disguise. A news item about a new law, a Supreme Court judgement or a commission report almost always connects to an Article, a Schedule or an institution you can study once and recognise forever.',
      'The best way to prepare is to build a small map: Parliament and its powers, the executive, the judiciary, constitutional bodies and amendments. Then each news item is a pin on that map instead of a new fact to memorise.',
    ],
    concepts: [
      { term: 'Fundamental Rights (Part III)', def: 'Articles 12 to 35, including equality, freedom, protection of life and liberty (Article 21) and constitutional remedies (Article 32).' },
      { term: 'Directive Principles (Part IV)', def: 'Guidelines for the State, not enforceable by courts, aimed at building a welfare state.' },
      { term: 'Money Bill', def: 'Defined in Article 110. It can be introduced only in the Lok Sabha, and the Rajya Sabha can only make recommendations.' },
      { term: 'Constitutional bodies', def: 'Election Commission, UPSC, Finance Commission, CAG and others, created directly by the Constitution.' },
      { term: 'Emergency provisions', def: 'National Emergency (Article 352), President\'s Rule (Article 356) and Financial Emergency (Article 360).' },
      { term: 'Amendment procedure', def: 'Article 368 allows Parliament to amend the Constitution, with some changes also needing ratification by half of the states.' },
    ],
    samples: [
      { q: 'Which Article deals with the Right to Constitutional Remedies?', options: ['Article 19', 'Article 21', 'Article 32', 'Article 226'], answer: 2, why: 'Article 32 lets a person approach the Supreme Court for enforcement of Fundamental Rights. Article 226 gives similar power to High Courts.' },
      { q: 'A Money Bill can be introduced only in:', options: ['Rajya Sabha', 'Lok Sabha', 'Either House', 'Joint sitting'], answer: 1, why: 'Money Bills originate in the Lok Sabha and the Rajya Sabha has only a recommendatory role.' },
      { q: 'Which Article is related to President\'s Rule in a state?', options: ['Article 352', 'Article 356', 'Article 360', 'Article 365'], answer: 1, why: 'Article 356 covers failure of constitutional machinery in a state.' },
    ],
    steps: [
      'Make a table of Articles you meet in news and match each with its one-line purpose.',
      'Learn the difference between constitutional, statutory and non-statutory bodies.',
      'When a bill or judgement appears in the news, note which House, which Article and which authority are involved.',
      'Attempt our Polity questions in the daily quiz and revisit the ones you missed.',
    ],
    faqs: [
      { q: 'Is polity important for SSC exams?', a: 'Yes. Polity forms a steady share of the General Awareness section in SSC CGL and CHSL, mostly from fundamentals.' },
      { q: 'Do I need to memorise all Articles?', a: 'No. Focus on the commonly asked ones: Articles 12 to 35, 52 to 79, 108 to 124, 148, 280, 324, 352, 356 and 368.' },
    ],
    quizTopics: ['Polity'],
  },
  {
    slug: 'international-relations',
    title: 'International Relations & Organisations',
    icon: '🌍',
    summary: 'Groupings, summits, treaties and headquarters. The facts that stay constant while the headlines change.',
    exams: ['SSC CGL', 'RRB NTPC', 'CUET', 'IBPS PO', 'RBI Grade B'],
    intro: [
      'International news is easier to handle when you separate the permanent from the temporary. Which organisation exists, where it is headquartered, how many members it has and what its purpose is will not change next month. Who hosted the latest summit or which agreement was signed this week will.',
      'Exams mix both, but the permanent facts anchor your answer. Build a clear picture of the major groupings (UN, BRICS, G20, SCO, ASEAN, QUAD) and international financial institutions (IMF, World Bank, WTO), then attach each new development to the right box.',
    ],
    concepts: [
      { term: 'United Nations', def: 'Headquartered in New York, with principal organs including the General Assembly, Security Council and International Court of Justice (at The Hague).' },
      { term: 'BRICS', def: 'A grouping that began as Brazil, Russia, India and China, joined by South Africa in 2010 and expanded later.' },
      { term: 'G20', def: 'Forum of major economies. India held its presidency in 2022-23 and hosted the New Delhi summit in September 2023.' },
      { term: 'IMF and World Bank', def: 'Bretton Woods institutions headquartered in Washington, D.C. The IMF supports balance of payments; the World Bank funds development.' },
      { term: 'WTO', def: 'Headquartered in Geneva; sets and oversees rules of international trade.' },
      { term: 'Climate treaties', def: 'UNFCCC, the Kyoto Protocol and the Paris Agreement form the climate framework; the Montreal Protocol deals with the ozone layer.' },
    ],
    samples: [
      { q: 'Where is the headquarters of the WTO located?', options: ['New York', 'Geneva', 'Paris', 'Brussels'], answer: 1, why: 'The WTO is based in Geneva. The UN is in New York and the IMF and World Bank are in Washington, D.C.' },
      { q: 'Which country joined BRIC in 2010?', options: ['Egypt', 'South Africa', 'Argentina', 'Iran'], answer: 1, why: 'South Africa\'s entry in 2010 turned BRIC into BRICS.' },
      { q: 'The International Court of Justice sits at:', options: ['Geneva', 'Vienna', 'The Hague', 'New York'], answer: 2, why: 'The ICJ, the principal judicial organ of the UN, is at The Hague in the Netherlands.' },
    ],
    steps: [
      'Create a card for each organisation: headquarters, year founded, purpose and India\'s role.',
      'For every summit in the news, note host country, theme and one India-related outcome.',
      'Revise the cards weekly and test yourself with the international questions in our daily quiz.',
    ],
    faqs: [
      { q: 'How do I remember so many organisations?', a: 'Group them by function (security, trade, finance, climate, regional) rather than alphabetically. Cards with headquarters and purpose are enough for most questions.' },
    ],
    quizTopics: ['International'],
  },
  {
    slug: 'science-technology-space',
    title: 'Science, Technology & Space',
    icon: '🚀',
    summary: 'Core science concepts behind news on space missions, defence tech, health and digital systems.',
    exams: ['SSC CGL', 'SSC CHSL', 'RRB NTPC', 'NEET (GK sections)', 'CUET'],
    intro: [
      'Science and technology questions in exams rarely demand deep engineering. They ask what a technology does, which organisation developed it and what basic principle it uses. A space mission is an application of orbital mechanics; a vaccine news item is an application of immunology; a payment system news item is an application of digital infrastructure.',
      'Keep your base solid with class 6 to 10 science and then add the names of Indian institutions: ISRO for space, DRDO for defence research, CSIR for scientific research, DAE for atomic energy and NPCI for payments.',
    ],
    concepts: [
      { term: 'ISRO', def: 'India\'s space agency, headquartered in Bengaluru. Missions are launched from Sriharikota.' },
      { term: 'DRDO', def: 'Defence Research and Development Organisation, responsible for indigenous defence technology.' },
      { term: 'Artificial intelligence', def: 'Systems that learn from data to perform tasks such as recognition, translation and prediction.' },
      { term: 'Renewable energy', def: 'Solar, wind, hydro and biomass. India\'s targets are usually framed in gigawatts of non-fossil capacity.' },
      { term: 'Vaccines vs antibiotics', def: 'Vaccines train immunity against viruses and bacteria; antibiotics kill or stop bacteria and do not work on viruses.' },
      { term: 'UPI and digital public infrastructure', def: 'Open, interoperable systems for identity, payments and data exchange that Indian fintech builds upon.' },
    ],
    samples: [
      { q: 'Satellites for India\'s space programme are launched from:', options: ['Thumba', 'Sriharikota', 'Balasore', 'Chandipur'], answer: 1, why: 'The Satish Dhawan Space Centre at Sriharikota in Andhra Pradesh is ISRO\'s main launch site.' },
      { q: 'Antibiotics are effective against:', options: ['Viruses', 'Bacteria', 'Both', 'Neither'], answer: 1, why: 'Antibiotics target bacteria. Viral infections need antivirals or vaccines.' },
      { q: 'UPI was developed by:', options: ['RBI', 'NPCI', 'SEBI', 'NITI Aayog'], answer: 1, why: 'The National Payments Corporation of India built and operates UPI.' },
    ],
    steps: [
      'Revise NCERT science summaries so that basic principles are fresh.',
      'For every technology news item, write what it does, who built it and which ministry owns it.',
      'Practise the science questions in the daily quiz for ten minutes a day.',
    ],
    faqs: [
      { q: 'How deep should I go in space and defence news?', a: 'Know the agency, the purpose of the mission or system and where it is made or launched. Technical specifications are rarely asked.' },
    ],
    quizTopics: ['Science'],
  },
  {
    slug: 'environment-ecology',
    title: 'Environment & Ecology',
    icon: '🌿',
    summary: 'Conventions, protected areas and climate terms that explain nearly every environment headline.',
    exams: ['SSC CGL', 'RRB NTPC', 'CUET', 'UPSC prelims basics'],
    intro: [
      'Environment questions are heavily concept-based. When news reports a new Ramsar site, a tiger reserve or a climate pledge, the exam usually asks about the underlying idea: what a Ramsar site is, what a biosphere reserve protects, what a nationally determined contribution means.',
      'Learn the major international conventions with the issue each covers, then learn the main categories of protected areas in India. With that structure, a new addition to any list is easy to place.',
    ],
    concepts: [
      { term: 'Ramsar Convention', def: 'International treaty (1971) for the conservation of wetlands.' },
      { term: 'Montreal Protocol', def: 'Phases out substances that deplete the ozone layer.' },
      { term: 'Paris Agreement', def: 'Countries submit nationally determined contributions to keep warming well below 2°C.' },
      { term: 'National parks vs wildlife sanctuaries', def: 'National parks have stricter protection and no human activity such as grazing; sanctuaries allow some regulated activity.' },
      { term: 'Biosphere reserves', def: 'Areas designated to conserve biodiversity along with sustainable use by local communities.' },
      { term: 'Greenhouse gases', def: 'Carbon dioxide, methane, nitrous oxide and fluorinated gases trap heat and drive climate change.' },
    ],
    samples: [
      { q: 'The Ramsar Convention is concerned with:', options: ['Wetlands', 'Forests', 'Ozone layer', 'Desertification'], answer: 0, why: 'It is the global treaty on wetlands. Ozone is handled by the Montreal Protocol.' },
      { q: 'Which gas is a greenhouse gas?', options: ['Nitrogen', 'Methane', 'Argon', 'Neon'], answer: 1, why: 'Methane absorbs heat strongly. Nitrogen, argon and neon are not greenhouse gases.' },
      { q: 'Chilika Lake is located in:', options: ['Kerala', 'Odisha', 'Assam', 'Gujarat'], answer: 1, why: 'Chilika, a Ramsar site and India\'s largest coastal lagoon, is in Odisha.' },
    ],
    steps: [
      'Make a two-column table: convention or designation, and the issue it covers.',
      'Mark every protected area you read about on a blank map of India.',
      'Attempt the environment questions in the daily quiz and save errors to your notebook.',
    ],
    faqs: [
      { q: 'Is environment important for competitive exams?', a: 'It carries steady weight in general awareness papers and is a core area for civil services. Even a basic understanding earns marks.' },
    ],
    quizTopics: ['Environment', 'Geography'],
  },
  {
    slug: 'awards-sports-persons',
    title: 'Awards, Sports & Important Days',
    icon: '🏅',
    summary: 'How to learn awards, tournaments and important days as patterns so that you recall the latest winners easily.',
    exams: ['SSC CGL', 'SSC CHSL', 'RRB NTPC', 'SBI Clerk'],
    intro: [
      'Awards and sports are the most memory-heavy part of current affairs, so structure matters. Instead of memorising a list of names, learn the pattern: who gives the award, what it is for, how often it is given and what its cash or medal component is.',
      'Static anchors are your friend. The highest civilian award, the highest sporting honour, the host of a recurring tournament and the date and theme of major international days hardly change. Learn them once and spend your daily time on the latest winners.',
    ],
    concepts: [
      { term: 'Bharat Ratna', def: 'India\'s highest civilian award. Padma Vibhushan, Padma Bhushan and Padma Shri follow in that order.' },
      { term: 'Gallantry awards', def: 'Param Vir Chakra is the highest wartime gallantry award; Ashoka Chakra is the highest peacetime one.' },
      { term: 'Khel Ratna and Arjuna', def: 'The Major Dhyan Chand Khel Ratna is the highest sporting honour; Arjuna Awards recognise consistent outstanding performance.' },
      { term: 'National Sports Day', def: 'Observed on 29 August, the birth anniversary of hockey legend Major Dhyan Chand.' },
      { term: 'Olympic cycle', def: 'Summer Olympics are held every four years; recall host cities in a timeline rather than as isolated facts.' },
      { term: 'Important days', def: 'Group them by month and link each to the organisation that proclaims it, such as the UN or WHO.' },
    ],
    samples: [
      { q: 'India\'s highest civilian award is:', options: ['Padma Vibhushan', 'Bharat Ratna', 'Padma Bhushan', 'Param Vir Chakra'], answer: 1, why: 'Bharat Ratna is the highest civilian honour. Param Vir Chakra is a military gallantry award.' },
      { q: 'National Sports Day is celebrated on:', options: ['29 August', '2 October', '14 November', '12 January'], answer: 0, why: 'It honours Major Dhyan Chand, born on 29 August 1905.' },
      { q: 'Who was the first Indian woman to win an Olympic medal?', options: ['Mary Kom', 'Karnam Malleswari', 'Saina Nehwal', 'P. V. Sindhu'], answer: 1, why: 'Karnam Malleswari won bronze in weightlifting at Sydney 2000.' },
    ],
    steps: [
      'Keep one revision sheet per category and update it weekly instead of daily.',
      'Learn winners together with the field and the year, because questions often swap them.',
      'Use the daily quiz for quick checks and revise missed questions after one, three and seven days.',
    ],
    faqs: [
      { q: 'Should I memorise every winner?', a: 'Focus on major awards and tournaments from the last six to twelve months, plus the static facts that stay constant.' },
    ],
    quizTopics: ['Awards & Sports'],
  },
  {
    slug: 'government-schemes',
    title: 'Government Schemes & Missions',
    icon: '📋',
    summary: 'A repeatable template to learn any scheme: launch year, ministry, target group and benefit.',
    exams: ['SSC CGL', 'SSC CHSL', 'RRB NTPC', 'IBPS PO', 'SBI Clerk'],
    intro: [
      'Schemes appear in current-affairs sections because new ones keep launching and old ones keep being extended or merged. The way to avoid confusion is to learn every scheme with the same four details: year of launch, ministry, who it is for and what benefit it gives.',
      'Banking exams add a fifth detail: how the scheme is implemented through banks, for example the role of Jan Dhan accounts in direct benefit transfer.',
    ],
    concepts: [
      { term: 'PM Jan Dhan Yojana (2014)', def: 'Financial inclusion mission providing bank accounts, RuPay cards and insurance.' },
      { term: 'Swachh Bharat Mission (2014)', def: 'Launched on 2 October 2014 to improve sanitation and eliminate open defecation.' },
      { term: 'Digital India (2015)', def: 'Programme to improve online infrastructure and deliver government services digitally.' },
      { term: 'Ayushman Bharat PM-JAY (2018)', def: 'Health assurance scheme with cashless hospitalisation cover for eligible families.' },
      { term: 'Direct Benefit Transfer', def: 'Moves subsidies and benefits straight to beneficiaries\' bank accounts to reduce leakages.' },
      { term: 'Centrally sponsored vs central sector', def: 'Centrally sponsored schemes are shared with states; central sector schemes are funded entirely by the Union.' },
    ],
    samples: [
      { q: 'Digital India was launched in:', options: ['2014', '2015', '2016', '2017'], answer: 1, why: 'The programme was launched on 1 July 2015.' },
      { q: 'PM Jan Dhan Yojana mainly aims at:', options: ['Crop insurance', 'Financial inclusion', 'Housing', 'Skill training'], answer: 1, why: 'It targets universal access to bank accounts and basic financial services.' },
      { q: 'A scheme funded entirely by the Union Government is called:', options: ['Centrally sponsored', 'Central sector', 'State scheme', 'Local body scheme'], answer: 1, why: 'Central sector schemes are 100% Union-funded; centrally sponsored ones share costs with states.' },
    ],
    steps: [
      'Create one row per scheme in a table: year, ministry, target group, benefit.',
      'Add a new row only when a scheme appears in a reliable news source or an exam paper.',
      'Review the table every week and quiz yourself from the daily quiz.',
    ],
    faqs: [
      { q: 'How many schemes should I know?', a: 'Know the flagship schemes in depth and the rest at the level of ministry and purpose. Our approach is to learn fewer schemes thoroughly.' },
    ],
    quizTopics: ['Government Schemes'],
  },
];

export const getCaTopic = (slug: string) => CA_TOPICS.find((t) => t.slug === slug);
