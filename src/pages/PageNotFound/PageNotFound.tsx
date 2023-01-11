import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import { getStyleClassName } from '../../utils/general';
import scss from './PageNotFound.module.scss';

const PageNotFound = () => {
  const navigateTo = useNavigate();
  const buttonClickHandler = () => {
    navigateTo('/');
  };

  return (
    <section>
      <div className={`${getStyleClassName(scss, 'not-found')} container`}>
        <h1>Page not found</h1>
        <p>It looks like the page that you requested does not exist.</p>
        <Button onClick={buttonClickHandler}>Back to home page</Button>
      </div>
    </section>
  );
};

export default PageNotFound;
