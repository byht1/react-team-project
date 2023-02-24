import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getName,
  getEmail,
  getBirthday,
  getPhone,
  getCity,
  getUserData,
  editUserInfo,
} from 'redux/user';
import { Item, Input, FildName, Icon, EditIc, CheckIc, EditIcBlack } from './UserInputInfo.styled';
import PropTypes from 'prop-types';

export function UserInputInfo({
  fildName,
  whatInputIsEditing,
  setWhatInputIsEditing,
  whichIconToShow,
  setWhichIconToShow,
}) {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const [obj, setObj] = useState({});
  const [valueBeforEdited, setValueBeforEdited] = useState('');

  const name = useSelector(getName);
  const email = useSelector(getEmail);
  const birthday = useSelector(getBirthday);
  const phone = useSelector(getPhone);
  const city = useSelector(getCity);

  useEffect(() => {
    dispatch(getUserData());
    if (fildName === 'Name') {
      setValue(name);
      setValueBeforEdited(name);
    }

    if (fildName === 'Email') {
      setValue(email);
      setValueBeforEdited(email);
    }

    if (fildName === 'Birthday') {
      setValue(birthday);
      setValueBeforEdited(birthday);
    }

    if (fildName === 'Phone') {
      setValue(phone);
      setValueBeforEdited(phone);
    }

    if (fildName === 'City') {
      setValue(city);
      setValueBeforEdited(city);
    } // eslint-disable-next-line
  }, [name]);

  useEffect(() => {
    setObj({ [fildName.toLowerCase()]: value });
  }, [value, fildName]);

  const onChange = e => {
    setValue(e.target.value);
  };

  const saveEditing = () => {
    dispatch(editUserInfo(obj));
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
          onBlur={() => {
            setWhichIconToShow('orange');
            setWhatInputIsEditing('');
            if (valueBeforEdited !== value) saveEditing();
          }}
        />
      </Item>
      <Icon href={`#${fildName}`}>
        {whatInputIsEditing === fildName ? (
          <CheckIc
            onClick={() => {
              setWhichIconToShow('orange');
              setWhatInputIsEditing('');
              if (valueBeforEdited !== value) saveEditing();
            }}
          />
        ) : (
          <>
            {whichIconToShow === 'black' ? (
              <EditIcBlack />
            ) : (
              <EditIc
                onClick={() => {
                  setWhatInputIsEditing(fildName);
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

UserInputInfo.propTypes = {
  fildName: PropTypes.string,
  whatInputIsEditing: PropTypes.string,
  setWhatInputIsEditing: PropTypes.func,
  whichIconToShow: PropTypes.string,
  setWhichIconToShow: PropTypes.func,
};
