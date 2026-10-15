# VYRA — Personal Finance & Growth Intelligence

> **Understand your money. Build your future.**

[![Live Demo](https://img.shields.io/badge/Live-Demo-16a34a?style=for-the-badge)](https://saishpatil0-ui.github.io/vyra-finance-intelligence/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)

VYRA is a personal finance dashboard concept designed to help students, interns, and young professionals understand their spending, manage budgets, track savings goals, and explore financial growth through a clean, interactive interface.

**[Live Demo](https://saishpatil0-ui.github.io/vyra-finance-intelligence/) · [GitHub Repository](https://github.com/saishpatil0-ui/vyra-finance-intelligence)**

## ✨ Features

- **Financial Dashboard** — Overview of balances, spending, savings, and financial health.
- **Transaction Management** — Review and add income and expense transactions.
- **Budget Planning** — Explore spending categories and budget allocations.
- **Savings Goals** — Track savings targets and progress.
- **Analytics** — Visualize cash flow and spending categories.
- **Financial Insights** — Explore demo financial guidance through an assistant-style interface.
- **Learning Hub** — Access financial education content.
- **User Experience** — Responsive navigation, onboarding, and profile settings.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React | User interface |
| Vite | Development server and build tooling |
| React Router | Client-side navigation |
| Tailwind CSS and CSS | Styling and responsive layouts |
| Recharts | Financial charts |
| Lucide React | Icons |
| Node.js and Express | Backend API |
| Browser Local Storage | Client-side demo persistence |

## 📁 Project Structure

```text
vyra-finance-intelligence/
├── client/
│   ├── public/
│   └── src/
│       ├── assets/
│       ├── components/
│       │   ├── charts/
│       │   ├── common/
│       │   └── layout/
│       ├── context/
│       ├── data/
│       ├── pages/
│       ├── services/
│       └── utils/
├── server/
│   └── src/
│       └── server.js
├── .gitignore
├── LICENSE
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm

### 1. Clone the repository

```bash
git clone https://github.com/saishpatil0-ui/vyra-finance-intelligence.git
cd vyra-finance-intelligence
```

### 2. Install dependencies

```bash
npm --prefix client install
npm --prefix server install
```

### 3. Start the frontend

```bash
npm run dev:client
```

Open [http://localhost:5173](http://localhost:5173).

### 4. Start the backend

In a separate terminal, run:

```bash
npm run dev:server
```

The API is expected at [http://localhost:5000](http://localhost:5000).

### 5. Build for production

```bash
npm run build
```

The frontend build is generated in `client/dist/`.

## 🔌 API Overview

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/health` | API health check |
| GET / PUT | `/api/user` | Read or update the demo profile |
| GET / POST / DELETE | `/api/transactions` | Manage demo transactions |
| GET | `/api/budgets` | Retrieve budget information |
| GET / POST | `/api/goals` | Retrieve or create goals |
| POST | `/api/goals/:id/contribute` | Contribute to a savings goal |
| POST | `/api/ai/ask` | Request a demo assistant response |

## ⚠️ Important Notes

- This project currently uses demo financial data. Values and insights are illustrative and are not financial advice.
- The Express backend stores its seed data in memory, so server-side changes reset when it restarts.
- The backend runs separately from the GitHub Pages frontend. API-dependent features may not work on the deployed website unless a backend is hosted and configured.
- The frontend API service currently targets `http://localhost:5000/api`. Configure an appropriate API URL before deployment.
- Authentication, persistent database storage, and production security controls are future improvements.
- Never commit secrets, passwords, private financial information, or `.env` files.

## 🗺️ Roadmap

- [ ] Add persistent database storage.
- [ ] Implement secure authentication and user-specific data.
- [ ] Add automated tests for important user flows.
- [ ] Configure environment-based API URLs.
- [ ] Deploy and connect the backend API.
- [ ] Add screenshots and accessibility checks.

## 👨‍💻 Author

**Saish Patil**

- GitHub: [@saishpatil0-ui](https://github.com/saishpatil0-ui)
- Project: [VYRA Finance Intelligence](https://github.com/saishpatil0-ui/vyra-finance-intelligence)
- Live Demo: [Open VYRA](https://saishpatil0-ui.github.io/vyra-finance-intelligence/)

---

If you find this project useful, consider starring the repository or sharing feedback through GitHub Issues.

**License:** MIT
