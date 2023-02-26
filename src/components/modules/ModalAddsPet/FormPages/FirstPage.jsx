import React from 'react';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';
import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
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
} from './FormPages.styled';

export const FirstPage = ({ nextStep, onClose }) => {
  const {
    register,
    trigger,
    formState: { errors },
    setValue,
    getValues,
  } = useFormContext();

  const [date, setDate] = useState(null);
  // const [open, setOpen] = useState(false);

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

  // const handleInputClick = () => {
  //   setOpen(true);
  // };

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
            // open={open}
            // onOpen={() => setOpen(true)}
            // onClose={() => setOpen(false)}
            // disableTextInput={true}
            onChange={handleChange}
            renderInput={params => (
              <TextField
                {...params}
                {...register('birthday')}
                // onClick={handleInputClick}
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
          {/* <Input
            {...register('petBirth')}
            id="petBirth"
            type="text"
            placeholder="Type date of birth"
            onfocus="(this.type='date')"
            onblur="(this.type='text')"
          /> */}
          {errors.petBirth && <ErrorInput>{errors.petBirth.message}</ErrorInput>}
          {errors.birthday && <ErrorInput>{errors.birthday.message}</ErrorInput>}
        </LabelInputDate>

        {/* <LabelInput htmlFor="petBreed">
          <LabelName>Breed</LabelName>
          <InputSelect
            disablePortal
            id="petBreed"
            options={dogBreeds}
            color="red"
            sx={{
              width: '100%',
              display: 'inline-block',
              marginTop: '12px',
              '&  .css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
                borderColor: 'transparent',
              },
              '& .css-md26zr-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline, & .css-154xyx0-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline ':
                {
                  border: '1px solid #f58138db',
                },
              '& .MuiInputBase-input.MuiOutlinedInput-input.MuiAutocomplete-input.MuiAutocomplete-inputFocused.css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input':
                {
                  p: '0px',
                },
              '& .MuiAutocomplete-inputRoot': {
                p: '11px 14px',
                fontSize: { xs: '14px', md: '16px' },
              },
              '&  .MuiAutocomplete-inputRoot': {
                bgcolor: '#FDF7F2',
                borderRadius: '40px',
                border: '1px solid #F5925680',
              },
              '& input': {
                '&::placeholder': { fontSize: { xs: '13.3px', md: '16px' }, color: '#11111199' },
              },
            }}
            freeSolo={true}
            renderInput={params => (
              <TextField
                {...params}
                {...register('petBreed')}
                placeholder="Type breed"
                sx={{ color: '#111111' }}
              />
            )}
          />
          {errors.petBreed && <ErrorInput>{errors.petBreed.message}</ErrorInput>}
        </LabelInput>
        </InputWrap> */}

        <LabelInput htmlFor="petBreed">
          <LabelName>Breed</LabelName>
          <Input {...register('petBreed')} id="petBreed" type="text" placeholder="Type breed" />
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
