import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { useLocation } from 'react-router-dom';
// import { useInfiniteQuery } from '@tanstack/react-query';
// import { useTheme } from 'styled-components';
// import { fetchAllNotices } from 'services/notices';
import { Post } from '../Post';
import { DarkBtn as LoadMoreBtn } from 'components/global/button';
import { ListBox } from './PostsList.styled';
// import { selectSearchQuery } from 'redux/notices';

import initialPosts from './posts';

export const PostsList = () => {
  const [posts, setPosts] = useState(initialPosts);
  // const location = useLocation();
  // const theme = useTheme();
  // const pathname = location.pathname.split('/')[2];
  // let categoryName = '';

  // const searchQuery = useSelector(selectSearchQuery);

  // switch (pathname) {
  //   case 'for-free':
  //     categoryName = 'in good hands';
  //     break;

  //   case 'lost-found':
  //     categoryName = 'lost/found';
  //     break;

  //   default:
  //     categoryName = 'sell';
  //     break;
  // }

  // const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isError, isSuccess } =
  //   useInfiniteQuery(
  //     ['notices', 'all', categoryName, searchQuery],
  //     ({ pageParam = 0 }) =>
  //       fetchAllNotices({ category: categoryName, offset: pageParam, search: searchQuery }),
  //     {
  //       getNextPageParam: (lastPage, allPages) => {
  //         if (lastPage.length === 0) return undefined;
  //         return allPages.length;
  //       },
  //       staleTime: 5 * 60 * 1000,
  //     }
  //   );

  // const isLoadingInitialData = !isSuccess && !isError;

  const isSuccess = true;

  return (
    <>
      <ListBox>
        {/* {isLoadingInitialData && <p>Loading initial data...</p>}
        {isError && <p>An error occurred while fetching the data. Please try again later.</p>} */}
        {/* {isSuccess && (
          <>
            {data.pages.map((page, i) => (
              <React.Fragment key={i}>
                {page.map(postItem => (
                  <Post key={Post._id} postItem={PostItem} />
                ))}
              </React.Fragment>
            ))}
          </>
        )} */}

        {posts.map((post, index) => {
          const isImageOnRight = index % 2 === 0 ? true : false;
          console.log('🚀 ~ file: PostsList.jsx:74 ~ isImageOnRight:', isImageOnRight);

          return (
            // <div>123</div>
            <Post key={post.id} post={post} isImageOnRight={isImageOnRight} />
          );
        })}
      </ListBox>

      {/* {hasNextPage && (
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
      )} */}
    </>
  );
};
