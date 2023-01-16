import { getStyleClassName } from '../../utils/general';
import scss from './Grid.module.scss';

interface GridProps {
  className?: string;
  children: React.ReactNode;
  columns: 2 | 3 | 4 | 5;
}

const Grid: React.FC<GridProps> = ({ className, children, columns }) => {
  const gridClassName = getStyleClassName(scss, 'grid', `grid--${columns}-cols`);
  const finalClassName = `${className} ${gridClassName}`.trim();

  return <div className={finalClassName}>{children}</div>;
};

export default Grid;
