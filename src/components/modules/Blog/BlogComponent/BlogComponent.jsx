import React from 'react';
import { useState, useEffect } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { BlogCategoriesNav } from './BlogCategoriesNav';
import { PostsList } from './PostsList';
import { fetchPosts } from 'api/posts';
import { Loader } from 'components/global/Loader';
import { Title, LoadMoreBtn, ListBox } from './BlogComponent.styled';
import { InputSearch } from 'components/global/InputSearch';
import { Container } from 'components/global/Container';
import { Box } from 'components/global/Box';

const PAGE_SIZE = 5; // number of items per page

export const BlogComponent = () => {
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setSearchQuery(searchQuery);

    return () => {};
  }, [searchQuery]);

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
    ['posts'],
    async ({ pageParam = 0 }) =>
      await fetchPosts({ offset: pageParam, count: PAGE_SIZE, search: searchQuery }),
    {
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage.length === 0) return undefined;
        const lastPost = lastPage[lastPage.length - 1];
        const totalPages = Math.ceil(lastPost.totalCount / PAGE_SIZE);
        return allPages.length >= totalPages ? undefined : allPages.length * PAGE_SIZE;
      },
      staleTime: 5 * 60 * 1000,
    }
  );

  return (
    <Container pb={100} pt={64}>
      <Box display="flex" flexDirection="column" justifyContent="center">
        <Title>Community</Title>
        <InputSearch change={setSearchQuery} value={searchQuery} debounceDelay={300} />
        <BlogCategoriesNav />

        {isLoading && <Loader />}

        {isError &&
          ([401, 403].includes(error.response.status) ? (
            <p>Please login...</p>
          ) : (
            <p>An error occurred while fetching the data. Please try again later.</p>
          ))}

        {isSuccess && (
          <ListBox>
            {data?.pages?.flat()?.length === 0 && <p>No posts here yet...</p>}
            {data.pages.map((page, i) => (
              <React.Fragment key={i}>
                <PostsList data={page} />
              </React.Fragment>
            ))}
          </ListBox>
        )}

        {hasNextPage && data.pages[data.pages.length - 1].length === PAGE_SIZE && (
          <LoadMoreBtn
            type="button"
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
            isFetchingNextPage={isFetchingNextPage}
          >
            {isFetchingNextPage ? 'Loading more...' : 'Load More'}
          </LoadMoreBtn>
        )}
      </Box>
    </Container>
  );
};
