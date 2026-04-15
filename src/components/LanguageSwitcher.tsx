import { useLanguage, type Language } from '@/i18n';

const LANGS: Language[] = ['en', 'it', 'pt', 'fr'];

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-0.5">
      {LANGS.map((lang) => (
        <button
          key={lang}
          onClick={() => setLanguage(lang)}
          className={`font-mono text-[10px] sm:text-[9px] tracking-[0.12em] uppercase px-2 py-1 transition-colors duration-150 min-h-[28px] min-w-[28px] flex items-center justify-center
            ${language === lang ? 'text-cream bg-cream-12' : 'text-cream-42 hover:text-cream'}
          `}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
