import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <Container className="py-16">
      <p className="text-xs font-semibold uppercase tracking-wide text-sg-gold">
        About
      </p>
      <h1 className="mt-2 font-serif-display text-3xl font-semibold text-sg-navy">
        Study notes, written the way a good tutor would explain them
      </h1>
      <div className="mt-6 max-w-2xl space-y-4 text-sg-ink/75">
        <p>
          Summit GCSE Economics is built by a working tutor for OCR GCSE
          Economics students, and right now it&apos;s entirely dedicated to that
          one qualification — no generic revision content, no skipping around
          the syllabus.
        </p>
        <p>
          Every topic and subtopic follows OCR&apos;s real J205 specification, so
          you always know exactly what&apos;s examinable. Wherever the spec
          expects a diagram — demand and supply, aggregate demand/supply,
          PPF, exchange rates — there&apos;s a real one, not just a description
          of what it would look like.
        </p>
        <p>
          Each subtopic also ends with a full model exam answer: a realistic
          exam-style question with a properly developed response, so you can
          see exactly how marks are actually built up, not just read the
          theory behind them.
        </p>
      </div>
      <Link
        href="/notes/economics"
        className="mt-8 inline-block rounded-full bg-sg-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-sg-navy-light"
      >
        Start revising
      </Link>
    </Container>
  );
}
