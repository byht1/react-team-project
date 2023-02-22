import { useSelector } from 'react-redux';
import { getUserId, getIsLogin } from 'redux/auth';

export const useAuth = () => {
  const isLogin = useSelector(getIsLogin);
  const userId = useSelector(getUserId);

  return { isLogin, userId };
};
