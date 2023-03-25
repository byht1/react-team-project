import { Box } from 'components/global/Box';
import { CommentItem } from './CommentItem';
import { List } from './CommentList.styled';

export const CommentList = ({ comments }) => {
  return (
    <Box pl={6}>
      <List>
        {comments.map(({ _id, author, text, createdAt }) => {
          return <CommentItem key={_id} author={author} text={text} createDate={createdAt} />;
        })}
      </List>
    </Box>
  );
};
