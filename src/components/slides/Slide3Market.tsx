import React from 'react';

export const Slide3Market: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#F9F6F0] text-[#1C1917] flex flex-col justify-between p-8 md:p-12 lg:p-14 select-none relative overflow-hidden font-mono-consulting border border-[#E2DDD4]">
      {/* Top Header */}
      <div>
        <div className="text-xs md:text-sm font-semibold tracking-widest text-[#BD4F19] uppercase">
          2 · THE MARKET
        </div>
        <div className="w-12 h-0.5 bg-[#BD4F19] mt-1.5 mb-3" />

        <h2 className="font-serif-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1C1917] tracking-tight leading-snug">
          A ₹6.96 lakh crore food-service market—but premium burgers are a niche
        </h2>

        <p className="text-xs sm:text-sm text-[#574E4A] mt-2 leading-relaxed">
          The opportunity is not to capture all of India’s food market; it is to win a specific urban customer and occasion.
        </p>
      </div>

      {/* Top Section: 3 Macro KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-auto">
        {/* KPI 1 */}
        <div className="bg-white border border-[#DFD7CB] rounded-xl p-5 shadow-xs">
          <div className="text-3xl lg:text-4xl font-bold font-serif-display text-[#1C1917] border-b-2 border-[#BD4F19] pb-2">
            ₹6.96L cr
          </div>
          <div className="text-xs sm:text-[13px] text-[#1C1917] font-semibold mt-2.5">
            India food services · 2025
          </div>
          <div className="text-[11px] text-[#857B74] mt-0.5">
            Kearney–Swiggy / IBEF estimate
          </div>
        </div>

        {/* KPI 2 (Green underline) */}
        <div className="bg-white border border-[#DFD7CB] rounded-xl p-5 shadow-xs">
          <div className="text-3xl lg:text-4xl font-bold font-serif-display text-[#1C1917] border-b-2 border-[#2E6038] pb-2">
            45–50%
          </div>
          <div className="text-xs sm:text-[13px] text-[#1C1917] font-semibold mt-2.5">
            Organised share · 2025
          </div>
          <div className="text-[11px] text-[#857B74] mt-0.5">
            Expected to reach ~55% by 2030
          </div>
        </div>

        {/* KPI 3 */}
        <div className="bg-white border border-[#DFD7CB] rounded-xl p-5 shadow-xs">
          <div className="text-3xl lg:text-4xl font-bold font-serif-display text-[#1C1917] border-b-2 border-[#BD4F19] pb-2">
            15–17%
          </div>
          <div className="text-xs sm:text-[13px] text-[#1C1917] font-semibold mt-2.5">
            QSR growth CAGR
          </div>
          <div className="text-[11px] text-[#857B74] mt-0.5">
            2025–2030 estimate in Kearney–Swiggy report
          </div>
        </div>
      </div>

      {/* Middle Section: 3 Comparison Panels */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Card 1 */}
        <div className="bg-[#F3EFE6] border border-[#E2DDD4] rounded-lg p-5 shadow-2xs space-y-2.5 flex flex-col justify-between">
          <div className="text-xs font-bold tracking-wider text-[#BD4F19] uppercase">
            WHO COMPETES
          </div>
          <p className="text-xs sm:text-[13px] text-[#44403C] leading-relaxed">
            Global chains: McDonald’s, Burger King. Local alternatives in Kochi: The Burger Junction and The Burgery.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#F3EFE6] border border-[#E2DDD4] rounded-lg p-5 shadow-2xs space-y-2.5 flex flex-col justify-between">
          <div className="text-xs font-bold tracking-wider text-[#BD4F19] uppercase">
            PREMIUM PRICE SIGNAL
          </div>
          <p className="text-xs sm:text-[13px] text-[#44403C] leading-relaxed">
            Public online listings: Beyondburg Smash ₹470; The Burgery Smash Down ₹420; TBJ Cheese Burger ₹317.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#F3EFE6] border border-[#E2DDD4] rounded-lg p-5 shadow-2xs space-y-2.5 flex flex-col justify-between">
          <div className="text-xs font-bold tracking-wider text-[#BD4F19] uppercase">
            WHY PREMIUM CAN WORK
          </div>
          <p className="text-xs sm:text-[13px] text-[#44403C] leading-relaxed">
            KPMG India CX Report: 30% say consistent high-quality food and service builds trust to pay more; 29% welcome novel flavours.
          </p>
        </div>
      </div>

      {/* Bottom Disclaimer, Footnote & Bottom Bar */}
      <div className="space-y-2.5 pt-1">
        {/* Important Gap Box */}
        <div className="border-l-4 border-[#BD4F19] bg-[#FAF3ED] rounded-r-lg p-3.5 text-xs text-[#44403C] leading-relaxed border border-r-[#E5CEBA] border-t-[#E5CEBA] border-b-[#E5CEBA]">
          <span className="text-[#BD4F19] font-bold">Important gap:</span> no robust, comparable public figure for India’s burger-only market was found. Do not invent a burger TAM; size Beyondburg’s local market bottom-up.
        </div>

        <p className="text-[10px] sm:text-[11px] text-[#857B74]">
          Sources: IBEF/Kearney–Swiggy (Nov 2025); KPMG India CX Report 2025; public menu listings checked 11 Oct 2026.
        </p>

        <div className="flex items-center justify-between text-[11px] text-[#857B74] tracking-wider uppercase pt-2 border-t border-[#E6DFD5]">
          <span>SCHOOL OF FUTURE · TERM 1 CAPSTONE · BEYONDBURG</span>
          <span>04</span>
        </div>
      </div>
    </div>
  );
};
