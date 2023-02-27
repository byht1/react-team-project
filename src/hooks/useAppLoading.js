import { useQuery } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { current, googleIn, refresh } from 'api/auth';
import { register } from 'redux/auth';

const refreshToken = async () => {
  try {
    const isValid = await refresh();

    if (!isValid) return false;

    return await current();
  } catch (error) {
    throw error;
  }
};

export const useAppLoading = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const accessToken = searchParams.get('access_token');

  const navigate = useNavigate();

  const { isLoading, isError, isSuccess } = useQuery({
    queryFn: () => {
      if (accessToken) {
        return googleIn(accessToken);
      }
      return refreshToken();
    },
    queryKey: ['user'],
    onSuccess: data => {
      if (!data) return;

      if (accessToken) {
        setSearchParams({});
        navigate('/user');
      }

      dispatch(register(data));
    },
    onError: error => console.error(error.response.data.message),
    retry: 1,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });

  return { isLoading, isError, isSuccess };
};

// export const useAppLoading = () => {
//   const dispatch = useDispatch();
//   const [searchParams, setSearchParams] = useSearchParams();
//   const accessToken = searchParams.get('access_token');
//   console.log(accessToken);

//   const navigate = useNavigate();

//   const { isLoading, isSuccess, isError } = useQuery({
//     queryFn: () => {
//       if (accessToken) {
//         return googleIn(accessToken);
//       }
//       return refresh();
//     },
//     queryKey: ['user'],
//     onSuccess: data => {
//       console.log(data);
//       if (accessToken) {
//         setSearchParams({});
//         navigate('/user');
//       }
//       dispatch(register(data));
//     },
//     onError: error => console.log(error.response.data.message),
//     retry: 1,
//     staleTime: Infinity,
//     refetchOnWindowFocus: false,
//   });
//   console.log('🚀  isError:', isError);

//   return { isLoading, isSuccess, isError };
// };

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
