"use client";

import { motion } from "framer-motion";

type SectionHeaderProps = {
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeader({
  title,
  description,
  className = "",
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`max-w-2xl ${className}`}
    >
      <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tighter text-white mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-base text-zinc-400 font-light">{description}</p>
      )}
    </motion.div>
  );
}
