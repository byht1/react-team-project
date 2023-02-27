import { Navigate, Route, Routes } from 'react-router-dom';
import { SharedLayout } from 'page/SharedLayout';
import { NewsPage } from 'page/NewsPage';
import { OurFriendsPage } from 'page/OurFriendsPage';
import { RegisterPage } from 'page/RegisterPage';
import { UserPage } from 'page/UserPage';
import { NoticesPage } from 'page/NoticesPage';
import { NoticesCategoriesList } from 'components/modules/Notices/NoticesCategoriesList';
import { LoginPage } from 'page/LoginPage';
import { Home } from 'page/Home';
import { RestrictedRoute } from 'components/global/RestrictedRoute';
import { PrivateRoute } from 'components/global/PrivateRoute';
import { Loader } from 'components/global/Loader';
import { Blog } from 'page/Blog';
import { PostDetails } from 'page/PostDetails';
import FormAddNoticePage from 'page/AddNoticePage/AddNoticePage';
import { FormStepOne } from 'components/modules/FormAddNotice';
import { FormStepTwo } from 'components/modules/FormAddNotice';
import { useAppLoading } from 'hooks/useAppLoading';
import { AddMyPetForm } from 'components/modules/ModalAddsPet';
import { FirstPage } from 'components/modules/ModalAddsPet/FormPages/FirstPage';
import { SecondPage } from 'components/modules/ModalAddsPet/FormPages/SecondPage';
import { ForgotPassword } from 'page/ForgotPassword';
import { NewPassword } from 'page/NewPassword';

// import { NotFound } from 'page/NotFound';

function App() {
  const { isLoading } = useAppLoading();

  if (isLoading) {
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
        <Route
          path="forgot-password"
          element={<RestrictedRoute component={ForgotPassword} redirectTo="/user" />}
        />
        <Route
          path="forgotten-password"
          element={<RestrictedRoute component={NewPassword} redirectTo="/user" />}
        />
        {/* Приватний шлях */}
        <Route path="user" element={<PrivateRoute component={UserPage} redirectTo="/login" />}>
          <Route path="addmypet" element={<AddMyPetForm />}>
            <Route path="page1" element={<FirstPage />} />
            <Route path="page2" element={<SecondPage />} />
          </Route>
        </Route>

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
