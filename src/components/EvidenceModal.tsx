import React from 'react';
import { X, ShieldCheck, Database, BookOpen, Calculator, Sparkles, AlertCircle, FileCheck } from 'lucide-react';

interface EvidenceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EvidenceModal: React.FC<EvidenceModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const standards = [
    {
      category: 'Reported Data',
      badge: 'REPORTED DATA',
      badgeColor: 'bg-[#BD4F19] text-white',
      borderColor: 'border-[#BD4F19]',
      icon: Database,
      definition: 'Primary operational figures shared directly during on-site field interviews with Beyondburg management at Palarivattom. These reflect outlet-level run-rates and are not audited statutory accounts.',
      examples: [
        'Average Order Value (AOV): ₹1,127 (reported by Operations Manager Mohammed Aslam)',
        'Monthly Volume: ~2,300 bills/month (reported by Operations Manager)',
        'Channel Mix: 77% dine-in / 23% takeaway (reported by Operations Manager)',
        'Reference Price: Signature Smash Burger ₹390 before taxes (verified on-site)',
        'Ingredient Cost: 35–40% reported range across menu (median 37.5%)',
      ],
    },
    {
      category: 'External Research',
      badge: 'EXTERNAL RESEARCH',
      badgeColor: 'bg-[#1C1917] text-white',
      borderColor: 'border-[#1C1917]',
      icon: BookOpen,
      definition: 'Published third-party macroeconomic, industry, and consumer research reports from recognized research institutions and statutory bodies.',
      examples: [
        'India Food Services Market: ₹6.96 lakh crore in 2025; projected ₹10.7–11.2 lakh crore by 2030 (Swiggy–Kearney "How India Eats 2025", reported by IBEF)',
        'Novel Flavour Interest: 29% of diners express willingness to explore novel flavours and pay for unique menu items (KPMG India CX Report 2025)',
        'Quality Trust Premium: 30% of consumers cite trust in consistent food quality and service as justifying higher pricing (KPMG India CX Report 2025)',
        'Local Competitor Pricing: The Burgery (Smash Down ~₹420) and The Burger Junction / TBJ (Cheese Burger ~₹317) via public Kochi menus',
      ],
    },
    {
      category: 'Calculations',
      badge: 'CALCULATION',
      badgeColor: 'bg-[#2E6038] text-white',
      borderColor: 'border-[#2E6038]',
      icon: Calculator,
      definition: 'Mathematical derivations strictly computed from established baseline figures and explicitly labelled assumptions.',
      examples: [
        'Smash Burger Total Variable Cost: ₹146.25 + ₹107.25 = ₹253.50 ≈ ₹254 (rounded)',
        'Estimated Unit Contribution: ₹390 - ₹253.50 = ₹136.50 ≈ ₹137 per burger (35.0% margin)',
        'Contribution per Average Bill: ₹1,127 × 35% blended margin = ₹394.45',
        'Outlet Break-Even Volume: ₹7,00,000 ÷ ₹394.45 ≈ 1,775 bills/month (~59 bills/day)',
        'Incremental Revenue Formula: (Custom Burger Price − Regular Burger Price) × Number of Orders',
        'Add-on Contribution Formula: Add-on Price − Additional Variable Cost',
      ],
    },
    {
      category: 'Assumptions',
      badge: 'ASSUMPTION',
      badgeColor: 'bg-[#D97706] text-white',
      borderColor: 'border-[#D97706]',
      icon: AlertCircle,
      definition: 'Hypothetical or modelled figures deployed for analytical testing where empirical audited company records are unavailable. Explicitly identified as unverified.',
      examples: [
        'Other Variable Costs: Modelled at 27.5% (~₹107) for packaging, payment fees, and kitchen consumables',
        'Assumed Operating-Cost Base: Modelled at ₹7.00 lakh/month (planning assumption, not verified fixed costs)',
        'Burger Lab Pricing Architecture: Add-on prices and ingredient costs are illustrative placeholders requiring on-site verification',
        'Provisional Org Structure: Working organizational map based on field research discussions, not a formal statutory chart',
      ],
    },
    {
      category: 'Proposed Experiments',
      badge: 'PROPOSED EXPERIMENT',
      badgeColor: 'bg-[#7C2D12] text-white',
      borderColor: 'border-[#7C2D12]',
      icon: Sparkles,
      definition: 'Unimplemented future strategic and technological interventions designed with strict operational guardrails and empirical evaluation criteria.',
      examples: [
        'Table-Side QR Ordering: Mobile menu browsing, smart recommendations, and order telemetry at every table',
        'Beyondburg Burger Lab: Guided digital customisation pilot via QR menu; kitchen prepares final burger',
        'Safety & Human Guardrails: Zero automation of food safety or allergen checks; human staff retain 100% control',
        'Zero Speculative Claims: No unsubstantiated revenue uplift, customer churn, or guaranteed ROI claimed',
      ],
    },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/60 backdrop-blur-sm animate-fade-in font-mono-consulting"
      onClick={onClose}
    >
      <div
        className="w-full max-w-5xl max-h-[92vh] bg-[#F9F6F0] text-[#1C1917] border border-[#DFD7CB] rounded-2xl shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#E2DDD4] flex items-center justify-between bg-white shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#FAF3ED] border border-[#E5CEBA]">
              <ShieldCheck className="w-5 h-5 text-[#BD4F19]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif-display text-lg sm:text-xl font-bold tracking-tight text-[#1C1917]">
                  Evidence Standards & Data Taxonomy
                </h3>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#BD4F19] text-white uppercase tracking-wider">
                  Academic & Rigor Framework
                </span>
              </div>
              <p className="text-xs text-[#574E4A] mt-0.5">
                Strict separation of reported data, external research, calculations, assumptions, and proposed experiments across all 9 slides.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#EFECE4] hover:bg-[#E5DFD4] text-[#1C1917] transition-colors"
            title="Close Evidence Standards (E or Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 text-xs text-[#44403C]">
          {/* Executive Integrity Banner */}
          <div className="p-4 rounded-xl bg-white border border-[#DFD7CB] shadow-xs space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-[#BD4F19] uppercase tracking-wider">
              <FileCheck className="w-4 h-4 text-[#BD4F19]" />
              <span>Core Methodological Principle</span>
            </div>
            <p className="text-xs sm:text-[13px] text-[#1C1917] leading-relaxed">
              Every data point, benchmark, financial figure, and strategic recommendation in this capstone presentation is tagged with its empirical lineage. No figures are invented, no synthetic TAMs are constructed, and assumptions are explicitly labelled to ensure total academic integrity.
            </p>
          </div>

          {/* 5 Taxonomy Pillars */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-[#BD4F19] uppercase tracking-wider">
              The 5 Evidence Categories
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {standards.map((std, idx) => {
                const IconComponent = std.icon;
                return (
                  <div
                    key={idx}
                    className={`p-4 rounded-xl bg-white border ${std.borderColor} shadow-xs flex flex-col justify-between space-y-3`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase ${std.badgeColor}`}>
                          {std.badge}
                        </span>
                        <IconComponent className="w-4 h-4 text-[#857B74]" />
                      </div>
                      <h5 className="font-serif-display text-sm font-bold text-[#1C1917] mb-1">
                        {std.category}
                      </h5>
                      <p className="text-[11px] text-[#574E4A] leading-relaxed mb-3">
                        {std.definition}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-[#EFEAE2] space-y-1.5">
                      <div className="text-[10px] font-bold text-[#857B74] uppercase tracking-wider">
                        Applied Examples in Deck:
                      </div>
                      <ul className="space-y-1 text-[11px] text-[#44403C]">
                        {std.examples.map((ex, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-[#BD4F19] font-bold">•</span>
                            <span className="leading-tight">{ex}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Key Reconciliation Notes */}
          <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#DFD7CB] space-y-2">
            <h4 className="text-xs font-bold text-[#1C1917] uppercase tracking-wider">
              Arithmetic Reconciliation & Methodological Notes
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[11px] text-[#574E4A]">
              <div className="p-3 rounded-lg bg-white border border-[#E8E2D8]">
                <strong className="text-[#1C1917] block mb-1">Unit Economics Rounding:</strong>
                ₹390 selling price × 37.5% ingredient cost = ₹146.25 (rounds to ₹146). Other variable costs at 27.5% = ₹107.25 (rounds to ₹107). Independently rounded figures sum to ₹253. Unrounded variable cost is ₹253.50 (rounding to ₹254). The ₹137 contribution (35.0%) is preserved from unrounded arithmetic (₹390 - ₹253.50 = ₹136.50 ≈ ₹137).
              </div>
              <div className="p-3 rounded-lg bg-white border border-[#E8E2D8]">
                <strong className="text-[#1C1917] block mb-1">Addressable Market Boundary:</strong>
                India's ₹6.96L crore food-service market is broad macroeconomic context, not Beyondburg's TAM. Beyondburg is a localized gourmet restaurant in Kochi, not a mass QSR brand. Its market is sized bottom-up from urban trade catchments.
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-[#E2DDD4] text-xs text-[#857B74] flex justify-between items-center bg-white shrink-0">
          <span>School of Future · Term 1 Capstone Research Standards</span>
          <span>Press 'E' or Esc to dismiss</span>
        </div>
      </div>
    </div>
  );
};
