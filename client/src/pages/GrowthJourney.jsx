import React from 'react';
import {
  Compass,
  CheckCircle2,
  Lock,
  ArrowRight,
  Sparkles,
  Shield,
  Zap,
  Award,
  TrendingUp,
  Circle
} from 'lucide-react';
import { useFinance } from '../context/FinanceContext';

export const GrowthJourney = () => {
  const { growthStages, user, healthScore } = useFinance();

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-sora font-bold text-2xl text-white">Your Financial Growth Path</h2>
          <p className="text-xs text-slate-400">Structured progression transforming raw spenders into long-term wealth builders</p>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span>Active Stage: 02 (Control)</span>
        </div>
      </div>

      {/* Hero Overview */}
      <div className="vyra-card p-6 border-slate-800 bg-gradient-to-r from-slate-900 via-cyan-950/20 to-slate-900">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 font-sora">
              Signature Product Philosophy
            </span>
            <h3 className="font-sora font-bold text-xl text-white">
              Financial discipline is not an event — it is a sequenced journey.
            </h3>
            <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
              Most students jump directly to volatile stock trades without an emergency cushion. VYRA ensures your foundational safety net is established before taking market exposure.
            </p>
          </div>

          <div className="text-right p-4 rounded-xl bg-slate-950/80 border border-slate-800 shrink-0">
            <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Current Milestone Score</span>
            <span className="font-sora font-bold text-2xl text-cyan-400 font-mono">Stage 02 • 75%</span>
            <span className="text-[11px] text-emerald-400 block mt-0.5">1 milestone remaining to unlock Stage 03</span>
          </div>
        </div>
      </div>

      {/* 5 Stages Timeline / Progression Cards */}
      <div className="space-y-4">
        {growthStages.map((stageItem) => {
          const isCompleted = stageItem.status === 'completed';
          const isCurrent = stageItem.status === 'current';
          const isLocked = stageItem.status === 'locked' || stageItem.status === 'upcoming';

          return (
            <div
              key={stageItem.id}
              className={`p-6 rounded-2xl vyra-card border transition-all ${
                isCurrent
                  ? 'border-cyan-500/50 bg-cyan-950/15 shadow-xl shadow-cyan-500/5 ring-1 ring-cyan-500/30'
                  : isCompleted
                  ? 'border-emerald-500/30 bg-emerald-950/10'
                  : 'border-slate-800/80 opacity-75'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800/80">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center font-sora font-bold text-base shrink-0 ${
                      isCompleted
                        ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20'
                        : isCurrent
                        ? 'bg-gradient-to-tr from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30'
                        : 'bg-slate-800 text-slate-500 border border-slate-700'
                    }`}
                  >
                    {isCompleted ? <CheckCircle2 className="w-6 h-6" /> : isLocked ? <Lock className="w-5 h-5" /> : stageItem.stage}
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-sora font-bold text-lg text-white">
                        Stage {stageItem.stage} — {stageItem.name}
                      </span>
                      <span
                        className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                          isCompleted
                            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                            : isCurrent
                            ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                            : 'bg-slate-800 text-slate-400'
                        }`}
                      >
                        {isCompleted ? 'Unlocked & Mastered' : isCurrent ? 'Active Focus (75%)' : 'Locked'}
                      </span>
                    </div>
                    <p className="text-xs text-cyan-300 font-medium mt-0.5">{stageItem.tagline}</p>
                  </div>
                </div>

                {isCurrent && (
                  <div className="text-right">
                    <span className="text-xs text-slate-400 block mb-1">Stage Completion</span>
                    <div className="w-32 bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-cyan-400 h-full rounded-full" style={{ width: '75%' }} />
                    </div>
                  </div>
                )}
              </div>

              <p className="text-xs text-slate-300 leading-relaxed my-4">
                {stageItem.description}
              </p>

              {/* Milestones checklist */}
              <div className="space-y-2 pt-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Stage Milestones
                </span>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
                  {stageItem.milestones.map((m, idx) => (
                    <div
                      key={idx}
                      className={`p-3 rounded-xl border flex items-center gap-2.5 text-xs ${
                        m.done
                          ? 'bg-slate-900/90 border-emerald-500/30 text-slate-200'
                          : 'bg-slate-900/40 border-slate-800 text-slate-400'
                      }`}
                    >
                      {m.done ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      ) : (
                        <Circle className="w-4 h-4 text-slate-600 shrink-0" />
                      )}
                      <span className={m.done ? 'line-through text-slate-400' : ''}>{m.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
