import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowRight, Lock, Mail, Sparkles, ShieldCheck } from 'lucide-react';
import { useFinance } from '../context/FinanceContext';

export const Login = () => {
  const navigate = useNavigate();
  const { user } = useFinance();
  const [email, setEmail] = useState('saish@example.com');
  const [password, setPassword] = useState('password123');

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  const handleDemoLogin = () => {
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-[#080C15] text-slate-100 flex items-center justify-center p-4 selection:bg-cyan-500/20 selection:text-cyan-300 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-md space-y-6 relative z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Brand Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 items-center justify-center font-bold text-2xl text-white font-sora shadow-lg shadow-cyan-500/25">
            V
          </div>
          <h2 className="font-sora font-extrabold text-2xl text-white">Welcome back to VYRA</h2>
          <p className="text-xs text-slate-400">Personal finance & growth intelligence co-pilot</p>
        </div>

        {/* Form Card */}
        <div className="vyra-card p-6 lg:p-8 border-slate-800 space-y-5">
          {/* Quick Demo Login Option */}
          <button
            type="button"
            onClick={handleDemoLogin}
            className="w-full vyra-btn-primary !py-3 text-xs font-semibold flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-cyan-200" />
            <span>1-Click Demo Login (as Saish Patil)</span>
          </button>

          <div className="relative flex items-center justify-center">
            <div className="border-t border-slate-800 w-full" />
            <span className="bg-[#0F1626] px-3 text-[11px] text-slate-500 uppercase tracking-wider font-semibold absolute">
              or continue with email
            </span>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">Email Address</label>
              <div className="relative">
                <Mail className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="vyra-input pl-10"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-medium text-slate-300">Password</label>
                <a href="#" className="text-[11px] text-cyan-400 hover:text-cyan-300">Forgot?</a>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="vyra-input pl-10"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full vyra-btn-secondary !py-2.5 text-xs font-semibold"
            >
              Sign In
            </button>
          </form>

          <div className="text-center text-xs text-slate-400 pt-2 border-t border-slate-800">
            Don't have an account?{' '}
            <Link to="/signup" className="text-cyan-400 font-semibold hover:underline">
              Create account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
