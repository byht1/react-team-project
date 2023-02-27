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
import { getUserPhoto, updateUserInfo } from 'redux/auth';
import { useMutation } from '@tanstack/react-query';
import { editUserProfilePhoto } from 'api';

export const UserData = () => {
  const dispatch = useDispatch();
  const img = useSelector(getUserPhoto);

  const { mutate: changeUserProfilePhoto } = useMutation({
    mutationKey: ['user'],
    mutationFn: data => editUserProfilePhoto(data),
    onSuccess: data => {
      console.log(data);
      dispatch(updateUserInfo(data));
    },
    onError: error => {
      console.log(error);
    },
  });

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
                if (
                  e.target.files[0].name.split('.')[1] === 'png' ||
                  e.target.files[0].name.split('.')[1] === 'jpg' ||
                  e.target.files[0].name.split('.')[1] === 'jpeg'
                ) {
                  const formData = new FormData();
                  formData.append('file', e.target.files[0]);
                  changeUserProfilePhoto(formData);
                } else {
                  alert(`You can load only one picture with (png,jpg,jpeg) types`);
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
