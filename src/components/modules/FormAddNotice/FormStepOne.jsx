import { useFormContext } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Autocomplete, TextField } from '@mui/material';
import { IoCloseOutline } from 'react-icons/io5';

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

export const FormStepOne = () => {
  const navigate = useNavigate();
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
          <Input {...register('birthday')} placeholder="Type date of birth" id="petBirth" />
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
              '&  .css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
                borderColor: 'transparent',
              },
              '& .css-md26zr-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline, & .css-154xyx0-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline ':
                {
                  border: '1px solid #f58138db',
                },
              '& .MuiAutocomplete-inputRoot': {
                p: '2px 10px',
                fontSize: { xs: '14px', md: '16px' },
              },
              '&  .MuiAutocomplete-inputRoot': {
                bgcolor: '#FDF7F2',
                borderRadius: '40px',
                border: '1px solid #F5925680',
              },
              '& input': {
                '&::placeholder': { fontSize: { xs: '13.3px', md: '16px' }, color: '#111111' },
              },
            }}
            freeSolo={true}
            renderInput={params => (
              <TextField
                {...params}
                {...register('breed')}
                placeholder="Type breed"
                sx={{ color: '#111111' }}
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
