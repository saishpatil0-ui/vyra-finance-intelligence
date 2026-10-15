import React, { useState } from 'react';
import { X, ArrowDownRight, ArrowUpRight, DollarSign, Calendar, Tag, FileText } from 'lucide-react';
import { useFinance } from '../../context/FinanceContext';

const CATEGORIES = [
  'Food',
  'Transport',
  'Shopping',
  'Education',
  'Bills',
  'Entertainment',
  'Health',
  'Income',
  'Other'
];

export const AddTransactionModal = ({ isOpen, onClose }) => {
  const { addTransaction } = useFinance();

  const [type, setType] = useState('expense');
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount || Number(amount) <= 0) return;

    addTransaction({
      title,
      amount: parseFloat(amount),
      type,
      category: type === 'income' ? 'Income' : category,
      date,
      paymentMethod: 'UPI (Quick Pay)',
      notes
    });

    // Reset and close
    setTitle('');
    setAmount('');
    setNotes('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="w-full max-w-md p-6 rounded-2xl vyra-card border border-slate-700 shadow-2xl relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div>
            <h2 className="font-sora font-semibold text-lg text-white">Record Transaction</h2>
            <p className="text-xs text-slate-400">Log incoming stipend or daily UPI spend</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Type Toggle */}
        <div className="grid grid-cols-2 gap-2 mt-4 p-1 rounded-xl bg-slate-900 border border-slate-800">
          <button
            type="button"
            onClick={() => {
              setType('expense');
              if (category === 'Income') setCategory('Food');
            }}
            className={`flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-semibold transition-all ${
              type === 'expense'
                ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <ArrowDownRight className="w-4 h-4 text-rose-400" />
            <span>Expense (Spend)</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setType('income');
              setCategory('Income');
            }}
            className={`flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-semibold transition-all ${
              type === 'income'
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <ArrowUpRight className="w-4 h-4 text-emerald-400" />
            <span>Income (Inflow)</span>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          {/* Title */}
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">
              Description / Title
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Swiggy Lunch, Metro Pass, Freelance Project"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="vyra-input"
            />
          </div>

          {/* Amount & Date Grid */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                Amount (₹ INR)
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-2.5 text-slate-400 font-semibold">₹</span>
                <input
                  type="number"
                  step="any"
                  required
                  placeholder="0"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="vyra-input pl-8 font-mono"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                Date
              </label>
              <input
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="vyra-input"
              />
            </div>
          </div>

          {/* Category */}
          {type === 'expense' && (
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="vyra-input bg-slate-900"
              >
                {CATEGORIES.filter(c => c !== 'Income').map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          )}

          {/* Notes */}
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">
              Notes (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g. Paid via GPay UPI"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="vyra-input"
            />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="w-1/2 vyra-btn-secondary"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-1/2 vyra-btn-primary"
            >
              Save Rupee Entry
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
