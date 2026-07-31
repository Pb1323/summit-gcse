import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/container";
import { SUBJECTS, countSubtopics } from "@/data/economics-notes";

export const metadata: Metadata = { title: "Study Notes" };

export default function NotesHub() {
  return (
    <Container className="py-16">
      <p className="text-xs font-semibold uppercase tracking-wide text-sg-gold">
        Study Notes
      </p>
      <h1 className="mt-2 font-serif-display text-3xl font-semibold text-sg-navy">
        Choose a subject
      </h1>
      <p className="mt-3 max-w-xl text-sg-ink/70">
        Each subject is organised exam-board first, so the structure always
        matches what you&apos;re actually being examined on.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {SUBJECTS.map((subject) => (
          <Link
            key={subject.slug}
            href={`/notes/${subject.slug}`}
            className="group rounded-2xl border border-sg-navy/10 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-sg-gold/50 hover:shadow-md"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-sg-gold">
              {subject.examBoard} {subject.qualification}
            </p>
            <p className="mt-2 font-serif-display text-xl font-semibold text-sg-navy">
              {subject.title}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-sg-ink/65">
              {subject.description}
            </p>
            <p className="mt-4 text-sm font-medium text-sg-navy">
              {subject.topics.length} topics · {countSubtopics(subject)} subtopics →
            </p>
          </Link>
        ))}

        <div className="rounded-2xl border border-dashed border-sg-navy/20 p-6 text-sg-ink/50">
          <p className="font-serif-display text-xl font-semibold text-sg-ink/40">
            More subjects coming soon
          </p>
          <p className="mt-2 text-sm">
            Maths, Business and English notes are next on the roadmap.
          </p>
        </div>
      </div>
    </Container>
  );
}
