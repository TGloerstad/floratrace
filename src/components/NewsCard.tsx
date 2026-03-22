"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface NewsCardProps {
  title: string;
  description: string;
  link?: { url: string; label: string };
  index: number;
}

export default function NewsCard({
  title,
  description,
  link,
  index,
}: NewsCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl border border-gray-medium/50 p-8 hover:shadow-lg transition-all duration-300 group"
    >
      <div className="w-2 h-2 rounded-full bg-orange mb-4" />
      <h3 className="text-lg font-display font-bold text-navy mb-3 group-hover:text-green transition-colors">
        {title}
      </h3>
      <p className="text-gray-dark text-sm leading-relaxed mb-4">{description}</p>
      {link && (
        <a
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-green font-semibold text-sm hover:gap-2 transition-all"
        >
          {link.label}
          <ArrowUpRight className="w-4 h-4" />
        </a>
      )}
    </motion.article>
  );
}
