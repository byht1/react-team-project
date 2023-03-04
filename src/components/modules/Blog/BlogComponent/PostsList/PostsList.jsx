import { Post } from '../PostItem';
import { useSelector } from 'react-redux';
import { getUserId } from 'redux/auth';

export const PostsList = ({ data, ...props }) => {
  const userId = useSelector(getUserId);

  return (
    <>
      {data.map((post, index) => {
        const isImageOnRight = index % 2 === 0 ? true : false;
        return <Post key={post._id} post={post} isImageOnRight={isImageOnRight} userId={userId} />;
      })}
    </>
  );
};
