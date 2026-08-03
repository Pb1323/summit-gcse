@AGENTS.md

# Summit GCSE — Project Context

Last updated: 2026-08-01 (added Quantitative Skills + glossary page).

## Purpose

Summit GCSE is a study-notes website, separate from and a sibling project to
`Summit-Tuition` (the founder's 11+ platform, in `../Summit-Tuition`). It is a
new business line: the founder is expanding into GCSE tutoring and, for now,
the entire site is deliberately dedicated to **OCR GCSE Economics (J205)**
only — no mocks, no accounts, no payments, and no other subjects yet. The
founder is time-constrained (studying medicine at Oxford) and explicitly
asked to keep scope narrow rather than spread into other subjects.

This is a fresh repo (`Pb1323/summit-gcse` on GitHub), not a reuse of the
`summit-gcse-tuition/` folder that already exists inside `Summit-Tuition`
(that one is an older "GradeSprint" GCSE Maths/Science prototype, unrelated —
don't confuse the two, and don't merge them without being asked).

## Tech Stack

- Next.js 16.2.12 App Router under `src/app`, TypeScript, React 19.2.4.
- Tailwind CSS v4 via `src/app/globals.css`.
- No database, no auth, no payments — the whole site is static content
  driven by one data file. `npm.cmd run build` produces fully static pages.
- No `next/font/google` — system font stack in `globals.css`, same reasoning
  as the sibling Summit-Tuition project (don't want builds depending on
  fetching Google Fonts).

## Content Model

All notes content lives in **one file**: `src/data/economics-notes.ts`,
typed via `src/types/notes.ts` (`Subject > Topic > Subtopic`). Each subtopic
has: `sections` (heading + body paragraphs), an optional `diagram`, an
optional `modelAnswer`, `keyTerms`, and one `examTip`.

**Diagrams** are data, not JSX — a `Diagram` union (`CurveDiagram | PieDiagram
| BarDiagram | LineDiagram` in `src/types/notes.ts`) describing axes/curves/
slices/bars/points, rendered by `src/components/diagrams/econ-diagram.tsx`
(which dispatches to `curves-diagram.tsx`, `pie-chart.tsx`, `bar-chart.tsx`,
`line-chart.tsx`). `CurveDiagram` is the workhorse — it covers demand curves,
supply curves, market equilibrium, PPF, AD/AS, the labour market, exchange
rate markets, and externality (MPC/MSC) diagrams, since they're all just
labelled-axis curves with an optional equilibrium point and an optional
shift arrow between two named curves. 22 of 23 subtopics currently have a
diagram (only 1.2, the economic problem/opportunity cost, doesn't — a PPF
diagram already covers that ground in 1.4).

**Model answers** (`ModelAnswer` type: `command` + `question` + `marks` +
`points[]`) give a full worked exam-style response per subtopic, varying
command word (Explain/Analyse/Discuss/Evaluate) and mark value (4-9) to
roughly track real GCSE mark-scheme structure — each `points` array should
read as a genuinely developed answer (identification → mechanism → impact/
evaluation), not a bullet list of disconnected facts.

Routes are fully data-driven:
- `/notes` — **redirects** straight to `/notes/economics` (see Site Theming
  below — there's deliberately no multi-subject picker UI right now).
- `/notes/[subject]` — topic grid for a subject.
- `/notes/[subject]/[topic]` — subtopic list for a topic.
- `/notes/[subject]/[topic]/[subtopic]` — the actual notes content page:
  diagram (if present) → sections → key terms → exam tip → model answer,
  with a sticky sidebar showing the whole subject's topic/subtopic tree and
  prev/next navigation across the whole subject.

All three dynamic routes use `generateStaticParams` off `SUBJECTS` in the
data file, so **adding a new subject, topic, or subtopic to the data file is
enough** — no route/component changes needed, including diagrams and model
answers, unless a genuinely new diagram *kind* is needed beyond the four
that exist.

## Site Theming (2026-08-01 change)

The founder reviewed v1 (notes-only, no diagrams, thin content) and asked for
two things: (1) real diagrams + deeper content + model answers, and (2) the
whole site re-themed around OCR GCSE Economics specifically, not a generic
"pick your subject" shell, since only one subject exists and will for a
while. In response: `/notes` now redirects to `/notes/economics` instead of
showing a subject-picker page with a "more subjects coming soon" placeholder
card; header nav/logo, footer, homepage hero, and the About page copy were
all rewritten to read as an OCR GCSE Economics site, not a multi-subject
platform. The underlying `Subject`/multi-subject data model in
`src/types/notes.ts` was deliberately left in place (costs nothing to keep),
so a second subject can be added later just by adding to `SUBJECTS` in the
data file and reinstating a real subject-picker at `/notes` — don't assume
that work is done, and don't re-add multi-subject UI without being asked.

## Current Content

OCR GCSE Economics (J205), all 4 real spec topics, 23 subtopics, **plus** a
5th, deliberately-not-numbered-like-the-others entry: `quantitative-skills`
(`code: "Exam skills"`, not "Topic 5") covering percentages/percentage
change, index numbers, and interpreting tables/graphs — real OCR exam
skills examined throughout both papers, but not one of OCR's own numbered
topics, so its `code` and description are written to make that distinction
clear rather than implying a 5th official spec topic exists. 26 subtopics
total.

A `/notes/[subject]/glossary` page (`src/app/notes/[subject]/glossary/page.tsx`)
aggregates every subtopic's `keyTerms` into one alphabetical, letter-jump
reference page, each entry linking back to its source subtopic — pulled
automatically from the data file, no manual glossary list to maintain.
Linked from header nav, footer, the subject/topics page, and the sticky
sidebar on every subtopic page.

Below is the original 4-topic, 23-subtopic breakdown —
topic/subtopic structure cross-checked against `ocr.org.uk`'s public spec
pages and mrgoff.com's real OCR-specific GCSE Economics topic list (both via
live web search/fetch, not guessed) — every subtopic has real explanatory
content (with concrete real-world examples: the 2022 UK inflation spike,
Bank of England rate path, UK current account pattern, Brexit-era pound
depreciation, etc. — grounded but not claiming precise official statistics
where a diagram is illustrative), a diagram (22/23 subtopics), key terms,
an exam tip, and a full model exam answer (23/23 subtopics):

1. Introduction to Economics — 4 subtopics (factors of production, the
   economic problem, economic decision-makers, PPFs).
2. The Role of Markets and Money — 7 subtopics (demand, supply, price
   determination, competition/market structures, specialisation & division
   of labour, the labour market, money & financial markets).
3. Economic Objectives and the Role of Government — 8 subtopics (growth,
   unemployment, inflation, income/wealth distribution, fiscal policy,
   monetary policy, supply-side policy, market failure & intervention).
4. International Trade and the Global Economy — 4 subtopics (trade, balance
   of payments, exchange rates, globalisation).

**No copyrighted exam board or third-party text was copied anywhere** — all
explanations, examples and model answers are original phrasing, written
from general economics knowledge and cross-checked (not transcribed) against
public spec/topic-list pages. Same "no copying third-party paper content"
principle as Summit-Tuition applies here. Diagram data (e.g. the illustrative
UK inflation/unemployment/Bank Rate paths, income-quintile shares) is labelled
"illustrative" in its `note` field wherever it isn't a precise official
statistic — don't strip that caveat if editing.

**Research lesson from this session, useful for future content sessions**:
several PDF fetches of real OCR sample assessment materials and mark schemes
failed (403s, or WebFetch returning raw undecoded binary since no PDF text
extraction tool was available locally). Structure and diagram-convention
research succeeded via `WebSearch` → real page URLs → `WebFetch` on HTML
pages (mrgoff.com, economicshelp.org, tutor2u reference pages). If you need
exact real past-paper question wording again, try downloading the PDF and
reading it with a proper PDF text extraction step, or search for a site that
mirrors the mark scheme as HTML/text rather than fetching the OCR PDF directly.

## Diagram Component Library

`src/components/diagrams/`:
- `econ-diagram.tsx` — dispatcher, renders the title/note card wrapper and
  picks the right chart component by `diagram.kind`.
- `curves-diagram.tsx` — generic labelled-axis curve diagram (SVG,
  viewBox-based, 0-100 coordinate space mapped to a plot area). Supports
  multiple curves, dashed variants, an equilibrium point with dashed guide
  lines, and a shift arrow between two named curves.
- `pie-chart.tsx` — SVG pie/donut-free pie chart with a colour-coded legend.
- `bar-chart.tsx` — simple vertical bar chart, supports a `highlight` flag
  per bar (renders gold instead of navy).
- `line-chart.tsx` — simple time-series line chart with value labels above
  each point.

All four share the navy/gold/cream palette hardcoded as hex (not Tailwind
classes, since these are raw SVG `fill`/`stroke` attributes) — keep new
diagram components consistent with `#0f1f3d` (navy), `#c8952c` (gold),
`#5b6478` (muted grey) if adding more.

## Design

Distinct brand identity from Summit Tuition, but a related premium-education
feel: navy (`--sg-navy`) + gold (`--sg-gold`) + cream (`--sg-cream`), serif
display headings (`font-serif-display` utility) paired with a sans body font.
Tokens live in `src/app/globals.css`'s `@theme inline` block.

## Not Yet Built (intentionally, per founder's scope)

- No mocks/quizzes, no student accounts, no admin, no database, no payments.
- No subjects beyond Economics (deliberately, see Site Theming above).
- No sitemap/robots/SEO metadata pass beyond basic per-page `<title>`s.
- Not yet deployed anywhere (no Vercel project connected as of this commit).

## How To Run Locally

```bash
npm install
npm.cmd run dev   # PowerShell blocks npm.ps1, use npm.cmd on Windows
```

Open `http://localhost:3000`.

## Verification

```bash
npm.cmd run lint
npx tsc --noEmit
npm.cmd run build
```

All three were clean as of this commit (35 static pages generated).
