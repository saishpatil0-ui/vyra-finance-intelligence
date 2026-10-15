import React, { useState } from 'react';
import {
  Target,
  PlusCircle,
  Shield,
  Laptop,
  Award,
  Palmtree,
  ArrowRight,
  TrendingUp,
  Trash2,
  Calendar,
  Sparkles,
  Coins
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useFinance } from '../context/FinanceContext';
import { formatINR, formatDate } from '../utils/formatters';

export const Goals = () => {
  const { goals, addGoal, contributeToGoal, deleteGoal, user } = useFinance();

  const [isAddOpen, setIsAddOpen] = useState(false);
  const [activeContributeGoal, setActiveContributeGoal] = useState(null);
  const [contributionAmount, setContributionAmount] = useState('');

  // New goal form state
  const [newTitle, setNewTitle] = useState('');
  const [newTarget, setNewTarget] = useState('');
  const [newCurrent, setNewCurrent] = useState('');
  const [newDeadline, setNewDeadline] = useState('2027-12-31');
  const [newCategory, setNewCategory] = useState('Safety');

  const handleContribute = (e) => {
    e.preventDefault();
    if (!activeContributeGoal || !contributionAmount || Number(contributionAmount) <= 0) return;

    contributeToGoal(activeContributeGoal.id, Number(contributionAmount));

    // Launch celebratory confetti!
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 }
    });

    setContributionAmount('');
    setActiveContributeGoal(null);
  };

  const handleCreateGoal = (e) => {
    e.preventDefault();
    if (!newTitle || !newTarget) return;

    const targetVal = Number(newTarget);
    const currentVal = Number(newCurrent || 0);
    const monthsLeft = 12;

    addGoal({
      title: newTitle,
      targetAmount: targetVal,
      currentAmount: currentVal,
      monthlyRequired: Math.round((targetVal - currentVal) / monthsLeft),
      deadline: newDeadline,
      category: newCategory,
      color: '#06B6D4'
    });

    setNewTitle('');
    setNewTarget('');
    setNewCurrent('');
    setIsAddOpen(false);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-sora font-bold text-2xl text-white">Financial Goals & Milestones</h2>
          <p className="text-xs text-slate-400">Structured wealth targets with automated monthly pace calculation</p>
        </div>

        <button
          onClick={() => setIsAddOpen(true)}
          className="vyra-btn-primary !py-2 !px-4 text-xs font-semibold"
        >
          <PlusCircle className="w-4 h-4" />
          <span>Create New Goal</span>
        </button>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="vyra-card p-4 border-slate-800">
          <span className="text-xs font-semibold text-slate-400 uppercase">Active Targets</span>
          <p className="font-sora font-bold text-2xl text-white mt-1">{goals.length} Goals</p>
          <span className="text-[11px] text-cyan-400">All milestones on track</span>
        </div>

        <div className="vyra-card p-4 border-slate-800">
          <span className="text-xs font-semibold text-slate-400 uppercase">Total Target Value</span>
          <p className="font-sora font-bold text-2xl text-cyan-400 mt-1">
            {formatINR(goals.reduce((acc, g) => acc + g.targetAmount, 0))}
          </p>
          <span className="text-[11px] text-slate-400">Cumulative future assets</span>
        </div>

        <div className="vyra-card p-4 border-slate-800">
          <span className="text-xs font-semibold text-slate-400 uppercase">Total Saved So Far</span>
          <p className="font-sora font-bold text-2xl text-emerald-400 mt-1">
            {formatINR(goals.reduce((acc, g) => acc + g.currentAmount, 0))}
          </p>
          <span className="text-[11px] text-slate-400">Across all buckets</span>
        </div>
      </div>

      {/* Goals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {goals.map((goal) => {
          const progress = Math.min(100, Math.round((goal.currentAmount / goal.targetAmount) * 100));
          const remaining = Math.max(0, goal.targetAmount - goal.currentAmount);

          return (
            <div
              key={goal.id}
              className="vyra-card p-6 border-slate-800 flex flex-col justify-between space-y-4 hover:border-cyan-500/30 transition-all group"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center font-bold"
                      style={{ backgroundColor: `${goal.color || '#06B6D4'}20`, color: goal.color || '#06B6D4' }}
                    >
                      {goal.category === 'Safety' ? <Shield className="w-5 h-5" /> :
                       goal.category === 'Productivity' ? <Laptop className="w-5 h-5" /> :
                       goal.category === 'Wealth' ? <Award className="w-5 h-5" /> :
                       <Palmtree className="w-5 h-5" />}
                    </div>
                    <div>
                      <h3 className="font-sora font-semibold text-base text-white group-hover:text-cyan-300 transition-colors">
                        {goal.title}
                      </h3>
                      <span className="text-[11px] text-slate-400">{goal.category} Milestone</span>
                    </div>
                  </div>

                  <span className="text-sm font-mono font-bold text-cyan-400 px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                    {progress}%
                  </span>
                </div>

                {goal.description && (
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2">{goal.description}</p>
                )}
              </div>

              {/* Progress Bar */}
              <div className="space-y-1.5">
                <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{
                      width: `${progress}%`,
                      backgroundColor: goal.color || '#06B6D4'
                    }}
                  />
                </div>

                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-white font-semibold">
                    Saved: {formatINR(goal.currentAmount)}
                  </span>
                  <span className="text-slate-400">
                    Target: {formatINR(goal.targetAmount)}
                  </span>
                </div>
              </div>

              {/* Calculation & Velocity */}
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80 text-xs flex items-center justify-between">
                <div className="flex items-center gap-2 text-slate-300">
                  <Calendar className="w-4 h-4 text-cyan-400" />
                  <span>Target Date: {formatDate(goal.deadline)}</span>
                </div>
                <div className="font-mono text-cyan-300 font-bold">
                  Save {formatINR(goal.monthlyRequired)}/mo
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-2 border-t border-slate-800/80">
                <button
                  onClick={() => deleteGoal(goal.id)}
                  className="p-1.5 text-slate-500 hover:text-rose-400 transition-colors"
                  title="Remove goal"
                >
                  <Trash2 className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setActiveContributeGoal(goal)}
                  className="vyra-btn-primary !py-1.5 !px-3.5 text-xs font-semibold"
                >
                  <Coins className="w-3.5 h-3.5" />
                  <span>Add Contribution</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Contribution Modal */}
      {activeContributeGoal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in">
          <div className="w-full max-w-sm p-6 rounded-2xl vyra-card border border-slate-700 shadow-2xl">
            <h3 className="font-sora font-semibold text-lg text-white mb-1">
              Contribute to {activeContributeGoal.title}
            </h3>
            <p className="text-xs text-slate-400 mb-4">
              Funds will be transferred from your Available Balance ({formatINR(user.availableBalance)}) into this savings bucket.
            </p>

            <form onSubmit={handleContribute} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Contribution Amount (₹)
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-2.5 text-slate-400 font-bold">₹</span>
                  <input
                    type="number"
                    step="any"
                    required
                    placeholder="e.g. 2500"
                    value={contributionAmount}
                    onChange={(e) => setContributionAmount(e.target.value)}
                    className="vyra-input pl-8 font-mono text-lg font-bold"
                  />
                </div>
              </div>

              {/* Quick Pills */}
              <div className="flex gap-2">
                {[1000, 2500, 5000].map(val => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => setContributionAmount(val)}
                    className="flex-1 py-1 rounded-lg text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                  >
                    +{formatINR(val)}
                  </button>
                ))}
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setActiveContributeGoal(null)}
                  className="w-1/2 vyra-btn-secondary"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-1/2 vyra-btn-primary"
                >
                  Deposit Funds
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Create New Goal Modal */}
      {isAddOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in">
          <div className="w-full max-w-md p-6 rounded-2xl vyra-card border border-slate-700 shadow-2xl">
            <h3 className="font-sora font-semibold text-lg text-white mb-1">
              Create New Financial Goal
            </h3>
            <p className="text-xs text-slate-400 mb-4">Set a clear milestone and target date</p>

            <form onSubmit={handleCreateGoal} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Goal Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Higher Education Fund, iPhone, Bali Trip"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="vyra-input"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Target Amount (₹)</label>
                  <input
                    type="number"
                    required
                    placeholder="50000"
                    value={newTarget}
                    onChange={(e) => setNewTarget(e.target.value)}
                    className="vyra-input font-mono"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Initial Saved (₹)</label>
                  <input
                    type="number"
                    placeholder="0"
                    value={newCurrent}
                    onChange={(e) => setNewCurrent(e.target.value)}
                    className="vyra-input font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Target Date</label>
                  <input
                    type="date"
                    required
                    value={newDeadline}
                    onChange={(e) => setNewDeadline(e.target.value)}
                    className="vyra-input"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Category</label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    className="vyra-input bg-slate-900"
                  >
                    <option value="Safety">Safety / Emergency</option>
                    <option value="Productivity">Tech / Workstation</option>
                    <option value="Wealth">Net Worth Milestone</option>
                    <option value="Lifestyle">Travel & Lifestyle</option>
                  </select>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsAddOpen(false)}
                  className="w-1/2 vyra-btn-secondary"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-1/2 vyra-btn-primary"
                >
                  Save Milestone
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
