import { Box } from 'components/global/Box';
import { PostItem } from './PostItem';
import { List } from './PostList.styled';

export const PostList = ({ comments }) => {
  return (
    <Box pl={6}>
      <List>
        {comments.map(({ _id, author, text }) => {
          const photoUrl = author?.photo ?? `https://api.multiavatar.com/${_id}.png`;
          return <PostItem key={_id} src={photoUrl} text={text} />;
        })}
      </List>
    </Box>
  );
};

//
