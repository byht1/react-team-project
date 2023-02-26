import { useState, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { IoCloseOutline } from 'react-icons/io5';
import TextField from '@mui/material/TextField';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { Autocomplete } from '@mui/material';

import { dogBreeds } from './helpers/dogBreeds';
import useWindowDimensions from './helpers/getWidth';
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
  const navigate = useNavigate();

  const [date, setDate] = useState(null);

  const handleChange = newValue => {
    setDate(newValue);
  };

  const {
    register,
    formState: { errors },
    setValue,
    trigger,
  } = useFormContext();

  useEffect(() => {
    setValue('birthday', date);
  }, [date, setValue]);
  console.log(errors);

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
          {errors.birthday && <Error>Invalid date</Error>}
        </LabelInput>
        <LabelInput htmlFor="petBreed">
          <Text>Breed:</Text>
          <Autocomplete
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
                top: -2,
                bottom: -1.8,
                left: -2,
                right: -1.8,
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
            onClick={() => {
              trigger().then(isValid => {
                if (isValid) {
                  navigate('/addpet/step2');
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
