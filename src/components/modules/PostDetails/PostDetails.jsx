import React from 'react';
import { Container } from 'components/global/Container';
// import {PostCard} from './PostCard/PostCard';
// import { TitleH3 } from 'components/global/text';
import { PostCard } from './PostCard/PostCard';
import { PostComment } from './PostComment/PostComment';
import {PostList} from './PostList/PostList';
import {} from './PostDetails.styled';

export const PostDetailsComponent = () => {
  return (
        <Container pb={100} pt={100}>
          <PostCard/>
          <PostComment/>
          <PostList/>
    </Container>
  );
};
