import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "BandhanNova — The Future of Digital India",
  description:
    "BandhanNova is a unified digital platform powering AI assistants, real-time messaging, knowledge search, education, and more — built for India.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "BandhanNova Platforms",
    title: "BandhanNova — The Future of Digital India",
    description:
      "Explore BandhanNova's ecosystem of AI-powered products built for India.",
    url: "https://www.bandhannova.in",
  },
  twitter: {
    card: "summary_large_image",
    title: "BandhanNova — The Future of Digital India",
    description:
      "Explore BandhanNova's ecosystem of AI-powered products.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
