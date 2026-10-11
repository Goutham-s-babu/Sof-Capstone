import { SlideData } from '../types';

export const SLIDES_METADATA: SlideData[] = [
  {
    id: 1,
    slug: 'cover',
    category: 'TERM 1 CAPSTONE · THE FULL READ',
    title: 'Beyondburg:\npremium taste, thin proof',
    subtitle: 'A Kochi burger brand read through its market, customer journey, unit economics and one testable strategic move.',
    footnote: 'Palarivattom, Kochi · Field interview + public research + labelled estimates',
    footerLeft: 'SCHOOL OF FUTURE · TERM 1 CAPSTONE',
    footerRight: '',
    theme: 'charcoal',
    notes: {
      timeCode: '0:00 – 0:45 | Title & Context',
      script:
        'Good morning, evaluators. My capstone investigates Beyondburg, a premium gourmet burger and deli brand located in Palarivattom, Kochi. Founded in 2017, the brand is celebrated for high-quality smash burgers and hospitality. However, our primary strategic question is: can faster ordering improve value without diluting service? Today, we evaluate the market, customer journey, unit economics, and propose a disciplined, testable AI-assisted self-ordering pilot.',
      keyPoints: [
        'Site: Palarivattom, Kochi (operations manager interview + public data).',
        'Key tension: Fast-casual ordering velocity vs. artisanal hospitality.',
        'Core inquiry: Whether self-service ordering reduces friction without degrading customer touchpoints.'
      ],
      likelyQuestions: [
        {
          question: 'What is the exact scope of this capstone?',
          suggestedAnswer:
            'A rigorous field study of Beyondburg Palarivattom covering unit economics, customer journey bottlenecks, and an empirical framework to test self-service ordering before committing capital.'
        }
      ]
    }
  },
  {
    id: 2,
    slug: 'table-of-contents',
    category: 'TERM 1 CAPSTONE · OUTLINE',
    title: 'Table of Contents',
    subtitle: 'Key topics and analytical areas covered in this capstone presentation.',
    footnote: 'Presentation outline · 10 core sections',
    footerLeft: 'SCHOOL OF FUTURE · TERM 1 CAPSTONE · BEYONDBURG',
    footerRight: '02',
    theme: 'charcoal',
    notes: {
      timeCode: '0:45 – 1:15 | Table of Contents',
      script:
        'To guide our presentation, here is the table of contents covering the 10 core sections of this capstone: starting with the business proposition and market analysis, followed by customer journey and operational friction, store governance and unit economics, and concluding with our proposed AI self-ordering pilot, sensitivity scenarios, and field research. Let us proceed to Section 1.',
      keyPoints: [
        'Sections 01–02: What It Is & The Market',
        'Sections 03–04: How It Sells and Speaks & The Void Question',
        'Sections 05–06: The Organisation & The Numbers That Matter',
        'Sections 07–08: Where Intelligence Changes the Game & The Move',
        'Sections 09–10: Conclusion & Field Research Acknowledgments'
      ],
      likelyQuestions: [
        {
          question: 'What is the logical flow of this deck?',
          suggestedAnswer:
            'A structured progression from business model baseline and market context to operational bottleneck diagnosis, financial validation, and a testable technological pilot.'
        }
      ]
    }
  },
  {
    id: 3,
    slug: 'what-it-is',
    category: '1 · WHAT IT IS',
    title: 'A premium burger and deli proposition built on ingredients',
    subtitle: 'Beyondburg’s public brand story highlights speciality-butchery meat, brioche buns and fresh vegetables.',
    footnote: 'Sources: Beyondburg website; field interview with Operations Manager Mohammed Aslam. Cost percentages are manager-reported.',
    footerLeft: 'SCHOOL OF FUTURE · TERM 1 CAPSTONE · BEYONDBURG',
    footerRight: '03',
    theme: 'charcoal',
    notes: {
      timeCode: '0:45 – 1:30 | Business Proposition',
      script:
        'Beyondburg originated as a kiosk in 2017 and has matured into a premium burger destination. The core offering is smash burgers, sandwiches, sides, and an elevated dine-in atmosphere, with the signature Smash Burger retailing at ₹390 before taxes. The business relies on word of mouth and social discovery, with manager-reported channel mix heavily weighted toward dine-in at 77%. The critical economic tension is that high ingredient costs (35–40%) leave a 60–65% gross margin that must absorb kitchen labour, high-street rent, utilities, and packaging.',
      keyPoints: [
        'Offering: Artisanal smash burgers, deli sandwiches, sides; signature Smash Burger at ₹390 pre-tax.',
        'Channels: 77% dine-in, 23% takeaway (manager-reported, un-audited).',
        'Cost structure: 35–40% food cost leaves 60–65% to cover fixed operations.'
      ],
      likelyQuestions: [
        {
          question: 'Are the cost percentages verified by audited financial statements?',
          suggestedAnswer:
            'No. Operations Manager Mohammed Aslam provided the 35–40% food cost estimate across the menu; it is manager-reported and not recipe-specific.'
        }
      ]
    }
  },
  {
    id: 4,
    slug: 'the-market',
    category: '2 · THE MARKET',
    title: 'A ₹6.96 lakh crore food-service market—but premium burgers are a niche',
    subtitle: 'The opportunity is not to capture all of India’s food market; it is to win a specific urban customer and occasion.',
    footnote: 'Sources: IBEF/Kearney–Swiggy (Nov 2025); KPMG India CX Report 2025; public menu listings checked 11 Oct 2026.',
    footerLeft: 'SCHOOL OF FUTURE · TERM 1 CAPSTONE · BEYONDBURG',
    footerRight: '04',
    theme: 'charcoal',
    notes: {
      timeCode: '1:30 – 2:15 | Market Context & Competitive Landscape',
      script:
        'While India’s food services market is estimated at ₹6.96 lakh crore in 2025 with organized food service at 45–50% and QSR growing at 15–17% CAGR, premium gourmet burgers remain a focused urban niche. Beyondburg faces global chains like McDonald’s and Burger King for broad fast-food share, and local artisanal competitors like The Burger Junction and The Burgery in Kochi. With prices ranging from ₹317 to ₹470 across listings, KPMG data shows consumers will pay a premium only when food quality and service consistently deliver.',
      keyPoints: [
        'Macro market: ₹6.96L cr food-service market; organized share rising from 45–50% to ~55% by 2030.',
        'Local rivals: TBJ (Cheese Burger ₹317) and The Burgery (Smash Down ₹420) vs Beyondburg Smash (₹470 listing).',
        'Data discipline: No official burger-only TAM exists; analysis must be sized bottom-up.'
      ],
      likelyQuestions: [
        {
          question: 'Why not size the national burger market directly?',
          suggestedAnswer:
            'No robust, audited public figure exists solely for gourmet burgers in India. Inventing a synthetic TAM would be methodologically unsound; Beyondburg must size its addressable market locally from the store level.'
        }
      ]
    }
  },
  {
    id: 5,
    slug: 'how-it-sells-and-speaks',
    category: '3 · HOW IT SELLS AND SPEAKS',
    title: 'Discovery brings attention; checkout must convert it',
    subtitle: 'The funnel is a planning example, not measured Beyondburg conversion. AOV uses the Operations Manager\'s reported ₹1,127.',
    footnote: 'This is not a current sales estimate. Use actual menu views, order starts and POS paid orders to calculate the real conversion rate.',
    footerLeft: 'SCHOOL OF FUTURE · TERM 1 CAPSTONE · BEYONDBURG',
    footerRight: '05',
    theme: 'charcoal',
    notes: {
      timeCode: '2:15 – 3:00 | Channel Funnel & Conversion Dynamics',
      script:
        'Slide 4 analyzes how marketing translates into revenue. We know customer discovery happens through Instagram and word of mouth. However, Beyondburg currently lacks tracked telemetry across the funnel from menu views to completed orders. In our illustrative cohort of 1,000 visits with an assumed 30% order start and 80% checkout completion, 240 paid orders at the reported ₹1,127 AOV generate ₹2,70,480. We must track POS and digital touchpoints to replace illustrative assumptions with measured conversion data.',
      keyPoints: [
        'Funnel visibility: Discovery is active, but drop-offs between menu viewing and final payment are untracked.',
        'Cohort math: 1,000 visits → 300 starts (30%) → 240 paid orders (80%) = 24% visit-to-paid conversion.',
        'Revenue link: 240 orders × ₹1,127 reported AOV = ₹2,70,480 illustrative gross sales.'
      ],
      likelyQuestions: [
        {
          question: 'Is the 24% conversion rate an observed company metric?',
          suggestedAnswer:
            'No, it is strictly an illustrative planning funnel. The recommendation is to instrument analytics and POS logs to measure actual drop-off rates.'
        }
      ]
    }
  },
  {
    id: 6,
    slug: 'the-void-question',
    category: '4 · THE VOID QUESTION',
    title: 'How much time is lost—and what could it be worth?',
    subtitle: 'The manager identified decision and billing delays; baseline queue duration and abandoned orders have not been measured.',
    footnote: 'Recovered orders are hypothetical; only count them if baseline data shows abandonment and the pilot demonstrably reduces it.',
    footerLeft: 'SCHOOL OF FUTURE · TERM 1 CAPSTONE · BEYONDBURG',
    footerRight: '06',
    theme: 'charcoal',
    notes: {
      timeCode: '3:00 – 3:45 | Bottleneck Identification & Time Value',
      script:
        'In field discussions, management noted that customers take substantial time deciding, navigating options, and completing billing. If we model an assumed baseline of 4.0 minutes per order and target a 15% reduction (saving 36 seconds), across 100 rush orders this releases 60 minutes of service capacity daily. If queue reduction genuinely recovers 10 abandoned orders at ₹1,127 AOV, that equates to ₹11,270 in sales and ₹3,945 in contribution daily. However, faster checkout must never compromise hospitality or increase order errors.',
      keyPoints: [
        'Friction void: Delay occurs in order entry and customer decision-making at counter.',
        'Time release: 36 seconds saved per order across 100 daily rush orders releases 1 hour of operational capacity.',
        'Financial recovery: 10 recovered orders = ₹11,270 sales, yielding ₹3,945 contribution at 35% margin.'
      ],
      likelyQuestions: [
        {
          question: 'Have walkaways been recorded at Palarivattom?',
          suggestedAnswer:
            'Baseline queue duration and abandoned orders have not yet been systematically measured. Our pilot begins with a time-stamping study of 100 orders across rush and non-rush hours to establish empirical baseline proof.'
        }
      ]
    }
  },
  {
    id: 7,
    slug: 'the-organisation',
    category: '5 · THE ORGANISATION',
    title: 'SOP-led operations need clear ownership for the pilot',
    subtitle: 'The hierarchy is a provisional field-based map; pilot accountability is a proposed operating model.',
    footnote: 'The chart shows the working structure from field discussion—not a verified formal organisation chart.',
    footerLeft: 'SCHOOL OF FUTURE · TERM 1 CAPSTONE · BEYONDBURG',
    footerRight: '07',
    theme: 'charcoal',
    notes: {
      timeCode: '3:45 – 4:30 | Operational Governance & RACI',
      script:
        'Technology implementations fail without operational ownership. Beyondburg functions through a defined chain from Founder down to Operations & Finance, Store Managers, and the Frontline Team. For our proposed pilot, governance is clear: the Operations Manager acts as Pilot Owner setting targets and review triggers; the Store Manager handles daily staff rotas and exception logs; frontline staff provide hospitality and assisted ordering; and the tech vendor manages POS uptime.',
      keyPoints: [
        'Hierarchy: Founder → Operations + Finance → Store Manager → Frontline Team.',
        'Pilot ownership: Ops Manager leads weekly reviews; Store Manager handles daily execution.',
        'Weekly audit metrics: Uptime, failed payments, errors per 100 orders, staff-help rate, and satisfaction.'
      ],
      likelyQuestions: [
        {
          question: 'Will self-ordering screens replace frontline employees?',
          suggestedAnswer:
            'No. In a premium concept, staff are redeployed from routine cashier duties to floor hospitality, guided menu assistance, and fast exception resolution.'
        }
      ]
    }
  },
  {
    id: 8,
    slug: 'the-numbers-that-matter',
    category: '6 · THE NUMBERS THAT MATTER · ESTIMATES',
    title: 'Show contribution per burger—not an undefined residual',
    subtitle: 'Assume the 25–30% line represents other VARIABLE costs, not all overheads. Validate this classification with management.',
    footnote: 'Ingredient cost is manager-reported. Other variable costs and 35% midpoint margin are assumptions, not verified company data.',
    footerLeft: 'SCHOOL OF FUTURE · TERM 1 CAPSTONE · BEYONDBURG',
    footerRight: '08',
    theme: 'charcoal',
    notes: {
      timeCode: '4:30 – 5:15 | Unit Economics & Statutory Context',
      script:
        'Slide 7 brings rigor to the economics. We contrast two realities: the Palarivattom outlet inputs suggest ~2,300 monthly bills at ₹1,127 AOV (₹25.92L/month sales), while FY2024 MCA statutory accounts for the legal entity show ₹12.01L annual revenue, ₹8.67L rent/utilities (75% of expenses), and modest profit. For our ₹390 pre-tax Smash Burger, subtracting 35–40% ingredients (₹136.50–156) and an assumed 25–30% other variable costs (₹97.50–117) leaves an estimated contribution of ₹117–156 (30–40% margin). Assuming ₹6L fixed costs and a 35% margin, break-even requires ₹17.14L monthly sales.',
      keyPoints: [
        'Dual financial lenses: MCA FY24 entity figures vs. current outlet operating run-rate (~₹25.92L/mo).',
        'Smash Burger unit math: ₹390 selling price yields ₹117–156 contribution per burger (30–40% margin).',
        'Break-even hurdle: ₹6L fixed costs ÷ 35% margin = ₹17.14L/month required outlet revenue.'
      ],
      likelyQuestions: [
        {
          question: 'Why are the legal entity accounts lower than current outlet sales?',
          suggestedAnswer:
            'MCA filings represent historical FY2024 statutory financials of the legal entity; current outlet metrics reflect later field estimates for Palarivattom. They represent different scopes and cannot be reconciled without internal books.'
        }
      ]
    }
  },
  {
    id: 9,
    slug: 'where-intelligence-changes-the-game',
    category: '7 · WHERE INTELLIGENCE CHANGES THE GAME',
    title: 'Implement AI-assisted guided self-ordering',
    subtitle: 'Deploy a controlled 4-screen pilot with an AI menu assistant, staff oversight and measurable guardrails.',
    footnote: 'Implementation includes menu/POS integration, privacy notice, fallback mode, staff training and vendor quote validation.',
    footerLeft: 'SCHOOL OF FUTURE · TERM 1 CAPSTONE · BEYONDBURG',
    footerRight: '09',
    theme: 'charcoal',
    notes: {
      timeCode: '5:15 – 6:00 | Technology Architecture & Hurdle Rate',
      script:
        'Slide 8 outlines the technology intervention: a 4-screen pilot featuring an AI menu assistant that queries dietary preferences, recommends high-margin pairings from approved menu data, and seamlessly syncs to POS with human allergen safety guardrails. Financing this requires ₹1.2L upfront (₹30k/screen) plus ₹10k/month software support, amounting to an annualized hurdle of ₹20k/month. At a 35% contribution margin, this requires ₹57,143 in incremental monthly sales—or just 51 incremental orders per month (~1.7 orders/day).',
      keyPoints: [
        'Hardware scope: 4 self-ordering touchscreens deployed in peak rush zones.',
        'AI guidance: Preference elicitation, 2–3 targeted recommendations, ingredient explanation, POS confirmation.',
        'Financial hurdle: ₹1.2L capital + ₹10k/mo recurring = ₹20k/mo hurdle. Covers hurdle with 51 extra orders/month.'
      ],
      likelyQuestions: [
        {
          question: 'What happens if the AI makes an allergen mistake?',
          suggestedAnswer:
            'The AI assistant is strictly bound to pre-approved menu database fields and forbidden from hallucinating allergens. Any complex dietary requirement triggers frontline staff intervention.'
        }
      ]
    }
  },
  {
    id: 10,
    slug: 'the-move',
    category: 'THE MOVE',
    title: 'Pilot AI-assisted self-ordering at rush periods; scale only if contribution improves',
    subtitle: 'All calculations use ₹1,127 reported AOV, 35% assumed contribution margin and ₹20,000 monthly cost hurdle. Uplift is hypothetical.',
    footnote: 'ASSUMPTIONS: 2,000 exposed orders; 2–8% uplift and 35% margin unverified. | CONSISTENCY CHECK: ₹20k cost needs ₹57,143 sales ≈ 51 orders at ₹1,127 AOV.',
    footerLeft: 'SCHOOL OF FUTURE · TERM 1 CAPSTONE · BEYONDBURG',
    footerRight: '10',
    theme: 'charcoal',
    notes: {
      timeCode: '6:00 – 6:45 | Scenario Sensitivity & Decision Gates',
      script:
        'Slide 9 tests the sensitivity of the move across 2,000 orders exposed to the pilot. In a conservative Low scenario (+2% uplift or 40 extra orders), sales rise ₹45,080, generating ₹15,778 in contribution—falling ₹4,222 short of the ₹20k monthly hurdle. At Mid (+5% uplift or 100 extra orders), sales increase ₹1,12,700, delivering ₹39,445 contribution and a net gain of +₹19,445. At High (+8%), net contribution expands by +₹43,112. The strategic gate is binary: scale only if measured contribution exceeds full pilot costs while preserving hospitality standards.',
      keyPoints: [
        'Breakeven requirement: At least ~51 incremental orders needed to cover the ₹20k hurdle.',
        'Scenario range: Low (+2%) yields -₹4,222; Mid (+5%) yields +₹19,445; High (+8%) yields +₹43,112 net contribution.',
        'Decision rule: Proceed to multi-store rollout only if empirical contribution clears hurdle and CSAT holds.'
      ],
      likelyQuestions: [
        {
          question: 'What is the downside risk if uplift is zero?',
          suggestedAnswer:
            'The monthly downside is capped at the ₹20k hurdle rate. If the pilot fails to deliver 51 incremental orders or degrades customer experience, the lease/software agreement is paused immediately.'
        }
      ]
    }
  },
  {
    id: 11,
    slug: 'conclusion',
    category: 'CONCLUSION',
    title: 'Premium taste is the promise.\nReliable execution is the proof.',
    subtitle: 'Beyondburg sits in a growing food-service market, but the burger-only market size is not reliably established here.\nThe next move is a measured self-service pilot—not an assumption-led rollout.',
    footnote: 'Field interview • MCA FY2024 accounts • Redseer/Kearney-Swiggy • KPMG • public menus',
    footerLeft: 'SCHOOL OF FUTURE · TERM 1 CAPSTONE · BEYONDBURG',
    footerRight: '11',
    theme: 'charcoal',
    notes: {
      timeCode: '6:45 – 7:30 | Executive Synthesis',
      script:
        'In conclusion, premium taste is Beyondburg’s brand promise; reliable execution must be its business proof. While the macroeconomic food services market is expanding, sustainable profitability depends on disciplined unit economics. Rather than an unmeasured, capital-heavy rollout, Beyondburg should execute our disciplined four-step roadmap: Measure the void, pilot the fix, prove contribution, and scale only upon validation. Thank you. I am ready for your questions.',
      keyPoints: [
        'Strategic synthesis: Premium food craft must be paired with operational discipline.',
        'Roadmap: Measure the void → pilot the fix → prove contribution → scale.',
        'Core takeaway: Do not automate blindly; pilot with strict contribution hurdles and protect the guest experience.'
      ],
      likelyQuestions: [
        {
          question: 'What is your primary advice to the Founder?',
          suggestedAnswer:
            'Begin with a 2-week baseline timestamp study at Palarivattom. If ordering bottlenecks are verified, pilot 4 screens with the ₹20k hurdle test before making capital commitments.'
        }
      ]
    }
  },
  {
    id: 12,
    slug: 'thank-you',
    category: 'TERM 1 CAPSTONE · FIELD RESEARCH & ACKNOWLEDGMENTS',
    title: 'Thank You.\nGrounded in field observation, operational reality, and empirical research.',
    subtitle: 'Special thanks to Beyondburg Palarivattom, Ops Head Mohammed Aslam, Store Manager Michael, and School of Future evaluators.',
    footnote: 'Field research conducted at Beyondburg Palarivattom, Kochi · On-site interviews and audits',
    footerLeft: 'SCHOOL OF FUTURE · TERM 1 CAPSTONE · BEYONDBURG',
    footerRight: '12',
    theme: 'charcoal',
    notes: {
      timeCode: '7:30 – 8:00 | Field Acknowledgments & Q&A',
      script:
        'Thank you very much evaluators. This capstone was built upon firsthand on-site research conducted at Beyondburg Palarivattom, including an interview with Store Manager Michael, operational review with Ops Head Mohammed Aslam, floor observations of counter order dynamics, and team review. I am now open for your questions, methodological defense, and strategic discussion.',
      keyPoints: [
        'Fieldwork: Conducted on-site at Palarivattom with Ops Head Mohammed Aslam, Store Manager Michael, and store crew.',
        'Visual evidence: Authentic counter audits, order flow review, and group field research.',
        'Readiness: Prepared to defend all cost assumptions, unit economics, and pilot criteria.'
      ],
      likelyQuestions: [
        {
          question: 'Are you ready for evaluator questions?',
          suggestedAnswer:
            'Yes, evaluators. I am ready to discuss the unit economics, technology implementation details, customer journey bottlenecks, and the rationale behind the ₹20,000 pilot hurdle.'
        }
      ]
    }
  }
];
