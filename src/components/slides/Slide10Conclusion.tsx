import React from 'react';

export const Slide10Conclusion: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#0D172E] text-white flex flex-col justify-between p-8 md:p-12 lg:p-14 select-none relative overflow-hidden font-mono-consulting">
      {/* Top Header */}
      <div>
        <div className="text-xs md:text-sm font-semibold tracking-widest text-[#E59546] uppercase">
          CONCLUSION
        </div>
        <div className="w-10 h-0.5 bg-[#E59546] mt-1.5 mb-3" />
      </div>

      {/* Hero Layout: Left Editorial, Right 2 KPI Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto">
        {/* Left Column */}
        <div className="lg:col-span-8 space-y-6">
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white tracking-tight leading-[1.12]">
            Premium taste is the promise. <br />
            Reliable execution is the proof.
          </h2>

          <div className="space-y-4 max-w-2xl text-xs sm:text-sm lg:text-base text-[#BAC7D5] leading-relaxed pt-2">
            <p>
              Beyondburg sits in a growing food-service market, but the burger-only market size is not reliably established here.
            </p>
            <p>
              The next move is a measured self-service pilot—not an assumption-led rollout.
            </p>
          </div>
        </div>

        {/* Right Column: 2 Stacked Highlight Cards */}
        <div className="lg:col-span-4 space-y-5">
          {/* Card 1 */}
          <div className="bg-[#132240] border border-[#1F3660] rounded-xl p-5 shadow-xl">
            <div className="text-3xl lg:text-4xl font-bold font-serif-display text-white border-b-2 border-[#E59546] pb-2">
              ₹6.96L cr
            </div>
            <div className="text-xs sm:text-[13px] text-[#F8FAFC] font-semibold mt-2.5">
              India food services
            </div>
            <div className="text-[11px] text-[#7E8B9B] mt-0.5">
              2025 market estimate
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#132240] border border-[#1F3660] rounded-xl p-5 shadow-xl">
            <div className="text-3xl lg:text-4xl font-bold font-serif-display text-white border-b-2 border-[#E59546] pb-2">
              30%
            </div>
            <div className="text-xs sm:text-[13px] text-[#F8FAFC] font-semibold mt-2.5">
              Premium signal
            </div>
            <div className="text-[11px] text-[#7E8B9B] mt-0.5">
              KPMG: quality/service can justify premium
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Synthesis Flow Statement & Footnote */}
      <div className="space-y-3 pt-2">
        {/* Core Strategy Arrow Journey */}
        <div className="text-sm sm:text-base lg:text-lg font-bold text-white tracking-wide">
          Measure the void → pilot the fix → prove contribution → scale.
        </div>

        <p className="text-[10px] sm:text-[11px] text-[#64748B]">
          Field interview • MCA FY2024 accounts • Redseer/Kearney-Swiggy • KPMG • public menus
        </p>

        <div className="flex items-center justify-between text-[11px] text-[#64748B] tracking-wider uppercase pt-2 border-t border-[#1E365E]/50">
          <span>SCHOOL OF FUTURE · TERM 1 CAPSTONE · BEYONDBURG</span>
          <span>10</span>
        </div>
      </div>
    </div>
  );
};
