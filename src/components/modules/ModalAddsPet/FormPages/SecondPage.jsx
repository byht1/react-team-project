import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FileInput } from './FileInput';

import {
  Buttons,
  InputWrap,
  LabelInput,
  Subtitle,
  Textarea,
  LabelName,
  ButtonDark,
  ButtonLight,
  ErrorTextarea,
} from './FormPages.styled';

export const SecondPage = ({ prevStep }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <Subtitle>Add photo and some comments</Subtitle>
      <InputWrap>
        <FileInput name="myPetURL" />

        <LabelInput htmlFor="comments">
          <LabelName>Comments</LabelName>
          <Textarea {...register('comments')} name="comments" placeholder="Type comments" />
          {errors.comments && <ErrorTextarea>{errors.comments.message}</ErrorTextarea>}
        </LabelInput>
      </InputWrap>

      <Buttons>
        <ButtonDark type="submit">Done</ButtonDark>
        <ButtonLight onClick={prevStep}>Back</ButtonLight>
      </Buttons>
    </>
  );
};
