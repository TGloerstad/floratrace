import type { Metadata } from "next";
import { Building2, Users, FlaskConical, ShieldCheck } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "About",
  description:
    "FloraTrace is a US company founded in 2020 by a team of scientists, engineers, and industry specialists for supply chain transparency.",
};

const highlights = [
  {
    icon: <FlaskConical className="w-6 h-6" />,
    title: "Science-Based",
    description: "Cutting-edge origin assignment technologies developed by leading scientists",
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "Domestic Labs",
    description: "US-based laboratories with chain-of-custody protocols and secure storage",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Expert Team",
    description: "Founded by scientists, engineers, and industry specialists",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Risk Management",
    description: "Specializing in trade compliance, legal and reputational risk mitigation",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy via-navy-light to-navy py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-green-light font-semibold uppercase tracking-widest text-sm mb-4">
              About Us
            </p>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight max-w-3xl mx-auto">
              For Changing and Emerging Risks in Global Trade
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-dark leading-relaxed mb-6">
                FloraTrace is a US company founded in 2020 by a team of
                scientists, engineers, and industry specialists to generate new
                levels of transparency for clients&apos; disclosure and accountability
                in supply chains.
              </p>
              <p className="text-lg text-gray-dark leading-relaxed mb-6">
                With its domestic laboratories, chain-of-custody protocols and
                secure storage, FloraTrace delivers for its clients, fast
                analysis turnaround with the most cost-effective pricing for
                cutting-edge origin assignment technologies.
              </p>
              <p className="text-lg text-gray-dark leading-relaxed">
                FloraTrace specializes in risk transfer and risk management in
                trade compliance, legal/reputational risk mitigation, and
                Sustainable Sourcing metrics.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 md:py-28 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-14 h-14 rounded-2xl bg-green/10 flex items-center justify-center mx-auto mb-5 text-green">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-navy text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-dark text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-6">
              Want to Learn More?
            </h2>
            <p className="text-gray-dark text-lg mb-10 max-w-2xl mx-auto">
              Schedule a call with our team to discuss how FloraTrace can help
              secure your supply chain.
            </p>
            <CTAButton>Request a Call</CTAButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
