
import { useState, useCallback, useRef, useEffect } from 'react';
import './App.css';

/* ============================================================
   VIEW CONSTANTS
   ============================================================ */
const VIEWS = {
  LANDING: 'landing',
  ONBOARDING: 'onboarding',
  DASHBOARD: 'dashboard',
};

const VOTER_TYPES = {
  FIRST_TIME: 'first-time',
  REGULAR: 'regular',
};

/* ============================================================
   NAVBAR
   ============================================================ */
function Navbar({ showBack, onBack }) {
  return (
    <nav className="navbar" id="main-navbar">
      <div className="navbar-brand">
        <div className="navbar-logo" aria-hidden="true">🗳️</div>
        <span className="navbar-title">Election Copilot</span>
        <span className="navbar-badge">AI</span>
      </div>
      {showBack && (
        <button className="btn-back" onClick={onBack} id="navbar-back-btn">
          ← Back
        </button>
      )}
    </nav>
  );
}

/* ============================================================
   LANDING PAGE
   ============================================================ */
function LandingPage({ onGetStarted }) {
  return (
    <section className="landing" id="landing-section">
      <div className="landing-content">
        {/* Icon Cluster */}
        <div className="landing-icon-cluster">
          <div className="landing-icon-secondary">📋</div>
          <div className="landing-icon-main">🗳️</div>
          <div className="landing-icon-secondary">🤖</div>
        </div>

        {/* Status Pill */}
        <div className="landing-pill">
          <span className="landing-pill-dot" />
          Powered by AI — Always Ready
        </div>

        {/* Hero Text */}
        <h1 className="landing-title">
          Election{' '}
          <span className="landing-title-gradient">Copilot AI</span>
        </h1>
        <p className="landing-subtitle">
          Your smart guide to the election process. Get personalized guidance on 
          voter registration, polling locations, candidate info, and everything you 
          need to make your vote count.
        </p>

        {/* CTA */}
        <div className="landing-cta-group">
          <button
            className="btn-primary"
            onClick={onGetStarted}
            id="get-started-btn"
          >
            Get Started
            <span className="btn-primary-arrow" aria-hidden="true">→</span>
          </button>
          <button className="btn-ghost" id="learn-more-btn">
            Learn how it works ↓
          </button>
        </div>

        {/* Feature Cards */}
        <div className="landing-features">
          <div className="feature-card">
            <div className="feature-card-icon">🎯</div>
            <div className="feature-card-title">Personalized</div>
            <div className="feature-card-desc">
              Tailored guidance based on your voter profile
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-card-icon">⚡</div>
            <div className="feature-card-title">Instant Answers</div>
            <div className="feature-card-desc">
              AI-powered responses to all your election questions
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-card-icon">🔒</div>
            <div className="feature-card-title">Private & Secure</div>
            <div className="feature-card-desc">
              Your data stays with you, always
            </div>
          </div>
        </div>

        {/* Trust Bar */}
        <div className="trust-bar">
          <div className="trust-item">
            <span className="trust-item-icon">✓</span>
            Non-partisan
          </div>
          <div className="trust-item">
            <span className="trust-item-icon">✓</span>
            Open source
          </div>
          <div className="trust-item">
            <span className="trust-item-icon">✓</span>
            No sign-up needed
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   ONBOARDING PAGE
   ============================================================ */
function OnboardingPage({ onContinue, onBack }) {
  const [selectedType, setSelectedType] = useState(null);

  const handleContinue = useCallback(() => {
    if (selectedType) {
      onContinue(selectedType);
    }
  }, [selectedType, onContinue]);

  return (
    <section className="onboarding view-enter" id="onboarding-section">
      <div className="onboarding-container">
        {/* Header */}
        <div className="onboarding-header">
          <div className="onboarding-step-indicator">Step 1 of 2</div>
          <h2 className="onboarding-title">Tum kaun ho?</h2>
          <p className="onboarding-subtitle">
            Tell us about your voting experience so we can personalize your journey.
          </p>
        </div>

        {/* Voter Type Cards */}
        <div className="onboarding-options">
          {/* First-time Voter */}
          <button
            className={`voter-card ${selectedType === VOTER_TYPES.FIRST_TIME ? 'selected' : ''}`}
            onClick={() => setSelectedType(VOTER_TYPES.FIRST_TIME)}
            id="voter-card-first-time"
            aria-pressed={selectedType === VOTER_TYPES.FIRST_TIME}
          >
            <div className="voter-card-check" aria-hidden="true">✓</div>
            <div className="voter-card-icon">🌟</div>
            <div className="voter-card-label">First-time Voter</div>
            <div className="voter-card-desc">
              Pehli baar vote de rahe ho? We'll guide you step by step.
            </div>
          </button>

          {/* Regular Voter */}
          <button
            className={`voter-card ${selectedType === VOTER_TYPES.REGULAR ? 'selected' : ''}`}
            onClick={() => setSelectedType(VOTER_TYPES.REGULAR)}
            id="voter-card-regular"
            aria-pressed={selectedType === VOTER_TYPES.REGULAR}
          >
            <div className="voter-card-check" aria-hidden="true">✓</div>
            <div className="voter-card-icon">🗳️</div>
            <div className="voter-card-label">Regular Voter</div>
            <div className="voter-card-desc">
              Experienced voter looking for quick info and updates.
            </div>
          </button>
        </div>

        {/* Actions */}
        <div className="onboarding-actions">
          <button
            className="btn-continue"
            disabled={!selectedType}
            onClick={handleContinue}
            id="onboarding-continue-btn"
          >
            Continue
            <span aria-hidden="true">→</span>
          </button>
          <button className="btn-back" onClick={onBack} id="onboarding-back-btn">
            ← Go back
          </button>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   TIMELINE STEPS DATA
   ============================================================ */
const TIMELINE_STEPS = [
  {
    id: 1,
    icon: '✅',
    title: 'Check Eligibility',
    desc: 'Verify age, citizenship & residency',
  },
  {
    id: 2,
    icon: '🆔',
    title: 'Register / Get Voter ID',
    desc: 'Apply for EPIC card online or offline',
  },
  {
    id: 3,
    icon: '📍',
    title: 'Find Polling Booth',
    desc: 'Locate your assigned voting station',
  },
  {
    id: 4,
    icon: '🗳️',
    title: 'Voting Day',
    desc: 'Cast your vote with confidence',
  },
];

/* ============================================================
   VERTICAL TIMELINE SIDEBAR
   ============================================================ */
function TimelineSidebar({ currentStep, onStepClick }) {
  return (
    <aside className="timeline-sidebar" id="timeline-sidebar">
      <div className="timeline-header">
        <div className="timeline-header-icon">🗺️</div>
        <h3 className="timeline-header-title">Your Journey</h3>
      </div>

      <div className="timeline-track">
        {TIMELINE_STEPS.map((step, index) => {
          const isCompleted = step.id < currentStep;
          const isActive = step.id === currentStep;
          const isUpcoming = step.id > currentStep;

          let statusClass = 'upcoming';
          if (isCompleted) statusClass = 'completed';
          if (isActive) statusClass = 'active';

          return (
            <button
              className={`timeline-step ${statusClass}`}
              key={step.id}
              onClick={() => onStepClick(step.id)}
              id={`timeline-step-${step.id}`}
              aria-current={isActive ? 'step' : undefined}
            >
              {/* Connector line (not on first item) */}
              {index > 0 && (
                <div className={`timeline-connector ${isCompleted || isActive ? 'filled' : ''}`} />
              )}

              <div className="timeline-step-node">
                <div className="timeline-step-circle">
                  {isCompleted ? (
                    <span className="timeline-check">✓</span>
                  ) : (
                    <span className="timeline-number">{step.id}</span>
                  )}
                </div>
              </div>

              <div className="timeline-step-content">
                <div className="timeline-step-title">{step.title}</div>
                <div className="timeline-step-desc">{step.desc}</div>
              </div>

              {isActive && (
                <div className="timeline-step-badge">Current</div>
              )}
            </button>
          );
        })}
      </div>

      {/* Progress summary */}
      <div className="timeline-progress-bar">
        <div className="timeline-progress-label">
          <span>Progress</span>
          <span>{Math.round((currentStep / TIMELINE_STEPS.length) * 100)}%</span>
        </div>
        <div className="timeline-progress-track">
          <div
            className="timeline-progress-fill"
            style={{ width: `${(currentStep / TIMELINE_STEPS.length) * 100}%` }}
          />
        </div>
      </div>
    </aside>
  );
}

/* ============================================================
   CHAT INTERFACE
   ============================================================ */
function ChatInterface({ voterType, currentStep, onStepUpdate }) {
  const isFirstTime = voterType === VOTER_TYPES.FIRST_TIME;

  const initialMessages = isFirstTime
    ? [
        {
          id: 1,
          role: 'ai',
          text: 'Namaste! 🙏 Main tumhara Election Copilot hoon. Main tumhe step by step guide karunga voting process mein.',
          time: '9:01 PM',
        },
        {
          id: 2,
          role: 'ai',
          text: 'Pehle baat — Kya tumhare paas voter ID (EPIC card) hai?',
          time: '9:01 PM',
        },
        {
          id: 3,
          role: 'user',
          text: 'Nahi, mere paas voter ID nahi hai. Kaise banwau?',
          time: '9:02 PM',
        },
        {
          id: 4,
          role: 'ai',
          text: 'Koi baat nahi! Voter ID banana bohot simple hai. Tumhare paas 2 options hain:\n\n1️⃣ **Online** — voters.eci.gov.in par Form 6 fill karo\n2️⃣ **Offline** — Apne nearest BLO (Booth Level Officer) se milo\n\nTumhe chahiye hoga: Aadhaar card, age proof, aur address proof. Kaunsa option prefer karoge?',
          time: '9:02 PM',
        },
      ]
    : [
        {
          id: 1,
          role: 'ai',
          text: 'Welcome back! 👋 Good to see a seasoned voter here. Main tumhara Election Copilot hoon.',
          time: '9:01 PM',
        },
        {
          id: 2,
          role: 'ai',
          text: 'Kya jaanna chahoge? Polling booth location, candidate list, ya election schedule?',
          time: '9:01 PM',
        },
        {
          id: 3,
          role: 'user',
          text: 'Mera polling booth kahan hai?',
          time: '9:02 PM',
        },
        {
          id: 4,
          role: 'ai',
          text: 'Sure! Apna polling booth find karne ke liye:\n\n1️⃣ **voters.eci.gov.in** par jao\n2️⃣ "Know Your Polling Booth" section select karo\n3️⃣ Apna EPIC number ya details enter karo\n\nKya tum apna constituency ya PIN code bata sakte ho? Main aur accurately help kar sakta hoon! 📍',
          time: '9:02 PM',
        },
      ];

  const [messages, setMessages] = useState(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = useCallback(async () => {
    if (!inputValue.trim()) return;

    const userMessage = inputValue.trim();
    const now = () => new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });

    // 1. Add user message to UI
    const userMsg = {
      id: Date.now(),
      role: 'user',
      text: userMessage,
      time: now(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');

    // 2. Add loading indicator
    const loadingId = Date.now() + 1;
    setMessages((prev) => [...prev, {
      id: loadingId,
      role: 'ai',
      text: 'Soch raha hoon... ⏳',
      time: now(),
      isLoading: true,
    }]);

    // 3. Call the backend
    try {

      const response = await fetch('https://election-copilot-ai.onrender.com/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMessage,
          userRole: voterType,
          currentStep: currentStep || 1,
        }),
      });

      const data = await response.json();

      // 4. Parse [UPDATE_STEP: X] tag from AI response
      let replyText = data.reply || '';
      const stepMatch = replyText.match(/\[UPDATE_STEP:\s*(\d+)\]/);
      if (stepMatch && onStepUpdate) {
        const nextStep = parseInt(stepMatch[1], 10);
        onStepUpdate(nextStep);
      }
      // Strip the tag before displaying
      replyText = replyText.replace(/\[UPDATE_STEP:\s*\d+\]/, '').trim();

      // 5. Replace loading message with real AI response
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === loadingId
            ? { ...msg, text: replyText, isLoading: false, time: now() }
            : msg
        )
      );
    } catch (error) {
      console.error('❌ API Call Failed:', error);

      // Replace loading with fallback error message
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === loadingId
            ? {
                ...msg,
                text: 'Network connection issue. Please check your internet or try again.',
                isLoading: false,
                time: now(),
              }
            : msg
        )
      );
    }
  }, [inputValue, voterType, currentStep, onStepUpdate]);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSend();
      }
    },
    [handleSend]
  );

  return (
    <div className="chat-area" id="chat-area">
      {/* Chat Header */}
      <div className="chat-header">
        <div className="chat-header-avatar">🤖</div>
        <div className="chat-header-info">
          <div className="chat-header-name">Election Copilot</div>
          <div className="chat-header-status">
            <span className="chat-status-dot" />
            Online — Ready to help
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="chat-messages" id="chat-messages">
        {messages.map((msg) => (
          <div
            className={`chat-bubble-wrapper ${msg.role}`}
            key={msg.id}
          >
            {msg.role === 'ai' && (
              <div className="chat-bubble-avatar">🤖</div>
            )}
            <div className={`chat-bubble ${msg.role}`}>
              <div className="chat-bubble-text">
                {msg.text.split('\n').map((line, i) => (
                  <span key={i}>
                    {line.split(/(\*\*.*?\*\*)/).map((part, j) =>
                      part.startsWith('**') && part.endsWith('**') ? (
                        <strong key={j}>{part.slice(2, -2)}</strong>
                      ) : (
                        part
                      )
                    )}
                    {i < msg.text.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </div>
              <div className="chat-bubble-time">{msg.time}</div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="chat-input-area" id="chat-input-area">
        <div className="chat-input-wrapper">
          <input
            type="text"
            className="chat-input"
            placeholder="Apna sawal type karo..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            id="chat-input"
            aria-label="Type your message"
          />

          <button
            className="chat-send-btn"
            onClick={handleSend}
            disabled={!inputValue.trim()}
            id="chat-send-btn"
            aria-label="Send message"
          >
            <span className="chat-send-icon">➤</span>
          </button>
        </div>
        <div className="chat-input-hint">
          Press Enter to send · AI responses are for guidance only
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   DASHBOARD — Two-Column Layout (Chat + Timeline)
   ============================================================ */
function DashboardPage({ voterType, onReset }) {
  const [currentStep, setCurrentStep] = useState(1);

  const handleStepClick = useCallback((stepId) => {
    setCurrentStep(stepId);
  }, []);

  return (
    <section className="dashboard view-enter" id="dashboard-section">
      <div className="dashboard-layout">
        {/* Main: Chat Interface */}
        <ChatInterface voterType={voterType} currentStep={currentStep} onStepUpdate={setCurrentStep} />

        {/* Sidebar: Timeline */}
        <TimelineSidebar
          currentStep={currentStep}
          onStepClick={handleStepClick}
        />
      </div>

      {/* Footer */}
      <footer className="app-footer">
        <p>
          Election Copilot AI — Built for every citizen.{' '}
          <button
            onClick={onReset}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--color-primary-400)',
              cursor: 'pointer',
              fontSize: 'inherit',
              textDecoration: 'underline',
              padding: 0,
            }}
            id="reset-btn"
          >
            Start Over
          </button>
        </p>
      </footer>
    </section>
  );
}

/* ============================================================
   APP SHELL — State Machine
   ============================================================ */
function App() {
  const [currentView, setCurrentView] = useState(VIEWS.LANDING);
  const [voterType, setVoterType] = useState(null);

  const handleGetStarted = useCallback(() => {
    setCurrentView(VIEWS.ONBOARDING);
  }, []);

  const handleOnboardingContinue = useCallback((type) => {
    setVoterType(type);
    setCurrentView(VIEWS.DASHBOARD);
  }, []);

  const handleBack = useCallback(() => {
    if (currentView === VIEWS.DASHBOARD) {
      setCurrentView(VIEWS.ONBOARDING);
    } else if (currentView === VIEWS.ONBOARDING) {
      setCurrentView(VIEWS.LANDING);
    }
  }, [currentView]);

  const handleReset = useCallback(() => {
    setVoterType(null);
    setCurrentView(VIEWS.LANDING);
  }, []);

  const showNavBack = currentView !== VIEWS.LANDING;

  return (
    <div className="app-shell">
      <Navbar showBack={showNavBack} onBack={handleBack} />

      {currentView === VIEWS.LANDING && (
        <LandingPage onGetStarted={handleGetStarted} />
      )}

      {currentView === VIEWS.ONBOARDING && (
        <OnboardingPage
          onContinue={handleOnboardingContinue}
          onBack={handleBack}
        />
      )}

      {currentView === VIEWS.DASHBOARD && (
        <DashboardPage voterType={voterType} onReset={handleReset} />
      )}
    </div>
  );
}

export default App;
