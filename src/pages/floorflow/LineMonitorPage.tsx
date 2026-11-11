import React, { useState, useMemo } from 'react';
import {
  Activity,
  ArrowRight,
  AlertTriangle,
  Clock,
  CheckCircle2,
  Layers,
  Wrench,
  AlertCircle,
  PlayCircle,
  Settings,
  ChevronRight,
  X,
  ExternalLink,
  ShieldCheck,
  Zap,
  Info,
  Check
} from 'lucide-react';
import { useFloorFlow } from '../../context/FloorFlowContext';
import { LineStageStatus, WorkflowStage } from '../../types/floorflow';

export const LineMonitorPage: React.FC = () => {
  const {
    activeCategory,
    activeWorkflow,
    workflows,
    categoryBatches,
    selectedStageId,
    setSelectedStageId,
    updateWorkflowStageStatus,
    updateWorkflowStages,
    setSelectedBatchId,
    setCurrentRoute,
    activityLogs
  } = useFloorFlow();

  const [isConfigModalOpen, setIsConfigModalOpen] = useState(false);
  const [editingStages, setEditingStages] = useState<WorkflowStage[]>([]);

  // Find currently selected stage object
  const selectedStage = useMemo(() => {
    return activeWorkflow.stages.find(s => s.id === selectedStageId) || activeWorkflow.stages[0];
  }, [activeWorkflow, selectedStageId]);

  // Find batches associated with the selected stage
  const stageBatches = useMemo(() => {
    if (!selectedStage) return [];
    return categoryBatches.filter(b => b.current_stage === selectedStage.name);
  }, [categoryBatches, selectedStage]);

  // Activity logs related to this stage
  const stageLogs = useMemo(() => {
    if (!selectedStage) return [];
    return activityLogs.filter(
      l => l.category === activeCategory && 
      (l.entity_id === selectedStage.id || l.action.toLowerCase().includes(selectedStage.name.toLowerCase()))
    ).slice(0, 5);
  }, [activityLogs, activeCategory, selectedStage]);

  // Open config modal with current stages
  const handleOpenConfig = () => {
    setEditingStages(JSON.parse(JSON.stringify(activeWorkflow.stages)));
    setIsConfigModalOpen(true);
  };

  // Save reconfigured stages
  const handleSaveConfig = () => {
    updateWorkflowStages(activeCategory, editingStages);
    setIsConfigModalOpen(false);
  };

  // Helper status styling: strictly using the 5 specified statuses
  const getStatusBadgeConfig = (status: LineStageStatus) => {
    switch (status) {
      case 'Running':
        return {
          bg: 'bg-[#EDF6EE]',
          text: 'text-[#2D6A4F]',
          border: 'border-[#CCE5D3]',
          dot: 'bg-[#2D6A4F]',
          cardGlow: 'hover:border-[#557764]'
        };
      case 'Completed':
        return {
          bg: 'bg-[#EAF4ED]',
          text: 'text-[#24613B]',
          border: 'border-[#BFDEC8]',
          dot: 'bg-[#24613B]',
          cardGlow: 'hover:border-[#3E7C57]'
        };
      case 'Waiting':
        return {
          bg: 'bg-[#FEF5E7]',
          text: 'text-[#B4690E]',
          border: 'border-[#F8DDAF]',
          dot: 'bg-[#D9822B]',
          cardGlow: 'border-[#F1CD90] ring-1 ring-[#E8B868]'
        };
      case 'Delayed':
        return {
          bg: 'bg-[#FDF0F0]',
          text: 'text-[#C53939]',
          border: 'border-[#F7C6C6]',
          dot: 'bg-[#D64545]',
          cardGlow: 'border-[#F0A8A8] ring-2 ring-[#E05252]/30'
        };
      case 'Maintenance':
        return {
          bg: 'bg-[#F2F4F7]',
          text: 'text-[#475467]',
          border: 'border-[#D0D5DD]',
          dot: 'bg-[#667085]',
          cardGlow: 'hover:border-[#98A2B3]'
        };
      default:
        return {
          bg: 'bg-[#F7F6F1]',
          text: 'text-[#717E76]',
          border: 'border-[#E8E6DE]',
          dot: 'bg-[#8E9B92]',
          cardGlow: ''
        };
    }
  };

  return (
    <div className="space-y-6 pb-16 animate-fade-in">
      {/* Top Header & Context Banner */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 px-1">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl md:text-2xl font-bold text-[#1A201C] tracking-tight">
              Production Line Monitor
            </h2>
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#EDF3F0] text-[#3D5B4A] border border-[#D5E2DB]">
              {activeCategory} Line
            </span>
          </div>
          <p className="text-xs md:text-sm text-[#717E76] mt-0.5">
            Sequential shopfloor node visualization • Instant bottleneck & queue identification
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={handleOpenConfig}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#E0DED6] hover:border-[#CFCCC2] text-xs font-semibold text-[#1A201C] shadow-xs hover:bg-[#FAF9F5] transition-all"
          >
            <Settings className="w-3.5 h-3.5 text-[#557764]" />
            <span>Configure Stages</span>
          </button>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FAF9F5] border border-[#E2E0D8] text-[11px] text-[#717E76]">
            <span className="w-2 h-2 rounded-full bg-[#2D6A4F] animate-pulse" />
            <span>Live Flow Active</span>
          </div>
        </div>
      </div>

      {/* Illustrative Disclaimer Tag */}
      <div className="bg-[#FAF9F5] border border-[#E4E2D8] rounded-2xl px-4 py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[#6A7870]">
        <div className="flex items-center gap-2">
          <Info className="w-4 h-4 text-[#557764] flex-shrink-0" />
          <span>
            <strong>Illustrative Luker Workflow:</strong> Connected stage model for <strong>{activeWorkflow.displayName}</strong>. Click any node to inspect queue times, batches, and stage alerts.
          </span>
        </div>
        <span className="text-[11px] text-[#8C9890] whitespace-nowrap">
          {activeWorkflow.stages.length} Connected Stations
        </span>
      </div>

      {/* Status Legend Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-3 py-2 bg-white rounded-2xl border border-[#E2E0D8] text-xs text-[#526058] shadow-xs">
        <span className="font-semibold text-[#1A201C] text-[11px] uppercase tracking-wider">
          Standard Node Statuses:
        </span>
        <div className="flex flex-wrap items-center gap-4">
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#2D6A4F]" />
            <span>Running</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#24613B]" />
            <span>Completed</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#D9822B]" />
            <span>Waiting / Bottleneck</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#D64545]" />
            <span>Delayed (Critical)</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#667085]" />
            <span>Maintenance</span>
          </span>
        </div>
      </div>

      {/* CONNECTED LINE NODES FLOW (Main Visual Screen) */}
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative">
          {activeWorkflow.stages.map((stage, idx) => {
            const isSelected = selectedStage?.id === stage.id;
            const statusConfig = getStatusBadgeConfig(stage.status);
            const isLast = idx === activeWorkflow.stages.length - 1;
            const activeBatchesInStage = categoryBatches.filter(b => b.current_stage === stage.name);
            const totalPlannedUnits = activeBatchesInStage.reduce((acc, b) => acc + b.planned_quantity, 0);
            const totalDoneUnits = activeBatchesInStage.reduce((acc, b) => acc + b.completed_quantity, 0);

            return (
              <div key={stage.id} className="relative flex flex-col">
                {/* Node Card */}
                <div
                  onClick={() => setSelectedStageId(stage.id)}
                  className={`relative cursor-pointer rounded-[22px] p-4.5 bg-white border transition-all duration-200 flex flex-col justify-between shadow-[0_3px_12px_rgba(20,30,25,0.02)] min-h-[220px] ${
                    isSelected
                      ? 'border-[#1A201C] ring-2 ring-[#1A201C] shadow-[0_6px_22px_rgba(26,32,28,0.12)]'
                      : statusConfig.cardGlow || 'border-[#E2E0D8] hover:border-[#CFCCC2]'
                  }`}
                >
                  {/* Top Bar: Sequence Number & Status Pill */}
                  <div>
                    <div className="flex items-center justify-between mb-2.5">
                      <div className="flex items-center gap-1.5">
                        <span className="w-6 h-6 rounded-full bg-[#F3F1EC] text-[#55635B] text-xs font-bold flex items-center justify-center">
                          0{stage.order}
                        </span>
                        {stage.stationCode && (
                          <span className="text-[10px] font-mono text-[#8C9890] uppercase">
                            {stage.stationCode}
                          </span>
                        )}
                      </div>

                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${statusConfig.bg} ${statusConfig.text} ${statusConfig.border}`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${statusConfig.dot}`} />
                        {stage.status}
                      </span>
                    </div>

                    {/* Stage Name */}
                    <h3 className="text-sm font-bold text-[#1A201C] leading-snug line-clamp-2">
                      {stage.name}
                    </h3>

                    {/* Target Line / Station info */}
                    <p className="text-[11px] text-[#78857E] mt-1 line-clamp-1">
                      {stage.targetLine || 'Standard Station'}
                    </p>
                  </div>

                  {/* Middle / Bottom Content: Batch info or Attention Alert */}
                  <div className="mt-3 pt-3 border-t border-[#F0EFE8] space-y-2">
                    {/* Alert Banner if Waiting or Delayed */}
                    {(stage.status === 'Waiting' || stage.status === 'Delayed') && (
                      <div
                        className={`p-2 rounded-xl text-[11px] font-medium leading-tight flex items-start gap-1.5 ${
                          stage.status === 'Delayed'
                            ? 'bg-[#FDF0F0] text-[#B83232] border border-[#F7CECE]'
                            : 'bg-[#FFF9EE] text-[#A65E0C] border border-[#F8E2BD]'
                        }`}
                      >
                        <AlertTriangle className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-2">
                          {stage.alertMessage || stage.waitingReason || 'Attention required at station'}
                        </span>
                      </div>
                    )}

                    {/* Active Batch Summary */}
                    {activeBatchesInStage.length > 0 ? (
                      <div className="text-xs">
                        <div className="flex items-center justify-between text-[11px] text-[#697770]">
                          <span>Active Batch:</span>
                          <span className="font-semibold text-[#1A201C]">
                            {activeBatchesInStage[0].batch_code}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-[11px] text-[#697770] mt-1">
                          <span>Volume:</span>
                          <span className="font-semibold text-[#1A201C]">
                            {totalDoneUnits} / {totalPlannedUnits} units
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className="text-[11px] text-[#8C9890] italic">
                        {stage.status === 'Completed' ? 'Station cleared' : 'Queue clear / ready'}
                      </div>
                    )}

                    {/* Lead & Cycle Time */}
                    <div className="flex items-center justify-between pt-1 text-[10px] text-[#86928B]">
                      <span className="truncate max-w-[100px]">{stage.operatorLead || 'Team Lead'}</span>
                      <span className="font-mono">{stage.defaultCycleTimeMins}m cycle</span>
                    </div>
                  </div>
                </div>

                {/* Connecting arrow indicator for medium+ screens */}
                {!isLast && (
                  <div className="hidden md:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10 w-4 h-4 rounded-full bg-white border border-[#D5D2C8] items-center justify-center text-[#78857E] shadow-xs">
                    <ArrowRight className="w-2.5 h-2.5" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* STAGE DETAIL PANEL (Bottom Section or Drawer) */}
      {selectedStage && (
        <div className="bg-white rounded-[24px] border border-[#E2E0D8] p-6 shadow-[0_4px_18px_rgba(20,30,25,0.03)] animate-fade-in">
          {/* Panel Top Heading */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[#F0EFE8]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#EDF3F0] border border-[#D5E2DB] flex items-center justify-center font-bold text-sm text-[#3D5B4A]">
                0{selectedStage.order}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold text-[#1A201C] tracking-tight">
                    {selectedStage.name}
                  </h3>
                  <span
                    className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold border ${
                      getStatusBadgeConfig(selectedStage.status).bg
                    } ${getStatusBadgeConfig(selectedStage.status).text} ${
                      getStatusBadgeConfig(selectedStage.status).border
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${getStatusBadgeConfig(selectedStage.status).dot}`} />
                    {selectedStage.status}
                  </span>
                </div>
                <p className="text-xs text-[#717E76] mt-0.5">
                  Station: {selectedStage.stationCode || 'GEN-01'} • Line: {selectedStage.targetLine || 'Standard Line'} • Supervisor: {selectedStage.operatorLead || 'Assigned Lead'}
                </p>
              </div>
            </div>

            {/* Quick Status Control for Demonstration */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-[#717E76]">Simulate Status:</span>
              <div className="inline-flex p-1 bg-[#F5F4EE] rounded-xl border border-[#E5E3D9]">
                {(['Running', 'Waiting', 'Delayed', 'Maintenance', 'Completed'] as LineStageStatus[]).map((st) => (
                  <button
                    key={st}
                    onClick={() => updateWorkflowStageStatus(activeCategory, selectedStage.id, st)}
                    className={`px-2.5 py-1 text-xs font-medium rounded-lg transition-all ${
                      selectedStage.status === st
                        ? 'bg-white text-[#1A201C] font-semibold shadow-xs'
                        : 'text-[#6A7870] hover:text-[#1A201C]'
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Panel Grid: Batches, Bottleneck Notes, Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-5">
            {/* 1. Associated Batches */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#8A968F] flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#557764]" />
                  Active Batches in Stage ({stageBatches.length})
                </h4>
                {stageBatches.length > 0 && (
                  <button
                    onClick={() => {
                      setSelectedBatchId(stageBatches[0].id);
                      setCurrentRoute('/batches');
                    }}
                    className="text-xs text-[#557764] font-semibold hover:underline"
                  >
                    Manage
                  </button>
                )}
              </div>

              {stageBatches.length > 0 ? (
                <div className="space-y-2.5">
                  {stageBatches.map((b) => (
                    <div
                      key={b.id}
                      onClick={() => {
                        setSelectedBatchId(b.id);
                        setCurrentRoute('/batches');
                      }}
                      className="p-3 rounded-2xl border border-[#E6E4DC] bg-[#FAF9F5] hover:bg-white hover:border-[#CFCCC2] hover:shadow-xs transition-all cursor-pointer group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-[#1A201C] group-hover:text-[#557764]">
                          {b.batch_code}
                        </span>
                        <span className="text-[11px] font-semibold text-[#557764] bg-[#EDF3F0] px-2 py-0.5 rounded-full">
                          {b.status}
                        </span>
                      </div>
                      <p className="text-xs text-[#6A7870] mt-1 font-medium">{b.product_name}</p>
                      <div className="flex items-center justify-between text-[11px] text-[#7A8780] mt-2 pt-2 border-t border-[#ECEAE0]">
                        <span>Progress: {b.completed_quantity} / {b.planned_quantity}</span>
                        <span>Operator: {b.assigned_to.split('(')[0]}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-4 rounded-2xl border border-dashed border-[#DCDAD0] text-center text-xs text-[#8A968F]">
                  No active batches currently queued at this station.
                </div>
              )}
            </div>

            {/* 2. Bottleneck Diagnostics & Stage Timing */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#8A968F] flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#557764]" />
                Cycle Time & Bottleneck Diagnostics
              </h4>

              <div className="p-4 rounded-2xl border border-[#E6E4DC] bg-[#FAF9F5] space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#6A7870]">Target Cycle Time:</span>
                  <span className="font-semibold text-[#1A201C]">{selectedStage.defaultCycleTimeMins} minutes</span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#6A7870]">Station Status:</span>
                  <span className="font-semibold text-[#1A201C]">{selectedStage.status}</span>
                </div>

                {selectedStage.delayMinutes && (
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#C53939] font-medium">Estimated Delay:</span>
                    <span className="font-bold text-[#C53939]">+{selectedStage.delayMinutes} mins</span>
                  </div>
                )}

                <div className="pt-2 border-t border-[#ECEAE0]">
                  <p className="text-[11px] text-[#78857E]">
                    <strong>Condition Note:</strong>{' '}
                    {selectedStage.waitingReason || selectedStage.alertMessage || 'Operating under normal parameters with balanced throughput.'}
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Stage Activity Logs */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#8A968F] flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-[#557764]" />
                Recent Station Activity
              </h4>

              <div className="p-3.5 rounded-2xl border border-[#E6E4DC] bg-[#FAF9F5] space-y-2.5 max-h-48 overflow-y-auto">
                {stageLogs.length > 0 ? (
                  stageLogs.map((log) => (
                    <div key={log.id} className="text-xs pb-2 border-b border-[#ECEAE0] last:border-0 last:pb-0">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-[#1A201C]">{log.action}</span>
                        <span className="text-[10px] text-[#8E9B92]">
                          {new Date(log.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                      <p className="text-[#6E7B73] text-[11px] mt-0.5">{log.new_value || log.previous_value}</p>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-4 text-xs text-[#8A968F]">
                    No station incidents logged today.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* EDIT / CONFIGURE STAGES MODAL */}
      {isConfigModalOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-[28px] max-w-xl w-full p-6 shadow-2xl border border-[#E2E0D8] animate-fade-in">
            <div className="flex items-center justify-between pb-4 border-b border-[#F0EFE8]">
              <div>
                <h3 className="text-base font-bold text-[#1A201C]">
                  Configure {activeCategory} Workflow
                </h3>
                <p className="text-xs text-[#717E76] mt-0.5">
                  Edit demonstration workflow stages, target line assignments, and nominal cycle times.
                </p>
              </div>
              <button
                onClick={() => setIsConfigModalOpen(false)}
                className="w-8 h-8 rounded-full bg-[#F5F4EE] flex items-center justify-center text-[#717E76] hover:text-[#1A201C]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="py-4 space-y-3 max-h-[60vh] overflow-y-auto">
              {editingStages.map((stg, idx) => (
                <div key={stg.id} className="p-3.5 rounded-2xl border border-[#E2E0D8] bg-[#FAF9F5] space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#1A201C] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                      0{idx + 1}
                    </span>
                    <input
                      type="text"
                      value={stg.name}
                      onChange={(e) => {
                        const val = e.target.value;
                        setEditingStages(prev => prev.map((s, i) => i === idx ? { ...s, name: val } : s));
                      }}
                      className="flex-1 bg-white px-3 py-1.5 rounded-xl border border-[#D5D2C8] text-xs font-semibold text-[#1A201C] focus:outline-none focus:border-[#557764]"
                      placeholder="Stage name"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <label className="text-[10px] text-[#717E76] font-medium block mb-0.5">Station Line</label>
                      <input
                        type="text"
                        value={stg.targetLine || ''}
                        onChange={(e) => {
                          const val = e.target.value;
                          setEditingStages(prev => prev.map((s, i) => i === idx ? { ...s, targetLine: val } : s));
                        }}
                        className="w-full bg-white px-2.5 py-1 rounded-lg border border-[#D5D2C8] text-[11px] text-[#1A201C]"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-[#717E76] font-medium block mb-0.5">Cycle Time (mins)</label>
                      <input
                        type="number"
                        value={stg.defaultCycleTimeMins || 30}
                        onChange={(e) => {
                          const val = parseInt(e.target.value) || 30;
                          setEditingStages(prev => prev.map((s, i) => i === idx ? { ...s, defaultCycleTimeMins: val } : s));
                        }}
                        className="w-full bg-white px-2.5 py-1 rounded-lg border border-[#D5D2C8] text-[11px] text-[#1A201C]"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-[#F0EFE8] flex items-center justify-between">
              <span className="text-xs text-[#8A968F]">
                Changes persist locally for presentation.
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsConfigModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-medium text-[#717E76] hover:bg-[#F5F4EE]"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveConfig}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-[#1A201C] text-white hover:bg-[#323D36] transition-colors"
                >
                  Save Stages
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
