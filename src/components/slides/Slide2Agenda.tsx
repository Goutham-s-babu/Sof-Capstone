import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface Slide2AgendaProps {
  onSelectSlide?: (slideNum: number) => void;
}

export const Slide2Agenda: React.FC<Slide2AgendaProps> = ({ onSelectSlide }) => {
  const contents = [
    {
      num: '01',
      title: 'What It Is',
      desc: 'Proposition, premium product craft, and sales channels',
      slideNum: 3,
    },
    {
      num: '02',
      title: 'The Market',
      desc: 'Food-service industry context and competitor landscape',
      slideNum: 4,
    },
    {
      num: '03',
      title: 'How It Sells and Speaks',
      desc: 'Customer journey from social discovery to checkout',
      slideNum: 5,
    },
    {
      num: '04',
      title: 'The Void Question',
      desc: 'Ordering friction and measuring peak-hour time loss',
      slideNum: 6,
    },
    {
      num: '05',
      title: 'The Organisation',
      desc: 'Store operating structure, SOPs, and pilot ownership',
      slideNum: 7,
    },
    {
      num: '06',
      title: 'The Numbers That Matter',
      desc: 'Smash Burger unit economics, food costs, and margins',
      slideNum: 8,
    },
    {
      num: '07',
      title: 'Where Intelligence Changes the Game',
      desc: 'Proposed AI self-ordering pilot and financial hurdle',
      slideNum: 9,
    },
    {
      num: '08',
      title: 'The Move',
      desc: 'Sensitivity scenarios and empirical decision gates',
      slideNum: 10,
    },
    {
      num: '09',
      title: 'Conclusion',
      desc: 'Strategic synthesis and 4-step execution roadmap',
      slideNum: 11,
    },
    {
      num: '10',
      title: 'Field Research & Acknowledgments',
      desc: 'On-site Palarivattom audits, interviews, and evaluator Q&A',
      slideNum: 12,
    },
  ];

  const leftColumn = contents.slice(0, 5);
  const rightColumn = contents.slice(5, 10);

  return (
    <div className="w-full h-full bg-[#F9F6F0] text-[#1C1917] flex flex-col justify-between p-8 md:p-12 lg:p-14 select-none relative overflow-hidden font-mono-consulting border border-[#E2DDD4]">
      {/* Top Header Tag */}
      <div className="z-10 flex items-center justify-between border-b border-[#E2DDD4] pb-4">
        <div>
          <div className="text-xs sm:text-sm font-semibold tracking-widest text-[#BD4F19] uppercase">
            TERM 1 CAPSTONE · OUTLINE
          </div>
          <div className="w-12 h-0.5 bg-[#BD4F19] mt-2" />
        </div>

        <span className="text-[11px] text-[#857B74] uppercase tracking-wider font-semibold">
          10 SECTIONS
        </span>
      </div>

      {/* Main Title Area */}
      <div className="z-10 pt-4 pb-2 space-y-1">
        <h1 className="font-serif-display text-4xl sm:text-5xl font-bold tracking-tight text-[#1C1917]">
          Table of Contents
        </h1>
        <p className="text-xs sm:text-sm text-[#574E4A] font-normal">
          Key topics and analytical areas covered in this capstone presentation.
        </p>
      </div>

      {/* Clean 2-Column Table of Contents List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3.5 my-auto z-10 py-2">
        {/* Left Column (01 to 05) */}
        <div className="space-y-3">
          {leftColumn.map((item) => (
            <button
              key={item.num}
              onClick={() => onSelectSlide?.(item.slideNum)}
              className="w-full text-left flex items-start gap-4 p-3 rounded-xl bg-white/80 hover:bg-white border border-[#DFD7CB] hover:border-[#BD4F19]/50 transition-all group shadow-2xs hover:shadow-xs"
            >
              <span className="font-mono text-sm sm:text-base font-bold text-[#BD4F19] mt-0.5 shrink-0 w-7">
                {item.num}
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif-display text-sm sm:text-base font-bold text-[#1C1917] group-hover:text-[#BD4F19] transition-colors truncate">
                    {item.title}
                  </h3>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#BD4F19] opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-2" />
                </div>
                <p className="text-[11px] sm:text-xs text-[#574E4A] mt-0.5 leading-snug">
                  {item.desc}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Right Column (06 to 10) */}
        <div className="space-y-3">
          {rightColumn.map((item) => (
            <button
              key={item.num}
              onClick={() => onSelectSlide?.(item.slideNum)}
              className="w-full text-left flex items-start gap-4 p-3 rounded-xl bg-white/80 hover:bg-white border border-[#DFD7CB] hover:border-[#BD4F19]/50 transition-all group shadow-2xs hover:shadow-xs"
            >
              <span className="font-mono text-sm sm:text-base font-bold text-[#BD4F19] mt-0.5 shrink-0 w-7">
                {item.num}
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif-display text-sm sm:text-base font-bold text-[#1C1917] group-hover:text-[#BD4F19] transition-colors truncate">
                    {item.title}
                  </h3>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#BD4F19] opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-2" />
                </div>
                <p className="text-[11px] sm:text-xs text-[#574E4A] mt-0.5 leading-snug">
                  {item.desc}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="z-10 flex items-center justify-between text-[11px] sm:text-xs text-[#857B74] tracking-wider uppercase pt-4 border-t border-[#E2DDD4]">
        <span>SCHOOL OF FUTURE · TERM 1 CAPSTONE · BEYONDBURG</span>
        <span className="font-bold text-[#BD4F19]">02</span>
      </div>
    </div>
  );
};
