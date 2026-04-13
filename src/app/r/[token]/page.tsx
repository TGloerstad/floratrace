import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FileDown } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import CTAButton from "@/components/CTAButton";
import { getReportAccessToken } from "@/lib/report-access";

const REPORT_PDF_PATH = "/reports/marketing-report.pdf";

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
              Thank you for your interest. View the report below or download a
              copy for your records.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <CTAButton
                href={REPORT_PDF_PATH}
                download="FloraTrace_Paprika_Retail_Survey_Report.pdf"
              >
                <span className="inline-flex items-center gap-2">
                  <FileDown className="w-5 h-5" aria-hidden />
                  Download PDF
                </span>
              </CTAButton>
              <CTAButton href="/contact" variant="outline">
                Contact us
              </CTAButton>
            </div>
            <div className="rounded-2xl border border-gray-medium/50 overflow-hidden shadow-lg bg-gray-50 aspect-[8.5/11] max-h-[80vh]">
              <iframe
                title="FloraTrace Paprika retail survey report"
                src={REPORT_PDF_PATH}
                className="w-full h-full min-h-[70vh] border-0"
              />
            </div>
            <p className="mt-6 text-center text-sm text-gray-dark">
              Prefer email? Reach us at{" "}
              <a
                href="mailto:info@floratrace.com"
                className="text-green hover:underline"
              >
                info@floratrace.com
              </a>
              . Return to the{" "}
              <Link href="/" className="text-green hover:underline">
                home page
              </Link>
              .
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
