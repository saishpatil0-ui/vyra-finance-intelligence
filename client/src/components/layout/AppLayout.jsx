import React, { useState } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Topbar } from './Topbar';
import { MobileNav } from './MobileNav';
import { AddTransactionModal } from '../common/AddTransactionModal';
import { X, Sparkles, LayoutDashboard, Receipt, PieChart, Target, TrendingUp, Activity, Bot, Compass, GraduationCap, BarChart3, User } from 'lucide-react';

const mobileDrawerLinks = [
  { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  { name: 'Transactions', path: '/transactions', icon: Receipt },
  { name: 'Smart Budget', path: '/budget', icon: PieChart },
  { name: 'Goals', path: '/goals', icon: Target },
  { name: 'Investments', path: '/investments', icon: TrendingUp },
  { name: 'Financial Health', path: '/financial-health', icon: Activity },
  { name: 'Ask VYRA AI', path: '/ai-assistant', icon: Bot },
  { name: 'Growth Journey', path: '/growth-journey', icon: Compass },
  { name: 'Learning Hub', path: '/learn', icon: GraduationCap },
  { name: 'Analytics', path: '/analytics', icon: BarChart3 },
  { name: 'Profile & Settings', path: '/profile', icon: User },
];

export const AppLayout = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#080C15] flex text-slate-100">
      {/* Desktop Persistent Sidebar */}
      <Sidebar />

      {/* Mobile Off-canvas Drawer */}
      {isMobileDrawerOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div 
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setIsMobileDrawerOpen(false)}
          />
          <div className="relative w-72 max-w-[80vw] h-full bg-[#0A0E1A] border-r border-slate-800 p-5 flex flex-col z-10 animate-in slide-in-from-left duration-200">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-bold font-sora text-white">
                  V
                </div>
                <span className="font-sora font-bold text-white">VYRA</span>
              </div>
              <button 
                onClick={() => setIsMobileDrawerOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex-1 py-4 space-y-1 overflow-y-auto">
              {mobileDrawerLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMobileDrawerOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                        isActive 
                          ? 'bg-cyan-500/15 text-cyan-300 font-semibold border border-cyan-500/30' 
                          : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
                      }`
                    }
                  >
                    <Icon className="w-4 h-4 text-cyan-400" />
                    <span>{item.name}</span>
                  </NavLink>
                );
              })}
            </nav>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 pb-20 lg:pb-8">
        <Topbar 
          onOpenAddModal={() => setIsAddModalOpen(true)}
          onToggleMobileNav={() => setIsMobileDrawerOpen(prev => !prev)}
        />
        
        <main className="flex-1 px-4 lg:px-8 py-6 max-w-7xl w-full mx-auto">
          <Outlet context={{ openAddModal: () => setIsAddModalOpen(true) }} />
        </main>
      </div>

      {/* Global Add Transaction Modal */}
      <AddTransactionModal 
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
      />

      {/* Mobile Bottom Navigation */}
      <MobileNav />
    </div>
  );
};
