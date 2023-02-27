import React from 'react';
import { fetchNews } from 'api/news';
import { Container } from 'components/global/Container';
import { NewsList } from 'components/modules/NewsPage/NewsList';
import { Loader } from 'components/global/Loader';
import { useInfiniteQuery } from '@tanstack/react-query';
import { NewBlock, LoadMoreBtn } from './NewsPage.styled';

const PAGE_SIZE = 6;

export const NewsPageConponent = () => {
  const {
    // data,
    isLoading,
    // isSuccess,
    // isError,
    // error,
    fetchNextPage,
    hasNextPage,
    // isFetchingNextPage,
  } = useInfiniteQuery(
    ['news', 'all'],
    async ({ pageParam = 0 }) => await fetchNews({ offset: pageParam, limit: PAGE_SIZE }),

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

  return (
    <Container pb={100} pt={64}>
      <NewBlock>
        <NewsList />
        <LoadMoreBtn
        >Load More</LoadMoreBtn>
      </NewBlock>
    </Container>
  );
};
