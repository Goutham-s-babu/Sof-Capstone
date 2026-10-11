import React from 'react';

export const Slide7Economics: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#F9F6F0] text-[#1C1917] flex flex-col justify-between p-8 md:p-12 lg:p-14 select-none relative overflow-hidden font-mono-consulting border border-[#E2DDD4]">
      {/* Top Header */}
      <div>
        <div className="text-xs md:text-sm font-semibold tracking-widest text-[#BD4F19] uppercase">
          6 · THE NUMBERS THAT MATTER · ESTIMATES
        </div>
        <div className="w-12 h-0.5 bg-[#BD4F19] mt-1.5 mb-3" />

        <h2 className="font-serif-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1C1917] tracking-tight leading-snug">
          Show contribution per burger—not an undefined residual
        </h2>

        <p className="text-xs sm:text-sm text-[#574E4A] mt-2 leading-relaxed">
          Assume the 25–30% line represents other VARIABLE costs, not all overheads. Validate this classification with management.
        </p>
      </div>

      {/* Top 2 Comparative Context Blocks */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-auto">
        {/* Left Block */}
        <div className="bg-white border-l-4 border-[#BD4F19] border border-r-[#DFD7CB] border-t-[#DFD7CB] border-b-[#DFD7CB] rounded-r-xl p-4 shadow-xs space-y-1">
          <div className="text-xs font-bold tracking-wider text-[#BD4F19] uppercase">
            CURRENT OUTLET — OPS MANAGER INPUTS
          </div>
          <p className="text-xs sm:text-[13px] text-[#1C1917] font-semibold">
            AOV ₹1,127 • ~2,300 bills/month • 77% dine-in / 23% takeaway
          </p>
          <p className="text-xs sm:text-[13px] text-[#574E4A]">
            Implied sales = ₹25.92L/month; ~₹3.11Cr annualised only if sustained.
          </p>
        </div>

        {/* Right Block */}
        <div className="bg-white border-l-4 border-[#574E4A] border border-r-[#DFD7CB] border-t-[#DFD7CB] border-b-[#DFD7CB] rounded-r-xl p-4 shadow-xs space-y-1">
          <div className="text-xs font-bold tracking-wider text-[#574E4A] uppercase">
            FY2024 MCA-FILED ACCOUNTS
          </div>
          <p className="text-xs sm:text-[13px] text-[#1C1917] font-semibold">
            Revenue ₹12.01L • Other expenses ₹11.58L • PBT ₹43,380 • PAT ~₹1,010
          </p>
          <p className="text-xs sm:text-[13px] text-[#574E4A]">
            Historical legal-entity figures; not reconciled to current outlet.
          </p>
        </div>
      </div>

      {/* Main Grid: Smash Burger Cost Model (Left) & Realities/Context (Right) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
        {/* Left Column: Smash Burger Cost Model */}
        <div className="md:col-span-6 bg-white border border-[#DFD7CB] rounded-xl p-4 sm:p-5 flex flex-col justify-between space-y-4 shadow-xs">
          <div className="text-xs font-bold tracking-wider text-[#BD4F19] uppercase border-b border-[#EFEAE2] pb-2">
            SMASH BURGER · ₹390 PRE-TAX · ILLUSTRATIVE COST MODEL
          </div>

          {/* Bar Chart Breakdown */}
          <div className="space-y-3 my-auto text-xs sm:text-[13px]">
            {/* Row 1: Selling Price */}
            <div>
              <div className="flex justify-between items-center mb-1 text-[#1C1917]">
                <span className="font-medium">Selling price</span>
                <span className="font-bold text-[#1C1917] font-mono text-sm">₹390</span>
              </div>
              <div className="w-full bg-[#1C1917] h-3.5 rounded-xs shadow-xs" />
            </div>

            {/* Row 2: Ingredients */}
            <div>
              <div className="flex justify-between items-center mb-1 text-[#1C1917]">
                <span className="font-medium">Ingredients (35–40%)</span>
                <span className="font-bold text-[#BD4F19] font-mono text-sm">₹136.50–156</span>
              </div>
              <div className="w-[38%] bg-[#BD4F19] h-3.5 rounded-xs shadow-xs" />
            </div>

            {/* Row 3: Other variable costs */}
            <div>
              <div className="flex justify-between items-center mb-1 text-[#1C1917]">
                <span className="font-medium">Other variable costs (assumed 25–30%)</span>
                <span className="font-bold text-[#D97706] font-mono text-sm">₹97.50–117</span>
              </div>
              <div className="w-[28%] bg-[#D97706] h-3.5 rounded-xs shadow-xs" />
            </div>

            {/* Row 4: Contribution */}
            <div>
              <div className="flex justify-between items-center mb-1 text-[#1C1917]">
                <span className="font-medium">Contribution per burger</span>
                <span className="font-bold text-[#2E6038] font-mono text-sm">₹117–156</span>
              </div>
              <div className="w-[34%] bg-[#2E6038] h-3.5 rounded-xs shadow-xs" />
            </div>
          </div>

          {/* Formula & Callout */}
          <div className="border-t border-[#EFEAE2] pt-3 space-y-1 bg-[#FAF8F5] -mx-4 -mb-4 p-4 rounded-b-xl">
            <div className="text-[11px] font-bold text-[#BD4F19] tracking-wider uppercase">
              CONTRIBUTION MARGIN = CONTRIBUTION ÷ SELLING PRICE
            </div>
            <div className="text-xs text-[#574E4A]">
              Estimated contribution margin: 30–40% (illustrative range).
            </div>
          </div>
        </div>

        {/* Right Column: Stacked Context Cards in Parchment */}
        <div className="md:col-span-6 flex flex-col justify-between space-y-3">
          {/* Card 1 */}
          <div className="bg-[#F3EFE6] border border-[#E2DDD4] rounded-lg p-3.5 shadow-2xs flex-1">
            <div className="text-xs font-bold text-[#BD4F19] uppercase mb-1">
              FY2024 COST / FINANCING CONTEXT
            </div>
            <p className="text-xs sm:text-[13px] text-[#44403C] leading-relaxed">
              Rent + utilities ₹8.67L (~75% of other expenses). Short-term related-party loans: ₹95.82L, repayable on demand.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#F3EFE6] border border-[#E2DDD4] rounded-lg p-3.5 shadow-2xs flex-1">
            <div className="text-xs font-bold text-[#BD4F19] uppercase mb-1">
              BREAK-EVEN — ASSUMPTION ONLY
            </div>
            <p className="text-xs sm:text-[13px] text-[#44403C] leading-relaxed">
              Assume ₹6L/month fixed costs and 35% contribution margin: break-even sales = ₹6L ÷ 35% = ₹17.14L/month.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#F3EFE6] border border-[#E2DDD4] rounded-lg p-3.5 shadow-2xs flex-1">
            <div className="text-xs font-bold text-[#BD4F19] uppercase mb-1">
              DATA LIMIT
            </div>
            <p className="text-xs sm:text-[13px] text-[#44403C] leading-relaxed">
              Management did not share verified current fixed costs or variable-cost breakdown.
            </p>
          </div>
        </div>
      </div>

      {/* Footnote & Footer */}
      <div className="space-y-1.5 pt-1">
        <p className="text-[10px] sm:text-[11px] text-[#857B74]">
          Ingredient cost is manager-reported. Other variable costs and 35% midpoint margin are assumptions, not verified company data.
        </p>
        <div className="flex items-center justify-between text-[11px] text-[#857B74] tracking-wider uppercase pt-2 border-t border-[#E6DFD5]">
          <span>SCHOOL OF FUTURE · TERM 1 CAPSTONE · BEYONDBURG</span>
          <span>08</span>
        </div>
      </div>
    </div>
  );
};
