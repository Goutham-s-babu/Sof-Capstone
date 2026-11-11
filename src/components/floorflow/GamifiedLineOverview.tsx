import React, { useState, useEffect } from 'react';
import {
  Maximize2,
  AlertTriangle,
  Wrench,
  Settings,
  Server,
  Layers,
  ChevronRight,
  Info,
  Radio,
  Zap
} from 'lucide-react';
import { useFloorFlow } from '../../context/FloorFlowContext';
import { ProductCategory } from '../../types/floorflow';

interface NodeData {
  id: string;
  name: string;
  code: string;
  status: 'input' | 'running' | 'warning' | 'maintenance' | 'pending';
  badgeTop?: string;
  subtitle: string;
  metric: string;
  iconType: 'input' | 'mill' | 'pressA' | 'pressB' | 'final';
}

export const GamifiedLineOverview: React.FC = () => {
  const {
    activeCategory,
    setCurrentRoute,
    setSelectedBatchId,
    categoryBatches
  } = useFloorFlow();

  const [activeFilter, setActiveFilter] = useState<'all' | 'critical' | 'bottleneck'>('all');
  const [pulseTick, setPulseTick] = useState(0);

  // Live timer tick for real-time telemetry feeling
  useEffect(() => {
    const timer = setInterval(() => {
      setPulseTick(p => (p + 1) % 60);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Category specific line details
  const categoryLineInfo: Record<ProductCategory, { code: string; activeAlert: string; batchCode: string }> = {
    'Lighting': {
      code: 'PL-001-A • Line 2 - High Velocity (LED Luminaire)',
      activeAlert: 'Luminaire Assembly holding 1 batch • High-Pot Surge Lab calibration in progress',
      batchCode: 'b-lt-101'
    },
    'Fans': {
      code: 'PL-002-F • Cell 1 - AeroGleam & BLDC Line',
      activeAlert: 'Blade Balancing rig holding 2 fan lots • Acoustic bay sensor calibration active',
      batchCode: 'b-fn-201'
    },
    'Wires': {
      code: 'PL-003-W • Continuous 1100V Extruder 90mm',
      activeAlert: 'PVC Extruder barrel reaching 172°C • 6kV sparker brush cleaning underway',
      batchCode: 'b-wr-301'
    },
    'Switchgear': {
      code: 'PL-004-S • Modular 10kA MCB Automation Line',
      activeAlert: 'Bimetal Welder tolerance variance (+42 min) • Short-circuit bed zeroing',
      batchCode: 'b-sw-401'
    },
    'Water Heaters': {
      code: 'PL-005-H • Glassline 10-Bar Geyser Cell',
      activeAlert: 'PUF Foam dispenser pre-heating nozzle • Hydrostatic test pump pressure stable',
      batchCode: 'b-wh-501'
    }
  };

  const lineInfo = categoryLineInfo[activeCategory] || categoryLineInfo['Lighting'];

  // Real production flow stations for each category
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
            name: 'Stator Feed',
            code: 'MTR-01',
            status: 'input',
            subtitle: 'ETP 0.8mm',
            metric: '250 pcs queued',
            iconType: 'input'
          },
          millNode: {
            id: 'fn-node-2',
            name: 'Rotor Press',
            code: 'PRS-02',
            status: 'running',
            badgeTop: 'RUNNING',
            subtitle: '380 RPM Core',
            metric: '110/250 done',
            iconType: 'mill'
          },
          branchTop: {
            id: 'fn-node-3a',
            name: 'Blade Balance',
            code: 'BAL-A',
            status: 'warning',
            subtitle: 'Warning!',
            metric: '0.9mm wobble',
            iconType: 'pressA'
          },
          branchBottom: {
            id: 'fn-node-3b',
            name: 'Acoustic Bay',
            code: 'ACU-B',
            status: 'maintenance',
            subtitle: 'Maintenance',
            metric: '<52dB cal',
            iconType: 'pressB'
          },
          reconvergeNode: {
            id: 'fn-node-4',
            name: 'Canopy Pack',
            code: 'PCK-04',
            status: 'pending',
            subtitle: 'Not Yet',
            metric: '1200mm box',
            iconType: 'final'
          }
        };

      case 'Wires':
        return {
          inputNode: {
            id: 'wr-node-1',
            name: 'Rod Intake',
            code: 'ROD-01',
            status: 'input',
            subtitle: '8mm Copper',
            metric: '50 coils ready',
            iconType: 'input'
          },
          millNode: {
            id: 'wr-node-2',
            name: 'Drawing Mill',
            code: 'MIL-02',
            status: 'running',
            badgeTop: 'RUNNING',
            subtitle: '350 m/min',
            metric: '28/50 reels',
            iconType: 'mill'
          },
          branchTop: {
            id: 'wr-node-3a',
            name: 'PVC Extrusion',
            code: 'EXT-A',
            status: 'warning',
            subtitle: 'Warning!',
            metric: '172°C drift',
            iconType: 'pressA'
          },
          branchBottom: {
            id: 'wr-node-3b',
            name: 'Spark Tester',
            code: 'SPK-B',
            status: 'maintenance',
            subtitle: 'Maintenance',
            metric: '6kV electrode',
            iconType: 'pressB'
          },
          reconvergeNode: {
            id: 'wr-node-4',
            name: '90m Coiler',
            code: 'SPL-04',
            status: 'pending',
            subtitle: 'Not Yet',
            metric: 'Shrink staged',
            iconType: 'final'
          }
        };

      case 'Switchgear':
        return {
          inputNode: {
            id: 'sw-node-1',
            name: 'Contact Feed',
            code: 'CNT-01',
            status: 'input',
            subtitle: 'Silver Rivet',
            metric: '400 pcs ready',
            iconType: 'input'
          },
          millNode: {
            id: 'sw-node-2',
            name: 'Trip Fixture',
            code: 'TRP-02',
            status: 'running',
            badgeTop: 'RUNNING',
            subtitle: 'Mechanism Cell',
            metric: '160/400 done',
            iconType: 'mill'
          },
          branchTop: {
            id: 'sw-node-3a',
            name: 'Bimetal Welder',
            code: 'WLD-A',
            status: 'warning',
            subtitle: 'Warning!',
            metric: '+42m tolerance',
            iconType: 'pressA'
          },
          branchBottom: {
            id: 'sw-node-3b',
            name: 'DMC Press',
            code: 'DMC-B',
            status: 'maintenance',
            subtitle: 'Maintenance',
            metric: 'Preheat cycle',
            iconType: 'pressB'
          },
          reconvergeNode: {
            id: 'sw-node-4',
            name: 'DIN-Rail QC',
            code: 'TST-04',
            status: 'pending',
            subtitle: 'Not Yet',
            metric: '10kA test bed',
            iconType: 'final'
          }
        };

      case 'Water Heaters':
        return {
          inputNode: {
            id: 'wh-node-1',
            name: 'Tank Staging',
            code: 'TNK-01',
            status: 'input',
            subtitle: 'Glassline Shell',
            metric: '120 tanks ready',
            iconType: 'input'
          },
          millNode: {
            id: 'wh-node-2',
            name: 'Element Flange',
            code: 'ELM-02',
            status: 'running',
            badgeTop: 'RUNNING',
            subtitle: 'Incoloy 2000W',
            metric: '45/120 bolted',
            iconType: 'mill'
          },
          branchTop: {
            id: 'wh-node-3a',
            name: 'PUF Foaming',
            code: 'PUF-A',
            status: 'warning',
            subtitle: 'Warning!',
            metric: 'Nozzle temp wait',
            iconType: 'pressA'
          },
          branchBottom: {
            id: 'wh-node-3b',
            name: 'Enamel Oven',
            code: 'OVN-B',
            status: 'maintenance',
            subtitle: 'Maintenance',
            metric: '850°C thermostat',
            iconType: 'pressB'
          },
          reconvergeNode: {
            id: 'wh-node-4',
            name: '10 Bar Proof',
            code: 'HYD-04',
            status: 'pending',
            subtitle: 'Not Yet',
            metric: 'Hydro proofing',
            iconType: 'final'
          }
        };

      case 'Lighting':
      default:
        return {
          inputNode: {
            id: 'lt-node-1',
            name: 'PCB / SMT Feed',
            code: 'SMT-01',
            status: 'input',
            subtitle: 'Lumileds 2835',
            metric: '600 pcs in queue',
            iconType: 'input'
          },
          millNode: {
            id: 'lt-node-2',
            name: 'Driver Cell',
            code: 'DRV-02',
            status: 'running',
            badgeTop: 'RUNNING',
            subtitle: 'Isolated 90V DC',
            metric: '320/600 pcs done',
            iconType: 'mill'
          },
          branchTop: {
            id: 'lt-node-3a',
            name: 'Luminaire Press',
            code: 'PRS-A',
            status: 'warning',
            subtitle: 'Warning!',
            metric: '28m cap wait',
            iconType: 'pressA'
          },
          branchBottom: {
            id: 'lt-node-3b',
            name: 'Surge Test Rig',
            code: 'TST-B',
            status: 'maintenance',
            subtitle: 'Maintenance',
            metric: '4kV surge lab',
            iconType: 'pressB'
          },
          reconvergeNode: {
            id: 'lt-node-4',
            name: 'Optical QC',
            code: 'PCK-04',
            status: 'pending',
            subtitle: 'Not Yet',
            metric: '140 lm/W box',
            iconType: 'final'
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
    <div className="bg-white rounded-[24px] border border-[#E2E0D8] shadow-[0_4px_16px_rgba(20,30,25,0.03)] p-4 sm:p-5 flex flex-col justify-between h-full">
      {/* Top Bar matching screenshot */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#F0EFE9]">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-bold text-[#1A201C] tracking-tight">
              Production Line Overview
            </h3>
            {/* Live blinking status pill */}
            <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#2D6A4F] bg-[#EDF6EE] px-2 py-0.5 rounded-full border border-[#CCE5D3]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
              </span>
              LIVE CADENCE
            </span>
          </div>
          <p className="text-[10px] font-mono text-[#8C9890] mt-0.5 truncate max-w-xs sm:max-w-md">
            {lineInfo.code}
          </p>
        </div>

        {/* Filter tags matching reference image */}
        <div className="flex items-center gap-1.5 self-start sm:self-auto">
          <button
            onClick={() => setActiveFilter(activeFilter === 'critical' ? 'all' : 'critical')}
            className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all ${
              activeFilter === 'critical'
                ? 'bg-[#FEE4E2] text-[#D92D20] border border-[#D92D20] shadow-2xs'
                : 'bg-[#FDF0F0] text-[#D92D20] border border-[#FECDCA] hover:bg-[#FEE4E2]'
            }`}
          >
            <AlertTriangle className="w-3 h-3 fill-[#D92D20]" />
            <span>Critical</span>
          </button>

          <button
            onClick={() => setActiveFilter(activeFilter === 'bottleneck' ? 'all' : 'bottleneck')}
            className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all ${
              activeFilter === 'bottleneck'
                ? 'bg-[#FEF0C7] text-[#B54708] border border-[#B54708] shadow-2xs'
                : 'bg-[#FEF7E6] text-[#B54708] border border-[#FEDF89] hover:bg-[#FEF0C7]'
            }`}
          >
            <AlertTriangle className="w-3 h-3 fill-[#B54708]" />
            <span>Bottleneck</span>
          </button>
        </div>
      </div>

      {/* Gamified Canvas Box with CAD/Blueprint dot-grid pattern: Minimal, compact height and responsive */}
      <div
        className="relative w-full rounded-2xl border border-[#ECEAE2] overflow-x-auto py-4 px-2 my-2.5 flex items-center justify-center min-h-[190px]"
        style={{
          backgroundColor: '#FFFFFF',
          backgroundImage: 'radial-gradient(#DAD8D0 1.2px, transparent 1.2px)',
          backgroundSize: '18px 18px'
        }}
      >
        {/* Floating Expand button in bottom-left corner */}
        <button
          onClick={() => setCurrentRoute('/line-monitor')}
          title="Open Full Line Monitor View"
          className="absolute left-2.5 bottom-2.5 w-7 h-7 rounded-lg bg-[#6941C6] hover:bg-[#53389E] text-white flex items-center justify-center shadow-xs transition-all cursor-pointer z-20 group"
        >
          <Maximize2 className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
        </button>

        {/* FLOW GRAPH NODES & ANIMATED CONNECTING FLOW: Compact layout */}
        <div className="flex items-center justify-center gap-1 sm:gap-2 relative z-10 w-full max-w-[560px] px-1">
          {/* Node 1: Input Station */}
          <div
            onClick={() => setCurrentRoute('/line-monitor')}
            className={`relative flex flex-col items-center justify-center w-22 h-22 sm:w-24 sm:h-24 rounded-2xl border-2 border-[#D9D6FE] bg-[#F4F3FF] shadow-xs cursor-pointer hover:border-[#6941C6] hover:shadow-sm transition-all p-1.5 text-center flex-shrink-0 group ${
              isDimmed(nodes.inputNode.status) ? 'opacity-40' : 'opacity-100'
            }`}
          >
            <div className="w-5 h-5 rounded-lg flex items-center justify-center text-[#6941C6] mb-0.5 group-hover:scale-110 transition-transform">
              <svg className="w-4 h-4 stroke-[#6941C6] animate-pulse" viewBox="0 0 24 24" fill="none" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                <polyline points="10 17 15 12 10 7" />
                <line x1="15" y1="12" x2="3" y2="12" />
              </svg>
            </div>
            <h4 className="text-[10px] font-bold text-[#1A201C] leading-tight line-clamp-1">{nodes.inputNode.name}</h4>
            <span className="text-[9px] font-mono text-[#7A8680]">{nodes.inputNode.code}</span>
            <span className="text-[8px] font-semibold text-[#6941C6] truncate max-w-full">{nodes.inputNode.subtitle}</span>
          </div>

          {/* Connector 1: LIVE ANIMATED FLOWING DASHED LINE WITH TRAVELING PULSE */}
          <div className="w-5 sm:w-7 h-4 relative flex items-center flex-shrink-0">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 30 10">
              {/* Animated flowing line */}
              <line
                x1="0"
                y1="5"
                x2="30"
                y2="5"
                stroke="#6941C6"
                strokeWidth="2"
                className="animate-flow-dash"
              />
              {/* Flowing product particle dot */}
              <circle r="2.5" fill="#6941C6">
                <animate
                  attributeName="cx"
                  from="0"
                  to="30"
                  dur="1.2s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="cy"
                  values="5;5"
                  dur="1.2s"
                  repeatCount="indefinite"
                />
              </circle>
            </svg>
          </div>

          {/* Node 2: Mill / Primary Processing (Perched RUNNING badge with LIVE Ping) */}
          <div
            onClick={() => setCurrentRoute('/line-monitor')}
            className={`relative flex flex-col items-center justify-center w-22 h-22 sm:w-24 sm:h-24 rounded-2xl border-2 border-[#D9D6FE] bg-[#F4F3FF] shadow-xs cursor-pointer hover:border-[#6941C6] hover:shadow-sm transition-all p-1.5 text-center flex-shrink-0 ring-1 ring-[#6941C6]/30 ${
              isDimmed(nodes.millNode.status) ? 'opacity-40' : 'opacity-100'
            }`}
          >
            {/* Perched badge with live glowing ping */}
            <span className="absolute -top-2.5 px-2 py-0.5 rounded-full bg-[#6941C6] text-white text-[8px] font-bold tracking-wider shadow-2xs uppercase flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              RUNNING
            </span>
            <div className="w-5 h-5 rounded-lg flex items-center justify-center text-[#6941C6] mb-0.5">
              <Wrench className="w-4 h-4 animate-subtle-float" />
            </div>
            <h4 className="text-[10px] font-bold text-[#1A201C] leading-tight line-clamp-1">{nodes.millNode.name}</h4>
            <span className="text-[9px] font-mono text-[#7A8680]">{nodes.millNode.code}</span>
            <span className="text-[8px] font-bold text-[#2D6A4F] truncate max-w-full">{nodes.millNode.metric}</span>
          </div>

          {/* Connector 2: LIVE ANIMATED FLOWING DASHED SPLITTING LINE */}
          <div className="w-4 sm:w-6 h-12 relative flex items-center flex-shrink-0">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 24 48">
              {/* Upper branch line */}
              <path
                d="M 0 24 C 12 24, 12 10, 24 10"
                fill="none"
                stroke="#F79009"
                strokeWidth="2"
                className="animate-flow-dash"
              />
              {/* Lower branch line */}
              <path
                d="M 0 24 C 12 24, 12 38, 24 38"
                fill="none"
                stroke="#F79009"
                strokeWidth="2"
                className="animate-flow-dash"
              />
              {/* Flowing particle along upper branch */}
              <circle r="2" fill="#D92D20">
                <animateMotion
                  path="M 0 24 C 12 24, 12 10, 24 10"
                  dur="1.4s"
                  repeatCount="indefinite"
                />
              </circle>
              {/* Flowing particle along lower branch */}
              <circle r="2" fill="#F79009">
                <animateMotion
                  path="M 0 24 C 12 24, 12 38, 24 38"
                  dur="1.4s"
                  repeatCount="indefinite"
                />
              </circle>
            </svg>
          </div>

          {/* PARALLEL BRANCHES: Boxed inside dashed golden border with subtle pulse */}
          <div className="p-1.5 rounded-2xl border-2 border-dashed border-[#FDB022] bg-[#FFFAEB]/30 flex flex-col gap-1.5 flex-shrink-0 animate-live-pulse">
            {/* Top Branch: Warning with rotating gear */}
            <div
              onClick={() => setCurrentRoute('/line-monitor')}
              className={`flex flex-col items-center justify-center w-22 h-14 sm:w-24 sm:h-15 rounded-xl border-2 border-[#FECDCA] bg-[#FEE4E2] shadow-2xs cursor-pointer hover:border-[#D92D20] transition-all p-1 text-center ${
                isDimmed(nodes.branchTop.status) ? 'opacity-40' : 'opacity-100'
              }`}
            >
              <div className="w-3.5 h-3.5 text-[#D92D20] mb-0.5 animate-spin" style={{ animationDuration: '6s' }}>
                <Settings className="w-3.5 h-3.5 fill-[#D92D20]" />
              </div>
              <h4 className="text-[9px] font-bold text-[#1A201C] leading-none line-clamp-1">{nodes.branchTop.name}</h4>
              <span className="text-[8px] font-bold text-[#D92D20] leading-none mt-0.5">{nodes.branchTop.metric}</span>
            </div>

            {/* Bottom Branch: Maintenance with blinking server node */}
            <div
              onClick={() => setCurrentRoute('/line-monitor')}
              className={`flex flex-col items-center justify-center w-22 h-14 sm:w-24 sm:h-15 rounded-xl border-2 border-[#FEDF89] bg-[#FEF0C7] shadow-2xs cursor-pointer hover:border-[#B54708] transition-all p-1 text-center ${
                isDimmed(nodes.branchBottom.status) ? 'opacity-40' : 'opacity-100'
              }`}
            >
              <div className="w-3.5 h-3.5 text-[#B54708] mb-0.5">
                <Server className="w-3.5 h-3.5 fill-[#B54708]" />
              </div>
              <h4 className="text-[9px] font-bold text-[#1A201C] leading-none line-clamp-1">{nodes.branchBottom.name}</h4>
              <span className="text-[8px] font-bold text-[#B54708] leading-none mt-0.5">{nodes.branchBottom.subtitle}</span>
            </div>
          </div>

          {/* Connector 3: LIVE ANIMATED FLOWING DASHED MERGING LINE */}
          <div className="w-4 sm:w-6 h-12 relative flex items-center flex-shrink-0">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 24 48">
              {/* Upper merging line */}
              <path
                d="M 0 10 C 12 10, 12 24, 24 24"
                fill="none"
                stroke="#F79009"
                strokeWidth="2"
                className="animate-flow-dash"
              />
              {/* Lower merging line */}
              <path
                d="M 0 38 C 12 38, 12 24, 24 24"
                fill="none"
                stroke="#F79009"
                strokeWidth="2"
                className="animate-flow-dash"
              />
              {/* Flowing particles merging into final */}
              <circle r="2" fill="#F79009">
                <animateMotion
                  path="M 0 10 C 12 10, 12 24, 24 24"
                  dur="1.4s"
                  repeatCount="indefinite"
                />
              </circle>
            </svg>
          </div>

          {/* Node 4: Reconverged Output Node (Grey / Scheduled) */}
          <div
            onClick={() => setCurrentRoute('/line-monitor')}
            className={`flex flex-col items-center justify-center w-22 h-22 sm:w-24 sm:h-24 rounded-2xl border-2 border-[#EAECF0] bg-[#F2F4F7] shadow-xs cursor-pointer hover:border-[#98A2B3] hover:shadow-sm transition-all p-1.5 text-center flex-shrink-0 ${
              isDimmed(nodes.reconvergeNode.status) ? 'opacity-40' : 'opacity-100'
            }`}
          >
            <div className="w-5 h-5 rounded-lg flex items-center justify-center text-[#98A2B3] mb-0.5">
              <svg className="w-4 h-4 fill-[#98A2B3]" viewBox="0 0 24 24">
                <circle cx="8" cy="8" r="3" />
                <circle cx="16" cy="8" r="3" />
                <circle cx="8" cy="16" r="3" />
                <circle cx="16" cy="16" r="3" />
              </svg>
            </div>
            <h4 className="text-[10px] font-bold text-[#475467] leading-tight line-clamp-1">{nodes.reconvergeNode.name}</h4>
            <span className="text-[9px] font-mono text-[#98A2B3]">{nodes.reconvergeNode.code}</span>
            <span className="text-[8px] font-medium text-[#98A2B3] mt-0.5">{nodes.reconvergeNode.subtitle}</span>
          </div>
        </div>
      </div>

      {/* Sub-bar matching "Active Alerts" from reference image */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 pt-2 border-t border-[#F0EFE9] text-xs">
        <div className="min-w-0">
          <div className="flex items-center gap-1.5">
            <span className="font-bold text-[#1A201C] text-[11px]">Active Alerts</span>
            <span className="font-mono text-[#8C9890] text-[10px]">PL-001-A</span>
            <span className="text-[10px] text-[#557764] font-semibold hidden sm:inline">
              • Conveyor Speed: 42 u/hr
            </span>
          </div>
          <p className="text-[11px] text-[#717E76] mt-0.5 truncate">
            {lineInfo.activeAlert}
          </p>
        </div>

        <button
          onClick={() => setCurrentRoute('/line-monitor')}
          className="text-[11px] font-semibold text-[#557764] hover:text-[#3B5446] hover:underline flex items-center gap-1 whitespace-nowrap self-end sm:self-auto"
        >
          <span>Line Diagnostics</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
