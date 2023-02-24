import React from 'react';
import {
  StyledPost,
  StyledImage,
  StyledContent,
  StyledAuthor,
  StyledDate,
  StyledCategory,
  StyledText,
  StyledComments,
  StyledLikes,
  StyledButton,
} from './Post.styled';
// import PropTypes from 'prop-types';

export const Post = ({ post, isImageOnRight }) => {
  const { id, owner, image, author, date, category, text, comments, likeCount } = post;

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
        <StyledAuthor>{author}</StyledAuthor>
        <StyledDate>{date}</StyledDate>
        <StyledCategory>{category}</StyledCategory>
        <StyledText>{text.length > 200 ? `${text.substring(0, 200)}...` : text}</StyledText>
        <StyledComments>{`${comments.length} comments`}</StyledComments>
        <StyledLikes>{`${likeCount} likes`}</StyledLikes>
        <StyledButton>Read more</StyledButton>
      </StyledContent>
    </StyledPost>
  );
};
