import { Post } from '../PostItem';

export const PostsList = ({ data, ...props }) => {
  return (
    <>
      {data.map((post, index) => {
        const isImageOnRight = index % 2 === 0 ? true : false;
        return <Post key={post._id} post={post} isImageOnRight={isImageOnRight} />;
      })}
    </>
  );
};
