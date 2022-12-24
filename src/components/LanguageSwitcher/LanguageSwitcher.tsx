import { useState } from 'react';
import { capitalizeString, getStyleClassName } from '../../utils/general';
import scss from './LanguageSwitcher.module.scss';

type Language = 'english' | 'bulgarian';

// TODO: For testing purposes - must be removed later
const languages: readonly Language[] = ['bulgarian', 'english'];

export default function LanguageSwitcher() {
  const [lang, setLang] = useState<Language>('english');

  return (
    <div className={getStyleClassName(scss, 'lang-switcher')}>
      <select className={getStyleClassName(scss, 'lang-switcher__select')} title="Select language">
        {languages.map(lang => (
          <option value={lang} key={Math.random()}>
            {capitalizeString(lang)}
          </option>
        ))}
      </select>
    </div>
  );
}
