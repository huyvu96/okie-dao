import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

export const supportList = [
  { code: 'en-US', name: 'English', fallback: 'en' },
  { code: 'zh-CN', name: '中文', fallback: 'zh' },
  { code: 'vi-VN', name: 'Tiếng Việt', fallback: 'vi' },
  { code: 'es-ES', name: 'Español', fallback: 'es' },
  { code: 'ja-JP', name: '日本語', fallback: 'ja' },
];

let resources = {
  en: { translation: require('./resources/en.json') },
  vi: { translation: require('./resources/vi.json') },
  zh: { translation: require('./resources/zh.json') },
  es: { translation: require('./resources/es.json') },
  ja: { translation: require('./resources/ja.json') },
};
i18next.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: ['en', 'es', 'zh', 'vi', 'ja'],
  interpolation: {
    escapeValue: false,
  },
  keySeparator: false,
});
export default i18next;
