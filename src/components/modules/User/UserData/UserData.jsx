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
import { useSelector } from 'react-redux';
import { getUserPhoto } from 'redux/user';

export const UserData = () => {
  const img = useSelector(getUserPhoto);
  return (
    <Container>
      <Title>My information:</Title>
      <Div>
        <PhotoBlock>
          <ProfileImage src={img} />
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
