import React from 'react';
import { ArrowDown, Users, ShieldAlert, Cpu, CheckCircle2, UserCheck } from 'lucide-react';

export const Slide5Org: React.FC = () => {
  const hierarchyNodes = [
    { title: 'Founder / Executive Leadership', role: 'Strategic direction, capital allocation & brand vision' },
    { title: 'Operations & Finance', role: 'Mohammed Aslam • SOP compliance, pilot oversight, financial controls' },
    { title: 'Store Managers (Palarivattom)', role: 'Shift supervision, front-of-house hospitality, queue flow' },
    { title: 'Frontline Employees', role: 'Cashiers, kitchen crew, dining room attendants, order runners' },
  ];

  const pilotRoles = [
    {
      title: 'Operations Manager',
      owner: 'Mohammed Aslam',
      tag: 'Pilot Owner',
      desc: 'Sets KPIs, reviews empirical baseline data, approves go/no-go scaling decisions.',
      kpi: 'Throughput & Error Metrics',
      color: 'border-[#8D2929]',
    },
    {
      title: 'Store Manager',
      owner: 'Outlet Leadership',
      tag: 'Daily Execution',
      desc: 'Manages staff shift rota, monitors customer queue friction, ensures SOP adherence.',
      kpi: 'Daily Queue Flow & Exception Logs',
      color: 'border-[#747B55]',
    },
    {
      title: 'Frontline Team',
      owner: 'Store Attendants',
      tag: 'Hospitality & Support',
      desc: 'Assists first-time kiosk users, resolves complex orders, handles customer exceptions.',
      kpi: 'Customer Guidance & Service Recovery',
      color: 'border-[#171717]/30',
    },
    {
      title: 'Assigned Tech Owner',
      owner: 'Vendor / IT Lead',
      tag: 'System Integrity',
      desc: 'Guarantees hardware uptime, POS API stability, payment gateway reliability, offline recovery.',
      kpi: '99.5% System Uptime & Incident SLA',
      color: 'border-[#171717]/30',
    },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between p-8 md:p-14 text-[#171717] bg-[#F7F4EE] overflow-hidden">
      {/* Slide Header */}
      <div className="space-y-2 border-b border-[#171717]/10 pb-5">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#8D2929] font-semibold">
          <span>Reading 05</span>
          <span>•</span>
          <span>Operating Model & Governance</span>
        </div>
        <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#171717]">
          Technology Must Fit the Operation
        </h2>
        <p className="font-sans text-sm sm:text-base text-[#171717]/70 max-w-3xl">
          Automated ordering cannot function as an isolated gadget. It requires explicit frontline accountability, rigorous SOPs, and respect for frontline human hospitality.
        </p>
      </div>

      {/* Main Grid: Working Structure Hierarchy + Pilot Accountability Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-auto py-2">
        {/* Left Column: Provisional Working Hierarchy */}
        <div className="lg:col-span-5 space-y-3">
          <div className="flex items-center justify-between border-b border-[#171717]/10 pb-2">
            <span className="text-xs font-mono uppercase tracking-wider font-bold text-[#171717]">
              Provisional Hierarchy
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-100 text-amber-900 font-medium">
              Field-Derived Map
            </span>
          </div>

          <div className="space-y-2">
            {hierarchyNodes.map((node, idx) => (
              <React.Fragment key={idx}>
                <div className="bg-white border border-[#171717]/12 rounded p-3 shadow-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#171717]">
                      {node.title}
                    </span>
                    <span className="text-[10px] font-mono text-[#8D2929]">L{idx + 1}</span>
                  </div>
                  <p className="text-[11px] text-[#171717]/70 mt-0.5">{node.role}</p>
                </div>
                {idx < hierarchyNodes.length - 1 && (
                  <div className="flex justify-center -my-1">
                    <ArrowDown className="w-3.5 h-3.5 text-[#171717]/40" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          <p className="text-[11px] text-[#171717]/60 italic font-mono pt-1">
            * Working structure based on field discussion; not an audited statutory organogram.
          </p>
        </div>

        {/* Right Column: Proposed Pilot Responsibilities & Human Transition */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between border-b border-[#171717]/10 pb-2">
            <span className="text-xs font-mono uppercase tracking-wider font-bold text-[#171717]">
              Proposed Pilot Accountability Matrix
            </span>
            <span className="text-[11px] font-mono text-[#747B55] font-semibold">4 Defined Roles</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {pilotRoles.map((role, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-lg p-3.5 border shadow-sm space-y-1.5 ${role.color}`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#171717]">{role.title}</span>
                  <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-black/5 text-[#171717]/80">
                    {role.tag}
                  </span>
                </div>
                <p className="text-[11px] text-[#171717]/70 leading-relaxed">{role.desc}</p>
                <div className="pt-1 border-t border-[#171717]/10 flex items-center gap-1.5 text-[10px] font-mono text-[#8D2929]">
                  <CheckCircle2 className="w-3 h-3 shrink-0" />
                  <span>{role.kpi}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Workforce Safeguard Callout */}
          <div className="p-3.5 rounded-lg bg-white border border-[#747B55]/30 space-y-1 text-xs">
            <div className="flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-[#747B55]" />
              <span className="font-bold text-[#171717] font-mono uppercase text-[11px]">
                Workforce Transition Principle
              </span>
            </div>
            <p className="text-[#171717]/80 leading-relaxed text-xs">
              Management indicated that the company will strive to offer affected billing employees alternative opportunities. Employees transitioned away from routine cashier input should be redeployed into table hospitality, customer assistance, and order quality assurance.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-[#171717]/10 pt-4 text-xs font-mono text-[#171717]/60">
        <span>SOP Approach: Standard operating procedures govern store routines and exception escalation</span>
        <span className="text-[#747B55] font-medium">Protect human hospitality on the floor</span>
      </div>
    </div>
  );
};
