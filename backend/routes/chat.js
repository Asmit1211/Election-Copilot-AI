// ============================================================
// Election Copilot AI — Chat Route (Gemini API)
// ============================================================
// POST /api/chat
// Accepts: { message, userRole, currentStep }
// Returns: { reply, step, source }
//
// Uses Google Generative Language API (Gemini) via REST.
// ============================================================

import { Router } from 'express';
import { buildSystemPrompt } from '../systemPrompt.js';

const router = Router();

/**
 * Fallback responses when the LLM is unavailable.
 * Keyed by currentStep for contextual relevance.
 */
const FALLBACK_RESPONSES = {
  1: 'Abhi main AI se connect nahi ho pa raha. Eligibility check karne ke liye voters.eci.gov.in par jao ya 1950 helpline pe call karo. 📞',
  2: 'Network issue aa rahi hai. Voter ID ke liye Form 6 online fill karo: voters.eci.gov.in. Ya apne nearest BLO se milo! 📝',
  3: 'Abhi connection issue hai. Polling booth find karne ke liye Voter Helpline App download karo ya 1950 pe call karo. 📍',
  4: 'Connection problem hai. Voting day ki tayyari ke liye apna voter ID aur ek valid photo ID saath rakhna mat bhoolna! 🗳️',
};

const GENERIC_FALLBACK = 'Network connection issue. Please check your internet or try again.';

/**
 * Validates the incoming request body.
 */
function validateRequest(body) {
  const errors = [];

  if (!body.message || typeof body.message !== 'string' || body.message.trim().length === 0) {
    errors.push('message is required and must be a non-empty string.');
  }

  if (body.message && body.message.length > 2000) {
    errors.push('message must be 2000 characters or less.');
  }

  const validRoles = ['first-time', 'regular'];
  if (!body.userRole || !validRoles.includes(body.userRole)) {
    errors.push(`userRole must be one of: ${validRoles.join(', ')}`);
  }

  const step = Number(body.currentStep);
  if (!step || step < 1 || step > 4) {
    errors.push('currentStep must be a number between 1 and 4.');
  }

  return errors;
}

/**
 * Calls the Google Generative Language API (Gemini).
 *
 * @param {string} systemPrompt - The system instruction text
 * @param {string} userMessage  - The user's message
 * @returns {Promise<string>}   - The AI response text
 */
async function callGemini(systemPrompt, userMessage) {
  const apiKey = process.env.GEMINI_API_KEY;
  const model = process.env.GEMINI_MODEL || 'gemini-2.5-flash-lite';

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

  const payload = {
    system_instruction: {
      parts: [{ text: systemPrompt }],
    },
    contents: [
      {
        role: 'user',
        parts: [{ text: userMessage }],
      },
    ],
    generationConfig: {
      temperature: 0.7,
      topP: 0.9,
      maxOutputTokens: 600,
    },
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Gemini API ${response.status}: ${errorBody}`);
  }

  const data = await response.json();

  // Extract text from nested Gemini response structure
  const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text;

  if (!reply) {
    throw new Error('Empty response from Gemini API');
  }

  return reply.trim();
}

/**
 * POST /api/chat
 *
 * Processes a user message through Gemini with election-specific
 * system guardrails. Returns the AI response.
 */
router.post('/', async (req, res) => {
  // --- Validate ---
  const errors = validateRequest(req.body);
  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      error: 'Validation failed',
      details: errors,
    });
  }

  const { message, userRole, currentStep } = req.body;
  const step = Number(currentStep);

  // --- Build system prompt ---
  const systemPrompt = buildSystemPrompt({ userRole, currentStep: step });

  // --- Check if Gemini API key is configured ---
  if (!process.env.GEMINI_API_KEY) {
    console.log('📝 [Chat] Gemini API key missing — returning fallback response');
    return res.json({
      success: true,
      reply: FALLBACK_RESPONSES[step] || GENERIC_FALLBACK,
      step,
      source: 'fallback',
    });
  }

  // --- Call Gemini ---
  try {
    const model = process.env.GEMINI_MODEL || 'gemini-2.5-flash-lite';
    console.log(`🤖 [Chat] Calling Gemini ${model} | Role: ${userRole} | Step: ${step}`);

    const reply = await callGemini(systemPrompt, message.trim());

    console.log(`✅ [Chat] Gemini response received (${reply.length} chars)`);

    return res.json({
      success: true,
      reply,
      step,
      source: 'gemini',
    });
  } catch (error) {
    console.error('❌ [Chat] Gemini Error:', error.message);

    // Return safe fallback — never expose internal errors to client
    return res.status(200).json({
      success: true,
      reply: FALLBACK_RESPONSES[step] || GENERIC_FALLBACK,
      step,
      source: 'fallback',
    });
  }
});

export default router;
