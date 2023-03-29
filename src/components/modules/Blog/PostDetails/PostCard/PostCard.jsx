import { useSelector } from 'react-redux';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { getUserId, getUserPosts } from 'redux/auth';
import { switchLikePost } from 'api/posts';
import { Text } from 'components/global/text';
import { convertCreationDateToDateAndTime } from '../../helpers';

import {
  Image,
  ContentBlock,
  ImgWrap,
  PostFooter,
  BoxCard,
  Category,
  Author,
  Title,
  Date,
  DeleteButton,
  TrashBinIc,
  PostInfo,
} from './PostCard.styled';

import { LikeButton } from '../../common/LikeButton/LikeButton';
import { Box } from 'components/global/Box';

export const PostCard = ({ post }) => {
  const { title, text, category, image, likes, author, createdAt, _id: postId } = post;
  const userId = useSelector(getUserId);
  const posts = useSelector(getUserPosts);

  const client = useQueryClient();
  const isCurrentUserPost = posts.includes(postId)

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
        <PostFooter isCurrentUserPost={isCurrentUserPost}>
          <PostInfo>
            <LikeButton
              postId={postId}
              likedPost={likes.includes(userId)}
              likeCount={likes.length}
              handleLike={handleLike}
            />
            <Date>Date of publication: {convertCreationDateToDateAndTime(createdAt)}</Date>
          </PostInfo>
          {isCurrentUserPost && 
            <DeleteButton>
              <TrashBinIc />
            </DeleteButton>}
        </PostFooter>
      </ContentBlock>
    </BoxCard>
  );
};
