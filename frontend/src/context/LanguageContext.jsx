// ============================================================
// Language Context — Global language state for the app
// ============================================================
// Provides { language, setLanguage } to all components.
// AssistantPage uses this to prepend the active language
// to the user's message payload before sending to the API.
// ============================================================

import { createContext, useContext, useState, useCallback } from 'react';
import { translations } from '../utils/translations.js';

const LanguageContext = createContext(undefined);

const LANGUAGES = [
  'English',
  'Hindi',
  'Marathi',
  'Telugu',
  'Tamil',
];

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('English');

  const t = useCallback((key) => {
    const keys = key.split('.');
    let value = translations[language];
    for (const k of keys) {
      if (value === undefined) break;
      value = value[k];
    }
    return value || key; // Fallback to key if not found
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, LANGUAGES, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export default LanguageContext;
