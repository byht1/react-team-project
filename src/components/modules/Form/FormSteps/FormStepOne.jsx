import { useFormContext } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Autocomplete, TextField } from '@mui/material';
import { dogBreeds } from '../helpers/dogBreeds';
import { Input } from 'components/global/FormInput/FormInput.styled';
import { Button } from 'components/global/button';
import { InputWrap, ButtonWrap, LabelInput, Text } from './FormStep.styled';

export const FormSellStepOne = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const navigate = useNavigate();
  return (
    <>
      <InputWrap>
        <LabelInput htmlFor="tittle">
          <Text>
            Tittle of ad
            <span>*</span>:
          </Text>
          <Input {...register('title')} placeholder="Type name" id="tittle" />
          {/* {errors.title && <p>{errors.title.message}</p>} */}{' '}
        </LabelInput>
        <LabelInput htmlFor="petName">
          <Text>Name pet:</Text>
          <Input {...register('name')} placeholder="Type name pet" id="petName" />
        </LabelInput>
        {/* {errors.name && <p>{errors.name.message}</p>} */}
        <LabelInput htmlFor="petBirth">
          <Text>Date of birth:</Text>
          <Input {...register('birthday')} placeholder="Type date of birth" id="petBirth" />
        </LabelInput>
        {/* {errors.birthday && <p>{errors.birthday.message}</p>} */}
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
                {...register('bread')}
                placeholder="Type breed"
                sx={{ color: '#111111' }}
              />
            )}
          />
        </LabelInput>
        {/* {errors.bread && <p>{errors.bread.message}</p>} */}
      </InputWrap>
      <ButtonWrap>
        <Button type="button" p="9px 55px" onClick={() => navigate('/')}>
          Cancel
        </Button>
        <Button theme="dark" p="9px 55px" type="button" onClick={() => navigate('/addpet/step2')}>
          Next
        </Button>
      </ButtonWrap>
    </>
  );
};
