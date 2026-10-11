import React from 'react';

export const Slide2Business: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#0D172E] text-white flex flex-col justify-between p-8 md:p-12 lg:p-14 select-none relative overflow-hidden font-mono-consulting">
      {/* Top Header */}
      <div>
        <div className="text-xs md:text-sm font-semibold tracking-widest text-[#E59546] uppercase">
          1 · WHAT IT IS
        </div>
        <div className="w-10 h-0.5 bg-[#E59546] mt-1.5 mb-3" />

        <h2 className="font-serif-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-snug">
          A premium burger and deli proposition built on ingredients
        </h2>

        <p className="text-xs sm:text-sm text-[#BAC7D5] mt-2 leading-relaxed">
          Beyondburg’s public brand story highlights speciality-butchery meat, brioche buns and fresh vegetables.
        </p>
      </div>

      {/* Middle: 3 Strategy Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-auto">
        {/* Card 1 */}
        <div className="bg-[#132240] border-l-4 border-[#E59546] rounded-r-lg p-5 shadow-lg flex flex-col justify-between space-y-4">
          <div className="text-xs font-bold tracking-wider text-[#E59546] uppercase">
            WHAT IT SELLS
          </div>
          <div className="space-y-2.5 text-xs sm:text-[13px] text-[#CBD5E1] leading-relaxed">
            <p>Smash burgers, sandwiches, sides and a premium dine-in experience.</p>
            <p>The Smash Burger was named a bestseller in the field interview.</p>
            <p>In-store reference price: ₹390 before tax.</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-[#132240] border-l-4 border-[#E59546] rounded-r-lg p-5 shadow-lg flex flex-col justify-between space-y-4">
          <div className="text-xs font-bold tracking-wider text-[#E59546] uppercase">
            HOW IT REACHES BUYERS
          </div>
          <div className="space-y-2.5 text-xs sm:text-[13px] text-[#CBD5E1] leading-relaxed">
            <p>Discovery: Instagram, social media and word of mouth.</p>
            <p>Purchase: in-store ordering plus third-party delivery platforms.</p>
            <p>Reported channel mix: 77% dine-in / 23% takeaway; manager-reported, not audited.</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-[#132240] border-l-4 border-[#E59546] rounded-r-lg p-5 shadow-lg flex flex-col justify-between space-y-4">
          <div className="text-xs font-bold tracking-wider text-[#E59546] uppercase">
            WHERE THE MARGIN LIVES
          </div>
          <div className="space-y-2.5 text-xs sm:text-[13px] text-[#CBD5E1] leading-relaxed">
            <p>Premium price only works if ingredient quality converts into willingness to pay.</p>
            <p>Costs include ingredients, kitchen labour, rent, utilities, packaging, payment fees and waste.</p>
          </div>
        </div>
      </div>

      {/* Bottom: 4 Key Metric Callouts */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-1">
        {/* Metric 1 */}
        <div className="bg-[#132240]/80 border border-[#1F3660] rounded-lg p-4">
          <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif-display text-white border-b-2 border-[#E59546] pb-2">
            ₹390
          </div>
          <div className="text-xs sm:text-[13px] text-[#F8FAFC] font-semibold mt-2">
            In-store Smash Burger
          </div>
          <div className="text-[11px] text-[#7E8B9B] mt-0.5">
            Before applicable taxes
          </div>
        </div>

        {/* Metric 2 */}
        <div className="bg-[#132240]/80 border border-[#1F3660] rounded-lg p-4">
          <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif-display text-white border-b-2 border-[#E59546] pb-2">
            35–40%
          </div>
          <div className="text-xs sm:text-[13px] text-[#F8FAFC] font-semibold mt-2">
            Ingredient-cost range
          </div>
          <div className="text-[11px] text-[#7E8B9B] mt-0.5">
            Reported across menu; not recipe-specific
          </div>
        </div>

        {/* Metric 3 */}
        <div className="bg-[#132240]/80 border border-[#1F3660] rounded-lg p-4">
          <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif-display text-white border-b-2 border-[#E59546] pb-2">
            60–65%
          </div>
          <div className="text-xs sm:text-[13px] text-[#F8FAFC] font-semibold mt-2">
            After ingredients
          </div>
          <div className="text-[11px] text-[#7E8B9B] mt-0.5">
            Still must cover other costs
          </div>
        </div>

        {/* Metric 4 */}
        <div className="bg-[#132240]/80 border border-[#1F3660] rounded-lg p-4">
          <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif-display text-white border-b-2 border-[#E59546] pb-2">
            2017
          </div>
          <div className="text-xs sm:text-[13px] text-[#F8FAFC] font-semibold mt-2">
            Brand origin
          </div>
          <div className="text-[11px] text-[#7E8B9B] mt-0.5">
            Website describes kiosk beginnings
          </div>
        </div>
      </div>

      {/* Footnote & Bottom Bar */}
      <div className="space-y-2 pt-2">
        <p className="text-[10px] sm:text-[11px] text-[#64748B]">
          Sources: Beyondburg website; field interview with Operations Manager Mohammed Aslam. Cost percentages are manager-reported.
        </p>
        <div className="flex items-center justify-between text-[11px] text-[#64748B] tracking-wider uppercase pt-2 border-t border-[#1E365E]/50">
          <span>SCHOOL OF FUTURE · TERM 1 CAPSTONE · BEYONDBURG</span>
          <span>02</span>
        </div>
      </div>
    </div>
  );
};
