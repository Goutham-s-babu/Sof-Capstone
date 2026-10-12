import React from 'react';
import { Calculator, AlertCircle, TrendingUp, Info } from 'lucide-react';

export const Slide5Economics: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#F9F6F0] text-[#1C1917] flex flex-col justify-between p-6 sm:p-8 md:p-10 lg:p-12 select-none relative overflow-hidden font-mono-consulting border border-[#E2DDD4]">
      {/* Top Header */}
      <div>
        <div className="flex items-center justify-between">
          <div className="text-xs md:text-sm font-semibold tracking-widest text-[#BD4F19] uppercase">
            5 · THE NUMBERS THAT MATTER
          </div>
          <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-[#FAF3ED] text-[#BD4F19] border border-[#E5CEBA] uppercase tracking-wider">
            UNIT & OUTLET ECONOMICS
          </span>
        </div>
        <div className="w-12 h-0.5 bg-[#BD4F19] mt-1.5 mb-2" />

        <h2 className="font-serif-display text-xl sm:text-2xl lg:text-3xl font-bold text-[#1C1917] tracking-tight leading-snug">
          Unit economics and outlet-level break-even analysis
        </h2>

        <p className="text-xs sm:text-[13px] text-[#574E4A] mt-1 leading-relaxed">
          Separating product-level Smash Burger contribution from the store-level volume required to cover fixed operating overheads.
        </p>
      </div>

      {/* Main Grid: Section A (Unit Economics) and Section B (Outlet Break-Even) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 my-auto items-stretch">
        {/* Left Column (5 cols): Section A — Smash Burger Unit Economics */}
        <div className="lg:col-span-5 bg-white border border-[#DFD7CB] rounded-xl p-4 sm:p-5 shadow-xs flex flex-col justify-between space-y-3">
          <div>
            <div className="flex items-center justify-between border-b border-[#EFEAE2] pb-2">
              <span className="text-[11px] font-bold text-[#BD4F19] uppercase tracking-wider">
                A · SMASH BURGER UNIT ECONOMICS
              </span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#FAF3ED] text-[#BD4F19] font-bold">
                ESTIMATES
              </span>
            </div>
            <div className="text-[10px] text-[#857B74] mt-1 italic">
              Contribution = Selling price − Variable costs
            </div>
          </div>

          {/* 5-Step Vertical Mini Bridge for Smash Burger */}
          <div className="space-y-2 text-xs">
            <div className="flex justify-between items-center p-2.5 rounded-lg bg-[#FAF8F5]">
              <span className="font-medium text-[#1C1917]">Selling price (pre-tax)</span>
              <span className="font-bold font-mono text-sm text-[#1C1917]">₹390</span>
            </div>

            <div className="flex justify-between items-center p-2.5 rounded-lg bg-[#FAF8F5]">
              <span className="text-[#574E4A]">Est. ingredient cost (37.5%)</span>
              <span className="font-bold font-mono text-[#BD4F19]">−₹146</span>
            </div>

            <div className="flex justify-between items-center p-2.5 rounded-lg bg-[#FAF8F5]">
              <span className="text-[#574E4A]">Other variable costs (27.5% assump.)</span>
              <span className="font-bold font-mono text-[#D97706]">−₹107</span>
            </div>

            <div className="flex justify-between items-center p-2.5 rounded-lg bg-[#F5F2EB] border-t border-[#EAE4D8]">
              <span className="font-semibold text-[#1C1917]">Total variable costs</span>
              <span className="font-bold font-mono text-[#574E4A]">≈₹254</span>
            </div>

            <div className="flex justify-between items-center p-2.5 rounded-lg bg-[#FAF8F5] border-2 border-[#2E6038]">
              <span className="font-bold text-[#2E6038]">Est. unit contribution (35%)</span>
              <span className="font-bold font-mono text-base text-[#2E6038]">₹137</span>
            </div>
          </div>

          {/* Explanatory Unit Notes */}
          <div className="p-3 rounded-lg bg-[#FAF8F5] border border-[#EFEAE2] text-[10px] text-[#574E4A] space-y-1.5 leading-relaxed">
            <p>
              <strong className="text-[#1C1917]">Illustrative estimates:</strong> These figures are illustrative estimates, not verified product-level accounts.
            </p>
            <p>
              <strong className="text-[#1C1917]">Not net profit:</strong> Contribution helps cover fixed and semi-fixed costs; it is not product-level net profit.
            </p>
            <p>
              <strong className="text-[#1C1917]">Rounding:</strong> Independently rounded costs sum to ₹253 (₹146 + ₹107); unrounded variable costs sum to ₹253.50 (rounds to ₹254); ₹137 contribution is mathematically preserved.
            </p>
          </div>
        </div>

        {/* Right Column (7 cols): Section B — Outlet-Level Break-Even Analysis */}
        <div className="lg:col-span-7 bg-white border border-[#DFD7CB] rounded-xl p-4 sm:p-5 shadow-xs flex flex-col justify-between space-y-3">
          <div>
            <div className="flex items-center justify-between border-b border-[#EFEAE2] pb-2">
              <span className="text-[11px] font-bold text-[#BD4F19] uppercase tracking-wider">
                B · OUTLET-LEVEL BREAK-EVEN ANALYSIS
              </span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#FAF3ED] text-[#BD4F19] font-bold">
                STORE LEVEL
              </span>
            </div>
            <h3 className="font-serif-display text-base sm:text-lg font-bold text-[#1C1917] mt-1.5">
              “How many bills does Beyondburg need to break even?”
            </h3>
          </div>

          {/* Break-Even Formula Card */}
          <div className="p-3 rounded-lg bg-[#FAF8F5] border border-[#EFEAE2] flex items-center justify-between text-xs">
            <span className="text-[#574E4A] font-medium">Break-even formula:</span>
            <span className="font-mono font-bold text-[#1C1917] bg-white px-3 py-1 rounded border border-[#DFD7CB]">
              ₹7,00,000 ÷ (₹1,127 × 35%) ≈ 1,775 bills / month
            </span>
          </div>

          {/* Core Calculation Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center">
            <div className="p-2.5 rounded-lg bg-[#FAF8F5] border border-[#EFEAE2]">
              <div className="text-[10px] text-[#857B74]">Assumed Cost Base</div>
              <div className="text-base font-bold font-mono text-[#1C1917]">₹7.00 Lakh</div>
              <div className="text-[9px] text-[#574E4A]">Operating base</div>
            </div>

            <div className="p-2.5 rounded-lg bg-[#FAF8F5] border border-[#EFEAE2]">
              <div className="text-[10px] text-[#857B74]">Reported AOV</div>
              <div className="text-base font-bold font-mono text-[#1C1917]">₹1,127</div>
              <div className="text-[9px] text-[#574E4A]">Ops Manager</div>
            </div>

            <div className="p-2.5 rounded-lg bg-[#FAF8F5] border border-[#EFEAE2]">
              <div className="text-[10px] text-[#857B74]">Contribution / Bill</div>
              <div className="text-base font-bold font-mono text-[#2E6038]">₹394.45</div>
              <div className="text-[9px] text-[#574E4A]">₹1,127 × 35%</div>
            </div>

            <div className="p-2.5 rounded-lg bg-[#FAF8F5] border border-[#EFEAE2]">
              <div className="text-[10px] text-[#857B74]">Break-Even Volume</div>
              <div className="text-base font-bold font-mono text-[#BD4F19]">≈1,775 / mo</div>
              <div className="text-[9px] text-[#574E4A]">≈59 / day (30 days)</div>
            </div>
          </div>

          {/* Volume Comparison Visual */}
          <div className="p-3.5 rounded-lg bg-[#F8F5EE] border border-[#E8E2D8] space-y-2">
            <div className="flex justify-between text-xs">
              <span className="font-semibold text-[#1C1917]">Volume Comparison:</span>
              <span className="text-[#574E4A]">
                Est. Break-Even: <strong className="text-[#BD4F19]">1,775 bills</strong> vs Reported: <strong className="text-[#2E6038]">~2,300 bills</strong>
              </span>
            </div>
            {/* Visual Bar */}
            <div className="w-full bg-[#E2DDD4] h-4 rounded-full overflow-hidden flex">
              <div className="bg-[#BD4F19] h-full" style={{ width: '77%' }} title="Break-Even: 1,775 bills (77%)" />
              <div className="bg-[#2E6038] h-full" style={{ width: '23%' }} title="Volume Above Break-Even: ~525 bills (23%)" />
            </div>
            <div className="flex justify-between text-[11px] text-[#574E4A]">
              <span>Model indicates <strong>~525 bills above estimated break-even volume</strong> if referring to same outlet & period.</span>
              <span className="italic text-[#857B74] shrink-0 ml-2">Not verified profit</span>
            </div>
          </div>

          {/* Mandatory Specific Planning Note */}
          <div className="p-3 bg-[#FAF8F5] border-l-4 border-[#BD4F19] rounded-r-lg border border-r-[#E5CEBA] border-t-[#E5CEBA] border-b-[#E5CEBA] space-y-1">
            <div className="text-[10px] font-bold text-[#BD4F19] uppercase tracking-wider flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5 text-[#BD4F19]" />
              <span>Planning Assumption Disclaimer</span>
            </div>
            <p className="text-xs text-[#44403C] leading-relaxed">
              “Break-even is an illustrative estimate based on planning assumptions. Actual outlet-level costs and blended contribution margin have not been verified.”
            </p>
          </div>
        </div>
      </div>

      {/* Required Bottom Disclaimer Banner */}
      <div className="bg-[#FAF3ED] border-l-4 border-[#BD4F19] border border-r-[#E5CEBA] border-t-[#E5CEBA] border-b-[#E5CEBA] rounded-r-lg p-2.5">
        <p className="text-[11px] text-[#44403C] leading-snug">
          <strong>Methodology Guardrail:</strong> ₹7 lakh is an assumed monthly operating-cost base, not verified fixed costs. Break-even volume is calculated to demonstrate economic feasibility under working assumptions. The model does not claim to prove actual store profitability.
        </p>
      </div>

      {/* Footnote & Bottom Bar */}
      <div className="space-y-1 pt-1">
        <div className="flex items-center justify-between text-[11px] text-[#857B74] tracking-wider uppercase pt-1.5 border-t border-[#E6DFD5]">
          <span>SCHOOL OF FUTURE · TERM 1 CAPSTONE · BEYONDBURG</span>
          <span className="font-bold text-[#BD4F19] pr-36">SLIDE 05 / 09</span>
        </div>
      </div>
    </div>
  );
};
