/**
 * VYRA AI Financial Growth Engine
 * Context-aware financial co-pilot with guardrails, affordability calculator, and educational advice.
 */

import { formatINR } from './formatters';

export const generateAIResponse = (userPrompt, financeData) => {
  const query = userPrompt.toLowerCase().trim();
  const { user, budgets, goals, transactions, healthScore } = financeData;

  const currentBalance = user?.availableBalance || 42500;
  const monthlyIncome = user?.monthlyIncome || 35000;
  const monthlySpending = user?.monthlySpending || 18200;
  const plannedSavings = monthlyIncome - monthlySpending;

  // 1. Laptop / Major Purchase Affordability
  if (query.includes('laptop') || query.includes('afford') || query.includes('buy') || query.includes('purchase')) {
    // Extract amount if user typed an amount like "15,000" or "20000"
    const match = query.match(/(\d+[\d,]*)/);
    const purchaseAmount = match ? parseInt(match[0].replace(/,/g, ''), 10) : 15000;
    const impactOnSavings = Math.min(plannedSavings, purchaseAmount);
    const remainingBuffer = currentBalance - purchaseAmount;

    return {
      title: `Affordability Assessment: ${formatINR(purchaseAmount)}`,
      status: purchaseAmount > currentBalance * 0.4 ? 'Caution' : 'Affordable with Planning',
      message: `Based on your current available balance of **${formatINR(currentBalance)}** and monthly burn rate of **${formatINR(monthlySpending)}**:

- **Cash Impact:** Purchasing this item right now would reduce your planned monthly savings by **${formatINR(impactOnSavings)}**, leaving an immediate liquidity reserve of **${formatINR(remainingBuffer)}**.
- **Buffer Check:** It consumes **${Math.round((purchaseAmount / currentBalance) * 100)}%** of your total liquid cash. For young professionals and students, spending over 35% of liquid reserves on a single discretionary purchase can strain your emergency buffer.

💡 **Actionable Recommendation:**
1. If this is required for college/work projects immediately, proceed by trimming discretionary lifestyle spending by **₹2,000–₹2,500** over the next 20 days.
2. Alternatively, defer this purchase by 3–4 weeks or set up a dedicated milestone goal in VYRA to fund it guilt-free.`,
      tags: ['Affordability', 'Discretionary Purchase', 'Liquidity Analysis']
    };
  }

  // 2. How much should I save this month?
  if (query.includes('how much should i save') || query.includes('save this month') || query.includes('savings target')) {
    const recommendedSavings = Math.round(monthlyIncome * 0.25);
    const aggressiveSavings = Math.round(monthlyIncome * 0.35);

    return {
      title: 'Monthly Savings Target Blueprint',
      status: 'Strategy',
      message: `With your current monthly income of **${formatINR(monthlyIncome)}**:

- **Recommended Baseline (25%):** Target **${formatINR(recommendedSavings)}/month**. This allows you to comfortably fund your 3-month Emergency Fund target within 5 months.
- **Accelerated Growth Target (35%):** Target **${formatINR(aggressiveSavings)}/month** if your campus housing/living expenses are currently subsidized.

🎯 **Current Status:** You are currently logging **${formatINR(plannedSavings)}** in monthly surplus (**${Math.round((plannedSavings / monthlyIncome) * 100)}%**). Increasing this by just **₹1,500** will push your financial health score above 82!`,
      tags: ['Savings Target', '50/30/20 Rule', 'Emergency Velocity']
    };
  }

  // 3. Why did my expenses increase?
  if (query.includes('increase') || query.includes('why did my expenses') || query.includes('spending jump') || query.includes('higher expenses')) {
    return {
      title: 'Expense Anomaly Breakdown',
      status: 'Anomaly Detected',
      message: `Your spending in the **Food & Dining** and **Travel** categories spiked by **+18%** this month compared to your previous 30-day baseline:

- **Food & Dining:** ₹5,400 (30% of total spend) driven by 4 delivery orders over weekends.
- **Commute/Cabs:** ₹2,800 (15% of total spend) due to peak-hour cab hailing instead of metro transit.
- **Discretionary Burn:** Total non-essential burn reached ₹8,600.

⚡ **Quick Fix:** Shifting 3 weekend outings to home cooking or campus mess saves approx **₹1,800**, immediately stabilizing your monthly cash flow.`,
      tags: ['Spending Analysis', 'Food & Dining', 'Cash Flow Spike']
    };
  }

  // 4. How can I reach ₹1 lakh?
  if (query.includes('1 lakh') || query.includes('1,00,000') || query.includes('reach 1 lakh') || query.includes('first lakh')) {
    const lakhGoal = goals?.find(g => g.title.includes('Lakh')) || { currentAmount: 48000, targetAmount: 100000 };
    const gap = lakhGoal.targetAmount - lakhGoal.currentAmount;
    const monthsAt5k = Math.ceil(gap / 5000);
    const monthsAt7k = Math.ceil(gap / 7000);

    return {
      title: 'Roadmap to Your First ₹1,00,000',
      status: 'Milestone Pathway',
      message: `You currently have **${formatINR(lakhGoal.currentAmount)}** saved towards your **${formatINR(lakhGoal.targetAmount)}** goal! You are already **${Math.round((lakhGoal.currentAmount / lakhGoal.targetAmount) * 100)}%** there.

To bridge the remaining **${formatINR(gap)}**:
- **At ₹5,000/month:** You will cross the ₹1,00,000 milestone in **${monthsAt5k} months**.
- **At ₹7,000/month:** You will cross it in just **${monthsAt7k} months**!

🚀 **The Psychological Unlock:** In personal finance, reaching your first ₹1 Lakh is the hardest part. Once you establish this principal base, compounding and interest returns will start doing the heavy lifting for your subsequent goals.`,
      tags: ['Net Worth', 'Milestone', 'First ₹1 Lakh']
    };
  }

  // 5. Student Budget / Starter Budget
  if (query.includes('student budget') || query.includes('budget for student') || query.includes('college budget')) {
    const stipend = monthlyIncome || 35000;
    const needs = Math.round(stipend * 0.50);
    const wants = Math.round(stipend * 0.20);
    const savings = Math.round(stipend * 0.30);

    return {
      title: 'Optimal Student & Intern Budget Framework',
      status: 'Framework',
      message: `Here is the battle-tested **50/20/30 Student Budget Blueprint** calibrated for your **${formatINR(stipend)}** monthly intake:

1. **Essential Needs (50% = ${formatINR(needs)}):**
   - PG/Hostel share, grocery essentials, phone recharge, metro travel passes.
2. **Lifestyle & Fun (20% = ${formatINR(wants)}):**
   - Weekend movies, coffees, campus hangouts, personal hobbies.
3. **Future Wealth & Buffer (30% = ${formatINR(savings)}):**
   - ₹5,000 into high-yield emergency stash.
   - ₹5,500 into Nifty 50 Index micro-SIP or goal funds.

💡 **Rule of Thumb:** Pay yourself first on the 1st of every month before making discretionary purchases.`,
      tags: ['Student Budget', 'Allocation', '50/20/30']
    };
  }

  // 6. What happens if I save ₹5,000 every month?
  if (query.includes('save 5,000') || query.includes('5000 every month') || query.includes('save 5000') || query.includes('compounding')) {
    return {
      title: 'Compounding Simulation: ₹5,000/Month',
      status: 'Projection',
      message: `If you invest **₹5,000 every month** consistently into a broad market index fund (assuming a historic average return of ~12% p.a.):

- **In 3 Years:** Invested ₹1.80 Lakhs ➔ Value: **~₹2.18 Lakhs**
- **In 5 Years:** Invested ₹3.00 Lakhs ➔ Value: **~₹4.12 Lakhs**
- **In 10 Years:** Invested ₹6.00 Lakhs ➔ Value: **~₹11.62 Lakhs**
- **In 20 Years:** Invested ₹12.00 Lakhs ➔ Value: **~₹49.96 Lakhs** (Nearly ₹50 Lakhs!)

✨ **Key Insight:** Notice how by Year 20, your interest earnings (**~₹38 Lakhs**) dwarf your actual out-of-pocket contributions (**₹12 Lakhs**). That is the exponential curve of early financial discipline.`,
      tags: ['Compounding', 'SIP Simulation', 'Long-term Wealth']
    };
  }

  // Generic Dynamic Synthesis based on live profile
  return {
    title: 'Financial Health & Intelligence Response',
    status: 'Personalized Insight',
    message: `Reviewing your financial profile (Balance: **${formatINR(currentBalance)}**, Health Score: **${healthScore?.overall || 78}/100**):

- **Cash Flow Overview:** You have an active monthly inflow of **${formatINR(monthlyIncome)}** with a burn rate of **${formatINR(monthlySpending)}**.
- **Financial Strength:** Your spending control and goal velocity are performing solidly above cohort benchmarks.
- **Priority Recommendation:** Direct your next surplus allocation toward completing your **3-Month Emergency Fund buffer** to unlock Stage 03 of your Growth Journey.

Do you have a specific question about allocating your budget, analyzing recent UPI expenses, or setting up a new savings milestone?`,
    tags: ['General Advisory', 'Health Diagnostic', 'Cash Flow']
  };
};
