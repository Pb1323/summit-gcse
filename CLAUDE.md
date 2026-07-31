@AGENTS.md

# Summit GCSE — Project Context

Last updated: 2026-07-31 (initial build).

## Purpose

Summit GCSE is a study-notes website, separate from and a sibling project to
`Summit-Tuition` (the founder's 11+ platform, in `../Summit-Tuition`). It is a
new business line: the founder is expanding into GCSE tutoring and wants a
notes-first site (no mocks, no accounts, no payments yet) organised strictly
around real exam board specifications, starting with **OCR GCSE Economics
(J205)**.

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
has: `sections` (heading + body paragraphs), `keyTerms`, and one `examTip`.

Routes are fully data-driven:
- `/notes` — subject picker (currently only Economics; more subjects are a
  documented "coming soon" placeholder in `src/app/notes/page.tsx`).
- `/notes/[subject]` — topic grid for a subject.
- `/notes/[subject]/[topic]` — subtopic list for a topic.
- `/notes/[subject]/[topic]/[subtopic]` — the actual notes content page, with
  a sticky sidebar showing the whole subject's topic/subtopic tree and
  prev/next navigation across the whole subject.

All three dynamic routes use `generateStaticParams` off `SUBJECTS` in the
data file, so **adding a new subject, topic, or subtopic to the data file is
enough** — no route/component changes needed unless the content shape itself
changes (e.g. adding diagrams).

## Current Content

OCR GCSE Economics (J205), all 4 real spec topics, 23 subtopics total, every
subtopic with real (not placeholder) explanatory content, key terms and an
exam tip:

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

Content was written from general OCR J205 spec knowledge (topic/subtopic
structure cross-checked against `ocr.org.uk`'s public spec-at-a-glance page
and third-party spec summaries) — **no copyrighted exam board or third-party
text was copied**, all explanations are original phrasing. Same "no copying
third-party paper content" principle as Summit-Tuition applies here.

## Design

Distinct brand identity from Summit Tuition, but a related premium-education
feel: navy (`--sg-navy`) + gold (`--sg-gold`) + cream (`--sg-cream`), serif
display headings (`font-serif-display` utility) paired with a sans body font.
Tokens live in `src/app/globals.css`'s `@theme inline` block.

## Not Yet Built (intentionally, per founder's initial "just notes first" ask)

- No mocks/quizzes, no student accounts, no admin, no database, no payments.
- No subjects beyond Economics yet (Maths/Business/English are referenced as
  a "coming soon" placeholder on `/notes`, not built).
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
