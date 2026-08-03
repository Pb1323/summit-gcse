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
  return { title: subject ? `Glossary — ${subject.title}` : "Glossary" };
}

export default async function GlossaryPage({
  params,
}: {
  params: Promise<{ subject: string }>;
}) {
  const { subject: subjectSlug } = await params;
  const subject = getSubject(subjectSlug);
  if (!subject) notFound();

  const seen = new Set<string>();
  const entries: {
    term: string;
    definition: string;
    topicSlug: string;
    topicTitle: string;
    subtopicSlug: string;
    subtopicCode: string;
    subtopicTitle: string;
  }[] = [];

  for (const topic of subject.topics) {
    for (const subtopic of topic.subtopics) {
      for (const kt of subtopic.keyTerms) {
        const key = kt.term.toLowerCase();
        if (seen.has(key)) continue;
        seen.add(key);
        entries.push({
          term: kt.term,
          definition: kt.definition,
          topicSlug: topic.slug,
          topicTitle: topic.title,
          subtopicSlug: subtopic.slug,
          subtopicCode: subtopic.code,
          subtopicTitle: subtopic.title,
        });
      }
    }
  }

  entries.sort((a, b) => a.term.localeCompare(b.term));

  const groups = new Map<string, typeof entries>();
  for (const entry of entries) {
    const letter = entry.term[0].toUpperCase();
    const group = groups.get(letter) ?? [];
    group.push(entry);
    groups.set(letter, group);
  }
  const letters = Array.from(groups.keys()).sort();

  return (
    <Container className="py-16">
      <nav className="text-sm text-sg-ink/50">
        <Link href={`/notes/${subject.slug}`} className="hover:text-sg-navy">
          Topics
        </Link>
        <span className="mx-2">/</span>
        <span className="text-sg-ink/70">Glossary</span>
      </nav>

      <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-sg-gold">
        Revision glossary
      </p>
      <h1 className="mt-2 font-serif-display text-3xl font-semibold text-sg-navy">
        Every key term, in one place
      </h1>
      <p className="mt-3 max-w-2xl text-sg-ink/70">
        {entries.length} terms from across all {subject.topics.length} topics.
        Each one links back to the subtopic it comes from for the fuller
        explanation.
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {letters.map((letter) => (
          <a
            key={letter}
            href={`#letter-${letter}`}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-sg-navy/15 bg-white text-sm font-semibold text-sg-navy transition-colors hover:border-sg-gold hover:text-sg-gold"
          >
            {letter}
          </a>
        ))}
      </div>

      <div className="mt-10 space-y-10">
        {letters.map((letter) => (
          <section key={letter} id={`letter-${letter}`} className="scroll-mt-24">
            <h2 className="font-serif-display text-xl font-semibold text-sg-gold">
              {letter}
            </h2>
            <dl className="mt-4 divide-y divide-sg-navy/10 rounded-2xl border border-sg-navy/10 bg-white">
              {groups.get(letter)!.map((entry) => (
                <div key={entry.term} className="p-5">
                  <dt className="font-semibold text-sg-navy">{entry.term}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-sg-ink/70">
                    {entry.definition}
                  </dd>
                  <Link
                    href={`/notes/${subject.slug}/${entry.topicSlug}/${entry.subtopicSlug}`}
                    className="mt-2 inline-block text-xs font-medium text-sg-ink/45 hover:text-sg-navy"
                  >
                    {entry.subtopicCode} {entry.subtopicTitle} →
                  </Link>
                </div>
              ))}
            </dl>
          </section>
        ))}
      </div>
    </Container>
  );
}
