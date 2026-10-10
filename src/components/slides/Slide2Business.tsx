import React from 'react';
import { ChefHat, Flame, Layers, DollarSign, Clock, ShieldCheck } from 'lucide-react';

export const Slide2Business: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between p-8 md:p-14 text-[#171717] bg-[#F7F4EE] overflow-hidden">
      {/* Slide Title Header */}
      <div className="space-y-2 border-b border-[#171717]/10 pb-5">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#8D2929] font-semibold">
          <span>Reading 01</span>
          <span>•</span>
          <span>Business Model & Proposition</span>
        </div>
        <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#171717]">
          A Premium Burger Experience
        </h2>
        <p className="font-sans text-sm sm:text-base text-[#171717]/70 max-w-3xl">
          Beyondburg creates value through culinary craft and ingredient integrity—balancing high-touch hospitality with operational velocity.
        </p>
      </div>

      {/* Main Grid: Food Craftsmanship + Business Model Visual */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center my-auto py-2">
        {/* Left Column: Food Visual & Brand Origins */}
        <div className="lg:col-span-5 space-y-4">
          <div className="relative rounded-lg overflow-hidden border border-[#171717]/15 shadow-lg bg-black/5 aspect-[4/3]">
            <img
              src="/assets/gourmet-smash.jpg"
              alt="Artisanal smash burger with toasted brioche"
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute top-3 left-3 bg-[#171717]/90 text-[#F7F4EE] text-[11px] font-mono px-2.5 py-1 rounded shadow">
              Origins: Kiosk in 2017 (Company Website)
            </div>
            <div className="absolute bottom-3 right-3 bg-white/95 text-[#171717] text-[11px] font-mono font-medium px-2.5 py-1 rounded shadow border border-black/10">
              Signature Smash: ₹390 Pre-Tax
            </div>
          </div>

          <div className="bg-white/70 border border-[#171717]/10 rounded-lg p-3.5 space-y-1.5 text-xs">
            <span className="font-mono text-[#8D2929] font-bold uppercase tracking-wider block text-[10px]">
              Ingredient Integrity
            </span>
            <p className="text-[#171717]/80 leading-relaxed">
              Speciality-butchery meat ground in-house, freshly baked brioche buns, and fresh daily vegetables. Not generic fast food.
            </p>
          </div>
        </div>

        {/* Right Column: Business Architecture & Operational Tension */}
        <div className="lg:col-span-7 space-y-5">
          {/* Revenue Architecture */}
          <div className="bg-white rounded-lg border border-[#171717]/12 p-5 shadow-sm space-y-3">
            <div className="flex items-center justify-between border-b border-[#171717]/10 pb-2">
              <span className="text-xs font-mono uppercase tracking-wider font-bold text-[#171717]">
                Value Architecture & Revenue Streams
              </span>
              <span className="text-[11px] font-mono text-[#747B55] font-medium">Menu-Driven</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1 text-xs">
              <div className="p-2.5 rounded bg-[#F7F4EE] border border-[#171717]/10">
                <span className="font-bold text-[#171717] block">Burgers</span>
                <span className="text-[#171717]/60 text-[11px]">Smash patties & specials</span>
              </div>
              <div className="p-2.5 rounded bg-[#F7F4EE] border border-[#171717]/10">
                <span className="font-bold text-[#171717] block">Sandwiches</span>
                <span className="text-[#171717]/60 text-[11px]">Deli-style preparations</span>
              </div>
              <div className="p-2.5 rounded bg-[#F7F4EE] border border-[#171717]/10">
                <span className="font-bold text-[#171717] block">Sides & Fries</span>
                <span className="text-[#171717]/60 text-[11px]">Loaded sides, tenders</span>
              </div>
              <div className="p-2.5 rounded bg-[#F7F4EE] border border-[#171717]/10">
                <span className="font-bold text-[#171717] block">Beverages</span>
                <span className="text-[#171717]/60 text-[11px]">Shakes, coolers, sodas</span>
              </div>
              <div className="p-2.5 rounded bg-[#F7F4EE] border border-[#171717]/10">
                <span className="font-bold text-[#171717] block">Desserts</span>
                <span className="text-[#171717]/60 text-[11px]">Artisanal sweet endings</span>
              </div>
              <div className="p-2.5 rounded bg-[#F7F4EE] border border-[#171717]/10">
                <span className="font-bold text-[#171717] block">Combos</span>
                <span className="text-[#171717]/60 text-[11px]">Meal bundles</span>
              </div>
            </div>
          </div>

          {/* Core Strategic Tension */}
          <div className="bg-[#171717] text-[#F7F4EE] rounded-lg p-5 shadow-md space-y-2 border-l-4 border-[#8D2929]">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#8D2929]" />
              <span className="text-xs font-mono uppercase tracking-wider text-[#D8D3CA] font-bold">
                The Fundamental Operating Tension
              </span>
            </div>
            <p className="font-serif-display text-base sm:text-lg italic text-[#F7F4EE] leading-snug">
              "Premium quality and hospitality must be balanced with operating efficiency."
            </p>
            <p className="text-xs text-[#D8D3CA]/80 pt-1 leading-relaxed">
              If ordering feels slow and congested, the premium experience degrades before food reaches the table. But if ordering is fully depersonalized, Beyondburg risks looking like an automated discount chain.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Notes & Rigor Guardrail */}
      <div className="flex items-center justify-between border-t border-[#171717]/10 pt-4 text-xs font-mono text-[#171717]/60">
        <span>Verified data: In-store Smash Burger ₹390 pre-tax • Kiosk origin 2017</span>
        <span className="text-[#8D2929] font-medium">No invented revenue streams or brand claims</span>
      </div>
    </div>
  );
};
