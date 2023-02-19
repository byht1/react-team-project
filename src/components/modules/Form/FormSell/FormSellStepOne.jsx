import { useFormContext } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Text } from 'components/global/text';

import { InputWrap, ButtonWrap, TextTittle } from './FormSell.styled';
import { Autocomplete, TextField } from '@mui/material';
import { useEffect } from 'react';

export const FormSellStepOne = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  // useEffect(() => {
  //   const timerId = setTimeout(() => {
  //     const values = getValues();
  //     console.log(values);
  //   }, 100);
  //   return () => clearTimeout(timerId);
  // }, [getValues()]);

  const navigate = useNavigate();
  return (
    <>
      <TextTittle>Add pet</TextTittle>
      <Text>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur </Text>
      <InputWrap>
        <label htmlFor="tittle">Tittle of ad</label>
        <input {...register('tittle')} placeholder="Type name" id="tittle" />
        {errors.tittle && <p>{errors.tittle.message}</p>}
        <label htmlFor="petName">Name pet</label>
        <input {...register('petName')} placeholder="Type name pet" id="petName" />
        {errors.petName && <p>{errors.petName.message}</p>}
        <label htmlFor="petBirth">Date of birth</label>
        <input {...register('petBirth')} placeholder="Type date of birth" id="petBirth" />
        {errors.petBirth && <p>{errors.petBirth.message}</p>}
        <label htmlFor="petBreed">
          Breed
          <Autocomplete
            disablePortal
            id="petBreed"
            options={Breeds}
            sx={{ width: 300 }}
            freeSolo={true}
            renderInput={params => <TextField {...params} {...register('petBreed')} />}
          />
        </label>

        {errors.petBreed && <p>{errors.petBreed.message}</p>}
      </InputWrap>
      <ButtonWrap>
        <button type="button" onClick={() => navigate('/')}>
          Cancel
        </button>
        <button type="button" onClick={() => navigate('/addpet/step2')}>
          Next
        </button>
      </ButtonWrap>
    </>
  );
};

const Breeds = ['1', '3', '4'];
