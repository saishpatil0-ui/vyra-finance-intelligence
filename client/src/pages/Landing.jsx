import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  Shield,
  Sparkles,
  Bot,
  TrendingUp,
  PieChart,
  Target,
  Compass,
  CheckCircle2,
  Zap,
  Lock,
  ChevronRight,
  Award
} from 'lucide-react';
import { formatINR } from '../utils/formatters';

export const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#080C15] text-slate-100 selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-[#080C15]/80 backdrop-blur-xl border-b border-slate-800/80 px-4 lg:px-12 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-cyan-500/25">
              <span className="font-sora font-extrabold text-xl text-white">V</span>
            </div>
            <div>
              <span className="font-sora font-bold text-xl text-white tracking-tight">VYRA</span>
              <span className="hidden sm:inline-block ml-2 text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                Fintech Intelligence
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#features" className="hover:text-cyan-400 transition-colors">Features</a>
            <a href="#ai" className="hover:text-cyan-400 transition-colors">AI Co-Pilot</a>
            <a href="#growth" className="hover:text-cyan-400 transition-colors">Growth Path</a>
            <a href="#security" className="hover:text-cyan-400 transition-colors">Security</a>
            <a href="#pricing" className="hover:text-cyan-400 transition-colors">Pricing</a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/dashboard')}
              className="hidden sm:inline-flex vyra-btn-secondary !py-2 !px-4 text-xs font-semibold"
            >
              Explore Demo
            </button>
            <button
              onClick={() => navigate('/onboarding')}
              className="vyra-btn-primary !py-2 !px-4 text-xs font-semibold"
            >
              <span>Get Started</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 px-4 lg:px-8 overflow-hidden">
        {/* Glow Spheres */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/20 via-blue-600/15 to-indigo-600/10 blur-[130px] pointer-events-none rounded-full" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-6 animate-in fade-in duration-500">
            <Sparkles className="w-3.5 h-3.5" />
            <span>BridgeAura Capstone Project</span>
          </div>

          <h1 className="font-sora font-extrabold text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-[1.15] mb-6">
            Understand your money.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
              Build your future.
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            A smart financial-growth platform engineered for students, interns, and young professionals. Transform impulsive spending into disciplined wealth through AI reasoning and structured growth stages.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              onClick={() => navigate('/onboarding')}
              className="w-full sm:w-auto vyra-btn-primary !py-3.5 !px-8 text-sm font-semibold shadow-xl shadow-cyan-500/25"
            >
              <span>Start Free Onboarding</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => navigate('/dashboard')}
              className="w-full sm:w-auto vyra-btn-secondary !py-3.5 !px-8 text-sm font-semibold border-slate-700 hover:border-cyan-500/40"
            >
              <span>Launch Live Interactive Demo</span>
            </button>
          </div>

          {/* Social Proof Metric Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8 border-t border-slate-800/80">
            <div>
              <p className="font-sora font-bold text-2xl lg:text-3xl text-white">₹42,500</p>
              <p className="text-xs text-slate-400 mt-1">Average Liquidity Tracked</p>
            </div>
            <div>
              <p className="font-sora font-bold text-2xl lg:text-3xl text-cyan-400">78/100</p>
              <p className="text-xs text-slate-400 mt-1">Average Financial Health</p>
            </div>
            <div>
              <p className="font-sora font-bold text-2xl lg:text-3xl text-emerald-400">23 Days</p>
              <p className="text-xs text-slate-400 mt-1">Faster Goal Completion</p>
            </div>
            <div>
              <p className="font-sora font-bold text-2xl lg:text-3xl text-indigo-400">100%</p>
              <p className="text-xs text-slate-400 mt-1">Ad-Free & Safe Education</p>
            </div>
          </div>
        </div>

        {/* Dashboard Preview Showcase Card */}
        <div className="max-w-6xl mx-auto mt-16 p-2 sm:p-3 rounded-2xl bg-gradient-to-b from-cyan-500/30 via-slate-800/40 to-slate-900/60 shadow-2xl border border-cyan-500/20 backdrop-blur-xl">
          <div className="rounded-xl overflow-hidden bg-[#0A0E1A] border border-slate-800 p-4 sm:p-6">
            {/* Mock Header */}
            <div className="flex items-center justify-between pb-6 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">V</div>
                <div>
                  <h4 className="font-sora font-bold text-sm text-white">VYRA Dashboard — Live Preview</h4>
                  <p className="text-[11px] text-slate-400">Good evening, Saish Patil</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Health 78/100
                </span>
              </div>
            </div>

            {/* Mock Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                <span className="text-[11px] font-semibold text-slate-400 uppercase">Available Balance</span>
                <p className="font-sora font-bold text-2xl text-white mt-1">₹42,500</p>
                <span className="text-[10px] text-emerald-400 font-semibold">+₹7,500 freelance</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                <span className="text-[11px] font-semibold text-slate-400 uppercase">Monthly Burn</span>
                <p className="font-sora font-bold text-2xl text-cyan-400 mt-1">₹18,200</p>
                <span className="text-[10px] text-slate-400 font-medium">Under ₹20,000 cap</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                <span className="text-[11px] font-semibold text-slate-400 uppercase">Emergency Goal</span>
                <p className="font-sora font-bold text-2xl text-emerald-400 mt-1">61% Saved</p>
                <span className="text-[10px] text-slate-400 font-medium">₹36,500 of ₹60,000</span>
              </div>
            </div>

            {/* AI Mock Insight */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-950/40 to-blue-950/30 border border-cyan-500/30 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-cyan-400 shrink-0" />
                <p className="text-xs text-slate-200">
                  <span className="font-semibold text-cyan-300">VYRA Co-Pilot:</span> "Your food & travel burn increased 18% this month. Trimming ₹1,500 helps you hit your emergency target 23 days earlier."
                </p>
              </div>
              <button 
                onClick={() => navigate('/dashboard')}
                className="hidden sm:inline-flex text-xs font-semibold text-cyan-400 hover:text-cyan-300 items-center gap-1 shrink-0"
              >
                <span>Launch Full App</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 px-4 lg:px-8 border-t border-slate-800/80 bg-slate-950/40">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 font-sora">
              The Reality
            </span>
            <h2 className="font-sora font-bold text-3xl sm:text-4xl text-white mt-2 mb-4">
              Why Traditional Finance Apps Fail Young Indians
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Most existing apps are either passive expense notebooks or predatory lending platforms disguised as credit checkers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="vyra-card p-6 border-slate-800 hover:border-rose-500/40">
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center font-bold mb-4">
                ✕
              </div>
              <h3 className="font-sora font-semibold text-lg text-white mb-2">Passive Logging Fatigue</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Manually entering every ₹20 chai or UPI transfer without actionable advice quickly leads to app abandonment within two weeks.
              </p>
            </div>

            <div className="vyra-card p-6 border-slate-800 hover:border-amber-500/40">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold mb-4">
                !
              </div>
              <h3 className="font-sora font-semibold text-lg text-white mb-2">Jargon & Overwhelm</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Complex terminal interfaces designed for veteran traders leave students and interns wondering: <em>"Where should my money actually go?"</em>
              </p>
            </div>

            <div className="vyra-card p-6 border-slate-800 hover:border-cyan-500/40">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-bold mb-4">
                ✓
              </div>
              <h3 className="font-sora font-semibold text-lg text-white mb-2">The VYRA Difference</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                VYRA answers: <strong>Where is my money going, where should it go, and how can I grow?</strong> using contextual AI and clear visual milestones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section id="features" className="py-20 px-4 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 font-sora">
            Engineered Capabilities
          </span>
          <h2 className="font-sora font-bold text-3xl sm:text-4xl text-white mt-2 mb-4">
            Everything You Need to Master Personal Wealth
          </h2>
          <p className="text-sm text-slate-400">
            A cohesive suite designed to take you from your very first stipend to confident long-term investments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="vyra-card p-6 vyra-card-hover">
            <div className="w-10 h-10 rounded-xl bg-blue-500/15 text-blue-400 flex items-center justify-center mb-4">
              <PieChart className="w-5 h-5" />
            </div>
            <h3 className="font-sora font-semibold text-lg text-white mb-2">Adaptive 50/30/20 Budgeting</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Auto-allocates needs, lifestyle, and savings. Dynamically adjusts when your internship stipend changes.
            </p>
          </div>

          <div className="vyra-card p-6 vyra-card-hover">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center mb-4">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="font-sora font-semibold text-lg text-white mb-2">Milestone Goal Velocity</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Tracks your Emergency Fund, First ₹1 Lakh, and device goals with exact required monthly savings pace.
            </p>
          </div>

          <div className="vyra-card p-6 vyra-card-hover">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/15 text-cyan-400 flex items-center justify-center mb-4">
              <Bot className="w-5 h-5" />
            </div>
            <h3 className="font-sora font-semibold text-lg text-white mb-2">Grounded AI Co-Pilot</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Instant answers to questions like <em>"Can I afford this laptop?"</em> calculated on your real cash balance.
            </p>
          </div>

          <div className="vyra-card p-6 vyra-card-hover">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/15 text-indigo-400 flex items-center justify-center mb-4">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="font-sora font-semibold text-lg text-white mb-2">78/100 Financial Health</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Quantifies your spending control, savings habits, and safety buffer into a single diagnostic score with a Next Best Action.
            </p>
          </div>

          <div className="vyra-card p-6 vyra-card-hover">
            <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center mb-4">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="font-sora font-semibold text-lg text-white mb-2">5-Stage Growth Journey</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              A gamified progression path: Stabilize ➔ Control ➔ Build ➔ Grow ➔ Thrive with measurable unlocks.
            </p>
          </div>

          <div className="vyra-card p-6 vyra-card-hover">
            <div className="w-10 h-10 rounded-xl bg-rose-500/15 text-rose-400 flex items-center justify-center mb-4">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-sora font-semibold text-lg text-white mb-2">Micro-Learning Hub</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              3-minute jargon-free cards covering SIPs, CIBIL scores, Indian tax regimes, and compound growth.
            </p>
          </div>
        </div>
      </section>

      {/* Growth Journey Preview Section */}
      <section id="growth" className="py-20 px-4 lg:px-8 border-t border-slate-800/80 bg-slate-950/60">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 font-sora">
              Signature Product Feature
            </span>
            <h2 className="font-sora font-bold text-3xl sm:text-4xl text-white mt-2 mb-4">
              Your Financial Growth Path
            </h2>
            <p className="text-sm text-slate-400">
              Clear progression stages so you always know your immediate financial next step.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
            {[
              { stage: '01', title: 'Stabilize', status: 'Completed', color: 'emerald', text: 'Cash flow visibility & ₹25k starter buffer' },
              { stage: '02', title: 'Control', status: 'Current (75%)', color: 'cyan', text: '50/30/20 budget adherence & cap leaks' },
              { stage: '03', title: 'Build', status: 'Upcoming', color: 'blue', text: 'Reach first ₹1 Lakh & automate savings' },
              { stage: '04', title: 'Grow', status: 'Locked', color: 'indigo', text: 'Nifty 50 SIPs & tax-saving instruments' },
              { stage: '05', title: 'Thrive', status: 'Locked', color: 'slate', text: '6-month contingency & compounding wealth' },
            ].map((step, idx) => (
              <div 
                key={idx} 
                className={`p-4 rounded-xl vyra-card border ${
                  step.stage === '02' ? 'border-cyan-500/40 bg-cyan-950/20' : 'border-slate-800'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-sora font-bold text-xs text-slate-400">STAGE {step.stage}</span>
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                    step.stage === '01' ? 'bg-emerald-500/20 text-emerald-400' :
                    step.stage === '02' ? 'bg-cyan-500/20 text-cyan-400' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {step.status}
                  </span>
                </div>
                <h4 className="font-sora font-bold text-base text-white mb-1.5">{step.title}</h4>
                <p className="text-[11px] text-slate-400 leading-snug">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Educational Philosophy */}
      <section id="security" className="py-20 px-4 lg:px-8 max-w-6xl mx-auto">
        <div className="vyra-card p-8 lg:p-12 border-slate-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase mb-4">
                <Shield className="w-3.5 h-3.5" />
                <span>Zero Risk Philosophy</span>
              </div>
              <h3 className="font-sora font-bold text-2xl sm:text-3xl text-white mb-4">
                Educational & Planning Co-Pilot — Not a Broker
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                VYRA empowers you through objective financial knowledge, calculations, and behavioral discipline.
              </p>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>No pushy loan ads or high-interest buy-now-pay-later (BNPL) schemes</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Transparent Indian Rupee (₹) calculations grounded in your real balance</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Safe educational guardrails — no risky trading tips or get-rich-quick claims</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-slate-900/90 border border-slate-800 space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
                <Lock className="w-5 h-5 text-cyan-400" />
                <div>
                  <h4 className="font-sora font-semibold text-sm text-white">Privacy First</h4>
                  <p className="text-[11px] text-slate-400">Your telemetry is confidential</p>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                All data is structured locally with enterprise encryption. You can export or purge your transaction ledger at any time in Profile Settings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 lg:px-8 border-t border-slate-800/80 bg-slate-950/40">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 font-sora">
            Venture Model
          </span>
          <h2 className="font-sora font-bold text-3xl text-white mt-2 mb-4">
            Transparent, Student-Friendly Pricing
          </h2>
          <p className="text-sm text-slate-400">
            Start completely free for campus life, upgrade to Pro when managing your full-time CTC.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Free Tier */}
          <div className="vyra-card p-6 border-slate-800">
            <h3 className="font-sora font-semibold text-lg text-white">Campus Free</h3>
            <p className="text-xs text-slate-400 mt-1">For students & first-time interns</p>
            <div className="my-6">
              <span className="font-sora font-bold text-4xl text-white">₹0</span>
              <span className="text-xs text-slate-400"> / forever</span>
            </div>
            <ul className="space-y-2.5 text-xs text-slate-300 mb-6">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Unlimited UPI & expense logging</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Smart 50/30/20 category budget</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Up to 3 active financial goals</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Basic Financial Health score</span>
              </li>
            </ul>
            <button 
              onClick={() => navigate('/onboarding')}
              className="w-full vyra-btn-secondary !py-2.5 text-xs font-semibold"
            >
              Get Started Free
            </button>
          </div>

          {/* Pro Tier */}
          <div className="vyra-card p-6 border-cyan-500/40 relative overflow-hidden bg-gradient-to-b from-cyan-950/20 to-slate-900/80">
            <div className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-cyan-500 text-slate-950">
              Most Popular
            </div>
            <h3 className="font-sora font-semibold text-lg text-white">VYRA Pro</h3>
            <p className="text-xs text-slate-400 mt-1">For working professionals & tech fellows</p>
            <div className="my-6">
              <span className="font-sora font-bold text-4xl text-cyan-400">₹99</span>
              <span className="text-xs text-slate-400"> / month</span>
            </div>
            <ul className="space-y-2.5 text-xs text-slate-300 mb-6">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>All Free features included</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Unlimited "Ask VYRA" AI co-pilot consultations</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Full 5-Stage Growth Journey unlocks</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Deep multi-year analytics & SIP simulators</span>
              </li>
            </ul>
            <button 
              onClick={() => navigate('/onboarding')}
              className="w-full vyra-btn-primary !py-2.5 text-xs font-semibold"
            >
              Start 14-Day Pro Trial
            </button>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 px-4 lg:px-8 text-center max-w-4xl mx-auto">
        <h2 className="font-sora font-bold text-3xl sm:text-4xl text-white mb-4">
          Ready to Take Control of Your Financial Future?
        </h2>
        <p className="text-sm text-slate-300 max-w-xl mx-auto mb-8 font-light">
          Join fellow BridgeAura students and young professionals transforming their financial trajectory with VYRA.
        </p>
        <button
          onClick={() => navigate('/dashboard')}
          className="vyra-btn-primary !py-3.5 !px-8 text-sm font-semibold shadow-xl shadow-cyan-500/25"
        >
          <span>Launch VYRA Demo Right Now</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 py-8 px-4 lg:px-8 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-sora font-bold text-white">VYRA</span>
            <span>— Personal Finance & Growth Intelligence</span>
          </div>
          <div>
            Built with ❤️ by Saish Patil for the BridgeAura Final Capstone
          </div>
        </div>
      </footer>
    </div>
  );
};
