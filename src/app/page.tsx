import Link from "next/link";
import { Container } from "@/components/container";
import { ECONOMICS, countSubtopics } from "@/data/economics-notes";

export default function Home() {
  const subtopicCount = countSubtopics(ECONOMICS);

  return (
    <>
      <section className="border-b border-sg-navy/10 bg-gradient-to-b from-sg-cream-deep to-sg-cream py-20 sm:py-28">
        <Container>
          <div className="max-w-2xl">
            <p className="inline-flex items-center rounded-full border border-sg-gold/40 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sg-gold">
              GCSE Study Notes
            </p>
            <h1 className="mt-6 font-serif-display text-4xl font-semibold leading-tight tracking-tight text-sg-navy sm:text-5xl">
              Study notes built around your exact exam board specification.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-sg-ink/75">
              No generic revision guides. Summit GCSE organises every topic exactly
              the way your exam board structures it, with plain-English
              explanations, key terms, and exam tips built in. Starting with{" "}
              <strong className="text-sg-navy">OCR GCSE Economics (J205)</strong>.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/notes/economics"
                className="rounded-full bg-sg-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-sg-navy-light"
              >
                Start with Economics
              </Link>
              <Link
                href="/notes"
                className="rounded-full border border-sg-navy/20 px-6 py-3 text-sm font-semibold text-sg-navy transition-colors hover:bg-white"
              >
                Browse all notes
              </Link>
            </div>
            <p className="mt-6 text-sm text-sg-ink/50">
              {subtopicCount} subtopics live across all 4 OCR Economics topics — free to read, no account needed.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <h2 className="font-serif-display text-2xl font-semibold text-sg-navy">
            Why Summit GCSE
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <FeatureCard
              title="Spec-matched structure"
              body="Every topic and subtopic follows the real exam board specification, so you always know exactly what's examinable and what isn't."
            />
            <FeatureCard
              title="Exam tips, not just theory"
              body="Each subtopic ends with a concrete tip on how examiners actually award marks — not just what the theory says."
            />
            <FeatureCard
              title="Built by a working tutor"
              body="Written by a tutor who teaches this content directly to GCSE students, not scraped or auto-generated."
            />
          </div>
        </Container>
      </section>

      <section className="border-t border-sg-navy/10 bg-white py-16 sm:py-20">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <h2 className="font-serif-display text-2xl font-semibold text-sg-navy">
                OCR GCSE Economics (J205)
              </h2>
              <p className="mt-2 max-w-xl text-sg-ink/70">
                All four topics — Introduction to Economics, The Role of Markets
                and Money, Economic Objectives and the Role of Government, and
                International Trade and the Global Economy.
              </p>
            </div>
            <Link
              href="/notes/economics"
              className="shrink-0 rounded-full bg-sg-gold px-6 py-3 text-sm font-semibold text-sg-navy transition-colors hover:bg-sg-gold-light"
            >
              View topics →
            </Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ECONOMICS.topics.map((topic) => (
              <Link
                key={topic.slug}
                href={`/notes/economics/${topic.slug}`}
                className="group rounded-2xl border border-sg-navy/10 bg-sg-cream p-5 transition-all hover:-translate-y-0.5 hover:border-sg-gold/50 hover:shadow-md"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-sg-gold">
                  {topic.code}
                </p>
                <p className="mt-2 font-semibold text-sg-navy">{topic.title}</p>
                <p className="mt-2 text-sm text-sg-ink/60">
                  {topic.subtopics.length} subtopics
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

function FeatureCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-sg-navy/10 bg-white p-6">
      <p className="font-semibold text-sg-navy">{title}</p>
      <p className="mt-2 text-sm leading-relaxed text-sg-ink/65">{body}</p>
    </div>
  );
}
