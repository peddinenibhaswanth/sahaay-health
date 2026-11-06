import { useEffect, useState } from 'react';
import { LANGUAGE_STORAGE_KEY, getStoredLanguage, translations } from '../i18n';
import { LanguageContext } from './contexts';

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getStoredLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
    try {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    } catch {
      // Saving is best-effort; the site still works without storage access.
    }
  }, [language]);

  const value = {
    language,
    setLanguage,
    copy: translations[language],
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
