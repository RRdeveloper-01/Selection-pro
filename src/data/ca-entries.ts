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
    date: "2026-10-31",
    title: "ISRO successfully places NVS-03 in orbit: GSLV-F18 strengthens NavIC navigation system",
    topic: "science-technology-space",
    summary: "The Indian Space Research Organisation (ISRO) successfully placed the NVS-03 navigation satellite into its intended orbit using the GSLV-F18 launch vehicle on 30 October 2026. The launch took place from the Second Launch Pad at the Satish Dhawan Space Centre, Sriharikota, Andhra Pradesh. This mission marked the 20th flight of India's Geosynchronous Satellite Launch Vehicle (GSLV). NVS-03 is the third satellite in the next-generation navigation satellite series designed to maintain and strengthen the operational capabilities of India's Navigation with Indian Constellation (NavIC). The satellite carries an indigenous atomic clock along with procured atomic clocks for accurate positioning and timing services. It also introduces the L1 navigation signal alongside the existing L5 and S-band signals. NavIC is designed to provide navigation coverage over India's landmass and a region extending approximately 1,500 kilometres beyond its geopolitical boundary. The mission is important for India's independent satellite navigation infrastructure and reduces dependence on foreign navigation systems.",
    examAngle: "NavIC stands for Navigation with Indian Constellation and was previously known as the Indian Regional Navigation Satellite System (IRNSS). It is India's independent regional satellite navigation system. Remember that GSLV-F18 was the 20th flight of GSLV and NVS-03 was the third satellite in the next-generation NVS series. The satellite includes an indigenous atomic clock and supports L1, L5 and S-band signals. Questions may cover the launch centre, launch vehicle, satellite purpose and navigation coverage.",
    possibleQuestions: [
      "What is the full form of NavIC?",
      "Which launch vehicle placed NVS-03 into orbit?",
      "How far beyond India's boundary is NavIC designed to provide coverage?"
    ],
    source: { label: "ISRO", url: "https://www.isro.gov.in/Mission_GSLVF18.html" },
  },
  {
    date: "2026-10-31",
    title: "Government constitutes High Level Committee on Banking for Viksit Bharat",
    topic: "economy-banking-finance",
    summary: "The Government of India constituted the High Level Committee on Banking for Viksit Bharat on 30 October 2026. The committee was announced by Union Finance Minister Nirmala Sitharaman in the Union Budget 2026-27. Former Central Vigilance Commissioner Suresh N. Patel has been appointed as its chairman. The committee includes RBI Deputy Governor Shirish Chandra Murmu, former Indian Bank Managing Director and CEO Padmaja Chunduru, and former RBI Deputy Governor N. S. Vishwanathan. Its tenure will be six months. The main responsibility is to examine India's existing banking structure and recommend institutional, regulatory, legal and structural reforms. Its work will cover public and private banks, Regional Rural Banks, cooperative banks and long-term capital requirements. It will also examine the role of artificial intelligence and digital technology in banking, while considering cybersecurity safeguards. The committee will review the Priority Sector Lending framework and Lead Bank Scheme to improve financial inclusion and credit delivery.",
    examAngle: "The committee is connected with the government's long-term objective of Viksit Bharat 2047. Remember its chairman, members and six-month tenure. Priority Sector Lending refers to the requirement of directing bank credit towards identified sectors that need adequate financial support. Regional Rural Banks and cooperative banks are also included in the proposed review. Banking examinations may ask about the committee's purpose, leadership and its connection with Budget 2026-27.",
    possibleQuestions: [
      "Who is the chairman of the High Level Committee on Banking for Viksit Bharat?",
      "What is the tenure of the banking reform committee?",
      "Which banking framework related to financial inclusion will the committee review?"
    ],
    source: { label: "Ministry of Finance, PIB", url: "https://www.pib.gov.in/PressReleseDetailm.aspx?PRID=2330598" },
  },
  {
    date: "2026-10-31",
    title: "UPI expands international reach: Online bookings enabled at Burj Khalifa and Singapore attractions",
    topic: "economy-banking-finance",
    summary: "India's Unified Payments Interface (UPI) has received another international expansion with the introduction of online payment facilities for selected tourist attractions in the United Arab Emirates and Singapore. According to the Ministry of Finance announcement on 30 October 2026, Indian visitors can use their preferred UPI applications to make online bookings at At the Top, Burj Khalifa, and attractions operated through Resorts World Sentosa. In the UAE, the integration has been developed through partnerships involving NEOPAY and Emaar Entertainment. In Singapore, the facility has been extended in collaboration with FOMO Pay. Resorts World Sentosa includes popular attractions such as Universal Studios Singapore, Singapore Oceanarium and Adventure Cove Waterpark. The development builds on earlier international UPI partnerships and makes travel-related payments more convenient for Indian visitors. NPCI International Payments Limited (NIPL), the international arm of the National Payments Corporation of India, plays an important role in expanding UPI's overseas acceptance.",
    examAngle: "UPI is a real-time payment system developed by the National Payments Corporation of India (NPCI). NPCI International Payments Limited works to expand India's payment infrastructure internationally. Remember the distinction between NPCI and NIPL. The latest announcement concerns online bookings at selected attractions in the UAE and Singapore. The Eiffel Tower ticketing facility was another earlier international UPI initiative, launched on 26 January 2024. Questions may cover the organisations, countries and digital payment system.",
    possibleQuestions: [
      "Which organisation operates UPI in India?",
      "What is the full form of NIPL?",
      "At which famous UAE attraction has UPI online booking been enabled?"
    ],
    source: { label: "Ministry of Finance, PIB", url: "https://www.pib.gov.in/PressReleseDetailm.aspx?PRID=2330558" },
  },
  {
    date: "2026-10-31",
    title: "National Social Security Board notified for unorganised, gig and platform workers",
    topic: "government-schemes",
    summary: "The Ministry of Labour and Employment notified the constitution of the National Social Security Board for Unorganised Workers and Gig and Platform Workers on 30 October 2026. The development is part of the implementation framework under the Code on Social Security. The board is intended to strengthen the welfare system for workers who may not have access to the same employment benefits as workers in conventional organised jobs. Its representation will include Central and State Government officials, aggregator companies, employers, civil society organisations, workers' unions and gig and platform worker associations. The board will be presided over by the Union Minister for Labour and Employment and will meet at least three times a year. Its responsibilities include recommending suitable welfare schemes, advising the Central Government on matters related to the Code, monitoring social security programmes and reviewing relevant records and expenditure. The notification is significant because it brings gig and platform workers more clearly into the country's formal social security framework.",
    examAngle: "The Code on Social Security, 2020 is an important labour legislation that consolidates provisions related to social security. Gig workers perform work outside the traditional employer-employee relationship, while platform workers obtain work through digital platforms. Remember the board's parent legislation, its main beneficiaries and its responsibility to recommend and monitor welfare schemes. These concepts are relevant to labour reforms, inclusive growth and social justice.",
    possibleQuestions: [
      "Under which Code has the National Social Security Board been constituted?",
      "How many times a year must the National Social Security Boards meet at minimum?",
      "Which categories of workers are covered by the newly notified board?"
    ],
    source: { label: "Ministry of Labour and Employment, PIB", url: "https://www.pib.gov.in/PressReleseDetailm.aspx?PRID=2330299" },
  },
  {
    date: "2026-10-31",
    title: "Digital Life Certificate Campaign 5 to cover 2,000 cities and districts from November",
    topic: "government-schemes",
    summary: "The Department of Pension and Pensioners' Welfare announced the fifth nationwide Digital Life Certificate Campaign, scheduled from 1 November to 30 November 2026. The month-long campaign will cover approximately 2,000 cities and districts across India and aims to make pension-related services more accessible, particularly for elderly pensioners. The campaign has adopted a coordinated approach involving 19 banks, 785 district post offices, 56 pensioners' welfare associations, UIDAI, the Ministry of Electronics and Information Technology, Railways, EPFO, State Governments and other institutions. A major focus will be the use of face authentication technology to generate Digital Life Certificates. This facility can be used through Android and iOS devices and is intended to simplify the verification process for pensioners. The campaign has set targets of 2.30 crore Digital Life Certificates, including 1.50 crore certificates generated through face authentication. Doorstep services, health check-ups and Aadhaar-related assistance will also form part of the outreach activities.",
    examAngle: "A Digital Life Certificate is used by pensioners to establish that they are alive and eligible to continue receiving pension benefits. Jeevan Pramaan is India's biometric-enabled digital life certificate service. Face authentication technology makes verification more accessible without requiring every pensioner to visit a bank or government office. Remember the campaign's fifth edition, November dates, coverage of 2,000 cities and districts and the target of 2.30 crore certificates.",
    possibleQuestions: [
      "Which department conducts the nationwide Digital Life Certificate Campaign?",
      "During which month will Campaign 5 be conducted?",
      "How many Digital Life Certificates are targeted under the campaign?"
    ],
    source: { label: "Department of Pension and Pensioners' Welfare, PIB", url: "https://www.pib.gov.in/PressReleseDetailm.aspx?PRID=2330361" },
  },
  {
    date: "2026-10-31",
    title: "Air Marshal Inderpal Singh Walia appointed Vice Chief of the Air Staff",
    topic: "national",
    summary: "Air Marshal Inderpal Singh Walia has been appointed as the next Vice Chief of the Air Staff of the Indian Air Force with effect from 1 November 2026. The appointment was announced by the Ministry of Defence on 30 October. Before taking up the new responsibility, he was serving as the Air Officer Commanding-in-Chief of the Eastern Air Command. An alumnus of the National Defence Academy, he was commissioned into the fighter stream of the Indian Air Force on 11 June 1988. During his long career, he has held several operational, command and staff positions, including command of a frontline fighter squadron and the Tactics and Air Combat Development Establishment. He has also served as India's Defence Attaché at the Embassy of Japan and South Korea. His distinguished service has been recognised through the Vayu Sena Medal in 2008 and the Ati Vishisht Seva Medal in 2018. The appointment is an important development in the senior leadership structure of the Indian Air Force.",
    examAngle: "The Vice Chief of the Air Staff is a senior leadership position in the Indian Air Force. Remember Air Marshal Inderpal Singh Walia's appointment date, his previous command and his National Defence Academy background. The Vayu Sena Medal and Ati Vishisht Seva Medal are important Indian military decorations. Defence-related current affairs frequently include senior appointments, commands, military exercises and service awards.",
    possibleQuestions: [
      "Who has been appointed as the Vice Chief of the Air Staff from 1 November 2026?",
      "Which Air Command was previously headed by Air Marshal Inderpal Singh Walia?",
      "In which year was he commissioned into the Indian Air Force?"
    ],
    source: { label: "Ministry of Defence, PIB", url: "https://www.pib.gov.in/PressReleseDetailm.aspx?PRID=2330557" },
  },
  {
    date: "2026-10-31",
    title: "Vande Bharat Sleeper service planned between Varanasi and New Delhi",
    topic: "national",
    summary: "Indian Railways announced a new Vande Bharat Sleeper Express service connecting Varanasi and New Delhi, with its flag-off scheduled for 31 October 2026. The announcement was made by the Ministry of Railways on 30 October. Uttar Pradesh Chief Minister Yogi Adityanath and Union Railway Minister Ashwini Vaishnaw were scheduled to flag off the service from Varanasi. The train is designed to provide a modern overnight travel option for passengers travelling between eastern Uttar Pradesh and the national capital. Its announced route includes Prayagraj, Kanpur Central, Aligarh and Ghaziabad between Varanasi and New Delhi. The Varanasi-originating service is scheduled to depart at 8:50 pm and reach New Delhi at 6:10 am the following morning. The return service is scheduled to depart New Delhi at 9:40 pm and reach Varanasi at 7:10 am. According to the ministry, the service is expected to reduce journey time compared with the Shiv Ganga Express while offering sleeper accommodation and modern passenger facilities. The announced schedule provides for six operating days each week.",
    examAngle: "Vande Bharat Sleeper is designed for long-distance overnight passenger travel, unlike the daytime chair-car services of the original Vande Bharat trains. The route is especially important for Uttar Pradesh because it connects Varanasi, Prayagraj and Kanpur with the national capital. Remember the intermediate stations, the Railway Minister and the Chief Minister associated with the scheduled flag-off. Distinguish between a train's announced schedule and confirmation that its service has actually commenced.",
    possibleQuestions: [
      "Which two cities will be connected by the announced Vande Bharat Sleeper service?",
      "Name the Uttar Pradesh stations included on the announced route.",
      "Who is the Union Railway Minister mentioned in the announcement?"
    ],
    source: { label: "Ministry of Railways, PIB", url: "https://www.pib.gov.in/PressReleseDetailm.aspx?PRID=2330492" },
  },

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
