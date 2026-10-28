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
