export type KeyTerm = {
  term: string;
  definition: string;
};

export type NoteSection = {
  heading: string;
  body: string[];
};

export type CurveColor = "navy" | "gold" | "muted" | "navy-dashed" | "gold-dashed";

export type CurveSpec = {
  id: string;
  points: [number, number][];
  color: CurveColor;
  label: string;
  labelPos?: "start" | "end";
};

export type CurveDiagram = {
  kind: "curves";
  title: string;
  xLabel: string;
  yLabel: string;
  curves: CurveSpec[];
  equilibrium?: { x: number; y: number; label?: string };
  shift?: { fromCurveId: string; toCurveId: string; label: string };
  note?: string;
};

export type PieDiagram = {
  kind: "pie";
  title: string;
  slices: { label: string; value: number }[];
  note?: string;
};

export type BarDiagram = {
  kind: "bar";
  title: string;
  yLabel: string;
  bars: { label: string; value: number; highlight?: boolean }[];
  note?: string;
};

export type LineDiagram = {
  kind: "line";
  title: string;
  yLabel: string;
  points: { label: string; value: number }[];
  note?: string;
};

export type Diagram = CurveDiagram | PieDiagram | BarDiagram | LineDiagram;

export type ModelAnswer = {
  command: string;
  question: string;
  marks: number;
  points: string[];
};

export type Subtopic = {
  slug: string;
  code: string;
  title: string;
  summary: string;
  sections: NoteSection[];
  diagram?: Diagram;
  keyTerms: KeyTerm[];
  examTip: string;
  modelAnswer?: ModelAnswer;
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
