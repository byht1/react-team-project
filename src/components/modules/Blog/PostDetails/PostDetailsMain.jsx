import React from 'react';
import {} from './PostDetails.styled';
import { useQuery } from '@tanstack/react-query';
import { fetchOnePost } from 'api/posts';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/global/Loader';
import { PostDetailsComponent } from 'components/modules/Blog/PostDetails';

export const PostDetailsMain = () => {
  const { id: postId } = useParams();
  console.log('🚀 ~ file: PostDetails.jsx:13 ~ PostDetailsComponent ~ id:', postId);

  const { data, isSuccess, isLoading, isError, error } = useQuery({
    queryKey: ['post', postId],
    queryFn: () => fetchOnePost(postId),
    staleTime: 5 * 60 * 1000,
  });

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return [401, 403].includes(error.response.status) ? (
      <p>Please login...</p>
    ) : (
      <p>An error occurred while fetching the data. Please try again later.</p>
    );
  }
  if (isSuccess) {
    const { comments, ...post } = data;
    return <PostDetailsComponent post={post} comments={comments} />;
  }
};
