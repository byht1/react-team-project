import React from 'react';
import { useFormContext } from 'react-hook-form';

import {
  Buttons,
  InputWrap,
  LabelInput,
  Input,
  LabelName,
  ErrorInput,
  ButtonDark,
  ButtonLight,
} from './FormPages.styled';

export const FirstPage = ({ nextStep, onClose }) => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useFormContext();

  const checkInput = async () => {
    const result = await trigger(['petName', 'petBirth', 'petBreed']);
    if (result) {
      nextStep();
    }
  };

  return (
    <>
      <InputWrap>
        <LabelInput htmlFor="petName">
          <LabelName>Name pet</LabelName>
          <Input {...register('petName')} id="petName" type="text" placeholder="Type name pet" />
          {errors.petName && <ErrorInput>{errors.petName.message}</ErrorInput>}
        </LabelInput>

        <LabelInput htmlFor="petBirth">
          <LabelName>Date of birth</LabelName>
          <Input
            {...register('petBirth')}
            id="petBirth"
            type="text"
            placeholder="Type date of birth"
            onfocus="(this.type='date')"
            onblur="(this.type='text')"
          />
          {errors.petBirth && <ErrorInput>{errors.petBirth.message}</ErrorInput>}
        </LabelInput>

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
