import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: {
    default: "Summit GCSE Economics — OCR GCSE Economics Study Notes",
    template: "%s — Summit GCSE Economics",
  },
  description:
    "Complete OCR GCSE Economics (J205) study notes: every topic, real diagrams (demand/supply, AD/AS, PPF), key terms, and model exam answers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-sg-cream text-sg-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
