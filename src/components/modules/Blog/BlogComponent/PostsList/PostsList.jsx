import { Post } from '../PostItem';
import { DarkBtn as LoadMoreBtn } from 'components/global/button';
import { ListBox } from './PostsList.styled';
// import { selectSearchQuery } from 'redux/notices';

export const PostsList = ({ data, ...props }) => {
  return (
    <>
      <ListBox>
        <p>Post</p>

        {data.map((post, index) => {
          const isImageOnRight = index % 2 === 0 ? true : false;
          return <Post key={post._id} post={post} isImageOnRight={isImageOnRight} />;
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
