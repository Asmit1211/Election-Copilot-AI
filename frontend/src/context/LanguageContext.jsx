// ============================================================
// Language Context — Global language state for the app
// ============================================================
// Provides { language, setLanguage } to all components.
// AssistantPage uses this to prepend the active language
// to the user's message payload before sending to the API.
// ============================================================

import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext(undefined);

const LANGUAGES = [
  'English',
  'Hindi',
  'Marathi',
  'Tamil',
  'Telugu',
  'Bengali',
  'Gujarati',
  'Kannada',
  'Malayalam',
  'Punjabi',
];

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('English');

  return (
    <LanguageContext.Provider value={{ language, setLanguage, LANGUAGES }}>
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
