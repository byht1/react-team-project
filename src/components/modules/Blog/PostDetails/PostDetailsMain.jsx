import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { fetchOnePost } from 'api/posts';
import { Loader } from 'components/global/Loader';
import { PostDetailsComponent } from 'components/modules/Blog/PostDetails';

export const PostDetailsMain = () => {
  const { id: postId } = useParams();

  const { data, isSuccess, isLoading, isError, error } = useQuery({
    queryKey: ['posts', postId],
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
