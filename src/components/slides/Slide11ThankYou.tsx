import React from 'react';
import { MessageSquare, Users, Store, Award, CheckCircle2 } from 'lucide-react';

interface Slide11ThankYouProps {
  onRestart?: () => void;
}

export const Slide11ThankYou: React.FC<Slide11ThankYouProps> = ({ onRestart }) => {
  return (
    <div className="w-full h-full bg-[#F9F6F0] text-[#1C1917] flex flex-col justify-between p-8 md:p-12 lg:p-14 select-none relative overflow-hidden font-mono-consulting border border-[#E2DDD4]">
      {/* Top Header Tag */}
      <div className="z-10 flex items-center justify-between border-b border-[#E2DDD4] pb-4">
        <div>
          <div className="text-xs sm:text-sm font-semibold tracking-widest text-[#BD4F19] uppercase">
            TERM 1 CAPSTONE · FIELD RESEARCH & ACKNOWLEDGMENTS
          </div>
          <div className="w-12 h-0.5 bg-[#BD4F19] mt-2" />
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3.5 py-1 rounded-full bg-[#BD4F19] text-white font-bold text-[11px] tracking-wider uppercase shadow-xs">
            PALARIVATTOM, KOCHI · FIELD STUDY
          </span>
        </div>
      </div>

      {/* Main Grid: Left Narrative & Acknowledgments, Right 2x2 Authentic Field Photo Gallery */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center z-10 my-auto">
        {/* Left Column (5 cols): Executive Closing & Acknowledgments */}
        <div className="lg:col-span-5 space-y-5">
          <div className="space-y-2">
            <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1C1917] leading-[1.05]">
              Thank You.
            </h1>
            <p className="font-serif-display text-xl sm:text-2xl italic text-[#44403C] font-normal leading-snug">
              Grounded in field observation, operational reality, and empirical research.
            </p>
          </div>

          <p className="text-xs sm:text-sm text-[#574E4A] leading-relaxed">
            Special thanks to <strong className="text-[#1C1917] font-semibold">Beyondburg Palarivattom</strong>, Operations Head <strong className="text-[#1C1917] font-semibold">Mohammed Aslam</strong>, Store Manager <strong className="text-[#1C1917] font-semibold">Michael</strong>, the on-ground store crew, and the <strong className="text-[#1C1917] font-semibold">School of Future</strong> faculty and evaluators.
          </p>

          {/* Field Research Summary Pillars */}
          <div className="space-y-2.5 pt-2">
            <div className="p-3.5 rounded-xl bg-white border border-[#DFD7CB] shadow-xs flex items-start gap-3">
              <Store className="w-4 h-4 text-[#BD4F19] mt-0.5 shrink-0" />
              <div>
                <div className="text-xs font-bold text-[#1C1917]">On-Site Store Observations</div>
                <div className="text-[11px] text-[#574E4A] leading-tight mt-0.5">
                  Direct physical audit of counter queueing, customer ordering friction, and dining throughput.
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-[#DFD7CB] shadow-xs flex items-start gap-3">
              <Users className="w-4 h-4 text-[#BD4F19] mt-0.5 shrink-0" />
              <div>
                <div className="text-xs font-bold text-[#1C1917]">Store & Ops Management Interviews</div>
                <div className="text-[11px] text-[#574E4A] leading-tight mt-0.5">
                  In-depth dialogue with Ops Head Mohammed Aslam and Store Manager Michael on unit economics and operations.
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#F6EDE6] border border-[#EDD9C8] shadow-xs flex items-start gap-3">
              <MessageSquare className="w-4 h-4 text-[#BD4F19] mt-0.5 shrink-0" />
              <div>
                <div className="text-xs font-bold text-[#7C2D12]">Open for Questions & Discussion</div>
                <div className="text-[11px] text-[#7C2D12]/80 leading-tight mt-0.5">
                  Prepared to defend the unit economics, technology pilot specifications, and strategic roadmap.
                </div>
              </div>
            </div>
          </div>

          {/* Restart Presentation Action */}
          {onRestart && (
            <div className="pt-2">
              <button
                onClick={onRestart}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1C1917] text-[#F9F6F0] hover:bg-[#332E2A] text-xs font-mono font-semibold transition-colors shadow-xs"
              >
                <span>Return to Cover Slide</span>
                <span>↺</span>
              </button>
            </div>
          )}
        </div>

        {/* Right Column (7 cols): 2x2 Editorial Photo Mosaic of Real Store Visits */}
        <div className="lg:col-span-7">
          <div className="grid grid-cols-2 gap-3.5 sm:gap-4">
            {/* Photo 1: Author clearly visible in front of counter */}
            <div className="group relative rounded-xl overflow-hidden bg-white border border-[#DFD7CB] shadow-sm flex flex-col">
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#EFECE4]">
                <img
                  src="/assets/field-author-visit.jpg"
                  alt="Author Field Visit at Beyondburg Palarivattom Counter"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  style={{ objectPosition: 'center 85%' }}
                />
              </div>
              <div className="p-2.5 bg-white border-t border-[#EFECE4]">
                <div className="text-[11px] font-bold text-[#1C1917] truncate">
                  Field Visit & Counter Audit
                </div>
                <div className="text-[10px] text-[#857B74] truncate">
                  Author on-site at Palarivattom ordering desk
                </div>
              </div>
            </div>

            {/* Photo 2: Store Manager Michael */}
            <div className="group relative rounded-xl overflow-hidden bg-white border border-[#DFD7CB] shadow-sm flex flex-col">
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#EFECE4]">
                <img
                  src="/assets/field-interview-manager.jpg"
                  alt="Store Manager Michael Interview"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
              </div>
              <div className="p-2.5 bg-white border-t border-[#EFECE4]">
                <div className="text-[11px] font-bold text-[#1C1917] truncate">
                  Store Manager Interview
                </div>
                <div className="text-[10px] text-[#857B74] truncate">
                  Field dialogue with Store Manager Michael
                </div>
              </div>
            </div>

            {/* Photo 3: Ops Head Mohammed Aslam in Group Discussion */}
            <div className="group relative rounded-xl overflow-hidden bg-white border border-[#DFD7CB] shadow-sm flex flex-col">
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#EFECE4]">
                <img
                  src="/assets/field-team-discussion.jpg"
                  alt="Operations Review with Ops Head Mohammed Aslam"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
              </div>
              <div className="p-2.5 bg-white border-t border-[#EFECE4]">
                <div className="text-[11px] font-bold text-[#1C1917] truncate">
                  Ops Head Strategy Session
                </div>
                <div className="text-[10px] text-[#857B74] truncate">
                  Operations review with Ops Head Mohammed Aslam
                </div>
              </div>
            </div>

            {/* Photo 4: Counter Architecture & Kitchen Flow */}
            <div className="group relative rounded-xl overflow-hidden bg-white border border-[#DFD7CB] shadow-sm flex flex-col">
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#EFECE4]">
                <img
                  src="/assets/field-store-counter.jpg"
                  alt="Store Architecture & Service Counter"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  style={{ objectPosition: 'center 75%' }}
                />
              </div>
              <div className="p-2.5 bg-white border-t border-[#EFECE4]">
                <div className="text-[11px] font-bold text-[#1C1917] truncate">
                  Store Architecture & Kitchen Flow
                </div>
                <div className="text-[10px] text-[#857B74] truncate">
                  Ordering displays, POS & equipment layout
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="z-10 flex items-center justify-between text-[11px] sm:text-xs text-[#857B74] tracking-wider uppercase pt-3.5 border-t border-[#E2DDD4]">
        <span>SCHOOL OF FUTURE · TERM 1 CAPSTONE · BEYONDBURG</span>
        <span className="font-bold text-[#BD4F19]">11</span>
      </div>
    </div>
  );
};
