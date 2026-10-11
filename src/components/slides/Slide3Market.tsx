import React from 'react';

export const Slide3Market: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#0D172E] text-white flex flex-col justify-between p-8 md:p-12 lg:p-14 select-none relative overflow-hidden font-mono-consulting">
      {/* Top Header */}
      <div>
        <div className="text-xs md:text-sm font-semibold tracking-widest text-[#E59546] uppercase">
          2 · THE MARKET
        </div>
        <div className="w-10 h-0.5 bg-[#E59546] mt-1.5 mb-3" />

        <h2 className="font-serif-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-snug">
          A ₹6.96 lakh crore food-service market—but premium burgers are a niche
        </h2>

        <p className="text-xs sm:text-sm text-[#BAC7D5] mt-2 leading-relaxed">
          The opportunity is not to capture all of India’s food market; it is to win a specific urban customer and occasion.
        </p>
      </div>

      {/* Top Section: 3 KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-auto">
        {/* KPI 1 */}
        <div className="bg-[#132240] border border-[#1F3660] rounded-lg p-5 shadow-lg">
          <div className="text-3xl lg:text-4xl font-bold font-serif-display text-white border-b-2 border-[#E59546] pb-2">
            ₹6.96L cr
          </div>
          <div className="text-xs sm:text-[13px] text-[#F8FAFC] font-semibold mt-2.5">
            India food services · 2025
          </div>
          <div className="text-[11px] text-[#7E8B9B] mt-0.5">
            Kearney–Swiggy / IBEF estimate
          </div>
        </div>

        {/* KPI 2 (Green underline) */}
        <div className="bg-[#132240] border border-[#1F3660] rounded-lg p-5 shadow-lg">
          <div className="text-3xl lg:text-4xl font-bold font-serif-display text-white border-b-2 border-[#5FA777] pb-2">
            45–50%
          </div>
          <div className="text-xs sm:text-[13px] text-[#F8FAFC] font-semibold mt-2.5">
            Organised share · 2025
          </div>
          <div className="text-[11px] text-[#7E8B9B] mt-0.5">
            Expected to reach ~55% by 2030
          </div>
        </div>

        {/* KPI 3 */}
        <div className="bg-[#132240] border border-[#1F3660] rounded-lg p-5 shadow-lg">
          <div className="text-3xl lg:text-4xl font-bold font-serif-display text-white border-b-2 border-[#E59546] pb-2">
            15–17%
          </div>
          <div className="text-xs sm:text-[13px] text-[#F8FAFC] font-semibold mt-2.5">
            QSR growth CAGR
          </div>
          <div className="text-[11px] text-[#7E8B9B] mt-0.5">
            2025–2030 estimate in Kearney–Swiggy report
          </div>
        </div>
      </div>

      {/* Middle Section: 3 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Card 1 */}
        <div className="bg-[#132240] border-l-4 border-[#E59546] rounded-r-lg p-5 shadow-lg flex flex-col justify-between space-y-3">
          <div className="text-xs font-bold tracking-wider text-[#E59546] uppercase">
            WHO COMPETES
          </div>
          <p className="text-xs sm:text-[13px] text-[#CBD5E1] leading-relaxed">
            Global chains: McDonald’s, Burger King. Local alternatives in Kochi: The Burger Junction and The Burgery.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#132240] border-l-4 border-[#E59546] rounded-r-lg p-5 shadow-lg flex flex-col justify-between space-y-3">
          <div className="text-xs font-bold tracking-wider text-[#E59546] uppercase">
            PREMIUM PRICE SIGNAL
          </div>
          <p className="text-xs sm:text-[13px] text-[#CBD5E1] leading-relaxed">
            Public online listings: Beyondburg Smash ₹470; The Burgery Smash Down ₹420; TBJ Cheese Burger ₹317.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#132240] border-l-4 border-[#E59546] rounded-r-lg p-5 shadow-lg flex flex-col justify-between space-y-3">
          <div className="text-xs font-bold tracking-wider text-[#E59546] uppercase">
            WHY PREMIUM CAN WORK
          </div>
          <p className="text-xs sm:text-[13px] text-[#CBD5E1] leading-relaxed">
            KPMG India CX Report: 30% say consistent high-quality food and service builds trust to pay more; 29% welcome novel flavours.
          </p>
        </div>
      </div>

      {/* Bottom Disclaimer, Footnote & Bottom Bar */}
      <div className="space-y-3 pt-2">
        {/* Important Gap Box */}
        <div className="border border-[#1F3660] bg-[#111F3B] rounded-lg p-3.5 text-xs text-[#CBD5E1] leading-relaxed">
          <span className="text-[#E59546] font-semibold">Important gap:</span> no robust, comparable public figure for India’s burger-only market was found. Do not invent a burger TAM; size Beyondburg’s local market bottom-up.
        </div>

        <p className="text-[10px] sm:text-[11px] text-[#64748B]">
          Sources: IBEF/Kearney–Swiggy (Nov 2025); KPMG India CX Report 2025; public menu listings checked 11 Oct 2026.
        </p>

        <div className="flex items-center justify-between text-[11px] text-[#64748B] tracking-wider uppercase pt-2 border-t border-[#1E365E]/50">
          <span>SCHOOL OF FUTURE · TERM 1 CAPSTONE · BEYONDBURG</span>
          <span>03</span>
        </div>
      </div>
    </div>
  );
};
