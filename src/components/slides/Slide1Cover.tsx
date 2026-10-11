import React from 'react';

interface Slide1CoverProps {
  onNext?: () => void;
}

export const Slide1Cover: React.FC<Slide1CoverProps> = () => {
  return (
    <div className="w-full h-full bg-[#F9F6F0] text-[#1C1917] flex flex-col justify-between p-10 md:p-14 lg:p-16 select-none relative overflow-hidden font-mono-consulting border border-[#E2DDD4]">
      {/* Top Tag & Category */}
      <div className="z-10">
        <div className="text-xs md:text-sm font-semibold tracking-widest text-[#BD4F19] uppercase">
          TERM 1 CAPSTONE · THE FULL READ
        </div>
        <div className="w-12 h-0.5 bg-[#BD4F19] mt-2" />
      </div>

      {/* Main Content Split: Editorial Headline on Left, Brand Card on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center z-10 my-auto">
        {/* Left Column: Bold Editorial Typography */}
        <div className="lg:col-span-7 space-y-6">
          <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-[#1C1917] leading-[1.08]">
            Beyondburg: <br />
            <span className="font-normal italic text-[#44403C]">premium taste, thin proof</span>
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-[#574E4A] max-w-2xl leading-relaxed">
            A Kochi burger brand read through its market, customer journey, unit economics and one testable strategic move.
          </p>

          <p className="text-xs sm:text-sm text-[#857B74] tracking-wide pt-1">
            Palarivattom, Kochi · Field interview + public research + labelled estimates
          </p>

          {/* 3 Metric Pills */}
          <div className="flex flex-wrap items-center gap-3 pt-4">
            <span className="px-4 py-2 rounded-md bg-[#F2E7DC] text-[#7C2D12] border border-[#E2CFBD] font-bold text-xs sm:text-sm tracking-wide shadow-xs">
              ₹390 IN-STORE
            </span>
            <span className="px-4 py-2 rounded-md bg-[#F2E7DC] text-[#7C2D12] border border-[#E2CFBD] font-bold text-xs sm:text-sm tracking-wide shadow-xs">
              35–40% INGREDIENTS
            </span>
            <span className="px-4 py-2 rounded-md bg-[#F2E7DC] text-[#7C2D12] border border-[#E2CFBD] font-bold text-xs sm:text-sm tracking-wide shadow-xs">
              4–5 SCREENS DISCUSSED
            </span>
          </div>
        </div>

        {/* Right Column: Premium Editorial Brand Box */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="w-full max-w-sm rounded-2xl border border-[#DFD7CB] bg-white p-8 shadow-md relative flex flex-col justify-between">
            {/* Pill top right */}
            <div className="self-end mb-4">
              <span className="px-3.5 py-1 rounded-full bg-[#BD4F19] text-white font-bold text-[11px] tracking-wider uppercase shadow-xs">
                KOCHI · SINCE 2017
              </span>
            </div>

            {/* Logo Card */}
            <div className="bg-[#FAF8F5] border border-[#EAE4DC] rounded-xl py-9 px-8 flex items-center justify-center my-3 shadow-inner">
              <img
                src="/assets/beyondburg-logo.svg"
                alt="Beyondburg Official Wordmark"
                className="w-full max-w-[300px] h-14 sm:h-16 object-contain"
              />
            </div>

            {/* Strategic Question */}
            <div className="mt-6 pt-5 border-t border-[#EFEBE4]">
              <p className="text-xs sm:text-sm text-[#44403C] leading-relaxed text-center font-normal">
                The question: can faster ordering improve value without diluting service?
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="z-10 flex items-center justify-between text-[11px] sm:text-xs text-[#857B74] tracking-wider uppercase pt-4 border-t border-[#E6DFD5]">
        <span>SCHOOL OF FUTURE · TERM 1 CAPSTONE</span>
        <span />
      </div>
    </div>
  );
};
