import { useRef } from 'react';
import { getStyleClassName } from '../../utils/general';
import LoginForm from '../LoginForm/LoginForm';
import scss from './AccountForm.module.scss';

const Login = () => {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const confirmPasswordInputRef = useRef<HTMLInputElement>(null);

  const loginFormSubmitHandler: React.FormEventHandler = event => {
    event.preventDefault();

    const email = emailInputRef.current?.value;
    const password = passwordInputRef.current?.value;

    console.log(email, password);
    // Send HTTP request to the server
  };

  const registerFormSubmitHandler: React.FormEventHandler = () => {};

  return (
    <div className={getStyleClassName(scss, 'account-form-wrapper')}>
      <LoginForm
        heading="Login"
        button={{ text: 'Login', style: 'full' }}
        onSubmit={loginFormSubmitHandler}
      >
        <input
          className={getStyleClassName(scss, 'account-form__input')}
          type="email"
          placeholder="Email"
          ref={emailInputRef}
        />
        <input
          className={getStyleClassName(scss, 'account-form__input')}
          type="password"
          placeholder="Password"
          ref={passwordInputRef}
        />
      </LoginForm>

      <LoginForm
        heading="Register"
        button={{ text: 'Register', style: 'outline', textColor: 'dark' }}
        onSubmit={registerFormSubmitHandler}
      >
        <input
          className={getStyleClassName(scss, 'account-form__input')}
          type="text"
          placeholder="Your name"
          ref={nameInputRef}
        />

        <input
          className={getStyleClassName(scss, 'account-form__input')}
          type="email"
          placeholder="Email"
          ref={emailInputRef}
        />

        <input
          className={getStyleClassName(scss, 'account-form__input')}
          type="password"
          placeholder="Password"
          ref={passwordInputRef}
        />

        <input
          className={getStyleClassName(scss, 'account-form__input')}
          type="password"
          placeholder="Confirm Password"
          ref={confirmPasswordInputRef}
        />
      </LoginForm>
    </div>
  );
};

export default Login;
