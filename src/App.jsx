import { useQuery } from '@tanstack/react-query';
import { Navigate, Route, Routes, useNavigate, useSearchParams } from 'react-router-dom';
import { SharedLayout } from 'page/SharedLayout';
import { NewsPage } from 'page/NewsPage';
import { OurFriendsPage } from 'page/OurFriendsPage';
import { RegisterPage } from 'page/RegisterPage';
import { UserPage } from 'page/UserPage';
import { NoticesPage } from 'page/NoticesPage';
import { NoticesCategoriesList } from 'components/modules/Notices/NoticesCategoriesList';
import { LoginPage } from 'page/LoginPage';
import { Home } from 'page/Home';
import { googleIn, refresh } from 'api/auth';
import { RestrictedRoute } from 'components/global/RestrictedRoute';
import { PrivateRoute } from 'components/global/PrivateRoute';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth';
import { Loader } from 'components/global/Loader';
import { Blog } from 'page/Blog';
import { PostDetails } from 'page/PostDetails';
import FormAddNoticePage from 'page/AddNoticePage/AddNoticePage';
import { FormStepOne } from 'components/modules/FormAddNotice';
import { FormStepTwo } from 'components/modules/FormAddNotice';
// import { NotFound } from 'page/NotFound';

function App() {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const accessToken = searchParams.get('access_token');
  console.log(accessToken);

  const navigate = useNavigate();

  const { isLoading } = useQuery({
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

  if (isLoading) {
    // return <div>loading.....</div>;
    return <Loader />;
  }

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="notices" element={<NoticesPage />}>
          <Route path="sell" element={<NoticesCategoriesList />} />
          <Route path="for-free" element={<NoticesCategoriesList />} />
          <Route path="lost-found" element={<NoticesCategoriesList />} />
          <Route path="favorite" element={<NoticesCategoriesList />} />
          <Route path="own" element={<NoticesCategoriesList />} />
        </Route>
        <Route path="friends" element={<OurFriendsPage />} />
        {/* Пудлычний шлях */}
        <Route
          path="register"
          element={<RestrictedRoute component={RegisterPage} redirectTo="/user" />}
        />
        <Route
          path="login"
          element={<RestrictedRoute component={LoginPage} redirectTo="/user" />}
        />
        {/* Приватний шлях */}
        <Route path="user" element={<PrivateRoute component={UserPage} redirectTo="/login" />} />
        <Route path="posts" element={<Blog />} />
        <Route path="posts/:id" element={<PostDetails />} />
        <Route path="*" element={<Navigate to="/" />} />
        {/* <Route path="*" element={<NotFound />} /> */}
        <Route path="addpet" element={<FormAddNoticePage />}>
          <Route path="step1" element={<FormStepOne />}></Route>
          <Route path="step2" element={<FormStepTwo />}></Route>
          {/* // <Route path="step2" element={<FormSellStepTwo />}></Route> */} */
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
