import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react';

import {
  INITIAL_HEALTH_SCORE,
  INITIAL_INVESTMENTS,
  GROWTH_STAGES,
  LEARNING_MODULES,
  CASH_FLOW_HISTORY,
  CATEGORY_BREAKDOWN
} from '../data/mockData';

import { generateAIResponse } from '../utils/aiEngine';
import { api } from '../services/api';

const FinanceContext = createContext(null);

export const FinanceProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [budgets, setBudgets] = useState(null);
  const [goals, setGoals] = useState([]);
  const [investments] = useState(INITIAL_INVESTMENTS);

  const [completedLessons, setCompletedLessons] = useState(() => {
    const saved = localStorage.getItem('vyra_completed_lessons');
    return saved ? JSON.parse(saved) : ['mod-01'];
  });

  const [growthStages] = useState(GROWTH_STAGES);

  const [aiChatHistory, setAiChatHistory] = useState([
    {
      id: 'ai-init',
      sender: 'vyra',
      timestamp: new Date().toISOString(),
      title: 'Welcome to VYRA Financial Intelligence',
      status: 'Ready',
      message:
        'Hello! I am VYRA AI, your contextual financial growth co-pilot.',
      tags: ['System', 'Connecting']
    }
  ]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // --------------------------------------------------
  // LOAD DATA FROM BACKEND
  // --------------------------------------------------

  const loadFinanceData = async () => {
    try {
      setLoading(true);
      setError(null);

      const [
        userData,
        transactionData,
        budgetData,
        goalData
      ] = await Promise.all([
        api.getUser(),
        api.getTransactions(),
        api.getBudgets(),
        api.getGoals()
      ]);

      setUser(userData);
      setTransactions(transactionData);
      setBudgets(budgetData);
      setGoals(goalData);
    } catch (err) {
      console.error('VYRA API error:', err);
      setError(err.message || 'Unable to connect to VYRA server');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadFinanceData();
  }, []);

  // --------------------------------------------------
  // LOCAL PERSISTENCE FOR UI-ONLY DATA
  // --------------------------------------------------

  useEffect(() => {
    localStorage.setItem(
      'vyra_completed_lessons',
      JSON.stringify(completedLessons)
    );
  }, [completedLessons]);

  // --------------------------------------------------
  // DERIVED FINANCIAL VALUES
  // --------------------------------------------------

  const totalIncome = useMemo(
    () =>
      transactions
        .filter((transaction) => transaction.type === 'income')
        .reduce(
          (sum, transaction) => sum + Number(transaction.amount),
          0
        ),
    [transactions]
  );

  const totalExpense = useMemo(
    () =>
      transactions
        .filter((transaction) => transaction.type === 'expense')
        .reduce(
          (sum, transaction) => sum + Number(transaction.amount),
          0
        ),
    [transactions]
  );

  const healthScore = {
    ...INITIAL_HEALTH_SCORE,
    overall: 78
  };

  // --------------------------------------------------
  // TRANSACTIONS
  // --------------------------------------------------

  const addTransaction = async (newTx) => {
    try {
      const createdTransaction = await api.addTransaction({
        ...newTx,
        amount: Number(newTx.amount)
      });

      setTransactions((prev) => [
        createdTransaction,
        ...prev
      ]);

      // Refresh user balance because backend updates it.
      const updatedUser = await api.getUser();
      setUser(updatedUser);

      return createdTransaction;
    } catch (err) {
      console.error('Unable to add transaction:', err);
      setError(err.message || 'Unable to add transaction');
      throw err;
    }
  };

  const deleteTransaction = async (id) => {
    try {
      await api.deleteTransaction(id);

      setTransactions((prev) =>
        prev.filter((transaction) => transaction.id !== id)
      );

      // Refresh user balance after deletion.
      const updatedUser = await api.getUser();
      setUser(updatedUser);
    } catch (err) {
      console.error('Unable to delete transaction:', err);
      setError(err.message || 'Unable to delete transaction');
      throw err;
    }
  };

  // --------------------------------------------------
  // BUDGETS
  // --------------------------------------------------

  const updateCategoryBudget = (categoryName, newAllocated) => {
    setBudgets((prev) => {
      if (!prev) return prev;

      return {
        ...prev,
        categories: prev.categories.map((category) =>
          category.name === categoryName
            ? {
                ...category,
                allocated: Number(newAllocated)
              }
            : category
        )
      };
    });
  };

  // --------------------------------------------------
  // GOALS
  // --------------------------------------------------

  const addGoal = async (newGoal) => {
    try {
      const goal = {
        ...newGoal,
        targetAmount: Number(newGoal.targetAmount),
        currentAmount: Number(newGoal.currentAmount || 0),
        monthlyRequired: Number(
          newGoal.monthlyRequired ||
            Math.round(Number(newGoal.targetAmount) / 12)
        )
      };

      const createdGoal = await api.addGoal(goal);

      setGoals((prev) => [...prev, createdGoal]);

      return createdGoal;
    } catch (err) {
      console.error('Unable to add goal:', err);
      setError(err.message || 'Unable to add goal');
      throw err;
    }
  };

  const contributeToGoal = async (goalId, amount) => {
    try {
      const contribution = Number(amount);

      const result = await api.contributeToGoal(
        goalId,
        contribution
      );

      setGoals((prev) =>
        prev.map((goal) =>
          goal.id === goalId ? result.goal : goal
        )
      );

      const updatedUser = await api.getUser();
      setUser(updatedUser);

      return result.goal;
    } catch (err) {
      console.error('Unable to contribute to goal:', err);
      setError(err.message || 'Unable to contribute to goal');
      throw err;
    }
  };

  const deleteGoal = (goalId) => {
    // Backend currently does not expose DELETE /goals/:id.
    // Keep this as a local UI operation for now.
    setGoals((prev) =>
      prev.filter((goal) => goal.id !== goalId)
    );
  };

  // --------------------------------------------------
  // LEARNING
  // --------------------------------------------------

  const toggleLessonComplete = (lessonId) => {
    setCompletedLessons((prev) =>
      prev.includes(lessonId)
        ? prev.filter((id) => id !== lessonId)
        : [...prev, lessonId]
    );
  };

  // --------------------------------------------------
  // AI ASSISTANT
  // --------------------------------------------------

  const askAI = async (userQuery) => {
    const userMsg = {
      id: `user-${Date.now()}`,
      sender: 'user',
      timestamp: new Date().toISOString(),
      message: userQuery
    };

    setAiChatHistory((prev) => [
      ...prev,
      userMsg
    ]);

    try {
      const response = await api.askAI(userQuery);

      const aiMsg = {
        id: `ai-${Date.now()}`,
        sender: 'vyra',
        timestamp: new Date().toISOString(),
        ...response
      };

      setAiChatHistory((prev) => [
        ...prev,
        aiMsg
      ]);
    } catch (err) {
      console.error('VYRA AI API error:', err);

      // Temporary fallback to existing local AI engine.
      const fallbackResponse = generateAIResponse(
        userQuery,
        {
          user,
          budgets,
          goals,
          transactions,
          healthScore
        }
      );

      setAiChatHistory((prev) => [
        ...prev,
        {
          id: `ai-${Date.now()}`,
          sender: 'vyra',
          timestamp: new Date().toISOString(),
          ...fallbackResponse,
          tags: ['Local Fallback']
        }
      ]);
    }
  };

  // --------------------------------------------------
  // USER PROFILE
  // --------------------------------------------------

  const updateUserProfile = async (updatedProfile) => {
    try {
      const result = await api.updateUser(
        updatedProfile
      );

      setUser(result.user);

      return result.user;
    } catch (err) {
      console.error('Unable to update profile:', err);
      setError(err.message || 'Unable to update profile');
      throw err;
    }
  };

  // --------------------------------------------------
  // RESET
  // --------------------------------------------------

  const resetToDefaultData = async () => {
    localStorage.removeItem(
      'vyra_completed_lessons'
    );

    setCompletedLessons(['mod-01']);

    await loadFinanceData();
  };

  // --------------------------------------------------
  // CONTEXT
  // --------------------------------------------------

  return (
    <FinanceContext.Provider
      value={{
        user,
        transactions,
        budgets,
        goals,
        investments,

        healthScore,

        growthStages,

        learningModules: LEARNING_MODULES,

        completedLessons,

        cashFlowHistory: CASH_FLOW_HISTORY,

        categoryBreakdown: CATEGORY_BREAKDOWN,

        aiChatHistory,

        loading,
        error,

        totalIncome,
        totalExpense,

        addTransaction,
        deleteTransaction,

        updateCategoryBudget,

        addGoal,
        contributeToGoal,
        deleteGoal,

        toggleLessonComplete,

        askAI,

        updateUserProfile,

        resetToDefaultData,

        refreshFinanceData: loadFinanceData
      }}
    >
      {children}
    </FinanceContext.Provider>
  );
};

export const useFinance = () => {
  const context = useContext(FinanceContext);

  if (!context) {
    throw new Error(
      'useFinance must be used within a FinanceProvider'
    );
  }

  return context;
};