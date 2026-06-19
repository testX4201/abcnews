import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

// Mirrors the BASE in page.tsx — keeps the favicon path correct under a
// subpath (e.g. /abcnews on GitHub Pages).
const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata: Metadata = {
  title:
    "When the Land Stops Speaking: Australia's First Languages and the Architecture of Survival - ABC News",
  description:
    "From a boy labelled 'failing' to an Elder who rebuilt a language from word lists, the story of Australia's First Languages is one of deliberate severance and stubborn survival.",
  icons: {
    icon: `${BASE}/abc-site/images/favicon.svg`,
  },
  openGraph: {
    title:
      "When the Land Stops Speaking: Australia's First Languages and the Architecture of Survival",
    description:
      "From a boy labelled 'failing' to an Elder who rebuilt a language from word lists, the story of Australia's First Languages is one of deliberate severance and stubborn survival.",
    type: "article",
    siteName: "ABC News",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" suppressHydrationWarning>
      <body className="antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
