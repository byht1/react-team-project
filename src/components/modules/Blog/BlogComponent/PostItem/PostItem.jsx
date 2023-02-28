import React, { useState, useEffect } from 'react';

import { AiOutlineComment } from 'react-icons/ai';
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
  StyledMetaButton,
  LikeIcon,
  StyledButton,
} from './PostItem.styled';

import { Box } from 'components/global/Box';
import { convertCreationDateToDateAndTime } from '../../helpers';

import { switchLikePost } from 'api/posts';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const Post = ({ post, isImageOnRight, userId }) => {
  const { image, author, title, category, text, createdAt, comments, likes, _id: postId } = post;
  const client = useQueryClient();

  const [likedPost, setLikedPost] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  useEffect(() => {
    likes.includes(userId) && setLikedPost(true);
    setLikeCount(likes.length);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { mutate, isLoading } = useMutation(switchLikePost, {
    mutationFn: () => setLikedPost(!likedPost),
    onSuccess: () => {
      setLikedPost(!likedPost);
      client.invalidateQueries({ queryKey: ['posts'] });
    },
  });

  const handleLike = () => {
    mutate(postId);
    setLikeCount(likedPost ? likeCount - 1 : likeCount + 1);
  };

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
            <StyledMetaButton>
              <AiOutlineComment style={{ width: '24px', height: '24px' }} />
              {comments.length}
            </StyledMetaButton>

            <StyledMetaButton onClick={() => handleLike(postId)} disabled={isLoading}>
              <LikeIcon checked={likedPost} />
              {likeCount}
            </StyledMetaButton>
          </Box>

          <StyledButton to={`${postId}`}>Read more</StyledButton>
        </Box>
      </StyledContent>
    </StyledPost>
  );
};
