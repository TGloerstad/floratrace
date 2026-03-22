"use client";

import { motion } from "framer-motion";
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
  MapPin,
  Award,
  Calendar,
  Palette,
  ArrowRight,
} from "lucide-react";
import CTAButton from "@/components/CTAButton";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

const valueProps = [
  {
    icon: <Globe className="w-7 h-7" />,
    title: "Global Isotopic Testing",
    description:
      "Retailers and brands demand transparency from suppliers. Our testing capabilities span the globe.",
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

const analysisPoints = [
  {
    icon: <MapPin className="w-5 h-5" />,
    text: "Origin mapping - Isoscape Technology provides more accurate risk assessment",
  },
  {
    icon: <FlaskConical className="w-5 h-5" />,
    text: "Mixing models for complex blends",
  },
  {
    icon: <Award className="w-5 h-5" />,
    text: "FloraTrace meets Daubert Standard and evidence stands up in court",
  },
];

const stats = [
  { value: "2020", label: "Founded", icon: <Calendar className="w-6 h-6" /> },
  { value: "US-Based", label: "Domestic Labs", icon: <Building2 className="w-6 h-6" /> },
  { value: "Court-Ready", label: "Daubert Standard", icon: <Scale className="w-6 h-6" /> },
  { value: "Global", label: "Lab Network", icon: <Globe className="w-6 h-6" /> },
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
                We provide origin verification for{" "}
                <span className="text-green">sustainable sourcing</span> to
                protect brand reputation
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mt-6 text-lg text-gray-dark leading-relaxed max-w-xl"
              >
                Our services include geographic origin verification for
                companies, both large and small, seeking to comply with UFLPA,
                anti-dumping, countervailing, free trade agreement requirements,
                deforestation and The Lacey Act.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="mt-10"
              >
                <CTAButton>Request a Call</CTAButton>
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

        {/* Decorative dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex gap-1.5">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-green/30"
            />
          ))}
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
                What&apos;s Really in Your Paprika?
              </h2>
              <p className="text-white/70 leading-relaxed mb-6">
                Our retail survey tested 28 paprika products across 9 U.S.
                grocery stores. The results are striking: 100% were
                predicted Chinese origin -- not a single one from the U.S. --
                and 61% were flagged as originating from Xinjiang, a region
                subject to the UFLPA.
              </p>
              <p className="text-white/70 leading-relaxed mb-8">
                As CPG companies race to replace artificial colors with natural
                ones, paprika oleoresin demand is surging. FloraTrace&apos;s forensic
                isotopic testing can verify the geographic origin of peppers and
                paprika at the molecular level.
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
                  <p className="text-white/60 text-xs leading-tight">
                    predicted Chinese origin
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10">
                  <p className="text-4xl font-bold text-green-light mb-1">61%</p>
                  <p className="text-white/60 text-xs leading-tight">
                    flagged Xinjiang (XUAR)
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10">
                  <p className="text-4xl font-bold text-white mb-1">70%</p>
                  <p className="text-white/60 text-xs leading-tight">
                    of world&apos;s paprika from XUAR
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10">
                  <p className="text-4xl font-bold text-white mb-1">~14</p>
                  <p className="text-white/60 text-xs leading-tight">
                    day turnaround for origin verification
                  </p>
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
                  <h3 className="text-lg font-bold text-navy mb-2">
                    {industry.name}
                  </h3>
                  <p className="text-gray-dark text-sm leading-relaxed">
                    {industry.description}
                  </p>
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

      {/* Cutting Edge Analysis */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <p className="text-green font-semibold uppercase tracking-widest text-sm mb-3">
                Our Technology
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-navy leading-tight mb-8">
                Cutting Edge Analysis Sets FloraTrace Apart
              </h2>
              <div className="space-y-6">
                {analysisPoints.map((point, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-orange/10 flex items-center justify-center text-orange flex-shrink-0 mt-0.5">
                      {point.icon}
                    </div>
                    <p className="text-gray-dark leading-relaxed">
                      {point.text}
                    </p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-green/10 via-white to-navy/5 aspect-[4/3] flex items-center justify-center border border-gray-medium/30">
                  <div className="text-center p-8">
                    <Globe className="w-24 h-24 text-green/30 mx-auto mb-4" />
                    <p className="text-navy/50 font-medium">
                      Global Origin Mapping
                    </p>
                    <p className="text-sm text-gray-dark mt-1">
                      Isoscape Technology
                    </p>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl bg-orange/10 -z-10" />
                <div className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl bg-green/10 -z-10" />
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
                  <p className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </p>
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
