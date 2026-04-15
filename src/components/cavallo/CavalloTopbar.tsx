import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useLanguage } from '@/i18n';

const CavalloTopbar = () => {
  const { t } = useLanguage();
  return (
    <div className="fixed top-0 left-0 right-0 px-4 sm:px-7 py-3 flex justify-between items-center z-50 bg-background/90 backdrop-blur-lg border-b border-cream-12">
      <div className="flex items-center gap-2 min-h-[44px] overflow-hidden">
        <Link to="/" className="min-h-[44px] min-w-[44px] flex items-center justify-center text-cream-42 hover:text-cream transition-colors flex-shrink-0">
          <Home className="w-4 h-4" />
        </Link>
        <Link to="/" className="font-display text-sm font-light text-cream-42 hover:text-cream transition-colors flex-shrink-0">
          HyperYou
        </Link>
        <span className="text-cream-15 flex-shrink-0">/</span>
        <span className="font-display text-lg font-light text-cream-64 truncate">
          Hors<em className="italic text-cavallo-em">You</em>™
        </span>
      </div>
      <div className="flex items-center gap-3">
        <div className="font-mono text-[9px] tracking-[0.28em] text-cavallo-em uppercase hidden sm:block">
          {t('topbarCavalloLabel')}
        </div>
        <LanguageSwitcher />
      </div>
    </div>
  );
};

export default CavalloTopbar;
