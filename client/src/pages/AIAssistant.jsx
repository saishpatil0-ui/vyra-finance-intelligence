import React, { useState, useRef, useEffect } from 'react';
import {
  Bot,
  Send,
  Sparkles,
  ArrowRight,
  Shield,
  HelpCircle,
  Laptop,
  PiggyBank,
  TrendingDown,
  Award,
  PieChart,
  Zap,
  Info
} from 'lucide-react';
import { useFinance } from '../context/FinanceContext';
import { formatINR } from '../utils/formatters';

const SUGGESTED_PROMPT_CHIPS = [
  { label: 'Can I afford a ₹15,000 laptop this month?', icon: Laptop },
  { label: 'How much should I save this month?', icon: PiggyBank },
  { label: 'Why did my expenses increase?', icon: TrendingDown },
  { label: 'How can I reach ₹1 lakh?', icon: Award },
  { label: 'Give me a student budget.', icon: PieChart },
  { label: 'What happens if I save ₹5,000 every month?', icon: Zap }
];

export const AIAssistant = () => {
  const { aiChatHistory, askAI, user, healthScore } = useFinance();
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [aiChatHistory, isTyping]);

  const handleSend = (textToSend) => {
    const prompt = textToSend || inputText;
    if (!prompt.trim()) return;

    askAI(prompt);
    setInputText('');
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
    }, 700);
  };

  return (
    <div className="h-[calc(100vh-140px)] flex flex-col vyra-card border-slate-800 overflow-hidden animate-in fade-in duration-300">
      {/* Header */}
      <div className="p-4 lg:p-5 border-b border-slate-800/80 bg-slate-900/60 backdrop-blur-md flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/20">
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-sora font-bold text-base text-white">Ask VYRA AI</h2>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 uppercase font-mono">
                Contextual Copilot
              </span>
            </div>
            <p className="text-xs text-slate-400">Understand your money in simple, human language</p>
          </div>
        </div>

        {/* Live Profile Pill */}
        <div className="hidden sm:flex items-center gap-2 text-xs text-slate-300 px-3 py-1.5 rounded-xl bg-slate-800/60 border border-slate-700">
          <span>Balance: <strong className="text-cyan-400">{formatINR(user.availableBalance)}</strong></span>
          <span>•</span>
          <span>Health: <strong className="text-emerald-400">{healthScore.overall}/100</strong></span>
        </div>
      </div>

      {/* Suggested Prompt Chips */}
      <div className="p-3 bg-slate-950/40 border-b border-slate-800/60 overflow-x-auto flex items-center gap-2 text-xs">
        <span className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider shrink-0 flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          Suggestions:
        </span>
        {SUGGESTED_PROMPT_CHIPS.map((chip, idx) => {
          const Icon = chip.icon;
          return (
            <button
              key={idx}
              onClick={() => handleSend(chip.label)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-slate-800/60 hover:bg-cyan-500/10 border border-slate-700/60 hover:border-cyan-500/40 transition-all shrink-0 active:scale-95"
            >
              <Icon className="w-3.5 h-3.5 text-cyan-400" />
              <span>{chip.label}</span>
            </button>
          );
        })}
      </div>

      {/* Chat Messages Log */}
      <div className="flex-1 p-4 lg:p-6 overflow-y-auto space-y-4">
        {aiChatHistory.map((msg) => {
          const isUser = msg.sender === 'user';

          return (
            <div
              key={msg.id}
              className={`flex items-start gap-3 ${isUser ? 'flex-row-reverse' : ''}`}
            >
              {/* Avatar */}
              <div
                className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                  isUser
                    ? 'bg-cyan-500 text-slate-950 font-bold'
                    : 'bg-gradient-to-tr from-cyan-500 to-blue-600 text-white shadow-md'
                }`}
              >
                {isUser ? 'S' : <Bot className="w-4 h-4" />}
              </div>

              {/* Message Bubble */}
              <div
                className={`max-w-2xl rounded-2xl p-4 text-xs sm:text-sm leading-relaxed ${
                  isUser
                    ? 'bg-cyan-600/20 text-cyan-100 border border-cyan-500/30'
                    : 'bg-slate-900/90 text-slate-200 border border-slate-800 shadow-md'
                }`}
              >
                {msg.title && (
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800">
                    <span className="font-sora font-semibold text-cyan-400 text-xs sm:text-sm">
                      {msg.title}
                    </span>
                    {msg.status && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                        {msg.status}
                      </span>
                    )}
                  </div>
                )}

                {/* Body Content with Markdown Formatting */}
                <div className="whitespace-pre-line space-y-2">
                  {msg.message}
                </div>

                {/* Tags if present */}
                {msg.tags && msg.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-3 mt-3 border-t border-slate-800/80">
                    {msg.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 font-mono"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {isTyping && (
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white">
              <Bot className="w-4 h-4" />
            </div>
            <div className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 text-xs text-slate-400 flex items-center gap-2">
              <span className="flex gap-1">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" />
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.2s]" />
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.4s]" />
              </span>
              <span>Evaluating financial cash flow and goals...</span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Bar */}
      <div className="p-3 sm:p-4 bg-slate-900/80 border-t border-slate-800">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="flex items-center gap-2"
        >
          <input
            type="text"
            placeholder="Ask anything about your money, budget, laptop purchases, or goals..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="vyra-input text-xs sm:text-sm !py-3"
          />
          <button
            type="submit"
            disabled={!inputText.trim()}
            className="vyra-btn-primary !py-3 !px-5 shrink-0"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>

        <div className="flex items-center justify-between text-[11px] text-slate-400 mt-2 px-1">
          <span className="flex items-center gap-1">
            <Shield className="w-3.5 h-3.5 text-cyan-400" />
            Educational intelligence only • Never shares your private financial data
          </span>
          <span className="hidden sm:inline font-mono">Press Enter to send</span>
        </div>
      </div>
    </div>
  );
};
