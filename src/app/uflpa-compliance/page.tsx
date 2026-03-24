"use client";

import {
  ShieldCheck,
  AlertTriangle,
  FileCheck,
  Scale,
  ArrowRight,
  ClipboardList,
  Building2,
  Globe,
  Ban,
  Microscope,
  CheckCircle2,
  XCircle,
  Package,
  FlaskConical,
  Fingerprint,
  FileText,
} from "lucide-react";
import CTAButton from "@/components/CTAButton";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

const riskSectors = [
  {
    icon: <Package className="w-6 h-6" />,
    name: "Cotton & Textiles",
    detail: "At-risk regions produce a significant share of China's cotton, accounting for ~20% of global production",
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    name: "Paprika & Natural Colors",
    detail: "At-risk regions produce ~70% of the world's paprika — our survey found 61% of U.S. retail paprika flagged as originating from at-risk areas",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    name: "Tomatoes & Food Products",
    detail: "Regions subject to the UFLPA are major tomato-producing areas with documented forced labor programs",
  },
  {
    icon: <FlaskConical className="w-6 h-6" />,
    name: "Polysilicon & Solar",
    detail: "45% of global polysilicon originates from regions subject to Withhold Release Orders (WROs) under the UFLPA",
  },
];

const processSteps = [
  {
    step: "01",
    icon: <ClipboardList className="w-6 h-6" />,
    title: "Risk Assessment",
    description: "We evaluate your product categories and supply chain geography to identify UFLPA exposure.",
  },
  {
    step: "02",
    icon: <Package className="w-6 h-6" />,
    title: "Sample Collection",
    description: "Collect specimens from raw materials, finished goods, or supply chain checkpoints.",
  },
  {
    step: "03",
    icon: <Microscope className="w-6 h-6" />,
    title: "Isotopic & Trace Element Analysis",
    description: "Isotopic and elemental analysis in accredited labs to determine geographic origin fingerprint.",
  },
  {
    step: "04",
    icon: <Fingerprint className="w-6 h-6" />,
    title: "Origin Prediction",
    description: "Geographic Origin determined using proprietary ML-driven algorithms and authenticated reference databases.",
  },
  {
    step: "05",
    icon: <FileText className="w-6 h-6" />,
    title: "CBP-Ready Report",
    description: "Court-admissible verification report formatted for U.S. Customs and Border Protection (CBP) submission and Daubert Standard compliance.",
  },
];

const comparisonRows = [
  { label: "Verifies actual product origin", audit: false, isotopic: true },
  { label: "Tamper-proof evidence", audit: false, isotopic: true },
  { label: "Detects transshipped goods", audit: false, isotopic: true },
  { label: "Court-admissible (Daubert)", audit: false, isotopic: true },
  { label: "Identifies commingled materials", audit: false, isotopic: true },
  { label: "Independent of supplier claims", audit: false, isotopic: true },
  { label: "~14 day turnaround", audit: true, isotopic: true },
];

export default function UFLPACompliancePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navy to-navy-light py-20 md:py-28">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-10 w-[400px] h-[400px] rounded-full bg-orange/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-green/5 blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <AnimatedSection>
              <div className="flex items-center gap-2 mb-4">
                <ShieldCheck className="w-5 h-5 text-orange" />
                <p className="text-orange font-semibold uppercase tracking-widest text-sm">
                  UFLPA Compliance
                </p>
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-white leading-[1.1] mb-6">
                Prove Your Products Are{" "}
                <span className="text-green-light">Free of Forced Labor</span>
              </h1>
              <p className="text-white/70 text-lg leading-relaxed mb-4 max-w-2xl">
                The Uyghur Forced Labor Prevention Act (UFLPA) presumes that
                goods from at-risk regions are made with forced labor. If your
                products are detained at the border, you need objective,
                scientific evidence to prove otherwise.
              </p>
              <p className="text-white/50 leading-relaxed mb-8 max-w-2xl">
                FloraTrace provides court-admissible, forensic origin
                verification that proves where your raw materials actually come
                from -- not where paperwork says they come from.
              </p>
              <div className="flex flex-wrap gap-4">
                <CTAButton>Request a Compliance Assessment</CTAButton>
                <CTAButton href="/our-science" variant="outline">
                  <span className="flex items-center gap-2">
                    Our Science <ArrowRight className="w-4 h-4" />
                  </span>
                </CTAButton>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* UFLPA Overview */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection direction="left">
              <p className="text-orange font-semibold uppercase tracking-widest text-sm mb-3">
                The Regulatory Landscape
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-navy leading-tight mb-6">
                What Is the UFLPA and Why Does It Matter?
              </h2>
              <p className="text-gray-dark leading-relaxed mb-4">
                Signed into law on December 23, 2021, the Uyghur Forced Labor
                Prevention Act (UFLPA) prohibits the importation of goods
                produced wholly or in part in regions of China identified as
                at-risk for forced labor. Under the UFLPA, all goods from these
                regions are presumed to be made with forced labor unless the
                importer can demonstrate otherwise with clear and convincing
                evidence.
              </p>
              <p className="text-gray-dark leading-relaxed mb-6">
                U.S. Customs and Border Protection (CBP) enforces the UFLPA
                through Withhold Release Orders (WROs) and has detained and
                seized hundreds of millions of dollars worth of goods since
                enforcement began in June 2022.
              </p>
              <div className="bg-orange/5 border border-orange/20 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-orange flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-navy text-sm mb-1">
                      The Burden Is on the Importer
                    </p>
                    <p className="text-gray-dark text-sm leading-relaxed">
                      Paper-based traceability alone is often insufficient to
                      prove compliance. CBP is increasingly looking for
                      independent, scientific verification of geographic origin.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="bg-white rounded-2xl border border-gray-medium/50 p-8 shadow-sm">
                <h3 className="text-xl font-bold text-navy mb-6 flex items-center gap-2">
                  <Ban className="w-5 h-5 text-orange" />
                  Key UFLPA Facts
                </h3>
                <div className="space-y-5">
                  {[
                    {
                      stat: "June 2022",
                      detail: "UFLPA enforcement began",
                    },
                    {
                      stat: "$3.94B+",
                      detail: "Value of goods detained or seized under UFLPA",
                    },
                    {
                      stat: "100%",
                      detail: "Of goods from at-risk regions presumed made with forced labor",
                    },
                    {
                      stat: "42,000+",
                      detail: "Shipments examined under UFLPA enforcement",
                    },
                  ].map((item) => (
                    <div
                      key={item.stat}
                      className="flex items-start gap-4 pb-5 border-b border-gray-100 last:border-0 last:pb-0"
                    >
                      <span className="text-2xl font-bold text-green whitespace-nowrap">
                        {item.stat}
                      </span>
                      <p className="text-gray-dark text-sm leading-relaxed pt-1">
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* At-Risk Sectors */}
      <section className="py-20 md:py-28 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="High-Risk Sectors"
            title="Industries Most Affected by UFLPA"
            subtitle="These sectors have the highest exposure to materials from at-risk regions and face the greatest enforcement risk."
          />

          <div className="grid md:grid-cols-2 gap-8">
            {riskSectors.map((sector, i) => (
              <AnimatedSection key={sector.name} delay={i * 0.1}>
                <div className="bg-white rounded-2xl border border-gray-medium/50 p-8 hover:shadow-xl transition-all duration-300 group h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center text-orange flex-shrink-0 group-hover:bg-orange group-hover:text-white transition-colors duration-300">
                      {sector.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-navy mb-2">
                        {sector.name}
                      </h3>
                      <p className="text-gray-dark text-sm leading-relaxed">
                        {sector.detail}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Audits vs Forensic Science Comparison */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <p className="text-green font-semibold uppercase tracking-widest text-sm mb-3">
                Why Forensic Science
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-navy leading-tight mb-6">
                Audits Can Be Fooled. Forensic Science Can&apos;t.
              </h2>
              <p className="text-gray-dark leading-relaxed mb-6">
                Traditional supply chain audits rely on documentation and
                supplier declarations that can be falsified or laundered
                through transshipment. FloraTrace tests the product itself
                using forensic isotopic and trace element analysis, providing
                objective evidence that is independent of supply chain
                documentation.
              </p>
              <CTAButton href="/our-science">
                <span className="flex items-center gap-2">
                  Learn About Our Science <ArrowRight className="w-4 h-4" />
                </span>
              </CTAButton>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="bg-white rounded-2xl border border-gray-medium/50 p-8 shadow-sm">
                <div className="grid grid-cols-3 gap-4 mb-6 pb-4 border-b border-gray-100">
                  <div />
                  <div className="text-center">
                    <p className="text-xs font-semibold text-red-500 uppercase tracking-wide">
                      Audits Only
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-semibold text-green uppercase tracking-wide">
                      FloraTrace
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  {comparisonRows.map((row) => (
                    <div
                      key={row.label}
                      className="grid grid-cols-3 gap-4 items-center py-2 border-b border-gray-50 last:border-0"
                    >
                      <p className="text-sm text-navy">{row.label}</p>
                      <div className="flex justify-center">
                        {row.audit ? (
                          <CheckCircle2 className="w-5 h-5 text-green" />
                        ) : (
                          <XCircle className="w-5 h-5 text-red-400" />
                        )}
                      </div>
                      <div className="flex justify-center">
                        {row.isotopic ? (
                          <CheckCircle2 className="w-5 h-5 text-green" />
                        ) : (
                          <XCircle className="w-5 h-5 text-red-400" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* How It Works for UFLPA */}
      <section className="py-20 md:py-28 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-green-light font-semibold uppercase tracking-widest text-sm mb-3">
              Our Process
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white leading-tight mb-4">
              From Risk Assessment to CBP-Ready Report
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto leading-relaxed">
              A proven 5-step process designed for importers who need to demonstrate
              Uyghur Forced Labor Prevention Act (UFLPA) compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {processSteps.map((step, i) => (
              <AnimatedSection key={step.step} delay={i * 0.1}>
                <div className="relative h-full">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center h-full backdrop-blur-sm">
                    <span className="text-3xl font-bold text-green-light/20 block mb-3">
                      {step.step}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-green/10 flex items-center justify-center mx-auto mb-4 text-green-light">
                      {step.icon}
                    </div>
                    <h3 className="text-white font-bold text-sm mb-2">
                      {step.title}
                    </h3>
                    <p className="text-white/50 text-xs leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  {i < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 z-10">
                      <ArrowRight className="w-4 h-4 text-white/20" />
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-orange/5 via-white to-green/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <FileCheck className="w-12 h-12 text-green mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-6">
              Don&apos;t Wait for a Detention Notice
            </h2>
            <p className="text-gray-dark text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Proactively verify the origin of your raw materials and build a
              UFLPA compliance program that protects your brand, your supply
              chain, and your bottom line.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <CTAButton>Request a Compliance Assessment</CTAButton>
              <CTAButton href="/platform" variant="outline">
                <span className="flex items-center gap-2">
                  Explore the Portal <ArrowRight className="w-4 h-4" />
                </span>
              </CTAButton>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
