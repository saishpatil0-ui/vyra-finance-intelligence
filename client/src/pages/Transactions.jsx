import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import {
  Search,
  Filter,
  PlusCircle,
  ArrowUpRight,
  ArrowDownRight,
  Trash2,
  Calendar,
  Tag,
  Download,
  Receipt
} from 'lucide-react';
import { useFinance } from '../context/FinanceContext';
import { formatINR, formatDate } from '../utils/formatters';

const CATEGORIES = [
  'All',
  'Food',
  'Transport',
  'Shopping',
  'Education',
  'Bills',
  'Entertainment',
  'Health',
  'Income'
];

export const Transactions = () => {
  const { transactions, deleteTransaction } = useFinance();
  const outletContext = useOutletContext();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedType, setSelectedType] = useState('all'); // 'all', 'expense', 'income'
  const [sortBy, setSortBy] = useState('date-desc'); // 'date-desc', 'amount-desc', 'amount-asc'

  // Aggregated totals
  const totalInflow = transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + Number(t.amount), 0);

  const totalOutflow = transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + Number(t.amount), 0);

  const netSurplus = totalInflow - totalOutflow;

  // Filter & Search Logic
  const filteredTransactions = transactions
    .filter(t => {
      const matchesSearch = t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (t.notes && t.notes.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (t.category && t.category.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory = selectedCategory === 'All' || t.category === selectedCategory;
      const matchesType = selectedType === 'all' || t.type === selectedType;

      return matchesSearch && matchesCategory && matchesType;
    })
    .sort((a, b) => {
      if (sortBy === 'date-desc') return new Date(b.date) - new Date(a.date);
      if (sortBy === 'amount-desc') return b.amount - a.amount;
      if (sortBy === 'amount-asc') return a.amount - b.amount;
      return 0;
    });

  const handleExportCSV = () => {
    const headers = 'ID,Date,Title,Type,Category,Amount,PaymentMethod,Notes\n';
    const rows = filteredTransactions.map(t => 
      `"${t.id}","${t.date}","${t.title}","${t.type}","${t.category}","${t.amount}","${t.paymentMethod || ''}","${t.notes || ''}"`
    ).join('\n');

    const blob = new Blob([headers + rows], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `vyra_transactions_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header & Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-sora font-bold text-2xl text-white">Transaction Passbook</h2>
          <p className="text-xs text-slate-400">All authenticated UPI credits and daily debits</p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={handleExportCSV}
            className="vyra-btn-secondary !py-2 !px-3.5 text-xs font-semibold"
          >
            <Download className="w-4 h-4" />
            <span>Export CSV</span>
          </button>

          <button
            onClick={() => outletContext?.openAddModal?.()}
            className="vyra-btn-primary !py-2 !px-4 text-xs font-semibold"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Add Transaction</span>
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="vyra-card p-4 border-slate-800">
          <span className="text-xs font-semibold text-slate-400 uppercase">Total Inflow</span>
          <p className="font-sora font-bold text-2xl text-emerald-400 mt-1">
            +{formatINR(totalInflow)}
          </p>
          <span className="text-[11px] text-slate-400">Stipends & client payouts</span>
        </div>

        <div className="vyra-card p-4 border-slate-800">
          <span className="text-xs font-semibold text-slate-400 uppercase">Total Outflow</span>
          <p className="font-sora font-bold text-2xl text-rose-400 mt-1">
            -{formatINR(totalOutflow)}
          </p>
          <span className="text-[11px] text-slate-400">Living expenses & lifestyle burn</span>
        </div>

        <div className="vyra-card p-4 border-slate-800">
          <span className="text-xs font-semibold text-slate-400 uppercase">Net Surplus</span>
          <p className="font-sora font-bold text-2xl text-cyan-400 mt-1">
            {formatINR(netSurplus)}
          </p>
          <span className="text-[11px] text-slate-400">Ready for goals & investments</span>
        </div>
      </div>

      {/* Search & Filter Toolbar */}
      <div className="vyra-card p-4 border-slate-800 space-y-3">
        <div className="flex flex-col md:flex-row items-center gap-3">
          {/* Search Input */}
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
            <input
              type="text"
              placeholder="Search by vendor, title, or notes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="vyra-input pl-9"
            />
          </div>

          {/* Type Toggle */}
          <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-900 border border-slate-800 w-full md:w-auto">
            {['all', 'expense', 'income'].map((t) => (
              <button
                key={t}
                onClick={() => setSelectedType(t)}
                className={`flex-1 md:flex-initial px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all ${
                  selectedType === t
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Sort Select */}
          <div className="w-full md:w-48">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="vyra-input bg-slate-900"
            >
              <option value="date-desc">Newest First</option>
              <option value="amount-desc">Highest Amount</option>
              <option value="amount-asc">Lowest Amount</option>
            </select>
          </div>
        </div>

        {/* Category Filter Chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 pt-1 text-xs">
          <span className="text-slate-400 mr-1 flex items-center gap-1 shrink-0">
            <Filter className="w-3.5 h-3.5" />
            Category:
          </span>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-lg font-medium whitespace-nowrap transition-colors ${
                selectedCategory === cat
                  ? 'bg-cyan-500 text-slate-950 font-bold'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Transaction Table / List */}
      <div className="vyra-card border-slate-800 overflow-hidden">
        {filteredTransactions.length === 0 ? (
          <div className="text-center py-16 px-4">
            <Receipt className="w-12 h-12 text-slate-600 mx-auto mb-3" />
            <p className="font-sora font-semibold text-white">No transactions found</p>
            <p className="text-xs text-slate-400 mt-1">Try resetting your filters or add a new transaction.</p>
          </div>
        ) : (
          <div className="divide-y divide-slate-800">
            {filteredTransactions.map((tx) => {
              const isIncome = tx.type === 'income';
              return (
                <div
                  key={tx.id}
                  className="p-4 flex items-center justify-between hover:bg-slate-800/40 transition-colors group"
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                        isIncome
                          ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                          : 'bg-slate-800 text-slate-300 border border-slate-700'
                      }`}
                    >
                      {isIncome ? (
                        <ArrowUpRight className="w-5 h-5" />
                      ) : (
                        <ArrowDownRight className="w-5 h-5 text-rose-400" />
                      )}
                    </div>

                    <div>
                      <h4 className="font-sora font-semibold text-sm text-white group-hover:text-cyan-300 transition-colors">
                        {tx.title}
                      </h4>
                      <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 mt-0.5">
                        <span className="px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 font-medium text-[10px]">
                          {tx.category}
                        </span>
                        <span>•</span>
                        <span>{formatDate(tx.date)}</span>
                        {tx.paymentMethod && (
                          <>
                            <span>•</span>
                            <span className="text-slate-400">{tx.paymentMethod}</span>
                          </>
                        )}
                        {tx.notes && (
                          <>
                            <span>•</span>
                            <span className="italic text-slate-400 truncate max-w-xs">{tx.notes}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-right font-mono">
                      <span
                        className={`font-bold text-base ${
                          isIncome ? 'text-emerald-400' : 'text-slate-100'
                        }`}
                      >
                        {isIncome ? '+' : '-'}{formatINR(tx.amount)}
                      </span>
                    </div>

                    <button
                      onClick={() => deleteTransaction(tx.id)}
                      className="p-2 rounded-lg text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 opacity-0 group-hover:opacity-100 transition-all"
                      title="Delete entry"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
