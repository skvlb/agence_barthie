import frTranslations from '../data/i18n/fr.json';
import enTranslations from '../data/i18n/en.json';

const dictionaries = {
  fr: frTranslations,
  en: enTranslations
};

let currentLang = localStorage.getItem('agence_barthie_lang') || 'fr';

export function getLang() {
  return currentLang;
}

export function setLang(lang) {
  if (dictionaries[lang]) {
    currentLang = lang;
    localStorage.setItem('agence_barthie_lang', lang);
    document.documentElement.lang = lang;
    translatePage();
    // Dispatch an event so other components (like portfolio/navbar) can react if needed
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: lang }));
  }
}

// Function to translate a specific key (e.g. "hero.title")
export function t(key) {
  if (!key) return '';
  const keys = key.split('.');
  let value = dictionaries[currentLang];
  for (const k of keys) {
    if (value && value[k]) {
      value = value[k];
    } else {
      return key; // return key if not found
    }
  }
  return value;
}

// Helper to translate dynamic objects { fr: '...', en: '...' }
export function tObj(obj) {
  if (!obj) return '';
  if (typeof obj === 'string') return obj; // already a string
  return obj[currentLang] || obj.fr || '';
}

// Translate all elements with data-i18n
export function translatePage() {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translation = t(key);
    if (translation !== key) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translation;
      } else {
        el.innerHTML = translation; // Allow HTML in translations
      }
    }
  });
}

export function initI18n() {
  document.documentElement.lang = currentLang;
  translatePage();
}
