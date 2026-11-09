import React, { useState, useRef, useEffect } from 'react';
import {
  Search,
  Bell,
  CheckCircle,
  AlertTriangle,
  ChevronDown,
  Database,
  ExternalLink,
  Shield,
  Menu,
  X
} from 'lucide-react';
import { useFloorFlow, FloorFlowRoute } from '../../context/FloorFlowContext';
import { isSupabaseConfigured } from '../../services/supabaseClient';
import { UserRole } from '../../types/floorflow';

export const Header: React.FC = () => {
  const {
    currentRoute,
    setCurrentRoute,
    searchQuery,
    setSearchQuery,
    currentUserRole,
    setCurrentUserRole,
    notifications,
    markNotificationAsRead,
    clearAllNotifications,
    setSelectedBatchId
  } = useFloorFlow();

  const [showNotifs, setShowNotifs] = useState(false);
  const [showRoleMenu, setShowRoleMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const notifRef = useRef<HTMLDivElement>(null);
  const roleRef = useRef<HTMLDivElement>(null);

  const unreadCount = notifications.filter(n => !n.read).length;

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (notifRef.current && !notifRef.current.contains(e.target as Node)) {
        setShowNotifs(false);
      }
      if (roleRef.current && !roleRef.current.contains(e.target as Node)) {
        setShowRoleMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const roles: UserRole[] = [
    'Admin',
    'Production Manager',
    'Supervisor',
    'Quality Inspector',
    'Operator'
  ];

  const handleNotifClick = (notif: typeof notifications[0]) => {
    markNotificationAsRead(notif.id);
    if (notif.linkRoute) {
      setCurrentRoute(notif.linkRoute as FloorFlowRoute);
    }
    if (notif.batchId) {
      setSelectedBatchId(notif.batchId);
    }
    setShowNotifs(false);
  };

  return (
    <header className="w-full pt-4 pb-2 px-4 md:px-8">
      {/* Top Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Left: Greeting & Subtitle */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-[#1A201C]">
              Good morning, team
            </h1>
            <p className="text-xs md:text-sm text-[#748078] mt-0.5">
              Here&apos;s what&apos;s happening across your production floor today.
            </p>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-white border border-[#E2E0D8] text-[#1A201C]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Right Controls: Search, Notifications, Profile */}
        <div className="flex items-center gap-3">
          {/* Search Pill */}
          <div className="relative flex-1 md:w-72 lg:w-80">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search batches, products, runs..."
              className="w-full bg-white pl-4 pr-11 py-2.5 rounded-full border border-[#E0DED6] text-xs md:text-sm text-[#1A201C] placeholder-[#8E9B93] focus:outline-none focus:border-[#557764] shadow-[0_2px_12px_rgba(20,30,25,0.03)] transition-all"
            />
            <button
              onClick={() => {}}
              className="absolute right-1.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#1A201C] text-white flex items-center justify-center hover:bg-[#323D36] transition-colors"
            >
              <Search className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Notifications Capsule */}
          <div className="relative" ref={notifRef}>
            <button
              onClick={() => setShowNotifs(!showNotifs)}
              className="relative w-10 h-10 rounded-full bg-white border border-[#E0DED6] flex items-center justify-center text-[#55635B] hover:text-[#1A201C] hover:border-[#CFCCC2] shadow-[0_2px_10px_rgba(20,30,25,0.03)] transition-all"
            >
              <Bell className="w-4 h-4" />
              {unreadCount > 0 && (
                <span className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-[#D64545] ring-2 ring-white" />
              )}
            </button>

            {/* Notifications Dropdown */}
            {showNotifs && (
              <div className="absolute right-0 mt-2 w-80 md:w-96 bg-white rounded-2xl border border-[#E2E0D8] shadow-[0_8px_30px_rgba(20,30,25,0.12)] p-4 z-50">
                <div className="flex items-center justify-between pb-3 border-b border-[#F0EFE9]">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-sm text-[#1A201C]">Operational Alerts</span>
                    <span className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-[#EDF3F0] text-[#3D5B4A]">
                      {unreadCount} new
                    </span>
                  </div>
                  {unreadCount > 0 && (
                    <button
                      onClick={clearAllNotifications}
                      className="text-xs text-[#557764] hover:underline font-medium"
                    >
                      Mark all read
                    </button>
                  )}
                </div>

                <div className="max-h-80 overflow-y-auto divide-y divide-[#F5F4EE] mt-2">
                  {notifications.map((n) => (
                    <div
                      key={n.id}
                      onClick={() => handleNotifClick(n)}
                      className={`p-2.5 rounded-xl transition-colors cursor-pointer hover:bg-[#F8F7F2] ${
                        !n.read ? 'bg-[#FAF9F5]' : ''
                      }`}
                    >
                      <div className="flex items-start gap-2.5">
                        <span
                          className={`mt-0.5 w-2 h-2 rounded-full flex-shrink-0 ${
                            n.type === 'alert'
                              ? 'bg-[#D64545]'
                              : n.type === 'warning'
                              ? 'bg-[#D9822B]'
                              : 'bg-[#3E8E58]'
                          }`}
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-semibold text-[#1A201C] truncate">{n.title}</p>
                          <p className="text-xs text-[#717E76] mt-0.5 line-clamp-2">{n.message}</p>
                          <span className="text-[10px] text-[#9AA59F] mt-1 block">{n.time}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* User Role & Profile */}
          <div className="relative" ref={roleRef}>
            <button
              onClick={() => setShowRoleMenu(!showRoleMenu)}
              className="flex items-center gap-2.5 pl-2 pr-3 py-1.5 rounded-full bg-white border border-[#E0DED6] shadow-[0_2px_10px_rgba(20,30,25,0.03)] hover:border-[#CFCCC2] transition-all"
            >
              <div className="w-7 h-7 rounded-full bg-[#557764] text-white flex items-center justify-center font-bold text-xs">
                {currentUserRole.slice(0, 1)}
              </div>
              <div className="hidden sm:block text-left">
                <p className="text-xs font-semibold text-[#1A201C] leading-tight">
                  {currentUserRole}
                </p>
                <p className="text-[10px] text-[#7A8780] leading-tight">
                  Floor Operations
                </p>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-[#7A8780]" />
            </button>

            {/* Role Switcher Menu */}
            {showRoleMenu && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl border border-[#E2E0D8] shadow-[0_8px_30px_rgba(20,30,25,0.12)] p-2 z-50">
                <div className="px-3 py-2 border-b border-[#F0EFE9] mb-1">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-[#8A968F]">
                    Switch User Role
                  </p>
                </div>
                {roles.map((r) => (
                  <button
                    key={r}
                    onClick={() => {
                      setCurrentUserRole(r);
                      setShowRoleMenu(false);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium flex items-center justify-between transition-colors ${
                      currentUserRole === r
                        ? 'bg-[#EDF3F0] text-[#2F4D3C] font-semibold'
                        : 'text-[#55635B] hover:bg-[#F8F7F2]'
                    }`}
                  >
                    <span>{r}</span>
                    {currentUserRole === r && <CheckCircle className="w-3.5 h-3.5 text-[#557764]" />}
                  </button>
                ))}

                <div className="mt-2 pt-2 border-t border-[#F0EFE9] px-3 py-1 text-[11px] text-[#8A968F] flex items-center gap-1.5">
                  <Database className="w-3 h-3 text-[#557764]" />
                  <span>{isSupabaseConfigured ? 'Supabase Connected' : 'Reactive Data Engine'}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 p-3 bg-white rounded-2xl border border-[#E2E0D8] shadow-md flex flex-col gap-2">
          {(['/overview', '/batches', '/quality', '/readiness', '/rejections'] as FloorFlowRoute[]).map((r) => (
            <button
              key={r}
              onClick={() => {
                setCurrentRoute(r);
                setMobileMenuOpen(false);
              }}
              className={`px-3 py-2 text-xs font-semibold rounded-xl text-left capitalize ${
                currentRoute === r ? 'bg-[#1A201C] text-white' : 'text-[#55635B] hover:bg-[#F5F4EE]'
              }`}
            >
              {r.replace('/', '')}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
