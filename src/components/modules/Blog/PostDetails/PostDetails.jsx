import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Container } from 'components/global/Container';
import { PostCard } from './PostCard/PostCard';
import { PostComment } from './PostComment/PostComment';
import { PostList } from './PostList/PostList';
import {} from './PostDetails.styled';
import { Text } from 'components/global/text';
import { BsArrowLeft } from 'react-icons/bs';
import { BlockBack } from './PostDetails.styled';

export const PostDetailsComponent = ({ post, comments, handleSubmitComment }) => {
  const navigate = useNavigate();

  const handleGoBackBtn = () => {
    navigate(-1);
  };

  return (
    <Container pb={100} pt={100}>
      <BlockBack onClick={handleGoBackBtn}>
        <BsArrowLeft size={'32px'} color="#F59256" />
        <Text size={'24'} lh="heading" color="a">
          Back
        </Text>
      </BlockBack>

      <PostCard post={post} />
      <PostComment handleSubmitComment={handleSubmitComment} />
      <PostList comments={comments} />
    </Container>
  );
};
