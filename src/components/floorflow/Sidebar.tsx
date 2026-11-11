import React from 'react';
import {
  LayoutDashboard,
  Activity,
  Layers,
  ClipboardCheck,
  CheckCircle2,
  AlertTriangle,
  RotateCcw
} from 'lucide-react';
import { useFloorFlow, FloorFlowRoute } from '../../context/FloorFlowContext';

export const Sidebar: React.FC = () => {
  const { currentRoute, setCurrentRoute, resetToDefaultData, currentUserRole } = useFloorFlow();

  const navItems: { route: FloorFlowRoute; label: string; icon: React.ReactNode }[] = [
    {
      route: '/overview',
      label: 'Overview',
      icon: <LayoutDashboard className="w-5 h-5" />
    },
    {
      route: '/line-monitor',
      label: 'Line Monitor',
      icon: <Activity className="w-5 h-5" />
    },
    {
      route: '/batches',
      label: 'Batches',
      icon: <Layers className="w-5 h-5" />
    },
    {
      route: '/quality',
      label: 'Quality',
      icon: <ClipboardCheck className="w-5 h-5" />
    },
    {
      route: '/readiness',
      label: 'Readiness',
      icon: <CheckCircle2 className="w-5 h-5" />
    },
    {
      route: '/rejections',
      label: 'Rejections',
      icon: <AlertTriangle className="w-5 h-5" />
    }
  ];

  return (
    <aside
      className="hidden md:flex flex-col items-center justify-between w-18 py-6 my-4 ml-4 bg-white rounded-[32px] border border-[#E2E0D8] shadow-[0_6px_28px_rgba(30,40,35,0.04)] z-30 flex-shrink-0"
      style={{ height: 'calc(100vh - 2rem)' }}
    >
      {/* Brand Logo & Luker Tag */}
      <div className="flex flex-col items-center gap-1 group cursor-pointer" onClick={() => setCurrentRoute('/overview')}>
        <div className="w-11 h-11 rounded-2xl bg-[#EDF3F0] border border-[#D5E2DB] flex items-center justify-center text-[#3D5B4A] shadow-xs group-hover:scale-105 transition-transform">
          {/* Stylized FloorFlow turbine / manufacturing petal symbol */}
          <svg className="w-6 h-6 fill-current text-[#476655]" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="3" />
            <path d="M12 2a1.5 1.5 0 0 1 1.5 1.5V6a1.5 1.5 0 0 1-3 0V3.5A1.5 1.5 0 0 1 12 2zm0 16a1.5 1.5 0 0 1 1.5 1.5v2.5a1.5 1.5 0 0 1-3 0V19.5A1.5 1.5 0 0 1 12 18zm10-6a1.5 1.5 0 0 1-1.5 1.5H18a1.5 1.5 0 0 1 0-3h2.5A1.5 1.5 0 0 1 22 12zM6 12a1.5 1.5 0 0 1-1.5 1.5H2a1.5 1.5 0 0 1 0-3h2.5A1.5 1.5 0 0 1 6 12zm13.07-7.07a1.5 1.5 0 0 1 0 2.12l-1.77 1.77a1.5 1.5 0 0 1-2.12-2.12l1.77-1.77a1.5 1.5 0 0 1 2.12 0zm-12.73 12.73a1.5 1.5 0 0 1 0 2.12l-1.77 1.77a1.5 1.5 0 0 1-2.12-2.12l1.77-1.77a1.5 1.5 0 0 1 2.12 0zm0-12.73a1.5 1.5 0 0 1 2.12 0l1.77 1.77a1.5 1.5 0 0 1-2.12 2.12l-1.77-1.77a1.5 1.5 0 0 1 0-2.12zm12.73 12.73a1.5 1.5 0 0 1 2.12 0l1.77 1.77a1.5 1.5 0 0 1-2.12 2.12l-1.77-1.77a1.5 1.5 0 0 1 0-2.12z" />
          </svg>
        </div>
        <span className="text-[10px] font-bold tracking-tight text-[#2B3B32]">FLOOR</span>
      </div>

      {/* Center Nav Items */}
      <nav className="flex flex-col items-center gap-3">
        {navItems.map((item) => {
          const isActive = currentRoute === item.route;
          return (
            <button
              key={item.route}
              onClick={() => setCurrentRoute(item.route)}
              title={item.label}
              className={`relative flex items-center justify-center w-12 h-12 rounded-2xl transition-all duration-200 group ${
                isActive
                  ? 'bg-[#1A201C] text-white shadow-[0_4px_14px_rgba(26,32,28,0.3)]'
                  : 'text-[#6F7C74] hover:text-[#1A201C] hover:bg-[#F2EFE9]'
              }`}
            >
              {item.icon}

              {/* Tooltip on hover */}
              <span className="absolute left-16 px-2.5 py-1 text-xs font-medium text-white bg-[#1A201C] rounded-lg shadow-md whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-50">
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>

      {/* Bottom Actions */}
      <div className="flex flex-col items-center gap-3">
        <button
          onClick={() => {
            if (confirm('Reset application data to initial demo state?')) {
              resetToDefaultData();
            }
          }}
          title="Reset Demo Data"
          className="flex items-center justify-center w-10 h-10 rounded-xl text-[#7E8B83] hover:text-[#1A201C] hover:bg-[#F2EFE9] transition-all"
        >
          <RotateCcw className="w-4 h-4" />
        </button>

        <div
          title={`Active Role: ${currentUserRole}`}
          className="w-10 h-10 rounded-full bg-[#E5ECE7] border border-[#CCDCD2] flex items-center justify-center text-[#2F4D3C] font-semibold text-xs shadow-xs"
        >
          {currentUserRole.slice(0, 2).toUpperCase()}
        </div>
      </div>
    </aside>
  );
};
