/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        vyra: {
          bg: '#080C15',
          card: '#0F1626',
          cardHover: '#141E33',
          border: 'rgba(255, 255, 255, 0.08)',
          borderActive: 'rgba(6, 182, 212, 0.4)',
          primary: '#3B82F6',
          indigo: '#6366F1',
          cyan: '#06B6D4',
          emerald: '#10B981',
          amber: '#F59E0B',
          rose: '#EF4444',
          muted: '#94A3B8',
          subtle: '#64748B',
        }
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -5px rgba(6, 182, 212, 0.25)',
        'glow-blue': '0 0 25px -5px rgba(59, 130, 246, 0.25)',
        'glow-emerald': '0 0 25px -5px rgba(16, 185, 129, 0.25)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
