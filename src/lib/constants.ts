import {
  Shield,
  Route,
  Settings,
  Box,
  Fuel,
  Zap,
  ArrowUpFromLine,
  Users,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export const SITE = {
  name: "Louetonvehicule",
  description:
    "Location et vente de vehicules utilitaires d'occasion pour les professionnels. Flotte premium, entretien rigoureux, disponibilite immediate.",
  url: "https://louetonvehicule.fr",
  phone: "01 23 45 67 89",
  email: "contact@louetonvehicule.fr",
  address: "12 Avenue des Transports, 75012 Paris",
} as const;

export const NAV_LINKS = [
  { label: "La Flotte", href: "#flotte" },
  { label: "Avantages", href: "#avantages" },
  { label: "Contact", href: "#contact" },
] as const;

export const STATS = [
  { value: "150+", label: "Vehicules en flotte" },
  { value: "24/7", label: "Assistance incluse" },
  { value: "-2 ans", label: "Age moyen parc" },
  { value: "100%", label: "Pro revises" },
] as const;

export const FEATURES = [
  {
    icon: Shield,
    title: "Fiabilite Absolue",
    description:
      "Chaque vehicule subit un controle en 50 points avant chaque depart. Entretien rigoureux certifie.",
  },
  {
    icon: Route,
    title: "Contrats Modulables",
    description:
      "De la journee a l'annee, adaptez votre engagement selon les fluctuations de votre volume d'affaires.",
  },
  {
    icon: Settings,
    title: "Amenagements Sur-Mesure",
    description:
      "Beneficiez d'options d'amenagement interieur adaptees a votre metier (rayonnages, isolation, etc).",
  },
] as const;

export type Vehicle = {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  volume: string;
  specs: { icon: typeof Box; label: string }[];
  price: number;
  priceUnit: string;
  tags: string[];
};

export const VEHICLES: Vehicle[] = [
  {
    id: "fourgon-grand-volume",
    category: "Categorie L3H2",
    title: "Fourgon Grand Volume",
    description:
      "Ideal pour les demenagements, le transport de materiel volumineux et les longues distances.",
    image:
      "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg",
    volume: "14m\u00B3",
    specs: [
      { icon: Box, label: "Charge: 1200kg" },
      { icon: Fuel, label: "Diesel Euro 6" },
    ],
    price: 89,
    priceUnit: "jour",
    tags: ["Fourgons"],
  },
  {
    id: "utilitaire-compact",
    category: "Categorie L2H1",
    title: "Utilitaire Compact",
    description:
      "La polyvalence par excellence. Parfait pour les interventions en centre-ville et les artisans.",
    image:
      "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-fb8445a75b9_1600w.jpg",
    volume: "6m\u00B3",
    specs: [
      { icon: Box, label: "Charge: 1000kg" },
      { icon: Zap, label: "Electrique dispo" },
    ],
    price: 45,
    priceUnit: "jour",
    tags: ["Fourgons"],
  },
  {
    id: "camion-hayon",
    category: "Caisse 20m\u00B3",
    title: "Camion avec Hayon",
    description:
      "Pour les charges lourdes sur palettes. Simplifie les operations de chargement/dechargement.",
    image:
      "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp",
    volume: "20m\u00B3",
    specs: [
      { icon: ArrowUpFromLine, label: "Hayon 750kg" },
      { icon: Users, label: "3 places" },
    ],
    price: 110,
    priceUnit: "jour",
    tags: ["Fourgons"],
  },
];

export const FLEET_FILTERS = ["Tous", "Fourgons"] as const;

export const FOOTER_LINKS = {
  services: [
    { label: "Louer un utilitaire", href: "#louer" },
    { label: "Acheter un vehicule", href: "#acheter" },
    { label: "Longue duree (LLD)", href: "#" },
    { label: "Assurances pro", href: "#" },
  ],
  vehicules: [
    { label: "Petits volumes", href: "#" },
    { label: "Grands volumes", href: "#" },
    { label: "Camions bennes", href: "#" },
  ],
  societe: [
    { label: "A propos", href: "#" },
    { label: "Nos agences", href: "#" },
    { label: "Mentions legales", href: "#" },
    { label: "CGV", href: "#" },
  ],
} as const;

export const CONTACT_ICONS = [
  { icon: Mail, href: `mailto:${SITE.email}`, label: "Email" },
  { icon: Phone, href: `tel:${SITE.phone}`, label: "Telephone" },
  { icon: MapPin, href: "#contact", label: "Adresse" },
] as const;
