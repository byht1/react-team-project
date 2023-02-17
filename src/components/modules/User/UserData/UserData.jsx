import { Container } from 'components/global/Container';
import React from 'react';
import {
  ProfileImage,
  Div,
  ImgCover,
  EditPhoto,
  SpanEditPhoto,
  Title,
  SpanLogout,
  Logout,
} from './UserData.styled';
import { UserInfo } from '../UserInfo';
import Chloe from '../../../../img/chloe grace moretz.webp';

export const UserData = () => {
  return (
    <Container>
      <Title>My information:</Title>
      <Div>
        <ImgCover>
          <ProfileImage src={Chloe} />
        </ImgCover>
        <EditPhoto>
          <SpanEditPhoto>Edit photo</SpanEditPhoto>
        </EditPhoto>
        <UserInfo />
        <Logout>
          <SpanLogout>Logout</SpanLogout>
        </Logout>
      </Div>
    </Container>
  );
};
