import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

export const MetricCard = ({
  title,
  value,
  subtitle,
  icon: Icon,
  trend,
  trendPositive,
  accentColor = 'cyan',
  onClick,
  badge
}) => {
  const colorMap = {
    cyan: {
      border: 'hover:border-cyan-500/40',
      glow: 'group-hover:bg-cyan-500/10',
      iconBg: 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30',
      valueText: 'text-white'
    },
    emerald: {
      border: 'hover:border-emerald-500/40',
      glow: 'group-hover:bg-emerald-500/10',
      iconBg: 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30',
      valueText: 'text-white'
    },
    blue: {
      border: 'hover:border-blue-500/40',
      glow: 'group-hover:bg-blue-500/10',
      iconBg: 'bg-blue-500/15 text-blue-400 border border-blue-500/30',
      valueText: 'text-white'
    },
    amber: {
      border: 'hover:border-amber-500/40',
      glow: 'group-hover:bg-amber-500/10',
      iconBg: 'bg-amber-500/15 text-amber-400 border border-amber-500/30',
      valueText: 'text-white'
    }
  };

  const scheme = colorMap[accentColor] || colorMap.cyan;

  return (
    <div
      onClick={onClick}
      className={`vyra-card p-5 relative overflow-hidden group ${scheme.border} ${
        onClick ? 'cursor-pointer hover:shadow-xl' : ''
      }`}
    >
      {/* Background radial glow */}
      <div className={`absolute -right-8 -bottom-8 w-28 h-28 rounded-full blur-2xl transition-all duration-300 ${scheme.glow}`} />

      <div className="flex items-start justify-between mb-3 relative z-10">
        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
          {title}
        </span>
        {Icon && (
          <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${scheme.iconBg}`}>
            <Icon className="w-4 h-4" />
          </div>
        )}
      </div>

      <div className="relative z-10 flex items-baseline justify-between gap-2">
        <h3 className="font-sora font-bold text-2xl lg:text-3xl text-white tracking-tight">
          {value}
        </h3>

        {badge && (
          <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700 font-mono">
            {badge}
          </span>
        )}
      </div>

      <div className="mt-2.5 flex items-center gap-2 text-xs relative z-10">
        {trend && (
          <span
            className={`inline-flex items-center gap-0.5 font-semibold px-1.5 py-0.5 rounded ${
              trendPositive
                ? 'bg-emerald-500/15 text-emerald-400'
                : 'bg-rose-500/15 text-rose-400'
            }`}
          >
            {trendPositive ? (
              <ArrowUpRight className="w-3.5 h-3.5" />
            ) : (
              <ArrowDownRight className="w-3.5 h-3.5" />
            )}
            {trend}
          </span>
        )}
        {subtitle && <span className="text-slate-400 truncate">{subtitle}</span>}
      </div>
    </div>
  );
};
