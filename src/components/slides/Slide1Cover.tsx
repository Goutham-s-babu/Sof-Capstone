import React from 'react';

interface Slide1CoverProps {
  onNext?: () => void;
}

export const Slide1Cover: React.FC<Slide1CoverProps> = () => {
  return (
    <div className="w-full h-full bg-[#0D172E] text-white flex flex-col justify-between p-10 md:p-14 lg:p-16 select-none relative overflow-hidden font-mono-consulting">
      {/* Top Tag & Category */}
      <div className="z-10">
        <div className="text-xs md:text-sm font-semibold tracking-widest text-[#E59546] uppercase">
          TERM 1 CAPSTONE · THE FULL READ
        </div>
        <div className="w-10 h-0.5 bg-[#E59546] mt-2" />
      </div>

      {/* Main Content Split: Editorial Headline on Left, Brand Card on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center z-10 my-auto">
        {/* Left Column */}
        <div className="lg:col-span-7 space-y-6">
          <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.08]">
            Beyondburg: <br />
            <span className="font-normal">premium taste, thin proof</span>
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-[#BAC7D5] max-w-2xl leading-relaxed">
            A Kochi burger brand read through its market, customer journey, unit economics and one testable strategic move.
          </p>

          <p className="text-xs sm:text-sm text-[#7E8B9B] tracking-wide pt-2">
            Palarivattom, Kochi · Field interview + public research + labelled estimates
          </p>

          {/* 3 Metric Pills */}
          <div className="flex flex-wrap items-center gap-3 pt-6">
            <span className="px-3.5 py-1.5 rounded bg-[#F4B979] text-[#1A1108] font-bold text-xs sm:text-sm tracking-wide shadow-sm">
              ₹390 IN-STORE
            </span>
            <span className="px-3.5 py-1.5 rounded bg-[#F4B979] text-[#1A1108] font-bold text-xs sm:text-sm tracking-wide shadow-sm">
              35–40% INGREDIENTS
            </span>
            <span className="px-3.5 py-1.5 rounded bg-[#F4B979] text-[#1A1108] font-bold text-xs sm:text-sm tracking-wide shadow-sm">
              4–5 SCREENS DISCUSSED
            </span>
          </div>
        </div>

        {/* Right Column: High-End Brand Box */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="w-full max-w-sm rounded-2xl border border-[#233E6E] bg-[#111F3B]/90 p-7 shadow-2xl relative flex flex-col justify-between">
            {/* Pill top right */}
            <div className="self-end mb-4">
              <span className="px-3 py-1 rounded bg-[#F4B979] text-[#1A1108] font-bold text-xs tracking-wider uppercase">
                KOCHI · SINCE 2017
              </span>
            </div>

            {/* Logo Card */}
            <div className="bg-white rounded-xl p-8 flex items-center justify-center my-3 shadow-inner">
              <img
                src="/assets/beyondburg-logo.png"
                alt="Beyondburg"
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </div>

            {/* Strategic Question */}
            <div className="mt-6 pt-4 border-t border-[#1E365E]">
              <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed text-center font-normal">
                The question: can faster ordering improve value without diluting service?
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="z-10 flex items-center justify-between text-[11px] sm:text-xs text-[#64748B] tracking-wider uppercase pt-4 border-t border-[#1E365E]/50">
        <span>SCHOOL OF FUTURE · TERM 1 CAPSTONE</span>
        <span />
      </div>
    </div>
  );
};
