<div align="center">

# 🗳️ Election Copilot AI

### *Your Smart, Neutral Election Mentor — Built for Every Indian Citizen*

[![Google Prompt Wars](https://img.shields.io/badge/Google-Prompt%20Wars%20Hackathon-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://promptwars.withgoogle.com)
[![Gemini AI](https://img.shields.io/badge/Powered%20by-Gemini%20AI-8E75B2?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

</div>

---

## 🎯 The Problem

India is the world's largest democracy with **950+ million** eligible voters — yet millions struggle with the basics:

- *"How do I register to vote?"*
- *"Where is my polling booth?"*
- *"What documents do I need on voting day?"*

Existing resources are scattered across government portals, buried in bureaucratic language, and available only in English or Hindi. There is no single, intelligent, conversational guide that meets citizens where they are — in their own language, on their own terms.

**The result?** Low voter turnout, especially among first-time voters, rural communities, and citizens who speak regional languages.

---

## 💡 The Solution

**Election Copilot AI** is an AI-powered election mentor that guides Indian citizens through the entire voting journey — from eligibility checks to casting their vote — in a **friendly, conversational, multilingual** experience.

Built with **Google Gemini AI** at its core, it combines intelligent prompt engineering with a dynamic UI that adapts to the user's progress in real time.

> 🧠 *Think of it as a personal election tutor that speaks your language, never picks a side, and never gets tired of your questions.*

---

## ✨ Key Features

### 🤖 AI-Powered Chat with Guardrails
- **Strict Political Neutrality** — The AI will never endorse, criticize, or mention any political party or candidate
- **Scope Boundary Enforcement** — Off-topic questions (movies, coding, chit-chat) are politely declined
- **Factual Accuracy** — No hallucinated dates or deadlines; always references official ECI sources

### 🌐 Multilingual Mirroring
- Auto-detects the user's language (Hindi, Marathi, Telugu, Tamil, Hinglish, English)
- Replies in the **exact same language and dialect** — no forced translations

### 📊 Dynamic UI Timeline
- **4-Step Journey**: Eligibility → Voter ID → Polling Booth → Voting Day
- **AI-Driven Progression** — The timeline auto-advances when the AI confirms the user is ready for the next step
- **Real-time Progress Bar** — Visual feedback on the user's election readiness

### 🎨 Premium Civic Design
- Dark mode glassmorphism UI with accessible contrast ratios
- Responsive two-column layout (Chat + Timeline sidebar)
- Smooth animations and micro-interactions

### 🛡️ Graceful Fallback System
- If Gemini API is unavailable, the system returns curated, step-specific guidance
- Zero downtime for the user experience

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React 18 + Vite |
| **Backend** | Node.js + Express 5 |
| **AI Engine** | Google Gemini API (`gemini-2.5-flash-lite`) |
| **Styling** | Vanilla CSS (Custom Design System) |
| **Architecture** | REST API with system-level prompt engineering |

---

## 🚀 How to Run Locally

### Prerequisites
- [Node.js](https://nodejs.org/) v18+ installed
- A [Google AI Studio](https://aistudio.google.com/apikey) API key

### 1. Clone the Repository
```bash
git clone https://github.com/Asmit1211/Election-Copilot-AI.git
cd Election-Copilot-AI
```

### 2. Setup the Backend
```bash
cd backend
npm install
cp .env.example .env
```

Edit the `.env` file and add your Gemini API key:
```env
GEMINI_API_KEY=your_actual_api_key_here
```

Start the backend server:
```bash
npm run dev
```
> Backend runs on `http://localhost:5000`

### 3. Setup the Frontend
```bash
cd ../frontend
npm install
npm run dev
```
> Frontend runs on `http://localhost:5174`

### 4. Open in Browser
Navigate to `http://localhost:5174` — select your voter type and start chatting! 🎉

---

## 📂 Project Structure

```
Election-Copilot-AI/
├── backend/
│   ├── routes/
│   │   └── chat.js          # POST /api/chat — Gemini integration
│   ├── systemPrompt.js       # Prompt engineering & guardrails
│   ├── server.js             # Express server with CORS & health checks
│   ├── .env.example          # Environment template (safe to commit)
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── App.jsx           # Full app: Landing → Onboarding → Dashboard
│   │   └── index.css         # Design system (dark mode, glassmorphism)
│   ├── index.html
│   └── package.json
├── .gitignore
└── README.md
```

---

## 🧪 Prompt Engineering Highlights

The system prompt powering Election Copilot uses several advanced techniques:

| Technique | Implementation |
|-----------|---------------|
| **Role Framing** | AI is framed as a "strictly neutral election mentor" |
| **Scope Boundary** | Hard-coded refusal responses for off-topic queries |
| **Multilingual Mirroring** | Language auto-detection with same-dialect replies |
| **State Machine Tags** | Hidden `[UPDATE_STEP: X]` tags for UI synchronization |
| **Anti-Hallucination** | Explicit instruction to avoid inventing dates/deadlines |
| **Graceful Degradation** | Curated fallback responses when the AI is unavailable |

---

## 👤 Author

**Asmit** — Built with ❤️ for the Google Prompt Wars Hackathon

---

<div align="center">

*Democracy works best when every citizen is informed. Let's make voting accessible for all.* 🇮🇳

</div>
