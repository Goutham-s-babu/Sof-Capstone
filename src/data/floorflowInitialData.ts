import {
  Product,
  Batch,
  QualityCheck,
  ProductionRun,
  Rejection,
  ActivityLog,
  NotificationItem
} from '../types/floorflow';

export const INITIAL_PRODUCTS: Product[] = [
  { id: 'p-1', product_code: 'AKA-101', name: 'Assembly Kit A', description: 'Precision multi-component structural kit with bracket assemblies', target_cycle_time_mins: 45, created_at: '2026-10-01T08:00:00Z' },
  { id: 'p-2', product_code: 'VSB-204', name: 'Valve Set B', description: 'Dual pressure bypass valve set with calibrated springs', target_cycle_time_mins: 60, created_at: '2026-10-01T08:00:00Z' },
  { id: 'p-3', product_code: 'PNC-308', name: 'Panel C', description: 'Anodised exterior control enclosure fascia panel', target_cycle_time_mins: 30, created_at: '2026-10-01T08:00:00Z' },
  { id: 'p-4', product_code: 'HSD-412', name: 'Housing D', description: 'Cast aluminium motor housing with CNC milled bores', target_cycle_time_mins: 75, created_at: '2026-10-01T08:00:00Z' },
  { id: 'p-5', product_code: 'BKE-515', name: 'Bracket E', description: 'Laser-cut reinforced 4mm stainless steel bracket', target_cycle_time_mins: 20, created_at: '2026-10-01T08:00:00Z' },
  { id: 'p-6', product_code: 'MTF-618', name: 'Mount F', description: 'Vibration-damped polyurethane and steel engine mount', target_cycle_time_mins: 35, created_at: '2026-10-01T08:00:00Z' },
];

export const INITIAL_BATCHES: Batch[] = [
  {
    id: 'b-2401',
    batch_code: 'B-2401',
    product_id: 'p-1',
    product_name: 'Assembly Kit A',
    planned_quantity: 500,
    completed_quantity: 250,
    current_stage: 'Assembly',
    status: 'Waiting',
    assigned_to: 'Jake Miller (Line 2)',
    target_line: 'Line 2 - High Velocity',
    started_at: '2026-10-24T06:30:00Z',
    notes: 'Awaiting sub-assembly bracket batch completion from station 3.',
    stages_history: [
      { id: 'sh-1', batch_id: 'b-2401', stage_name: 'Cutting', status: 'Completed', started_at: '2026-10-24T06:30:00Z', completed_at: '2026-10-24T08:45:00Z', operator: 'John Keller' },
      { id: 'sh-2', batch_id: 'b-2401', stage_name: 'Assembly', status: 'Current', started_at: '2026-10-24T09:00:00Z', waiting_reason: 'Waiting for auxiliary fasteners delivery' },
      { id: 'sh-3', batch_id: 'b-2401', stage_name: 'Inspection', status: 'Pending' },
      { id: 'sh-4', batch_id: 'b-2401', stage_name: 'Packing', status: 'Pending' }
    ],
    created_at: '2026-10-24T06:00:00Z',
    updated_at: '2026-10-24T09:15:00Z'
  },
  {
    id: 'b-2402',
    batch_code: 'B-2402',
    product_id: 'p-2',
    product_name: 'Valve Set B',
    planned_quantity: 300,
    completed_quantity: 180,
    current_stage: 'Inspection',
    status: 'In Progress',
    assigned_to: 'Marcus Vance (QA Lab 1)',
    target_line: 'Line 1 - Micro Tolerance',
    started_at: '2026-10-24T07:15:00Z',
    notes: 'Undergoing pressure gauge validation and seal verification.',
    stages_history: [
      { id: 'sh-5', batch_id: 'b-2402', stage_name: 'Cutting', status: 'Completed', started_at: '2026-10-24T07:15:00Z', completed_at: '2026-10-24T08:30:00Z', operator: 'Tom Brody' },
      { id: 'sh-6', batch_id: 'b-2402', stage_name: 'Assembly', status: 'Completed', started_at: '2026-10-24T08:35:00Z', completed_at: '2026-10-24T10:45:00Z', operator: 'Sarah Jenkins' },
      { id: 'sh-7', batch_id: 'b-2402', stage_name: 'Inspection', status: 'Current', started_at: '2026-10-24T10:50:00Z' },
      { id: 'sh-8', batch_id: 'b-2402', stage_name: 'Packing', status: 'Pending' }
    ],
    created_at: '2026-10-24T07:00:00Z',
    updated_at: '2026-10-24T10:55:00Z'
  },
  {
    id: 'b-2403',
    batch_code: 'B-2403',
    product_id: 'p-3',
    product_name: 'Panel C',
    planned_quantity: 200,
    completed_quantity: 120,
    current_stage: 'Packing',
    status: 'On Hold',
    assigned_to: 'David Chen (Packing Station 2)',
    target_line: 'Packing Cell 3',
    started_at: '2026-10-24T05:00:00Z',
    notes: 'Final protective coating inspection not recorded. Placed on hold until signed off.',
    stages_history: [
      { id: 'sh-9', batch_id: 'b-2403', stage_name: 'Cutting', status: 'Completed', started_at: '2026-10-24T05:00:00Z', completed_at: '2026-10-24T06:15:00Z' },
      { id: 'sh-10', batch_id: 'b-2403', stage_name: 'Assembly', status: 'Completed', started_at: '2026-10-24T06:20:00Z', completed_at: '2026-10-24T07:45:00Z' },
      { id: 'sh-11', batch_id: 'b-2403', stage_name: 'Inspection', status: 'Completed', started_at: '2026-10-24T07:50:00Z', completed_at: '2026-10-24T09:10:00Z' },
      { id: 'sh-12', batch_id: 'b-2403', stage_name: 'Packing', status: 'Current', started_at: '2026-10-24T09:15:00Z', waiting_reason: 'Missing signoff paperwork' }
    ],
    created_at: '2026-10-24T04:45:00Z',
    updated_at: '2026-10-24T09:20:00Z'
  },
  {
    id: 'b-2404',
    batch_code: 'B-2404',
    product_id: 'p-4',
    product_name: 'Housing D',
    planned_quantity: 400,
    completed_quantity: 160,
    current_stage: 'Cutting',
    status: 'In Progress',
    assigned_to: 'Liam Foster (CNC Line 4)',
    target_line: 'CNC Station 4',
    started_at: '2026-10-24T08:00:00Z',
    notes: 'High spindle speed profile applied for tight tolerance bore milling.',
    stages_history: [
      { id: 'sh-13', batch_id: 'b-2404', stage_name: 'Cutting', status: 'Current', started_at: '2026-10-24T08:00:00Z' },
      { id: 'sh-14', batch_id: 'b-2404', stage_name: 'Assembly', status: 'Pending' },
      { id: 'sh-15', batch_id: 'b-2404', stage_name: 'Inspection', status: 'Pending' },
      { id: 'sh-16', batch_id: 'b-2404', stage_name: 'Packing', status: 'Pending' }
    ],
    created_at: '2026-10-24T07:45:00Z',
    updated_at: '2026-10-24T08:30:00Z'
  },
  {
    id: 'b-2405',
    batch_code: 'B-2405',
    product_id: 'p-5',
    product_name: 'Bracket E',
    planned_quantity: 250,
    completed_quantity: 100,
    current_stage: 'Assembly',
    status: 'Waiting',
    assigned_to: 'Elena Rostova (Station 1)',
    target_line: 'Assembly Cell 1',
    started_at: '2026-10-24T07:30:00Z',
    notes: 'Secondary welding jig calibration delayed 25 minutes.',
    stages_history: [
      { id: 'sh-17', batch_id: 'b-2405', stage_name: 'Cutting', status: 'Completed', started_at: '2026-10-24T07:30:00Z', completed_at: '2026-10-24T08:45:00Z' },
      { id: 'sh-18', batch_id: 'b-2405', stage_name: 'Assembly', status: 'Current', started_at: '2026-10-24T08:50:00Z', waiting_reason: 'Jig calibration underway' },
      { id: 'sh-19', batch_id: 'b-2405', stage_name: 'Inspection', status: 'Pending' },
      { id: 'sh-20', batch_id: 'b-2405', stage_name: 'Packing', status: 'Pending' }
    ],
    created_at: '2026-10-24T07:00:00Z',
    updated_at: '2026-10-24T09:05:00Z'
  },
  {
    id: 'b-2406',
    batch_code: 'B-2406',
    product_id: 'p-6',
    product_name: 'Mount F',
    planned_quantity: 150,
    completed_quantity: 150,
    current_stage: 'Completed',
    status: 'Completed',
    assigned_to: 'Alex Rivera (Line 1)',
    target_line: 'Line 1 - Automated Cell',
    started_at: '2026-10-24T04:30:00Z',
    completed_at: '2026-10-24T10:15:00Z',
    notes: 'Full run certified and staged in Dispatch Bay A.',
    stages_history: [
      { id: 'sh-21', batch_id: 'b-2406', stage_name: 'Cutting', status: 'Completed', started_at: '2026-10-24T04:30:00Z', completed_at: '2026-10-24T05:45:00Z' },
      { id: 'sh-22', batch_id: 'b-2406', stage_name: 'Assembly', status: 'Completed', started_at: '2026-10-24T05:50:00Z', completed_at: '2026-10-24T07:30:00Z' },
      { id: 'sh-23', batch_id: 'b-2406', stage_name: 'Inspection', status: 'Completed', started_at: '2026-10-24T07:35:00Z', completed_at: '2026-10-24T08:50:00Z' },
      { id: 'sh-24', batch_id: 'b-2406', stage_name: 'Packing', status: 'Completed', started_at: '2026-10-24T08:55:00Z', completed_at: '2026-10-24T10:15:00Z' }
    ],
    created_at: '2026-10-24T04:15:00Z',
    updated_at: '2026-10-24T10:15:00Z'
  },
  {
    id: 'b-2407',
    batch_code: 'B-2407',
    product_id: 'p-2',
    product_name: 'Valve Set B',
    planned_quantity: 350,
    completed_quantity: 350,
    current_stage: 'Completed',
    status: 'Completed',
    assigned_to: 'Mark Davis (Line 1)',
    target_line: 'Line 1',
    started_at: '2026-10-24T03:00:00Z',
    completed_at: '2026-10-24T09:00:00Z',
    stages_history: [
      { id: 'sh-25', batch_id: 'b-2407', stage_name: 'Cutting', status: 'Completed' },
      { id: 'sh-26', batch_id: 'b-2407', stage_name: 'Assembly', status: 'Completed' },
      { id: 'sh-27', batch_id: 'b-2407', stage_name: 'Inspection', status: 'Completed' },
      { id: 'sh-28', batch_id: 'b-2407', stage_name: 'Packing', status: 'Completed' }
    ],
    created_at: '2026-10-24T02:45:00Z',
    updated_at: '2026-10-24T09:00:00Z'
  },
  {
    id: 'b-2408',
    batch_code: 'B-2408',
    product_id: 'p-4',
    product_name: 'Housing D',
    planned_quantity: 220,
    completed_quantity: 80,
    current_stage: 'Cutting',
    status: 'In Progress',
    assigned_to: 'Liam Foster',
    target_line: 'Line 3',
    started_at: '2026-10-24T09:15:00Z',
    stages_history: [
      { id: 'sh-29', batch_id: 'b-2408', stage_name: 'Cutting', status: 'Current' }
    ],
    created_at: '2026-10-24T09:00:00Z',
    updated_at: '2026-10-24T09:45:00Z'
  }
];

export const INITIAL_QUALITY_CHECKS: QualityCheck[] = [
  {
    id: 'qc-1',
    batch_id: 'b-2402',
    batch_code: 'B-2402',
    product_name: 'Valve Set B',
    check_type: 'Dimensional & Tolerance Verification',
    inspector: 'Marcus Vance',
    result: 'Pending',
    observations: 'Micrometer checks on seal grooves 1-4. Target ±0.02mm.',
    due_at: '11:30 AM',
    status: 'In Progress',
    created_at: '2026-10-24T10:00:00Z'
  },
  {
    id: 'qc-2',
    batch_id: 'b-2401',
    batch_code: 'B-2401',
    product_name: 'Assembly Kit A',
    check_type: 'Torque & Fastener Verification',
    inspector: 'Elena Rostova',
    result: 'Pending',
    observations: 'Automated torque curve test on bolt clusters A & B.',
    due_at: '12:15 PM',
    status: 'Scheduled',
    created_at: '2026-10-24T09:00:00Z'
  },
  {
    id: 'qc-3',
    batch_id: 'b-2403',
    batch_code: 'B-2403',
    product_name: 'Panel C',
    check_type: 'Surface Finish & Micron Coating Thickness',
    inspector: 'David Chen',
    result: 'Needs Review',
    observations: 'Slight edge opacity variation noticed near bezel mounting clip.',
    due_at: '09:00 AM (Overdue)',
    status: 'In Progress',
    created_at: '2026-10-24T08:00:00Z'
  },
  {
    id: 'qc-4',
    batch_id: 'b-2405',
    batch_code: 'B-2405',
    product_name: 'Bracket E',
    check_type: 'Weld Penetration Ultrasonic Inspection',
    inspector: 'Elena Rostova',
    result: 'Pending',
    observations: 'Probe calibration verified against calibration standard steel plate #4.',
    due_at: '02:00 PM',
    status: 'Scheduled',
    created_at: '2026-10-24T09:30:00Z'
  },
  {
    id: 'qc-5',
    batch_id: 'b-2406',
    batch_code: 'B-2406',
    product_name: 'Mount F',
    check_type: 'Dynamic Vibration Dampening & Deflection',
    inspector: 'Marcus Vance',
    result: 'Pass',
    observations: 'Load cell tested at 12kN. Deflection within specified tolerance 2.3mm max.',
    due_at: '08:30 AM',
    inspected_at: '2026-10-24T08:45:00Z',
    status: 'Completed',
    created_at: '2026-10-24T07:30:00Z'
  },
  {
    id: 'qc-6',
    batch_id: 'b-2404',
    batch_code: 'B-2404',
    product_name: 'Housing D',
    check_type: 'CMM Bore Diametric Geometry Check',
    inspector: 'David Chen',
    result: 'Pass',
    observations: 'All 6 cylinder bores centered within 0.012mm true position.',
    due_at: '10:00 AM',
    inspected_at: '2026-10-24T10:10:00Z',
    status: 'Completed',
    created_at: '2026-10-24T08:15:00Z'
  },
  {
    id: 'qc-7',
    batch_id: 'b-2407',
    batch_code: 'B-2407',
    product_name: 'Valve Set B',
    check_type: 'Hydrostatic High Pressure Burst Test',
    inspector: 'Marcus Vance',
    result: 'Fail',
    observations: 'Micro-fracture detected along casting seam at 320 PSI (Target: 450 PSI). Unit quarantined.',
    due_at: '07:30 AM',
    inspected_at: '2026-10-24T07:40:00Z',
    status: 'Completed',
    created_at: '2026-10-24T06:30:00Z'
  }
];

export const INITIAL_PRODUCTION_RUNS: ProductionRun[] = [
  {
    id: 'r-118',
    run_code: 'R-118',
    product_id: 'p-1',
    product_name: 'Assembly Kit A',
    planned_start: '10:30',
    status: 'Blocked',
    supervisor: 'Sarah Jenkins',
    target_line: 'Line 2',
    notes: 'Primary sheet metal batch delivery delayed by raw material vendor.',
    requirements: [
      { id: 'req-1', production_run_id: 'r-118', requirement_type: 'Raw Materials', owner: 'Carl Stamos (Procurement)', status: 'Missing', notes: 'Supplier shipment PO-992 stalled at logistics dock', updated_at: '10:05 AM' },
      { id: 'req-2', production_run_id: 'r-118', requirement_type: 'Equipment Setup', owner: 'Dave Miller (Tooling)', status: 'Ready', notes: 'Line 2 CNC cutter tooling aligned & cleared', updated_at: '09:40 AM' },
      { id: 'req-3', production_run_id: 'r-118', requirement_type: 'Tools Availability', owner: 'Dave Miller (Tooling)', status: 'Ready', notes: 'Fixtures calibrated to revision D spec', updated_at: '09:45 AM' },
      { id: 'req-4', production_run_id: 'r-118', requirement_type: 'Staff Availability', owner: 'Sarah Jenkins', status: 'Ready', notes: 'Full 4-person crew clocked in and briefed', updated_at: '09:50 AM' },
      { id: 'req-5', production_run_id: 'r-118', requirement_type: 'Work Instructions', owner: 'Alex Rivera', status: 'Ready', notes: 'Standard SOP Rev 4.2 printed & digital tablet verified', updated_at: '09:30 AM' }
    ],
    created_at: '2026-10-24T06:00:00Z'
  },
  {
    id: 'r-119',
    run_code: 'R-119',
    product_id: 'p-2',
    product_name: 'Valve Set B',
    planned_start: '11:00',
    status: 'Ready',
    supervisor: 'Mark Davis',
    target_line: 'Line 1',
    notes: 'Priority defense contractor run with expedited quality checkpoints.',
    requirements: [
      { id: 'req-6', production_run_id: 'r-119', requirement_type: 'Raw Materials', owner: 'Carl Stamos', status: 'Ready', notes: 'Alloy 6061 billets verified in bin A4', updated_at: '09:15 AM' },
      { id: 'req-7', production_run_id: 'r-119', requirement_type: 'Equipment Setup', owner: 'Liam Foster', status: 'Ready', notes: 'Spindle coolant flushed and warm-up cycle done', updated_at: '09:30 AM' },
      { id: 'req-8', production_run_id: 'r-119', requirement_type: 'Tools Availability', owner: 'Dave Miller', status: 'Ready', notes: 'Precision reamers 12mm staged', updated_at: '09:40 AM' },
      { id: 'req-9', production_run_id: 'r-119', requirement_type: 'Staff Availability', owner: 'Mark Davis', status: 'Ready', notes: 'Lead operator and assistant assigned', updated_at: '09:45 AM' },
      { id: 'req-10', production_run_id: 'r-119', requirement_type: 'Work Instructions', owner: 'Alex Rivera', status: 'Ready', notes: 'Digital routing sheet activated on station terminal', updated_at: '09:20 AM' }
    ],
    created_at: '2026-10-24T06:30:00Z'
  },
  {
    id: 'r-120',
    run_code: 'R-120',
    product_id: 'p-4',
    product_name: 'Housing D',
    planned_start: '11:30',
    status: 'Ready',
    supervisor: 'Sarah Jenkins',
    target_line: 'CNC Station 4',
    requirements: [
      { id: 'req-11', production_run_id: 'r-120', requirement_type: 'Raw Materials', owner: 'Carl Stamos', status: 'Ready', notes: 'Pre-machined castings staged at pallet 8', updated_at: '10:00 AM' },
      { id: 'req-12', production_run_id: 'r-120', requirement_type: 'Equipment Setup', owner: 'Liam Foster', status: 'Ready', notes: 'Axis calibration within 2 microns', updated_at: '10:15 AM' },
      { id: 'req-13', production_run_id: 'r-120', requirement_type: 'Tools Availability', owner: 'Dave Miller', status: 'Ready', notes: 'Carbide inserts fresh from tool crib', updated_at: '10:10 AM' },
      { id: 'req-14', production_run_id: 'r-120', requirement_type: 'Staff Availability', owner: 'Sarah Jenkins', status: 'Ready', notes: 'CNC Specialist Liam Foster on shift', updated_at: '10:00 AM' },
      { id: 'req-15', production_run_id: 'r-120', requirement_type: 'Work Instructions', owner: 'Alex Rivera', status: 'Ready', notes: 'CNC program O-4412 verified with hash check', updated_at: '09:50 AM' }
    ],
    created_at: '2026-10-24T07:00:00Z'
  },
  {
    id: 'r-121',
    run_code: 'R-121',
    product_id: 'p-3',
    product_name: 'Panel C',
    planned_start: '12:15',
    status: 'At Risk',
    supervisor: 'Alex Rivera',
    target_line: 'Anodising Station',
    notes: 'Secondary chemical bath pH re-test in progress.',
    requirements: [
      { id: 'req-16', production_run_id: 'r-121', requirement_type: 'Raw Materials', owner: 'Carl Stamos', status: 'Ready', notes: 'Stamped panels delivered from laser cell', updated_at: '10:20 AM' },
      { id: 'req-17', production_run_id: 'r-121', requirement_type: 'Equipment Setup', owner: 'Tom Brody', status: 'Pending', notes: 'Chemical bath heater reaching 68°C setpoint (currently at 54°C)', updated_at: '10:35 AM' },
      { id: 'req-18', production_run_id: 'r-121', requirement_type: 'Tools Availability', owner: 'Dave Miller', status: 'Ready', notes: 'Holding racks inspected for corrosion', updated_at: '10:10 AM' },
      { id: 'req-19', production_run_id: 'r-121', requirement_type: 'Staff Availability', owner: 'Alex Rivera', status: 'Ready', notes: '2 anodising technicians confirmed', updated_at: '10:15 AM' },
      { id: 'req-20', production_run_id: 'r-121', requirement_type: 'Work Instructions', owner: 'Alex Rivera', status: 'Pending', notes: 'Color bath timing chart waiting for chemist approval', updated_at: '10:30 AM' }
    ],
    created_at: '2026-10-24T07:15:00Z'
  },
  {
    id: 'r-122',
    run_code: 'R-122',
    product_id: 'p-6',
    product_name: 'Mount F',
    planned_start: '14:00',
    status: 'Ready',
    supervisor: 'Mark Davis',
    target_line: 'Line 1',
    requirements: [
      { id: 'req-21', production_run_id: 'r-122', requirement_type: 'Raw Materials', owner: 'Carl Stamos', status: 'Ready', notes: 'Polymer bushings arrived and QC accepted', updated_at: '09:00 AM' },
      { id: 'req-22', production_run_id: 'r-122', requirement_type: 'Equipment Setup', owner: 'Liam Foster', status: 'Ready', notes: 'Hydraulic press mold pre-heated', updated_at: '09:30 AM' },
      { id: 'req-23', production_run_id: 'r-122', requirement_type: 'Tools Availability', owner: 'Dave Miller', status: 'Ready', notes: 'Torque limiters inspected', updated_at: '09:15 AM' },
      { id: 'req-24', production_run_id: 'r-122', requirement_type: 'Staff Availability', owner: 'Mark Davis', status: 'Ready', notes: 'Assembly team scheduled post-lunch', updated_at: '09:40 AM' },
      { id: 'req-25', production_run_id: 'r-122', requirement_type: 'Work Instructions', owner: 'Alex Rivera', status: 'Ready', notes: 'WI-MF-09 verified', updated_at: '09:10 AM' }
    ],
    created_at: '2026-10-24T08:00:00Z'
  },
  {
    id: 'r-123',
    run_code: 'R-123',
    product_id: 'p-5',
    product_name: 'Bracket E',
    planned_start: '15:30',
    status: 'At Risk',
    supervisor: 'Sarah Jenkins',
    target_line: 'Line 2',
    requirements: [
      { id: 'req-26', production_run_id: 'r-123', requirement_type: 'Raw Materials', owner: 'Carl Stamos', status: 'Ready', notes: '316L Stainless coils in rack C', updated_at: '10:00 AM' },
      { id: 'req-27', production_run_id: 'r-123', requirement_type: 'Equipment Setup', owner: 'Tom Brody', status: 'Ready', notes: 'Bystronic laser beam alignment complete', updated_at: '10:30 AM' },
      { id: 'req-28', production_run_id: 'r-123', requirement_type: 'Tools Availability', owner: 'Dave Miller', status: 'Pending', notes: 'Nitrogen cutting assist gas tank swap pending', updated_at: '10:45 AM' },
      { id: 'req-29', production_run_id: 'r-123', requirement_type: 'Staff Availability', owner: 'Sarah Jenkins', status: 'Ready', notes: 'Certified laser technician on schedule', updated_at: '10:15 AM' },
      { id: 'req-30', production_run_id: 'r-123', requirement_type: 'Work Instructions', owner: 'Alex Rivera', status: 'Ready', notes: 'Nest geometry loaded in CAM controller', updated_at: '10:25 AM' }
    ],
    created_at: '2026-10-24T08:30:00Z'
  }
];

export const INITIAL_REJECTIONS: Rejection[] = [
  { id: 'rej-1', batch_id: 'b-2401', batch_code: 'B-2401', product_name: 'Assembly Kit A', production_stage: 'Cutting', rejected_quantity: 6, rejection_reason: 'Dimension Variance', recorded_by: 'John Keller', recorded_at: '2026-10-24T07:45:00Z', created_at: '2026-10-24T07:45:00Z', notes: 'Outer flange width measured 42.8mm vs 42.0±0.2mm tolerance.' },
  { id: 'rej-2', batch_id: 'b-2401', batch_code: 'B-2401', product_name: 'Assembly Kit A', production_stage: 'Cutting', rejected_quantity: 4, rejection_reason: 'Dimension Variance', recorded_by: 'John Keller', recorded_at: '2026-10-24T08:15:00Z', created_at: '2026-10-24T08:15:00Z', notes: 'Burr edge distortion during bevel pass.' },
  { id: 'rej-3', batch_id: 'b-2402', batch_code: 'B-2402', product_name: 'Valve Set B', production_stage: 'Assembly', rejected_quantity: 5, rejection_reason: 'Assembly Issue', recorded_by: 'Sarah Jenkins', recorded_at: '2026-10-24T09:20:00Z', created_at: '2026-10-24T09:20:00Z', notes: 'Spring retainer washer seated backwards during press fit.' },
  { id: 'rej-4', batch_id: 'b-2402', batch_code: 'B-2402', product_name: 'Valve Set B', production_stage: 'Assembly', rejected_quantity: 3, rejection_reason: 'Assembly Issue', recorded_by: 'Sarah Jenkins', recorded_at: '2026-10-24T10:05:00Z', created_at: '2026-10-24T10:05:00Z', notes: 'Cross-threaded valve inlet cap.' },
  { id: 'rej-5', batch_id: 'b-2403', batch_code: 'B-2403', product_name: 'Panel C', production_stage: 'Finishing', rejected_quantity: 2, rejection_reason: 'Surface Defect', recorded_by: 'David Chen', recorded_at: '2026-10-24T08:30:00Z', created_at: '2026-10-24T08:30:00Z', notes: 'Pitting on brushed aluminium front face.' },
  { id: 'rej-6', batch_id: 'b-2403', batch_code: 'B-2403', product_name: 'Panel C', production_stage: 'Inspection', rejected_quantity: 4, rejection_reason: 'Surface Defect', recorded_by: 'David Chen', recorded_at: '2026-10-24T09:10:00Z', created_at: '2026-10-24T09:10:00Z', notes: 'Scratch across silk-screened indicator panel.' },
  { id: 'rej-7', batch_id: 'b-2404', batch_code: 'B-2404', product_name: 'Housing D', production_stage: 'Cutting', rejected_quantity: 5, rejection_reason: 'Dimension Variance', recorded_by: 'Liam Foster', recorded_at: '2026-10-24T08:45:00Z', created_at: '2026-10-24T08:45:00Z', notes: 'Bearing bore undersized by 0.04mm due to tool wear.' },
  { id: 'rej-8', batch_id: 'b-2405', batch_code: 'B-2405', product_name: 'Bracket E', production_stage: 'Assembly', rejected_quantity: 2, rejection_reason: 'Assembly Issue', recorded_by: 'Elena Rostova', recorded_at: '2026-10-24T09:00:00Z', created_at: '2026-10-24T09:00:00Z', notes: 'Incomplete penetration on gusset weld bead.' },
  { id: 'rej-9', batch_id: 'b-2405', batch_code: 'B-2405', product_name: 'Bracket E', production_stage: 'Cutting', rejected_quantity: 3, rejection_reason: 'Dimension Variance', recorded_by: 'Tom Brody', recorded_at: '2026-10-24T08:20:00Z', created_at: '2026-10-24T08:20:00Z', notes: 'Hole spacing off by 1.2mm on laser nest.' },
  { id: 'rej-10', batch_id: 'b-2406', batch_code: 'Mount F', product_name: 'Mount F', production_stage: 'Packing', rejected_quantity: 2, rejection_reason: 'Other', recorded_by: 'Alex Rivera', recorded_at: '2026-10-24T09:40:00Z', created_at: '2026-10-24T09:40:00Z', notes: 'Packaging carton crushed during palletizing.' },
  { id: 'rej-11', batch_id: 'b-2407', batch_code: 'B-2407', product_name: 'Valve Set B', production_stage: 'Inspection', rejected_quantity: 2, rejection_reason: 'Other', recorded_by: 'Marcus Vance', recorded_at: '2026-10-24T07:45:00Z', created_at: '2026-10-24T07:45:00Z', notes: 'Burst testing rupture failure.' }
];

export const INITIAL_ACTIVITY_LOGS: ActivityLog[] = [
  { id: 'act-1', entity_type: 'batch', entity_id: 'b-2401', action: 'Stage Status Changed', previous_value: 'In Progress', new_value: 'Waiting (Material delay)', performed_by: 'Jake Miller (Line 2)', created_at: '2026-10-24T09:15:00Z' },
  { id: 'act-2', entity_type: 'quality_check', entity_id: 'qc-5', action: 'Quality Check Completed', previous_value: 'Pending', new_value: 'Pass (Dynamic Deflection)', performed_by: 'Marcus Vance', created_at: '2026-10-24T08:45:00Z' },
  { id: 'act-3', entity_type: 'batch', entity_id: 'b-2406', action: 'Batch Completed', previous_value: 'Packing', new_value: 'Completed (150/150 units)', performed_by: 'Alex Rivera', created_at: '2026-10-24T10:15:00Z' },
  { id: 'act-4', entity_type: 'readiness', entity_id: 'r-118', action: 'Readiness Flagged Blocked', previous_value: 'At Risk', new_value: 'Blocked (Raw Materials Missing)', performed_by: 'Sarah Jenkins', created_at: '2026-10-24T10:05:00Z' },
  { id: 'act-5', entity_type: 'rejection', entity_id: 'rej-7', action: 'Rejection Logged', new_value: '5 units (Dimension Variance on Housing D)', performed_by: 'Liam Foster', created_at: '2026-10-24T08:45:00Z' }
];

export const INITIAL_NOTIFICATIONS: NotificationItem[] = [
  { id: 'notif-1', title: 'Batch B-2401 Waiting', message: 'Assembly Line 2 waiting for auxiliary fasteners delivery.', time: '12m ago', type: 'warning', read: false, linkRoute: '/batches', batchId: 'b-2401' },
  { id: 'notif-2', title: 'Quality Check Overdue', message: 'Panel C final protective coating signoff is overdue.', time: '45m ago', type: 'alert', read: false, linkRoute: '/quality', batchId: 'b-2403' },
  { id: 'notif-3', title: 'Run R-118 Blocked', message: 'Raw material shipment missing. Scheduled start 10:30 affected.', time: '1h ago', type: 'alert', read: false, linkRoute: '/readiness' },
  { id: 'notif-4', title: 'Batch B-2406 Completed', message: 'Mount F batch fully inspected and staged in Dispatch Bay A.', time: '1h 30m ago', type: 'success', read: true, linkRoute: '/batches', batchId: 'b-2406' }
];
