import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { NoticesSearch } from 'components/modules/Notices/NoticesSearch';
import { NoticesCategoriesNav } from 'components/modules/Notices/NoticesCategoriesNav';
import { NoticesContainer } from './NoticesPage.styled';

const NoticesPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/notices') {
      navigate('/notices/sell', { replace: true });
    }
  }, [location.pathname, navigate]);

  return (
    <NoticesContainer>
      <NoticesSearch />
      <NoticesCategoriesNav />
      <Suspense>
        <Outlet />
      </Suspense>
    </NoticesContainer>
  );
};

export default NoticesPage;
