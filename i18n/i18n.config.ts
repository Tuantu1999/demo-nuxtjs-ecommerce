import vi from './locales/vi.json';
import en from './locales/en.json';

export default defineI18nConfig(() => ({
  legacy: false,
  lazy: true,
  langDir: 'locales/',
  defaultLocale: 'en',
  locales: 'vi',
  messages: { vi, en }
}));
