import React from 'react';
import { Compass, BookOpen, ShoppingBag, HeartHandshake } from 'lucide-react';

export const Slide3CustomerJourney: React.FC = () => {
  const steps = [
    {
      num: '01',
      stage: 'Discover',
      icon: Compass,
      channel: 'Instagram & Word of Mouth',
      desc: 'Organic food photography, viral customer reels, and local word-of-mouth acclaim in Kochi drive initial brand awareness.',
      badge: 'REPORTED CHANNEL',
    },
    {
      num: '02',
      stage: 'Choose',
      icon: BookOpen,
      channel: 'Focused Gourmet Menu',
      desc: 'Diners evaluate artisanal butchery cuts, signature smashed beef patties, house sauces, and custom potato brioche buns.',
      badge: 'PRODUCT PROPOSITION',
    },
    {
      num: '03',
      stage: 'Order',
      icon: ShoppingBag,
      channel: 'In-Store Counter & Delivery',
      desc: 'Diners order at the physical counter for dine-in (77%), supplemented by takeaway and third-party delivery aggregators (23%).',
      badge: 'ORDERING MIX: 77/23',
    },
    {
      num: '04',
      stage: 'Experience',
      icon: HeartHandshake,
      channel: 'Bistro Dine-in Hospitality',
      desc: 'Freshly plated burgers served at tables in a relaxed, music-led bistro ambiance, reinforcing quality and repeat advocacy.',
      badge: 'TABLE HOSPITALITY',
    },
  ];

  return (
    <div className="w-full h-full bg-[#F9F6F0] text-[#1C1917] flex flex-col justify-between p-8 md:p-12 lg:p-14 select-none relative overflow-hidden font-mono-consulting border border-[#E2DDD4]">
      {/* Top Header */}
      <div>
        <div className="flex items-center justify-between">
          <div className="text-xs md:text-sm font-semibold tracking-widest text-[#BD4F19] uppercase">
            3 · HOW IT SELLS, AND HOW IT SPEAKS
          </div>
          <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-[#FAF3ED] text-[#BD4F19] border border-[#E5CEBA] uppercase tracking-wider">
            JOURNEY ARCHITECTURE
          </span>
        </div>
        <div className="w-12 h-0.5 bg-[#BD4F19] mt-1.5 mb-2.5" />

        <h2 className="font-serif-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1C1917] tracking-tight leading-snug">
          The customer journey: from social discovery to table hospitality
        </h2>

        <p className="text-xs sm:text-sm text-[#574E4A] mt-1.5 leading-relaxed">
          Beyondburg relies on word-of-mouth and visual discovery, converting interest through ingredient integrity.
        </p>
      </div>

      {/* 4-Stage Horizontal Journey Flow */}
      <div className="my-auto space-y-4">
        <div className="text-[11px] font-bold text-[#BD4F19] uppercase tracking-wider">
          THE 4-STAGE CUSTOMER PATHWAY: DISCOVER → CHOOSE → ORDER → EXPERIENCE
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((s, idx) => {
            const IconComp = s.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-[#DFD7CB] rounded-xl p-5 shadow-xs flex flex-col justify-between space-y-3 relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-[#BD4F19] font-mono">
                      {s.num}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#FAF3ED] text-[#BD4F19] border border-[#E5CEBA]">
                      {s.badge}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mb-1">
                    <IconComp className="w-4 h-4 text-[#BD4F19]" />
                    <h3 className="font-serif-display text-base font-bold text-[#1C1917]">
                      {s.stage}
                    </h3>
                  </div>

                  <div className="text-[11px] font-semibold text-[#1C1917] mb-2">
                    {s.channel}
                  </div>

                  <p className="text-xs text-[#574E4A] leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Supporting Proposition & Guardrail Box */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
          <div className="bg-[#F3EFE6] border border-[#E2DDD4] rounded-lg p-3.5 space-y-1">
            <div className="text-xs font-bold text-[#1C1917] uppercase">
              THE PREMIUM PRODUCT PROPOSITION
            </div>
            <p className="text-xs text-[#574E4A] leading-relaxed">
              Customers are not paying for speedy transactional fast food; they willingly spend ₹1,127 AOV for culinary craftsmanship, fresh meat cuts, and sit-down dining comfort.
            </p>
          </div>

          <div className="bg-[#FAF3ED] border-l-4 border-[#BD4F19] border border-r-[#E5CEBA] border-t-[#E5CEBA] border-b-[#E5CEBA] rounded-r-lg p-3.5 space-y-1">
            <div className="text-xs font-bold text-[#BD4F19] uppercase">
              DATA DISCIPLINE: AVOID INVENTED FUNNELS
            </div>
            <p className="text-xs text-[#574E4A] leading-relaxed">
              While discovery channels and POS billing receipts are established, intermediate digital conversion drop-offs remain unmeasured. No synthetic conversion funnels are asserted.
            </p>
          </div>
        </div>
      </div>

      {/* Footnote & Bottom Bar */}
      <div className="space-y-1.5 pt-1">
        <p className="text-[10px] sm:text-[11px] text-[#857B74]">
          Channel mix reported by Operations Manager Mohammed Aslam. Journey stages represent qualitative customer mapping, not tracked digital conversion.
        </p>
        <div className="flex items-center justify-between text-[11px] text-[#857B74] tracking-wider uppercase pt-2 border-t border-[#E6DFD5]">
          <span>SCHOOL OF FUTURE · TERM 1 CAPSTONE · BEYONDBURG</span>
          <span className="font-bold text-[#BD4F19] pr-36">SLIDE 03 / 09</span>
        </div>
      </div>
    </div>
  );
};
