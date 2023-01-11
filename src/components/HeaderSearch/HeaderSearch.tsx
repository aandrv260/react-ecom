import { useEffect, useState } from 'react';
import scss from '../../layout/Header/Header.module.scss';
import { getStyleClassName } from '../../utils/general';
import { ReactComponent as SearchIcon } from '../../assets/icons/searchIcon.svg';

export default function HeaderSearch() {
  const [query, setQuery] = useState<string>('');

  const formSubmitHandler = () => {
    console.log('works');
  };

  useEffect(() => {
    document.addEventListener('keydown', event => {
      if (document.activeElement?.id !== 'search-icon') return;
      if (event.key !== 'Enter' || event.keyCode !== 13) return;

      formSubmitHandler();
    });
  }, []);

  const inputChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setQuery(event.currentTarget.value);
  };

  return (
    <form className={getStyleClassName(scss, 'header__search-form')} onSubmit={formSubmitHandler}>
      <input type="text" value={query} onChange={inputChangeHandler} placeholder="Search.." />

      <div className={getStyleClassName(scss, 'header__search-icon-box')}>
        <SearchIcon tabIndex={0} id="search-icon" />
      </div>
    </form>
  );
}
