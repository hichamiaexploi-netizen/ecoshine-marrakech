"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
          >
            <span className="font-semibold text-dark pr-4">{item.question}</span>
            <svg
              className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
          >
            <p className="px-6 pb-5 text-gray leading-relaxed">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
