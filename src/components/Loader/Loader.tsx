import { getStyleClassName } from '../../utils/general';
import scss from './Loader.module.scss';

interface LoaderProps {
  size?: 'small' | 'large';
}

const Loader: React.FC<LoaderProps> = ({ size }) => {
  const loaderSizeClassName = `size-${size || 'large'}`;

  return (
    <div className={getStyleClassName(scss, 'loader-container')}>
      <div className={getStyleClassName(scss, 'loader', loaderSizeClassName)}></div>
    </div>
  );
};

export default Loader;
