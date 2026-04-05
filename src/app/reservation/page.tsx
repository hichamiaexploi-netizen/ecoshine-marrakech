"use client";

import { useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import { SERVICES, ZONES, WHATSAPP_NUMBER } from "@/lib/constants";

interface FormData {
  name: string;
  phone: string;
  whatsapp: string;
  address: string;
  neighborhood: string;
  vehicleType: string;
  service: string;
  date: string;
  time: string;
  comments: string;
}

const initialForm: FormData = {
  name: "",
  phone: "",
  whatsapp: "",
  address: "",
  neighborhood: "",
  vehicleType: "",
  service: "",
  date: "",
  time: "",
  comments: "",
};

export default function ReservationPage() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(): boolean {
    const errs: Partial<FormData> = {};
    if (!form.name.trim()) errs.name = "Le nom est requis";
    if (!form.phone.trim()) errs.phone = "Le téléphone est requis";
    if (!form.whatsapp.trim()) errs.whatsapp = "Le WhatsApp est requis";
    if (!form.address.trim()) errs.address = "L'adresse est requise";
    if (!form.neighborhood) errs.neighborhood = "Le quartier est requis";
    if (!form.vehicleType) errs.vehicleType = "Le type de véhicule est requis";
    if (!form.service) errs.service = "Le service est requis";
    if (!form.date) errs.date = "La date est requise";
    if (!form.time) errs.time = "L'heure est requise";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  }

  function getWhatsAppLink() {
    const msg = `Bonjour A7san chocho ! Je souhaite réserver :

📋 *Réservation*
👤 Nom : ${form.name}
📞 Tél : ${form.phone}
💬 WhatsApp : ${form.whatsapp}
📍 Adresse : ${form.address}
🏘️ Quartier : ${form.neighborhood}
🚗 Véhicule : ${form.vehicleType}
✨ Service : ${form.service}
📅 Date : ${form.date}
⏰ Heure : ${form.time}
${form.comments ? `💬 Commentaire : ${form.comments}` : ""}`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  if (submitted) {
    return (
      <section className="py-20">
        <div className="max-w-xl mx-auto px-4 text-center">
          <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-dark mb-4">Réservation envoyée !</h2>
          <p className="text-gray mb-8 leading-relaxed">
            Merci {form.name} ! Votre demande a bien été enregistrée. Pour confirmer rapidement
            votre créneau, envoyez-nous un message sur WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-full font-semibold transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Confirmer sur WhatsApp
            </a>
            <button
              onClick={() => { setSubmitted(false); setForm(initialForm); }}
              className="inline-flex items-center justify-center gap-2 bg-gray-light hover:bg-gray-200 text-dark px-8 py-4 rounded-full font-semibold transition-colors"
            >
              Nouvelle réservation
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="py-20 bg-gradient-to-b from-primary/5 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Réservation"
            title="Réservez votre lavage"
            description="Remplissez le formulaire ci-dessous et nous vous contacterons pour confirmer votre créneau."
          />
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-dark mb-2">Nom complet *</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Votre nom"
                className={`w-full px-4 py-3 rounded-xl border ${errors.name ? "border-red-400" : "border-gray-200"} focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors`}
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

            {/* Phone + WhatsApp */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-dark mb-2">Téléphone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="06 00 00 00 00"
                  className={`w-full px-4 py-3 rounded-xl border ${errors.phone ? "border-red-400" : "border-gray-200"} focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors`}
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-dark mb-2">WhatsApp *</label>
                <input
                  type="tel"
                  name="whatsapp"
                  value={form.whatsapp}
                  onChange={handleChange}
                  placeholder="06 00 00 00 00"
                  className={`w-full px-4 py-3 rounded-xl border ${errors.whatsapp ? "border-red-400" : "border-gray-200"} focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors`}
                />
                {errors.whatsapp && <p className="text-red-500 text-xs mt-1">{errors.whatsapp}</p>}
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-semibold text-dark mb-2">Adresse *</label>
              <input
                type="text"
                name="address"
                value={form.address}
                onChange={handleChange}
                placeholder="Votre adresse complète"
                className={`w-full px-4 py-3 rounded-xl border ${errors.address ? "border-red-400" : "border-gray-200"} focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors`}
              />
              {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
            </div>

            {/* Neighborhood + Vehicle */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-dark mb-2">Quartier *</label>
                <select
                  name="neighborhood"
                  value={form.neighborhood}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border ${errors.neighborhood ? "border-red-400" : "border-gray-200"} focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-white`}
                >
                  <option value="">Sélectionner</option>
                  {ZONES.map((z) => (
                    <option key={z} value={z}>{z}</option>
                  ))}
                  <option value="Autre">Autre</option>
                </select>
                {errors.neighborhood && <p className="text-red-500 text-xs mt-1">{errors.neighborhood}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-dark mb-2">Type de véhicule *</label>
                <select
                  name="vehicleType"
                  value={form.vehicleType}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border ${errors.vehicleType ? "border-red-400" : "border-gray-200"} focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-white`}
                >
                  <option value="">Sélectionner</option>
                  <option value="Citadine">Citadine</option>
                  <option value="Berline">Berline</option>
                  <option value="SUV">SUV / 4x4</option>
                  <option value="Utilitaire">Utilitaire</option>
                  <option value="Moto">Moto</option>
                </select>
                {errors.vehicleType && <p className="text-red-500 text-xs mt-1">{errors.vehicleType}</p>}
              </div>
            </div>

            {/* Service */}
            <div>
              <label className="block text-sm font-semibold text-dark mb-2">Service souhaité *</label>
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border ${errors.service ? "border-red-400" : "border-gray-200"} focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-white`}
              >
                <option value="">Sélectionner</option>
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.name}>{s.name} — {s.duration}</option>
                ))}
              </select>
              {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
            </div>

            {/* Date + Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-dark mb-2">Date souhaitée *</label>
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border ${errors.date ? "border-red-400" : "border-gray-200"} focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors`}
                />
                {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-dark mb-2">Heure souhaitée *</label>
                <input
                  type="time"
                  name="time"
                  value={form.time}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border ${errors.time ? "border-red-400" : "border-gray-200"} focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors`}
                />
                {errors.time && <p className="text-red-500 text-xs mt-1">{errors.time}</p>}
              </div>
            </div>

            {/* Comments */}
            <div>
              <label className="block text-sm font-semibold text-dark mb-2">Commentaires</label>
              <textarea
                name="comments"
                value={form.comments}
                onChange={handleChange}
                rows={3}
                placeholder="Précisions supplémentaires..."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-dark text-white py-4 rounded-full font-semibold text-lg transition-colors"
            >
              Envoyer la réservation
            </button>

            <p className="text-center text-xs text-gray">
              Vous pouvez aussi réserver directement via{" "}
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">
                WhatsApp
              </a>
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
