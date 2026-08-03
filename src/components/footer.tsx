import Link from "next/link";
import { Container } from "@/components/container";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-sg-navy/10 bg-sg-navy text-sg-cream/80">
      <Container className="flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-serif-display text-base font-semibold text-white">
            Summit GCSE
          </p>
          <p className="mt-1 text-sm text-sg-cream/60">
            OCR GCSE Economics (J205) study notes — diagrams, key terms, and
            model exam answers for every topic on the spec.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link href="/notes/economics" className="hover:text-white">Topics</Link>
          <Link href="/notes/economics/glossary" className="hover:text-white">Glossary</Link>
          <Link href="/about" className="hover:text-white">About</Link>
          <Link href="/contact" className="hover:text-white">Contact</Link>
        </nav>
      </Container>
      <Container className="border-t border-white/10 py-4 text-xs text-sg-cream/50">
        © {new Date().getFullYear()} Summit GCSE. Not affiliated with OCR or any exam board.
      </Container>
    </footer>
  );
}
