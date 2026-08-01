import Link from "next/link";
import { Container } from "@/components/container";
import { ECONOMICS, countSubtopics } from "@/data/economics-notes";
import { EconDiagram } from "@/components/diagrams/econ-diagram";

export default function Home() {
  const subtopicCount = countSubtopics(ECONOMICS);
  const diagramCount = ECONOMICS.topics.reduce(
    (sum, t) => sum + t.subtopics.filter((s) => s.diagram).length,
    0
  );
  const showcaseDiagram = ECONOMICS.topics[1].subtopics[2].diagram!;

  return (
    <>
      <section className="border-b border-sg-navy/10 bg-gradient-to-b from-sg-cream-deep to-sg-cream py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="inline-flex items-center rounded-full border border-sg-gold/40 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sg-gold">
                OCR GCSE Economics (J205)
              </p>
              <h1 className="mt-6 font-serif-display text-4xl font-semibold leading-tight tracking-tight text-sg-navy sm:text-5xl">
                Every OCR GCSE Economics topic, with real diagrams and model exam answers.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-sg-ink/75">
                Not another wall of text. Every subtopic follows the real OCR
                specification, and comes with a proper diagram — demand and
                supply, aggregate demand/supply, PPF, exchange rates — plus a
                full worked model answer showing exactly how to structure a
                strong exam response.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/notes/economics"
                  className="rounded-full bg-sg-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-sg-navy-light"
                >
                  Start revising
                </Link>
                <Link
                  href="/about"
                  className="rounded-full border border-sg-navy/20 px-6 py-3 text-sm font-semibold text-sg-navy transition-colors hover:bg-white"
                >
                  How it&apos;s built
                </Link>
              </div>
              <p className="mt-6 text-sm text-sg-ink/50">
                {subtopicCount} subtopics · {diagramCount} diagrams · a model exam answer on every page. Free to read, no account needed.
              </p>
            </div>
            <div className="hidden lg:block">
              <EconDiagram diagram={showcaseDiagram} />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <h2 className="font-serif-display text-2xl font-semibold text-sg-navy">
            Why Summit GCSE Economics
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <FeatureCard
              title="Real diagrams, not text walls"
              body="Demand and supply, AD/AS, PPF, exchange rates, pie charts and bar charts — drawn out properly wherever the spec actually expects a diagram."
            />
            <FeatureCard
              title="Model answers on every page"
              body="Each subtopic ends with a real exam-style question and a full, developed model answer, so you can see exactly what a strong response looks like, not just the theory behind it."
            />
            <FeatureCard
              title="Matches the real OCR spec"
              body="Structured around OCR's actual four-topic J205 specification, so you always know exactly what's examinable — nothing extra, nothing missing."
            />
          </div>
        </Container>
      </section>

      <section className="border-t border-sg-navy/10 bg-white py-16 sm:py-20">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <h2 className="font-serif-display text-2xl font-semibold text-sg-navy">
                The four OCR topics
              </h2>
              <p className="mt-2 max-w-xl text-sg-ink/70">
                Introduction to Economics, The Role of Markets and Money,
                Economic Objectives and the Role of Government, and
                International Trade and the Global Economy.
              </p>
            </div>
            <Link
              href="/notes/economics"
              className="shrink-0 rounded-full bg-sg-gold px-6 py-3 text-sm font-semibold text-sg-navy transition-colors hover:bg-sg-gold-light"
            >
              View all topics →
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
