import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MuzoFlow — Twórz muzykę, która podbija social media",
  description:
    "Kompletny system do tworzenia muzyki na social media. Kurs video, e-book i narzędzia AI od Konrada Strzałkowskiego.",
  keywords: [
    "tworzenie muzyki",
    "muzyka social media",
    "kurs muzyczny",
    "AI muzyka",
    "MuzoFlow",
  ],
  openGraph: {
    title: "MuzoFlow — Twórz muzykę, która podbija social media",
    description:
      "Kompletny system do tworzenia muzyki na social media. Kurs video, e-book i narzędzia AI.",
    type: "website",
    locale: "pl_PL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
