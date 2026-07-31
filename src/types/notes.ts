export type KeyTerm = {
  term: string;
  definition: string;
};

export type NoteSection = {
  heading: string;
  body: string[];
};

export type Subtopic = {
  slug: string;
  code: string;
  title: string;
  summary: string;
  sections: NoteSection[];
  keyTerms: KeyTerm[];
  examTip: string;
};

export type Topic = {
  slug: string;
  code: string;
  title: string;
  description: string;
  subtopics: Subtopic[];
};

export type Subject = {
  slug: string;
  examBoard: string;
  qualification: string;
  title: string;
  tagline: string;
  description: string;
  topics: Topic[];
};
