import { useState } from 'react';
import scss from '../../layout/Header/Header.module.scss';
import { getStyleClassName } from '../../utils/general';
import { ReactComponent as SearchIcon } from '../../assets/icons/searchIcon.svg';

export default function HeaderSearch() {
  const [query, setQuery] = useState<string>('');

  const inputChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setQuery(event.currentTarget.value);
  };

  return (
    <form className={getStyleClassName(scss, 'header__search-form')}>
      <input type="text" value={query} onChange={inputChangeHandler} placeholder="Search.." />

      <div className={getStyleClassName(scss, 'header__search-icon-box')}>
        <SearchIcon />
      </div>
    </form>
  );
}
