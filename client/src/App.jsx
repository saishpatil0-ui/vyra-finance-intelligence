import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { FinanceProvider } from './context/FinanceContext';
import { AppLayout } from './components/layout/AppLayout';

// Pages
import { Landing } from './pages/Landing';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Onboarding } from './pages/Onboarding';
import { Dashboard } from './pages/Dashboard';
import { Transactions } from './pages/Transactions';
import { Budget } from './pages/Budget';
import { Goals } from './pages/Goals';
import { Investments } from './pages/Investments';
import { FinancialHealth } from './pages/FinancialHealth';
import { AIAssistant } from './pages/AIAssistant';
import { GrowthJourney } from './pages/GrowthJourney';
import { LearningHub } from './pages/LearningHub';
import { Analytics } from './pages/Analytics';
import { Profile } from './pages/Profile';

export function App() {
  return (
    <FinanceProvider>
      <BrowserRouter>
        <Routes>
          {/* Public & Onboarding Routes */}
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/onboarding" element={<Onboarding />} />

          {/* Authenticated Application Shell */}
          <Route element={<AppLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/budget" element={<Budget />} />
            <Route path="/goals" element={<Goals />} />
            <Route path="/investments" element={<Investments />} />
            <Route path="/financial-health" element={<FinancialHealth />} />
            <Route path="/ai-assistant" element={<AIAssistant />} />
            <Route path="/growth-journey" element={<GrowthJourney />} />
            <Route path="/learn" element={<LearningHub />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/profile" element={<Profile />} />
          </Route>

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </FinanceProvider>
  );
}

export default App;
