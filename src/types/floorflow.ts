export type ProductCategory = 'Lighting' | 'Fans' | 'Wires' | 'Switchgear' | 'Water Heaters';

export type LineStageStatus = 'Running' | 'Waiting' | 'Delayed' | 'Maintenance' | 'Completed';

export type ProductionStageName = string;

export type BatchStatus = 'In Progress' | 'Waiting' | 'On Hold' | 'Completed' | 'Delayed';

export type QualityResult = 'Pass' | 'Fail' | 'Needs Review' | 'Pending';

export type QualityCheckStatus = 'Scheduled' | 'In Progress' | 'Completed';

export type ReadinessStatus = 'Ready' | 'At Risk' | 'Blocked';

export type RequirementStatus = 'Ready' | 'Pending' | 'Missing' | 'Not Applicable';

export type RequirementType = 
  | 'Raw Materials'
  | 'Equipment Setup'
  | 'Tools Availability'
  | 'Staff Availability'
  | 'Work Instructions'
  | string;

export type RejectionReason = string;

export type UserRole = 
  | 'Admin'
  | 'Production Manager'
  | 'Supervisor'
  | 'Quality Inspector'
  | 'Operator';

export interface WorkflowStage {
  id: string;
  name: string;
  order: number;
  description?: string;
  defaultCycleTimeMins?: number;
  status: LineStageStatus;
  targetLine?: string;
  operatorLead?: string;
  alertMessage?: string;
  waitingReason?: string;
  delayMinutes?: number;
  stationCode?: string;
}

export interface ProductWorkflow {
  category: ProductCategory;
  displayName: string;
  description: string;
  stages: WorkflowStage[];
  defaultInspectionTypes: string[];
  defaultComponents: string[];
  defaultRejectionReasons: string[];
}

export interface Product {
  id: string;
  name: string;
  product_code: string;
  category: ProductCategory;
  description: string;
  target_cycle_time_mins?: number;
  created_at: string;
}

export interface ProductionStageHistory {
  id: string;
  batch_id: string;
  stage_name: ProductionStageName;
  status: 'Completed' | 'Current' | 'Pending';
  started_at?: string;
  completed_at?: string;
  waiting_reason?: string;
  operator?: string;
}

export interface Batch {
  id: string;
  batch_code: string;
  category: ProductCategory;
  product_id: string;
  product_name: string;
  planned_quantity: number;
  completed_quantity: number;
  current_stage: ProductionStageName;
  status: BatchStatus;
  assigned_to: string;
  target_line?: string;
  started_at: string;
  completed_at?: string;
  notes?: string;
  stages_history?: ProductionStageHistory[];
  created_at: string;
  updated_at: string;
}

export interface QualityCheck {
  id: string;
  category: ProductCategory;
  batch_id: string;
  batch_code: string;
  product_name: string;
  check_type: string;
  inspector: string;
  result: QualityResult;
  observations: string;
  due_at: string;
  inspected_at?: string;
  status: QualityCheckStatus;
  created_at: string;
}

export interface ReadinessCheckItem {
  id: string;
  production_run_id: string;
  requirement_type: RequirementType;
  component_name?: string;
  owner: string;
  status: RequirementStatus;
  notes: string;
  updated_at: string;
}

export interface ProductionRun {
  id: string;
  run_code: string;
  category: ProductCategory;
  product_id: string;
  product_name: string;
  planned_start: string;
  status: ReadinessStatus;
  supervisor: string;
  target_line: string;
  notes?: string;
  requirements: ReadinessCheckItem[];
  created_at: string;
}

export interface Rejection {
  id: string;
  category: ProductCategory;
  batch_id: string;
  batch_code: string;
  product_name: string;
  production_stage: ProductionStageName;
  rejected_quantity: number;
  rejection_reason: RejectionReason;
  recorded_by: string;
  notes?: string;
  recorded_at: string;
  created_at: string;
}

export interface ActivityLog {
  id: string;
  category?: ProductCategory;
  entity_type: 'batch' | 'quality_check' | 'readiness' | 'rejection' | 'line_stage';
  entity_id: string;
  action: string;
  previous_value?: string;
  new_value?: string;
  performed_by: string;
  created_at: string;
}

export interface NotificationItem {
  id: string;
  category?: ProductCategory;
  title: string;
  message: string;
  time: string;
  type: 'warning' | 'alert' | 'success' | 'info';
  read: boolean;
  linkRoute?: string;
  batchId?: string;
}
