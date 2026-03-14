"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type AnimatedCardProps = {
  children: React.ReactNode;
  index?: number;
  className?: string;
};

export function AnimatedCard({
  children,
  index = 0,
  className,
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      className={cn(
        "p-8 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-white/10 transition-colors duration-300",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
