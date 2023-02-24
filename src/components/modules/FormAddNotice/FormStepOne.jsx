import { useFormContext } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Autocomplete } from '@mui/material';
import { IoCloseOutline } from 'react-icons/io5';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { useEffect } from 'react';
import { dogBreeds } from './helpers/dogBreeds';
import useWindowDimensions from './helpers/getWidth';
import { useForm } from 'react-hook-form';
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
  const [date, setDate] = useState(null);
  const handleChange = newValue => {
    setDate(newValue);
  };

  const {
    register,
    formState: { errors },
    setValue,
  } = useFormContext();
  useEffect(() => {
    setValue('calendar', date);
  }, [date]);

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
          <DesktopDatePicker
            {...register('calendar')}
            inputFormat="DD.MM.YY"
            value={date}
            onChange={handleChange}
            renderInput={params => (
              <TextField
                {...params}
                {...register('calendar')}
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
          {errors.birthday && <Error>{errors.birthday.message}</Error>}
        </LabelInput>
        <LabelInput htmlFor="petBreed">
          <Text>Breed:</Text>
          <Autocomplete
            disablePortal
            id="petBreed"
            options={dogBreeds}
            sx={{
              // border: '6px solid #f58138db',

              width: '100%',
              display: 'inline-block',
              '& .MuiOutlinedInput-root .MuiAutocomplete-input': {
                padding: { xs: '1px 6px', md: '4px 20px' },
              },
              '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                border: '20px solid #f58138db',
                position: 'absolute',
                top: -2.1,
                bottom: -2.1,
                left: -1.8,
                right: -2.1,
              },
              '&  .MuiAutocomplete-inputRoot': {
                bgcolor: '#FDF7F2',
                borderRadius: '40px',
                border: '1px solid #F5925680',
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderRadius: '40px',
                // border: '8px solid red',
                // backgroundColor: 'red',
                // outline: '2px solid red',
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
            onClick={() => navigate('/addpet/step2')}
          >
            Next
          </ButtonAhead>
        </ButtonWrap>
      )}
    </>
  );
};
