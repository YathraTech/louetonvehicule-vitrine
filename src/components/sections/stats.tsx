"use client";

import { motion } from "framer-motion";
import { STATS } from "@/lib/constants";

export function Stats() {
  return (
    <section className="border-y border-white/5 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col"
            >
              <span className="font-serif text-3xl font-semibold tracking-tighter text-white mb-1">
                {stat.value}
              </span>
              <span className="text-xs text-zinc-500 font-medium uppercase tracking-widest">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
