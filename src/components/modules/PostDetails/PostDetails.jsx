import React from 'react';
import { Container } from 'components/global/Container';
// import {PostCard} from './PostCard/PostCard';
import { Text } from 'components/global/text';
import { PostCard } from './PostCard/PostCard';
import { PostComment } from './PostComment/PostComment';
import {PostList} from './PostList/PostList';
import { BsArrowLeft } from 'react-icons/bs';
import {BlockBack} from './PostDetails.styled';

export const PostDetailsComponent = () => {
  return (
        <Container pb={100} pt={100}>
          <BlockBack href="/">
              <BsArrowLeft size={'32px'} color='#F59256'/>
              <Text size={'24'} lh="heading" color='a'>Back</Text>
          </BlockBack>
          
          <PostCard/>
          <PostComment/>
          <PostList/>
    </Container>
  );
};
