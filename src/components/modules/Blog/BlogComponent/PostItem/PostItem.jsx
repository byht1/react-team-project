import React from 'react';
import {
  StyledPost,
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
import { AiOutlineLike, AiOutlineComment } from 'react-icons/ai';

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
      <StyledImage src={image} alt={author.name} isImageOnRight={isImageOnRight} />
      <StyledContent isImageOnRight={isImageOnRight}>
        <Box flex="1">
          <Box display="flex" alignItems="flex-end" justifyContent="space-between" gridGap={7}>
            <StyledTitle>{title}</StyledTitle>
            <StyledCategory>{category}</StyledCategory>
          </Box>
          <StyledAuthor>{author.name}</StyledAuthor>
          <StyledText>{trimText(text)}</StyledText>
          <StyledDate>{createdAt}</StyledDate>
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
          <StyledButton>Read more</StyledButton>
        </Box>
      </StyledContent>
    </StyledPost>
  );
};
