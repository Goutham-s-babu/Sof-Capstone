import React from 'react';

export const Slide9TheMove: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#F9F6F0] text-[#1C1917] flex flex-col justify-between p-8 md:p-12 lg:p-14 select-none relative overflow-hidden font-mono-consulting border border-[#E2DDD4]">
      {/* Top Header */}
      <div>
        <div className="text-xs md:text-sm font-semibold tracking-widest text-[#BD4F19] uppercase">
          THE MOVE
        </div>
        <div className="w-12 h-0.5 bg-[#BD4F19] mt-1.5 mb-3" />

        <h2 className="font-serif-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1C1917] tracking-tight leading-snug">
          Pilot AI-assisted self-ordering at rush periods; scale only if contribution improves
        </h2>

        <p className="text-xs sm:text-sm text-[#574E4A] mt-2 leading-relaxed">
          All calculations use ₹1,127 reported AOV, 35% assumed contribution margin and ₹20,000 monthly cost hurdle. Uplift is hypothetical.
        </p>
      </div>

      {/* Top 3 Strategic Decision Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-auto">
        {/* Column 1 */}
        <div className="bg-white border border-[#DFD7CB] rounded-xl p-5 shadow-xs space-y-2.5 flex flex-col justify-between">
          <div className="text-xs font-bold tracking-wider text-[#BD4F19] uppercase">
            WHY THIS MOVE
          </div>
          <p className="text-xs sm:text-[13px] text-[#44403C] leading-relaxed">
            The manager identified decision/billing delay; pilot tests whether it constrains completed orders.
          </p>
        </div>

        {/* Column 2 */}
        <div className="bg-white border border-[#DFD7CB] rounded-xl p-5 shadow-xs space-y-2.5 flex flex-col justify-between">
          <div className="text-xs font-bold tracking-wider text-[#BD4F19] uppercase">
            VALUE FORMULA
          </div>
          <p className="text-xs sm:text-[13px] text-[#44403C] leading-relaxed">
            Extra orders × ₹1,127 AOV = sales; sales × 35% = contribution.
          </p>
        </div>

        {/* Column 3 */}
        <div className="bg-white border border-[#DFD7CB] rounded-xl p-5 shadow-xs space-y-2.5 flex flex-col justify-between">
          <div className="text-xs font-bold tracking-wider text-[#BD4F19] uppercase">
            GO / NO-GO
          </div>
          <p className="text-xs sm:text-[13px] text-[#44403C] leading-relaxed">
            Scale only if contribution exceeds actual full cost and service quality holds.
          </p>
        </div>
      </div>

      {/* Illustrative Scenarios Table Section */}
      <div className="space-y-2.5">
        <div className="text-[11px] sm:text-xs font-bold tracking-wider text-[#BD4F19] uppercase">
          ILLUSTRATIVE MONTHLY SCENARIOS — ASSUME 2,000 ORDERS EXPOSED TO THE PILOT
        </div>

        {/* Scenario Table */}
        <div className="w-full border border-[#DFD7CB] rounded-xl overflow-hidden shadow-xs bg-white">
          <table className="w-full text-left text-xs sm:text-[13px] border-collapse">
            <thead>
              <tr className="bg-[#1C1917] text-[#FAF8F5]">
                <th className="py-2.5 px-4 font-semibold">Scenario</th>
                <th className="py-2.5 px-4 font-semibold text-center">Extra orders</th>
                <th className="py-2.5 px-4 font-semibold text-right">Sales uplift @ ₹1,127</th>
                <th className="py-2.5 px-4 font-semibold text-right">Contribution @ 35%</th>
                <th className="py-2.5 px-4 font-semibold text-right">After ₹20k hurdle</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EFEAE2] text-[#44403C]">
              <tr className="hover:bg-[#FAF8F5] transition-colors">
                <td className="py-2.5 px-4 font-semibold text-[#1C1917]">Low · +2%</td>
                <td className="py-2.5 px-4 text-center font-mono">40</td>
                <td className="py-2.5 px-4 text-right font-mono font-medium">₹45,080</td>
                <td className="py-2.5 px-4 text-right font-mono font-medium">₹15,778</td>
                <td className="py-2.5 px-4 text-right font-mono text-[#B91C1C] font-bold">−₹4,222</td>
              </tr>
              <tr className="hover:bg-[#FAF8F5] transition-colors bg-[#FDFBF7]">
                <td className="py-2.5 px-4 font-semibold text-[#1C1917]">Mid · +5%</td>
                <td className="py-2.5 px-4 text-center font-mono">100</td>
                <td className="py-2.5 px-4 text-right font-mono font-medium">₹1,12,700</td>
                <td className="py-2.5 px-4 text-right font-mono font-medium">₹39,445</td>
                <td className="py-2.5 px-4 text-right font-mono text-[#15803D] font-bold">+₹19,445</td>
              </tr>
              <tr className="hover:bg-[#FAF8F5] transition-colors">
                <td className="py-2.5 px-4 font-semibold text-[#1C1917]">High · +8%</td>
                <td className="py-2.5 px-4 text-center font-mono">160</td>
                <td className="py-2.5 px-4 text-right font-mono font-medium">₹1,80,320</td>
                <td className="py-2.5 px-4 text-right font-mono font-medium">₹63,112</td>
                <td className="py-2.5 px-4 text-right font-mono text-[#15803D] font-bold">+₹43,112</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Bottom 2 Verification Callouts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#F3EFE6] border border-[#E2DDD4] rounded-lg p-3">
            <div className="text-[11px] font-bold text-[#BD4F19] uppercase mb-0.5">
              ASSUMPTIONS
            </div>
            <p className="text-xs text-[#574E4A]">
              2,000 exposed orders; 2–8% uplift and 35% margin unverified.
            </p>
          </div>

          <div className="bg-[#F3EFE6] border border-[#E2DDD4] rounded-lg p-3">
            <div className="text-[11px] font-bold text-[#BD4F19] uppercase mb-0.5">
              CONSISTENCY CHECK
            </div>
            <p className="text-xs text-[#574E4A]">
              ₹20k cost needs ₹57,143 sales ≈ 51 orders at ₹1,127 AOV.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between text-[11px] text-[#857B74] tracking-wider uppercase pt-2 border-t border-[#E6DFD5]">
        <span>SCHOOL OF FUTURE · TERM 1 CAPSTONE · BEYONDBURG</span>
        <span>09</span>
      </div>
    </div>
  );
};
