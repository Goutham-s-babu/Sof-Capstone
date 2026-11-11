import {
  Product,
  Batch,
  QualityCheck,
  ProductionRun,
  Rejection,
  ActivityLog,
  NotificationItem,
  ProductCategory,
  ProductWorkflow
} from '../types/floorflow';

export const LUKER_CATEGORIES: ProductCategory[] = [
  'Lighting',
  'Fans',
  'Wires',
  'Switchgear',
  'Water Heaters'
];

export const INITIAL_WORKFLOWS: Record<ProductCategory, ProductWorkflow> = {
  'Lighting': {
    category: 'Lighting',
    displayName: 'LED Lighting Manufacturing Line',
    description: 'Surface mount technology (SMT), driver integration, luminaire assembly and photometric/electrical testing.',
    stages: [
      {
        id: 'stg-light-1',
        name: 'PCB / SMT Preparation',
        order: 1,
        stationCode: 'SMT-L1',
        targetLine: 'Line 1 — SMT Surface Mount',
        operatorLead: 'K. Nair (SMT Lead)',
        defaultCycleTimeMins: 35,
        status: 'Running',
        alertMessage: undefined
      },
      {
        id: 'stg-light-2',
        name: 'Driver Assembly',
        order: 2,
        stationCode: 'DRV-A2',
        targetLine: 'Line 2 — Power Supply Cell',
        operatorLead: 'S. Raman (Driver Sub-lead)',
        defaultCycleTimeMins: 45,
        status: 'Waiting',
        waitingReason: 'Awaiting auxiliary surge protection capacitors batch from incoming store',
        delayMinutes: 28,
        alertMessage: 'Component queue delay: 28 min bottleneck'
      },
      {
        id: 'stg-light-3',
        name: 'Product Assembly',
        order: 3,
        stationCode: 'LUM-A3',
        targetLine: 'Line 1 — Luminaire Assembly',
        operatorLead: 'P. Varma (Line Supervisor)',
        defaultCycleTimeMins: 40,
        status: 'Running',
        alertMessage: undefined
      },
      {
        id: 'stg-light-4',
        name: 'Electrical & Performance Testing',
        order: 4,
        stationCode: 'TST-Q4',
        targetLine: 'QA Lab 2 — Automated Test Rack',
        operatorLead: 'M. Vance (QC Senior)',
        defaultCycleTimeMins: 25,
        status: 'Running',
        alertMessage: undefined
      },
      {
        id: 'stg-light-5',
        name: 'Final Inspection & Packing',
        order: 5,
        stationCode: 'PCK-B5',
        targetLine: 'Packaging Cell 4',
        operatorLead: 'D. Chen (Packaging Lead)',
        defaultCycleTimeMins: 20,
        status: 'Completed',
        alertMessage: undefined
      }
    ],
    defaultInspectionTypes: [
      'High-Pot & Electrical Isolation (2.5kV)',
      'Luminous Flux & CCT Output Verification',
      'Power Factor & Surge Immunity (4kV)',
      'Diffuser Fit & Physical Bezel Inspection'
    ],
    defaultComponents: [
      'LED PCB Board (Lumileds Engine)',
      'Driver Unit (Isolated Constant Current)',
      'Die-cast Aluminium Housing',
      'Polycarbonate Frosted Diffuser',
      'B22 / E27 Base & Mounting Brackets',
      'Individual Printed Retail Carton'
    ],
    defaultRejectionReasons: [
      'Solder Bridge on LED Board',
      'Driver Output Voltage Deviation',
      'CCT / Color Temperature Shift',
      'Diffuser Scratch / Surface Blemish',
      'High-Pot Insulation Breakdown',
      'Other'
    ]
  },

  'Fans': {
    category: 'Fans',
    displayName: 'Ceiling & Exhaust Fans Assembly Line',
    description: 'Precision copper motor winding, stator insertion, dynamic blade balancing and acoustic testing.',
    stages: [
      {
        id: 'stg-fan-1',
        name: 'Motor Component Preparation',
        order: 1,
        stationCode: 'MTR-P1',
        targetLine: 'Motor Fabrication Line A',
        operatorLead: 'G. Menon (Fabrication Lead)',
        defaultCycleTimeMins: 50,
        status: 'Running'
      },
      {
        id: 'stg-fan-2',
        name: 'Motor Assembly',
        order: 2,
        stationCode: 'MTR-A2',
        targetLine: 'Precision Rotor Press Cell',
        operatorLead: 'A. Pillai (Motor Assembly)',
        defaultCycleTimeMins: 45,
        status: 'Running'
      },
      {
        id: 'stg-fan-3',
        name: 'Blade & Body Assembly',
        order: 3,
        stationCode: 'BLD-A3',
        targetLine: 'Line 3 — Canopy & Blade Fixture',
        operatorLead: 'R. George (Assembly Lead)',
        defaultCycleTimeMins: 35,
        status: 'Waiting',
        waitingReason: 'Dynamic balancing rig calibration in progress',
        delayMinutes: 35,
        alertMessage: 'Balancing station holding 2 fan batches'
      },
      {
        id: 'stg-fan-4',
        name: 'Performance & Electrical Testing',
        order: 4,
        stationCode: 'TST-F4',
        targetLine: 'Acoustic & Speed Test Bay',
        operatorLead: 'T. Brody (QC Inspector)',
        defaultCycleTimeMins: 30,
        status: 'Running'
      },
      {
        id: 'stg-fan-5',
        name: 'Final Inspection & Packing',
        order: 5,
        stationCode: 'PCK-F5',
        targetLine: 'Fan Packing Bay 2',
        operatorLead: 'S. Kumar (Packing)',
        defaultCycleTimeMins: 25,
        status: 'Completed'
      }
    ],
    defaultInspectionTypes: [
      'Speed & Air Delivery Verification (380 RPM)',
      'Dynamic Blade Balance & Vibration Analysis',
      'Acoustic Noise Measurement (<52 dB)',
      'High Voltage Electrical Safety Grounding'
    ],
    defaultComponents: [
      'Copper Wound Stator & Rotor Core',
      'Balanced Aerodynamic Aluminium Blades (Set of 3)',
      'Die-cast Top & Bottom Motor Canopy',
      'Digital Speed Controller / Capacitor Unit',
      'Downrod & Heavy-duty Shackle Kit',
      'Corrugated Fan Outer Packaging'
    ],
    defaultRejectionReasons: [
      'Rotor Wobble / Vibration Tolerance Exceeded',
      'Motor Bearing Noise / Friction',
      'Blade Pitch Angle Variance',
      'Stator Winding Insulation Flaw',
      'Powder Coat Paint Defect',
      'Other'
    ]
  },

  'Wires': {
    category: 'Wires',
    displayName: 'Building Wires & Cables Extrusion Line',
    description: 'High purity copper rod drawing, continuous inline annealing, dual-layer insulation extrusion and spark testing.',
    stages: [
      {
        id: 'stg-wire-1',
        name: 'Wire Drawing',
        order: 1,
        stationCode: 'WIR-D1',
        targetLine: 'Continuous Multi-wire Drawing Line 1',
        operatorLead: 'H. Nambiar (Drawing Lead)',
        defaultCycleTimeMins: 30,
        status: 'Running'
      },
      {
        id: 'stg-wire-2',
        name: 'Annealing',
        order: 2,
        stationCode: 'WIR-N2',
        targetLine: 'Inline Electric Resistance Annealer',
        operatorLead: 'V. Krishnan (Thermal Operator)',
        defaultCycleTimeMins: 25,
        status: 'Running'
      },
      {
        id: 'stg-wire-3',
        name: 'Insulation Extrusion',
        order: 3,
        stationCode: 'WIR-E3',
        targetLine: 'High-speed PVC / FR Extruder 90mm',
        operatorLead: 'J. Kurian (Extrusion Specialist)',
        defaultCycleTimeMins: 40,
        status: 'Running'
      },
      {
        id: 'stg-wire-4',
        name: 'Electrical Testing',
        order: 4,
        stationCode: 'WIR-T4',
        targetLine: 'Continuous Spark Tester (6kV AC)',
        operatorLead: 'M. Vance (QC Senior)',
        defaultCycleTimeMins: 20,
        status: 'Waiting',
        waitingReason: 'Electrode brush cleaning and calibration routine',
        delayMinutes: 15,
        alertMessage: 'Spark tester maintenance: 15 min check'
      },
      {
        id: 'stg-wire-5',
        name: 'Coiling & Packing',
        order: 5,
        stationCode: 'WIR-C5',
        targetLine: 'Automated 90m Coiler & Shrink Wrapper',
        operatorLead: 'B. Thomas (Coiling Team)',
        defaultCycleTimeMins: 20,
        status: 'Completed'
      }
    ],
    defaultInspectionTypes: [
      'Continuous Spark High-Voltage Pinhole Test (6kV)',
      'Conductor Resistance Verification (Ohms/km at 20°C)',
      'Tensile Strength & Conductor Elongation Test',
      'Insulation Wall Thickness & Concentricity Ratio'
    ],
    defaultComponents: [
      '8.0mm Electrolytic Tough Pitch (ETP) Copper Rod',
      'Lead-free Flame Retardant (FR) PVC Compound',
      'UV Color Masterbatch (Red/Yellow/Blue/Black/Green)',
      'Polyethylene Shrink Film & Tamper Seal',
      'Corrugated Master Outer Carton (Box of 20)'
    ],
    defaultRejectionReasons: [
      'Insulation Wall Concentricity Flaw',
      'Spark Pinhole Fault',
      'Conductor Resistance High',
      'Outer Surface Roughness / Degradation',
      'Color Inconsistency',
      'Other'
    ]
  },

  'Switchgear': {
    category: 'Switchgear',
    displayName: 'Modular Switchgear & MCB Assembly Line',
    description: 'Precision stamping, bi-metallic calibration, thermal-magnetic trip mechanism assembly and high-current testing.',
    stages: [
      {
        id: 'stg-swg-1',
        name: 'Component Preparation',
        order: 1,
        stationCode: 'SWG-P1',
        targetLine: 'Terminal & Contact Prep Station',
        operatorLead: 'E. Joseph (Fabrication)',
        defaultCycleTimeMins: 30,
        status: 'Running'
      },
      {
        id: 'stg-swg-2',
        name: 'Mechanism Assembly',
        order: 2,
        stationCode: 'SWG-M2',
        targetLine: 'Bimetal & Trip Lever Fixture Line',
        operatorLead: 'N. Chacko (Mechanism Lead)',
        defaultCycleTimeMins: 45,
        status: 'Delayed',
        waitingReason: 'Bi-metal weld tolerance calibration issue at Station 2',
        delayMinutes: 42,
        alertMessage: 'Critical delay: Bi-metal calibration variance (+42 min)'
      },
      {
        id: 'stg-swg-3',
        name: 'Housing Assembly',
        order: 3,
        stationCode: 'SWG-H3',
        targetLine: 'DMC Moulded Case Ultrasonic Welder',
        operatorLead: 'K. Unni (Housing Cell)',
        defaultCycleTimeMins: 35,
        status: 'Running'
      },
      {
        id: 'stg-swg-4',
        name: 'Functional & Electrical Testing',
        order: 4,
        stationCode: 'SWG-T4',
        targetLine: 'Short Circuit & Thermal Tripping Test Bed',
        operatorLead: 'T. Brody (QC Inspector)',
        defaultCycleTimeMins: 40,
        status: 'Running'
      },
      {
        id: 'stg-swg-5',
        name: 'Final Inspection & Packing',
        order: 5,
        stationCode: 'SWG-K5',
        targetLine: 'DIN-Rail Mount & Box Packing Cell',
        operatorLead: 'A. Rivera (Packaging)',
        defaultCycleTimeMins: 20,
        status: 'Completed'
      }
    ],
    defaultInspectionTypes: [
      'Contact Resistance Verification (Micro-Ohms)',
      'Dielectric Withstand Voltage Test (2kV AC for 1 min)',
      'Thermal Overload & Magnetic Short-Circuit Trip Test',
      'Mechanical Toggle Endurance Cycle Check'
    ],
    defaultComponents: [
      'Silver-Graphite Fixed & Moving Contacts',
      'De-ionizing Arc Chute Plate Stack',
      'Calibrated Bimetallic Thermal Strip',
      'Flame-Retardant DMC Thermoset Outer Shell',
      'Captive Terminal Screws & Wire Clamp Washers',
      'Barcoded Single Pole Carton'
    ],
    defaultRejectionReasons: [
      'Trip Mechanism Jamming / Latch Failure',
      'High Millivolt Drop Across Contacts',
      'Thermal Trip Time Out of Curve (IEC 60898)',
      'Housing Riveting / Ultrasonic Seam Flaw',
      'Marking / Laser Etch Illegible',
      'Other'
    ]
  },

  'Water Heaters': {
    category: 'Water Heaters',
    displayName: 'Water Heaters & Geysers Line',
    description: 'Inner tank welding, vitreous enamel glass-lining, PUF thermal insulation injection and high-pressure burst testing.',
    stages: [
      {
        id: 'stg-wh-1',
        name: 'Tank & Component Preparation',
        order: 1,
        stationCode: 'WTH-T1',
        targetLine: 'Inner Tank Plasma Welding Cell',
        operatorLead: 'B. Mohan (Welding Lead)',
        defaultCycleTimeMins: 45,
        status: 'Running'
      },
      {
        id: 'stg-wh-2',
        name: 'Heating Element Assembly',
        order: 2,
        stationCode: 'WTH-E2',
        targetLine: 'Incoloy Flange & Anode Mounting',
        operatorLead: 'F. Tariq (Element Assembly)',
        defaultCycleTimeMins: 35,
        status: 'Running'
      },
      {
        id: 'stg-wh-3',
        name: 'Insulation & Body Assembly',
        order: 3,
        stationCode: 'WTH-I3',
        targetLine: 'High Pressure PUF Injection Station',
        operatorLead: 'L. George (Insulation Lead)',
        defaultCycleTimeMins: 50,
        status: 'Waiting',
        waitingReason: 'Foaming nozzle flushing and temperature equilibrium check',
        delayMinutes: 20,
        alertMessage: 'PUF dispenser nozzle prep in progress'
      },
      {
        id: 'stg-wh-4',
        name: 'Safety & Performance Testing',
        order: 4,
        stationCode: 'WTH-S4',
        targetLine: 'Hydrostatic Pressure & Dielectric Test Rig',
        operatorLead: 'M. Vance (QC Senior)',
        defaultCycleTimeMins: 30,
        status: 'Running'
      },
      {
        id: 'stg-wh-5',
        name: 'Final Inspection & Packing',
        order: 5,
        stationCode: 'WTH-P5',
        targetLine: 'Shock-proof EPS Mould Packaging Line',
        operatorLead: 'D. Chen (Packaging)',
        defaultCycleTimeMins: 25,
        status: 'Completed'
      }
    ],
    defaultInspectionTypes: [
      'Hydrostatic Tank Pressure Proof Test (10.0 Bar)',
      'Heating Element Wattage & Leakage Current Test',
      'Capillary Thermostat Cut-Off Calibration (75°C ± 3°C)',
      'Earth Continuity & Tank Bonding Verification'
    ],
    defaultComponents: [
      'Heavy Gauge Vitreous Enamelled Inner Tank',
      'Incoloy 800 Sheathed Heating Element (2000W / 3000W)',
      'High-Density CFC-Free PUF Thermal Insulation',
      'Pre-coated Anti-Corrosive Mild Steel Outer Jacket',
      '4-in-1 Multi-function Pressure Relief Valve (MFV)',
      'Molded Styrofoam EPS Protective Packaging Kit'
    ],
    defaultRejectionReasons: [
      'Weld Seam Micro-porosity under 10 Bar',
      'PUF Foam Void / Thermal Bridging',
      'Element Wattage Tolerance Exceeded',
      'Outer Casing Scratch or Paint Flaw',
      'Thermostat Reset Point Misalignment',
      'Other'
    ]
  }
};

export const INITIAL_PRODUCTS: Product[] = [
  // Lighting
  { id: 'p-lt-1', product_code: 'LUK-LED-09W', name: 'Luker 9W Crystal LED Bulb', category: 'Lighting', description: '9W Cool Daylight B22 High Lumen LED lamp with surge protection', target_cycle_time_mins: 25, created_at: '2026-10-01T08:00:00Z' },
  { id: 'p-lt-2', product_code: 'LUK-LED-18W', name: 'Luker 18W Slim LED Batten', category: 'Lighting', description: '4ft 18W high efficiency polycarbonate architectural tube batten', target_cycle_time_mins: 35, created_at: '2026-10-01T08:00:00Z' },
  { id: 'p-lt-3', product_code: 'LUK-PNL-15W', name: 'Luker 15W Round Downlight Panel', category: 'Lighting', description: 'Ultra-slim recessed ceiling downlight with isolated driver', target_cycle_time_mins: 30, created_at: '2026-10-01T08:00:00Z' },
  { id: 'p-lt-4', product_code: 'LUK-FLD-50W', name: 'Luker 50W Industrial Flood Light', category: 'Lighting', description: 'IP66 outdoor aluminium die-cast flood light with 4kV surge rating', target_cycle_time_mins: 55, created_at: '2026-10-01T08:00:00Z' },

  // Fans
  { id: 'p-fn-1', product_code: 'LUK-AER-1200', name: 'Luker AeroGleam 1200mm Ceiling Fan', category: 'Fans', description: 'High speed decorative 1200mm sweep fan with 390 RPM and copper motor', target_cycle_time_mins: 45, created_at: '2026-10-01T08:00:00Z' },
  { id: 'p-fn-2', product_code: 'LUK-BLDC-1200', name: 'Luker EcoSmart BLDC 1200mm Fan', category: 'Fans', description: '5-star energy saving 28W brushless DC motor fan with RF remote', target_cycle_time_mins: 50, created_at: '2026-10-01T08:00:00Z' },
  { id: 'p-fn-3', product_code: 'LUK-EXH-200', name: 'Luker TurboVent 200mm Exhaust Fan', category: 'Fans', description: 'Louvered high-suction ventilation fan with quiet ball-bearing rotor', target_cycle_time_mins: 30, created_at: '2026-10-01T08:00:00Z' },

  // Wires
  { id: 'p-wr-1', product_code: 'LUK-WIR-15', name: 'Luker 1.5 sq mm FR Building Wire', category: 'Wires', description: 'Flame Retardant 1100V multi-strand electrolytic copper house wire 90m', target_cycle_time_mins: 20, created_at: '2026-10-01T08:00:00Z' },
  { id: 'p-wr-2', product_code: 'LUK-WIR-25', name: 'Luker 2.5 sq mm FRLS Industrial Wire', category: 'Wires', description: 'Flame Retardant Low Smoke zero-halogen flexible copper wire 90m', target_cycle_time_mins: 20, created_at: '2026-10-01T08:00:00Z' },
  { id: 'p-wr-3', product_code: 'LUK-WIR-40', name: 'Luker 4.0 sq mm Heavy Load Cable', category: 'Wires', description: 'Heavy duty power circuit wiring spool for air conditioning and power lines', target_cycle_time_mins: 25, created_at: '2026-10-01T08:00:00Z' },

  // Switchgear
  { id: 'p-sw-1', product_code: 'LUK-MCB-16A', name: 'Luker 16A SP C-Curve MCB', category: 'Switchgear', description: '10kA high breaking capacity single-pole miniature circuit breaker', target_cycle_time_mins: 30, created_at: '2026-10-01T08:00:00Z' },
  { id: 'p-sw-2', product_code: 'LUK-RCCB-40A', name: 'Luker 40A 30mA 4-Pole RCCB', category: 'Switchgear', description: 'Residual current circuit breaker for human shock & leakage protection', target_cycle_time_mins: 40, created_at: '2026-10-01T08:00:00Z' },
  { id: 'p-sw-3', product_code: 'LUK-ISO-63A', name: 'Luker 63A DP Main Isolator', category: 'Switchgear', description: 'Double pole modular disconnect switch with positive contact indicator', target_cycle_time_mins: 25, created_at: '2026-10-01T08:00:00Z' },

  // Water Heaters
  { id: 'p-wh-1', product_code: 'LUK-WTH-15L', name: 'Luker AquaShield 15L Glassline Geyser', category: 'Water Heaters', description: '15 Litre 2000W storage water heater with blue-diamond glassline tank', target_cycle_time_mins: 50, created_at: '2026-10-01T08:00:00Z' },
  { id: 'p-wh-2', product_code: 'LUK-WTH-25L', name: 'Luker AquaShield 25L Smart Geyser', category: 'Water Heaters', description: '25 Litre 3000W heavy duty geyser with digital temperature display', target_cycle_time_mins: 55, created_at: '2026-10-01T08:00:00Z' },
  { id: 'p-wh-3', product_code: 'LUK-WTH-03L', name: 'Luker Instaflow 3L Instant Geyser', category: 'Water Heaters', description: '3 Litre 3000W high-speed compact water heater with 304 steel tank', target_cycle_time_mins: 35, created_at: '2026-10-01T08:00:00Z' },
];

export const INITIAL_BATCHES: Batch[] = [
  // LIGHTING BATCHES
  {
    id: 'b-lt-101',
    batch_code: 'B-LT-101',
    category: 'Lighting',
    product_id: 'p-lt-1',
    product_name: 'Luker 9W Crystal LED Bulb',
    planned_quantity: 600,
    completed_quantity: 320,
    current_stage: 'Driver Assembly',
    status: 'Waiting',
    assigned_to: 'S. Raman (Line 2)',
    target_line: 'Line 2 — Power Supply Cell',
    started_at: '2026-10-24T06:30:00Z',
    notes: 'Awaiting surge protection capacitors batch from incoming inspection store.',
    stages_history: [
      { id: 'sh-lt-1', batch_id: 'b-lt-101', stage_name: 'PCB / SMT Preparation', status: 'Completed', started_at: '2026-10-24T06:30:00Z', completed_at: '2026-10-24T08:15:00Z', operator: 'K. Nair' },
      { id: 'sh-lt-2', batch_id: 'b-lt-101', stage_name: 'Driver Assembly', status: 'Current', started_at: '2026-10-24T08:20:00Z', waiting_reason: 'Waiting for capacitor batch clearance' },
      { id: 'sh-lt-3', batch_id: 'b-lt-101', stage_name: 'Product Assembly', status: 'Pending' },
      { id: 'sh-lt-4', batch_id: 'b-lt-101', stage_name: 'Electrical & Performance Testing', status: 'Pending' },
      { id: 'sh-lt-5', batch_id: 'b-lt-101', stage_name: 'Final Inspection & Packing', status: 'Pending' }
    ],
    created_at: '2026-10-24T06:00:00Z',
    updated_at: '2026-10-24T09:15:00Z'
  },
  {
    id: 'b-lt-102',
    batch_code: 'B-LT-102',
    category: 'Lighting',
    product_id: 'p-lt-2',
    product_name: 'Luker 18W Slim LED Batten',
    planned_quantity: 450,
    completed_quantity: 280,
    current_stage: 'Electrical & Performance Testing',
    status: 'In Progress',
    assigned_to: 'M. Vance (QA Lab 2)',
    target_line: 'Line 1 — Luminaire Assembly',
    started_at: '2026-10-24T07:15:00Z',
    notes: 'Undergoing 2.5kV high-pot and 140 lm/W lumen output verification.',
    stages_history: [
      { id: 'sh-lt-6', batch_id: 'b-lt-102', stage_name: 'PCB / SMT Preparation', status: 'Completed', started_at: '2026-10-24T07:15:00Z', completed_at: '2026-10-24T08:30:00Z' },
      { id: 'sh-lt-7', batch_id: 'b-lt-102', stage_name: 'Driver Assembly', status: 'Completed', started_at: '2026-10-24T08:35:00Z', completed_at: '2026-10-24T09:45:00Z' },
      { id: 'sh-lt-8', batch_id: 'b-lt-102', stage_name: 'Product Assembly', status: 'Completed', started_at: '2026-10-24T09:50:00Z', completed_at: '2026-10-24T10:40:00Z' },
      { id: 'sh-lt-9', batch_id: 'b-lt-102', stage_name: 'Electrical & Performance Testing', status: 'Current', started_at: '2026-10-24T10:45:00Z' },
      { id: 'sh-lt-10', batch_id: 'b-lt-102', stage_name: 'Final Inspection & Packing', status: 'Pending' }
    ],
    created_at: '2026-10-24T07:00:00Z',
    updated_at: '2026-10-24T10:55:00Z'
  },
  {
    id: 'b-lt-103',
    batch_code: 'B-LT-103',
    category: 'Lighting',
    product_id: 'p-lt-3',
    product_name: 'Luker 15W Round Downlight Panel',
    planned_quantity: 300,
    completed_quantity: 180,
    current_stage: 'Product Assembly',
    status: 'In Progress',
    assigned_to: 'P. Varma (Line 1)',
    target_line: 'Line 1 — Luminaire Assembly',
    started_at: '2026-10-24T08:00:00Z',
    notes: 'Diffuser snap-fit assembly proceeding at nominal rate 42 units/hr.',
    stages_history: [
      { id: 'sh-lt-11', batch_id: 'b-lt-103', stage_name: 'PCB / SMT Preparation', status: 'Completed' },
      { id: 'sh-lt-12', batch_id: 'b-lt-103', stage_name: 'Driver Assembly', status: 'Completed' },
      { id: 'sh-lt-13', batch_id: 'b-lt-103', stage_name: 'Product Assembly', status: 'Current', started_at: '2026-10-24T09:30:00Z' }
    ],
    created_at: '2026-10-24T07:45:00Z',
    updated_at: '2026-10-24T09:50:00Z'
  },
  {
    id: 'b-lt-104',
    batch_code: 'B-LT-104',
    category: 'Lighting',
    product_id: 'p-lt-4',
    product_name: 'Luker 50W Industrial Flood Light',
    planned_quantity: 200,
    completed_quantity: 200,
    current_stage: 'Final Inspection & Packing',
    status: 'Completed',
    assigned_to: 'D. Chen (Packing Cell 4)',
    target_line: 'Packaging Cell 4',
    started_at: '2026-10-24T04:30:00Z',
    completed_at: '2026-10-24T10:15:00Z',
    notes: 'Complete batch passed IP66 waterproof ingress test & dispatched to warehouse bay.',
    stages_history: [
      { id: 'sh-lt-14', batch_id: 'b-lt-104', stage_name: 'PCB / SMT Preparation', status: 'Completed' },
      { id: 'sh-lt-15', batch_id: 'b-lt-104', stage_name: 'Driver Assembly', status: 'Completed' },
      { id: 'sh-lt-16', batch_id: 'b-lt-104', stage_name: 'Product Assembly', status: 'Completed' },
      { id: 'sh-lt-17', batch_id: 'b-lt-104', stage_name: 'Electrical & Performance Testing', status: 'Completed' },
      { id: 'sh-lt-18', batch_id: 'b-lt-104', stage_name: 'Final Inspection & Packing', status: 'Completed' }
    ],
    created_at: '2026-10-24T04:15:00Z',
    updated_at: '2026-10-24T10:15:00Z'
  },
  {
    id: 'b-lt-105',
    batch_code: 'B-LT-105',
    category: 'Lighting',
    product_id: 'p-lt-1',
    product_name: 'Luker 9W Crystal LED Bulb',
    planned_quantity: 500,
    completed_quantity: 0,
    current_stage: 'PCB / SMT Preparation',
    status: 'In Progress',
    assigned_to: 'K. Nair (SMT Lead)',
    target_line: 'Line 1 — SMT Surface Mount',
    started_at: '2026-10-24T09:30:00Z',
    notes: 'Pick and place feeder set for 2835 high efficiency LED chip reel.',
    stages_history: [
      { id: 'sh-lt-19', batch_id: 'b-lt-105', stage_name: 'PCB / SMT Preparation', status: 'Current', started_at: '2026-10-24T09:30:00Z' }
    ],
    created_at: '2026-10-24T09:00:00Z',
    updated_at: '2026-10-24T09:30:00Z'
  },

  // FANS BATCHES
  {
    id: 'b-fn-201',
    batch_code: 'B-FN-201',
    category: 'Fans',
    product_id: 'p-fn-1',
    product_name: 'Luker AeroGleam 1200mm Ceiling Fan',
    planned_quantity: 250,
    completed_quantity: 110,
    current_stage: 'Blade & Body Assembly',
    status: 'Waiting',
    assigned_to: 'R. George (Line 3)',
    target_line: 'Line 3 — Canopy & Blade Fixture',
    started_at: '2026-10-24T07:00:00Z',
    notes: 'Dynamic balancing rig undergoing sensor zeroing. Batch paused temporarily.',
    stages_history: [
      { id: 'sh-fn-1', batch_id: 'b-fn-201', stage_name: 'Motor Component Preparation', status: 'Completed' },
      { id: 'sh-fn-2', batch_id: 'b-fn-201', stage_name: 'Motor Assembly', status: 'Completed' },
      { id: 'sh-fn-3', batch_id: 'b-fn-201', stage_name: 'Blade & Body Assembly', status: 'Current', started_at: '2026-10-24T09:00:00Z', waiting_reason: 'Balancing calibration' }
    ],
    created_at: '2026-10-24T06:45:00Z',
    updated_at: '2026-10-24T09:10:00Z'
  },
  {
    id: 'b-fn-202',
    batch_code: 'B-FN-202',
    category: 'Fans',
    product_id: 'p-fn-2',
    product_name: 'Luker EcoSmart BLDC 1200mm Fan',
    planned_quantity: 200,
    completed_quantity: 140,
    current_stage: 'Performance & Electrical Testing',
    status: 'In Progress',
    assigned_to: 'T. Brody (Test Bay)',
    target_line: 'Acoustic & Speed Test Bay',
    started_at: '2026-10-24T07:30:00Z',
    notes: 'Speed curve verification across 6 remote steps. Harmonic noise at 48dB.',
    stages_history: [
      { id: 'sh-fn-4', batch_id: 'b-fn-202', stage_name: 'Motor Component Preparation', status: 'Completed' },
      { id: 'sh-fn-5', batch_id: 'b-fn-202', stage_name: 'Motor Assembly', status: 'Completed' },
      { id: 'sh-fn-6', batch_id: 'b-fn-202', stage_name: 'Blade & Body Assembly', status: 'Completed' },
      { id: 'sh-fn-7', batch_id: 'b-fn-202', stage_name: 'Performance & Electrical Testing', status: 'Current' }
    ],
    created_at: '2026-10-24T07:15:00Z',
    updated_at: '2026-10-24T10:20:00Z'
  },
  {
    id: 'b-fn-203',
    batch_code: 'B-FN-203',
    category: 'Fans',
    product_id: 'p-fn-3',
    product_name: 'Luker TurboVent 200mm Exhaust Fan',
    planned_quantity: 180,
    completed_quantity: 180,
    current_stage: 'Final Inspection & Packing',
    status: 'Completed',
    assigned_to: 'S. Kumar (Packing)',
    target_line: 'Fan Packing Bay 2',
    started_at: '2026-10-24T05:00:00Z',
    completed_at: '2026-10-24T09:45:00Z',
    notes: 'Packaged with mounting screw packs and warranty cards. Transferred to FG store.',
    stages_history: [
      { id: 'sh-fn-8', batch_id: 'b-fn-203', stage_name: 'Motor Component Preparation', status: 'Completed' },
      { id: 'sh-fn-9', batch_id: 'b-fn-203', stage_name: 'Motor Assembly', status: 'Completed' },
      { id: 'sh-fn-10', batch_id: 'b-fn-203', stage_name: 'Blade & Body Assembly', status: 'Completed' },
      { id: 'sh-fn-11', batch_id: 'b-fn-203', stage_name: 'Performance & Electrical Testing', status: 'Completed' },
      { id: 'sh-fn-12', batch_id: 'b-fn-203', stage_name: 'Final Inspection & Packing', status: 'Completed' }
    ],
    created_at: '2026-10-24T04:45:00Z',
    updated_at: '2026-10-24T09:45:00Z'
  },

  // WIRES BATCHES
  {
    id: 'b-wr-301',
    batch_code: 'B-WR-301',
    category: 'Wires',
    product_id: 'p-wr-1',
    product_name: 'Luker 1.5 sq mm FR Building Wire',
    planned_quantity: 50, // 50 spools of 90m
    completed_quantity: 28,
    current_stage: 'Electrical Testing',
    status: 'Waiting',
    assigned_to: 'M. Vance (Spark Tester)',
    target_line: 'Continuous Spark Tester (6kV AC)',
    started_at: '2026-10-24T07:00:00Z',
    notes: 'Spark tester electrode bead cleaning routine in progress.',
    stages_history: [
      { id: 'sh-wr-1', batch_id: 'b-wr-301', stage_name: 'Wire Drawing', status: 'Completed' },
      { id: 'sh-wr-2', batch_id: 'b-wr-301', stage_name: 'Annealing', status: 'Completed' },
      { id: 'sh-wr-3', batch_id: 'b-wr-301', stage_name: 'Insulation Extrusion', status: 'Completed' },
      { id: 'sh-wr-4', batch_id: 'b-wr-301', stage_name: 'Electrical Testing', status: 'Current', waiting_reason: 'Spark tester calibration' }
    ],
    created_at: '2026-10-24T06:30:00Z',
    updated_at: '2026-10-24T09:30:00Z'
  },
  {
    id: 'b-wr-302',
    batch_code: 'B-WR-302',
    category: 'Wires',
    product_id: 'p-wr-2',
    product_name: 'Luker 2.5 sq mm FRLS Industrial Wire',
    planned_quantity: 40,
    completed_quantity: 15,
    current_stage: 'Insulation Extrusion',
    status: 'In Progress',
    assigned_to: 'J. Kurian (Extruder 90mm)',
    target_line: 'High-speed PVC / FR Extruder 90mm',
    started_at: '2026-10-24T08:00:00Z',
    notes: 'Extrusion barrel zone temperature stable at 172°C. Red stripe running.',
    stages_history: [
      { id: 'sh-wr-5', batch_id: 'b-wr-302', stage_name: 'Wire Drawing', status: 'Completed' },
      { id: 'sh-wr-6', batch_id: 'b-wr-302', stage_name: 'Annealing', status: 'Completed' },
      { id: 'sh-wr-7', batch_id: 'b-wr-302', stage_name: 'Insulation Extrusion', status: 'Current' }
    ],
    created_at: '2026-10-24T07:45:00Z',
    updated_at: '2026-10-24T08:45:00Z'
  },

  // SWITCHGEAR BATCHES
  {
    id: 'b-sw-401',
    batch_code: 'B-SW-401',
    category: 'Switchgear',
    product_id: 'p-sw-1',
    product_name: 'Luker 16A SP C-Curve MCB',
    planned_quantity: 400,
    completed_quantity: 160,
    current_stage: 'Mechanism Assembly',
    status: 'Delayed',
    assigned_to: 'N. Chacko (Mechanism Line)',
    target_line: 'Bimetal & Trip Lever Fixture Line',
    started_at: '2026-10-24T07:30:00Z',
    notes: 'Bi-metal calibration welder weld tip replaced. Variance under correction.',
    stages_history: [
      { id: 'sh-sw-1', batch_id: 'b-sw-401', stage_name: 'Component Preparation', status: 'Completed' },
      { id: 'sh-sw-2', batch_id: 'b-sw-401', stage_name: 'Mechanism Assembly', status: 'Current', waiting_reason: 'Bi-metal calibration delay' }
    ],
    created_at: '2026-10-24T07:00:00Z',
    updated_at: '2026-10-24T09:40:00Z'
  },
  {
    id: 'b-sw-402',
    batch_code: 'B-SW-402',
    category: 'Switchgear',
    product_id: 'p-sw-2',
    product_name: 'Luker 40A 30mA 4-Pole RCCB',
    planned_quantity: 150,
    completed_quantity: 90,
    current_stage: 'Functional & Electrical Testing',
    status: 'In Progress',
    assigned_to: 'T. Brody (Test Bed)',
    target_line: 'Short Circuit & Thermal Tripping Test Bed',
    started_at: '2026-10-24T08:15:00Z',
    notes: 'Testing differential current tripping threshold: verified 22-26mA range.',
    stages_history: [
      { id: 'sh-sw-3', batch_id: 'b-sw-402', stage_name: 'Component Preparation', status: 'Completed' },
      { id: 'sh-sw-4', batch_id: 'b-sw-402', stage_name: 'Mechanism Assembly', status: 'Completed' },
      { id: 'sh-sw-5', batch_id: 'b-sw-402', stage_name: 'Housing Assembly', status: 'Completed' },
      { id: 'sh-sw-6', batch_id: 'b-sw-402', stage_name: 'Functional & Electrical Testing', status: 'Current' }
    ],
    created_at: '2026-10-24T07:45:00Z',
    updated_at: '2026-10-24T10:15:00Z'
  },

  // WATER HEATERS BATCHES
  {
    id: 'b-wh-501',
    batch_code: 'B-WH-501',
    category: 'Water Heaters',
    product_id: 'p-wh-1',
    product_name: 'Luker AquaShield 15L Glassline Geyser',
    planned_quantity: 120,
    completed_quantity: 45,
    current_stage: 'Insulation & Body Assembly',
    status: 'Waiting',
    assigned_to: 'L. George (Insulation)',
    target_line: 'High Pressure PUF Injection Station',
    started_at: '2026-10-24T07:00:00Z',
    notes: 'Dispenser nozzle pre-heated. Batch staging for injection clamp 2.',
    stages_history: [
      { id: 'sh-wh-1', batch_id: 'b-wh-501', stage_name: 'Tank & Component Preparation', status: 'Completed' },
      { id: 'sh-wh-2', batch_id: 'b-wh-501', stage_name: 'Heating Element Assembly', status: 'Completed' },
      { id: 'sh-wh-3', batch_id: 'b-wh-501', stage_name: 'Insulation & Body Assembly', status: 'Current', waiting_reason: 'PUF dispenser prep' }
    ],
    created_at: '2026-10-24T06:30:00Z',
    updated_at: '2026-10-24T09:20:00Z'
  },
  {
    id: 'b-wh-502',
    batch_code: 'B-WH-502',
    category: 'Water Heaters',
    product_id: 'p-wh-3',
    product_name: 'Luker Instaflow 3L Instant Geyser',
    planned_quantity: 160,
    completed_quantity: 160,
    current_stage: 'Final Inspection & Packing',
    status: 'Completed',
    assigned_to: 'D. Chen (Packaging)',
    target_line: 'Shock-proof EPS Mould Packaging Line',
    started_at: '2026-10-24T04:00:00Z',
    completed_at: '2026-10-24T09:30:00Z',
    notes: '100% units cleared hydrostatic 8.5 bar test & safety thermistor checks.',
    stages_history: [
      { id: 'sh-wh-4', batch_id: 'b-wh-502', stage_name: 'Tank & Component Preparation', status: 'Completed' },
      { id: 'sh-wh-5', batch_id: 'b-wh-502', stage_name: 'Heating Element Assembly', status: 'Completed' },
      { id: 'sh-wh-6', batch_id: 'b-wh-502', stage_name: 'Insulation & Body Assembly', status: 'Completed' },
      { id: 'sh-wh-7', batch_id: 'b-wh-502', stage_name: 'Safety & Performance Testing', status: 'Completed' },
      { id: 'sh-wh-8', batch_id: 'b-wh-502', stage_name: 'Final Inspection & Packing', status: 'Completed' }
    ],
    created_at: '2026-10-24T03:45:00Z',
    updated_at: '2026-10-24T09:30:00Z'
  }
];

export const INITIAL_QUALITY_CHECKS: QualityCheck[] = [
  // LIGHTING
  {
    id: 'qc-lt-1',
    category: 'Lighting',
    batch_id: 'b-lt-102',
    batch_code: 'B-LT-102',
    product_name: 'Luker 18W Slim LED Batten',
    check_type: 'High-Pot & Electrical Isolation (2.5kV)',
    inspector: 'Marcus Vance',
    result: 'Pending',
    observations: 'Insulation resistance measurement between AC mains terminals and chassis. Target > 50 Megohms.',
    due_at: '11:30 AM',
    status: 'In Progress',
    created_at: '2026-10-24T10:00:00Z'
  },
  {
    id: 'qc-lt-2',
    category: 'Lighting',
    batch_id: 'b-lt-101',
    batch_code: 'B-LT-101',
    product_name: 'Luker 9W Crystal LED Bulb',
    check_type: 'Driver Output Voltage & Ripple Test',
    inspector: 'Elena Rostova',
    result: 'Pending',
    observations: 'Constant current check at 85mA ± 3% under 90V DC load.',
    due_at: '12:15 PM',
    status: 'Scheduled',
    created_at: '2026-10-24T09:00:00Z'
  },
  {
    id: 'qc-lt-3',
    category: 'Lighting',
    batch_id: 'b-lt-103',
    batch_code: 'B-LT-103',
    product_name: 'Luker 15W Round Downlight Panel',
    check_type: 'Luminous Flux & CCT Output Verification',
    inspector: 'David Chen',
    result: 'Needs Review',
    observations: 'Color temperature reading 6420K vs 6500K specification. Borderline threshold.',
    due_at: '09:45 AM',
    status: 'In Progress',
    created_at: '2026-10-24T08:30:00Z'
  },
  {
    id: 'qc-lt-4',
    category: 'Lighting',
    batch_id: 'b-lt-104',
    batch_code: 'B-LT-104',
    product_name: 'Luker 50W Industrial Flood Light',
    check_type: 'IP66 High Pressure Water Jet Ingress Test',
    inspector: 'Marcus Vance',
    result: 'Pass',
    observations: 'Enclosure inspected inside dark chamber after 3 min continuous water spray. Zero moisture.',
    due_at: '08:30 AM',
    inspected_at: '2026-10-24T08:45:00Z',
    status: 'Completed',
    created_at: '2026-10-24T07:30:00Z'
  },

  // FANS
  {
    id: 'qc-fn-1',
    category: 'Fans',
    batch_id: 'b-fn-202',
    batch_code: 'B-FN-202',
    product_name: 'Luker EcoSmart BLDC 1200mm Fan',
    check_type: 'Speed & Air Delivery Verification (380 RPM)',
    inspector: 'Marcus Vance',
    result: 'Pass',
    observations: 'Stroboscopic tachometer recorded 388 RPM at 230V AC input. Energy consumption 27.4W.',
    due_at: '10:30 AM',
    inspected_at: '2026-10-24T10:40:00Z',
    status: 'Completed',
    created_at: '2026-10-24T09:30:00Z'
  },
  {
    id: 'qc-fn-2',
    category: 'Fans',
    batch_id: 'b-fn-201',
    batch_code: 'B-FN-201',
    product_name: 'Luker AeroGleam 1200mm Ceiling Fan',
    check_type: 'Dynamic Blade Balance & Vibration Analysis',
    inspector: 'Elena Rostova',
    result: 'Pending',
    observations: 'Laser vibration displacement gauge check on blade tips. Limit < 0.8mm wobble.',
    due_at: '01:00 PM',
    status: 'Scheduled',
    created_at: '2026-10-24T09:15:00Z'
  },

  // WIRES
  {
    id: 'qc-wr-1',
    category: 'Wires',
    batch_id: 'b-wr-301',
    batch_code: 'B-WR-301',
    product_name: 'Luker 1.5 sq mm FR Building Wire',
    check_type: 'Continuous Spark High-Voltage Pinhole Test (6kV)',
    inspector: 'Marcus Vance',
    result: 'Pending',
    observations: 'Inline sparker electrodes monitoring extrusion line at 350 m/min speed.',
    due_at: '11:45 AM',
    status: 'In Progress',
    created_at: '2026-10-24T09:00:00Z'
  },

  // SWITCHGEAR
  {
    id: 'qc-sw-1',
    category: 'Switchgear',
    batch_id: 'b-sw-402',
    batch_code: 'B-SW-402',
    product_name: 'Luker 40A 30mA 4-Pole RCCB',
    check_type: 'Thermal Overload & Magnetic Short-Circuit Trip Test',
    inspector: 'David Chen',
    result: 'Pass',
    observations: '30mA sensitivity verified at 24.5mA trip current within 28 milliseconds.',
    due_at: '09:30 AM',
    inspected_at: '2026-10-24T09:40:00Z',
    status: 'Completed',
    created_at: '2026-10-24T08:15:00Z'
  },
  {
    id: 'qc-sw-2',
    category: 'Switchgear',
    batch_id: 'b-sw-401',
    batch_code: 'B-SW-401',
    product_name: 'Luker 16A SP C-Curve MCB',
    check_type: 'Contact Resistance Verification (Micro-Ohms)',
    inspector: 'Elena Rostova',
    result: 'Fail',
    observations: 'Measured contact drop 1.9 mV vs 1.2 mV threshold. Quarantined for weld realignment.',
    due_at: '08:45 AM',
    inspected_at: '2026-10-24T08:55:00Z',
    status: 'Completed',
    created_at: '2026-10-24T07:45:00Z'
  },

  // WATER HEATERS
  {
    id: 'qc-wh-1',
    category: 'Water Heaters',
    batch_id: 'b-wh-501',
    batch_code: 'B-WH-501',
    product_name: 'Luker AquaShield 15L Glassline Geyser',
    check_type: 'Hydrostatic Tank Pressure Proof Test (10.0 Bar)',
    inspector: 'Marcus Vance',
    result: 'Pass',
    observations: 'Inner enamel tank held at 10.2 bar hydrostatic water pressure for 15 minutes without leakage.',
    due_at: '08:30 AM',
    inspected_at: '2026-10-24T08:45:00Z',
    status: 'Completed',
    created_at: '2026-10-24T07:30:00Z'
  }
];

export const INITIAL_PRODUCTION_RUNS: ProductionRun[] = [
  // LIGHTING RUNS
  {
    id: 'r-lt-101',
    run_code: 'R-LT-101',
    category: 'Lighting',
    product_id: 'p-lt-1',
    product_name: 'Luker 9W Crystal LED Bulb',
    planned_start: '10:30 AM',
    status: 'At Risk',
    supervisor: 'Sarah Jenkins',
    target_line: 'Line 2 — High Speed Assembly',
    notes: 'Driver capacitor delivery awaiting incoming QC dock signoff.',
    requirements: [
      { id: 'req-lt-1', production_run_id: 'r-lt-101', requirement_type: 'Raw Materials', component_name: 'Driver', owner: 'Carl Stamos (Procurement)', status: 'Pending', notes: 'Capacitor component lot awaiting incoming QC clearance', updated_at: '10:05 AM' },
      { id: 'req-lt-2', production_run_id: 'r-lt-101', requirement_type: 'Raw Materials', component_name: 'LED PCB', owner: 'Carl Stamos (Procurement)', status: 'Ready', notes: '5,000 Lumileds chipboards staged at SMT rack 3', updated_at: '09:40 AM' },
      { id: 'req-lt-3', production_run_id: 'r-lt-101', requirement_type: 'Raw Materials', component_name: 'Housing', owner: 'Dave Miller (Tooling)', status: 'Ready', notes: 'Aluminium heat sink shells counted and cleared', updated_at: '09:45 AM' },
      { id: 'req-lt-4', production_run_id: 'r-lt-101', requirement_type: 'Raw Materials', component_name: 'Diffuser', owner: 'Dave Miller (Tooling)', status: 'Ready', notes: 'Polycarbonate globes batch staged', updated_at: '09:50 AM' },
      { id: 'req-lt-5', production_run_id: 'r-lt-101', requirement_type: 'Raw Materials', component_name: 'Base / cap', owner: 'Dave Miller (Tooling)', status: 'Ready', notes: 'Nickel plated B22 caps verified', updated_at: '09:30 AM' },
      { id: 'req-lt-6', production_run_id: 'r-lt-101', requirement_type: 'Raw Materials', component_name: 'Packaging', owner: 'Carl Stamos (Procurement)', status: 'Ready', notes: 'Printed retail blister cartons available', updated_at: '09:25 AM' }
    ],
    created_at: '2026-10-24T06:00:00Z'
  },
  {
    id: 'r-lt-102',
    run_code: 'R-LT-102',
    category: 'Lighting',
    product_id: 'p-lt-2',
    product_name: 'Luker 18W Slim LED Batten',
    planned_start: '11:15 AM',
    status: 'Ready',
    supervisor: 'P. Varma',
    target_line: 'Line 1 — Luminaire Assembly',
    notes: 'All extrusion fixtures, LED strips and isolated drivers ready on staging cart.',
    requirements: [
      { id: 'req-lt-7', production_run_id: 'r-lt-102', requirement_type: 'Raw Materials', component_name: 'LED PCB', owner: 'Carl Stamos', status: 'Ready', notes: '4ft LED engine strips verified', updated_at: '09:15 AM' },
      { id: 'req-lt-8', production_run_id: 'r-lt-102', requirement_type: 'Raw Materials', component_name: 'Driver', owner: 'Carl Stamos', status: 'Ready', notes: 'Isolated 18W electronic ballast in bin B2', updated_at: '09:20 AM' },
      { id: 'req-lt-9', production_run_id: 'r-lt-102', requirement_type: 'Raw Materials', component_name: 'Housing', owner: 'Dave Miller', status: 'Ready', notes: 'Extruded aluminium base profiles checked', updated_at: '09:30 AM' },
      { id: 'req-lt-10', production_run_id: 'r-lt-102', requirement_type: 'Raw Materials', component_name: 'Diffuser', owner: 'Dave Miller', status: 'Ready', notes: 'Opal frosted PC channel cover ready', updated_at: '09:35 AM' },
      { id: 'req-lt-11', production_run_id: 'r-lt-102', requirement_type: 'Raw Materials', component_name: 'Packaging', owner: 'Carl Stamos', status: 'Ready', notes: 'Long corrugated protective sleeves verified', updated_at: '09:40 AM' }
    ],
    created_at: '2026-10-24T06:30:00Z'
  },

  // FANS RUNS
  {
    id: 'r-fn-201',
    run_code: 'R-FN-201',
    category: 'Fans',
    product_id: 'p-fn-1',
    product_name: 'Luker AeroGleam 1200mm Ceiling Fan',
    planned_start: '11:00 AM',
    status: 'At Risk',
    supervisor: 'R. George',
    target_line: 'Line 3 — Fan Assembly Cell',
    notes: 'Blade weight balancing matched pairs waiting for final laser check.',
    requirements: [
      { id: 'req-fn-1', production_run_id: 'r-fn-201', requirement_type: 'Raw Materials', component_name: 'Motor components', owner: 'Carl Stamos', status: 'Ready', notes: 'Wound copper stators ready at rack 1', updated_at: '09:00 AM' },
      { id: 'req-fn-2', production_run_id: 'r-fn-201', requirement_type: 'Raw Materials', component_name: 'Blades', owner: 'Dave Miller', status: 'Pending', notes: 'Aerodynamic blade sets awaiting trim & balance verification', updated_at: '09:15 AM' },
      { id: 'req-fn-3', production_run_id: 'r-fn-201', requirement_type: 'Raw Materials', component_name: 'Body', owner: 'Dave Miller', status: 'Ready', notes: 'Die-cast metallic canopies painted & inspected', updated_at: '09:20 AM' },
      { id: 'req-fn-4', production_run_id: 'r-fn-201', requirement_type: 'Raw Materials', component_name: 'Controller', owner: 'Carl Stamos', status: 'Ready', notes: 'Capacitor packs and regulator modules staged', updated_at: '09:30 AM' },
      { id: 'req-fn-5', production_run_id: 'r-fn-201', requirement_type: 'Raw Materials', component_name: 'Packaging', owner: 'Carl Stamos', status: 'Ready', notes: 'Master fan box and downrod inserts in pallet', updated_at: '09:35 AM' }
    ],
    created_at: '2026-10-24T07:00:00Z'
  },

  // WIRES RUNS
  {
    id: 'r-wr-301',
    run_code: 'R-WR-301',
    category: 'Wires',
    product_id: 'p-wr-1',
    product_name: 'Luker 1.5 sq mm FR Building Wire',
    planned_start: '12:00 PM',
    status: 'Ready',
    supervisor: 'H. Nambiar',
    target_line: 'Continuous Wire Extrusion Line 1',
    requirements: [
      { id: 'req-wr-1', production_run_id: 'r-wr-301', requirement_type: 'Raw Materials', component_name: 'Copper Rods (8mm EC Grade)', owner: 'Carl Stamos', status: 'Ready', notes: 'High conductivity copper coils on pay-off stand', updated_at: '09:30 AM' },
      { id: 'req-wr-2', production_run_id: 'r-wr-301', requirement_type: 'Raw Materials', component_name: 'PVC Compounding Pellets', owner: 'Carl Stamos', status: 'Ready', notes: 'Lead-free FR PVC hopper filled', updated_at: '09:45 AM' },
      { id: 'req-wr-3', production_run_id: 'r-wr-301', requirement_type: 'Raw Materials', component_name: 'Color Masterbatch', owner: 'Carl Stamos', status: 'Ready', notes: 'Red & Blue masterbatch dried & mixed', updated_at: '09:50 AM' },
      { id: 'req-wr-4', production_run_id: 'r-wr-301', requirement_type: 'Raw Materials', component_name: 'Packaging Spools', owner: 'Dave Miller', status: 'Ready', notes: 'Plastic core 90m spools verified', updated_at: '10:00 AM' }
    ],
    created_at: '2026-10-24T07:15:00Z'
  },

  // SWITCHGEAR RUNS
  {
    id: 'r-sw-401',
    run_code: 'R-SW-401',
    category: 'Switchgear',
    product_id: 'p-sw-1',
    product_name: 'Luker 16A SP C-Curve MCB',
    planned_start: '12:30 PM',
    status: 'Blocked',
    supervisor: 'N. Chacko',
    target_line: 'MCB Assembly Cell 2',
    notes: 'Missing silver-alloy contact rivet delivery.',
    requirements: [
      { id: 'req-sw-1', production_run_id: 'r-sw-401', requirement_type: 'Raw Materials', component_name: 'Silver-Copper Contacts', owner: 'Carl Stamos', status: 'Missing', notes: 'Silver alloy rivet batch delayed from plating vendor', updated_at: '10:10 AM' },
      { id: 'req-sw-2', production_run_id: 'r-sw-401', requirement_type: 'Raw Materials', component_name: 'Arc Chute Assemblies', owner: 'Dave Miller', status: 'Ready', notes: 'Splitter plate stacks stamped and cleaned', updated_at: '09:30 AM' },
      { id: 'req-sw-3', production_run_id: 'r-sw-401', requirement_type: 'Raw Materials', component_name: 'Bimetallic Strips', owner: 'Dave Miller', status: 'Ready', notes: 'Thermal deflection calibrated bimetal pieces', updated_at: '09:40 AM' },
      { id: 'req-sw-4', production_run_id: 'r-sw-401', requirement_type: 'Raw Materials', component_name: 'Molded DMC Housings', owner: 'Carl Stamos', status: 'Ready', notes: 'UL94 V-0 flame-retardant grey enclosures ready', updated_at: '09:50 AM' }
    ],
    created_at: '2026-10-24T07:30:00Z'
  },

  // WATER HEATERS RUNS
  {
    id: 'r-wh-501',
    run_code: 'R-WH-501',
    category: 'Water Heaters',
    product_id: 'p-wh-1',
    product_name: 'Luker AquaShield 15L Glassline Geyser',
    planned_start: '01:30 PM',
    status: 'Ready',
    supervisor: 'B. Mohan',
    target_line: 'Geyser Assembly Cell 1',
    requirements: [
      { id: 'req-wh-1', production_run_id: 'r-wh-501', requirement_type: 'Raw Materials', component_name: 'Welded Inner Tanks', owner: 'Carl Stamos', status: 'Ready', notes: 'Glassline enamel tanks pressure cleared to 10 bar', updated_at: '10:00 AM' },
      { id: 'req-wh-2', production_run_id: 'r-wh-501', requirement_type: 'Raw Materials', component_name: 'Incoloy Heating Elements', owner: 'Carl Stamos', status: 'Ready', notes: '2000W elements with copper thermostat pocket', updated_at: '10:10 AM' },
      { id: 'req-wh-3', production_run_id: 'r-wh-501', requirement_type: 'Raw Materials', component_name: 'PUF Foam Chemicals', owner: 'Dave Miller', status: 'Ready', notes: 'Polyol and isocyanate drum temperatures verified', updated_at: '10:15 AM' },
      { id: 'req-wh-4', production_run_id: 'r-wh-501', requirement_type: 'Raw Materials', component_name: 'Outer Metal Body', owner: 'Dave Miller', status: 'Ready', notes: 'White gloss pre-coated steel outer jackets staged', updated_at: '10:20 AM' }
    ],
    created_at: '2026-10-24T08:00:00Z'
  }
];

export const INITIAL_REJECTIONS: Rejection[] = [
  // LIGHTING
  { id: 'rej-lt-1', category: 'Lighting', batch_id: 'b-lt-101', batch_code: 'B-LT-101', product_name: 'Luker 9W Crystal LED Bulb', production_stage: 'PCB / SMT Preparation', rejected_quantity: 4, rejection_reason: 'Solder Bridge on LED Board', recorded_by: 'K. Nair', recorded_at: '2026-10-24T07:45:00Z', created_at: '2026-10-24T07:45:00Z', notes: 'Micro-bridge across pad 3 and 4 detected during automated optical inspection.' },
  { id: 'rej-lt-2', category: 'Lighting', batch_id: 'b-lt-101', batch_code: 'B-LT-101', product_name: 'Luker 9W Crystal LED Bulb', production_stage: 'Driver Assembly', rejected_quantity: 3, rejection_reason: 'Driver Output Voltage Deviation', recorded_by: 'S. Raman', recorded_at: '2026-10-24T08:30:00Z', created_at: '2026-10-24T08:30:00Z', notes: 'Secondary voltage measured 74V (nominal: 88-92V).' },
  { id: 'rej-lt-3', category: 'Lighting', batch_id: 'b-lt-103', batch_code: 'B-LT-103', product_name: 'Luker 15W Round Downlight Panel', production_stage: 'Product Assembly', rejected_quantity: 2, rejection_reason: 'Diffuser Scratch / Surface Blemish', recorded_by: 'P. Varma', recorded_at: '2026-10-24T09:15:00Z', created_at: '2026-10-24T09:15:00Z', notes: 'Light scratch on frosted light guide panel.' },
  { id: 'rej-lt-4', category: 'Lighting', batch_id: 'b-lt-102', batch_code: 'B-LT-102', product_name: 'Luker 18W Slim LED Batten', production_stage: 'Electrical & Performance Testing', rejected_quantity: 2, rejection_reason: 'High-Pot Insulation Breakdown', recorded_by: 'M. Vance', recorded_at: '2026-10-24T09:50:00Z', created_at: '2026-10-24T09:50:00Z', notes: 'Leakage current exceeded 2mA during 2.5kV surge ramp.' },

  // FANS
  { id: 'rej-fn-1', category: 'Fans', batch_id: 'b-fn-201', batch_code: 'B-FN-201', product_name: 'Luker AeroGleam 1200mm Ceiling Fan', production_stage: 'Blade & Body Assembly', rejected_quantity: 3, rejection_reason: 'Rotor Wobble / Vibration Tolerance Exceeded', recorded_by: 'R. George', recorded_at: '2026-10-24T08:20:00Z', created_at: '2026-10-24T08:20:00Z', notes: 'Dynamic vibration 1.2mm exceeds 0.8mm balance threshold.' },
  { id: 'rej-fn-2', category: 'Fans', batch_id: 'b-fn-202', batch_code: 'B-FN-202', product_name: 'Luker EcoSmart BLDC 1200mm Fan', production_stage: 'Motor Assembly', rejected_quantity: 2, rejection_reason: 'Motor Bearing Noise / Friction', recorded_by: 'A. Pillai', recorded_at: '2026-10-24T09:00:00Z', created_at: '2026-10-24T09:00:00Z', notes: 'Excessive drag on ball bearing upper raceway.' },

  // WIRES
  { id: 'rej-wr-1', category: 'Wires', batch_id: 'b-wr-301', batch_code: 'B-WR-301', product_name: 'Luker 1.5 sq mm FR Building Wire', production_stage: 'Insulation Extrusion', rejected_quantity: 1, rejection_reason: 'Insulation Wall Concentricity Flaw', recorded_by: 'J. Kurian', recorded_at: '2026-10-24T08:10:00Z', created_at: '2026-10-24T08:10:00Z', notes: 'Wall thickness ratio 68% (standard requires minimum 75% concentricity).' },

  // SWITCHGEAR
  { id: 'rej-sw-1', category: 'Switchgear', batch_id: 'b-sw-401', batch_code: 'B-SW-401', product_name: 'Luker 16A SP C-Curve MCB', production_stage: 'Mechanism Assembly', rejected_quantity: 4, rejection_reason: 'Trip Mechanism Jamming / Latch Failure', recorded_by: 'N. Chacko', recorded_at: '2026-10-24T08:40:00Z', created_at: '2026-10-24T08:40:00Z', notes: 'Toggle mechanism failed to trip during mechanical endurance test.' },

  // WATER HEATERS
  { id: 'rej-wh-1', category: 'Water Heaters', batch_id: 'b-wh-501', batch_code: 'B-WH-501', product_name: 'Luker AquaShield 15L Glassline Geyser', production_stage: 'Safety & Performance Testing', rejected_quantity: 1, rejection_reason: 'Weld Seam Micro-porosity under 10 Bar', recorded_by: 'M. Vance', recorded_at: '2026-10-24T08:50:00Z', created_at: '2026-10-24T08:50:00Z', notes: 'Micro-weep along dome welding seam at 9.8 bar.' }
];

export const INITIAL_ACTIVITY_LOGS: ActivityLog[] = [
  { id: 'act-1', category: 'Lighting', entity_type: 'batch', entity_id: 'b-lt-101', action: 'Stage Status Changed', previous_value: 'In Progress', new_value: 'Waiting (Driver capacitor delay)', performed_by: 'S. Raman (Line 2)', created_at: '2026-10-24T09:15:00Z' },
  { id: 'act-2', category: 'Lighting', entity_type: 'quality_check', entity_id: 'qc-lt-4', action: 'Quality Check Completed', previous_value: 'Pending', new_value: 'Pass (IP66 Water Jet Test)', performed_by: 'M. Vance', created_at: '2026-10-24T08:45:00Z' },
  { id: 'act-3', category: 'Fans', entity_type: 'batch', entity_id: 'b-fn-203', action: 'Batch Completed', previous_value: 'Final Inspection & Packing', new_value: 'Completed (180/180 units)', performed_by: 'S. Kumar', created_at: '2026-10-24T09:45:00Z' },
  { id: 'act-4', category: 'Lighting', entity_type: 'readiness', entity_id: 'r-lt-101', action: 'Readiness Flagged At Risk', previous_value: 'Ready', new_value: 'At Risk (Driver capacitors pending)', performed_by: 'Sarah Jenkins', created_at: '2026-10-24T10:05:00Z' },
  { id: 'act-5', category: 'Switchgear', entity_type: 'line_stage', entity_id: 'stg-swg-2', action: 'Stage Delayed', previous_value: 'Running', new_value: 'Delayed (Bi-metal calibration +42 min)', performed_by: 'N. Chacko', created_at: '2026-10-24T09:40:00Z' }
];

export const INITIAL_NOTIFICATIONS: NotificationItem[] = [
  { id: 'notif-1', category: 'Lighting', title: 'Lighting: Driver Assembly Waiting', message: 'Line 2 awaiting surge capacitor lot signoff. 28 min bottleneck.', time: '12m ago', type: 'warning', read: false, linkRoute: '/line-monitor', batchId: 'b-lt-101' },
  { id: 'notif-2', category: 'Lighting', title: 'Lighting: Downlight CCT Borderline', message: 'Downlight batch B-LT-103 color temperature reading 6420K.', time: '35m ago', type: 'alert', read: false, linkRoute: '/quality', batchId: 'b-lt-103' },
  { id: 'notif-3', category: 'Fans', title: 'Fans: Blade Balancing Paused', message: 'AeroGleam batch B-FN-201 waiting on laser balance sensor check.', time: '45m ago', type: 'warning', read: false, linkRoute: '/line-monitor', batchId: 'b-fn-201' },
  { id: 'notif-4', category: 'Switchgear', title: 'Switchgear: MCB Mechanism Delayed', message: 'B-SW-401 bi-metal calibration delayed 42 minutes.', time: '1h ago', type: 'alert', read: false, linkRoute: '/line-monitor', batchId: 'b-sw-401' }
];
