"use client";

import { motion } from "framer-motion";
import CTAButton from "./CTAButton";

interface CaseStudyCardProps {
  eyebrow: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

export default function CaseStudyCard({
  eyebrow,
  title,
  description,
  icon,
  index,
}: CaseStudyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl border border-gray-medium/50 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
    >
      <div className="w-14 h-14 rounded-xl bg-green/10 flex items-center justify-center mb-6 text-green group-hover:bg-green group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-2">
        {eyebrow}
      </p>
      <h3 className="text-xl font-display font-bold text-navy mb-4">{title}</h3>
      <p className="text-gray-dark leading-relaxed mb-6 text-sm">{description}</p>
      <CTAButton variant="outline" className="text-sm px-6 py-2">
        Request a Call
      </CTAButton>
    </motion.div>
  );
}
