import React from 'react';

export const Slide6Org: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#0D172E] text-white flex flex-col justify-between p-8 md:p-12 lg:p-14 select-none relative overflow-hidden font-mono-consulting">
      {/* Top Header */}
      <div>
        <div className="text-xs md:text-sm font-semibold tracking-widest text-[#E59546] uppercase">
          5 · THE ORGANISATION
        </div>
        <div className="w-10 h-0.5 bg-[#E59546] mt-1.5 mb-3" />

        <h2 className="font-serif-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-snug">
          SOP-led operations need clear ownership for the pilot
        </h2>

        <p className="text-xs sm:text-sm text-[#BAC7D5] mt-2 leading-relaxed">
          The hierarchy is a provisional field-based map; pilot accountability is a proposed operating model.
        </p>
      </div>

      {/* Middle Grid: Flanking Cards & Center Hierarchy */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 my-auto items-center">
        {/* Left Flank (2 Cards) */}
        <div className="lg:col-span-4 space-y-4">
          {/* Card 1: Pilot Owner */}
          <div className="bg-[#132240] border-l-4 border-[#E59546] rounded-r-lg p-4 shadow-lg space-y-2">
            <div className="text-xs font-bold tracking-wider text-[#E59546] uppercase">
              PILOT OWNER
            </div>
            <p className="text-xs sm:text-[13px] text-[#CBD5E1] leading-relaxed">
              Operations Manager: target, weekly review, scale/revise/stop decision.
            </p>
          </div>

          {/* Card 2: Customer Support */}
          <div className="bg-[#132240] border-l-4 border-[#E59546] rounded-r-lg p-4 shadow-lg space-y-2">
            <div className="text-xs font-bold tracking-wider text-[#E59546] uppercase">
              CUSTOMER SUPPORT
            </div>
            <p className="text-xs sm:text-[13px] text-[#CBD5E1] leading-relaxed">
              Frontline team: assisted orders, refunds, complaints and recovery.
            </p>
          </div>
        </div>

        {/* Center: Vertical Org Hierarchy */}
        <div className="lg:col-span-4 flex flex-col items-center justify-center py-2">
          {/* Tier 1 */}
          <div className="w-full max-w-[240px] bg-[#16274A] border border-[#233E6E] py-2.5 px-4 text-center rounded text-xs sm:text-[13px] font-bold text-white tracking-wider shadow">
            FOUNDER
          </div>
          <div className="w-0.5 h-4 bg-[#E59546]" />

          {/* Tier 2 */}
          <div className="w-full max-w-[240px] bg-[#16274A] border border-[#233E6E] py-2.5 px-4 text-center rounded text-xs sm:text-[13px] font-bold text-white tracking-wider shadow">
            OPERATIONS + FINANCE
          </div>
          <div className="w-0.5 h-4 bg-[#E59546]" />

          {/* Tier 3 */}
          <div className="w-full max-w-[240px] bg-[#16274A] border border-[#233E6E] py-2.5 px-4 text-center rounded text-xs sm:text-[13px] font-bold text-white tracking-wider shadow">
            STORE MANAGER
          </div>
          <div className="w-0.5 h-4 bg-[#E59546]" />

          {/* Tier 4 */}
          <div className="w-full max-w-[240px] bg-[#16274A] border border-[#233E6E] py-2.5 px-4 text-center rounded text-xs sm:text-[13px] font-bold text-white tracking-wider shadow">
            FRONTLINE TEAM
          </div>
        </div>

        {/* Right Flank (2 Cards) */}
        <div className="lg:col-span-4 space-y-4">
          {/* Card 3: Daily Execution */}
          <div className="bg-[#132240] border-l-4 border-[#E59546] rounded-r-lg p-4 shadow-lg space-y-2">
            <div className="text-xs font-bold tracking-wider text-[#E59546] uppercase">
              DAILY EXECUTION
            </div>
            <p className="text-xs sm:text-[13px] text-[#CBD5E1] leading-relaxed">
              Store Manager: dayparts, staff rota, exceptions and issue log.
            </p>
          </div>

          {/* Card 4: Tech / Vendor */}
          <div className="bg-[#132240] border-l-4 border-[#E59546] rounded-r-lg p-4 shadow-lg space-y-2">
            <div className="text-xs font-bold tracking-wider text-[#E59546] uppercase">
              TECH / VENDOR
            </div>
            <p className="text-xs sm:text-[13px] text-[#CBD5E1] leading-relaxed">
              Menu, payments, uptime and technical escalation.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section: Weekly Review & Notes */}
      <div className="space-y-2 pt-2">
        {/* Weekly Review Box */}
        <div className="text-center py-2.5 px-4 bg-[#111F3B] border border-[#1F3660] rounded-lg">
          <p className="text-xs sm:text-[13px] text-[#BAC7D5]">
            Review weekly: uptime • failed payments • errors per 100 orders • staff-help rate • satisfaction
          </p>
        </div>

        {/* Note & Footer */}
        <p className="text-[10px] sm:text-[11px] text-[#64748B]">
          The chart shows the working structure from field discussion—not a verified formal organisation chart.
        </p>

        <div className="flex items-center justify-between text-[11px] text-[#64748B] tracking-wider uppercase pt-2 border-t border-[#1E365E]/50">
          <span>SCHOOL OF FUTURE · TERM 1 CAPSTONE · BEYONDBURG</span>
          <span>06</span>
        </div>
      </div>
    </div>
  );
};
