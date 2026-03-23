import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://floratrace.com"),
  title: {
    default: "FloraTrace - Origin Verification for Sustainable Sourcing",
    template: "%s | FloraTrace",
  },
  description:
    "Geographic origin verification for companies seeking to comply with UFLPA, anti-dumping, countervailing, free trade agreement requirements, deforestation and The Lacey Act.",
  keywords: [
    "origin verification",
    "supply chain transparency",
    "UFLPA compliance",
    "isotopic testing",
    "trace element analysis",
    "geographic origin",
    "sustainable sourcing",
    "forced labor prevention",
    "trade compliance",
    "FloraTrace",
  ],
  authors: [{ name: "FloraTrace" }],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://floratrace.com",
    siteName: "FloraTrace",
    title: "FloraTrace - Origin Verification for Sustainable Sourcing",
    description:
      "Geographic origin verification for companies seeking to comply with UFLPA, anti-dumping, countervailing, free trade agreement requirements, deforestation and The Lacey Act.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "FloraTrace - Origin Verification for Sustainable Sourcing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FloraTrace - Origin Verification for Sustainable Sourcing",
    description:
      "Geographic origin verification for companies seeking to comply with UFLPA and trade regulations.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
