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
          Summit GCSE is built by a working tutor for GCSE students who want
          notes that actually match their exam board&apos;s specification, instead
          of generic revision content that skips around the syllabus.
        </p>
        <p>
          Every topic is organised the way the exam board organises it, so
          you always know exactly what&apos;s examinable. Each subtopic ends with
          a concrete exam tip — the kind of thing a tutor would tell you in a
          real session, not a textbook summary.
        </p>
        <p>
          The first subject live is OCR GCSE Economics (J205). More subjects
          and exam boards are being added over time.
        </p>
      </div>
      <Link
        href="/notes/economics"
        className="mt-8 inline-block rounded-full bg-sg-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-sg-navy-light"
      >
        Start with Economics
      </Link>
    </Container>
  );
}
