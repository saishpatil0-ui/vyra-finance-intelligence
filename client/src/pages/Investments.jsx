import React from 'react';
import {
  TrendingUp,
  Shield,
  AlertCircle,
  PieChart,
  ArrowUpRight,
  Sparkles,
  Info,
  DollarSign,
  BarChart2
} from 'lucide-react';
import { useFinance } from '../context/FinanceContext';
import { formatINR } from '../utils/formatters';

export const Investments = () => {
  const { investments } = useFinance();

  const totalInvested = investments.reduce((acc, i) => acc + i.invested, 0);
  const totalCurrent = investments.reduce((acc, i) => acc + i.current, 0);
  const totalProfit = totalCurrent - totalInvested;
  const totalReturnPercent = ((totalProfit / (totalInvested || 1)) * 100).toFixed(1);

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-sora font-bold text-2xl text-white">Investment Intelligence (Educational)</h2>
          <p className="text-xs text-slate-400">Micro-portfolio tracker & compound growth simulator for young wealth builders</p>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-medium">
          <Info className="w-4 h-4 shrink-0" />
          <span>Educational Tracking Only • Not a Brokerage</span>
        </div>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="vyra-card p-5 border-slate-800">
          <span className="text-xs font-semibold text-slate-400 uppercase">Total Invested</span>
          <p className="font-sora font-bold text-2xl text-white mt-1">{formatINR(totalInvested)}</p>
          <span className="text-[11px] text-slate-400">Principal capital</span>
        </div>

        <div className="vyra-card p-5 border-slate-800">
          <span className="text-xs font-semibold text-slate-400 uppercase">Current Valuation</span>
          <p className="font-sora font-bold text-2xl text-cyan-400 mt-1">{formatINR(totalCurrent)}</p>
          <span className="text-[11px] text-slate-400">Market benchmarked</span>
        </div>

        <div className="vyra-card p-5 border-slate-800">
          <span className="text-xs font-semibold text-slate-400 uppercase">Unrealized Gain</span>
          <p className="font-sora font-bold text-2xl text-emerald-400 mt-1">+{formatINR(totalProfit)}</p>
          <span className="text-[11px] text-emerald-400 font-semibold">+{totalReturnPercent}% Overall Return</span>
        </div>

        <div className="vyra-card p-5 border-slate-800">
          <span className="text-xs font-semibold text-slate-400 uppercase">Monthly SIP Auto-Debit</span>
          <p className="font-sora font-bold text-2xl text-indigo-400 mt-1">₹4,500/mo</p>
          <span className="text-[11px] text-slate-400">Across 3 funds</span>
        </div>
      </div>

      {/* Asset Breakdown & Educational Note */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 vyra-card p-6 border-slate-800 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div>
              <h3 className="font-sora font-semibold text-base text-white">Tracked Holdings</h3>
              <p className="text-xs text-slate-400">Demographic-appropriate asset distribution</p>
            </div>
            <span className="text-xs font-semibold text-cyan-400">4 Active Instruments</span>
          </div>

          <div className="divide-y divide-slate-800">
            {investments.map((inv) => {
              const gain = inv.current - inv.invested;
              return (
                <div key={inv.id} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-800/30 px-3 rounded-xl transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center shrink-0">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-sora font-semibold text-sm text-white">{inv.name}</h4>
                      <div className="flex items-center gap-2 text-xs text-slate-400 mt-0.5">
                        <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[10px]">
                          {inv.type}
                        </span>
                        <span>•</span>
                        <span className="text-[10px] text-slate-400">Risk: {inv.risk}</span>
                        {inv.sipAmount > 0 && (
                          <>
                            <span>•</span>
                            <span className="text-cyan-400 text-[10px] font-mono">SIP: {formatINR(inv.sipAmount)}/mo</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex sm:flex-col items-center sm:items-end justify-between font-mono">
                    <span className="font-bold text-sm text-white">{formatINR(inv.current)}</span>
                    <span className="text-xs text-emerald-400 font-semibold flex items-center gap-0.5">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                      +{formatINR(gain)} ({inv.returnsPercent}%)
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Investment Principles Sidebar */}
        <div className="vyra-card p-6 border-slate-800 space-y-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <h3 className="font-sora font-semibold text-base text-white">Youth Investment Rules</h3>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              Key tenets for young professionals navigating Indian equity markets:
            </p>

            <ul className="space-y-3 text-xs text-slate-300">
              <li className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <strong className="text-cyan-300 block mb-1">1. Direct over Regular Plans</strong>
                Investing directly saves ~1% annual distributor commission, translating into lakhs over 20 years.
              </li>
              <li className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <strong className="text-cyan-300 block mb-1">2. Low-Cost Nifty Index First</strong>
                Broad index funds outperform 80% of actively managed funds over a 7-year horizon with zero stock-picking stress.
              </li>
              <li className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <strong className="text-cyan-300 block mb-1">3. Time &gt; Timing</strong>
                Rupee cost averaging via SIP eliminates market anxiety.
              </li>
            </ul>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-[11px] text-slate-400 italic">
            Disclaimer: VYRA is an educational simulation. Securities investments are subject to market risks. Read all scheme related documents carefully.
          </div>
        </div>
      </div>
    </div>
  );
};
