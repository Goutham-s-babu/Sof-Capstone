import React from 'react';
import {
  Compass,
  TrendingUp,
  Clock,
  Users2,
  DollarSign,
  Cpu,
  Layers,
  Award,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

interface Slide2AgendaProps {
  onSelectSlide?: (slideNum: number) => void;
}

export const Slide2Agenda: React.FC<Slide2AgendaProps> = ({ onSelectSlide }) => {
  const agendaSections = [
    {
      phase: 'PHASE 01',
      phaseTitle: 'Business & Market Context',
      color: '#BD4F19',
      items: [
        {
          num: '01',
          targetSlide: 3,
          category: '1 · WHAT IT IS',
          title: 'Proposition & Business Model',
          desc: 'Premium burger craft, 35–40% food cost tension, and 77% dine-in revenue mix.',
          icon: Compass,
        },
        {
          num: '02',
          targetSlide: 4,
          category: '2 · THE MARKET',
          title: 'Macro Food Services & Local Peers',
          desc: '₹6.96L Cr food market context vs. Kochi artisanal burger competitors (TBJ, Burgery).',
          icon: TrendingUp,
        },
      ],
    },
    {
      phase: 'PHASE 02',
      phaseTitle: 'Customer Journey & Bottlenecks',
      color: '#BD4F19',
      items: [
        {
          num: '03',
          targetSlide: 5,
          category: '3 · HOW IT SELLS AND SPEAKS',
          title: 'Discovery Funnel to Checkout',
          desc: 'Attention from social discovery vs. physical conversion at the Palarivattom counter.',
          icon: Layers,
        },
        {
          num: '04',
          targetSlide: 6,
          category: '4 · THE VOID QUESTION',
          title: 'Operational Friction & Time Void',
          desc: 'Peak-hour decision delays and estimating the financial upside of faster ordering.',
          icon: Clock,
        },
      ],
    },
    {
      phase: 'PHASE 03',
      phaseTitle: 'Governance & Unit Economics',
      color: '#BD4F19',
      items: [
        {
          num: '05',
          targetSlide: 7,
          category: '5 · THE ORGANISATION',
          title: 'Operating Model & Governance',
          desc: 'SOP-led floor execution, cross-functional ownership, and weekly pilot reviews.',
          icon: Users2,
        },
        {
          num: '06',
          targetSlide: 8,
          category: '6 · THE NUMBERS THAT MATTER',
          title: 'Unit Contribution & MCA Accounts',
          desc: 'Smash Burger unit cost waterfall (₹390 in-store) and company-level financial reality.',
          icon: DollarSign,
        },
      ],
    },
    {
      phase: 'PHASE 04',
      phaseTitle: 'Strategic Move & Validation',
      color: '#BD4F19',
      items: [
        {
          num: '07',
          targetSlide: 9,
          category: '7 · AI STRATEGY',
          title: 'Guided Self-Ordering Architecture',
          desc: 'AI self-service design and the ₹20,000/month incremental contribution hurdle.',
          icon: Cpu,
        },
        {
          num: '08',
          targetSlide: 10,
          category: 'THE MOVE',
          title: 'Sensitivity Scenarios & Go/No-Go',
          desc: 'Low/Mid/High order uplift modeling (+2% to +8%) and empirical decision gates.',
          icon: Sparkles,
        },
      ],
    },
  ];

  return (
    <div className="w-full h-full bg-[#F9F6F0] text-[#1C1917] flex flex-col justify-between p-7 md:p-10 lg:p-12 select-none relative overflow-hidden font-mono-consulting border border-[#E2DDD4]">
      {/* Top Header */}
      <div className="z-10 flex items-center justify-between border-b border-[#E2DDD4] pb-3.5">
        <div>
          <div className="text-xs sm:text-sm font-semibold tracking-widest text-[#BD4F19] uppercase">
            EXECUTIVE AGENDA · TABLE OF CONTENTS
          </div>
          <div className="w-12 h-0.5 bg-[#BD4F19] mt-1.5" />
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3.5 py-1 rounded-full bg-[#F2E7DC] border border-[#E2CFBD] text-[#7C2D12] font-bold text-[11px] tracking-wider uppercase shadow-2xs">
            RESEARCH ARCHITECTURE · 10 CORE SECTIONS
          </span>
        </div>
      </div>

      {/* Slide Title */}
      <div className="z-10 pt-2 space-y-1">
        <h1 className="font-serif-display text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#1C1917] leading-tight">
          Executive Agenda: What This Capstone Covers
        </h1>
        <p className="text-xs sm:text-sm text-[#574E4A] max-w-4xl font-normal leading-relaxed">
          A structured investigation bridging Beyondburg's on-ground business model, customer journey bottlenecks, unit economics, and an empirical AI-assisted self-ordering pilot.
        </p>
      </div>

      {/* 4 Pillar Agenda Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 my-auto z-10 py-1">
        {agendaSections.map((sec, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between p-4 rounded-xl bg-white border border-[#DFD7CB] shadow-xs relative overflow-hidden group hover:border-[#BD4F19]/50 transition-colors"
          >
            {/* Top Phase Header */}
            <div>
              <div className="flex items-center justify-between mb-2 pb-2 border-b border-[#EFEAE2]">
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#BD4F19]">
                  {sec.phase}
                </span>
                <span className="text-[10px] text-[#857B74] uppercase tracking-wider font-semibold truncate max-w-[140px]">
                  {sec.phaseTitle}
                </span>
              </div>

              {/* Items in this Phase */}
              <div className="space-y-2.5">
                {sec.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.num}
                      onClick={() => onSelectSlide?.(item.targetSlide)}
                      className="w-full text-left p-2.5 rounded-lg bg-[#FAF8F5] hover:bg-[#F6EDE6] border border-[#EAE4DC] hover:border-[#E2CFBD] transition-all group/btn flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[10px] font-bold text-[#BD4F19] tracking-wider">
                            {item.num} · {item.category}
                          </span>
                          <ArrowRight className="w-3 h-3 text-[#BD4F19] opacity-0 group-hover/btn:opacity-100 group-hover/btn:translate-x-0.5 transition-all" />
                        </div>
                        <h4 className="font-serif-display text-xs sm:text-[13px] font-bold text-[#1C1917] leading-snug group-hover/btn:text-[#BD4F19] transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-[10.5px] text-[#574E4A] leading-relaxed mt-1">
                          {item.desc}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Synthesis Banner at Bottom */}
      <div className="z-10 p-3 rounded-xl bg-[#F6EDE6] border border-[#EDD9C8] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-2.5">
          <span className="px-2 py-0.5 rounded bg-[#BD4F19] text-white font-bold text-[10px] uppercase tracking-wider">
            SYNTHESIS & FIELD EVIDENCE
          </span>
          <span className="text-[#7C2D12] text-[11px] sm:text-xs font-medium">
            Followed by <strong>Section 11: Executive Conclusion & Roadmap</strong> and <strong>Section 12: Field Research & Photos</strong>.
          </span>
        </div>
        <div className="text-[10.5px] text-[#7C2D12]/80 font-mono hidden md:block">
          Click any card to jump directly to section
        </div>
      </div>

      {/* Footer */}
      <div className="z-10 flex items-center justify-between text-[11px] sm:text-xs text-[#857B74] tracking-wider uppercase pt-2.5 border-t border-[#E2DDD4]">
        <span>SCHOOL OF FUTURE · TERM 1 CAPSTONE · BEYONDBURG</span>
        <span className="font-bold text-[#BD4F19]">02</span>
      </div>
    </div>
  );
};
