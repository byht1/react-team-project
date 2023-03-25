import { Text } from 'components/global/text';
import { convertCreationDateToDateAndTime } from '../../helpers';
import {
  Image,
  ContentBlock,
  ImgWrap,
  PostInfo,
  BoxCard,
  Category,
  Author,
  Title,
  Date,
} from './PostCard.styled';

import { switchLikePost } from 'api/posts';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
import { getUserId } from 'redux/auth';
import { LikeButton } from '../../common/LikeButton/LikeButton';
import { Box } from 'components/global/Box';

export const PostCard = ({ post }) => {
  const { title, text, category, image, likes, author, createdAt, _id: postId } = post;
  const userId = useSelector(getUserId);

  const client = useQueryClient();

  const { mutate: switchLike } = useMutation({
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

  return (
    <BoxCard>
      <ImgWrap>
        <Image src={image} alt={title} />
        <Category>{category ? category : ''}</Category>
      </ImgWrap>
      <ContentBlock>
        <Box flex="1" mb={4}>
          <Title size={'32'}>{title}</Title>
          <Author weight={'600'}>{author?.name}</Author>
          <Text lh="big">{text}</Text>
        </Box>
        <PostInfo>
          <LikeButton
            postId={postId}
            likedPost={likes.includes(userId)}
            likeCount={likes.length}
            handleLike={handleLike}
          />
          <Date>Date of publication: {convertCreationDateToDateAndTime(createdAt)}</Date>
        </PostInfo>
      </ContentBlock>
    </BoxCard>
  );
};
