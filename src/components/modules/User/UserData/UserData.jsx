import React from 'react';
import {
  ProfileImage,
  Container,
  Div,
  SpanEditPhoto,
  Title,
  PhotoBlock,
  CameraIc,
  LoadFile,
} from './UserData.styled';
import { UserInfo } from '../UserInfo';
import { useDispatch, useSelector } from 'react-redux';
import { editUserProfilePhoto, getUserPhoto } from 'redux/auth';

export const UserData = () => {
  const img = useSelector(getUserPhoto);
  const dispatch = useDispatch();
  return (
    <Container>
      <Title>My information:</Title>
      <Div>
        <PhotoBlock>
          <ProfileImage src={img} />
          <SpanEditPhoto>
            <CameraIc />
            <LoadFile
              onChange={e => {
                e.preventDefault();
                if (e.target.files[0]) {
                  const formData = new FormData();
                  formData.append('file', e.target.files[0]);
                  dispatch(editUserProfilePhoto(formData));
                }
              }}
              accept="image/*"
              type={'file'}
            />
            Edit photo
          </SpanEditPhoto>
        </PhotoBlock>
        <UserInfo />
      </Div>
    </Container>
  );
};
