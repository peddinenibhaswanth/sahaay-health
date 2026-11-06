import { en } from './en';
import { te } from './te';

export const translations = { en, te };

export const SUPPORTED_LANGUAGES = ['en', 'te'];
export const DEFAULT_LANGUAGE = 'en';
export const LANGUAGE_STORAGE_KEY = 'sahaay.language';

export function isSupportedLanguage(value) {
  return SUPPORTED_LANGUAGES.includes(value);
}

export function getStoredLanguage() {
  try {
    const stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (isSupportedLanguage(stored)) {
      return stored;
    }
  } catch {
    // Local storage can be unavailable in private browsing. Fall back quietly.
  }

  if (typeof navigator !== 'undefined' && navigator.language?.toLowerCase().startsWith('te')) {
    return 'te';
  }

  return DEFAULT_LANGUAGE;
}
