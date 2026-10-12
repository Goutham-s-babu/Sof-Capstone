import React from 'react';
import { ChefHat, Sliders, DollarSign, Calculator, CheckCircle2, ShieldCheck, AlertCircle, ArrowRight } from 'lucide-react';

export const Slide8BurgerLab: React.FC = () => {
  const steps = [
    { num: '1', label: 'Select base', desc: 'Choose signature ₹390 Smash Burger' },
    { num: '2', label: 'Visual preview', desc: 'Burger visual updates in real time' },
    { num: '3', label: 'Customise', desc: 'Choose buns, patties, cheeses, sauces' },
    { num: '4', label: 'Live price', desc: 'Total updates immediately with add-ons' },
    { num: '5', label: 'Review', desc: 'Verify complete order & price' },
    { num: '6', label: 'Submit QR', desc: 'Send order directly to kitchen display' },
    { num: '7', label: 'Kitchen prep', desc: 'Kitchen crafts & serves burger' },
  ];

  const pricingPlaceholders = [
    { item: 'Extra Smash Patty', price: '+₹120', cost: '₹55 [est.]', status: 'Available', rule: 'Max 2 extra' },
    { item: 'Smoked Gouda Melt', price: '+₹60', cost: '₹25 [est.]', status: 'Available', rule: 'Per slice' },
    { item: 'Artisanal Truffle Glaze', price: '+₹45', cost: '₹18 [est.]', status: 'Available', rule: '1 portion' },
    { item: 'Caramelised Onions', price: '+₹35', cost: '₹12 [est.]', status: 'Available', rule: 'Unlimited' },
  ];

  const measures = [
    'Number of customers using the builder',
    'Percentage of orders with paid add-ons',
    'Additional spend attributable to customisation',
    'Contribution after incremental variable costs',
    'Preparation time and kitchen workload',
    'Customer satisfaction and repeat use',
  ];

  return (
    <div className="w-full h-full bg-[#F9F6F0] text-[#1C1917] flex flex-col justify-between p-6 sm:p-8 md:p-10 lg:p-12 select-none relative overflow-hidden font-mono-consulting border border-[#E2DDD4]">
      {/* Top Header */}
      <div>
        <div className="flex items-center justify-between">
          <div className="text-xs md:text-sm font-semibold tracking-widest text-[#BD4F19] uppercase">
            8 · THE MOVE: BEYONDBURG BURGER LAB
          </div>
          <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-[#FAF3ED] text-[#BD4F19] border border-[#E5CEBA] uppercase tracking-wider">
            STRATEGIC MOVE · QR BURGER BUILDER
          </span>
        </div>
        <div className="w-12 h-0.5 bg-[#BD4F19] mt-1.5 mb-2" />

        <h2 className="font-serif-display text-xl sm:text-2xl lg:text-3xl font-bold text-[#1C1917] tracking-tight leading-snug">
          Beyondburg Burger Lab — Build Your Own Burger
        </h2>

        <p className="text-xs sm:text-[13px] text-[#574E4A] mt-1 leading-relaxed">
          A digital burger-customisation experience accessed through the table QR menu, starting with Beyondburg's signature ₹390 Smash Burger.
        </p>
      </div>

      {/* Main Grid: 3 Systematic Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 my-auto items-stretch">
        {/* Column 1 (4 cols): Customer Experience & 7-Step Digital Flow */}
        <div className="lg:col-span-4 bg-white border border-[#DFD7CB] rounded-xl p-4 shadow-xs flex flex-col justify-between space-y-2.5">
          <div>
            <div className="flex items-center justify-between border-b border-[#EFEAE2] pb-1.5 mb-2">
              <span className="text-[11px] font-bold text-[#BD4F19] uppercase tracking-wider">
                A · DIGITAL CUSTOMER EXPERIENCE
              </span>
              <ChefHat className="w-4 h-4 text-[#BD4F19]" />
            </div>

            <p className="text-[11px] text-[#44403C] leading-snug mb-2">
              Base option starts at <strong>₹390 (pre-tax)</strong> for the signature Smash Burger. Total price dynamically reflects diner choices.
            </p>

            {/* 7-Step Sequence */}
            <div className="space-y-1">
              {steps.map((s, i) => (
                <div key={i} className="flex items-center gap-2 p-1 rounded bg-[#FAF8F5] border border-[#EFEAE2] text-[10px]">
                  <span className="w-4 h-4 rounded-full bg-[#FAF3ED] text-[#BD4F19] font-bold flex items-center justify-center shrink-0 text-[9px] border border-[#E5CEBA]">
                    {s.num}
                  </span>
                  <div className="leading-tight">
                    <strong className="text-[#1C1917]">{s.label}: </strong>
                    <span className="text-[#574E4A]">{s.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-2 bg-[#FAF8F5] rounded-lg border border-[#EFEAE2] text-[10px] text-[#574E4A] leading-tight">
            <strong className="text-[#1C1917]">Kitchen Fulfilment Guardrail:</strong> Customer customises digitally; kitchen handles 100% of preparation. Strictly avoids an unrestricted self-service buffet to protect hygiene, food safety, and speed.
          </div>
        </div>

        {/* Column 2 (4 cols): Configurable Pricing & Revenue Mechanisms */}
        <div className="lg:col-span-4 bg-white border border-[#DFD7CB] rounded-xl p-4 shadow-xs flex flex-col justify-between space-y-2.5">
          <div>
            <div className="flex items-center justify-between border-b border-[#EFEAE2] pb-1.5 mb-2">
              <span className="text-[11px] font-bold text-[#2E6038] uppercase tracking-wider">
                B · PRICING & REVENUE MECHANISMS
              </span>
              <Sliders className="w-4 h-4 text-[#2E6038]" />
            </div>

            {/* Configurable System Example */}
            <div className="space-y-1 mb-2">
              <div className="text-[10px] font-bold text-[#857B74] uppercase">
                Configurable Pricing Architecture (Placeholders)
              </div>
              <div className="border border-[#E2DDD4] rounded-lg overflow-hidden text-[10px]">
                <table className="w-full text-left">
                  <thead className="bg-[#FAF8F5] text-[#857B74] border-b border-[#E2DDD4]">
                    <tr>
                      <th className="p-1.5 font-bold">Item</th>
                      <th className="p-1.5 font-bold text-center">Price</th>
                      <th className="p-1.5 font-bold text-right">Cost</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#EFEAE2]">
                    {pricingPlaceholders.map((p, idx) => (
                      <tr key={idx}>
                        <td className="p-1.5 font-medium text-[#1C1917]">{p.item}</td>
                        <td className="p-1.5 text-center font-mono font-bold text-[#2E6038]">{p.price}</td>
                        <td className="p-1.5 text-right font-mono text-[#857B74]">{p.cost}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="text-[9px] text-[#857B74] italic">
                * Placeholders only. Verified costs and rules to be validated by Beyondburg.
              </div>
            </div>

            {/* Two Revenue Mechanisms */}
            <div className="space-y-1.5 pt-1 border-t border-[#EFEAE2]">
              <div className="text-[10px] font-bold text-[#1C1917] uppercase">Two Revenue Mechanisms</div>
              <div className="p-1.5 rounded bg-[#FAF8F5] text-[10px] text-[#44403C]">
                <strong>1. Paid add-ons:</strong> Paying for extras (patties, melted cheeses, truffle glazes).
              </div>
              <div className="p-1.5 rounded bg-[#FAF8F5] text-[10px] text-[#44403C]">
                <strong>2. Custom burger purchases:</strong> Selecting higher-tier custom recipes over standard items.
              </div>
            </div>
          </div>

          <div className="p-2 bg-[#FAF3ED] rounded-lg border border-[#E5CEBA] text-[10px] text-[#574E4A] leading-tight">
            <strong className="text-[#BD4F19]">Cannibalisation Guardrail:</strong> Do not assume all customised orders are incremental. Replacing a standard burger at the same price is substitution, not additional revenue.
          </div>
        </div>

        {/* Column 3 (4 cols): Financial Measurement & Pilot Plan */}
        <div className="lg:col-span-4 bg-white border border-[#DFD7CB] rounded-xl p-4 shadow-xs flex flex-col justify-between space-y-2.5">
          <div>
            <div className="flex items-center justify-between border-b border-[#EFEAE2] pb-1.5 mb-2">
              <span className="text-[11px] font-bold text-[#D97706] uppercase tracking-wider">
                C · MEASUREMENT & PILOT PLAN
              </span>
              <Calculator className="w-4 h-4 text-[#D97706]" />
            </div>

            {/* Formulas */}
            <div className="space-y-1 mb-2 bg-[#FAF8F5] p-2 rounded-lg border border-[#EFEAE2] text-[10px] text-[#44403C]">
              <div>
                <strong className="text-[#1C1917] block">Incremental Revenue:</strong>
                <span className="font-mono text-[9px] text-[#574E4A]">Actual customisation sales − est. sales without customisation</span>
              </div>
              <div className="pt-1 border-t border-[#E8E2D8]">
                <strong className="text-[#1C1917] block">Add-on Contribution:</strong>
                <span className="font-mono text-[9px] text-[#574E4A]">Add-on revenue − variable costs of those add-ons</span>
              </div>
            </div>

            {/* Pilot Success Measures */}
            <div className="space-y-1">
              <div className="text-[10px] font-bold text-[#1C1917] uppercase">Six Pilot Measures:</div>
              <div className="grid grid-cols-1 gap-0.5 text-[9px] text-[#574E4A]">
                {measures.map((m, idx) => (
                  <div key={idx} className="flex items-center gap-1">
                    <span className="text-[#BD4F19] font-bold">•</span>
                    <span>{m}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-2 bg-[#FAF8F5] rounded-lg border border-[#EFEAE2] text-[10px] text-[#574E4A] leading-tight">
            <strong className="text-[#1C1917]">Pilot Recommendation:</strong> Start with a small in-store pilot using the ₹390 Smash Burger base. Test customer uptake, pricing, and prep speed before expanding. Not guaranteed profit.
          </div>
        </div>
      </div>

      {/* Bottom Central Headline Banner */}
      <div className="bg-[#1C1917] text-white rounded-xl p-3 flex items-center justify-between shadow-xs">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-[#BD4F19] animate-pulse" />
          <span className="text-xs uppercase tracking-wider text-[#BD4F19] font-bold">
            CENTRAL BRAND PROMISE
          </span>
          <span className="text-sm font-serif-display font-bold text-white tracking-wide">
            “Your burger. Your choices. Made by Beyondburg.”
          </span>
        </div>

        <div className="text-[11px] text-[#D6D0C5] hidden sm:block">
          Digital customisation with artisanal kitchen execution.
        </div>
      </div>

      {/* Footnote & Bottom Bar */}
      <div className="space-y-1 pt-1">
        <p className="text-[10px] text-[#857B74]">
          Strategic recommendation. Pricing placeholders require on-site validation. Digital customisation pilot requires kitchen prep testing.
        </p>
        <div className="flex items-center justify-between text-[11px] text-[#857B74] tracking-wider uppercase pt-1.5 border-t border-[#E6DFD5]">
          <span>SCHOOL OF FUTURE · TERM 1 CAPSTONE · BEYONDBURG</span>
          <span className="font-bold text-[#BD4F19] pr-36">SLIDE 08 / 09</span>
        </div>
      </div>
    </div>
  );
};
