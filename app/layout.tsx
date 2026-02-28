import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bandhannova.in"),
  title: {
    default: "BandhanNova — The Future of Digital India",
    template: "%s | BandhanNova",
  },
  description:
    "BandhanNova is a unified digital platform powering AI assistants, real-time messaging, knowledge search, education, and more — designed and built in India for the world.",
  keywords: [
    "BandhanNova",
    "BandhanNova Platforms",
    "AI Ecosystem India",
    "Unified Digital Platform",
    "Bani AI assistant",
    "Smartpedia AI search",
    "AI Hub multi-model",
    "AI education India",
    "BandhanNova Chat",
    "Digital Transformation India",
    "Next-gen tech India",
    "Smart Knowledge Engine",
    "AI-powered messaging",
    "BandhanNova Academy",
    "Made in India software",
  ],
  authors: [{ name: "BandhanNova Team", url: "https://www.bandhannova.in" }],
  creator: "BandhanNova",
  publisher: "BandhanNova Platforms",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "BandhanNova Platforms",
    title: "BandhanNova — The Future of Digital India",
    description:
      "Explore BandhanNova's ecosystem of AI-powered products. One account, infinite possibilities. Built for India.",
    url: "https://www.bandhannova.in",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BandhanNova Platforms — The Future of Digital India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BandhanNova — The Future of Digital India",
    description:
      "Explore BandhanNova's ecosystem of AI-powered products. Built for India.",
    images: ["/og-image.png"],
    creator: "@BandhanNova",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "google-site-verification-placeholder",
    yandex: "yandex-verification-placeholder",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "BandhanNova Platforms",
              "url": "https://www.bandhannova.in",
              "logo": "https://www.bandhannova.in/bandhannova-logo-final.svg",
              "description": "Unified digital platform powering AI assistants, messaging, search, and education in India.",
              "sameAs": [
                "https://twitter.com/BandhanNova",
                "https://github.com/BandhanNova"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer support",
                "url": "https://support.bandhannova.in"
              }
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "BandhanNova",
              "url": "https://www.bandhannova.in",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://smartpedia.bandhannova.in/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
