"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FlaskConical,
  ShieldCheck,
  Scale,
  Globe,
  Coffee,
  Leaf,
  Wheat,
  Droplets,
  Building2,
  Calendar,
  Palette,
  ArrowRight,
  ClipboardList,
  Microscope,
  Fingerprint,
  FileCheck,
  FileX2,
  ScanSearch,
  Monitor,
  Quote,
  Check,
} from "lucide-react";
import CTAButton from "@/components/CTAButton";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

const valueProps = [
  {
    icon: <Globe className="w-7 h-7" />,
    title: "Global Origin Testing",
    description:
      "Retailers and brands demand transparency from suppliers. Our isotopic and trace element testing capabilities span the globe.",
  },
  {
    icon: <ShieldCheck className="w-7 h-7" />,
    title: "Preferred Vendor for Suppliers",
    description:
      "Expedited testing, agile processes designed to meet your business timelines and needs.",
  },
  {
    icon: <Scale className="w-7 h-7" />,
    title: "Easy to Scale",
    description:
      "Proprietary algorithms, domestic and global lab network enable rapid scaling to any volume.",
  },
];

const industries = [
  {
    icon: <Palette className="w-8 h-8" />,
    name: "Natural Colors",
    description: "Paprika & oleoresin origin verification for UFLPA compliance",
    featured: true,
  },
  {
    icon: <Coffee className="w-8 h-8" />,
    name: "Coffee",
    description: "Protecting authenticity and region-of-origin claims",
  },
  {
    icon: <Wheat className="w-8 h-8" />,
    name: "Cotton",
    description: "Detecting mislabeling and forced labor risks",
  },
  {
    icon: <Leaf className="w-8 h-8" />,
    name: "Food",
    description: "Identifying commingling of materials from different origins",
  },
  {
    icon: <Droplets className="w-8 h-8" />,
    name: "Hemp",
    description: "Verifying hemp oil and CBD products for authenticity",
  },
];

const processSteps = [
  {
    icon: <ClipboardList className="w-7 h-7" />,
    step: "01",
    title: "Sample Collection",
    description: "Client or third-party collects samples from products, raw materials, or supply chain checkpoints.",
  },
  {
    icon: <Microscope className="w-7 h-7" />,
    step: "02",
    title: "Chemical Analysis",
    description: "Elemental and isotopic analysis in our accredited laboratories.",
  },
  {
    icon: <Fingerprint className="w-7 h-7" />,
    step: "03",
    title: "Origin Fingerprint",
    description: "Geographic Origin determined using proprietary ML-driven algorithms and authenticated reference databases.",
  },
  {
    icon: <FileCheck className="w-7 h-7" />,
    step: "04",
    title: "Compliance Results",
    description: "Court-ready verified report with confidence scores, delivered via our secure client portal.",
  },
];

const stats = [
  { value: "2020", label: "Founded", icon: <Calendar className="w-6 h-6" /> },
  { value: "US-Based", label: "Domestic Labs", icon: <Building2 className="w-6 h-6" /> },
  { value: "Court-Ready", label: "Daubert Standard", icon: <Scale className="w-6 h-6" /> },
  { value: "Global", label: "Lab Network", icon: <Globe className="w-6 h-6" /> },
];

const whyForensic = [
  {
    icon: <FileX2 className="w-6 h-6" />,
    problem: "Paper trails can be falsified",
    solution: "We test the product itself -- isotopic and trace element signatures cannot be forged or altered.",
  },
  {
    icon: <ScanSearch className="w-6 h-6" />,
    problem: "Labels only track packaging",
    solution: "Our analysis verifies the actual raw material, not the label or documentation.",
  },
  {
    icon: <Scale className="w-6 h-6" />,
    problem: "Audits can't detect blending",
    solution: "Our mixing models identify commingled materials from multiple geographic origins.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-gray-light to-white">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-green/5" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-navy/5" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-navy leading-[1.1]"
              >
                Know the true origin of your supply chain{" "}
                <span className="text-green">before regulators ask</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mt-6 text-lg text-gray-dark leading-relaxed max-w-xl"
              >
                Our services include geographic origin verification for
                companies, both large and small, seeking to comply regulations,
                including UFLPA, anti-dumping, countervailing, free trade
                agreement requirements, deforestation, the Lanham, and Lacey
                Acts.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="mt-10 flex flex-wrap gap-4"
              >
                <CTAButton>Request a Call</CTAButton>
                <CTAButton href="/uflpa-compliance" variant="outline">
                  UFLPA Compliance
                </CTAButton>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden aspect-square bg-gradient-to-br from-orange/20 to-orange/5 flex items-center justify-center">
                  <Palette className="w-16 h-16 text-orange/60" />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-green/20 to-green/5 flex items-center justify-center">
                  <Coffee className="w-16 h-16 text-green/60" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-navy/15 to-navy/5 flex items-center justify-center">
                  <Wheat className="w-16 h-16 text-navy/40" />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-square bg-gradient-to-br from-green/15 to-orange/10 flex items-center justify-center">
                  <Leaf className="w-16 h-16 text-green/50" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex gap-1.5">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-green/30" />
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How It Works"
            title="From Sample to Verified Origin"
            subtitle="A compliance platform with a clear, science-based process delivering results in approximately 14 days."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <AnimatedSection key={step.step} delay={i * 0.1}>
                <div className="relative h-full">
                  <div className="bg-white rounded-2xl border border-gray-medium/50 p-8 hover:shadow-xl transition-all duration-300 h-full group">
                    <span className="text-5xl font-bold text-green/10 absolute top-4 right-6 group-hover:text-green/20 transition-colors">
                      {step.step}
                    </span>
                    <div className="w-14 h-14 rounded-xl bg-green/10 flex items-center justify-center mb-6 text-green group-hover:bg-green group-hover:text-white transition-colors duration-300">
                      {step.icon}
                    </div>
                    <h3 className="text-lg font-bold text-navy mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-dark text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  {i < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 z-10">
                      <ArrowRight className="w-5 h-5 text-green/30" />
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Forensic Science > Paper Trails */}
      <section className="py-20 md:py-28 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <p className="text-green font-semibold uppercase tracking-widest text-sm mb-3">
                Why Forensic Science
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-navy leading-tight mb-4">
                Paper Trails Can Be Falsified. Products Can&apos;t Lie.
              </h2>
              <p className="text-gray-dark leading-relaxed mb-8">
                Traditional traceability relies on documentation, audits, and
                supplier declarations -- all of which can be manipulated.
                FloraTrace tests the product itself using forensic chemical
                analysis, providing objective, court-admissible
                evidence of geographic origin.
              </p>
              <div className="space-y-6">
                {whyForensic.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-orange/10 flex items-center justify-center text-orange flex-shrink-0 mt-0.5">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-navy font-semibold text-sm mb-0.5">
                        {item.problem}
                      </p>
                      <p className="text-gray-dark text-sm leading-relaxed">
                        {item.solution}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="bg-white rounded-2xl border border-gray-medium/50 p-6 md:p-8">
                <div className="grid w-full min-w-0 grid-cols-[max-content_minmax(0,1fr)_minmax(0,1fr)] gap-x-2 gap-y-3 items-stretch sm:gap-x-3 sm:gap-y-4">
                  <div aria-hidden className="min-h-[1px]" />
                  <div className="flex h-full min-w-0 flex-col items-center justify-center rounded-lg bg-red-50 px-2 py-2 text-center">
                    <FileX2 className="mb-1 h-6 w-6 shrink-0 text-red-400" />
                    <p className="text-[10px] font-semibold uppercase leading-tight tracking-wide text-red-600 sm:text-xs">
                      Paper Trails
                    </p>
                    <p className="mt-0.5 text-[10px] leading-tight text-red-400 sm:text-[11px]">
                      Vulnerable to fraud
                    </p>
                  </div>
                  <div className="flex h-full min-w-0 flex-col items-center justify-center rounded-lg bg-green/5 px-2 py-2 text-center">
                    <FlaskConical className="mb-1 h-6 w-6 shrink-0 text-green" />
                    <p className="text-[10px] font-semibold uppercase leading-tight tracking-wide text-green sm:text-xs">
                      Forensic Science
                    </p>
                    <p className="mt-0.5 text-[10px] leading-tight text-green/70 sm:text-xs">
                      Tests the product itself
                    </p>
                  </div>

                  {[
                    { label: "Tamper-resistant", paperNegative: true },
                    { label: "Court-admissible", paperNegative: false },
                    { label: "Detects blending", paperNegative: true },
                    { label: "Independent of supplier claims", paperNegative: true },
                    { label: "Verifies raw material origin", paperNegative: true },
                  ].map((row, i, arr) => {
                    const rowDivider =
                      i < arr.length - 1 ? "border-b border-gray-100" : "";
                    return (
                      <div key={row.label} className="contents">
                        <span
                          className={`text-xs text-navy whitespace-nowrap pb-3 pr-1 self-center sm:text-sm ${rowDivider}`}
                        >
                          {row.label}
                        </span>
                        <div
                          className={`flex justify-center pb-3 ${rowDivider}`}
                        >
                          {row.paperNegative ? (
                            <span
                              className="text-red-400 text-lg leading-none"
                              aria-hidden
                            >
                              &#x2717;
                            </span>
                          ) : (
                            <Check
                              className="w-5 h-5 text-red-500 shrink-0"
                              strokeWidth={2.5}
                              aria-hidden
                            />
                          )}
                        </div>
                        <div
                          className={`flex justify-center pb-3 ${rowDivider}`}
                        >
                          <Check
                            className="w-5 h-5 text-green shrink-0"
                            strokeWidth={2.5}
                            aria-hidden
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why FloraTrace Wins */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why FloraTrace"
            title="Why FloraTrace Wins With Retailers Today"
            subtitle="Trusted by leading brands and retailers for transparent, science-based supply chain verification."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {valueProps.map((prop, i) => (
              <AnimatedSection key={prop.title} delay={i * 0.1}>
                <div className="relative bg-white rounded-2xl border border-gray-medium/50 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group h-full">
                  <div className="w-14 h-14 rounded-xl bg-green/10 flex items-center justify-center mb-6 text-green group-hover:bg-green group-hover:text-white transition-colors duration-300">
                    {prop.icon}
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">
                    {prop.title}
                  </h3>
                  <p className="text-gray-dark leading-relaxed">
                    {prop.description}
                  </p>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green to-green-light rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Paprika & Natural Colors Feature */}
      <section className="py-20 md:py-28 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-orange/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-green/10 blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div className="flex items-center gap-2 mb-4">
                <Palette className="w-5 h-5 text-orange" />
                <p className="text-orange font-semibold uppercase tracking-wider text-sm">
                  Featured Focus
                </p>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white leading-tight mb-6">
                How Much Illegal Paprika Is in Your Supply Chain?
              </h2>
              <p className="text-white/70 leading-relaxed mb-6">
                Our retail survey tested paprika products across 9 U.S.
                grocery stores. The results are striking: 100% were from China
                and 61% were from a region subject to the Uyghur Forced Labor
                Prevention Act (UFLPA).
              </p>
              <p className="text-white/70 leading-relaxed mb-8">
                As CPG companies race to replace artificial colors with natural
                ones,                 paprika oleoresin demand is surging. FloraTrace&apos;s forensic
                isotopic and trace element analysis can verify the geographic
                origin of peppers and paprika at the molecular level.
              </p>
              <CTAButton href="/industries">
                <span className="flex items-center gap-2">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </CTAButton>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10">
                  <p className="text-4xl font-bold text-orange mb-1">100%</p>
                  <p className="text-white/60 text-xs leading-tight">predicted Chinese origin</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10">
                  <p className="text-4xl font-bold text-green-light mb-1">61%</p>
                  <p className="text-white/60 text-xs leading-tight">flagged as at-risk origin</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10">
                  <p className="text-4xl font-bold text-white mb-1">70%</p>
                  <p className="text-white/60 text-xs leading-tight">of world&apos;s paprika from at-risk regions</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10">
                  <p className="text-4xl font-bold text-white mb-1">~14</p>
                  <p className="text-white/60 text-xs leading-tight">day turnaround for origin verification</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 md:py-28 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Industries"
            title="Industries We Serve"
            subtitle="Our origin verification technologies serve multiple industries with targeted solutions."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {industries.map((industry, i) => (
              <AnimatedSection key={industry.name} delay={i * 0.1}>
                <div className={`bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-default h-full ${
                  industry.featured ? "ring-2 ring-orange/30" : ""
                }`}>
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-110 ${
                    industry.featured
                      ? "bg-orange/10 text-orange group-hover:bg-orange group-hover:text-white"
                      : "bg-green/10 text-green group-hover:bg-green group-hover:text-white"
                  }`}>
                    {industry.icon}
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2">{industry.name}</h3>
                  <p className="text-gray-dark text-sm leading-relaxed">{industry.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.4}>
            <div className="mt-10 text-center">
              <CTAButton href="/industries" variant="outline">
                <span className="flex items-center gap-2">
                  Explore All Industries <ArrowRight className="w-4 h-4" />
                </span>
              </CTAButton>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Client Portal Preview */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="flex items-center gap-2 mb-4">
                <Monitor className="w-5 h-5 text-green" />
                <p className="text-green font-semibold uppercase tracking-widest text-sm">
                  Technology Platform
                </p>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-navy leading-tight mb-6">
                Your Supply Chain, Verified in Real Time
              </h2>
              <p className="text-gray-dark leading-relaxed mb-6">
                The FloraTrace Portal gives you a complete view of your
                verification program -- from specimen tracking and origin
                predictions to supplier risk and compliance reporting.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Dashboard with KPIs: specimens, reports, suppliers, alerts",
                  "Interactive origin maps and distribution charts",
                  "AI-powered insights and risk flagging",
                  "Exportable reports for CBP and compliance teams",
                ].map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-green" />
                    </div>
                    <p className="text-gray-dark text-sm">{feature}</p>
                  </div>
                ))}
              </div>
              <CTAButton href="/platform">
                <span className="flex items-center gap-2">
                  Explore the Platform <ArrowRight className="w-4 h-4" />
                </span>
              </CTAButton>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-medium/30">
                  <Image
                    src="/images/portal-dashboard.png"
                    alt="FloraTrace Portal Dashboard"
                    width={800}
                    height={500}
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-48 rounded-xl overflow-hidden shadow-xl border border-gray-medium/30 hidden md:block">
                  <Image
                    src="/images/portal-analytics.png"
                    alt="FloraTrace Analytics Dashboard"
                    width={300}
                    height={200}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials / Trust */}
      <section className="py-20 md:py-28 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Trusted By Industry"
            title="What Our Clients Say"
          />
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection delay={0}>
              <div className="bg-white rounded-2xl p-8 md:p-10 border border-gray-medium/50 h-full">
                <Quote className="w-8 h-8 text-green/20 mb-4" />
                <p className="text-gray-dark leading-relaxed italic mb-6">
                  &ldquo;FloraTrace&apos;s forensic origin verification has become an
                  essential part of our supply chain due diligence. Their
                  science-based approach gives us the confidence to stand behind
                  our sourcing claims.&rdquo;
                </p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-bold text-navy">Supply Chain Director</p>
                  <p className="text-gray-dark text-sm">Major U.S. Retailer</p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="bg-white rounded-2xl p-8 md:p-10 border border-gray-medium/50 h-full">
                <Quote className="w-8 h-8 text-green/20 mb-4" />
                <p className="text-gray-dark leading-relaxed italic mb-6">
                  &ldquo;When we needed to verify the geographic origin of our
                  raw materials for UFLPA compliance, FloraTrace delivered
                  fast, reliable results that our compliance team could present
                  with confidence.&rdquo;
                </p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-bold text-navy">VP of Compliance</p>
                  <p className="text-gray-dark text-sm">Consumer Packaged Goods Company</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Trust Metrics */}
      <section className="py-16 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-4 text-green-light">
                    {stat.icon}
                  </div>
                  <p className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</p>
                  <p className="text-white/60 text-sm">{stat.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-green/5 via-white to-orange/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-6">
              Ready to Verify Your Supply Chain?
            </h2>
            <p className="text-gray-dark text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Get in touch with our team to learn how FloraTrace can help you
              comply with trade regulations and protect your brand.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <CTAButton>Request a Call</CTAButton>
              <CTAButton href="/industries" variant="outline">
                Explore Industries
              </CTAButton>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
