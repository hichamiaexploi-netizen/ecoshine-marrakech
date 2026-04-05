import { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import BeforeAfterCard from "@/components/BeforeAfterCard";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { WHATSAPP_LINK, BEFORE_AFTER } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Galerie — EcoShine Marrakech",
  description: "Découvrez nos réalisations avant/après de lavage auto sans eau et detailing à Marrakech.",
};

const CARD_COLORS = [
  { before: "bg-gradient-to-br from-stone-300 to-stone-400", after: "bg-gradient-to-br from-teal-200 to-teal-400" },
  { before: "bg-gradient-to-br from-amber-200 to-amber-400", after: "bg-gradient-to-br from-sky-200 to-sky-400" },
  { before: "bg-gradient-to-br from-orange-200 to-orange-400", after: "bg-gradient-to-br from-emerald-200 to-emerald-400" },
  { before: "bg-gradient-to-br from-rose-200 to-rose-400", after: "bg-gradient-to-br from-violet-200 to-violet-400" },
  { before: "bg-gradient-to-br from-yellow-200 to-yellow-400", after: "bg-gradient-to-br from-cyan-200 to-cyan-400" },
  { before: "bg-gradient-to-br from-red-200 to-red-400", after: "bg-gradient-to-br from-lime-200 to-lime-400" },
];

const GALLERY_ITEMS = [
  {
    title: "Detailing BMW Série 5",
    category: "Detailing Premium",
    gradient: "from-blue-400/20 to-blue-600/20",
    emoji: "🚗",
  },
  {
    title: "Lavage Range Rover",
    category: "Lavage Complet",
    gradient: "from-green-400/20 to-green-600/20",
    emoji: "🏎️",
  },
  {
    title: "Rénovation Mercedes Classe C",
    category: "Traitement Céramique",
    gradient: "from-purple-400/20 to-purple-600/20",
    emoji: "✨",
  },
  {
    title: "Nettoyage intérieur Audi Q7",
    category: "Lavage Intérieur",
    gradient: "from-amber-400/20 to-amber-600/20",
    emoji: "💫",
  },
  {
    title: "Polish Porsche Cayenne",
    category: "Detailing Premium",
    gradient: "from-red-400/20 to-red-600/20",
    emoji: "💎",
  },
  {
    title: "Detailing Tesla Model 3",
    category: "Traitement Céramique",
    gradient: "from-indigo-400/20 to-indigo-600/20",
    emoji: "⚡",
  },
];

export default function GaleriePage() {
  return (
    <>
      <section className="py-20 bg-gradient-to-b from-primary/5 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Galerie"
            title="Nos réalisations avant / après"
            description="Glissez sur chaque image pour découvrir la transformation. Le résultat parle de lui-même."
          />
        </div>
      </section>

      {/* Featured Before/After Slider */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <BeforeAfterSlider
            beforeColor="bg-gradient-to-br from-stone-400 via-stone-500 to-stone-600"
            afterColor="bg-gradient-to-br from-teal-300 via-emerald-400 to-teal-500"
            beforeEmoji="🚗"
            afterEmoji="🚗"
            beforeLabel="Avant EcoShine"
            afterLabel="Après EcoShine"
          />
          <p className="text-center text-sm text-gray mt-4">
            Detailing complet — Mercedes Classe E — Guéliz, Marrakech
          </p>
        </div>
      </section>

      {/* Before/After Grid */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-dark text-center mb-8">
            Transformations récentes
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BEFORE_AFTER.map((item, i) => (
              <BeforeAfterCard
                key={item.id}
                title={item.title}
                category={item.category}
                beforeDesc={item.beforeDesc}
                afterDesc={item.afterDesc}
                beforeColor={CARD_COLORS[i % CARD_COLORS.length].before}
                afterColor={CARD_COLORS[i % CARD_COLORS.length].after}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Classic Gallery */}
      <section className="pb-16 bg-gray-light py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-dark text-center mb-8">
            Plus de réalisations
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY_ITEMS.map((item, i) => (
              <div
                key={i}
                className="group relative bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all"
              >
                <div className={`h-56 bg-gradient-to-br ${item.gradient} flex items-center justify-center`}>
                  <span className="text-7xl group-hover:scale-110 transition-transform duration-300">
                    {item.emoji}
                  </span>
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-bold text-dark mt-1">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center bg-gradient-to-r from-primary to-primary-dark rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-white mb-3">
              Votre voiture pourrait être la prochaine
            </h3>
            <p className="text-white/80 mb-6">
              Réservez votre lavage et rejoignez nos clients satisfaits à Marrakech.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-colors"
            >
              Réserver maintenant
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
