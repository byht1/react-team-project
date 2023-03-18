import React from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { addNewCommentToPost, fetchOnePost } from 'api/posts';

import { useParams } from 'react-router-dom';
import { Loader } from 'components/global/Loader';
import { PostDetailsComponent } from 'components/modules/Blog/PostDetails';

export const PostDetailsMain = () => {
  const { id: postId } = useParams();

  const client = useQueryClient();

  const { data, isSuccess, isLoading, isError, error } = useQuery({
    queryKey: ['posts', postId],
    queryFn: () => fetchOnePost(postId),
    staleTime: 5 * 60 * 1000,
  });

  const { mutate: addComment } = useMutation({
    mutationKey: ['posts', postId],
    mutationFn: data => addNewCommentToPost(postId, data),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['posts', postId] });
      client.invalidateQueries({ queryKey: ['posts'] });
    },
  });

  const handleSubmitComment = async data => {
    await addComment({ text: data.comment });
  };

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
    return (
      <PostDetailsComponent
        post={post}
        comments={comments}
        handleSubmitComment={handleSubmitComment}
      />
    );
  }
};
