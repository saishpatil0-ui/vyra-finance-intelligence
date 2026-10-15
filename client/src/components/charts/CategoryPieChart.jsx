import React from 'react';
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from 'recharts';
import { formatINR } from '../../utils/formatters';

const CustomPieTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="p-3 rounded-xl bg-slate-900/95 border border-slate-700 shadow-xl backdrop-blur-md text-xs">
        <p className="font-semibold text-white flex items-center gap-1.5 mb-1">
          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: data.color }} />
          {data.name}
        </p>
        <p className="font-mono text-cyan-300 font-bold">
          {formatINR(data.amount)} <span className="text-slate-400 font-normal">({data.percentage}%)</span>
        </p>
      </div>
    );
  }
  return null;
};

export const CategoryPieChart = ({ data }) => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4">
      {/* Donut Chart */}
      <div className="w-full md:w-1/2 h-56 relative flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Tooltip content={<CustomPieTooltip />} />
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={55}
              outerRadius={80}
              paddingAngle={4}
              dataKey="amount"
              stroke="#080C15"
              strokeWidth={2}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        
        {/* Center Label */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">Total</span>
          <span className="font-sora font-bold text-sm text-white">100%</span>
        </div>
      </div>

      {/* Legend Column */}
      <div className="w-full md:w-1/2 space-y-2">
        {data.map((item, index) => (
          <div key={index} className="flex items-center justify-between text-xs p-1.5 rounded-lg hover:bg-slate-800/40 transition-colors">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
              <span className="text-slate-300 truncate">{item.name}</span>
            </div>
            <div className="flex items-center gap-2 font-mono">
              <span className="font-semibold text-white">{formatINR(item.amount)}</span>
              <span className="text-slate-400 text-[11px]">({item.percentage}%)</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
