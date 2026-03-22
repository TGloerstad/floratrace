"use client";

import Image from "next/image";
import {
  BarChart3,
  Map,
  Brain,
  FileDown,
  Users,
  Key,
  CreditCard,
  Settings,
  ArrowRight,
  ShieldCheck,
  Zap,
  Globe,
  Filter,
  Search,
  Monitor,
} from "lucide-react";
import CTAButton from "@/components/CTAButton";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

const portalFeatures = [
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Real-Time KPIs",
    description:
      "Track total specimens, reports generated, unique suppliers, and failed origin claims from a single dashboard.",
  },
  {
    icon: <Map className="w-6 h-6" />,
    title: "Origin Maps & Charts",
    description:
      "Interactive origin distribution maps and charts that visualize where your materials are really coming from.",
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "AI Insight Engine",
    description:
      "Machine learning-powered risk assessment that flags anomalies and predicts origin verification outcomes.",
  },
  {
    icon: <FileDown className="w-6 h-6" />,
    title: "Export & Reporting",
    description:
      "One-click CSV export, compliance-ready reports for CBP, and court-admissible documentation on demand.",
  },
  {
    icon: <Filter className="w-6 h-6" />,
    title: "Advanced Filtering",
    description:
      "Drill down by verification status, processing status, country, supplier, or client PID to find exactly what you need.",
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: "Specimen Tracking",
    description:
      "Full lifecycle tracking of each specimen from submission through lab analysis to verified origin report.",
  },
];

const sidebarItems = [
  { icon: <BarChart3 className="w-4 h-4" />, label: "Dashboard" },
  { icon: <Brain className="w-4 h-4" />, label: "AI Insight" },
  { icon: <Users className="w-4 h-4" />, label: "Members" },
  { icon: <Key className="w-4 h-4" />, label: "API Keys" },
  { icon: <CreditCard className="w-4 h-4" />, label: "Billing" },
  { icon: <Settings className="w-4 h-4" />, label: "Settings" },
];

const platformBenefits = [
  {
    icon: <ShieldCheck className="w-7 h-7" />,
    title: "Compliance Ready",
    description:
      "Reports are formatted for CBP submission and meet Daubert Standard for court admissibility.",
  },
  {
    icon: <Zap className="w-7 h-7" />,
    title: "Fast Turnaround",
    description:
      "From sample submission to verified origin report in approximately 14 days, tracked in real time.",
  },
  {
    icon: <Globe className="w-7 h-7" />,
    title: "Multi-Region Coverage",
    description:
      "Verified across 14+ countries with origin fingerprints built from authenticated reference databases.",
  },
];

export default function PlatformPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navy to-navy-light py-20 md:py-28">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-green/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-orange/5 blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <AnimatedSection>
                <div className="flex items-center gap-2 mb-4">
                  <Monitor className="w-5 h-5 text-green-light" />
                  <p className="text-green-light font-semibold uppercase tracking-widest text-sm">
                    Client Portal
                  </p>
                </div>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-white leading-[1.1] mb-6">
                  Your Supply Chain,{" "}
                  <span className="text-green-light">Verified in Real Time</span>
                </h1>
                <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-lg">
                  The FloraTrace Portal is your command center for origin
                  verification -- track specimens, view origin predictions,
                  manage suppliers, and generate compliance reports from a
                  single secure dashboard.
                </p>
                <CTAButton>Schedule a Demo</CTAButton>
              </AnimatedSection>
            </div>

            <AnimatedSection direction="right">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                  <Image
                    src="/images/portal-dashboard.png"
                    alt="FloraTrace Portal — Dashboard with KPIs, origin charts, and specimen table"
                    width={800}
                    height={500}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Platform Benefits */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {platformBenefits.map((benefit, i) => (
              <AnimatedSection key={benefit.title} delay={i * 0.1}>
                <div className="text-center p-8">
                  <div className="w-16 h-16 rounded-2xl bg-green/10 flex items-center justify-center mx-auto mb-6 text-green">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-dark leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-20 md:py-28 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Portal Features"
            title="Everything You Need in One Place"
            subtitle="A complete verification management platform built for compliance teams, procurement directors, and supply chain leaders."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portalFeatures.map((feature, i) => (
              <AnimatedSection key={feature.title} delay={i * 0.05}>
                <div className="bg-white rounded-2xl border border-gray-medium/50 p-8 hover:shadow-xl transition-all duration-300 group h-full">
                  <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center mb-5 text-navy group-hover:bg-green group-hover:text-white transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-dark text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Deep Dive */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-medium/30">
                  <Image
                    src="/images/portal-analytics.png"
                    alt="FloraTrace Origin Verification Analytics Dashboard"
                    width={800}
                    height={500}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <p className="text-green font-semibold uppercase tracking-widest text-sm mb-3">
                Analytics & Reporting
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-navy leading-tight mb-6">
                Actionable Intelligence for Your Supply Chain
              </h2>
              <p className="text-gray-dark leading-relaxed mb-6">
                Go beyond simple pass/fail with deep analytics that reveal
                patterns in your supply chain. Monthly specimen analysis,
                origin distribution breakdowns, and trend tracking help you
                anticipate risks before they become problems.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-light">
                  <div className="text-3xl font-bold text-green">98.2%</div>
                  <div>
                    <p className="font-semibold text-navy text-sm">Verified Origins</p>
                    <p className="text-gray-dark text-xs">Accuracy rate across all specimens analyzed</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-light">
                  <div className="text-3xl font-bold text-orange">1,247</div>
                  <div>
                    <p className="font-semibold text-navy text-sm">Specimens Tracked</p>
                    <p className="text-gray-dark text-xs">With full provenance data across 12 active regions</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Portal Navigation Sidebar */}
      <section className="py-20 md:py-28 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <p className="text-green-light font-semibold uppercase tracking-widest text-sm mb-3">
                Built for Teams
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white leading-tight mb-6">
                Secure, Scalable, Team-Ready
              </h2>
              <p className="text-white/70 leading-relaxed mb-8">
                Manage team members, API access, and billing from within the
                portal. FloraTrace scales with your program, whether you&apos;re
                testing 10 specimens or 10,000.
              </p>
              <div className="space-y-3">
                {sidebarItems.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/5 border border-white/10"
                  >
                    <div className="text-green-light">{item.icon}</div>
                    <span className="text-white/80 text-sm font-medium">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white mb-6">
                  API Integration
                </h3>
                <p className="text-white/60 leading-relaxed mb-6">
                  Connect FloraTrace directly to your ERP, supply chain
                  management, or procurement systems via our RESTful API.
                  Automate sample submissions, retrieve verification results,
                  and integrate origin data into your existing workflows.
                </p>
                <div className="bg-navy-light rounded-lg p-4 font-mono text-sm">
                  <p className="text-green-light">
                    GET /api/v1/specimens
                  </p>
                  <p className="text-white/40 mt-1">
                    Authorization: Bearer ft_key_...
                  </p>
                  <p className="text-orange-light mt-3">
                    {`{`} "total": 130, "verified": 100 {`}`}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-green/5 via-white to-orange/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-6">
              See the Portal in Action
            </h2>
            <p className="text-gray-dark text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Schedule a personalized demo and see how the FloraTrace Portal
              can streamline your origin verification and compliance workflow.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <CTAButton>Schedule a Demo</CTAButton>
              <CTAButton href="/contact" variant="outline">
                <span className="flex items-center gap-2">
                  Contact Sales <ArrowRight className="w-4 h-4" />
                </span>
              </CTAButton>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
