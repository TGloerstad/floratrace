import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "FloraTrace privacy policy — how we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-navy via-navy-light to-navy py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white">
              Privacy Policy
            </h1>
            <p className="text-white/60 mt-4">Last updated: March 22, 2026</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-navy max-w-none">
          <AnimatedSection>
            <h2 className="text-2xl font-display font-bold text-navy mb-4">1. Introduction</h2>
            <p className="text-gray-dark leading-relaxed mb-6">
              FloraTrace, Inc. (&ldquo;FloraTrace,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
              respects your privacy. This Privacy Policy describes how we collect, use, disclose, and
              protect information when you visit our website at floratrace.com (the &ldquo;Site&rdquo;)
              or use our services.
            </p>

            <h2 className="text-2xl font-display font-bold text-navy mb-4">2. Information We Collect</h2>
            <p className="text-gray-dark leading-relaxed mb-3">We may collect the following types of information:</p>
            <ul className="list-disc pl-6 text-gray-dark space-y-2 mb-6">
              <li><strong>Contact Information:</strong> Name, email address, phone number, and company name when you request a call, schedule a demo, or contact us.</li>
              <li><strong>Usage Data:</strong> Information about how you interact with our Site, including pages visited, time spent, referral sources, and browser type.</li>
              <li><strong>Cookies & Analytics:</strong> We use cookies and similar technologies to analyze traffic and improve the Site experience.</li>
            </ul>

            <h2 className="text-2xl font-display font-bold text-navy mb-4">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 text-gray-dark space-y-2 mb-6">
              <li>To respond to inquiries and provide our services</li>
              <li>To improve our Site and user experience</li>
              <li>To send relevant communications about our services (with your consent)</li>
              <li>To comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-display font-bold text-navy mb-4">4. Information Sharing</h2>
            <p className="text-gray-dark leading-relaxed mb-6">
              We do not sell your personal information. We may share information with trusted
              service providers who assist in operating our Site and services, subject to
              confidentiality agreements. We may also disclose information when required by law
              or to protect our rights.
            </p>

            <h2 className="text-2xl font-display font-bold text-navy mb-4">5. Data Security</h2>
            <p className="text-gray-dark leading-relaxed mb-6">
              We implement appropriate technical and organizational measures to protect your
              information. However, no method of transmission over the Internet is 100% secure,
              and we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-display font-bold text-navy mb-4">6. Your Rights</h2>
            <p className="text-gray-dark leading-relaxed mb-6">
              Depending on your jurisdiction, you may have the right to access, correct, delete,
              or restrict processing of your personal information. To exercise these rights,
              please contact us at info@floratrace.com.
            </p>

            <h2 className="text-2xl font-display font-bold text-navy mb-4">7. Third-Party Links</h2>
            <p className="text-gray-dark leading-relaxed mb-6">
              Our Site may contain links to third-party websites, including Calendly for scheduling.
              We are not responsible for the privacy practices of these external sites.
            </p>

            <h2 className="text-2xl font-display font-bold text-navy mb-4">8. Changes to This Policy</h2>
            <p className="text-gray-dark leading-relaxed mb-6">
              We may update this Privacy Policy from time to time. The updated version will be
              indicated by the &ldquo;Last updated&rdquo; date at the top of this page.
            </p>

            <h2 className="text-2xl font-display font-bold text-navy mb-4">9. Contact Us</h2>
            <p className="text-gray-dark leading-relaxed">
              If you have questions about this Privacy Policy, please contact us at:<br />
              <strong>Email:</strong> info@floratrace.com<br />
              <strong>Company:</strong> FloraTrace, Inc.<br />
              <strong>Location:</strong> Phoenix, Arizona, United States
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
