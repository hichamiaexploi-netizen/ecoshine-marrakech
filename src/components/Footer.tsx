import Link from "next/link";
import { NAV_LINKS, PHONE_NUMBER, EMAIL, WHATSAPP_LINK, ZONES } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-dark text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🍃</span>
              <span className="text-xl font-bold text-white">
                Eco<span className="text-primary">Shine</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Service premium de lavage automobile sans eau et detailing à domicile à Marrakech.
              Écologique, pratique et professionnel.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Zones */}
          <div>
            <h3 className="text-white font-semibold mb-4">Zones desservies</h3>
            <ul className="space-y-2">
              {ZONES.slice(0, 6).map((zone) => (
                <li key={zone} className="text-sm">{zone}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`} className="hover:text-primary transition-colors">
                  📞 {PHONE_NUMBER}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="hover:text-primary transition-colors">
                  ✉️ {EMAIL}
                </a>
              </li>
              <li>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  💬 WhatsApp
                </a>
              </li>
              <li>📍 Marrakech, Maroc</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} EcoShine Marrakech. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
