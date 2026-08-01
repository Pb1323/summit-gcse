import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { getTopic, SUBJECTS } from "@/data/economics-notes";

export function generateStaticParams() {
  return SUBJECTS.flatMap((s) =>
    s.topics.map((t) => ({ subject: s.slug, topic: t.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ subject: string; topic: string }>;
}): Promise<Metadata> {
  const { subject: subjectSlug, topic: topicSlug } = await params;
  const { topic } = getTopic(subjectSlug, topicSlug);
  return { title: topic ? topic.title : "Topic" };
}

export default async function TopicPage({
  params,
}: {
  params: Promise<{ subject: string; topic: string }>;
}) {
  const { subject: subjectSlug, topic: topicSlug } = await params;
  const { subject, topic } = getTopic(subjectSlug, topicSlug);
  if (!subject || !topic) notFound();

  return (
    <Container className="py-16">
      <nav className="text-sm text-sg-ink/50">
        <Link href="/notes/economics" className="hover:text-sg-navy">Topics</Link>
        <span className="mx-2">/</span>
        <Link href={`/notes/${subject.slug}`} className="hover:text-sg-navy">
          {subject.title}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-sg-ink/70">{topic.title}</span>
      </nav>

      <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-sg-gold">
        {topic.code}
      </p>
      <h1 className="mt-2 font-serif-display text-3xl font-semibold text-sg-navy">
        {topic.title}
      </h1>
      <p className="mt-3 max-w-2xl text-sg-ink/70">{topic.description}</p>

      <ol className="mt-10 space-y-4">
        {topic.subtopics.map((subtopic, i) => (
          <li key={subtopic.slug}>
            <Link
              href={`/notes/${subject.slug}/${topic.slug}/${subtopic.slug}`}
              className="group flex items-start gap-4 rounded-2xl border border-sg-navy/10 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-sg-gold/50 hover:shadow-md"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sg-navy font-serif-display text-sm font-semibold text-sg-gold-light">
                {i + 1}
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-wide text-sg-gold">
                  {subtopic.code}
                </span>
                <span className="mt-1 block font-semibold text-sg-navy">
                  {subtopic.title}
                </span>
                <span className="mt-1 block text-sm text-sg-ink/60">
                  {subtopic.summary}
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </Container>
  );
}
