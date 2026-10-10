import React from 'react';
import { ArrowRight, Radio } from 'lucide-react';

interface Slide1CoverProps {
  onNext: () => void;
}

export const Slide1Cover: React.FC<Slide1CoverProps> = ({ onNext }) => {
  return (
    <div className="w-full h-full flex flex-col justify-between p-8 md:p-14 lg:p-20 text-[#F7F4EE] bg-[#171717] overflow-hidden relative">
      {/* Subtle background ambient warmth */}
      <div className="absolute inset-0 bg-radial from-[#2a1e1e]/20 via-[#171717] to-[#171717] pointer-events-none" />

      {/* Top Bar: Official Beyondburg Logo & Metadata */}
      <div className="flex items-center justify-between border-b border-white/10 pb-6 z-10 animate-fade-up">
        <div className="flex items-center gap-5">
          {/* Official Beyondburg logo preserved exactly in crisp white badge */}
          <div className="bg-white px-4 py-2 rounded shadow-md border border-white/20 flex items-center justify-center">
            <img
              src="/assets/beyondburg-logo.png"
              alt="Beyondburg Official Wordmark"
              className="h-7 w-auto object-contain"
            />
          </div>
          <div>
            <span className="text-xs font-mono tracking-widest uppercase text-[#D8D3CA] block">
              Palarivattom, Kochi
            </span>
            <span className="text-[11px] font-sans text-white/50 block">
              Field Research & Assumption-Based Analysis
            </span>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-3 text-xs font-mono text-[#D8D3CA]/80">
          <span className="w-2 h-2 rounded-full bg-[#8D2929] animate-pulse" />
          <span>Business Capstone Read</span>
        </div>
      </div>

      {/* Hero Layout: Editorial Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center z-10 my-auto py-4">
        {/* Left Column: Bold Editorial Typography */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/5 border border-white/10 text-[#D8D3CA] text-xs font-mono uppercase tracking-wider animate-fade-up delay-100">
            <span>Primary Strategic Investigation</span>
          </div>

          <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.08] animate-fade-up delay-150">
            The Full Business Read
          </h1>

          <p className="font-serif-display italic text-xl sm:text-2xl lg:text-3xl text-[#D8D3CA] font-normal leading-relaxed max-w-2xl animate-fade-up delay-200">
            Reducing ordering friction without losing the premium experience
          </p>

          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-[#D8D3CA]/70 font-mono animate-fade-up delay-250">
            <div>
              <span className="text-white font-medium block">CORE RESEARCH QUESTION</span>
              <span>Can self-service ordering accelerate service without diluting hospitality?</span>
            </div>
          </div>
        </div>

        {/* Right Column: High-Quality Smash Burger Photograph */}
        <div className="lg:col-span-5 flex justify-center animate-fade-up delay-200">
          <div className="relative group w-full max-w-md lg:max-w-none">
            {/* Framed Editorial Visual */}
            <div className="relative overflow-hidden rounded-lg shadow-2xl border border-white/15 bg-black/40 aspect-[4/3] sm:aspect-[16/11]">
              <img
                src="/assets/smash-burger-hero.jpg"
                alt="Beyondburg Gourmet Smash Burger"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end text-xs font-mono text-white/90">
                <div>
                  <span className="text-white font-bold block text-sm">Signature Smash Burger</span>
                  <span className="text-white/70 text-[11px]">Butchery Beef • Toasted Brioche • ₹390 Pre-Tax</span>
                </div>
                <span className="text-[10px] uppercase px-2 py-0.5 rounded bg-[#8D2929] text-white">
                  Field Verified
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Remote Clicker Hint & Advance Trigger */}
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 border-t border-white/10 pt-6 z-10 text-xs animate-fade-up delay-300">
        <div className="flex items-center gap-2.5 text-[#D8D3CA] font-mono bg-white/5 px-3.5 py-1.5 rounded border border-white/10">
          <Radio className="w-3.5 h-3.5 text-[#8D2929] animate-pulse" />
          <span>Use your presentation remote or arrow keys to navigate</span>
        </div>

        <button
          onClick={onNext}
          className="group flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-white hover:text-[#D8D3CA] transition-colors"
        >
          <span>Begin Presentation</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#8D2929]" />
        </button>
      </div>
    </div>
  );
};
