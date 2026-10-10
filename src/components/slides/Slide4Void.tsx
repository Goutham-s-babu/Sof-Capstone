import React, { useState } from 'react';
import { Compass, Lightbulb, CheckSquare, CreditCard, UtensilsCrossed, AlertTriangle, HelpCircle } from 'lucide-react';

export const Slide4Void: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(2); // Default to Step 2 (Decide)

  const journeySteps = [
    {
      num: 1,
      name: 'Discover Menu',
      icon: Compass,
      desc: 'Social media, Instagram, word-of-mouth exposure.',
      friction: 'Low',
      type: 'Awareness',
    },
    {
      num: 2,
      name: 'Decide Order',
      icon: Lightbulb,
      desc: 'Exploring choices, customisations, combos at counter.',
      friction: 'Bottleneck A',
      type: 'Decision Time',
      highlight: true,
    },
    {
      num: 3,
      name: 'Enter & Confirm',
      icon: CheckSquare,
      desc: 'Staff keying modifications, add-ons, burger specifics.',
      friction: 'Bottleneck B',
      type: 'Transaction Time',
      highlight: true,
    },
    {
      num: 4,
      name: 'Complete Payment',
      icon: CreditCard,
      desc: 'Cash/card/UPI handover, POS billing receipt generation.',
      friction: 'Bottleneck B',
      type: 'Transaction Time',
      highlight: true,
    },
    {
      num: 5,
      name: 'Receive Food',
      icon: UtensilsCrossed,
      desc: 'Kitchen smash griddle prep, assembly, table service.',
      friction: 'Paced Prep',
      type: 'Fulfillment',
    },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between p-8 md:p-14 text-[#171717] bg-[#F7F4EE] overflow-hidden">
      {/* Slide Header */}
      <div className="space-y-2 border-b border-[#171717]/10 pb-5">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#8D2929] font-semibold">
          <span>Reading 04</span>
          <span>•</span>
          <span>Customer Journey & Operational Friction</span>
        </div>
        <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#171717]">
          The Friction Happens Before the Food
        </h2>
        <p className="font-sans text-sm sm:text-base text-[#171717]/70 max-w-3xl">
          Field interviews revealed that operational waiting concentrates before the kitchen ticket is fired: during cognitive menu selection and counter billing.
        </p>
      </div>

      {/* Centerpiece: 5-Stage Customer Journey Timeline */}
      <div className="my-auto py-2 space-y-6">
        {/* Timeline Horizontal Track */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          {journeySteps.map((step) => {
            const Icon = step.icon;
            const isFriction = step.highlight;
            return (
              <div
                key={step.num}
                onClick={() => setActiveStep(step.num)}
                className={`cursor-pointer rounded-lg p-3.5 border transition-all duration-200 relative ${
                  isFriction
                    ? 'bg-white border-[#8D2929]/40 shadow-sm hover:border-[#8D2929]'
                    : 'bg-white/60 border-[#171717]/10 hover:bg-white'
                } ${activeStep === step.num ? 'ring-2 ring-[#8D2929]' : ''}`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-bold px-1.5 py-0.5 rounded bg-black/5 text-[#171717]">
                    0{step.num}
                  </span>
                  {isFriction && (
                    <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-[#8D2929]/10 text-[#8D2929] font-bold">
                      Friction Zone
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 mb-1.5">
                  <Icon
                    className={`w-4 h-4 ${
                      isFriction ? 'text-[#8D2929]' : 'text-[#747B55]'
                    }`}
                  />
                  <h4 className="font-serif-display text-sm font-bold text-[#171717]">
                    {step.name}
                  </h4>
                </div>
                <p className="text-[11px] text-[#171717]/70 leading-snug">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Analytical Decomposition: Decision Time vs. Transaction Time */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Box 1: Decision Time */}
          <div className="bg-white rounded-lg border border-[#171717]/12 p-4 shadow-sm space-y-2">
            <div className="flex items-center justify-between border-b border-[#171717]/10 pb-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#8D2929]" />
                <span className="text-xs font-mono uppercase tracking-wider font-bold text-[#171717]">
                  Category A: Decision Time
                </span>
              </div>
              <span className="text-[11px] font-mono text-[#8D2929] font-medium">Cognitive Load</span>
            </div>
            <p className="text-xs text-[#171717]/80 leading-relaxed">
              Customers reviewing extensive menu combinations, burger modifiers, and sides directly at the cashier counter. Creates queue back-up while cashiers wait for choices.
            </p>
            <div className="text-[11px] font-mono bg-[#F7F4EE] p-2 rounded text-[#171717]/70">
              <strong>Potential Remedy:</strong> Guided preference filtering & clear category visual cards.
            </div>
          </div>

          {/* Box 2: Transaction Time */}
          <div className="bg-white rounded-lg border border-[#171717]/12 p-4 shadow-sm space-y-2">
            <div className="flex items-center justify-between border-b border-[#171717]/10 pb-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#747B55]" />
                <span className="text-xs font-mono uppercase tracking-wider font-bold text-[#171717]">
                  Category B: Transaction Time
                </span>
              </div>
              <span className="text-[11px] font-mono text-[#747B55] font-medium">Operational Keystrokes</span>
            </div>
            <p className="text-xs text-[#171717]/80 leading-relaxed">
              Entering customizations into POS, verbal confirmation of items, customer payment card/UPI scanning, and receipt dispatch. Pure system and input throughput.
            </p>
            <div className="text-[11px] font-mono bg-[#F7F4EE] p-2 rounded text-[#171717]/70">
              <strong>Potential Remedy:</strong> Direct customer self-entry & integrated payment terminal.
            </div>
          </div>
        </div>

        {/* Critical Academic Guardrail Banner */}
        <div className="p-3.5 rounded-lg bg-[#8D2929]/10 border border-[#8D2929]/25 flex items-start gap-3 text-xs text-[#171717]">
          <AlertTriangle className="w-4 h-4 text-[#8D2929] shrink-0 mt-0.5" />
          <div className="space-y-0.5">
            <span className="font-bold text-[#8D2929] uppercase font-mono tracking-wider text-[11px] block">
              Core Methodological Boundary — Unquantified Management Input
            </span>
            <p className="leading-relaxed text-[#171717]/90">
              The Operations Manager clearly identified decision and billing delays as an operational void. However, <strong>the duration of this delay has not yet been quantified</strong> by stopwatch observations. We do not assume lost sales, churn rates, or queue abandonment as established facts until a baseline study is executed.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-[#171717]/10 pt-4 text-xs font-mono text-[#171717]/60">
        <span>Field Insight: Interview with Mohammed Aslam (Operations Manager)</span>
        <span className="text-[#8D2929] font-medium">Requires empirical baseline before rollout</span>
      </div>
    </div>
  );
};
