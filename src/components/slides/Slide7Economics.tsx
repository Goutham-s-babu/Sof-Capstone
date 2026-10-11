import React from 'react';

export const Slide7Economics: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#0D172E] text-white flex flex-col justify-between p-8 md:p-12 lg:p-14 select-none relative overflow-hidden font-mono-consulting">
      {/* Top Header */}
      <div>
        <div className="text-xs md:text-sm font-semibold tracking-widest text-[#E59546] uppercase">
          6 · THE NUMBERS THAT MATTER · ESTIMATES
        </div>
        <div className="w-10 h-0.5 bg-[#E59546] mt-1.5 mb-3" />

        <h2 className="font-serif-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-snug">
          Show contribution per burger—not an undefined residual
        </h2>

        <p className="text-xs sm:text-sm text-[#BAC7D5] mt-2 leading-relaxed">
          Assume the 25–30% line represents other VARIABLE costs, not all overheads. Validate this classification with management.
        </p>
      </div>

      {/* Top 2 Comparative Context Blocks */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-auto">
        {/* Left Block */}
        <div className="bg-[#132240] border-l-4 border-[#E59546] rounded-r-lg p-4 shadow-lg space-y-1.5">
          <div className="text-xs font-bold tracking-wider text-[#E59546] uppercase">
            CURRENT OUTLET — OPS MANAGER INPUTS
          </div>
          <p className="text-xs sm:text-[13px] text-[#F8FAFC]">
            AOV ₹1,127 • ~2,300 bills/month • 77% dine-in / 23% takeaway
          </p>
          <p className="text-xs sm:text-[13px] text-[#CBD5E1]">
            Implied sales = ₹25.92L/month; ~₹3.11Cr annualised only if sustained.
          </p>
        </div>

        {/* Right Block */}
        <div className="bg-[#132240] border-l-4 border-[#E59546] rounded-r-lg p-4 shadow-lg space-y-1.5">
          <div className="text-xs font-bold tracking-wider text-[#E59546] uppercase">
            FY2024 MCA-FILED ACCOUNTS
          </div>
          <p className="text-xs sm:text-[13px] text-[#F8FAFC]">
            Revenue ₹12.01L • Other expenses ₹11.58L • PBT ₹43,380 • PAT ~₹1,010
          </p>
          <p className="text-xs sm:text-[13px] text-[#CBD5E1]">
            Historical legal-entity figures; not reconciled to current outlet.
          </p>
        </div>
      </div>

      {/* Main Grid: Smash Burger Cost Model (Left) & Realities/Context (Right) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
        {/* Left Column: Smash Burger Cost Model */}
        <div className="md:col-span-6 bg-[#132240] border border-[#1F3660] rounded-lg p-4 sm:p-5 flex flex-col justify-between space-y-4">
          <div className="text-xs font-bold tracking-wider text-[#E59546] uppercase border-b border-[#1F3660] pb-2">
            SMASH BURGER · ₹390 PRE-TAX · ILLUSTRATIVE COST MODEL
          </div>

          {/* Bar Chart Breakdown */}
          <div className="space-y-3.5 my-auto text-xs sm:text-[13px]">
            {/* Row 1: Selling Price */}
            <div>
              <div className="flex justify-between items-center mb-1 text-[#F8FAFC]">
                <span>Selling price</span>
                <span className="font-bold text-white font-mono">₹390</span>
              </div>
              <div className="w-full bg-white h-4 rounded-sm shadow-sm" />
            </div>

            {/* Row 2: Ingredients */}
            <div>
              <div className="flex justify-between items-center mb-1 text-[#F8FAFC]">
                <span>Ingredients (35–40%)</span>
                <span className="font-bold text-[#E59546] font-mono">₹136.50–156</span>
              </div>
              <div className="w-[38%] bg-[#E59546] h-4 rounded-sm shadow-sm" />
            </div>

            {/* Row 3: Other variable costs */}
            <div>
              <div className="flex justify-between items-center mb-1 text-[#F8FAFC]">
                <span>Other variable costs (assumed 25–30%)</span>
                <span className="font-bold text-[#F4B979] font-mono">₹97.50–117</span>
              </div>
              <div className="w-[28%] bg-[#F4B979] h-4 rounded-sm shadow-sm" />
            </div>

            {/* Row 4: Contribution */}
            <div>
              <div className="flex justify-between items-center mb-1 text-[#F8FAFC]">
                <span>Contribution per burger</span>
                <span className="font-bold text-[#5FA777] font-mono">₹117–156</span>
              </div>
              <div className="w-[34%] bg-[#5FA777] h-4 rounded-sm shadow-sm" />
            </div>
          </div>

          {/* Formula & Callout */}
          <div className="border-t border-[#1F3660] pt-3 space-y-1">
            <div className="text-[11px] font-bold text-[#E59546] tracking-wider uppercase">
              CONTRIBUTION MARGIN = CONTRIBUTION ÷ SELLING PRICE
            </div>
            <div className="text-xs text-[#CBD5E1]">
              Estimated contribution margin: 30–40% (illustrative range).
            </div>
          </div>
        </div>

        {/* Right Column: Stacked Context Cards */}
        <div className="md:col-span-6 flex flex-col justify-between space-y-3">
          {/* Card 1 */}
          <div className="bg-[#132240] border-l-4 border-[#E59546] rounded-r-lg p-3.5 shadow flex-1">
            <div className="text-xs font-bold text-[#E59546] uppercase mb-1">
              FY2024 COST / FINANCING CONTEXT
            </div>
            <p className="text-xs sm:text-[13px] text-[#CBD5E1] leading-relaxed">
              Rent + utilities ₹8.67L (~75% of other expenses). Short-term related-party loans: ₹95.82L, repayable on demand.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#132240] border-l-4 border-[#E59546] rounded-r-lg p-3.5 shadow flex-1">
            <div className="text-xs font-bold text-[#E59546] uppercase mb-1">
              BREAK-EVEN — ASSUMPTION ONLY
            </div>
            <p className="text-xs sm:text-[13px] text-[#CBD5E1] leading-relaxed">
              Assume ₹6L/month fixed costs and 35% contribution margin: break-even sales = ₹6L ÷ 35% = ₹17.14L/month.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#132240] border-l-4 border-[#E59546] rounded-r-lg p-3.5 shadow flex-1">
            <div className="text-xs font-bold text-[#E59546] uppercase mb-1">
              DATA LIMIT
            </div>
            <p className="text-xs sm:text-[13px] text-[#CBD5E1] leading-relaxed">
              Management did not share verified current fixed costs or variable-cost breakdown.
            </p>
          </div>
        </div>
      </div>

      {/* Footnote & Footer */}
      <div className="space-y-2 pt-2">
        <p className="text-[10px] sm:text-[11px] text-[#64748B]">
          Ingredient cost is manager-reported. Other variable costs and 35% midpoint margin are assumptions, not verified company data.
        </p>
        <div className="flex items-center justify-between text-[11px] text-[#64748B] tracking-wider uppercase pt-2 border-t border-[#1E365E]/50">
          <span>SCHOOL OF FUTURE · TERM 1 CAPSTONE · BEYONDBURG</span>
          <span>07</span>
        </div>
      </div>
    </div>
  );
};
