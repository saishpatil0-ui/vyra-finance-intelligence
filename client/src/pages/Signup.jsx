import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowRight, Lock, Mail, User } from 'lucide-react';
import { useFinance } from '../context/FinanceContext';

export const Signup = () => {
  const navigate = useNavigate();
  const { updateUserProfile } = useFinance();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    if (name) updateUserProfile({ name, email });
    navigate('/onboarding');
  };

  return (
    <div className="min-h-screen bg-[#080C15] text-slate-100 flex items-center justify-center p-4 selection:bg-cyan-500/20 selection:text-cyan-300 relative overflow-hidden">
      <div className="w-full max-w-md space-y-6 relative z-10 animate-in fade-in zoom-in-95 duration-200">
        <div className="text-center space-y-2">
          <div className="inline-flex w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 items-center justify-center font-bold text-2xl text-white font-sora shadow-lg shadow-cyan-500/25">
            V
          </div>
          <h2 className="font-sora font-extrabold text-2xl text-white">Join VYRA</h2>
          <p className="text-xs text-slate-400">Understand your money. Build your future.</p>
        </div>

        <div className="vyra-card p-6 lg:p-8 border-slate-800 space-y-5">
          <form onSubmit={handleSignup} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">Full Name</label>
              <div className="relative">
                <User className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Saish Patil"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="vyra-input pl-10"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">Email Address</label>
              <div className="relative">
                <Mail className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
                <input
                  type="email"
                  required
                  placeholder="name@college.edu"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="vyra-input pl-10"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">Password</label>
              <div className="relative">
                <Lock className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="vyra-input pl-10"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full vyra-btn-primary !py-3 text-xs font-semibold"
            >
              <span>Create Account & Start Onboarding</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="text-center text-xs text-slate-400 pt-2 border-t border-slate-800">
            Already have an account?{' '}
            <Link to="/login" className="text-cyan-400 font-semibold hover:underline">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
