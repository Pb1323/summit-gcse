import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { getSubtopic, SUBJECTS } from "@/data/economics-notes";
import type { Subject, Topic, Subtopic } from "@/types/notes";

export function generateStaticParams() {
  return SUBJECTS.flatMap((s) =>
    s.topics.flatMap((t) =>
      t.subtopics.map((st) => ({
        subject: s.slug,
        topic: t.slug,
        subtopic: st.slug,
      }))
    )
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ subject: string; topic: string; subtopic: string }>;
}): Promise<Metadata> {
  const { subject: subjectSlug, topic: topicSlug, subtopic: subtopicSlug } =
    await params;
  const { subtopic } = getSubtopic(subjectSlug, topicSlug, subtopicSlug);
  return { title: subtopic ? subtopic.title : "Notes" };
}

function flattenSubtopics(subject: Subject) {
  const flat: { topic: Topic; subtopic: Subtopic }[] = [];
  for (const topic of subject.topics) {
    for (const subtopic of topic.subtopics) {
      flat.push({ topic, subtopic });
    }
  }
  return flat;
}

export default async function SubtopicPage({
  params,
}: {
  params: Promise<{ subject: string; topic: string; subtopic: string }>;
}) {
  const { subject: subjectSlug, topic: topicSlug, subtopic: subtopicSlug } =
    await params;
  const { subject, topic, subtopic } = getSubtopic(
    subjectSlug,
    topicSlug,
    subtopicSlug
  );
  if (!subject || !topic || !subtopic) notFound();

  const flat = flattenSubtopics(subject);
  const currentIndex = flat.findIndex(
    (f) => f.topic.slug === topic.slug && f.subtopic.slug === subtopic.slug
  );
  const prev = currentIndex > 0 ? flat[currentIndex - 1] : null;
  const next = currentIndex < flat.length - 1 ? flat[currentIndex + 1] : null;

  return (
    <Container className="py-16">
      <div className="grid gap-10 lg:grid-cols-[220px_1fr]">
        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-6">
            {subject.topics.map((t) => (
              <div key={t.slug}>
                <p className="text-xs font-semibold uppercase tracking-wide text-sg-gold">
                  {t.code}
                </p>
                <p className="mt-1 text-sm font-semibold text-sg-navy">
                  {t.title}
                </p>
                <ul className="mt-2 space-y-1 border-l border-sg-navy/10 pl-3">
                  {t.subtopics.map((st) => {
                    const active = st.slug === subtopic.slug;
                    return (
                      <li key={st.slug}>
                        <Link
                          href={`/notes/${subject.slug}/${t.slug}/${st.slug}`}
                          className={`block text-sm leading-6 transition-colors ${
                            active
                              ? "font-semibold text-sg-navy"
                              : "text-sg-ink/55 hover:text-sg-navy"
                          }`}
                        >
                          {st.code} {st.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </aside>

        <article className="min-w-0">
          <nav className="text-sm text-sg-ink/50">
            <Link href="/notes" className="hover:text-sg-navy">Study Notes</Link>
            <span className="mx-2">/</span>
            <Link href={`/notes/${subject.slug}`} className="hover:text-sg-navy">
              {subject.title}
            </Link>
            <span className="mx-2">/</span>
            <Link
              href={`/notes/${subject.slug}/${topic.slug}`}
              className="hover:text-sg-navy"
            >
              {topic.title}
            </Link>
          </nav>

          <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-sg-gold">
            {subtopic.code}
          </p>
          <h1 className="mt-2 font-serif-display text-3xl font-semibold text-sg-navy">
            {subtopic.title}
          </h1>
          <p className="mt-3 text-lg leading-relaxed text-sg-ink/70">
            {subtopic.summary}
          </p>

          <div className="mt-10 space-y-8">
            {subtopic.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-serif-display text-xl font-semibold text-sg-navy">
                  {section.heading}
                </h2>
                <div className="mt-3 space-y-3">
                  {section.body.map((paragraph, i) => (
                    <p key={i} className="leading-relaxed text-sg-ink/80">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <section className="mt-10 rounded-2xl border border-sg-navy/10 bg-white p-6">
            <h2 className="font-serif-display text-lg font-semibold text-sg-navy">
              Key terms
            </h2>
            <dl className="mt-4 grid gap-4 sm:grid-cols-2">
              {subtopic.keyTerms.map((kt) => (
                <div key={kt.term}>
                  <dt className="text-sm font-semibold text-sg-navy">
                    {kt.term}
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-sg-ink/65">
                    {kt.definition}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="mt-6 rounded-2xl border border-sg-gold/40 bg-sg-cream-deep p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-sg-gold">
              Exam tip
            </p>
            <p className="mt-2 leading-relaxed text-sg-navy">
              {subtopic.examTip}
            </p>
          </section>

          <div className="mt-10 flex flex-col gap-4 border-t border-sg-navy/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
            {prev ? (
              <Link
                href={`/notes/${subject.slug}/${prev.topic.slug}/${prev.subtopic.slug}`}
                className="text-sm font-medium text-sg-navy/70 hover:text-sg-navy"
              >
                ← {prev.subtopic.code} {prev.subtopic.title}
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                href={`/notes/${subject.slug}/${next.topic.slug}/${next.subtopic.slug}`}
                className="text-right text-sm font-medium text-sg-navy/70 hover:text-sg-navy"
              >
                {next.subtopic.code} {next.subtopic.title} →
              </Link>
            ) : (
              <span />
            )}
          </div>
        </article>
      </div>
    </Container>
  );
}
