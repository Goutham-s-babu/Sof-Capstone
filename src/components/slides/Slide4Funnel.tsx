import React from 'react';

export const Slide4Funnel: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#F9F6F0] text-[#1C1917] flex flex-col justify-between p-8 md:p-12 lg:p-14 select-none relative overflow-hidden font-mono-consulting border border-[#E2DDD4]">
      {/* Top Header */}
      <div>
        <div className="text-xs md:text-sm font-semibold tracking-widest text-[#BD4F19] uppercase">
          3 · HOW IT SELLS AND SPEAKS
        </div>
        <div className="w-12 h-0.5 bg-[#BD4F19] mt-1.5 mb-3" />

        <h2 className="font-serif-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1C1917] tracking-tight leading-snug">
          Discovery brings attention; checkout must convert it
        </h2>

        <p className="text-xs sm:text-sm text-[#574E4A] mt-2 leading-relaxed">
          The funnel is a planning example, not measured Beyondburg conversion. AOV uses the Operations Manager's reported ₹1,127.
        </p>
      </div>

      {/* Top Section: 3 Knowledge Cards in an Editorial White Surface */}
      <div className="bg-white border border-[#DFD7CB] rounded-xl shadow-xs overflow-hidden my-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#EFEAE2]">
          {/* Card 1 */}
          <div className="p-5 space-y-2.5 flex flex-col justify-between">
            <div className="text-xs font-bold tracking-wider text-[#BD4F19] uppercase">
              WHAT WE KNOW
            </div>
            <p className="text-xs sm:text-[13px] text-[#44403C] leading-relaxed">
              Instagram/social media and word of mouth are reported discovery channels. Online food platforms are also visible.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-5 space-y-2.5 flex flex-col justify-between">
            <div className="text-xs font-bold tracking-wider text-[#BD4F19] uppercase">
              WHAT WE DON'T KNOW
            </div>
            <p className="text-xs sm:text-[13px] text-[#44403C] leading-relaxed">
              No tracked count yet for menu views → order starts → paid orders → repeat customers.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-5 space-y-2.5 flex flex-col justify-between">
            <div className="text-xs font-bold tracking-wider text-[#BD4F19] uppercase">
              WHAT TO TRACK
            </div>
            <p className="text-xs sm:text-[13px] text-[#44403C] leading-relaxed">
              Use platform analytics + POS totals. Count each stage for the same period.
            </p>
          </div>
        </div>
      </div>

      {/* Funnel Pipeline Architecture */}
      <div className="space-y-3">
        <div className="text-[11px] sm:text-xs font-bold tracking-wider text-[#BD4F19] uppercase">
          ILLUSTRATIVE FUNNEL PER 1,000 MENU VISITS — ASSUMED CONVERSION RATES
        </div>

        {/* 4 Connected Funnel Steps */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Step 1 */}
          <div className="bg-[#F3EFE6] border border-[#E2DDD4] rounded-lg p-4 relative">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif-display text-[#1C1917] border-b border-[#BD4F19] pb-2">
              1,000
            </div>
            <div className="text-xs sm:text-[13px] text-[#1C1917] font-semibold mt-2">
              Menu visits
            </div>
            <div className="text-[11px] text-[#857B74] mt-0.5">
              Illustrative
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-[#F3EFE6] border border-[#E2DDD4] rounded-lg p-4 relative">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif-display text-[#1C1917] border-b border-[#BD4F19] pb-2">
              300
            </div>
            <div className="text-xs sm:text-[13px] text-[#1C1917] font-semibold mt-2">
              Order starts
            </div>
            <div className="text-[11px] text-[#857B74] mt-0.5">
              30% assumed
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-[#F3EFE6] border border-[#E2DDD4] rounded-lg p-4 relative">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif-display text-[#1C1917] border-b border-[#BD4F19] pb-2">
              240
            </div>
            <div className="text-xs sm:text-[13px] text-[#1C1917] font-semibold mt-2">
              Paid orders
            </div>
            <div className="text-[11px] text-[#857B74] mt-0.5">
              80% of starts
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-[#F3EFE6] border border-[#E2DDD4] rounded-lg p-4 relative">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif-display text-[#1C1917] border-b border-[#BD4F19] pb-2">
              24%
            </div>
            <div className="text-xs sm:text-[13px] text-[#1C1917] font-semibold mt-2">
              Visit-to-paid
            </div>
            <div className="text-[11px] text-[#857B74] mt-0.5">
              240 / 1,000
            </div>
          </div>
        </div>

        {/* Calculation Callout Banner */}
        <div className="bg-[#FAF3ED] border-l-4 border-[#BD4F19] border border-r-[#E5CEBA] border-t-[#E5CEBA] border-b-[#E5CEBA] rounded-r-lg p-3">
          <p className="text-xs sm:text-sm font-semibold text-[#1C1917]">
            240 paid orders × ₹1,127 reported AOV = ₹2,70,480 gross sales in this illustrative cohort.
          </p>
        </div>
      </div>

      {/* Caveat & Footer */}
      <div className="space-y-1.5 pt-1">
        <p className="text-[10px] sm:text-[11px] text-[#857B74]">
          This is not a current sales estimate. Use actual menu views, order starts and POS paid orders to calculate the real conversion rate.
        </p>
        <div className="flex items-center justify-between text-[11px] text-[#857B74] tracking-wider uppercase pt-2 border-t border-[#E6DFD5]">
          <span>SCHOOL OF FUTURE · TERM 1 CAPSTONE · BEYONDBURG</span>
          <span>05</span>
        </div>
      </div>
    </div>
  );
};
