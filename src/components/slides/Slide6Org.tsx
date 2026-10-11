import React from 'react';

export const Slide6Org: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#F9F6F0] text-[#1C1917] flex flex-col justify-between p-8 md:p-12 lg:p-14 select-none relative overflow-hidden font-mono-consulting border border-[#E2DDD4]">
      {/* Top Header */}
      <div>
        <div className="text-xs md:text-sm font-semibold tracking-widest text-[#BD4F19] uppercase">
          5 · THE ORGANISATION
        </div>
        <div className="w-12 h-0.5 bg-[#BD4F19] mt-1.5 mb-3" />

        <h2 className="font-serif-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1C1917] tracking-tight leading-snug">
          SOP-led operations need clear ownership for the pilot
        </h2>

        <p className="text-xs sm:text-sm text-[#574E4A] mt-2 leading-relaxed">
          The hierarchy is a provisional field-based map; pilot accountability is a proposed operating model.
        </p>
      </div>

      {/* Middle Grid: Flanking Cards & Center Hierarchy */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 my-auto items-center">
        {/* Left Flank (2 Governance Cards) */}
        <div className="lg:col-span-4 space-y-4">
          {/* Card 1: Pilot Owner */}
          <div className="bg-[#F3EFE6] border border-[#E2DDD4] rounded-lg p-4 shadow-2xs space-y-2">
            <div className="text-xs font-bold tracking-wider text-[#BD4F19] uppercase">
              PILOT OWNER
            </div>
            <p className="text-xs sm:text-[13px] text-[#44403C] leading-relaxed">
              Operations Manager: target, weekly review, scale/revise/stop decision.
            </p>
          </div>

          {/* Card 2: Customer Support */}
          <div className="bg-[#F3EFE6] border border-[#E2DDD4] rounded-lg p-4 shadow-2xs space-y-2">
            <div className="text-xs font-bold tracking-wider text-[#BD4F19] uppercase">
              CUSTOMER SUPPORT
            </div>
            <p className="text-xs sm:text-[13px] text-[#44403C] leading-relaxed">
              Frontline team: assisted orders, refunds, complaints and recovery.
            </p>
          </div>
        </div>

        {/* Center: Vertical Org Hierarchy Tree */}
        <div className="lg:col-span-4 flex flex-col items-center justify-center py-2">
          {/* Tier 1 */}
          <div className="w-full max-w-[240px] bg-white border-2 border-[#BD4F19] py-2.5 px-4 text-center rounded-lg text-xs sm:text-[13px] font-bold text-[#1C1917] tracking-wider shadow-xs">
            FOUNDER
          </div>
          <div className="w-0.5 h-3.5 bg-[#BD4F19]" />

          {/* Tier 2 */}
          <div className="w-full max-w-[240px] bg-white border border-[#DFD7CB] py-2.5 px-4 text-center rounded-lg text-xs sm:text-[13px] font-bold text-[#1C1917] tracking-wider shadow-xs">
            OPERATIONS + FINANCE
          </div>
          <div className="w-0.5 h-3.5 bg-[#BD4F19]" />

          {/* Tier 3 */}
          <div className="w-full max-w-[240px] bg-white border border-[#DFD7CB] py-2.5 px-4 text-center rounded-lg text-xs sm:text-[13px] font-bold text-[#1C1917] tracking-wider shadow-xs">
            STORE MANAGER
          </div>
          <div className="w-0.5 h-3.5 bg-[#BD4F19]" />

          {/* Tier 4 */}
          <div className="w-full max-w-[240px] bg-white border border-[#DFD7CB] py-2.5 px-4 text-center rounded-lg text-xs sm:text-[13px] font-bold text-[#1C1917] tracking-wider shadow-xs">
            FRONTLINE TEAM
          </div>
        </div>

        {/* Right Flank (2 Governance Cards) */}
        <div className="lg:col-span-4 space-y-4">
          {/* Card 3: Daily Execution */}
          <div className="bg-[#F3EFE6] border border-[#E2DDD4] rounded-lg p-4 shadow-2xs space-y-2">
            <div className="text-xs font-bold tracking-wider text-[#BD4F19] uppercase">
              DAILY EXECUTION
            </div>
            <p className="text-xs sm:text-[13px] text-[#44403C] leading-relaxed">
              Store Manager: dayparts, staff rota, exceptions and issue log.
            </p>
          </div>

          {/* Card 4: Tech / Vendor */}
          <div className="bg-[#F3EFE6] border border-[#E2DDD4] rounded-lg p-4 shadow-2xs space-y-2">
            <div className="text-xs font-bold tracking-wider text-[#BD4F19] uppercase">
              TECH / VENDOR
            </div>
            <p className="text-xs sm:text-[13px] text-[#44403C] leading-relaxed">
              Menu, payments, uptime and technical escalation.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section: Weekly Review & Notes */}
      <div className="space-y-1.5 pt-1">
        {/* Weekly Review Box */}
        <div className="text-center py-2.5 px-4 bg-white border border-[#DFD7CB] rounded-lg shadow-2xs">
          <p className="text-xs sm:text-[13px] text-[#1C1917] font-semibold">
            Review weekly: uptime • failed payments • errors per 100 orders • staff-help rate • satisfaction
          </p>
        </div>

        {/* Note & Footer */}
        <p className="text-[10px] sm:text-[11px] text-[#857B74]">
          The chart shows the working structure from field discussion—not a verified formal organisation chart.
        </p>

        <div className="flex items-center justify-between text-[11px] text-[#857B74] tracking-wider uppercase pt-2 border-t border-[#E6DFD5]">
          <span>SCHOOL OF FUTURE · TERM 1 CAPSTONE · BEYONDBURG</span>
          <span>07</span>
        </div>
      </div>
    </div>
  );
};
