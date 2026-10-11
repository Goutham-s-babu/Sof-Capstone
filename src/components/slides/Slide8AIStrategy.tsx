import React from 'react';

export const Slide8AIStrategy: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#F9F6F0] text-[#1C1917] flex flex-col justify-between p-8 md:p-12 lg:p-14 select-none relative overflow-hidden font-mono-consulting border border-[#E2DDD4]">
      {/* Top Header */}
      <div>
        <div className="text-xs md:text-sm font-semibold tracking-widest text-[#BD4F19] uppercase">
          7 · WHERE INTELLIGENCE CHANGES THE GAME
        </div>
        <div className="w-12 h-0.5 bg-[#BD4F19] mt-1.5 mb-3" />

        <h2 className="font-serif-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1C1917] tracking-tight leading-snug">
          Implement AI-assisted guided self-ordering
        </h2>

        <p className="text-xs sm:text-sm text-[#574E4A] mt-2 leading-relaxed">
          Deploy a controlled 4-screen pilot with an AI menu assistant, staff oversight and measurable guardrails.
        </p>
      </div>

      {/* Top 3 Implementation Columns */}
      <div className="bg-white border border-[#DFD7CB] rounded-xl shadow-xs overflow-hidden my-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#EFEAE2]">
          {/* Column 1: AI Customer Flow */}
          <div className="p-5 space-y-2.5 flex flex-col justify-between">
            <div className="text-xs font-bold tracking-wider text-[#BD4F19] uppercase">
              AI CUSTOMER FLOW
            </div>
            <div className="space-y-1.5 text-xs sm:text-[13px] text-[#44403C] leading-relaxed">
              <p>1. Ask taste/budget preferences.</p>
              <p>2. Recommend 2–3 items from approved menu data.</p>
              <p>3. Explain ingredients and add-ons.</p>
              <p>4. Confirm customer choice before sending order to POS.</p>
            </div>
          </div>

          {/* Column 2: Human + Safety Control */}
          <div className="p-5 space-y-2.5 flex flex-col justify-between">
            <div className="text-xs font-bold tracking-wider text-[#BD4F19] uppercase">
              HUMAN + SAFETY CONTROL
            </div>
            <p className="text-xs sm:text-[13px] text-[#44403C] leading-relaxed">
              Use approved menu/allergen data only; never guess allergen safety. Staff handles complex requests, refunds and payment failures.
            </p>
          </div>

          {/* Column 3: Pilot Success Metrics */}
          <div className="p-5 space-y-2.5 flex flex-col justify-between">
            <div className="text-xs font-bold tracking-wider text-[#BD4F19] uppercase">
              PILOT SUCCESS METRICS
            </div>
            <p className="text-xs sm:text-[13px] text-[#44403C] leading-relaxed">
              Target: 15% lower median ordering time. Guardrails: no increase in billing errors or meaningful satisfaction decline.
            </p>
          </div>
        </div>
      </div>

      {/* Investment Hurdle Section */}
      <div className="space-y-3">
        <div className="text-[11px] sm:text-xs font-bold tracking-wider text-[#BD4F19] uppercase">
          ILLUSTRATIVE INVESTMENT HURDLE — VENDOR QUOTES REQUIRED
        </div>

        {/* 4 Metric Boxes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Box 1 */}
          <div className="bg-[#F3EFE6] border border-[#E2DDD4] rounded-lg p-4">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif-display text-[#1C1917] border-b border-[#BD4F19] pb-2">
              4 screens
            </div>
            <div className="text-xs sm:text-[13px] text-[#1C1917] font-semibold mt-2">
              Pilot scope
            </div>
            <div className="text-[11px] text-[#857B74] mt-0.5">
              Management discussed 4–5
            </div>
          </div>

          {/* Box 2 */}
          <div className="bg-[#F3EFE6] border border-[#E2DDD4] rounded-lg p-4">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif-display text-[#1C1917] border-b border-[#BD4F19] pb-2">
              ₹1.2L
            </div>
            <div className="text-xs sm:text-[13px] text-[#1C1917] font-semibold mt-2">
              Setup assumption
            </div>
            <div className="text-[11px] text-[#857B74] mt-0.5">
              ₹30,000 × 4 screens
            </div>
          </div>

          {/* Box 3 */}
          <div className="bg-[#F3EFE6] border border-[#E2DDD4] rounded-lg p-4">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif-display text-[#1C1917] border-b border-[#BD4F19] pb-2">
              ₹10k/mo
            </div>
            <div className="text-xs sm:text-[13px] text-[#1C1917] font-semibold mt-2">
              Recurring assumption
            </div>
            <div className="text-[11px] text-[#857B74] mt-0.5">
              Software/support placeholder
            </div>
          </div>

          {/* Box 4 */}
          <div className="bg-[#F3EFE6] border border-[#E2DDD4] rounded-lg p-4">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif-display text-[#1C1917] border-b border-[#BD4F19] pb-2">
              ₹20k/mo
            </div>
            <div className="text-xs sm:text-[13px] text-[#1C1917] font-semibold mt-2">
              12-month hurdle
            </div>
            <div className="text-[11px] text-[#857B74] mt-0.5">
              ₹10k + ₹1.2L/12
            </div>
          </div>
        </div>

        {/* Calculation Callouts */}
        <div className="bg-[#FAF3ED] border-l-4 border-[#BD4F19] border border-r-[#E5CEBA] border-t-[#E5CEBA] border-b-[#E5CEBA] rounded-r-lg p-3 space-y-1 text-xs sm:text-[13px]">
          <p className="text-[#44403C]">
            At assumed 35% contribution margin, required incremental sales = ₹20,000 ÷ 35% = <span className="text-[#1C1917] font-bold">₹57,143/month</span>.
          </p>
          <p className="text-[#44403C]">
            At ₹1,127 reported AOV: ₹57,143 ÷ ₹1,127 ≈ <span className="text-[#1C1917] font-bold">51 incremental orders/month</span> to cover the hurdle.
          </p>
        </div>
      </div>

      {/* Footnote & Footer */}
      <div className="space-y-1.5 pt-1">
        <p className="text-[10px] sm:text-[11px] text-[#857B74]">
          Implementation includes menu/POS integration, privacy notice, fallback mode, staff training and vendor quote validation.
        </p>
        <div className="flex items-center justify-between text-[11px] text-[#857B74] tracking-wider uppercase pt-2 border-t border-[#E6DFD5]">
          <span>SCHOOL OF FUTURE · TERM 1 CAPSTONE · BEYONDBURG</span>
          <span>09</span>
        </div>
      </div>
    </div>
  );
};
