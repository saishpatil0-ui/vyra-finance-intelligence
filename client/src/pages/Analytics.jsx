import React, { useState } from 'react';
import {
  BarChart3,
  TrendingUp,
  Calendar,
  Sparkles,
  ArrowUpRight,
  ArrowDownRight,
  PieChart as PieIcon,
  Activity
} from 'lucide-react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend
} from 'recharts';
import { useFinance } from '../context/FinanceContext';
import { formatINR } from '../utils/formatters';

const SAVINGS_RATE_TREND = [
  { month: 'May', rate: 22, score: 71 },
  { month: 'Jun', rate: 28, score: 73 },
  { month: 'Jul', rate: 31, score: 75 },
  { month: 'Aug', rate: 33, score: 76 },
  { month: 'Sep', rate: 36, score: 79 },
  { month: 'Oct', rate: 35, score: 78 }
];

const PERIODS = ['7 Days', '30 Days', '3 Months', '6 Months', '1 Year'];

export const Analytics = () => {
  const { cashFlowHistory, categoryBreakdown, user } = useFinance();
  const [selectedPeriod, setSelectedPeriod] = useState('6 Months');

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header & Period Filter */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-sora font-bold text-2xl text-white">Financial Analytics Engine</h2>
          <p className="text-xs text-slate-400">Deep telemetry on cash velocity, savings efficiency, and historical milestones</p>
        </div>

        <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-900 border border-slate-800">
          {PERIODS.map((period) => (
            <button
              key={period}
              onClick={() => setSelectedPeriod(period)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedPeriod === period
                  ? 'bg-cyan-500 text-slate-950 font-bold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {period}
            </button>
          ))}
        </div>
      </div>

      {/* Top 3 Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="vyra-card p-5 border-slate-800">
          <span className="text-xs font-semibold text-slate-400 uppercase">Average Savings Rate</span>
          <div className="flex items-baseline gap-2 mt-1">
            <p className="font-sora font-bold text-3xl text-cyan-400">30.8%</p>
            <span className="text-xs text-emerald-400 font-semibold flex items-center">
              <ArrowUpRight className="w-3.5 h-3.5" />
              +13% over 6mo
            </span>
          </div>
          <span className="text-[11px] text-slate-400">Target benchmark: &gt; 25%</span>
        </div>

        <div className="vyra-card p-5 border-slate-800">
          <span className="text-xs font-semibold text-slate-400 uppercase">Total 6-Month Inflow</span>
          <p className="font-sora font-bold text-3xl text-emerald-400 mt-1">
            ₹1,99,500
          </p>
          <span className="text-[11px] text-slate-400">Stipends, freelance, & allowances</span>
        </div>

        <div className="vyra-card p-5 border-slate-800">
          <span className="text-xs font-semibold text-slate-400 uppercase">Net Wealth Added</span>
          <p className="font-sora font-bold text-3xl text-white mt-1">
            ₹85,600
          </p>
          <span className="text-[11px] text-slate-400">Retained across emergency & investments</span>
        </div>
      </div>

      {/* Analytics Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Savings Rate Velocity Chart */}
        <div className="vyra-card p-5 border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-sora font-semibold text-base text-white">Savings Rate Velocity</h3>
              <p className="text-xs text-slate-400">Progression from 22% ➔ 35% of monthly income</p>
            </div>
            <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
              Positive Trajectory
            </span>
          </div>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={SAVINGS_RATE_TREND} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                <XAxis dataKey="month" stroke="#64748B" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748B" fontSize={11} tickLine={false} axisLine={false} unit="%" />
                <Tooltip
                  content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="p-3 rounded-xl bg-slate-900 border border-slate-700 shadow-xl text-xs font-mono">
                          <p className="font-semibold text-white mb-1">{label}</p>
                          <p className="text-cyan-400">Savings Rate: {payload[0].value}%</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="rate"
                  stroke="#06B6D4"
                  strokeWidth={3}
                  dot={{ r: 4, fill: '#06B6D4' }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Monthly Income vs Outflow Bar Comparison */}
        <div className="vyra-card p-5 border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-sora font-semibold text-base text-white">Monthly Cash Flow Comparison</h3>
              <p className="text-xs text-slate-400">Inflow vs. Outflow burn</p>
            </div>
            <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
              ₹12k Retained
            </span>
          </div>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={cashFlowHistory} margin={{ top: 10, right: 10, left: -15, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                <XAxis dataKey="month" stroke="#64748B" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748B" fontSize={11} tickLine={false} axisLine={false} tickFormatter={(v) => `₹${v / 1000}k`} />
                <Tooltip
                  content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="p-3 rounded-xl bg-slate-900 border border-slate-700 shadow-xl text-xs font-mono space-y-1">
                          <p className="font-semibold text-white">{label}</p>
                          <p className="text-emerald-400">Income: {formatINR(payload[0]?.value)}</p>
                          <p className="text-cyan-400">Spending: {formatINR(payload[1]?.value)}</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Bar dataKey="income" name="Income" fill="#10B981" radius={[4, 4, 0, 0]} />
                <Bar dataKey="expenses" name="Spending" fill="#3B82F6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};
