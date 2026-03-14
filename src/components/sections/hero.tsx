"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, KeyRound } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"
          alt="Flotte de vehicules utilitaires Louetonvehicule"
          fill
          priority
          className="object-cover opacity-40 mix-blend-luminosity"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent md:w-2/3" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-20 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs font-medium text-zinc-300 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Vehicules disponibles immediatement
          </motion.div>

          <h1 className="font-serif text-5xl md:text-7xl font-semibold tracking-tighter text-white leading-[1.1] mb-6">
            L&apos;excellence utilitaire pour les pros.
          </h1>

          <p className="text-lg md:text-xl text-zinc-400 font-light mb-10 leading-relaxed max-w-xl">
            Decouvrez notre selection de vehicules premium. Que ce soit pour une
            mission ponctuelle ou un investissement durable, nous avons
            l&apos;utilitaire qu&apos;il vous faut.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Link
              href="#louer"
              className={cn(
                buttonVariants({ size: "lg" }),
                "w-full sm:w-auto rounded-full gap-2 justify-center"
              )}
            >
              Louer un vehicule
              <Calendar className="h-4 w-4" />
            </Link>
            <Link
              href="#acheter"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "w-full sm:w-auto rounded-full gap-2 justify-center border-white/20 text-white hover:bg-white/5"
              )}
            >
              Acheter un vehicule
              <KeyRound className="h-4 w-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
