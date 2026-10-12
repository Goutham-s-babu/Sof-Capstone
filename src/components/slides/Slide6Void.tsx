import React from 'react';
import { Sparkles, Clock } from 'lucide-react';

export const Slide6Void: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#F9F6F0] text-[#1C1917] flex flex-col justify-between p-8 md:p-12 lg:p-14 select-none relative overflow-hidden font-mono-consulting border border-[#E2DDD4]">
      {/* Top Header */}
      <div>
        <div className="flex items-center justify-between">
          <div className="text-xs md:text-sm font-semibold tracking-widest text-[#BD4F19] uppercase">
            6 · THE VOID QUESTION
          </div>
          <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-[#FAF3ED] text-[#BD4F19] border border-[#E5CEBA] uppercase tracking-wider">
            FIELD OBSERVATION & POSITIONING
          </span>
        </div>
        <div className="w-12 h-0.5 bg-[#BD4F19] mt-1.5 mb-2.5" />

        <h2 className="font-serif-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1C1917] tracking-tight leading-snug">
          The void question: market expectations and store-level friction
        </h2>

        <p className="text-xs sm:text-sm text-[#574E4A] mt-1.5 leading-relaxed">
          Examining customer appetite for elevated dining alongside operational realities observed on the floor.
        </p>
      </div>

      {/* Main Content: Exactly Two Sections (Market Gap & Friction Point) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-auto items-stretch">
        {/* Section 1: Market Gap */}
        <div className="bg-white border border-[#DFD7CB] rounded-xl p-6 lg:p-7 shadow-xs flex flex-col justify-between space-y-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#BD4F19]" />
                <span className="text-xs font-bold text-[#BD4F19] uppercase tracking-wider">
                  A · MARKET GAP
                </span>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#FAF3ED] text-[#BD4F19] border border-[#E5CEBA]">
                POSITIONING READ
              </span>
            </div>

            <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-[#1C1917] leading-snug">
              “Customers looking for a premium burger experience may value taste, ingredient quality and the overall dining experience—not just convenience or low prices.”
            </h3>
          </div>

          <div className="p-3.5 bg-[#FAF8F5] rounded-lg border border-[#EFEAE2] text-[11px] text-[#574E4A] leading-relaxed">
            <strong className="text-[#1C1917]">Analytical context:</strong> Presented as an interpretation of Beyondburg’s premium positioning and field observations, not as a proven market-wide gap.
          </div>
        </div>

        {/* Section 2: Friction Point */}
        <div className="bg-white border border-[#DFD7CB] rounded-xl p-6 lg:p-7 shadow-xs flex flex-col justify-between space-y-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#D97706]" />
                <span className="text-xs font-bold text-[#D97706] uppercase tracking-wider">
                  B · FRICTION POINT
                </span>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#FEF3C7] text-[#92400E] border border-[#FDE68A]">
                STORE AUDIT
              </span>
            </div>

            <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-[#1C1917] leading-snug">
              “Ordering and billing can take too long during busy periods, which may frustrate customers.”
            </h3>
          </div>

          <div className="p-3.5 bg-[#FAF8F5] rounded-lg border border-[#EFEAE2] text-[11px] text-[#574E4A] leading-relaxed">
            <strong className="text-[#1C1917]">Operational context:</strong> Grounded in outlet research and operations-manager discussions at Palarivattom. Strictly avoids inventing queue durations, abandoned orders, or lost sales.
          </div>
        </div>
      </div>

      {/* Footnote & Bottom Bar */}
      <div className="space-y-1.5 pt-1">
        <p className="text-[10px] sm:text-[11px] text-[#857B74]">
          Sources: On-site store observation and operations-manager discussion at Beyondburg Palarivattom.
        </p>
        <div className="flex items-center justify-between text-[11px] text-[#857B74] tracking-wider uppercase pt-2 border-t border-[#E6DFD5]">
          <span>SCHOOL OF FUTURE · TERM 1 CAPSTONE · BEYONDBURG</span>
          <span className="font-bold text-[#BD4F19] pr-36">SLIDE 06 / 09</span>
        </div>
      </div>
    </div>
  );
};
