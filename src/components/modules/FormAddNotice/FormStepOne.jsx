import { useState, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { useNavigate, useLocation } from 'react-router-dom';
import { IoCloseOutline } from 'react-icons/io5';
import TextField from '@mui/material/TextField';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { Autocomplete } from '@mui/material';

import { dogBreeds } from './helpers/dogBreeds';
import { dateParse } from './helpers/dateParse';
import { dateConverter } from './helpers/dateConverter';
import useWindowDimensions from './helpers/getWidth';
import { validateDate } from 'helpers';
import { CloseModalBtn } from 'components/modules/Notices/NoticeModal/NoticeModal.styled';
import {
  Accent,
  Error,
  InputWrap,
  ButtonWrap,
  LabelInput,
  Text,
  ButtonAhead,
  ButtonBack,
  InputAdd,
} from './FormAddNotice.styled';

export const FormStepOne = () => {
  const location = useLocation().pathname.split('/')[2];
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    getValues,
    setValue,
    trigger,
    setError,
  } = useFormContext();
  const [date, setDate] = useState(getValues('birthday'));
  const [custErr, setCustErr] = useState(false);

  useEffect(() => {
    if (date === undefined) {
      setDate(null);
    }
    if (date && date !== 'NaN.NaN.NaN') {
      const newDate = dateConverter(date);
      if (validateDate(newDate) === false) {
        setError('birthday', { message: 'Enter valid date' });
        setCustErr(true);
      } else {
        setCustErr(false);
      }
    }
  }, [date, setError]);

  if (date?.length === 10) {
    setDate(dateParse(date));
  }

  const handleChange = newValue => {
    if (newValue !== null) {
      setValue('birthday', newValue?.$d);
      setDate(getValues('birthday'));
    }
  };

  const [value] = useState(getValues('breed'));
  const change = (event, newValue) => {
    event.preventDefault();
    event.stopPropagation();
    setValue('breed', newValue);
  };

  return (
    <>
      <InputWrap>
        <LabelInput htmlFor="tittle">
          <CloseModalBtn id="modal-close" type="button" onClick={() => navigate(-1)}>
            <IoCloseOutline id="close-svg" size={'28px'} />
          </CloseModalBtn>
          <Text>
            Tittle of ad
            <Accent>*</Accent>:
          </Text>
          <InputAdd {...register('title')} placeholder="Type name" id="tittle" />
          {errors.title && <Error>{errors.title.message}</Error>}
        </LabelInput>
        <LabelInput htmlFor="petName">
          <Text>Name pet:</Text>
          <InputAdd {...register('name')} placeholder="Type name pet" id="petName" />
          {errors.name && <Error>{errors.name.message}</Error>}
        </LabelInput>
        <LabelInput htmlFor="petBirth">
          <Text>Date of birth:</Text>
          <DesktopDatePicker
            maxDate={new Date()}
            minDate={'01.01.1900'}
            inputFormat="DD.MM.YYYY"
            onChange={handleChange}
            value={date}
            renderInput={params => (
              <TextField
                {...params}
                {...register('birthday')}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '&:hover fieldset': {
                      border: '0.1px solid #F5925680',
                    },
                    '&.Mui-focused fieldset': {
                      border: '2px solid #f58138db',
                    },
                  },
                }}
                className="myDatePicker"
              />
            )}
          />
          {custErr && <Error>Enter valid date in format dd.mm.yyyy</Error>}
        </LabelInput>
        <LabelInput htmlFor="petBreed">
          <Text>Breed:</Text>
          <Autocomplete
            value={value}
            onChange={change}
            disablePortal
            id="petBreed"
            options={dogBreeds}
            sx={{
              width: '100%',
              display: 'inline-block',
              '& .MuiOutlinedInput-root .MuiAutocomplete-input': {
                padding: { xs: '1px 6px' },
              },
              // '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              //   border: '20px solid #f58138db',
              //   position: 'absolute',
              //   top: -2,
              //   bottom: -1.8,
              //   left: -2,
              //   right: -1.8,
              // },
              '&  .MuiAutocomplete-inputRoot': {
                bgcolor: '#FDF7F2',
                borderRadius: '40px',
                border: '1px solid #F5925680',
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderRadius: '40px',
              },
              '& fieldset': {
                borderRadius: '40px',
                border: '1px solid #F5925680',
                transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
                '&:focus-within': {
                  border: '2px solid red',
                },
              },
            }}
            freeSolo={true}
            renderInput={params => (
              <TextField {...params} {...register('breed')} placeholder="Type breed" />
            )}
          />
          {errors.breed && <Error>{errors.breed.message}</Error>}
        </LabelInput>
      </InputWrap>
      {useWindowDimensions().width < 768 ? (
        <ButtonWrap>
          <ButtonAhead
            color="a"
            p="9px 55px"
            type="button"
            onClick={() => {
              trigger(['title', 'name', 'birthday', 'breed']).then(isValid => {
                if (isValid) {
                  navigate(`/notices/${location}/addpet/step2`);
                } else {
                  console.log('Form is invalid');
                }
              });
            }}
          >
            Next
          </ButtonAhead>
          <ButtonBack type="button" onClick={() => navigate(-1)}>
            Cancel
          </ButtonBack>
        </ButtonWrap>
      ) : (
        <ButtonWrap>
          <ButtonBack type="button" onClick={() => navigate(-1)}>
            Cancel
          </ButtonBack>
          <ButtonAhead
            color="a"
            p="9px 55px"
            type="button"
            onClick={() => {
              trigger(['title', 'name', 'birthday', 'breed']).then(isValid => {
                if (isValid) {
                  navigate(`/notices/${location}/addpet/step2`);
                } else {
                  console.log('Form is invalid');
                }
              });
            }}
          >
            Next
          </ButtonAhead>
        </ButtonWrap>
      )}
    </>
  );
};
