import type { Metadata } from "next";
import { Mail, Calendar } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with FloraTrace. Schedule a call or email us at info@floratrace.com.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy via-navy-light to-navy py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-green-light font-semibold uppercase tracking-widest text-sm mb-4">
              Get In Touch
            </p>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
              Contact Us
            </h1>
            <p className="mt-6 text-white/70 text-lg max-w-2xl mx-auto">
              Ready to learn more about how FloraTrace can help your business?
              Schedule a call or reach out via email.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Schedule a Call */}
            <AnimatedSection delay={0}>
              <div className="bg-white rounded-2xl border border-gray-medium/50 p-10 hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-green/10 flex items-center justify-center mb-6 text-green">
                  <Calendar className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-display font-bold text-navy mb-4">
                  Schedule a Call
                </h2>
                <p className="text-gray-dark leading-relaxed mb-8">
                  Book a time that works for you. Our team will walk you through
                  our services and how we can help verify your supply chain.
                </p>
                <div className="mt-auto">
                  <CTAButton>Request a Call</CTAButton>
                </div>
              </div>
            </AnimatedSection>

            {/* Email Us */}
            <AnimatedSection delay={0.1}>
              <div className="bg-white rounded-2xl border border-gray-medium/50 p-10 hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-orange/10 flex items-center justify-center mb-6 text-orange">
                  <Mail className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-display font-bold text-navy mb-4">
                  Email Us
                </h2>
                <p className="text-gray-dark leading-relaxed mb-8">
                  Prefer to send us a message? Reach out directly and our team
                  will get back to you promptly.
                </p>
                <div className="mt-auto">
                  <a
                    href="mailto:info@floratrace.com"
                    className="inline-flex items-center justify-center px-8 py-3 rounded-md font-semibold text-base transition-all duration-300 border-2 border-orange text-orange hover:bg-orange hover:text-white"
                  >
                    info@floratrace.com
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Social Links */}
          <AnimatedSection delay={0.2}>
            <div className="mt-16 text-center">
              <p className="text-gray-dark mb-6">Connect with us on social media</p>
              <div className="flex items-center justify-center gap-6">
                <a
                  href="https://www.linkedin.com/company/floratrace/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-navy hover:text-green transition-colors font-medium"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
                <a
                  href="https://www.youtube.com/@floratrace"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-navy hover:text-green transition-colors font-medium"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  YouTube
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
