import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: {
    default: "Summit GCSE — Exam-Board-Specific Study Notes",
    template: "%s — Summit GCSE",
  },
  description:
    "Clear, exam-board-specific GCSE study notes. Starting with OCR GCSE Economics, organised topic by topic with key terms and exam tips.",
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
