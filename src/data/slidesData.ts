import { SlideData } from '../types';

export const SLIDES_METADATA: SlideData[] = [
  {
    id: 1,
    slug: 'what-it-is',
    category: '1 · WHAT IT IS AND HOW IT MAKES MONEY',
    title: 'A premium burger restaurant in Kochi with an experience-led model',
    subtitle: 'Founded in 2017, Beyondburg combines artisanal smash technique with high-ticket sit-down hospitality.',
    footnote: 'Sources: Field interview with Operations Manager Mohammed Aslam; Beyondburg Palarivattom store audit. Cost percentages are manager-reported.',
    footerLeft: 'SCHOOL OF FUTURE · TERM 1 CAPSTONE · BEYONDBURG',
    footerRight: '01',
    theme: 'charcoal',
    notes: {
      timeCode: '0:00 – 0:45 | Slide 1: Business Proposition',
      script:
        'Good morning, evaluators. My capstone examines Beyondburg, a premium gourmet burger restaurant in Kochi. Founded in 2017 as a humble kiosk, Beyondburg has evolved into a destination burger brand centered on freshly ground beef, potato brioche buns, and artisanal smash technique. From our field interview with Operations Manager Mohammed Aslam, the store generates an Average Order Value of ₹1,127 across approximately 2,300 monthly bills, with 77% of volume coming from dine-in. This is not a fast-food counter chasing volume; it is an experience-led restaurant commanding premium prices through ingredient craft and table service.',
      keyPoints: [
        'Offering: Artisanal smash burgers, deli sides, and seated dining; signature Smash Burger retails at ₹390 pre-tax.',
        'Ticket size: Reported Average Order Value (AOV) of ₹1,127 reflects group dining and multiple items per ticket.',
        'Volume & Channel split: ~2,300 monthly bills with a 77% dine-in / 23% takeaway split (manager-reported).',
        'Economic model: Implied monthly gross receipts of ~₹25.9 lakh reliant on guest willingness to pay for craft.'
      ],
      evidenceLineage: [
        'REPORTED DATA: AOV of ₹1,127, ~2,300 monthly bills, and 77%/23% dine-in/takeaway split reported directly by Operations Manager Mohammed Aslam.',
        'REPORTED DATA: In-store Smash Burger selling price of ₹390 before taxes verified during on-site visit.',
        'ASSUMPTION: Implied monthly revenue of ~₹25.92 lakh assumes reported volume and AOV sustain evenly.'
      ],
      likelyQuestions: [
        {
          question: 'Are the 2,300 monthly bills and ₹1,127 AOV audited figures?',
          suggestedAnswer:
            'No. They are primary reported data from our structured field interview with Operations Manager Mohammed Aslam. They represent outlet-level operating run-rates for Palarivattom, not audited statutory filings.'
        },
        {
          question: 'Why is the dine-in percentage so high at 77% for a burger brand?',
          suggestedAnswer:
            'Beyondburg designs its outlets as sit-down social bistros with ambient lighting and plated hospitality. Smash burgers also degrade rapidly in transit, incentivizing immediate in-restaurant consumption.'
        }
      ]
    }
  },
  {
    id: 2,
    slug: 'the-market',
    category: '2 · THE MARKET IT LIVES IN',
    title: 'A ₹6.96 lakh crore food-service market—where premium burgers are a local niche',
    subtitle: 'The opportunity is winning discerning urban consumers in Kochi, not competing for broad mass-market fast food.',
    footnote: 'Sources: Swiggy–Kearney, How India Eats 2025 (IBEF); KPMG India CX Report 2025; Public menu listings in Kochi (checked Oct 2026).',
    footerLeft: 'SCHOOL OF FUTURE · TERM 1 CAPSTONE · BEYONDBURG',
    footerRight: '02',
    theme: 'charcoal',
    notes: {
      timeCode: '0:45 – 1:30 | Slide 2: Market Context',
      script:
        'Looking at market context: India’s food services sector is valued at ₹6.96 lakh crore in 2025 and projected to expand to ₹10.7 to 11.2 lakh crore by 2030 by Swiggy-Kearney and IBEF. However, we must be methodologically disciplined: Beyondburg is NOT a mass QSR brand, and this national macro figure is not its addressable market. Beyondburg operates in a localized premium gourmet niche. Consumer behavior validates this positioning: KPMG’s 2025 Customer Experience Report finds that 29% of diners express willingness to explore novel flavours and pay for unique menu items, while 30% state that trust in consistent food quality justifies premium pricing. In Kochi, its only relevant direct rivals are The Burgery and The Burger Junction (TBJ).',
      keyPoints: [
        'Macro market: India food services at ₹6.96 lakh crore in 2025, growing to ₹10.7–11.2 lakh crore by 2030 (Swiggy-Kearney / IBEF).',
        'CX Evidence: KPMG 2025 reports 29% willingness to pay for novel flavours/unique items, and 30% cite trust in consistent quality for premium pricing.',
        'Local competition: Only relevant direct competitors in Kochi are The Burgery (Smash Down ~₹420) and The Burger Junction / TBJ (Cheese Burger ~₹317).',
        'Methodology guardrail: Do not label Beyondburg a QSR brand or claim national food service TAM as addressable market.'
      ],
      evidenceLineage: [
        'EXTERNAL RESEARCH: ₹6.96L cr (2025) and ₹10.7–11.2L cr (2030) projections from Swiggy–Kearney "How India Eats 2025", reported by IBEF.',
        'EXTERNAL RESEARCH: 29% novel flavour willingness-to-pay and 30% quality trust findings from KPMG India Customer Experience Report 2025.',
        'REPORTED DATA / BENCHMARK: Competitor prices from verified public menus in Kochi.'
      ],
      likelyQuestions: [
        {
          question: 'Why exclude global chains like McDonald’s or Burger King from relevant competitors?',
          suggestedAnswer:
            'While global fast-food chains compete for general meal share, they operate on industrial scale, frozen supply chains, and low price points (₹100–₹200). Beyondburg competes in gourmet fast-casual with fresh ground meat, artisanal brioche, and ₹390+ pricing where only TBJ and The Burgery match quality perceptions.'
        }
      ]
    }
  },
  {
    id: 3,
    slug: 'how-it-sells',
    category: '3 · HOW IT SELLS AND HOW IT SPEAKS',
    title: 'The customer journey: from social discovery to table hospitality',
    subtitle: 'Beyondburg relies on word-of-mouth and visual discovery, converting interest through ingredient integrity.',
    footnote: 'Channel mix reported by Operations Manager. Journey stages represent qualitative customer mapping, not tracked digital conversion.',
    footerLeft: 'SCHOOL OF FUTURE · TERM 1 CAPSTONE · BEYONDBURG',
    footerRight: '03',
    theme: 'charcoal',
    notes: {
      timeCode: '1:30 – 2:15 | Slide 3: Customer Journey & Brand Voice',
      script:
        'Slide 3 maps how Beyondburg sells and communicates across four sequential stages: Discover, Choose, Order, and Experience. Discovery occurs organically via Instagram visual storytelling and word of mouth among Kochi food lovers. In the Choose stage, customers encounter a focused gourmet menu where specialty butchery, brioche buns, and smashed patties establish a distinct premium value proposition. Ordering occurs primarily at the counter for dine-in, supplemented by third-party delivery. Finally, the Experience stage delivers plated hospitality and ambiance. Importantly, we avoid inventing hypothetical conversion funnels or unsupported sales claims: while discovery and checkout are visible, intermediate digital browsing drop-offs remain currently uninstrumented.',
      keyPoints: [
        '4-stage journey: Discover (Instagram/Word of mouth) → Choose (Gourmet craft proposition) → Order (In-store counter + delivery) → Experience (Plated table hospitality).',
        'Brand voice: Premium culinary integrity, transparency on butchery cuts, and handcrafted focus.',
        'Proposition: Fast-casual-plus experience commanding ₹1,127 AOV rather than transactional commodity fast food.',
        'Data discipline: No synthetic funnel conversion rates invented; acknowledged that browsing-to-order drops are currently untracked.'
      ],
      evidenceLineage: [
        'REPORTED DATA: Discovery channels (Instagram, word of mouth) confirmed by management and verified via social presence.',
        'REPORTED DATA: 77% dine-in / 23% takeaway channel mix from operations manager.',
        'METHODOLOGY GUARDRAIL: Strict rejection of invented e-commerce conversion funnels without underlying web/POS telemetry.'
      ],
      likelyQuestions: [
        {
          question: 'Does Beyondburg run paid performance marketing on Instagram?',
          suggestedAnswer:
            'Management indicated growth has been primarily organic through customer-generated reels, food blogger coverage, and local word-of-mouth reputation rather than heavy programmatic ad spend.'
        }
      ]
    }
  },
  {
    id: 4,
    slug: 'the-organisation',
    category: '4 · THE ORGANISATION BEHIND IT',
    title: 'Operating structure: clear roles governing store execution and innovation',
    subtitle: 'Standard Operating Procedures guide daily restaurant flow; strategic experiments require explicit ownership.',
    footnote: 'Working organizational map based on field research discussions at Palarivattom; not a verified statutory organization chart.',
    footerLeft: 'SCHOOL OF FUTURE · TERM 1 CAPSTONE · BEYONDBURG',
    footerRight: '04',
    theme: 'charcoal',
    notes: {
      timeCode: '2:15 – 3:00 | Slide 4: The Organisation',
      script:
        'Slide 4 examines the organizational structure behind Beyondburg. From our field discussions with Operations Head Mohammed Aslam and Store Manager Michael, the working hierarchy flows from Founder down through Operations & Finance, to Store Managers, and frontline kitchen and service employees. We explicitly label this as a working map based on field research, not an audited statutory organogram. Beyondburg operates with strong Standard Operating Procedures governing recipe consistency, prep sheets, hygiene, and floor hospitality. For any new strategic initiative—such as the Burger Lab—to succeed, operational governance must be clearly owned: Operations manages supplier terms and financial hurdles, Store Managers manage shifts and kitchen prep, and Frontline staff safeguard guest hospitality.',
      keyPoints: [
        'Provisional hierarchy: Founder → Operations & Finance → Store Managers → Frontline Employees.',
        'Field-based map: Derived from discussions with Ops Head Mohammed Aslam and Store Manager Michael; not a legal statutory chart.',
        'SOP-driven execution: Standardized prep sheets, temperature controls, and plating specs maintain product consistency.',
        'Governance for innovation: Operational accountability is required to test new menu items without disrupting core store routines.'
      ],
      evidenceLineage: [
        'REPORTED DATA / FIELD INTERVIEW: Hierarchy and reporting relationships discussed on-site with Operations Head Mohammed Aslam and Store Manager Michael.',
        'METHODOLOGY GUARDRAIL: Explicitly disclaimed as a provisional working map rather than an audited corporate organogram.'
      ],
      likelyQuestions: [
        {
          question: 'How many employees work at the Palarivattom store?',
          suggestedAnswer:
            'Store observations and discussions indicate approximately 8 to 12 staff members divided across kitchen prep, grill station, assembly, and front-of-house service across rotating shifts.'
        }
      ]
    }
  },
  {
    id: 5,
    slug: 'the-numbers',
    category: '5 · THE NUMBERS THAT MATTER',
    title: 'Unit economics and outlet-level break-even analysis',
    subtitle: 'Separating product-level Smash Burger contribution from the store-level volume required to cover fixed operating overheads.',
    footnote: 'Smash Burger and outlet break-even are separate analyses. ₹7.00L operating cost is an assumed base. Actual outlet costs and margin have not been verified.',
    footerLeft: 'SCHOOL OF FUTURE · TERM 1 CAPSTONE · BEYONDBURG',
    footerRight: '05',
    theme: 'charcoal',
    notes: {
      timeCode: '3:00 – 3:45 | Slide 5: Unit Economics & Break-Even',
      script:
        'Slide 5 presents two distinct financial analyses: Smash Burger unit economics and outlet break-even. In Section A, our signature Smash Burger sells for ₹390 before taxes. Estimated ingredients are ₹146 (midpoint 37.5%) and other variable costs are ₹107 (27.5%), leaving an estimated contribution of approximately ₹137, or ~35% contribution margin. In Section B, we examine outlet break-even: "How many bills does Beyondburg need to break even?" With manager-reported AOV of ₹1,127 and an assumed 35% blended margin, contribution per average bill is ₹394.45. Against an assumed monthly operating-cost base of ₹7.00 lakh, estimated break-even is 1,775 bills per month, or approximately 59 bills per day across 30 operating days: ₹7,00,000 ÷ (₹1,127 × 35%) ≈ 1,775 bills. Comparing this against the manager-reported ~2,300 monthly bills shows approximately 525 bills above estimated break-even volume. We explicitly caution: Break-even is an illustrative estimate based on planning assumptions. Actual outlet-level costs and blended contribution margin have not been verified.',
      keyPoints: [
        'Smash Burger unit economics: ₹390 price − ₹146 ingredients − ₹107 other variable costs = ~₹137 contribution (~35% margin).',
        'Outlet break-even question: How many bills does Beyondburg need to break even?',
        'Contribution per bill: ₹1,127 AOV × 35% blended margin = ₹394.45.',
        'Monthly break-even volume: ₹7,00,000 ÷ ₹394.45 ≈ 1,775 bills/month (~59 bills/day for 30 operating days).',
        'Comparison to reported volume: Manager-reported ~2,300 bills is ~525 bills above break-even volume; not verified profit.',
        'Planning disclaimer: Break-even is an illustrative estimate based on planning assumptions. Actual outlet-level costs and blended contribution margin have not been verified.'
      ],
      evidenceLineage: [
        'REPORTED DATA: ₹390 price, 35–40% food cost range, ₹1,127 AOV, and ~2,300 monthly bills reported by Operations Manager Mohammed Aslam.',
        'ASSUMPTIONS: ₹7.00 lakh assumed monthly operating-cost base; 35% blended contribution margin benchmark.',
        'CALCULATIONS: ₹1,127 × 35% = ₹394.45; ₹7.00L ÷ ₹394.45 ≈ 1,775 bills/mo; 1,775 ÷ 30 ≈ 59 bills/day.'
      ],
      likelyQuestions: [
        {
          question: 'Are the 525 bills above break-even considered net profit?',
          suggestedAnswer:
            'No. They represent volume above the modelled break-even point under the specific ₹7.00 lakh assumed cost base. Actual net profit depends on audited company-level accounts and unverified overheads.'
        },
        {
          question: 'Why was the category cost breakdown removed?',
          suggestedAnswer:
            'Because individual cost categories (such as rent or utilities) have not been verified through statutory leases or audited financials. We treat ₹7 lakh strictly as an assumed monthly operating-cost base.'
        }
      ]
    }
  },
  {
    id: 6,
    slug: 'the-void',
    category: '6 · THE VOID QUESTION',
    title: 'The void question: market expectations and store-level friction',
    subtitle: 'Examining customer appetite for elevated dining alongside operational realities observed on the floor.',
    footnote: 'Sources: On-site store observation and operations-manager discussion at Beyondburg Palarivattom.',
    footerLeft: 'SCHOOL OF FUTURE · TERM 1 CAPSTONE · BEYONDBURG',
    footerRight: '06',
    theme: 'charcoal',
    notes: {
      timeCode: '3:45 – 4:30 | Slide 6: The Void Question',
      script:
        'Slide 6 focuses strictly on two elements: the market gap and the friction point. Market gap: "Customers looking for a premium burger experience may value taste, ingredient quality and the overall dining experience—not just convenience or low prices." We present this as an interpretation of Beyondburg’s premium positioning and field observations, not as proof that every competitor fails. Friction point: "Ordering and billing can take too long during busy periods, which may frustrate customers." This is grounded in our outlet research and operations-manager discussion at Palarivattom. We do not invent queue durations, abandoned orders, or lost sales. Importantly, there is no separate strategic recommendation on this slide.',
      keyPoints: [
        'Market gap: "Customers looking for a premium burger experience may value taste, ingredient quality and the overall dining experience—not just convenience or low prices."',
        'Friction point: "Ordering and billing can take too long during busy periods, which may frustrate customers."',
        'Rigorous framing: Exactly two focused sections; no separate strategic opportunity section or unsubstantiated churn figures.',
        'Field-grounded: Derived from Palarivattom store observation and operations manager interview.'
      ],
      evidenceLineage: [
        'FIELD RESEARCH OBSERVATION: Direct physical observation of counter ordering flow during Palarivattom field visit.',
        'REPORTED DATA: Operations manager discussion highlighted ordering delays during peak periods as an operational friction point.',
        'METHODOLOGY GUARDRAIL: Strict refusal to fabricate queue durations, customer churn, or lost sales without empirical timestamps.'
      ],
      likelyQuestions: [
        {
          question: 'Is there survey data proving customer dissatisfaction with counter wait times?',
          suggestedAnswer:
            'No formal time-motion study or customer dissatisfaction survey exists today. We deliberately frame this as an observed operational friction point based on our store audit and manager interview, rather than claiming proven churn.'
        }
      ]
    }
  },
  {
    id: 7,
    slug: 'intelligence',
    category: '7 · WHERE INTELLIGENCE CHANGES ITS GAME',
    title: 'AI-powered table-side QR ordering and order intelligence',
    subtitle: 'A proposed digital capability available at every table to streamline ordering, deliver recommendations, and capture customer preferences.',
    footnote: 'Proposed capability only; not implemented. Technical integration with store POS and diner adoption testing required prior to rollout.',
    footerLeft: 'SCHOOL OF FUTURE · TERM 1 CAPSTONE · BEYONDBURG',
    footerRight: '07',
    theme: 'charcoal',
    notes: {
      timeCode: '4:30 – 5:15 | Slide 7: AI-Powered Table-Side QR Ordering',
      script:
        'Slide 7 introduces AI-powered table-side QR ordering at every table, designed to resolve counter ordering friction while capturing rich preference data. First, Table-Side QR Ordering allows customers to browse the visual menu, explore meat cuts and brioche craftsmanship, and place orders directly from their phones. Second, AI-Powered Recommendations suggest pairings, premium sides, and beverages based on cart selections, lifting ticket value organically. Third, Order Intelligence & Telemetry logs real-time dining preferences, popular pairings, and kitchen latency patterns to inform management decisions. Crucially, this proposed capability does not automate food safety, allergen checks, or kitchen preparation—culinary craft remains 100% human-guided.',
      keyPoints: [
        'Core capability: AI-powered table-side QR ordering available at every table.',
        'Pillar 1: Browse visual menu and order directly from mobile devices, eliminating counter queues.',
        'Pillar 2: AI recommendations suggest pairings and sides to enhance the guest experience.',
        'Pillar 3: Order intelligence captures customer preference data and prep delays for management.',
        'Guardrails: Human staff retain full control of food prep, safety, and allergen verification; no recipe automation.'
      ],
      evidenceLineage: [
        'PROPOSED CAPABILITY: Conceptual digital workflow to address observed counter ordering friction.',
        'METHODOLOGY GUARDRAIL: Strictly labelled as an unbuilt concept requiring POS integration and field testing.',
        'HUMAN SAFEGUARD: All kitchen prep, food safety, and allergen decisions remain 100% human-controlled.'
      ],
      likelyQuestions: [
        {
          question: 'Does this feature replace counter staff?',
          suggestedAnswer:
            'No. Frontline staff shift from manual order keying to hospitable table service, floor hospitality, and delivering food.'
        }
      ]
    }
  },
  {
    id: 8,
    slug: 'burger-lab',
    category: '8 · THE MOVE: BEYONDBURG BURGER LAB',
    title: 'Beyondburg Burger Lab — Build Your Own Burger',
    subtitle: 'A digital burger-customisation experience accessed through the table QR menu, starting with Beyondburg\'s signature ₹390 Smash Burger.',
    footnote: 'Strategic recommendation. Pricing placeholders require on-site validation. Digital customisation pilot requires kitchen prep testing.',
    footerLeft: 'SCHOOL OF FUTURE · TERM 1 CAPSTONE · BEYONDBURG',
    footerRight: '08',
    theme: 'charcoal',
    notes: {
      timeCode: '5:15 – 5:45 | Slide 8: The Move: Beyondburg Burger Lab',
      script:
        'Slide 8 presents our strategic move: Beyondburg Burger Lab — Build Your Own Burger. This is a digital customisation experience inside the restaurant accessed via the table QR menu. Starting from the signature ₹390 Smash Burger base, diners choose from curated buns, patties, artisanal cheeses, and specialty sauces with real-time price updates, then submit directly to the kitchen display. The revenue architecture operates through two mechanisms: paid ingredient add-ons and complete custom burger purchases. We explicitly include a cannibalisation warning: custom burgers may simply replace regular burger orders without creating new revenue. Therefore, pilot success must measure incremental spend and add-on contribution using exact formulas: Incremental Revenue = (Custom Burger Price − Regular Burger Price) × Number of Orders; and Add-on Contribution = Add-on Price − Additional Variable Cost. We evaluate the pilot across six measures: builder usage, add-on order share, incremental spend, contribution margin after variable costs, kitchen prep time, and customer repeat rate. Our central thesis: "Your burger. Your choices. Made by Beyondburg."',
      keyPoints: [
        'The Move: Beyondburg Burger Lab — Build Your Own Burger.',
        'Digital experience: Accessed via table QR menu; 7-step customer flow from ₹390 Smash Burger base to kitchen prep.',
        'Two revenue mechanisms: Paid ingredient add-ons and custom burger purchases.',
        'Cannibalisation guardrail: Warning that custom burgers could replace regular orders without incremental gain.',
        'Exact formulas: Incremental Revenue = (Custom Burger Price − Regular Burger Price) × Orders; Add-on Contribution = Add-on Price − Additional Variable Cost.',
        '6 success metrics: Usage count, add-on %, incremental spend, contribution after variable cost, prep time, repeat rate.',
        'Central motto: "Your burger. Your choices. Made by Beyondburg."'
      ],
      evidenceLineage: [
        'STRATEGIC MOVE: Build-Your-Own-Burger digital customization pilot.',
        'METHODOLOGY GUARDRAIL: Pricing placeholders explicitly identified; formulas prevent confusing gross sales with net profit; cannibalisation explicitly modeled.'
      ],
      likelyQuestions: [
        {
          question: 'Could custom burger assembly slow down the kitchen during busy periods?',
          suggestedAnswer:
            'Yes, which is why we recommend starting with a limited pilot and specifically tracking additional preparation time as one of the six core success measures. Restricting choices to curated add-ons rather than a buffet preserves line flow.'
        }
      ]
    }
  },
  {
    id: 9,
    slug: 'conclusion',
    category: '9 · CONCLUSION',
    title: 'The next stage of Beyondburg is not just about selling more burgers. It is about making better decisions.',
    subtitle: 'Three takeaways: understand the customer, understand the numbers, and test before scaling.',
    footnote: 'Term 1 Capstone Synthesis. Primary field research conducted at Beyondburg Palarivattom, Kochi.',
    footerLeft: 'SCHOOL OF FUTURE · TERM 1 CAPSTONE · BEYONDBURG',
    footerRight: '09',
    theme: 'charcoal',
    notes: {
      timeCode: '5:45 – 6:15 | Slide 9: Conclusion & Field Verification',
      script:
        'To conclude our capstone presentation: the next stage of Beyondburg is not just about selling more burgers. It is about making better decisions. We synthesize our strategic investigation into three core takeaways: First, Understand the customer—protect the premium experience customers value, learning what diners actually order rather than guessing. Second, Understand the numbers—improve visibility into contribution and break-even, protecting the 35% margin and tracking the 1,775-bill monthly break-even threshold against the ₹7.00 lakh assumed cost base. Third, Test before scaling—pilot the Burger Lab and measure whether customisation creates additional value before committing permanent operational capacity. Our final capstone principle: "Build what customers want. Make every choice count." Grounded in our verified on-site field research at Beyondburg Palarivattom with Store Manager Michael and Operations Head Mohammed Aslam. Thank you.',
      keyPoints: [
        'Heading: "The next stage of Beyondburg is not just about selling more burgers. It is about making better decisions."',
        'Takeaway 1: Understand the customer — Protect the premium experience customers value.',
        'Takeaway 2: Understand the numbers — Improve visibility into contribution and break-even.',
        'Takeaway 3: Test before scaling — Pilot the Burger Lab and measure whether customisation creates additional value.',
        'Final line: "Build what customers want. Make every choice count."',
        'Authentic field research: High-contrast presentation layout with author\'s verified on-site audit photographs from Palarivattom.'
      ],
      evidenceLineage: [
        'PRIMARY FIELD AUDIT: On-site store audit, menu sampling, and operations review conducted at Beyondburg Palarivattom, Kochi.',
        'REPORTED DATA / INTERVIEWS: Store Manager Michael and Operations Head Mohammed Aslam field interviews.',
        'AUTHENTIC PHOTOGRAPHY: Real field research photographs of the author and management verified in project assets.'
      ],
      likelyQuestions: [
        {
          question: 'What is the most immediate operational recommendation for Beyondburg management?',
          suggestedAnswer:
            'Implement table-side QR ordering to relieve counter congestion, and launch a controlled pilot of the Burger Lab customisation builder to measure incremental contribution and kitchen prep time impact.'
        }
      ]
    }
  }
];
