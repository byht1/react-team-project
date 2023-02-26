import React from 'react';
import { Container } from 'components/global/Container';
import { PostCard } from './PostCard/PostCard';
import { PostComment } from './PostComment/PostComment';
import { PostList } from './PostList/PostList';
import {} from './PostDetails.styled';
import { useQuery } from '@tanstack/react-query';
import { fetchOnePost } from 'api/posts';
import { useParams } from 'react-router-dom';

export const PostDetailsComponent = () => {
  const { id: postId } = useParams();
  console.log('🚀 ~ file: PostDetails.jsx:13 ~ PostDetailsComponent ~ id:', postId);

  const { data, isSuccess } = useQuery({
    queryFn: () => fetchOnePost(postId),
    queryKey: ['posts', postId],
    staleTime: 5 * 60 * 1000,
  });

  isSuccess && console.log(data);

  return (
    <Container pb={100} pt={100}>
      <PostCard />
      <PostComment />
      <PostList />
    </Container>
  );
};
