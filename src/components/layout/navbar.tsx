"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { SITE } from "@/lib/constants";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full top-0 z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-xl"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-serif text-lg font-medium tracking-tighter uppercase text-white hover:opacity-80 transition-opacity"
        >
          {SITE.name}
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="#acheter"
            className="text-sm font-medium text-zinc-300 hover:text-white transition-colors"
          >
            Acheter
          </Link>
          <Link
            href="#louer"
            className={cn(
              buttonVariants({ size: "sm" }),
              "rounded-full gap-2"
            )}
          >
            Louer
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white p-2"
          aria-label="Menu"
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-white/5 bg-[#050505]/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              <Link
                href="#acheter"
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-zinc-300 hover:text-white transition-colors py-2"
              >
                Acheter
              </Link>
              <Link
                href="#louer"
                onClick={() => setMobileOpen(false)}
                className={cn(
                  buttonVariants(),
                  "rounded-full gap-2 w-full justify-center"
                )}
              >
                Louer
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
