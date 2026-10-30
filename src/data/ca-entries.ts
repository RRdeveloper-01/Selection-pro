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
    date: "2026-10-30",
    title: "ISRO NVS-03 launch today: GSLV-F18 to carry NavIC navigation satellite from Sriharikota",
    topic: "science-technology-space",
    summary: "ISRO is scheduled to launch the NVS-03 navigation satellite on the GSLV-F18 rocket tonight, 30 October 2026, at 11:51 pm IST from the Second Launch Pad of the Satish Dhawan Space Centre in Sriharikota, Andhra Pradesh. NVS-03 is the third of the next-generation navigation satellites and is meant to strengthen NavIC, India's regional navigation system, which currently has only three operational satellites. The mission comes after setbacks in two earlier PSLV missions. A July 2026 reply in Parliament said NVS-04 and NVS-05 are in an advanced stage of preparation. The launch has not happened at the time of writing, so check the outcome on the ISRO website.",
    examAngle: "NavIC stands for Navigation with Indian Constellation and is also called the Indian Regional Navigation Satellite System (IRNSS). Remember the launch site, the vehicle (GSLV Mk II, which uses an indigenous cryogenic upper stage) and the name of the current ISRO chairman, V Narayanan. Questions often ask how NavIC differs from GPS: it covers India and the region around it instead of the whole world.",
    possibleQuestions: [
      "Which rocket is scheduled to launch the NVS-03 satellite?",
      "What is another name for NavIC?",
      "From which launch centre does ISRO conduct its GSLV launches?",
    ],
    source: { label: "ISRO", url: "https://www.isro.gov.in" },
  },
  {
    date: "2026-10-30",
    title: "India beat China 5-2 in Asian Champions Trophy hockey 2026 at Jalandhar",
    topic: "awards-sports-persons",
    summary: "The Indian men's hockey team beat China 5-2 at the Olympian Surjit Singh Hockey Stadium in Jalandhar on 29 October 2026, its second win in as many matches at the Asian Champions Trophy. Captain Harmanpreet Singh and forward Sukhjeet Singh, the Player of the Match, were the key performers. India next play Japan on 30 October, then Malaysia on 1 November and South Korea on 2 November, according to the announced schedule. The tournament, held in Jalandhar and Mohali, ends on 5 November.",
    examAngle: "India holds the record with five Asian Champions Trophy titles, won in 2011, 2016, 2018, 2023 and 2024, and Pakistan has won three. Learn the host cities of recent editions and the name of the captain. Questions on tournaments usually test the host, the defending champion and the record holder.",
    possibleQuestions: [
      "How many Asian Champions Trophy titles has India won?",
      "In which city did India play China in the 2026 Asian Champions Trophy?",
      "Who is the captain of the Indian men's hockey team?",
    ],
    source: { label: "Hockey India", url: "https://www.hockeyindia.org" },
  },
  {
    date: "2026-10-30",
    title: "Supreme Court split verdict on CEC appointment law: recall plea to be examined",
    topic: "polity-governance",
    summary: "On 23 September 2026 a two-judge Supreme Court bench of Justice Dipankar Datta and Justice Satish Chandra Sharma delivered a split verdict on whether petitions challenging the 2023 law on appointing the Chief Election Commissioner and Election Commissioners should go to a five-judge Constitution Bench. Justice Datta rejected the reference, Justice Sharma accepted it, and the matter went to the Chief Justice of India. CJI Surya Kant has since agreed to examine an application seeking recall of the split verdict, and a separate curative petition is also pending. The 2023 law replaced the Chief Justice in the selection panel with a Union Cabinet minister.",
    examAngle: "Link this to Article 324, which vests control of elections in the Election Commission, and to Article 145(3), which requires a bench of at least five judges for a substantial question on interpreting the Constitution. Remember the 2023 Anoop Baranwal judgment, under which the panel included the Prime Minister, the Leader of Opposition and the CJI until Parliament made a law. The 2023 Act's panel is the Prime Minister, a Union Cabinet minister and the Leader of Opposition.",
    possibleQuestions: [
      "Which Article gives the Election Commission control over elections?",
      "What is the minimum number of judges on a Constitution Bench?",
      "Who sits on the selection panel for the CEC under the 2023 Act?",
    ],
    source: { label: "Supreme Court of India", url: "https://www.sci.gov.in" },
  },
  {
    date: "2026-10-30",
    title: "Delhi air quality: CAQM invokes GRAP Stage 1 as AQI turns poor",
    topic: "environment-ecology",
    summary: "On 21 October 2026 the Commission for Air Quality Management (CAQM) invoked Stage 1 of the Graded Response Action Plan (GRAP) across Delhi-NCR after the Air Quality Index jumped from 179 (moderate) on 20 October to 244 (poor) at 2 pm on 21 October. All 25 action points under Stage 1 were ordered for immediate implementation. The commission had issued a revised GRAP schedule on 29 September 2026. The National Green Tribunal later ordered a review of the action plan after the index touched very poor levels.",
    examAngle: "GRAP is a set of emergency measures that become stricter as air quality worsens. Stage 1 applies in the poor range (AQI 201 to 300), Stage 2 in very poor (301 to 400), Stage 3 in severe (401 to 450) and Stage 4 above 450. The national AQI categories are good, satisfactory, moderate, poor, very poor and severe. CAQM is a statutory body created by the CAQM Act, 2021.",
    possibleQuestions: [
      "Which body invokes the stages of GRAP in Delhi-NCR?",
      "In which AQI range is Stage 1 of GRAP applied?",
      "How many categories does the national Air Quality Index have?",
    ],
    source: { label: "Press Information Bureau", url: "https://pib.gov.in" },
  },
  {
    date: "2026-10-30",
    title: "India's forex reserves fall to $721 billion as RBI defends the rupee",
    topic: "economy-banking-finance",
    summary: "India's foreign exchange reserves fell by 5.011 billion dollars to 721.016 billion dollars in the week ended 16 October 2026, the RBI said in its weekly data on 23 October. Foreign currency assets, the biggest component, fell by 5.758 billion dollars to 591.847 billion dollars. Reserves have dropped from the all-time high of 785.706 billion dollars recorded in the week ended 4 September 2026. Analysts link the decline to the RBI selling dollars to defend the rupee amid higher crude oil prices and to the use of FCNR(B) resources.",
    examAngle: "Forex reserves have four parts: foreign currency assets, gold reserves, Special Drawing Rights (SDRs) and the reserve position with the IMF. Foreign currency assets are the largest. The RBI publishes the weekly statistical supplement every Friday. When the RBI sells dollars, reserves fall and the rupee gets support.",
    possibleQuestions: [
      "Which is the largest component of India's forex reserves?",
      "On which day does the RBI release weekly forex reserve data?",
      "What happens to forex reserves when the RBI sells dollars?",
    ],
    source: { label: "Reserve Bank of India", url: "https://www.rbi.org.in" },
  },
  {
    date: "2026-10-30",
    title: "India-Liechtenstein talks: PM Modi and Prince Alois back India-EFTA TEPA",
    topic: "international-relations",
    summary: "Prime Minister Narendra Modi held talks with Liechtenstein's Hereditary Prince Alois in New Delhi on 27 October 2026, during the Prince's visit to India from 25 to 28 October. Both sides welcomed the positive momentum from the India-EFTA Trade and Economic Partnership Agreement (TEPA) and agreed to deepen cooperation in trade, investment, science, technology and innovation. TEPA was signed in March 2024 after nearly 16 years of negotiations and came into force on 1 October 2025.",
    examAngle: "EFTA, the European Free Trade Association, has four members: Iceland, Liechtenstein, Norway and Switzerland. They are not members of the European Union. TEPA is India's first trade pact with a European bloc of this kind. Trade agreements are a favourite topic, so learn the signing year, the entry-into-force date and the partner countries.",
    possibleQuestions: [
      "Which four countries form EFTA?",
      "In which year did the India-EFTA TEPA come into force?",
      "Is Liechtenstein a member of the European Union?",
    ],
    source: { label: "Ministry of External Affairs", url: "https://www.mea.gov.in" },
  },
  {
    date: "2026-10-30",
    title: "Rashtriya Ekta Diwas on 31 October: Sardar Patel's 151st birth anniversary",
    topic: "awards-sports-persons",
    summary: "National Unity Day, or Rashtriya Ekta Diwas, is observed on 31 October every year on the birth anniversary of Sardar Vallabhbhai Patel, born in 1875. This year marks his 151st birth anniversary. The day has been celebrated since 2014, and the main event is held at the Statue of Unity at Ekta Nagar in Gujarat's Narmada district. Patel is remembered for integrating the princely states into the Indian Union as the first Deputy Prime Minister and Home Minister.",
    examAngle: "The Statue of Unity is 182 metres tall and was inaugurated on 31 October 2018. Patel was given the title Sardar after the 1928 Bardoli Satyagraha and is called the Iron Man of India. Exams often ask for the date of the day, the person it honours and the location of the statue.",
    possibleQuestions: [
      "On which date is Rashtriya Ekta Diwas observed?",
      "What is the height of the Statue of Unity?",
      "Which satyagraha earned Vallabhbhai Patel the title Sardar?",
    ],
    source: { label: "Press Information Bureau", url: "https://pib.gov.in" },
  },
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
