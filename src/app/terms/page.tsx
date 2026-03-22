import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "FloraTrace terms of service — terms and conditions governing use of our website and services.",
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-navy via-navy-light to-navy py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white">
              Terms of Service
            </h1>
            <p className="text-white/60 mt-4">Last updated: March 22, 2026</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-navy max-w-none">
          <AnimatedSection>
            <h2 className="text-2xl font-display font-bold text-navy mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-dark leading-relaxed mb-6">
              By accessing or using the FloraTrace website at floratrace.com (the &ldquo;Site&rdquo;),
              you agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;). If you do not agree,
              please do not use the Site.
            </p>

            <h2 className="text-2xl font-display font-bold text-navy mb-4">2. Services</h2>
            <p className="text-gray-dark leading-relaxed mb-6">
              FloraTrace, Inc. (&ldquo;FloraTrace&rdquo;) provides geographic origin verification,
              isotopic testing, supply chain transparency, and related consulting services.
              The specific terms of any service engagement will be governed by a separate
              agreement between FloraTrace and the client.
            </p>

            <h2 className="text-2xl font-display font-bold text-navy mb-4">3. Intellectual Property</h2>
            <p className="text-gray-dark leading-relaxed mb-6">
              All content on the Site — including text, graphics, logos, images, data, and software —
              is the property of FloraTrace or its licensors and is protected by intellectual property
              laws. You may not reproduce, distribute, or create derivative works without our
              written permission.
            </p>

            <h2 className="text-2xl font-display font-bold text-navy mb-4">4. Use of the Site</h2>
            <p className="text-gray-dark leading-relaxed mb-3">You agree not to:</p>
            <ul className="list-disc pl-6 text-gray-dark space-y-2 mb-6">
              <li>Use the Site for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to any portion of the Site</li>
              <li>Interfere with the proper functioning of the Site</li>
              <li>Collect or harvest any information from the Site without permission</li>
            </ul>

            <h2 className="text-2xl font-display font-bold text-navy mb-4">5. Disclaimer of Warranties</h2>
            <p className="text-gray-dark leading-relaxed mb-6">
              The Site and its content are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;
              without warranties of any kind, either express or implied. FloraTrace does not warrant
              that the Site will be uninterrupted, error-free, or free of viruses or other harmful
              components.
            </p>

            <h2 className="text-2xl font-display font-bold text-navy mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-dark leading-relaxed mb-6">
              To the fullest extent permitted by law, FloraTrace shall not be liable for any
              indirect, incidental, special, consequential, or punitive damages arising out of
              or related to your use of the Site. Information presented on the Site is for
              informational purposes and does not constitute legal, compliance, or regulatory advice.
            </p>

            <h2 className="text-2xl font-display font-bold text-navy mb-4">7. Third-Party Links</h2>
            <p className="text-gray-dark leading-relaxed mb-6">
              The Site may contain links to third-party websites or services. FloraTrace is not
              responsible for the content or practices of any linked sites.
            </p>

            <h2 className="text-2xl font-display font-bold text-navy mb-4">8. Governing Law</h2>
            <p className="text-gray-dark leading-relaxed mb-6">
              These Terms shall be governed by and construed in accordance with the laws of the
              State of Arizona, without regard to its conflict of law provisions.
            </p>

            <h2 className="text-2xl font-display font-bold text-navy mb-4">9. Changes to Terms</h2>
            <p className="text-gray-dark leading-relaxed mb-6">
              FloraTrace reserves the right to modify these Terms at any time. Changes will be
              effective upon posting to the Site. Your continued use constitutes acceptance of
              the modified Terms.
            </p>

            <h2 className="text-2xl font-display font-bold text-navy mb-4">10. Contact</h2>
            <p className="text-gray-dark leading-relaxed">
              Questions about these Terms should be directed to:<br />
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
