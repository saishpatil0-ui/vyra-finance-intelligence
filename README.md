# VYRA — Personal Finance & Growth Intelligence

> **Understand your money. Build your future.**

VYRA is a personal-finance dashboard concept for students, interns, and young professionals. It brings together transaction tracking, budgeting, savings goals, financial-health insights, learning resources, and a finance-focused assistant in one responsive interface.

## Features

- Dashboard with balance, spending, savings, and financial-health metrics
- Transaction ledger and add-transaction flow
- Budget planning and category breakdowns
- Savings goals and progress tracking
- Investment education, analytics, and financial-health views
- AI-assistant-style financial guidance UI
- Learning hub, onboarding, and profile settings

> The project currently includes demo/seed data. Treat figures and generated insights as illustrative, not financial advice. The Express API stores data in memory, so server-side changes reset when the server restarts.

## Tech stack

- **Frontend:** React, Vite, React Router
- **Styling:** CSS, Tailwind CSS
- **Charts & icons:** Recharts, Lucide React
- **Backend:** Node.js, Express, CORS
- **Persistence:** Browser local storage in the client; in-memory seed state in the API

## Project structure

```text
vyra/
├── client/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── context/
│       ├── data/
│       ├── pages/
│       ├── services/
│       └── utils/
├── server/
│   └── src/server.js
├── package.json
└── README.md
```

## Getting started

### Requirements
- Node.js (a current LTS release is recommended)
- npm

### 1. Install dependencies

From the project root:

```bash
npm --prefix client install
npm --prefix server install
```

### 2. Start the frontend

In one terminal, from the project root:

```bash
npm run dev:client
```

Open [http://localhost:5173](http://localhost:5173).

### 3. Start the backend API (optional)

In a second terminal, from the project root:

```bash
npm run dev:server
```

The API runs at [http://localhost:5000](http://localhost:5000). Check its health endpoint at [http://localhost:5000/api/health](http://localhost:5000/api/health).

### 4. Create a production frontend build

```bash
npm run build
```

The built frontend is generated in `client/dist/`. That generated folder is intentionally excluded from the source repository.

## Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev:client` | Start the Vite development server |
| `npm run dev:server` | Start the Express API in watch mode |
| `npm run build` | Build the frontend for production |
| `npm run lint` | Run the frontend linter |
| `npm run start:server` | Start the Express API normally |

## API endpoints

| Method | Endpoint | Purpose |
| --- | --- | --- |
| GET | `/api/health` | API health check |
| GET / PUT | `/api/user` | Read/update the demo profile |
| GET / POST / DELETE | `/api/transactions` | List, add, or delete transactions |
| GET | `/api/budgets` | Read budget data |
| GET / POST | `/api/goals` | Read or create goals |
| POST | `/api/goals/:id/contribute` | Add a contribution to a goal |
| POST | `/api/ai/ask` | Return a demo financial response |

## Important notes

- The backend uses in-memory seed data; it is not a production database.
- The frontend API service currently targets `http://localhost:5000/api`. If you deploy the app, configure the API base URL for your hosting environment.
- Add authentication, input validation, persistent database storage, and production environment configuration before using real personal financial data.
- Do not commit API keys, passwords, `.env` files, build output, or `node_modules`.

## Roadmap

- [ ] Add persistent storage (for example, PostgreSQL or MongoDB)
- [ ] Add secure authentication and user-specific data
- [ ] Add automated tests for key flows and API routes
- [ ] Configure environment-based API URLs
- [ ] Add a live demo link and screenshots
- [ ] Add accessibility checks and deployment instructions

## Author

**Saish Patil** · [GitHub @saishpatil0-ui](https://github.com/saishpatil0-ui)

If you find this project useful, consider starring the repository or opening an issue with feedback.
