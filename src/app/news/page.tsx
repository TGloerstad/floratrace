import type { Metadata } from "next";
import NewsCard from "@/components/NewsCard";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "News",
  description: "Latest news and updates from FloraTrace.",
};

const newsItems = [
  {
    title: "FloraTrace at AAEI's 102nd Annual Conference and Expo",
    description:
      "Brett Tipple, PhD, Chief Scientist at FloraTrace spoke about isotopic testing and chemical analysis used for origin verification for supply chain transparency. Knowing where goods originate and identifying forced labor prone sourcing, empowers companies to remediate, diversify or decouple from forced labor to comply with the UFLPA.",
  },
  {
    title: "FloraTrace Welcomes New Advisor: Carli Rosencranz",
    description:
      "Carli Rosencranz is a seasoned professional with a 25-year tenure in Fortune 500 Consumer Packaged Goods (CPG) and Retail corporations. She has spent the last 15 years in various leadership roles at Walmart.",
    link: {
      url: "https://www.linkedin.com/posts/floratrace_floratrace-welcomes-new-advisor-carli-rosencranz-activity-7148051444661649408-ts_j",
      label: "Read on LinkedIn",
    },
  },
  {
    title: "Brenda Smith Joins FloraTrace Advisory Board",
    description:
      "Brenda Smith, International Trade and Public Policy Leader, joins FloraTrace Advisory Board, supporting human rights due diligence in commerce.",
    link: {
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7021483595034759168",
      label: "Read on LinkedIn",
    },
  },
  {
    title: "CBP Forced Labor Technical Expo Presentation",
    description:
      "FloraTrace's Chief Scientist, Dr. Brett Tipple, presented on how forensic chemistry and origin verification science helps importers stay compliant at the Custom and Border Protection's Forced Labor Technical Expo.",
  },
  {
    title: "Rejected, Detained, Do Not Enter, Banned...",
    description:
      "Nobody wants to hear those words. A new trade law has importers taking notes on how to comply with the Uyghur Forced Labor Prevention Act (UFLPA).",
    link: {
      url: "https://www.insurancethoughtleadership.com/commercial-lines/rejected-detained-do-not-enter-banned",
      label: "Read Full Article",
    },
  },
  {
    title: "KYG Trade and FloraTrace Integrate Supply-Chain Traceability",
    description:
      "KYG Trade, Inc. and FloraTrace, Inc. are joining forces on the KYG Trade SaaS platform and marketplace. The collaboration expands the services of both partners dedicated to facilitating trade compliance, sustainable supply chains, transparency and consumer trust.",
    link: {
      url: "https://www.einnews.com/pr_news/640372794/kyg-trade-and-floratrace-integrate-supply-chain-traceability-with-regulatory-compliance-and-sustainable-sourcing-metrics",
      label: "Read More",
    },
  },
];

export default function NewsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy via-navy-light to-navy py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-green-light font-semibold uppercase tracking-widest text-sm mb-4">
              Stay Updated
            </p>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
              News
            </h1>
            <p className="mt-6 text-white/70 text-lg max-w-2xl mx-auto">
              The latest from FloraTrace -- industry events, partnerships, and
              insights.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item, i) => (
              <NewsCard key={item.title} {...item} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
