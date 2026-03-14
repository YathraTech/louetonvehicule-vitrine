"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SITE, FOOTER_LINKS, CONTACT_ICONS } from "@/lib/constants";

function FooterLinkGroup({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="text-sm font-medium text-white mb-4">{title}</h4>
      <ul className="space-y-3 text-sm text-zinc-500">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-auto border-t border-white/5 bg-[#050505] pt-16 pb-8 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="font-serif text-lg font-medium tracking-tighter uppercase text-white mb-4">
              {SITE.name}
            </div>
            <p className="text-sm text-zinc-500 font-light mb-6 max-w-sm">
              Le partenaire mobilite des professionnels exigeants. Des solutions
              de location et d&apos;achat adaptees a chaque metier.
            </p>
            <div className="flex items-center gap-4 text-zinc-400">
              {CONTACT_ICONS.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="hover:text-white transition-colors p-2 bg-white/5 rounded-full border border-white/5"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          <FooterLinkGroup title="Services" links={FOOTER_LINKS.services} />
          <FooterLinkGroup title="Vehicules" links={FOOTER_LINKS.vehicules} />
          <FooterLinkGroup title="Societe" links={FOOTER_LINKS.societe} />
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-600">
            &copy; {new Date().getFullYear()} {SITE.name}. Tous droits
            reserves.
          </p>
          <span className="text-xs text-zinc-600">
            Design inspire de l&apos;excellence.
          </span>
        </div>
      </div>
    </motion.footer>
  );
}
