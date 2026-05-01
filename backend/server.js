// ============================================================
// Election Copilot AI — Express Server
// ============================================================
// Stateless API server. No database. No sessions.
// Single endpoint: POST /api/chat
// ============================================================

import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import chatRoute from './routes/chat.js';

const app = express();
const PORT = process.env.PORT || 5000;

// ---- Middleware ----

// CORS — allow frontend origin
const allowedOrigins = [
  process.env.FRONTEND_URL || 'http://localhost:5174',
  'http://localhost:5173',
  'http://localhost:3000',
];

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (mobile apps, Postman, etc.)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.warn(`⚠️  CORS blocked origin: ${origin}`);
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Parse JSON bodies (with size limit to prevent abuse)
app.use(express.json({ limit: '10kb' }));

// Request logging (lightweight)
app.use((req, _res, next) => {
  if (req.method !== 'OPTIONS') {
    console.log(`${req.method} ${req.path} [${new Date().toLocaleTimeString()}]`);
  }
  next();
});

// ---- Routes ----

// Health check
app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    service: 'Election Copilot AI',
    timestamp: new Date().toISOString(),
    llmProvider: 'gemini',
    llmModel: process.env.GEMINI_MODEL || 'gemini-2.5-flash-lite',
    llmConfigured: !!process.env.GEMINI_API_KEY,
  });
});

// Chat endpoint
app.use('/api/chat', chatRoute);

// ---- Error Handling ----

// 404 — unknown routes
app.use((_req, res) => {
  res.status(404).json({
    success: false,
    error: 'Route not found',
    hint: 'Available endpoints: GET /api/health, POST /api/chat',
  });
});

// Global error handler
app.use((err, _req, res, _next) => {
  console.error('💥 Unhandled error:', err.message);
  res.status(500).json({
    success: false,
    error: 'Internal server error',
  });
});

// ---- Start ----

app.listen(PORT, () => {
  console.log('');
  console.log('  ╔══════════════════════════════════════╗');
  console.log('  ║   🗳️  Election Copilot AI — Backend  ║');
  console.log('  ╚══════════════════════════════════════╝');
  console.log('');
  console.log(`  → Server:    http://localhost:${PORT}`);
  console.log(`  → Health:    http://localhost:${PORT}/api/health`);
  console.log(`  → Chat API:  POST http://localhost:${PORT}/api/chat`);
  console.log(`  → CORS:      ${allowedOrigins.join(', ')}`);
  console.log(`  → LLM:       Gemini ${process.env.GEMINI_MODEL || 'gemini-2.5-flash-lite'} ${process.env.GEMINI_API_KEY ? '✅ Configured' : '⚠️  No API key (fallback mode)'}`);
  console.log('');
});

export default app;
