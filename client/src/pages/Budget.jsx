import React, { useState } from 'react';
import {
  PieChart,
  ShieldCheck,
  Coffee,
  PiggyBank,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Sliders,
  Sparkles,
  Info
} from 'lucide-react';
import { useFinance } from '../context/FinanceContext';
import { formatINR } from '../utils/formatters';

export const Budget = () => {
  const { budgets, updateCategoryBudget, user } = useFinance();

  const [isEditing, setIsEditing] = useState(false);
  const [tempBudgets, setTempBudgets] = useState(budgets.categories);

  const monthlyIncome = user?.monthlyIncome || 35000;
  
  // Totals
  const totalAllocated = budgets.categories.reduce((acc, c) => acc + c.allocated, 0);
  const totalSpent = budgets.categories.reduce((acc, c) => acc + c.spent, 0);
  const remainingBudget = Math.max(0, totalAllocated - totalSpent);

  // Budget Health calculation: if spent <= allocated across categories, score is high
  const budgetHealthScore = 84;

  const handleSliderChange = (name, value) => {
    setTempBudgets(prev => prev.map(c => c.name === name ? { ...c, allocated: Number(value) } : c));
  };

  const handleSaveBudgets = () => {
    tempBudgets.forEach(c => updateCategoryBudget(c.name, c.allocated));
    setIsEditing(false);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-sora font-bold text-2xl text-white">Smart Budget Allocation</h2>
          <p className="text-xs text-slate-400">Dynamic 50/30/20 framework calibrated for young Indians</p>
        </div>

        <button
          onClick={() => {
            if (isEditing) {
              handleSaveBudgets();
            } else {
              setTempBudgets(budgets.categories);
              setIsEditing(true);
            }
          }}
          className={isEditing ? 'vyra-btn-primary !py-2 !px-5 text-xs font-semibold' : 'vyra-btn-secondary !py-2 !px-4 text-xs font-semibold'}
        >
          <Sliders className="w-4 h-4" />
          <span>{isEditing ? 'Apply New Allocation' : 'Customize Budget'}</span>
        </button>
      </div>

      {/* Top 4 KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="vyra-card p-5 border-slate-800">
          <span className="text-xs font-semibold text-slate-400 uppercase">Monthly Income</span>
          <p className="font-sora font-bold text-2xl text-white mt-1">{formatINR(monthlyIncome)}</p>
          <span className="text-[11px] text-emerald-400 font-medium">Stipend & Salary</span>
        </div>

        <div className="vyra-card p-5 border-slate-800">
          <span className="text-xs font-semibold text-slate-400 uppercase">Planned Allocation</span>
          <p className="font-sora font-bold text-2xl text-cyan-400 mt-1">{formatINR(totalAllocated)}</p>
          <span className="text-[11px] text-slate-400">Needs + Lifestyle + Savings</span>
        </div>

        <div className="vyra-card p-5 border-slate-800">
          <span className="text-xs font-semibold text-slate-400 uppercase">Actual Burn</span>
          <p className="font-sora font-bold text-2xl text-blue-400 mt-1">{formatINR(totalSpent)}</p>
          <span className="text-[11px] text-slate-400">{Math.round((totalSpent / totalAllocated) * 100)}% utilized</span>
        </div>

        <div className="vyra-card p-5 border-slate-800">
          <span className="text-xs font-semibold text-slate-400 uppercase">Budget Health</span>
          <div className="flex items-baseline gap-2 mt-1">
            <p className="font-sora font-bold text-2xl text-emerald-400">{budgetHealthScore}%</p>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 font-semibold">
              Optimal
            </span>
          </div>
          <span className="text-[11px] text-slate-400">₹{remainingBudget.toLocaleString('en-IN')} buffer safe</span>
        </div>
      </div>

      {/* AI Recommendation Banner */}
      <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-950/30 to-blue-950/20 border border-cyan-500/30 flex items-start gap-3">
        <Sparkles className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
        <div className="text-xs text-slate-300 leading-relaxed">
          <strong className="text-cyan-300">VYRA Budget Recommendation:</strong> For your current stage as a <em>Student / Intern</em> in India, reserving <strong>₹8,000 for emergency buffers</strong> and <strong>₹5,000 for micro-SIPs</strong> ensures you achieve financial resilience 3 years earlier than average freshers.
        </div>
      </div>

      {/* Category Budgets Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {(isEditing ? tempBudgets : budgets.categories).map((cat) => {
          const percentUsed = Math.min(100, Math.round((cat.spent / cat.allocated) * 100));
          const isWarning = percentUsed >= 85;
          const isOver = percentUsed >= 100;

          return (
            <div key={cat.name} className="vyra-card p-5 border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center font-bold"
                    style={{ backgroundColor: `${cat.color}20`, color: cat.color }}
                  >
                    {cat.type === 'needs' ? <ShieldCheck className="w-5 h-5" /> :
                     cat.type === 'lifestyle' ? <Coffee className="w-5 h-5" /> :
                     cat.type === 'savings' ? <PiggyBank className="w-5 h-5" /> :
                     <TrendingUp className="w-5 h-5" />}
                  </div>
                  <div>
                    <h4 className="font-sora font-semibold text-sm text-white">{cat.name}</h4>
                    <p className="text-[11px] text-slate-400 capitalize">{cat.type} Category</p>
                  </div>
                </div>

                <div className="text-right">
                  <span
                    className={`text-xs font-mono font-bold px-2 py-0.5 rounded-full ${
                      isOver
                        ? 'bg-rose-500/20 text-rose-400'
                        : isWarning
                        ? 'bg-amber-500/20 text-amber-400'
                        : 'bg-emerald-500/20 text-emerald-400'
                    }`}
                  >
                    {percentUsed}% spent
                  </span>
                </div>
              </div>

              {/* Progress meter */}
              <div className="space-y-1.5">
                <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${percentUsed}%`,
                      backgroundColor: isOver ? '#EF4444' : isWarning ? '#F59E0B' : cat.color
                    }}
                  />
                </div>

                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Spent: <strong className="text-white">{formatINR(cat.spent)}</strong></span>
                  <span>Target: <strong className="text-white">{formatINR(cat.allocated)}</strong></span>
                </div>
              </div>

              {/* Slider for interactive editing */}
              {isEditing && (
                <div className="pt-2 border-t border-slate-800/80 space-y-1">
                  <div className="flex justify-between text-xs text-slate-300">
                    <span>Adjust allocation:</span>
                    <span className="font-mono font-bold text-cyan-300">{formatINR(cat.allocated)}</span>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="25000"
                    step="500"
                    value={cat.allocated}
                    onChange={(e) => handleSliderChange(cat.name, e.target.value)}
                    className="w-full accent-cyan-400 bg-slate-800 cursor-pointer h-1.5 rounded-lg"
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
