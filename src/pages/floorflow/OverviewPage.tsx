import React from 'react';
import {
  Clock,
  ArrowRight,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
  AlertTriangle,
  PlayCircle,
  Layers,
  ChevronRight,
  Activity,
  ShieldCheck
} from 'lucide-react';
import { useFloorFlow } from '../../context/FloorFlowContext';
import { KPICard } from '../../components/floorflow/KPICard';
import { StatusBadge } from '../../components/floorflow/StatusBadge';
import { ProductionStageName } from '../../types/floorflow';

export const OverviewPage: React.FC = () => {
  const {
    kpis,
    stageProgressSummary,
    batches,
    productionRuns,
    qualityChecks,
    setCurrentRoute,
    setSelectedBatchId,
    setSelectedRunId,
    searchQuery
  } = useFloorFlow();

  // Filter alerts by search query if present
  const alerts = [
    {
      id: 'alert-1',
      batchCode: 'B-2401',
      batchId: 'b-2401',
      title: 'B-2401 — Assembly',
      desc: 'Waiting for material: auxiliary fastener delivery delayed.',
      type: 'Waiting',
      statusType: 'warning',
      route: '/batches' as const
    },
    {
      id: 'alert-2',
      batchCode: 'B-2403',
      batchId: 'b-2403',
      title: 'B-2403 — Panel C',
      desc: 'Final inspection not recorded. Batch placed on hold in Packing.',
      type: 'On Hold',
      statusType: 'danger',
      route: '/quality' as const
    },
    {
      id: 'alert-3',
      runCode: 'R-118',
      runId: 'r-118',
      title: 'R-118 — Production Run',
      desc: 'Raw material not confirmed. Supplier shipment PO-992 stalled.',
      type: 'Blocked',
      statusType: 'danger',
      route: '/readiness' as const
    },
    {
      id: 'alert-4',
      batchCode: 'B-2405',
      batchId: 'b-2405',
      title: 'B-2405 — Bracket E',
      desc: 'Secondary welding jig calibration underway at Station 1.',
      type: 'Waiting',
      statusType: 'warning',
      route: '/batches' as const
    }
  ];

  const filteredAlerts = alerts.filter(a => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return a.title.toLowerCase().includes(q) || a.desc.toLowerCase().includes(q);
  });

  // 7-day output data
  const outputTrends = [
    { day: 'Mon', units: 380, height: '65%' },
    { day: 'Tue', units: 420, height: '72%' },
    { day: 'Wed', units: 460, height: '80%' },
    { day: 'Thu', units: 412, height: '70%', isToday: true },
    { day: 'Fri', units: 490, height: '85%' },
    { day: 'Sat', units: 310, height: '55%' },
    { day: 'Sun', units: 190, height: '35%' }
  ];

  return (
    <div className="space-y-6 pb-12 animate-fade-in">
      {/* Page Title & Sub-bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-1">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-[#1A201C] tracking-tight">
            Production Overview
          </h2>
          <p className="text-xs text-[#717E76]">
            Real-time floor telemetry updated 2 minutes ago
          </p>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white rounded-full border border-[#E0DED6] text-xs font-medium text-[#526058] shadow-xs">
          <Clock className="w-3.5 h-3.5 text-[#557764]" />
          <span>Thursday, 24 October 2026</span>
        </div>
      </div>

      {/* 4 KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard
          label="Active Batches"
          value={kpis.activeBatchesCount}
          subtitle="Currently progressing across 4 lines"
          badge="+2 from morning shift"
          onClick={() => setCurrentRoute('/batches')}
        />
        <KPICard
          label="Waiting for Next Stage"
          value={String(kpis.waitingBatchesCount).padStart(2, '0')}
          subtitle="Action required by station leads"
          badge="Attention"
          onClick={() => setCurrentRoute('/batches')}
        />
        <KPICard
          label="Quality Checks Due"
          value={String(kpis.qualityChecksPending).padStart(2, '0')}
          subtitle="3 scheduled, 1 high priority"
          badge="QC Queue"
          onClick={() => setCurrentRoute('/quality')}
        />
        <KPICard
          isAccent
          label="Production Readiness"
          value={`${kpis.productionReadinessRate}%`}
          progressPercent={kpis.productionReadinessRate}
          subtitle={`${kpis.readyRunsCount} of ${kpis.plannedRunsCount} upcoming runs ready to start`}
          onClick={() => setCurrentRoute('/readiness')}
        />
      </div>

      {/* Middle Grid: Production Flow & Needs Attention */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Production Flow Card (7 Cols) */}
        <div className="lg:col-span-7 bg-white p-6 rounded-[24px] border border-[#E2E0D8] shadow-[0_4px_16px_rgba(30,40,35,0.03)] flex flex-col justify-between">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="text-base font-bold text-[#1A201C]">Production Flow</h3>
              <p className="text-xs text-[#76837C] mt-0.5">
                Active workflow balance across line stages
              </p>
            </div>
            <button
              onClick={() => setCurrentRoute('/batches')}
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#557764] hover:text-[#3B5446] hover:underline"
            >
              View all batches
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 4 Stages Flow */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
            {stageProgressSummary.map((stage, idx) => {
              const stageColors = [
                'bg-[#F7F6F1] border-[#E8E6DE]',
                'bg-[#F7F6F1] border-[#E8E6DE]',
                'bg-[#F7F6F1] border-[#E8E6DE]',
                'bg-[#F7F6F1] border-[#E8E6DE]'
              ][idx];

              return (
                <div
                  key={stage.stage}
                  className={`p-4 rounded-2xl border ${stageColors} transition-all hover:bg-white hover:border-[#CFCCC2] hover:shadow-sm`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold text-[#86928B] uppercase tracking-wider">
                      0{idx + 1}
                    </span>
                    <span
                      className={`w-2 h-2 rounded-full ${
                        stage.status === 'Minor bottleneck'
                          ? 'bg-[#D9822B]'
                          : stage.status === 'On track'
                          ? 'bg-[#557764]'
                          : 'bg-[#8E9B92]'
                      }`}
                    />
                  </div>

                  <h4 className="text-sm font-bold text-[#1A201C] mb-3">
                    {stage.stage}
                  </h4>

                  <div className="space-y-1.5 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-[#78857E]">Active:</span>
                      <span className="font-semibold text-[#1A201C]">
                        {stage.activeCount} batches
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#78857E]">Waiting:</span>
                      <span
                        className={`font-semibold ${
                          stage.waitingCount > 0 ? 'text-[#C2781D]' : 'text-[#78857E]'
                        }`}
                      >
                        {stage.waitingCount} batches
                      </span>
                    </div>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-[#EAE8E0]">
                    <StatusBadge status={stage.status} size="sm" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Flow Connector Visual Footer */}
          <div className="hidden sm:flex items-center justify-between mt-5 px-3 py-2.5 bg-[#FAF9F5] rounded-xl border border-[#ECE9E1] text-[11px] text-[#6B7871]">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#557764]" />
              Material Raw Intake
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-[#A2ADA7]" />
            <span>Precision Machining</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#A2ADA7]" />
            <span>Sub-assembly & Weld</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#A2ADA7]" />
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#557764]" />
              Final QC & Dispatch
            </span>
          </div>
        </div>

        {/* Needs Attention Card (5 Cols) */}
        <div className="lg:col-span-5 bg-white p-6 rounded-[24px] border border-[#E2E0D8] shadow-[0_4px_16px_rgba(30,40,35,0.03)] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-base font-bold text-[#1A201C]">Needs Attention</h3>
                <p className="text-xs text-[#76837C] mt-0.5">
                  Critical blockers and pending operational records
                </p>
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#FDF0F0] text-[#C53939] border border-[#F7CECE]">
                {filteredAlerts.length} issues
              </span>
            </div>

            <div className="space-y-3">
              {filteredAlerts.map((alert) => (
                <div
                  key={alert.id}
                  onClick={() => {
                    if (alert.batchId) setSelectedBatchId(alert.batchId);
                    if (alert.runId) setSelectedRunId(alert.runId);
                    setCurrentRoute(alert.route);
                  }}
                  className="p-3.5 rounded-2xl border border-[#ECEAE2] bg-[#FAF9F5] hover:bg-white hover:border-[#CFCCC2] hover:shadow-xs transition-all cursor-pointer group"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#C53939] mt-0.5 flex-shrink-0" />
                      <h4 className="text-xs font-bold text-[#1A201C] group-hover:text-[#557764] transition-colors">
                        {alert.title}
                      </h4>
                    </div>
                    <StatusBadge status={alert.type} size="sm" />
                  </div>
                  <p className="text-xs text-[#6B7871] mt-1.5 ml-4 leading-relaxed">
                    {alert.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-[#F0EFE8] flex items-center justify-between text-xs text-[#78857E]">
            <span>Sorted by operational severity</span>
            <button
              onClick={() => setCurrentRoute('/batches')}
              className="text-[#557764] font-semibold hover:underline flex items-center gap-1"
            >
              Resolve alerts <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Lower Row: 3 Dashboard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* 1. Seven-day production output trend */}
        <div className="bg-white p-6 rounded-[24px] border border-[#E2E0D8] shadow-[0_4px_16px_rgba(30,40,35,0.03)] flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-bold text-[#1A201C]">7-Day Output Trend</h3>
              <p className="text-xs text-[#76837C] mt-0.5">Units produced daily</p>
            </div>
            <span className="text-xs font-bold text-[#557764] bg-[#EDF3F0] px-2.5 py-1 rounded-full">
              412 avg/day
            </span>
          </div>

          {/* Simple custom clean SVG / CSS bar chart */}
          <div className="h-36 flex items-end justify-between gap-2 pt-4 px-2">
            {outputTrends.map((t) => (
              <div key={t.day} className="flex-1 flex flex-col items-center gap-2 group">
                <div className="text-[10px] font-semibold text-[#66746D] opacity-0 group-hover:opacity-100 transition-opacity">
                  {t.units}
                </div>
                <div className="w-full bg-[#EAE8E0] rounded-t-lg h-24 flex items-end overflow-hidden">
                  <div
                    className={`w-full rounded-t-lg transition-all duration-300 group-hover:brightness-95 ${
                      t.isToday ? 'bg-[#557764]' : 'bg-[#8CA899]'
                    }`}
                    style={{ height: t.height }}
                  />
                </div>
                <span className={`text-[11px] font-medium ${t.isToday ? 'text-[#1A201C] font-bold' : 'text-[#849189]'}`}>
                  {t.day}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-[#F0EFE8] flex items-center justify-between text-xs text-[#7B8881]">
            <span>Weekly target: 2,800 units</span>
            <span className="font-semibold text-[#1A201C]">2,662 units (95%)</span>
          </div>
        </div>

        {/* 2. Quality inspection completion */}
        <div className="bg-white p-6 rounded-[24px] border border-[#E2E0D8] shadow-[0_4px_16px_rgba(30,40,35,0.03)] flex flex-col justify-between">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="text-sm font-bold text-[#1A201C]">Quality Completion</h3>
              <p className="text-xs text-[#76837C] mt-0.5">Verification signoff progress</p>
            </div>
            <button
              onClick={() => setCurrentRoute('/quality')}
              className="text-xs font-semibold text-[#557764] hover:underline"
            >
              Open QC
            </button>
          </div>

          {/* Radial progress ring / gauge */}
          <div className="flex items-center justify-center py-2">
            <div className="relative w-32 h-32 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                <path
                  className="text-[#EAE8E0]"
                  strokeWidth="3.5"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="text-[#557764]"
                  strokeDasharray={`${kpis.qualityCompletionRate}, 100`}
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className="text-2xl font-bold text-[#1A201C]">
                  {kpis.qualityCompletionRate}%
                </span>
                <span className="text-[10px] text-[#7E8B83] uppercase tracking-wide">
                  Completed
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 pt-3 border-t border-[#F0EFE8] text-center text-xs">
            <div>
              <p className="text-[10px] text-[#7A8780]">Passed</p>
              <p className="font-bold text-[#2E7D4C]">
                {qualityChecks.filter(q => q.result === 'Pass').length}
              </p>
            </div>
            <div>
              <p className="text-[10px] text-[#7A8780]">Pending</p>
              <p className="font-bold text-[#C2781D]">{kpis.qualityChecksPending}</p>
            </div>
            <div>
              <p className="text-[10px] text-[#7A8780]">Failed</p>
              <p className="font-bold text-[#C53939]">{kpis.qualityChecksFailed}</p>
            </div>
          </div>
        </div>

        {/* 3. Rejection summary */}
        <div className="bg-white p-6 rounded-[24px] border border-[#E2E0D8] shadow-[0_4px_16px_rgba(30,40,35,0.03)] flex flex-col justify-between">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="text-sm font-bold text-[#1A201C]">Rejection Summary</h3>
              <p className="text-xs text-[#76837C] mt-0.5">Scrap & quarantine rate</p>
            </div>
            <button
              onClick={() => setCurrentRoute('/rejections')}
              className="text-xs font-semibold text-[#557764] hover:underline"
            >
              Analyze
            </button>
          </div>

          <div className="py-2 space-y-3">
            <div className="flex items-baseline justify-between">
              <div>
                <span className="text-3xl font-bold text-[#1A201C]">
                  {kpis.rejectionRate}%
                </span>
                <span className="text-xs text-[#78857E] ml-1.5">scrap rate</span>
              </div>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#EBF6EF] text-[#2E7D4C]">
                Within target &lt; 1.5%
              </span>
            </div>

            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-[#68756E]">
                <span>Total Produced Units:</span>
                <span className="font-semibold text-[#1A201C]">{kpis.totalUnitsProduced.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-[#68756E]">
                <span>Total Units Rejected:</span>
                <span className="font-semibold text-[#C53939]">{kpis.totalUnitsRejected} units</span>
              </div>
              <div className="flex justify-between text-[#68756E]">
                <span>Top Recorded Reason:</span>
                <span className="font-semibold text-[#1A201C]">Dimension Variance</span>
              </div>
            </div>
          </div>

          <div className="mt-3 pt-3 border-t border-[#F0EFE8] flex items-center justify-between text-xs text-[#7E8B83]">
            <span>100% root causes logged</span>
            <span className="text-[#557764] font-medium">Traceable to batch</span>
          </div>
        </div>
      </div>
    </div>
  );
};
