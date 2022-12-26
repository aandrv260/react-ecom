import { getStyleClassName } from '../../utils/general';
import scss from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  btnStyle?: 'full' | 'outline' | 'small';
  link?: string;
  type?: 'submit' | 'button' | 'reset';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ btnStyle, link, onClick, children, type }) => {
  const className = getStyleClassName(scss, 'button', `button--${btnStyle || 'full'}`);

  if (link) {
    return (
      <a className={`${className}`} href={link}>
        {children}
      </a>
    );
  }

  return (
    <button className={className} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
