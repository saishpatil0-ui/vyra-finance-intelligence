import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Activity,
  ShieldCheck,
  PiggyBank,
  ShieldAlert,
  Target,
  TrendingUp,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { useFinance } from '../context/FinanceContext';
import { formatINR } from '../utils/formatters';

export const FinancialHealth = () => {
  const navigate = useNavigate();
  const { healthScore, user } = useFinance();

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-sora font-bold text-2xl text-white">Financial Health Diagnostic</h2>
          <p className="text-xs text-slate-400">Algorithmic evaluation of your liquidity, savings velocity, and stability</p>
        </div>

        <button
          onClick={() => navigate('/ai-assistant')}
          className="vyra-btn-primary !py-2 !px-4 text-xs font-semibold"
        >
          <Sparkles className="w-4 h-4" />
          <span>Ask AI Diagnostic Co-Pilot</span>
        </button>
      </div>

      {/* Hero Score Showcase Card */}
      <div className="vyra-card p-6 lg:p-8 border-slate-800 bg-gradient-to-r from-slate-900 via-[#0C1322] to-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center relative z-10">
          {/* Circular Score Gauge */}
          <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-950/80 border border-slate-800 text-center shadow-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Overall Health Index
            </span>
            <div className="relative w-36 h-36 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                <path
                  className="text-slate-800"
                  strokeWidth="3.5"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="text-cyan-400"
                  strokeDasharray={`${healthScore.overall}, 100`}
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-sora font-extrabold text-4xl text-white tracking-tight">
                  {healthScore.overall}
                </span>
                <span className="text-[10px] text-slate-400 font-mono">/ 100</span>
              </div>
            </div>

            <span className="mt-3 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
              Grade: Robust (Top 22% Cohort)
            </span>
          </div>

          {/* Diagnosis & Summary */}
          <div className="md:col-span-2 space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-sora">
                Diagnostic Analysis
              </span>
              <h3 className="font-sora font-bold text-xl text-white mt-1">
                Strong spending control, but emergency cushion needs acceleration.
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mt-2">
                Your monthly burn is disciplined with discretionary spending below 30% of income. However, your liquid contingency buffer holds <strong>2.1 months of living expenses</strong> against the recommended 3 to 6-month benchmark.
              </p>
            </div>

            {/* Next Best Action Callout */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-950/40 to-slate-900 border border-emerald-500/30 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 font-sora">
                  Next Best Action
                </span>
                <p className="text-xs text-white font-medium">
                  {healthScore.nextBestAction}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5 Component Diagnostic Pillars */}
      <div className="space-y-3">
        <h3 className="font-sora font-semibold text-lg text-white">Diagnostic Score Breakdown</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {healthScore.breakdown.map((item) => {
            const isPassing = item.score >= item.target;
            return (
              <div key={item.name} className="vyra-card p-5 border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-sora font-semibold text-sm text-white">{item.name}</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">{item.description}</p>
                  </div>
                  <div className="text-right">
                    <span className="font-sora font-bold text-lg text-cyan-300 font-mono">
                      {item.score}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono"> / 100</span>
                  </div>
                </div>

                {/* Progress Meter */}
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      item.score >= 80 ? 'bg-emerald-400' : item.score >= 70 ? 'bg-cyan-400' : 'bg-amber-400'
                    }`}
                    style={{ width: `${item.score}%` }}
                  />
                </div>

                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-slate-400">Target Benchmark: {item.target}/100</span>
                  <span className={`font-semibold ${isPassing ? 'text-emerald-400' : 'text-amber-400'}`}>
                    {item.status}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
