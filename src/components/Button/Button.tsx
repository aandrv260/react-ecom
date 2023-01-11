import { getStyleClassName } from '../../utils/general';
import scss from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  btnStyle?: 'full' | 'outline' | 'small';
  link?: string;
  type?: 'submit' | 'button' | 'reset';
  textColor?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ btnStyle, link, onClick, children, textColor, type }) => {
  const className = getStyleClassName(scss, 'button', `button--${btnStyle || 'full'}`);

  if (link) {
    return (
      <a className={`${className}`} href={link} style={{ color: textColor }}>
        {children}
      </a>
    );
  }

  return (
    <button className={className} onClick={onClick} type={type} style={{ color: textColor }}>
      {children}
    </button>
  );
};

export default Button;
