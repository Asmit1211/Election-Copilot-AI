// ============================================================
// Home Dashboard — Premium SaaS Hero + Feature Cards
// ============================================================

import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

function HomeDashboard() {
  const navigate = useNavigate();
  const { t } = useLanguage();

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
          {t('home.poweredBy')}
        </div>

        {/* Hero Heading */}
        <h1 className="home-title">
          {t('home.title')}{' '}
          <span className="home-title-gold">{t('home.titleGold')}</span>
        </h1>
        <p className="landing-subtitle">
          {t('home.subtitle')}
        </p>

        {/* CTA */}
        <div className="landing-cta-group">
          <button
            className="btn-primary btn-glow-blue"
            onClick={() => navigate('/journey')}
            id="home-get-started-btn"
          >
            {t('home.getStarted')}
            <span className="btn-primary-arrow" aria-hidden="true">→</span>
          </button>
          <button
            className="btn-ghost"
            onClick={() => navigate('/assistant')}
            id="home-learn-more-btn"
          >
            {t('home.talkToAI')}
          </button>
        </div>

        {/* Glassmorphism Feature Cards */}
        <div className="home-features">
          <div className="glass-feature-card">
            <div className="glass-feature-icon">🎯</div>
            <div className="glass-feature-title">{t('home.feature1Title')}</div>
            <div className="glass-feature-desc">
              {t('home.feature1Desc')}
            </div>
          </div>
          <div className="glass-feature-card">
            <div className="glass-feature-icon">⚡</div>
            <div className="glass-feature-title">{t('home.feature2Title')}</div>
            <div className="glass-feature-desc">
              {t('home.feature2Desc')}
            </div>
          </div>
          <div className="glass-feature-card">
            <div className="glass-feature-icon">🔒</div>
            <div className="glass-feature-title">{t('home.feature3Title')}</div>
            <div className="glass-feature-desc">
              {t('home.feature3Desc')}
            </div>
          </div>
        </div>

        {/* Trust Bar */}
        <div className="trust-bar">
          <div className="trust-item">
            <span className="trust-item-icon">✓</span>
            {t('home.trust1')}
          </div>
          <div className="trust-item">
            <span className="trust-item-icon">✓</span>
            {t('home.trust2')}
          </div>
          <div className="trust-item">
            <span className="trust-item-icon">✓</span>
            {t('home.trust3')}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeDashboard;
