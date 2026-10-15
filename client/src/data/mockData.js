/**
 * Initial Realistic Indian Fintech Mock Data for VYRA
 */

export const INITIAL_USER = {
  id: 'usr_saish_01',
  name: 'Saish Patil',
  email: 'saish@example.com',
  stage: 'Student / Tech Intern',
  institution: 'BridgeAura Institute of Technology',
  monthlyIncome: 35000,
  availableBalance: 42500,
  monthlySpending: 18200,
  totalSavings: 12000,
  currency: 'INR',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250',
};

export const INITIAL_HEALTH_SCORE = {
  overall: 78,
  breakdown: [
    { name: 'Spending Control', score: 82, target: 80, status: 'Strong', description: 'Discretionary spending is well under 30% of income' },
    { name: 'Savings Habit', score: 71, target: 75, status: 'Good', description: 'Saving 23% of income monthly' },
    { name: 'Emergency Fund', score: 68, target: 80, status: 'Needs Focus', description: 'Currently holds 2.1 months of expenses (Target: 3-6 months)' },
    { name: 'Goal Progress', score: 86, target: 85, status: 'Excellent', description: 'On track to meet Emergency Fund and Laptop goals' },
    { name: 'Investment Readiness', score: 74, target: 70, status: 'Good', description: 'Active micro-SIP and basic index awareness established' }
  ],
  nextBestAction: 'Increase your emergency fund contribution by ₹3,500 this month to reach the safe 3-month expense threshold 23 days earlier.',
  aiInsight: 'Your food and travel expenses increased 18% this month. Reducing discretionary spending by approximately ₹1,500 could help you reach your emergency-fund goal sooner.'
};

export const INITIAL_TRANSACTIONS = [
  {
    id: 'tx-101',
    title: 'Swiggy Gourmet Dinner',
    amount: 540,
    type: 'expense',
    category: 'Food',
    date: '2026-10-04',
    paymentMethod: 'UPI (GPay)',
    notes: 'Weekend dinner with roommates'
  },
  {
    id: 'tx-102',
    title: 'Metro Smart Card Recharge',
    amount: 800,
    type: 'expense',
    category: 'Transport',
    date: '2026-10-03',
    paymentMethod: 'UPI (PhonePe)',
    notes: 'Monthly commute pass'
  },
  {
    id: 'tx-103',
    title: 'Monthly Tech Internship Stipend',
    amount: 35000,
    type: 'income',
    category: 'Income',
    date: '2026-10-01',
    paymentMethod: 'Bank Transfer (NEFT)',
    notes: 'Credited from BridgeAura Labs'
  },
  {
    id: 'tx-104',
    title: 'Coursera ML Specialization',
    amount: 2499,
    type: 'expense',
    category: 'Education',
    date: '2026-09-30',
    paymentMethod: 'Debit Card',
    notes: 'BridgeAura capstone preparation'
  },
  {
    id: 'tx-105',
    title: 'Blinkit Grocery Restock',
    amount: 1120,
    type: 'expense',
    category: 'Food',
    date: '2026-09-29',
    paymentMethod: 'UPI (Paytm)',
    notes: 'Weekly hostel essentials'
  },
  {
    id: 'tx-106',
    title: 'JioFiber Home Broadband',
    amount: 1179,
    type: 'expense',
    category: 'Bills',
    date: '2026-09-28',
    paymentMethod: 'UPI (GPay)',
    notes: 'Monthly high-speed internet'
  },
  {
    id: 'tx-107',
    title: 'Zara Casual Shirts (Myntra)',
    amount: 2190,
    type: 'expense',
    category: 'Shopping',
    date: '2026-09-26',
    paymentMethod: 'Credit Card',
    notes: 'Diwali festive purchase'
  },
  {
    id: 'tx-108',
    title: 'Freelance UI Design Sprint',
    amount: 7500,
    type: 'income',
    category: 'Income',
    date: '2026-09-25',
    paymentMethod: 'UPI (GPay)',
    notes: 'Landing page redesign client payment'
  },
  {
    id: 'tx-109',
    title: 'Spotify Student Premium',
    amount: 59,
    type: 'expense',
    category: 'Entertainment',
    date: '2026-09-24',
    paymentMethod: 'Auto Debit',
    notes: 'Monthly music subscription'
  },
  {
    id: 'tx-110',
    title: 'Uber Ride to Tech Park',
    amount: 320,
    type: 'expense',
    category: 'Transport',
    date: '2026-09-22',
    paymentMethod: 'UPI (PhonePe)',
    notes: 'Team meeting on-site'
  },
  {
    id: 'tx-111',
    title: 'Pharmacy & Vitamin Supplements',
    amount: 850,
    type: 'expense',
    category: 'Health',
    date: '2026-09-20',
    paymentMethod: 'UPI (GPay)',
    notes: 'Apollo Pharmacy order'
  },
  {
    id: 'tx-112',
    title: 'Starbucks Coffee Meetup',
    amount: 420,
    type: 'expense',
    category: 'Food',
    date: '2026-09-18',
    paymentMethod: 'UPI',
    notes: 'Project brainstorming'
  }
];

export const INITIAL_BUDGETS = {
  monthlyIncome: 35000,
  categories: [
    {
      name: 'Needs (Rent, Groceries, Bills, Commute)',
      allocated: 15000,
      spent: 10300,
      type: 'needs',
      color: '#3B82F6',
      icon: 'ShieldCheck'
    },
    {
      name: 'Lifestyle (Dining out, Shopping, Leisure)',
      allocated: 7000,
      spent: 5400,
      type: 'lifestyle',
      color: '#F59E0B',
      icon: 'Coffee'
    },
    {
      name: 'Savings & Emergency Buffer',
      allocated: 8000,
      spent: 8000,
      type: 'savings',
      color: '#10B981',
      icon: 'PiggyBank'
    },
    {
      name: 'Investments & Growth (SIPs, Index)',
      allocated: 5000,
      spent: 4000,
      type: 'investment',
      color: '#06B6D4',
      icon: 'TrendingUp'
    }
  ]
};

export const INITIAL_GOALS = [
  {
    id: 'goal-01',
    title: 'Emergency Fund (3-Months Buffer)',
    targetAmount: 60000,
    currentAmount: 36500,
    monthlyRequired: 4700,
    deadline: '2027-04-30',
    category: 'Safety',
    color: '#06B6D4',
    icon: 'Shield',
    description: '3 months of non-negotiable living expenses for financial peace of mind.'
  },
  {
    id: 'goal-02',
    title: 'First ₹1 Lakh Net Worth',
    targetAmount: 100000,
    currentAmount: 48000,
    monthlyRequired: 3800,
    deadline: '2027-12-31',
    category: 'Wealth',
    color: '#10B981',
    icon: 'Award',
    description: 'The psychological milestone that accelerates all future compounding.'
  },
  {
    id: 'goal-03',
    title: 'MacBook Pro M-Series for Dev',
    targetAmount: 85000,
    currentAmount: 52000,
    monthlyRequired: 3500,
    deadline: '2027-08-15',
    category: 'Productivity',
    color: '#6366F1',
    icon: 'Laptop',
    description: 'Next-gen development workstation for software development & AI builds.'
  },
  {
    id: 'goal-04',
    title: 'Graduation Goa Trip with Batchmates',
    targetAmount: 20000,
    currentAmount: 15000,
    monthlyRequired: 2500,
    deadline: '2027-01-20',
    category: 'Lifestyle',
    color: '#F59E0B',
    icon: 'Palmtree',
    description: 'Guilt-free post-exam celebration fully funded in advance.'
  }
];

export const INITIAL_INVESTMENTS = [
  {
    id: 'inv-01',
    name: 'UTI Nifty 50 Index Fund Direct-Growth',
    type: 'Index Mutual Fund',
    invested: 12000,
    current: 13650,
    returnsPercent: 13.75,
    sipAmount: 2000,
    risk: 'Moderate',
    tag: 'Core Equity'
  },
  {
    id: 'inv-02',
    name: 'Parag Parikh Flexi Cap Fund',
    type: 'Diversified Equity',
    invested: 9000,
    current: 10240,
    returnsPercent: 13.78,
    sipAmount: 1500,
    risk: 'Moderate-High',
    tag: 'Global Exposure'
  },
  {
    id: 'inv-03',
    name: 'Sovereign Gold Bond (SGB) Tranche',
    type: 'Gold / Commodities',
    invested: 5000,
    current: 5580,
    returnsPercent: 11.60,
    sipAmount: 0,
    risk: 'Low',
    tag: 'Inflation Hedge'
  },
  {
    id: 'inv-04',
    name: 'Aditya Birla Sun Life Liquid Fund',
    type: 'Liquid Debt',
    invested: 10000,
    current: 10420,
    returnsPercent: 4.20,
    sipAmount: 1000,
    risk: 'Very Low',
    tag: 'Emergency Stash'
  }
];

export const GROWTH_STAGES = [
  {
    id: 1,
    stage: '01',
    name: 'Stabilize',
    tagline: 'Awareness & Safety Net',
    description: 'Stop cash leaks, track every rupee via UPI, and establish a foundational ₹25,000 mini emergency reserve.',
    status: 'completed',
    milestones: [
      { text: 'Log 30 consecutive days of transactions', done: true },
      { text: 'Build ₹25,000 starter emergency fund', done: true },
      { text: 'Audit monthly recurring subscriptions', done: true }
    ]
  },
  {
    id: 2,
    stage: '02',
    name: 'Control',
    tagline: 'Budget Mastery & Discretionary Cap',
    description: 'Master the 50/30/20 framework adapted for young Indians. Keep lifestyle burn below 25% of total income.',
    status: 'current',
    progress: 75,
    milestones: [
      { text: 'Maintain Needs budget under ₹15,000 for 2 months', done: true },
      { text: 'Restrict food delivery apps to under ₹3,500/month', done: false },
      { text: 'Achieve Financial Health score >= 75', done: true }
    ]
  },
  {
    id: 3,
    stage: '03',
    name: 'Build',
    tagline: 'First ₹1 Lakh & Habit Compounding',
    description: 'Transition from passive saver to intentional asset builder. Achieve your first milestone ₹1,00,000 net worth.',
    status: 'upcoming',
    milestones: [
      { text: 'Accumulate ₹1,00,000 across savings & liquid assets', done: false },
      { text: 'Automate monthly savings on the 1st of every month', done: false },
      { text: 'Complete 3 full financial health diagnostic reviews', done: false }
    ]
  },
  {
    id: 4,
    stage: '04',
    name: 'Grow',
    tagline: 'Investment Awareness & Systematic SIPs',
    description: 'Harness the power of Indian economic expansion through index funds and disciplined long-term SIPs.',
    status: 'locked',
    milestones: [
      { text: 'Set up automated ₹3,000+ monthly SIP in Nifty 50', done: false },
      { text: 'Learn difference between Direct vs Regular plans', done: false },
      { text: 'Understand tax tax-saving instruments (ELSS / PPF)', done: false }
    ]
  },
  {
    id: 5,
    stage: '05',
    name: 'Thrive',
    tagline: 'Financial Independence & Long-Term Freedom',
    description: 'Multiple streams of income, fully funded 6-month buffer, optimized tax planning, and generational wealth thinking.',
    status: 'locked',
    milestones: [
      { text: '6 months of living expenses in liquid contingency fund', done: false },
      { text: 'Maintain high financial health score (>85/100)', done: false },
      { text: 'Formulate 5-year career & wealth roadmap', done: false }
    ]
  }
];

export const LEARNING_MODULES = [
  {
    id: 'mod-01',
    title: 'Budgeting 101: The 50/30/20 Rule for College & First Job',
    slug: 'budgeting-101',
    category: 'Foundations',
    readTime: '3 min read',
    difficulty: 'Beginner',
    tag: 'Must Read',
    icon: 'PieChart',
    summary: 'How to allocate your stipend or salary without feeling deprived.',
    content: `### The Golden Ratio for Young Adults
The classic 50/30/20 rule divides your after-tax income into three buckets:
- **50% Needs**: Groceries, hostel/PG rent, phone/Wi-Fi bills, daily metro/bus commute.
- **30% Lifestyle (Wants)**: Weekend cafe visits, shopping, movies, hobbies, vacations.
- **20% Savings & Future**: Emergency fund, debt prepayment, and early investments.

**The Student & Intern Adaptation:**
If your rent is low (e.g. living with family or in subsidized campus dorms), reverse the lifestyle and savings percentages! Aim for **50% Needs, 20% Lifestyle, and 30% Savings**. This single habit puts you years ahead of your peers.`
  },
  {
    id: 'mod-02',
    title: 'Emergency Funds: Your Shield Against Unexpected Crises',
    slug: 'emergency-funds',
    category: 'Safety',
    readTime: '4 min read',
    difficulty: 'Beginner',
    tag: 'Crucial',
    icon: 'Shield',
    summary: 'Why an emergency reserve must come before your very first stock pick.',
    content: `### Why You Need an Emergency Stash First
Investing in equities before having an emergency fund is like driving on the highway without a seatbelt. If an emergency strikes (medical bill, broken laptop before exams, unexpected job transition), you may be forced to sell your stocks at a loss.

**How Much to Save:**
- **Student / Living with family**: ₹20,000 to ₹30,000 (enough for travel emergencies, urgent device fixes).
- **Working Professional**: 3 to 6 months of mandatory living expenses (rent + food + loan EMIs).

**Where to Park It:**
Never in crypto or volatile stocks! Keep 50% in a high-interest savings account (e.g. 6-7% p.a.) and 50% in a Liquid Mutual Fund or Sweep-in Fixed Deposit.`
  },
  {
    id: 'mod-03',
    title: 'Understanding SIPs: The Magic of Rupee Cost Averaging',
    slug: 'understanding-sips',
    category: 'Investing',
    readTime: '5 min read',
    difficulty: 'Intermediate',
    tag: 'Wealth Builder',
    icon: 'TrendingUp',
    summary: 'How investing ₹1,500 every month beats trying to time the stock market.',
    content: `### What is a Systematic Investment Plan (SIP)?
A SIP is an automated method of investing a fixed sum of money into a mutual fund scheme at predetermined intervals (usually monthly).

**The Magic of Rupee Cost Averaging:**
When the stock market drops, your ₹1,500 buys **more fund units**. When the market rises, it buys fewer units. Over 5-10 years, your average cost per unit stays remarkably low without you ever having to watch market news or stress over timing highs and lows.

**The Power of Starting at Age 21 vs 30:**
Investing ₹3,000/month at 12% annual return starting at age 21 yields **~₹1.05 Crores** by age 50. Starting at age 30 with the exact same amount yields only **~₹30 Lakhs**! Time in the market is your greatest superpower.`
  },
  {
    id: 'mod-04',
    title: 'Credit Score & CIBIL: The Secret Metric Banks Care About',
    slug: 'credit-score-basics',
    category: 'Credit & Debt',
    readTime: '4 min read',
    difficulty: 'Beginner',
    tag: 'Essential',
    icon: 'CreditCard',
    summary: 'Everything you need to know before getting your first credit card.',
    content: `### What is a CIBIL Score?
In India, CIBIL scores range from **300 to 900**. A score above **750** is considered prime. It determines:
- Whether you get approved for credit cards or education loans
- The interest rate you pay (a high score can save you lakhs in loan interest)

**Rule of Thumb for Students:**
1. Never utilize more than 30% of your available credit card limit.
2. Always pay the **Total Amount Due**, never just the "Minimum Amount Due" (which carries 36-42% annual interest!).
3. If you don't have income proof yet, a Fixed Deposit (FD)-backed credit card is the safest way to build your credit score.`
  },
  {
    id: 'mod-05',
    title: 'Income Tax for Freshers: Old vs New Regime Decoded',
    slug: 'taxes-for-beginners',
    category: 'Taxes',
    readTime: '5 min read',
    difficulty: 'Intermediate',
    tag: 'Practical',
    icon: 'FileText',
    summary: 'Straightforward tax guidance for young earners entering the workforce.',
    content: `### Demystifying Taxes in India
Under current Indian tax provisions:
- **New Tax Regime**: The default regime with lower tax slab rates and a standard deduction. Income up to ₹7,00,000 has zero effective tax liability due to Section 87A rebate.
- **Old Tax Regime**: Allows exemptions like HRA (House Rent Allowance), Section 80C (up to ₹1.5 Lakhs in ELSS/EPF), 80D (health insurance), etc.

For most freshers with salaries under ₹7.5 Lakhs without heavy home loan interest, the New Tax Regime is simpler, requires zero paperwork, and leaves maximum cash in hand.`
  },
  {
    id: 'mod-06',
    title: 'Compound Growth: Why Small Numbers Become Colossal',
    slug: 'compound-growth',
    category: 'Mindset',
    readTime: '3 min read',
    difficulty: 'Beginner',
    tag: 'Mindset',
    icon: 'Zap',
    summary: 'The mathematical phenomenon Albert Einstein called the 8th wonder of the world.',
    content: `### Compounding Explained Simply
Compound interest is earning interest on your initial principal **plus** the accumulated interest from prior periods.

Consider ₹10,000 growing at 12% annually:
- Year 1: You earn ₹1,200.
- Year 5: Your annual gain is ₹1,890.
- Year 10: Your annual gain is ₹3,330.
- Year 25: Your annual gain is **over ₹18,000 on a single ₹10,000 deposit**!

The earlier you plant your seed, the larger the tree you get to rest under tomorrow.`
  }
];

export const CASH_FLOW_HISTORY = [
  { month: 'May', income: 30000, expenses: 19500, savings: 10500 },
  { month: 'Jun', income: 30000, expenses: 18400, savings: 11600 },
  { month: 'Jul', income: 32000, expenses: 17800, savings: 14200 },
  { month: 'Aug', income: 32000, expenses: 16900, savings: 15100 },
  { month: 'Sep', income: 42500, expenses: 20300, savings: 22200 },
  { month: 'Oct (Current)', income: 35000, expenses: 18200, savings: 12000 }
];

export const CATEGORY_BREAKDOWN = [
  { name: 'Food & Dining', amount: 5400, color: '#3B82F6', percentage: 30 },
  { name: 'Transport & Fuel', amount: 2800, color: '#06B6D4', percentage: 15 },
  { name: 'Shopping & Apparel', amount: 3200, color: '#F59E0B', percentage: 18 },
  { name: 'Education & Courses', amount: 2500, color: '#10B981', percentage: 14 },
  { name: 'Utility & Bills', amount: 2100, color: '#8B5CF6', percentage: 12 },
  { name: 'Entertainment & Subs', amount: 2200, color: '#EC4899', percentage: 11 }
];
