import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useTheme } from 'styled-components';
import {
  fetchAllNotices,
  fetchFavoriteNotices,
  fetchOwnNotices,
  // current,
  fetchPrivateCards,
} from 'api';
import { NoticesCategoryItem } from '../NoticesCategoryItem';
import { DarkBtn as LoadMoreBtn } from 'components/global/button';
import { ListBox } from './NoticesCategoriesList.styled';
import { selectSearchQuery, setFavorites, setOwn } from 'redux/notices';
import { getIsLogin } from 'redux/auth';

export const NoticesCategoriesList = () => {
  // const
  const dispatch = useDispatch();
  const location = useLocation();
  const isLoggedIn = useSelector(getIsLogin);
  const theme = useTheme();
  const pathname = location.pathname.split('/')[2];

  let categoryName = '';

  useEffect(() => {
    if (!isLoggedIn) return;
    const setFavoritesArray = async () => {
      const { favorite, advertisement } = await fetchPrivateCards();
      dispatch(setFavorites(favorite));
      dispatch(setOwn(advertisement));
    };
    setFavoritesArray();
  }, [isLoggedIn, dispatch]);

  const searchQuery = useSelector(selectSearchQuery);

  switch (pathname) {
    case 'for-free':
      categoryName = 'in good hands';
      break;

    case 'lost-found':
      categoryName = 'lost/found';
      break;
    case 'sell':
      categoryName = 'sell';
      break;

    default:
      break;
  }

  const { error, data, fetchNextPage, hasNextPage, isFetchingNextPage, isError, isSuccess } =
    useInfiniteQuery(
      ['notices', 'all', categoryName, searchQuery, pathname],
      ({ pageParam = 0 }) => {
        if (pathname === 'favorite') {
          return fetchFavoriteNotices();
        }
        if (pathname === 'own') {
          return fetchOwnNotices();
        }
        return fetchAllNotices({ category: categoryName, offset: pageParam, search: searchQuery });
      },
      {
        getNextPageParam: (lastPage, allPages) => {
          if (lastPage.length === 0) return undefined;
          return allPages.length;
        },
        staleTime: 5 * 60 * 1000,
      }
    );

  if (error) {
    console.error(error.message);
  }

  const isLoadingInitialData = !isSuccess && !isError;

  return (
    <>
      <ListBox>
        {isLoadingInitialData && <p>Loading initial data...</p>}
        {isError && <p>An error occurred while fetching the data. Please try again later.</p>}
        {isSuccess && (
          <>
            {data?.pages?.flat()?.length === 0 && <p>No notices here yet...</p>}
            {data.pages.map((page, i) => (
              <React.Fragment key={i}>
                {page?.map(noticesItem => (
                  <NoticesCategoryItem key={noticesItem._id + i} noticesItem={noticesItem} />
                ))}
              </React.Fragment>
            ))}
          </>
        )}
      </ListBox>

      {pathname !== 'own' && pathname !== 'favorite' && hasNextPage && (
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
