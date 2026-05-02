// ============================================================
// Home Dashboard — Premium SaaS Hero + Feature Cards
// ============================================================

import { useNavigate } from 'react-router-dom';

function HomeDashboard() {
  const navigate = useNavigate();

  return (
    <section className="home-dashboard" id="home-dashboard">
      <div className="home-content">
        {/* Icon Cluster */}
        <div className="landing-icon-cluster">
          <div className="landing-icon-secondary">📋</div>
          <div className="landing-icon-main">🗳️</div>
          <div className="landing-icon-secondary">🤖</div>
        </div>

        {/* Pulsing Pill Badge */}
        <div className="landing-pill">
          <span className="landing-pill-dot" />
          Powered by AI — Always Ready
        </div>

        {/* Hero Heading */}
        <h1 className="home-title">
          Election{' '}
          <span className="home-title-gold">Copilot AI</span>
        </h1>
        <p className="landing-subtitle">
          Your smart guide to the election process. Get personalized guidance on
          voter registration, polling locations, candidate info, and everything you
          need to make your vote count.
        </p>

        {/* CTA */}
        <div className="landing-cta-group">
          <button
            className="btn-primary btn-glow-blue"
            onClick={() => navigate('/journey')}
            id="home-get-started-btn"
          >
            Get Started
            <span className="btn-primary-arrow" aria-hidden="true">→</span>
          </button>
          <button
            className="btn-ghost"
            onClick={() => navigate('/assistant')}
            id="home-learn-more-btn"
          >
            Talk to AI Assistant ↗
          </button>
        </div>

        {/* Glassmorphism Feature Cards */}
        <div className="home-features">
          <div className="glass-feature-card">
            <div className="glass-feature-icon">🎯</div>
            <div className="glass-feature-title">Personalized</div>
            <div className="glass-feature-desc">
              Tailored guidance based on your voter profile and location
            </div>
          </div>
          <div className="glass-feature-card">
            <div className="glass-feature-icon">⚡</div>
            <div className="glass-feature-title">Instant Answers</div>
            <div className="glass-feature-desc">
              AI-powered responses to all your election questions in seconds
            </div>
          </div>
          <div className="glass-feature-card">
            <div className="glass-feature-icon">🔒</div>
            <div className="glass-feature-title">Private &amp; Secure</div>
            <div className="glass-feature-desc">
              Your data stays with you — no accounts, no tracking, always
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

export default HomeDashboard;
