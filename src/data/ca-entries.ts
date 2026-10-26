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

export const CA_ENTRIES: CaEntry[] = [];
