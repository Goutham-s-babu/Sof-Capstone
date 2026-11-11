import React, { useState } from 'react';
import {
  Maximize2,
  AlertTriangle,
  Wrench,
  Settings,
  Server,
  Layers,
  CheckCircle2,
  Cpu,
  Zap,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  Clock,
  Sparkles,
  Info
} from 'lucide-react';
import { useFloorFlow } from '../../context/FloorFlowContext';
import { ProductCategory } from '../../types/floorflow';

interface NodeData {
  id: string;
  name: string;
  code: string;
  status: 'input' | 'running' | 'warning' | 'maintenance' | 'pending';
  statusLabel: string;
  badgeTop?: string;
  iconType: 'input' | 'mill' | 'pressA' | 'pressB' | 'final';
  subtitle: string;
  cycleTime: string;
  activeBatch?: string;
}

export const GamifiedLineOverview: React.FC = () => {
  const {
    activeCategory,
    activeWorkflow,
    categoryBatches,
    setCurrentRoute,
    setSelectedStageId,
    kpis
  } = useFloorFlow();

  const [activeFilter, setActiveFilter] = useState<'all' | 'critical' | 'bottleneck'>('all');
  const [activeHoverNode, setActiveHoverNode] = useState<string | null>(null);

  // Category specific line code
  const lineCodeMap: Record<ProductCategory, string> = {
    'Lighting': 'PL-001-A • Line 2 - High Velocity',
    'Fans': 'PL-002-F • Fan Assembly Cell 1',
    'Wires': 'PL-003-W • Continuous Extrusion Line',
    'Switchgear': 'PL-004-S • MCB Automation Rack',
    'Water Heaters': 'PL-005-H • Geyser Fabrication Cell'
  };

  // Node configurations adapted for the 5 categories matching the exact layout of the reference image
  const getNodeConfigurations = (cat: ProductCategory): {
    inputNode: NodeData;
    millNode: NodeData;
    branchTop: NodeData;
    branchBottom: NodeData;
    reconvergeNode: NodeData;
  } => {
    switch (cat) {
      case 'Fans':
        return {
          inputNode: {
            id: 'fn-node-1',
            name: 'Motor Prep',
            code: 'MTR-01',
            status: 'input',
            statusLabel: 'Input Feed',
            iconType: 'input',
            subtitle: 'SENS-01',
            cycleTime: '25 min',
            activeBatch: 'B-FN-201'
          },
          millNode: {
            id: 'fn-node-2',
            name: 'Stator Insertion',
            code: 'INS-02',
            status: 'running',
            statusLabel: 'Running',
            badgeTop: 'Running',
            iconType: 'mill',
            subtitle: 'SENS-02',
            cycleTime: '30 min',
            activeBatch: 'B-FN-202'
          },
          branchTop: {
            id: 'fn-node-3a',
            name: 'Blade Assembly',
            code: 'BLD-A',
            status: 'warning',
            statusLabel: 'Warning!',
            iconType: 'pressA',
            subtitle: 'Warning!',
            cycleTime: '45 min',
            activeBatch: 'B-FN-201'
          },
          branchBottom: {
            id: 'fn-node-3b',
            name: 'Dynamic Balancing',
            code: 'BAL-B',
            status: 'maintenance',
            statusLabel: 'Maintenance',
            iconType: 'pressB',
            subtitle: 'Maintenance',
            cycleTime: '35 min'
          },
          reconvergeNode: {
            id: 'fn-node-4',
            name: 'Final Pack',
            code: 'PCK-04',
            status: 'pending',
            statusLabel: 'Not Yet',
            iconType: 'final',
            subtitle: 'Not Yet',
            cycleTime: '20 min'
          }
        };

      case 'Wires':
        return {
          inputNode: {
            id: 'wr-node-1',
            name: 'Rod Intake',
            code: 'ROD-01',
            status: 'input',
            statusLabel: 'Input Feed',
            iconType: 'input',
            subtitle: 'SENS-01',
            cycleTime: '20 min',
            activeBatch: 'B-WR-301'
          },
          millNode: {
            id: 'wr-node-2',
            name: 'Drawing Mill',
            code: 'MIL-02',
            status: 'running',
            statusLabel: 'Running',
            badgeTop: 'Running',
            iconType: 'mill',
            subtitle: 'SENS-02',
            cycleTime: '25 min',
            activeBatch: 'B-WR-302'
          },
          branchTop: {
            id: 'wr-node-3a',
            name: 'PVC Extrusion - A',
            code: 'EXT-A',
            status: 'warning',
            statusLabel: 'Warning!',
            iconType: 'pressA',
            subtitle: 'Warning!',
            cycleTime: '40 min',
            activeBatch: 'B-WR-301'
          },
          branchBottom: {
            id: 'wr-node-3b',
            name: 'Spark Tester - B',
            code: 'TST-B',
            status: 'maintenance',
            statusLabel: 'Maintenance',
            iconType: 'pressB',
            subtitle: 'Maintenance',
            cycleTime: '20 min'
          },
          reconvergeNode: {
            id: 'wr-node-4',
            name: 'Coil Spooler',
            code: 'SPL-04',
            status: 'pending',
            statusLabel: 'Not Yet',
            iconType: 'final',
            subtitle: 'Not Yet',
            cycleTime: '20 min'
          }
        };

      case 'Switchgear':
        return {
          inputNode: {
            id: 'sw-node-1',
            name: 'Contact Prep',
            code: 'CNT-01',
            status: 'input',
            statusLabel: 'Input Feed',
            iconType: 'input',
            subtitle: 'SENS-01',
            cycleTime: '25 min',
            activeBatch: 'B-SW-401'
          },
          millNode: {
            id: 'sw-node-2',
            name: 'Trip Mechanism',
            code: 'TRP-02',
            status: 'running',
            statusLabel: 'Running',
            badgeTop: 'Running',
            iconType: 'mill',
            subtitle: 'SENS-02',
            cycleTime: '35 min',
            activeBatch: 'B-SW-402'
          },
          branchTop: {
            id: 'sw-node-3a',
            name: 'Bimetal Welder',
            code: 'WLD-A',
            status: 'warning',
            statusLabel: 'Warning!',
            iconType: 'pressA',
            subtitle: 'Warning!',
            cycleTime: '42 min',
            activeBatch: 'B-SW-401'
          },
          branchBottom: {
            id: 'sw-node-3b',
            name: 'Enclosure Press - B',
            code: 'ENC-B',
            status: 'maintenance',
            statusLabel: 'Maintenance',
            iconType: 'pressB',
            subtitle: 'Maintenance',
            cycleTime: '30 min'
          },
          reconvergeNode: {
            id: 'sw-node-4',
            name: 'High-Current Test',
            code: 'TST-04',
            status: 'pending',
            statusLabel: 'Not Yet',
            iconType: 'final',
            subtitle: 'Not Yet',
            cycleTime: '20 min'
          }
        };

      case 'Water Heaters':
        return {
          inputNode: {
            id: 'wh-node-1',
            name: 'Tank Staging',
            code: 'TNK-01',
            status: 'input',
            statusLabel: 'Input Feed',
            iconType: 'input',
            subtitle: 'SENS-01',
            cycleTime: '30 min',
            activeBatch: 'B-WH-501'
          },
          millNode: {
            id: 'wh-node-2',
            name: 'Element Flange',
            code: 'ELM-02',
            status: 'running',
            statusLabel: 'Running',
            badgeTop: 'Running',
            iconType: 'mill',
            subtitle: 'SENS-02',
            cycleTime: '35 min',
            activeBatch: 'B-WH-502'
          },
          branchTop: {
            id: 'wh-node-3a',
            name: 'PUF Foam Injector',
            code: 'PUF-A',
            status: 'warning',
            statusLabel: 'Warning!',
            iconType: 'pressA',
            subtitle: 'Warning!',
            cycleTime: '45 min',
            activeBatch: 'B-WH-501'
          },
          branchBottom: {
            id: 'wh-node-3b',
            name: 'Enamel Oven - B',
            code: 'OVN-B',
            status: 'maintenance',
            statusLabel: 'Maintenance',
            iconType: 'pressB',
            subtitle: 'Maintenance',
            cycleTime: '50 min'
          },
          reconvergeNode: {
            id: 'wh-node-4',
            name: 'Hydrostatic 10 Bar',
            code: 'HYD-04',
            status: 'pending',
            statusLabel: 'Not Yet',
            iconType: 'final',
            subtitle: 'Not Yet',
            cycleTime: '25 min'
          }
        };

      case 'Lighting':
      default:
        return {
          inputNode: {
            id: 'lt-node-1',
            name: 'Input A',
            code: 'INP-01',
            status: 'input',
            statusLabel: 'PCB Feed',
            iconType: 'input',
            subtitle: 'SENS-01',
            cycleTime: '20 min',
            activeBatch: 'B-LT-105'
          },
          millNode: {
            id: 'lt-node-2',
            name: 'Mill - 01',
            code: 'MIL-01',
            status: 'running',
            statusLabel: 'SMT Mounter',
            badgeTop: 'Running',
            iconType: 'mill',
            subtitle: 'SENS-01',
            cycleTime: '35 min',
            activeBatch: 'B-LT-101'
          },
          branchTop: {
            id: 'lt-node-3a',
            name: 'Press - A',
            code: 'PRS-A',
            status: 'warning',
            statusLabel: 'Driver Assembly',
            iconType: 'pressA',
            subtitle: 'Warning!',
            cycleTime: '45 min',
            activeBatch: 'B-LT-101'
          },
          branchBottom: {
            id: 'lt-node-3b',
            name: 'Press - B',
            code: 'PRS-B',
            status: 'maintenance',
            statusLabel: 'Testing Rack',
            iconType: 'pressB',
            subtitle: 'Maintenance',
            cycleTime: '30 min'
          },
          reconvergeNode: {
            id: 'lt-node-4',
            name: 'Press - B',
            code: 'PCK-02',
            status: 'pending',
            statusLabel: 'Final Inspection',
            iconType: 'final',
            subtitle: 'Not Yet',
            cycleTime: '20 min'
          }
        };
    }
  };

  const nodes = getNodeConfigurations(activeCategory);

  const isDimmed = (status: NodeData['status']) => {
    if (activeFilter === 'all') return false;
    if (activeFilter === 'critical') return status !== 'warning';
    if (activeFilter === 'bottleneck') return status !== 'warning' && status !== 'maintenance';
    return false;
  };

  return (
    <div className="bg-white rounded-[24px] border border-[#E2E0D8] shadow-[0_4px_20px_rgba(20,30,25,0.03)] p-6 space-y-4">
      {/* Top Bar matching image: Title on Left, Critical & Bottleneck pills on Right */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#F0EFE9]">
        <div>
          <h3 className="text-base font-bold text-[#1A201C] tracking-tight">
            Production Line Overview
          </h3>
          <p className="text-[11px] font-mono text-[#8C9890] mt-0.5">
            {lineCodeMap[activeCategory] || 'PL-001-A'}
          </p>
        </div>

        {/* Right filter tags matching reference image */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveFilter(activeFilter === 'critical' ? 'all' : 'critical')}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeFilter === 'critical'
                ? 'bg-[#FEE4E2] text-[#D92D20] border-2 border-[#D92D20] shadow-xs'
                : 'bg-[#FDF0F0] text-[#D92D20] border border-[#FECDCA] hover:bg-[#FEE4E2]'
            }`}
          >
            <AlertTriangle className="w-3.5 h-3.5 fill-[#D92D20]" />
            <span>Critical</span>
          </button>

          <button
            onClick={() => setActiveFilter(activeFilter === 'bottleneck' ? 'all' : 'bottleneck')}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeFilter === 'bottleneck'
                ? 'bg-[#FEF0C7] text-[#B54708] border-2 border-[#B54708] shadow-xs'
                : 'bg-[#FEF7E6] text-[#B54708] border border-[#FEDF89] hover:bg-[#FEF0C7]'
            }`}
          >
            <AlertTriangle className="w-3.5 h-3.5 fill-[#B54708]" />
            <span>Bottleneck</span>
          </button>
        </div>
      </div>

      {/* Gamified Canvas Box with CAD/Blueprint dot-grid pattern exactly like image */}
      <div
        className="relative w-full rounded-2xl border border-[#E9E7DF] overflow-hidden min-h-[380px] p-6 flex items-center justify-center"
        style={{
          backgroundColor: '#FFFFFF',
          backgroundImage: 'radial-gradient(#D8D6CE 1.4px, transparent 1.4px)',
          backgroundSize: '22px 22px'
        }}
      >
        {/* Floating Expand button in bottom-left corner like the purple icon in the screenshot */}
        <button
          onClick={() => setCurrentRoute('/line-monitor')}
          title="Open Full Line Monitor View"
          className="absolute left-4 bottom-4 w-9 h-9 rounded-xl bg-[#6941C6] hover:bg-[#53389E] text-white flex items-center justify-center shadow-[0_4px_12px_rgba(105,65,198,0.35)] transition-all cursor-pointer z-20 group"
        >
          <Maximize2 className="w-4 h-4 group-hover:scale-110 transition-transform" />
        </button>

        {/* FLOW GRAPH NODES & CONNECTIONS */}
        <div className="w-full max-w-4xl flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 relative z-10 py-6">
          {/* Node 1: Input A */}
          <div
            onMouseEnter={() => setActiveHoverNode('input')}
            onMouseLeave={() => setActiveHoverNode(null)}
            onClick={() => setCurrentRoute('/line-monitor')}
            className={`relative flex flex-col items-center justify-center w-36 h-36 rounded-2xl border-2 border-[#D9D6FE] bg-[#F4F3FF] shadow-xs cursor-pointer hover:shadow-md transition-all ${
              isDimmed(nodes.inputNode.status) ? 'opacity-40' : 'opacity-100'
            }`}
          >
            {/* Input icon matching [->] */}
            <div className="w-9 h-9 rounded-xl flex items-center justify-center text-[#6941C6] mb-1">
              <svg className="w-6 h-6 stroke-[#6941C6]" viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                <polyline points="10 17 15 12 10 7" />
                <line x1="15" y1="12" x2="3" y2="12" />
              </svg>
            </div>
            <h4 className="text-sm font-bold text-[#1A201C] tracking-tight">{nodes.inputNode.name}</h4>
            <span className="text-[11px] font-mono text-[#8C9890] mt-0.5">{nodes.inputNode.subtitle}</span>
          </div>

          {/* Connector 1: Dashed grey line from Node 1 to Node 2 */}
          <div className="hidden md:flex flex-1 h-0.5 border-t-2 border-dashed border-[#D0D5DD] relative -mx-1" />

          {/* Node 2: Mill - 01 (With perched "Running" pill badge on top) */}
          <div
            onMouseEnter={() => setActiveHoverNode('mill')}
            onMouseLeave={() => setActiveHoverNode(null)}
            onClick={() => setCurrentRoute('/line-monitor')}
            className={`relative flex flex-col items-center justify-center w-36 h-36 rounded-2xl border-2 border-[#D9D6FE] bg-[#F4F3FF] shadow-xs cursor-pointer hover:shadow-md transition-all ${
              isDimmed(nodes.millNode.status) ? 'opacity-40' : 'opacity-100'
            }`}
          >
            {/* Perched floating "Running" badge */}
            <span className="absolute -top-3.5 px-3 py-0.5 rounded-full bg-[#6941C6] text-white text-[10px] font-bold tracking-wide shadow-xs uppercase">
              Running
            </span>

            {/* Crossed wrenches / tools icon */}
            <div className="w-9 h-9 rounded-xl flex items-center justify-center text-[#6941C6] mb-1">
              <Wrench className="w-6 h-6" />
            </div>
            <h4 className="text-sm font-bold text-[#1A201C] tracking-tight">{nodes.millNode.name}</h4>
            <span className="text-[11px] font-mono text-[#8C9890] mt-0.5">{nodes.millNode.subtitle}</span>
          </div>

          {/* Connector 2: Dashed golden connector splitting to top & bottom */}
          <div className="hidden md:flex w-8 h-0.5 border-t-2 border-dashed border-[#F79009] relative" />

          {/* PARALLEL BRANCHES (Contained in dashed rectangular border box) */}
          <div className="relative p-3.5 rounded-2xl border-2 border-dashed border-[#FDB022] bg-[#FFFAEB]/30 flex flex-col gap-4">
            {/* Top Branch: Press - A (Pink/Red warning card with Gear icon) */}
            <div
              onMouseEnter={() => setActiveHoverNode('pressA')}
              onMouseLeave={() => setActiveHoverNode(null)}
              onClick={() => setCurrentRoute('/line-monitor')}
              className={`flex flex-col items-center justify-center w-36 h-32 rounded-2xl border-2 border-[#FECDCA] bg-[#FEE4E2] shadow-xs cursor-pointer hover:shadow-md transition-all ${
                isDimmed(nodes.branchTop.status) ? 'opacity-40' : 'opacity-100'
              }`}
            >
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-[#D92D20] mb-1 animate-spin" style={{ animationDuration: '8s' }}>
                <Settings className="w-6 h-6 fill-[#D92D20]" />
              </div>
              <h4 className="text-sm font-bold text-[#1A201C] tracking-tight">{nodes.branchTop.name}</h4>
              <span className="text-[10px] font-semibold text-[#D92D20] mt-0.5">{nodes.branchTop.subtitle}</span>
            </div>

            {/* Bottom Branch: Press - B (Amber/Yellow maintenance card with Server icon) */}
            <div
              onMouseEnter={() => setActiveHoverNode('pressB')}
              onMouseLeave={() => setActiveHoverNode(null)}
              onClick={() => setCurrentRoute('/line-monitor')}
              className={`flex flex-col items-center justify-center w-36 h-32 rounded-2xl border-2 border-[#FEDF89] bg-[#FEF0C7] shadow-xs cursor-pointer hover:shadow-md transition-all ${
                isDimmed(nodes.branchBottom.status) ? 'opacity-40' : 'opacity-100'
              }`}
            >
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-[#B54708] mb-1">
                <Server className="w-5 h-5 fill-[#B54708]" />
              </div>
              <h4 className="text-sm font-bold text-[#1A201C] tracking-tight">{nodes.branchBottom.name}</h4>
              <span className="text-[10px] font-semibold text-[#B54708] mt-0.5">{nodes.branchBottom.subtitle}</span>
            </div>
          </div>

          {/* Connector 3: Dashed golden line merging into Node 4 */}
          <div className="hidden md:flex w-8 h-0.5 border-t-2 border-dashed border-[#F79009] relative" />

          {/* Node 4: Reconverged final node (Muted grey card with cluster icon) */}
          <div
            onMouseEnter={() => setActiveHoverNode('final')}
            onMouseLeave={() => setActiveHoverNode(null)}
            onClick={() => setCurrentRoute('/line-monitor')}
            className={`flex flex-col items-center justify-center w-36 h-36 rounded-2xl border-2 border-[#EAECF0] bg-[#F2F4F7] shadow-xs cursor-pointer hover:shadow-md transition-all ${
              isDimmed(nodes.reconvergeNode.status) ? 'opacity-40' : 'opacity-100'
            }`}
          >
            {/* Cluster / Molecule 4-dot icon matching image */}
            <div className="w-9 h-9 rounded-xl flex items-center justify-center text-[#98A2B3] mb-1">
              <svg className="w-6 h-6 fill-[#98A2B3]" viewBox="0 0 24 24">
                <circle cx="8" cy="8" r="3" />
                <circle cx="16" cy="8" r="3" />
                <circle cx="8" cy="16" r="3" />
                <circle cx="16" cy="16" r="3" />
              </svg>
            </div>
            <h4 className="text-sm font-bold text-[#475467] tracking-tight">{nodes.reconvergeNode.name}</h4>
            <span className="text-[11px] font-medium text-[#98A2B3] mt-0.5">{nodes.reconvergeNode.subtitle}</span>
          </div>
        </div>
      </div>

      {/* Footer Strip matching "Active Alerts" sub-bar from the bottom of user image */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 text-xs">
        <div>
          <span className="font-bold text-[#1A201C]">Active Alerts</span>
          <span className="font-mono text-[#8C9890] text-[11px] ml-2">PL-001-A</span>
          <p className="text-[11px] text-[#717E76] mt-0.5">
            Stage <strong>{nodes.branchTop.name}</strong> holding 1 batch • {nodes.branchBottom.name} scheduled for sensor maintenance
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentRoute('/line-monitor')}
            className="text-xs font-semibold text-[#6941C6] hover:text-[#53389E] hover:underline flex items-center gap-1"
          >
            Open Full Line Diagnostics <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
