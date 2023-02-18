import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Navigate, Route, Routes } from 'react-router-dom';

import { SharedLayout } from 'page/SharedLayout';
import { NewsPage } from 'page/NewsPage';
import { OurFriendsPage } from 'page/OurFriendsPage';
import { RegisterPage } from 'page/RegisterPage';
import { UserPage } from 'page/UserPage';
import { NoticesPage } from 'page/NoticesPage';
import { LoginPage } from 'page/LoginPage';
import { Home } from 'page/Home';
// import { NotFound } from 'page/NotFound';
// import { FormSellStepOne } from 'components/modules/Form/FormSell/FormSellStepOne';
import { FormSellStepTwo } from 'components/modules/Form/FormSell/FormSellStepTwo';
import { FormBox } from 'components/modules/Form/FormBox/FormBox';
import { FormSellStepOne } from 'components/modules/Form/FormSell/FormSellStepOne';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="notices" element={<NoticesPage />} />
          <Route path="friends" element={<OurFriendsPage />} />
          {/* Пудлычний шлях */}
          <Route path="register" element={<RegisterPage />} />
          <Route path="login " element={<LoginPage />} />
          {/* Приватний шлях */}
          <Route path="user" element={<UserPage />} />
          <Route path="*" element={<Navigate to="/" />} />
          {/* <Route path="*" element={<NotFound />} /> */}
          {/* <Route path="addpet" element={<BackDrop />}>
            <Route path="step1" element={<FormSellStepOne />} />
            <Route path="step2" element={<FormSellStepTwo />} />
          </Route> */}
          <Route path="addpet" element={<FormBox />}>
            <Route path="step1" element={<FormSellStepOne />}></Route>
            <Route path="step2" element={<FormSellStepTwo />}></Route>
            {/* // <Route path="step2" element={<FormSellStepTwo />}></Route> */} */
          </Route>
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
