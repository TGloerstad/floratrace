"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "./Logo";
import CTAButton from "./CTAButton";

const navItems = [
  { label: "Our Science", href: "/our-science" },
  { label: "Advisor", href: "/advisor" },
  { label: "Industries", href: "/industries" },
  { label: "Platform", href: "/platform" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About Us", href: "/about" },
      { label: "News", href: "/news" },
      { label: "UFLPA Compliance", href: "/uflpa-compliance" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Logo />

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label} className="relative">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    onMouseEnter={() => setDropdownOpen(true)}
                    className={`flex items-center gap-1 text-sm font-medium uppercase tracking-wide transition-colors cursor-pointer ${
                      item.children.some((c) => pathname === c.href)
                        ? "text-green"
                        : "text-navy hover:text-green"
                    }`}
                  >
                    {item.label}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {dropdownOpen && (
                    <div
                      className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-2"
                      onMouseLeave={() => setDropdownOpen(false)}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block px-4 py-2.5 text-sm transition-colors ${
                            pathname === child.href
                              ? "text-green bg-green/5"
                              : "text-navy hover:text-green hover:bg-gray-50"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium uppercase tracking-wide transition-colors ${
                    pathname === item.href
                      ? "text-green"
                      : "text-navy hover:text-green"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/floratrace/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-navy hover:text-green transition-colors"
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
                className="text-navy hover:text-green transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
            <CTAButton>Request a Call</CTAButton>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-navy hover:text-green transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="w-full flex items-center justify-between py-3 px-4 text-navy font-medium uppercase tracking-wide text-sm cursor-pointer"
                  >
                    {item.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        dropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {dropdownOpen && (
                    <div className="pl-8 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block py-2 px-4 text-sm rounded-md ${
                            pathname === child.href
                              ? "text-green bg-green/5"
                              : "text-navy/70 hover:text-green"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block py-3 px-4 font-medium uppercase tracking-wide text-sm rounded-md ${
                    pathname === item.href
                      ? "text-green bg-green/5"
                      : "text-navy hover:text-green"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
            <div className="pt-4 px-4">
              <CTAButton className="w-full">Request a Call</CTAButton>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
