import { SlideData } from '../types';

export const SLIDES_METADATA: SlideData[] = [
  {
    id: 1,
    slug: 'cover',
    title: 'The Full Business Read',
    subtitle: 'Reducing ordering friction without losing the premium experience',
    theme: 'charcoal',
    notes: {
      timeCode: '0:00 – 0:40 | Opening',
      script:
        'Good morning, evaluators. My capstone asks one central question: can Beyondburg make ordering faster through AI-enabled self-service without weakening its premium customer experience? I studied the Palarivattom outlet in Kochi and conducted in-depth field research with Operations Manager Mohammed Aslam. Today, I present seven critical business readings and a disciplined strategic pilot proposal.',
      keyPoints: [
        'Research site: Beyondburg Palarivattom, Kochi.',
        'Primary source: Mohammed Aslam (Operations Manager).',
        'Core tension: Efficiency of ordering vs. warmth of premium hospitality.',
        'Total presentation runtime target: 6 minutes.'
      ],
      likelyQuestions: [
        {
          question: 'Why did you select Beyondburg for this capstone study?',
          suggestedAnswer:
            'Beyondburg represents a rapidly growing premium QSR category in Kerala. Unlike standard fast-food chains that compete on speed alone, Beyondburg charges a premium for artisanal smash burgers and hospitality. That makes technology deployment especially high-stakes.'
        }
      ]
    }
  },
  {
    id: 2,
    slug: 'business',
    title: 'A Premium Burger Experience',
    subtitle: 'Positioning, product craft and business model tensions',
    theme: 'ivory',
    notes: {
      timeCode: '0:40 – 1:20 | Business Model',
      script:
        'Beyondburg began as a modest kiosk in 2017 and has expanded into a distinctive brand. Its proposition centres on premium product quality: speciality-butchery meat, freshly baked brioche buns, and house-crafted sauces. Revenue flows across dine-in, takeaway, and delivery. In-store, the signature Smash Burger sells at ₹390 before tax. The operational challenge is that premium food craft requires deliberate pacing, yet modern diners demand frictionless ordering. Technology must reinforce hospitality, not dilute it.',
      keyPoints: [
        'Brand heritage: Started as a kiosk in 2017 (per company website).',
        'Product pillars: Butchery beef, house-baked brioche, fresh ingredients.',
        'Core revenue categories: Burgers, deli sandwiches, sides, beverages, desserts.',
        'Smash Burger in-store price: ₹390 pre-tax (verified field input).',
        'Operating mandate: Balance culinary craft with operational velocity.'
      ],
      likelyQuestions: [
        {
          question: 'Are there other revenue streams beyond food and beverages?',
          suggestedAnswer:
            'No additional revenue streams such as merchandise, royalties, or third-party catering were verified during field research. The business model is purely menu-driven across on-premise and off-premise channels.'
        }
      ]
    }
  },
  {
    id: 3,
    slug: 'market',
    title: 'Competing Beyond Price',
    subtitle: 'Comparative positioning and public price context in Kochi',
    theme: 'ivory',
    notes: {
      timeCode: '1:20 – 1:55 | Market & Competitors',
      script:
        'In Kochi’s gourmet burger market, Beyondburg contends with key alternatives including The Burger Junction (TBJ) and The Burgery. While public online menu listings offer directional price signals, they are not directly comparable due to variations in aggregator commissions, portions, taxes, and promotional discounting. Beyondburg differentiates through an artisanal deli ambiance and smash-patty technique rather than aggressive discounting.',
      keyPoints: [
        'Key competitors: The Burger Junction (TBJ) & The Burgery.',
        'Directional pricing: Beyondburg ₹390 in-store Smash Burger (pre-tax); competitor prices vary by channel.',
        'Convenience gap: Counter ordering with proposed self-service vs. conventional counters.',
        'Data qualification: No matched basket study exists; public online prices cannot establish market share.'
      ],
      likelyQuestions: [
        {
          question: 'Why not compare delivery app prices directly?',
          suggestedAnswer:
            'Aggregators apply markups, dynamic surge fees, packaging surcharges, and outlet-specific promotions. A rigorous academic comparison requires matched dine-in baskets, which have not yet been audited across all three.'
        }
      ]
    }
  },
  {
    id: 4,
    slug: 'void',
    title: 'The Friction Happens Before the Food',
    subtitle: 'Deconstructing the customer journey bottleneck',
    theme: 'ivory',
    notes: {
      timeCode: '1:55 – 2:40 | The Customer Void',
      script:
        'This is the analytical heart of the study. During my interview with Operations Manager Mohammed Aslam, he highlighted that customers frequently take considerable time to decide what to order and complete billing. Notice the critical distinction: Decision Time (browsing options, weighing customisations) vs. Transaction Time (keying items, payment verification). The delay is a reported management observation that has not yet been quantified with stopwatch studies. We cannot assume lost sales or queue abandonment without rigorous baseline measurement.',
      keyPoints: [
        '5-stage customer journey: Discover → Decide → Enter/Confirm → Pay → Receive.',
        'Identified friction point: Extended time taken during menu choice and billing.',
        'Cognitive load vs. POS lag: Decision time requires UX guidance; transaction time requires swift hardware.',
        'Critical limitation: Delay has not yet been quantified; kitchen bottlenecks must not be conflated with ordering delays.'
      ],
      likelyQuestions: [
        {
          question: 'Is there data proving customers leave because of slow queues?',
          suggestedAnswer:
            'No. The Operations Manager identified decision and billing friction as a notable operational pain point, but queue abandonment and lost sales remain unquantified hypotheses that our proposed baseline phase must measure.'
        }
      ]
    }
  },
  {
    id: 5,
    slug: 'organisation',
    title: 'Technology Must Fit the Operation',
    subtitle: 'Working hierarchy, SOP discipline and pilot accountability',
    theme: 'ivory',
    notes: {
      timeCode: '2:40 – 3:25 | Operating Model & Team',
      script:
        'Technology cannot succeed in isolation from organizational structure. The working hierarchy based on field discussion runs from Founder, through Operations & Finance, to Store Managers, and Frontline Staff. Standard Operating Procedures (SOPs) govern store decisions. For our proposed self-service pilot, accountability is sharply defined: the Operations Manager oversees pilot metrics, the Store Manager ensures daily execution, Frontline staff handle customer guidance and exceptions, and a designated tech owner handles uptime. Any affected staff must be retrained and redeployed, not simply displaced.',
      keyPoints: [
        'Provisional hierarchy: Founder → Ops & Finance → Store Managers → Frontline Staff.',
        'Status: Working structure from field discussions, not an audited statutory organogram.',
        'SOP compliance: Frontline execution relies on standardised operating guidelines.',
        'Pilot governance: 4 clear ownership roles with explicit escalation triggers.',
        'Human factor: Redeployment and training prioritized over headcount elimination.'
      ],
      likelyQuestions: [
        {
          question: 'Will self-service kiosks lead to staff layoffs?',
          suggestedAnswer:
            'The Operations Manager noted that the company would strive to offer affected employees alternative roles. In a hospitality-driven brand, reassigning staff from routine cashier duty to floor hospitality, table service, and order resolution protects the customer experience.'
        }
      ]
    }
  },
  {
    id: 6,
    slug: 'economics',
    title: 'Understand the Economics Before Scaling',
    subtitle: 'Separating audited historical accounts from outlet-level estimates',
    theme: 'ivory',
    notes: {
      timeCode: '3:25 – 4:35 | Unit Economics & Financial Realities',
      script:
        'Slide 6 presents two separate financial lenses that must never be conflated. On the left: FY2024 MCA-filed statutory accounts show ₹12.01 lakh revenue, ₹11.58 lakh other expenses (with rent and utilities comprising 75%), yielding ₹43,380 profit before tax and ₹1,010 profit after tax. On the right: Manager-reported inputs for the Palarivattom outlet indicate ~2,300 monthly bills at ₹1,127 AOV, implying ₹25.92 lakh monthly sales (or ~₹3.11 crore annualized). These datasets reflect different reporting perimeters. Below: A pre-tax ₹390 Smash Burger with 35–40% general ingredient cost yields ₹234–₹253.50 remaining. This is NOT profit; it excludes labor, fees, and overhead.',
      keyPoints: [
        'FY2024 Legal entity accounts: Revenue ₹12.01L, Expenses ₹11.58L, PBT ₹43,380, PAT ~₹1,010.',
        'Overhead burden: Rent (₹5.89L) + Utilities (₹2.78L) = ₹8.67L (~75% of other expenses).',
        'Outlet estimate: 2,300 bills × ₹1,127 AOV = ₹25.92 lakh/mo (~₹3.11 crore annualized).',
        'Smash Burger unit math: ₹390 price - 35-40% ingredients (₹136.50-₹156) = ₹234-₹253.50 balance.',
        'Strict financial disclaimer: Balance after ingredients is NOT profit or verified contribution margin.'
      ],
      likelyQuestions: [
        {
          question: 'Why is there a huge discrepancy between FY24 ₹12L revenue and ₹3.11 crore annualized?',
          suggestedAnswer:
            'The ₹12.01 lakh figure comes from FY2024 MCA statutory filings for a specific corporate entity, which may reflect early operations or a holding structure. The ₹3.11 crore figure is an annualized estimate from manager-reported Palarivattom outlet activity in a later period. They cannot be combined or directly compared.'
        },
        {
          question: 'Why did you exclude packaging from the unit economics?',
          suggestedAnswer:
            'The illustrative unit economics specifically model dine-in consumption (which accounts for ~77% of reported volume), where disposable packaging is minimal compared to off-premise deliveries.'
        }
      ]
    }
  },
  {
    id: 7,
    slug: 'ai-strategy',
    title: 'Test Self-Service Before Scaling',
    subtitle: 'A phased, risk-mitigated pilot with operational safeguards',
    theme: 'ivory',
    notes: {
      timeCode: '4:35 – 5:15 | Strategic Move: Phased Pilot',
      script:
        'Management is considering approximately 4 to 5 self-service screens. Rather than betting on complex generative AI immediately, we recommend pragmatic, rule-based recommendation algorithms (dietary filters, heat level preferences, popular pairings). The pilot executes across 3 disciplined phases: Phase 1 establishes the empirical baseline. Phase 2 tests the screens during defined peak dayparts while maintaining front-line staff support. Phase 3 compares measured performance against an illustrative target of 15% reduction in median ordering time before making any scale decision.',
      keyPoints: [
        'Hardware scope: Proposed 4–5 self-service touchpoints for the Palarivattom outlet.',
        'Pragmatic tech: Rule-based recommendation engine prioritized over speculative complex AI.',
        '6-step screen flow: Preferences → Recommendations → Customise → Review → Pay → Confirm.',
        'Phase 1: Baseline measurement of ordering time, error rates, and baseline CSAT.',
        'Phase 2: Peak daypart pilot with parallel human assistance safeguards.',
        'Phase 3: Formal review using illustrative 15% time-reduction benchmark (not an achieved claim).'
      ],
      likelyQuestions: [
        {
          question: 'Why rule-based recommendations instead of deep learning or LLMs?',
          suggestedAnswer:
            'A QSR menu of 25–40 items does not require a multi-million parameter neural network. Rule-based logic (e.g., prompting sides, cheese upgrades, or beverage pairings based on dietary choices) is fast, deterministic, zero-latency, explainable, and inexpensive to implement.'
        }
      ]
    }
  },
  {
    id: 8,
    slug: 'recommendation',
    title: 'Reduce Friction. Protect the Experience.',
    subtitle: 'The strategic synthesis and executive decision rule',
    theme: 'charcoal',
    notes: {
      timeCode: '5:15 – 6:00 | Conclusion & Synthesis',
      script:
        'In conclusion, our recommendation is direct: Do not automate for the sake of automation. Test whether better ordering improves both the customer experience and the economics. Beyondburg built its brand on craft and human connection. By establishing a rigorous baseline, running a controlled 4–5 screen pilot, safeguarding frontline hospitality, and demanding verified financial payback, Beyondburg can eliminate queues without losing what makes it special. Thank you. I welcome your questions.',
      keyPoints: [
        'Core strategic dictum: Test before scaling; protect brand equity.',
        'Pillar 1: Measure the problem rigorously before capital deployment.',
        'Pillar 2: Run a controlled, time-bounded pilot with fallback SOPs.',
        'Pillar 3: Protect access to human hospitality and frontline dignity.',
        'Pillar 4: Scale only when empirical data proves speed and unit economics.',
        'Final takeaway: Faster ordering. Protected hospitality. Defensible economics.'
      ],
      likelyQuestions: [
        {
          question: 'What is the biggest risk of proceeding with this recommendation?',
          suggestedAnswer:
            'The biggest risk is customer alienation if the kiosks feel cold, sterile, or suffer software failures during peak rushes. That is why our framework requires keeping staff side-by-side with screens during the pilot.'
        }
      ]
    }
  }
];
