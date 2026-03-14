"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Store } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CTA() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Pattern background */}
      <div className="absolute inset-0 z-0 bg-zinc-900">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdib3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djIwaDIwVjM0SDM2ek0zNiAzMmgyMlYzMmgtMjJ2MnoiLz48L2c+PC9nPjwvc3ZnPg==\")",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#050505]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        <h2 className="font-serif text-3xl md:text-5xl font-semibold tracking-tighter text-white mb-6">
          Investissez dans votre outil de travail.
        </h2>
        <p className="text-lg text-zinc-400 font-light mb-10 max-w-2xl mx-auto">
          Decouvrez nos vehicules utilitaires d&apos;occasion revises et
          garantis, issus de notre flotte de location. Qualite premium, prix
          maitrise.
        </p>
        <Link
          href="#acheter"
          className={cn(
            buttonVariants({ size: "lg" }),
            "rounded-full gap-2"
          )}
        >
          Consulter le catalogue de vente
          <Store className="h-4 w-4" />
        </Link>
      </motion.div>
    </section>
  );
}
