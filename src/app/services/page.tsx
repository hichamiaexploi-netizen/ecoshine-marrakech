import { Metadata } from "next";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import { SERVICES, WHATSAPP_LINK } from "@/lib/constants";

const SERVICE_IMAGES = [
  "/images/car-wash-1.jpg",
  "/images/car-wash-2.jpg",
  "/images/car-wash-3.jpg",
  "/images/car-wash-4.jpg",
  "/images/before-after-1.jpg",
  "/images/car-wash-1.jpg",
];

export const metadata: Metadata = {
  title: "Nos Services — A7san chocho Marrakech",
  description: "Découvrez nos services de lavage auto sans eau et detailing à domicile à Marrakech.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="py-20 bg-gradient-to-b from-primary/5 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Nos services"
            title="Des prestations professionnelles à domicile"
            description="Chaque service est réalisé avec des produits premium et des techniques professionnelles pour un résultat irréprochable."
          />
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {SERVICES.map((service, i) => (
              <div
                key={service.id}
                className={`flex flex-col lg:flex-row gap-8 items-center rounded-3xl p-8 lg:p-12 border border-gray-100 hover:shadow-lg transition-shadow ${
                  i % 2 === 1 ? "lg:flex-row-reverse bg-gray-light" : "bg-white"
                }`}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">{service.icon}</span>
                    <h2 className="text-2xl font-bold text-dark">{service.name}</h2>
                  </div>
                  <p className="text-gray leading-relaxed mb-6">{service.description}</p>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {service.features.map((f) => (
                      <div key={f} className="flex items-center gap-2 text-sm">
                        <svg className="w-4 h-4 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray">{f}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-2 text-sm text-primary font-semibold bg-primary/10 px-4 py-2 rounded-full">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {service.duration}
                    </span>
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-full text-sm font-semibold transition-colors"
                    >
                      Réserver
                    </a>
                  </div>
                </div>
                <div className="relative w-full lg:w-80 h-48 lg:h-56 rounded-2xl overflow-hidden">
                  <Image
                    src={SERVICE_IMAGES[i % SERVICE_IMAGES.length]}
                    alt={service.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Besoin d&apos;un service sur mesure ?</h2>
          <p className="text-white/80 mb-8">Contactez-nous pour un devis personnalisé adapté à vos besoins.</p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transition-colors"
          >
            Demander un devis
          </a>
        </div>
      </section>
    </>
  );
}
