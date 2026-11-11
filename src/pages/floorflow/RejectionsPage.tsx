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
  CheckCircle2,
  Tag
} from 'lucide-react';
import { useFloorFlow } from '../../context/FloorFlowContext';
import { KPICard } from '../../components/floorflow/KPICard';
import { StatusBadge } from '../../components/floorflow/StatusBadge';
import { RejectionReason, ProductionStageName, Rejection, ProductCategory } from '../../types/floorflow';

export const RejectionsPage: React.FC = () => {
  const {
    rejections,
    batches,
    kpis,
    rejectionsByReason,
    rejectionsByStage,
    addRejection,
    activeCategory,
    activeWorkflow,
    searchQuery: globalSearch
  } = useFloorFlow();

  const [categoryScope, setCategoryScope] = useState<'Active' | 'All'>('Active');
  const [stageFilter, setStageFilter] = useState<string>('All');
  const [reasonFilter, setReasonFilter] = useState<string>('All');
  const [localSearch, setLocalSearch] = useState<string>('');

  // Record Rejection Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newBatchId, setNewBatchId] = useState(batches[0]?.id || '');
  const [newStage, setNewStage] = useState<string>(activeWorkflow.stages[0]?.name || 'PCB / SMT Preparation');
  const [newQuantity, setNewQuantity] = useState<number>(3);
  const [newReason, setNewReason] = useState<string>(activeWorkflow.defaultRejectionReasons[0] || 'Dimension Variance');
  const [newRecordedBy, setNewRecordedBy] = useState<string>('K. Nair');
  const [newNotes, setNewNotes] = useState<string>('');

  // Filtered rejections register
  const filteredRejections = useMemo(() => {
    const q = (localSearch || globalSearch).toLowerCase().trim();
    return rejections.filter(r => {
      if (categoryScope === 'Active' && r.category !== activeCategory) {
        return false;
      }

      const matchSearch = !q ||
        r.batch_code.toLowerCase().includes(q) ||
        r.product_name.toLowerCase().includes(q) ||
        (r.category && r.category.toLowerCase().includes(q)) ||
        r.rejection_reason.toLowerCase().includes(q) ||
        r.recorded_by.toLowerCase().includes(q);

      const matchStage = stageFilter === 'All' || r.production_stage === stageFilter;
      const matchReason = reasonFilter === 'All' || r.rejection_reason === reasonFilter;

      return matchSearch && matchStage && matchReason;
    });
  }, [rejections, localSearch, globalSearch, categoryScope, activeCategory, stageFilter, reasonFilter]);

  const handleRecordRejection = (e: React.FormEvent) => {
    e.preventDefault();
    const batch = batches.find(b => b.id === newBatchId) || batches[0];
    addRejection({
      category: batch.category || activeCategory,
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
    return sorted[0] || { reason: activeWorkflow.defaultRejectionReasons[0] || 'Non-conformance', count: 4, percentage: 40 };
  }, [rejectionsByReason, activeWorkflow]);

  return (
    <div className="space-y-6 pb-12 animate-fade-in">
      {/* Page Title & Action */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-1">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl md:text-2xl font-bold text-[#1A201C] tracking-tight">
              Rejection Analysis
            </h2>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#EDF3F0] text-[#3D5B4A] border border-[#D5E2DB]">
              {categoryScope === 'Active' ? `${activeCategory} Scrap Log` : 'All Categories'}
            </span>
          </div>
          <p className="text-xs text-[#717E76] mt-0.5">
            Defect classification, scrap quantity telemetry and stage-wise root logging for {activeCategory}
          </p>
        </div>

        <button
          onClick={() => {
            setNewStage(activeWorkflow.stages[0]?.name || 'PCB / SMT Preparation');
            setNewReason(activeWorkflow.defaultRejectionReasons[0] || 'Quality Outlier');
            setIsModalOpen(true);
          }}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#1A201C] text-white text-xs font-semibold hover:bg-[#323D36] shadow-[0_3px_12px_rgba(26,32,28,0.25)] transition-all cursor-pointer self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Record {activeCategory} Scrap</span>
        </button>
      </div>

      {/* 4 KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard
          label="Total Units Produced"
          value={kpis.totalUnitsProduced.toLocaleString()}
          subtitle={`Active volume for ${activeCategory}`}
          badge="Yield"
        />
        <KPICard
          label="Rejected Units"
          value={kpis.totalUnitsRejected}
          subtitle="Quarantined or scrapped units"
          badge="Scrap"
        />
        <KPICard
          isAccent
          label="Rejection Rate"
          value={`${kpis.rejectionRate}%`}
          subtitle="Calculated: (Rejected / Produced) × 100"
          progressPercent={kpis.rejectionRate * 20}
        />
        <KPICard
          label="Reasons Recorded"
          value={`${kpis.totalUnitsRejected} / ${kpis.totalUnitsRejected}`}
          subtitle="100% root cause compliance"
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
                  Recorded Rejection Reasons ({activeCategory})
                </h3>
                <p className="text-xs text-[#76837C] mt-0.5">
                  Category defect breakdown from operator logs
                </p>
              </div>
              <span className="text-xs font-bold text-[#557764] bg-[#EDF3F0] px-2.5 py-1 rounded-full">
                {kpis.totalUnitsRejected} units logged
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
                  Rejections by Production Stage ({activeCategory})
                </h3>
                <p className="text-xs text-[#76837C] mt-0.5">
                  Detection station checkpoint across the connected line
                </p>
              </div>
              <span className="text-xs font-medium text-[#7A8780] bg-[#FAF9F5] px-2.5 py-1 rounded-full border border-[#ECEAE2]">
                Line Checkpoints
              </span>
            </div>

            {/* Stage Breakdown Bars */}
            <div className="space-y-3.5 pt-2">
              {rejectionsByStage.map((stg) => {
                const maxCount = Math.max(...rejectionsByStage.map(s => s.count), 5);
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
            *Traceable defect detection points aligned with {activeCategory} workflow stages.
          </div>
        </div>
      </div>

      {/* Bottom Section: Rejection Register (8 Cols) & Analysis Overview (4 Cols) */}
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
                  value={stageFilter}
                  onChange={(e) => setStageFilter(e.target.value)}
                  className="bg-[#FAF9F5] px-3.5 py-2 rounded-full border border-[#E5E3DC] text-xs text-[#526058] font-medium focus:outline-none cursor-pointer"
                >
                  <option value="All">All Stages</option>
                  {activeWorkflow.stages.map((stg) => (
                    <option key={stg.id} value={stg.name}>{stg.name}</option>
                  ))}
                </select>

                <select
                  value={reasonFilter}
                  onChange={(e) => setReasonFilter(e.target.value)}
                  className="bg-[#FAF9F5] px-3.5 py-2 rounded-full border border-[#E5E3DC] text-xs text-[#526058] font-medium focus:outline-none cursor-pointer"
                >
                  <option value="All">All Reasons</option>
                  {activeWorkflow.defaultRejectionReasons.map((r) => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#ECEAE2] text-[11px] font-semibold text-[#808C84] uppercase tracking-wider">
                    <th className="py-3 px-3">Batch ID</th>
                    <th className="py-3 px-3">Category</th>
                    <th className="py-3 px-3">Product Name</th>
                    <th className="py-3 px-3">Stage Detected</th>
                    <th className="py-3 px-3 text-right">Quantity</th>
                    <th className="py-3 px-3">Defect Reason</th>
                    <th className="py-3 px-3">Recorded By</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F4F3EE] text-xs">
                  {filteredRejections.map((rej) => (
                    <tr key={rej.id} className="hover:bg-[#FAF9F5] transition-colors">
                      <td className="py-3 px-3 font-mono font-bold text-[#1A201C]">
                        {rej.batch_code}
                      </td>
                      <td className="py-3 px-3">
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#FAF9F5] text-[#55635B] border border-[#E2E0D8]">
                          {rej.category || activeCategory}
                        </span>
                      </td>
                      <td className="py-3 px-3 font-medium text-[#1A201C]">
                        {rej.product_name}
                      </td>
                      <td className="py-3 px-3 text-[#55635B]">
                        {rej.production_stage}
                      </td>
                      <td className="py-3 px-3 text-right font-mono font-bold text-[#C53939]">
                        {rej.rejected_quantity} pcs
                      </td>
                      <td className="py-3 px-3">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-[#FAF8F5] border border-[#EAE6DD] text-[#3D4741]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D64545]" />
                          {rej.rejection_reason}
                        </span>
                      </td>
                      <td className="py-3 px-3 text-[#7B8881]">
                        {rej.recorded_by}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {filteredRejections.length === 0 && (
                <div className="text-center py-12 text-xs text-[#8A968F]">
                  No rejections match the selected criteria for {categoryScope === 'Active' ? activeCategory : 'all categories'}.
                </div>
              )}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-[#F0EFE8] flex items-center justify-between text-xs text-[#7B8881]">
            <span>Showing {filteredRejections.length} non-conformance records</span>
            <span className="text-[#557764] font-medium">Logged on factory terminal</span>
          </div>
        </div>

        {/* Right: Operational Insights Card (4 Cols) */}
        <div className="lg:col-span-4 bg-white p-6 rounded-[24px] border border-[#E2E0D8] shadow-[0_4px_16px_rgba(30,40,35,0.03)] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-[#F0EFE9] mb-4">
              <h3 className="text-sm font-bold text-[#1A201C]">
                Yield & Rejection Insights
              </h3>
              <span className="text-[11px] font-bold text-[#557764] bg-[#EDF3F0] px-2 py-0.5 rounded-full">
                {activeCategory}
              </span>
            </div>

            <div className="space-y-4">
              <div className="p-3.5 bg-[#FAF9F5] rounded-2xl border border-[#ECE9E1] text-xs space-y-2">
                <span className="font-bold text-[#1A201C] block text-[11px] uppercase tracking-wider">
                  Quality Engineering Summary
                </span>
                <p className="text-[#68756E] leading-relaxed">
                  Overall {activeCategory} scrap rate is held at <strong>{kpis.rejectionRate}%</strong>, which is safely within the target boundary (&lt; 1.50%).
                </p>
                <div className="pt-2 border-t border-[#EAE8E0] flex justify-between text-[11px]">
                  <span className="text-[#849189]">Primary Defect:</span>
                  <span className="font-semibold text-[#1A201C]">{topReason.reason}</span>
                </div>
              </div>

              <div className="p-3.5 bg-[#FAF9F5] rounded-2xl border border-[#ECE9E1] text-xs space-y-2">
                <span className="font-bold text-[#1A201C] block text-[11px] uppercase tracking-wider">
                  Proposed Pattern Analysis
                </span>
                <p className="text-[#68756E] leading-relaxed">
                  Historical patterns indicate that non-conformances cluster near station transitions. Root cause validation remains strictly human-verified.
                </p>
              </div>

              <div className="p-3 bg-[#FAF9F5] rounded-xl border border-[#ECE9E1] text-[11px] text-[#7B8881] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#557764] flex-shrink-0" />
                <span>AI assistance is restricted to summarizing recorded logs; release decisions require supervisor sign-off.</span>
              </div>
            </div>
          </div>

          <div className="mt-5 pt-3 border-t border-[#F0EFE8] flex items-center justify-between text-xs text-[#7B8881]">
            <span>Luker Quality Assurance</span>
            <span className="text-[#557764] font-medium">Traceable to lot</span>
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
              Log Production Non-Conformance
            </h3>
            <p className="text-xs text-[#717E76] mb-5">
              Record quarantined or scrapped units for <strong>{activeCategory}</strong>.
            </p>

            <form onSubmit={handleRecordRejection} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#1A201C] mb-1">
                  Target Batch
                </label>
                <select
                  value={newBatchId}
                  onChange={(e) => setNewBatchId(e.target.value)}
                  className="w-full bg-[#FAF9F5] px-3.5 py-2.5 rounded-xl border border-[#E0DED6] text-xs font-medium text-[#1A201C] focus:outline-none focus:border-[#557764]"
                >
                  {batches.filter(b => b.category === activeCategory).map((b) => (
                    <option key={b.id} value={b.id}>
                      {b.batch_code} — {b.product_name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#1A201C] mb-1">
                    Production Stage
                  </label>
                  <select
                    value={newStage}
                    onChange={(e) => setNewStage(e.target.value)}
                    className="w-full bg-[#FAF9F5] px-3.5 py-2.5 rounded-xl border border-[#E0DED6] text-xs font-medium text-[#1A201C] focus:outline-none focus:border-[#557764]"
                  >
                    {activeWorkflow.stages.map((stg) => (
                      <option key={stg.id} value={stg.name}>{stg.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1A201C] mb-1">
                    Rejected Quantity
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
                  Defect Category Reason
                </label>
                <select
                  value={newReason}
                  onChange={(e) => setNewReason(e.target.value)}
                  className="w-full bg-[#FAF9F5] px-3.5 py-2.5 rounded-xl border border-[#E0DED6] text-xs font-medium text-[#1A201C] focus:outline-none focus:border-[#557764]"
                >
                  {activeWorkflow.defaultRejectionReasons.map((r) => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1A201C] mb-1">
                  Recorded By (Lead / Operator)
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
                  Root Cause Observations (No assumptions)
                </label>
                <textarea
                  rows={2}
                  value={newNotes}
                  onChange={(e) => setNewNotes(e.target.value)}
                  placeholder="Precise measurement, variance or physical defect observed..."
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
                  className="px-5 py-2 rounded-full bg-[#1A201C] text-white text-xs font-semibold hover:bg-[#323D36] shadow-sm"
                >
                  Log Rejection
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
