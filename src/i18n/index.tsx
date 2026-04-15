import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import en from './translations/en';
import it from './translations/it';
import pt from './translations/pt';
import fr from './translations/fr';

export type Language = 'en' | 'it' | 'pt' | 'fr';

const translations: Record<string, Record<string, string>> = { en, it, pt, fr };

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: (key: string) => key,
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = useCallback((key: string): string => {
    return translations[language]?.[key] || translations.en?.[key] || key;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
