"use client";

import { useState, useRef, useCallback } from "react";

interface BeforeAfterCardProps {
  title: string;
  category: string;
  beforeDesc: string;
  afterDesc: string;
  beforeColor: string;
  afterColor: string;
}

export default function BeforeAfterCard({
  title,
  category,
  beforeDesc,
  afterDesc,
  beforeColor,
  afterColor,
}: BeforeAfterCardProps) {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percent);
  }, []);

  const handleMouseDown = () => { isDragging.current = true; };
  const handleMouseUp = () => { isDragging.current = false; };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) updatePosition(e.clientX);
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    updatePosition(e.touches[0].clientX);
  };
  const handleClick = (e: React.MouseEvent) => {
    updatePosition(e.clientX);
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
      <div
        ref={containerRef}
        className="relative h-64 sm:h-72 cursor-col-resize select-none overflow-hidden"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onClick={handleClick}
      >
        {/* After (full background) */}
        <div
          className={`absolute inset-0 ${afterColor} flex items-center justify-center`}
        >
          <div className="text-center px-4">
            <span className="text-5xl mb-2 block">✨</span>
            <span className="text-sm font-bold text-green-700 bg-green-100 px-3 py-1 rounded-full">
              APRÈS
            </span>
          </div>
        </div>

        {/* Before (clipped overlay) */}
        <div
          className={`absolute inset-0 ${beforeColor} flex items-center justify-center`}
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          <div className="text-center px-4">
            <span className="text-5xl mb-2 block">😟</span>
            <span className="text-sm font-bold text-red-700 bg-red-100 px-3 py-1 rounded-full">
              AVANT
            </span>
          </div>
        </div>

        {/* Slider line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg z-10"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-primary">
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
            </svg>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute bottom-3 left-3 z-10">
          <span className="bg-red-500/90 text-white text-xs font-bold px-2.5 py-1 rounded-full backdrop-blur-sm">
            Avant
          </span>
        </div>
        <div className="absolute bottom-3 right-3 z-10">
          <span className="bg-green-500/90 text-white text-xs font-bold px-2.5 py-1 rounded-full backdrop-blur-sm">
            Après
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-5">
        <span className="text-xs font-semibold text-primary uppercase tracking-wider">
          {category}
        </span>
        <h3 className="text-base font-bold text-dark mt-1 mb-3">{title}</h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-red-50 rounded-xl p-3">
            <span className="text-xs font-bold text-red-600 block mb-1">Avant</span>
            <p className="text-xs text-red-900/70 leading-relaxed">{beforeDesc}</p>
          </div>
          <div className="bg-green-50 rounded-xl p-3">
            <span className="text-xs font-bold text-green-600 block mb-1">Après</span>
            <p className="text-xs text-green-900/70 leading-relaxed">{afterDesc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
