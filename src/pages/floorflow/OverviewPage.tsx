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
  ShieldCheck,
  Zap,
  Info
} from 'lucide-react';
import { useFloorFlow } from '../../context/FloorFlowContext';
import { KPICard } from '../../components/floorflow/KPICard';
import { StatusBadge } from '../../components/floorflow/StatusBadge';
import { GamifiedLineOverview } from '../../components/floorflow/GamifiedLineOverview';

export const OverviewPage: React.FC = () => {
  const {
    kpis,
    activeCategory,
    activeWorkflow,
    stageProgressSummary,
    categoryBatches,
    categoryProductionRuns,
    categoryQualityChecks,
    setCurrentRoute,
    setSelectedBatchId,
    setSelectedRunId,
    searchQuery,
    notifications
  } = useFloorFlow();

  // Category-tailored operational alerts
  const alerts = [
    {
      id: 'alert-lt-1',
      category: 'Lighting',
      batchCode: 'B-LT-101',
      batchId: 'b-lt-101',
      title: 'B-LT-101 — Driver Assembly',
      desc: 'Waiting for auxiliary surge capacitor lot signoff. 28 min bottleneck.',
      type: 'Waiting',
      statusType: 'warning',
      route: '/line-monitor' as const
    },
    {
      id: 'alert-lt-2',
      category: 'Lighting',
      batchCode: 'B-LT-103',
      batchId: 'b-lt-103',
      title: 'B-LT-103 — Round Downlight Panel',
      desc: 'CCT output reading 6420K vs 6500K specification. Review pending.',
      type: 'On Hold',
      statusType: 'danger',
      route: '/quality' as const
    },
    {
      id: 'alert-lt-3',
      category: 'Lighting',
      runCode: 'R-LT-101',
      runId: 'r-lt-101',
      title: 'R-LT-101 — 9W Bulb Production Run',
      desc: 'Driver raw material pending incoming dock acceptance. Start at risk.',
      type: 'At Risk',
      statusType: 'warning',
      route: '/readiness' as const
    },
    {
      id: 'alert-fn-1',
      category: 'Fans',
      batchCode: 'B-FN-201',
      batchId: 'b-fn-201',
      title: 'B-FN-201 — AeroGleam 1200mm',
      desc: 'Dynamic blade balancing rig undergoing sensor calibration.',
      type: 'Waiting',
      statusType: 'warning',
      route: '/line-monitor' as const
    },
    {
      id: 'alert-sw-1',
      category: 'Switchgear',
      batchCode: 'B-SW-401',
      batchId: 'b-sw-401',
      title: 'B-SW-401 — 16A SP MCB',
      desc: 'Bi-metal welding calibration variance. Station delayed +42 min.',
      type: 'Delayed',
      statusType: 'danger',
      route: '/line-monitor' as const
    }
  ];

  const filteredAlerts = alerts.filter(a => {
    const matchesCat = a.category === activeCategory;
    if (!searchQuery) return matchesCat;
    const q = searchQuery.toLowerCase();
    return matchesCat && (a.title.toLowerCase().includes(q) || a.desc.toLowerCase().includes(q));
  });

  // Category 7-day output data
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
      {/* Page Title & Context Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-1">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl md:text-2xl font-bold text-[#1A201C] tracking-tight">
              Production Overview
            </h2>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#EDF3F0] text-[#3D5B4A] border border-[#D5E2DB]">
              {activeCategory} Workspace
            </span>
          </div>
          <p className="text-xs text-[#717E76] mt-0.5">
            Operational visibility tailored to {activeCategory} assembly and testing lines
          </p>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white rounded-full border border-[#E0DED6] text-xs font-medium text-[#526058] shadow-xs">
          <Clock className="w-3.5 h-3.5 text-[#557764]" />
          <span>Operational Shift • Live</span>
        </div>
      </div>

      {/* 5 Category-Aware KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* 1. Active Batches */}
        <KPICard
          label="Active Batches"
          value={kpis.activeBatchesCount}
          subtitle={`In progress for ${activeCategory}`}
          badge="Live Floor"
          onClick={() => setCurrentRoute('/batches')}
        />

        {/* 2. Units Produced */}
        <KPICard
          label="Units Produced"
          value={kpis.totalUnitsProduced.toLocaleString()}
          subtitle="Cumulative shift output"
          badge="+8% target"
          onClick={() => setCurrentRoute('/batches')}
        />

        {/* 3. Batches Waiting */}
        <KPICard
          label="Batches Waiting"
          value={String(kpis.waitingBatchesCount).padStart(2, '0')}
          subtitle="Awaiting next line stage"
          badge={kpis.waitingBatchesCount > 0 ? 'Attention' : 'Optimal'}
          onClick={() => setCurrentRoute('/line-monitor')}
        />

        {/* 4. Quality Checks Due */}
        <KPICard
          label="Quality Checks Due"
          value={String(kpis.qualityChecksPending).padStart(2, '0')}
          subtitle="Pending inspector signoff"
          badge="QC Queue"
          onClick={() => setCurrentRoute('/quality')}
        />

        {/* 5. Current Bottleneck */}
        <div
          onClick={() => setCurrentRoute('/line-monitor')}
          className={`p-5 rounded-[22px] border transition-all cursor-pointer shadow-[0_2px_10px_rgba(20,30,25,0.03)] hover:shadow-md flex flex-col justify-between ${
            kpis.currentBottleneck
              ? 'bg-[#FFFBF5] border-[#F4DCB5]'
              : 'bg-white border-[#E2E0D8]'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-[#7E8B83]">Current Bottleneck</span>
            <span
              className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                kpis.currentBottleneck
                  ? 'bg-[#FDF0E0] text-[#B8681A]'
                  : 'bg-[#EDF6EE] text-[#2D6A4F]'
              }`}
            >
              {kpis.currentBottleneck ? 'Action Needed' : 'Clear'}
            </span>
          </div>
          <div className="my-2">
            <p className="text-base font-bold text-[#1A201C] line-clamp-1">
              {kpis.currentBottleneck || 'Flow Balanced'}
            </p>
            <p className="text-[11px] text-[#78857E] mt-0.5 line-clamp-1">
              {kpis.currentBottleneck
                ? `Queued in ${activeCategory} line`
                : 'All stages running within target'}
            </p>
          </div>
          <div className="flex items-center gap-1 text-[11px] font-semibold text-[#557764] hover:underline">
            <span>View in Line Monitor</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>

      {/* Middle Grid: Gamified Production Line Overview (7 Cols) & Needs Attention (5 Cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Side (7 Cols): Minimal Gamified Production Line Overview */}
        <div className="lg:col-span-7">
          <GamifiedLineOverview />
        </div>

        {/* Right Side (5 Cols): Needs Attention Card */}
        <div className="lg:col-span-5 bg-white p-6 rounded-[24px] border border-[#E2E0D8] shadow-[0_4px_16px_rgba(30,40,35,0.03)] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-base font-bold text-[#1A201C]">Needs Attention</h3>
                <p className="text-xs text-[#76837C] mt-0.5">
                  Critical blockers and pending operational records ({activeCategory})
                </p>
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#FDF0F0] text-[#C53939] border border-[#F7CECE]">
                {filteredAlerts.length} issues
              </span>
            </div>

            <div className="space-y-3">
              {filteredAlerts.length > 0 ? (
                filteredAlerts.map((alert) => (
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
                ))
              ) : (
                <div className="p-4 rounded-2xl border border-[#ECEAE2] bg-[#FAF9F5] text-center text-xs text-[#78857E]">
                  No active bottlenecks flagged for {activeCategory}. Flow is balanced.
                </div>
              )}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-[#F0EFE8] flex items-center justify-between text-xs text-[#78857E]">
            <span>Category-filtered priority queue</span>
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
              <h3 className="text-sm font-bold text-[#1A201C]">Output Trend ({activeCategory})</h3>
              <p className="text-xs text-[#76837C] mt-0.5">Units produced daily</p>
            </div>
            <span className="text-xs font-bold text-[#557764] bg-[#EDF3F0] px-2.5 py-1 rounded-full">
              412 avg/day
            </span>
          </div>

          {/* Simple clean bar chart */}
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
            <span>Active category volume</span>
            <span className="font-semibold text-[#1A201C]">{kpis.totalUnitsProduced.toLocaleString()} units</span>
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
                {categoryQualityChecks.filter(q => q.result === 'Pass').length}
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
              <p className="text-xs text-[#76837C] mt-0.5">Scrap & quarantine rate ({activeCategory})</p>
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
                Target &lt; 1.5%
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
                <span>Category Rejection Reasons:</span>
                <span className="font-semibold text-[#1A201C]">
                  {activeWorkflow.defaultRejectionReasons[0]}
                </span>
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
