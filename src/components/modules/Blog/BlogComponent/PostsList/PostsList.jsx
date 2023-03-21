import { Post } from '../PostItem';
import { useSelector } from 'react-redux';
import { getUserId } from 'redux/auth';

export const PostsList = ({ data }) => {
  const userId = useSelector(getUserId);

  return (
    <>
      {data.map(post => {
        return <Post key={post._id} post={post} userId={userId} />;
      })}
    </>
  );
};
