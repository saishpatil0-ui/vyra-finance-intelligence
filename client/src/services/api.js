const API_BASE_URL = 'http://localhost:5000/api';

async function request(endpoint, options = {}) {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {})
    },
    ...options
  });

  if (!response.ok) {
    let errorMessage = `API request failed: ${response.status}`;

    try {
      const errorData = await response.json();
      errorMessage = errorData.error || errorData.message || errorMessage;
    } catch {
      // Keep default error message
    }

    throw new Error(errorMessage);
  }

  return response.json();
}

export const api = {
  // Health
  health: () => request('/health'),

  // User
  getUser: () => request('/user'),

  updateUser: (data) =>
    request('/user', {
      method: 'PUT',
      body: JSON.stringify(data)
    }),

  // Transactions
  getTransactions: () =>
    request('/transactions'),

  addTransaction: (transaction) =>
    request('/transactions', {
      method: 'POST',
      body: JSON.stringify(transaction)
    }),

  deleteTransaction: (id) =>
    request(`/transactions/${id}`, {
      method: 'DELETE'
    }),

  // Budgets
  getBudgets: () =>
    request('/budgets'),

  // Goals
  getGoals: () =>
    request('/goals'),

  addGoal: (goal) =>
    request('/goals', {
      method: 'POST',
      body: JSON.stringify(goal)
    }),

  contributeToGoal: (goalId, amount) =>
    request(`/goals/${goalId}/contribute`, {
      method: 'POST',
      body: JSON.stringify({ amount })
    }),

  // AI
  askAI: (query) =>
    request('/ai/ask', {
      method: 'POST',
      body: JSON.stringify({ query })
    })
};