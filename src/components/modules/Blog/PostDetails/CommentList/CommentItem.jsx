import PropTypes from 'prop-types';
import { Text } from 'components/global/text';
import { convertCreationDateToDateAndTime } from '../../helpers';
import { ImgComment, Item, Feedback, CommentText, CommentDate } from './CommentList.styled';

export const CommentItem = ({ text, author, createDate }) => {
  const { name, photo } = author;
  const firstName = name.split(' ')[0];
  return (
    <Item>
      <ImgComment src={photo} alt={name} />
      <Feedback>
        <Text weight="600">
          {firstName}: <CommentText>{text}</CommentText>
        </Text>
        <CommentDate>{createDate ? convertCreationDateToDateAndTime(createDate) : ''}</CommentDate>
      </Feedback>
    </Item>
  );
};

CommentItem.propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.object.isRequired,
  createDate: PropTypes.string.isRequired,
};
