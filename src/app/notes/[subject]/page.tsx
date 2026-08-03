import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { getSubject, SUBJECTS } from "@/data/economics-notes";

export function generateStaticParams() {
  return SUBJECTS.map((s) => ({ subject: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ subject: string }>;
}): Promise<Metadata> {
  const { subject: subjectSlug } = await params;
  const subject = getSubject(subjectSlug);
  return { title: subject ? subject.title : "Subject" };
}

export default async function SubjectPage({
  params,
}: {
  params: Promise<{ subject: string }>;
}) {
  const { subject: subjectSlug } = await params;
  const subject = getSubject(subjectSlug);
  if (!subject) notFound();

  return (
    <Container className="py-16">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-sg-gold">
            {subject.examBoard} {subject.qualification}
          </p>
          <h1 className="mt-2 font-serif-display text-3xl font-semibold text-sg-navy">
            {subject.title}
          </h1>
          <p className="mt-3 max-w-2xl text-sg-ink/70">{subject.description}</p>
        </div>
        <Link
          href={`/notes/${subject.slug}/glossary`}
          className="shrink-0 rounded-full border border-sg-navy/20 px-5 py-2.5 text-sm font-semibold text-sg-navy transition-colors hover:bg-white"
        >
          Glossary →
        </Link>
      </div>

      <div className="mt-10 space-y-5">
        {subject.topics.map((topic) => (
          <Link
            key={topic.slug}
            href={`/notes/${subject.slug}/${topic.slug}`}
            className="group block rounded-2xl border border-sg-navy/10 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-sg-gold/50 hover:shadow-md"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-sg-gold">
                {topic.code}
              </p>
              <p className="text-sm text-sg-ink/50">
                {topic.subtopics.length} subtopics
              </p>
            </div>
            <p className="mt-2 font-serif-display text-xl font-semibold text-sg-navy">
              {topic.title}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-sg-ink/65">
              {topic.description}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {topic.subtopics.map((st) => (
                <li
                  key={st.slug}
                  className="rounded-full bg-sg-cream-deep px-3 py-1 text-xs font-medium text-sg-navy/80"
                >
                  {st.code} {st.title}
                </li>
              ))}
            </ul>
          </Link>
        ))}
      </div>
    </Container>
  );
}
