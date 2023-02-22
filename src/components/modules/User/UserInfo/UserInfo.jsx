import React, { useState } from 'react';
import { UserInputInfo } from '../UserInputInfo';
import { Form, SpanLogout, Cover, LogoutIc } from './UserInfo.styled';

export const UserInfo = () => {
  const [whatInputIsEditing, setWhatInputIsEditing] = useState('');
  const [whichIconToShow, setWhichIconToShow] = useState('orange');
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
      <SpanLogout>
        <LogoutIc />
        Logout
      </SpanLogout>
    </Cover>
  );
};
