import React from 'react';
import { QrCode, Sparkles, BarChart3, ShieldCheck, AlertTriangle } from 'lucide-react';

export const Slide7Intelligence: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#F9F6F0] text-[#1C1917] flex flex-col justify-between p-8 md:p-12 lg:p-14 select-none relative overflow-hidden font-mono-consulting border border-[#E2DDD4]">
      {/* Top Header */}
      <div>
        <div className="flex items-center justify-between">
          <div className="text-xs md:text-sm font-semibold tracking-widest text-[#BD4F19] uppercase">
            7 · WHERE INTELLIGENCE CHANGES ITS GAME
          </div>
          <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-[#FAF3ED] text-[#BD4F19] border border-[#E5CEBA] uppercase tracking-wider">
            PROPOSED CAPABILITY · CONCEPT
          </span>
        </div>
        <div className="w-12 h-0.5 bg-[#BD4F19] mt-1.5 mb-2.5" />

        <h2 className="font-serif-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1C1917] tracking-tight leading-snug">
          AI-powered table-side QR ordering and order intelligence
        </h2>

        <p className="text-xs sm:text-sm text-[#574E4A] mt-1.5 leading-relaxed">
          A proposed digital capability available at every table to streamline ordering, deliver recommendations, and capture customer preferences.
        </p>
      </div>

      {/* Main Grid: Three Core Pillars (QR Ordering, Recommendations, Order Intelligence) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-auto items-stretch">
        {/* Pillar 1: Table-Side QR Ordering */}
        <div className="bg-white border border-[#DFD7CB] rounded-xl p-5 shadow-xs flex flex-col justify-between space-y-3">
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#FAF3ED] text-[#BD4F19] border border-[#E5CEBA] uppercase tracking-wider">
                TABLE TOUCHPOINT
              </span>
              <QrCode className="w-4 h-4 text-[#BD4F19]" />
            </div>

            <h3 className="font-serif-display text-base sm:text-lg font-bold text-[#1C1917] leading-snug">
              Table-Side QR Ordering
            </h3>

            <div className="text-xs font-semibold text-[#BD4F19]">
              Browse the menu and order from phones.
            </div>

            <p className="text-xs text-[#574E4A] leading-relaxed">
              Customers scan a QR code at their table to browse visual menus, explore meat cuts and brioche details, and submit orders directly from their phones.
            </p>

            <p className="text-xs text-[#44403C] leading-relaxed">
              Relieves counter bottlenecks during busy periods while maintaining Beyondburg's relaxed, seated dining hospitality.
            </p>
          </div>

          <div className="p-2.5 bg-[#FAF8F5] rounded-lg border border-[#EFEAE2] text-[11px] text-[#44403C]">
            <strong className="text-[#1C1917]">Customer benefit:</strong> Eliminates queueing at the counter; orders are placed comfortably at the table.
          </div>
        </div>

        {/* Pillar 2: AI-Powered Recommendations */}
        <div className="bg-white border border-[#DFD7CB] rounded-xl p-5 shadow-xs flex flex-col justify-between space-y-3">
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#EDF5EF] text-[#2E6038] border border-[#C6E0CB] uppercase tracking-wider">
                SMART RECOMMENDATIONS
              </span>
              <Sparkles className="w-4 h-4 text-[#2E6038]" />
            </div>

            <h3 className="font-serif-display text-base sm:text-lg font-bold text-[#1C1917] leading-snug">
              AI-Powered Recommendations
            </h3>

            <div className="text-xs font-semibold text-[#2E6038]">
              Receive relevant culinary suggestions.
            </div>

            <p className="text-xs text-[#574E4A] leading-relaxed">
              As customers browse, the interface provides context-aware recommendations—such as pairing artisanal sauces, loaded deli fries, or craft drinks based on burger choices.
            </p>

            <p className="text-xs text-[#44403C] leading-relaxed">
              Helps diners discover complementary flavours naturally without aggressive upselling or generic pop-ups.
            </p>
          </div>

          <div className="p-2.5 bg-[#FAF8F5] rounded-lg border border-[#EFEAE2] text-[11px] text-[#44403C]">
            <strong className="text-[#1C1917]">Experience value:</strong> Enhances the gourmet journey with tailored pairings that match guest tastes.
          </div>
        </div>

        {/* Pillar 3: Customer & Order Intelligence */}
        <div className="bg-white border border-[#DFD7CB] rounded-xl p-5 shadow-xs flex flex-col justify-between space-y-3">
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#FAF3ED] text-[#D97706] border border-[#F3D7B5] uppercase tracking-wider">
                ORDER TELEMETRY
              </span>
              <BarChart3 className="w-4 h-4 text-[#D97706]" />
            </div>

            <h3 className="font-serif-display text-base sm:text-lg font-bold text-[#1C1917] leading-snug">
              Customer & Order Insights
            </h3>

            <div className="text-xs font-semibold text-[#D97706]">
              Understand popular products and preferences.
            </div>

            <p className="text-xs text-[#574E4A] leading-relaxed">
              Aggregated order data reveals empirical patterns: which burgers are ordered most, which items are ordered together, and how demand changes across lunch and evening rushes.
            </p>

            <p className="text-xs text-[#44403C] leading-relaxed">
              Provides management with structured demand telemetry to guide kitchen prep schedules and inventory purchasing.
            </p>
          </div>

          <div className="p-2.5 bg-[#FAF8F5] rounded-lg border border-[#EFEAE2] text-[11px] text-[#44403C]">
            <strong className="text-[#1C1917]">Management value:</strong> Replaces intuition with real customer demand data to guide operational planning.
          </div>
        </div>
      </div>

      {/* Human Safeguards & Concept Guardrails */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Human Responsibility */}
        <div className="bg-[#EDF5EF] border-l-4 border-[#2E6038] border border-r-[#C6E0CB] border-t-[#C6E0CB] border-b-[#C6E0CB] rounded-r-lg p-3.5 flex items-start gap-2.5">
          <ShieldCheck className="w-4 h-4 text-[#2E6038] shrink-0 mt-0.5" />
          <div>
            <div className="text-xs font-bold text-[#2E6038] uppercase">
              HUMAN STAFF RETAIN FULL OPERATIONAL RESPONSIBILITY
            </div>
            <p className="text-xs text-[#44403C] leading-relaxed mt-0.5">
              The AI recommendations and QR interface assist ordering. Kitchen chefs, frontline floor staff, and store managers retain full responsibility for food safety, allergen checks, and customer hospitality.
            </p>
          </div>
        </div>

        {/* Guardrail: Concept Only */}
        <div className="bg-[#FAF3ED] border-l-4 border-[#BD4F19] border border-r-[#E5CEBA] border-t-[#E5CEBA] border-b-[#E5CEBA] rounded-r-lg p-3.5 flex items-start gap-2.5">
          <AlertTriangle className="w-4 h-4 text-[#BD4F19]" />
          <div>
            <div className="text-xs font-bold text-[#BD4F19] uppercase">
              PROPOSED CAPABILITY · ZERO SPECULATIVE CLAIMS
            </div>
            <p className="text-xs text-[#44403C] leading-relaxed mt-0.5">
              Labelled strictly as a proposed capability, not an active feature. Technical feasibility, POS integration, and diner adoption require on-site testing. No guaranteed revenue uplift or ROI promised.
            </p>
          </div>
        </div>
      </div>

      {/* Footnote & Bottom Bar */}
      <div className="space-y-1.5 pt-1">
        <p className="text-[10px] sm:text-[11px] text-[#857B74]">
          Proposed capability only; not implemented. Technical integration with store POS and diner adoption testing required prior to rollout.
        </p>
        <div className="flex items-center justify-between text-[11px] text-[#857B74] tracking-wider uppercase pt-2 border-t border-[#E6DFD5]">
          <span>SCHOOL OF FUTURE · TERM 1 CAPSTONE · BEYONDBURG</span>
          <span className="font-bold text-[#BD4F19] pr-36">SLIDE 07 / 09</span>
        </div>
      </div>
    </div>
  );
};
