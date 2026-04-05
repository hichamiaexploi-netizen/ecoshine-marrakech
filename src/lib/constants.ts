export const WHATSAPP_NUMBER = "212649363009";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Bonjour EcoShine ! Je souhaite réserver un lavage auto à domicile.")}`;
export const PHONE_NUMBER = "+212 6 49 36 30 09";
export const EMAIL = "contact@ecoshine-marrakech.ma";
export const ADDRESS = "Marrakech, Maroc";

export const BEFORE_AFTER = [
  {
    id: 1,
    title: "Detailing Extérieur — Mercedes Classe C",
    category: "Detailing Premium",
    beforeDesc: "Carrosserie ternie, micro-rayures, traces de calcaire",
    afterDesc: "Brillance miroir, protection céramique, comme neuve",
  },
  {
    id: 2,
    title: "Nettoyage Intérieur — BMW X5",
    category: "Lavage Intérieur",
    beforeDesc: "Sièges tachés, poussière, plastiques ternis",
    afterDesc: "Sièges impeccables, plastiques rénovés, odeur fraîche",
  },
  {
    id: 3,
    title: "Lavage Complet — Audi A4",
    category: "Lavage Complet",
    beforeDesc: "Voiture très sale après piste, poussière de Marrakech",
    afterDesc: "Propreté totale int. & ext., finition showroom",
  },
  {
    id: 4,
    title: "Rénovation Phares — Peugeot 3008",
    category: "Services Additionnels",
    beforeDesc: "Phares jaunis et opaques, visibilité réduite",
    afterDesc: "Phares transparents comme neufs, visibilité optimale",
  },
  {
    id: 5,
    title: "Traitement Cuir — Range Rover",
    category: "Detailing Premium",
    beforeDesc: "Cuir craquelé, décoloré et sec",
    afterDesc: "Cuir nourri, souple et couleur ravivée",
  },
  {
    id: 6,
    title: "Lavage Extérieur — Golf 8",
    category: "Lavage Extérieur",
    beforeDesc: "Poussière épaisse, traces d'eau, jantes sales",
    afterDesc: "Carrosserie brillante, jantes propres, vitres cristallines",
  },
];

export const ZONES = [
  "Guéliz",
  "Hivernage",
  "Majorelle",
  "Palmeraie",
  "Targa",
  "Agdal",
  "Semlalia",
  "Route de Casablanca",
  "Route de Fès",
];

export const SERVICES = [
  {
    id: "lavage-exterieur",
    name: "Lavage Extérieur",
    description: "Lavage complet de la carrosserie sans eau avec produits écologiques premium. Jantes, vitres et finition brillante.",
    duration: "30 min",
    icon: "💧",
    features: ["Carrosserie complète", "Jantes & pneus", "Vitres extérieures", "Finition brillante"],
  },
  {
    id: "lavage-interieur",
    name: "Lavage Intérieur",
    description: "Aspiration complète, nettoyage des surfaces, plastiques, vitres intérieures et parfum d'ambiance.",
    duration: "45 min",
    icon: "✨",
    features: ["Aspiration complète", "Nettoyage plastiques", "Vitres intérieures", "Parfum d'ambiance"],
  },
  {
    id: "lavage-complet",
    name: "Lavage Complet",
    description: "Combinaison du lavage extérieur et intérieur pour un résultat impeccable de A à Z.",
    duration: "1h15",
    icon: "🚗",
    features: ["Extérieur complet", "Intérieur complet", "Coffre", "Parfum offert"],
  },
  {
    id: "detailing-premium",
    name: "Detailing Premium",
    description: "Traitement complet avec polish, cire de protection, rénovation plastiques et traitement cuir.",
    duration: "2h30",
    icon: "💎",
    features: ["Polish carrosserie", "Cire de protection", "Rénovation plastiques", "Traitement cuir"],
  },
  {
    id: "traitement-ceramique",
    name: "Traitement Céramique",
    description: "Protection longue durée avec coating céramique professionnel. Brillance et protection jusqu'à 12 mois.",
    duration: "4h",
    icon: "🛡️",
    features: ["Préparation complète", "Coating céramique", "Protection 12 mois", "Brillance extrême"],
  },
  {
    id: "nettoyage-moteur",
    name: "Nettoyage Moteur",
    description: "Dégraissage et nettoyage en profondeur du compartiment moteur avec produits adaptés.",
    duration: "45 min",
    icon: "⚙️",
    features: ["Dégraissage", "Nettoyage compartiment", "Protection plastiques", "Finition propre"],
  },
];

export const PRICING = [
  {
    name: "Essentiel",
    price: "80",
    unit: "DH",
    description: "Lavage extérieur sans eau",
    features: [
      "Carrosserie complète",
      "Jantes & pneus",
      "Vitres extérieures",
      "Finition brillante",
      "Produits écologiques",
    ],
    popular: false,
    service: "Lavage Extérieur",
  },
  {
    name: "Confort",
    price: "150",
    unit: "DH",
    description: "Lavage complet int. + ext.",
    features: [
      "Tout l'Essentiel +",
      "Aspiration intérieure",
      "Nettoyage plastiques",
      "Vitres int. & ext.",
      "Coffre",
      "Parfum offert",
    ],
    popular: true,
    service: "Lavage Complet",
  },
  {
    name: "Premium",
    price: "350",
    unit: "DH",
    description: "Detailing complet",
    features: [
      "Tout le Confort +",
      "Polish carrosserie",
      "Cire de protection",
      "Rénovation plastiques",
      "Traitement cuir",
      "Résultat showroom",
    ],
    popular: false,
    service: "Detailing Premium",
  },
];

export const TESTIMONIALS = [
  {
    name: "Karim B.",
    location: "Guéliz",
    text: "Service impeccable ! Ma voiture n'a jamais été aussi propre. Le fait qu'ils viennent directement au bureau, c'est un vrai gain de temps.",
    rating: 5,
  },
  {
    name: "Sofia M.",
    location: "Hivernage",
    text: "J'adore le concept écologique. Pas une goutte d'eau et le résultat est incroyable. Je recommande à 100% !",
    rating: 5,
  },
  {
    name: "Youssef A.",
    location: "Palmeraie",
    text: "Le detailing premium a redonné une seconde vie à ma voiture. Travail minutieux et professionnel. Bravo !",
    rating: 5,
  },
  {
    name: "Amina R.",
    location: "Targa",
    text: "Ponctuel, professionnel et résultat au top. Mon SUV brille comme au premier jour. Merci EcoShine !",
    rating: 5,
  },
];

export const FAQS = [
  {
    question: "Comment fonctionne le lavage sans eau ?",
    answer: "Nous utilisons des produits écologiques haute performance qui encapsulent la saleté et la poussière. Le produit est pulvérisé sur la surface, puis essuyé avec des microfibres premium. Le résultat est un lavage impeccable sans rayures et sans une seule goutte d'eau.",
  },
  {
    question: "Est-ce que le lavage sans eau peut rayer ma voiture ?",
    answer: "Absolument pas ! Nos produits sont spécialement formulés pour lubrifier la surface et encapsuler les particules de saleté. Combinés à nos microfibres haut de gamme, le risque de rayures est inexistant. C'est même plus doux qu'un lavage traditionnel.",
  },
  {
    question: "Quelles zones de Marrakech desservez-vous ?",
    answer: "Nous intervenons dans tous les quartiers principaux de Marrakech : Guéliz, Hivernage, Majorelle, Palmeraie, Targa, Agdal, Semlalia, et les routes de Casablanca et Fès. Contactez-nous pour vérifier la disponibilité dans votre zone.",
  },
  {
    question: "Combien de temps dure un lavage ?",
    answer: "Un lavage extérieur prend environ 30 minutes, un lavage complet (intérieur + extérieur) environ 1h15, et un detailing premium environ 2h30. La durée peut varier selon la taille et l'état du véhicule.",
  },
  {
    question: "Dois-je fournir de l'eau ou de l'électricité ?",
    answer: "Non, rien du tout ! Nous sommes 100% autonomes. Nous apportons tout notre matériel et nos produits. Vous n'avez rien à préparer.",
  },
  {
    question: "Comment puis-je réserver ?",
    answer: "Vous pouvez réserver directement via WhatsApp, par téléphone, ou en remplissant le formulaire de réservation sur notre site. Nous confirmons votre créneau dans les plus brefs délais.",
  },
  {
    question: "Proposez-vous des forfaits ou abonnements ?",
    answer: "Oui ! Nous proposons des forfaits mensuels avec des tarifs préférentiels. Contactez-nous pour découvrir nos offres d'abonnement personnalisées selon vos besoins.",
  },
  {
    question: "Quels moyens de paiement acceptez-vous ?",
    answer: "Nous acceptons le paiement en espèces et par virement bancaire. Le paiement se fait après la prestation, une fois que vous êtes satisfait du résultat.",
  },
];

export const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/galerie", label: "Galerie" },
  { href: "/a-propos", label: "À Propos" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];
