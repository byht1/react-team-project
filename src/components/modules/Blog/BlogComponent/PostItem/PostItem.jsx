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

import { ReactComponent as CommentIcon } from 'img/icons/commentIcon.svg';
import { ReactComponent as LikeIcon } from 'img/icons/likeIcon.svg';
// import PropTypes from 'prop-types';
import { Box } from 'components/global/Box';

export const Post = ({ post, isImageOnRight }) => {
  const { id, owner, image, author, date, category, title, text, comments, likeCount } = post;

  const trimText = text => {
    const maxLength = 300;
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };

  return (
    <StyledPost isImageOnRight={isImageOnRight}>
      <StyledImage src={image} alt={author} isImageOnRight={isImageOnRight} />
      <StyledContent isImageOnRight={isImageOnRight}>
        <Box flex="1">
          <Box display="flex" alignItems="flex-end" justifyContent="space-between" gridGap={7}>
            <StyledTitle>{title}</StyledTitle>
            <StyledCategory>{category}</StyledCategory>
          </Box>
          <StyledAuthor>{author}</StyledAuthor>
          <StyledText>{trimText(text)}</StyledText>
          <StyledDate>{date}</StyledDate>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex" alignItems="center" p={3} gridGap={5}>
            <StyledMetaIcon>
              <CommentIcon />
              {comments.length}
            </StyledMetaIcon>
            <StyledMetaIcon>
              <LikeIcon />
              {likeCount}
            </StyledMetaIcon>
          </Box>
          <StyledButton>Read more</StyledButton>
        </Box>
      </StyledContent>
    </StyledPost>
  );
};
