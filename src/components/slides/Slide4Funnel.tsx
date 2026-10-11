import React from 'react';

export const Slide4Funnel: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#0D172E] text-white flex flex-col justify-between p-8 md:p-12 lg:p-14 select-none relative overflow-hidden font-mono-consulting">
      {/* Top Header */}
      <div>
        <div className="text-xs md:text-sm font-semibold tracking-widest text-[#E59546] uppercase">
          3 · HOW IT SELLS AND SPEAKS
        </div>
        <div className="w-10 h-0.5 bg-[#E59546] mt-1.5 mb-3" />

        <h2 className="font-serif-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-snug">
          Discovery brings attention; checkout must convert it
        </h2>

        <p className="text-xs sm:text-sm text-[#BAC7D5] mt-2 leading-relaxed">
          The funnel is a planning example, not measured Beyondburg conversion. AOV uses the Operations Manager's reported ₹1,127.
        </p>
      </div>

      {/* Top Section: 3 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-auto">
        {/* Card 1 */}
        <div className="bg-[#132240] border-l-4 border-[#E59546] rounded-r-lg p-5 shadow-lg flex flex-col justify-between space-y-3">
          <div className="text-xs font-bold tracking-wider text-[#E59546] uppercase">
            WHAT WE KNOW
          </div>
          <p className="text-xs sm:text-[13px] text-[#CBD5E1] leading-relaxed">
            Instagram/social media and word of mouth are reported discovery channels. Online food platforms are also visible.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#132240] border-l-4 border-[#E59546] rounded-r-lg p-5 shadow-lg flex flex-col justify-between space-y-3">
          <div className="text-xs font-bold tracking-wider text-[#E59546] uppercase">
            WHAT WE DON'T KNOW
          </div>
          <p className="text-xs sm:text-[13px] text-[#CBD5E1] leading-relaxed">
            No tracked count yet for menu views → order starts → paid orders → repeat customers.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#132240] border-l-4 border-[#E59546] rounded-r-lg p-5 shadow-lg flex flex-col justify-between space-y-3">
          <div className="text-xs font-bold tracking-wider text-[#E59546] uppercase">
            WHAT TO TRACK
          </div>
          <p className="text-xs sm:text-[13px] text-[#CBD5E1] leading-relaxed">
            Use platform analytics + POS totals. Count each stage for the same period.
          </p>
        </div>
      </div>

      {/* Funnel Section */}
      <div className="space-y-3">
        <div className="text-[11px] sm:text-xs font-bold tracking-wider text-[#E59546] uppercase">
          ILLUSTRATIVE FUNNEL PER 1,000 MENU VISITS — ASSUMED CONVERSION RATES
        </div>

        {/* 4 Funnel Blocks */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Step 1 */}
          <div className="bg-[#132240]/90 border border-[#1F3660] rounded-lg p-4 relative">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif-display text-white border-b-2 border-[#E59546] pb-2">
              1,000
            </div>
            <div className="text-xs sm:text-[13px] text-[#F8FAFC] font-semibold mt-2">
              Menu visits
            </div>
            <div className="text-[11px] text-[#7E8B9B] mt-0.5">
              Illustrative
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-[#132240]/90 border border-[#1F3660] rounded-lg p-4 relative">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif-display text-white border-b-2 border-[#E59546] pb-2">
              300
            </div>
            <div className="text-xs sm:text-[13px] text-[#F8FAFC] font-semibold mt-2">
              Order starts
            </div>
            <div className="text-[11px] text-[#7E8B9B] mt-0.5">
              30% assumed
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-[#132240]/90 border border-[#1F3660] rounded-lg p-4 relative">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif-display text-white border-b-2 border-[#E59546] pb-2">
              240
            </div>
            <div className="text-xs sm:text-[13px] text-[#F8FAFC] font-semibold mt-2">
              Paid orders
            </div>
            <div className="text-[11px] text-[#7E8B9B] mt-0.5">
              80% of starts
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-[#132240]/90 border border-[#1F3660] rounded-lg p-4 relative">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif-display text-white border-b-2 border-[#E59546] pb-2">
              24%
            </div>
            <div className="text-xs sm:text-[13px] text-[#F8FAFC] font-semibold mt-2">
              Visit-to-paid
            </div>
            <div className="text-[11px] text-[#7E8B9B] mt-0.5">
              240 / 1,000
            </div>
          </div>
        </div>

        {/* Calculation Callout */}
        <div className="pt-2">
          <p className="text-xs sm:text-sm font-semibold text-[#F8FAFC]">
            240 paid orders × ₹1,127 reported AOV = ₹2,70,480 gross sales in this illustrative cohort.
          </p>
        </div>
      </div>

      {/* Caveat & Footer */}
      <div className="space-y-2 pt-2">
        <p className="text-[10px] sm:text-[11px] text-[#64748B]">
          This is not a current sales estimate. Use actual menu views, order starts and POS paid orders to calculate the real conversion rate.
        </p>
        <div className="flex items-center justify-between text-[11px] text-[#64748B] tracking-wider uppercase pt-2 border-t border-[#1E365E]/50">
          <span>SCHOOL OF FUTURE · TERM 1 CAPSTONE · BEYONDBURG</span>
          <span>04</span>
        </div>
      </div>
    </div>
  );
};
