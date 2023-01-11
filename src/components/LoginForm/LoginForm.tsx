import { useRef } from 'react';
import { ButtonStyle, ButtonTextColor } from '../../models/button';
import { getStyleClassName } from '../../utils/general';
import Button from '../Button/Button';
import scss from '../Login/AccountForm.module.scss';

interface LoginFormProps {
  onSubmit: React.FocusEventHandler<HTMLFormElement>;
  children: React.ReactNode;
  heading: string;
  button: {
    text: string;
    style: ButtonStyle;
    textColor?: ButtonTextColor;
  };
}

const LoginForm: React.FC<LoginFormProps> = props => {
  const { children, heading, button, onSubmit } = props;

  return (
    <form className={`${getStyleClassName(scss, 'account-form')} container`} onSubmit={onSubmit}>
      <h1 className={getStyleClassName(scss, 'account-form__heading')}>{heading}</h1>
      {children}
      <Button type="submit" btnStyle={button.style} textColor={button.textColor || 'light'}>
        {button.text}
      </Button>
    </form>
  );
};

export default LoginForm;
