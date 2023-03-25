import { AiOutlineComment } from 'react-icons/ai';
import {
  Author,
  StyledButton,
  Category,
  ContentWrapper,
  Date,
  Image,
  ImageWrapper,
  MetaButton,
  PostContainer,
  Text,
  Title,
  PostFooter,
} from './PostItem.styled';

import { Box } from 'components/global/Box';
import { convertCreationDateToDateAndTime } from '../../helpers';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { switchLikePost } from 'api/posts';
import { LikeButton } from '../../common/LikeButton/LikeButton';

export const Post = ({ post, userId }) => {
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
    <PostContainer>
      <ImageWrapper>
        <Image src={image} alt={title} />

        <Category>{category ? category : ''}</Category>
      </ImageWrapper>

      <ContentWrapper>
        <Box flex="1" mb={4}>
          <Title>{title}</Title>
          <Author>{author ? author.name : ''}</Author>
          <Text>{trimText(text ? text : '')}</Text>
        </Box>

        <PostFooter display="flex" alignItems="center" justifyContent="space-between">
          <Date>{createdAt ? convertCreationDateToDateAndTime(createdAt) : ''}</Date>
          <Box display="flex" alignItems="center" justifyContent="space-between" gridGap={5}>
            <Box display="flex" alignItems="center" gridGap={2}>
              <MetaButton>
                <AiOutlineComment style={{ width: '24px', height: '24px' }} />
                {comments.length}
              </MetaButton>

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
        </PostFooter>
      </ContentWrapper>
    </PostContainer>
  );
};
