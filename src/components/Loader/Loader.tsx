import { getStyleClassName } from '../../utils/general';
import scss from './Loader.module.scss';

const Loader: React.FC<{}> = () => {
  return (
    <div className={getStyleClassName(scss, 'loader-container')}>
      <div className={getStyleClassName(scss, 'loader')}></div>
    </div>
  );
};

export default Loader;
