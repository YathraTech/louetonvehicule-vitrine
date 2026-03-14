"use client";

import { FEATURES } from "@/lib/constants";
import { SectionHeader } from "@/components/shared/section-header";
import { AnimatedCard } from "@/components/shared/animated-card";

export function Features() {
  return (
    <section id="avantages" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Concu pour votre activite."
          description="Nous comprenons les exigences des professionnels. Notre service est pense pour maximiser votre productivite sans compromis."
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURES.map((feature, i) => (
            <AnimatedCard key={feature.title} index={i}>
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-serif text-lg font-medium text-white mb-2 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                {feature.description}
              </p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
