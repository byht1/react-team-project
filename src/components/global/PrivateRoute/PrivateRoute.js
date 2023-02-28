import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLogin } = useAuth();
  // console.log(isLogin);
  const shouldRedirect = !isLogin;
  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};
