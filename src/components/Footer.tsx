import Link from "next/link";
import Logo from "./Logo";

const footerLinks = [
  {
    title: "Company",
    links: [
      { label: "Company", href: "/about" },
      { label: "Team", href: "/about/team" },
      { label: "News", href: "/news" },
      { label: "Our Science", href: "/our-science" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Trade Advisory", href: "/advisor" },
      { label: "UFLPA Compliance", href: "/uflpa-compliance" },
      { label: "Client Portal", href: "/platform" },
      { label: "Industries", href: "/industries" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="mb-4">
              <Logo variant="light" />
            </div>
            <p className="text-white/70 max-w-sm leading-relaxed">
              Origin verification for sustainable sourcing. Protecting brand
              reputation through cutting-edge geographic origin assignment
              technologies.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://www.linkedin.com/company/floratrace/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-white/60 hover:text-green-light transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@floratrace"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-white/60 hover:text-green-light transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white/90">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-green-light transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            &copy; {new Date().getFullYear()} FloraTrace. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-white/50 hover:text-green-light transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/50 hover:text-green-light transition-colors text-sm">
              Terms of Service
            </Link>
            <span className="text-white/50 text-sm">info@floratrace.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
