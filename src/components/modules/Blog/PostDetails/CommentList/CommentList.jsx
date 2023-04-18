import { Box } from 'components/global/Box';
import { CommentItem } from './CommentItem';
import { List } from './CommentList.styled';

export const CommentList = ({ comments }) => {
  return (
    <Box pl={6}>
      <List>
        {comments.map((comment, _id) => {
          return <CommentItem key={_id} comment={comment} />;
        })}
      </List>
    </Box>
  );
};
