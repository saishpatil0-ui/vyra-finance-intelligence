import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// In-Memory Seed State
let userProfile = {
  id: 'usr_saish_01',
  name: 'Saish Patil',
  email: 'saish@example.com',
  stage: 'Student / Tech Intern',
  monthlyIncome: 35000,
  availableBalance: 42500,
  monthlySpending: 18200,
  totalSavings: 12000,
  currency: 'INR'
};

let transactions = [
  { id: 'tx-101', title: 'Swiggy Gourmet Dinner', amount: 540, type: 'expense', category: 'Food', date: '2026-10-04', paymentMethod: 'UPI' },
  { id: 'tx-102', title: 'Metro Smart Card Recharge', amount: 800, type: 'expense', category: 'Transport', date: '2026-10-03', paymentMethod: 'UPI' },
  { id: 'tx-103', title: 'Monthly Tech Internship Stipend', amount: 35000, type: 'income', category: 'Income', date: '2026-10-01', paymentMethod: 'NEFT' },
  { id: 'tx-104', title: 'Coursera ML Specialization', amount: 2499, type: 'expense', category: 'Education', date: '2026-09-30', paymentMethod: 'Debit Card' }
];

let budgets = {
  monthlyIncome: 35000,
  categories: [
    { name: 'Needs', allocated: 15000, spent: 10300, type: 'needs', color: '#3B82F6' },
    { name: 'Lifestyle', allocated: 7000, spent: 5400, type: 'lifestyle', color: '#F59E0B' },
    { name: 'Savings', allocated: 8000, spent: 8000, type: 'savings', color: '#10B981' },
    { name: 'Investment', allocated: 5000, spent: 4000, type: 'investment', color: '#06B6D4' }
  ]
};

let goals = [
  { id: 'goal-01', title: 'Emergency Fund (3-Months Buffer)', targetAmount: 60000, currentAmount: 36500, monthlyRequired: 4700, deadline: '2027-04-30', category: 'Safety' },
  { id: 'goal-02', title: 'First ₹1 Lakh Net Worth', targetAmount: 100000, currentAmount: 48000, monthlyRequired: 3800, deadline: '2027-12-31', category: 'Wealth' }
];

// --- ROUTES ---

// Health
app.get('/api/health', (req, res) => {
  res.json({ status: 'healthy', app: 'VYRA API Server', version: '1.0.0', timestamp: new Date() });
});

// User Profile
app.get('/api/user', (req, res) => {
  res.json(userProfile);
});

app.put('/api/user', (req, res) => {
  userProfile = { ...userProfile, ...req.body };
  res.json({ message: 'Profile updated', user: userProfile });
});

// Transactions CRUD
app.get('/api/transactions', (req, res) => {
  res.json(transactions);
});

app.post('/api/transactions', (req, res) => {
  const newTx = { id: `tx-${Date.now()}`, ...req.body, amount: Number(req.body.amount) };
  transactions.unshift(newTx);

  if (newTx.type === 'expense') {
    userProfile.availableBalance -= newTx.amount;
    userProfile.monthlySpending += newTx.amount;
  } else {
    userProfile.availableBalance += newTx.amount;
  }

  res.status(201).json(newTx);
});

app.delete('/api/transactions/:id', (req, res) => {
  const { id } = req.params;
  const tx = transactions.find(t => t.id === id);
  if (tx) {
    if (tx.type === 'expense') {
      userProfile.availableBalance += tx.amount;
      userProfile.monthlySpending = Math.max(0, userProfile.monthlySpending - tx.amount);
    } else {
      userProfile.availableBalance -= tx.amount;
    }
    transactions = transactions.filter(t => t.id !== id);
    res.json({ message: 'Deleted successfully' });
  } else {
    res.status(404).json({ error: 'Transaction not found' });
  }
});

// Budgets
app.get('/api/budgets', (req, res) => {
  res.json(budgets);
});

// Goals
app.get('/api/goals', (req, res) => {
  res.json(goals);
});

app.post('/api/goals', (req, res) => {
  const newGoal = { id: `goal-${Date.now()}`, ...req.body };
  goals.push(newGoal);
  res.status(201).json(newGoal);
});

app.post('/api/goals/:id/contribute', (req, res) => {
  const { id } = req.params;
  const { amount } = req.body;
  const deposit = Number(amount);

  const goal = goals.find(g => g.id === id);
  if (goal) {
    goal.currentAmount = Math.min(goal.targetAmount, goal.currentAmount + deposit);
    userProfile.availableBalance = Math.max(0, userProfile.availableBalance - deposit);
    userProfile.totalSavings += deposit;
    res.json({ message: 'Contribution added', goal });
  } else {
    res.status(404).json({ error: 'Goal not found' });
  }
});

// AI Intelligence Query
app.post('/api/ai/ask', (req, res) => {
  const { query } = req.body;
  res.json({
    sender: 'vyra',
    query,
    title: 'VYRA Financial Intelligence Evaluation',
    message: `Analyzed query against your balance of ₹${userProfile.availableBalance.toLocaleString('en-IN')}: You are in a sound position with discretionary burn at ${(userProfile.monthlySpending / userProfile.monthlyIncome * 100).toFixed(0)}% of income.`,
    tags: ['Server AI', 'Real-Time']
  });
});

app.listen(PORT, () => {
  console.log(`🚀 VYRA API Server active at http://localhost:${PORT}`);
});
