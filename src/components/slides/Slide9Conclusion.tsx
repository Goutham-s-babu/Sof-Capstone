import React from 'react';
import { Users, Calculator, Target, CheckCircle2 } from 'lucide-react';

export const Slide9Conclusion: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#F9F6F0] text-[#1C1917] flex flex-col justify-between p-6 sm:p-8 md:p-10 lg:p-12 select-none relative overflow-hidden font-mono-consulting border border-[#E2DDD4]">
      {/* Top Header */}
      <div>
        <div className="flex items-center justify-between">
          <div className="text-xs md:text-sm font-semibold tracking-widest text-[#BD4F19] uppercase">
            9 · CONCLUSION
          </div>
          <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-[#FAF3ED] text-[#BD4F19] border border-[#E5CEBA] uppercase tracking-wider">
            CAPSTONE SYNTHESIS
          </span>
        </div>
        <div className="w-12 h-0.5 bg-[#BD4F19] mt-1.5 mb-2" />

        <h2 className="font-serif-display text-xl sm:text-2xl lg:text-3xl font-bold text-[#1C1917] tracking-tight leading-snug max-w-4xl">
          The next stage of Beyondburg is not just about selling more burgers. It is about making better decisions.
        </h2>
      </div>

      {/* Main Balanced Layout: 55% Text / 45% Author Field Photos */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto items-center">
        {/* Left Column (7 cols): High-Contrast Large Takeaways */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-3.5">
          {/* Takeaway 1 */}
          <div className="p-4 rounded-xl bg-white border border-[#DFD7CB] shadow-xs flex items-start gap-3.5">
            <div className="p-2.5 rounded-lg bg-[#FAF3ED] text-[#BD4F19] shrink-0 mt-0.5 border border-[#E5CEBA]">
              <Users className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <div className="font-serif-display text-base sm:text-lg font-bold text-[#1C1917]">
                Understand the customer
              </div>
              <p className="text-xs sm:text-sm text-[#44403C] leading-relaxed font-medium">
                Protect the premium experience customers value.
              </p>
            </div>
          </div>

          {/* Takeaway 2 */}
          <div className="p-4 rounded-xl bg-white border border-[#DFD7CB] shadow-xs flex items-start gap-3.5">
            <div className="p-2.5 rounded-lg bg-[#EDF5EF] text-[#2E6038] shrink-0 mt-0.5 border border-[#C6E0CB]">
              <Calculator className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <div className="font-serif-display text-base sm:text-lg font-bold text-[#1C1917]">
                Understand the numbers
              </div>
              <p className="text-xs sm:text-sm text-[#44403C] leading-relaxed font-medium">
                Improve visibility into contribution and break-even.
              </p>
            </div>
          </div>

          {/* Takeaway 3 */}
          <div className="p-4 rounded-xl bg-white border border-[#DFD7CB] shadow-xs flex items-start gap-3.5">
            <div className="p-2.5 rounded-lg bg-[#FAF3ED] text-[#BD4F19] shrink-0 mt-0.5 border border-[#E5CEBA]">
              <Target className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <div className="font-serif-display text-base sm:text-lg font-bold text-[#1C1917]">
                Test before scaling
              </div>
              <p className="text-xs sm:text-sm text-[#44403C] leading-relaxed font-medium">
                Pilot the Burger Lab and measure whether customisation creates additional value.
              </p>
            </div>
          </div>

          {/* Final Standout Closing Line Banner */}
          <div className="p-4 rounded-xl bg-[#1C1917] text-white shadow-md flex items-center justify-between">
            <div className="space-y-1">
              <div className="text-[10px] uppercase tracking-wider text-[#BD4F19] font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#BD4F19] animate-pulse" />
                <span>FINAL CAPSTONE PRINCIPLE</span>
              </div>
              <div className="font-serif-display text-base sm:text-xl font-bold text-white tracking-wide">
                “Build what customers want. Make every choice count.”
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (5 cols): Author Field Photos */}
        <div className="lg:col-span-5 bg-white border border-[#DFD7CB] rounded-xl p-3.5 shadow-xs flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between border-b border-[#EFEAE2] pb-1.5">
            <span className="text-[11px] font-bold text-[#BD4F19] uppercase tracking-wider">
              AUTHOR FIELD RESEARCH
            </span>
            <span className="text-[9px] font-bold px-2 py-0.5 rounded bg-[#EDF5EF] text-[#2E6038] border border-[#C6E0CB]">
              VERIFIED PALARIVATTOM VISIT
            </span>
          </div>

          {/* Main Featured Photo: Author in the field */}
          <div className="rounded-lg overflow-hidden border border-[#DFD7CB] bg-white shadow-xs">
            <div className="relative aspect-[16/10] overflow-hidden bg-[#F3EFE6]">
              <img
                src="/assets/field-author-visit.jpg"
                alt="Author conducting field research at Beyondburg Palarivattom"
                className="w-full h-full object-cover"
                style={{ objectPosition: '55% 92%' }}
              />
              <div className="absolute top-2 left-2 bg-black/75 backdrop-blur-md px-2 py-0.5 rounded text-[9px] font-bold text-white tracking-wider uppercase">
                PRIMARY FIELD AUDIT
              </div>
            </div>
            <div className="p-2.5 bg-white border-t border-[#EFEAE2]">
              <div className="text-xs font-bold font-serif-display text-[#1C1917]">
                Field Research Visit · Beyondburg Palarivattom
              </div>
              <div className="text-[10px] text-[#574E4A] mt-0.5 leading-snug">
                Author on-site auditing store operations, counter flow, and guest hospitality
              </div>
            </div>
          </div>

          {/* Two Supporting Field Photos Side-by-Side */}
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-lg overflow-hidden border border-[#DFD7CB] bg-white shadow-xs">
              <div className="relative aspect-[16/10] overflow-hidden bg-[#F3EFE6]">
                <img
                  src="/assets/field-interview-manager.jpg"
                  alt="Field interview with Store Manager Michael"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-1.5 bg-white border-t border-[#EFEAE2] text-center">
                <div className="text-[10px] font-bold text-[#1C1917] truncate">
                  Store Manager Michael
                </div>
                <div className="text-[9px] text-[#574E4A] truncate">
                  Field Interview
                </div>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden border border-[#DFD7CB] bg-white shadow-xs">
              <div className="relative aspect-[16/10] overflow-hidden bg-[#F3EFE6]">
                <img
                  src="/assets/field-team-discussion.jpg"
                  alt="Operations review with Ops Head Mohammed Aslam"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-1.5 bg-white border-t border-[#EFEAE2] text-center">
                <div className="text-[10px] font-bold text-[#1C1917] truncate">
                  Ops Head Mohammed Aslam
                </div>
                <div className="text-[9px] text-[#574E4A] truncate">
                  Operations Review
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footnote & Bottom Bar */}
      <div className="space-y-1 pt-1">
        <p className="text-[10px] text-[#857B74]">
          Term 1 Capstone Synthesis. Primary field research conducted at Beyondburg Palarivattom, Kochi.
        </p>
        <div className="flex items-center justify-between text-[11px] text-[#857B74] tracking-wider uppercase pt-1.5 border-t border-[#E6DFD5]">
          <span>SCHOOL OF FUTURE · TERM 1 CAPSTONE · BEYONDBURG</span>
          <span className="font-bold text-[#BD4F19] pr-36">SLIDE 09 / 09</span>
        </div>
      </div>
    </div>
  );
};
