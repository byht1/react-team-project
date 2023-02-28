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
  Auto,
} from './FormPages.styled';

export const FirstPage = ({
  nextStep,
  onClose,
  inputDate,
  setInputDate,
  inputBreed,
  setInputBreed,
}) => {
  const {
    register,
    trigger,
    formState: { errors },
    setValue,
  } = useFormContext();

  const [open, setOpen] = useState(false);

  useEffect(() => {
    setValue('birthday', inputDate);
  }, [inputDate, setValue]);

  const checkInput = async () => {
    const result = await trigger(['petName', 'birthday', 'petBreed']);

    if (result) {
      nextStep();
    }
  };

  const handleInputChange = (event, data) => {
    setInputBreed(data);
  };

  const handleChange = date => {
    setInputDate(date);
    setOpen(false);
  };
  // для запрета ввода даты вручную
  const handleKeyPress = event => {
    event.preventDefault();
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
            format="DD.MM.YYYY"
            value={inputDate}
            onChange={handleChange}
            open={open}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            disableTextInput={true}
            renderInput={params => (
              <TextField
                {...params}
                {...register('birthday')}
                value={inputDate}
                onKeyPress={handleKeyPress}
                onClick={() => {
                  setOpen(true);
                }}
                autoComplete="off"
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
        </LabelInputDate>

        <LabelInput htmlFor="petBreed">
          <LabelName>Breed</LabelName>
          <Auto
            disablePortal
            id="petBreed"
            value={inputBreed}
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
                top: -0.4,
                bottom: -1,
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
            onChange={handleInputChange}
            renderInput={params => (
              <TextField
                {...params}
                {...register('petBreed')}
                // value={inputBreed}
                placeholder="Type breed"
              />
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
