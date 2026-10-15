import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Bot, ArrowRight, TrendingDown } from 'lucide-react';

export const AIInsightBanner = ({ insight, onAskMore }) => {
  const navigate = useNavigate();

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-950/40 via-blue-950/30 to-indigo-950/40 border border-cyan-500/30 p-5 backdrop-blur-md shadow-lg shadow-cyan-500/5 group">
      {/* Decorative ambient glow */}
      <div className="absolute top-0 right-0 w-96 h-full bg-gradient-to-l from-cyan-500/10 to-transparent pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shrink-0 shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            <Sparkles className="w-5 h-5 text-cyan-200 animate-pulse" />
          </div>

          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-sora">
                VYRA AI Insight
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 font-medium">
                Live Analysis
              </span>
            </div>
            <p className="text-sm text-slate-200 leading-relaxed max-w-3xl">
              {insight ||
                'Your food and travel expenses increased 18% this month. Reducing discretionary spending by approximately ₹1,500 could help you reach your emergency-fund goal 23 days earlier.'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0 pt-2 md:pt-0">
          <button
            onClick={onAskMore || (() => navigate('/ai-assistant'))}
            className="vyra-btn-primary !py-2 !px-4 text-xs font-semibold whitespace-nowrap shadow-md"
          >
            <Bot className="w-4 h-4" />
            <span>Consult AI Co-Pilot</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
