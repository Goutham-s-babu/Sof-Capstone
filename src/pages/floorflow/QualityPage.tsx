import React, { useState, useMemo } from 'react';
import {
  ClipboardCheck,
  Search,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Plus,
  Clock,
  User,
  ShieldCheck,
  ChevronRight,
  Save,
  AlertTriangle
} from 'lucide-react';
import { useFloorFlow } from '../../context/FloorFlowContext';
import { KPICard } from '../../components/floorflow/KPICard';
import { StatusBadge } from '../../components/floorflow/StatusBadge';
import { QualityCheck, QualityResult } from '../../types/floorflow';

export const QualityPage: React.FC = () => {
  const {
    qualityChecks,
    batches,
    kpis,
    selectedQualityCheckId,
    setSelectedQualityCheckId,
    recordQualityCheck,
    addQualityCheck,
    searchQuery: globalSearch
  } = useFloorFlow();

  const [filterResult, setFilterResult] = useState<string>('All');
  const [filterStatus, setFilterStatus] = useState<string>('All');
  const [localSearch, setLocalSearch] = useState<string>('');

  // Selected check
  const selectedCheck = useMemo(() => {
    return qualityChecks.find(q => q.id === selectedQualityCheckId) || qualityChecks[0] || null;
  }, [qualityChecks, selectedQualityCheckId]);

  // Inspection Recording Form state
  const [activeInspector, setActiveInspector] = useState<string>('Marcus Vance');
  const [selectedResult, setSelectedResult] = useState<QualityResult>('Pass');
  const [observations, setObservations] = useState<string>('');
  const [saveSuccess, setSaveSuccess] = useState<boolean>(false);

  // Sync inspection form when selected check changes
  React.useEffect(() => {
    if (selectedCheck) {
      setActiveInspector(selectedCheck.inspector);
      setSelectedResult(selectedCheck.result === 'Pending' ? 'Pass' : selectedCheck.result);
      setObservations(selectedCheck.observations || '');
      setSaveSuccess(false);
    }
  }, [selectedCheck]);

  // New inspection modal
  const [isNewModalOpen, setIsNewModalOpen] = useState(false);
  const [newBatchId, setNewBatchId] = useState(batches[0]?.id || '');
  const [newCheckType, setNewCheckType] = useState('Dimensional & Tolerance Verification');
  const [newInspector, setNewInspector] = useState('Marcus Vance');
  const [newDueTime, setNewDueTime] = useState('14:30 PM');

  // Filtered checks list
  const filteredChecks = useMemo(() => {
    const q = (localSearch || globalSearch).toLowerCase().trim();
    return qualityChecks.filter(check => {
      const matchSearch = !q ||
        check.batch_code.toLowerCase().includes(q) ||
        check.product_name.toLowerCase().includes(q) ||
        check.check_type.toLowerCase().includes(q) ||
        check.inspector.toLowerCase().includes(q);

      const matchResult = filterResult === 'All' || check.result === filterResult;
      const matchStatus = filterStatus === 'All' || check.status === filterStatus;

      return matchSearch && matchResult && matchStatus;
    });
  }, [qualityChecks, localSearch, globalSearch, filterResult, filterStatus]);

  const handleSaveInspection = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCheck) return;
    recordQualityCheck(selectedCheck.id, selectedResult, observations);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const handleScheduleInspection = (e: React.FormEvent) => {
    e.preventDefault();
    const batch = batches.find(b => b.id === newBatchId) || batches[0];
    addQualityCheck({
      batch_id: batch.id,
      batch_code: batch.batch_code,
      product_name: batch.product_name,
      check_type: newCheckType,
      inspector: newInspector,
      due_at: newDueTime,
      result: 'Pending',
      observations: '',
      status: 'Scheduled'
    });
    setIsNewModalOpen(false);
  };

  return (
    <div className="space-y-6 pb-12 animate-fade-in">
      {/* Page Title & Schedule Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-1">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-[#1A201C] tracking-tight">
            Quality Checks
          </h2>
          <p className="text-xs text-[#717E76]">
            Strict verification logs, inspection worklists, and non-conformance records
          </p>
        </div>

        <button
          onClick={() => setIsNewModalOpen(true)}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#557764] text-white text-xs font-semibold hover:bg-[#486756] shadow-[0_3px_12px_rgba(85,119,100,0.25)] transition-all cursor-pointer self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Schedule Inspection</span>
        </button>
      </div>

      {/* 4 KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard
          label="Checks Scheduled"
          value={String(kpis.qualityChecksScheduled).padStart(2, '0')}
          subtitle="Total inspections in shift plan"
          badge="Shift Target"
        />
        <KPICard
          label="Checks Completed"
          value={String(kpis.qualityChecksCompleted).padStart(2, '0')}
          subtitle={`${kpis.qualityCompletionRate}% completion rate recorded`}
          badge="Signed Off"
        />
        <KPICard
          label="Checks Pending"
          value={String(kpis.qualityChecksPending).padStart(2, '0')}
          subtitle="Awaiting lab technician review"
          badge="In Queue"
        />
        <KPICard
          label="Checks Failed"
          value={String(kpis.qualityChecksFailed).padStart(2, '0')}
          subtitle="Non-conforming units quarantined"
          badge="Quarantine"
        />
      </div>

      {/* Main Grid: Worklist (65%) & Recording Interface (35%) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Inspection Worklist Table (7 or 8 cols) */}
        <div className="lg:col-span-8 bg-white p-6 rounded-[24px] border border-[#E2E0D8] shadow-[0_4px_16px_rgba(30,40,35,0.03)] flex flex-col justify-between">
          <div>
            {/* Filter Toolbar */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 mb-4 border-b border-[#F0EFE9]">
              <div className="relative flex-1 max-w-sm">
                <Search className="w-4 h-4 text-[#8A968F] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Filter by Batch, Product or Inspector..."
                  value={localSearch}
                  onChange={(e) => setLocalSearch(e.target.value)}
                  className="w-full bg-[#FAF9F5] pl-9 pr-3 py-2 rounded-full border border-[#E5E3DC] text-xs text-[#1A201C] placeholder-[#8E9B93] focus:outline-none focus:border-[#557764]"
                />
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                <select
                  value={filterResult}
                  onChange={(e) => setFilterResult(e.target.value)}
                  className="bg-[#FAF9F5] px-3 py-2 rounded-full border border-[#E5E3DC] text-xs text-[#526058] font-medium focus:outline-none cursor-pointer"
                >
                  <option value="All">All Results</option>
                  <option value="Pass">Pass</option>
                  <option value="Needs Review">Needs Review</option>
                  <option value="Fail">Fail</option>
                  <option value="Pending">Pending</option>
                </select>

                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="bg-[#FAF9F5] px-3 py-2 rounded-full border border-[#E5E3DC] text-xs text-[#526058] font-medium focus:outline-none cursor-pointer"
                >
                  <option value="All">All Statuses</option>
                  <option value="Scheduled">Scheduled</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
            </div>

            {/* Worklist Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#ECEAE2] text-[11px] font-semibold text-[#808C84] uppercase tracking-wider">
                    <th className="py-3 px-3">Batch ID</th>
                    <th className="py-3 px-3">Product</th>
                    <th className="py-3 px-3">Inspection Type</th>
                    <th className="py-3 px-3">Inspector</th>
                    <th className="py-3 px-3">Due Time</th>
                    <th className="py-3 px-3">Result</th>
                    <th className="py-3 px-3 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F4F3EE] text-xs">
                  {filteredChecks.map((qc) => {
                    const isSelected = selectedCheck?.id === qc.id;
                    const isOverdue = qc.due_at.toLowerCase().includes('overdue');

                    return (
                      <tr
                        key={qc.id}
                        onClick={() => setSelectedQualityCheckId(qc.id)}
                        className={`transition-colors cursor-pointer group ${
                          isSelected ? 'bg-[#F4F7F5]' : 'hover:bg-[#FAF9F5]'
                        }`}
                      >
                        <td className="py-3.5 px-3">
                          <span className="font-mono font-bold text-[#1A201C] group-hover:text-[#557764] transition-colors">
                            {qc.batch_code}
                          </span>
                        </td>
                        <td className="py-3.5 px-3 font-medium text-[#1A201C]">
                          {qc.product_name}
                        </td>
                        <td className="py-3.5 px-3 text-[#526058]">
                          {qc.check_type}
                        </td>
                        <td className="py-3.5 px-3 text-[#526058]">
                          {qc.inspector}
                        </td>
                        <td className="py-3.5 px-3 font-mono">
                          <span className={isOverdue ? 'text-[#C53939] font-bold' : 'text-[#68756E]'}>
                            {qc.due_at}
                          </span>
                        </td>
                        <td className="py-3.5 px-3">
                          <StatusBadge status={qc.result} size="sm" />
                        </td>
                        <td className="py-3.5 px-3 text-center">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedQualityCheckId(qc.id);
                            }}
                            className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                              isSelected
                                ? 'bg-[#557764] text-white'
                                : 'bg-[#FAF9F5] text-[#55635B] hover:bg-[#EAE8E0] hover:text-[#1A201C]'
                            }`}
                          >
                            {qc.result === 'Pending' ? 'Record' : 'Review'}
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              {filteredChecks.length === 0 && (
                <div className="text-center py-12 text-xs text-[#8A968F]">
                  No inspection records match the current filter.
                </div>
              )}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-[#F0EFE8] flex items-center justify-between text-xs text-[#7B8881]">
            <span>Showing {filteredChecks.length} inspections</span>
            <span className="text-[#C2781D] font-medium">1 overdue verification requires signoff</span>
          </div>
        </div>

        {/* Right: Inspection Recording Interface (4 cols) */}
        {selectedCheck ? (
          <div className="lg:col-span-4 bg-white p-6 rounded-[24px] border border-[#E2E0D8] shadow-[0_4px_16px_rgba(30,40,35,0.03)] flex flex-col justify-between">
            <form onSubmit={handleSaveInspection} className="flex-1 flex flex-col justify-between">
              <div>
                {/* Header */}
                <div className="flex items-start justify-between pb-4 border-b border-[#F0EFE9] mb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-bold text-[#1A201C]">
                        Record Inspection
                      </h3>
                      <StatusBadge status={selectedCheck.result} size="sm" />
                    </div>
                    <p className="text-xs text-[#76837C] mt-0.5">
                      Batch {selectedCheck.batch_code} — {selectedCheck.product_name}
                    </p>
                  </div>
                </div>

                {saveSuccess && (
                  <div className="mb-4 p-3 bg-[#EBF6EF] rounded-xl border border-[#C8E6D3] text-xs text-[#2E7D4C] flex items-center gap-2 animate-fade-in">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                    <span>Inspection recorded successfully! Linked to batch.</span>
                  </div>
                )}

                {/* Inspection Scope Info */}
                <div className="p-3 bg-[#FAF9F5] rounded-2xl border border-[#ECE9E1] space-y-2 mb-4 text-xs">
                  <div>
                    <span className="text-[10px] text-[#86928B] block">Required Inspection:</span>
                    <span className="font-semibold text-[#1A201C]">{selectedCheck.check_type}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 pt-1 border-t border-[#F0EFEA]">
                    <div>
                      <span className="text-[10px] text-[#86928B] block">Scheduled Due:</span>
                      <span className="font-mono text-[#1A201C]">{selectedCheck.due_at}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-[#86928B] block">Status:</span>
                      <span className="font-medium text-[#1A201C]">{selectedCheck.status}</span>
                    </div>
                  </div>
                </div>

                {/* Inspector Selection */}
                <div className="mb-4">
                  <label className="block text-xs font-semibold text-[#1A201C] mb-1">
                    Certified Inspector <span className="text-[#C53939]">*</span>
                  </label>
                  <select
                    value={activeInspector}
                    onChange={(e) => setActiveInspector(e.target.value)}
                    className="w-full bg-[#FAF9F5] px-3.5 py-2.5 rounded-xl border border-[#E0DED6] text-xs text-[#1A201C] focus:outline-none focus:border-[#557764]"
                  >
                    <option value="Marcus Vance">Marcus Vance (Lead QA)</option>
                    <option value="Elena Rostova">Elena Rostova (NDT Level II)</option>
                    <option value="David Chen">David Chen (Metrology Specialist)</option>
                  </select>
                </div>

                {/* Result Pill Selector (Pass, Needs Review, Fail) */}
                <div className="mb-4">
                  <label className="block text-xs font-semibold text-[#1A201C] mb-1.5">
                    Inspection Result <span className="text-[#C53939]">*</span>
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {(['Pass', 'Needs Review', 'Fail'] as QualityResult[]).map((res) => {
                      const isChosen = selectedResult === res;
                      const activeStyles = {
                        Pass: 'bg-[#2E7D4C] text-white border-[#2E7D4C] shadow-sm',
                        'Needs Review': 'bg-[#C2781D] text-white border-[#C2781D] shadow-sm',
                        Fail: 'bg-[#C53939] text-white border-[#C53939] shadow-sm',
                        Pending: ''
                      }[res];

                      return (
                        <button
                          key={res}
                          type="button"
                          onClick={() => setSelectedResult(res)}
                          className={`py-2 px-1 text-center rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                            isChosen
                              ? activeStyles
                              : 'bg-[#FAF9F5] text-[#55635B] border-[#E0DED6] hover:bg-[#F2EFE9]'
                          }`}
                        >
                          {res}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Observations Textarea */}
                <div className="mb-4">
                  <label className="block text-xs font-semibold text-[#1A201C] mb-1">
                    Observations & Defect Notes <span className="text-[#C53939]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={observations}
                    onChange={(e) => setObservations(e.target.value)}
                    placeholder="Enter calibrated measurements, tolerance variance, or visual defect notes..."
                    className="w-full bg-[#FAF9F5] p-3 rounded-xl border border-[#E0DED6] text-xs text-[#1A201C] focus:outline-none focus:border-[#557764]"
                  />
                  <span className="text-[10px] text-[#8E9B92] mt-1 block">
                    Recordings are permanently audited in batch traceability log.
                  </span>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4 border-t border-[#F0EFE8]">
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded-full bg-[#557764] text-white text-xs font-semibold hover:bg-[#486756] shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Inspection Record</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="lg:col-span-4 bg-white p-6 rounded-[24px] border border-[#E2E0D8] flex items-center justify-center text-xs text-[#8A968F]">
            Select an inspection from the worklist to record observations.
          </div>
        )}
      </div>

      {/* Schedule Inspection Modal */}
      {isNewModalOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-white rounded-[28px] max-w-md w-full p-6 border border-[#E2E0D8] shadow-2xl relative">
            <h3 className="text-lg font-bold text-[#1A201C] mb-1">
              Schedule Quality Check
            </h3>
            <p className="text-xs text-[#717E76] mb-5">
              Assign a mandatory verification check to an active batch.
            </p>

            <form onSubmit={handleScheduleInspection} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#1A201C] mb-1">
                  Target Batch
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

              <div>
                <label className="block text-xs font-semibold text-[#1A201C] mb-1">
                  Inspection Type
                </label>
                <input
                  type="text"
                  required
                  value={newCheckType}
                  onChange={(e) => setNewCheckType(e.target.value)}
                  className="w-full bg-[#FAF9F5] px-3.5 py-2.5 rounded-xl border border-[#E0DED6] text-xs text-[#1A201C] focus:outline-none focus:border-[#557764]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#1A201C] mb-1">
                    Inspector
                  </label>
                  <select
                    value={newInspector}
                    onChange={(e) => setNewInspector(e.target.value)}
                    className="w-full bg-[#FAF9F5] px-3.5 py-2.5 rounded-xl border border-[#E0DED6] text-xs text-[#1A201C] focus:outline-none focus:border-[#557764]"
                  >
                    <option value="Marcus Vance">Marcus Vance</option>
                    <option value="Elena Rostova">Elena Rostova</option>
                    <option value="David Chen">David Chen</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1A201C] mb-1">
                    Due Time
                  </label>
                  <input
                    type="text"
                    required
                    value={newDueTime}
                    onChange={(e) => setNewDueTime(e.target.value)}
                    className="w-full bg-[#FAF9F5] px-3.5 py-2.5 rounded-xl border border-[#E0DED6] text-xs text-[#1A201C] focus:outline-none focus:border-[#557764]"
                  />
                </div>
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsNewModalOpen(false)}
                  className="px-4 py-2 rounded-full border border-[#E0DED6] text-xs font-semibold text-[#66736C] hover:bg-[#FAF9F5]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-full bg-[#557764] text-white text-xs font-semibold hover:bg-[#486756] shadow-sm"
                >
                  Schedule Check
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
