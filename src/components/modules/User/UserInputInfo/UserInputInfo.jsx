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
import {
  Item,
  Input,
  FildName,
  Icon,
  EditIc,
  CheckIc,
  EditIcBlack,
  InputErrMessage,
} from './UserInputInfo.styled';
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
  const [inputErr, setInputErr] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const name = useSelector(getName);
  const email = useSelector(getEmail);
  const birthday = useSelector(getBirthday);
  const phone = useSelector(getPhone);
  const city = useSelector(getCity);

  const regExpNameInput = new RegExp(
    /^[A-Za-zА-Яа-яЁёҐґІіЇїЄє\s,'"'-.]+(?:\s+[A-Za-zА-Яа-яЁёҐґІіЇїЄє]+){0,3}$/u
  );
  const regExpEmailInput = new RegExp(/^(?!-)[\w.-]{2,}@[\w-]+(\.[\w-]+)*\.[a-zA-Z]{2,}$/u);
  const regExpCityInputNumber = new RegExp(/^(?!\s)[a-zA-Zа-яА-ЯЁёҐґІіЇїЄє\s,'"'-.]+$/);
  const regExpBirthdayInputNumber = new RegExp(/^\d{1,2}\.\d{1,2}\.\d{4}$/);
  const regExpPhoneInputNumber = new RegExp(/^\+380\d{9}$/);

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
    const valueLength = e.target.value.length;
    let stepOne = regExpNameInput.test(value);
    let stepTwo = true;
    switch (fildName) {
      case 'Name':
        stepOne = regExpNameInput.test(e.target.value);

        if (valueLength < 2) {
          stepTwo = false;
          setErrorMessage('The name must contain at least 2 characters');
          setInputErr(true);
          break;
        }

        if (valueLength > 40) {
          stepTwo = false;
          setErrorMessage('The maximum name length is 40 characters');
          setInputErr(true);
          break;
        }

        if (!stepOne) {
          setErrorMessage('The name may contain only letters of the Latin and Cyrillic alphabets');
          setInputErr(true);
          break;
        }

        if (stepOne && stepTwo) {
          setErrorMessage('');
          setInputErr(false);
          break;
        }

        break;

      case 'Email':
        stepOne = regExpEmailInput.test(e.target.value);

        if (valueLength < 7) {
          stepTwo = false;
          setErrorMessage('The minimum length of an email is 7 characters');
          setInputErr(true);
          break;
        }

        if (valueLength > 63) {
          stepTwo = false;
          setErrorMessage('The maximum length of an email is 63 characters');
          setInputErr(true);
          break;
        }

        if (!stepOne) {
          setErrorMessage('Incorrect email');
          setInputErr(true);
          break;
        }

        if (stepOne && stepTwo) {
          setErrorMessage('');
          setInputErr(false);
          break;
        }

        break;
      case 'Birthday':
        stepOne = regExpBirthdayInputNumber.test(e.target.value);

        if (!stepOne) {
          setErrorMessage('Plese input date of birthday like dd.mm.year');
          setInputErr(true);
          break;
        }

        if (stepOne && stepTwo) {
          setErrorMessage('');
          setInputErr(false);
          break;
        }
        break;
      case 'Phone':
        stepOne = regExpPhoneInputNumber.test(e.target.value);

        if (!stepOne) {
          setErrorMessage(
            'Plese input correct numper with Ukraine code +380 and number of your provider'
          );
          setInputErr(true);
          break;
        }

        if (stepOne && stepTwo) {
          setErrorMessage('');
          setInputErr(false);
          break;
        }
        break;
      case 'City':
        stepOne = regExpCityInputNumber.test(e.target.value);

        if (valueLength < 2) {
          stepTwo = false;
          setErrorMessage('The city name must contain at least 2 characters');
          setInputErr(true);
          break;
        }
        if (valueLength > 40) {
          stepTwo = false;
          setErrorMessage('The maximum city length is 40 characters');
          setInputErr(true);
          break;
        }

        if (!stepOne) {
          setErrorMessage('The name of the city or region must contain only letters');
          setInputErr(true);
          break;
        }

        if (stepOne && stepTwo) {
          setErrorMessage('');
          setInputErr(false);
          break;
        }
        break;

      default:
        break;
    }
  };

  const saveEditing = () => {
    dispatch(editUserInfo(obj));
  };

  return (
    <Item>
      <FildName>{`${fildName}:`}</FildName>
      <Item>
        <Input
          pattern="[0-9]{5,10}"
          id={fildName}
          type="text"
          disabled={whatInputIsEditing === fildName ? false : true}
          value={value}
          onChange={onChange}
          onBlur={() => {
            if (valueBeforEdited === value) {
              setWhichIconToShow('orange');
              setWhatInputIsEditing('');
              setErrorMessage('');
              setInputErr(false);
            }
            if (!inputErr) {
              setWhichIconToShow('orange');
              setWhatInputIsEditing('');
              if (valueBeforEdited !== value) saveEditing();
            }
          }}
        />
        {inputErr ? <InputErrMessage>{errorMessage}</InputErrMessage> : null}
      </Item>
      <Icon href={`#${fildName}`}>
        {whatInputIsEditing === fildName ? (
          <CheckIc
            onClick={() => {
              if (valueBeforEdited === value) {
                setWhichIconToShow('orange');
                setWhatInputIsEditing('');
                setErrorMessage('');
                setInputErr(false);
              }
              if (!inputErr) {
                setWhichIconToShow('orange');
                setWhatInputIsEditing('');
                if (valueBeforEdited !== value) {
                  saveEditing();
                }
              }
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
