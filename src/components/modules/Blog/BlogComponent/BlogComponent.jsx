import React from 'react';
import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import { Suspense } from 'react';
// import { Outlet } from 'react-router-dom';
import { BlogContainer, Title } from './BlogComponent.styled';
import { BlogSearch } from './BlogSearch/BlogSearch';
import { BlogCategoriesNav } from './BlogCategoriesNav';
import { PostsList } from '../PostsList';

export const BlogComponent = () => {
  // const location = useLocation();
  // const navigate = useNavigate();

  useEffect(
    () => {
      // if (location.pathname === '/notices') {
      //   navigate('/notices/sell', { replace: true });
      // }
    },
    [
      // location.pathname, navigate
    ]
  );

  return (
    <BlogContainer>
      <Title>Community</Title>
      <BlogSearch />
      <BlogCategoriesNav />
      <PostsList />
      {/* <Suspense>
        <Outlet />
      </Suspense> */}
    </BlogContainer>
  );
};
