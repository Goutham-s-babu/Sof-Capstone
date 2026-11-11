import React, { createContext, useContext, useState, useMemo, useEffect } from 'react';
import {
  Batch,
  QualityCheck,
  ProductionRun,
  Rejection,
  ActivityLog,
  NotificationItem,
  UserRole,
  ProductionStageName,
  BatchStatus,
  QualityResult,
  RequirementStatus,
  ReadinessStatus,
  ProductCategory,
  WorkflowStage,
  ProductWorkflow,
  LineStageStatus
} from '../types/floorflow';
import {
  INITIAL_BATCHES,
  INITIAL_QUALITY_CHECKS,
  INITIAL_PRODUCTION_RUNS,
  INITIAL_REJECTIONS,
  INITIAL_ACTIVITY_LOGS,
  INITIAL_NOTIFICATIONS,
  INITIAL_PRODUCTS,
  INITIAL_WORKFLOWS,
  LUKER_CATEGORIES
} from '../data/floorflowInitialData';

export type FloorFlowRoute = 
  | '/overview' 
  | '/line-monitor' 
  | '/batches' 
  | '/quality' 
  | '/readiness' 
  | '/rejections';

interface FloorFlowContextType {
  // Navigation & Role
  currentRoute: FloorFlowRoute;
  setCurrentRoute: (route: FloorFlowRoute) => void;
  currentUserRole: UserRole;
  setCurrentUserRole: (role: UserRole) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;

  // Category Workspace
  activeCategory: ProductCategory;
  setActiveCategory: (category: ProductCategory) => void;
  availableCategories: ProductCategory[];

  // Workflow definitions & Line Monitor
  workflows: Record<ProductCategory, ProductWorkflow>;
  activeWorkflow: ProductWorkflow;
  selectedStageId: string | null;
  setSelectedStageId: (stageId: string | null) => void;
  updateWorkflowStageStatus: (categoryId: ProductCategory, stageId: string, status: LineStageStatus, note?: string) => void;
  updateWorkflowStages: (categoryId: ProductCategory, stages: WorkflowStage[]) => void;

  // Selected entities for drawers / detail views
  selectedBatchId: string | null;
  setSelectedBatchId: (id: string | null) => void;
  selectedRunId: string | null;
  setSelectedRunId: (id: string | null) => void;
  selectedQualityCheckId: string | null;
  setSelectedQualityCheckId: (id: string | null) => void;

  // Master Data sets
  batches: Batch[];
  qualityChecks: QualityCheck[];
  productionRuns: ProductionRun[];
  rejections: Rejection[];
  activityLogs: ActivityLog[];
  notifications: NotificationItem[];
  products: typeof INITIAL_PRODUCTS;

  // Category-scoped filtered data
  categoryBatches: Batch[];
  categoryQualityChecks: QualityCheck[];
  categoryProductionRuns: ProductionRun[];
  categoryRejections: Rejection[];
  categoryProducts: typeof INITIAL_PRODUCTS;

  // Category-scoped KPI metrics
  kpis: {
    activeBatchesCount: number;
    waitingBatchesCount: number;
    completedBatchesToday: number;
    onHoldBatchesCount: number;
    qualityChecksScheduled: number;
    qualityChecksCompleted: number;
    qualityChecksPending: number;
    qualityChecksFailed: number;
    qualityCompletionRate: number;
    productionReadinessRate: number;
    plannedRunsCount: number;
    readyRunsCount: number;
    atRiskRunsCount: number;
    blockedRunsCount: number;
    totalUnitsProduced: number;
    totalUnitsRejected: number;
    rejectionRate: number;
    reasonsRecordedRate: number;
    currentBottleneck: string | null;
  };

  // Aggregated breakdowns for charts
  rejectionsByReason: { reason: string; count: number; percentage: number }[];
  rejectionsByStage: { stage: string; count: number }[];
  stageProgressSummary: {
    stage: string;
    activeCount: number;
    waitingCount: number;
    status: 'Normal' | 'Minor bottleneck' | 'On track' | 'Clear';
  }[];

  // Actions
  addBatch: (batchData: Omit<Batch, 'id' | 'created_at' | 'updated_at'>) => void;
  updateBatchStage: (batchId: string, stage: ProductionStageName, notes?: string) => void;
  updateBatchStatus: (batchId: string, status: BatchStatus, reason?: string) => void;
  recordQualityCheck: (checkId: string, result: QualityResult, observations: string) => void;
  addQualityCheck: (check: Omit<QualityCheck, 'id' | 'created_at'>) => void;
  updateReadinessItem: (runId: string, itemId: string, newStatus: RequirementStatus, notes?: string) => void;
  approveProductionStart: (runId: string) => boolean;
  addRejection: (rejectionData: Omit<Rejection, 'id' | 'created_at'>) => void;
  markNotificationAsRead: (id: string) => void;
  clearAllNotifications: () => void;
  resetToDefaultData: () => void;
}

const FloorFlowContext = createContext<FloorFlowContextType | undefined>(undefined);

const STORAGE_KEY = 'floorflow_luker_state_v2';

export const FloorFlowProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Navigation & Role
  const [currentRoute, setCurrentRoute] = useState<FloorFlowRoute>('/overview');
  const [currentUserRole, setCurrentUserRole] = useState<UserRole>('Production Manager');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Active Category Workspace (defaults to Lighting as required)
  const [activeCategory, setActiveCategory] = useState<ProductCategory>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_active_cat`);
      return (saved as ProductCategory) || 'Lighting';
    } catch {
      return 'Lighting';
    }
  });

  // Category Workflows
  const [workflows, setWorkflows] = useState<Record<ProductCategory, ProductWorkflow>>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_workflows`);
      return saved ? JSON.parse(saved) : INITIAL_WORKFLOWS;
    } catch {
      return INITIAL_WORKFLOWS;
    }
  });

  // Selected line stage for detail panel in Line Monitor
  const [selectedStageId, setSelectedStageId] = useState<string | null>('stg-light-2');

  // Selected drawers
  const [selectedBatchId, setSelectedBatchId] = useState<string | null>('b-lt-101');
  const [selectedRunId, setSelectedRunId] = useState<string | null>('r-lt-101');
  const [selectedQualityCheckId, setSelectedQualityCheckId] = useState<string | null>('qc-lt-1');

  // Main collections initialized from storage or defaults
  const [batches, setBatches] = useState<Batch[]>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_batches`);
      return saved ? JSON.parse(saved) : INITIAL_BATCHES;
    } catch {
      return INITIAL_BATCHES;
    }
  });

  const [qualityChecks, setQualityChecks] = useState<QualityCheck[]>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_qc`);
      return saved ? JSON.parse(saved) : INITIAL_QUALITY_CHECKS;
    } catch {
      return INITIAL_QUALITY_CHECKS;
    }
  });

  const [productionRuns, setProductionRuns] = useState<ProductionRun[]>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_runs`);
      return saved ? JSON.parse(saved) : INITIAL_PRODUCTION_RUNS;
    } catch {
      return INITIAL_PRODUCTION_RUNS;
    }
  });

  const [rejections, setRejections] = useState<Rejection[]>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_rejections`);
      return saved ? JSON.parse(saved) : INITIAL_REJECTIONS;
    } catch {
      return INITIAL_REJECTIONS;
    }
  });

  const [activityLogs, setActivityLogs] = useState<ActivityLog[]>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_logs`);
      return saved ? JSON.parse(saved) : INITIAL_ACTIVITY_LOGS;
    } catch {
      return INITIAL_ACTIVITY_LOGS;
    }
  });

  const [notifications, setNotifications] = useState<NotificationItem[]>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_notifs`);
      return saved ? JSON.parse(saved) : INITIAL_NOTIFICATIONS;
    } catch {
      return INITIAL_NOTIFICATIONS;
    }
  });

  // Sync to local storage
  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_KEY}_active_cat`, activeCategory);
      localStorage.setItem(`${STORAGE_KEY}_workflows`, JSON.stringify(workflows));
      localStorage.setItem(`${STORAGE_KEY}_batches`, JSON.stringify(batches));
      localStorage.setItem(`${STORAGE_KEY}_qc`, JSON.stringify(qualityChecks));
      localStorage.setItem(`${STORAGE_KEY}_runs`, JSON.stringify(productionRuns));
      localStorage.setItem(`${STORAGE_KEY}_rejections`, JSON.stringify(rejections));
      localStorage.setItem(`${STORAGE_KEY}_logs`, JSON.stringify(activityLogs));
      localStorage.setItem(`${STORAGE_KEY}_notifs`, JSON.stringify(notifications));
    } catch (e) {
      console.warn('LocalStorage save failed:', e);
    }
  }, [activeCategory, workflows, batches, qualityChecks, productionRuns, rejections, activityLogs, notifications]);

  // When active category switches, update default selections if current selected item doesn't belong to the category
  useEffect(() => {
    const catBatches = batches.filter(b => b.category === activeCategory);
    if (catBatches.length > 0 && (!selectedBatchId || !catBatches.some(b => b.id === selectedBatchId))) {
      setSelectedBatchId(catBatches[0].id);
    }

    const catRuns = productionRuns.filter(r => r.category === activeCategory);
    if (catRuns.length > 0 && (!selectedRunId || !catRuns.some(r => r.id === selectedRunId))) {
      setSelectedRunId(catRuns[0].id);
    }

    const catQcs = qualityChecks.filter(q => q.category === activeCategory);
    if (catQcs.length > 0 && (!selectedQualityCheckId || !catQcs.some(q => q.id === selectedQualityCheckId))) {
      setSelectedQualityCheckId(catQcs[0].id);
    }

    const wf = workflows[activeCategory];
    if (wf && wf.stages.length > 0) {
      // Pick first stage with delay/waiting or first stage
      const bottleneckStage = wf.stages.find(s => s.status === 'Delayed' || s.status === 'Waiting');
      setSelectedStageId(bottleneckStage ? bottleneckStage.id : wf.stages[0].id);
    }
  }, [activeCategory]);

  // Category Scoped Data
  const categoryBatches = useMemo(() => {
    return batches.filter(b => b.category === activeCategory);
  }, [batches, activeCategory]);

  const categoryQualityChecks = useMemo(() => {
    return qualityChecks.filter(q => q.category === activeCategory);
  }, [qualityChecks, activeCategory]);

  const categoryProductionRuns = useMemo(() => {
    return productionRuns.filter(r => r.category === activeCategory);
  }, [productionRuns, activeCategory]);

  const categoryRejections = useMemo(() => {
    return rejections.filter(r => r.category === activeCategory);
  }, [rejections, activeCategory]);

  const categoryProducts = useMemo(() => {
    return INITIAL_PRODUCTS.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  const activeWorkflow = useMemo(() => {
    return workflows[activeCategory] || INITIAL_WORKFLOWS['Lighting'];
  }, [workflows, activeCategory]);

  // Category KPIs calculation
  const kpis = useMemo(() => {
    const activeBatches = categoryBatches.filter(b => b.status === 'In Progress' || b.status === 'Waiting');
    const waitingBatches = categoryBatches.filter(b => b.status === 'Waiting');
    const completedToday = categoryBatches.filter(b => b.status === 'Completed');
    const onHoldBatches = categoryBatches.filter(b => b.status === 'On Hold');

    const scheduledQC = categoryQualityChecks.length;
    const completedQC = categoryQualityChecks.filter(q => q.status === 'Completed').length;
    const pendingQC = categoryQualityChecks.filter(q => q.status === 'Scheduled' || q.status === 'In Progress' || q.result === 'Pending').length;
    const failedQC = categoryQualityChecks.filter(q => q.result === 'Fail').length;
    const qualityCompletionRate = scheduledQC > 0 ? Math.round((completedQC / scheduledQC) * 100) : 0;

    const plannedRuns = categoryProductionRuns.length;
    const readyRuns = categoryProductionRuns.filter(r => r.status === 'Ready').length;
    const atRiskRuns = categoryProductionRuns.filter(r => r.status === 'At Risk').length;
    const blockedRuns = categoryProductionRuns.filter(r => r.status === 'Blocked').length;
    const readinessRate = plannedRuns > 0 ? Math.round((readyRuns / plannedRuns) * 100) : 0;

    // Total produced units for category
    const completedFromBatches = categoryBatches.reduce((acc, curr) => acc + (curr.completed_quantity || 0), 0);
    // Baseline anchor to keep numbers realistic & positive per category
    const baseLineByCategory: Record<ProductCategory, number> = {
      'Lighting': 1850,
      'Fans': 430,
      'Wires': 220,
      'Switchgear': 550,
      'Water Heaters': 240
    };
    const totalUnitsProduced = (baseLineByCategory[activeCategory] || 500) + completedFromBatches;
    const totalUnitsRejected = categoryRejections.reduce((acc, r) => acc + (r.rejected_quantity || 0), 0);
    const rejectionRate = totalUnitsProduced > 0 
      ? Number(((totalUnitsRejected / totalUnitsProduced) * 100).toFixed(2))
      : 0;

    // Identify current bottleneck in active category workflow
    const delayedStage = activeWorkflow.stages.find(s => s.status === 'Delayed');
    const waitingStage = activeWorkflow.stages.find(s => s.status === 'Waiting');
    const currentBottleneck = delayedStage ? delayedStage.name : (waitingStage ? waitingStage.name : null);

    return {
      activeBatchesCount: activeBatches.length,
      waitingBatchesCount: waitingBatches.length,
      completedBatchesToday: completedToday.length,
      onHoldBatchesCount: onHoldBatches.length,
      qualityChecksScheduled: scheduledQC,
      qualityChecksCompleted: completedQC,
      qualityChecksPending: pendingQC,
      qualityChecksFailed: failedQC,
      qualityCompletionRate,
      productionReadinessRate: readinessRate,
      plannedRunsCount: plannedRuns,
      readyRunsCount: readyRuns,
      atRiskRunsCount: atRiskRuns,
      blockedRunsCount: blockedRuns,
      totalUnitsProduced,
      totalUnitsRejected,
      rejectionRate,
      reasonsRecordedRate: 100,
      currentBottleneck
    };
  }, [categoryBatches, categoryQualityChecks, categoryProductionRuns, categoryRejections, activeCategory, activeWorkflow]);

  // Breakdown by reasons for active category
  const rejectionsByReason = useMemo(() => {
    const counts: Record<string, number> = {};
    activeWorkflow.defaultRejectionReasons.forEach(r => { counts[r] = 0; });

    categoryRejections.forEach(r => {
      counts[r.rejection_reason] = (counts[r.rejection_reason] || 0) + r.rejected_quantity;
    });

    const total = Object.values(counts).reduce((a, b) => a + b, 0) || 1;
    return Object.entries(counts).map(([reason, count]) => ({
      reason,
      count,
      percentage: Math.round((count / total) * 100)
    })).sort((a, b) => b.count - a.count);
  }, [categoryRejections, activeWorkflow]);

  // Breakdown by stages for active category
  const rejectionsByStage = useMemo(() => {
    const map: Record<string, number> = {};
    activeWorkflow.stages.forEach(stg => { map[stg.name] = 0; });

    categoryRejections.forEach(r => {
      if (map[r.production_stage] !== undefined) {
        map[r.production_stage] += r.rejected_quantity;
      } else {
        map['Other'] = (map['Other'] || 0) + r.rejected_quantity;
      }
    });

    return activeWorkflow.stages.map(stg => ({
      stage: stg.name,
      count: map[stg.name] || 0
    }));
  }, [categoryRejections, activeWorkflow]);

  // Stage progress summary derived dynamically from active category workflow
  const stageProgressSummary = useMemo(() => {
    return activeWorkflow.stages.map(stg => {
      const active = categoryBatches.filter(b => b.current_stage === stg.name && b.status === 'In Progress').length;
      const waiting = categoryBatches.filter(b => b.current_stage === stg.name && b.status === 'Waiting').length;
      let status: 'Normal' | 'Minor bottleneck' | 'On track' | 'Clear' = 'Normal';
      
      if (stg.status === 'Delayed' || waiting > 0 || stg.status === 'Waiting') {
        status = 'Minor bottleneck';
      } else if (active > 0) {
        status = 'On track';
      } else {
        status = 'Clear';
      }

      return {
        stage: stg.name,
        activeCount: active,
        waitingCount: waiting,
        status
      };
    });
  }, [categoryBatches, activeWorkflow]);

  // Actions
  const logActivity = (
    entity_type: ActivityLog['entity_type'],
    entity_id: string,
    action: string,
    previous_value?: string,
    new_value?: string
  ) => {
    const newLog: ActivityLog = {
      id: `act-${Date.now()}`,
      category: activeCategory,
      entity_type,
      entity_id,
      action,
      previous_value,
      new_value,
      performed_by: `${currentUserRole} (${currentUserRole === 'Admin' ? 'System' : 'Active User'})`,
      created_at: new Date().toISOString()
    };
    setActivityLogs(prev => [newLog, ...prev]);
  };

  const updateWorkflowStageStatus = (
    categoryId: ProductCategory,
    stageId: string,
    status: LineStageStatus,
    note?: string
  ) => {
    setWorkflows(prev => {
      const currentWf = prev[categoryId];
      if (!currentWf) return prev;
      const targetStage = currentWf.stages.find(s => s.id === stageId);
      const prevStatus = targetStage?.status;

      const updatedStages = currentWf.stages.map(stg => {
        if (stg.id !== stageId) return stg;
        return {
          ...stg,
          status,
          waitingReason: status === 'Waiting' || status === 'Delayed' ? (note || stg.waitingReason) : undefined,
          alertMessage: status === 'Delayed' 
            ? (note || 'Critical delay detected') 
            : status === 'Waiting' 
            ? (note || 'Bottleneck awaiting input') 
            : undefined
        };
      });

      logActivity(
        'line_stage',
        stageId,
        `Line Stage Status: ${targetStage?.name || stageId}`,
        prevStatus,
        status
      );

      return {
        ...prev,
        [categoryId]: {
          ...currentWf,
          stages: updatedStages
        }
      };
    });
  };

  const updateWorkflowStages = (categoryId: ProductCategory, stages: WorkflowStage[]) => {
    setWorkflows(prev => ({
      ...prev,
      [categoryId]: {
        ...prev[categoryId],
        stages
      }
    }));
    logActivity('line_stage', `wf-${categoryId}`, 'Workflow Stages Reconfigured', undefined, `${stages.length} stages`);
  };

  const addBatch = (batchData: Omit<Batch, 'id' | 'created_at' | 'updated_at'>) => {
    const newId = `b-${Date.now().toString().slice(-4)}`;
    const categoryToUse = batchData.category || activeCategory;
    const catWorkflow = workflows[categoryToUse] || activeWorkflow;
    const firstStage = catWorkflow.stages[0]?.name || 'PCB / SMT Preparation';

    const newBatch: Batch = {
      ...batchData,
      id: newId,
      category: categoryToUse,
      current_stage: batchData.current_stage || firstStage,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      stages_history: catWorkflow.stages.map((stg, i) => ({
        id: `sh-${newId}-${i}`,
        batch_id: newId,
        stage_name: stg.name,
        status: i === 0 ? 'Current' : 'Pending',
        started_at: i === 0 ? new Date().toISOString() : undefined
      }))
    };

    setBatches(prev => [newBatch, ...prev]);
    setSelectedBatchId(newId);
    logActivity('batch', newId, 'Batch Created', undefined, `${newBatch.batch_code} (${newBatch.product_name})`);
  };

  const updateBatchStage = (batchId: string, nextStage: ProductionStageName, notes?: string) => {
    setBatches(prev => prev.map(b => {
      if (b.id !== batchId) return b;
      const prevStage = b.current_stage;
      const updatedHistory = (b.stages_history || []).map(sh => {
        if (sh.stage_name === prevStage) {
          return { ...sh, status: 'Completed' as const, completed_at: new Date().toISOString() };
        }
        if (sh.stage_name === nextStage) {
          return { ...sh, status: 'Current' as const, started_at: new Date().toISOString() };
        }
        return sh;
      });

      const isCompleted = nextStage === 'Completed' || nextStage === 'Final Inspection & Packing' && notes === 'complete';
      const updatedBatch: Batch = {
        ...b,
        current_stage: nextStage,
        status: isCompleted ? 'Completed' : 'In Progress',
        completed_quantity: isCompleted ? b.planned_quantity : b.completed_quantity,
        completed_at: isCompleted ? new Date().toISOString() : undefined,
        stages_history: updatedHistory,
        updated_at: new Date().toISOString(),
        notes: notes || b.notes
      };

      logActivity('batch', b.id, 'Stage Advanced', prevStage, nextStage);
      return updatedBatch;
    }));
  };

  const updateBatchStatus = (batchId: string, status: BatchStatus, reason?: string) => {
    setBatches(prev => prev.map(b => {
      if (b.id !== batchId) return b;
      const prevStatus = b.status;
      logActivity('batch', b.id, 'Batch Status Changed', prevStatus, `${status}${reason ? ` (${reason})` : ''}`);
      return {
        ...b,
        status,
        notes: reason || b.notes,
        updated_at: new Date().toISOString()
      };
    }));
  };

  const recordQualityCheck = (checkId: string, result: QualityResult, observations: string) => {
    setQualityChecks(prev => prev.map(qc => {
      if (qc.id !== checkId) return qc;
      const prevResult = qc.result;
      const updated: QualityCheck = {
        ...qc,
        result,
        observations,
        status: 'Completed',
        inspected_at: new Date().toISOString()
      };

      logActivity('quality_check', qc.id, 'Inspection Recorded', prevResult, `${result} - ${observations.slice(0, 40)}`);

      if (result === 'Fail') {
        updateBatchStatus(qc.batch_id, 'On Hold', `Quarantined by QC Inspector: ${observations}`);
      }

      return updated;
    }));
  };

  const addQualityCheck = (check: Omit<QualityCheck, 'id' | 'created_at'>) => {
    const newId = `qc-${Date.now()}`;
    const newCheck: QualityCheck = {
      ...check,
      id: newId,
      category: check.category || activeCategory,
      created_at: new Date().toISOString()
    };
    setQualityChecks(prev => [newCheck, ...prev]);
    setSelectedQualityCheckId(newId);
    logActivity('quality_check', newId, 'Quality Check Scheduled', undefined, `${newCheck.check_type} for ${newCheck.batch_code}`);
  };

  const calculateRunStatus = (requirements: ProductionRun['requirements']): ReadinessStatus => {
    const hasMissing = requirements.some(r => r.status === 'Missing');
    if (hasMissing) return 'Blocked';
    const hasPending = requirements.some(r => r.status === 'Pending');
    if (hasPending) return 'At Risk';
    return 'Ready';
  };

  const updateReadinessItem = (runId: string, itemId: string, newStatus: RequirementStatus, notes?: string) => {
    setProductionRuns(prev => prev.map(run => {
      if (run.id !== runId) return run;

      const updatedReqs = run.requirements.map(req => {
        if (req.id !== itemId) return req;
        return {
          ...req,
          status: newStatus,
          notes: notes !== undefined ? notes : req.notes,
          updated_at: 'Just now'
        };
      });

      const nextRunStatus = calculateRunStatus(updatedReqs);
      logActivity('readiness', run.id, 'Checklist Item Updated', run.status, `${nextRunStatus} (Item: ${newStatus})`);

      return {
        ...run,
        status: nextRunStatus,
        requirements: updatedReqs
      };
    }));
  };

  const approveProductionStart = (runId: string): boolean => {
    const targetRun = productionRuns.find(r => r.id === runId);
    if (!targetRun || targetRun.status !== 'Ready') {
      return false;
    }

    const catPrefix = activeCategory.slice(0, 2).toUpperCase();
    const newBatchCode = `B-${catPrefix}-${Math.floor(200 + Math.random() * 800)}`;
    const catWorkflow = workflows[targetRun.category] || activeWorkflow;
    const firstStage = catWorkflow.stages[0]?.name || 'PCB / SMT Preparation';

    addBatch({
      batch_code: newBatchCode,
      category: targetRun.category,
      product_id: targetRun.product_id,
      product_name: targetRun.product_name,
      planned_quantity: 350,
      completed_quantity: 0,
      current_stage: firstStage,
      status: 'In Progress',
      assigned_to: `${targetRun.supervisor} / Shift Lead`,
      target_line: targetRun.target_line,
      started_at: new Date().toISOString(),
      notes: `Started from approved run ${targetRun.run_code}`
    });

    logActivity('readiness', runId, 'Production Run Approved & Started', targetRun.run_code, newBatchCode);
    return true;
  };

  const addRejection = (rejectionData: Omit<Rejection, 'id' | 'created_at'>) => {
    const newId = `rej-${Date.now()}`;
    const newRejection: Rejection = {
      ...rejectionData,
      id: newId,
      category: rejectionData.category || activeCategory,
      created_at: new Date().toISOString()
    };
    setRejections(prev => [newRejection, ...prev]);
    logActivity('rejection', newId, 'Rejection Recorded', undefined, `${newRejection.rejected_quantity} units (${newRejection.rejection_reason})`);
  };

  const markNotificationAsRead = (id: string) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
  };

  const clearAllNotifications = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const resetToDefaultData = () => {
    setActiveCategory('Lighting');
    setWorkflows(INITIAL_WORKFLOWS);
    setBatches(INITIAL_BATCHES);
    setQualityChecks(INITIAL_QUALITY_CHECKS);
    setProductionRuns(INITIAL_PRODUCTION_RUNS);
    setRejections(INITIAL_REJECTIONS);
    setActivityLogs(INITIAL_ACTIVITY_LOGS);
    setNotifications(INITIAL_NOTIFICATIONS);
    localStorage.removeItem(`${STORAGE_KEY}_active_cat`);
    localStorage.removeItem(`${STORAGE_KEY}_workflows`);
    localStorage.removeItem(`${STORAGE_KEY}_batches`);
    localStorage.removeItem(`${STORAGE_KEY}_qc`);
    localStorage.removeItem(`${STORAGE_KEY}_runs`);
    localStorage.removeItem(`${STORAGE_KEY}_rejections`);
    localStorage.removeItem(`${STORAGE_KEY}_logs`);
    localStorage.removeItem(`${STORAGE_KEY}_notifs`);
  };

  return (
    <FloorFlowContext.Provider
      value={{
        currentRoute,
        setCurrentRoute,
        currentUserRole,
        setCurrentUserRole,
        searchQuery,
        setSearchQuery,
        activeCategory,
        setActiveCategory,
        availableCategories: LUKER_CATEGORIES,
        workflows,
        activeWorkflow,
        selectedStageId,
        setSelectedStageId,
        updateWorkflowStageStatus,
        updateWorkflowStages,
        selectedBatchId,
        setSelectedBatchId,
        selectedRunId,
        setSelectedRunId,
        selectedQualityCheckId,
        setSelectedQualityCheckId,
        batches,
        qualityChecks,
        productionRuns,
        rejections,
        activityLogs,
        notifications,
        products: INITIAL_PRODUCTS,
        categoryBatches,
        categoryQualityChecks,
        categoryProductionRuns,
        categoryRejections,
        categoryProducts,
        kpis,
        rejectionsByReason,
        rejectionsByStage,
        stageProgressSummary,
        addBatch,
        updateBatchStage,
        updateBatchStatus,
        recordQualityCheck,
        addQualityCheck,
        updateReadinessItem,
        approveProductionStart,
        addRejection,
        markNotificationAsRead,
        clearAllNotifications,
        resetToDefaultData
      }}
    >
      {children}
    </FloorFlowContext.Provider>
  );
};

export const useFloorFlow = () => {
  const context = useContext(FloorFlowContext);
  if (!context) {
    throw new Error('useFloorFlow must be used within a FloorFlowProvider');
  }
  return context;
};
