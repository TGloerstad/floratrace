import Link from "next/link";

interface CTAButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
  /** When set, passes through to the underlying anchor (e.g. same-origin PDF download). */
  download?: boolean | string;
}

export default function CTAButton({
  href = "https://calendly.com/floratrace/talk-to-floratrace",
  children,
  variant = "primary",
  className = "",
  download,
}: CTAButtonProps) {
  const base =
    "inline-flex items-center justify-center px-8 py-3 rounded-md font-semibold text-base transition-all duration-300 cursor-pointer";
  const variants = {
    primary:
      "bg-green text-white hover:bg-green-dark shadow-lg hover:shadow-xl hover:-translate-y-0.5",
    outline:
      "border-2 border-green text-green hover:bg-green hover:text-white",
  };

  return (
    <Link
      href={href}
      download={download}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
