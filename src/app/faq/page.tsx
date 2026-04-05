import { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import FAQAccordion from "@/components/FAQAccordion";
import { FAQS, WHATSAPP_LINK } from "@/lib/constants";

export const metadata: Metadata = {
  title: "FAQ — A7san chocho Marrakech",
  description: "Questions fréquentes sur notre service de lavage auto sans eau à Marrakech.",
};

export default function FAQPage() {
  return (
    <>
      <section className="py-20 bg-gradient-to-b from-primary/5 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="FAQ"
            title="Questions fréquentes"
            description="Retrouvez les réponses aux questions les plus posées par nos clients."
          />
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQAccordion items={FAQS} />

          <div className="mt-12 text-center bg-gray-light rounded-3xl p-8">
            <h3 className="text-xl font-bold text-dark mb-3">
              Vous avez une autre question ?
            </h3>
            <p className="text-gray mb-6 text-sm">
              N&apos;hésitez pas à nous contacter. Nous vous répondrons dans les plus brefs délais.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full font-semibold text-sm transition-colors"
            >
              Poser une question
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
