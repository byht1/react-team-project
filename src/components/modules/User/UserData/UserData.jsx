import React from 'react';
import {
  ProfileImage,
  Container,
  Div,
  SpanEditPhoto,
  Title,
  PhotoBlock,
  CameraIc,
} from './UserData.styled';
import { UserInfo } from '../UserInfo';
import Chloe from '../../../../img/User/chloe grace moretz.webp';

export const UserData = () => {
  return (
    <Container>
      <Title>My information:</Title>
      <Div>
        <PhotoBlock>
          <ProfileImage src={Chloe} />
          <SpanEditPhoto>
            <CameraIc />
            Edit photo
          </SpanEditPhoto>
        </PhotoBlock>
        <UserInfo />
      </Div>
    </Container>
  );
};
