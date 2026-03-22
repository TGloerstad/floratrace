"use client";

import Image from "next/image";
import {
  Linkedin,
  ArrowRight,
  GraduationCap,
  Briefcase,
  ExternalLink,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import CTAButton from "@/components/CTAButton";

const leadership = [
  {
    name: "Terje Gloerstad",
    title: "Chief Executive Officer & Founder",
    image: "/images/team/terje-gloerstad.png",
    linkedin: "https://www.linkedin.com/in/terjeg/",
    bio: "Terje founded FloraTrace in 2020 to bring forensic science and data analytics to supply chain transparency. With an Executive MBA from London Business School and deep international business experience, he leads the company's strategic vision and growth.",
    credentials: ["Executive MBA, London Business School"],
  },
  {
    name: "Kimberley Gunther",
    title: "Co-Founder & Chief Strategist",
    image: "/images/team/kimberley-gunther.png",
    linkedin: "https://www.linkedin.com/in/kimberleygunther/",
    bio: "Kim co-founded FloraTrace and leads the company's strategic partnerships and customer solutions. She architected the KYG Trade integration that links origin verification to digital supply chain traceability, creating immutable audit records for regulatory compliance.",
    credentials: [],
  },
  {
    name: "Dr. Brett Tipple",
    title: "President & Chief Scientist",
    image: "/images/team/brett-tipple.png",
    linkedin: "https://www.linkedin.com/in/bretttipple/",
    bio: "Brett is a leading isotope geochemist with a PhD from Yale and 22+ years of experience in forensic geochemistry. He has authored 80+ peer-reviewed publications and serves as Adjunct Assistant Professor at the University of Utah. His research in isotope-based origin verification is the scientific backbone of FloraTrace.",
    credentials: ["PhD, Geology — Yale University", "80+ peer-reviewed publications", "Adjunct Assistant Professor, University of Utah"],
  },
];

const advisors = [
  {
    name: "Brenda Brockman-Smith",
    title: "Trade & Compliance Advisor",
    image: "/images/team/brenda-brockman-smith.png",
    linkedin: "https://www.linkedin.com/in/brendabrockmansmith/",
    bio: "Former Executive Assistant Commissioner for International Trade at U.S. Customs and Border Protection, where she oversaw a $260M annual budget and led enforcement of trade laws on $4 trillion of annual trade. Recipient of a Presidential Rank Award as a Distinguished Executive in the top 1% of senior government executives. Licensed Customs Broker.",
  },
  {
    name: "Monica Jonas",
    title: "Operations & Strategy Advisor",
    image: "/images/team/monica-jonas.png",
    linkedin: "https://www.linkedin.com/in/monicajonas/",
    bio: "Former COO, Deputy CEO, and Interim Co-CEO at Oritain, the global leader in forensic origin verification, where she led 250+ employees across five countries and scaled the business to $40M+ ACV. Previously COO at WorkFusion and SVP of Global Business Operations at Viacom Media Networks. MS from Johns Hopkins.",
  },
  {
    name: "Greg Adams",
    title: "Commercial Strategy Advisor",
    image: "/images/team/greg-adams.png",
    linkedin: "https://www.linkedin.com/in/gregadams1815/",
    bio: "Former VP of Sales for the Americas and Global Channels at Oritain, where he rebuilt the Americas sales team and improved business performance tracking. 29+ years of experience in enterprise go-to-market strategy. Wharton Executive Education. U.S. Army Veteran.",
  },
  {
    name: "Dr. Gabriel Bowen",
    title: "Scientific Advisor",
    image: "/images/team/gabe-bowen.png",
    linkedin: "https://science.utah.edu/faculty/new-chair-of-geology-geophysics/",
    bio: "Professor and Chair of the Department of Geology & Geophysics at the University of Utah. Co-Director of the Stable Isotope Facility for Environmental Research (SIRFER) and founder of the SPATIAL Lab. His pioneering research in spatio-temporal isotope analytics underpins FloraTrace's origin fingerprinting methodology. PhD from UC Santa Cruz. 2024 Distinguished Research Awardee.",
  },
  {
    name: "Carli Rosencranz",
    title: "Brands & Sourcing Advisor",
    image: "/images/team/carli-rosencranz.png",
    linkedin: "https://www.linkedin.com/in/carlirosencranz/",
    bio: "25+ years in retail and CPG with deep expertise in global sourcing, private brands, and merchandising strategy. Former Senior Director of Global Sourcing at Walmart, where she led sourcing strategy for packaged foods and hot beverages. MS in Marketing from UT Arlington.",
  },
  {
    name: "Rob Fishman",
    title: "Insurance & Risk Advisor",
    image: "/images/team/rob-fishman.png",
    linkedin: "https://www.linkedin.com/in/robfishman/",
    bio: "39+ years as a C-suite executive in insurance and risk management, including leadership roles at Zurich, Progressive, ARAG, and HCC Insurance. At FloraTrace, he develops risk transfer and insurance solutions for companies facing forced labor compliance exposure. JD from University of Toledo. CPCU certified.",
  },
];

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy via-navy-light to-navy py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-green-light font-semibold uppercase tracking-widest text-sm mb-4">
              Our People
            </p>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight max-w-3xl mx-auto">
              Leadership &amp; Advisory Board
            </h1>
            <p className="text-white/60 mt-4 max-w-2xl mx-auto">
              Scientists, trade compliance veterans, and industry leaders
              working together to bring transparency to global supply chains.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-green font-semibold uppercase tracking-widest text-sm mb-3">
              Leadership
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy leading-tight">
              Our Team
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((person, i) => (
              <AnimatedSection key={person.name} delay={i * 0.1}>
                <div className="bg-white rounded-2xl border border-gray-medium/50 overflow-hidden hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
                  <div className="bg-gradient-to-br from-navy to-navy-light p-8 text-center">
                    {person.image ? (
                      <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-3 border-white/20">
                        <Image
                          src={person.image}
                          alt={person.name}
                          width={96}
                          height={96}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-24 h-24 rounded-full bg-white/10 border-3 border-white/20 flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-white">
                          {person.name.split(" ").map(n => n[0]).join("")}
                        </span>
                      </div>
                    )}
                    <h3 className="text-xl font-bold text-white mb-1">
                      {person.name}
                    </h3>
                    <p className="text-green-light text-sm font-medium">
                      {person.title}
                    </p>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-gray-dark text-sm leading-relaxed flex-1">
                      {person.bio}
                    </p>
                    {person.credentials.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-gray-100 space-y-1.5">
                        {person.credentials.map((cred) => (
                          <div key={cred} className="flex items-start gap-2">
                            <GraduationCap className="w-3.5 h-3.5 text-green flex-shrink-0 mt-0.5" />
                            <span className="text-xs text-gray-dark">{cred}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <a
                        href={person.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-navy hover:text-green transition-colors text-sm font-medium"
                      >
                        <Linkedin className="w-4 h-4" />
                        LinkedIn Profile
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Advisors */}
      <section className="py-20 md:py-28 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-orange font-semibold uppercase tracking-widest text-sm mb-3">
              Advisors &amp; Consultants
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy leading-tight mb-4">
              World-Class Advisory Board
            </h2>
            <p className="text-gray-dark max-w-2xl mx-auto leading-relaxed">
              FloraTrace is guided by leaders from U.S. Customs and Border
              Protection, global retail, forensic science, insurance, and
              enterprise technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advisors.map((person, i) => (
              <AnimatedSection key={person.name} delay={i * 0.05}>
                <div className="bg-white rounded-2xl border border-gray-medium/50 overflow-hidden hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
                  <div className="bg-gradient-to-br from-navy/5 to-gray-light p-8 text-center">
                    {person.image ? (
                      <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-3 border-white shadow-md">
                        <Image
                          src={person.image}
                          alt={person.name}
                          width={96}
                          height={96}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-24 h-24 rounded-full bg-navy/10 border-3 border-white shadow-md flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-navy">
                          {person.name.split(" ").map(n => n[0]).join("")}
                        </span>
                      </div>
                    )}
                    <h3 className="text-lg font-bold text-navy">
                      {person.name}
                    </h3>
                    <p className="text-green text-xs font-semibold uppercase tracking-wide mt-1">
                      {person.title}
                    </p>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-gray-dark text-sm leading-relaxed flex-1">
                      {person.bio}
                    </p>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <a
                        href={person.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-navy hover:text-green transition-colors text-sm font-medium"
                      >
                        {person.linkedin.includes("linkedin.com") ? (
                          <Linkedin className="w-4 h-4" />
                        ) : (
                          <Briefcase className="w-4 h-4" />
                        )}
                        {person.linkedin.includes("linkedin.com") ? "LinkedIn" : "Faculty Profile"}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
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
              Want to Work With Us?
            </h2>
            <p className="text-gray-dark text-lg mb-10 max-w-2xl mx-auto">
              Schedule a call with our team to discuss how FloraTrace can help
              secure your supply chain.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <CTAButton>Request a Call</CTAButton>
              <CTAButton href="/platform" variant="outline">
                <span className="flex items-center gap-2">
                  Explore the Platform <ArrowRight className="w-4 h-4" />
                </span>
              </CTAButton>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
