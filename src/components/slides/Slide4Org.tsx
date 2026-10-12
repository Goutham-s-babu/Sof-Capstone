import React from 'react';
import { ArrowDown, FileText, CheckCircle2 } from 'lucide-react';

export const Slide4Org: React.FC = () => {
  const levels = [
    {
      title: 'FOUNDER',
      role: 'Brand Vision & Culinary Direction',
      desc: 'Sets brand strategy, core recipe standards, high-street expansion, and quality ethos.',
      badge: 'EXECUTIVE LEADERSHIP',
    },
    {
      title: 'OPERATIONS & FINANCE',
      role: 'Operational Governance & Margin Control',
      desc: 'Enforces Standard Operating Procedures (SOPs), supply chain sourcing, supplier terms, and P&L targets.',
      badge: 'CENTRAL OPERATIONS',
    },
    {
      title: 'STORE MANAGERS',
      role: 'Daily Shift Leadership & Store Throughput',
      desc: 'Manages staff rotas, daily prep logs, inventory waste tracking, and service exception handling.',
      badge: 'OUTLET MANAGEMENT',
    },
    {
      title: 'FRONTLINE EMPLOYEES',
      role: 'Kitchen Craft & Table Hospitality',
      desc: 'Kitchen line cooks, grill masters, counter attendants, and floor runners executing guest hospitality.',
      badge: 'STORE EXECUTION',
    },
  ];

  return (
    <div className="w-full h-full bg-[#F9F6F0] text-[#1C1917] flex flex-col justify-between p-8 md:p-12 lg:p-14 select-none relative overflow-hidden font-mono-consulting border border-[#E2DDD4]">
      {/* Top Header */}
      <div>
        <div className="flex items-center justify-between">
          <div className="text-xs md:text-sm font-semibold tracking-widest text-[#BD4F19] uppercase">
            4 · THE ORGANISATION BEHIND IT
          </div>
          <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-[#FAF3ED] text-[#BD4F19] border border-[#E5CEBA] uppercase tracking-wider">
            WORKING FIELD MAP
          </span>
        </div>
        <div className="w-12 h-0.5 bg-[#BD4F19] mt-1.5 mb-2.5" />

        <h2 className="font-serif-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1C1917] tracking-tight leading-snug">
          Operating structure: clear roles governing store execution and innovation
        </h2>

        <p className="text-xs sm:text-sm text-[#574E4A] mt-1.5 leading-relaxed">
          Standard Operating Procedures guide daily restaurant flow; strategic experiments require explicit ownership.
        </p>
      </div>

      {/* Main Grid: Left Org Tree Hierarchy, Right Operational Realities */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto items-center">
        {/* Left Column (6 cols): Clean Vertical Org Chart */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center space-y-2.5">
          {levels.map((lvl, idx) => (
            <React.Fragment key={idx}>
              <div className="w-full bg-white border border-[#DFD7CB] rounded-xl p-3.5 shadow-xs flex items-center justify-between hover:border-[#BD4F19]/40 transition-colors">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="font-serif-display text-sm font-bold text-[#1C1917]">
                      {lvl.title}
                    </span>
                    <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-[#FAF3ED] text-[#BD4F19]">
                      {lvl.badge}
                    </span>
                  </div>
                  <div className="text-[11px] font-semibold text-[#574E4A]">
                    {lvl.role}
                  </div>
                  <div className="text-[10px] text-[#857B74] leading-tight">
                    {lvl.desc}
                  </div>
                </div>
              </div>

              {idx < levels.length - 1 && (
                <div className="flex items-center justify-center text-[#BD4F19]">
                  <ArrowDown className="w-4 h-4" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Right Column (6 cols): 2 Strategic Execution Pillars */}
        <div className="lg:col-span-6 space-y-4">
          {/* Card 1: SOP Discipline */}
          <div className="bg-white border border-[#DFD7CB] rounded-xl p-5 shadow-xs space-y-2.5">
            <div className="flex items-center gap-2 text-xs font-bold text-[#BD4F19] uppercase tracking-wider">
              <FileText className="w-4 h-4 text-[#BD4F19]" />
              <span>SOP-DRIVEN STORE GOVERNANCE</span>
            </div>
            <p className="text-xs text-[#44403C] leading-relaxed">
              Standard Operating Procedures (SOPs) govern all store decisions—from raw meat grinding and bun toasting to grill smash pressure and plating standards.
            </p>
            <p className="text-xs text-[#574E4A] leading-relaxed">
              This operational standardization ensures that premium culinary standards are executed reliably across daily shifts without quality drift.
            </p>
          </div>

          {/* Card 2: Innovation Ownership */}
          <div className="bg-white border border-[#DFD7CB] rounded-xl p-5 shadow-xs space-y-2.5">
            <div className="flex items-center gap-2 text-xs font-bold text-[#2E6038] uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4 text-[#2E6038]" />
              <span>OWNERSHIP FOR NEW INITIATIVES</span>
            </div>
            <p className="text-xs text-[#44403C] leading-relaxed">
              Any technological capability or limited-edition drop requires disciplined ownership:
            </p>
            <ul className="text-xs text-[#574E4A] space-y-1">
              <li>• <strong>Operations Head:</strong> Defines economic threshold and ingredient sourcing.</li>
              <li>• <strong>Store Manager:</strong> Handles prep capacity, staff rota, and exception logs.</li>
              <li>• <strong>Frontline Staff:</strong> Delivers customer hospitality and feedback collection.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footnote & Bottom Bar */}
      <div className="space-y-1.5 pt-1">
        <p className="text-[10px] sm:text-[11px] text-[#857B74]">
          Working organizational map based on field research discussions at Palarivattom; not a verified statutory organization chart.
        </p>
        <div className="flex items-center justify-between text-[11px] text-[#857B74] tracking-wider uppercase pt-2 border-t border-[#E6DFD5]">
          <span>SCHOOL OF FUTURE · TERM 1 CAPSTONE · BEYONDBURG</span>
          <span className="font-bold text-[#BD4F19] pr-36">SLIDE 04 / 09</span>
        </div>
      </div>
    </div>
  );
};
