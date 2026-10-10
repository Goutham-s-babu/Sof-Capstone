import React from 'react';
import { Target, CheckCircle2, ShieldAlert, TrendingUp, Sparkles, ArrowRight } from 'lucide-react';

interface Slide8RecommendationProps {
  onGoToStart: () => void;
}

export const Slide8Recommendation: React.FC<Slide8RecommendationProps> = ({ onGoToStart }) => {
  const recommendations = [
    {
      num: '01',
      title: 'Measure the Current Problem',
      desc: 'Conduct physical baseline observations at Palarivattom to quantify median decision time versus transaction latency before capital commitment.',
      tag: 'Empirical Baseline',
    },
    {
      num: '02',
      title: 'Run a Controlled Pilot',
      desc: 'Test 4–5 self-service screens restricted to peak dayparts. Enforce explicit SOPs for software errors, outages, and menu modifications.',
      tag: 'Low-Risk Trial',
    },
    {
      num: '03',
      title: 'Protect Human Assistance',
      desc: 'Keep frontline staff stationed alongside screens. Repurpose cashier hours into dining room hospitality, table delivery, and exception care.',
      tag: 'Preserve Hospitality',
    },
    {
      num: '04',
      title: 'Scale Only When Results Justify Cost',
      desc: 'Compare true capex, SaaS fees, and maintenance costs against measured labour and throughput gains. Expand only if unit economics improve.',
      tag: 'Financial Discipline',
    },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between p-8 md:p-14 lg:p-20 text-[#F7F4EE] bg-[#171717] overflow-hidden relative">
      {/* Subtle background ambient warmth */}
      <div className="absolute inset-0 bg-radial from-[#251818]/25 via-[#171717] to-[#171717] pointer-events-none" />

      {/* Slide Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-5 z-10 animate-fade-up">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#8D2929] font-bold">
            <span>Executive Synthesis</span>
            <span>•</span>
            <span>The Recommendation</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Reduce Friction. Protect the Experience.
          </h2>
        </div>

        {/* Subtle Brand Logo Badge */}
        <div className="bg-white px-3 py-1.5 rounded shadow-sm border border-white/20 hidden sm:flex items-center justify-center">
          <img
            src="/assets/beyondburg-logo.png"
            alt="Beyondburg Official Wordmark"
            className="h-6 w-auto object-contain"
          />
        </div>
      </div>

      {/* Main Core Synthesis Banner */}
      <div className="my-auto py-3 space-y-6 z-10">
        {/* Core Strategic Dictum */}
        <div className="p-6 md:p-7 rounded-xl bg-white/[0.04] border border-white/15 backdrop-blur-md shadow-2xl space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#8D2929] font-bold block">
            Core Decision Rule
          </span>
          <p className="font-serif-display text-2xl sm:text-3xl lg:text-4xl text-white font-medium leading-snug tracking-tight">
            “Don't automate for the sake of automation. Test whether better ordering improves both the customer experience and the economics.”
          </p>
        </div>

        {/* 4 Pillars Summary Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {recommendations.map((rec) => (
            <div
              key={rec.num}
              className="p-4 rounded-lg bg-black/40 border border-white/10 hover:border-white/20 transition-colors flex flex-col justify-between space-y-2"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-sm font-bold text-[#8D2929]">
                    {rec.num}
                  </span>
                  <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-white/5 text-[#D8D3CA]">
                    {rec.tag}
                  </span>
                </div>
                <h4 className="font-serif-display text-base font-bold text-white mb-1.5">
                  {rec.title}
                </h4>
                <p className="text-xs text-[#D8D3CA]/75 leading-relaxed">
                  {rec.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar: Final Takeaway & Review Trigger */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10 pt-5 z-10 text-xs font-mono animate-fade-up">
        <div className="text-[#D8D3CA]/80">
          <strong className="text-white font-serif-display italic text-sm">Final Takeaway: </strong>
          Faster ordering. Protected hospitality. Defensible economics.
        </div>

        <button
          onClick={onGoToStart}
          className="flex items-center gap-2 px-3 py-1.5 rounded bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/10"
        >
          <span>Return to Cover</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#8D2929]" />
        </button>
      </div>
    </div>
  );
};
