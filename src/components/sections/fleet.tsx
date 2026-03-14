"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Info, ArrowRight } from "lucide-react";
import { VEHICLES, FLEET_FILTERS, type Vehicle } from "@/lib/constants";
import { SectionHeader } from "@/components/shared/section-header";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function VehicleCard({ vehicle, index }: { vehicle: Vehicle; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex flex-col bg-[#050505] rounded-2xl border border-white/5 overflow-hidden hover:border-white/20 transition-all duration-300"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900">
        <Image
          src={vehicle.image}
          alt={vehicle.title}
          fill
          className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-4 left-4 bg-[#050505]/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-xs font-medium text-zinc-200">
          Volume: {vehicle.volume}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-4">
          <span className="text-xs text-zinc-500 font-medium tracking-wide uppercase">
            {vehicle.category}
          </span>
          <h3 className="font-serif text-xl font-medium tracking-tight text-white mt-1">
            {vehicle.title}
          </h3>
          <p className="text-sm text-zinc-400 mt-2 line-clamp-2">
            {vehicle.description}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6 py-4 border-y border-white/5 text-sm text-zinc-300">
          {vehicle.specs.map((spec) => (
            <div key={spec.label} className="flex items-center gap-2">
              <spec.icon className="h-4 w-4 text-zinc-500" />
              <span>{spec.label}</span>
            </div>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xs text-zinc-500">A partir de</span>
            <span className="text-lg font-medium text-white">
              {vehicle.price}&euro;{" "}
              <span className="text-sm font-normal text-zinc-500">
                / {vehicle.priceUnit}
              </span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
              title="Details pour l'achat"
              aria-label="Voir les details"
            >
              <Info className="h-4 w-4" />
            </button>
            <Link
              href="#louer"
              className={cn(buttonVariants({ size: "sm" }), "rounded-full")}
            >
              Louer
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Fleet() {
  const [activeFilter, setActiveFilter] = useState("Tous");

  const filtered =
    activeFilter === "Tous"
      ? VEHICLES
      : VEHICLES.filter((v) => v.tags.includes(activeFilter));

  return (
    <section
      id="flotte"
      className="py-24 px-6 bg-[#0a0a0a] border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6">
          <SectionHeader
            title="Notre Flotte Premium"
            description="Des volumes compacts aux grands fourgons, trouvez l'outil de travail ideal pour vos chantiers ou livraisons."
          />
          <div className="flex gap-2 p-1 bg-white/5 rounded-lg border border-white/5">
            {FLEET_FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 text-xs font-medium rounded-md transition-colors ${
                  activeFilter === filter
                    ? "bg-white/10 text-white shadow-sm"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((vehicle, i) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center"
        >
          <Link
            href="#flotte"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "rounded-full gap-2 border-white/10 text-white hover:bg-white/5"
            )}
          >
            Voir toute la flotte
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
