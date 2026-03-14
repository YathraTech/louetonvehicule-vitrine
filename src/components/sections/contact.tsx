"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { SITE } from "@/lib/constants";
import { SectionHeader } from "@/components/shared/section-header";
import { AnimatedCard } from "@/components/shared/animated-card";
import { Button } from "@/components/ui/button";

const CONTACT_INFO = [
  { icon: Phone, label: "Telephone", value: SITE.phone },
  { icon: Mail, label: "Email", value: SITE.email },
  { icon: MapPin, label: "Adresse", value: SITE.address },
  { icon: Clock, label: "Horaires", value: "Lun-Sam: 8h-19h" },
] as const;

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Contactez-nous"
          description="Notre equipe est a votre disposition pour vous accompagner dans votre projet de location ou d'achat."
          className="mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CONTACT_INFO.map((item, i) => (
              <AnimatedCard key={item.label} index={i} className="p-6">
                <item.icon className="h-5 w-5 text-zinc-400 mb-3" />
                <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest mb-1">
                  {item.label}
                </p>
                <p className="text-sm text-white font-medium">{item.value}</p>
              </AnimatedCard>
            ))}
          </div>

          {/* Contact form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 p-8 rounded-2xl bg-[#0a0a0a] border border-white/5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs text-zinc-500 font-medium uppercase tracking-widest mb-2"
                >
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/20 transition-colors"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block text-xs text-zinc-500 font-medium uppercase tracking-widest mb-2"
                >
                  Entreprise
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/20 transition-colors"
                  placeholder="Votre entreprise"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-xs text-zinc-500 font-medium uppercase tracking-widest mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/20 transition-colors"
                placeholder="votre@email.fr"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-xs text-zinc-500 font-medium uppercase tracking-widest mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/20 transition-colors resize-none"
                placeholder="Decrivez votre besoin..."
              />
            </div>
            <Button type="submit" className="w-full rounded-full gap-2">
              Envoyer
              <Send className="h-4 w-4" />
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
