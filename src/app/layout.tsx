import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "Louetonvehicule | Location & Vente de Vehicules Utilitaires d'Occasion",
    template: "%s | Louetonvehicule",
  },
  description:
    "Louez ou achetez des vehicules utilitaires d'occasion premium pour professionnels. Flotte de plus de 150 vehicules, assistance 24/7, vehicules de moins de 2 ans. Fourgons, camions.",
  keywords: [
    "location vehicule utilitaire",
    "vente utilitaire occasion",
    "louer fourgon",
    "camion location professionnels",
    "utilitaire pas cher",
    "location longue duree utilitaire",
    "louetonvehicule",
  ],
  authors: [{ name: "Louetonvehicule" }],
  creator: "Louetonvehicule",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://louetonvehicule.fr",
    siteName: "Louetonvehicule",
    title: "Louetonvehicule - Location & Vente d'Utilitaires Premium",
    description:
      "Le partenaire mobilite des professionnels exigeants. Plus de 150 vehicules utilitaires disponibles en location ou a la vente.",
    images: [
      {
        url: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg",
        width: 1600,
        height: 900,
        alt: "Flotte de vehicules utilitaires Louetonvehicule",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Louetonvehicule - Location & Vente d'Utilitaires Premium",
    description:
      "Le partenaire mobilite des professionnels exigeants. Plus de 150 vehicules utilitaires disponibles.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://louetonvehicule.fr",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#050505" />
      </head>
      <body
        className={`${montserrat.variable} ${playfair.variable} font-sans antialiased overflow-x-hidden flex flex-col min-h-screen bg-[#050505] text-zinc-100`}
      >
        {children}
      </body>
    </html>
  );
}
