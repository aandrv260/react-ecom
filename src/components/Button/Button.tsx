import { ButtonStyle, ButtonTextColor, ButtonType } from '../../models/button';
import { getStyleClassName } from '../../utils/general';
import scss from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  btnStyle?: ButtonStyle;
  link?: string;
  type?: ButtonType;
  textColor?: ButtonTextColor;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ btnStyle, link, onClick, children, textColor, type }) => {
  const mainClassName = getStyleClassName(scss, 'button', `button--${btnStyle || 'full'}`);
  const darkTextColorClassName =
    textColor === 'dark' ? getStyleClassName(scss, 'button-text-dark') : '';
  const className = `${mainClassName} ${darkTextColorClassName}`.trim();

  if (link) {
    return (
      <a className={className} href={link}>
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
