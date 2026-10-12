import React from 'react';

export const Slide2Market: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#F9F6F0] text-[#1C1917] flex flex-col justify-between p-8 md:p-12 lg:p-14 select-none relative overflow-hidden font-mono-consulting border border-[#E2DDD4]">
      {/* Top Header */}
      <div>
        <div className="flex items-center justify-between">
          <div className="text-xs md:text-sm font-semibold tracking-widest text-[#BD4F19] uppercase">
            2 · THE MARKET IT LIVES IN
          </div>
          <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-[#FAF3ED] text-[#BD4F19] border border-[#E5CEBA] uppercase tracking-wider">
            MACRO & CX RESEARCH
          </span>
        </div>
        <div className="w-12 h-0.5 bg-[#BD4F19] mt-1.5 mb-2.5" />

        <h2 className="font-serif-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1C1917] tracking-tight leading-snug">
          A ₹6.96 lakh crore food-service market—where premium burgers are a local niche
        </h2>

        <p className="text-xs sm:text-sm text-[#574E4A] mt-1.5 leading-relaxed">
          The opportunity is winning discerning urban consumers in Kochi, not competing for broad mass-market fast food.
        </p>
      </div>

      {/* Top Section: 3 Macro & CX Findings */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-auto">
        {/* KPI 1: Market Growth */}
        <div className="bg-white border border-[#DFD7CB] rounded-xl p-5 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#BD4F19]">
                EXTERNAL RESEARCH
              </span>
              <span className="text-[10px] text-[#857B74]">Swiggy–Kearney / IBEF</span>
            </div>
            <div className="text-3xl lg:text-4xl font-bold font-serif-display text-[#1C1917] border-b-2 border-[#BD4F19] pb-2">
              ₹6.96L cr
            </div>
          </div>
          <div className="mt-3">
            <div className="text-xs text-[#1C1917] font-semibold">India Food Services · 2025</div>
            <div className="text-[11px] text-[#574E4A] mt-0.5">
              Projected to reach <strong>₹10.7–11.2L crore by 2030</strong>
            </div>
          </div>
        </div>

        {/* KPI 2: Novel Flavours & Willingness to Pay */}
        <div className="bg-white border border-[#DFD7CB] rounded-xl p-5 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#BD4F19]">
                EXTERNAL RESEARCH
              </span>
              <span className="text-[10px] text-[#857B74]">KPMG CX Report 2025</span>
            </div>
            <div className="text-3xl lg:text-4xl font-bold font-serif-display text-[#1C1917] border-b-2 border-[#BD4F19] pb-2">
              29%
            </div>
          </div>
          <div className="mt-3">
            <div className="text-xs text-[#1C1917] font-semibold">Willingness to Pay for Novelty</div>
            <div className="text-[11px] text-[#574E4A] mt-0.5">
              Interested in novel flavours & willing to pay for unique menu items
            </div>
          </div>
        </div>

        {/* KPI 3: Quality Consistency */}
        <div className="bg-white border border-[#DFD7CB] rounded-xl p-5 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#2E6038]">
                EXTERNAL RESEARCH
              </span>
              <span className="text-[10px] text-[#857B74]">KPMG CX Report 2025</span>
            </div>
            <div className="text-3xl lg:text-4xl font-bold font-serif-display text-[#1C1917] border-b-2 border-[#2E6038] pb-2">
              30%
            </div>
          </div>
          <div className="mt-3">
            <div className="text-xs text-[#1C1917] font-semibold">Trust in Consistent Quality</div>
            <div className="text-[11px] text-[#574E4A] mt-0.5">
              Consistency in food quality & service builds trust to support premium pricing
            </div>
          </div>
        </div>
      </div>

      {/* Middle Section: Competitors & Addressable Market Discipline */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Competitor Panel */}
        <div className="bg-[#F3EFE6] border border-[#E2DDD4] rounded-lg p-4 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold tracking-wider text-[#BD4F19] uppercase">
              ONLY RELEVANT DIRECT COMPETITORS (KOCHI)
            </span>
            <span className="text-[10px] text-[#857B74]">Gourmet Craft Segment</span>
          </div>
          <p className="text-xs text-[#44403C] leading-relaxed">
            Beyondburg competes strictly in the artisanal gourmet burger segment. In Kochi, its only direct benchmarks are <strong>The Burgery</strong> (Smash Down ~₹420) and <strong>The Burger Junction (TBJ)</strong> (Cheese Burger ~₹317), against Beyondburg Smash at ₹390 in-store / ₹470 delivery.
          </p>
        </div>

        {/* Market Boundary Warning */}
        <div className="bg-[#FAF3ED] border-l-4 border-[#BD4F19] border border-r-[#E5CEBA] border-t-[#E5CEBA] border-b-[#E5CEBA] rounded-r-lg p-4 space-y-1">
          <div className="text-xs font-bold text-[#BD4F19] uppercase">
            METHODOLOGY GUARDRAIL: NOT A MASS QSR BRAND
          </div>
          <p className="text-xs text-[#44403C] leading-relaxed">
            Do not classify Beyondburg as a QSR brand or treat the ₹6.96L crore national food-service market as its addressable market. Sized bottom-up locally from urban Kochi dining catchments.
          </p>
        </div>
      </div>

      {/* Footnote & Bottom Bar */}
      <div className="space-y-1.5 pt-1">
        <p className="text-[10px] sm:text-[11px] text-[#857B74]">
          Sources: Swiggy–Kearney, How India Eats 2025 (reported by IBEF); KPMG India CX Report 2025; Public menu listings in Kochi (checked Oct 2026).
        </p>
        <div className="flex items-center justify-between text-[11px] text-[#857B74] tracking-wider uppercase pt-2 border-t border-[#E6DFD5]">
          <span>SCHOOL OF FUTURE · TERM 1 CAPSTONE · BEYONDBURG</span>
          <span className="font-bold text-[#BD4F19] pr-36">SLIDE 02 / 09</span>
        </div>
      </div>
    </div>
  );
};
