import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
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
import FormAddNoticePage from 'page/AddNoticePage/AddNoticePage';
import { FormStepOne } from 'components/modules/FormAddNotice';
import { FormStepTwo } from 'components/modules/FormAddNotice';
import { useEffect } from 'react';
import { refresh } from 'api/auth';

// import { NotFound } from 'page/NotFound';

const queryClient = new QueryClient();

function App() {
  useEffect(() => {
    const test = async () => {
      await refresh();
    };

    test();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
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
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          {/* Приватний шлях */}
          <Route path="user" element={<UserPage />} />
          <Route path="*" element={<Navigate to="/" />} />

          <Route path="addpet" element={<FormAddNoticePage />}>
            <Route path="step1" element={<FormStepOne />}></Route>
            <Route path="step2" element={<FormStepTwo />}></Route>
            {/* // <Route path="step2" element={<FormSellStepTwo />}></Route> */} */
          </Route>

          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
