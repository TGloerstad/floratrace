import Link from "next/link";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
}

export default function Logo({ variant = "dark", className = "" }: LogoProps) {
  const floraColor = variant === "dark" ? "#3BAA8A" : "#5EC4A8";
  const traceColor = variant === "dark" ? "#2D3561" : "#8B9DD4";

  return (
    <Link
      href="/"
      className={`flex items-center group ${className}`}
      aria-label="FloraTrace Home"
    >
      <svg
        viewBox="0 0 340 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 md:h-7 w-auto"
        aria-hidden="true"
      >
        {/* F */}
        <text x="0" y="30" fontFamily="'Inter', sans-serif" fontSize="32" fontWeight="700" letterSpacing="4" fill={floraColor}>F</text>
        {/* L */}
        <text x="28" y="30" fontFamily="'Inter', sans-serif" fontSize="32" fontWeight="700" letterSpacing="4" fill={floraColor}>L</text>
        {/* O - distinctive circle with dot */}
        <circle cx="72" cy="20" r="12" stroke={floraColor} strokeWidth="3.5" fill="none" />
        <circle cx="72" cy="20" r="3" fill={floraColor} />
        {/* R */}
        <text x="92" y="30" fontFamily="'Inter', sans-serif" fontSize="32" fontWeight="700" letterSpacing="4" fill={floraColor}>R</text>
        {/* A */}
        <text x="120" y="30" fontFamily="'Inter', sans-serif" fontSize="32" fontWeight="700" letterSpacing="4" fill={floraColor}>A</text>
        {/* T */}
        <text x="152" y="30" fontFamily="'Inter', sans-serif" fontSize="32" fontWeight="700" letterSpacing="4" fill={traceColor}>T</text>
        {/* R */}
        <text x="178" y="30" fontFamily="'Inter', sans-serif" fontSize="32" fontWeight="700" letterSpacing="4" fill={traceColor}>R</text>
        {/* A */}
        <text x="206" y="30" fontFamily="'Inter', sans-serif" fontSize="32" fontWeight="700" letterSpacing="4" fill={traceColor}>A</text>
        {/* C */}
        <text x="238" y="30" fontFamily="'Inter', sans-serif" fontSize="32" fontWeight="700" letterSpacing="4" fill={traceColor}>C</text>
        {/* E */}
        <text x="268" y="30" fontFamily="'Inter', sans-serif" fontSize="32" fontWeight="700" letterSpacing="4" fill={traceColor}>E</text>
      </svg>
    </Link>
  );
}
