import React from 'react';

export const Slide8AIStrategy: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#0D172E] text-white flex flex-col justify-between p-8 md:p-12 lg:p-14 select-none relative overflow-hidden font-mono-consulting">
      {/* Top Header */}
      <div>
        <div className="text-xs md:text-sm font-semibold tracking-widest text-[#E59546] uppercase">
          7 · WHERE INTELLIGENCE CHANGES THE GAME
        </div>
        <div className="w-10 h-0.5 bg-[#E59546] mt-1.5 mb-3" />

        <h2 className="font-serif-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-snug">
          Implement AI-assisted guided self-ordering
        </h2>

        <p className="text-xs sm:text-sm text-[#BAC7D5] mt-2 leading-relaxed">
          Deploy a controlled 4-screen pilot with an AI menu assistant, staff oversight and measurable guardrails.
        </p>
      </div>

      {/* Top 3 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-auto">
        {/* Column 1: AI Customer Flow */}
        <div className="bg-[#132240] border-l-4 border-[#E59546] rounded-r-lg p-5 shadow-lg space-y-3">
          <div className="text-xs font-bold tracking-wider text-[#E59546] uppercase">
            AI CUSTOMER FLOW
          </div>
          <div className="space-y-1.5 text-xs sm:text-[13px] text-[#CBD5E1] leading-relaxed">
            <p>1. Ask taste/budget preferences.</p>
            <p>2. Recommend 2–3 items from approved menu data.</p>
            <p>3. Explain ingredients and add-ons.</p>
            <p>4. Confirm customer choice before sending order to POS.</p>
          </div>
        </div>

        {/* Column 2: Human + Safety Control */}
        <div className="bg-[#132240] border-l-4 border-[#E59546] rounded-r-lg p-5 shadow-lg space-y-3">
          <div className="text-xs font-bold tracking-wider text-[#E59546] uppercase">
            HUMAN + SAFETY CONTROL
          </div>
          <p className="text-xs sm:text-[13px] text-[#CBD5E1] leading-relaxed">
            Use approved menu/allergen data only; never guess allergen safety. Staff handles complex requests, refunds and payment failures.
          </p>
        </div>

        {/* Column 3: Pilot Success Metrics */}
        <div className="bg-[#132240] border-l-4 border-[#E59546] rounded-r-lg p-5 shadow-lg space-y-3">
          <div className="text-xs font-bold tracking-wider text-[#E59546] uppercase">
            PILOT SUCCESS METRICS
          </div>
          <p className="text-xs sm:text-[13px] text-[#CBD5E1] leading-relaxed">
            Target: 15% lower median ordering time. Guardrails: no increase in billing errors or meaningful satisfaction decline.
          </p>
        </div>
      </div>

      {/* Investment Hurdle Section */}
      <div className="space-y-3">
        <div className="text-[11px] sm:text-xs font-bold tracking-wider text-[#E59546] uppercase">
          ILLUSTRATIVE INVESTMENT HURDLE — VENDOR QUOTES REQUIRED
        </div>

        {/* 4 Metric Boxes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Box 1 */}
          <div className="bg-[#132240]/90 border border-[#1F3660] rounded-lg p-4">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif-display text-white border-b-2 border-[#E59546] pb-2">
              4 screens
            </div>
            <div className="text-xs sm:text-[13px] text-[#F8FAFC] font-semibold mt-2">
              Pilot scope
            </div>
            <div className="text-[11px] text-[#7E8B9B] mt-0.5">
              Management discussed 4–5
            </div>
          </div>

          {/* Box 2 */}
          <div className="bg-[#132240]/90 border border-[#1F3660] rounded-lg p-4">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif-display text-white border-b-2 border-[#E59546] pb-2">
              ₹1.2L
            </div>
            <div className="text-xs sm:text-[13px] text-[#F8FAFC] font-semibold mt-2">
              Setup assumption
            </div>
            <div className="text-[11px] text-[#7E8B9B] mt-0.5">
              ₹30,000 × 4 screens
            </div>
          </div>

          {/* Box 3 */}
          <div className="bg-[#132240]/90 border border-[#1F3660] rounded-lg p-4">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif-display text-white border-b-2 border-[#E59546] pb-2">
              ₹10k/mo
            </div>
            <div className="text-xs sm:text-[13px] text-[#F8FAFC] font-semibold mt-2">
              Recurring assumption
            </div>
            <div className="text-[11px] text-[#7E8B9B] mt-0.5">
              Software/support placeholder
            </div>
          </div>

          {/* Box 4 */}
          <div className="bg-[#132240]/90 border border-[#1F3660] rounded-lg p-4">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif-display text-white border-b-2 border-[#E59546] pb-2">
              ₹20k/mo
            </div>
            <div className="text-xs sm:text-[13px] text-[#F8FAFC] font-semibold mt-2">
              12-month hurdle
            </div>
            <div className="text-[11px] text-[#7E8B9B] mt-0.5">
              ₹10k + ₹1.2L/12
            </div>
          </div>
        </div>

        {/* Calculation Callouts */}
        <div className="space-y-1 pt-1 text-xs sm:text-[13px]">
          <p className="text-[#CBD5E1]">
            At assumed 35% contribution margin, required incremental sales = ₹20,000 ÷ 35% = <span className="text-[#F8FAFC] font-semibold">₹57,143/month</span>.
          </p>
          <p className="text-[#CBD5E1]">
            At ₹1,127 reported AOV: ₹57,143 ÷ ₹1,127 ≈ <span className="text-[#F8FAFC] font-semibold">51 incremental orders/month</span> to cover the hurdle.
          </p>
        </div>
      </div>

      {/* Footnote & Footer */}
      <div className="space-y-2 pt-2">
        <p className="text-[10px] sm:text-[11px] text-[#64748B]">
          Implementation includes menu/POS integration, privacy notice, fallback mode, staff training and vendor quote validation.
        </p>
        <div className="flex items-center justify-between text-[11px] text-[#64748B] tracking-wider uppercase pt-2 border-t border-[#1E365E]/50">
          <span>SCHOOL OF FUTURE · TERM 1 CAPSTONE · BEYONDBURG</span>
          <span>08</span>
        </div>
      </div>
    </div>
  );
};
