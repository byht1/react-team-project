import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import { Suspense } from 'react';
// import { Outlet } from 'react-router-dom';
import { BlogContainer, Title } from './BlogComponent.styled';
import { BlogSearch } from './BlogSearch/BlogSearch';
import { BlogCategoriesNav } from './BlogCategoriesNav';
import { PostsList } from './PostsList';
import { useQuery } from '@tanstack/react-query';
import { fetchAllPosts } from 'api/posts';
import { FidgetSpinner } from 'react-loader-spinner';

export const BlogComponent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // const pathname = location.pathname;

  useEffect(() => {
    console.log(navigate, location);
    // if (location.pathname === '/notices') {
    //   navigate('/notices/sell', { replace: true });
    // }
  }, [
    navigate,
    location,
    // location.pathname, navigate
  ]);

  const { data, isLoading, isSuccess } = useQuery({
    queryFn: () => fetchAllPosts({ category: '', offset: 0, count: 5, search: '' }),
    queryKey: ['posts', 'all'],
  });

  if (isLoading) {
    return <FidgetSpinner width={250} height={250} />;
  }

  return (
    <BlogContainer>
      <Title>Community</Title>
      <BlogSearch />
      <BlogCategoriesNav />
      {isSuccess && <PostsList data={data} />}

      {/* <Suspense>
        <Outlet />
      </Suspense> */}
    </BlogContainer>
  );
};
