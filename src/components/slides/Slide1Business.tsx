import React from 'react';

export const Slide1Business: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#F9F6F0] text-[#1C1917] flex flex-col justify-between p-8 md:p-12 lg:p-14 select-none relative overflow-hidden font-mono-consulting border border-[#E2DDD4]">
      {/* Top Header */}
      <div>
        <div className="flex items-center justify-between">
          <div className="text-xs md:text-sm font-semibold tracking-widest text-[#BD4F19] uppercase">
            1 · WHAT IT IS AND HOW IT MAKES MONEY
          </div>
          <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-[#FAF3ED] text-[#BD4F19] border border-[#E5CEBA] uppercase tracking-wider">
            PRIMARY FIELD DATA
          </span>
        </div>
        <div className="w-12 h-0.5 bg-[#BD4F19] mt-1.5 mb-2.5" />

        <h2 className="font-serif-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1C1917] tracking-tight leading-snug">
          A premium burger restaurant in Kochi with an experience-led model
        </h2>

        <p className="text-xs sm:text-sm text-[#574E4A] mt-1.5 leading-relaxed">
          Founded in 2017, Beyondburg combines artisanal smash technique with high-ticket sit-down hospitality.
        </p>
      </div>

      {/* Main Grid: Left Data & Pillars, Right Authentic Store Photo */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center my-auto">
        {/* Left Column (7 cols): 3 Supporting Points + 3 Metric Callouts */}
        <div className="lg:col-span-7 space-y-4">
          {/* 3 Core Pillars in Clean Editorial Surface */}
          <div className="bg-white border border-[#DFD7CB] rounded-xl shadow-xs p-5 space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <div className="text-[11px] font-bold text-[#BD4F19] uppercase tracking-wider mb-1">
                  WHAT IT SELLS
                </div>
                <p className="text-xs text-[#44403C] leading-relaxed">
                  Artisanal smash burgers, deli sandwiches, and sides with fresh butchery cuts and brioche.
                </p>
              </div>

              <div>
                <div className="text-[11px] font-bold text-[#BD4F19] uppercase tracking-wider mb-1">
                  HOW IT EARNS
                </div>
                <p className="text-xs text-[#44403C] leading-relaxed">
                  High Average Order Value driven by seated group dining, sides, and premium beverage pairings.
                </p>
              </div>

              <div>
                <div className="text-[11px] font-bold text-[#BD4F19] uppercase tracking-wider mb-1">
                  CHANNEL PROFILE
                </div>
                <p className="text-xs text-[#44403C] leading-relaxed">
                  Heavy dine-in orientation where customer experience and hospitality protect pricing power.
                </p>
              </div>
            </div>
          </div>

          {/* 3 Metric Callouts */}
          <div className="grid grid-cols-3 gap-3.5">
            {/* Metric 1 */}
            <div className="bg-[#F3EFE6] border border-[#E2DDD4] rounded-lg p-3.5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#BD4F19]">
                    REPORTED
                  </span>
                </div>
                <div className="text-2xl sm:text-3xl font-bold font-serif-display text-[#1C1917] border-b border-[#BD4F19] pb-1.5">
                  ₹1,127
                </div>
              </div>
              <div className="mt-2">
                <div className="text-xs text-[#1C1917] font-semibold">Average Order Value</div>
                <div className="text-[10px] text-[#857B74] mt-0.5">Reported by Ops Manager</div>
              </div>
            </div>

            {/* Metric 2 */}
            <div className="bg-[#F3EFE6] border border-[#E2DDD4] rounded-lg p-3.5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#BD4F19]">
                    REPORTED
                  </span>
                </div>
                <div className="text-2xl sm:text-3xl font-bold font-serif-display text-[#1C1917] border-b border-[#BD4F19] pb-1.5">
                  ~2,300
                </div>
              </div>
              <div className="mt-2">
                <div className="text-xs text-[#1C1917] font-semibold">Monthly Bills</div>
                <div className="text-[10px] text-[#857B74] mt-0.5">~₹25.9L implied monthly gross</div>
              </div>
            </div>

            {/* Metric 3 */}
            <div className="bg-[#F3EFE6] border border-[#E2DDD4] rounded-lg p-3.5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#BD4F19]">
                    REPORTED
                  </span>
                </div>
                <div className="text-2xl sm:text-3xl font-bold font-serif-display text-[#1C1917] border-b border-[#BD4F19] pb-1.5">
                  77% / 23%
                </div>
              </div>
              <div className="mt-2">
                <div className="text-xs text-[#1C1917] font-semibold">Dine-in / Takeaway</div>
                <div className="text-[10px] text-[#857B74] mt-0.5">Sit-down bistro model</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (5 cols): Authentic Beyondburg Photograph Card */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <div className="bg-white border border-[#DFD7CB] rounded-2xl p-4 shadow-md space-y-3">
            {/* Real Store Photo */}
            <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-[#EFECE4] border border-[#E8E2D8]">
              <img
                src="/assets/field-store-counter.jpg"
                alt="Beyondburg Palarivattom Store Counter & Open Kitchen"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center 75%' }}
              />
              <div className="absolute top-2.5 right-2.5 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-bold text-white tracking-wider uppercase">
                ON-SITE AUDIT · KOCHI
              </div>
            </div>

            {/* Brand Logo & Positioning Note */}
            <div className="flex items-center justify-between pt-1">
              <img
                src="/assets/beyondburg-logo.svg"
                alt="Beyondburg Wordmark"
                className="h-7 w-auto object-contain"
              />
              <span className="text-[10px] font-semibold text-[#857B74] uppercase tracking-wider">
                Palarivattom Outlet
              </span>
            </div>

            <p className="text-xs text-[#574E4A] leading-relaxed pt-1 border-t border-[#EFEAE2]">
              <strong className="text-[#1C1917]">Fast-casual-plus model:</strong> Plated hospitality and artisanal execution command a ₹1,127 ticket size, distinguishing Beyondburg from mass fast-food chains.
            </p>
          </div>
        </div>
      </div>

      {/* Footnote & Bottom Bar */}
      <div className="space-y-1.5 pt-1">
        <p className="text-[10px] sm:text-[11px] text-[#857B74]">
          Sources: Field interview with Operations Manager Mohammed Aslam; Beyondburg Palarivattom store audit. Cost percentages are manager-reported.
        </p>
        <div className="flex items-center justify-between text-[11px] text-[#857B74] tracking-wider uppercase pt-2 border-t border-[#E6DFD5]">
          <span>SCHOOL OF FUTURE · TERM 1 CAPSTONE · BEYONDBURG</span>
          <span className="font-bold text-[#BD4F19] pr-36">SLIDE 01 / 09</span>
        </div>
      </div>
    </div>
  );
};
