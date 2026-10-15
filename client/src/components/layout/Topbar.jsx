import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { PlusCircle, Bot, Bell, Sparkles, Menu, X, ShieldCheck } from 'lucide-react';
import { useFinance } from '../../context/FinanceContext';
import { formatINR } from '../../utils/formatters';

export const Topbar = ({ onOpenAddModal, onToggleMobileNav }) => {
  const { user } = useFinance();
  const navigate = useNavigate();
  const location = useLocation();
  const [showNotifications, setShowNotifications] = useState(false);

  // Time-aware greeting
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 17) return 'Good afternoon';
    return 'Good evening';
  };

  return (
    <header className="sticky top-0 z-20 w-full vyra-glass-nav px-4 lg:px-8 py-3.5 flex items-center justify-between">
      {/* Left: Mobile hamburger & Greeting */}
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleMobileNav}
          className="lg:hidden p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800/60"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div>
          <div className="flex items-center gap-2">
            <h1 className="font-sora font-semibold text-white text-base lg:text-lg">
              {getGreeting()}, <span className="text-cyan-400">{user.name.split(' ')[0]}</span>
            </h1>
            <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              BridgeAura Active
            </span>
          </div>
          <p className="text-xs text-slate-400 hidden sm:block">
            Here's your real-time financial telemetry today.
          </p>
        </div>
      </div>

      {/* Right: Quick Actions */}
      <div className="flex items-center gap-2.5 sm:gap-3">
        {/* Quick Ask VYRA AI */}
        <button
          onClick={() => navigate('/ai-assistant')}
          className="hidden md:inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium text-cyan-300 bg-cyan-950/40 hover:bg-cyan-900/50 border border-cyan-500/30 transition-all hover:border-cyan-500/60 group shadow-sm"
        >
          <Bot className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
          <span>Ask VYRA AI</span>
          <span className="text-[10px] bg-cyan-500/20 px-1.5 py-0.5 rounded text-cyan-300 font-mono">
            ⌘K
          </span>
        </button>

        {/* Add Transaction Button */}
        <button
          onClick={onOpenAddModal}
          className="vyra-btn-primary !py-2 !px-3.5 sm:!px-4 text-xs font-semibold"
        >
          <PlusCircle className="w-4 h-4" />
          <span>Add Transaction</span>
        </button>

        {/* Notification Bell */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="p-2 rounded-xl text-slate-400 hover:text-white bg-slate-900 border border-slate-800/80 hover:border-slate-700 transition-colors relative"
            aria-label="Notifications"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
          </button>

          {/* Notification Dropdown */}
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 p-3 rounded-2xl vyra-card shadow-2xl border border-slate-700/80 z-50 animate-in fade-in slide-in-from-top-2">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <span className="text-xs font-semibold text-white">Smart Alerts</span>
                <span className="text-[10px] text-cyan-400 font-medium">2 new</span>
              </div>
              <div className="mt-2 space-y-2">
                <div className="p-2.5 rounded-xl bg-slate-800/40 border border-slate-800 text-xs">
                  <div className="flex items-center gap-1.5 text-cyan-400 font-medium mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    AI Spending Observation
                  </div>
                  <p className="text-slate-300 text-[11px]">
                    Food and dining expenses are up 18%. Recommending ₹1,500 lifestyle trim.
                  </p>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-800/40 border border-slate-800 text-xs">
                  <div className="flex items-center gap-1.5 text-emerald-400 font-medium mb-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Emergency Buffer Milestone
                  </div>
                  <p className="text-slate-300 text-[11px]">
                    You have crossed 60% of your 3-Month Emergency Fund goal.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* User Mini Avatar Button */}
        <div 
          onClick={() => navigate('/profile')}
          className="flex items-center gap-2 pl-1 cursor-pointer group"
        >
          <img
            src={user.avatar}
            alt={user.name}
            className="w-8 h-8 rounded-xl object-cover border border-slate-700 group-hover:border-cyan-400 transition-colors"
          />
        </div>
      </div>
    </header>
  );
};
