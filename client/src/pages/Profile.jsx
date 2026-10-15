import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  User,
  Mail,
  Briefcase,
  Shield,
  Bell,
  RefreshCw,
  LogOut,
  Sparkles,
  Award,
  CheckCircle2,
  Lock
} from 'lucide-react';
import { useFinance } from '../context/FinanceContext';
import { formatINR } from '../utils/formatters';

export const Profile = () => {
  const navigate = useNavigate();
  const { user, updateUserProfile, resetToDefaultData, healthScore } = useFinance();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [stage, setStage] = useState(user.stage);
  const [monthlyIncome, setMonthlyIncome] = useState(user.monthlyIncome);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    updateUserProfile({
      name,
      email,
      stage,
      monthlyIncome: Number(monthlyIncome)
    });
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2000);
  };

  const handleReset = () => {
    if (window.confirm('Reset all demo transactions and goals back to the initial BridgeAura seed data?')) {
      resetToDefaultData();
      alert('Portfolio reset successfully.');
      navigate('/dashboard');
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in duration-300">
      {/* Header */}
      <div>
        <h2 className="font-sora font-bold text-2xl text-white">Profile & Preferences</h2>
        <p className="text-xs text-slate-400">Manage your identity, cohort stage, and intelligence configuration</p>
      </div>

      {/* User Hero Card */}
      <div className="vyra-card p-6 border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-20 h-20 rounded-2xl object-cover border-2 border-cyan-500/40 shadow-lg"
          />
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-sora font-bold text-xl text-white">{user.name}</h3>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 uppercase font-mono">
                BridgeAura Fellow
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">{user.email}</p>
            <p className="text-xs text-cyan-400 font-medium mt-1">{user.stage}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleReset}
            className="vyra-btn-secondary !py-2 !px-3.5 text-xs font-semibold text-rose-300 border-rose-500/30 hover:bg-rose-500/10"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Reset Demo Data</span>
          </button>
        </div>
      </div>

      {/* Profile Form */}
      <div className="vyra-card p-6 border-slate-800 space-y-6">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <h4 className="font-sora font-semibold text-base text-white">Personal & Financial Baseline</h4>
          {savedSuccess && (
            <span className="text-xs text-emerald-400 font-medium flex items-center gap-1 animate-in fade-in">
              <CheckCircle2 className="w-4 h-4" />
              Settings Updated
            </span>
          )}
        </div>

        <form onSubmit={handleSave} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">Full Name</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="vyra-input"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">Email Address</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="vyra-input"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">Current Stage</label>
              <select
                value={stage}
                onChange={(e) => setStage(e.target.value)}
                className="vyra-input bg-slate-900"
              >
                <option value="College Student">College Student</option>
                <option value="Tech Intern">Tech Intern</option>
                <option value="Working Professional">Working Professional</option>
                <option value="Freelancer">Freelancer</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                Monthly Income Baseline (₹)
              </label>
              <input
                type="number"
                value={monthlyIncome}
                onChange={(e) => setMonthlyIncome(e.target.value)}
                className="vyra-input font-mono"
              />
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="vyra-btn-primary !py-2.5 !px-6 text-xs font-semibold"
            >
              Save Profile Changes
            </button>
          </div>
        </form>
      </div>

      {/* Intelligence & App Preferences */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="vyra-card p-5 border-slate-800 space-y-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <h4 className="font-sora font-semibold text-sm text-white">AI Co-Pilot Settings</h4>
          </div>
          <p className="text-xs text-slate-400">Contextual reasoning parameters for Ask VYRA co-pilot</p>
          <div className="space-y-2 text-xs">
            <label className="flex items-center justify-between p-2 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-slate-300">Ground reasoning in active portfolio</span>
              <input type="checkbox" defaultChecked className="accent-cyan-400" />
            </label>
            <label className="flex items-center justify-between p-2 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-slate-300">Strict educational advice guardrails</span>
              <input type="checkbox" defaultChecked disabled className="accent-cyan-400" />
            </label>
          </div>
        </div>

        <div className="vyra-card p-5 border-slate-800 space-y-3">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-emerald-400" />
            <h4 className="font-sora font-semibold text-sm text-white">Data Governance</h4>
          </div>
          <p className="text-xs text-slate-400">Local encryption and transaction persistence</p>
          <div className="space-y-2 text-xs">
            <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 flex justify-between items-center">
              <span className="text-slate-300">Currency Standard</span>
              <span className="font-mono text-cyan-300 font-bold">INR (₹)</span>
            </div>
            <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 flex justify-between items-center">
              <span className="text-slate-300">Data Storage Mode</span>
              <span className="font-mono text-emerald-400 font-semibold">Local Encrypted</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
