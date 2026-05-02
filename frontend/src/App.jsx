// ============================================================
// App Shell — Routing & Navigation
// ============================================================

import { Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { useState, useCallback } from 'react';
import { useLanguage } from './context/LanguageContext.jsx';
import HomeDashboard from './pages/HomeDashboard.jsx';
import JourneyPage from './pages/JourneyPage.jsx';
import IndiaElectionMap from './pages/IndiaElectionMap.jsx';
import AssistantPage from './pages/AssistantPage.jsx';
import './App.css';

/* ============================================================
   NAVBAR — Navigation with Links
   ============================================================ */
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, LANGUAGES } = useLanguage();
  const [showLangDropdown, setShowLangDropdown] = useState(false);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  return (
    <nav className="navbar" id="main-navbar">
      <NavLink to="/" className="navbar-brand" onClick={closeMenu}>
        <div className="navbar-logo" aria-hidden="true">🗳️</div>
        <span className="navbar-title">Election Copilot</span>
        <span className="navbar-badge">AI</span>
      </NavLink>

      {/* Desktop Nav Links */}
      <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <NavLink
          to="/"
          className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
          onClick={closeMenu}
          end
        >
          Home
        </NavLink>
        <NavLink
          to="/journey"
          className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
          onClick={closeMenu}
        >
          Journey
        </NavLink>
        <NavLink
          to="/map"
          className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
          onClick={closeMenu}
        >
          Map
        </NavLink>
        <NavLink
          to="/assistant"
          className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
          onClick={closeMenu}
        >
          AI Assistant
        </NavLink>
      </div>

      {/* Language Selector */}
      <div className="navbar-actions">
        <div className="language-selector">
          <button
            className="language-btn"
            onClick={() => setShowLangDropdown(!showLangDropdown)}
            id="language-selector-btn"
          >
            🌐 {language}
          </button>
          {showLangDropdown && (
            <div className="language-dropdown">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang}
                  className={`language-option ${lang === language ? 'active' : ''}`}
                  onClick={() => {
                    setLanguage(lang);
                    setShowLangDropdown(false);
                  }}
                >
                  {lang}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Hamburger */}
        <button
          className={`navbar-hamburger ${menuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          id="navbar-hamburger"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}

/* ============================================================
   APP — Shell with Routes
   ============================================================ */
function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<HomeDashboard />} />
          <Route path="/journey" element={<JourneyPage />} />
          <Route path="/map" element={<IndiaElectionMap />} />
          <Route path="/assistant" element={<AssistantPage />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <p>
          Election Copilot AI — Built for every citizen. 🇮🇳
        </p>
      </footer>
    </div>
  );
}

export default App;
