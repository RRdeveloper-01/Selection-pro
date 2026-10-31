export type Question = {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
  imageUrl?: string;
  topicTag?: string;
  year?: string;
  difficulty?: string;
};

export type TestFile = {
  subject: string;
  chapter: string;
  chapterslug: string;
  totalQuestions: number;
  questions: Question[];
};

export type TestMeta = {
  id: string;
  prefix: string;
  no: number;
  title: string;
  subject: string;
  count: number;
  topics: Record<string, number>;
};

export type ChapterMeta = { slug: string; raw: string; title: string; prefix: string; count: number };

export type ExamCategory = 'engineering' | 'medical' | 'banking' | 'ssc-railway';

export type Exam = {
  slug: string;
  name: string;
  category: ExamCategory;
  image: string | null;
  prefix: string | null;
  title: string;
  h1: string;
  intro: string;
  description: string;
  pyqs: { label: string; href: string | null }[];
  strategyHtml: string;
};

export type MockGroup = { heading: string; chapters: { title: string; slug: string | null; note?: string }[] };
export type MockPage = {
  slug: string;
  route: string;
  h1: string;
  title: string;
  intro: string;
  instructions: string[];
  groups: MockGroup[];
  lang: 'en' | 'hi';
};

export type ArticleMeta = {
  slug: string;
  section: 'blog' | 'guides' | 'scholarship' | 'exam-guides';
  title: string;
  h1: string;
  description: string;
  keywords: string;
  image: string | null;
  updated: string;
  words: number;
  file: string;
};

export type Mistake = {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
  topic: string;
  source: string;
  addedAt: number;
  wrongCount: number;
  box: number; // Leitner box 0..5
  nextReview: number; // epoch ms
  mastered: boolean;
};

export type Stats = {
  streak: number;
  best: number;
  lastActive: string; // YYYY-MM-DD
  points: number;
  answered: number;
  correct: number;
  days: Record<string, { answered: number; correct: number }>;
};
