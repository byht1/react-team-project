import { useQuery } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { googleIn, refresh } from 'api/auth';
import { register } from 'redux/auth';

export const useAppLoading = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const accessToken = searchParams.get('access_token');
  console.log(accessToken);

  const navigate = useNavigate();

  const { isLoading, isSuccess } = useQuery({
    queryFn: () => {
      if (accessToken) {
        return googleIn(accessToken);
      }
      return refresh();
    },
    queryKey: ['user'],
    onSuccess: data => {
      console.log(data);
      if (accessToken) {
        setSearchParams({});
        navigate('/user');
      }
      dispatch(register(data));
    },
    onError: error => console.log(error.response.data.message),
    retry: 1,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });
  console.log('🚀  isSuccess:', isSuccess);

  return { isLoading, isSuccess };
};

// const dispatch = useDispatch();
// const [searchParams, setSearchParams] = useSearchParams();
// const accessToken = searchParams.get('access_token');
// console.log(accessToken);

// const navigate = useNavigate();

// const { isLoading } = useQuery({
//   queryFn: () => {
//     if (accessToken) {
//       return googleIn(accessToken);
//     }
//     return refresh();
//   },
//   queryKey: ['user'],
//   onSuccess: data => {
//     console.log(data);
//     if (accessToken) {
//       setSearchParams({});
//       navigate('/user');
//     }
//     dispatch(register(data));
//   },
//   onError: error => console.log(error.response.data.message),
//   retry: 1,
//   staleTime: Infinity,
//   refetchOnWindowFocus: false,
// });
