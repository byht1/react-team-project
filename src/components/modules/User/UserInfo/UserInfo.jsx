import React, { useState } from 'react';
import {
  Form,
  Item,
  Input,
  SpanLogout,
  Cover,
  FildName,
  Icon,
  EditIc,
  LogoutIc,
  CheckIc,
  EditIcBlack,
} from './UserInfo.styled';

export function UserInputInfo({
  fildName,
  whatInputIsEditing,
  iconOnClick,
  whichIconToShow,
  setWhichIconToShow,
}) {
  const [value, setValue] = useState('Loasd oasdsa');
  const onChange = e => {
    console.log(fildName, value);
    setValue(e.target.value);
  };
  return (
    <Item>
      <FildName>{`${fildName}:`}</FildName>
      <Item>
        <Input
          id={fildName}
          type="text"
          disabled={whatInputIsEditing === fildName ? false : true}
          value={value}
          onChange={onChange}
        />
      </Item>
      <Icon href={`#${fildName}`}>
        {whatInputIsEditing === fildName ? (
          <CheckIc
            onClick={() => {
              setWhichIconToShow('orange');
              iconOnClick('qwe');
            }}
          />
        ) : (
          <>
            {whichIconToShow === 'black' ? (
              <EditIcBlack />
            ) : (
              <EditIc
                onClick={() => {
                  iconOnClick(fildName);
                  setWhichIconToShow('black');
                }}
              />
            )}
          </>
        )}
      </Icon>
    </Item>
  );
}

export const UserInfo = () => {
  const [whatInputIsEditing, setWhatInputIsEditing] = useState('');
  const [whichIconToShow, setWhichIconToShow] = useState('orange');
  return (
    <Cover>
      <Form>
        <UserInputInfo
          fildName={'Name'}
          whatInputIsEditing={whatInputIsEditing}
          iconOnClick={setWhatInputIsEditing}
          whichIconToShow={whichIconToShow}
          setWhichIconToShow={setWhichIconToShow}
        />
        <UserInputInfo
          fildName={'Email'}
          whatInputIsEditing={whatInputIsEditing}
          iconOnClick={setWhatInputIsEditing}
          whichIconToShow={whichIconToShow}
          setWhichIconToShow={setWhichIconToShow}
        />
        <UserInputInfo
          fildName={'Birthday'}
          whatInputIsEditing={whatInputIsEditing}
          iconOnClick={setWhatInputIsEditing}
          whichIconToShow={whichIconToShow}
          setWhichIconToShow={setWhichIconToShow}
        />
        <UserInputInfo
          fildName={'Phone'}
          whatInputIsEditing={whatInputIsEditing}
          iconOnClick={setWhatInputIsEditing}
          whichIconToShow={whichIconToShow}
          setWhichIconToShow={setWhichIconToShow}
        />
        <UserInputInfo
          fildName={'City'}
          whatInputIsEditing={whatInputIsEditing}
          iconOnClick={setWhatInputIsEditing}
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
