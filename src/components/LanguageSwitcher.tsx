'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
];

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const [currentLang, setCurrentLang] = useState('en');

  useEffect(() => {
    const lang = pathname.split('/')[1];
    if (languages.some(l => l.code === lang)) {
      setCurrentLang(lang);
    }
  }, [pathname]);

  const handleLanguageChange = (langCode: string) => {
    const segments = pathname.split('/');
    segments[1] = langCode; // Replace the language segment
    const newPath = segments.join('/');
    router.push(newPath);
    setCurrentLang(langCode);
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <select
        value={currentLang}
        onChange={(e) => handleLanguageChange(e.target.value)}
        className="bg-white border border-gray-300 rounded-md px-4 py-2 text-sm font-medium shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 cursor-pointer"
        aria-label="Select language"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.flag} {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
} 