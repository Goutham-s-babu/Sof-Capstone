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
  AlertTriangle,
  Tag,
  Sliders,
  X,
  Info
} from 'lucide-react';
import { useFloorFlow } from '../../context/FloorFlowContext';
import { KPICard } from '../../components/floorflow/KPICard';
import { StatusBadge } from '../../components/floorflow/StatusBadge';
import { QualityCheck, QualityResult, ProductCategory } from '../../types/floorflow';

export const QualityPage: React.FC = () => {
  const {
    qualityChecks,
    batches,
    kpis,
    selectedQualityCheckId,
    setSelectedQualityCheckId,
    recordQualityCheck,
    addQualityCheck,
    activeCategory,
    activeWorkflow,
    searchQuery: globalSearch
  } = useFloorFlow();

  const [categoryScope, setCategoryScope] = useState<'Active' | 'All'>('Active');
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
  const [newCheckType, setNewCheckType] = useState(activeWorkflow.defaultInspectionTypes[0] || 'High-Pot & Electrical Isolation');
  const [customCheckType, setCustomCheckType] = useState('');
  const [isCustomType, setIsCustomType] = useState(false);
  const [newInspector, setNewInspector] = useState('Marcus Vance');
  const [newDueTime, setNewDueTime] = useState('14:30 PM');

  // Filtered checks list
  const filteredChecks = useMemo(() => {
    const q = (localSearch || globalSearch).toLowerCase().trim();
    return qualityChecks.filter(check => {
      if (categoryScope === 'Active' && check.category !== activeCategory) {
        return false;
      }

      const matchSearch = !q ||
        check.batch_code.toLowerCase().includes(q) ||
        check.product_name.toLowerCase().includes(q) ||
        check.check_type.toLowerCase().includes(q) ||
        (check.category && check.category.toLowerCase().includes(q)) ||
        check.inspector.toLowerCase().includes(q);

      const matchResult = filterResult === 'All' || check.result === filterResult;
      const matchStatus = filterStatus === 'All' || check.status === filterStatus;

      return matchSearch && matchResult && matchStatus;
    });
  }, [qualityChecks, localSearch, globalSearch, categoryScope, activeCategory, filterResult, filterStatus]);

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
    const finalCheckType = isCustomType && customCheckType.trim() ? customCheckType.trim() : newCheckType;

    addQualityCheck({
      category: batch.category || activeCategory,
      batch_id: batch.id,
      batch_code: batch.batch_code,
      product_name: batch.product_name,
      check_type: finalCheckType,
      inspector: newInspector,
      due_at: newDueTime,
      result: 'Pending',
      observations: '',
      status: 'Scheduled'
    });
    setIsNewModalOpen(false);
    setCustomCheckType('');
    setIsCustomType(false);
  };

  return (
    <div className="space-y-6 pb-12 animate-fade-in">
      {/* Page Title & Schedule Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-1">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl md:text-2xl font-bold text-[#1A201C] tracking-tight">
              Quality Checks
            </h2>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#EDF3F0] text-[#3D5B4A] border border-[#D5E2DB]">
              {categoryScope === 'Active' ? `${activeCategory} Standards` : 'All Categories'}
            </span>
          </div>
          <p className="text-xs text-[#717E76] mt-0.5">
            Configurable testing verification for {activeCategory} • Pass/Fail auditing & quarantine control
          </p>
        </div>

        <button
          onClick={() => {
            setNewCheckType(activeWorkflow.defaultInspectionTypes[0] || 'Electrical Isolation');
            setIsNewModalOpen(true);
          }}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#1A201C] text-white text-xs font-semibold hover:bg-[#323D36] shadow-[0_3px_12px_rgba(26,32,28,0.25)] transition-all cursor-pointer self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Schedule {activeCategory} Inspection</span>
        </button>
      </div>

      {/* Illustrative Notice & AI Safeguard Banner */}
      <div className="bg-[#FAF9F5] border border-[#E2E0D8] rounded-2xl p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[#6A7870]">
        <div className="flex items-center gap-2">
          <Info className="w-4 h-4 text-[#557764] flex-shrink-0" />
          <span>
            <strong>Configurable Testing Parameters:</strong> Inspection types adapt to each product category (e.g. electrical surge, lumen output for Lighting; RPM, balance, noise for Fans).
          </span>
        </div>
        <span className="text-[11px] font-semibold text-[#8C9890] bg-white px-2.5 py-1 rounded-full border border-[#E2E0D8] whitespace-nowrap">
          Inspector Sign-off Required
        </span>
      </div>

      {/* 4 KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard
          label="Checks Scheduled"
          value={String(kpis.qualityChecksScheduled).padStart(2, '0')}
          subtitle={`Plan for ${activeCategory}`}
          badge="Shift Target"
        />
        <KPICard
          label="Checks Completed"
          value={String(kpis.qualityChecksCompleted).padStart(2, '0')}
          subtitle={`${kpis.qualityCompletionRate}% signoff rate`}
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
          subtitle="Non-conforming lots quarantined"
          badge="Quarantine"
        />
      </div>

      {/* Main Grid: Worklist (65%) & Recording Interface (35%) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Inspection Worklist Table (8 cols) */}
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
                    {activeCategory} Only
                  </button>
                  <button
                    onClick={() => setCategoryScope('All')}
                    className={`px-3 py-1 rounded-full font-medium transition-all ${
                      categoryScope === 'All'
                        ? 'bg-white text-[#1A201C] font-semibold shadow-xs'
                        : 'text-[#6C7A72] hover:text-[#1A201C]'
                    }`}
                  >
                    All Categories
                  </button>
                </div>

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
                    <th className="py-3 px-3">Category</th>
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
                        <td className="py-3.5 px-3">
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#FAF9F5] text-[#55635B] border border-[#E2E0D8]">
                            {qc.category || activeCategory}
                          </span>
                        </td>
                        <td className="py-3.5 px-3 font-medium text-[#1A201C]">
                          {qc.product_name}
                        </td>
                        <td className="py-3.5 px-3 text-[#526058] max-w-[200px] truncate" title={qc.check_type}>
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
                            className={`p-1.5 rounded-lg transition-colors ${
                              isSelected
                                ? 'bg-[#557764] text-white'
                                : 'text-[#7B8881] hover:text-[#1A201C] hover:bg-white'
                            }`}
                          >
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              {filteredChecks.length === 0 && (
                <div className="text-center py-12 text-xs text-[#8A968F]">
                  No quality checks recorded for {categoryScope === 'Active' ? activeCategory : 'the active filters'}.
                </div>
              )}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-[#F0EFE8] flex items-center justify-between text-xs text-[#7B8881]">
            <span>Showing {filteredChecks.length} inspection records</span>
            <span className="text-[#557764] font-medium">Standards Mode: Configurable</span>
          </div>
        </div>

        {/* Right: Inspection Recording Form (4 cols) */}
        {selectedCheck ? (
          <div className="lg:col-span-4 bg-white p-6 rounded-[24px] border border-[#E2E0D8] shadow-[0_4px_16px_rgba(30,40,35,0.03)] flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between pb-4 border-b border-[#F0EFE9]">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-bold text-[#1A201C]">
                      Record Verification Sign-off
                    </h3>
                  </div>
                  <p className="text-xs text-[#717E76] mt-0.5">
                    Target: <span className="font-semibold text-[#1A201C]">{selectedCheck.batch_code}</span> ({selectedCheck.product_name})
                  </p>
                  <span className="inline-flex items-center gap-1 mt-1 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-[#EDF3F0] text-[#3D5B4A]">
                    <Tag className="w-2.5 h-2.5" />
                    {selectedCheck.category || activeCategory}
                  </span>
                </div>
                <StatusBadge status={selectedCheck.result} size="sm" />
              </div>

              {/* Inspection Parameters Strip */}
              <div className="my-4 p-3 bg-[#FAF9F5] rounded-2xl border border-[#ECE9E1] text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-[#78857E]">Inspection Type:</span>
                  <span className="font-semibold text-[#1A201C] text-right ml-2">{selectedCheck.check_type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#78857E]">Assigned Inspector:</span>
                  <span className="font-semibold text-[#1A201C]">{selectedCheck.inspector}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#78857E]">Scheduled Due:</span>
                  <span className="font-mono text-[#557764] font-semibold">{selectedCheck.due_at}</span>
                </div>
              </div>

              <form onSubmit={handleSaveInspection} className="space-y-4">
                {/* Result Radios: Pass, Needs Review, Fail */}
                <div>
                  <label className="block text-xs font-bold text-[#1A201C] uppercase tracking-wider mb-2">
                    Inspection Outcome
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {(['Pass', 'Needs Review', 'Fail'] as QualityResult[]).map((res) => {
                      const isChecked = selectedResult === res;
                      const colors = {
                        Pass: isChecked ? 'bg-[#EBF6EF] text-[#2E7D4C] border-[#2E7D4C]' : 'border-[#E0DED6]',
                        'Needs Review': isChecked ? 'bg-[#FEF5E7] text-[#C2781D] border-[#C2781D]' : 'border-[#E0DED6]',
                        Fail: isChecked ? 'bg-[#FDF0F0] text-[#C53939] border-[#C53939]' : 'border-[#E0DED6]',
                        Pending: ''
                      }[res];

                      return (
                        <button
                          key={res}
                          type="button"
                          onClick={() => setSelectedResult(res)}
                          className={`py-2 px-2 rounded-xl border text-xs font-bold transition-all ${colors} hover:shadow-xs`}
                        >
                          {res}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Inspector Input */}
                <div>
                  <label className="block text-xs font-semibold text-[#1A201C] mb-1">
                    Inspector Name
                  </label>
                  <input
                    type="text"
                    required
                    value={activeInspector}
                    onChange={(e) => setActiveInspector(e.target.value)}
                    className="w-full bg-[#FAF9F5] px-3.5 py-2 rounded-xl border border-[#E0DED6] text-xs text-[#1A201C] focus:outline-none focus:border-[#557764]"
                  />
                </div>

                {/* Observations & Test Readings */}
                <div>
                  <label className="block text-xs font-semibold text-[#1A201C] mb-1">
                    Readings & Laboratory Observations
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={observations}
                    onChange={(e) => setObservations(e.target.value)}
                    placeholder="E.g. Output wattage 18.2W, Surge immunity passed at 4kV, no leakage detected..."
                    className="w-full bg-[#FAF9F5] p-3 rounded-xl border border-[#E0DED6] text-xs text-[#1A201C] focus:outline-none focus:border-[#557764]"
                  />
                </div>

                {selectedResult === 'Fail' && (
                  <div className="p-3 bg-[#FDF0F0] rounded-xl border border-[#F7CECE] text-xs text-[#C53939] flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>Marking as Fail will automatically set batch {selectedCheck.batch_code} On Hold for quarantine.</span>
                  </div>
                )}

                {saveSuccess && (
                  <div className="p-2.5 bg-[#EDF6EE] rounded-xl border border-[#CCE5D3] text-xs text-[#2D6A4F] font-semibold flex items-center gap-1.5 animate-fade-in">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Inspection recorded successfully!</span>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded-full bg-[#1A201C] text-white text-xs font-semibold hover:bg-[#323D36] transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <Save className="w-3.5 h-3.5" />
                  Sign-off Quality Check
                </button>
              </form>
            </div>
          </div>
        ) : (
          <div className="lg:col-span-4 bg-white p-6 rounded-[24px] border border-[#E2E0D8] flex items-center justify-center text-xs text-[#8A968F]">
            Select an inspection from the worklist to view or record sign-off.
          </div>
        )}
      </div>

      {/* SCHEDULE NEW INSPECTION MODAL */}
      {isNewModalOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-white rounded-[28px] max-w-md w-full p-6 border border-[#E2E0D8] shadow-2xl relative">
            <button
              onClick={() => setIsNewModalOpen(false)}
              className="absolute right-5 top-5 p-1 rounded-full text-[#7B8881] hover:text-[#1A201C] hover:bg-[#F2EFE9]"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-lg font-bold text-[#1A201C] mb-1">
              Schedule Quality Check
            </h3>
            <p className="text-xs text-[#717E76] mb-5">
              Category: <strong>{activeCategory}</strong>. Configure verification standard.
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
                  {batches.filter(b => b.category === activeCategory).map((b) => (
                    <option key={b.id} value={b.id}>
                      {b.batch_code} — {b.product_name} ({b.current_stage})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1A201C] mb-1">
                  Inspection Standard / Type
                </label>
                {!isCustomType ? (
                  <select
                    value={newCheckType}
                    onChange={(e) => {
                      if (e.target.value === '__custom__') {
                        setIsCustomType(true);
                      } else {
                        setNewCheckType(e.target.value);
                      }
                    }}
                    className="w-full bg-[#FAF9F5] px-3.5 py-2.5 rounded-xl border border-[#E0DED6] text-xs font-medium text-[#1A201C] focus:outline-none focus:border-[#557764]"
                  >
                    {activeWorkflow.defaultInspectionTypes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                    <option value="__custom__">+ Enter Custom Inspection Standard...</option>
                  </select>
                ) : (
                  <div className="space-y-1.5">
                    <input
                      type="text"
                      autoFocus
                      required
                      placeholder="Enter custom testing protocol name..."
                      value={customCheckType}
                      onChange={(e) => setCustomCheckType(e.target.value)}
                      className="w-full bg-[#FAF9F5] px-3.5 py-2 rounded-xl border border-[#E0DED6] text-xs text-[#1A201C]"
                    />
                    <button
                      type="button"
                      onClick={() => setIsCustomType(false)}
                      className="text-[11px] text-[#557764] hover:underline"
                    >
                      ← Back to preset category standards
                    </button>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#1A201C] mb-1">
                    Inspector
                  </label>
                  <input
                    type="text"
                    required
                    value={newInspector}
                    onChange={(e) => setNewInspector(e.target.value)}
                    className="w-full bg-[#FAF9F5] px-3.5 py-2.5 rounded-xl border border-[#E0DED6] text-xs text-[#1A201C] focus:outline-none focus:border-[#557764]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1A201C] mb-1">
                    Scheduled Due Time
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
                  className="px-5 py-2 rounded-full bg-[#1A201C] text-white text-xs font-semibold hover:bg-[#323D36] shadow-sm"
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
