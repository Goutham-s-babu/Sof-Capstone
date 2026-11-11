import React from 'react';

interface StatusBadgeProps {
  status: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, size = 'md', className = '' }) => {
  const getStyle = (s: string) => {
    const norm = s.toLowerCase().trim();
    
    // Success / Completed / Ready / Pass / Running
    if (['ready', 'completed', 'pass', 'normal', 'on track', 'running'].includes(norm)) {
      return 'bg-[#EBF6EF] text-[#246A3E] border-[#C8E6D3]';
    }
    
    // Warning / Waiting / At Risk / Needs Review
    if (['waiting', 'at risk', 'needs review', 'pending', 'minor bottleneck'].includes(norm)) {
      return 'bg-[#FEF6EB] text-[#B86812] border-[#F8DCB8]';
    }

    // Active / In Progress / Scheduled
    if (['in progress', 'scheduled', 'current'].includes(norm)) {
      return 'bg-[#EDF3F0] text-[#3E5C4B] border-[#D0DFD7]';
    }

    // Danger / Blocked / Fail / On Hold / Delayed
    if (['blocked', 'fail', 'on hold', 'missing', 'delayed'].includes(norm)) {
      return 'bg-[#FDF0F0] text-[#C23333] border-[#F7CECE]';
    }

    // Neutral / Maintenance / Not Applicable
    if (['maintenance', 'not applicable', 'n/a', 'clear'].includes(norm)) {
      return 'bg-[#F2F4F7] text-[#475467] border-[#D0D5DD]';
    }

    return 'bg-[#F2F1EC] text-[#69736C] border-[#E0DDD5]';
  };

  const sizeClass = {
    sm: 'text-xs px-2.5 py-0.5',
    md: 'text-xs font-medium px-3 py-1',
    lg: 'text-sm font-medium px-3.5 py-1.5'
  }[size];

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border transition-all duration-150 ${sizeClass} ${getStyle(status)} ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80" />
      {status}
    </span>
  );
};
