import { getStyleClassName } from '../../utils/general';
import scss from './ButtonsWrapper.module.scss';

interface ButtonsWrapperProps {
  children: React.ReactNode;
  gap?: 'small' | 'medium' | 'large';
}

const ButtonsWrapper: React.FC<ButtonsWrapperProps> = ({ children, gap }) => {
  const gapClassName = `gap-${gap || 'small'}`;

  return <div className={getStyleClassName(scss, 'buttons-wrapper', gapClassName)}>{children}</div>;
};

export default ButtonsWrapper;
