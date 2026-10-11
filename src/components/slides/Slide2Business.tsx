import React from 'react';

export const Slide2Business: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#F9F6F0] text-[#1C1917] flex flex-col justify-between p-8 md:p-12 lg:p-14 select-none relative overflow-hidden font-mono-consulting border border-[#E2DDD4]">
      {/* Top Header */}
      <div>
        <div className="text-xs md:text-sm font-semibold tracking-widest text-[#BD4F19] uppercase">
          1 · WHAT IT IS
        </div>
        <div className="w-12 h-0.5 bg-[#BD4F19] mt-1.5 mb-3" />

        <h2 className="font-serif-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1C1917] tracking-tight leading-snug">
          A premium burger and deli proposition built on ingredients
        </h2>

        <p className="text-xs sm:text-sm text-[#574E4A] mt-2 leading-relaxed">
          Beyondburg’s public brand story highlights speciality-butchery meat, brioche buns and fresh vegetables.
        </p>
      </div>

      {/* Middle: Editorial 3-Column Briefing Matrix */}
      <div className="bg-white border border-[#DFD7CB] rounded-xl shadow-xs overflow-hidden my-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#EFEAE2]">
          {/* Column 1 */}
          <div className="p-5 lg:p-6 space-y-3.5 flex flex-col justify-between">
            <div className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#BD4F19]" />
              <span className="text-xs font-bold tracking-wider text-[#BD4F19] uppercase">
                WHAT IT SELLS
              </span>
            </div>
            <div className="space-y-2 text-xs sm:text-[13px] text-[#44403C] leading-relaxed">
              <p>Smash burgers, sandwiches, sides and a premium dine-in experience.</p>
              <p>The Smash Burger was named a bestseller in the field interview.</p>
              <p>In-store reference price: ₹390 before tax.</p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="p-5 lg:p-6 space-y-3.5 flex flex-col justify-between">
            <div className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#BD4F19]" />
              <span className="text-xs font-bold tracking-wider text-[#BD4F19] uppercase">
                HOW IT REACHES BUYERS
              </span>
            </div>
            <div className="space-y-2 text-xs sm:text-[13px] text-[#44403C] leading-relaxed">
              <p>Discovery: Instagram, social media and word of mouth.</p>
              <p>Purchase: in-store ordering plus third-party delivery platforms.</p>
              <p>Reported channel mix: 77% dine-in / 23% takeaway; manager-reported, not audited.</p>
            </div>
          </div>

          {/* Column 3 */}
          <div className="p-5 lg:p-6 space-y-3.5 flex flex-col justify-between">
            <div className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#BD4F19]" />
              <span className="text-xs font-bold tracking-wider text-[#BD4F19] uppercase">
                WHERE THE MARGIN LIVES
              </span>
            </div>
            <div className="space-y-2 text-xs sm:text-[13px] text-[#44403C] leading-relaxed">
              <p>Premium price only works if ingredient quality converts into willingness to pay.</p>
              <p>Costs include ingredients, kitchen labour, rent, utilities, packaging, payment fees and waste.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom: 4 Executive Metric Callouts */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Metric 1 */}
        <div className="bg-[#F3EFE6] border border-[#E2DDD4] rounded-lg p-4">
          <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif-display text-[#1C1917] border-b border-[#BD4F19] pb-2">
            ₹390
          </div>
          <div className="text-xs sm:text-[13px] text-[#1C1917] font-semibold mt-2">
            In-store Smash Burger
          </div>
          <div className="text-[11px] text-[#857B74] mt-0.5">
            Before applicable taxes
          </div>
        </div>

        {/* Metric 2 */}
        <div className="bg-[#F3EFE6] border border-[#E2DDD4] rounded-lg p-4">
          <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif-display text-[#1C1917] border-b border-[#BD4F19] pb-2">
            35–40%
          </div>
          <div className="text-xs sm:text-[13px] text-[#1C1917] font-semibold mt-2">
            Ingredient-cost range
          </div>
          <div className="text-[11px] text-[#857B74] mt-0.5">
            Reported across menu; not recipe-specific
          </div>
        </div>

        {/* Metric 3 */}
        <div className="bg-[#F3EFE6] border border-[#E2DDD4] rounded-lg p-4">
          <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif-display text-[#1C1917] border-b border-[#BD4F19] pb-2">
            60–65%
          </div>
          <div className="text-xs sm:text-[13px] text-[#1C1917] font-semibold mt-2">
            After ingredients
          </div>
          <div className="text-[11px] text-[#857B74] mt-0.5">
            Still must cover other costs
          </div>
        </div>

        {/* Metric 4 */}
        <div className="bg-[#F3EFE6] border border-[#E2DDD4] rounded-lg p-4">
          <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif-display text-[#1C1917] border-b border-[#BD4F19] pb-2">
            2017
          </div>
          <div className="text-xs sm:text-[13px] text-[#1C1917] font-semibold mt-2">
            Brand origin
          </div>
          <div className="text-[11px] text-[#857B74] mt-0.5">
            Website describes kiosk beginnings
          </div>
        </div>
      </div>

      {/* Footnote & Bottom Bar */}
      <div className="space-y-2 pt-1">
        <p className="text-[10px] sm:text-[11px] text-[#857B74]">
          Sources: Beyondburg website; field interview with Operations Manager Mohammed Aslam. Cost percentages are manager-reported.
        </p>
        <div className="flex items-center justify-between text-[11px] text-[#857B74] tracking-wider uppercase pt-2 border-t border-[#E6DFD5]">
          <span>SCHOOL OF FUTURE · TERM 1 CAPSTONE · BEYONDBURG</span>
          <span>02</span>
        </div>
      </div>
    </div>
  );
};
