import type { Metadata } from "next";
import {
  FlaskConical,
  MapPin,
  Microscope,
  BarChart3,
  Wheat,
  Shirt,
  Fish,
  Pill,
  Gem,
  Sun,
  Leaf,
  CircuitBoard,
  Beaker,
  Fingerprint,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Our Science",
  description:
    "Learn about FloraTrace's cutting-edge isotopic and trace element analysis for origin verification and supply chain transparency.",
};

const expertiseAreas = [
  { name: "Agricultural Products", icon: <Wheat className="w-5 h-5" /> },
  { name: "Apparel & Textiles", icon: <Shirt className="w-5 h-5" /> },
  { name: "Animal Products", icon: <Fish className="w-5 h-5" /> },
  { name: "Chemicals", icon: <Beaker className="w-5 h-5" /> },
  { name: "Pharmaceuticals", icon: <Pill className="w-5 h-5" /> },
  { name: "Plastics, PVC", icon: <CircuitBoard className="w-5 h-5" /> },
  { name: "Rocks, Minerals", icon: <Gem className="w-5 h-5" /> },
  { name: "Metals", icon: <Gem className="w-5 h-5" /> },
  { name: "Solar", icon: <Sun className="w-5 h-5" /> },
  { name: "Seafood", icon: <Fish className="w-5 h-5" /> },
];

const scienceCapabilities = [
  {
    icon: <Microscope className="w-7 h-7" />,
    title: "Isotopic & Trace Element Analysis",
    description:
      "Advanced isotopic and trace element fingerprinting to determine the geographic origin of raw materials with scientific precision.",
  },
  {
    icon: <MapPin className="w-7 h-7" />,
    title: "Isoscape Mapping",
    description:
      "Proprietary geographic mapping technology that provides more accurate origin risk assessments than traditional methods.",
  },
  {
    icon: <BarChart3 className="w-7 h-7" />,
    title: "Mixing Models",
    description:
      "Sophisticated algorithms that detect commingling of materials from multiple geographic origins in complex blends.",
  },
  {
    icon: <FlaskConical className="w-7 h-7" />,
    title: "Daubert Standard",
    description:
      "Our evidence meets the Daubert Standard for scientific testimony, ensuring results stand up in court.",
  },
];

export default function OurSciencePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy via-navy-light to-navy py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-green-light font-semibold uppercase tracking-widest text-sm mb-4">
              Greater Transparency
            </p>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight max-w-3xl mx-auto">
              The Science of Origin Verification
            </h1>
            <p className="mt-6 text-white/70 text-lg max-w-2xl mx-auto">
              Pioneering forensic isotopic and trace element analysis for
              supply chain transparency and origin verification.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-navy leading-tight mb-6">
                Organisms Naturally Record Their Environment
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-orange/10 flex items-center justify-center text-orange flex-shrink-0 mt-0.5">
                    <Fingerprint className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy mb-1">Isotopes</h3>
                    <p className="text-gray-dark leading-relaxed">
                      Natural markers of &ldquo;How&rdquo; and &ldquo;Where&rdquo; -- every material carries a unique
                      isotopic signature based on its geographic origin.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-green/10 flex items-center justify-center text-green flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy mb-1">
                      Unique Profile of Geographic Origin
                    </h3>
                    <p className="text-gray-dark leading-relaxed">
                      An &ldquo;Origin Fingerprint&rdquo; -- each material&apos;s isotopic composition
                      creates a unique identifier tied to where it was grown or
                      produced.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-green/10 via-white to-navy/5 aspect-[4/3] flex items-center justify-center border border-gray-medium/30">
                <div className="text-center p-8">
                  <Microscope className="w-20 h-20 text-green/30 mx-auto mb-4" />
                  <p className="text-navy/60 font-medium text-lg">
                    Isotopic Fingerprinting
                  </p>
                  <p className="text-sm text-gray-dark mt-1">
                    Natural markers reveal origin
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Science Capabilities */}
      <section className="py-20 md:py-28 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Technology"
            title="Cutting Edge Analysis Sets FloraTrace Apart"
            subtitle="Science-based solutions that provide defensible, court-ready evidence of geographic origin."
          />
          <div className="grid sm:grid-cols-2 gap-8">
            {scienceCapabilities.map((cap, i) => (
              <AnimatedSection key={cap.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl border border-gray-medium/50 p-8 hover:shadow-xl transition-all duration-300 h-full group">
                  <div className="w-14 h-14 rounded-xl bg-green/10 flex items-center justify-center mb-6 text-green group-hover:bg-green group-hover:text-white transition-colors duration-300">
                    {cap.icon}
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">
                    {cap.title}
                  </h3>
                  <p className="text-gray-dark leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Expertise"
            title="FloraTrace Expertise"
            subtitle="Our origin verification science applies across a wide range of industries and materials."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {expertiseAreas.map((area, i) => (
              <AnimatedSection key={area.name} delay={i * 0.05}>
                <div className="bg-white rounded-xl border border-gray-medium/50 p-5 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group h-full">
                  <div className="w-10 h-10 rounded-lg bg-green/10 flex items-center justify-center mx-auto mb-3 text-green group-hover:bg-green group-hover:text-white transition-colors duration-300">
                    {area.icon}
                  </div>
                  <p className="text-sm font-semibold text-navy">{area.name}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Management Banner */}
      <section className="py-20 md:py-28 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white leading-tight mb-4">
              FloraTrace for Risk Management, Provenance, and Compliance
            </h2>
            <p className="text-green-light text-xl font-semibold mb-8">
              = Transparency
            </p>
            <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
              Our science-based approach provides the transparency your supply
              chain needs for compliance, risk mitigation, and brand protection.
            </p>
            <CTAButton>Request a Call</CTAButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
