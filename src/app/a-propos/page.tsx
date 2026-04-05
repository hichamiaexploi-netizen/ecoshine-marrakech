import { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import { WHATSAPP_LINK } from "@/lib/constants";

export const metadata: Metadata = {
  title: "À Propos — A7san chocho Marrakech",
  description: "Découvrez A7san chocho Marrakech, votre service de lavage auto écologique sans eau à domicile.",
};

export default function AProposPage() {
  return (
    <>
      <section className="py-20 bg-gradient-to-b from-primary/5 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="À propos"
            title="Notre histoire"
            description="A7san chocho est né d'une conviction : prendre soin de sa voiture ne devrait pas coûter à la planète."
          />
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Story */}
          <div className="prose prose-lg max-w-none mb-16">
            <div className="bg-white rounded-3xl border border-gray-100 p-8 lg:p-12 space-y-6">
              <h3 className="text-2xl font-bold text-dark">Qui sommes-nous ?</h3>
              <p className="text-gray leading-relaxed">
                A7san chocho Marrakech est un service de <strong>lavage automobile sans eau</strong> et de
                <strong> detailing premium à domicile</strong>. Fondé à Marrakech, notre mission est
                simple : offrir un service de nettoyage automobile de qualité supérieure tout en
                préservant notre ressource la plus précieuse — l&apos;eau.
              </p>
              <p className="text-gray leading-relaxed">
                Chaque lavage traditionnel consomme entre 150 et 300 litres d&apos;eau. Chez A7san chocho,
                nous utilisons des produits biodégradables haute performance qui ne nécessitent
                <strong> pas une seule goutte d&apos;eau</strong>, tout en garantissant un résultat
                impeccable.
              </p>
              <p className="text-gray leading-relaxed">
                Notre équipe de professionnels passionnés se déplace directement chez vous ou sur
                votre lieu de travail, avec tout le matériel nécessaire. Vous n&apos;avez absolument
                rien à préparer.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-dark text-center mb-8">Nos valeurs</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: "🌍",
                  title: "Écologie",
                  desc: "Zéro eau, produits biodégradables, microfibres réutilisables. Chaque lavage est un geste pour la planète.",
                },
                {
                  icon: "🎯",
                  title: "Excellence",
                  desc: "Nous visons la perfection à chaque intervention. Votre satisfaction est notre priorité absolue.",
                },
                {
                  icon: "🤝",
                  title: "Confiance",
                  desc: "Transparence des prix, ponctualité et professionnalisme. Une relation de confiance avec chaque client.",
                },
                {
                  icon: "💡",
                  title: "Innovation",
                  desc: "Nous utilisons les dernières technologies et produits pour un résultat toujours meilleur.",
                },
              ].map((v) => (
                <div key={v.title} className="bg-gray-light rounded-2xl p-8">
                  <span className="text-3xl mb-3 block">{v.icon}</span>
                  <h4 className="text-lg font-bold text-dark mb-2">{v.title}</h4>
                  <p className="text-sm text-gray leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { value: "2000+", label: "Véhicules lavés" },
              { value: "500+", label: "Clients satisfaits" },
              { value: "0L", label: "D'eau utilisée" },
              { value: "4.9/5", label: "Note moyenne" },
            ].map((s) => (
              <div key={s.label} className="text-center bg-white rounded-2xl border border-gray-100 p-6">
                <div className="text-3xl font-bold text-primary mb-1">{s.value}</div>
                <div className="text-sm text-gray">{s.label}</div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center bg-gradient-to-r from-primary to-primary-dark rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-white mb-3">Rejoignez l&apos;aventure A7san chocho</h3>
            <p className="text-white/80 mb-6">
              Faites le choix d&apos;un lavage responsable et premium pour votre véhicule.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-colors"
            >
              Contactez-nous
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
