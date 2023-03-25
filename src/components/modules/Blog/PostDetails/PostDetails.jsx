import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Container } from 'components/global/Container';
import { PostCard } from './PostCard/PostCard';
import { CommentForm } from './CommentForm/CommentForm';
import { CommentList } from './CommentList/CommentList';
import { Text } from 'components/global/text';
import { BsArrowLeft } from 'react-icons/bs';
import { BlockBack } from './PostDetails.styled';

export const PostDetailsComponent = ({ post, comments }) => {
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
      <CommentForm postId={post._id} />
      <CommentList comments={comments} />
    </Container>
  );
};
