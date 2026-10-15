import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  Receipt,
  PieChart,
  Target,
  TrendingUp,
  Activity,
  Bot,
  Compass,
  GraduationCap,
  BarChart3,
  User,
  Sparkles,
  Zap,
  ArrowRight
} from 'lucide-react';
import { useFinance } from '../../context/FinanceContext';

const navigationLinks = [
  { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  { name: 'Transactions', path: '/transactions', icon: Receipt },
  { name: 'Smart Budget', path: '/budget', icon: PieChart },
  { name: 'Goals & Milestones', path: '/goals', icon: Target },
  { name: 'Investments', path: '/investments', icon: TrendingUp },
  { name: 'Financial Health', path: '/financial-health', icon: Activity, badge: '78/100' },
  { name: 'Ask VYRA AI', path: '/ai-assistant', icon: Bot, highlight: true },
  { name: 'Growth Journey', path: '/growth-journey', icon: Compass },
  { name: 'Learning Hub', path: '/learn', icon: GraduationCap },
  { name: 'Analytics', path: '/analytics', icon: BarChart3 },
];

export const Sidebar = () => {
  const { user, healthScore } = useFinance();
  const navigate = useNavigate();

  return (
    <aside className="hidden lg:flex flex-col w-64 h-screen sticky top-0 bg-[#0A0E1A]/95 border-r border-slate-800/80 backdrop-blur-xl z-30 select-none">
      {/* Brand Header */}
      <div className="p-5 border-b border-slate-800/60">
        <div 
          onClick={() => navigate('/')} 
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all">
            <span className="font-sora font-extrabold text-xl text-white tracking-wider">V</span>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-sora font-bold text-lg text-white tracking-tight">VYRA</span>
              <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                PRO
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-medium tracking-wide">Growth Intelligence</p>
          </div>
        </div>
      </div>

      {/* Nav List */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        <div className="px-3 pb-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">
          Core Engine
        </div>

        {navigationLinks.slice(0, 5).map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center justify-between px-3 py-2 rounded-xl text-sm font-medium transition-all group ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500/15 to-blue-500/10 text-cyan-300 border border-cyan-500/30 font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`
              }
            >
              <div className="flex items-center gap-3">
                <Icon className="w-4 h-4 transition-transform group-hover:scale-110" />
                <span>{item.name}</span>
              </div>
              {item.badge && (
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 font-mono">
                  {item.badge}
                </span>
              )}
            </NavLink>
          );
        })}

        <div className="px-3 pt-4 pb-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">
          Intelligence & Growth
        </div>

        {navigationLinks.slice(5).map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center justify-between px-3 py-2 rounded-xl text-sm font-medium transition-all group ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500/15 to-blue-500/10 text-cyan-300 border border-cyan-500/30 font-semibold'
                    : item.highlight
                    ? 'text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 border border-cyan-500/20'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`
              }
            >
              <div className="flex items-center gap-3">
                <Icon className={`w-4 h-4 transition-transform group-hover:scale-110 ${item.highlight ? 'text-cyan-400' : ''}`} />
                <span>{item.name}</span>
              </div>
              {item.highlight && (
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
              )}
              {item.badge && (
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 font-mono font-semibold">
                  {item.badge}
                </span>
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* Financial Health Mini Card */}
      <div className="p-3 border-t border-slate-800/80">
        <div className="p-3 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 relative overflow-hidden group">
          <div className="absolute -top-10 -right-10 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl group-hover:bg-cyan-500/20 transition-all"></div>
          
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-cyan-400" />
              Health Score
            </span>
            <span className="font-sora font-bold text-sm text-emerald-400">
              {healthScore.overall}/100
            </span>
          </div>

          <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mb-2">
            <div 
              className="bg-gradient-to-r from-cyan-500 to-emerald-400 h-full rounded-full transition-all duration-700" 
              style={{ width: `${healthScore.overall}%` }}
            />
          </div>

          <button 
            onClick={() => navigate('/financial-health')}
            className="w-full text-left text-[11px] text-slate-400 hover:text-cyan-300 flex items-center justify-between pt-1 transition-colors"
          >
            <span>View diagnosis & actions</span>
            <ArrowRight className="w-3 h-3 text-slate-500 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* User Mini Profile */}
        <div 
          onClick={() => navigate('/profile')}
          className="mt-3 flex items-center justify-between p-2 rounded-xl hover:bg-slate-800/50 cursor-pointer transition-colors"
        >
          <div className="flex items-center gap-2.5">
            <img 
              src={user.avatar} 
              alt={user.name} 
              className="w-8 h-8 rounded-full object-cover border border-cyan-500/30" 
            />
            <div className="truncate">
              <p className="text-xs font-semibold text-white truncate">{user.name}</p>
              <p className="text-[10px] text-slate-400 truncate">{user.stage}</p>
            </div>
          </div>
          <User className="w-4 h-4 text-slate-400 hover:text-white" />
        </div>
      </div>
    </aside>
  );
};
