"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV_LINKS, WHATSAPP_LINK } from "@/lib/constants";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
            <span className="text-2xl">🍃</span>
            <span className="text-xl font-bold text-primary">
              Eco<span className="text-dark">Shine</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-colors"
            >
              Réserver maintenant
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-light transition-colors"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 rounded-xl text-sm font-medium text-gray hover:text-primary hover:bg-primary-light transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-3 text-center bg-primary hover:bg-primary-dark text-white px-5 py-3 rounded-full text-sm font-semibold transition-colors"
            >
              Réserver sur WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
