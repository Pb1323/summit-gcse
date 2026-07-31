import type { Metadata } from "next";
import { Container } from "@/components/container";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <Container className="py-16">
      <p className="text-xs font-semibold uppercase tracking-wide text-sg-gold">
        Contact
      </p>
      <h1 className="mt-2 font-serif-display text-3xl font-semibold text-sg-navy">
        Get in touch
      </h1>
      <p className="mt-4 max-w-xl text-sg-ink/75">
        Spotted an error in the notes, or want to request a topic? Reach out
        and it&apos;ll be looked at directly — this site is actively maintained.
      </p>
    </Container>
  );
}
