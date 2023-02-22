import { useMutation } from '@tanstack/react-query';
import { logOutUser } from 'api';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth';
import { UserInputInfo } from '../UserInputInfo';
import { Form, SpanLogout, Cover, LogoutIc } from './UserInfo.styled';

export const UserInfo = () => {
  const [whatInputIsEditing, setWhatInputIsEditing] = useState('');
  const [whichIconToShow, setWhichIconToShow] = useState('orange');

  const dispatch = useDispatch();
  const { mutate: logOutUserFn } = useMutation({
    mutationKey: ['user'],
    mutationFn: () => logOutUser(),
    onSuccess: () => dispatch(logout()),
    onError: error => console.log(error),
  });

  return (
    <Cover>
      <Form>
        <UserInputInfo
          fildName={'Name'}
          whatInputIsEditing={whatInputIsEditing}
          setWhatInputIsEditing={setWhatInputIsEditing}
          whichIconToShow={whichIconToShow}
          setWhichIconToShow={setWhichIconToShow}
        />
        <UserInputInfo
          fildName={'Email'}
          whatInputIsEditing={whatInputIsEditing}
          setWhatInputIsEditing={setWhatInputIsEditing}
          whichIconToShow={whichIconToShow}
          setWhichIconToShow={setWhichIconToShow}
        />
        <UserInputInfo
          fildName={'Birthday'}
          whatInputIsEditing={whatInputIsEditing}
          setWhatInputIsEditing={setWhatInputIsEditing}
          whichIconToShow={whichIconToShow}
          setWhichIconToShow={setWhichIconToShow}
        />
        <UserInputInfo
          fildName={'Phone'}
          whatInputIsEditing={whatInputIsEditing}
          setWhatInputIsEditing={setWhatInputIsEditing}
          whichIconToShow={whichIconToShow}
          setWhichIconToShow={setWhichIconToShow}
        />
        <UserInputInfo
          fildName={'City'}
          whatInputIsEditing={whatInputIsEditing}
          setWhatInputIsEditing={setWhatInputIsEditing}
          whichIconToShow={whichIconToShow}
          setWhichIconToShow={setWhichIconToShow}
        />
      </Form>
      <SpanLogout onClick={() => logOutUserFn()}>
        <LogoutIc />
        Logout
      </SpanLogout>
    </Cover>
  );
};

//onClick={() => logOutUser()}
