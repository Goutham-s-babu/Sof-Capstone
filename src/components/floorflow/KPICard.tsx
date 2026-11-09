import React from 'react';

interface KPICardProps {
  label: string;
  value: string | number;
  subtitle?: string;
  badge?: string;
  isAccent?: boolean;
  progressPercent?: number;
  icon?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const KPICard: React.FC<KPICardProps> = ({
  label,
  value,
  subtitle,
  badge,
  isAccent = false,
  progressPercent,
  icon,
  className = '',
  onClick
}) => {
  if (isAccent) {
    return (
      <div
        onClick={onClick}
        className={`relative overflow-hidden bg-[#557764] text-white p-6 rounded-[24px] shadow-[0_6px_20px_rgba(85,119,100,0.22)] border border-[#486756] transition-all duration-200 ${
          onClick ? 'cursor-pointer hover:bg-[#4E6E5C]' : ''
        } ${className}`}
      >
        {/* Subtle decorative background ring */}
        <div className="absolute -right-6 -bottom-6 w-28 h-28 rounded-full bg-white/5 pointer-events-none" />
        
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-medium tracking-wide uppercase text-[#D2E3DA]">
            {label}
          </span>
          {icon && <span className="text-white/80">{icon}</span>}
        </div>

        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-3xl lg:text-4xl font-bold tracking-tight text-white">
            {value}
          </span>
          {badge && (
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-white/20 text-white">
              {badge}
            </span>
          )}
        </div>

        {progressPercent !== undefined && (
          <div className="w-full bg-white/20 rounded-full h-1.5 my-2.5 overflow-hidden">
            <div
              className="bg-white h-1.5 rounded-full transition-all duration-500"
              style={{ width: `${Math.min(100, Math.max(0, progressPercent))}%` }}
            />
          </div>
        )}

        {subtitle && (
          <p className="text-xs text-[#D8E7E0] font-normal leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    );
  }

  return (
    <div
      onClick={onClick}
      className={`bg-white p-6 rounded-[24px] border border-[#E2E0D8] shadow-[0_4px_16px_rgba(30,40,35,0.03)] hover:shadow-[0_6px_22px_rgba(30,40,35,0.06)] transition-all duration-200 ${
        onClick ? 'cursor-pointer hover:border-[#CFCDC4]' : ''
      } ${className}`}
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-medium tracking-wide text-[#707C74]">
          {label}
        </span>
        {icon && <span className="text-[#8E9B92]">{icon}</span>}
      </div>

      <div className="flex items-baseline gap-2 mb-1.5">
        <span className="text-3xl lg:text-4xl font-bold tracking-tight text-[#1A201C]">
          {value}
        </span>
        {badge && (
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-[#EDF3F0] text-[#3D5B4A]">
            {badge}
          </span>
        )}
      </div>

      {progressPercent !== undefined && (
        <div className="w-full bg-[#EAE8E1] rounded-full h-1.5 my-2.5 overflow-hidden">
          <div
            className="bg-[#557764] h-1.5 rounded-full transition-all duration-500"
            style={{ width: `${Math.min(100, Math.max(0, progressPercent))}%` }}
          />
        </div>
      )}

      {subtitle && (
        <p className="text-xs text-[#808C84] font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
