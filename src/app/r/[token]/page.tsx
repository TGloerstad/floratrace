import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AnimatedSection from "@/components/AnimatedSection";
import { getReportAccessToken } from "@/lib/report-access";
import ReportRequestForm from "./ReportRequestForm";

export async function generateStaticParams() {
  return [{ token: getReportAccessToken() }];
}

export const dynamicParams = false;

export const metadata: Metadata = {
  title: "Paprika retail survey report",
  description:
    "FloraTrace paprika retail survey findings for prospective partners and clients.",
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
};

type Props = { params: Promise<{ token: string }> };

export default async function ReportLandingPage({ params }: Props) {
  const { token } = await params;
  if (token !== getReportAccessToken()) {
    notFound();
  }

  return (
    <>
      <section className="bg-gradient-to-br from-navy via-navy-light to-navy py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-green-light font-semibold uppercase tracking-widest text-sm mb-4">
              FloraTrace
            </p>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-white leading-tight">
              Paprika retail survey report
            </h1>
            <p className="mt-6 text-white/70 text-lg leading-relaxed">
              Enter your details below and we will send the full report
              directly to your inbox.
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
