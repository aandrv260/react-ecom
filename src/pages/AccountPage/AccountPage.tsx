import { Navigate } from 'react-router-dom';
import LoginForm from '../../components/Login/Login';

const AccountPage: React.FC<{}> = () => {
  // Extract the authentication state from Context API
  const isAuthenticated = false;

  if (isAuthenticated) {
    return <Navigate to={'/'} />;
  }

  return <LoginForm />;
};

export default AccountPage;
