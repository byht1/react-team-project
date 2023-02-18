import React from 'react';
import { ProfileImage, Container, Div, SpanEditPhoto, Title, PhotoBlock } from './UserData.styled';
import { UserInfo } from '../UserInfo';
import Chloe from '../../../../img/chloe grace moretz.webp';

export const UserData = () => {
  return (
    <Container>
      <Title>My information:</Title>
      <Div>
        <PhotoBlock>
          <ProfileImage src={Chloe} />
          <SpanEditPhoto>Edit photo</SpanEditPhoto>
        </PhotoBlock>
        <UserInfo />
      </Div>
    </Container>
  );
};
