import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Receipt, PieChart, Target, Bot } from 'lucide-react';

const mobileTabs = [
  { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  { name: 'Passbook', path: '/transactions', icon: Receipt },
  { name: 'Ask VYRA', path: '/ai-assistant', icon: Bot, isCenter: true },
  { name: 'Budget', path: '/budget', icon: PieChart },
  { name: 'Goals', path: '/goals', icon: Target },
];

export const MobileNav = () => {
  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#080C15]/95 backdrop-blur-xl border-t border-slate-800/80 px-2 py-1.5 safe-area-pb">
      <div className="flex items-center justify-around">
        {mobileTabs.map((tab) => {
          const Icon = tab.icon;

          if (tab.isCenter) {
            return (
              <NavLink
                key={tab.path}
                to={tab.path}
                className="relative -top-4 flex flex-col items-center group"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/30 group-hover:shadow-cyan-500/50 group-active:scale-95 transition-all">
                  <Icon className="w-6 h-6 animate-pulse-subtle" />
                </div>
                <span className="text-[10px] font-semibold text-cyan-400 mt-1">
                  {tab.name}
                </span>
              </NavLink>
            );
          }

          return (
            <NavLink
              key={tab.path}
              to={tab.path}
              className={({ isActive }) =>
                `flex flex-col items-center py-1 px-2.5 rounded-xl transition-colors ${
                  isActive ? 'text-cyan-400 font-semibold' : 'text-slate-400 hover:text-slate-200'
                }`
              }
            >
              <Icon className="w-5 h-5" />
              <span className="text-[10px] mt-1">{tab.name}</span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};
