"use client";

import { useState, useRef, useCallback } from "react";

interface BeforeAfterSliderProps {
  beforeLabel?: string;
  afterLabel?: string;
  beforeEmoji?: string;
  afterEmoji?: string;
  beforeColor?: string;
  afterColor?: string;
  height?: string;
}

export default function BeforeAfterSlider({
  beforeLabel = "Avant",
  afterLabel = "Après",
  beforeEmoji = "😟",
  afterEmoji = "✨",
  beforeColor = "bg-gradient-to-br from-gray-300 to-gray-400",
  afterColor = "bg-gradient-to-br from-teal-200 to-teal-400",
  height = "h-80 sm:h-96",
}: BeforeAfterSliderProps) {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const update = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setPos(Math.max(2, Math.min(98, ((clientX - rect.left) / rect.width) * 100)));
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative ${height} rounded-3xl overflow-hidden cursor-col-resize select-none shadow-xl border border-gray-200`}
      onMouseDown={() => { dragging.current = true; }}
      onMouseUp={() => { dragging.current = false; }}
      onMouseLeave={() => { dragging.current = false; }}
      onMouseMove={(e) => { if (dragging.current) update(e.clientX); }}
      onTouchMove={(e) => update(e.touches[0].clientX)}
      onClick={(e) => update(e.clientX)}
    >
      {/* After */}
      <div className={`absolute inset-0 ${afterColor} flex flex-col items-center justify-center`}>
        <span className="text-7xl sm:text-8xl mb-3">{afterEmoji}</span>
        <span className="bg-green-500 text-white text-sm font-bold px-4 py-1.5 rounded-full">
          {afterLabel}
        </span>
        <p className="mt-2 text-green-900/60 text-sm font-medium">Résultat A7san chocho</p>
      </div>

      {/* Before */}
      <div
        className={`absolute inset-0 ${beforeColor} flex flex-col items-center justify-center`}
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <span className="text-7xl sm:text-8xl mb-3">{beforeEmoji}</span>
        <span className="bg-red-500 text-white text-sm font-bold px-4 py-1.5 rounded-full">
          {beforeLabel}
        </span>
        <p className="mt-2 text-gray-600 text-sm font-medium">Avant notre passage</p>
      </div>

      {/* Slider */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white/90 z-10 shadow-lg"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center border-3 border-primary">
          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M18 8l4 4-4 4M6 8l-4 4 4 4" />
          </svg>
        </div>
      </div>

      {/* Instruction */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 bg-black/50 backdrop-blur-sm text-white text-xs font-medium px-4 py-2 rounded-full">
        👆 Glissez pour comparer
      </div>
    </div>
  );
}
