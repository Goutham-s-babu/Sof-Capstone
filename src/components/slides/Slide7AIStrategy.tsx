import React, { useState } from 'react';
import { Sliders, Sparkles, SlidersHorizontal, CreditCard, CheckCircle, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export const Slide7AIStrategy: React.FC = () => {
  const [selectedPhase, setSelectedPhase] = useState<number>(1);

  const screenFlow = [
    { step: '1', title: 'Choose Prefs', detail: 'Dietary, spice level, appetite' },
    { step: '2', title: 'Recommendations', detail: 'Bestsellers, pairings, combos' },
    { step: '3', title: 'Customise', detail: 'Buns, cheeses, toppings' },
    { step: '4', title: 'Review Price', detail: 'Transparent total before tax' },
    { step: '5', title: 'Confirm & Pay', detail: 'Card / UPI terminal tap' },
    { step: '6', title: 'Order Fired', detail: 'Token & kitchen ticket' },
  ];

  const pilotPhases = [
    {
      phase: 1,
      name: 'Phase 1: Baseline Establishment',
      duration: 'Pre-Deployment (14 Days)',
      actions: [
        'Measure median ordering time with physical observation',
        'Isolate decision latency from counter POS transaction time',
        'Record billing errors per 100 orders & customer assistance rates',
        'Confirm hardware quotes, installation, POS sync & maintenance costs',
      ],
      tag: 'Empirical Ground Truth',
    },
    {
      phase: 2,
      name: 'Phase 2: Controlled Daypart Pilot',
      duration: '4–5 Screens (Palarivattom)',
      actions: [
        'Deploy 4–5 self-service touchpoints during peak lunch/dinner dayparts',
        'Position floor staff adjacent to screens to assist and prevent friction',
        'Maintain parallel traditional counter for diners desiring cash/human interaction',
        'Log technical anomalies: payment time-outs, UI bugs, menu sync latency',
      ],
      tag: 'Risk-Mitigated Trial',
    },
    {
      phase: 3,
      name: 'Phase 3: Formal Scaling Decision',
      duration: 'Post-Pilot Review',
      actions: [
        'Test against illustrative benchmark: 15% reduction in median ordering time',
        'Verify customer satisfaction (CSAT) guardrails remained uncompromised',
        'Compare audited hardware/SaaS investment against measured labor efficiency',
        'Executive Decision Rule: Scale to other outlets, revise interface, or stop',
      ],
      tag: 'Defensible Decision Rule',
    },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between p-8 md:p-14 text-[#171717] bg-[#F7F4EE] overflow-hidden">
      {/* Slide Header */}
      <div className="space-y-2 border-b border-[#171717]/10 pb-5">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#8D2929] font-semibold">
          <span>Reading 07</span>
          <span>•</span>
          <span>Strategic Move & Phased Implementation</span>
        </div>
        <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#171717]">
          Test Self-Service Before Scaling
        </h2>
        <p className="font-sans text-sm sm:text-base text-[#171717]/70 max-w-3xl">
          Proposal for approximately 4 to 5 self-service touchpoints. Pragmatic, rule-based recommendation logic tested through a disciplined 3-phase pilot with frontline safeguards.
        </p>
      </div>

      {/* Main Grid: Screen Flow + 3-Phase Pilot Architecture */}
      <div className="my-auto py-2 space-y-5">
        {/* Screen Customer Flow Architecture */}
        <div className="bg-white rounded-lg border border-[#171717]/15 p-4 shadow-sm space-y-3">
          <div className="flex items-center justify-between border-b border-[#171717]/10 pb-2">
            <span className="text-xs font-mono uppercase tracking-wider font-bold text-[#171717]">
              Customer Touchpoint Journey (4–5 Proposed Screens)
            </span>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#747B55]/15 text-[#747B55] font-semibold">
                Rule-Based Recommendations Sufficient
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-6 gap-2">
            {screenFlow.map((item, idx) => (
              <div
                key={idx}
                className="p-2.5 rounded bg-[#F7F4EE] border border-[#171717]/10 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-[10px] font-bold text-[#8D2929] block">
                    0{item.step}
                  </span>
                  <span className="font-bold text-xs text-[#171717] block mt-0.5">
                    {item.title}
                  </span>
                </div>
                <span className="text-[10px] text-[#171717]/65 mt-1 block leading-tight">
                  {item.detail}
                </span>
              </div>
            ))}
          </div>

          <p className="text-[11px] text-[#171717]/70 italic leading-snug">
            * Pragmatic AI Note: Advanced generative models are unnecessary for initial deployment. Clean rule-based pairings (spice filters, beverage prompts, side suggestions) solve decision latency with zero hallucination.
          </p>
        </div>

        {/* 3-Stage Pilot Roadmap */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {pilotPhases.map((phase) => (
            <div
              key={phase.phase}
              onClick={() => setSelectedPhase(phase.phase)}
              className={`cursor-pointer bg-white rounded-lg p-4 border transition-all duration-200 shadow-sm flex flex-col justify-between ${
                selectedPhase === phase.phase
                  ? 'border-[#8D2929] ring-2 ring-[#8D2929]/30'
                  : 'border-[#171717]/12 hover:border-[#171717]/30'
              }`}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#8D2929]">
                    Stage 0{phase.phase}
                  </span>
                  <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-black/5 text-[#171717]/80">
                    {phase.tag}
                  </span>
                </div>
                <h4 className="font-serif-display text-sm font-bold text-[#171717]">
                  {phase.name}
                </h4>
                <span className="text-[10px] font-mono text-[#747B55] block">
                  {phase.duration}
                </span>

                <ul className="space-y-1.5 pt-1 text-[11px] text-[#171717]/80">
                  {phase.actions.map((act, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-[#8D2929] mt-0.5 shrink-0">•</span>
                      <span className="leading-tight">{act}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Guardrail Banner: Illustrative Target Caution */}
        <div className="p-3 rounded-lg bg-white border border-[#171717]/15 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#747B55]" />
            <span className="text-[#171717]">
              <strong>Evaluation Benchmark: </strong>
              Proposed <strong>15% reduction in median ordering time</strong> is an <em>illustrative planning target</em>, not an achieved claim.
            </span>
          </div>
          <span className="text-[11px] font-mono text-[#8D2929] font-semibold hidden sm:inline">
            No guaranteed AOV or labour cuts assumed
          </span>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-[#171717]/10 pt-4 text-xs font-mono text-[#171717]/60">
        <span>Strategic Framework: Baseline → Defined Daypart Pilot → Data-Driven Decision</span>
        <span className="text-[#747B55] font-medium">Protect human hospitality throughout</span>
      </div>
    </div>
  );
};
