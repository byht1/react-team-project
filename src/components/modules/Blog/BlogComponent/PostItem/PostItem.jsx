import React from 'react';
import { AiOutlineLike, AiOutlineComment } from 'react-icons/ai';
import {
  StyledPost,
  StyledImageWrapper,
  StyledImage,
  StyledContent,
  StyledTitle,
  StyledAuthor,
  StyledDate,
  StyledCategory,
  StyledText,
  StyledMetaIcon,
  StyledButton,
} from './PostItem.styled';

import { Box } from 'components/global/Box';
import { convertCreationDateToDateAndTime } from '../../helpers';

export const Post = ({ post, isImageOnRight }) => {
  const { image, author, title, category, text, createdAt, comments, likes, _id } = post;

  const trimText = text => {
    const maxLength = 300;
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };

  return (
    <StyledPost isImageOnRight={isImageOnRight}>
      <StyledImageWrapper>
        <StyledImage
          src={image ? image : ''}
          alt={author.name ? author.name : ''}
          isImageOnRight={isImageOnRight}
        />
        <StyledCategory>{category ? category : ''}</StyledCategory>
      </StyledImageWrapper>
      <StyledContent isImageOnRight={isImageOnRight}>
        <Box flex="1" mb={4}>
          <Box display="flex" alignItems="flex-end" justifyContent="space-between" gridGap={7}>
            <StyledTitle>{title}</StyledTitle>
          </Box>
          <StyledAuthor>{author.name ? author.name : ''}</StyledAuthor>
          <StyledText>{trimText(text ? text : '')}</StyledText>
          <StyledDate>{createdAt ? convertCreationDateToDateAndTime(createdAt) : ''}</StyledDate>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex" alignItems="center" p={3} gridGap={5}>
            <StyledMetaIcon>
              <AiOutlineComment style={{ width: '24px', height: '24px' }} />
              {comments.length}
            </StyledMetaIcon>
            <StyledMetaIcon>
              <AiOutlineLike style={{ width: '24px', height: '24px' }} />
              {likes.length}
            </StyledMetaIcon>
          </Box>
          <StyledButton to={`${_id}`}>Read more</StyledButton>
        </Box>
      </StyledContent>
    </StyledPost>
  );
};
