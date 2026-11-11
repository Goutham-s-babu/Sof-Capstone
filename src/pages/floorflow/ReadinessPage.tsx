import React, { useState, useMemo } from 'react';
import {
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Clock,
  User,
  Play,
  Search,
  Filter,
  Check,
  ChevronRight,
  ShieldAlert,
  ArrowRight,
  Tag,
  Package,
  Layers
} from 'lucide-react';
import { useFloorFlow } from '../../context/FloorFlowContext';
import { KPICard } from '../../components/floorflow/KPICard';
import { StatusBadge } from '../../components/floorflow/StatusBadge';
import {
  ProductionRun,
  ReadinessCheckItem,
  RequirementStatus,
  RequirementType
} from '../../types/floorflow';

export const ReadinessPage: React.FC = () => {
  const {
    productionRuns,
    kpis,
    selectedRunId,
    setSelectedRunId,
    updateReadinessItem,
    approveProductionStart,
    currentUserRole,
    activeCategory,
    activeWorkflow,
    searchQuery: globalSearch
  } = useFloorFlow();

  const [categoryScope, setCategoryScope] = useState<'Active' | 'All'>('Active');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [localSearch, setLocalSearch] = useState<string>('');
  const [approvalMessage, setApprovalMessage] = useState<string | null>(null);

  // Selected run
  const selectedRun = useMemo(() => {
    return productionRuns.find(r => r.id === selectedRunId) || productionRuns[0] || null;
  }, [productionRuns, selectedRunId]);

  // Filtered runs
  const filteredRuns = useMemo(() => {
    const q = (localSearch || globalSearch).toLowerCase().trim();
    return productionRuns.filter(run => {
      if (categoryScope === 'Active' && run.category !== activeCategory) {
        return false;
      }

      const matchSearch = !q ||
        run.run_code.toLowerCase().includes(q) ||
        run.product_name.toLowerCase().includes(q) ||
        (run.category && run.category.toLowerCase().includes(q)) ||
        run.supervisor.toLowerCase().includes(q);

      const matchStatus = statusFilter === 'All' || run.status === statusFilter;

      return matchSearch && matchStatus;
    });
  }, [productionRuns, localSearch, globalSearch, categoryScope, activeCategory, statusFilter]);

  const handleRequirementToggle = (itemId: string, currentStatus: RequirementStatus) => {
    if (!selectedRun) return;
    const nextMap: Record<RequirementStatus, RequirementStatus> = {
      Ready: 'Pending',
      Pending: 'Missing',
      Missing: 'Not Applicable',
      'Not Applicable': 'Ready'
    };
    const nextStatus = nextMap[currentStatus];
    updateReadinessItem(selectedRun.id, itemId, nextStatus);
  };

  const handleApproveStart = () => {
    if (!selectedRun) return;
    if (selectedRun.status !== 'Ready') {
      alert('Production run cannot be approved until all mandatory requirements are Ready or N/A.');
      return;
    }
    const success = approveProductionStart(selectedRun.id);
    if (success) {
      setApprovalMessage(`Run ${selectedRun.run_code} successfully authorized! Batch released onto ${activeCategory} production line.`);
      setTimeout(() => setApprovalMessage(null), 4000);
    }
  };

  return (
    <div className="space-y-6 pb-12 animate-fade-in">
      {/* Page Title & Supervisor Badge */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-1">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl md:text-2xl font-bold text-[#1A201C] tracking-tight">
              Production Readiness
            </h2>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#EDF3F0] text-[#3D5B4A] border border-[#D5E2DB]">
              {categoryScope === 'Active' ? `${activeCategory} Checklist` : 'All Categories'}
            </span>
          </div>
          <p className="text-xs text-[#717E76] mt-0.5">
            Component readiness checklist for {activeCategory} • Materials, setup & supervisor authorization
          </p>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white rounded-full border border-[#E0DED6] text-xs font-medium text-[#526058] shadow-xs">
          <ShieldAlert className="w-3.5 h-3.5 text-[#557764]" />
          <span>Manual Supervisor Release Required</span>
        </div>
      </div>

      {/* 4 KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard
          label="Planned Runs"
          value={String(kpis.plannedRunsCount).padStart(2, '0')}
          subtitle={`Scheduled for ${activeCategory}`}
          badge="Shift Plan"
        />
        <KPICard
          isAccent
          label="Ready to Start"
          value={String(kpis.readyRunsCount).padStart(2, '0')}
          subtitle="All components confirmed ready"
          progressPercent={kpis.productionReadinessRate}
        />
        <KPICard
          label="At Risk"
          value={String(kpis.atRiskRunsCount).padStart(2, '0')}
          subtitle="1 or more components pending"
          badge="Attention"
        />
        <KPICard
          label="Blocked"
          value={String(kpis.blockedRunsCount).padStart(2, '0')}
          subtitle="Missing mandatory parts or setup"
          badge="Halted"
        />
      </div>

      {/* Approval Success Banner */}
      {approvalMessage && (
        <div className="p-4 bg-[#EBF6EF] rounded-2xl border border-[#C8E6D3] text-xs text-[#2E7D4C] flex items-center justify-between shadow-xs animate-fade-in">
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
            <span className="font-semibold">{approvalMessage}</span>
          </div>
          <button
            onClick={() => setApprovalMessage(null)}
            className="text-xs font-bold hover:underline"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Main Content: Upcoming Runs (7 Cols) & Checklist (5 Cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Upcoming Production Runs Register */}
        <div className="lg:col-span-7 bg-white p-6 rounded-[24px] border border-[#E2E0D8] shadow-[0_4px_16px_rgba(30,40,35,0.03)] flex flex-col justify-between">
          <div>
            {/* Filter Toolbar */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 mb-4 border-b border-[#F0EFE9]">
              <div className="relative flex-1 max-w-sm">
                <Search className="w-4 h-4 text-[#8A968F] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Filter by Run ID, product or supervisor..."
                  value={localSearch}
                  onChange={(e) => setLocalSearch(e.target.value)}
                  className="w-full bg-[#FAF9F5] pl-9 pr-3 py-2 rounded-full border border-[#E5E3DC] text-xs text-[#1A201C] placeholder-[#8E9B93] focus:outline-none focus:border-[#557764]"
                />
              </div>

              <div className="flex items-center gap-2">
                {/* Scope Switcher */}
                <div className="inline-flex p-0.5 bg-[#FAF9F5] rounded-full border border-[#E5E3DC] text-xs">
                  <button
                    onClick={() => setCategoryScope('Active')}
                    className={`px-3 py-1 rounded-full font-medium transition-all ${
                      categoryScope === 'Active'
                        ? 'bg-white text-[#1A201C] font-semibold shadow-xs'
                        : 'text-[#6C7A72] hover:text-[#1A201C]'
                    }`}
                  >
                    {activeCategory}
                  </button>
                  <button
                    onClick={() => setCategoryScope('All')}
                    className={`px-3 py-1 rounded-full font-medium transition-all ${
                      categoryScope === 'All'
                        ? 'bg-white text-[#1A201C] font-semibold shadow-xs'
                        : 'text-[#6C7A72] hover:text-[#1A201C]'
                    }`}
                  >
                    All
                  </button>
                </div>

                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="bg-[#FAF9F5] px-3.5 py-2 rounded-full border border-[#E5E3DC] text-xs text-[#526058] font-medium focus:outline-none cursor-pointer"
                >
                  <option value="All">All States</option>
                  <option value="Ready">Ready</option>
                  <option value="At Risk">At Risk</option>
                  <option value="Blocked">Blocked</option>
                </select>
              </div>
            </div>

            {/* Runs Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#ECEAE2] text-[11px] font-semibold text-[#808C84] uppercase tracking-wider">
                    <th className="py-3 px-3">Run ID</th>
                    <th className="py-3 px-3">Category</th>
                    <th className="py-3 px-3">Product</th>
                    <th className="py-3 px-3">Planned Start</th>
                    <th className="py-3 px-3">Readiness</th>
                    <th className="py-3 px-3">Status Reason</th>
                    <th className="py-3 px-3 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F4F3EE] text-xs">
                  {filteredRuns.map((run) => {
                    const isSelected = selectedRun?.id === run.id;
                    const pendingItem = run.requirements.find(r => r.status === 'Missing' || r.status === 'Pending');

                    return (
                      <tr
                        key={run.id}
                        onClick={() => setSelectedRunId(run.id)}
                        className={`transition-colors cursor-pointer group ${
                          isSelected ? 'bg-[#F4F7F5]' : 'hover:bg-[#FAF9F5]'
                        }`}
                      >
                        <td className="py-3.5 px-3">
                          <span className="font-mono font-bold text-[#1A201C] group-hover:text-[#557764] transition-colors">
                            {run.run_code}
                          </span>
                        </td>
                        <td className="py-3.5 px-3">
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#FAF9F5] text-[#55635B] border border-[#E2E0D8]">
                            {run.category || activeCategory}
                          </span>
                        </td>
                        <td className="py-3.5 px-3 font-medium text-[#1A201C]">
                          {run.product_name}
                        </td>
                        <td className="py-3.5 px-3 font-mono text-[#526058]">
                          {run.planned_start}
                        </td>
                        <td className="py-3.5 px-3">
                          <StatusBadge status={run.status} size="sm" />
                        </td>
                        <td className="py-3.5 px-3 text-[#6E7B73]">
                          {pendingItem ? (
                            <span className="truncate max-w-[150px] block font-medium" title={pendingItem.component_name || pendingItem.requirement_type}>
                              {pendingItem.component_name || pendingItem.requirement_type}: <span className={pendingItem.status === 'Missing' ? 'text-[#C53939] font-bold' : 'text-[#C2781D]'}>{pendingItem.status}</span>
                            </span>
                          ) : (
                            <span className="text-[#2E7D4C] font-semibold flex items-center gap-1">
                              <Check className="w-3 h-3" /> All Components Ready
                            </span>
                          )}
                        </td>
                        <td className="py-3.5 px-3 text-center">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedRunId(run.id);
                            }}
                            className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                              isSelected
                                ? 'bg-[#557764] text-white'
                                : 'bg-[#FAF9F5] text-[#55635B] hover:bg-[#EAE8E0] hover:text-[#1A201C]'
                            }`}
                          >
                            Checklist
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              {filteredRuns.length === 0 && (
                <div className="text-center py-12 text-xs text-[#8A968F]">
                  No production runs found for {categoryScope === 'Active' ? activeCategory : 'the selected criteria'}.
                </div>
              )}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-[#F0EFE8] flex items-center justify-between text-xs text-[#7B8881]">
            <span>Showing {filteredRuns.length} production runs</span>
            <span className="text-[#557764] font-medium">Gatekeeper: Shift Supervisor</span>
          </div>
        </div>

        {/* Right: Component Readiness Checklist Card (5 Cols) */}
        {selectedRun ? (
          <div className="lg:col-span-5 bg-white p-6 rounded-[24px] border border-[#E2E0D8] shadow-[0_4px_16px_rgba(30,40,35,0.03)] flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="flex items-start justify-between pb-4 border-b border-[#F0EFE9] mb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-mono font-bold text-[#1A201C]">
                      {selectedRun.run_code}
                    </h3>
                    <StatusBadge status={selectedRun.status} size="sm" />
                  </div>
                  <p className="text-xs text-[#717E76] mt-0.5">
                    {selectedRun.product_name} • Start at {selectedRun.planned_start}
                  </p>
                  <span className="inline-flex items-center gap-1 mt-1 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-[#EDF3F0] text-[#3D5B4A]">
                    <Tag className="w-2.5 h-2.5" />
                    {selectedRun.category || activeCategory} Checklist
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-[#8C9891] block">Supervisor:</span>
                  <span className="text-xs font-semibold text-[#1A201C]">{selectedRun.supervisor}</span>
                </div>
              </div>

              {/* Checklist Rules Banner */}
              <div className="mb-4 p-3 bg-[#FAF9F5] rounded-2xl border border-[#ECE9E1] text-[11px] text-[#69766E] leading-relaxed">
                <span className="font-bold text-[#1A201C] block mb-0.5">
                  Category Component Verification:
                </span>
                Click any component status to cycle: <span className="font-semibold text-[#2E7D4C]">Ready</span> → <span className="font-semibold text-[#C2781D]">Pending</span> → <span className="font-semibold text-[#C53939]">Missing</span>.
              </div>

              {/* Checklist Items */}
              <div className="space-y-3">
                {selectedRun.requirements.map((req) => (
                  <div
                    key={req.id}
                    onClick={() => handleRequirementToggle(req.id, req.status)}
                    className="p-3.5 rounded-2xl border border-[#ECE9E1] bg-[#FAF9F5] hover:bg-white hover:border-[#CFCCC2] hover:shadow-xs transition-all cursor-pointer group"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-start gap-2.5">
                        <div
                          className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 text-white ${
                            req.status === 'Ready'
                              ? 'bg-[#2E7D4C]'
                              : req.status === 'Pending'
                              ? 'bg-[#C2781D]'
                              : req.status === 'Missing'
                              ? 'bg-[#C53939]'
                              : 'bg-[#8E9B92]'
                          }`}
                        >
                          {req.status === 'Ready' && <Check className="w-2.5 h-2.5" />}
                          {req.status === 'Missing' && <XCircle className="w-2.5 h-2.5" />}
                          {req.status === 'Pending' && <Clock className="w-2.5 h-2.5" />}
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-[#1A201C] group-hover:text-[#557764] transition-colors">
                            {req.component_name || req.requirement_type}
                          </h4>
                          <p className="text-[11px] text-[#717E76] mt-0.5 leading-snug">
                            {req.notes}
                          </p>
                        </div>
                      </div>

                      <div className="flex-shrink-0">
                        <StatusBadge status={req.status} size="sm" />
                      </div>
                    </div>

                    <div className="mt-2.5 pt-2 border-t border-[#EAE8E0] flex items-center justify-between text-[10px] text-[#86928B]">
                      <span>Owner: {req.owner}</span>
                      <span>Updated: {req.updated_at}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Authorize Button */}
            <div className="mt-6 pt-4 border-t border-[#F0EFE8]">
              <button
                onClick={handleApproveStart}
                disabled={selectedRun.status !== 'Ready'}
                className={`w-full py-3 px-4 rounded-full text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                  selectedRun.status === 'Ready'
                    ? 'bg-[#1A201C] text-white hover:bg-[#323D36] shadow-sm cursor-pointer'
                    : 'bg-[#EAE8E0] text-[#8C9890] cursor-not-allowed'
                }`}
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>
                  {selectedRun.status === 'Ready'
                    ? `Authorize ${selectedRun.run_code} Production Run`
                    : `Cannot Authorize — Status is ${selectedRun.status}`}
                </span>
              </button>
              <p className="text-[10px] text-center text-[#8C9890] mt-2">
                Release requires 100% verified components • Authorized by {currentUserRole}
              </p>
            </div>
          </div>
        ) : (
          <div className="lg:col-span-5 bg-white p-6 rounded-[24px] border border-[#E2E0D8] flex items-center justify-center text-xs text-[#8A968F]">
            Select a scheduled run to inspect pre-flight checklist.
          </div>
        )}
      </div>
    </div>
  );
};
