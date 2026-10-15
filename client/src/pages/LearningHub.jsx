import React, { useState } from 'react';
import {
  GraduationCap,
  Clock,
  Award,
  CheckCircle2,
  BookOpen,
  ArrowRight,
  X,
  PieChart,
  Shield,
  TrendingUp,
  CreditCard,
  FileText,
  Zap,
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useFinance } from '../context/FinanceContext';

export const LearningHub = () => {
  const { learningModules, completedLessons, toggleLessonComplete } = useFinance();
  const [selectedModule, setSelectedModule] = useState(null);

  const handleToggle = (id) => {
    toggleLessonComplete(id);
    if (!completedLessons.includes(id)) {
      confetti({ particleCount: 50, spread: 50 });
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-sora font-bold text-2xl text-white">Financial Learning Hub</h2>
          <p className="text-xs text-slate-400">3-to-5 minute bite-sized financial literacy modules tailored for Indian youth</p>
        </div>

        <div className="flex items-center gap-2 text-xs font-semibold px-3.5 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300">
          <Award className="w-4 h-4 text-emerald-400" />
          <span>Completed: <strong className="text-emerald-400">{completedLessons.length}</strong> / {learningModules.length} Modules</span>
        </div>
      </div>

      {/* Progress Card */}
      <div className="vyra-card p-5 border-slate-800 bg-gradient-to-r from-slate-900 via-indigo-950/20 to-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400 font-sora">
            Financial Literacy Quotient
          </span>
          <h3 className="font-sora font-semibold text-lg text-white">
            Level 02: Foundations Active
          </h3>
          <p className="text-xs text-slate-300">
            Read all 6 modules to unlock the "Certified BridgeAura Wealth Apprentice" badge.
          </p>
        </div>

        <div className="w-full sm:w-48 space-y-1.5">
          <div className="flex justify-between text-xs font-mono">
            <span className="text-slate-400">Progress</span>
            <span className="text-indigo-400 font-bold">
              {Math.round((completedLessons.length / learningModules.length) * 100)}%
            </span>
          </div>
          <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
            <div
              className="bg-gradient-to-r from-indigo-500 to-cyan-400 h-full rounded-full transition-all duration-500"
              style={{ width: `${(completedLessons.length / learningModules.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Lesson Modules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {learningModules.map((mod) => {
          const isDone = completedLessons.includes(mod.id);

          return (
            <div
              key={mod.id}
              className={`vyra-card p-5 border flex flex-col justify-between space-y-4 hover:border-cyan-500/40 transition-all group ${
                isDone ? 'border-emerald-500/30 bg-emerald-950/10' : 'border-slate-800'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">
                    {mod.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{mod.readTime}</span>
                  </div>
                </div>

                <h3 className="font-sora font-semibold text-base text-white group-hover:text-cyan-300 transition-colors mb-2">
                  {mod.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                  {mod.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => setSelectedModule(mod)}
                  className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Read Lesson</span>
                </button>

                <button
                  onClick={() => handleToggle(mod.id)}
                  className={`inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-lg transition-colors font-medium ${
                    isDone
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                      : 'bg-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{isDone ? 'Completed' : 'Mark Done'}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Full Lesson Reader Modal */}
      {selectedModule && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
          <div className="w-full max-w-2xl max-h-[85vh] p-6 lg:p-8 rounded-2xl vyra-card border border-slate-700 shadow-2xl flex flex-col">
            <div className="flex items-start justify-between pb-4 border-b border-slate-800">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 font-mono">
                  {selectedModule.category} • {selectedModule.readTime}
                </span>
                <h2 className="font-sora font-bold text-xl text-white mt-1">
                  {selectedModule.title}
                </h2>
              </div>
              <button
                onClick={() => setSelectedModule(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-5 space-y-4 text-xs sm:text-sm text-slate-200 leading-relaxed whitespace-pre-line font-light">
              {selectedModule.content}
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setSelectedModule(null)}
                className="vyra-btn-secondary !py-2 !px-4 text-xs font-semibold"
              >
                Close
              </button>

              <button
                type="button"
                onClick={() => {
                  handleToggle(selectedModule.id);
                  setSelectedModule(null);
                }}
                className="vyra-btn-primary !py-2 !px-5 text-xs font-semibold"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Mark Lesson Complete</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
