/**
 * Add your own dated current-affairs items here. They automatically appear on /current-affairs and on the
 * matching topic page, with the "how this can be asked" block that makes the content original and useful.
 *
 * Rules that keep the section AdSense-safe:
 *  - Write the summary in your own words (do not copy news text).
 *  - Always fill examAngle and possibleQuestions. That is what makes it more than a news repost.
 *  - Link the topic slug to one of the ids in ca-topics.ts.
 */
export type CaEntry = {
  date: string; // YYYY-MM-DD
  title: string;
  topic: string; // slug from ca-topics.ts
  summary: string;
  examAngle: string;
  possibleQuestions: string[];
  source?: { label: string; url: string };
};

export const CA_ENTRIES: CaEntry[] = [
  {
    date: "2026-10-29",
    title: "Cabinet approves Rs 7,395 crore PM Viksit Gram Swaraj Yojana for panchayats",
    topic: "government-schemes",
    summary: "On 28 October 2026 the Union Cabinet approved an allocation of 7,395 crore rupees for the Pradhan Mantri Viksit Gram Swaraj Yojana. The scheme is aimed at making village panchayats more self-reliant, and the announcement was made by Union Minister Ashwini Vaishnaw after the Cabinet meeting. It also links to the funds that panchayats receive through the Finance Commission. Details such as the exact components and duration are published by the Press Information Bureau, so check it before quoting them.",
    examAngle: "Connect this to the 73rd Constitutional Amendment (1992), which added Part IX and the Eleventh Schedule listing 29 subjects for panchayats. Remember that State Finance Commissions are created under Article 243I and that the Ministry of Panchayati Raj looks after the sector. National Panchayati Raj Day is observed on 24 April.",
    possibleQuestions: [
      "Which Constitutional Amendment gave constitutional status to panchayats?",
      "How many subjects are listed in the Eleventh Schedule?",
      "Under which Article is the State Finance Commission constituted?",
    ],
    source: { label: "Press Information Bureau", url: "https://pib.gov.in" },
  },
  {
    date: "2026-10-29",
    title: "Cabinet clears Rs 10,000 crore scheme to boost container manufacturing",
    topic: "economy-banking-finance",
    summary: "At the same Cabinet meeting on 28 October 2026, the government approved a scheme worth 10,000 crore rupees to strengthen container manufacturing in India. Containers are the standard steel boxes that carry most of the world's traded goods, and building them at home is meant to reduce the cost and dependence involved in moving exports and imports. The scheme is part of the wider push to expand domestic manufacturing and logistics capacity. The official scheme name, ministry and time period should be confirmed from the Cabinet press release.",
    examAngle: "Questions on manufacturing schemes usually ask for the outlay, the sector and the objective. Learn the pattern: production-linked or incentive-based schemes aim to raise domestic output, create jobs and cut import dependence. Also remember that containerisation is central to port and shipping efficiency.",
    possibleQuestions: [
      "What is the outlay of the container manufacturing scheme approved in October 2026?",
      "Why is containerisation important for trade and ports?",
      "Which body gives approval to major central schemes before they begin?",
    ],
    source: { label: "Press Information Bureau", url: "https://pib.gov.in" },
  },
  {
    date: "2026-10-29",
    title: "IMF raises India's growth forecast to 7% in its October 2026 outlook",
    topic: "economy-banking-finance",
    summary: "The International Monetary Fund released its October 2026 World Economic Outlook on 13 October and raised India's growth projection for 2026-27 to 7.0%, up from 6.4% in July, an increase of 60 basis points. It also sees 7.0% growth for 2027-28 and consumer price inflation of about 5.0% in 2026. For the world economy the IMF expects 3.1% growth in 2026 and 3.4% in 2027, and it cited resilient domestic demand and strong services activity as reasons for India's upgrade, while warning that higher oil prices and the conflict in the Middle East remain risks.",
    examAngle: "The World Economic Outlook is published twice a year, in April and October, with updates in January and July. The IMF is headquartered in Washington, D.C. Learn the headline numbers together with the reasons given, because questions often ask which agency made the forecast and by how much it changed.",
    possibleQuestions: [
      "Which report did the IMF release in October 2026?",
      "What is the IMF's growth forecast for India for 2026-27?",
      "In which months is the World Economic Outlook published?",
    ],
    source: { label: "International Monetary Fund", url: "https://www.imf.org" },
  },
  {
    date: "2026-10-29",
    title: "President appoints Governors in six states in a major reshuffle",
    topic: "polity-governance",
    summary: "A Rashtrapati Bhavan communique on 12 October 2026 announced new Governors for six states. Om Prakash Mathur moves from Sikkim to Kerala (referred to as Keralam), and Rajendra Vishwanath Arlekar moves from Kerala to Tamil Nadu. Dr Sudha Yadav was named Governor of Karnataka, and new Governors were also named for Odisha, Uttarakhand and Sikkim. Each appointment takes effect when the Governor assumes charge.",
    examAngle: "Remember the constitutional provisions: Article 153 says there shall be a Governor for each state, Article 155 says the President appoints the Governor by warrant, and Article 156 says the Governor holds office during the pleasure of the President for a normal term of five years. The minimum age is 35 years under Article 157, and the same person can be Governor of two or more states.",
    possibleQuestions: [
      "Who appoints the Governor of a state?",
      "Under which Article does the Governor hold office during the pleasure of the President?",
      "What is the minimum age required to be appointed Governor?",
    ],
    source: { label: "Rashtrapati Bhavan", url: "https://rashtrapatibhavan.gov.in" },
  },
  {
    date: "2026-10-29",
    title: "India hosts first BIMSTEC Home Ministers' Meeting and adopts Delhi Declaration",
    topic: "international-relations",
    summary: "India hosted the first ever BIMSTEC Home Ministers' Meeting in New Delhi on 13 October 2026, chaired by Union Home Minister Amit Shah. It followed a meeting of senior home ministry officials on 12 October. The ministers focused on terrorism, human trafficking, narcotics, cyber threats and illicit financial flows, and the meeting ended with the adoption of the Delhi Declaration. Delegations from all seven member countries took part.",
    examAngle: "BIMSTEC means Bay of Bengal Initiative for Multi-Sectoral Technical and Economic Cooperation and was founded in 1997. Its seven members are Bangladesh, Bhutan, India, Myanmar, Nepal, Sri Lanka and Thailand, and its secretariat is in Dhaka. Pakistan is not a member, which is a favourite trap in exams.",
    possibleQuestions: [
      "How many member countries are in BIMSTEC?",
      "Where is the BIMSTEC secretariat located?",
      "Which declaration was adopted at the first BIMSTEC Home Ministers' Meeting?",
    ],
    source: { label: "Ministry of External Affairs", url: "https://www.mea.gov.in" },
  },
  {
    date: "2026-10-29",
    title: "India and UK inaugurate BRIC-CDFD-ONT Genomics Centre of Excellence",
    topic: "science-technology-space",
    summary: "On 12 October 2026 Dr Jitendra Singh, Minister of State (Independent Charge) for Science and Technology, and UK Secretary of State Jonathan Reynolds jointly inaugurated the BRIC-CDFD-ONT India Genomics Centre of Excellence in New Delhi. It was opened during the 8th India-UK Science and Innovation Council meeting. The centre is a partnership between the Centre for DNA Fingerprinting and Diagnostics, which works under the Biotechnology Research and Innovation Council, and the UK company Oxford Nanopore Technologies. Its work covers rare disease research, newborn screening and genomic studies of oral cancer, along with training for young genome scientists.",
    examAngle: "Know the abbreviations: BRIC is the Biotechnology Research and Innovation Council, CDFD is the Centre for DNA Fingerprinting and Diagnostics and ONT is Oxford Nanopore Technologies. Nanopore sequencing reads DNA as a strand passes through a tiny pore, detecting changes in electric current. The council works under the Department of Biotechnology.",
    possibleQuestions: [
      "What does CDFD stand for?",
      "Which technology does Oxford Nanopore use to read DNA?",
      "Which meeting saw the inauguration of the India-UK genomics centre?",
    ],
    source: { label: "Department of Biotechnology", url: "https://dbtindia.gov.in" },
  },
  {
    date: "2026-10-29",
    title: "India's Ramsar sites reach 103 with Sukhna Wetland and Sauj Jheel",
    topic: "environment-ecology",
    summary: "On 15 October 2026 Environment Minister Bhupender Yadav announced that Sukhna Wetland in Chandigarh and Sauj Jheel in Uttar Pradesh had been added to the Ramsar List of Wetlands of International Importance, taking India's total from 101 to 103. Sukhna is Chandigarh's first Ramsar site. Sauj Jheel is a shallow lake in the Ganga floodplain in Mainpuri district, which now becomes the first Indian district with two Ramsar sites, the other being Saman Bird Sanctuary. They carry Ramsar site numbers 2602 and 2603.",
    examAngle: "The Ramsar Convention was signed in 1971 and India joined on 1 February 1982. Tamil Nadu has the highest number of Ramsar sites among Indian states. World Wetlands Day falls on 2 February. Be ready for questions on the new sites, their states and the national total.",
    possibleQuestions: [
      "How many Ramsar sites does India have after October 2026?",
      "Which is Chandigarh's first Ramsar site?",
      "In which year did India become a party to the Ramsar Convention?",
    ],
    source: { label: "Ramsar Convention", url: "https://www.ramsar.org" },
  },
  {
    date: "2026-10-29",
    title: "Men's Asian Champions Trophy hockey underway in Jalandhar and Mohali",
    topic: "awards-sports-persons",
    summary: "The men's Asian Champions Trophy 2026 is being played in Jalandhar and Mohali from 27 October to 5 November, with 20 matches and free entry for fans, as announced by Hockey India. India began against Bangladesh on 27 October and, according to the announced schedule, plays China on 29 October, Japan on 30 October, Malaysia on 1 November and South Korea on 2 November. Check the final standings and results from an official source after the tournament, since fixtures can change.",
    examAngle: "Sports questions focus on the host cities, dates and governing body. Remember that hockey is India's national game by popular recognition, and that Major Dhyan Chand's birthday, 29 August, is celebrated as National Sports Day. Learn one fact about each tournament in the news rather than only the winner.",
    possibleQuestions: [
      "In which two cities is the 2026 men's Asian Champions Trophy being held?",
      "Which team does India play on 29 October in the tournament?",
      "On which date is National Sports Day observed?",
    ],
    source: { label: "Hockey India", url: "https://www.hockeyindia.org" },
  },
  {
    date: "2026-10-28",
    title: "RBI raises repo rate to 5.50% and shifts to calibrated tightening",
    topic: "economy-banking-finance",
    summary: "On 7 October 2026 the RBI Monetary Policy Committee voted unanimously to raise the policy repo rate by 25 basis points, from 5.25% to 5.50%. It was the first hike in nearly three years, and the stance moved from neutral to calibrated tightening. The Standing Deposit Facility rate went to 5.25% and both the MSF rate and the Bank Rate to 5.75%. The next MPC meeting is scheduled for 2 to 4 December 2026.",
    examAngle: "Remember the policy corridor: SDF is the floor, repo is the middle and MSF is the ceiling, and MSF sits 50 bps above SDF. A higher repo rate makes bank borrowing costlier, so floating-rate loan EMIs tend to rise. Calibrated tightening means the central bank is leaning towards higher rates, not cuts.",
    possibleQuestions: [
      "What is the repo rate after the October 2026 MPC meeting?",
      "Which rate forms the floor of the RBI policy corridor?",
      "What is the effect of a repo rate hike on floating-rate loan EMIs?",
    ],
    source: { label: "Reserve Bank of India", url: "https://www.rbi.org.in" },
  },
  {
    date: "2026-10-28",
    title: "Sabarimala reference: nine-judge bench verdict still awaited",
    topic: "polity-governance",
    summary: "A nine-judge Constitution Bench headed by Chief Justice Surya Kant heard the Sabarimala reference over 16 days and reserved its judgment on 14 May 2026. The reference grew out of the review of the 2018 ruling that allowed women of all ages into the temple, and it raises wider questions about religious freedom and the role of courts. As of the latest reports the judgment had not been pronounced, though it was expected in October. The CJI retires on 9 February 2027. Check the Supreme Court website for the current status.",
    examAngle: "Link this to Article 25 (freedom of religion), Article 26 (rights of religious denominations), the essential religious practices test and constitutional morality. Also remember that the Supreme Court can refer questions of law to a larger bench even while hearing a review petition.",
    possibleQuestions: [
      "Which Article guarantees freedom of conscience and the right to practise religion?",
      "How many judges sit on the bench hearing the Sabarimala reference?",
      "What is the essential religious practices test?",
    ],
    source: { label: "Supreme Court of India", url: "https://www.sci.gov.in" },
  },
  {
    date: "2026-10-28",
    title: "India chaired BRICS in 2026 and hosted the 18th summit in New Delhi",
    topic: "international-relations",
    summary: "India took over the BRICS chair from Brazil on 1 January 2026 and hosted the 18th BRICS Summit at Bharat Mandapam, New Delhi, on 12 and 13 September 2026. This was India's fourth chairship after 2012, 2016 and 2021, and it fell in the year BRICS completed twenty years. The chairship theme was Building for Resilience, Innovation, Cooperation and Sustainability.",
    examAngle: "Questions usually ask for the host city, the year, the number of times India has chaired the group and the theme. Remember the rotation: Brazil chaired in 2025 and India in 2026. Also revise BRICS institutions such as the New Development Bank.",
    possibleQuestions: [
      "Where was the 18th BRICS Summit held?",
      "How many times has India chaired BRICS, including 2026?",
      "Which country chaired BRICS before India in 2026?",
    ],
    source: { label: "Ministry of External Affairs", url: "https://www.mea.gov.in" },
  },
  {
    date: "2026-10-28",
    title: "ISRO set to launch NVS-03 navigation satellite on GSLV-F18",
    topic: "science-technology-space",
    summary: "ISRO has scheduled the launch of the NVS-03 navigation satellite on 30 October 2026 aboard the GSLV-F18 rocket from the Satish Dhawan Space Centre at Sriharikota. The satellite is meant to strengthen NavIC, India's regional navigation system, which has been running below strength. Separately, ISRO Chairman V Narayanan said on 25 October that India plans four functional launch pads by 2029. The launch is scheduled and has not happened yet, so check the outcome after 30 October.",
    examAngle: "Know that NavIC stands for Navigation with Indian Constellation and covers India and the region around it. Remember the launch site, the launch vehicle family (GSLV) and the name of the current ISRO chairman.",
    possibleQuestions: [
      "What does NavIC stand for?",
      "From which spaceport are ISRO satellites launched?",
      "Which ISRO rocket is scheduled to carry the NVS-03 satellite?",
    ],
    source: { label: "ISRO", url: "https://www.isro.gov.in" },
  },
  {
    date: "2026-10-28",
    title: "COP31 to be held in Antalya, Turkiye, in November 2026",
    topic: "environment-ecology",
    summary: "The 31st UN Climate Change Conference will run from 9 to 20 November 2026 at the Antalya Expo Center in Turkiye, with a World Leaders Summit on 11 and 12 November. Turkiye hosts the conference and Murat Kurum is its President, while Australia leads the negotiations through Chris Bowen. Climate finance is a central issue: the Baku conference set a target of 300 billion dollars a year, and developing countries including India want grant-based support.",
    examAngle: "Expect questions on the host city, the dates, the unusual host and negotiation-lead arrangement and the climate finance target. Revise the chain UNFCCC (1992), Kyoto Protocol, Paris Agreement (2015) and remember that India hosted COP8 in New Delhi in 2002.",
    possibleQuestions: [
      "In which city will COP31 be held?",
      "Which country leads the negotiations at COP31?",
      "Which Indian city hosted COP8 in 2002?",
    ],
    source: { label: "UNFCCC", url: "https://unfccc.int/cop31" },
  },
  {
    date: "2026-10-28",
    title: "Nobel Prizes 2026: key winners to remember",
    topic: "awards-sports-persons",
    summary: "Medicine went to Karl Deisseroth, Peter Hegemann and Georg Nagel for optogenetics, the control of cells with light-gated ion channels. Physics went to Francis Halzen for work on high-energy neutrinos through the IceCube Neutrino Observatory. Chemistry went to Henri Kagan and Kenso Soai for asymmetric synthesis. The Peace Prize went to Navanethem Pillay, a former UN human rights chief of Indian origin. The award ceremony is on 10 December 2026.",
    examAngle: "Learn each prize as a trio of name, field and reason. The Peace Prize is chosen by the Norwegian Nobel Committee in Oslo, while the science prizes are announced in Sweden. The Economics prize was added in 1968 and is not one of the original five.",
    possibleQuestions: [
      "For what discovery was the 2026 Nobel Prize in Medicine awarded?",
      "Which body selects the Nobel Peace Prize winner?",
      "Who won the 2026 Nobel Prize in Physics?",
    ],
    source: { label: "NobelPrize.org", url: "https://www.nobelprize.org" },
  },
  {
    date: "2026-10-28",
    title: "NSAP continued for five years and renamed PM Samajik Sahayata Yojana",
    topic: "government-schemes",
    summary: "On 14 October 2026 the Union Cabinet approved the continuation of the National Social Assistance Programme for five years, from 2026-27 to 2030-31, with an outlay of about 53,428 crore rupees. The programme, which supports elderly, widowed and disabled people from poor households, was renamed Pradhan Mantri Samajik Sahayata Yojana, and its sub-schemes were renamed as well.",
    examAngle: "Questions are likely to ask the new name, the period of continuation and the target group. Note that NSAP is a centrally sponsored scheme, a category that shares costs with states.",
    possibleQuestions: [
      "What is the new name of the National Social Assistance Programme?",
      "For how many years was the scheme continued?",
      "Which groups does the scheme support?",
    ],
    source: { label: "Press Information Bureau", url: "https://pib.gov.in" },
  },
];
