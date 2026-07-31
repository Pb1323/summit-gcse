import Link from "next/link";
import { Container } from "@/components/container";

const NAV_LINKS = [
  { href: "/notes", label: "Study Notes" },
  { href: "/about", label: "About" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-sg-navy/10 bg-sg-cream/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sg-navy text-sm font-semibold text-sg-gold-light font-serif-display">
            S
          </span>
          <span className="font-serif-display text-lg font-semibold tracking-tight text-sg-navy">
            Summit GCSE
          </span>
        </Link>
        <nav className="hidden items-center gap-8 sm:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-sg-ink/80 transition-colors hover:text-sg-navy"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/notes/economics"
          className="rounded-full bg-sg-navy px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-sg-navy-light"
        >
          Start revising
        </Link>
      </Container>
    </header>
  );
}
