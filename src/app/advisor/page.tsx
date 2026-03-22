import type { Metadata } from "next";
import {
  Users,
  Award,
  Briefcase,
  ShieldCheck,
  Scale,
  Clock,
  AlertTriangle,
  Globe,
  Brain,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Advisor",
  description:
    "FloraTrace Smart Trade Strategy -- trade compliance demands transparency. Our advisory services help navigate tariffs, trade laws, and supply chain risk.",
};

const whyNowReasons = [
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Timing",
    description:
      "Tariffs and new global trade laws are making compliance more complex while supply chains are less transparent and risky.",
  },
  {
    icon: <Scale className="w-6 h-6" />,
    title: "Tariffs and New Global Trade Laws",
    description:
      "Environment, CSDDD, Deforestation, Human Rights -- all with focus on country of origin and transparency of supply chains.",
  },
  {
    icon: <AlertTriangle className="w-6 h-6" />,
    title: "80% Visibility Gap",
    description:
      "80% of companies only have Tier 1-2 visibility into their supply chains, leaving significant blind spots.",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Country of Origin Suspicion",
    description:
      "Severe financial impact for importers when country of origin is questioned or flagged.",
  },
];

const solutionPillars = [
  {
    icon: <ShieldCheck className="w-7 h-7" />,
    title: "Country of Origin - Supply Chain Transparency",
    description:
      "Science as a Service. Isotopic Testing and Origin Assignment Technologies with AI/ML velocity.",
  },
  {
    icon: <Award className="w-7 h-7" />,
    title: "Reputational Protection",
    description:
      "A comprehensive strategy safeguarding brand reputation through verified supply chain transparency.",
  },
  {
    icon: <Brain className="w-7 h-7" />,
    title: "Peace of Mind",
    description:
      "A layered approach providing confidence in import compliance and supply chain integrity.",
  },
];

const advisors = [
  {
    icon: <Users className="w-7 h-7" />,
    title: "Industry Leaders",
    description:
      "Our advisory board brings decades of experience in international trade, public policy, and supply chain management.",
  },
  {
    icon: <Briefcase className="w-7 h-7" />,
    title: "Deep Expertise",
    description:
      "Advisors from Fortune 500 companies, government agencies, and leading institutions guide our strategic direction.",
  },
  {
    icon: <Globe className="w-7 h-7" />,
    title: "Cross-Industry Perspective",
    description:
      "Spanning retail, CPG, trade compliance, human rights, and technology to address complex supply chain challenges.",
  },
];

export default function AdvisorPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy via-navy-light to-navy py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-green-light font-semibold uppercase tracking-widest text-sm mb-4">
              Smart Trade Strategy
            </p>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight max-w-4xl mx-auto">
              Trade Compliance Demands Transparency
            </h1>
            <p className="mt-6 text-white/70 text-lg max-w-2xl mx-auto">
              Tariffs and new global trade laws are making compliance more
              complex while supply chains are less transparent and risky.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Now */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Challenge"
            title="Why Now?"
            subtitle="The convergence of new regulations, geopolitical shifts, and supply chain complexity demands action."
          />
          <div className="grid sm:grid-cols-2 gap-8">
            {whyNowReasons.map((reason, i) => (
              <AnimatedSection key={reason.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl border border-gray-medium/50 p-8 hover:shadow-xl transition-all duration-300 h-full group">
                  <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center mb-5 text-orange group-hover:bg-orange group-hover:text-white transition-colors duration-300">
                    {reason.icon}
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-gray-dark leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Pillars */}
      <section className="py-20 md:py-28 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Solution"
            title="Smart Trade Strategy"
            subtitle="A comprehensive approach combining science, technology, and strategic advisory."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {solutionPillars.map((pillar, i) => (
              <AnimatedSection key={pillar.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl border border-gray-medium/50 p-8 hover:shadow-xl transition-all duration-300 h-full text-center group">
                  <div className="w-14 h-14 rounded-xl bg-green/10 flex items-center justify-center mx-auto mb-6 text-green group-hover:bg-green group-hover:text-white transition-colors duration-300">
                    {pillar.icon}
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-dark leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* WorldScape */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <p className="text-green font-semibold uppercase tracking-widest text-sm mb-3">
                Technology
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-navy leading-tight mb-6">
                WorldScape
              </h2>
              <p className="text-gray-dark leading-relaxed mb-6">
                FloraTrace developed the world&apos;s first AI-driven, multi-crop
                isotope provenance engine combining advanced machine learning
                with global geospatial intelligence to authenticate agricultural
                product origins at scale.
              </p>
              <p className="text-gray-dark leading-relaxed mb-8">
                Our proprietary framework integrates 7 meteorological data
                sources, precipitation isoscapes, WorldClim climate datasets,
                satellite phenology, GNIP metadata, civil aviation networks, and
                empirical calibration samples into a unified prediction model --
                enabling rapid deployment to new commodities worldwide.
              </p>
              <CTAButton>Learn More</CTAButton>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-green/10 via-white to-navy/5 aspect-square flex items-center justify-center border border-gray-medium/30">
                  <div className="text-center p-8">
                    <Globe className="w-24 h-24 text-green/30 mx-auto mb-4" />
                    <p className="text-navy/60 font-medium text-lg">
                      AI-Driven Provenance
                    </p>
                    <p className="text-sm text-gray-dark mt-1">
                      Multi-crop isotope engine
                    </p>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl bg-green/10 -z-10" />
                <div className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl bg-orange/10 -z-10" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-20 md:py-28 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Advisory Board"
            title="Our Advisors"
            subtitle="Guided by leaders in trade, policy, and supply chain innovation."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {advisors.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl border border-gray-medium/50 p-8 hover:shadow-xl transition-all duration-300 h-full text-center group">
                  <div className="w-14 h-14 rounded-xl bg-green/10 flex items-center justify-center mx-auto mb-6 text-green group-hover:bg-green group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-dark leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Ready to Build Your Trade Strategy?
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
              Connect with our team to discuss how FloraTrace can help you
              navigate the evolving trade compliance landscape.
            </p>
            <CTAButton>Request a Call</CTAButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
