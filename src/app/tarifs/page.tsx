import { Metadata } from "next";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import { PRICING, WHATSAPP_LINK } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Tarifs — A7san chocho Marrakech",
  description: "Nos tarifs transparents pour le lavage auto sans eau et detailing à domicile à Marrakech.",
};

export default function TarifsPage() {
  return (
    <>
      <section className="py-20 bg-gradient-to-b from-primary/5 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Nos tarifs"
            title="Des prix justes et transparents"
            description="Choisissez la formule qui vous convient. Pas de frais cachés, pas de surprise."
          />
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRICING.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-3xl p-8 border-2 transition-all hover:shadow-xl ${
                  plan.popular
                    ? "border-primary bg-primary/5 shadow-lg scale-105"
                    : "border-gray-100 bg-white"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full">
                    Le plus populaire
                  </span>
                )}
                <h3 className="text-xl font-bold text-dark">{plan.name}</h3>
                <p className="text-sm text-gray mt-1 mb-6">{plan.description}</p>
                <div className="mb-8">
                  <span className="text-5xl font-bold text-dark">{plan.price}</span>
                  <span className="text-xl text-gray ml-2">{plan.unit}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray">{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center py-3.5 rounded-full font-semibold transition-colors ${
                    plan.popular
                      ? "bg-primary hover:bg-primary-dark text-white"
                      : "bg-gray-light hover:bg-gray-200 text-dark"
                  }`}
                >
                  Réserver maintenant
                </a>
              </div>
            ))}
          </div>

          {/* Additional services */}
          <div className="mt-16 bg-gray-light rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-dark mb-6 text-center">Services additionnels</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {[
                { name: "Nettoyage moteur", price: "100 DH" },
                { name: "Traitement cuir", price: "120 DH" },
                { name: "Rénovation phares", price: "150 DH" },
                { name: "Traitement céramique", price: "À partir de 800 DH" },
                { name: "Shampoing moquette", price: "80 DH" },
                { name: "Désodorisation", price: "60 DH" },
              ].map((s) => (
                <div key={s.name} className="flex items-center justify-between bg-white rounded-xl px-6 py-4">
                  <span className="text-sm font-medium text-dark">{s.name}</span>
                  <span className="text-sm font-bold text-primary">{s.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Subscriptions */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-primary to-primary-dark rounded-3xl p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-white mb-3">Forfaits mensuels disponibles</h3>
              <p className="text-white/80 mb-6">
                Profitez de tarifs préférentiels avec nos abonnements mensuels. Jusqu&apos;à 30% d&apos;économie.
              </p>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-colors"
              >
                En savoir plus
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
