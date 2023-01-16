import { Link } from 'react-router-dom';
import { ButtonStyle, ButtonTextColor, ButtonType } from '../../models/button';
import { getStyleClassName } from '../../utils/general';
import scss from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  btnStyle?: ButtonStyle;
  link?: string;
  innerLink?: boolean;
  type?: ButtonType;
  textColor?: ButtonTextColor;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = props => {
  const { btnStyle, link, onClick, children, textColor, type, innerLink } = props;
  const mainClassName = getStyleClassName(scss, 'button', `button--${btnStyle || 'full'}`);
  const darkTextColorClassName =
    textColor === 'dark' ? getStyleClassName(scss, 'button-text-dark') : '';
  const className = `${mainClassName} ${darkTextColorClassName}`.trim();

  if (link && !innerLink) {
    return (
      <a className={className} href={link}>
        {children}
      </a>
    );
  }

  if (link && innerLink) {
    return (
      <Link className={className} to={link}>
        {children}
      </Link>
    );
  }

  return (
    <button className={className} onClick={onClick} type={type} style={{ color: textColor }}>
      {children}
    </button>
  );
};

export default Button;
