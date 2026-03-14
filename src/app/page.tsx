import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { Features } from "@/components/sections/features";
import { Fleet } from "@/components/sections/fleet";
import { CTA } from "@/components/sections/cta";
import { Contact } from "@/components/sections/contact";
import { JsonLd } from "@/components/shared/json-ld";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <Fleet />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
