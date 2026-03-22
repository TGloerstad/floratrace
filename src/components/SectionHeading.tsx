import AnimatedSection from "./AnimatedSection";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = true,
}: SectionHeadingProps) {
  return (
    <AnimatedSection className={`mb-12 ${centered ? "text-center" : ""}`}>
      {eyebrow && (
        <p className="text-green font-semibold uppercase tracking-widest text-sm mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-display font-bold text-navy leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-gray-dark text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </AnimatedSection>
  );
}
