import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import { Suspense } from 'react';
// import { Outlet } from 'react-router-dom';
import { BlogContainer, Title, LoadMoreBtn } from './BlogComponent.styled';
import { BlogSearch } from './BlogSearch/BlogSearch';
import { BlogCategoriesNav } from './BlogCategoriesNav';
import { PostsList } from './PostsList';
import { useQuery } from '@tanstack/react-query';
import { fetchAllPosts } from 'api/posts';
import { Loader } from 'components/global/Loader';
import { useTheme } from 'styled-components';
import { refresh } from 'api';

export const BlogComponent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // const pathname = location.pathname;
  const theme = useTheme();

  useEffect(
    () => {
      const refreshToken = async () => {
        await refresh();
      };

      refreshToken();
      // console.log(navigate, location);
      // if (location.pathname === '/notices') {
      //   navigate('/notices/sell', { replace: true });
      // }
    },
    [
      // navigate,
      // location,
      // location.pathname, navigate
    ]
  );

  const {
    data,
    isLoading,
    isSuccess,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useQuery(['posts', 'all'], fetchAllPosts, {
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage && lastPage.data.length === 1) {
        return lastPage.data[lastPage.data.length - 1].id;
      } else {
        return null;
      }
    },
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <BlogContainer>
      <Title>Community</Title>
      <BlogSearch />
      <BlogCategoriesNav />

      {isSuccess && <PostsList data={data} />}

      {isError &&
        (error.response.status === 403 ? (
          <p>Please login...</p>
        ) : (
          <p>An error occurred while fetching the data. Please try again later.</p>
        ))}

      {hasNextPage && (
        <LoadMoreBtn
          type="button"
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
          style={{
            backgroundColor: isFetchingNextPage && theme.colors.tagBg,
            color: isFetchingNextPage && theme.colors.bt,
            border: isFetchingNextPage && `2px solid ${theme.colors.trsp}`,
            pointerEvents: isFetchingNextPage && 'none',
            cursor: isFetchingNextPage ? 'not-allowed' : 'pointer',
          }}
        >
          {isFetchingNextPage ? 'Loading more...' : 'Load More'}
        </LoadMoreBtn>
      )}
    </BlogContainer>
  );
};
