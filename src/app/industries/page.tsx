"use client";

import { motion } from "framer-motion";
import {
  Coffee,
  Wheat,
  Leaf,
  Droplets,
  Palette,
  AlertTriangle,
  ShieldCheck,
  FlaskConical,
  ArrowRight,
} from "lucide-react";
import CaseStudyCard from "@/components/CaseStudyCard";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";

const paprikaStats = [
  { value: "100%", label: "of retail paprika predicted Chinese origin — none labeled as such" },
  { value: "61%", label: "flagged as originating from at-risk regions for forced labor" },
  { value: "25%", label: "with U.S. origin claims predicted Chinese — 71% of those flagged as at-risk origin" },
  { value: "70%", label: "of world's paprika grown in regions subject to the UFLPA" },
];

const caseStudies = [
  {
    eyebrow: "Supporting the coffee supply chain",
    title: "Coffee Verification Program",
    description:
      "FloraTrace provides targeted solutions for the coffee industry. Coffee growers, distributors and retailers seek to protect and demonstrate that their products are authentic and derive from specific locations. Our origin fingerprinting technology was central evidence in a landmark $40M+ class action lawsuit regarding false designation of origin for Kona coffee.",
    icon: <Coffee className="w-7 h-7" />,
  },
  {
    eyebrow: "Supporting the cotton supply chain",
    title: "Cotton - Mislabeling",
    description:
      "A key supply chain risk is mislabeling of raw materials origin to hide materials from regions utilizing forced labor. Our technologies monitor the actual material, not just the label on the packaging. Consider cotton garments produced in China using cotton from at-risk regions, transshipped to Vietnam, and exported to the U.S. labeled as \"Made in Vietnam\". Our isotopic and trace element analysis detects the geographic origin of the raw material.",
    icon: <Wheat className="w-7 h-7" />,
  },
  {
    eyebrow: "Supporting the food supply chain",
    title: "Tomatoes and Mixing/Commingling",
    description:
      "A key risk in supply chains is purposely commingling or mixing raw materials from different geographic origins to launder illicit materials. An example would be mixing tomatoes from at-risk regions with tomatoes grown in India to be exported as \"Indian Tomatoes\" for processing in Italy. Our isotopic and trace element analysis detects and identifies geographic origin of mixture components.",
    icon: <Leaf className="w-7 h-7" />,
  },
  {
    eyebrow: "Supporting the hemp supply chain",
    title: "Hemp Verification Program",
    description:
      "Hemp oil and hemp-derived CBD are becoming ubiquitous in consumer-packaged goods. Consumers pay higher prices for products grown in well-known regions and produced in specific ways. Growers operating within these regions seek to elevate the value of their product and protect their brand identity and integrity.",
    icon: <Droplets className="w-7 h-7" />,
  },
];

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy via-navy-light to-navy py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-green-light font-semibold uppercase tracking-widest text-sm mb-4">
              Industries We Serve
            </p>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
              Origin Verification Across Industries
            </h1>
            <p className="mt-6 text-white/70 text-lg max-w-2xl mx-auto">
              From natural colors to cotton, coffee to hemp -- our forensic
              origin-fingerprinting technology verifies geographic origin across
              the supply chain.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Paprika & Natural Colors — Featured */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection direction="left">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center text-orange">
                  <Palette className="w-6 h-6" />
                </div>
                <p className="text-orange font-semibold uppercase tracking-wider text-sm">
                  Featured Focus
                </p>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-navy leading-tight mb-6">
                Paprika & Natural Colors
              </h2>
              <p className="text-gray-dark leading-relaxed mb-6">
                The U.S. food industry is rapidly shifting from synthetic to
                natural colorants, with paprika oleoresin among the most
                important. However, an estimated 70% of the world&apos;s paprika
                peppers are grown in regions of China identified as at-risk for
                forced labor under the Uyghur Forced Labor Prevention Act
                (UFLPA), making any product derived from these areas subject to
                import restrictions.
              </p>
              <p className="text-gray-dark leading-relaxed mb-6">
                As demand for natural colorants surges -- the paprika oleoresin
                market is expected to grow from $150M to $260M in five years --
                the risk of paprika from at-risk regions entering U.S. supply
                chains has never been higher. FloraTrace can identify the
                geographic origin of peppers and paprika through forensic
                isotopic and trace element fingerprinting.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-orange flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-dark">
                    <span className="font-semibold text-navy">UFLPA Risk:</span>{" "}
                    Paprika from at-risk regions for forced labor cannot be
                    imported into the United States. India produces 88% of
                    paprika oleoresins, primarily using imported peppers -- many
                    from these at-risk areas.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-green flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-dark">
                    <span className="font-semibold text-navy">
                      Proven Science:
                    </span>{" "}
                    Our origin fingerprinting methodology was central evidence in
                    a landmark $40M+ agricultural origin lawsuit for Kona coffee.
                    The same science applies to paprika.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <FlaskConical className="w-5 h-5 text-navy flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-dark">
                    <span className="font-semibold text-navy">
                      How It Works:
                    </span>{" "}
                    Sample collection, elemental and isotopic analysis,
                    ML-driven origin prediction.
                    Turnaround in ~14 days.
                  </p>
                </div>
              </div>

              <CTAButton>Request a Call</CTAButton>
            </AnimatedSection>

            {/* Retail Survey Results */}
            <AnimatedSection direction="right">
              <div className="bg-navy rounded-2xl p-8 md:p-10">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-orange" />
                  <p className="text-orange text-sm font-semibold uppercase tracking-wider">
                    Retail Survey
                  </p>
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-2">
                  How Much Illegal Paprika Is in Your Supply Chain?
                </h3>
                <p className="text-white/60 text-sm mb-8">
                  Origin verification of 28 retail paprika products across 9
                  U.S. grocery stores
                </p>

                <div className="space-y-6">
                  {paprikaStats.map((stat, i) => (
                    <motion.div
                      key={stat.value}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <span className="text-3xl font-bold text-green-light flex-shrink-0 w-16 text-right">
                        {stat.value}
                      </span>
                      <p className="text-white/80 text-sm leading-relaxed pt-1.5">
                        {stat.label}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-white/50 text-xs">
                    FloraTrace, Inc. Retail Paprika Survey Report, March 2026.
                    Products tested using elemental and isotopic fingerprinting.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Policy & Regulatory Context */}
      <section className="py-16 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 border border-gray-medium/50">
                <p className="text-orange font-bold text-sm uppercase tracking-wider mb-3">
                  Harvest to Hue Act
                </p>
                <p className="text-gray-dark text-sm leading-relaxed">
                  H.R. 3358 aims to bolster U.S. agriculture&apos;s role in
                  supplying natural colorants, including provisions for
                  increasing domestic paprika production.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-gray-medium/50">
                <p className="text-orange font-bold text-sm uppercase tracking-wider mb-3">
                  AD/CVD Petitions
                </p>
                <p className="text-gray-dark text-sm leading-relaxed">
                  Anti-dumping and countervailing duty petitions filed against
                  Indian paprika oleoresin with estimated dumping margins of
                  181-223%.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-gray-medium/50">
                <p className="text-orange font-bold text-sm uppercase tracking-wider mb-3">
                  UFLPA Enforcement
                </p>
                <p className="text-gray-dark text-sm leading-relaxed">
                  Since July 2022, CBP has detained over 16,000 shipments worth
                  ~$3.7 billion. The same scrutiny must extend to paprika
                  oleoresin.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Other Industries */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="More Industries"
            title="Additional Verification Programs"
            subtitle="Our origin verification technology extends across multiple industries and supply chains."
          />
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, i) => (
              <CaseStudyCard key={study.title} {...study} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-green/5 via-white to-orange/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-6">
              Have a Supply Chain Challenge?
            </h2>
            <p className="text-gray-dark text-lg mb-10 max-w-2xl mx-auto">
              Our team of scientists and engineers can develop a verification
              program tailored to your industry and specific materials.
            </p>
            <CTAButton>Request a Call</CTAButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
