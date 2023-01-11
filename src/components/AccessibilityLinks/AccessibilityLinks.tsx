import { getStyleClassName } from '../../utils/general';
import scss from './AccessibilityLinks.module.scss';

const AccessibilityLinks = () => {
  return (
    <>
      <a className={getStyleClassName(scss, 'navigate-to-content-link')} href="#main-content">
        To main content
      </a>
    </>
  );
};

export default AccessibilityLinks;
