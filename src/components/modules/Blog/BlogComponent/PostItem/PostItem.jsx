import { AiOutlineComment } from 'react-icons/ai';
import {
  StyledAuthor,
  StyledButton,
  StyledCategory,
  StyledContent,
  StyledDate,
  StyledImage,
  StyledImageWrapper,
  StyledMetaButton,
  StyledPost,
  StyledText,
  StyledTitle,
} from './PostItem.styled';

import { Box } from 'components/global/Box';
import { convertCreationDateToDateAndTime } from '../../helpers';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { switchLikePost } from 'api/posts';
import { LikeButton } from '../../common/LikeButton/LikeButton';

export const Post = ({ post, isImageOnRight, userId }) => {
  const { image, author, title, category, text, createdAt, comments, likes, _id: postId } = post;

  const client = useQueryClient();

  const { mutate: switchLike, isLoading } = useMutation({
    mutationKey: ['posts', postId],
    mutationFn: () => switchLikePost(postId),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['posts', postId] });
      client.invalidateQueries({ queryKey: ['posts'] });
    },
  });

  const handleLike = () => {
    switchLike(postId);
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

            <LikeButton
              postId={postId}
              likedPost={likes.includes(userId)}
              likeCount={likes.length}
              handleLike={handleLike}
              isLoading={isLoading}
            />
          </Box>

          <StyledButton to={`${postId}`}>Read more</StyledButton>
        </Box>
      </StyledContent>
    </StyledPost>
  );
};
