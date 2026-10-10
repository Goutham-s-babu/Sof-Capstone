import React from 'react';
import { AlertTriangle, TrendingUp, IndianRupee, Layers, FileSpreadsheet } from 'lucide-react';

export const Slide6Economics: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between p-8 md:p-14 text-[#171717] bg-[#F7F4EE] overflow-hidden">
      {/* Slide Header */}
      <div className="space-y-2 border-b border-[#171717]/10 pb-5">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#8D2929] font-semibold">
          <span>Reading 06</span>
          <span>•</span>
          <span>Financial Lenses & Unit Economics</span>
        </div>
        <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#171717]">
          Understand the Economics Before Scaling
        </h2>
        <p className="font-sans text-sm sm:text-base text-[#171717]/70 max-w-3xl">
          Two distinct financial lenses reveal why cost discipline matters. Statutory filings and manager-reported outlet estimates represent different scopes and must not be conflated.
        </p>
      </div>

      {/* Main Grid: Dual Financial Lenses + Smash Burger Cost Waterfall */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto py-2">
        {/* Dataset A: Historical Legal-Entity Accounts (FY2024 MCA Filings) */}
        <div className="lg:col-span-4 bg-white rounded-lg border border-[#171717]/15 p-4 shadow-sm flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-[#171717]/10 pb-2">
              <span className="text-xs font-mono uppercase tracking-wider font-bold text-[#171717]">
                Lens A • Statutory Accounts
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/5 text-[#171717]/80">
                FY2024 MCA Filing
              </span>
            </div>

            <div className="space-y-2">
              <div>
                <span className="text-[11px] font-mono text-[#171717]/60 block uppercase">
                  Revenue From Operations
                </span>
                <span className="font-mono text-2xl font-bold text-[#171717]">
                  ₹12.01 <span className="text-sm font-sans font-normal text-[#171717]/70">Lakh</span>
                </span>
              </div>

              <div className="pt-2 border-t border-[#171717]/10">
                <span className="text-[11px] font-mono text-[#171717]/60 block uppercase">
                  Other Operating Expenses
                </span>
                <span className="font-mono text-xl font-semibold text-[#8D2929]">
                  ₹11.58 <span className="text-sm font-sans font-normal text-[#171717]/70">Lakh</span>
                </span>
                <span className="text-[11px] text-[#171717]/70 block mt-0.5">
                  Rent (₹5.89L) + Utilities (₹2.78L) = <strong>~75%</strong> of other expenses
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#171717]/10">
                <div>
                  <span className="text-[10px] font-mono text-[#171717]/60 block">Profit Before Tax</span>
                  <span className="font-mono text-sm font-bold text-[#171717]">₹43,380</span>
                  <span className="text-[10px] font-mono text-[#171717]/60 block">(3.61% margin)</span>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#171717]/60 block">Profit After Tax</span>
                  <span className="font-mono text-sm font-bold text-[#747B55]">~₹1,010</span>
                  <span className="text-[10px] font-mono text-[#171717]/60 block">(Post ₹42.3k def. tax)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-3 pt-2 border-t border-[#171717]/10 text-[10px] font-mono text-[#171717]/60">
            Note: Related-party borrowings of ₹95.82 lakh reported on balance sheet.
          </div>
        </div>

        {/* Dataset B: Current Outlet Estimate (Manager-Reported Inputs) */}
        <div className="lg:col-span-4 bg-white rounded-lg border border-[#171717]/15 p-4 shadow-sm flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-[#171717]/10 pb-2">
              <span className="text-xs font-mono uppercase tracking-wider font-bold text-[#171717]">
                Lens B • Outlet Estimate
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#747B55]/15 text-[#747B55] font-bold">
                Manager Input
              </span>
            </div>

            <div className="space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <span className="text-[11px] font-mono text-[#171717]/60 block uppercase">
                    Monthly Bills
                  </span>
                  <span className="font-mono text-xl font-bold text-[#171717]">~2,300</span>
                  <span className="text-[10px] text-[#171717]/60 block">Palarivattom store</span>
                </div>
                <div>
                  <span className="text-[11px] font-mono text-[#171717]/60 block uppercase">
                    Average Order Value
                  </span>
                  <span className="font-mono text-xl font-bold text-[#171717]">~₹1,127</span>
                  <span className="text-[10px] text-[#171717]/60 block">Blended AOV</span>
                </div>
              </div>

              <div className="pt-2 border-t border-[#171717]/10">
                <span className="text-[11px] font-mono text-[#171717]/60 block uppercase">
                  Implied Monthly Sales
                </span>
                <span className="font-mono text-2xl font-bold text-[#171717]">
                  ₹25.92 <span className="text-sm font-sans font-normal text-[#171717]/70">Lakh</span>
                </span>
                <span className="text-[10px] font-mono text-[#171717]/60 block">
                  (2,300 bills × ₹1,127 = ₹25,92,100/month)
                </span>
              </div>

              <div className="pt-2 border-t border-[#171717]/10">
                <span className="text-[11px] font-mono text-[#171717]/60 block uppercase">
                  Annualised Estimate
                </span>
                <span className="font-mono text-xl font-bold text-[#747B55]">
                  ~₹3.11 <span className="text-sm font-sans font-normal text-[#171717]/70">Crore</span>
                </span>
                <span className="text-[10px] text-[#171717]/60 block">Assuming monthly level persists</span>
              </div>
            </div>
          </div>

          <div className="mt-3 p-2 rounded bg-amber-50 border border-amber-200 text-[10px] text-amber-900 leading-tight">
            <strong>Strict Warning:</strong> Do not combine these datasets. They represent different entities, periods, and reporting perimeters.
          </div>
        </div>

        {/* Section C: Smash Burger Dine-in Cost Waterfall */}
        <div className="lg:col-span-4 bg-white rounded-lg border border-[#8D2929]/30 p-4 shadow-sm flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-[#171717]/10 pb-2">
              <span className="text-xs font-mono uppercase tracking-wider font-bold text-[#8D2929]">
                Unit Waterfall • Smash Burger
              </span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#8D2929]/10 text-[#8D2929] font-bold">
                Dine-in
              </span>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between py-1 bg-[#F7F4EE] px-2.5 rounded">
                <span className="font-mono text-[#171717]">In-Store Price (Pre-Tax)</span>
                <span className="font-mono font-bold text-sm text-[#171717]">₹390.00</span>
              </div>

              <div className="flex items-center justify-between py-1 px-2.5 rounded text-[#8D2929] bg-[#8D2929]/5">
                <div>
                  <span className="font-mono block">Less: Ingredient Cost</span>
                  <span className="text-[10px] font-sans text-[#171717]/60">(General 35–40% range)</span>
                </div>
                <span className="font-mono font-bold">-₹136.50 – ₹156.00</span>
              </div>

              <div className="flex items-center justify-between py-2 px-2.5 rounded bg-black/5 border border-black/10">
                <div>
                  <span className="font-mono font-bold block text-[#171717]">Balance After Ingredients</span>
                  <span className="text-[9px] font-sans text-[#171717]/60">Price less ingredients</span>
                </div>
                <span className="font-mono font-bold text-base text-[#171717]">₹234 – ₹253.50</span>
              </div>
            </div>

            {/* Illustrative Scenario */}
            <div className="pt-2 border-t border-[#171717]/10 text-[11px] space-y-1">
              <span className="font-mono text-[10px] text-[#747B55] font-bold uppercase block">
                Separate Contribution Scenario (30–40%):
              </span>
              <p className="font-mono text-xs text-[#171717]/80">
                Illustrative contribution: <strong>₹117.00 – ₹156.00</strong> per burger
              </p>
            </div>
          </div>

          <div className="mt-3 p-2 rounded bg-[#8D2929]/10 border border-[#8D2929]/25 text-[10px] text-[#8D2929] leading-tight">
            <strong>CRITICAL:</strong> Balance after ingredients is <u>NOT profit or verified contribution margin</u> (excludes staff, rent, utilities, waste, card fees).
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-[#171717]/10 pt-4 text-xs font-mono text-[#171717]/60">
        <span>MCA Filings (Legal Entity) vs Palarivattom Manager Telemetry (Outlet Estimate)</span>
        <span className="text-[#8D2929] font-medium">Accurate Arithmetic • Clear Provenance</span>
      </div>
    </div>
  );
};
