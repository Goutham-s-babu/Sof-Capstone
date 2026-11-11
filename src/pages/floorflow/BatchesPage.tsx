import React, { useState, useMemo } from 'react';
import {
  Layers,
  Search,
  Filter,
  Plus,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  PauseCircle,
  PlayCircle,
  Clock,
  User,
  History,
  X,
  ChevronRight,
  Check,
  Tag
} from 'lucide-react';
import { useFloorFlow } from '../../context/FloorFlowContext';
import { KPICard } from '../../components/floorflow/KPICard';
import { StatusBadge } from '../../components/floorflow/StatusBadge';
import {
  Batch,
  ProductionStageName,
  BatchStatus,
  ProductCategory
} from '../../types/floorflow';

export const BatchesPage: React.FC = () => {
  const {
    batches,
    kpis,
    selectedBatchId,
    setSelectedBatchId,
    updateBatchStage,
    updateBatchStatus,
    addBatch,
    activityLogs,
    products,
    categoryProducts,
    activeCategory,
    activeWorkflow,
    searchQuery: globalSearch
  } = useFloorFlow();

  // Local filters
  const [categoryScope, setCategoryScope] = useState<'Active' | 'All'>('Active');
  const [stageFilter, setStageFilter] = useState<string>('All');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [localSearch, setLocalSearch] = useState<string>('');
  const [sortBy, setSortBy] = useState<'newest' | 'code' | 'progress'>('newest');

  // Modals & Drawers
  const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>(false);
  const [newBatchCode, setNewBatchCode] = useState<string>('B-LT-109');
  const [newProductId, setNewProductId] = useState<string>(categoryProducts[0]?.id || products[0]?.id || '');
  const [newCategory, setNewCategory] = useState<ProductCategory>(activeCategory);
  const [newPlannedQty, setNewPlannedQty] = useState<number>(350);
  const [newTargetLine, setNewTargetLine] = useState<string>(activeWorkflow.stages[0]?.targetLine || 'Main Assembly Line');
  const [newNotes, setNewNotes] = useState<string>('');

  // Selected batch object
  const selectedBatch = useMemo(() => {
    return batches.find(b => b.id === selectedBatchId) || batches[0] || null;
  }, [batches, selectedBatchId]);

  // Filtered batch register
  const filteredBatches = useMemo(() => {
    const q = (localSearch || globalSearch).toLowerCase().trim();
    return batches.filter(b => {
      // Category filter
      if (categoryScope === 'Active' && b.category !== activeCategory) {
        return false;
      }

      const matchSearch = !q || 
        b.batch_code.toLowerCase().includes(q) || 
        b.product_name.toLowerCase().includes(q) ||
        (b.category && b.category.toLowerCase().includes(q)) ||
        b.assigned_to.toLowerCase().includes(q);

      const matchStage = stageFilter === 'All' || b.current_stage === stageFilter;
      const matchStatus = statusFilter === 'All' || b.status === statusFilter;

      return matchSearch && matchStage && matchStatus;
    }).sort((a, b) => {
      if (sortBy === 'code') return a.batch_code.localeCompare(b.batch_code);
      if (sortBy === 'progress') {
        const pA = a.completed_quantity / a.planned_quantity;
        const pB = b.completed_quantity / b.planned_quantity;
        return pB - pA;
      }
      return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
    });
  }, [batches, localSearch, globalSearch, categoryScope, activeCategory, stageFilter, statusFilter, sortBy]);

  // Production stages derived from active category workflow
  const workflowStagesList = useMemo(() => {
    return [...activeWorkflow.stages.map(s => s.name), 'Completed'];
  }, [activeWorkflow]);

  const getStepStatus = (batch: Batch, stepName: string) => {
    if (batch.status === 'Completed') return 'completed';
    if (stepName === batch.current_stage) return 'current';
    
    const currentIndex = workflowStagesList.indexOf(batch.current_stage);
    const stepIndex = workflowStagesList.indexOf(stepName);
    if (currentIndex !== -1 && stepIndex !== -1 && stepIndex < currentIndex) return 'completed';
    return 'upcoming';
  };

  const handleCreateBatch = (e: React.FormEvent) => {
    e.preventDefault();
    const product = products.find(p => p.id === newProductId) || categoryProducts[0] || products[0];
    const initialStage = activeWorkflow.stages[0]?.name || 'PCB / SMT Preparation';

    addBatch({
      batch_code: newBatchCode,
      category: newCategory,
      product_id: product.id,
      product_name: product.name,
      planned_quantity: Number(newPlannedQty),
      completed_quantity: 0,
      current_stage: initialStage,
      status: 'In Progress',
      assigned_to: 'Operator Shift Lead',
      target_line: newTargetLine,
      started_at: new Date().toISOString(),
      notes: newNotes
    });
    setIsCreateModalOpen(false);
  };

  const batchLogs = useMemo(() => {
    if (!selectedBatch) return [];
    return activityLogs.filter(l => l.entity_id === selectedBatch.id);
  }, [activityLogs, selectedBatch]);

  return (
    <div className="space-y-6 pb-12 animate-fade-in">
      {/* Top Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-1">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl md:text-2xl font-bold text-[#1A201C] tracking-tight">
              Production Batches
            </h2>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#EDF3F0] text-[#3D5B4A] border border-[#D5E2DB]">
              {categoryScope === 'Active' ? `${activeCategory} Batches` : 'All Categories'}
            </span>
          </div>
          <p className="text-xs text-[#717E76] mt-0.5">
            Active shopfloor batch routing, progress tracking and stage yields
          </p>
        </div>

        <button
          onClick={() => {
            const prefix = activeCategory.slice(0, 2).toUpperCase();
            setNewBatchCode(`B-${prefix}-${Math.floor(110 + Math.random() * 80)}`);
            setNewCategory(activeCategory);
            setNewProductId(categoryProducts[0]?.id || products[0]?.id || '');
            setNewTargetLine(activeWorkflow.stages[0]?.targetLine || 'Main Line');
            setIsCreateModalOpen(true);
          }}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#1A201C] text-white text-xs font-semibold hover:bg-[#323D36] shadow-[0_3px_12px_rgba(26,32,28,0.25)] transition-all cursor-pointer self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>New {activeCategory} Batch</span>
        </button>
      </div>

      {/* 4 KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard
          label="In Production"
          value={String(kpis.activeBatchesCount).padStart(2, '0')}
          subtitle={`Active in ${activeCategory}`}
          badge="Live Floor"
        />
        <KPICard
          label="Waiting"
          value={String(kpis.waitingBatchesCount).padStart(2, '0')}
          subtitle="Awaiting next line stage"
          badge="Action Req."
        />
        <KPICard
          label="Completed Today"
          value={String(kpis.completedBatchesToday).padStart(2, '0')}
          subtitle="Cleared final packing & QC"
          badge="Verified"
        />
        <KPICard
          label="On Hold"
          value={String(kpis.onHoldBatchesCount).padStart(2, '0')}
          subtitle="Quarantined or pending signoff"
          badge="Hold"
        />
      </div>

      {/* Main Content Area: Left Table (8 Cols) & Right Detail Panel (4 Cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Batch Register Table */}
        <div className="lg:col-span-8 bg-white p-6 rounded-[24px] border border-[#E2E0D8] shadow-[0_4px_16px_rgba(30,40,35,0.03)] flex flex-col justify-between">
          <div>
            {/* Filter Toolbar */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 mb-4 border-b border-[#F0EFE9]">
              <div className="relative flex-1 max-w-sm">
                <Search className="w-4 h-4 text-[#8A968F] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Filter by Batch ID, product, or category..."
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

                {/* Stage Filter */}
                <select
                  value={stageFilter}
                  onChange={(e) => setStageFilter(e.target.value)}
                  className="bg-[#FAF9F5] px-3 py-2 rounded-full border border-[#E5E3DC] text-xs text-[#526058] font-medium focus:outline-none cursor-pointer"
                >
                  <option value="All">All Stages</option>
                  {workflowStagesList.map((stg) => (
                    <option key={stg} value={stg}>{stg}</option>
                  ))}
                </select>

                {/* Status Filter */}
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="bg-[#FAF9F5] px-3 py-2 rounded-full border border-[#E5E3DC] text-xs text-[#526058] font-medium focus:outline-none cursor-pointer"
                >
                  <option value="All">All Statuses</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Waiting">Waiting</option>
                  <option value="On Hold">On Hold</option>
                  <option value="Completed">Completed</option>
                </select>

                {/* Sort */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-[#FAF9F5] px-3 py-2 rounded-full border border-[#E5E3DC] text-xs text-[#526058] font-medium focus:outline-none cursor-pointer"
                >
                  <option value="newest">Sort: Start Time</option>
                  <option value="code">Sort: Batch Code</option>
                  <option value="progress">Sort: Progress %</option>
                </select>
              </div>
            </div>

            {/* Table with Product Category, Product Name, Batch ID, Planned, Completed, Current Stage, Status */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#ECEAE2] text-[11px] font-semibold text-[#808C84] uppercase tracking-wider">
                    <th className="py-3 px-3">Batch ID</th>
                    <th className="py-3 px-3">Category</th>
                    <th className="py-3 px-3">Product Name</th>
                    <th className="py-3 px-3 text-right">Planned</th>
                    <th className="py-3 px-3 text-right">Completed</th>
                    <th className="py-3 px-3">Current Stage</th>
                    <th className="py-3 px-3">Status</th>
                    <th className="py-3 px-3 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F4F3EE] text-xs">
                  {filteredBatches.map((batch) => {
                    const isSelected = selectedBatch?.id === batch.id;
                    const percent = Math.round((batch.completed_quantity / batch.planned_quantity) * 100);

                    return (
                      <tr
                        key={batch.id}
                        onClick={() => setSelectedBatchId(batch.id)}
                        className={`transition-colors cursor-pointer group ${
                          isSelected ? 'bg-[#F4F7F5]' : 'hover:bg-[#FAF9F5]'
                        }`}
                      >
                        <td className="py-3.5 px-3">
                          <span className="font-mono font-bold text-[#1A201C] group-hover:text-[#557764] transition-colors">
                            {batch.batch_code}
                          </span>
                        </td>
                        <td className="py-3.5 px-3">
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#FAF9F5] text-[#55635B] border border-[#E2E0D8]">
                            {batch.category || 'General'}
                          </span>
                        </td>
                        <td className="py-3.5 px-3 font-medium text-[#1A201C]">
                          {batch.product_name}
                        </td>
                        <td className="py-3.5 px-3 text-right font-mono text-[#526058]">
                          {batch.planned_quantity}
                        </td>
                        <td className="py-3.5 px-3 text-right">
                          <div className="inline-flex flex-col items-end">
                            <span className="font-mono font-semibold text-[#1A201C]">
                              {batch.completed_quantity}
                            </span>
                            <span className="text-[10px] text-[#86928B]">{percent}%</span>
                          </div>
                        </td>
                        <td className="py-3.5 px-3">
                          <span className="inline-flex items-center gap-1.5 font-medium text-[#2F3B34]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#557764]" />
                            {batch.current_stage}
                          </span>
                        </td>
                        <td className="py-3.5 px-3">
                          <StatusBadge status={batch.status} size="sm" />
                        </td>
                        <td className="py-3.5 px-3 text-center">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedBatchId(batch.id);
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

              {filteredBatches.length === 0 && (
                <div className="text-center py-12 text-xs text-[#8A968F]">
                  No production batches found for {categoryScope === 'Active' ? activeCategory : 'the selected criteria'}.
                </div>
              )}
            </div>
          </div>

          {/* Table Footer Count */}
          <div className="mt-4 pt-3 border-t border-[#F0EFE8] flex items-center justify-between text-xs text-[#7B8881]">
            <span>Showing {filteredBatches.length} batches</span>
            <span className="text-[#557764] font-medium">Category: {categoryScope === 'Active' ? activeCategory : 'All Categories'}</span>
          </div>
        </div>

        {/* Right: Selected Batch Detail Panel (4 Cols) */}
        {selectedBatch ? (
          <div className="lg:col-span-4 bg-white p-6 rounded-[24px] border border-[#E2E0D8] shadow-[0_4px_16px_rgba(30,40,35,0.03)] flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="flex items-start justify-between pb-4 border-b border-[#F0EFE9]">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold font-mono text-[#1A201C]">
                      {selectedBatch.batch_code}
                    </h3>
                    <StatusBadge status={selectedBatch.status} size="sm" />
                  </div>
                  <p className="text-xs text-[#6F7C74] font-medium mt-0.5">
                    {selectedBatch.product_name}
                  </p>
                  <span className="inline-flex items-center gap-1 mt-1 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-[#EDF3F0] text-[#3D5B4A]">
                    <Tag className="w-2.5 h-2.5" />
                    {selectedBatch.category}
                  </span>
                </div>
                <span className="text-[11px] text-[#8C9891] px-2 py-1 bg-[#FAF9F5] rounded-lg border border-[#ECEAE2]">
                  {selectedBatch.target_line || 'Main Line'}
                </span>
              </div>

              {/* Specs Strip */}
              <div className="grid grid-cols-2 gap-2 my-4 p-3 bg-[#FAF9F5] rounded-2xl border border-[#ECE9E1] text-xs">
                <div>
                  <span className="text-[10px] text-[#86928B] block">Planned Units:</span>
                  <span className="font-bold text-[#1A201C]">{selectedBatch.planned_quantity}</span>
                </div>
                <div>
                  <span className="text-[10px] text-[#86928B] block">Completed Units:</span>
                  <span className="font-bold text-[#557764]">
                    {selectedBatch.completed_quantity} ({Math.round((selectedBatch.completed_quantity / selectedBatch.planned_quantity) * 100)}%)
                  </span>
                </div>
                <div className="mt-1">
                  <span className="text-[10px] text-[#86928B] block">Operator / Lead:</span>
                  <span className="font-medium text-[#1A201C] truncate block">{selectedBatch.assigned_to}</span>
                </div>
                <div className="mt-1">
                  <span className="text-[10px] text-[#86928B] block">Started At:</span>
                  <span className="font-medium text-[#1A201C]">Today, 08:30</span>
                </div>
              </div>

              {selectedBatch.notes && (
                <div className="mb-4 p-2.5 bg-[#FEF6EB] rounded-xl border border-[#F8DDBB] text-xs text-[#A05C10]">
                  <span className="font-semibold block text-[11px]">Active Note:</span>
                  {selectedBatch.notes}
                </div>
              )}

              {/* Production Timeline Stepper */}
              <div className="mb-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#79857E] mb-3">
                  Production Line Routing
                </h4>
                <div className="space-y-3 relative before:absolute before:left-3.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#EAE8E0]">
                  {workflowStagesList.map((stg) => {
                    const status = getStepStatus(selectedBatch, stg);
                    return (
                      <div key={stg} className="relative flex items-center gap-3 pl-1 text-xs">
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 z-10 text-[10px] font-bold ${
                            status === 'completed'
                              ? 'bg-[#557764] text-white shadow-xs'
                              : status === 'current'
                              ? 'bg-[#1A201C] text-white ring-4 ring-[#EAE8E0]'
                              : 'bg-white border-2 border-[#D5D2C8] text-[#8E9B92]'
                          }`}
                        >
                          {status === 'completed' ? <Check className="w-3 h-3" /> : ''}
                        </div>
                        <div className="flex-1 flex items-center justify-between">
                          <span
                            className={`font-semibold ${
                              status === 'current'
                                ? 'text-[#1A201C]'
                                : status === 'completed'
                                ? 'text-[#557764]'
                                : 'text-[#8E9B92]'
                            }`}
                          >
                            {stg}
                          </span>
                          <span className="text-[10px] text-[#8A968F] capitalize">
                            {status}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Activity Log for this batch */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#79857E] mb-2">
                  Batch Activity Audit
                </h4>
                <div className="space-y-2 max-h-28 overflow-y-auto pr-1">
                  {batchLogs.length > 0 ? (
                    batchLogs.map((log) => (
                      <div key={log.id} className="p-2 rounded-xl bg-[#FAF9F5] border border-[#F0EFEA] text-[11px]">
                        <div className="flex justify-between font-medium text-[#1A201C]">
                          <span>{log.action}</span>
                          <span className="text-[10px] text-[#8E9B92]">Recent</span>
                        </div>
                        <p className="text-[#68756E] mt-0.5">
                          {log.new_value || log.previous_value}
                        </p>
                      </div>
                    ))
                  ) : (
                    <p className="text-[11px] text-[#8E9B92] italic">
                      No recent state transitions recorded.
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Quick Actions Footer */}
            <div className="mt-5 pt-4 border-t border-[#F0EFE8] space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    const currentIndex = workflowStagesList.indexOf(selectedBatch.current_stage);
                    if (currentIndex !== -1 && currentIndex < workflowStagesList.length - 1) {
                      const next = workflowStagesList[currentIndex + 1];
                      updateBatchStage(selectedBatch.id, next);
                    }
                  }}
                  disabled={selectedBatch.current_stage === 'Completed'}
                  className="w-full py-2 px-3 rounded-full bg-[#1A201C] text-white text-xs font-semibold hover:bg-[#343F38] disabled:opacity-50 transition-colors flex items-center justify-center gap-1.5"
                >
                  <PlayCircle className="w-3.5 h-3.5" />
                  Advance Stage
                </button>

                <button
                  onClick={() => {
                    const newStatus = selectedBatch.status === 'On Hold' ? 'In Progress' : 'On Hold';
                    updateBatchStatus(
                      selectedBatch.id,
                      newStatus,
                      newStatus === 'On Hold' ? 'Paused by supervisor' : 'Resumed'
                    );
                  }}
                  className={`w-full py-2 px-3 rounded-full text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 border ${
                    selectedBatch.status === 'On Hold'
                      ? 'bg-[#EBF6EF] text-[#2E7D4C] border-[#C8E6D3]'
                      : 'bg-[#FDF0F0] text-[#C53939] border-[#F7CECE]'
                  }`}
                >
                  <PauseCircle className="w-3.5 h-3.5" />
                  {selectedBatch.status === 'On Hold' ? 'Resume' : 'Put on Hold'}
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="lg:col-span-4 bg-white p-6 rounded-[24px] border border-[#E2E0D8] flex items-center justify-center text-xs text-[#8A968F]">
            Select a batch from the register to inspect details.
          </div>
        )}
      </div>

      {/* Create New Batch Modal */}
      {isCreateModalOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-white rounded-[28px] max-w-md w-full p-6 border border-[#E2E0D8] shadow-2xl relative">
            <button
              onClick={() => setIsCreateModalOpen(false)}
              className="absolute right-5 top-5 p-1 rounded-full text-[#7B8881] hover:text-[#1A201C] hover:bg-[#F2EFE9]"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-lg font-bold text-[#1A201C] mb-1">
              Initialize New Production Batch
            </h3>
            <p className="text-xs text-[#717E76] mb-5">
              Generate work order routing for <strong>{newCategory}</strong>.
            </p>

            <form onSubmit={handleCreateBatch} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#1A201C] mb-1">
                  Batch Code
                </label>
                <input
                  type="text"
                  required
                  value={newBatchCode}
                  onChange={(e) => setNewBatchCode(e.target.value)}
                  className="w-full bg-[#FAF9F5] px-3.5 py-2.5 rounded-xl border border-[#E0DED6] text-xs font-mono font-bold text-[#1A201C] focus:outline-none focus:border-[#557764]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1A201C] mb-1">
                  Product
                </label>
                <select
                  value={newProductId}
                  onChange={(e) => setNewProductId(e.target.value)}
                  className="w-full bg-[#FAF9F5] px-3.5 py-2.5 rounded-xl border border-[#E0DED6] text-xs font-medium text-[#1A201C] focus:outline-none focus:border-[#557764]"
                >
                  {products.filter(p => p.category === newCategory).map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name} ({p.product_code})
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#1A201C] mb-1">
                    Planned Quantity
                  </label>
                  <input
                    type="number"
                    min="1"
                    required
                    value={newPlannedQty}
                    onChange={(e) => setNewPlannedQty(Number(e.target.value))}
                    className="w-full bg-[#FAF9F5] px-3.5 py-2.5 rounded-xl border border-[#E0DED6] text-xs font-bold text-[#1A201C] focus:outline-none focus:border-[#557764]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1A201C] mb-1">
                    Target Line
                  </label>
                  <input
                    type="text"
                    required
                    value={newTargetLine}
                    onChange={(e) => setNewTargetLine(e.target.value)}
                    className="w-full bg-[#FAF9F5] px-3.5 py-2.5 rounded-xl border border-[#E0DED6] text-xs text-[#1A201C] focus:outline-none focus:border-[#557764]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1A201C] mb-1">
                  Routing Notes
                </label>
                <textarea
                  rows={2}
                  value={newNotes}
                  onChange={(e) => setNewNotes(e.target.value)}
                  placeholder="Optional material or priority notes..."
                  className="w-full bg-[#FAF9F5] px-3.5 py-2 rounded-xl border border-[#E0DED6] text-xs text-[#1A201C] focus:outline-none focus:border-[#557764]"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsCreateModalOpen(false)}
                  className="px-4 py-2 rounded-full border border-[#E0DED6] text-xs font-semibold text-[#66736C] hover:bg-[#FAF9F5]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-full bg-[#1A201C] text-white text-xs font-semibold hover:bg-[#323D36] shadow-sm"
                >
                  Create Batch
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
