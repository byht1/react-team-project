import { useFormContext } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Autocomplete } from '@mui/material';
import { IoCloseOutline } from 'react-icons/io5';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

import { dogBreeds } from './helpers/dogBreeds';
import useWindowDimensions from './helpers/getWidth';

import { Input } from 'components/global/FormInput/FormInput.styled';
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
} from './FormAddNotice.styled';
import { Calendar } from './helpers/Calendar';
export const FormStepOne = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState(null);

  const handleChange = newValue => {
    setValue(newValue);
  };
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <InputWrap>
        <LabelInput htmlFor="tittle">
          <CloseModalBtn id="modal-close" type="button" onClick={() => navigate('/')}>
            <IoCloseOutline id="close-svg" size={'28px'} />
          </CloseModalBtn>
          <Text>
            Tittle of ad
            <Accent>*</Accent>:
          </Text>
          <Input {...register('title')} placeholder="Type name" id="tittle" />
          {errors.title && <Error>{errors.title.message}</Error>}
        </LabelInput>
        <LabelInput htmlFor="petName">
          <Text>Name pet:</Text>
          <Input {...register('name')} placeholder="Type name pet" id="petName" />
          {errors.name && <Error>{errors.name.message}</Error>}
        </LabelInput>
        <LabelInput htmlFor="petBirth">
          <Text>Date of birth:</Text>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              {...register('calendar')}
              sx={{
                borderRadius: '40px',
                '&  .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'transparent',
                },

                '& MuiInputBase-root MuiOutlinedInput-root': { borderRadius: '40px' },
                '& .MuiInputBase-input': {
                  borderRadius: '40px',

                  '&::placeholder': {
                    fontSize: { xs: '14px', md: '16px' },
                    color: '#111111',
                    borderRadius: '40px',
                  },
                },
              }}
              inputFormat="DD.MM.YY"
              value={value}
              onChange={handleChange}
              renderInput={params => (
                <TextField
                  {...params}
                  {...register('calendar')}
                  sx={{
                    '&  .MuiOutlinedInput-notchedOutline': {
                      border: '1px solid #F5925680',
                      borderRadius: '40px',
                    },

                    '& .MuiInputBase-input': {
                      bgcolor: '#FDF7F2',
                      borderTopLeftRadius: '40px',
                      borderBottomLeftRadius: '40px',
                      padding: { xs: '10px 16px', md: '14px 32px' },
                      fontSize: { xs: '14px', md: '18px' },
                      fontFamily: 'Arial',
                      '&::placeholder': { fontSize: { xs: '14px', md: '18px' }, color: '#111111' },
                    },
                  }}
                />
              )}
            />
          </LocalizationProvider>
          {/* <Input {...register('birthday')} placeholder="Type date of birth" id="petBirth" /> */}
          {errors.birthday && <Error>{errors.birthday.message}</Error>}
        </LabelInput>
        <LabelInput htmlFor="petBreed">
          <Text>Breed:</Text>
          <Autocomplete
            disablePortal
            id="petBreed"
            options={dogBreeds}
            color="red"
            sx={{
              width: '100%',
              display: 'inline-block',
              '& .MuiOutlinedInput-root .MuiAutocomplete-input': {
                padding: { xs: '10px 16px', md: '14px 26px' },
              },
              '&  .MuiOutlinedInput-notchedOutline': {
                borderColor: 'transparent',
              },
              // '& .css-md26zr-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline, & .css-154xyx0-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline ':
              //   {
              //     border: '1px solid #f58138db',
              //   },
              '& .MuiAutocomplete-inputRoot': {
                p: '2px 10px',
                fontFamily: 'Arial',
                fontSize: { xs: '14px', md: '18px' },
              },
              '&  .MuiAutocomplete-inputRoot': {
                bgcolor: '#FDF7F2',
                borderRadius: '40px',
                border: '1px solid #F5925680',
              },
              '& input': {
                '&::placeholder': { fontSize: { xs: '14px', md: '18px' }, color: '#111111' },
              },
            }}
            freeSolo={true}
            renderInput={params => (
              <TextField
                {...params}
                {...register('breed')}
                placeholder="Type breed"
                sx={{
                  color: '#111111',
                  '& input': {
                    padding: { xs: '10px 16px', md: '14px 32px' },
                    '& .MuiAutocomplete-input': { padding: { xs: '10px 16px', md: '14px 32px' } },
                  },
                }}
              />
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
            onClick={() => navigate('/addpet/step2')}
          >
            Next
          </ButtonAhead>
          <ButtonBack type="button" onClick={() => navigate('/')}>
            Cancel
          </ButtonBack>
        </ButtonWrap>
      ) : (
        <ButtonWrap>
          <ButtonBack type="button" onClick={() => navigate('/')}>
            Cancel
          </ButtonBack>
          <ButtonAhead
            color="a"
            p="9px 55px"
            type="button"
            onClick={() => navigate('/addpet/step2')}
          >
            Next
          </ButtonAhead>
        </ButtonWrap>
      )}
    </>
  );
};
