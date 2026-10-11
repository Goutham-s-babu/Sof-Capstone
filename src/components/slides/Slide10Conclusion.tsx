import React from 'react';

export const Slide10Conclusion: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#F9F6F0] text-[#1C1917] flex flex-col justify-between p-8 md:p-12 lg:p-14 select-none relative overflow-hidden font-mono-consulting border border-[#E2DDD4]">
      {/* Top Header */}
      <div>
        <div className="text-xs md:text-sm font-semibold tracking-widest text-[#BD4F19] uppercase">
          CONCLUSION
        </div>
        <div className="w-12 h-0.5 bg-[#BD4F19] mt-1.5 mb-3" />
      </div>

      {/* Hero Layout: Left Editorial, Right 2 Macro Benchmark Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto">
        {/* Left Column */}
        <div className="lg:col-span-8 space-y-6">
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1C1917] tracking-tight leading-[1.12]">
            Premium taste is the promise. <br />
            <span className="italic font-normal text-[#574E4A]">Reliable execution is the proof.</span>
          </h2>

          <div className="space-y-4 max-w-2xl text-xs sm:text-sm lg:text-base text-[#44403C] leading-relaxed pt-2">
            <p>
              Beyondburg sits in a growing food-service market, but the burger-only market size is not reliably established here.
            </p>
            <p>
              The next move is a measured self-service pilot—not an assumption-led rollout.
            </p>
          </div>
        </div>

        {/* Right Column: 2 Stacked Highlight Cards */}
        <div className="lg:col-span-4 space-y-4">
          {/* Card 1 */}
          <div className="bg-white border border-[#DFD7CB] rounded-xl p-5 shadow-xs">
            <div className="text-3xl lg:text-4xl font-bold font-serif-display text-[#1C1917] border-b-2 border-[#BD4F19] pb-2">
              ₹6.96L cr
            </div>
            <div className="text-xs sm:text-[13px] text-[#1C1917] font-semibold mt-2.5">
              India food services
            </div>
            <div className="text-[11px] text-[#857B74] mt-0.5">
              2025 market estimate
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-[#DFD7CB] rounded-xl p-5 shadow-xs">
            <div className="text-3xl lg:text-4xl font-bold font-serif-display text-[#1C1917] border-b-2 border-[#BD4F19] pb-2">
              30%
            </div>
            <div className="text-xs sm:text-[13px] text-[#1C1917] font-semibold mt-2.5">
              Premium signal
            </div>
            <div className="text-[11px] text-[#857B74] mt-0.5">
              KPMG: quality/service can justify premium
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Synthesis Flow Statement & Footnote */}
      <div className="space-y-3 pt-1">
        {/* Core Strategy Arrow Journey */}
        <div className="bg-[#FAF3ED] border-l-4 border-[#BD4F19] border border-r-[#E5CEBA] border-t-[#E5CEBA] border-b-[#E5CEBA] rounded-r-lg p-3.5 text-xs sm:text-sm md:text-base font-bold text-[#1C1917] tracking-wide">
          Measure the void → pilot the fix → prove contribution → scale.
        </div>

        <p className="text-[10px] sm:text-[11px] text-[#857B74]">
          Field interview • MCA FY2024 accounts • Redseer/Kearney-Swiggy • KPMG • public menus
        </p>

        <div className="flex items-center justify-between text-[11px] text-[#857B74] tracking-wider uppercase pt-2 border-t border-[#E6DFD5]">
          <span>SCHOOL OF FUTURE · TERM 1 CAPSTONE · BEYONDBURG</span>
          <span>11</span>
        </div>
      </div>
    </div>
  );
};
