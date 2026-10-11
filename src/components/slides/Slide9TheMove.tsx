import React from 'react';

export const Slide9TheMove: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#0D172E] text-white flex flex-col justify-between p-8 md:p-12 lg:p-14 select-none relative overflow-hidden font-mono-consulting">
      {/* Top Header */}
      <div>
        <div className="text-xs md:text-sm font-semibold tracking-widest text-[#E59546] uppercase">
          THE MOVE
        </div>
        <div className="w-10 h-0.5 bg-[#E59546] mt-1.5 mb-3" />

        <h2 className="font-serif-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-snug">
          Pilot AI-assisted self-ordering at rush periods; scale only if contribution improves
        </h2>

        <p className="text-xs sm:text-sm text-[#BAC7D5] mt-2 leading-relaxed">
          All calculations use ₹1,127 reported AOV, 35% assumed contribution margin and ₹20,000 monthly cost hurdle. Uplift is hypothetical.
        </p>
      </div>

      {/* Top 3 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-auto">
        {/* Column 1 */}
        <div className="bg-[#132240] border-l-4 border-[#E59546] rounded-r-lg p-5 shadow-lg space-y-3">
          <div className="text-xs font-bold tracking-wider text-[#E59546] uppercase">
            WHY THIS MOVE
          </div>
          <p className="text-xs sm:text-[13px] text-[#CBD5E1] leading-relaxed">
            The manager identified decision/billing delay; pilot tests whether it constrains completed orders.
          </p>
        </div>

        {/* Column 2 */}
        <div className="bg-[#132240] border-l-4 border-[#E59546] rounded-r-lg p-5 shadow-lg space-y-3">
          <div className="text-xs font-bold tracking-wider text-[#E59546] uppercase">
            VALUE FORMULA
          </div>
          <p className="text-xs sm:text-[13px] text-[#CBD5E1] leading-relaxed">
            Extra orders × ₹1,127 AOV = sales; sales × 35% = contribution.
          </p>
        </div>

        {/* Column 3 */}
        <div className="bg-[#132240] border-l-4 border-[#E59546] rounded-r-lg p-5 shadow-lg space-y-3">
          <div className="text-xs font-bold tracking-wider text-[#E59546] uppercase">
            GO / NO-GO
          </div>
          <p className="text-xs sm:text-[13px] text-[#CBD5E1] leading-relaxed">
            Scale only if contribution exceeds actual full cost and service quality holds.
          </p>
        </div>
      </div>

      {/* Illustrative Scenarios Table Section */}
      <div className="space-y-2.5">
        <div className="text-[11px] sm:text-xs font-bold tracking-wider text-[#E59546] uppercase">
          ILLUSTRATIVE MONTHLY SCENARIOS — ASSUME 2,000 ORDERS EXPOSED TO THE PILOT
        </div>

        {/* Scenario Table */}
        <div className="w-full border border-[#1F3660] rounded-lg overflow-hidden bg-[#111F3B]">
          <table className="w-full text-left text-xs sm:text-[13px] border-collapse">
            <thead>
              <tr className="bg-[#F4B979] text-[#1A1108] font-bold">
                <th className="py-2.5 px-4 font-semibold">Scenario</th>
                <th className="py-2.5 px-4 font-semibold text-center">Extra orders</th>
                <th className="py-2.5 px-4 font-semibold text-right">Sales uplift @ ₹1,127</th>
                <th className="py-2.5 px-4 font-semibold text-right">Contribution @ 35%</th>
                <th className="py-2.5 px-4 font-semibold text-right">After ₹20k hurdle</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1F3660]/60 text-[#CBD5E1]">
              <tr className="hover:bg-[#16274A] transition-colors">
                <td className="py-2.5 px-4 font-medium text-white">Low · +2%</td>
                <td className="py-2.5 px-4 text-center font-mono">40</td>
                <td className="py-2.5 px-4 text-right font-mono">₹45,080</td>
                <td className="py-2.5 px-4 text-right font-mono">₹15,778</td>
                <td className="py-2.5 px-4 text-right font-mono text-[#F87171] font-semibold">−₹4,222</td>
              </tr>
              <tr className="hover:bg-[#16274A] transition-colors">
                <td className="py-2.5 px-4 font-medium text-white">Mid · +5%</td>
                <td className="py-2.5 px-4 text-center font-mono">100</td>
                <td className="py-2.5 px-4 text-right font-mono">₹1,12,700</td>
                <td className="py-2.5 px-4 text-right font-mono">₹39,445</td>
                <td className="py-2.5 px-4 text-right font-mono text-[#4ADE80] font-semibold">+₹19,445</td>
              </tr>
              <tr className="hover:bg-[#16274A] transition-colors">
                <td className="py-2.5 px-4 font-medium text-white">High · +8%</td>
                <td className="py-2.5 px-4 text-center font-mono">160</td>
                <td className="py-2.5 px-4 text-right font-mono">₹1,80,320</td>
                <td className="py-2.5 px-4 text-right font-mono">₹63,112</td>
                <td className="py-2.5 px-4 text-right font-mono text-[#4ADE80] font-semibold">+₹43,112</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Bottom 2 Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
          <div className="bg-[#132240]/80 border-l-4 border-[#E59546] rounded-r-lg p-3">
            <div className="text-[11px] font-bold text-[#E59546] uppercase mb-0.5">
              ASSUMPTIONS
            </div>
            <p className="text-xs text-[#CBD5E1]">
              2,000 exposed orders; 2–8% uplift and 35% margin unverified.
            </p>
          </div>

          <div className="bg-[#132240]/80 border-l-4 border-[#E59546] rounded-r-lg p-3">
            <div className="text-[11px] font-bold text-[#E59546] uppercase mb-0.5">
              CONSISTENCY CHECK
            </div>
            <p className="text-xs text-[#CBD5E1]">
              ₹20k cost needs ₹57,143 sales ≈ 51 orders at ₹1,127 AOV.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between text-[11px] text-[#64748B] tracking-wider uppercase pt-2 border-t border-[#1E365E]/50">
        <span>SCHOOL OF FUTURE · TERM 1 CAPSTONE · BEYONDBURG</span>
        <span>09</span>
      </div>
    </div>
  );
};
