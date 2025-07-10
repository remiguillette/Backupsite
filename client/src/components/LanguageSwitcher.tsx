import { useTranslation } from '../hooks/useTranslation';

export const LanguageSwitcher = () => {
  const { language, changeLanguage } = useTranslation();

  return (
    <div className="flex items-center bg-rg-card-bg rounded-lg p-1">
      <button
        onClick={() => changeLanguage('fr')}
        className={`px-3 py-1 text-sm font-medium rounded-md transition-all duration-200 ${
          language === 'fr'
            ? 'bg-rg-orange text-white'
            : 'text-gray-400 hover:text-white'
        }`}
      >
        FR
      </button>
      <button
        onClick={() => changeLanguage('en')}
        className={`px-3 py-1 text-sm font-medium rounded-md transition-all duration-200 ${
          language === 'en'
            ? 'bg-rg-orange text-white'
            : 'text-gray-400 hover:text-white'
        }`}
      >
        EN
      </button>
    </div>
  );
};
