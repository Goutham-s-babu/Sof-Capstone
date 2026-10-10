import React from 'react';
import { AlertCircle, CheckCircle, HelpCircle } from 'lucide-react';

export const Slide3Market: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between p-8 md:p-14 text-[#171717] bg-[#F7F4EE] overflow-hidden">
      {/* Slide Header */}
      <div className="space-y-2 border-b border-[#171717]/10 pb-5">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#8D2929] font-semibold">
          <span>Reading 02</span>
          <span>•</span>
          <span>Market Landscape & Alternatives</span>
        </div>
        <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#171717]">
          Competing Beyond Price
        </h2>
        <p className="font-sans text-sm sm:text-base text-[#171717]/70 max-w-3xl">
          Beyondburg operates in a contested Kochi burger ecosystem alongside The Burger Junction and The Burgery. Market differentiation relies on culinary craft rather than price discounting.
        </p>
      </div>

      {/* Comparison Layout: Editorial Comparison Matrix */}
      <div className="my-auto py-2 space-y-4">
        {/* Table Comparison Container */}
        <div className="bg-white rounded-lg border border-[#171717]/15 shadow-sm overflow-hidden">
          <div className="grid grid-cols-12 bg-[#171717] text-[#F7F4EE] p-3 text-xs font-mono font-medium tracking-wider uppercase">
            <div className="col-span-3">Dimension</div>
            <div className="col-span-3 text-[#D8D3CA]">Beyondburg</div>
            <div className="col-span-3">The Burger Junction (TBJ)</div>
            <div className="col-span-3">The Burgery</div>
          </div>

          {/* Row 1: Positioning */}
          <div className="grid grid-cols-12 p-4 text-xs border-b border-[#171717]/10 items-center hover:bg-black/[0.02] transition-colors">
            <div className="col-span-3 font-mono font-bold text-[#171717]">
              Brand Positioning
            </div>
            <div className="col-span-3 font-medium text-[#8D2929] pr-3">
              Premium burger & deli experience; butchery beef, smash technique
            </div>
            <div className="col-span-3 text-[#171717]/80 pr-3">
              Established burger alternative; volume & popular urban appeal
            </div>
            <div className="col-span-3 text-[#171717]/80">
              Gourmet burger competitor; youthful casual dining proposition
            </div>
          </div>

          {/* Row 2: Directional Price Signal */}
          <div className="grid grid-cols-12 p-4 text-xs border-b border-[#171717]/10 items-center bg-[#F7F4EE]/50">
            <div className="col-span-3 font-mono font-bold text-[#171717]">
              Price Context
            </div>
            <div className="col-span-3 font-mono text-sm font-bold text-[#171717] pr-3">
              ₹390 <span className="text-[11px] font-sans font-normal text-[#171717]/70">(In-store Smash Burger, pre-tax)</span>
            </div>
            <div className="col-span-3 text-[#171717]/70 italic pr-3">
              Public menu prices vary by channel & outlet
            </div>
            <div className="col-span-3 text-[#171717]/70 italic">
              Public menu prices vary by channel & outlet
            </div>
          </div>

          {/* Row 3: Ordering Convenience */}
          <div className="grid grid-cols-12 p-4 text-xs border-b border-[#171717]/10 items-center hover:bg-black/[0.02] transition-colors">
            <div className="col-span-3 font-mono font-bold text-[#171717]">
              Ordering Journey
            </div>
            <div className="col-span-3 text-[#171717]/90 font-medium pr-3">
              Current counter ordering; proposed 4–5 self-service touchpoints
            </div>
            <div className="col-span-3 text-[#171717]/70 pr-3">
              Traditional counter & third-party aggregator channels
            </div>
            <div className="col-span-3 text-[#171717]/70">
              Counter ordering & aggregator channels
            </div>
          </div>

          {/* Row 4: Evidence Gap & Verification Needs */}
          <div className="grid grid-cols-12 p-4 text-xs items-center bg-white">
            <div className="col-span-3 font-mono font-bold text-[#747B55]">
              Evidence Gap
            </div>
            <div className="col-span-3 text-[11px] text-[#171717]/80 pr-3">
              Need empirical queue baseline & verified order basket telemetry
            </div>
            <div className="col-span-3 text-[11px] text-[#171717]/70 pr-3">
              No matched basket or identical portion comparison available
            </div>
            <div className="col-span-3 text-[11px] text-[#171717]/70">
              No matched basket study or audited footfall telemetry
            </div>
          </div>
        </div>

        {/* Methodological Caveat Card */}
        <div className="flex items-start gap-3 p-3.5 rounded-lg bg-[#D8D3CA]/30 border border-[#171717]/10 text-xs text-[#171717]/80">
          <AlertCircle className="w-4 h-4 text-[#8D2929] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-[#171717]">Academic Qualification: </strong>
            Public menu prices vary substantially across delivery apps, dine-in menus, applicable GST, packaging fees, and promotional discounts. These comparisons provide directional market context only and do not establish verified market share or absolute price rankings.
          </p>
        </div>
      </div>

      {/* Slide Footer */}
      <div className="flex items-center justify-between border-t border-[#171717]/10 pt-4 text-xs font-mono text-[#171717]/60">
        <span>Competitor review: The Burger Junction (TBJ) & The Burgery (Kochi)</span>
        <span>Only verified figure: Beyondburg ₹390 in-store pre-tax</span>
      </div>
    </div>
  );
};
