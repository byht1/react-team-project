import React from 'react';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';
import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { dogBreeds } from '../../FormAddNotice/helpers/dogBreeds';

import {
  Buttons,
  InputWrap,
  LabelInput,
  Input,
  LabelName,
  ErrorInput,
  ButtonDark,
  ButtonLight,
  LabelInputDate,
  ErrorInputDate,
  Auto,
} from './FormPages.styled';

export const FirstPage = ({ nextStep, onClose }) => {
  const {
    register,
    trigger,
    formState: { errors },
    setValue,
  } = useFormContext();

  console.log(errors);

  const [date, setDate] = useState(null);

  useEffect(() => {
    setValue('birthday', date);
  }, [date, setValue]);

  const checkInput = async () => {
    const result = await trigger(['petName', 'birthday', 'petBreed']);
    if (result) {
      nextStep();
    }
  };

  const handleChange = newValue => {
    setDate(newValue);
  };

  return (
    <>
      <InputWrap>
        <LabelInput htmlFor="petName">
          <LabelName>Name pet</LabelName>
          <Input {...register('petName')} id="petName" type="text" placeholder="Type name pet" />
          {errors.petName && <ErrorInput>{errors.petName.message}</ErrorInput>}
        </LabelInput>

        <LabelInputDate htmlFor="petBirth">
          <LabelName>Date of birth</LabelName>
          <DesktopDatePicker
            maxDate={new Date()}
            minDate={new Date('1990-01-01')}
            inputFormat="DD.MM.YYYY"
            value={date}
            onChange={handleChange}
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
          {errors.birthday && <ErrorInputDate>{errors.birthday.message}</ErrorInputDate>}
        </LabelInputDate>

        <LabelInput htmlFor="petBreed">
          <LabelName>Breed</LabelName>
          <Auto
            disablePortal
            id="petBreed"
            options={dogBreeds}
            sx={{
              width: '100%',
              display: 'inline-block',
              '& .MuiOutlinedInput-root .MuiAutocomplete-input': {
                padding: { xs: '1px 6px' },
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                border: '20px solid #f58138db',
                position: 'absolute',
                top: -0.5,
                bottom: -0.8,
                left: 0,
                right: 0,
              },
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
              <TextField {...params} {...register('petBreed')} placeholder="Type breed" />
            )}
          />
          {errors.petBreed && <ErrorInput>{errors.petBreed.message}</ErrorInput>}
        </LabelInput>
      </InputWrap>

      <Buttons>
        <ButtonDark onClick={checkInput}>Next</ButtonDark>
        <ButtonLight onClick={onClose}>Cancel</ButtonLight>
      </Buttons>
    </>
  );
};

FirstPage.propTypes = {
  onClose: PropTypes.func,
  nextStep: PropTypes.func,
};
