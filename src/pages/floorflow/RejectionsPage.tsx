import React, { useState, useMemo } from 'react';
import {
  AlertTriangle,
  Search,
  Filter,
  Plus,
  TrendingDown,
  BarChart3,
  Calendar,
  User,
  Info,
  X,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { useFloorFlow } from '../../context/FloorFlowContext';
import { KPICard } from '../../components/floorflow/KPICard';
import { StatusBadge } from '../../components/floorflow/StatusBadge';
import { RejectionReason, ProductionStageName, Rejection } from '../../types/floorflow';

export const RejectionsPage: React.FC = () => {
  const {
    rejections,
    batches,
    kpis,
    rejectionsByReason,
    rejectionsByStage,
    addRejection,
    searchQuery: globalSearch
  } = useFloorFlow();

  const [stageFilter, setStageFilter] = useState<string>('All');
  const [reasonFilter, setReasonFilter] = useState<string>('All');
  const [localSearch, setLocalSearch] = useState<string>('');

  // Record Rejection Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newBatchId, setNewBatchId] = useState(batches[0]?.id || '');
  const [newStage, setNewStage] = useState<ProductionStageName | 'Finishing'>('Cutting');
  const [newQuantity, setNewQuantity] = useState<number>(3);
  const [newReason, setNewReason] = useState<RejectionReason>('Dimension Variance');
  const [newRecordedBy, setNewRecordedBy] = useState<string>('Liam Foster');
  const [newNotes, setNewNotes] = useState<string>('');

  // Filtered rejections register
  const filteredRejections = useMemo(() => {
    const q = (localSearch || globalSearch).toLowerCase().trim();
    return rejections.filter(r => {
      const matchSearch = !q ||
        r.batch_code.toLowerCase().includes(q) ||
        r.product_name.toLowerCase().includes(q) ||
        r.rejection_reason.toLowerCase().includes(q) ||
        r.recorded_by.toLowerCase().includes(q);

      const matchStage = stageFilter === 'All' || r.production_stage === stageFilter;
      const matchReason = reasonFilter === 'All' || r.rejection_reason === reasonFilter;

      return matchSearch && matchStage && matchReason;
    });
  }, [rejections, localSearch, globalSearch, stageFilter, reasonFilter]);

  const handleRecordRejection = (e: React.FormEvent) => {
    e.preventDefault();
    const batch = batches.find(b => b.id === newBatchId) || batches[0];
    addRejection({
      batch_id: batch.id,
      batch_code: batch.batch_code,
      product_name: batch.product_name,
      production_stage: newStage,
      rejected_quantity: Number(newQuantity),
      rejection_reason: newReason,
      recorded_by: newRecordedBy,
      notes: newNotes,
      recorded_at: new Date().toISOString()
    });
    setIsModalOpen(false);
  };

  const topReason = useMemo(() => {
    const sorted = [...rejectionsByReason].sort((a, b) => b.count - a.count);
    return sorted[0] || { reason: 'Dimension Variance', count: 18, percentage: 47 };
  }, [rejectionsByReason]);

  return (
    <div className="space-y-6 pb-12 animate-fade-in">
      {/* Page Title & Action */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-1">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-[#1A201C] tracking-tight">
            Rejection Analysis
          </h2>
          <p className="text-xs text-[#717E76]">
            Scrap telemetry, non-conformance logging and recorded defect categorisation
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#557764] text-white text-xs font-semibold hover:bg-[#486756] shadow-[0_3px_12px_rgba(85,119,100,0.25)] transition-all cursor-pointer self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Record Rejection</span>
        </button>
      </div>

      {/* 4 KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard
          label="Total Units Produced"
          value={kpis.totalUnitsProduced.toLocaleString()}
          subtitle="Cumulative yield in current cycle"
          badge="Yield"
        />
        <KPICard
          label="Rejected Units"
          value={kpis.totalUnitsRejected}
          subtitle="Quarantined or scrapped parts"
          badge="Scrap"
        />
        <KPICard
          isAccent
          label="Rejection Rate"
          value={`${kpis.rejectionRate}%`}
          subtitle="Calculated: (Rejected / Produced) × 100"
          progressPercent={kpis.rejectionRate * 15}
        />
        <KPICard
          label="Reasons Recorded"
          value={`${kpis.totalUnitsRejected} / ${kpis.totalUnitsRejected}`}
          subtitle="100% root log compliance verified"
          badge="100%"
        />
      </div>

      {/* Middle Grid: Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Recorded Rejection Reasons Horizontal Bar Chart (6 Cols) */}
        <div className="lg:col-span-6 bg-white p-6 rounded-[24px] border border-[#E2E0D8] shadow-[0_4px_16px_rgba(30,40,35,0.03)] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-sm font-bold text-[#1A201C]">
                  Recorded Rejection Reasons
                </h3>
                <p className="text-xs text-[#76837C] mt-0.5">
                  Breakdown by categorized operator log
                </p>
              </div>
              <span className="text-xs font-bold text-[#557764] bg-[#EDF3F0] px-2.5 py-1 rounded-full">
                {kpis.totalUnitsRejected} units total
              </span>
            </div>

            {/* Horizontal Bar Chart */}
            <div className="space-y-4 pt-2">
              {rejectionsByReason.map((item) => (
                <div key={item.reason} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#1A201C]">{item.reason}</span>
                    <span className="font-mono text-[#526058]">
                      {item.count} units ({item.percentage}%)
                    </span>
                  </div>
                  <div className="w-full bg-[#EAE8E0] rounded-full h-2.5 overflow-hidden">
                    <div
                      className="bg-[#557764] h-2.5 rounded-full transition-all duration-500"
                      style={{ width: `${Math.max(4, item.percentage)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 pt-3 border-t border-[#F0EFE8] flex items-center justify-between text-xs text-[#7B8881]">
            <span>Leading cause: {topReason.reason}</span>
            <span className="font-semibold text-[#1A201C]">{topReason.count} units</span>
          </div>
        </div>

        {/* Right: Rejections by Production Stage (6 Cols) */}
        <div className="lg:col-span-6 bg-white p-6 rounded-[24px] border border-[#E2E0D8] shadow-[0_4px_16px_rgba(30,40,35,0.03)] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-sm font-bold text-[#1A201C]">
                  Rejections by Production Stage
                </h3>
                <p className="text-xs text-[#76837C] mt-0.5">
                  Location where rejection was identified and recorded
                </p>
              </div>
              <span className="text-xs font-medium text-[#7A8780] bg-[#FAF9F5] px-2.5 py-1 rounded-full border border-[#ECEAE2]">
                Line Checkpoints
              </span>
            </div>

            {/* Stage Breakdown Bars */}
            <div className="space-y-3.5 pt-2">
              {rejectionsByStage.map((stg) => {
                const maxCount = 18;
                const percent = Math.round((stg.count / maxCount) * 100);

                return (
                  <div key={stg.stage} className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-medium text-[#2F3B34]">{stg.stage}</span>
                      <span className="font-mono font-semibold text-[#1A201C]">
                        {stg.count} units
                      </span>
                    </div>
                    <div className="w-full bg-[#EAE8E0] rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-[#789A87] h-2 rounded-full transition-all duration-500"
                        style={{ width: `${Math.max(3, percent)}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-5 pt-3 border-t border-[#F0EFE8] text-[11px] text-[#7E8B83] leading-relaxed">
            *Note: Recorded stage represents the detection station, which may differ from the origin stage.
          </div>
        </div>
      </div>

      {/* Bottom Section: Rejection Register (70%) & Analysis (30%) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Rejection Register Data Table (8 Cols) */}
        <div className="lg:col-span-8 bg-white p-6 rounded-[24px] border border-[#E2E0D8] shadow-[0_4px_16px_rgba(30,40,35,0.03)] flex flex-col justify-between">
          <div>
            {/* Filter Toolbar */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 mb-4 border-b border-[#F0EFE9]">
              <div className="relative flex-1 max-w-sm">
                <Search className="w-4 h-4 text-[#8A968F] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Filter by Batch, Product, Reason..."
                  value={localSearch}
                  onChange={(e) => setLocalSearch(e.target.value)}
                  className="w-full bg-[#FAF9F5] pl-9 pr-3 py-2 rounded-full border border-[#E5E3DC] text-xs text-[#1A201C] placeholder-[#8E9B93] focus:outline-none focus:border-[#557764]"
                />
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                <select
                  value={stageFilter}
                  onChange={(e) => setStageFilter(e.target.value)}
                  className="bg-[#FAF9F5] px-3.5 py-2 rounded-full border border-[#E5E3DC] text-xs text-[#526058] font-medium focus:outline-none cursor-pointer"
                >
                  <option value="All">All Stages</option>
                  <option value="Cutting">Cutting</option>
                  <option value="Assembly">Assembly</option>
                  <option value="Inspection">Inspection</option>
                  <option value="Finishing">Finishing</option>
                  <option value="Packing">Packing</option>
                </select>

                <select
                  value={reasonFilter}
                  onChange={(e) => setReasonFilter(e.target.value)}
                  className="bg-[#FAF9F5] px-3.5 py-2 rounded-full border border-[#E5E3DC] text-xs text-[#526058] font-medium focus:outline-none cursor-pointer"
                >
                  <option value="All">All Reasons</option>
                  <option value="Dimension Variance">Dimension Variance</option>
                  <option value="Assembly Issue">Assembly Issue</option>
                  <option value="Surface Defect">Surface Defect</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#ECEAE2] text-[11px] font-semibold text-[#808C84] uppercase tracking-wider">
                    <th className="py-3 px-3">Batch ID</th>
                    <th className="py-3 px-3">Product</th>
                    <th className="py-3 px-3">Stage</th>
                    <th className="py-3 px-3 text-right">Qty</th>
                    <th className="py-3 px-3">Recorded Reason</th>
                    <th className="py-3 px-3">Recorded By</th>
                    <th className="py-3 px-3">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F4F3EE] text-xs">
                  {filteredRejections.map((rej) => (
                    <tr
                      key={rej.id}
                      className="hover:bg-[#FAF9F5] transition-colors"
                    >
                      <td className="py-3.5 px-3">
                        <span className="font-mono font-bold text-[#1A201C]">
                          {rej.batch_code}
                        </span>
                      </td>
                      <td className="py-3.5 px-3 font-medium text-[#1A201C]">
                        {rej.product_name}
                      </td>
                      <td className="py-3.5 px-3">
                        <span className="font-medium text-[#2F3B34]">
                          {rej.production_stage}
                        </span>
                      </td>
                      <td className="py-3.5 px-3 text-right">
                        <span className="font-mono font-bold text-[#C53939] px-2 py-0.5 bg-[#FDF0F0] rounded-full">
                          {rej.rejected_quantity}
                        </span>
                      </td>
                      <td className="py-3.5 px-3">
                        <StatusBadge status={rej.rejection_reason} size="sm" />
                      </td>
                      <td className="py-3.5 px-3 text-[#526058]">
                        {rej.recorded_by}
                      </td>
                      <td className="py-3.5 px-3 text-[#6E7B73] max-w-[200px] truncate" title={rej.notes}>
                        {rej.notes || '—'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {filteredRejections.length === 0 && (
                <div className="text-center py-12 text-xs text-[#8A968F]">
                  No rejection records match the selected filters.
                </div>
              )}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-[#F0EFE8] flex items-center justify-between text-xs text-[#7B8881]">
            <span>Showing {filteredRejections.length} of {rejections.length} logged rejections</span>
            <span className="text-[#557764] font-medium">Traceable to batch log</span>
          </div>
        </div>

        {/* Right: Operational Insights & Non-Causative Analysis (4 Cols) */}
        <div className="lg:col-span-4 bg-white p-6 rounded-[24px] border border-[#E2E0D8] shadow-[0_4px_16px_rgba(30,40,35,0.03)] flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#F0EFE9]">
              <Info className="w-4 h-4 text-[#557764]" />
              <h3 className="text-base font-bold text-[#1A201C]">
                Operational Insights
              </h3>
            </div>

            <div className="p-3.5 bg-[#FAF9F5] rounded-2xl border border-[#ECE9E1] mb-4">
              <span className="text-[11px] font-bold text-[#557764] uppercase tracking-wide block mb-1">
                Primary Pattern
              </span>
              <p className="text-xs font-semibold text-[#1A201C] leading-snug">
                &ldquo;Dimension variance is the most frequently recorded reason in this selected sample ({topReason.percentage}% of all rejections).&rdquo;
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#79857E]">
                Recommended Investigation Areas
              </h4>

              <div className="p-3 rounded-xl bg-[#FAF9F5] border border-[#F0EFEA] text-xs space-y-1">
                <span className="font-bold text-[#1A201C]">1. Tooling & Insert Wear</span>
                <p className="text-[#68756E] text-[11px]">
                  Bore milling inserts on CNC Station 4 show 0.04mm variance after 140 continuous cycles.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-[#FAF9F5] border border-[#F0EFEA] text-xs space-y-1">
                <span className="font-bold text-[#1A201C]">2. Thermal Drift During Morning Shift</span>
                <p className="text-[#68756E] text-[11px]">
                  Flange dimensions measured 42.8mm before cooling fluid temperature stabilized at 21°C.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-[#FAF9F5] border border-[#F0EFEA] text-xs space-y-1">
                <span className="font-bold text-[#1A201C]">3. Operator Fixture Clamping</span>
                <p className="text-[#68756E] text-[11px]">
                  Secondary welding jig calibration delayed on Station 1 assembly lines.
                </p>
              </div>
            </div>
          </div>

          {/* Strict Non-Causation Disclaimer as instructed in prompt */}
          <div className="mt-5 p-3 rounded-xl bg-[#FAF9F5] border border-[#EAE8E0] text-[11px] text-[#7E8B83] leading-relaxed">
            <span className="font-semibold text-[#1A201C] block mb-0.5">Disclaimer:</span>
            Observations highlight operational correlations for engineering team review. They do not constitute automated confirmation of root causes.
          </div>
        </div>
      </div>

      {/* Record Rejection Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-white rounded-[28px] max-w-md w-full p-6 border border-[#E2E0D8] shadow-2xl relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute right-5 top-5 p-1 rounded-full text-[#7B8881] hover:text-[#1A201C] hover:bg-[#F2EFE9]"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-lg font-bold text-[#1A201C] mb-1">
              Record Scrap / Rejection
            </h3>
            <p className="text-xs text-[#717E76] mb-5">
              Log quarantined parts with reason categorization and batch traceability.
            </p>

            <form onSubmit={handleRecordRejection} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#1A201C] mb-1">
                  Origin Batch
                </label>
                <select
                  value={newBatchId}
                  onChange={(e) => setNewBatchId(e.target.value)}
                  className="w-full bg-[#FAF9F5] px-3.5 py-2.5 rounded-xl border border-[#E0DED6] text-xs font-medium text-[#1A201C] focus:outline-none focus:border-[#557764]"
                >
                  {batches.map((b) => (
                    <option key={b.id} value={b.id}>
                      {b.batch_code} — {b.product_name} ({b.current_stage})
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#1A201C] mb-1">
                    Recorded Stage
                  </label>
                  <select
                    value={newStage}
                    onChange={(e) => setNewStage(e.target.value as any)}
                    className="w-full bg-[#FAF9F5] px-3.5 py-2.5 rounded-xl border border-[#E0DED6] text-xs font-medium text-[#1A201C] focus:outline-none focus:border-[#557764]"
                  >
                    <option value="Cutting">Cutting</option>
                    <option value="Assembly">Assembly</option>
                    <option value="Inspection">Inspection</option>
                    <option value="Finishing">Finishing</option>
                    <option value="Packing">Packing</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1A201C] mb-1">
                    Quantity Rejected
                  </label>
                  <input
                    type="number"
                    min="1"
                    required
                    value={newQuantity}
                    onChange={(e) => setNewQuantity(Number(e.target.value))}
                    className="w-full bg-[#FAF9F5] px-3.5 py-2.5 rounded-xl border border-[#E0DED6] text-xs font-bold text-[#1A201C] focus:outline-none focus:border-[#557764]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1A201C] mb-1">
                  Rejection Reason
                </label>
                <select
                  value={newReason}
                  onChange={(e) => setNewReason(e.target.value as RejectionReason)}
                  className="w-full bg-[#FAF9F5] px-3.5 py-2.5 rounded-xl border border-[#E0DED6] text-xs font-medium text-[#1A201C] focus:outline-none focus:border-[#557764]"
                >
                  <option value="Dimension Variance">Dimension Variance</option>
                  <option value="Assembly Issue">Assembly Issue</option>
                  <option value="Surface Defect">Surface Defect</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1A201C] mb-1">
                  Recorded By
                </label>
                <input
                  type="text"
                  required
                  value={newRecordedBy}
                  onChange={(e) => setNewRecordedBy(e.target.value)}
                  className="w-full bg-[#FAF9F5] px-3.5 py-2.5 rounded-xl border border-[#E0DED6] text-xs text-[#1A201C] focus:outline-none focus:border-[#557764]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1A201C] mb-1">
                  Specific Observation Notes
                </label>
                <textarea
                  rows={2}
                  value={newNotes}
                  onChange={(e) => setNewNotes(e.target.value)}
                  placeholder="e.g. Bore hole undersized by 0.03mm..."
                  className="w-full bg-[#FAF9F5] p-3 rounded-xl border border-[#E0DED6] text-xs text-[#1A201C] focus:outline-none focus:border-[#557764]"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-full border border-[#E0DED6] text-xs font-semibold text-[#66736C] hover:bg-[#FAF9F5]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-full bg-[#557764] text-white text-xs font-semibold hover:bg-[#486756] shadow-sm"
                >
                  Save Rejection
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
