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
  StyledButton,
} from './PostItem.styled';

import { Box } from 'components/global/Box';
import { convertCreationDateToDateAndTime } from '../../helpers';

import { switchLikePost } from 'api/posts';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { LikeButton } from '../../common/LikeButton/LikeButton';

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

  const handleAddLike = useMutation({
    mutationFn: () => switchLikePost(postId),
    onSuccess: () => {
      setLikedPost(true);
      setLikeCount(likeCount + 1);
      client.invalidateQueries(['posts'], { exact: true });
    },
  });
  const handleRemoveLike = useMutation({
    mutationFn: () => switchLikePost(postId),
    onSuccess: () => {
      setLikedPost(false);
      client.invalidateQueries(['posts'], { exact: true });
    },
  });

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
          alt={author ? author.name : ''}
          isImageOnRight={isImageOnRight}
        />

        <StyledCategory>{category ? category : ''}</StyledCategory>
      </StyledImageWrapper>

      <StyledContent isImageOnRight={isImageOnRight}>
        <Box flex="1" mb={4}>
          <Box display="flex" alignItems="flex-end" justifyContent="space-between" gridGap={7}>
            <StyledTitle>{title}</StyledTitle>
          </Box>

          <StyledAuthor>{author ? author.name : ''}</StyledAuthor>
          <StyledText>{trimText(text ? text : '')}</StyledText>
          <StyledDate>{createdAt ? convertCreationDateToDateAndTime(createdAt) : ''}</StyledDate>
        </Box>

        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex" alignItems="center" p={3} gridGap={5}>
            <StyledMetaButton>
              <AiOutlineComment style={{ width: '24px', height: '24px' }} />
              {comments.length}
            </StyledMetaButton>

            {likedPost ? (
              <LikeButton
                postId={postId}
                isLoading={handleRemoveLike.isLoading}
                likedPost={likedPost}
                likeCount={likeCount}
                handleLike={handleRemoveLike.mutate}
              />
            ) : (
              <LikeButton
                postId={postId}
                isLoading={handleAddLike.isLoading}
                likedPost={likedPost}
                likeCount={likeCount}
                handleLike={handleAddLike.mutate}
              />
            )}
          </Box>

          <StyledButton to={`${postId}`}>Read more</StyledButton>
        </Box>
      </StyledContent>
    </StyledPost>
  );
};
