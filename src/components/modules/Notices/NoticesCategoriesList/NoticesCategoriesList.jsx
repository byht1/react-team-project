import React from 'react';
import { useLocation } from 'react-router-dom';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useTheme } from 'styled-components';
import { fetchAllNotices } from 'services/notices';
import { NoticesCategoryItem } from '../NoticesCategoryItem';
import { DarkBtn as LoadMoreBtn } from 'components/global/button';
import { ListBox } from './NoticesCategoriesList.styled';

export const NoticesCategoriesList = () => {
  const location = useLocation();
  const theme = useTheme();
  const pathname = location.pathname.split('/')[2];
  let categoryName = '';

  switch (pathname) {
    case 'for-free':
      categoryName = 'in good hands';
      break;

    case 'lost-found':
      categoryName = 'lost/found';
      break;

    default:
      categoryName = 'sell';
      break;
  }

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isError, isSuccess } =
    useInfiniteQuery(
      ['notices', 'all', categoryName],
      ({ pageParam = 0 }) => fetchAllNotices(categoryName, pageParam),
      {
        getNextPageParam: (lastPage, allPages) => {
          if (lastPage.length === 0) return undefined;
          return allPages.length;
        },
        staleTime: 5 * 60 * 1000,
      }
    );

  const isLoadingInitialData = !isSuccess && !isError;

  return (
    <>
      <ListBox>
        {isLoadingInitialData && <p>Loading initial data...</p>}
        {isError && <p>An error occurred while fetching the data. Please try again later.</p>}
        {isSuccess && (
          <>
            {data.pages.map((page, i) => (
              <React.Fragment key={i}>
                {page.map(noticesItem => (
                  <NoticesCategoryItem key={noticesItem._id} noticesItem={noticesItem} />
                ))}
              </React.Fragment>
            ))}
          </>
        )}
      </ListBox>

      {hasNextPage && (
        <LoadMoreBtn
          type="button"
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
          style={{
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '32px',
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
    </>
  );
};
