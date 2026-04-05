import Link from "next/link";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import FAQAccordion from "@/components/FAQAccordion";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import BeforeAfterCard from "@/components/BeforeAfterCard";
import {
  SERVICES,
  PRICING,
  ZONES,
  TESTIMONIALS,
  FAQS,
  BEFORE_AFTER,
  WHATSAPP_LINK,
} from "@/lib/constants";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-navy via-dark to-navy overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
          <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="max-w-3xl flex-1">
            <span className="inline-flex items-center gap-2 bg-primary/20 text-primary-light px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm border border-primary/20">
              🍃 Écologique &bull; À domicile &bull; Premium
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Votre voiture brille,{" "}
              <span className="text-primary">sans eau</span> et{" "}
              <span className="text-primary">sans bouger</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-400 max-w-2xl leading-relaxed">
              Service premium de lavage auto sans eau et detailing à domicile à Marrakech.
              On vient chez vous ou au travail, avec tout le matériel nécessaire.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:shadow-lg hover:shadow-[#25D366]/25 hover:scale-105"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Réserver sur WhatsApp
              </a>
              <Link
                href="/tarifs"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-full text-lg font-semibold transition-all backdrop-blur-sm"
              >
                Voir les tarifs
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-400">
              <span className="flex items-center gap-2">✅ 100% sans eau</span>
              <span className="flex items-center gap-2">✅ À domicile ou au travail</span>
              <span className="flex items-center gap-2">✅ Produits écologiques</span>
              <span className="flex items-center gap-2">✅ 7j/7</span>
            </div>
          </div>
          <div className="hidden lg:block flex-shrink-0">
            <div className="relative w-80 h-80 xl:w-96 xl:h-96">
              <Image
                src="/images/before-after-1.jpg"
                alt="Résultat avant après lavage auto"
                fill
                className="object-cover rounded-3xl border-4 border-white/10 shadow-2xl"
                priority
              />
              <div className="absolute -bottom-4 -right-4 bg-primary text-white px-4 py-2 rounded-2xl text-sm font-bold shadow-lg">
                Avant / Après ✨
              </div>
            </div>
          </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: "2000+", label: "Véhicules lavés" },
                { value: "95%", label: "D'eau économisée" },
                { value: "4.9/5", label: "Satisfaction client" },
                { value: "30min", label: "Temps moyen" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl sm:text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Pourquoi nous choisir"
            title="Le lavage auto réinventé"
            description="Nous combinons technologie écologique, praticité et excellence pour une expérience de lavage unique à Marrakech."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "💧",
                title: "Sans eau",
                desc: "Technologie écologique qui ne nécessite pas une seule goutte d'eau. Bon pour votre voiture et la planète.",
              },
              {
                icon: "🏠",
                title: "À domicile",
                desc: "On vient chez vous, au bureau, ou où vous voulez. Zéro déplacement, zéro perte de temps.",
              },
              {
                icon: "⭐",
                title: "Qualité premium",
                desc: "Produits haut de gamme et techniques professionnelles pour un résultat impeccable à chaque fois.",
              },
              {
                icon: "⏱️",
                title: "Gain de temps",
                desc: "Pendant qu'on s'occupe de votre voiture, vous continuez votre journée tranquillement.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-gray-light rounded-2xl p-8 text-center hover:shadow-lg transition-shadow"
              >
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="text-lg font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-sm text-gray leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section className="py-20 bg-gradient-to-b from-navy to-dark overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-2">
              Avant / Après
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              La différence A7san chocho
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Découvrez la transformation de nos clients. Glissez pour comparer le résultat avant et après notre intervention.
            </p>
          </div>

          {/* Hero slider */}
          <div className="max-w-3xl mx-auto mb-12">
            <BeforeAfterSlider
              beforeColor="bg-gradient-to-br from-stone-400 via-stone-500 to-stone-600"
              afterColor="bg-gradient-to-br from-teal-300 via-emerald-400 to-teal-500"
              beforeEmoji="🚗"
              afterEmoji="🚗"
              beforeLabel="Avant A7san chocho"
              afterLabel="Après A7san chocho"
            />
          </div>

          {/* Grid of before/after cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BEFORE_AFTER.slice(0, 3).map((item, i) => {
              const colors = [
                { before: "bg-gradient-to-br from-stone-300 to-stone-400", after: "bg-gradient-to-br from-teal-200 to-teal-400" },
                { before: "bg-gradient-to-br from-amber-200 to-amber-400", after: "bg-gradient-to-br from-sky-200 to-sky-400" },
                { before: "bg-gradient-to-br from-orange-200 to-orange-400", after: "bg-gradient-to-br from-emerald-200 to-emerald-400" },
              ];
              return (
                <BeforeAfterCard
                  key={item.id}
                  title={item.title}
                  category={item.category}
                  beforeDesc={item.beforeDesc}
                  afterDesc={item.afterDesc}
                  beforeColor={colors[i].before}
                  afterColor={colors[i].after}
                />
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/galerie"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              Voir toute la galerie
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Nos services"
            title="Des prestations pour chaque besoin"
            description="Du lavage express au detailing complet, nous avons la solution adaptée à votre véhicule."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow border border-gray-100"
              >
                <span className="text-3xl mb-4 block">{service.icon}</span>
                <h3 className="text-lg font-bold text-dark mb-2">{service.name}</h3>
                <p className="text-sm text-gray mb-4 leading-relaxed">{service.description}</p>
                <div className="flex items-center gap-2 text-xs text-primary font-semibold">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {service.duration}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              Voir tous nos services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Nos tarifs"
            title="Des prix transparents"
            description="Pas de surprise. Des tarifs clairs et compétitifs pour un service de qualité supérieure."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {PRICING.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-8 border-2 transition-shadow hover:shadow-xl ${
                  plan.popular
                    ? "border-primary bg-primary/5 shadow-lg"
                    : "border-gray-100 bg-white"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full">
                    Populaire
                  </span>
                )}
                <h3 className="text-lg font-bold text-dark">{plan.name}</h3>
                <p className="text-sm text-gray mt-1">{plan.description}</p>
                <div className="mt-6 mb-6">
                  <span className="text-4xl font-bold text-dark">{plan.price}</span>
                  <span className="text-lg text-gray ml-1">{plan.unit}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray">
                      <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center py-3 rounded-full font-semibold text-sm transition-colors ${
                    plan.popular
                      ? "bg-primary hover:bg-primary-dark text-white"
                      : "bg-gray-light hover:bg-gray-200 text-dark"
                  }`}
                >
                  Réserver
                </a>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/tarifs"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              Voir tous les tarifs
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Zones */}
      <section className="py-20 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Zones desservies"
            title="Nous intervenons partout à Marrakech"
            description="Nos équipes couvrent les principaux quartiers de Marrakech pour un service rapide et ponctuel."
          />
          <div className="flex flex-wrap justify-center gap-4">
            {ZONES.map((zone) => (
              <span
                key={zone}
                className="bg-white px-6 py-3 rounded-full text-sm font-medium text-dark border border-gray-200 hover:border-primary hover:text-primary transition-colors cursor-default"
              >
                📍 {zone}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Comment ça marche"
            title="Simple comme 1, 2, 3"
            description="Réservez en quelques secondes et profitez d'une voiture impeccable sans lever le petit doigt."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "1",
                title: "Réservez",
                desc: "Contactez-nous via WhatsApp, téléphone ou formulaire en ligne. Choisissez votre créneau.",
              },
              {
                step: "2",
                title: "On arrive",
                desc: "Notre équipe se déplace chez vous ou au travail avec tout le matériel nécessaire.",
              },
              {
                step: "3",
                title: "Profitez",
                desc: "Votre voiture est impeccable ! Continuez votre journée pendant qu'on fait briller votre véhicule.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-sm text-gray leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Témoignages"
            title="Ce que disent nos clients"
            description="La satisfaction de nos clients est notre meilleure publicité."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <span key={j} className="text-amber-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-sm text-gray leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-semibold text-dark text-sm">{t.name}</p>
                  <p className="text-xs text-gray">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="FAQ"
            title="Questions fréquentes"
            description="Tout ce que vous devez savoir sur notre service de lavage sans eau."
          />
          <FAQAccordion items={FAQS.slice(0, 4)} />
          <div className="text-center mt-8">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              Voir toutes les questions
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Prêt à faire briller votre voiture ?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Réservez maintenant et profitez d&apos;un lavage écologique premium directement
            chez vous. Résultat garanti.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transition-all hover:shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Réserver sur WhatsApp
            </a>
            <Link
              href="/reservation"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg font-semibold transition-all"
            >
              Formulaire de réservation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
