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

export const UserInfo = () => {
  const [inputValueName, setInputValueName] = useState('Name');
  const [inputValueEmail, setInputValueEmail] = useState('Email');
  const [inputValueBirthday, setInputValueBirthday] = useState('00.00.0000');
  const [inputValuePhone, setInputValuePhone] = useState('+380');
  const [inputValueCity, setInputValueCity] = useState('Kiev');

  const [editName, setEditName] = useState(false);
  const [editEmail, setEditEmail] = useState(false);
  const [editBirthday, setEditBirthday] = useState(false);
  const [editPhone, setEditPhone] = useState(false);
  const [editCity, setEditCity] = useState(false);

  const iconOnClick = e => {
    switch (e.currentTarget.id) {
      case 'Name':
        !editName && !editEmail && !editBirthday && !editPhone && !editCity
          ? setEditName(true)
          : setEditName(false);
        break;
      case 'Email':
        !editName && !editEmail && !editBirthday && !editPhone && !editCity
          ? setEditEmail(true)
          : setEditEmail(false);
        break;
      case 'Birthday':
        !editName && !editEmail && !editBirthday && !editPhone && !editCity
          ? setEditBirthday(true)
          : setEditBirthday(false);
        break;
      case 'Phone':
        !editName && !editEmail && !editBirthday && !editPhone && !editCity
          ? setEditPhone(true)
          : setEditPhone(false);
        break;
      case 'City':
        !editName && !editEmail && !editBirthday && !editPhone && !editCity
          ? setEditCity(true)
          : setEditCity(false);
        break;

      default:
        break;
    }
  };

  const onHandleInputChange = e => {
    switch (e.target.id) {
      case 'Name':
        setInputValueName(e.target.value);
        break;
      case 'Email':
        setInputValueEmail(e.target.value);
        break;
      case 'Birthday':
        setInputValueBirthday(e.target.value);
        break;
      case 'Phone':
        setInputValuePhone(e.target.value);
        break;
      case 'City':
        setInputValueCity(e.target.value);
        break;

      default:
        break;
    }
  };

  return (
    <Cover>
      <Form>
        <FildName>Name:</FildName>
        <Item>
          <Input
            onChange={onHandleInputChange}
            id="Name"
            type="text"
            disabled={!editName ? true : false}
            value={inputValueName}
          />
        </Item>
        <Icon href="#Name" onClick={iconOnClick} id="Name">
          {editName ? (
            <CheckIc />
          ) : (
            <>
              {!editName && !editEmail && !editBirthday && !editPhone && !editCity ? (
                <EditIc />
              ) : (
                <EditIcBlack />
              )}
            </>
          )}
        </Icon>
        <FildName>Email:</FildName>
        <Item>
          <Input
            onChange={onHandleInputChange}
            id="Email"
            type="email"
            disabled={!editEmail ? true : false}
            value={inputValueEmail}
          />
        </Item>
        <Icon href="#Email" onClick={iconOnClick} id="Email">
          {editEmail ? (
            <CheckIc />
          ) : (
            <>
              {!editName && !editEmail && !editBirthday && !editPhone && !editCity ? (
                <EditIc />
              ) : (
                <EditIcBlack />
              )}
            </>
          )}
        </Icon>
        <FildName>Birthday: </FildName>
        <Item>
          <Input
            onChange={onHandleInputChange}
            id="Birthday"
            type="text"
            disabled={!editBirthday ? true : false}
            value={inputValueBirthday}
          />
        </Item>
        <Icon href="#Birthday" onClick={iconOnClick} id="Birthday">
          {editBirthday ? (
            <CheckIc />
          ) : (
            <>
              {!editName && !editEmail && !editBirthday && !editPhone && !editCity ? (
                <EditIc />
              ) : (
                <EditIcBlack />
              )}
            </>
          )}
        </Icon>
        <FildName>Phone:</FildName>
        <Item>
          <Input
            onChange={onHandleInputChange}
            id="Phone"
            type="text"
            disabled={!editPhone ? true : false}
            value={inputValuePhone}
          />
        </Item>
        <Icon href="#Phone" onClick={iconOnClick} id="Phone">
          {editPhone ? (
            <CheckIc />
          ) : (
            <>
              {!editName && !editEmail && !editBirthday && !editPhone && !editCity ? (
                <EditIc />
              ) : (
                <EditIcBlack />
              )}
            </>
          )}
        </Icon>
        <FildName>City:</FildName>
        <Item>
          <Input
            onChange={onHandleInputChange}
            id="City"
            type="text"
            disabled={!editCity ? true : false}
            value={inputValueCity}
          />
        </Item>
        <Icon href="#City" onClick={iconOnClick} id="City">
          {editCity ? (
            <CheckIc />
          ) : (
            <>
              {!editName && !editEmail && !editBirthday && !editPhone && !editCity ? (
                <EditIc />
              ) : (
                <EditIcBlack />
              )}
            </>
          )}
        </Icon>
      </Form>
      <SpanLogout>
        <LogoutIc />
        Logout
      </SpanLogout>
    </Cover>
  );
};
