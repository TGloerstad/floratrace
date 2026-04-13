import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import ReportRequestForm from "@/components/ReportRequestForm";

export const metadata: Metadata = {
  title: "Access the Paprika Retail Survey Report",
  description:
    "Enter your details to receive the FloraTrace paprika retail survey report directly in your inbox.",
};

export default function ReportAccessPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-navy via-navy-light to-navy py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-green-light font-semibold uppercase tracking-widest text-sm mb-4">
              FloraTrace Research
            </p>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-white leading-tight">
              Paprika retail survey report
            </h1>
            <p className="mt-6 text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
              Our latest research examines paprika products across US retail
              channels, revealing key insights about origin labeling and supply
              chain transparency. Enter your details below and we will send the
              full report directly to your inbox.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <ReportRequestForm />
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
