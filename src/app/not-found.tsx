import Link from "next/link";
import { Home, ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-white via-gray-light to-white">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <div className="w-20 h-20 rounded-2xl bg-green/10 flex items-center justify-center mx-auto mb-8">
          <Search className="w-10 h-10 text-green" />
        </div>
        <h1 className="text-6xl md:text-8xl font-display font-bold text-navy mb-4">
          404
        </h1>
        <p className="text-xl md:text-2xl font-display text-navy mb-4">
          Page Not Found
        </p>
        <p className="text-gray-dark leading-relaxed mb-10 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-dark transition-colors"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border-2 border-navy text-navy px-6 py-3 rounded-lg font-semibold hover:bg-navy hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
