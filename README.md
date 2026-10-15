<p align="center">
  <img src="docs/images/vyra-banner.png" alt="VYRA — Personal Financial Intelligence Platform" width="100%" />
</p>

<h1 align="center">VYRA</h1>
<p align="center"><strong>Personal Financial Intelligence Platform</strong></p>
<p align="center"><em>See Your Money. Shape Your Future.</em></p>

<p align="center">
  <a href="https://saishpatil0-ui.github.io/vyra-finance-intelligence/">Live Demo</a> ·
  <a href="https://github.com/saishpatil0-ui/vyra-finance-intelligence">View Source Code</a>
</p>

<p align="center">
  <img alt="React" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img alt="Vite" src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=222" />
  <img alt="Node.js" src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
  <img alt="Express" src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" />
</p>

✨ About VYRA
VYRA is a modern personal finance and growth intelligence project designed to bring everyday money information into a clear, approachable experience. Its interface brings together financial summaries, transactions, budget planning, savings goals, and learning-oriented insights in one place.
The visual identity uses deep navy, electric blue, white, soft grey, and green progress accents to make financial information feel clear and confidence-building.
Project note: Some figures and insights are demo/seed data. VYRA is a project demonstration, not a financial-advice service.

🚀 Highlights
- 📊 Dashboard — review key financial summaries and visualizations.
- 💳 Transactions — explore income and expense records.
- 🎯 Budgeting and goals — organize spending categories and savings targets where implemented.
- 📈 Charts and insights — present financial information visually.
- 🤖 Assistant-style UI — demo guidance interface; responses should not be treated as professional financial advice.
- 📱 Responsive design — designed for a modern web experience.
Feature availability can vary with the current implementation and configured API.
🖼️ Screenshots
The banner above is a visual concept, not a verified screenshot of the running app. For an accurate portfolio, add screenshots captured from your own running VYRA application here.
Suggested screenshot files:
- docs/images/dashboard.png — main dashboard
- docs/images/transactions.png — transaction view
- docs/images/budgets.png — budget view
- docs/images/goals.png — savings goals view, if implemented
After adding a screenshot, display it like this:
### Dashboard
![VYRA dashboard](docs/images/dashboard.png)
🧰 Tech Stack
Frontend
- React
- Vite
- JavaScript
- CSS / Tailwind CSS (as configured in the project)
- React Router, charting, and icon libraries used by the client
Backend
- Node.js
- Express
- CORS
Data
- Browser local storage on the client and in-memory seed data in the API, as currently configured.
📁 Project Structure
vyra-finance-intelligence/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── assets/
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── server/
│   ├── src/
│   └── package.json
├── docs/
│   └── images/
│       └── vyra-banner.png
├── .gitignore
├── LICENSE
└── README.md
⚙️ Run Locally
Prerequisites
- Node.js and npm
- Git (optional, for cloning the repository)
1. Clone the repository
git clone https://github.com/saishpatil0-ui/vyra-finance-intelligence.git
cd vyra-finance-intelligence
2. Install and run the frontend
Open a terminal in the project root, then run:
cd client
npm install
npm run dev
Use the local URL printed by Vite in the terminal.
3. Run the backend in a second terminal
From the project root, open another terminal and run:
cd server
npm install
npm run
Check the scripts printed by npm run, then run the server's available development/start script. The frontend is configured for a local API at http://localhost:5000/api; update the client configuration if your backend runs at a different address.
🔌 API
The Express server provides API routes for the app. Check server/src for the authoritative route definitions. Depending on the server version, routes may include health, user/profile, transactions, budgets, goals, and assistant-related endpoints. Confirm the current routes in source before relying on any endpoint.
🌐 Deployment
The Live Demo link above is intended for the GitHub Pages deployment. A static GitHub Pages site can host the built frontend, but it does not run the Express backend. For full functionality, deploy the API separately and configure the frontend to use the deployed API URL.
If the demo link does not load or API-backed features do not work, check the GitHub Pages build/deployment settings, the Vite base path, and the API configuration.
🗺️ Roadmap
- [ ] Capture and add real application screenshots
- [ ] Verify the GitHub Pages deployment and responsive layout
- [ ] Deploy the Express API separately
- [ ] Add persistent database storage
- [ ] Improve validation, testing, and error handling
- [ ] Add authentication if required
👥 Team Nova
Project: VYRA — Personal Financial Intelligence Platform
Team members: Saish Patil and Sandip Kharwat
Submission date: 7 October 2026
- GitHub: saishpatil0-ui
- Repository: vyra-finance-intelligence
📄 License
This project is licensed under the MIT License. See LICENSE for details.
