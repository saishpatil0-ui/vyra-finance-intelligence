import React from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import {
  Wallet,
  TrendingDown,
  PiggyBank,
  Activity,
  ArrowRight,
  PlusCircle,
  Sparkles,
  Bot,
  Target,
  ArrowUpRight,
  Shield,
  Receipt
} from 'lucide-react';
import { useFinance } from '../context/FinanceContext';
import { MetricCard } from '../components/common/MetricCard';
import { AIInsightBanner } from '../components/common/AIInsightBanner';
import { CashFlowChart } from '../components/charts/CashFlowChart';
import { CategoryPieChart } from '../components/charts/CategoryPieChart';
import { formatINR, formatDate, formatRelativeTime } from '../utils/formatters';

export const Dashboard = () => {
  const navigate = useNavigate();
  const outletContext = useOutletContext();
  const {
    user,
    healthScore,
    transactions,
    goals,
    cashFlowHistory,
    categoryBreakdown
  } = useFinance();

  const handleOpenAddModal = () => {
    if (outletContext && outletContext.openAddModal) {
      outletContext.openAddModal();
    }
  };

  const recentTransactions = transactions.slice(0, 5);

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Top Banner: AI Contextual Intelligence */}
      <AIInsightBanner
        insight={healthScore.aiInsight}
        onAskMore={() => navigate('/ai-assistant')}
      />

      {/* 4 Showcase Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="Available Balance"
          value={formatINR(user.availableBalance)}
          subtitle="Real-time liquid reserve"
          icon={Wallet}
          accentColor="cyan"
          trend="+₹7,500"
          trendPositive={true}
          onClick={() => navigate('/transactions')}
        />

        <MetricCard
          title="Monthly Spending"
          value={formatINR(user.monthlySpending)}
          subtitle="Oct 2026 burn rate"
          icon={TrendingDown}
          accentColor="blue"
          trend="+18%"
          trendPositive={false}
          onClick={() => navigate('/budget')}
        />

        <MetricCard
          title="Total Savings"
          value={formatINR(user.totalSavings)}
          subtitle="Allocated towards goals"
          icon={PiggyBank}
          accentColor="emerald"
          trend="+22%"
          trendPositive={true}
          onClick={() => navigate('/goals')}
        />

        <MetricCard
          title="Financial Health"
          value={`${healthScore.overall}/100`}
          subtitle="Status: Healthy / Balanced"
          icon={Activity}
          accentColor="amber"
          badge="Diagnosed"
          onClick={() => navigate('/financial-health')}
        />
      </div>

      {/* Next Best Action Card */}
      <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-950/30 via-slate-900 to-slate-900 border border-emerald-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold shrink-0">
            <Shield className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 font-sora block">
              Recommended Next Best Action
            </span>
            <p className="text-xs text-slate-300">
              {healthScore.nextBestAction}
            </p>
          </div>
        </div>
        <button
          onClick={() => navigate('/goals')}
          className="vyra-btn-outline !py-1.5 !px-3 text-xs whitespace-nowrap self-start sm:self-center"
        >
          <span>Fund Target</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Middle Row: Cash Flow Trends & Categorical Donut Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Cash Flow History */}
        <div className="lg:col-span-2 vyra-card p-5 border-slate-800">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-sora font-semibold text-base text-white">Monthly Cash Flow</h3>
              <p className="text-xs text-slate-400">Income vs. Spending vs. Retained Savings</p>
            </div>
            <button
              onClick={() => navigate('/analytics')}
              className="text-xs text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-medium"
            >
              <span>Full Analytics</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
          <CashFlowChart data={cashFlowHistory} />
        </div>

        {/* Right 1 Col: Spending by Category */}
        <div className="vyra-card p-5 border-slate-800 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h3 className="font-sora font-semibold text-base text-white">Spending Breakdown</h3>
              <p className="text-xs text-slate-400">Current month categorical burn</p>
            </div>
            <button
              onClick={() => navigate('/budget')}
              className="text-xs text-cyan-400 hover:text-cyan-300 font-medium"
            >
              Budgets
            </button>
          </div>
          <CategoryPieChart data={categoryBreakdown} />
        </div>
      </div>

      {/* Bottom Row: Active Goals Progress & Recent Transactions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 1 Col: Goals Velocity */}
        <div className="vyra-card p-5 border-slate-800 space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <div>
              <h3 className="font-sora font-semibold text-base text-white flex items-center gap-2">
                <Target className="w-4 h-4 text-cyan-400" />
                Active Goals
              </h3>
              <p className="text-xs text-slate-400">Target completion trajectories</p>
            </div>
            <button
              onClick={() => navigate('/goals')}
              className="text-xs text-cyan-400 hover:text-cyan-300 font-medium"
            >
              View all
            </button>
          </div>

          <div className="space-y-3.5">
            {goals.slice(0, 3).map((goal) => {
              const progress = Math.round((goal.currentAmount / goal.targetAmount) * 100);
              return (
                <div key={goal.id} className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-white truncate">{goal.title}</span>
                    <span className="font-mono font-bold text-cyan-400">{progress}%</span>
                  </div>

                  {/* Progress bar */}
                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${progress}%`,
                        backgroundColor: goal.color || '#06B6D4'
                      }}
                    />
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
                    <span>{formatINR(goal.currentAmount)}</span>
                    <span>Target: {formatINR(goal.targetAmount)}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right 2 Cols: Recent Transactions Ledger */}
        <div className="lg:col-span-2 vyra-card p-5 border-slate-800 space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <div>
              <h3 className="font-sora font-semibold text-base text-white flex items-center gap-2">
                <Receipt className="w-4 h-4 text-emerald-400" />
                Recent Transactions
              </h3>
              <p className="text-xs text-slate-400">Latest UPI credits & expenses</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleOpenAddModal}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/20 transition-colors"
              >
                <PlusCircle className="w-3.5 h-3.5" />
                <span>Add Entry</span>
              </button>
              <button
                onClick={() => navigate('/transactions')}
                className="text-xs text-cyan-400 hover:text-cyan-300 font-medium"
              >
                All Passbook
              </button>
            </div>
          </div>

          <div className="divide-y divide-slate-800/80">
            {recentTransactions.map((tx) => {
              const isIncome = tx.type === 'income';
              return (
                <div
                  key={tx.id}
                  className="py-3 flex items-center justify-between hover:bg-slate-800/30 px-2 rounded-xl transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                        isIncome
                          ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                          : 'bg-slate-800 text-slate-300 border border-slate-700'
                      }`}
                    >
                      {isIncome ? (
                        <ArrowUpRight className="w-4 h-4" />
                      ) : (
                        <Receipt className="w-4 h-4 text-cyan-400" />
                      )}
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-white truncate max-w-xs">{tx.title}</p>
                      <div className="flex items-center gap-2 text-[11px] text-slate-400">
                        <span className="px-1.5 py-0.2 rounded bg-slate-800 text-slate-300">{tx.category}</span>
                        <span>•</span>
                        <span>{formatRelativeTime(tx.date)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-right font-mono">
                    <span
                      className={`font-bold text-sm ${
                        isIncome ? 'text-emerald-400' : 'text-slate-200'
                      }`}
                    >
                      {isIncome ? '+' : '-'}{formatINR(tx.amount)}
                    </span>
                    <p className="text-[10px] text-slate-400">{tx.paymentMethod}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
