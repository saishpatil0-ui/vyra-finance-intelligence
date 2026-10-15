import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  GraduationCap,
  Briefcase,
  Laptop,
  Coins,
  Shield,
  Target,
  Plane,
  TrendingUp,
  Award
} from 'lucide-react';
import { useFinance } from '../context/FinanceContext';
import { formatINR } from '../utils/formatters';

const STAGES = [
  { id: 'Student', label: 'College Student', desc: 'Managing pocket allowance & hostel expenses', icon: GraduationCap },
  { id: 'Intern', label: 'Tech / Corporate Intern', desc: 'Earning first stipend & building habits', icon: Laptop },
  { id: 'Working Professional', label: 'Working Professional', desc: 'Full-time salary with tax & investment goals', icon: Briefcase },
  { id: 'Freelancer', label: 'Independent Freelancer', desc: 'Variable project-based income streams', icon: Coins }
];

const GOALS = [
  { id: 'Emergency Fund', label: 'Emergency Fund', target: 60000, desc: '3-6 months buffer for peace of mind', icon: Shield },
  { id: 'First ₹1 Lakh', label: 'First ₹1 Lakh Net Worth', target: 100000, desc: 'The psychological momentum milestone', icon: Award },
  { id: 'New Laptop', label: 'Laptop / Tech Equipment', target: 85000, desc: 'Workstation for AI & engineering builds', icon: Laptop },
  { id: 'Travel', label: 'Graduation / Vacation Trip', target: 25000, desc: 'Guilt-free adventure funded upfront', icon: Plane },
  { id: 'Investment', label: 'Long-term Stock / SIP Wealth', target: 150000, desc: 'Harnessing the Indian economic rally', icon: TrendingUp }
];

const CONFIDENCE_LEVELS = [
  { id: 'Beginner', label: 'Beginner', desc: 'I find finance confusing and often lose track of UPI spends.' },
  { id: 'Basic', label: 'Basic', desc: 'I track big expenses but don’t have a structured budget plan.' },
  { id: 'Comfortable', label: 'Comfortable', desc: 'I save some money regularly, looking to optimize SIPs & taxes.' },
  { id: 'Advanced', label: 'Advanced', desc: 'I actively invest and want high-speed data & AI reasoning.' }
];

export const Onboarding = () => {
  const navigate = useNavigate();
  const { updateUserProfile, user } = useFinance();

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: user?.name || 'Saish Patil',
    stage: 'Student',
    monthlyIncome: 35000,
    monthlyExpenses: 18200,
    currentSavings: 12000,
    primaryGoal: 'Emergency Fund',
    confidence: 'Basic'
  });

  const [isComputing, setIsComputing] = useState(false);

  const handleNext = () => {
    if (step < 6) {
      setStep(prev => prev + 1);
    } else {
      // Final calculation animation
      setIsComputing(true);
      setTimeout(() => {
        updateUserProfile({
          name: formData.name,
          stage: formData.stage,
          monthlyIncome: Number(formData.monthlyIncome),
          monthlySpending: Number(formData.monthlyExpenses),
          totalSavings: Number(formData.currentSavings),
          availableBalance: Math.max(15000, Number(formData.monthlyIncome) - Number(formData.monthlyExpenses) + Number(formData.currentSavings))
        });
        navigate('/dashboard');
      }, 1200);
    }
  };

  const handlePrev = () => {
    if (step > 1) setStep(prev => prev - 1);
  };

  return (
    <div className="min-h-screen bg-[#080C15] text-slate-100 flex flex-col justify-between p-4 lg:p-8">
      {/* Header */}
      <div className="max-w-2xl mx-auto w-full flex items-center justify-between py-4">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-white font-sora">
            V
          </div>
          <span className="font-sora font-bold text-white text-lg">VYRA</span>
        </div>

        <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 font-mono">
          <span>STEP {step} OF 6</span>
          <span className="text-cyan-400">({Math.round((step / 6) * 100)}%)</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="max-w-2xl mx-auto w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mb-8">
        <div 
          className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full rounded-full transition-all duration-300"
          style={{ width: `${(step / 6) * 100}%` }}
        />
      </div>

      {/* Main Form Container */}
      <div className="max-w-2xl mx-auto w-full flex-1 flex flex-col justify-center">
        {isComputing ? (
          <div className="text-center py-16 space-y-4 animate-in fade-in">
            <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto animate-spin">
              <Sparkles className="w-8 h-8" />
            </div>
            <h2 className="font-sora font-bold text-2xl text-white">Synthesizing Your Financial Profile...</h2>
            <p className="text-sm text-slate-400 max-w-sm mx-auto">
              Calibrating your 50/30/20 budget framework, emergency velocity, and initial health score.
            </p>
          </div>
        ) : (
          <div className="vyra-card p-6 lg:p-8 border-slate-800">
            {/* STEP 1: STAGE */}
            {step === 1 && (
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-sora">
                  Personalization
                </span>
                <h2 className="font-sora font-bold text-2xl text-white">
                  What best describes your current stage?
                </h2>
                <p className="text-xs text-slate-400">
                  VYRA customizes its guidance based on your student or career phase.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                  {STAGES.map((st) => {
                    const Icon = st.icon;
                    const isSelected = formData.stage === st.id;
                    return (
                      <div
                        key={st.id}
                        onClick={() => setFormData({ ...formData, stage: st.id })}
                        className={`p-4 rounded-xl cursor-pointer border transition-all ${
                          isSelected
                            ? 'bg-cyan-500/15 border-cyan-500/50 shadow-md shadow-cyan-500/10'
                            : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                            isSelected ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-400'
                          }`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <span className="font-sora font-semibold text-sm text-white">{st.label}</span>
                        </div>
                        <p className="text-[11px] text-slate-400 leading-relaxed">{st.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 2: INCOME */}
            {step === 2 && (
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-sora">
                  Cash Inflow
                </span>
                <h2 className="font-sora font-bold text-2xl text-white">
                  What is your average monthly income / stipend?
                </h2>
                <p className="text-xs text-slate-400">
                  Include regular internship stipends, freelance income, or allowance.
                </p>

                <div className="pt-4">
                  <div className="relative">
                    <span className="absolute left-4 top-3 text-slate-400 font-bold text-xl">₹</span>
                    <input
                      type="number"
                      value={formData.monthlyIncome}
                      onChange={(e) => setFormData({ ...formData, monthlyIncome: e.target.value })}
                      className="vyra-input pl-10 text-2xl font-sora font-bold text-white tracking-tight"
                    />
                  </div>
                  <div className="flex gap-2 mt-3">
                    {[15000, 25000, 35000, 50000, 75000].map(val => (
                      <button
                        key={val}
                        type="button"
                        onClick={() => setFormData({ ...formData, monthlyIncome: val })}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                      >
                        {formatINR(val)}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3: EXPENSES */}
            {step === 3 && (
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-sora">
                  Cash Outflow
                </span>
                <h2 className="font-sora font-bold text-2xl text-white">
                  What are your estimated monthly expenses?
                </h2>
                <p className="text-xs text-slate-400">
                  PG/hostel share, food delivery, transit, phone recharge, and outings.
                </p>

                <div className="pt-4">
                  <div className="relative">
                    <span className="absolute left-4 top-3 text-slate-400 font-bold text-xl">₹</span>
                    <input
                      type="number"
                      value={formData.monthlyExpenses}
                      onChange={(e) => setFormData({ ...formData, monthlyExpenses: e.target.value })}
                      className="vyra-input pl-10 text-2xl font-sora font-bold text-cyan-400 tracking-tight"
                    />
                  </div>
                  <p className="text-xs text-slate-400 mt-2">
                    Estimated monthly surplus: <strong className="text-emerald-400">{formatINR(Math.max(0, formData.monthlyIncome - formData.monthlyExpenses))}</strong>
                  </p>
                </div>
              </div>
            )}

            {/* STEP 4: SAVINGS */}
            {step === 4 && (
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-sora">
                  Liquidity Reserve
                </span>
                <h2 className="font-sora font-bold text-2xl text-white">
                  How much do you currently have in savings?
                </h2>
                <p className="text-xs text-slate-400">
                  Total bank savings account balance, digital wallets, or cash at hand.
                </p>

                <div className="pt-4">
                  <div className="relative">
                    <span className="absolute left-4 top-3 text-slate-400 font-bold text-xl">₹</span>
                    <input
                      type="number"
                      value={formData.currentSavings}
                      onChange={(e) => setFormData({ ...formData, currentSavings: e.target.value })}
                      className="vyra-input pl-10 text-2xl font-sora font-bold text-emerald-400 tracking-tight"
                    />
                  </div>
                  <p className="text-xs text-slate-400 mt-2">
                    This provides approximately <strong>{(formData.currentSavings / (formData.monthlyExpenses || 1)).toFixed(1)} months</strong> of financial buffer.
                  </p>
                </div>
              </div>
            )}

            {/* STEP 5: PRIMARY GOAL */}
            {step === 5 && (
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-sora">
                  Objective
                </span>
                <h2 className="font-sora font-bold text-2xl text-white">
                  What is your primary financial goal right now?
                </h2>
                <p className="text-xs text-slate-400">
                  VYRA will prioritize this in your roadmap and calculate required monthly deposits.
                </p>

                <div className="space-y-2 pt-2">
                  {GOALS.map((g) => {
                    const Icon = g.icon;
                    const isSelected = formData.primaryGoal === g.id;
                    return (
                      <div
                        key={g.id}
                        onClick={() => setFormData({ ...formData, primaryGoal: g.id })}
                        className={`p-3.5 rounded-xl cursor-pointer border flex items-center justify-between transition-all ${
                          isSelected
                            ? 'bg-cyan-500/15 border-cyan-500/50 shadow-sm'
                            : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                            isSelected ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-400'
                          }`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="font-sora font-semibold text-sm text-white block">{g.label}</span>
                            <span className="text-[11px] text-slate-400">{g.desc}</span>
                          </div>
                        </div>
                        <span className="text-xs font-mono font-bold text-cyan-300">
                          {formatINR(g.target)}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 6: CONFIDENCE */}
            {step === 6 && (
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-sora">
                  Readiness
                </span>
                <h2 className="font-sora font-bold text-2xl text-white">
                  How confident do you feel about managing money?
                </h2>
                <p className="text-xs text-slate-400">
                  We will tune the AI co-pilot explanations and learning pace to your level.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                  {CONFIDENCE_LEVELS.map((cf) => {
                    const isSelected = formData.confidence === cf.id;
                    return (
                      <div
                        key={cf.id}
                        onClick={() => setFormData({ ...formData, confidence: cf.id })}
                        className={`p-4 rounded-xl cursor-pointer border transition-all ${
                          isSelected
                            ? 'bg-cyan-500/15 border-cyan-500/50 shadow-sm'
                            : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        <h4 className="font-sora font-semibold text-sm text-white mb-1">{cf.label}</h4>
                        <p className="text-[11px] text-slate-400 leading-relaxed">{cf.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between pt-8 border-t border-slate-800 mt-6">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={handlePrev}
                  className="vyra-btn-secondary !py-2 !px-4 text-xs font-semibold"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>
              ) : (
                <div />
              )}

              <button
                type="button"
                onClick={handleNext}
                className="vyra-btn-primary !py-2.5 !px-6 text-xs font-semibold"
              >
                <span>{step === 6 ? 'Generate Financial Blueprint' : 'Continue'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Footer note */}
      <div className="text-center text-[11px] text-slate-400 py-4">
        🔒 All calculations are performed with strict privacy and zero advertising profiling.
      </div>
    </div>
  );
};
