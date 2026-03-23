import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
}

export default function Logo({ variant = "dark", className = "" }: LogoProps) {
  return (
    <Link
      href="/"
      className={`flex items-center group ${className}`}
      aria-label="FloraTrace Home"
    >
      <Image
        src="/floratrace-logo.png"
        alt="FloraTrace"
        width={220}
        height={32}
        className={`h-6 md:h-7 w-auto ${
          variant === "light" ? "brightness-0 invert opacity-80" : ""
        }`}
        priority
      />
    </Link>
  );
}
