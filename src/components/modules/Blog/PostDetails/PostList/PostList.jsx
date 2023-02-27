import { Box } from 'components/global/Box';
import { PostItem } from './PostItem';
import { List } from './PostList.styled';

export const PostList = ({ comments }) => {
  return (
    <Box pl={6}>
      <List>
        {comments.map(({ _id, author, text }) => {
          return <PostItem key={_id} src={author.photo} text={text} />;
        })}
      </List>
    </Box>
  );
};
