import React from 'react';

export const Slide5Void: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#F9F6F0] text-[#1C1917] flex flex-col justify-between p-8 md:p-12 lg:p-14 select-none relative overflow-hidden font-mono-consulting border border-[#E2DDD4]">
      {/* Top Header */}
      <div>
        <div className="text-xs md:text-sm font-semibold tracking-widest text-[#BD4F19] uppercase">
          4 · THE VOID QUESTION
        </div>
        <div className="w-12 h-0.5 bg-[#BD4F19] mt-1.5 mb-3" />

        <h2 className="font-serif-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1C1917] tracking-tight leading-snug">
          How much time is lost—and what could it be worth?
        </h2>

        <p className="text-xs sm:text-sm text-[#574E4A] mt-2 leading-relaxed">
          The manager identified decision and billing delays; baseline queue duration and abandoned orders have not been measured.
        </p>
      </div>

      {/* Top 3 Framework Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-auto">
        {/* Card 1 */}
        <div className="bg-white border border-[#DFD7CB] rounded-xl p-5 shadow-xs space-y-2.5 flex flex-col justify-between">
          <div className="text-xs font-bold tracking-wider text-[#BD4F19] uppercase">
            THE VOID
          </div>
          <p className="text-xs sm:text-[13px] text-[#44403C] leading-relaxed">
            Time spent deciding, entering the order and paying may create a bottleneck.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white border border-[#DFD7CB] rounded-xl p-5 shadow-xs space-y-2.5 flex flex-col justify-between">
          <div className="text-xs font-bold tracking-wider text-[#BD4F19] uppercase">
            THE TEST
          </div>
          <p className="text-xs sm:text-[13px] text-[#44403C] leading-relaxed">
            Time-stamp 100 orders in rush and non-rush periods before changing the process.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white border border-[#DFD7CB] rounded-xl p-5 shadow-xs space-y-2.5 flex flex-col justify-between">
          <div className="text-xs font-bold tracking-wider text-[#BD4F19] uppercase">
            THE GUARDRAIL
          </div>
          <p className="text-xs sm:text-[13px] text-[#44403C] leading-relaxed">
            Faster checkout is not a win if errors rise or customers feel pushed.
          </p>
        </div>
      </div>

      {/* Scenario Section */}
      <div className="space-y-3">
        <div className="text-[11px] sm:text-xs font-bold tracking-wider text-[#BD4F19] uppercase">
          ILLUSTRATIVE SCENARIO — ASSUMED 4-MINUTE BASELINE, NOT MEASURED
        </div>

        {/* 4 Metric Blocks */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Box 1 */}
          <div className="bg-[#F3EFE6] border border-[#E2DDD4] rounded-lg p-4">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif-display text-[#1C1917] border-b border-[#BD4F19] pb-2">
              4.0 min
            </div>
            <div className="text-xs sm:text-[13px] text-[#1C1917] font-semibold mt-2">
              Assumed baseline
            </div>
            <div className="text-[11px] text-[#857B74] mt-0.5">
              Median order-to-payment time
            </div>
          </div>

          {/* Box 2 */}
          <div className="bg-[#F3EFE6] border border-[#E2DDD4] rounded-lg p-4">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif-display text-[#1C1917] border-b border-[#BD4F19] pb-2">
              3.4 min
            </div>
            <div className="text-xs sm:text-[13px] text-[#1C1917] font-semibold mt-2">
              15% faster target
            </div>
            <div className="text-[11px] text-[#857B74] mt-0.5">
              0.6 min / 36 sec saved
            </div>
          </div>

          {/* Box 3 */}
          <div className="bg-[#F3EFE6] border border-[#E2DDD4] rounded-lg p-4">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif-display text-[#1C1917] border-b border-[#BD4F19] pb-2">
              100 orders
            </div>
            <div className="text-xs sm:text-[13px] text-[#1C1917] font-semibold mt-2">
              Illustrative sample/day
            </div>
            <div className="text-[11px] text-[#857B74] mt-0.5">
              Sample size to validate
            </div>
          </div>

          {/* Box 4 */}
          <div className="bg-[#F3EFE6] border border-[#E2DDD4] rounded-lg p-4">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif-display text-[#1C1917] border-b border-[#BD4F19] pb-2">
              60 min
            </div>
            <div className="text-xs sm:text-[13px] text-[#1C1917] font-semibold mt-2">
              Time released/day
            </div>
            <div className="text-[11px] text-[#857B74] mt-0.5">
              100 × 36 seconds
            </div>
          </div>
        </div>

        {/* Bottom 2 Highlight Boxes (side by side) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#FAF3ED] border-l-4 border-[#BD4F19] border border-r-[#E5CEBA] border-t-[#E5CEBA] border-b-[#E5CEBA] rounded-r-lg p-3.5">
            <div className="text-xs font-bold text-[#BD4F19] uppercase mb-1">
              REVENUE LINK
            </div>
            <p className="text-xs sm:text-[13px] text-[#44403C]">
              At ₹1,127 AOV, 10 genuinely recovered orders = ₹11,270 sales.
            </p>
          </div>

          <div className="bg-[#EDF5EF] border-l-4 border-[#2E6038] border border-r-[#C6E0CB] border-t-[#C6E0CB] border-b-[#C6E0CB] rounded-r-lg p-3.5">
            <div className="text-xs font-bold text-[#2E6038] uppercase mb-1">
              CONTRIBUTION LINK
            </div>
            <p className="text-xs sm:text-[13px] text-[#44403C]">
              At assumed 35% contribution, that is ₹3,945 before screen costs.
            </p>
          </div>
        </div>
      </div>

      {/* Caveat & Footer */}
      <div className="space-y-1.5 pt-1">
        <p className="text-[10px] sm:text-[11px] text-[#857B74]">
          Recovered orders are hypothetical; only count them if baseline data shows abandonment and the pilot demonstrably reduces it.
        </p>
        <div className="flex items-center justify-between text-[11px] text-[#857B74] tracking-wider uppercase pt-2 border-t border-[#E6DFD5]">
          <span>SCHOOL OF FUTURE · TERM 1 CAPSTONE · BEYONDBURG</span>
          <span>05</span>
        </div>
      </div>
    </div>
  );
};
