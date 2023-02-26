import React from 'react';
import { useEffect } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useTheme } from 'styled-components';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { Suspense } from 'react';
// import { Outlet } from 'react-router-dom';
import { BlogSearch } from './BlogSearch/BlogSearch';
import { BlogCategoriesNav } from './BlogCategoriesNav';
import { PostsList } from './PostsList';
import { fetchPosts } from 'api/posts';
import { Loader } from 'components/global/Loader';
import { refresh } from 'api';
import { BlogContainer, Title, LoadMoreBtn, ListBox } from './BlogComponent.styled';

const PAGE_SIZE = 2; // number of items per page

export const BlogComponent = () => {
  // const location = useLocation();
  // const navigate = useNavigate();
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
  } = useInfiniteQuery(
    ['posts', 'all'],

    async ({ pageParam = 0 }) => await fetchPosts({ offset: pageParam, count: PAGE_SIZE }),

    {
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage.length === 0) return undefined;
        const lastPost = lastPage[lastPage.length - 1];
        const totalPages = Math.ceil(lastPost.totalCount / PAGE_SIZE);
        return allPages.length >= totalPages ? undefined : allPages.length * PAGE_SIZE;
      },
    }
  );

  if (isLoading) {
    return <Loader />;
  }

  if (isSuccess) {
  }

  return (
    <BlogContainer>
      <Title>Community</Title>
      <BlogSearch />
      <BlogCategoriesNav />

      {/* {isSuccess && <PostsList data={data} />} */}
      {isSuccess && (
        <ListBox>
          {data?.pages?.flat()?.length === 0 && <p>No notices here yet...</p>}
          {data.pages.map((page, i) => (
            <React.Fragment key={i}>
              <PostsList data={page} />
            </React.Fragment>
          ))}
        </ListBox>
      )}

      {isError &&
        ([401, 403].includes(error.response.status) ? (
          <p>Please login...</p>
        ) : (
          <p>An error occurred while fetching the data. Please try again later.</p>
        ))}

      {hasNextPage && data.pages[data.pages.length - 1].length === PAGE_SIZE && (
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
