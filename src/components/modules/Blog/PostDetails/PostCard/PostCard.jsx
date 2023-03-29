import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { getUserId } from 'redux/auth';
import { switchLikePost, deletePost } from 'api/posts';
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

import { Box } from 'components/global/Box';
import { Loader } from 'components/global/Loader';
import { LikeButton } from '../../common/LikeButton/LikeButton';

export const PostCard = ({ post }) => {
  const { title, text, category, image, likes, author, createdAt, _id: postId } = post;
  const userId = useSelector(getUserId);
  const client = useQueryClient();
  const navigate = useNavigate();

  const isCurrentUserPost = userId === author._id;
  
  const { mutate: switchLike } = useMutation({
    mutationKey: ['posts', postId],
    mutationFn: () => switchLikePost(postId),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['posts', postId] });
      client.invalidateQueries({ queryKey: ['posts'] });
    },
  });

  const { mutate: deleteUserPost, isLoading } = useMutation({
    mutationKey: ['posts', postId],
    mutationFn: postId => deletePost(postId),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['posts'] });
    },
  });

  const handleLike = () => {
    switchLike(postId);
  };

  const handleDelete = () => {
    deleteUserPost(postId);
    navigate('/posts'); 
  }

  return (
    <>
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
            <DeleteButton onClick={handleDelete}>
              <TrashBinIc />
            </DeleteButton>}
        </PostFooter>
      </ContentBlock>
    </BoxCard>
    {isLoading && <Loader />}
    </>
  );
};
