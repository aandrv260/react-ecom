import { getStyleClassName } from '../../utils/general';
import scss from './Overlay.module.scss';

interface OverlayProps {
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  hidden?: boolean;
}

const Overlay: React.FC<OverlayProps> = ({ children, className, onClick, hidden }) => {
  const overlayClassName = getStyleClassName(scss, 'overlay', hidden ? 'hidden' : '');
  //   const finalClassName = `${className} ${overlayClassName}`.trim();

  return (
    <div className={overlayClassName} onClick={onClick}>
      {children}
    </div>
  );
};

export default Overlay;
