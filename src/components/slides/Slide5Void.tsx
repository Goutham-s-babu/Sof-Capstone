import React from 'react';

export const Slide5Void: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#0D172E] text-white flex flex-col justify-between p-8 md:p-12 lg:p-14 select-none relative overflow-hidden font-mono-consulting">
      {/* Top Header */}
      <div>
        <div className="text-xs md:text-sm font-semibold tracking-widest text-[#E59546] uppercase">
          4 · THE VOID QUESTION
        </div>
        <div className="w-10 h-0.5 bg-[#E59546] mt-1.5 mb-3" />

        <h2 className="font-serif-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-snug">
          How much time is lost—and what could it be worth?
        </h2>

        <p className="text-xs sm:text-sm text-[#BAC7D5] mt-2 leading-relaxed">
          The manager identified decision and billing delays; baseline queue duration and abandoned orders have not been measured.
        </p>
      </div>

      {/* Top 3 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-auto">
        {/* Card 1 */}
        <div className="bg-[#132240] border-l-4 border-[#E59546] rounded-r-lg p-5 shadow-lg flex flex-col justify-between space-y-3">
          <div className="text-xs font-bold tracking-wider text-[#E59546] uppercase">
            THE VOID
          </div>
          <p className="text-xs sm:text-[13px] text-[#CBD5E1] leading-relaxed">
            Time spent deciding, entering the order and paying may create a bottleneck.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#132240] border-l-4 border-[#E59546] rounded-r-lg p-5 shadow-lg flex flex-col justify-between space-y-3">
          <div className="text-xs font-bold tracking-wider text-[#E59546] uppercase">
            THE TEST
          </div>
          <p className="text-xs sm:text-[13px] text-[#CBD5E1] leading-relaxed">
            Time-stamp 100 orders in rush and non-rush periods before changing the process.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#132240] border-l-4 border-[#E59546] rounded-r-lg p-5 shadow-lg flex flex-col justify-between space-y-3">
          <div className="text-xs font-bold tracking-wider text-[#E59546] uppercase">
            THE GUARDRAIL
          </div>
          <p className="text-xs sm:text-[13px] text-[#CBD5E1] leading-relaxed">
            Faster checkout is not a win if errors rise or customers feel pushed.
          </p>
        </div>
      </div>

      {/* Scenario Section */}
      <div className="space-y-3">
        <div className="text-[11px] sm:text-xs font-bold tracking-wider text-[#E59546] uppercase">
          ILLUSTRATIVE SCENARIO — ASSUMED 4-MINUTE BASELINE, NOT MEASURED
        </div>

        {/* 4 Metric Blocks */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Box 1 */}
          <div className="bg-[#132240]/90 border border-[#1F3660] rounded-lg p-4">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif-display text-white border-b-2 border-[#E59546] pb-2">
              4.0 min
            </div>
            <div className="text-xs sm:text-[13px] text-[#F8FAFC] font-semibold mt-2">
              Assumed baseline
            </div>
            <div className="text-[11px] text-[#7E8B9B] mt-0.5">
              Median order-to-payment time
            </div>
          </div>

          {/* Box 2 */}
          <div className="bg-[#132240]/90 border border-[#1F3660] rounded-lg p-4">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif-display text-white border-b-2 border-[#E59546] pb-2">
              3.4 min
            </div>
            <div className="text-xs sm:text-[13px] text-[#F8FAFC] font-semibold mt-2">
              15% faster target
            </div>
            <div className="text-[11px] text-[#7E8B9B] mt-0.5">
              0.6 min / 36 sec saved
            </div>
          </div>

          {/* Box 3 */}
          <div className="bg-[#132240]/90 border border-[#1F3660] rounded-lg p-4">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif-display text-white border-b-2 border-[#E59546] pb-2">
              100 orders
            </div>
            <div className="text-xs sm:text-[13px] text-[#F8FAFC] font-semibold mt-2">
              Illustrative sample/day
            </div>
            <div className="text-[11px] text-[#7E8B9B] mt-0.5">
              Sample size to validate
            </div>
          </div>

          {/* Box 4 */}
          <div className="bg-[#132240]/90 border border-[#1F3660] rounded-lg p-4">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif-display text-white border-b-2 border-[#E59546] pb-2">
              60 min
            </div>
            <div className="text-xs sm:text-[13px] text-[#F8FAFC] font-semibold mt-2">
              Time released/day
            </div>
            <div className="text-[11px] text-[#7E8B9B] mt-0.5">
              100 × 36 seconds
            </div>
          </div>
        </div>

        {/* Bottom 2 Highlight Boxes (side by side) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
          <div className="bg-[#132240]/80 border-l-4 border-[#E59546] rounded-r-lg p-3.5">
            <div className="text-xs font-bold text-[#E59546] uppercase mb-1">
              REVENUE LINK
            </div>
            <p className="text-xs sm:text-[13px] text-[#CBD5E1]">
              At ₹1,127 AOV, 10 genuinely recovered orders = ₹11,270 sales.
            </p>
          </div>

          <div className="bg-[#132240]/80 border-l-4 border-[#E59546] rounded-r-lg p-3.5">
            <div className="text-xs font-bold text-[#E59546] uppercase mb-1">
              CONTRIBUTION LINK
            </div>
            <p className="text-xs sm:text-[13px] text-[#CBD5E1]">
              At assumed 35% contribution, that is ₹3,945 before screen costs.
            </p>
          </div>
        </div>
      </div>

      {/* Caveat & Footer */}
      <div className="space-y-2 pt-2">
        <p className="text-[10px] sm:text-[11px] text-[#64748B]">
          Recovered orders are hypothetical; only count them if baseline data shows abandonment and the pilot demonstrably reduces it.
        </p>
        <div className="flex items-center justify-between text-[11px] text-[#64748B] tracking-wider uppercase pt-2 border-t border-[#1E365E]/50">
          <span>SCHOOL OF FUTURE · TERM 1 CAPSTONE · BEYONDBURG</span>
          <span>05</span>
        </div>
      </div>
    </div>
  );
};
